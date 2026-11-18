// Topic 380 Quiz Data: Study 學習
// Source word list: https://www.examword.com/group-topic/study — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T380 - Study 學習",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "learn",
    "pos": "v.",
    "cn_def": "學習；學會",
    "en_def": "to get knowledge or a new skill by studying or practicing",
    "sentence": "A: Our new accounting software goes live next Monday, so how are the staff in the finance department preparing for the change? B: The vendor is sending a trainer on Thursday afternoon, and everyone will {{BLANK}} the basic functions during a three-hour workshop before they start entering real invoices.",
    "cn": "A：我們的新會計軟體下週一上線，財務部的員工要如何為這項改變做準備？ B：廠商週四下午會派一位講師過來，大家會在三小時的工作坊中【學習】基本功能，然後才開始輸入真正的發票。"
  },
  {
    "word": "learning",
    "pos": "n.",
    "cn_def": "學習",
    "en_def": "the process of getting knowledge or skills",
    "sentence": "A: Why did the company decide to pay for online courses for all the employees in the customer service team this year? B: The managers believe that continuous {{BLANK}} keeps workers motivated, and they noticed that staff who took courses last year solved customer problems faster and received better reviews.",
    "cn": "A：公司今年為什麼決定替客服團隊的所有員工支付線上課程的費用？ B：經理們認為持續【學習】能讓員工保持動力，而且他們注意到去年上過課的員工解決顧客問題更快，也得到更好的評價。"
  },
  {
    "word": "research",
    "pos": "n.",
    "cn_def": "研究；調查",
    "en_def": "careful study of a subject to find new facts or information",
    "sentence": "A: Before we launch the new energy drink in Southeast Asia, do we know which flavors young customers in that region actually prefer? B: Our marketing team spent two months doing {{BLANK}} in Bangkok and Manila, and the survey results show that mango and lime are far more popular than berry.",
    "cn": "A：在東南亞推出新的能量飲料之前，我們知道那個地區的年輕顧客實際上比較喜歡哪些口味嗎？ B：我們的行銷團隊在曼谷和馬尼拉花了兩個月做【調查】，問卷結果顯示芒果和萊姆口味比莓果受歡迎得多。"
  },
  {
    "word": "revise",
    "pos": "v.",
    "cn_def": "修改；修訂",
    "en_def": "to change something to correct or improve it",
    "sentence": "A: The client called this morning and said that the budget in our proposal is much higher than they expected, so what should we do? B: Let's {{BLANK}} the cost section this afternoon by removing the extra advertising events, and then we can send the updated version back to them before Friday.",
    "cn": "A：客戶今天早上打電話來，說我們提案中的預算比他們預期的高很多，我們該怎麼辦？ B：我們今天下午就【修改】費用的部分，把額外的廣告活動刪掉，然後在週五前把更新後的版本寄回給他們。"
  },
  {
    "word": "review",
    "pos": "v.",
    "cn_def": "審閱；檢查；複習",
    "en_def": "to look at or check something carefully again",
    "sentence": "A: I've finished the draft of the safety manual for the new warehouse, but I'm worried there might be some mistakes in the instructions. B: Send it to me before lunch, and I'll {{BLANK}} every page carefully this afternoon so that we can print copies for the workers on Monday morning.",
    "cn": "A：我已經完成新倉庫安全手冊的草稿，但我擔心說明裡可能有一些錯誤。 B：午餐前寄給我，我今天下午會仔細【審閱】每一頁，這樣我們週一早上就能印給工人們。"
  },
  {
    "word": "memorize",
    "pos": "v.",
    "cn_def": "記住；背誦",
    "en_def": "to learn something so well that you can remember it exactly",
    "sentence": "A: Our sales representatives keep checking their notes when customers ask about prices, and it makes them look unprepared during meetings. B: Then let's ask each of them to {{BLANK}} the prices of our ten best-selling products, and we can give a short quiz at next week's team meeting to check their progress.",
    "cn": "A：顧客詢問價格時，我們的業務代表一直在看筆記，這讓他們在會議中顯得準備不足。 B：那就請他們每個人【記住】我們十項最暢銷產品的價格，我們可以在下週的團隊會議上做個小測驗來確認他們的進度。"
  },
  {
    "word": "memory",
    "pos": "n.",
    "cn_def": "記憶力；記憶",
    "en_def": "the ability to remember things",
    "sentence": "A: You remembered the names of all twenty visitors from the Tokyo office after meeting them only once yesterday, so how did you do it? B: I have a pretty good {{BLANK}} for faces, and I also wrote a short note about each person on the back of their business card after the welcome dinner.",
    "cn": "A：你昨天只見過東京辦公室的二十位訪客一次，就記住了所有人的名字，你是怎麼做到的？ B：我對臉孔的【記憶力】很好，而且歡迎晚宴後我也在每個人的名片背面寫了一段簡短的筆記。"
  },
  {
    "word": "concentrate",
    "pos": "v.",
    "cn_def": "專心；集中注意力",
    "en_def": "to give all your attention to something",
    "sentence": "A: Why have you moved your laptop into the small meeting room when your desk is right next to the window with that lovely view? B: The open office is really noisy because of the construction work outside, and I need to {{BLANK}} on this financial report because the director wants it by four o'clock.",
    "cn": "A：你的座位就在那扇景色很美的窗戶旁邊，為什麼要把筆電搬到小會議室？ B：因為外面在施工，開放式辦公室非常吵，而我需要【專心】處理這份財務報告，因為主管四點前就要。"
  },
  {
    "word": "concentration",
    "pos": "n.",
    "cn_def": "專注力；注意力",
    "en_def": "the ability to give all your attention to something",
    "sentence": "A: The new employees seem tired and make lots of small mistakes after lunch, so do you think the training schedule is too long? B: Yes, their {{BLANK}} drops after two hours of sitting still, so I'm planning to add a fifteen-minute break and a short group activity in the middle of each afternoon session.",
    "cn": "A：新員工午餐後似乎很累，而且犯了很多小錯誤，你覺得訓練行程是不是太長了？ B：是的，他們坐著不動兩個小時後【專注力】就會下降，所以我打算在每個下午課程中間加入十五分鐘的休息和一個簡短的小組活動。"
  },
  {
    "word": "focus",
    "pos": "v.",
    "cn_def": "專注；集中",
    "en_def": "to give most of your attention or effort to one thing",
    "sentence": "A: Our team has been working on five different projects at the same time, and none of them are going well, so what should we change? B: I think we should {{BLANK}} on the two projects with the closest deadlines first, and then ask the manager whether the other three can be postponed until next month.",
    "cn": "A：我們團隊同時在進行五個不同的專案，但沒有一個進展順利，我們應該做什麼改變？ B：我認為我們應該先【專注】於截止日期最近的兩個專案，然後問經理另外三個能不能延到下個月。"
  },
  {
    "word": "practice",
    "pos": "n.",
    "cn_def": "練習",
    "en_def": "doing something regularly to improve your skill",
    "sentence": "A: I'm giving my first presentation to the board of directors next Tuesday, and I'm really nervous about speaking in front of such important people. B: Don't worry, because enough {{BLANK}} makes a big difference, so let's book the conference room on Monday and you can rehearse the whole talk while I time it.",
    "cn": "A：我下週二要第一次向董事會做簡報，在這麼重要的人面前說話讓我很緊張。 B：別擔心，足夠的【練習】會有很大的差別，我們週一就預約會議室，你可以把整場演講預演一遍，我幫你計時。"
  },
  {
    "word": "understand",
    "pos": "v.",
    "cn_def": "理解；明白；懂",
    "en_def": "to know the meaning of something",
    "sentence": "A: The instructions for the new photocopier are only in German, and none of us in the office can read them, so what should we do? B: Maria studied in Berlin for three years, so she can {{BLANK}} the manual easily, and I'll ask her to explain the main steps to everyone this afternoon.",
    "cn": "A：新影印機的說明書只有德文，辦公室裡沒有人看得懂，我們該怎麼辦？ B：瑪麗亞在柏林讀了三年書，所以她能輕鬆【看懂】這本手冊，我會請她今天下午向大家說明主要步驟。"
  },
  {
    "word": "understanding",
    "pos": "n.",
    "cn_def": "理解；了解",
    "en_def": "knowledge of how something works or what it means",
    "sentence": "A: Why did the manager choose Kevin to lead the negotiations with our new supplier in Vietnam instead of someone more senior? B: Kevin worked in Ho Chi Minh City for four years, so he has a deep {{BLANK}} of the local business culture, and he can also speak Vietnamese with their staff.",
    "cn": "A：經理為什麼選凱文來主導和我們越南新供應商的談判，而不是選更資深的人？ B：凱文在胡志明市工作了四年，所以他對當地的商業文化有深刻的【了解】，而且他也能用越南語和他們的員工溝通。"
  },
  {
    "word": "analyze",
    "pos": "v.",
    "cn_def": "分析",
    "en_def": "to study something carefully to understand it",
    "sentence": "A: Sales of our winter jackets dropped by twenty percent last quarter, but nobody in the meeting could explain exactly why it happened. B: I'll ask the data team to {{BLANK}} the online sales figures and customer comments this week, so we can find out whether price, design, or the warm weather caused the problem.",
    "cn": "A：我們冬季外套的銷售上一季下滑了百分之二十，但會議中沒有人能確切解釋原因。 B：我會請數據團隊這週【分析】線上銷售數字和顧客評論，這樣我們就能找出問題是價格、設計還是溫暖的天氣造成的。"
  },
  {
    "word": "analysis",
    "pos": "n.",
    "cn_def": "分析",
    "en_def": "a careful study of something to understand it",
    "sentence": "A: Have you had a chance to look at the report that the consultants sent us about opening a second branch in Kaohsiung? B: Yes, and their {{BLANK}} of local rent prices and customer numbers is very detailed, so I think it will help the board make a decision at Thursday's meeting.",
    "cn": "A：你有機會看一下顧問寄來的那份關於在高雄開第二家分店的報告嗎？ B：有，他們對當地租金和顧客人數的【分析】非常詳細，我想這會幫助董事會在週四的會議上做出決定。"
  },
  {
    "word": "explore",
    "pos": "v.",
    "cn_def": "探索；研究；開拓",
    "en_def": "to look at or think about something carefully to learn more",
    "sentence": "A: Our main supplier has raised its prices twice this year, and the finance director is getting worried about our production costs. B: That's why the purchasing team plans to {{BLANK}} other options next month by visiting three factories in Malaysia and comparing their quality, delivery times, and prices.",
    "cn": "A：我們的主要供應商今年已經漲價兩次，財務長開始擔心我們的生產成本。 B：這就是為什麼採購團隊計畫下個月去參觀馬來西亞的三家工廠，比較他們的品質、交貨時間和價格，來【探尋】其他選擇。"
  },
  {
    "word": "exploration",
    "pos": "n.",
    "cn_def": "探勘；探索",
    "en_def": "the act of searching an area to learn about it or find something",
    "sentence": "A: Why is the oil company hiring so many geologists and engineers for its new office in the north of the country? B: The government has just given the company permission to begin {{BLANK}} in a large offshore area, and they need experts to study the seabed and decide where to drill.",
    "cn": "A：那家石油公司為什麼要替北部的新辦公室僱用這麼多地質學家和工程師？ B：政府剛核准這家公司在一大片近海區域展開【探勘】，所以他們需要專家研究海床並決定在哪裡鑽探。"
  },
  {
    "word": "lecture",
    "pos": "n.",
    "cn_def": "演講；講課",
    "en_def": "a talk on a subject given to a group of people",
    "sentence": "A: Are you going to the event at the convention center tomorrow evening, or do you have to stay late at the office again? B: I'm definitely going, because a famous economist is giving a {{BLANK}} about online shopping trends in Asia, and my manager said the company will pay for my ticket.",
    "cn": "A：你明天晚上會去會議中心的活動嗎？還是又得在辦公室加班？ B：我一定會去，因為一位知名的經濟學家要發表一場關於亞洲網購趨勢的【演講】，而且經理說公司會幫我出票錢。"
  },
  {
    "word": "seminar",
    "pos": "n.",
    "cn_def": "研討會；專題討論會",
    "en_def": "a meeting where a group of people discuss a subject with an expert",
    "sentence": "A: I noticed that half of the marketing team will be out of the office on Wednesday, so is something special happening that day? B: They are attending a one-day {{BLANK}} on social media advertising at a hotel downtown, where experts will lead small group discussions and share practical tips with the participants.",
    "cn": "A：我注意到行銷團隊有一半的人週三不在辦公室，那天有什麼特別的事嗎？ B：他們要去市中心的一家飯店參加為期一天的社群媒體廣告【研討會】，專家會帶領小組討論並和參加者分享實用的技巧。"
  },
  {
    "word": "assignment",
    "pos": "n.",
    "cn_def": "任務；作業",
    "en_def": "a piece of work that someone is given to do",
    "sentence": "A: You just joined the company last week, so what kind of work has your supervisor given you to do so far? B: My first {{BLANK}} is to contact twenty restaurants in our area and ask whether they would like to try our new organic vegetables, and I need to report the results by Friday.",
    "cn": "A：你上週才剛進公司，到目前為止你的主管給了你什麼樣的工作？ B：我的第一項【任務】是聯絡我們這一區的二十家餐廳，問他們是否願意試用我們新的有機蔬菜，而且我需要在週五前回報結果。"
  },
  {
    "word": "homework",
    "pos": "n.",
    "cn_def": "家庭作業",
    "en_def": "work that students are given to do at home",
    "sentence": "A: You look exhausted this morning, so did you have to work late on the sales report last night? B: Not exactly, because after I got home I spent two hours helping my son with his math {{BLANK}}, and then I still had to answer some urgent emails from our clients in London.",
    "cn": "A：你今天早上看起來很累，昨晚是為了銷售報告加班到很晚嗎？ B：不完全是，因為我回家後花了兩個小時幫我兒子寫數學【作業】，之後還得回覆倫敦客戶寄來的幾封緊急郵件。"
  },
  {
    "word": "project",
    "pos": "n.",
    "cn_def": "專案；計畫",
    "en_def": "a planned piece of work with a particular goal",
    "sentence": "A: Why are so many engineers from the head office visiting our factory this month, and how long will they be staying here? B: They are working on a large {{BLANK}} to install new robots on the production line, and they plan to stay for about six weeks until everything is running smoothly.",
    "cn": "A：為什麼這個月有這麼多總公司的工程師來參觀我們的工廠？他們會在這裡待多久？ B：他們正在進行一項在生產線上安裝新機器人的大型【專案】，計畫待大約六週，直到一切運作順利為止。"
  },
  {
    "word": "deadline",
    "pos": "n.",
    "cn_def": "截止期限",
    "en_def": "a time or date by which something must be finished",
    "sentence": "A: The client just emailed to ask whether we can deliver the new website design two days earlier than we originally agreed. B: That will be difficult because the {{BLANK}} is already very tight, but if two more designers join the team this week, we might be able to finish everything by Wednesday.",
    "cn": "A：客戶剛寄信來，問我們能不能比原先約定的時間提早兩天交出新的網站設計。 B：這會很困難，因為【截止期限】已經很緊了，但如果這週再有兩位設計師加入團隊，我們也許能在週三前完成所有工作。"
  },
  {
    "word": "exam",
    "pos": "n.",
    "cn_def": "考試",
    "en_def": "a formal test of knowledge or skill",
    "sentence": "A: Why is Jason taking every Friday afternoon off this month when the busy season is about to begin? B: He's preparing for an important accounting {{BLANK}} that he must pass to become a certified accountant, so the company has agreed to give him extra study time until the test in December.",
    "cn": "A：旺季就要開始了，傑森這個月為什麼每個週五下午都請假？ B：他正在準備一場重要的會計【考試】，必須通過才能成為合格會計師，所以公司同意在十二月考試前給他額外的讀書時間。"
  },
  {
    "word": "examination",
    "pos": "n.",
    "cn_def": "檢查；考試",
    "en_def": "a careful check of something or someone, often by an expert",
    "sentence": "A: Do all of the new delivery drivers need to do anything special before they are allowed to start working for us? B: Yes, each driver must have a medical {{BLANK}} at the clinic near the office, and they also need to show a valid license and complete a one-day safety course.",
    "cn": "A：所有新的送貨司機在被允許開始為我們工作之前，需要做什麼特別的事嗎？ B：需要，每位司機都必須在辦公室附近的診所做健康【檢查】，而且還要出示有效駕照並完成一天的安全課程。"
  },
  {
    "word": "grade",
    "pos": "n.",
    "cn_def": "成績；分數",
    "en_def": "a letter or number that shows how good a student's work is",
    "sentence": "A: How did your daughter do in her final English test, since she was so worried about it before the summer vacation? B: She got the highest {{BLANK}} in her class, so to celebrate, we're taking her to a nice restaurant this weekend and buying her the new laptop she wanted for college.",
    "cn": "A：你女兒的英文期末考考得怎麼樣？暑假前她好擔心。 B：她拿到全班最高的【成績】，所以為了慶祝，我們這個週末要帶她去一家不錯的餐廳，還要買她上大學想要的那台新筆電。"
  },
  {
    "word": "score",
    "pos": "n.",
    "cn_def": "分數；得分",
    "en_def": "the number of points someone gets in a test or rating",
    "sentence": "A: Our hotel received a lot of complaints last year, so how are guests rating us on the travel website these days? B: Things have improved a lot since we renovated the rooms, and our average {{BLANK}} has risen from 3.2 to 4.6 out of five, which is the highest in the neighborhood.",
    "cn": "A：我們飯店去年收到很多抱怨，最近房客在旅遊網站上給我們的評價如何？ B：自從我們整修客房後情況改善很多，我們的平均【分數】從3.2分升到滿分五分中的4.6分，是這一帶最高的。"
  },
  {
    "word": "academic",
    "pos": "adj.",
    "cn_def": "學術的；學業的",
    "en_def": "related to schools, colleges, and studying",
    "sentence": "A: Why does the university want our company to sponsor its new research center when we already give money to the local hospital? B: They hope we can build stronger links between {{BLANK}} research and industry, so our engineers could work with professors and students to develop new products together.",
    "cn": "A：我們已經捐款給當地醫院了，那所大學為什麼還希望我們公司贊助他們的新研究中心？ B：他們希望我們能加強【學術】研究和產業之間的連結，讓我們的工程師可以和教授及學生一起開發新產品。"
  },
  {
    "word": "scholarship",
    "pos": "n.",
    "cn_def": "獎學金",
    "en_def": "money given to a student to help pay for their education",
    "sentence": "A: I heard that your company helps the children of employees pay for their university studies, so how does the program work? B: Every year the company gives a {{BLANK}} to ten students with excellent grades, which covers their tuition fees and also includes a summer internship in one of our departments.",
    "cn": "A：我聽說你們公司會幫員工子女支付大學學費，這個計畫是怎麼運作的？ B：公司每年會頒發【獎學金】給十位成績優異的學生，涵蓋他們的學費，還包括在我們其中一個部門的暑期實習。"
  },
  {
    "word": "diligent",
    "pos": "adj.",
    "cn_def": "勤奮的；用功的",
    "en_def": "working hard and carefully",
    "sentence": "A: Why did the manager promote Lisa to team leader when she has only been working in the department for two years? B: She is a very {{BLANK}} worker who always checks every detail carefully, finishes her tasks on time, and stays late to help colleagues when the office gets really busy.",
    "cn": "A：麗莎在這個部門才工作兩年，經理為什麼升她當組長？ B：她是一位非常【勤奮的】員工，總是仔細檢查每個細節、準時完成工作，而且在辦公室很忙的時候會留下來幫忙同事。"
  },
  {
    "word": "efficient",
    "pos": "adj.",
    "cn_def": "有效率的；高效能的",
    "en_def": "working well without wasting time, money, or energy",
    "sentence": "A: Our electricity bill was much higher last winter, so is there anything we can do to reduce the cost of heating the office this year? B: We could replace the old heaters with a more {{BLANK}} system that uses less energy, and the supplier says it would pay for itself in about three years.",
    "cn": "A：我們去年冬天的電費高很多，今年有什麼方法可以降低辦公室的暖氣費用嗎？ B：我們可以把舊暖氣換成更【有效率的】系統，用電更少，而且供應商說大約三年就能回本。"
  }
];

