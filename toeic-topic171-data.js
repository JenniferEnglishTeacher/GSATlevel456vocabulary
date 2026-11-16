// Topic 171 Quiz Data: High School 高中
// Source word list: https://www.examword.com/group-topic/high-school — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T171 - High School 高中",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "transition",
    "pos": "n.",
    "cn_def": "過渡；轉變",
    "en_def": "a change from one situation or stage to another",
    "sentence": "A: Our daughter starts at the new high school next month, and she seems nervous about leaving all her middle school friends behind, so what can we do as parents to help her? B: Many schools hold a welcome day in August, which can make the {{BLANK}} much smoother because students meet teachers and see the classrooms before the first day.",
    "cn": "A：我們女兒下個月要進新的高中，她似乎很擔心要離開國中的朋友，身為父母我們能做些什麼來幫她？ B：許多學校會在八月舉辦迎新日，學生能在開學前先認識老師、看看教室，這能讓【過渡期】順利許多。"
  },
  {
    "word": "teenager",
    "pos": "n.",
    "cn_def": "青少年",
    "en_def": "a young person between 13 and 19 years old",
    "sentence": "A: The marketing team wants to design a new phone plan for students, but who exactly are we trying to reach with the cheaper price and the extra data for social media apps? B: We are mainly targeting a {{BLANK}} between fifteen and eighteen who uses the phone for homework, music, and chatting with friends after school every day.",
    "cn": "A：行銷團隊想為學生設計新的手機方案，但這個比較便宜、又附加社群軟體流量的方案，我們究竟要鎖定誰？ B：我們主要鎖定十五到十八歲之間的【青少年】，他們每天放學後會用手機寫作業、聽音樂和跟朋友聊天。"
  },
  {
    "word": "curriculum",
    "pos": "n.",
    "cn_def": "課程",
    "en_def": "all the subjects and courses taught in a school or program",
    "sentence": "A: Why did the school board invite several local business owners to the meeting at city hall last Wednesday evening? B: They are updating the {{BLANK}} for next year and want to add practical courses such as basic accounting and computer coding, so they asked employers which skills young workers really need.",
    "cn": "A：為什麼教育委員會上週三晚上邀請幾位當地企業主到市政廳開會？ B：他們正在更新明年的【課程】，想加入基礎會計和程式設計等實用科目，所以詢問雇主年輕員工真正需要哪些技能。"
  },
  {
    "word": "credit",
    "pos": "n.",
    "cn_def": "學分",
    "en_def": "a unit that shows a student has finished a course",
    "sentence": "A: My son wants to take a summer course in business English at the community college, but will it actually count toward his high school diploma? B: Yes, if he passes the final test, he will receive one {{BLANK}}, and the school office will add it to his record before the new semester begins in September.",
    "cn": "A：我兒子想在社區大學上暑期商用英語課，但這真的能算進他的高中畢業文憑嗎？ B：可以，只要他通過期末測驗，就能拿到一個【學分】，學校辦公室會在九月新學期開始前把它加進他的紀錄。"
  },
  {
    "word": "graduation",
    "pos": "n.",
    "cn_def": "畢業；畢業典禮",
    "en_def": "finishing your studies at a school; the ceremony for this",
    "sentence": "A: Could I take next Friday afternoon off, even though we have the monthly sales report due that day? B: Of course, I know your daughter's {{BLANK}} ceremony is at the sports center at two o'clock, so just finish the report on Thursday and enjoy watching her receive her diploma with the rest of the family.",
    "cn": "A：雖然下週五要交每月銷售報告，我可以請那天下午的假嗎？ B：當然可以，我知道你女兒的【畢業】典禮下午兩點在體育中心舉行，你週四把報告完成，好好和家人一起看她領畢業證書吧。"
  },
  {
    "word": "elective",
    "pos": "n.",
    "cn_def": "選修課",
    "en_def": "a course that a student chooses to take",
    "sentence": "A: Besides the required math and science classes, what other subjects is your nephew taking at his high school this year? B: He chose photography as an {{BLANK}} because he hopes to work in advertising someday, and the teacher even arranged a visit to a local design company so students could see real projects.",
    "cn": "A：除了必修的數學和自然課，你姪子今年在高中還修了哪些科目？ B：他選了攝影當【選修課】，因為他希望將來從事廣告業，老師甚至安排參觀當地一家設計公司，讓學生看看真實的專案。"
  },
  {
    "word": "requirement",
    "pos": "n.",
    "cn_def": "要求；必要條件",
    "en_def": "something that you must do or have",
    "sentence": "A: Why are so many seniors suddenly signing up to help at the food bank on weekends this spring? B: Our school now has a {{BLANK}} that every student must complete forty hours of community service before graduating, and many of them waited until their last semester to start.",
    "cn": "A：為什麼今年春天有這麼多高三生突然報名週末去食物銀行幫忙？ B：我們學校現在有一項【規定】，每位學生畢業前都必須完成四十小時的社區服務，很多人拖到最後一學期才開始。"
  },
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "時間表；課表",
    "en_def": "a plan that lists times for activities",
    "sentence": "A: Can the bus company change its morning route so that students from the new apartment complex arrive at school on time? B: We will review the {{BLANK}} with the school next week, and if we add a stop at seven fifteen, the students should reach the main gate before the first bell rings.",
    "cn": "A：公車公司能不能調整早上的路線，讓新公寓社區的學生準時到校？ B：我們下週會和學校一起檢討【時刻表】，如果在七點十五分加一個站，學生應該能在第一聲鐘響前抵達校門口。"
  },
  {
    "word": "homework",
    "pos": "n.",
    "cn_def": "家庭作業；功課",
    "en_def": "schoolwork that students do at home",
    "sentence": "A: Why did the library decide to stay open until nine o'clock on weekday evenings starting this month? B: Many parents work late, so the library wants to give students a quiet and safe place to finish their {{BLANK}}, and volunteer tutors are available to help with math and English questions.",
    "cn": "A：為什麼圖書館決定從這個月起平日晚上開到九點？ B：許多家長工作到很晚，所以圖書館想提供學生一個安靜又安全的地方完成【功課】，而且還有志工家教可以幫忙解答數學和英文問題。"
  },
  {
    "word": "exam",
    "pos": "n.",
    "cn_def": "考試",
    "en_def": "a formal test of knowledge or skill",
    "sentence": "A: Why is the coffee shop near the high school so crowded with students every afternoon this week? B: They are preparing for the final {{BLANK}} next Monday, so groups of classmates meet here after school to review their notes together, and the owner even offers them a small discount on drinks.",
    "cn": "A：為什麼這週每天下午高中附近的咖啡店都擠滿了學生？ B：他們在準備下週一的期末【考試】，同學們放學後成群來這裡一起複習筆記，老闆甚至給他們飲料小折扣。"
  },
  {
    "word": "assessment",
    "pos": "n.",
    "cn_def": "評量；評估",
    "en_def": "a test or judgment of someone's ability or work",
    "sentence": "A: How do teachers decide whether a student is ready for the advanced English class before the semester starts? B: Each student takes a short {{BLANK}} that includes reading, listening, and a brief interview, and the results help the department place everyone in a class that matches their level.",
    "cn": "A：學期開始前，老師如何判斷學生是否能上進階英文班？ B：每位學生都要做一個簡短的【評量】，包含閱讀、聽力和簡短面談，結果能幫助科內把每個人分到符合程度的班級。"
  },
  {
    "word": "grade",
    "pos": "n.",
    "cn_def": "成績；等級",
    "en_def": "a mark or letter that shows how good a student's work is",
    "sentence": "A: Why was your son so happy when he came home from school yesterday afternoon? B: He finally received an A as his final {{BLANK}} in chemistry after studying with a tutor twice a week, and his teacher wrote a note saying how much his lab reports had improved this term.",
    "cn": "A：你兒子昨天下午放學回家為什麼那麼開心？ B：他每週跟家教讀兩次書後，化學的最終【成績】終於拿到A，老師還寫了紙條說他這學期的實驗報告進步很多。"
  },
  {
    "word": "GPA",
    "pos": "n.",
    "cn_def": "學業平均成績",
    "en_def": "grade point average; the average of all a student's marks",
    "sentence": "A: What do the admissions officers at the university look at first when they review applications from high school seniors? B: They usually check the student's {{BLANK}} to see the average of all their course results, but they also read the personal essay and letters from teachers before making a final decision.",
    "cn": "A：大學招生人員審閱高三生申請時，第一個看的是什麼？ B：他們通常會先看學生的【在校平均成績】，了解所有課程成績的平均，不過做最後決定前也會讀個人自傳和老師的推薦信。"
  },
  {
    "word": "deadline",
    "pos": "n.",
    "cn_def": "截止期限",
    "en_def": "the latest time by which something must be done",
    "sentence": "A: When do students need to hand in their applications for the summer internship program at our company? B: The {{BLANK}} is March thirty-first, so please remind the high school career office to send us the forms and recommendation letters early enough for our team to review them carefully.",
    "cn": "A：學生何時必須交出本公司暑期實習計畫的申請？ B：【截止日期】是三月三十一日，所以請提醒高中的生涯輔導處盡早把表格和推薦信寄來，讓我們團隊能仔細審閱。"
  },
  {
    "word": "responsibility",
    "pos": "n.",
    "cn_def": "責任；責任感",
    "en_def": "a duty to take care of something; being reliable",
    "sentence": "A: Why did you let your daughter take a part-time job at the bakery on Saturday mornings during her final year? B: We think working there teaches her {{BLANK}}, because she has to arrive on time, handle money carefully, and serve customers politely even when the shop is very busy.",
    "cn": "A：為什麼你讓女兒在高三時週六早上去麵包店打工？ B：我們認為在那裡工作能教她【責任感】，因為她必須準時到班、小心處理金錢，而且即使店裡很忙也要有禮貌地招呼客人。"
  },
  {
    "word": "independence",
    "pos": "n.",
    "cn_def": "獨立；自主",
    "en_def": "the ability to do things without help from others",
    "sentence": "A: Isn't your son a little young to travel alone by train to visit the university campus in another city? B: He is seventeen now, and we want him to develop more {{BLANK}} before he leaves home, so he planned the whole trip himself, including the tickets, the hotel, and the campus tour.",
    "cn": "A：你兒子獨自搭火車去另一個城市參觀大學校園，會不會有點太小？ B：他現在十七歲了，我們希望他離家前能培養更多【獨立性】，所以整趟旅程都由他自己規劃，包括車票、旅館和校園導覽。"
  },
  {
    "word": "stress",
    "pos": "n.",
    "cn_def": "壓力；緊張",
    "en_def": "a feeling of worry caused by difficult situations",
    "sentence": "A: Why has the school started offering free yoga classes in the gym every Wednesday after lunch? B: Teachers noticed that many students feel a lot of {{BLANK}} during the busy test season, so the counselors hope that some gentle exercise and breathing practice will help them relax and sleep better.",
    "cn": "A：為什麼學校開始每週三午餐後在體育館提供免費瑜伽課？ B：老師們發現很多學生在忙碌的考試季感到很大的【壓力】，所以輔導老師希望一些溫和的運動和呼吸練習能幫助他們放鬆並睡得更好。"
  },
  {
    "word": "pressure",
    "pos": "n.",
    "cn_def": "壓力",
    "en_def": "a strong demand or push from others to do something",
    "sentence": "A: Why did your niece decide to study design instead of medicine, even though her parents are both doctors? B: She felt a lot of {{BLANK}} from her family at first, but after a long talk, they agreed that she should follow her own interests and choose a career she will truly enjoy.",
    "cn": "A：雖然你姪女的父母都是醫生，為什麼她決定念設計而不是醫學？ B：她一開始感受到家人很大的【壓力】，但經過一次長談後，他們同意她應該追隨自己的興趣，選擇真正喜歡的職業。"
  },
  {
    "word": "peer",
    "pos": "n.",
    "cn_def": "同儕；同輩",
    "en_def": "a person of the same age or position as you",
    "sentence": "A: How does the new tutoring program at the high school work, and who pays the tutors for their time? B: Older students help younger ones with math after class, and the company sponsoring the program gives each {{BLANK}} tutor a small gift card every month to thank them for their effort.",
    "cn": "A：高中新的課輔計畫是怎麼運作的？誰付家教的費用？ B：高年級學生下課後幫學弟妹補數學，贊助這個計畫的公司每月會送每位【同儕】小老師一張小禮券，感謝他們的付出。"
  },
  {
    "word": "extracurricular",
    "pos": "adj.",
    "cn_def": "課外的",
    "en_def": "done outside normal school classes",
    "sentence": "A: Besides good test results, what did the scholarship committee like most about the student who won this year's award? B: She took part in many {{BLANK}} activities, such as the debate team and the school newspaper, and she also volunteered at the hospital every weekend, which showed strong leadership and time management.",
    "cn": "A：除了優異的考試成績，獎學金委員會最欣賞今年得獎學生的哪一點？ B：她參加了許多【課外】活動，例如辯論隊和校刊，每週末還去醫院當志工，展現了很強的領導力和時間管理能力。"
  },
  {
    "word": "leadership",
    "pos": "n.",
    "cn_def": "領導能力；領導力",
    "en_def": "the ability to guide and organize a group",
    "sentence": "A: Why did the company choose a high school student to speak at the opening of the new community center? B: She organized a group of classmates to clean the local park every month, and her {{BLANK}} impressed the mayor so much that he asked her to share her experience with the audience.",
    "cn": "A：為什麼公司選一位高中生在新社區中心開幕時致詞？ B：她組織一群同學每個月清掃當地公園，她的【領導能力】讓市長印象深刻，所以請她和觀眾分享經驗。"
  },
  {
    "word": "club",
    "pos": "n.",
    "cn_def": "社團；俱樂部",
    "en_def": "a group of people who meet for a shared interest",
    "sentence": "A: Is there any way for students who enjoy cooking to practice their skills at school after classes end? B: Yes, the cooking {{BLANK}} meets every Thursday in the home economics room, and next month a local restaurant chef will visit to teach the members how to prepare simple and healthy lunches.",
    "cn": "A：有沒有辦法讓喜歡烹飪的學生放學後在學校練習技巧？ B：有，烹飪【社團】每週四在家政教室聚會，下個月還有當地餐廳的主廚會來教社員準備簡單又健康的午餐。"
  },
  {
    "word": "athletics",
    "pos": "n.",
    "cn_def": "體育運動；田徑",
    "en_def": "sports such as running, jumping and other team sports",
    "sentence": "A: Why is the sporting goods store offering a special discount to students from Central High School this month? B: The store sponsors the school's {{BLANK}} program, which includes track, swimming, and basketball teams, so it wants to help students buy good running shoes and uniforms before the new season begins.",
    "cn": "A：為什麼運動用品店這個月提供中央高中學生特別折扣？ B：這家店贊助學校的【體育運動】計畫，包括田徑、游泳和籃球隊，所以想在新賽季開始前幫學生買到好的跑鞋和制服。"
  },
  {
    "word": "discipline",
    "pos": "n.",
    "cn_def": "紀律；自律",
    "en_def": "the ability to control yourself and follow rules",
    "sentence": "A: What do you think is the main reason why your daughter's grades improved so much this semester? B: She showed great {{BLANK}} by turning off her phone every evening and studying for two hours at the same time each day, even when her friends invited her to go out.",
    "cn": "A：你覺得你女兒這學期成績進步這麼多的主要原因是什麼？ B：她展現了很強的【自律】，每天晚上關掉手機，在同一時間讀書兩小時，即使朋友約她出去也一樣。"
  },
  {
    "word": "attendance",
    "pos": "n.",
    "cn_def": "出席；出席人數",
    "en_def": "being present at school, work or an event; the number of people present",
    "sentence": "A: Why did the principal send letters to some families during the second week of the semester? B: The school is worried about poor {{BLANK}}, because several students have missed many classes without a reason, and the principal wants parents to make sure their children come to school every day.",
    "cn": "A：為什麼校長在學期第二週寄信給一些家庭？ B：學校擔心學生【出席率】不佳，因為有幾位學生無故缺了很多課，校長希望家長確保孩子每天都來上學。"
  },
  {
    "word": "motivation",
    "pos": "n.",
    "cn_def": "動機；幹勁",
    "en_def": "the reason or desire to do something",
    "sentence": "A: How did the teacher get her students so interested in learning English this year when many of them disliked the subject before? B: She increased their {{BLANK}} by inviting staff from an international company to talk about how they use English at work, so the students finally saw why it matters.",
    "cn": "A：很多學生以前不喜歡英文，這位老師今年是怎麼讓學生對學英文這麼有興趣的？ B：她邀請一家跨國公司的員工來分享如何在工作上使用英文，提高了學生的【學習動機】，讓他們終於明白英文的重要。"
  },
  {
    "word": "preparation",
    "pos": "n.",
    "cn_def": "準備",
    "en_def": "the work of getting ready for something",
    "sentence": "A: Why does your son go to the community center every Saturday morning instead of sleeping late like his friends? B: He is attending a free course in {{BLANK}} for job interviews, where volunteers from local businesses teach students how to write a résumé, dress properly, and answer common questions.",
    "cn": "A：為什麼你兒子每週六早上都去社區中心，而不像他朋友那樣睡懶覺？ B：他在上免費的求職面試【準備】課程，當地企業的志工會教學生如何寫履歷、穿著得體以及回答常見問題。"
  },
  {
    "word": "identity",
    "pos": "n.",
    "cn_def": "身分；認同感",
    "en_def": "who a person or group is; a feeling of belonging",
    "sentence": "A: Why did the student council decide to design new school jackets with a special logo this year? B: They wanted to build a stronger sense of {{BLANK}} among students, so everyone voted on the colors and the design, and now many students proudly wear the jackets to sports events.",
    "cn": "A：為什麼學生會今年決定設計印有特別標誌的新校服外套？ B：他們想在學生之間建立更強的【認同感】，所以大家一起投票選顏色和設計，現在很多學生都驕傲地穿著外套去看比賽。"
  },
  {
    "word": "guidance counselor",
    "pos": "n.phr.",
    "cn_def": "輔導老師",
    "en_def": "a school worker who gives students advice about study and careers",
    "sentence": "A: My daughter cannot decide whether to study business or nursing at university next year, so who at her high school could help her? B: She should make an appointment with the {{BLANK}}, who can explain different careers, help her compare programs, and give advice on preparing her application forms.",
    "cn": "A：我女兒無法決定明年大學要念商科還是護理，她高中裡誰能幫她？ B：她應該和【輔導老師】預約，對方能介紹不同職業、幫她比較科系，並提供準備申請表的建議。"
  },
  {
    "word": "college-ready",
    "pos": "adj.",
    "cn_def": "具備上大學能力的",
    "en_def": "having the skills needed to succeed at college or university",
    "sentence": "A: Why did the local technology firm donate laptops and offer free writing workshops to the high school last year? B: The firm wants more graduates to be {{BLANK}} when they finish school, so it helps students build strong study and computer skills that they will need in university courses.",
    "cn": "A：當地科技公司去年為什麼捐筆電給那所高中，並提供免費寫作工作坊？ B：這家公司希望更多畢業生在畢業時就【具備上大學的能力】，所以幫助學生培養將來大學課程所需的扎實讀書與電腦技能。"
  },
  {
    "word": "achievement",
    "pos": "n.",
    "cn_def": "成就",
    "en_def": "something good that you succeed in doing with effort",
    "sentence": "A: Why is the company newsletter featuring a story about a high school student this month? B: She won first place in a national science competition with a project on recycling plastic, and our manager thought her {{BLANK}} would inspire employees, since her mother works in our accounting department.",
    "cn": "A：為什麼這個月公司內部刊物刊登一篇關於高中生的報導？ B：她以回收塑膠的專題在全國科學競賽中獲得第一名，經理認為她的【成就】能激勵員工，因為她媽媽在我們會計部工作。"
  }
];

