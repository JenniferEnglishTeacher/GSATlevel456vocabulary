// Topic 325 Quiz Data: Relax 放鬆
// Source word list: https://www.examword.com/group-topic/relax — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T325 - Relax 放鬆",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "relaxed",
    "pos": "adj.",
    "cn_def": "放鬆的；悠閒的",
    "en_def": "calm and not worried",
    "sentence": "A: You seemed very nervous before the job interview yesterday, so how did you feel once you were actually sitting in front of the hiring manager? B: I felt surprisingly {{BLANK}} after the first few questions, because the manager was friendly, the office was quiet, and I had practiced my answers with my roommate the night before.",
    "cn": "A：你昨天面試前看起來很緊張，那你真正坐在招聘經理面前時感覺如何？ B：在最初幾個問題之後，我感到出乎意料地【放鬆】，因為經理很友善、辦公室很安靜，而且我前一晚已經和室友練習過答案了。"
  },
  {
    "word": "relaxing",
    "pos": "adj.",
    "cn_def": "令人放鬆的",
    "en_def": "making you feel calm and comfortable",
    "sentence": "A: Our team has been working overtime on the annual report for three weeks, so where should we hold the staff dinner next Friday evening? B: Let's book the small Italian restaurant near the river, because it has soft music, warm lighting, and a {{BLANK}} atmosphere that will help everyone forget about deadlines for a while.",
    "cn": "A：我們團隊為了年度報告已經加班三個星期了，所以下週五晚上的員工聚餐要辦在哪裡？ B：我們訂河邊那家小義大利餐廳吧，因為那裡有輕柔的音樂、溫暖的燈光，還有【令人放鬆的】氣氛，能讓大家暫時忘掉截止期限。"
  },
  {
    "word": "relaxation",
    "pos": "n.",
    "cn_def": "放鬆；休閒",
    "en_def": "the state of resting and feeling calm",
    "sentence": "A: The new hotel brochure looks great, but what should we say about the spa on the top floor for business travelers who stay with us? B: We should explain that guests can book a massage, use the sauna, and enjoy some quiet {{BLANK}} after long meetings, because many travelers want a peaceful place to rest before their flights.",
    "cn": "A：新的飯店簡介看起來很棒，但對於入住的商務旅客，我們該怎麼介紹頂樓的水療中心？ B：我們應該說明房客可以預約按摩、使用三溫暖，並在漫長的會議後享受一些安靜的【放鬆時光】，因為很多旅客在搭機前都想要一個平靜的地方休息。"
  },
  {
    "word": "rest",
    "pos": "n.",
    "cn_def": "休息",
    "en_def": "a time when you stop working and relax",
    "sentence": "A: You have been answering customer emails since seven o'clock this morning, and you still look tired, so why don't you take a short break? B: You're right, I really need a {{BLANK}}, so I will go to the coffee shop downstairs for fifteen minutes and then finish the last few replies before lunch.",
    "cn": "A：你從早上七點就一直在回覆客戶的電子郵件，看起來還是很累，何不稍微休息一下？ B：你說得對，我真的需要【休息】一下，所以我要去樓下的咖啡店待十五分鐘，然後在午餐前完成最後幾封回信。"
  },
  {
    "word": "restful",
    "pos": "adj.",
    "cn_def": "寧靜的；使人得到休息的",
    "en_def": "quiet and helping you to rest",
    "sentence": "A: How was your weekend at the mountain cabin that the human resources department recommended to employees who feel stressed? B: It was very {{BLANK}}, because there was no internet, the only sounds were birds and wind, and I slept nine hours every night before going hiking with my sister in the morning.",
    "cn": "A：人資部推薦給壓力大的員工的那間山中小屋，你週末去住得如何？ B：非常【寧靜舒適】，因為那裡沒有網路，唯一的聲音是鳥叫和風聲，而且我每晚都睡了九個小時，早上再和妹妹去健行。"
  },
  {
    "word": "unwind",
    "pos": "v.",
    "cn_def": "放鬆；解除緊張",
    "en_def": "to relax after work or stress",
    "sentence": "A: After a long day of meetings with suppliers and checking delivery schedules, what do you usually do when you get home in the evening? B: I usually {{BLANK}} by cooking a simple dinner, listening to jazz, and reading a novel for an hour, because it helps me stop thinking about work before I go to bed.",
    "cn": "A：在和供應商開了一整天會又檢查交貨時程之後，你晚上回到家通常做什麼？ B：我通常會煮一頓簡單的晚餐、聽爵士樂、看一小時小說來【放鬆】，因為這能幫助我在睡前不再想工作的事。"
  },
  {
    "word": "calm",
    "pos": "adj.",
    "cn_def": "冷靜的；平靜的",
    "en_def": "not angry, worried, or excited",
    "sentence": "A: The customer on the phone was shouting about his missing package for ten minutes, so how did you handle the situation so well? B: I stayed {{BLANK}}, spoke slowly, and promised to track the order immediately, because getting upset would only make him angrier and the problem would take longer to solve.",
    "cn": "A：電話裡那位客戶為了遺失的包裹大吼了十分鐘，你是怎麼把情況處理得這麼好的？ B：我保持【冷靜】、說話放慢，並承諾立即追蹤訂單，因為生氣只會讓他更火大，問題也會拖得更久才能解決。"
  },
  {
    "word": "peaceful",
    "pos": "adj.",
    "cn_def": "寧靜的；和平的",
    "en_def": "quiet and calm, without noise or fighting",
    "sentence": "A: Our company is planning a two-day retreat for the managers next month, so do you know a good location outside the city? B: There is a small resort by the lake about an hour away, and it is very {{BLANK}} because there are no busy roads nearby, so the managers can think clearly and talk about future plans.",
    "cn": "A：我們公司下個月要為經理們規劃兩天的靜修活動，你知道市區外有什麼好地點嗎？ B：大約一小時車程外有一間湖邊的小度假村，那裡非常【寧靜】，因為附近沒有繁忙的道路，所以經理們能清楚思考並討論未來的計畫。"
  },
  {
    "word": "peace",
    "pos": "n.",
    "cn_def": "平靜；安寧",
    "en_def": "a calm and quiet state",
    "sentence": "A: Why did you decide to move your desk from the open office to the small room at the end of the hallway last week? B: I needed some {{BLANK}} and quiet to finish the financial report, because people kept stopping by my desk to chat, and the phones near the reception area rang all day long.",
    "cn": "A：你上週為什麼決定把辦公桌從開放式辦公室搬到走廊盡頭的小房間？ B：我需要一些【安寧】與安靜來完成財務報告，因為一直有人到我桌邊聊天，而且接待區附近的電話整天響個不停。"
  },
  {
    "word": "soothe",
    "pos": "v.",
    "cn_def": "安撫；舒緩",
    "en_def": "to make someone calm or make pain less",
    "sentence": "A: The passengers on the delayed flight are getting angry at the gate, so what can the airline staff do while the mechanics check the engine? B: The staff can {{BLANK}} the passengers by offering free drinks and snacks, explaining the situation honestly, and helping anyone who needs to change a connecting flight.",
    "cn": "A：延誤班機的乘客在登機門越來越生氣了，在技師檢查引擎的時候，航空公司人員能做些什麼？ B：工作人員可以藉由提供免費飲料和點心、誠實說明狀況，並協助需要更改轉機航班的人，來【安撫】乘客。"
  },
  {
    "word": "soothing",
    "pos": "adj.",
    "cn_def": "使人平靜的；舒緩的",
    "en_def": "making you feel calm or less pain",
    "sentence": "A: Patients in the dental clinic's waiting room often look nervous, so is there anything simple we can change to make them feel better? B: We could play some {{BLANK}} music, add a few green plants, and offer herbal tea, because a calm waiting area can make the treatment feel less frightening for many patients.",
    "cn": "A：牙醫診所候診室裡的病人常常看起來很緊張，有什麼簡單的改變能讓他們感覺好一點嗎？ B：我們可以播放一些【舒緩的】音樂、增加幾盆綠色植物，並提供花草茶，因為平靜的候診區能讓許多病人覺得治療沒那麼可怕。"
  },
  {
    "word": "comfort",
    "pos": "n.",
    "cn_def": "舒適",
    "en_def": "a pleasant feeling of being relaxed and free from pain",
    "sentence": "A: The furniture company wants us to design a new office chair, so what should be our main goal for the people who sit at desks all day? B: Our main goal should be {{BLANK}}, so the chair needs soft padding, good back support, and adjustable arms, because workers who feel good at their desks are usually more productive.",
    "cn": "A：家具公司要我們設計一款新辦公椅，對於整天坐在辦公桌前的人來說，我們的主要目標應該是什麼？ B：我們的主要目標應該是【舒適】，所以椅子需要柔軟的襯墊、良好的背部支撐和可調整的扶手，因為在座位上感覺舒服的員工通常效率更高。"
  },
  {
    "word": "comfortable",
    "pos": "adj.",
    "cn_def": "舒服的；舒適的",
    "en_def": "making you feel physically relaxed",
    "sentence": "A: You have a twelve-hour flight to London for the trade show next week, so what are you going to wear on the plane? B: I'll wear loose, {{BLANK}} clothes and soft shoes, and then I will change into my business suit at the hotel before I meet our European partners at the exhibition hall.",
    "cn": "A：你下週要搭十二小時的飛機去倫敦參加貿易展，你在飛機上打算穿什麼？ B：我會穿寬鬆、【舒服的】衣服和軟鞋，然後在飯店換上西裝，再去展覽館和我們的歐洲合作夥伴見面。"
  },
  {
    "word": "cozy",
    "pos": "adj.",
    "cn_def": "溫暖舒適的；溫馨的",
    "en_def": "warm, comfortable, and pleasant",
    "sentence": "A: The new employee lounge on the third floor is finally finished, so what do you think of the way the designers decorated it? B: It feels warm and {{BLANK}}, with thick carpets, soft sofas, and small lamps in every corner, so I think many people will spend their lunch break there this winter.",
    "cn": "A：三樓的新員工休息室終於完工了，你覺得設計師們的裝潢怎麼樣？ B：感覺溫暖又【舒適】，有厚地毯、柔軟的沙發，每個角落都有小檯燈，所以我想今年冬天會有很多人在那裡度過午休時間。"
  },
  {
    "word": "ease",
    "pos": "v.",
    "cn_def": "減輕；緩和",
    "en_def": "to make pain or a problem less serious",
    "sentence": "A: Many workers in the shipping department say that their backs hurt after lifting heavy boxes all day, so what should management do? B: Management should buy lifting machines and give workers more short breaks, because these changes will {{BLANK}} the pain and reduce the number of sick days taken by the staff.",
    "cn": "A：運輸部很多員工說整天搬重箱子後背會痛，管理層應該怎麼做？ B：管理層應該購買搬運機器並給員工更多短暫休息時間，因為這些改變能【減輕】疼痛，並減少員工請病假的天數。"
  },
  {
    "word": "breathe",
    "pos": "v.",
    "cn_def": "呼吸",
    "en_def": "to take air into your body and let it out",
    "sentence": "A: I get so nervous every time I have to give a presentation to the board of directors, so do you have any advice for me? B: Before you start speaking, stand still for a moment and {{BLANK}} slowly and deeply three times, because it will calm your heart and help you remember your main points.",
    "cn": "A：每次要向董事會做簡報我都非常緊張，你有什麼建議嗎？ B：在你開口之前，先靜止站一下，緩慢地深【呼吸】三次，因為這能讓你的心跳平穩下來，並幫助你記住重點。"
  },
  {
    "word": "meditate",
    "pos": "v.",
    "cn_def": "冥想；靜坐",
    "en_def": "to sit quietly and calm your mind",
    "sentence": "A: You always seem so focused and patient during our busy Monday meetings, so what is your secret for staying positive at work? B: I {{BLANK}} for twenty minutes every morning before breakfast, sitting quietly and paying attention to my breathing, so I start each day with a clear mind and fewer worries.",
    "cn": "A：在忙碌的週一會議中你總是那麼專注又有耐心，你在工作中保持正向的秘訣是什麼？ B：我每天早上在早餐前會【冥想】二十分鐘，安靜地坐著並專注於呼吸，所以每天一開始我的頭腦都很清楚，煩惱也比較少。"
  },
  {
    "word": "meditation",
    "pos": "n.",
    "cn_def": "冥想",
    "en_def": "the practice of sitting quietly to calm the mind",
    "sentence": "A: The human resources department is planning new wellness activities for employees, so which one do you think would be the most popular? B: I think a weekly {{BLANK}} class in the training room would be popular, because many employees feel stressed and want to learn simple ways to quiet their minds during busy weeks.",
    "cn": "A：人資部正在為員工規劃新的健康活動，你覺得哪一項會最受歡迎？ B：我認為在訓練教室每週開一堂【冥想】課會很受歡迎，因為許多員工壓力很大，想學習在忙碌的週間讓心靜下來的簡單方法。"
  },
  {
    "word": "refresh",
    "pos": "v.",
    "cn_def": "使恢復精神；使清爽",
    "en_def": "to make someone feel less tired",
    "sentence": "A: We still have three hours of training left this afternoon, and everyone in the room looks sleepy after the big lunch, so what should we do? B: Let's take a ten-minute break so people can walk outside, drink some cold water, and {{BLANK}} themselves before we start the next session about customer service.",
    "cn": "A：今天下午還剩三小時的訓練，吃完豐盛的午餐後教室裡每個人看起來都很睏，我們該怎麼辦？ B：我們休息十分鐘，讓大家可以到外面走走、喝點冷水、【恢復精神】，然後再開始下一堂關於客戶服務的課程。"
  },
  {
    "word": "refreshed",
    "pos": "adj.",
    "cn_def": "精神恢復的；神清氣爽的",
    "en_def": "feeling full of energy again after resting",
    "sentence": "A: You look much happier today than you did last Friday, when you were complaining about the sales targets, so what happened? B: I spent the whole weekend at the beach with my family, so I came back to the office feeling {{BLANK}} and ready to call all the new clients on my list.",
    "cn": "A：你今天看起來比上週五抱怨銷售目標時開心多了，發生什麼事了？ B：我整個週末都和家人在海邊度過，所以回到辦公室時覺得【精神煥發】，準備好打電話給名單上所有的新客戶。"
  },
  {
    "word": "leisure",
    "pos": "n.",
    "cn_def": "閒暇；休閒",
    "en_def": "free time when you are not working",
    "sentence": "A: The survey shows that our employees work long hours, so what do they say they want most from the company this year? B: Most of them want more {{BLANK}} time to spend with their families, so many people asked for flexible schedules and the chance to work from home on Fridays.",
    "cn": "A：調查顯示我們的員工工時很長，他們說今年最希望公司提供什麼？ B：大部分人希望有更多【閒暇】時間陪伴家人，所以很多人要求彈性工時，以及週五在家工作的機會。"
  },
  {
    "word": "leisurely",
    "pos": "adj.",
    "cn_def": "從容的；悠閒的",
    "en_def": "done slowly and in a relaxed way",
    "sentence": "A: Since the conference ends at noon on Saturday, what are you planning to do with the rest of the day before your flight home? B: I plan to have a {{BLANK}} lunch at a seaside restaurant, walk slowly through the old market, and buy some local snacks for my coworkers back at the office.",
    "cn": "A：既然研討會週六中午就結束了，在搭機回家前剩下的時間你打算做什麼？ B：我打算在海邊餐廳吃一頓【悠閒的】午餐、慢慢逛逛老市場，再幫辦公室的同事買些當地點心。"
  },
  {
    "word": "chill",
    "pos": "v.",
    "cn_def": "（口語）放鬆；休息",
    "en_def": "(informal) to relax and do nothing special",
    "sentence": "A: You worked on the product launch every night this week, so are you going to do anything special this weekend with your friends? B: Not really, I just want to stay home, order some pizza, and {{BLANK}} on the sofa with a few movies, because I am too tired to go anywhere crowded or noisy.",
    "cn": "A：你這週每天晚上都在忙產品發表會，這個週末要和朋友做什麼特別的事嗎？ B：其實沒有，我只想待在家、叫個披薩，然後在沙發上看幾部電影【放鬆一下】，因為我太累了，不想去任何擁擠或吵鬧的地方。"
  },
  {
    "word": "recharge",
    "pos": "v.",
    "cn_def": "恢復精力；充電",
    "en_def": "to get back your energy by resting",
    "sentence": "A: Why did the manager tell everyone to take at least one week of vacation after the big project ended last month? B: She knows the team worked very hard for six months, so she wants everyone to rest, travel, and {{BLANK}} their batteries before the next project begins in January.",
    "cn": "A：上個月大專案結束後，經理為什麼要每個人都至少休一週假？ B：她知道團隊辛苦工作了六個月，所以希望大家好好休息、去旅行、【養精蓄銳】，再迎接一月開始的下一個專案。"
  },
  {
    "word": "nap",
    "pos": "n.",
    "cn_def": "小睡；午睡",
    "en_def": "a short sleep during the day",
    "sentence": "A: You look much more awake than you did at the morning meeting, so did you drink another cup of coffee during the lunch break? B: No, I took a short {{BLANK}} in my car for twenty minutes after lunch, and now I feel ready to finish checking the sales figures before the deadline at five.",
    "cn": "A：你看起來比早上開會時清醒多了，你午休時又喝了一杯咖啡嗎？ B：沒有，我午餐後在車上【小睡】了二十分鐘，現在覺得已經準備好在五點截止前把銷售數字核對完。"
  },
  {
    "word": "stress-free",
    "pos": "adj.",
    "cn_def": "無壓力的；輕鬆的",
    "en_def": "without worry or pressure",
    "sentence": "A: Our customers often complain that booking a hotel on our website is confusing, so how can we improve the experience for them? B: We should make the booking process simple and {{BLANK}} by reducing the number of steps, showing prices clearly, and offering live chat help for anyone who has questions.",
    "cn": "A：客戶常抱怨在我們網站上訂飯店很複雜，我們要怎麼改善他們的體驗？ B：我們應該減少步驟、清楚顯示價格，並為有問題的人提供線上即時客服，讓訂房流程簡單又【無壓力】。"
  },
  {
    "word": "tension",
    "pos": "n.",
    "cn_def": "緊張；緊張關係",
    "en_def": "a nervous or unfriendly feeling between people",
    "sentence": "A: The two department heads argued loudly during yesterday's budget meeting, so how is the atmosphere in the office this morning? B: There is still a lot of {{BLANK}} between the two teams, so the director has asked both managers to have lunch together and talk about their disagreement calmly.",
    "cn": "A：兩位部門主管在昨天的預算會議上大聲爭執，今天早上辦公室的氣氛怎麼樣？ B：兩個團隊之間仍然有很多【緊張氣氛】，所以處長已經請兩位經理一起吃午餐，冷靜地討論他們的分歧。"
  },
  {
    "word": "loosen",
    "pos": "v.",
    "cn_def": "鬆開；放鬆",
    "en_def": "to make something less tight",
    "sentence": "A: The new sales assistant looks very uncomfortable in his tight suit and tie during this hot summer afternoon, so should I say something to him? B: Yes, tell him he can {{BLANK}} his tie and take off his jacket, because we don't have any client meetings today and the air conditioner is broken again.",
    "cn": "A：在這個炎熱的夏日午後，新來的業務助理穿著緊身西裝打著領帶，看起來很不舒服，我該跟他說些什麼嗎？ B：好，告訴他可以【鬆開】領帶、脫下外套，因為我們今天沒有任何客戶會議，而且冷氣又壞了。"
  },
  {
    "word": "tranquil",
    "pos": "adj.",
    "cn_def": "寧靜的；平靜的",
    "en_def": "very quiet and calm",
    "sentence": "A: Our travel company wants to create a new tour package for busy office workers from the city, so what kind of place should we choose? B: We should choose a {{BLANK}} village in the mountains with hot springs and tea farms, because city workers want to escape the noise and crowds for a few days.",
    "cn": "A：我們旅行社想為城市裡忙碌的上班族推出新的旅遊行程，應該選擇什麼樣的地點？ B：我們應該選擇山中一個有溫泉和茶園的【寧靜】村莊，因為城市上班族想逃離噪音和人潮幾天。"
  },
  {
    "word": "serene",
    "pos": "adj.",
    "cn_def": "安詳的；寧靜的",
    "en_def": "calm, peaceful, and untroubled",
    "sentence": "A: The architect showed us the design for the new hospital garden this morning, so what did you think about her ideas for the patients? B: I thought the garden looked {{BLANK}}, with a small pond, shady trees, and quiet benches, so patients and their families can sit outside and feel calm while they wait.",
    "cn": "A：建築師今天早上給我們看了新醫院花園的設計，你覺得她為病人設計的構想如何？ B：我覺得花園看起來很【安詳寧靜】，有小池塘、遮蔭的樹木和安靜的長椅，所以病人和家屬在等待時能坐在戶外、感到平靜。"
  },
  {
    "word": "slow down",
    "pos": "v.phr.",
    "cn_def": "放慢腳步；減速",
    "en_def": "to work or live less quickly and busily",
    "sentence": "A: My doctor told me that I have been working too hard and sleeping too little since I became the new store manager, so what should I do? B: You should {{BLANK}} a little, give more tasks to your assistant managers, and leave the store on time at least three days a week so you can rest properly.",
    "cn": "A：我的醫生說自從我當上新店長後就工作太拚、睡得太少，我該怎麼辦？ B：你應該稍微【放慢腳步】，把更多工作交給副店長，並且每週至少三天準時下班，好好休息。"
  }
];

