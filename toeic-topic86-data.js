// Topic 86 Quiz Data: Course 課程
// Source word list: https://www.examword.com/group-topic/course — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T86 - Course 課程",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "curriculum",
    "pos": "n.",
    "cn_def": "（整體）課程；全部課程",
    "en_def": "all the subjects and topics taught in a school or training program",
    "sentence": "A: Why is the training department hiring two new staff members before the new employees start in September? B: The director wants to update the whole {{BLANK}} for new hires, adding topics like data safety and customer care, so they need people who can design materials and plan each week.",
    "cn": "A：為什麼訓練部門要在新進員工九月報到前再聘請兩名新員工？ B：主任想要更新新進人員的整套【課程】，加入資料安全和顧客服務等主題，所以他們需要能設計教材並規劃每週內容的人。"
  },
  {
    "word": "syllabus",
    "pos": "n.",
    "cn_def": "課程大綱；教學大綱",
    "en_def": "a list of the topics, readings and dates for a course",
    "sentence": "A: How will I know which chapters to read before each meeting of the marketing course that the company is paying for? B: The teacher will email everyone the {{BLANK}} on Monday, and it shows the topics, reading pages and due dates for all twelve weeks, so you can plan your time.",
    "cn": "A：我要怎麼知道公司出錢讓我上的行銷課，每次上課前該讀哪些章節？ B：老師星期一會把【課程大綱】寄給大家，上面列出全部十二週的主題、閱讀頁數和繳交期限，所以你可以規劃時間。"
  },
  {
    "word": "lesson",
    "pos": "n.",
    "cn_def": "一堂課；課程",
    "en_def": "a period of time when someone is taught something",
    "sentence": "A: Are you free to join us for dinner after work on Thursday, since the whole team is celebrating the new contract? B: I'd love to, but I have a Spanish {{BLANK}} with a private tutor from six to seven, so I can meet you at the restaurant a little later.",
    "cn": "A：既然全隊要慶祝新合約，你星期四下班後有空跟我們一起吃晚餐嗎？ B：我很想去，但我六點到七點要和家教上一堂西班牙文【課】，所以我可以晚一點到餐廳跟你們會合。"
  },
  {
    "word": "class",
    "pos": "n.",
    "cn_def": "班級；一堂課",
    "en_def": "a group of students taught together; a period of teaching",
    "sentence": "A: Why do you always leave the office so quickly on Wednesday evenings, even when we still have reports to finish? B: I'm taking an accounting {{BLANK}} at the community college near my apartment, and it starts at half past six, so I can't be late.",
    "cn": "A：為什麼你每週三晚上總是那麼快離開辦公室，即使我們還有報告要完成？ B：我在公寓附近的社區大學上一門會計【課】，六點半開始，所以我不能遲到。"
  },
  {
    "word": "lecture",
    "pos": "n.",
    "cn_def": "講座；演講",
    "en_def": "a talk given to a group of people to teach them about a subject",
    "sentence": "A: Did you find the talk by the famous economist at the business school useful for our planning meeting next week? B: Yes, her {{BLANK}} on global trade lasted two hours, and she explained clearly why shipping costs will rise next year, so I took a lot of notes for our team.",
    "cn": "A：你覺得那位知名經濟學家在商學院的演說對我們下週的規劃會議有幫助嗎？ B：有，她關於全球貿易的【講座】長達兩小時，清楚解釋了明年運費為何會上漲，所以我替我們團隊做了很多筆記。"
  },
  {
    "word": "seminar",
    "pos": "n.",
    "cn_def": "研討會；研討課",
    "en_def": "a meeting where a small group discusses a subject with a teacher or expert",
    "sentence": "A: Why is the small meeting room on the third floor booked for the whole afternoon on Friday? B: Our lawyer is leading a {{BLANK}} for the managers about the new privacy laws, and there will only be twelve people, so everyone can ask questions and discuss real cases.",
    "cn": "A：為什麼三樓的小會議室星期五整個下午都被預訂了？ B：我們的律師要為經理們主持一場關於新隱私法的【研討會】，只有十二個人參加，所以每個人都可以提問並討論實際案例。"
  },
  {
    "word": "workshop",
    "pos": "n.",
    "cn_def": "工作坊；研習會",
    "en_def": "a meeting where people learn a skill by doing practical activities",
    "sentence": "A: What should the new sales staff bring to the training on Saturday morning? B: They should bring their laptops, because the afternoon {{BLANK}} is very hands-on, and they will practice writing real emails and making short sales calls in small groups while the trainer gives them advice.",
    "cn": "A：新進業務人員星期六早上的培訓應該帶什麼？ B：他們應該帶筆電，因為下午的【工作坊】非常著重實作，他們會分成小組練習寫真正的電子郵件和打簡短的銷售電話，同時培訓師會給他們建議。"
  },
  {
    "word": "module",
    "pos": "n.",
    "cn_def": "（課程的）單元；模組",
    "en_def": "one separate part of a course",
    "sentence": "A: How much of the online safety training have you finished, since the deadline is the end of this month? B: I've completed three out of five parts, and the next {{BLANK}} is about fire safety, which takes about forty minutes, so I'll do it during my lunch break tomorrow.",
    "cn": "A：既然期限是這個月底，你的線上安全培訓完成多少了？ B：五個部分我已經完成三個，下一個【單元】是關於消防安全，大約需要四十分鐘，所以我明天午休時會完成它。"
  },
  {
    "word": "unit",
    "pos": "n.",
    "cn_def": "單元；課",
    "en_def": "one part of a textbook or course, usually about one topic",
    "sentence": "A: Which part of the English textbook should we cover before the overseas clients visit our factory next month? B: Let's focus on the {{BLANK}} about giving directions and describing products, because our staff will need those skills most when they show the visitors around the production lines.",
    "cn": "A：下個月海外客戶參觀我們工廠前，我們應該上英文課本的哪一部分？ B：我們把重點放在關於指路和描述產品的那一個【單元】，因為員工帶訪客參觀生產線時最需要這些技能。"
  },
  {
    "word": "assignment",
    "pos": "n.",
    "cn_def": "作業；任務",
    "en_def": "a piece of work given to someone as part of a course or job",
    "sentence": "A: Why are you staying at your desk so late tonight when the office is almost empty? B: I have to finish a written {{BLANK}} for my business management course, which is a ten-page report on a local company, and I must hand it in to my professor by midnight.",
    "cn": "A：辦公室幾乎沒人了，你今晚為什麼還這麼晚坐在位子上？ B：我得完成企業管理課的書面【作業】，是一份關於本地公司的十頁報告，而且我必須在午夜前交給教授。"
  },
  {
    "word": "homework",
    "pos": "n.",
    "cn_def": "家庭作業；功課",
    "en_def": "work that a student is asked to do at home",
    "sentence": "A: How is your son doing at his new school since your family moved to Taipei for your job in the spring? B: He likes his teachers, but he gets a lot of {{BLANK}} every night, so I usually help him with math after dinner before I check my work emails.",
    "cn": "A：自從你春天因為工作全家搬到台北後，你兒子在新學校適應得如何？ B：他喜歡他的老師，但他每天晚上都有很多【功課】，所以我通常在晚餐後先幫他做數學，再查看工作郵件。"
  },
  {
    "word": "project",
    "pos": "n.",
    "cn_def": "專題；計畫；企畫",
    "en_def": "a planned piece of work that has a clear goal",
    "sentence": "A: What do students in the evening marketing program have to do to pass at the end of the term? B: Each group must complete a final {{BLANK}}, in which they create a full advertising plan for a real local business and then present it to the owner and the teacher.",
    "cn": "A：夜間行銷課程的學生在學期末要做什麼才能及格？ B：每一組都必須完成一個期末【專題】，為一家真實的本地商家制定完整的廣告計畫，然後向老闆和老師報告。"
  },
  {
    "word": "assessment",
    "pos": "n.",
    "cn_def": "評量；評估",
    "en_def": "the process of judging how well someone has learned or done something",
    "sentence": "A: How does the language school decide which level new students should join when they first arrive? B: Everyone takes a short {{BLANK}} on the first day, including a reading test and a ten-minute talk with a teacher, and then the school puts them in the right group.",
    "cn": "A：新生剛到時，語言學校如何決定他們應該加入哪個程度？ B：每個人第一天都要做一個簡短的【評量】，包括閱讀測驗和與老師十分鐘的對話，然後學校會把他們分到合適的組別。"
  },
  {
    "word": "exam",
    "pos": "n.",
    "cn_def": "考試",
    "en_def": "a formal test of knowledge or skill",
    "sentence": "A: Why have you been reading that thick accounting book on the train every morning for the past month? B: I'm preparing for an important professional {{BLANK}} in December, and if I pass it, I can get a promotion and a higher salary at the bank next year.",
    "cn": "A：過去一個月，你為什麼每天早上都在火車上讀那本厚厚的會計書？ B：我在準備十二月一場重要的專業【考試】，如果通過，明年我就可以在銀行升職並拿到更高的薪水。"
  },
  {
    "word": "quiz",
    "pos": "n.",
    "cn_def": "小考；測驗",
    "en_def": "a short test",
    "sentence": "A: Is there anything we have to do after watching the safety video that the human resources department sent us this morning? B: Yes, there is a short {{BLANK}} with ten questions at the end, and you need to get at least eight right before the system marks your training as complete.",
    "cn": "A：看完人資部今天早上寄給我們的安全影片後，還有什麼要做的嗎？ B：有，最後有一個十題的簡短【測驗】，你至少要答對八題，系統才會把你的培訓標記為完成。"
  },
  {
    "word": "grade",
    "pos": "n.",
    "cn_def": "成績；分數",
    "en_def": "a mark or score that shows how good a student's work is",
    "sentence": "A: Why does the company want to see my school records when I'm applying for the trainee program? B: They only accept people with a good {{BLANK}} in math and English, because trainees have to read financial reports and write to overseas customers from their very first week.",
    "cn": "A：我申請儲備幹部計畫時，公司為什麼要看我的在校紀錄？ B：他們只接受數學和英文【成績】好的人，因為儲備幹部從第一週就必須閱讀財務報告並寫信給海外客戶。"
  },
  {
    "word": "credit",
    "pos": "n.",
    "cn_def": "學分",
    "en_def": "a unit that shows a student has finished part of a course",
    "sentence": "A: Why did you choose the weekend program at the university instead of the cheaper online one? B: The university gives each student a {{BLANK}} for every course they finish, and I need twelve more of them to complete my degree before I apply for a manager position.",
    "cn": "A：你為什麼選擇大學的週末課程，而不是較便宜的線上課程？ B：大學每完成一門課就給學生一個【學分】，而我在申請經理職位前，還需要再修十二個學分才能完成學位。"
  },
  {
    "word": "certificate",
    "pos": "n.",
    "cn_def": "證書；結業證明",
    "en_def": "an official document that shows you have finished a course or passed a test",
    "sentence": "A: What will the staff receive after they finish the six-week first aid training at the hospital? B: Each person will get an official {{BLANK}} with their name on it, which they should give to the office manager, because the company must keep a copy for the safety inspectors.",
    "cn": "A：員工在醫院完成六週急救訓練後會得到什麼？ B：每個人都會拿到一張印有自己名字的正式【證書】，他們應該交給辦公室經理，因為公司必須留一份影本給安全檢查員。"
  },
  {
    "word": "enroll",
    "pos": "v.",
    "cn_def": "註冊；報名入學",
    "en_def": "to officially join a course or school",
    "sentence": "A: I want to improve my presentation skills before the big conference in March, so do you know any good courses? B: You could {{BLANK}} in the public speaking course at the training center downtown, and if you sign up before Friday, the company will pay half of the fee.",
    "cn": "A：我想在三月的大型研討會前提升簡報技巧，你知道有什麼好課程嗎？ B：你可以【報名】市中心培訓中心的公眾演說課程，如果你在星期五前登記，公司會支付一半的費用。"
  },
  {
    "word": "register",
    "pos": "v.",
    "cn_def": "登記；註冊",
    "en_def": "to put your name on an official list for a course or event",
    "sentence": "A: How can I get a seat at the free computer training that the city library is offering next month? B: You need to {{BLANK}} on the library website by the end of this week, because there are only twenty places and they usually fill up within two or three days.",
    "cn": "A：我要怎麼才能在市立圖書館下個月提供的免費電腦訓練中拿到名額？ B：你必須在這週結束前在圖書館網站上【登記】，因為只有二十個名額，而且通常兩三天內就會額滿。"
  },
  {
    "word": "attend",
    "pos": "v.",
    "cn_def": "參加；出席；上（課）",
    "en_def": "to go to an event, class or meeting",
    "sentence": "A: Why is Michael working from home on Tuesday and Thursday mornings this month? B: He has to {{BLANK}} a leadership course at the main office across the city, and the classes start at eight, so the manager agreed to let him work from home afterward.",
    "cn": "A：麥可這個月為什麼星期二和星期四早上在家工作？ B：他必須去城市另一頭的總公司【上】領導力課程，課程八點開始，所以經理同意讓他上完課後在家工作。"
  },
  {
    "word": "study",
    "pos": "v.",
    "cn_def": "學習；讀書；研讀",
    "en_def": "to spend time learning about a subject",
    "sentence": "A: Where do you usually go after work on weekdays, since you never join us at the gym anymore? B: I go to the quiet café near the station to {{BLANK}} for my accounting test, because it's hard to focus at home with my two young children running around.",
    "cn": "A：你平日下班後通常去哪裡？你都不再跟我們去健身房了。 B：我會去車站附近那家安靜的咖啡店【讀書】準備會計考試，因為家裡有兩個小孩跑來跑去，很難專心。"
  },
  {
    "word": "learn",
    "pos": "v.",
    "cn_def": "學習；學會",
    "en_def": "to get new knowledge or a new skill",
    "sentence": "A: Why did the company send you to Japan for three months last year when you were still quite new? B: They wanted me to {{BLANK}} how their partner factory controls quality, so I could teach the same methods to our team when I came back to Taiwan.",
    "cn": "A：去年你還算是新人，公司為什麼派你去日本三個月？ B：他們希望我【學習】合作工廠如何控管品質，這樣我回台灣後就可以把同樣的方法教給我們的團隊。"
  },
  {
    "word": "teach",
    "pos": "v.",
    "cn_def": "教；教導",
    "en_def": "to give lessons or show someone how to do something",
    "sentence": "A: Who is going to train the new cashiers before the second store opens in the shopping mall next week? B: Linda will {{BLANK}} them how to use the new payment system, because she has worked at the counter for five years and she explains things very patiently.",
    "cn": "A：第二間店下週在購物中心開幕前，誰要訓練新收銀員？ B：琳達會【教】他們如何使用新的付款系統，因為她在櫃台工作了五年，而且解釋事情非常有耐心。"
  },
  {
    "word": "instructor",
    "pos": "n.",
    "cn_def": "講師；教練",
    "en_def": "a person who teaches a practical skill or a course",
    "sentence": "A: How was the first day of the driving course that the delivery company asked you to take? B: It went well, because the {{BLANK}} was very calm and patient, and he showed us how to drive the large trucks safely on narrow roads before we practiced by ourselves.",
    "cn": "A：快遞公司要你上的駕駛課第一天怎麼樣？ B：很順利，因為【教練】非常冷靜有耐心，他先示範如何在狹窄道路上安全駕駛大卡車，然後我們才自己練習。"
  },
  {
    "word": "trainer",
    "pos": "n.",
    "cn_def": "培訓師；訓練員",
    "en_def": "a person who teaches people skills for a job or sport",
    "sentence": "A: Our customer service team keeps getting complaints about rude phone calls, so what should we do about it? B: I think we should hire a professional {{BLANK}} to run a two-day program on handling angry customers, because our staff have never had any proper training in that area.",
    "cn": "A：我們客服團隊一直收到關於電話態度不佳的投訴，我們該怎麼辦？ B：我認為我們應該聘請一位專業【培訓師】來舉辦為期兩天的應對憤怒顧客課程，因為我們的員工從未在這方面接受過正式訓練。"
  },
  {
    "word": "beginner",
    "pos": "n.",
    "cn_def": "初學者",
    "en_def": "a person who has just started learning something",
    "sentence": "A: Should I join the advanced Excel class with the rest of the finance team, or is it too difficult for me? B: Since you've only used spreadsheets for a few weeks, you're still a {{BLANK}}, so you should start with the basic course and move up next term.",
    "cn": "A：我應該跟財務團隊的其他人一起上進階Excel課，還是那對我來說太難了？ B：既然你才用試算表幾週，你還是個【初學者】，所以你應該先從基礎課程開始，下學期再往上升級。"
  },
  {
    "word": "intermediate",
    "pos": "adj.",
    "cn_def": "中級的",
    "en_def": "at a middle level, between beginner and advanced",
    "sentence": "A: Which Japanese class did the language school put you in after the test you took last Saturday? B: They put me in the {{BLANK}} group, because I can already have simple conversations, but I still make many grammar mistakes when I write emails to our clients in Osaka.",
    "cn": "A：你上週六考完試後，語言學校把你分到哪一班日文課？ B：他們把我分到【中級】組，因為我已經能進行簡單的對話，但寫電子郵件給大阪客戶時仍然會犯很多文法錯誤。"
  },
  {
    "word": "advanced",
    "pos": "adj.",
    "cn_def": "高級的；進階的",
    "en_def": "at a high level; for people who already know a lot",
    "sentence": "A: Why is Kevin always the person who fixes the problems with our sales data and reports? B: He took an {{BLANK}} course in data analysis last year, so he understands complex formulas and charts much better than the rest of us, who only know the basics.",
    "cn": "A：為什麼總是凱文在處理我們銷售數據和報表的問題？ B：他去年上過資料分析的【進階】課程，所以他對複雜公式和圖表的理解比我們其他只懂基礎的人好得多。"
  },
  {
    "word": "online",
    "pos": "adj.",
    "cn_def": "線上的",
    "en_def": "done over the internet",
    "sentence": "A: How can our staff in the Kaohsiung branch join the training if they can't travel to Taipei next month? B: We'll offer an {{BLANK}} version of the course, so they can watch the lessons on their laptops at home and send their questions to the teacher by email.",
    "cn": "A：如果高雄分公司的員工下個月不能來台北，他們要怎麼參加培訓？ B：我們會提供這門課的【線上】版本，讓他們可以在家用筆電觀看課程，並用電子郵件把問題寄給老師。"
  },
  {
    "word": "intensive",
    "pos": "adj.",
    "cn_def": "密集的；強化的",
    "en_def": "involving a lot of work in a short time",
    "sentence": "A: How did your new assistant improve her English so quickly before starting the job in our export department? B: She took an {{BLANK}} two-week course, with six hours of classes every day, and she also practiced speaking with a tutor every evening after dinner.",
    "cn": "A：你的新助理在進入我們出口部門工作前，英文怎麼進步得這麼快？ B：她上了一個為期兩週的【密集】課程，每天上六個小時，而且每天晚餐後還和家教練習口說。"
  },
  {
    "word": "elective",
    "pos": "adj.",
    "cn_def": "選修的",
    "en_def": "chosen by the student, not required",
    "sentence": "A: Do all the students in the hotel management program have to take the wine course in their second year? B: No, it's an {{BLANK}} subject, so students can choose it if they're interested, but many people take it because it helps them find jobs in fine restaurants.",
    "cn": "A：飯店管理學程的所有學生第二年都必須修葡萄酒課嗎？ B：不，那是一門【選修】科目，學生有興趣的話可以選，但很多人會修，因為這有助於他們在高級餐廳找到工作。"
  },
  {
    "word": "compulsory",
    "pos": "adj.",
    "cn_def": "必修的；強制的",
    "en_def": "required by a rule; you must do it",
    "sentence": "A: Can I skip the fire safety training next Tuesday, since I already have a meeting with an important client that afternoon? B: I'm afraid not, because the training is {{BLANK}} for every employee in this building, so you'll need to move your client meeting to another day.",
    "cn": "A：我下週二下午已經和一位重要客戶有約，可以不參加消防安全訓練嗎？ B：恐怕不行，因為這項訓練對這棟大樓的每位員工都是【強制性】的，所以你得把客戶會議改到別天。"
  },
  {
    "word": "practical",
    "pos": "adj.",
    "cn_def": "實用的；實作的",
    "en_def": "connected with doing things, not ideas; useful in real situations",
    "sentence": "A: What did you think of the business writing course that the company paid for last month? B: It was very {{BLANK}}, because instead of just talking about theory, the teacher had us write real emails, reports and meeting notes that we could use at work the next day.",
    "cn": "A：你覺得公司上個月出錢讓你上的商業寫作課怎麼樣？ B：非常【實用】，因為老師不只是講理論，而是讓我們寫真正的電子郵件、報告和會議紀錄，隔天就能用在工作上。"
  }
];

