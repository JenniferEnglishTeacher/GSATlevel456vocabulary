// Topic 382 Quiz Data: Subject 科目
// Source word list: https://www.examword.com/group-topic/subject — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T382 - Subject 科目",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "topic",
    "pos": "n.",
    "cn_def": "主題；話題",
    "en_def": "a subject that people talk or write about",
    "sentence": "A: Have you decided what you will talk about at the staff training session next Friday, since the manager wants every speaker to send a short outline by Wednesday? B: Yes, I chose customer service as my {{BLANK}} because many new employees still feel nervous when they answer difficult questions from angry callers on the phone.",
    "cn": "A：你決定好下週五員工培訓課上要講什麼了嗎？經理要每位講者在週三前交一份簡短大綱。 B：是的，我選了顧客服務當作我的【主題】，因為很多新進員工在電話中回答生氣來電者的困難問題時仍然很緊張。"
  },
  {
    "word": "discipline",
    "pos": "n.",
    "cn_def": "學科；學門",
    "en_def": "an area of study, especially at a university",
    "sentence": "A: Why did the university invite so many guests from hospitals, banks, and engineering firms to the career fair in the main hall this weekend? B: The organizers wanted students from every academic {{BLANK}} to meet real employers, so they can understand which skills companies expect from graduates before they apply for jobs.",
    "cn": "A：為什麼大學這個週末邀請這麼多醫院、銀行和工程公司的來賓到大禮堂參加就業博覽會？ B：主辦單位希望每個學術【學科】的學生都能認識真正的雇主，讓他們在求職前了解公司期望畢業生具備哪些技能。"
  },
  {
    "word": "field",
    "pos": "n.",
    "cn_def": "領域",
    "en_def": "an area of work or study",
    "sentence": "A: Your cousin has worked in marketing for almost ten years, so why is she suddenly taking night classes in computer programming at the community college? B: She believes that data skills are becoming important in almost every {{BLANK}}, and she hopes the new knowledge will help her get promoted to a management position next year.",
    "cn": "A：你表姊做行銷快十年了，為什麼她突然在社區大學上電腦程式設計的夜間課程？ B：她認為數據技能在幾乎每個【領域】都越來越重要，她希望這些新知識能幫助她明年升上管理職。"
  },
  {
    "word": "course",
    "pos": "n.",
    "cn_def": "課程",
    "en_def": "a set of classes on one subject",
    "sentence": "A: The company is offering to pay for one training class this year, but I am not sure which one would be most useful for my sales career. B: I took a three-month {{BLANK}} in business negotiation last spring, and it really helped me close deals with larger clients, so I strongly recommend that you sign up for it.",
    "cn": "A：公司今年願意幫忙出一門訓練課的費用，但我不確定哪一門對我的業務生涯最有用。 B：我去年春天上了一個為期三個月的商業談判【課程】，它真的幫助我和較大的客戶談成生意，所以我強烈建議你報名。"
  },
  {
    "word": "curriculum",
    "pos": "n.",
    "cn_def": "課程內容；全部課程",
    "en_def": "all the subjects taught in a school or program",
    "sentence": "A: Why are the teachers at the training center meeting with managers from several local factories this week, even though the new term does not start until September? B: They are updating the whole {{BLANK}} so that the classes match what employers really need, such as safety rules, basic computer skills, and clear communication with customers.",
    "cn": "A：為什麼訓練中心的老師們這週要和幾家當地工廠的經理開會？新學期九月才開始啊。 B：他們正在更新整個【課程內容】，讓課程符合雇主真正的需求，例如安全規定、基本電腦技能，以及和顧客清楚地溝通。"
  },
  {
    "word": "syllabus",
    "pos": "n.",
    "cn_def": "課程大綱",
    "en_def": "a plan that shows what will be studied in a class",
    "sentence": "A: How will I know what we will cover in the evening accounting class and when each of the reports is due during the semester? B: The instructor will email everyone a detailed {{BLANK}} before the first meeting, and it lists every weekly reading, the dates of the quizzes, and how your final score will be calculated.",
    "cn": "A：我要怎麼知道晚間會計課會教哪些內容，以及這學期每份報告的繳交期限？ B：講師會在第一次上課前寄給大家一份詳細的【課程大綱】，上面列出每週的閱讀、小考日期，以及你的期末成績如何計算。"
  },
  {
    "word": "module",
    "pos": "n.",
    "cn_def": "單元；模組",
    "en_def": "one separate part of a course or training program",
    "sentence": "A: The online safety training for new warehouse staff looks very long, so do we really have to finish all of it during our first week at work? B: No, it is divided into six short parts, and you only need to complete one {{BLANK}} each day, which usually takes about thirty minutes, including a quiz at the end.",
    "cn": "A：給倉庫新進員工的線上安全訓練看起來很長，我們真的要在上班第一週全部完成嗎？ B：不用，它分成六個短的部分，你每天只要完成一個【單元】，通常大約三十分鐘，包括最後的小測驗。"
  },
  {
    "word": "lesson",
    "pos": "n.",
    "cn_def": "一堂課；課程",
    "en_def": "a period of time when someone is taught something",
    "sentence": "A: My daughter wants to learn the piano, but both of us work late on weekdays, so when do you think she could practice with a private teacher? B: The music school near our office offers a one-hour {{BLANK}} every Saturday morning, and the teacher is very patient with beginners, so it would fit your family's busy schedule perfectly.",
    "cn": "A：我女兒想學鋼琴，但我們平日都工作到很晚，你覺得她什麼時候可以跟私人老師練習？ B：我們辦公室附近的音樂學校每週六早上有一小時的【課】，老師對初學者很有耐心，所以很適合你們家忙碌的行程。"
  },
  {
    "word": "lecture",
    "pos": "n.",
    "cn_def": "演講；講課",
    "en_def": "a talk given to a group of people to teach them about a subject",
    "sentence": "A: Why is the conference room on the third floor so crowded this afternoon, and who is the woman standing next to the projector with a microphone? B: She is a famous professor from the business school, and she is giving a {{BLANK}} about online marketing trends, so many employees from different departments came to listen and take notes.",
    "cn": "A：為什麼三樓的會議室今天下午這麼擁擠？站在投影機旁邊拿著麥克風的女士是誰？ B：她是商學院一位有名的教授，正在發表一場關於網路行銷趨勢的【演講】，所以很多不同部門的員工都來聽並做筆記。"
  },
  {
    "word": "seminar",
    "pos": "n.",
    "cn_def": "研討會；專題討論",
    "en_def": "a meeting where a small group discusses a subject",
    "sentence": "A: The new sales representatives still seem unsure about how to deal with complaints, so what is the department planning to do before the busy holiday season begins? B: We are holding a two-day {{BLANK}} next week where small groups will discuss real cases, share their ideas, and practice difficult conversations with an experienced customer service trainer.",
    "cn": "A：新的業務代表似乎還不確定如何處理客訴，部門在忙碌的假期旺季開始前打算怎麼做？ B：我們下週要舉辦為期兩天的【研討會】，小組會討論真實案例、分享想法，並和一位經驗豐富的客服講師練習困難的對話。"
  },
  {
    "word": "workshop",
    "pos": "n.",
    "cn_def": "工作坊；研習會",
    "en_def": "a meeting where people learn by doing activities together",
    "sentence": "A: Several employees told me they feel stressed about giving presentations, so is there anything the company can do to help them become more confident speakers? B: Human resources is organizing a hands-on {{BLANK}} this Thursday afternoon, where everyone will prepare a short talk, present it to a small group, and receive useful feedback from a coach.",
    "cn": "A：好幾位員工跟我說他們對做簡報感到壓力很大，公司有什麼方法可以幫助他們成為更有自信的講者嗎？ B：人資部門這週四下午要舉辦一場實作【工作坊】，每個人都會準備一段簡短的演說，向小組發表，並得到教練有用的回饋。"
  },
  {
    "word": "assignment",
    "pos": "n.",
    "cn_def": "作業；任務",
    "en_def": "a piece of work that a student or worker is given to do",
    "sentence": "A: Why are you still sitting in the library so late on Friday evening, when most of your classmates have already gone home for the weekend? B: My professor gave us a difficult {{BLANK}} about the marketing strategy of a local coffee chain, and it must be handed in online before nine o'clock on Monday morning.",
    "cn": "A：週五晚上這麼晚了，你的同學大多已經回家過週末，你怎麼還坐在圖書館裡？ B：我的教授給了我們一份關於當地連鎖咖啡店行銷策略的困難【作業】，必須在週一早上九點前上網繳交。"
  },
  {
    "word": "project",
    "pos": "n.",
    "cn_def": "專案；計畫",
    "en_def": "a planned piece of work that takes time and effort",
    "sentence": "A: You and your teammates have been staying late at the office every night this month, so what exactly are you working on so seriously? B: We are developing a new mobile app for our bank's customers, and the whole {{BLANK}} has to be finished by the end of December because the official launch has already been announced.",
    "cn": "A：你和你的組員這個月每晚都在辦公室待到很晚，你們到底在那麼認真地做什麼？ B：我們正在為銀行的客戶開發一個新的手機應用程式，整個【專案】必須在十二月底前完成，因為正式上線的日期已經宣布了。"
  },
  {
    "word": "exam",
    "pos": "n.",
    "cn_def": "考試",
    "en_def": "a formal test of knowledge or skill",
    "sentence": "A: You look really tired this morning, so did you stay up late again to watch soccer games with your friends? B: Not this time, because I was reviewing grammar and listening practice until two o'clock, since I am taking an important English {{BLANK}} on Saturday that my company requires for its overseas positions.",
    "cn": "A：你今天早上看起來真的很累，你又熬夜和朋友看足球比賽了嗎？ B：這次不是，我一直複習文法和聽力練習到兩點，因為我星期六要參加一場重要的英文【考試】，那是公司海外職位要求的。"
  },
  {
    "word": "test",
    "pos": "n.",
    "cn_def": "測驗；測試",
    "en_def": "a set of questions or tasks to check someone's ability",
    "sentence": "A: Before we hire the three candidates for the accounting team, do we need to check anything else besides their interviews and their previous work experience? B: Yes, each candidate must also take a short computer {{BLANK}} to show that they can use spreadsheets quickly and correctly, because our department handles thousands of numbers every single day.",
    "cn": "A：在我們錄用會計團隊的三位應徵者之前，除了面試和他們之前的工作經驗，還需要確認其他事情嗎？ B：需要，每位應徵者還必須參加一個簡短的電腦【測驗】，證明他們能快速又正確地使用試算表，因為我們部門每天都要處理成千上萬的數字。"
  },
  {
    "word": "grade",
    "pos": "n.",
    "cn_def": "成績；分數",
    "en_def": "a letter or number that shows how good a student's work is",
    "sentence": "A: Your son seemed so happy at dinner last night, so did something special happen at his school or at his basketball practice yesterday? B: He finally received an excellent {{BLANK}} on his science report after studying very hard for weeks, and his teacher even said it was one of the best papers in the class.",
    "cn": "A：你兒子昨晚吃晚餐時看起來好開心，他昨天在學校或籃球練習時發生了什麼特別的事嗎？ B：他用功了好幾個星期，終於在自然科報告拿到很好的【成績】，老師甚至說那是班上最好的報告之一。"
  },
  {
    "word": "credit",
    "pos": "n.",
    "cn_def": "學分",
    "en_def": "a unit that shows a student has completed part of a degree",
    "sentence": "A: I would like to take the online business writing class this summer, but will it really help me finish my degree any faster while I keep working full-time? B: Yes, the university accepts it, so you will earn one {{BLANK}} toward your diploma, which means you will need only three more classes before you can graduate next spring.",
    "cn": "A：我這個夏天想上線上商業寫作課，但在我繼續全職工作的情況下，它真的能幫我更快拿到學位嗎？ B：可以，大學承認這門課，所以你會獲得一個【學分】計入你的文憑，也就是說你明年春天畢業前只需要再修三門課。"
  },
  {
    "word": "major",
    "pos": "n.",
    "cn_def": "主修科目",
    "en_def": "the main subject a student studies at university",
    "sentence": "A: Your younger brother loves drawing and designing websites, so is he going to study art when he starts university in Taipei next fall? B: Actually, he has chosen computer science as his {{BLANK}}, because he thinks it will give him more job opportunities, but he still plans to take some design classes for fun.",
    "cn": "A：你弟弟很喜歡畫畫和設計網站，他明年秋天在台北上大學時會念藝術嗎？ B：其實他選了資訊工程當他的【主修】，因為他認為這會給他更多工作機會，不過他還是打算修一些設計課當興趣。"
  },
  {
    "word": "minor",
    "pos": "n.",
    "cn_def": "輔修科目",
    "en_def": "a second subject a student studies at university, less than the main one",
    "sentence": "A: You studied accounting at university, so how did you learn to speak Japanese well enough to deal with our clients in Osaka without an interpreter? B: I took Japanese as my {{BLANK}} during my second and third years, and I also spent one summer working at a hotel in Kyoto, which really improved my speaking.",
    "cn": "A：你大學念的是會計，那你是怎麼把日文學到不用口譯就能和我們大阪的客戶打交道的？ B：我大二和大三時把日文當作我的【輔修】，而且我還在京都的一家飯店工作了一個夏天，這真的讓我的口說進步很多。"
  },
  {
    "word": "compulsory",
    "pos": "adj.",
    "cn_def": "必修的；強制的",
    "en_def": "required by a rule; you must do it",
    "sentence": "A: I am not really interested in the fire safety training that is scheduled for next Tuesday afternoon, so can I skip it and finish my monthly report instead? B: I am afraid not, because the training is {{BLANK}} for every employee in the building, and the manager will check the attendance list carefully after the session ends.",
    "cn": "A：我對下週二下午安排的消防安全訓練不太有興趣，我可以不去，改成完成我的月報嗎？ B：恐怕不行，因為這個訓練對大樓裡每位員工都是【強制的】，而且課程結束後經理會仔細檢查出席名單。"
  },
  {
    "word": "optional",
    "pos": "adj.",
    "cn_def": "可選擇的；非必要的",
    "en_def": "something you can choose to do or not do",
    "sentence": "A: The welcome package says new employees can join a weekend hiking trip with the management team, but do I have to go if I already have family plans? B: Don't worry, the trip is completely {{BLANK}}, so you can stay home with your family, although many people enjoy it because it is a relaxed way to meet colleagues.",
    "cn": "A：迎新資料上說新進員工可以參加和管理團隊一起的週末健行，但如果我已經有家庭計畫，我一定要去嗎？ B：別擔心，這趟旅行完全是【自由參加的】，所以你可以待在家陪家人，不過很多人喜歡參加，因為這是認識同事的輕鬆方式。"
  },
  {
    "word": "core",
    "pos": "adj.",
    "cn_def": "核心的；基本的",
    "en_def": "most important or basic",
    "sentence": "A: Our new interns have only two weeks to learn about the company, so which subjects should the training program focus on before they start working with customers? B: They must first master the {{BLANK}} skills of the job, such as answering emails politely, using our ordering system, and explaining our products clearly, and then they can learn the details later.",
    "cn": "A：我們的新實習生只有兩週時間認識公司，在他們開始接觸顧客之前，訓練計畫應該著重在哪些主題？ B：他們必須先掌握這份工作的【核心】技能，例如有禮貌地回覆電子郵件、使用我們的訂購系統，以及清楚地介紹產品，細節之後再學就好。"
  },
  {
    "word": "elective",
    "pos": "n.",
    "cn_def": "選修課",
    "en_def": "a class that a student chooses to take, not one that is required",
    "sentence": "A: Besides the required business classes, is there any class at the evening school that you are taking just because you enjoy it? B: Yes, I chose photography as my {{BLANK}} this semester, because it is a relaxing break from finance and accounting, and I can also take better pictures of our products for the company website.",
    "cn": "A：除了必修的商業課程之外，你在夜間部有沒有純粹因為喜歡而修的課？ B：有，我這學期選了攝影當我的【選修課】，因為它讓我從財務和會計中輕鬆一下，而且我也能為公司網站拍出更好的產品照片。"
  },
  {
    "word": "theory",
    "pos": "n.",
    "cn_def": "理論",
    "en_def": "an idea or set of ideas that tries to explain something",
    "sentence": "A: The new manager talks a lot about motivation and team building in meetings, but do you think his ideas actually work in a busy store like ours? B: His {{BLANK}} sounds good on paper, but I think we should try it for a month with a small group of employees before we change the whole schedule.",
    "cn": "A：新經理在會議中常談激勵和團隊建立，但你覺得他的想法在像我們這樣忙碌的店裡真的行得通嗎？ B：他的【理論】紙上看起來不錯，但我認為我們應該先用一小群員工試行一個月，再改變整個班表。"
  },
  {
    "word": "concept",
    "pos": "n.",
    "cn_def": "概念",
    "en_def": "a general idea about what something is or how it works",
    "sentence": "A: The marketing team presented a new idea for the summer campaign this morning, so what did the directors think about it during the meeting? B: They liked the basic {{BLANK}} of using real customers in the advertisements instead of actors, but they asked the team to reduce the budget and prepare a clearer plan by Friday.",
    "cn": "A：行銷團隊今天早上提出了夏季活動的新點子，董事們在會議中覺得怎麼樣？ B：他們喜歡在廣告中用真實顧客而不是演員的基本【概念】，但要求團隊降低預算，並在週五前準備一份更清楚的計畫。"
  },
  {
    "word": "principle",
    "pos": "n.",
    "cn_def": "原則",
    "en_def": "a basic rule or belief that guides how someone acts",
    "sentence": "A: Why does our restaurant always refuse to serve fish that was delivered yesterday, even when the kitchen is very busy and we are running out of food? B: The owner follows a simple {{BLANK}} that customers deserve fresh ingredients every day, and she believes that this is the main reason so many guests keep coming back.",
    "cn": "A：為什麼我們餐廳總是拒絕供應昨天送來的魚，即使廚房很忙而且食材快用完了？ B：老闆遵循一個簡單的【原則】：顧客每天都應該吃到新鮮的食材，她相信這就是這麼多客人一再回來的主要原因。"
  },
  {
    "word": "content",
    "pos": "n.",
    "cn_def": "內容",
    "en_def": "the information, ideas, or material in something",
    "sentence": "A: Our website gets a lot of visitors, but very few of them actually buy anything, so what do you think we should change first? B: I think we should improve the {{BLANK}} on our product pages by adding clear photos, short videos, and honest reviews, because customers want useful information before they spend their money.",
    "cn": "A：我們的網站有很多訪客，但真正買東西的人很少，你覺得我們應該先改什麼？ B：我認為我們應該改善產品頁面的【內容】，加上清楚的照片、短影片和真實的評論，因為顧客在花錢之前想要有用的資訊。"
  },
  {
    "word": "textbook",
    "pos": "n.",
    "cn_def": "教科書；課本",
    "en_def": "a book used for studying a subject",
    "sentence": "A: The new staff members say the training materials are hard to understand, so how can we help them learn the company's safety rules more easily? B: We could write a simple {{BLANK}} with pictures, short chapters, and practice questions at the end of each section, and then give every new worker a copy on the first day.",
    "cn": "A：新進員工說訓練資料很難懂，我們要怎麼幫助他們更容易學會公司的安全規定？ B：我們可以寫一本簡單的【教科書】，附上圖片、簡短的章節，並在每一節最後加上練習題，然後在第一天發給每位新員工一本。"
  },
  {
    "word": "homework",
    "pos": "n.",
    "cn_def": "回家作業；功課",
    "en_def": "school work that students do at home",
    "sentence": "A: How do you manage to help your children with their schoolwork when you often come home from the office after seven o'clock in the evening? B: My husband checks their {{BLANK}} right after dinner, and on weekends I sit with them at the kitchen table to review anything they found difficult during the week.",
    "cn": "A：你常常晚上七點後才下班回家，你是怎麼幫孩子處理課業的？ B：我先生晚餐後馬上檢查他們的【功課】，週末時我會和他們坐在廚房餐桌旁，複習他們這週覺得困難的內容。"
  },
  {
    "word": "research",
    "pos": "n.",
    "cn_def": "研究；調查",
    "en_def": "careful study to find new facts or information",
    "sentence": "A: Why did the company decide not to open a new branch in the shopping mall downtown, even though everyone thought it was a perfect location? B: The marketing team did careful {{BLANK}} on local customers for three months, and they found that most shoppers there prefer cheaper brands than the products we sell.",
    "cn": "A：為什麼公司決定不在市中心的購物中心開新分店？大家都認為那是完美的地點。 B：行銷團隊花了三個月對當地顧客做了仔細的【調查】，發現那裡大多數的購物者偏好比我們的產品更便宜的品牌。"
  },
  {
    "word": "practical",
    "pos": "adj.",
    "cn_def": "實際的；實用的",
    "en_def": "related to real situations and actions, not ideas",
    "sentence": "A: Many of the trainees say the safety manual is too long and boring, so how can we make the training sessions more interesting for them? B: We should give them more {{BLANK}} experience, such as using the fire extinguishers outside and rehearsing what to do during an emergency, instead of just reading pages in a classroom.",
    "cn": "A：很多受訓學員說安全手冊太長又無聊，我們要怎麼讓訓練課程對他們更有趣？ B：我們應該給他們更多【實際的】經驗，例如在戶外使用滅火器，以及演練緊急狀況時該怎麼做，而不只是在教室裡讀書頁。"
  },
  {
    "word": "academic",
    "pos": "adj.",
    "cn_def": "學術的；學業的",
    "en_def": "related to schools, universities, and studying",
    "sentence": "A: Why did the university choose to hire a professor from Singapore instead of one of the local candidates for the new marketing department? B: She has an impressive {{BLANK}} background with many published papers, and she also worked for a large international company for ten years, so she understands both ideas and real business.",
    "cn": "A：為什麼大學選擇聘請一位來自新加坡的教授，而不是新行銷系的本地人選之一？ B：她有令人印象深刻的【學術】背景，發表過許多論文，而且她也在一家大型跨國公司工作了十年，所以她既懂理念也懂實際的商業。"
  },
  {
    "word": "specialize",
    "pos": "v.",
    "cn_def": "專攻；專門從事",
    "en_def": "to focus on one particular area of work or study",
    "sentence": "A: Your law firm has so many lawyers, so how do you decide which one should take care of a new client who comes to your office? B: Each of our lawyers chooses to {{BLANK}} in one area, such as business contracts or family problems, so we always match the client with the person who has the most experience.",
    "cn": "A：你們律師事務所有這麼多律師，你們怎麼決定由哪一位負責來事務所的新客戶？ B：我們每位律師都選擇【專攻】一個領域，例如商業合約或家庭問題，所以我們總是把客戶配給最有經驗的人。"
  },
  {
    "word": "specialization",
    "pos": "n.",
    "cn_def": "專業領域；專長",
    "en_def": "a particular area that someone has studied or trained in",
    "sentence": "A: You have been a nurse for more than ten years, so why did you decide to go back to school while you are still working full-time? B: I want to get a {{BLANK}} in caring for elderly patients, because the population is getting older and hospitals will need more nurses with that kind of training.",
    "cn": "A：你當護理師超過十年了，為什麼還在全職工作時決定回學校念書？ B：我想取得照護年長病患的【專業領域】資格，因為人口越來越老化，醫院將需要更多受過這種訓練的護理師。"
  }
];