const MCQS = [
  {
    "q": "The new manager has a very _____ attitude toward the dress code. Employees may now wear jeans on any day of the week.",
    "options": [
      "relaxed",
      "soothing",
      "tranquil",
      "cozy"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "After the busy trade show, the sales team spent a _____ weekend at a hot spring hotel. Everyone returned to work in a good mood.",
    "options": [
      "refreshed",
      "relaxing",
      "anxious",
      "nervous"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The hotel offers yoga classes and massages for guests who need rest and _____. These services are free for members of our loyalty program.",
    "options": [
      "tension",
      "nap",
      "relaxation",
      "fatigue"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The doctor told the injured warehouse worker to get plenty of _____ at home. He should not lift heavy boxes for at least two weeks.",
    "options": [
      "tension",
      "nap",
      "ease",
      "rest"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Guests praised the hotel's thick curtains and quiet rooms. Many reviews said they enjoyed a _____ night's sleep after long business trips.",
    "options": [
      "tense",
      "leisurely",
      "restful",
      "stressful"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Many employees like to _____ after work by jogging in the park. Exercise helps them forget about the problems of the day.",
    "options": [
      "unwind",
      "breathe",
      "loosen",
      "soothe"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Please remain _____ if the fire alarm sounds during the training session. Staff members will guide everyone to the nearest exit.",
    "options": [
      "cozy",
      "leisurely",
      "refreshed",
      "calm"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The protest outside the factory was completely _____, and nobody was hurt. The police said the workers behaved very responsibly.",
    "options": [
      "comfortable",
      "peaceful",
      "cozy",
      "restful"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Our new noise-canceling headphones give travelers some _____ and quiet on busy trains. They are on sale this month for forty dollars.",
    "options": [
      "peace",
      "tension",
      "nap",
      "meditation"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The pharmacist recommended a cream to _____ the itchy skin on my arms. I should apply it twice a day after washing.",
    "options": [
      "breathe",
      "soothe",
      "unwind",
      "recharge"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The spa uses lavender oil because its _____ smell helps customers fall asleep during massages. Many visitors buy a bottle before they leave.",
    "options": [
      "tense",
      "leisurely",
      "soothing",
      "punctual"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The new seats on our airline's long flights are designed for passenger _____. They are wider and can lean back much further than before.",
    "options": [
      "tension",
      "meditation",
      "nap",
      "comfort"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Please wear _____ shoes to the factory tour on Thursday. Visitors will walk for about two hours on hard concrete floors.",
    "options": [
      "tranquil",
      "serene",
      "comfortable",
      "leisurely"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The café near our office has soft chairs and a warm fireplace. Its _____ atmosphere makes it a popular place for small client meetings.",
    "options": [
      "cozy",
      "tense",
      "punctual",
      "refreshed"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The city plans to build a new subway line to _____ traffic problems downtown. Construction will begin early next year and take five years.",
    "options": [
      "breathe",
      "meditate",
      "unwind",
      "ease"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The new air filters allow workers in the paint shop to _____ more easily. Management installed them after several employees complained about headaches.",
    "options": [
      "soothe",
      "breathe",
      "loosen",
      "recharge"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Our yoga instructor teaches students to sit quietly and _____ for ten minutes. This practice helps them focus better at work afterward.",
    "options": [
      "meditate",
      "loosen",
      "soothe",
      "tighten"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The company now offers free _____ classes every Wednesday at lunchtime. Employees can learn breathing exercises that reduce stress.",
    "options": [
      "tension",
      "meditation",
      "nap",
      "peace"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "A short walk outside can _____ your mind after hours of looking at a computer screen. Try it during your next coffee break.",
    "options": [
      "breathe",
      "meditate",
      "refresh",
      "nap"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "After two weeks of vacation in Hawaii, the director returned to work feeling _____ and full of energy. She immediately started planning the new campaign.",
    "options": [
      "tense",
      "exhausted",
      "nervous",
      "refreshed"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The new shopping mall includes a cinema, a gym, and other _____ facilities. It is expected to attract many families on weekends.",
    "options": [
      "tension",
      "nap",
      "leisure",
      "peace"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Since the meeting was canceled, the visiting clients took a _____ walk along the river. They stopped at several small shops to buy souvenirs.",
    "options": [
      "leisurely",
      "tense",
      "punctual",
      "stressful"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Taking a long weekend away from the office is a good way to _____ your batteries. Many managers say they return with fresh ideas.",
    "options": [
      "breathe",
      "soothe",
      "loosen",
      "recharge"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Some technology companies now provide quiet rooms where staff can take a short _____ in the afternoon. Studies show this can improve productivity.",
    "options": [
      "tension",
      "nap",
      "leisure",
      "comfort"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Our moving company handles all the packing and lifting for you. We make relocating to a new office simple and completely _____.",
    "options": [
      "stress-free",
      "tense",
      "nervous",
      "exhausting"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Regular team lunches can help reduce _____ between departments. People who know each other well usually solve problems more easily.",
    "options": [
      "comfort",
      "tension",
      "leisure",
      "meditation"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Before you remove the old tire, use this tool to _____ the bolts. Turn each one slowly to the left until it comes off.",
    "options": [
      "breathe",
      "meditate",
      "loosen",
      "soothe"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The resort is located in a _____ valley far from busy highways. Guests can hear only birds and the sound of the river.",
    "options": [
      "crowded",
      "noisy",
      "tense",
      "tranquil"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Despite the difficult questions from reporters, the CEO kept a _____ smile throughout the press conference. Her confidence impressed many investors.",
    "options": [
      "spacious",
      "leisurely",
      "serene",
      "punctual"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Drivers must _____ near the school between seven and eight in the morning. Police officers will fine anyone who drives too fast there.",
    "options": [
      "slow down",
      "take off",
      "set up",
      "give up"
    ],
    "answer": 0,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "relaxed": {
    "pos": "adj.",
    "en_def": "calm and not worried",
    "cn_def": "放鬆的；悠閒的"
  },
  "relaxing": {
    "pos": "adj.",
    "en_def": "making you feel calm and comfortable",
    "cn_def": "令人放鬆的"
  },
  "relaxation": {
    "pos": "n.",
    "en_def": "the state of resting and feeling calm",
    "cn_def": "放鬆；休閒"
  },
  "rest": {
    "pos": "n.",
    "en_def": "a time when you stop working and relax",
    "cn_def": "休息"
  },
  "restful": {
    "pos": "adj.",
    "en_def": "quiet and helping you to rest",
    "cn_def": "寧靜的；使人得到休息的"
  },
  "unwind": {
    "pos": "v.",
    "en_def": "to relax after work or stress",
    "cn_def": "放鬆；解除緊張"
  },
  "calm": {
    "pos": "adj.",
    "en_def": "not angry, worried, or excited",
    "cn_def": "冷靜的；平靜的"
  },
  "peaceful": {
    "pos": "adj.",
    "en_def": "quiet and calm, without noise or fighting",
    "cn_def": "寧靜的；和平的"
  },
  "peace": {
    "pos": "n.",
    "en_def": "a calm and quiet state",
    "cn_def": "平靜；安寧"
  },
  "soothe": {
    "pos": "v.",
    "en_def": "to make someone calm or make pain less",
    "cn_def": "安撫；舒緩"
  },
  "soothing": {
    "pos": "adj.",
    "en_def": "making you feel calm or less pain",
    "cn_def": "使人平靜的；舒緩的"
  },
  "comfort": {
    "pos": "n.",
    "en_def": "a pleasant feeling of being relaxed and free from pain",
    "cn_def": "舒適"
  },
  "comfortable": {
    "pos": "adj.",
    "en_def": "making you feel physically relaxed",
    "cn_def": "舒服的；舒適的"
  },
  "cozy": {
    "pos": "adj.",
    "en_def": "warm, comfortable, and pleasant",
    "cn_def": "溫暖舒適的；溫馨的"
  },
  "ease": {
    "pos": "v.",
    "en_def": "to make pain or a problem less serious",
    "cn_def": "減輕；緩和"
  },
  "breathe": {
    "pos": "v.",
    "en_def": "to take air into your body and let it out",
    "cn_def": "呼吸"
  },
  "meditate": {
    "pos": "v.",
    "en_def": "to sit quietly and calm your mind",
    "cn_def": "冥想；靜坐"
  },
  "meditation": {
    "pos": "n.",
    "en_def": "the practice of sitting quietly to calm the mind",
    "cn_def": "冥想"
  },
  "refresh": {
    "pos": "v.",
    "en_def": "to make someone feel less tired",
    "cn_def": "使恢復精神；使清爽"
  },
  "refreshed": {
    "pos": "adj.",
    "en_def": "feeling full of energy again after resting",
    "cn_def": "精神恢復的；神清氣爽的"
  },
  "leisure": {
    "pos": "n.",
    "en_def": "free time when you are not working",
    "cn_def": "閒暇；休閒"
  },
  "leisurely": {
    "pos": "adj.",
    "en_def": "done slowly and in a relaxed way",
    "cn_def": "從容的；悠閒的"
  },
  "chill": {
    "pos": "v.",
    "en_def": "(informal) to relax and do nothing special",
    "cn_def": "（口語）放鬆；休息"
  },
  "recharge": {
    "pos": "v.",
    "en_def": "to get back your energy by resting",
    "cn_def": "恢復精力；充電"
  },
  "nap": {
    "pos": "n.",
    "en_def": "a short sleep during the day",
    "cn_def": "小睡；午睡"
  },
  "stress-free": {
    "pos": "adj.",
    "en_def": "without worry or pressure",
    "cn_def": "無壓力的；輕鬆的"
  },
  "tension": {
    "pos": "n.",
    "en_def": "a nervous or unfriendly feeling between people",
    "cn_def": "緊張；緊張關係"
  },
  "loosen": {
    "pos": "v.",
    "en_def": "to make something less tight",
    "cn_def": "鬆開；放鬆"
  },
  "tranquil": {
    "pos": "adj.",
    "en_def": "very quiet and calm",
    "cn_def": "寧靜的；平靜的"
  },
  "serene": {
    "pos": "adj.",
    "en_def": "calm, peaceful, and untroubled",
    "cn_def": "安詳的；寧靜的"
  },
  "slow down": {
    "pos": "v.phr.",
    "en_def": "to work or live less quickly and busily",
    "cn_def": "放慢腳步；減速"
  }
};

const EXTRA_GLOSSES = {};
