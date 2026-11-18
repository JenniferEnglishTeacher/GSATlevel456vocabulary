// Topic 395 Quiz Data: Teach 教學
// Source word list: https://www.examword.com/group-topic/teach — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T395 - Teach 教學",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "teacher",
    "pos": "n.",
    "cn_def": "老師；教師",
    "en_def": "a person whose job is to teach",
    "sentence": "A: Why did the training center hire someone new for the evening English course that starts next month? B: The old {{BLANK}} moved to Kaohsiung with her family, so the manager interviewed several candidates and chose a woman who has taught business writing to office workers for more than ten years.",
    "cn": "A：為什麼訓練中心要為下個月開始的晚間英文課程聘請新人？ B：原本的【老師】跟家人搬到高雄了，所以經理面試了幾位應徵者，選了一位已經教上班族商業寫作超過十年的女士。"
  },
  {
    "word": "educate",
    "pos": "v.",
    "cn_def": "教育",
    "en_def": "to teach people, especially about an important subject",
    "sentence": "A: What is the main purpose of the free workshops that the city bank is holding at the public library this weekend? B: The bank wants to {{BLANK}} young people about saving money and using credit cards wisely, because many college students fall into debt soon after they start their first jobs.",
    "cn": "A：市立銀行這個週末在公立圖書館舉辦的免費工作坊主要目的是什麼？ B：銀行想要【教育】年輕人如何存錢以及明智地使用信用卡，因為許多大學生在開始第一份工作後不久就負債了。"
  },
  {
    "word": "education",
    "pos": "n.",
    "cn_def": "教育",
    "en_def": "the process of teaching and learning, usually at school or college",
    "sentence": "A: Why are so many employees signing up for the evening classes at the university this semester? B: Our company now pays half of the cost of further {{BLANK}} for staff who have worked here for two years, so people are taking courses in accounting, marketing, and project management to improve their careers.",
    "cn": "A：為什麼這學期有這麼多員工報名大學的夜間課程？ B：公司現在為工作滿兩年的員工支付一半的進修【教育】費用，所以大家都在修會計、行銷和專案管理的課程來提升自己的職涯。"
  },
  {
    "word": "lesson",
    "pos": "n.",
    "cn_def": "一堂課；課程",
    "en_def": "a period of time when someone is taught a subject or skill",
    "sentence": "A: How was your first guitar class at the music shop near the train station on Saturday morning? B: It was better than I expected, because the {{BLANK}} lasted only forty-five minutes, but the instructor showed me three basic chords and gave me a short song to practice at home before next week.",
    "cn": "A：你星期六早上在火車站附近樂器行的第一堂吉他課怎麼樣？ B：比我預期的好，雖然那堂【課】只有四十五分鐘，但老師教了我三個基本和弦，還給了我一首短歌讓我下週前在家練習。"
  },
  {
    "word": "lecture",
    "pos": "n.",
    "cn_def": "講座；演講",
    "en_def": "a long talk to a group of people about a subject",
    "sentence": "A: Are you going to attend the talk by the famous economist at the convention center tomorrow afternoon? B: Yes, my manager bought tickets for our whole department, because the {{BLANK}} will cover how rising interest rates may affect small businesses, and we want to plan next year's budget more carefully.",
    "cn": "A：你明天下午會去會議中心聽那位知名經濟學家的演說嗎？ B：會，我經理幫我們整個部門買了票，因為那場【講座】會談到升息可能如何影響小型企業，而我們想更謹慎地規劃明年的預算。"
  },
  {
    "word": "instruct",
    "pos": "v.",
    "cn_def": "指導；指示",
    "en_def": "to tell or teach someone how to do something",
    "sentence": "A: What should the new cashiers do if a customer wants to return an item without a receipt? B: The store manager will {{BLANK}} them during the training session on Monday morning, and she will explain that they must call a supervisor before giving any refund to avoid mistakes and arguments with customers.",
    "cn": "A：如果有顧客想在沒有收據的情況下退貨，新收銀員該怎麼做？ B：店經理會在星期一早上的培訓課程中【指導】他們，她會說明在退款之前必須先打電話給主管，以避免出錯和跟顧客發生爭執。"
  },
  {
    "word": "instruction",
    "pos": "n.",
    "cn_def": "說明；指示",
    "en_def": "information that tells you how to do something",
    "sentence": "A: Why did the new coffee machine in the break room stop working after only two days? B: Someone poured milk into the water tank because they ignored the first {{BLANK}} on the label, which clearly says to use only clean water, so now a technician has to come and clean all the pipes inside.",
    "cn": "A：休息室的新咖啡機為什麼才兩天就壞了？ B：有人把牛奶倒進水箱，因為他忽略了標籤上的第一條【說明】，上面清楚寫著只能用乾淨的水，所以現在得請技術人員來清洗裡面所有的管子。"
  },
  {
    "word": "guide",
    "pos": "v.",
    "cn_def": "帶領；引導",
    "en_def": "to show someone the way or help them through a place or process",
    "sentence": "A: How will the visitors from our Japanese partner company find their way around the factory tomorrow? B: Kevin Lin from the production department will {{BLANK}} them through each area, show them the new packaging line, and answer their questions about safety rules before they join us for lunch in the cafeteria.",
    "cn": "A：我們日本合作公司的訪客明天要怎麼在工廠裡參觀？ B：生產部的林凱文會【帶領】他們參觀每個區域，展示新的包裝生產線，並在他們和我們一起到員工餐廳吃午餐之前回答有關安全規定的問題。"
  },
  {
    "word": "mentor",
    "pos": "n.",
    "cn_def": "導師；指導者",
    "en_def": "an experienced person who gives advice and help to someone less experienced",
    "sentence": "A: How did you learn to handle difficult clients so quickly after joining the sales team last spring? B: The company paired me with a {{BLANK}} who had worked in sales for fifteen years, and every Friday we had coffee together while she gave me practical advice about negotiating prices and keeping customers happy.",
    "cn": "A：你去年春天加入業務團隊後，怎麼這麼快就學會應付難搞的客戶？ B：公司幫我配了一位做了十五年業務的【導師】，每個星期五我們一起喝咖啡，她會給我關於議價和讓客戶滿意的實用建議。"
  },
  {
    "word": "train",
    "pos": "v.",
    "cn_def": "訓練；培訓",
    "en_def": "to teach someone the skills for a job or activity",
    "sentence": "A: Since the hotel is opening a new restaurant next month, how will the staff learn to use the new ordering system? B: The software company will send two experts to {{BLANK}} our waiters and kitchen staff for three days, so everyone should be comfortable with the tablets before the first guests arrive.",
    "cn": "A：既然飯店下個月要開新餐廳，員工要怎麼學會使用新的點餐系統？ B：軟體公司會派兩位專家來【訓練】我們的服務生和廚房員工三天，所以在第一批客人到來之前，大家應該都能熟練使用平板電腦。"
  },
  {
    "word": "training",
    "pos": "n.",
    "cn_def": "培訓；訓練",
    "en_def": "the process of learning the skills you need for a job",
    "sentence": "A: Why is the customer service office so quiet this morning, and where is everyone? B: Most of the team is attending a full-day {{BLANK}} session in the conference room on the third floor, where they are learning how to calm angry callers and solve billing problems more quickly.",
    "cn": "A：客服辦公室今天早上為什麼這麼安靜？大家都去哪了？ B：大部分組員都在三樓會議室參加一整天的【培訓】課程，學習如何安撫生氣的來電者以及更快速地解決帳單問題。"
  },
  {
    "word": "explain",
    "pos": "v.",
    "cn_def": "解釋；說明",
    "en_def": "to make something clear or easy to understand",
    "sentence": "A: The new expense reporting rules are really confusing, so do you know who can help me fill out this form correctly? B: Sarah in the accounting department can {{BLANK}} the changes to you in about ten minutes, because she attended the meeting where the finance director introduced the new system last week.",
    "cn": "A：新的費用報告規定真的很令人困惑，你知道誰能幫我正確填寫這張表格嗎？ B：會計部的莎拉大概十分鐘就能向你【解釋】這些變更，因為她參加了上週財務長介紹新系統的那場會議。"
  },
  {
    "word": "demonstrate",
    "pos": "v.",
    "cn_def": "示範；展示",
    "en_def": "to show how something works or how to do something",
    "sentence": "A: How do you plan to convince the restaurant owners to buy our new dishwashing machine at the trade fair? B: I will {{BLANK}} how the machine works at our booth every hour, because when customers see it clean a hundred plates in five minutes with very little water, they usually want to order one.",
    "cn": "A：你打算在商展上如何說服餐廳老闆購買我們的新洗碗機？ B：我會每小時在我們的攤位上【示範】這台機器的運作方式，因為當顧客看到它用很少的水在五分鐘內洗好一百個盤子時，他們通常就會想訂購一台。"
  },
  {
    "word": "present",
    "pos": "v.",
    "cn_def": "報告；提出",
    "en_def": "to show or explain information to a group of people",
    "sentence": "A: Who will talk about the results of the customer survey at the board meeting next Thursday? B: Our marketing manager will {{BLANK}} the findings with several colorful charts, and she will also suggest a few ways to improve our online service, since many customers complained about slow delivery last quarter.",
    "cn": "A：下週四的董事會議上由誰來報告顧客調查的結果？ B：我們的行銷經理會用幾張彩色圖表來【報告】調查結果，她也會提出幾個改善線上服務的方法，因為上一季很多顧客抱怨送貨太慢。"
  },
  {
    "word": "assign",
    "pos": "v.",
    "cn_def": "分配；指派",
    "en_def": "to give someone a job or task to do",
    "sentence": "A: The client wants the new website finished by the end of the month, so how are we going to manage all the work? B: The project leader will {{BLANK}} each task to a different designer this afternoon, and we will meet every Monday to check our progress and solve any problems before they cause delays.",
    "cn": "A：客戶希望新網站在月底前完成，我們要怎麼處理所有的工作？ B：專案負責人今天下午會把每項任務【分配】給不同的設計師，我們每週一開會檢查進度，在問題造成延誤之前解決它們。"
  },
  {
    "word": "homework",
    "pos": "n.",
    "cn_def": "家庭作業；功課",
    "en_def": "school work that students do at home",
    "sentence": "A: Why does your son go to the community center every day after school instead of coming straight home? B: Both my husband and I work until seven, so he stays at the center's study room, where volunteers help the children finish their {{BLANK}} and prepare for tests before we pick him up.",
    "cn": "A：你兒子為什麼每天放學後都去社區中心，而不是直接回家？ B：我先生和我都工作到七點，所以他待在中心的自習室，那裡有志工幫孩子們完成【作業】並準備考試，直到我們去接他。"
  },
  {
    "word": "curriculum",
    "pos": "n.",
    "cn_def": "課程（整體規劃）",
    "en_def": "all the subjects and courses taught in a school or program",
    "sentence": "A: What changes is the language school making to attract more adult students this year? B: The director has redesigned the entire {{BLANK}} so that it focuses on practical business skills, such as writing emails, joining meetings, and giving short presentations, instead of only grammar and vocabulary tests.",
    "cn": "A：今年這所語言學校做了哪些改變來吸引更多成人學生？ B：主任重新設計了整個【課程】，讓它專注於實用的商業技能，例如寫電子郵件、參加會議和做簡短報告，而不是只有文法和單字測驗。"
  },
  {
    "word": "syllabus",
    "pos": "n.",
    "cn_def": "課程大綱",
    "en_def": "a list of the topics, readings and tests in a course",
    "sentence": "A: Do you know which chapters we need to read before the first class of the accounting course next Tuesday? B: The professor posted the {{BLANK}} on the school website yesterday, and it lists the reading for each week, the dates of the two exams, and the deadline for the final group report.",
    "cn": "A：你知道下週二會計課第一堂之前我們需要讀哪幾章嗎？ B：教授昨天把【課程大綱】放上學校網站了，上面列出每週的閱讀內容、兩次考試的日期以及期末小組報告的截止日。"
  },
  {
    "word": "discipline",
    "pos": "n.",
    "cn_def": "紀律",
    "en_def": "the practice of following rules and controlling your behavior",
    "sentence": "A: How does the new coach manage to keep the children so calm and focused during the long swimming practice? B: She believes that {{BLANK}} is the key to success, so she sets clear rules at the start of every session and gently but firmly reminds anyone who talks or plays around in the pool.",
    "cn": "A：新教練是如何在漫長的游泳練習中讓孩子們保持冷靜和專注的？ B：她相信【紀律】是成功的關鍵，所以她在每次課程開始時都訂下明確的規定，並溫和而堅定地提醒任何在泳池裡說話或嬉鬧的人。"
  },
  {
    "word": "encourage",
    "pos": "v.",
    "cn_def": "鼓勵",
    "en_def": "to give someone support or confidence to do something",
    "sentence": "A: Why has the company started giving free lunch to employees who join the Friday reading club? B: The managers want to {{BLANK}} staff to share ideas across departments, and they believe that people will feel more relaxed and creative if they talk about interesting books together over a good meal.",
    "cn": "A：為什麼公司開始提供免費午餐給參加週五讀書會的員工？ B：經理們想【鼓勵】員工跨部門分享想法，他們相信大家一邊享用美食一邊討論有趣的書，會感到更放鬆、更有創意。"
  },
  {
    "word": "motivate",
    "pos": "v.",
    "cn_def": "激勵；促使",
    "en_def": "to make someone want to work hard or do something",
    "sentence": "A: Sales were very low last quarter, so what is the new manager doing to improve the team's performance? B: She is trying to {{BLANK}} the staff by offering a bonus and an extra day off to anyone who reaches the monthly target, and she also praises good work in front of everyone during meetings.",
    "cn": "A：上一季銷售很差，新經理在做什麼來改善團隊表現？ B：她試著用獎金和額外一天假來【激勵】員工，只要達成每月目標就能得到，她也會在會議中當著大家的面稱讚表現好的人。"
  },
  {
    "word": "assess",
    "pos": "v.",
    "cn_def": "評估",
    "en_def": "to judge the amount, value or quality of something",
    "sentence": "A: Why is the insurance company sending someone to look at the warehouse after the heavy rain last weekend? B: An expert needs to {{BLANK}} the damage to the roof and the boxes stored on the ground floor, and then the company will decide how much money it will pay us for the repairs.",
    "cn": "A：上週末大雨過後，保險公司為什麼要派人來看倉庫？ B：一位專家需要【評估】屋頂和一樓存放的箱子受損的情況，之後保險公司會決定要支付我們多少修繕費用。"
  },
  {
    "word": "evaluate",
    "pos": "v.",
    "cn_def": "評估；評價",
    "en_def": "to study something carefully to decide how good it is",
    "sentence": "A: How will the company decide which of the three software programs to buy for the accounting department? B: A small team will {{BLANK}} each program for two weeks by testing its speed, cost, and ease of use, and then they will write a short report recommending the best choice to the finance director.",
    "cn": "A：公司要怎麼決定為會計部購買三套軟體中的哪一套？ B：一個小組會花兩週【評估】每套軟體，測試它的速度、成本和易用性，然後寫一份簡短報告，向財務長推薦最佳選擇。"
  },
  {
    "word": "grade",
    "pos": "n.",
    "cn_def": "成績；等級",
    "en_def": "a letter or number that shows how good a student's work is",
    "sentence": "A: Why do you look so happy after checking your email from the training institute this morning? B: I finally received my {{BLANK}} for the online marketing course I took last month, and I got an A, so my manager says I can lead the next social media campaign for our new products.",
    "cn": "A：你今天早上收到培訓機構的電子郵件後，為什麼看起來這麼開心？ B：我終於收到上個月上的網路行銷課的【成績】，我拿了A，所以我經理說我可以負責我們新產品的下一個社群媒體活動。"
  },
  {
    "word": "feedback",
    "pos": "n.",
    "cn_def": "意見回饋",
    "en_def": "comments about how good or useful something is",
    "sentence": "A: Why does the restaurant ask every customer to fill out a short card before they leave? B: The owner wants honest {{BLANK}} about the food, the prices, and the service, because she plans to change the menu next month and wants to keep the dishes that guests enjoy the most.",
    "cn": "A：為什麼那家餐廳要請每位顧客離開前填一張小卡？ B：老闆想要得到關於餐點、價格和服務的真實【意見回饋】，因為她打算下個月更換菜單，並且想保留客人最喜歡的菜色。"
  },
  {
    "word": "participate",
    "pos": "v.",
    "cn_def": "參加；參與",
    "en_def": "to take part in an activity or event",
    "sentence": "A: Is the company picnic next Saturday only for employees, or can we bring our families? B: Everyone's family is welcome, and the organizers hope that many children will {{BLANK}} in the games by the lake, because there will be prizes such as books, toys, and free tickets to the zoo.",
    "cn": "A：下週六的公司野餐只限員工參加，還是可以帶家人？ B：歡迎大家帶家人來，主辦人希望許多孩子會【參加】湖邊的遊戲，因為會有書、玩具和免費動物園門票等獎品。"
  },
  {
    "word": "discussion",
    "pos": "n.",
    "cn_def": "討論",
    "en_def": "a conversation in which people share ideas about a subject",
    "sentence": "A: Did the managers decide whether the office will move to the new building downtown next year? B: Not yet, because after a long {{BLANK}} that lasted nearly three hours, they still disagreed about the higher rent, so they will meet again next week after receiving more information from the landlord.",
    "cn": "A：經理們決定明年辦公室是否要搬到市中心的新大樓了嗎？ B：還沒，因為經過將近三小時的長時間【討論】，他們對較高的租金仍然意見不一，所以他們會在收到房東更多資料後，下週再開一次會。"
  },
  {
    "word": "question",
    "pos": "n.",
    "cn_def": "問題",
    "en_def": "something that you ask to get information",
    "sentence": "A: Why did the speaker stop his presentation about the new pension plan for a few minutes? B: An employee in the front row raised her hand and asked a {{BLANK}} about how the changes would affect people who plan to retire next year, and the speaker wanted to answer it carefully.",
    "cn": "A：講者為什麼把關於新退休金計畫的報告暫停了幾分鐘？ B：坐在前排的一名員工舉手問了一個【問題】，想知道這些改變會如何影響明年打算退休的人，而講者想仔細回答。"
  },
  {
    "word": "clarify",
    "pos": "v.",
    "cn_def": "釐清；澄清",
    "en_def": "to make something clearer or easier to understand",
    "sentence": "A: The client's email about the delivery dates is very unclear, so what should we do before we start shipping the products? B: Please call her this afternoon and {{BLANK}} whether she wants all the boxes sent at once or in two separate shipments, because a mistake could cost us a lot of money.",
    "cn": "A：客戶關於交貨日期的電子郵件非常不清楚，在開始出貨之前我們該怎麼做？ B：請你今天下午打電話給她，【釐清】她是想要所有箱子一次寄出還是分兩批寄送，因為一旦出錯可能會讓我們損失很多錢。"
  },
  {
    "word": "knowledge",
    "pos": "n.",
    "cn_def": "知識；了解",
    "en_def": "information and understanding that you get from learning or experience",
    "sentence": "A: Why did the travel agency hire a retired history professor to lead its new walking tours in the old part of the city? B: His deep {{BLANK}} of local temples and old buildings makes the tours much more interesting, and many tourists have written online reviews saying his stories were the best part of their trip.",
    "cn": "A：旅行社為什麼要聘請一位退休的歷史教授來帶領他們在老城區的新徒步導覽？ B：他對當地廟宇和老建築的深厚【知識】讓導覽有趣多了，許多遊客在網路上留下評論說他的故事是旅程中最棒的部分。"
  },
  {
    "word": "skill",
    "pos": "n.",
    "cn_def": "技能",
    "en_def": "an ability to do something well, usually learned through practice",
    "sentence": "A: What kind of person is the hotel looking for to fill the open position at the front desk? B: The manager says the most important {{BLANK}} for this job is staying calm and polite with tired guests, and she would also like someone who can speak both English and Japanese, since many tour groups arrive late at night.",
    "cn": "A：飯店在找什麼樣的人來填補櫃台的職缺？ B：經理說這份工作最重要的【技能】是對疲累的客人保持冷靜和禮貌，她也希望找到能說英文和日文的人，因為很多旅行團都很晚才抵達。"
  },
  {
    "word": "patient",
    "pos": "adj.",
    "cn_def": "有耐心的",
    "en_def": "able to wait or deal with problems calmly without getting angry",
    "sentence": "A: How do you stay so calm when older customers ask you the same questions about their new phones again and again? B: I try to be {{BLANK}} because many of them are using a smartphone for the first time, and I remember that my own grandmother needed several weeks before she felt comfortable sending photos.",
    "cn": "A：當年長的顧客一再問你關於新手機的同樣問題時，你是怎麼保持冷靜的？ B：我盡量保持【有耐心】，因為他們很多人是第一次使用智慧型手機，而且我記得我自己的奶奶也花了好幾週才能自在地傳送照片。"
  },
  {
    "word": "dedicated",
    "pos": "adj.",
    "cn_def": "盡心盡力的；專注投入的",
    "en_def": "working very hard because you care a lot about something",
    "sentence": "A: Why did the hospital give a special award to the head nurse at the end-of-year party last night? B: She is extremely {{BLANK}} to her work, and during the busy flu season she often stayed late to help her team, comfort worried families, and make sure every patient received the right care.",
    "cn": "A：醫院昨晚在年終派對上為什麼頒發特別獎給護理長？ B：她對工作非常【盡心盡力】，在忙碌的流感季節裡，她常常留得很晚，幫助她的團隊、安慰擔心的家屬，並確保每位病人都得到適當的照顧。"
  },
  {
    "word": "inspire",
    "pos": "v.",
    "cn_def": "激勵；啟發",
    "en_def": "to give someone the desire or confidence to do something",
    "sentence": "A: Why did the company invite a famous mountain climber to speak at the annual sales conference in Taichung? B: The organizers hoped her story about reaching the top of Mount Everest would {{BLANK}} the sales team to set bigger goals and keep working hard even when the market becomes difficult.",
    "cn": "A：公司為什麼邀請一位知名登山家在台中的年度業務大會上演講？ B：主辦單位希望她登上聖母峰頂的故事能【激勵】業務團隊設定更大的目標，即使市場變得艱難也持續努力。"
  }
];

