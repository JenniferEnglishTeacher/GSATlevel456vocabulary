// Topic 133 Quiz Data: Family 家庭
// Source word list: https://www.examword.com/group-topic/family — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T133 - Family 家庭",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "parent",
    "pos": "n.",
    "cn_def": "父親或母親；家長",
    "en_def": "a mother or a father",
    "sentence": "A: Why is the new receptionist leaving the office at four o'clock every day this month, even when the lobby is still busy with visitors? B: She is a single {{BLANK}} of two young kids, so the manager agreed she could pick them up from school and finish her reports online at night.",
    "cn": "A：為什麼新來的接待員這個月每天四點就離開辦公室，即使大廳還有很多訪客？ B：她是兩個小孩的單親【家長】，所以經理同意她去學校接孩子，晚上再在線上完成報告。"
  },
  {
    "word": "father",
    "pos": "n.",
    "cn_def": "父親；爸爸",
    "en_def": "a male parent",
    "sentence": "A: Is Mr. Chen taking a few days off next week, because I need him to sign the new supplier contract before Friday? B: Yes, he just became a {{BLANK}} for the first time last night, so he is on paternity leave, but his assistant can send the contract to his email.",
    "cn": "A：陳先生下週要請幾天假嗎？因為我需要他在星期五前簽新的供應商合約。 B：是的，他昨晚第一次當【父親】，所以正在請陪產假，不過他的助理可以把合約寄到他的電子信箱。"
  },
  {
    "word": "mother",
    "pos": "n.",
    "cn_def": "母親；媽媽",
    "en_def": "a female parent",
    "sentence": "A: Why did the marketing team change the date of the company picnic from Saturday to the following weekend? B: Our team leader's {{BLANK}} is coming from Kaohsiung to visit her for a few days, and she didn't want to miss the picnic, so everyone agreed to move it.",
    "cn": "A：為什麼行銷團隊把公司野餐的日期從星期六改到下個週末？ B：我們組長的【母親】要從高雄來看她幾天，她不想錯過野餐，所以大家都同意延期。"
  },
  {
    "word": "child",
    "pos": "n.",
    "cn_def": "孩子；兒童",
    "en_def": "a young boy or girl; a son or daughter",
    "sentence": "A: Does the hotel offer any discounts for families who are traveling with young kids during the summer holiday season? B: Yes, each {{BLANK}} under twelve can stay for free in the same room as the parents, and breakfast at the buffet restaurant is also half price for them.",
    "cn": "A：飯店在暑假旺季有提供帶小孩旅行的家庭任何折扣嗎？ B：有的，每位十二歲以下的【孩子】和父母同房可免費入住，自助餐廳的早餐也半價。"
  },
  {
    "word": "son",
    "pos": "n.",
    "cn_def": "兒子",
    "en_def": "a male child of a parent",
    "sentence": "A: Why is the owner of the bakery not working behind the counter this morning like he usually does? B: He has finally handed the daily business over to his {{BLANK}}, who studied baking in Japan for three years, so now he only comes in on weekends to check the quality.",
    "cn": "A：為什麼麵包店老闆今天早上不像平常一樣在櫃檯後面工作？ B：他終於把日常生意交給了他的【兒子】，他兒子在日本學了三年烘焙，所以現在他只有週末才來檢查品質。"
  },
  {
    "word": "daughter",
    "pos": "n.",
    "cn_def": "女兒",
    "en_def": "a female child of a parent",
    "sentence": "A: Who is the young woman sitting at the front desk today, and why is she answering the phones for the clinic? B: She is the dentist's {{BLANK}}, and since she is home from university for the summer, she offered to help while our regular receptionist is on vacation.",
    "cn": "A：今天坐在櫃檯的年輕女子是誰？為什麼她在幫診所接電話？ B：她是牙醫的【女兒】，因為她暑假從大學回家，所以在我們的固定接待員休假時主動來幫忙。"
  },
  {
    "word": "sibling",
    "pos": "n.",
    "cn_def": "兄弟姊妹",
    "en_def": "a brother or a sister",
    "sentence": "A: The application form for the company scholarship asks if any brothers or sisters also work here, so what should I write? B: If you have a {{BLANK}} in any department of the company, just write down their name and position, because the rules say family members cannot review each other's applications.",
    "cn": "A：公司獎學金的申請表問有沒有兄弟姊妹也在這裡工作，我該怎麼寫？ B：如果你有【兄弟姊妹】在公司任何部門，就寫下他們的姓名和職位，因為規定家人不能審核彼此的申請。"
  },
  {
    "word": "brother",
    "pos": "n.",
    "cn_def": "兄弟；哥哥；弟弟",
    "en_def": "a boy or man who has the same parents as you",
    "sentence": "A: Who will take care of your flower shop while you are attending the trade show in Singapore next month? B: My younger {{BLANK}} has worked there with me for years, so he knows all our regular customers and suppliers, and he will open the shop every morning while I'm away.",
    "cn": "A：你下個月去新加坡參加貿易展時，誰會照顧你的花店？ B：我【弟弟】已經和我一起在那裡工作好幾年了，他認識所有的老客戶和供應商，我不在時他每天早上都會開店。"
  },
  {
    "word": "sister",
    "pos": "n.",
    "cn_def": "姊妹；姊姊；妹妹",
    "en_def": "a girl or woman who has the same parents as you",
    "sentence": "A: How did you find such a good accountant for your small business after your last one moved to another city? B: My older {{BLANK}} recommended her, since the accountant has handled the tax returns for her restaurant for over ten years and never made a single mistake.",
    "cn": "A：你上一位會計搬到別的城市後，你是怎麼為你的小公司找到這麼好的會計的？ B：我【姊姊】推薦她的，因為這位會計替她的餐廳處理報稅已經超過十年，從沒出過任何差錯。"
  },
  {
    "word": "grandparent",
    "pos": "n.",
    "cn_def": "祖父母；外祖父母",
    "en_def": "the father or mother of your parent",
    "sentence": "A: Why did you ask the travel agent for a hotel room with two beds and an elevator close to the room? B: I'm taking my kids on a trip, and one {{BLANK}} is coming with us too, so we need a room that is easy to reach because walking up stairs is difficult for him.",
    "cn": "A：你為什麼要求旅行社安排有兩張床、而且離電梯近的房間？ B：我要帶孩子去旅行，還有一位【祖父母】也跟我們一起去，所以需要一間容易到達的房間，因為爬樓梯對他來說很困難。"
  },
  {
    "word": "grandfather",
    "pos": "n.",
    "cn_def": "祖父；外祖父",
    "en_def": "the father of your father or mother",
    "sentence": "A: That old wooden desk in your office looks really beautiful, so where did you buy it? B: I didn't buy it, because my {{BLANK}} made it by hand more than fifty years ago when he was a carpenter, and he gave it to me when I opened my own law firm.",
    "cn": "A：你辦公室那張舊木桌看起來真漂亮，你在哪裡買的？ B：不是買的，是我【祖父】五十多年前當木匠時親手做的，我開了自己的律師事務所時他送給了我。"
  },
  {
    "word": "grandmother",
    "pos": "n.",
    "cn_def": "祖母；外祖母",
    "en_def": "the mother of your father or mother",
    "sentence": "A: Your new restaurant's beef noodle soup is so popular that customers are waiting in line outside every evening, so what's the secret? B: The recipe came from my {{BLANK}}, who cooked it for our family every winter, and I only changed a few ingredients to make it suitable for a restaurant kitchen.",
    "cn": "A：你新餐廳的牛肉麵好受歡迎，每天晚上客人都在外面排隊，秘訣是什麼？ B：食譜來自我的【祖母】，她每年冬天都為我們家煮這道湯，我只改了幾樣食材，讓它適合餐廳廚房。"
  },
  {
    "word": "relative",
    "pos": "n.",
    "cn_def": "親戚；親屬",
    "en_def": "a person in your family",
    "sentence": "A: Why did you request three days of personal leave at the end of this month, since that is our busiest week? B: A close {{BLANK}} is getting married in Tainan that weekend, and my whole family is expected to attend the wedding banquet, so I really cannot miss it.",
    "cn": "A：你為什麼申請在月底請三天事假？那是我們最忙的一週。 B：一位近【親戚】那個週末要在台南結婚，我們全家都要參加喜宴，所以我真的不能缺席。"
  },
  {
    "word": "cousin",
    "pos": "n.",
    "cn_def": "堂／表兄弟姊妹",
    "en_def": "a child of your aunt or uncle",
    "sentence": "A: How did you get an interview at that famous design company when they almost never advertise open positions? B: My {{BLANK}} works in their human resources department, and she told me about the opening before it was announced, but I still had to pass three difficult interviews.",
    "cn": "A：那家知名設計公司幾乎從不公開徵才，你是怎麼得到面試機會的？ B：我的【表姊】在他們的人資部門工作，她在職缺公布前就告訴我，但我還是得通過三次很難的面試。"
  },
  {
    "word": "uncle",
    "pos": "n.",
    "cn_def": "叔叔；伯伯；舅舅；姑丈；姨丈",
    "en_def": "the brother of your mother or father, or your aunt's husband",
    "sentence": "A: Are you going to work at the bank after you graduate, or have you decided to try something different? B: My {{BLANK}} runs a small trading company in Taichung, and he offered me a job as his assistant, so I will learn about importing and exporting from him for a couple of years.",
    "cn": "A：你畢業後要去銀行工作，還是決定嘗試不同的工作？ B：我【叔叔】在台中經營一家小貿易公司，他給了我一份助理的工作，所以我會跟他學幾年進出口。"
  },
  {
    "word": "aunt",
    "pos": "n.",
    "cn_def": "阿姨；姑姑；嬸嬸；舅媽",
    "en_def": "the sister of your mother or father, or your uncle's wife",
    "sentence": "A: Where are you staying during your business trip to Vancouver, since the hotels near the convention center are fully booked? B: My {{BLANK}} lives about twenty minutes from the center, so she invited me to stay in her guest room, which will save the company a lot of money on hotel costs.",
    "cn": "A：你去溫哥華出差住哪裡？會議中心附近的飯店都客滿了。 B：我【阿姨】住在離中心大約二十分鐘的地方，她邀請我住她的客房，這樣能幫公司省下很多住宿費。"
  },
  {
    "word": "nephew",
    "pos": "n.",
    "cn_def": "姪子；外甥",
    "en_def": "a son of your brother or sister",
    "sentence": "A: Who is the teenager helping you carry boxes into the storage room this afternoon? He works really hard. B: He's my sister's son, so he's my {{BLANK}}, and he wanted some work experience during his summer vacation, so I asked the manager if he could help us for a week.",
    "cn": "A：今天下午幫你把箱子搬進儲藏室的青少年是誰？他工作很認真。 B：他是我姊姊的兒子，所以是我的【外甥】，他想在暑假累積一些工作經驗，所以我問經理他能不能幫我們一週。"
  },
  {
    "word": "niece",
    "pos": "n.",
    "cn_def": "姪女；外甥女",
    "en_def": "a daughter of your brother or sister",
    "sentence": "A: Why are you buying so many children's books at the bookstore today when you don't have any kids? B: My {{BLANK}}, my brother's little girl, is turning six this weekend, and she loves stories about animals, so I'm getting her a few as a birthday present.",
    "cn": "A：你沒有小孩，為什麼今天在書店買這麼多童書？ B：我的【姪女】，也就是我哥哥的小女兒，這個週末滿六歲，她喜歡動物故事，所以我要買幾本當生日禮物。"
  },
  {
    "word": "marriage",
    "pos": "n.",
    "cn_def": "婚姻",
    "en_def": "the legal relationship between a husband and wife",
    "sentence": "A: Why does the HR department need a copy of my wedding certificate before the end of this month? B: Because your {{BLANK}} changes your health insurance plan, they need official proof so that your wife can be added to the company insurance and receive the same benefits as you.",
    "cn": "A：為什麼人資部門需要我在月底前交結婚證書影本？ B：因為你的【婚姻】會改變你的健康保險方案，他們需要正式證明，才能把你太太加入公司保險，並享有和你一樣的福利。"
  },
  {
    "word": "couple",
    "pos": "n.",
    "cn_def": "夫妻；情侶",
    "en_def": "two people who are married or in a relationship",
    "sentence": "A: Who is renting the empty apartment on the third floor of our building, and when will they move in? B: A young {{BLANK}} from Hsinchu signed the lease yesterday, and they plan to move in next Saturday, because the husband just started a new job at the hospital near here.",
    "cn": "A：誰要租我們大樓三樓那間空公寓？他們什麼時候搬進來？ B：一對來自新竹的年輕【夫妻】昨天簽了租約，打算下星期六搬進來，因為先生剛在附近的醫院開始新工作。"
  },
  {
    "word": "spouse",
    "pos": "n.",
    "cn_def": "配偶",
    "en_def": "a husband or wife",
    "sentence": "A: Can I bring someone with me to the company's year-end party at the hotel, or is it only for employees? B: Every employee may bring a {{BLANK}} or partner, but please add their name to the online form by Friday so that the event planner can arrange enough seats and meals.",
    "cn": "A：我可以帶人參加公司在飯店舉辦的尾牙嗎？還是只限員工？ B：每位員工可以攜帶【配偶】或伴侶，但請在星期五前把他們的名字填進線上表單，讓活動企劃安排足夠的座位和餐點。"
  },
  {
    "word": "husband",
    "pos": "n.",
    "cn_def": "丈夫；先生",
    "en_def": "the man a woman is married to",
    "sentence": "A: You usually drive to work, so why did you take the bus this morning and arrive so late? B: My {{BLANK}} needed the car to take our daughter to the hospital for a check-up, so I took the bus, but it was stuck in heavy traffic near the train station.",
    "cn": "A：你平常開車上班，為什麼今天早上搭公車而且這麼晚到？ B：我【先生】需要開車帶女兒去醫院檢查，所以我搭了公車，但它在火車站附近塞車了。"
  },
  {
    "word": "wife",
    "pos": "n.",
    "cn_def": "妻子；太太",
    "en_def": "the woman a man is married to",
    "sentence": "A: Why is Mr. Lin moving to the Tokyo branch next spring when he has worked in this office for fifteen years? B: His {{BLANK}} got a great job offer from a Japanese university, so they decided to move together, and the company agreed to transfer him to our Tokyo branch.",
    "cn": "A：林先生在這間辦公室工作了十五年，為什麼明年春天要調到東京分公司？ B：他【太太】得到日本一所大學很好的工作機會，所以他們決定一起搬過去，公司也同意把他調到東京分公司。"
  },
  {
    "word": "home",
    "pos": "n.",
    "cn_def": "家；住所",
    "en_def": "the place where you live",
    "sentence": "A: Will you be in the office tomorrow, because I'd like to show you the new design for the client's website? B: I'll be working from {{BLANK}} tomorrow because a technician is coming to fix my washing machine, but we can have a video call at ten and share the screen.",
    "cn": "A：你明天會進辦公室嗎？我想給你看客戶網站的新設計。 B：我明天會在【家】工作，因為有技師要來修洗衣機，不過我們可以十點視訊通話並分享螢幕。"
  },
  {
    "word": "household",
    "pos": "n.",
    "cn_def": "一戶人家；家庭",
    "en_def": "all the people who live together in one house",
    "sentence": "A: Why did the electric company send us this survey about how much power we use every month? B: They are collecting information from every {{BLANK}} in the city, because they want to understand how families use electricity so they can plan a cheaper price plan for next year.",
    "cn": "A：電力公司為什麼寄這份每月用電量的問卷給我們？ B：他們正在向市內每一【戶人家】收集資料，因為想了解家庭如何用電，以便規劃明年更便宜的電價方案。"
  },
  {
    "word": "relationship",
    "pos": "n.",
    "cn_def": "關係",
    "en_def": "the way two people or groups feel and act toward each other",
    "sentence": "A: How did you keep such a big client for over ten years, even when other companies offered them lower prices? B: We built a strong {{BLANK}} with their managers by visiting them often, answering problems quickly, and always being honest about delivery times, so they trust us more than cheaper suppliers.",
    "cn": "A：即使其他公司開價更低，你是怎麼留住這麼大的客戶超過十年的？ B：我們經常拜訪他們、快速處理問題，並且對交貨時間總是誠實，和他們的經理建立了穩固的【關係】，所以他們比起較便宜的供應商更信任我們。"
  },
  {
    "word": "support",
    "pos": "n.",
    "cn_def": "支持；幫助",
    "en_def": "help and encouragement",
    "sentence": "A: How did you manage to finish your MBA at night while working full-time at the bank and raising two kids? B: Well, I couldn't have done it without the {{BLANK}} of my family, because my parents cooked dinner for the kids and my husband helped them with their homework every evening.",
    "cn": "A：你是怎麼一邊在銀行全職工作、養兩個孩子，一邊晚上完成MBA的？ B：嗯，沒有家人的【支持】我做不到，因為我父母幫孩子煮晚餐，我先生每天晚上幫他們寫功課。"
  },
  {
    "word": "care",
    "pos": "n.",
    "cn_def": "照顧；照料",
    "en_def": "the act of looking after someone",
    "sentence": "A: Who looks after your father during the day now that he can no longer live by himself? B: A nurse comes to his apartment every morning to provide daily {{BLANK}}, such as helping him take his medicine and cook lunch, and my brother visits him after work every evening.",
    "cn": "A：既然你父親無法再獨自生活，白天誰照顧他？ B：每天早上有護理師到他的公寓提供日常【照顧】，例如幫他吃藥和煮午餐，我哥哥每天下班後也會去看他。"
  },
  {
    "word": "bond",
    "pos": "n.",
    "cn_def": "情感連結；聯繫",
    "en_def": "a close feeling that connects people",
    "sentence": "A: Why does the company organize a family day at the amusement park every year when it costs so much money? B: The managers believe it helps create a strong {{BLANK}} between employees and their families, and staff who feel connected to the company usually stay longer and work harder.",
    "cn": "A：公司每年都在遊樂園舉辦家庭日，花費很多，為什麼還要辦？ B：經理們認為這有助於在員工和家人之間建立緊密的【情感連結】，而對公司有歸屬感的員工通常待得更久、工作更努力。"
  },
  {
    "word": "tradition",
    "pos": "n.",
    "cn_def": "傳統；慣例",
    "en_def": "a custom that people have followed for a long time",
    "sentence": "A: Why is everyone in the office bringing homemade dumplings to share for lunch today? B: It's a {{BLANK}} in our department that started about twenty years ago, because every winter before the holidays, each person brings a dish from their hometown so that we can celebrate together like one big family.",
    "cn": "A：為什麼今天辦公室每個人都帶自己包的水餃來分享當午餐？ B：這是我們部門大約二十年前開始的【傳統】，每年冬天放假前，每個人都會帶一道家鄉菜，讓我們像一個大家庭一樣一起慶祝。"
  },
  {
    "word": "generation",
    "pos": "n.",
    "cn_def": "世代；一代",
    "en_def": "all the people born at about the same time; one step in a family line",
    "sentence": "A: How long has this tea shop been open on this street, because the building looks really old? B: The same family has run it for more than a hundred years, and the owner you met today is the fourth {{BLANK}} to manage the shop, after his father, grandfather, and great-grandfather.",
    "cn": "A：這家茶行在這條街上開多久了？建築看起來很老。 B：同一個家族經營它超過一百年了，你今天見到的老闆是經營這家店的第四【代】，前面是他的父親、祖父和曾祖父。"
  },
  {
    "word": "close-knit",
    "pos": "adj.",
    "cn_def": "緊密團結的；關係親密的",
    "en_def": "having close, caring relationships",
    "sentence": "A: Why do so many employees at that small accounting firm stay for so long instead of moving to bigger companies? B: The firm has a very {{BLANK}} team of about fifteen people who eat lunch together, celebrate birthdays, and help each other during the busy tax season, so it feels like a family.",
    "cn": "A：為什麼那家小會計事務所的員工待那麼久，而不跳槽到大公司？ B：那家事務所有一支大約十五人、非常【緊密團結的】團隊，他們一起吃午餐、慶祝生日，並在忙碌的報稅季互相幫忙，所以感覺像一家人。"
  },
  {
    "word": "loving",
    "pos": "adj.",
    "cn_def": "充滿愛的；慈愛的",
    "en_def": "showing a lot of love and care",
    "sentence": "A: What did the parents in the survey say they want most from the new day care center near the office? B: Most of them said they want a safe and {{BLANK}} place where the teachers are kind and patient, because they worry about leaving their babies with strangers for eight hours a day.",
    "cn": "A：調查中的家長說他們最希望辦公室附近新的托兒中心提供什麼？ B：大部分人說想要一個安全又【充滿愛的】地方，老師親切有耐心，因為他們擔心每天把寶寶交給陌生人八小時。"
  },
  {
    "word": "responsible",
    "pos": "adj.",
    "cn_def": "負責的；有責任的",
    "en_def": "having the duty to take care of something",
    "sentence": "A: Who should I talk to about the broken air conditioner in the meeting room on the fifth floor? B: Please contact Mr. Wu in the facilities department, because he is {{BLANK}} for all repairs in the building, and he can usually send a technician within one or two working days.",
    "cn": "A：五樓會議室冷氣壞了，我該找誰？ B：請聯絡設施部門的吳先生，因為他【負責】大樓所有的維修，通常一兩個工作天內就能派技師過來。"
  },
  {
    "word": "together",
    "pos": "adv.",
    "cn_def": "一起；共同",
    "en_def": "with each other; as a group",
    "sentence": "A: Are you and your sister planning to open the new coffee shop by yourselves, or will you hire a manager? B: We will run it {{BLANK}} for the first year, because she is good at baking and I'm good at accounting, and then we may hire a manager when the business grows.",
    "cn": "A：你和你姊姊打算自己開這家新咖啡店，還是會請一位經理？ B：第一年我們會【一起】經營，因為她擅長烘焙，我擅長會計，等生意變大後可能再請經理。"
  }
];