const MCQS = [
  {
    "q": "The speaker chose climate change as the main _____ of her talk. She spent forty minutes explaining how it affects local businesses.",
    "options": [
      "credit",
      "topic",
      "grade",
      "minor"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Nursing is a demanding _____ that combines science with patient care. Students in this area must complete long hours of hospital training.",
    "options": [
      "textbook",
      "lesson",
      "credit",
      "discipline"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Dr. Chen is a respected expert in the _____ of renewable energy. Companies often invite her to speak at international conferences.",
    "options": [
      "field",
      "homework",
      "grade",
      "syllabus"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Ms. Wang signed up for an evening _____ in accounting at the community college. It meets twice a week for three months.",
    "options": [
      "principle",
      "credit",
      "course",
      "concept"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The school board decided to add coding to the national _____ next year. Every student will learn basic programming from the age of ten.",
    "options": [
      "workshop",
      "assignment",
      "theory",
      "curriculum"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Please read the course _____ carefully before the first class. It lists all the reading materials and the due dates for each paper.",
    "options": [
      "concept",
      "syllabus",
      "minor",
      "principle"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The online training program has eight parts. Employees must finish each _____ and pass a short quiz before moving on to the next one.",
    "options": [
      "theory",
      "major",
      "module",
      "principle"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Mr. Park takes a private golf _____ every Sunday morning. His instructor says his swing has improved a lot this year.",
    "options": [
      "lesson",
      "credit",
      "syllabus",
      "curriculum"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Professor Lin will give a public _____ on the history of Taipei. About three hundred people are expected to attend in the main hall.",
    "options": [
      "homework",
      "lecture",
      "credit",
      "textbook"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Twenty managers attended a two-day _____ on leadership at the hotel. They discussed case studies in small groups and shared their own experiences.",
    "options": [
      "textbook",
      "grade",
      "minor",
      "seminar"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The bakery runs a hands-on _____ where customers learn to make bread. Each participant takes home a loaf they baked themselves.",
    "options": [
      "workshop",
      "theory",
      "credit",
      "syllabus"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Students must hand in the writing _____ by Friday at noon. Late papers will lose ten points unless the teacher gives permission.",
    "options": [
      "principle",
      "minor",
      "assignment",
      "discipline"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The construction _____ is behind schedule because of heavy rain. The new office tower will now open in March instead of January.",
    "options": [
      "lesson",
      "grade",
      "syllabus",
      "project"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Mark failed his driving _____ the first time because he forgot to signal. He passed easily on his second try a month later.",
    "options": [
      "concept",
      "exam",
      "minor",
      "textbook"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "All job applicants must take a typing _____ during the interview. They need to type at least fifty words per minute to qualify.",
    "options": [
      "credit",
      "theory",
      "test",
      "principle"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Lisa got the highest _____ in her class on the final report. Her teacher gave her an A and praised her careful work.",
    "options": [
      "grade",
      "theory",
      "syllabus",
      "discipline"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Students who complete this summer class will earn one _____ toward their degree. Most students need forty in total to graduate.",
    "options": [
      "principle",
      "credit",
      "lecture",
      "concept"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Tom chose economics as his _____ in university. He later found a job as an analyst at a large bank in Taipei.",
    "options": [
      "workshop",
      "module",
      "theory",
      "major"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Besides her main subject of history, Amy took Spanish as a _____. She studied it for two years and can now chat with Spanish clients.",
    "options": [
      "minor",
      "lecture",
      "textbook",
      "seminar"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Wearing a helmet is _____ for all workers at the construction site. Anyone found without one will be asked to leave immediately.",
    "options": [
      "optional",
      "practical",
      "compulsory",
      "academic"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Attending the company dinner on Friday is _____. Employees who cannot come do not need to give a reason to their manager.",
    "options": [
      "compulsory",
      "academic",
      "practical",
      "optional"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Customer satisfaction is one of the _____ values of our company. Every employee learns about it during the first day of training.",
    "options": [
      "optional",
      "core",
      "academic",
      "compulsory"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Besides the required classes, each student must choose one _____ such as music, art, or cooking. These classes meet on Friday afternoons.",
    "options": [
      "textbook",
      "credit",
      "elective",
      "principle"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The new sales plan works well in _____, but it may be difficult to apply in real stores. The manager wants to try it first.",
    "options": [
      "theory",
      "homework",
      "module",
      "credit"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The designer explained the basic _____ behind the new logo. She said the circle represents teamwork and the color stands for growth.",
    "options": [
      "homework",
      "concept",
      "credit",
      "minor"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Our company operates on the _____ that the customer always comes first. All staff are trained to solve problems politely and quickly.",
    "options": [
      "homework",
      "lesson",
      "module",
      "principle"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The website's _____ is updated every week with new articles and videos. This keeps visitors interested and encourages them to return often.",
    "options": [
      "content",
      "discipline",
      "credit",
      "minor"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Each student must buy the required _____ before the class begins. It costs about eight hundred dollars at the campus bookstore.",
    "options": [
      "discipline",
      "theory",
      "textbook",
      "concept"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Many parents help their children with their _____ in the evening. Teachers say this support can improve the students' confidence and results.",
    "options": [
      "theory",
      "principle",
      "concept",
      "homework"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The company spent two years doing market _____ before launching its new drink. The study showed that young people prefer less sugar.",
    "options": [
      "lecture",
      "research",
      "module",
      "seminar"
    ],
    "answer": 1,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "topic": {
    "pos": "n.",
    "en_def": "a subject that people talk or write about",
    "cn_def": "主題；話題"
  },
  "discipline": {
    "pos": "n.",
    "en_def": "an area of study, especially at a university",
    "cn_def": "學科；學門"
  },
  "field": {
    "pos": "n.",
    "en_def": "an area of work or study",
    "cn_def": "領域"
  },
  "course": {
    "pos": "n.",
    "en_def": "a set of classes on one subject",
    "cn_def": "課程"
  },
  "curriculum": {
    "pos": "n.",
    "en_def": "all the subjects taught in a school or program",
    "cn_def": "課程內容；全部課程"
  },
  "syllabus": {
    "pos": "n.",
    "en_def": "a plan that shows what will be studied in a class",
    "cn_def": "課程大綱"
  },
  "module": {
    "pos": "n.",
    "en_def": "one separate part of a course or training program",
    "cn_def": "單元；模組"
  },
  "lesson": {
    "pos": "n.",
    "en_def": "a period of time when someone is taught something",
    "cn_def": "一堂課；課程"
  },
  "lecture": {
    "pos": "n.",
    "en_def": "a talk given to a group of people to teach them about a subject",
    "cn_def": "演講；講課"
  },
  "seminar": {
    "pos": "n.",
    "en_def": "a meeting where a small group discusses a subject",
    "cn_def": "研討會；專題討論"
  },
  "workshop": {
    "pos": "n.",
    "en_def": "a meeting where people learn by doing activities together",
    "cn_def": "工作坊；研習會"
  },
  "assignment": {
    "pos": "n.",
    "en_def": "a piece of work that a student or worker is given to do",
    "cn_def": "作業；任務"
  },
  "project": {
    "pos": "n.",
    "en_def": "a planned piece of work that takes time and effort",
    "cn_def": "專案；計畫"
  },
  "exam": {
    "pos": "n.",
    "en_def": "a formal test of knowledge or skill",
    "cn_def": "考試"
  },
  "test": {
    "pos": "n.",
    "en_def": "a set of questions or tasks to check someone's ability",
    "cn_def": "測驗；測試"
  },
  "grade": {
    "pos": "n.",
    "en_def": "a letter or number that shows how good a student's work is",
    "cn_def": "成績；分數"
  },
  "credit": {
    "pos": "n.",
    "en_def": "a unit that shows a student has completed part of a degree",
    "cn_def": "學分"
  },
  "major": {
    "pos": "n.",
    "en_def": "the main subject a student studies at university",
    "cn_def": "主修科目"
  },
  "minor": {
    "pos": "n.",
    "en_def": "a second subject a student studies at university, less than the main one",
    "cn_def": "輔修科目"
  },
  "compulsory": {
    "pos": "adj.",
    "en_def": "required by a rule; you must do it",
    "cn_def": "必修的；強制的"
  },
  "optional": {
    "pos": "adj.",
    "en_def": "something you can choose to do or not do",
    "cn_def": "可選擇的；非必要的"
  },
  "core": {
    "pos": "adj.",
    "en_def": "most important or basic",
    "cn_def": "核心的；基本的"
  },
  "elective": {
    "pos": "n.",
    "en_def": "a class that a student chooses to take, not one that is required",
    "cn_def": "選修課"
  },
  "theory": {
    "pos": "n.",
    "en_def": "an idea or set of ideas that tries to explain something",
    "cn_def": "理論"
  },
  "concept": {
    "pos": "n.",
    "en_def": "a general idea about what something is or how it works",
    "cn_def": "概念"
  },
  "principle": {
    "pos": "n.",
    "en_def": "a basic rule or belief that guides how someone acts",
    "cn_def": "原則"
  },
  "content": {
    "pos": "n.",
    "en_def": "the information, ideas, or material in something",
    "cn_def": "內容"
  },
  "textbook": {
    "pos": "n.",
    "en_def": "a book used for studying a subject",
    "cn_def": "教科書；課本"
  },
  "homework": {
    "pos": "n.",
    "en_def": "school work that students do at home",
    "cn_def": "回家作業；功課"
  },
  "research": {
    "pos": "n.",
    "en_def": "careful study to find new facts or information",
    "cn_def": "研究；調查"
  },
  "practical": {
    "pos": "adj.",
    "en_def": "related to real situations and actions, not ideas",
    "cn_def": "實際的；實用的"
  },
  "academic": {
    "pos": "adj.",
    "en_def": "related to schools, universities, and studying",
    "cn_def": "學術的；學業的"
  },
  "specialize": {
    "pos": "v.",
    "en_def": "to focus on one particular area of work or study",
    "cn_def": "專攻；專門從事"
  },
  "specialization": {
    "pos": "n.",
    "en_def": "a particular area that someone has studied or trained in",
    "cn_def": "專業領域；專長"
  }
};

const EXTRA_GLOSSES = {};