const MCQS = [
  {
    "q": "The school plans to add computer coding to its _____ next year. Every student will take two coding classes each week.",
    "options": [
      "curriculum",
      "certificate",
      "quiz",
      "trainer"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Please read the course _____ carefully before the first class. It lists every topic, reading and deadline for the term.",
    "options": [
      "instructor",
      "beginner",
      "syllabus",
      "credit"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Over three hundred people filled the hall for the professor's _____ on climate change. She spoke for ninety minutes without notes.",
    "options": [
      "homework",
      "lecture",
      "grade",
      "module"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Staff will build simple websites themselves during Saturday's hands-on _____. Please bring a laptop and a charger.",
    "options": [
      "certificate",
      "syllabus",
      "credit",
      "workshop"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The online safety course is divided into five short parts. Each _____ takes about thirty minutes to complete.",
    "options": [
      "instructor",
      "beginner",
      "module",
      "trainer"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Mr. Lee gave the class a writing _____ about a local business. It must be handed in by next Friday.",
    "options": [
      "assignment",
      "lecture",
      "seminar",
      "trainer"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "New employees complete a skills _____ during their first week. The results help managers decide what training each person needs.",
    "options": [
      "lecture",
      "syllabus",
      "beginner",
      "assessment"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Mina studied every night for a month before the accounting _____. She was thrilled to learn that she had passed.",
    "options": [
      "instructor",
      "exam",
      "curriculum",
      "trainer"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "At the end of each video, there is a short _____ with five questions. Employees must answer all of them correctly.",
    "options": [
      "quiz",
      "certificate",
      "trainer",
      "curriculum"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Daniel received the highest _____ in the class on his final report. His teacher praised his clear writing and careful research.",
    "options": [
      "module",
      "syllabus",
      "workshop",
      "grade"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "After finishing the first aid course, each participant receives a _____. Many employers ask to see it during job interviews.",
    "options": [
      "lecture",
      "certificate",
      "module",
      "homework"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "More than fifty employees decided to _____ in the free Spanish course this spring. The company will pay for all their books.",
    "options": [
      "teach",
      "attend",
      "enroll",
      "learn"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Visitors must _____ at the front desk before entering the training center. They will receive a name badge and a map.",
    "options": [
      "teach",
      "learn",
      "study",
      "register"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "All managers are required to _____ the leadership seminar next Monday. Lunch will be provided in the main hall.",
    "options": [
      "enroll",
      "attend",
      "register",
      "learn"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Many staff members want to _____ how to use the new accounting software. The IT department will hold training sessions next week.",
    "options": [
      "learn",
      "attend",
      "enroll",
      "register"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Ms. Chen will _____ the new interns how to answer customer calls politely. She has worked in customer service for ten years.",
    "options": [
      "learn",
      "attend",
      "teach",
      "study"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Our yoga _____ shows us each position slowly before we try it ourselves. She also corrects our posture very gently.",
    "options": [
      "certificate",
      "instructor",
      "module",
      "syllabus"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "This guitar course is designed for the complete _____. No experience or musical knowledge is needed to join.",
    "options": [
      "curriculum",
      "exam",
      "assignment",
      "beginner"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Sam's French is better than a beginner's, but not yet advanced. The school placed him in the _____ group.",
    "options": [
      "compulsory",
      "elective",
      "intermediate",
      "practical"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "This course is for experienced programmers only. Students must already know the basics before joining the _____ level.",
    "options": [
      "advanced",
      "elective",
      "compulsory",
      "online"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The course is fully _____, so students never need to visit the campus. All lessons are given through video calls.",
    "options": [
      "compulsory",
      "elective",
      "intermediate",
      "online"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The _____ program packs a full semester of Chinese into just four weeks. Students study for seven hours every day.",
    "options": [
      "intensive",
      "elective",
      "practical",
      "compulsory"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "Students must take five required courses, but they can choose one _____ subject. Many choose photography or creative writing.",
    "options": [
      "compulsory",
      "intermediate",
      "elective",
      "intensive"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "Safety training is _____ for all factory workers. Nobody may use the machines until they have completed it.",
    "options": [
      "elective",
      "compulsory",
      "online",
      "intermediate"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The cooking course is very _____ because students spend most of the time in the kitchen. They make a full meal in every lesson.",
    "options": [
      "practical",
      "compulsory",
      "elective",
      "online"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "The company hired a fitness _____ to lead exercise classes for staff. Sessions are held in the gym every Tuesday evening.",
    "options": [
      "certificate",
      "syllabus",
      "module",
      "trainer"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Kevin plans to _____ economics at a university in London next year. He has already been accepted into the program.",
    "options": [
      "register",
      "study",
      "enroll",
      "attend"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Please turn to page forty-two in your textbook. Today we will start _____ Six, which is about writing business letters.",
    "options": [
      "credit",
      "certificate",
      "unit",
      "homework"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "My first piano _____ is on Saturday morning. The teacher will come to my apartment for one hour.",
    "options": [
      "credit",
      "certificate",
      "syllabus",
      "lesson"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "There are only twelve students in the evening _____, so the teacher knows everyone by name. Everyone gets plenty of chances to speak.",
    "options": [
      "syllabus",
      "class",
      "certificate",
      "grade"
    ],
    "answer": 1,
    "vocabIndex": 3
  }
];

const LOOKUP = {
  "curriculum": {
    "pos": "n.",
    "en_def": "all the subjects and topics taught in a school or training program",
    "cn_def": "（整體）課程；全部課程"
  },
  "syllabus": {
    "pos": "n.",
    "en_def": "a list of the topics, readings and dates for a course",
    "cn_def": "課程大綱；教學大綱"
  },
  "lesson": {
    "pos": "n.",
    "en_def": "a period of time when someone is taught something",
    "cn_def": "一堂課；課程"
  },
  "class": {
    "pos": "n.",
    "en_def": "a group of students taught together; a period of teaching",
    "cn_def": "班級；一堂課"
  },
  "lecture": {
    "pos": "n.",
    "en_def": "a talk given to a group of people to teach them about a subject",
    "cn_def": "講座；演講"
  },
  "seminar": {
    "pos": "n.",
    "en_def": "a meeting where a small group discusses a subject with a teacher or expert",
    "cn_def": "研討會；研討課"
  },
  "workshop": {
    "pos": "n.",
    "en_def": "a meeting where people learn a skill by doing practical activities",
    "cn_def": "工作坊；研習會"
  },
  "module": {
    "pos": "n.",
    "en_def": "one separate part of a course",
    "cn_def": "（課程的）單元；模組"
  },
  "unit": {
    "pos": "n.",
    "en_def": "one part of a textbook or course, usually about one topic",
    "cn_def": "單元；課"
  },
  "assignment": {
    "pos": "n.",
    "en_def": "a piece of work given to someone as part of a course or job",
    "cn_def": "作業；任務"
  },
  "homework": {
    "pos": "n.",
    "en_def": "work that a student is asked to do at home",
    "cn_def": "家庭作業；功課"
  },
  "project": {
    "pos": "n.",
    "en_def": "a planned piece of work that has a clear goal",
    "cn_def": "專題；計畫；企畫"
  },
  "assessment": {
    "pos": "n.",
    "en_def": "the process of judging how well someone has learned or done something",
    "cn_def": "評量；評估"
  },
  "exam": {
    "pos": "n.",
    "en_def": "a formal test of knowledge or skill",
    "cn_def": "考試"
  },
  "quiz": {
    "pos": "n.",
    "en_def": "a short test",
    "cn_def": "小考；測驗"
  },
  "grade": {
    "pos": "n.",
    "en_def": "a mark or score that shows how good a student's work is",
    "cn_def": "成績；分數"
  },
  "credit": {
    "pos": "n.",
    "en_def": "a unit that shows a student has finished part of a course",
    "cn_def": "學分"
  },
  "certificate": {
    "pos": "n.",
    "en_def": "an official document that shows you have finished a course or passed a test",
    "cn_def": "證書；結業證明"
  },
  "enroll": {
    "pos": "v.",
    "en_def": "to officially join a course or school",
    "cn_def": "註冊；報名入學"
  },
  "register": {
    "pos": "v.",
    "en_def": "to put your name on an official list for a course or event",
    "cn_def": "登記；註冊"
  },
  "attend": {
    "pos": "v.",
    "en_def": "to go to an event, class or meeting",
    "cn_def": "參加；出席；上（課）"
  },
  "study": {
    "pos": "v.",
    "en_def": "to spend time learning about a subject",
    "cn_def": "學習；讀書；研讀"
  },
  "learn": {
    "pos": "v.",
    "en_def": "to get new knowledge or a new skill",
    "cn_def": "學習；學會"
  },
  "teach": {
    "pos": "v.",
    "en_def": "to give lessons or show someone how to do something",
    "cn_def": "教；教導"
  },
  "instructor": {
    "pos": "n.",
    "en_def": "a person who teaches a practical skill or a course",
    "cn_def": "講師；教練"
  },
  "trainer": {
    "pos": "n.",
    "en_def": "a person who teaches people skills for a job or sport",
    "cn_def": "培訓師；訓練員"
  },
  "beginner": {
    "pos": "n.",
    "en_def": "a person who has just started learning something",
    "cn_def": "初學者"
  },
  "intermediate": {
    "pos": "adj.",
    "en_def": "at a middle level, between beginner and advanced",
    "cn_def": "中級的"
  },
  "advanced": {
    "pos": "adj.",
    "en_def": "at a high level; for people who already know a lot",
    "cn_def": "高級的；進階的"
  },
  "online": {
    "pos": "adj.",
    "en_def": "done over the internet",
    "cn_def": "線上的"
  },
  "intensive": {
    "pos": "adj.",
    "en_def": "involving a lot of work in a short time",
    "cn_def": "密集的；強化的"
  },
  "elective": {
    "pos": "adj.",
    "en_def": "chosen by the student, not required",
    "cn_def": "選修的"
  },
  "compulsory": {
    "pos": "adj.",
    "en_def": "required by a rule; you must do it",
    "cn_def": "必修的；強制的"
  },
  "practical": {
    "pos": "adj.",
    "en_def": "connected with doing things, not ideas; useful in real situations",
    "cn_def": "實用的；實作的"
  }
};

const EXTRA_GLOSSES = {};