const MCQS = [
  {
    "q": "The firm hired a consultant to manage the _____ to the new accounting software. Training sessions were held so that no data was lost.",
    "options": [
      "transition",
      "graduation",
      "attendance",
      "motivation"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The museum's new interactive exhibit is popular with every _____ who visits. Young visitors aged thirteen to nineteen can enter free on weekends.",
    "options": [
      "curriculum",
      "deadline",
      "teenager",
      "requirement"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The training department redesigned its _____ for new employees. The updated program now includes courses on customer service and online safety.",
    "options": [
      "deadline",
      "curriculum",
      "stress",
      "peer"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Employees who finish the online leadership course will earn one _____ toward their professional certificate. The course takes about ten hours to complete.",
    "options": [
      "club",
      "grade",
      "exam",
      "credit"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "After _____, many of the interns were offered full-time positions at the bank. They will start work in the finance department in July.",
    "options": [
      "graduation",
      "homework",
      "pressure",
      "curriculum"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Students may choose one _____ each semester from a list of optional courses. This year, popular choices include marketing and graphic design.",
    "options": [
      "requirement",
      "deadline",
      "elective",
      "exam"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "A valid driver's license is a basic _____ for the delivery position. Applicants must also have at least two years of driving experience.",
    "options": [
      "achievement",
      "requirement",
      "transition",
      "independence"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The conference _____ was posted on the website last night. It lists all the speakers, rooms, and session times for both days.",
    "options": [
      "homework",
      "discipline",
      "motivation",
      "schedule"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The tutoring center helps children finish their _____ before their parents pick them up. Staff check every assignment for mistakes.",
    "options": [
      "homework",
      "leadership",
      "athletics",
      "identity"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "All new pharmacy assistants must pass a written _____ before they can work alone. The test covers safety rules and basic medicine names.",
    "options": [
      "club",
      "peer",
      "exam",
      "transition"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The manager completed an _____ of each employee's performance at the end of the year. Workers who scored well received a bonus.",
    "options": [
      "elective",
      "assessment",
      "attendance",
      "independence"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The coffee beans are sorted by size and quality into a high or low _____. Only the best beans are sold to luxury hotels.",
    "options": [
      "credit",
      "schedule",
      "club",
      "grade"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Applicants for the management trainee program must have a university _____ of at least 3.0. Copies of academic transcripts are also required.",
    "options": [
      "GPA",
      "club",
      "deadline",
      "peer"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The printing company needs the final design files by Friday. If we miss this _____, the brochures will not be ready for the trade show.",
    "options": [
      "credit",
      "peer",
      "deadline",
      "elective"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "As store manager, Ms. Chen has full _____ for hiring and training new staff. She also handles customer complaints personally.",
    "options": [
      "athletics",
      "responsibility",
      "attendance",
      "curriculum"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Working from home gives employees more _____ to plan their own day. However, they must still attend the weekly video meeting.",
    "options": [
      "homework",
      "requirement",
      "teenager",
      "independence"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Long hours and heavy workloads can cause serious _____ among nurses. The hospital now offers free counseling sessions to its staff.",
    "options": [
      "stress",
      "graduation",
      "curriculum",
      "club"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Sales staff are under great _____ to reach their targets before the end of the quarter. Managers have promised bonuses to top performers.",
    "options": [
      "identity",
      "schedule",
      "pressure",
      "elective"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Each new employee is paired with a _____ mentor from the same department. The two meet weekly to discuss questions about daily tasks.",
    "options": [
      "grade",
      "peer",
      "exam",
      "deadline"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The bank sponsors several _____ programs at local schools, including chess and robotics. These after-school activities help students develop new skills.",
    "options": [
      "legal",
      "medical",
      "nuclear",
      "extracurricular"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Ms. Patel was promoted because of her strong _____ during the merger. She guided her team through many difficult changes.",
    "options": [
      "leadership",
      "homework",
      "athletics",
      "credit"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The hotel's fitness _____ is open to guests from six in the morning until ten at night. Local residents may join for a monthly fee.",
    "options": [
      "exam",
      "grade",
      "club",
      "transition"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The city's new sports center will host the regional _____ competition next month. Runners and jumpers from twelve schools are expected to take part.",
    "options": [
      "curriculum",
      "athletics",
      "homework",
      "motivation"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Investing successfully requires patience and _____. Experts advise saving a fixed amount every month instead of making quick decisions.",
    "options": [
      "graduation",
      "club",
      "teenager",
      "discipline"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The organizers were pleased with the _____ at this year's trade fair. More than ten thousand visitors came over the three days.",
    "options": [
      "attendance",
      "transition",
      "homework",
      "credit"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The company introduced monthly rewards to increase staff _____. Since then, employees have worked harder and called in sick less often.",
    "options": [
      "curriculum",
      "peer",
      "motivation",
      "deadline"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Careful _____ is the key to a successful product launch. The team spent three months testing the new app before its release.",
    "options": [
      "attendance",
      "preparation",
      "identity",
      "elective"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The designers created a new logo to strengthen the brand's _____. The colors and font will appear on all packaging from next year.",
    "options": [
      "homework",
      "deadline",
      "athletics",
      "identity"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The _____ helped several seniors fill out their scholarship applications. She also arranged visits to nearby universities.",
    "options": [
      "guidance counselor",
      "curriculum",
      "athletics",
      "deadline"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Opening five new branches in one year was a remarkable _____ for the small company. The owner thanked all employees at the annual dinner.",
    "options": [
      "requirement",
      "pressure",
      "achievement",
      "homework"
    ],
    "answer": 2,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "transition": {
    "pos": "n.",
    "en_def": "a change from one situation or stage to another",
    "cn_def": "過渡；轉變"
  },
  "teenager": {
    "pos": "n.",
    "en_def": "a young person between 13 and 19 years old",
    "cn_def": "青少年"
  },
  "curriculum": {
    "pos": "n.",
    "en_def": "all the subjects and courses taught in a school or program",
    "cn_def": "課程"
  },
  "credit": {
    "pos": "n.",
    "en_def": "a unit that shows a student has finished a course",
    "cn_def": "學分"
  },
  "graduation": {
    "pos": "n.",
    "en_def": "finishing your studies at a school; the ceremony for this",
    "cn_def": "畢業；畢業典禮"
  },
  "elective": {
    "pos": "n.",
    "en_def": "a course that a student chooses to take",
    "cn_def": "選修課"
  },
  "requirement": {
    "pos": "n.",
    "en_def": "something that you must do or have",
    "cn_def": "要求；必要條件"
  },
  "schedule": {
    "pos": "n.",
    "en_def": "a plan that lists times for activities",
    "cn_def": "時間表；課表"
  },
  "homework": {
    "pos": "n.",
    "en_def": "schoolwork that students do at home",
    "cn_def": "家庭作業；功課"
  },
  "exam": {
    "pos": "n.",
    "en_def": "a formal test of knowledge or skill",
    "cn_def": "考試"
  },
  "assessment": {
    "pos": "n.",
    "en_def": "a test or judgment of someone's ability or work",
    "cn_def": "評量；評估"
  },
  "grade": {
    "pos": "n.",
    "en_def": "a mark or letter that shows how good a student's work is",
    "cn_def": "成績；等級"
  },
  "gpa": {
    "pos": "n.",
    "en_def": "grade point average; the average of all a student's marks",
    "cn_def": "學業平均成績"
  },
  "deadline": {
    "pos": "n.",
    "en_def": "the latest time by which something must be done",
    "cn_def": "截止期限"
  },
  "responsibility": {
    "pos": "n.",
    "en_def": "a duty to take care of something; being reliable",
    "cn_def": "責任；責任感"
  },
  "independence": {
    "pos": "n.",
    "en_def": "the ability to do things without help from others",
    "cn_def": "獨立；自主"
  },
  "stress": {
    "pos": "n.",
    "en_def": "a feeling of worry caused by difficult situations",
    "cn_def": "壓力；緊張"
  },
  "pressure": {
    "pos": "n.",
    "en_def": "a strong demand or push from others to do something",
    "cn_def": "壓力"
  },
  "peer": {
    "pos": "n.",
    "en_def": "a person of the same age or position as you",
    "cn_def": "同儕；同輩"
  },
  "extracurricular": {
    "pos": "adj.",
    "en_def": "done outside normal school classes",
    "cn_def": "課外的"
  },
  "leadership": {
    "pos": "n.",
    "en_def": "the ability to guide and organize a group",
    "cn_def": "領導能力；領導力"
  },
  "club": {
    "pos": "n.",
    "en_def": "a group of people who meet for a shared interest",
    "cn_def": "社團；俱樂部"
  },
  "athletics": {
    "pos": "n.",
    "en_def": "sports such as running, jumping and other team sports",
    "cn_def": "體育運動；田徑"
  },
  "discipline": {
    "pos": "n.",
    "en_def": "the ability to control yourself and follow rules",
    "cn_def": "紀律；自律"
  },
  "attendance": {
    "pos": "n.",
    "en_def": "being present at school, work or an event; the number of people present",
    "cn_def": "出席；出席人數"
  },
  "motivation": {
    "pos": "n.",
    "en_def": "the reason or desire to do something",
    "cn_def": "動機；幹勁"
  },
  "preparation": {
    "pos": "n.",
    "en_def": "the work of getting ready for something",
    "cn_def": "準備"
  },
  "identity": {
    "pos": "n.",
    "en_def": "who a person or group is; a feeling of belonging",
    "cn_def": "身分；認同感"
  },
  "guidance counselor": {
    "pos": "n.phr.",
    "en_def": "a school worker who gives students advice about study and careers",
    "cn_def": "輔導老師"
  },
  "college-ready": {
    "pos": "adj.",
    "en_def": "having the skills needed to succeed at college or university",
    "cn_def": "具備上大學能力的"
  },
  "achievement": {
    "pos": "n.",
    "en_def": "something good that you succeed in doing with effort",
    "cn_def": "成就"
  }
};

const EXTRA_GLOSSES = {};