const MCQS = [
  {
    "q": "The school asks each _____ to sign the permission form. Children without a signed form cannot join the museum trip.",
    "options": [
      "parent",
      "tradition",
      "generation",
      "bond"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our hotel offers free babysitting for guests. Each _____ under the age of eight can join the activities in the play room.",
    "options": [
      "spouse",
      "child",
      "relative",
      "couple"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The owner plans to retire next year. He will hand the family business to his _____, who has worked there since he was a boy.",
    "options": [
      "niece",
      "aunt",
      "son",
      "wife"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The dentist's _____ is studying medicine in Taipei. She hopes to join her father's clinic after she graduates next year.",
    "options": [
      "nephew",
      "son",
      "uncle",
      "daughter"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Applicants must report any _____ who works in the same department. Brothers and sisters are not allowed to supervise each other.",
    "options": [
      "tradition",
      "sibling",
      "household",
      "generation"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The kindergarten invites each student's _____ to a special event on Saturday. Grandmothers and grandfathers can watch the children sing.",
    "options": [
      "nephew",
      "niece",
      "cousin",
      "grandparent"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "My _____ built this wooden chair sixty years ago. He was a carpenter until he retired at the age of seventy.",
    "options": [
      "grandfather",
      "aunt",
      "niece",
      "daughter"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Employees may take three days of leave when a close _____ passes away. Please inform your manager as soon as possible.",
    "options": [
      "tradition",
      "marriage",
      "relative",
      "household"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "My _____ is the son of my father's brother. We grew up together and now work at the same bank.",
    "options": [
      "cousin",
      "nephew",
      "uncle",
      "grandfather"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Her _____ is her mother's younger brother. He runs a small hotel by the beach and hires her every summer.",
    "options": [
      "cousin",
      "uncle",
      "nephew",
      "grandfather"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "My _____, my father's sister, works as a nurse in Kaohsiung. She often gives me advice about careers in health care.",
    "options": [
      "niece",
      "uncle",
      "aunt",
      "daughter"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Our manager hired her _____, her sister's son, as a summer intern. The young man helps in the warehouse every afternoon.",
    "options": [
      "niece",
      "uncle",
      "grandfather",
      "nephew"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The bakery owner's _____ is her brother's daughter. The young girl decorates cakes in the shop after school.",
    "options": [
      "nephew",
      "niece",
      "aunt",
      "son"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The couple celebrated forty years of _____ with a dinner at the hotel. Their children invited all of their old friends.",
    "options": [
      "sibling",
      "household",
      "generation",
      "marriage"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "A young _____ bought the house next to the office. The husband and wife plan to open a café on the first floor.",
    "options": [
      "couple",
      "bond",
      "tradition",
      "generation"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Employees may add a _____ to the company health plan. You must show a marriage certificate to register your husband or wife.",
    "options": [
      "sibling",
      "nephew",
      "spouse",
      "grandparent"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Our manager's _____ is a chef at a famous hotel. He often cooks for her team when they work late on Fridays.",
    "options": [
      "husband",
      "niece",
      "aunt",
      "daughter"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The new director moved to Tokyo with his _____ and two children. She found a job teaching English at a university there.",
    "options": [
      "uncle",
      "wife",
      "nephew",
      "brother"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Because of the typhoon, all staff will work from _____ tomorrow. Please keep your phone on in case your manager calls.",
    "options": [
      "household",
      "tradition",
      "home",
      "bond"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The city will give every _____ a free recycling bin next month. Each family can pick it up at the local office.",
    "options": [
      "relationship",
      "generation",
      "tradition",
      "household"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Good communication helps us build a strong _____ with our clients. We visit our major customers at least twice a year.",
    "options": [
      "generation",
      "relationship",
      "household",
      "marriage"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Thanks to the _____ of my family, I finished my degree while working full-time. They helped with cooking and childcare every evening.",
    "options": [
      "generation",
      "marriage",
      "household",
      "support"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The nursing home provides 24-hour _____ for all of its elderly residents. Nurses check on each person several times a day.",
    "options": [
      "care",
      "bond",
      "tradition",
      "generation"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Team-building trips can create a strong _____ between coworkers. People who trust each other usually cooperate better at work.",
    "options": [
      "household",
      "generation",
      "bond",
      "home"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Eating mooncakes during the Moon Festival is a family _____ in Taiwan. Many companies also give mooncakes to their clients.",
    "options": [
      "tradition",
      "generation",
      "relationship",
      "household"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The younger _____ often prefers shopping online. Our marketing plan therefore focuses on social media and mobile apps.",
    "options": [
      "tradition",
      "generation",
      "household",
      "relationship"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The village has a _____ community where neighbors help each other. Everyone there knows everyone else by name.",
    "options": [
      "responsible",
      "distant",
      "close-knit",
      "expensive"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The children grew up in a warm and _____ home. Their parents always made time to listen to them after school.",
    "options": [
      "responsible",
      "empty",
      "broken",
      "loving"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The facilities manager is _____ for all repairs in the building. Please contact him if the air conditioner stops working.",
    "options": [
      "loving",
      "responsible",
      "close-knit",
      "famous"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "The two departments will work _____ on the new product launch. They will share one office until the project ends.",
    "options": [
      "apart",
      "alone",
      "abroad",
      "together"
    ],
    "answer": 3,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "parent": {
    "pos": "n.",
    "en_def": "a mother or a father",
    "cn_def": "父親或母親；家長"
  },
  "father": {
    "pos": "n.",
    "en_def": "a male parent",
    "cn_def": "父親；爸爸"
  },
  "mother": {
    "pos": "n.",
    "en_def": "a female parent",
    "cn_def": "母親；媽媽"
  },
  "child": {
    "pos": "n.",
    "en_def": "a young boy or girl; a son or daughter",
    "cn_def": "孩子；兒童"
  },
  "son": {
    "pos": "n.",
    "en_def": "a male child of a parent",
    "cn_def": "兒子"
  },
  "daughter": {
    "pos": "n.",
    "en_def": "a female child of a parent",
    "cn_def": "女兒"
  },
  "sibling": {
    "pos": "n.",
    "en_def": "a brother or a sister",
    "cn_def": "兄弟姊妹"
  },
  "brother": {
    "pos": "n.",
    "en_def": "a boy or man who has the same parents as you",
    "cn_def": "兄弟；哥哥；弟弟"
  },
  "sister": {
    "pos": "n.",
    "en_def": "a girl or woman who has the same parents as you",
    "cn_def": "姊妹；姊姊；妹妹"
  },
  "grandparent": {
    "pos": "n.",
    "en_def": "the father or mother of your parent",
    "cn_def": "祖父母；外祖父母"
  },
  "grandfather": {
    "pos": "n.",
    "en_def": "the father of your father or mother",
    "cn_def": "祖父；外祖父"
  },
  "grandmother": {
    "pos": "n.",
    "en_def": "the mother of your father or mother",
    "cn_def": "祖母；外祖母"
  },
  "relative": {
    "pos": "n.",
    "en_def": "a person in your family",
    "cn_def": "親戚；親屬"
  },
  "cousin": {
    "pos": "n.",
    "en_def": "a child of your aunt or uncle",
    "cn_def": "堂／表兄弟姊妹"
  },
  "uncle": {
    "pos": "n.",
    "en_def": "the brother of your mother or father, or your aunt's husband",
    "cn_def": "叔叔；伯伯；舅舅；姑丈；姨丈"
  },
  "aunt": {
    "pos": "n.",
    "en_def": "the sister of your mother or father, or your uncle's wife",
    "cn_def": "阿姨；姑姑；嬸嬸；舅媽"
  },
  "nephew": {
    "pos": "n.",
    "en_def": "a son of your brother or sister",
    "cn_def": "姪子；外甥"
  },
  "niece": {
    "pos": "n.",
    "en_def": "a daughter of your brother or sister",
    "cn_def": "姪女；外甥女"
  },
  "marriage": {
    "pos": "n.",
    "en_def": "the legal relationship between a husband and wife",
    "cn_def": "婚姻"
  },
  "couple": {
    "pos": "n.",
    "en_def": "two people who are married or in a relationship",
    "cn_def": "夫妻；情侶"
  },
  "spouse": {
    "pos": "n.",
    "en_def": "a husband or wife",
    "cn_def": "配偶"
  },
  "husband": {
    "pos": "n.",
    "en_def": "the man a woman is married to",
    "cn_def": "丈夫；先生"
  },
  "wife": {
    "pos": "n.",
    "en_def": "the woman a man is married to",
    "cn_def": "妻子；太太"
  },
  "home": {
    "pos": "n.",
    "en_def": "the place where you live",
    "cn_def": "家；住所"
  },
  "household": {
    "pos": "n.",
    "en_def": "all the people who live together in one house",
    "cn_def": "一戶人家；家庭"
  },
  "relationship": {
    "pos": "n.",
    "en_def": "the way two people or groups feel and act toward each other",
    "cn_def": "關係"
  },
  "support": {
    "pos": "n.",
    "en_def": "help and encouragement",
    "cn_def": "支持；幫助"
  },
  "care": {
    "pos": "n.",
    "en_def": "the act of looking after someone",
    "cn_def": "照顧；照料"
  },
  "bond": {
    "pos": "n.",
    "en_def": "a close feeling that connects people",
    "cn_def": "情感連結；聯繫"
  },
  "tradition": {
    "pos": "n.",
    "en_def": "a custom that people have followed for a long time",
    "cn_def": "傳統；慣例"
  },
  "generation": {
    "pos": "n.",
    "en_def": "all the people born at about the same time; one step in a family line",
    "cn_def": "世代；一代"
  },
  "close-knit": {
    "pos": "adj.",
    "en_def": "having close, caring relationships",
    "cn_def": "緊密團結的；關係親密的"
  },
  "loving": {
    "pos": "adj.",
    "en_def": "showing a lot of love and care",
    "cn_def": "充滿愛的；慈愛的"
  },
  "responsible": {
    "pos": "adj.",
    "en_def": "having the duty to take care of something",
    "cn_def": "負責的；有責任的"
  },
  "together": {
    "pos": "adv.",
    "en_def": "with each other; as a group",
    "cn_def": "一起；共同"
  }
};

const EXTRA_GLOSSES = {};