const MCQS = [
  {
    "q": "Our new Spanish _____ has lived in Madrid for ten years. She uses real travel situations to make every class useful.",
    "options": [
      "teacher",
      "curriculum",
      "discussion",
      "homework"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The health department plans to _____ residents about recycling through free classes. Each session will be held at the community center.",
    "options": [
      "assess",
      "assign",
      "educate",
      "present"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The firm offers financial support for employees seeking further _____. Workers can take evening courses at a nearby university.",
    "options": [
      "feedback",
      "education",
      "discussion",
      "knowledge"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The cooking school charges forty dollars for each private _____. Students learn to prepare two simple dishes in ninety minutes.",
    "options": [
      "curriculum",
      "feedback",
      "knowledge",
      "lesson"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Professor Wang will give a _____ on renewable energy in the main hall. Seats are limited, so please register online today.",
    "options": [
      "homework",
      "lecture",
      "knowledge",
      "education"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The safety officer will _____ all workers to wear helmets in the warehouse. Anyone who ignores this rule will receive a warning.",
    "options": [
      "explain",
      "clarify",
      "participate",
      "instruct"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Please read each _____ on the screen carefully before starting the online test. The system will not let you go back to earlier pages.",
    "options": [
      "instruction",
      "mentor",
      "knowledge",
      "discipline"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "A volunteer will _____ guests through the museum's new photography exhibit. The tour starts every hour from the main entrance.",
    "options": [
      "assess",
      "explain",
      "guide",
      "assign"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Each new accountant is paired with an experienced _____ for the first six months. This senior colleague answers questions and offers career advice.",
    "options": [
      "mentor",
      "curriculum",
      "lecture",
      "instruction"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The airline needs to _____ two hundred new flight attendants before summer. The program covers safety rules and customer service.",
    "options": [
      "explain",
      "clarify",
      "train",
      "participate"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "All new drivers must complete a two-week _____ course before working alone. It includes both classroom lessons and road practice.",
    "options": [
      "feedback",
      "training",
      "knowledge",
      "discipline"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Could you _____ why the shipment arrived three days late? The customer is upset and wants a clear answer by Friday.",
    "options": [
      "assign",
      "motivate",
      "instruct",
      "explain"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "At the trade show, our engineers will _____ how the new printer works. Visitors can also try printing their own photos.",
    "options": [
      "assign",
      "demonstrate",
      "motivate",
      "participate"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Linda Chen will _____ her marketing plan to the board on Thursday. She has prepared slides with last year's sales figures.",
    "options": [
      "assess",
      "participate",
      "encourage",
      "present"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The supervisor will _____ each new task to a team member this afternoon. Everyone should check their email for details.",
    "options": [
      "assign",
      "motivate",
      "inspire",
      "participate"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The college updated its business _____ to include more courses on digital marketing. The changes will take effect next semester.",
    "options": [
      "feedback",
      "mentor",
      "curriculum",
      "question"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The coach says that strict _____ helped her team win the national championship. Players must arrive early and follow every rule.",
    "options": [
      "discipline",
      "question",
      "feedback",
      "lecture"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The library wants to _____ children to read more during the summer holiday. It offers small prizes for every five books finished.",
    "options": [
      "explain",
      "assess",
      "encourage",
      "present"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Managers use bonuses to _____ employees to reach their monthly sales targets. The top seller also receives a free hotel stay.",
    "options": [
      "clarify",
      "motivate",
      "evaluate",
      "demonstrate"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "An insurance agent visited the factory to _____ the damage caused by the fire. He will send his report next week.",
    "options": [
      "encourage",
      "instruct",
      "participate",
      "assess"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The committee will _____ each job applicant's performance during a short trial period. The best candidate will be hired in March.",
    "options": [
      "educate",
      "evaluate",
      "encourage",
      "clarify"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Maria was pleased to receive a high _____ on her final accounting exam. Her score was the best in the class.",
    "options": [
      "lesson",
      "question",
      "mentor",
      "grade"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The hotel collects _____ from guests through a short online survey after checkout. Managers review the comments every Monday morning.",
    "options": [
      "feedback",
      "curriculum",
      "discipline",
      "training"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "All staff members are invited to _____ in the charity run next Sunday. Registration closes at the end of this week.",
    "options": [
      "assign",
      "inspire",
      "participate",
      "clarify"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "After a long _____, the board agreed to open a new branch in Tainan. The final decision was announced to staff yesterday.",
    "options": [
      "discussion",
      "instruction",
      "curriculum",
      "mentor"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "If you have any _____ about your new contract, please contact the human resources office. Staff there are available until six.",
    "options": [
      "lesson",
      "curriculum",
      "question",
      "discipline"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The manager sent a follow-up email to _____ the new rules about working from home. Many employees had been confused by the first message.",
    "options": [
      "motivate",
      "clarify",
      "participate",
      "inspire"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Applicants should have a good _____ of spreadsheet software. Experience with online sales platforms is also helpful.",
    "options": [
      "lecture",
      "mentor",
      "discipline",
      "knowledge"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Call center workers must remain _____ when customers are angry or confused. Staying calm helps solve problems more quickly.",
    "options": [
      "expensive",
      "patient",
      "accidental",
      "previous"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The famous chef's speech was meant to _____ young cooks to open their own restaurants. Many students said it changed their plans.",
    "options": [
      "assess",
      "clarify",
      "assign",
      "inspire"
    ],
    "answer": 3,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "teacher": {
    "pos": "n.",
    "en_def": "a person whose job is to teach",
    "cn_def": "老師；教師"
  },
  "educate": {
    "pos": "v.",
    "en_def": "to teach people, especially about an important subject",
    "cn_def": "教育"
  },
  "education": {
    "pos": "n.",
    "en_def": "the process of teaching and learning, usually at school or college",
    "cn_def": "教育"
  },
  "lesson": {
    "pos": "n.",
    "en_def": "a period of time when someone is taught a subject or skill",
    "cn_def": "一堂課；課程"
  },
  "lecture": {
    "pos": "n.",
    "en_def": "a long talk to a group of people about a subject",
    "cn_def": "講座；演講"
  },
  "instruct": {
    "pos": "v.",
    "en_def": "to tell or teach someone how to do something",
    "cn_def": "指導；指示"
  },
  "instruction": {
    "pos": "n.",
    "en_def": "information that tells you how to do something",
    "cn_def": "說明；指示"
  },
  "guide": {
    "pos": "v.",
    "en_def": "to show someone the way or help them through a place or process",
    "cn_def": "帶領；引導"
  },
  "mentor": {
    "pos": "n.",
    "en_def": "an experienced person who gives advice and help to someone less experienced",
    "cn_def": "導師；指導者"
  },
  "train": {
    "pos": "v.",
    "en_def": "to teach someone the skills for a job or activity",
    "cn_def": "訓練；培訓"
  },
  "training": {
    "pos": "n.",
    "en_def": "the process of learning the skills you need for a job",
    "cn_def": "培訓；訓練"
  },
  "explain": {
    "pos": "v.",
    "en_def": "to make something clear or easy to understand",
    "cn_def": "解釋；說明"
  },
  "demonstrate": {
    "pos": "v.",
    "en_def": "to show how something works or how to do something",
    "cn_def": "示範；展示"
  },
  "present": {
    "pos": "v.",
    "en_def": "to show or explain information to a group of people",
    "cn_def": "報告；提出"
  },
  "assign": {
    "pos": "v.",
    "en_def": "to give someone a job or task to do",
    "cn_def": "分配；指派"
  },
  "homework": {
    "pos": "n.",
    "en_def": "school work that students do at home",
    "cn_def": "家庭作業；功課"
  },
  "curriculum": {
    "pos": "n.",
    "en_def": "all the subjects and courses taught in a school or program",
    "cn_def": "課程（整體規劃）"
  },
  "syllabus": {
    "pos": "n.",
    "en_def": "a list of the topics, readings and tests in a course",
    "cn_def": "課程大綱"
  },
  "discipline": {
    "pos": "n.",
    "en_def": "the practice of following rules and controlling your behavior",
    "cn_def": "紀律"
  },
  "encourage": {
    "pos": "v.",
    "en_def": "to give someone support or confidence to do something",
    "cn_def": "鼓勵"
  },
  "motivate": {
    "pos": "v.",
    "en_def": "to make someone want to work hard or do something",
    "cn_def": "激勵；促使"
  },
  "assess": {
    "pos": "v.",
    "en_def": "to judge the amount, value or quality of something",
    "cn_def": "評估"
  },
  "evaluate": {
    "pos": "v.",
    "en_def": "to study something carefully to decide how good it is",
    "cn_def": "評估；評價"
  },
  "grade": {
    "pos": "n.",
    "en_def": "a letter or number that shows how good a student's work is",
    "cn_def": "成績；等級"
  },
  "feedback": {
    "pos": "n.",
    "en_def": "comments about how good or useful something is",
    "cn_def": "意見回饋"
  },
  "participate": {
    "pos": "v.",
    "en_def": "to take part in an activity or event",
    "cn_def": "參加；參與"
  },
  "discussion": {
    "pos": "n.",
    "en_def": "a conversation in which people share ideas about a subject",
    "cn_def": "討論"
  },
  "question": {
    "pos": "n.",
    "en_def": "something that you ask to get information",
    "cn_def": "問題"
  },
  "clarify": {
    "pos": "v.",
    "en_def": "to make something clearer or easier to understand",
    "cn_def": "釐清；澄清"
  },
  "knowledge": {
    "pos": "n.",
    "en_def": "information and understanding that you get from learning or experience",
    "cn_def": "知識；了解"
  },
  "skill": {
    "pos": "n.",
    "en_def": "an ability to do something well, usually learned through practice",
    "cn_def": "技能"
  },
  "patient": {
    "pos": "adj.",
    "en_def": "able to wait or deal with problems calmly without getting angry",
    "cn_def": "有耐心的"
  },
  "dedicated": {
    "pos": "adj.",
    "en_def": "working very hard because you care a lot about something",
    "cn_def": "盡心盡力的；專注投入的"
  },
  "inspire": {
    "pos": "v.",
    "en_def": "to give someone the desire or confidence to do something",
    "cn_def": "激勵；啟發"
  }
};

const EXTRA_GLOSSES = {};