const MCQS = [
  {
    "q": "Many workers _____ from their mistakes when a supervisor explains what went wrong. Good managers see errors as chances to improve.",
    "options": [
      "learn",
      "concentrate",
      "revise",
      "memorize"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The marketing department will conduct market _____ before launching the product overseas. The results will show what foreign customers want.",
    "options": [
      "lecture",
      "seminar",
      "research",
      "homework"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The designer was asked to _____ the brochure because several prices were printed wrong. She will send the corrected version tomorrow.",
    "options": [
      "memorize",
      "revise",
      "concentrate",
      "explore"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Please _____ the contract carefully before you sign it. If any terms are unclear, contact the legal department.",
    "options": [
      "memorize",
      "concentrate",
      "focus",
      "review"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Security guards must _____ the emergency codes because they are not allowed to write them down. A manager tests them every month.",
    "options": [
      "analyze",
      "explore",
      "memorize",
      "revise"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Our accountant has an excellent _____ for numbers. She can recall every client's phone number without checking her notes.",
    "options": [
      "memory",
      "scholarship",
      "assignment",
      "deadline"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "It is hard to _____ on your work when phones keep ringing. The company has created quiet rooms for staff who need silence.",
    "options": [
      "memorize",
      "revise",
      "explore",
      "concentrate"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Loud music in the office can reduce employees' _____ and lead to careless mistakes. Many workers prefer to wear headphones.",
    "options": [
      "scholarship",
      "concentration",
      "examination",
      "exploration"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "This year the company will _____ on its online business rather than opening new stores. The director explained the plan at the meeting.",
    "options": [
      "focus",
      "memorize",
      "revise",
      "analyze"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Speaking English every day is good _____ for staff who deal with foreign clients. The company offers free conversation classes.",
    "options": [
      "memory",
      "deadline",
      "practice",
      "scholarship"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Some customers do not _____ the new return policy. The store manager will put clear signs near the cash registers.",
    "options": [
      "concentrate",
      "understand",
      "focus",
      "explore"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Applicants for the position should have a good _____ of basic accounting. Experience with spreadsheets is also required.",
    "options": [
      "scholarship",
      "deadline",
      "exploration",
      "understanding"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The consultants will _____ our sales data to find out why profits fell. They will present their findings next Monday.",
    "options": [
      "memorize",
      "concentrate",
      "analyze",
      "focus"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "According to the bank's _____ of the market, housing prices will rise next year. Many buyers are hurrying to purchase homes now.",
    "options": [
      "analysis",
      "homework",
      "scholarship",
      "concentration"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The company plans to _____ new markets in South America next year. A team will visit Brazil and Chile in March.",
    "options": [
      "memorize",
      "concentrate",
      "revise",
      "explore"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The government has approved oil _____ off the east coast. Engineers will begin surveying the seabed this summer.",
    "options": [
      "concentration",
      "exploration",
      "scholarship",
      "examination"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The professor will give a _____ on international trade in the main hall. All staff members are welcome to attend.",
    "options": [
      "lecture",
      "homework",
      "scholarship",
      "deadline"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Twenty managers will attend a two-day _____ on leadership skills. Participants will join group discussions and practical exercises.",
    "options": [
      "homework",
      "deadline",
      "seminar",
      "scholarship"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Each intern received a different _____ on the first day. Mine was to organize customer files in the database.",
    "options": [
      "scholarship",
      "assignment",
      "concentration",
      "memory"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Parents in the survey said their children spend two hours on _____ every evening. Teachers hope to reduce this amount.",
    "options": [
      "scholarship",
      "deadline",
      "memory",
      "homework"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The construction _____ will be completed by the end of the year. The new office tower will have forty floors.",
    "options": [
      "lecture",
      "seminar",
      "project",
      "scholarship"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "All reports must be submitted before the _____ on Friday afternoon. Late reports will not be included in the review.",
    "options": [
      "deadline",
      "concentration",
      "memory",
      "scholarship"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Employees who pass the safety _____ will receive a certificate. The test takes about one hour to complete.",
    "options": [
      "scholarship",
      "memory",
      "assignment",
      "exam"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "All new drivers must have a medical _____ before they start work. The company pays for the doctor's fee.",
    "options": [
      "exploration",
      "examination",
      "scholarship",
      "concentration"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Students need a _____ of at least B to join the advanced course. Those with lower results can take the basic class.",
    "options": [
      "grade",
      "deadline",
      "memory",
      "scholarship"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The hotel's average customer _____ rose to 4.7 out of 5 after the renovation. The manager thanked all the staff for their hard work.",
    "options": [
      "deadline",
      "lecture",
      "score",
      "homework"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The university is famous for its high _____ standards. Many of its graduates now work for large international companies.",
    "options": [
      "diligent",
      "academic",
      "efficient",
      "nervous"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Maria won a full _____ to study engineering in Germany. It covers her tuition and living costs for four years.",
    "options": [
      "deadline",
      "lecture",
      "homework",
      "scholarship"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Our most _____ employee never leaves before finishing every task. She checks each report twice before sending it.",
    "options": [
      "academic",
      "empty",
      "diligent",
      "sudden"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The new machines are more _____ than the old ones. They produce twice as many parts while using less electricity.",
    "options": [
      "efficient",
      "diligent",
      "academic",
      "nervous"
    ],
    "answer": 0,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "learn": {
    "pos": "v.",
    "en_def": "to get knowledge or a new skill by studying or practicing",
    "cn_def": "學習；學會"
  },
  "learning": {
    "pos": "n.",
    "en_def": "the process of getting knowledge or skills",
    "cn_def": "學習"
  },
  "research": {
    "pos": "n.",
    "en_def": "careful study of a subject to find new facts or information",
    "cn_def": "研究；調查"
  },
  "revise": {
    "pos": "v.",
    "en_def": "to change something to correct or improve it",
    "cn_def": "修改；修訂"
  },
  "review": {
    "pos": "v.",
    "en_def": "to look at or check something carefully again",
    "cn_def": "審閱；檢查；複習"
  },
  "memorize": {
    "pos": "v.",
    "en_def": "to learn something so well that you can remember it exactly",
    "cn_def": "記住；背誦"
  },
  "memory": {
    "pos": "n.",
    "en_def": "the ability to remember things",
    "cn_def": "記憶力；記憶"
  },
  "concentrate": {
    "pos": "v.",
    "en_def": "to give all your attention to something",
    "cn_def": "專心；集中注意力"
  },
  "concentration": {
    "pos": "n.",
    "en_def": "the ability to give all your attention to something",
    "cn_def": "專注力；注意力"
  },
  "focus": {
    "pos": "v.",
    "en_def": "to give most of your attention or effort to one thing",
    "cn_def": "專注；集中"
  },
  "practice": {
    "pos": "n.",
    "en_def": "doing something regularly to improve your skill",
    "cn_def": "練習"
  },
  "understand": {
    "pos": "v.",
    "en_def": "to know the meaning of something",
    "cn_def": "理解；明白；懂"
  },
  "understanding": {
    "pos": "n.",
    "en_def": "knowledge of how something works or what it means",
    "cn_def": "理解；了解"
  },
  "analyze": {
    "pos": "v.",
    "en_def": "to study something carefully to understand it",
    "cn_def": "分析"
  },
  "analysis": {
    "pos": "n.",
    "en_def": "a careful study of something to understand it",
    "cn_def": "分析"
  },
  "explore": {
    "pos": "v.",
    "en_def": "to look at or think about something carefully to learn more",
    "cn_def": "探索；研究；開拓"
  },
  "exploration": {
    "pos": "n.",
    "en_def": "the act of searching an area to learn about it or find something",
    "cn_def": "探勘；探索"
  },
  "lecture": {
    "pos": "n.",
    "en_def": "a talk on a subject given to a group of people",
    "cn_def": "演講；講課"
  },
  "seminar": {
    "pos": "n.",
    "en_def": "a meeting where a group of people discuss a subject with an expert",
    "cn_def": "研討會；專題討論會"
  },
  "assignment": {
    "pos": "n.",
    "en_def": "a piece of work that someone is given to do",
    "cn_def": "任務；作業"
  },
  "homework": {
    "pos": "n.",
    "en_def": "work that students are given to do at home",
    "cn_def": "家庭作業"
  },
  "project": {
    "pos": "n.",
    "en_def": "a planned piece of work with a particular goal",
    "cn_def": "專案；計畫"
  },
  "deadline": {
    "pos": "n.",
    "en_def": "a time or date by which something must be finished",
    "cn_def": "截止期限"
  },
  "exam": {
    "pos": "n.",
    "en_def": "a formal test of knowledge or skill",
    "cn_def": "考試"
  },
  "examination": {
    "pos": "n.",
    "en_def": "a careful check of something or someone, often by an expert",
    "cn_def": "檢查；考試"
  },
  "grade": {
    "pos": "n.",
    "en_def": "a letter or number that shows how good a student's work is",
    "cn_def": "成績；分數"
  },
  "score": {
    "pos": "n.",
    "en_def": "the number of points someone gets in a test or rating",
    "cn_def": "分數；得分"
  },
  "academic": {
    "pos": "adj.",
    "en_def": "related to schools, colleges, and studying",
    "cn_def": "學術的；學業的"
  },
  "scholarship": {
    "pos": "n.",
    "en_def": "money given to a student to help pay for their education",
    "cn_def": "獎學金"
  },
  "diligent": {
    "pos": "adj.",
    "en_def": "working hard and carefully",
    "cn_def": "勤奮的；用功的"
  },
  "efficient": {
    "pos": "adj.",
    "en_def": "working well without wasting time, money, or energy",
    "cn_def": "有效率的；高效能的"
  }
};

const EXTRA_GLOSSES = {};
