// Topic 45 Quiz Data: Career 職涯
// Source word list: https://www.examword.com/group-topic/career — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T45 - Career 職涯",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "profession",
    "pos": "n.",
    "cn_def": "職業；專業",
    "en_def": "a type of job that needs special training or education",
    "sentence": "A: My niece is finishing her degree in health sciences next spring, but she still seems unsure about her future, so what advice did you give her at dinner last night? B: I told her that nursing is a respected {{BLANK}} with many chances to work abroad, and that hospitals in Taipei are always looking for caring, well-trained staff.",
    "cn": "A：我外甥女明年春天就要拿到健康科學學位了，但她似乎對未來還不確定，你昨晚吃飯時給了她什麼建議？ B：我告訴她護理是一個受人尊敬、有很多出國工作機會的【職業】，而且台北的醫院一直在找有愛心、受過良好訓練的人員。"
  },
  {
    "word": "occupation",
    "pos": "n.",
    "cn_def": "職業",
    "en_def": "a person's job or regular work",
    "sentence": "A: The bank's loan application asks for a lot of personal details, so what should I write in the box near the bottom of the second page? B: That box is for your {{BLANK}}, so just write \"accountant,\" and then add the name of your company and how many years you have worked there.",
    "cn": "A：銀行的貸款申請表要填很多個人資料，第二頁底部附近的那一格我該寫什麼？ B：那一格是填你的【職業】，就寫「會計師」，然後再加上你公司的名稱以及你在那裡工作了幾年。"
  },
  {
    "word": "job",
    "pos": "n.",
    "cn_def": "工作",
    "en_def": "work that you do regularly to earn money",
    "sentence": "A: You looked really tired at the team meeting this morning, so is everything all right with your new role in the marketing department? B: I'm fine, but the {{BLANK}} keeps me busier than I expected, because I have to write reports, answer client emails, and plan two product launches before the end of the month.",
    "cn": "A：你今天早上開團隊會議時看起來很累，你在行銷部的新職務一切都還好嗎？ B：我很好，只是這份【工作】比我預期的還要忙，因為我得寫報告、回覆客戶郵件，還要在月底前規劃兩場產品發表會。"
  },
  {
    "word": "position",
    "pos": "n.",
    "cn_def": "職位",
    "en_def": "a job in a company or organization",
    "sentence": "A: I saw that the hotel downtown is hiring again this month, so are you thinking about sending them your application before the deadline on Friday? B: Yes, they have an open {{BLANK}} at the front desk, and since I speak English and Japanese well, I think I have a good chance of getting it.",
    "cn": "A：我看到市中心那家飯店這個月又在徵人了，你打算在星期五截止前寄申請給他們嗎？ B：是的，他們櫃檯有一個空缺的【職位】，而且我英文和日文都說得不錯，我覺得我很有機會錄取。"
  },
  {
    "word": "employment",
    "pos": "n.",
    "cn_def": "就業；受雇",
    "en_def": "the state of having paid work",
    "sentence": "A: Many students in my evening class will graduate this summer, so do you know what kind of support the city government offers to young people looking for work? B: The local {{BLANK}} center runs free workshops every Saturday, where career advisers help graduates write cover letters, practice answering questions, and search for suitable openings online.",
    "cn": "A：我夜間班的很多學生今年夏天就要畢業了，你知道市政府為找工作的年輕人提供哪些協助嗎？ B：當地的【就業】服務中心每週六都有免費工作坊，職涯顧問會協助畢業生寫求職信、練習回答問題，並在網路上搜尋合適的職缺。"
  },
  {
    "word": "employer",
    "pos": "n.",
    "cn_def": "雇主",
    "en_def": "a person or company that pays people to work for them",
    "sentence": "A: You have worked at the same electronics company for almost twelve years now, so what makes you stay there when so many other firms offer higher pay? B: My {{BLANK}} treats people fairly, provides excellent health insurance, and even pays for evening classes, so I feel valued and have never wanted to leave.",
    "cn": "A：你在同一家電子公司已經工作快十二年了，有那麼多公司開出更高的薪水，是什麼讓你留下來？ B：我的【雇主】待人公平，提供很好的健康保險，甚至幫我們付夜間課程的學費，所以我覺得被重視，從來沒想過要離開。"
  },
  {
    "word": "employee",
    "pos": "n.",
    "cn_def": "員工",
    "en_def": "a person who is paid to work for a company",
    "sentence": "A: The manager gave a special award at the year-end party last night, so who received it, and why did everyone clap so loudly? B: It went to a quiet {{BLANK}} from the shipping department who worked extra hours during the busy season and helped train three new team members without being asked.",
    "cn": "A：經理昨晚在尾牙上頒了一個特別獎，是誰得獎了？為什麼大家拍手拍得那麼大聲？ B：得獎的是出貨部一位安靜的【員工】，他在旺季時加班，而且主動幫忙訓練了三位新同事。"
  },
  {
    "word": "salary",
    "pos": "n.",
    "cn_def": "薪水（月薪；年薪）",
    "en_def": "fixed money paid to a worker, usually every month",
    "sentence": "A: The software company in Hsinchu offered you the job yesterday, so are you going to accept it, or are you still comparing it with the other offer? B: I'm probably going to accept, because the monthly {{BLANK}} is twenty percent higher than what I earn now, and they also give a bonus at the end of the year.",
    "cn": "A：新竹那家軟體公司昨天錄取你了，你要接受嗎？還是還在跟另一個工作機會比較？ B：我大概會接受，因為每個月的【薪水】比我現在多百分之二十，而且年底還有獎金。"
  },
  {
    "word": "wage",
    "pos": "n.",
    "cn_def": "工資（時薪；日薪）",
    "en_def": "money paid per hour or day for work",
    "sentence": "A: Many part-time workers at the supermarket have been complaining recently, so what exactly are they unhappy about? B: They say their hourly {{BLANK}} hasn't gone up in three years, even though rent and food prices have risen, so they want the owner to discuss a fair increase with them next week.",
    "cn": "A：超市很多兼職員工最近一直在抱怨，他們到底在不滿什麼？ B：他們說雖然房租和食物都漲價了，但他們的時薪【工資】三年來都沒調漲，所以希望老闆下週和他們討論合理的加薪。"
  },
  {
    "word": "promotion",
    "pos": "n.",
    "cn_def": "升遷；晉升",
    "en_def": "a move to a higher, more important job",
    "sentence": "A: Jessica has been working late almost every night and taking extra training courses, so is she preparing for something special at work? B: Yes, she hopes to get a {{BLANK}} to sales manager next spring, because the current manager is moving to the Singapore office and the director wants someone from inside the team.",
    "cn": "A：Jessica幾乎每晚都加班，還額外上培訓課程，她是在為工作上什麼特別的事做準備嗎？ B：是的，她希望明年春天能【升遷】為業務經理，因為現任經理要調到新加坡辦公室，而主管希望從團隊內部找人接任。"
  },
  {
    "word": "experience",
    "pos": "n.",
    "cn_def": "經驗",
    "en_def": "knowledge or skill you get from doing a job",
    "sentence": "A: We received over fifty applications for the accounting role, so how are we going to choose the five people to interview next week? B: Let's first look for candidates with at least three years of {{BLANK}} in a large firm, and then compare their language ability and the software they can use.",
    "cn": "A：會計職缺我們收到超過五十份申請，要怎麼選出下週面試的五個人？ B：我們先找在大公司有至少三年【經驗】的應徵者，然後再比較他們的語言能力和會用的軟體。"
  },
  {
    "word": "skill",
    "pos": "n.",
    "cn_def": "技能",
    "en_def": "an ability to do something well because you have practiced it",
    "sentence": "A: The new customer service team will start answering calls on Monday, so what is the most important thing they should learn during training this week? B: Listening carefully is the key {{BLANK}}, because angry customers calm down quickly when they feel understood, and then our staff can solve the problem much more easily.",
    "cn": "A：新的客服團隊星期一就要開始接電話了，這週培訓期間他們最該學的是什麼？ B：仔細聆聽是關鍵【技能】，因為生氣的顧客覺得被理解時會很快冷靜下來，這樣我們的員工就能更輕鬆地解決問題。"
  },
  {
    "word": "qualification",
    "pos": "n.",
    "cn_def": "資格；證照",
    "en_def": "an exam or course result that shows you can do a job",
    "sentence": "A: I'd love to teach English at a public high school after I move back to Taiwan, so what do I need to prepare before applying? B: You'll need a teaching {{BLANK}} from a recognized university, a good English test score, and some classroom practice, so start collecting your documents as early as possible.",
    "cn": "A：我搬回台灣後很想在公立高中教英文，申請之前我需要準備什麼？ B：你需要一所認可大學核發的教師【資格】、不錯的英文檢定成績，以及一些實際教學經驗，所以盡早開始準備文件吧。"
  },
  {
    "word": "training",
    "pos": "n.",
    "cn_def": "培訓；訓練",
    "en_def": "teaching people the skills for a job",
    "sentence": "A: The factory is installing new machines next month, so how will the workers learn to use them safely without slowing down production? B: The supplier will send two engineers to give every shift three days of hands-on {{BLANK}}, and they will also leave a detailed manual in Chinese for later reference.",
    "cn": "A：工廠下個月要安裝新機器，工人要怎麼在不拖慢生產的情況下學會安全操作？ B：供應商會派兩位工程師為每個班次提供三天的實作【培訓】，還會留下一份詳細的中文手冊供日後參考。"
  },
  {
    "word": "resume",
    "pos": "n.",
    "cn_def": "履歷",
    "en_def": "a document listing your education and work history",
    "sentence": "A: I'm applying for a design job at an advertising agency next week, so could you look at my documents and tell me what to improve? B: Your {{BLANK}} is too long, so cut it down to one page, put your best projects at the top, and remove the part-time jobs you had in high school.",
    "cn": "A：我下週要應徵一家廣告公司的設計工作，你可以看看我的資料，告訴我哪裡要改進嗎？ B：你的【履歷】太長了，刪減到一頁，把最好的作品放在最上面，並拿掉你高中時做過的打工。"
  },
  {
    "word": "interview",
    "pos": "n.",
    "cn_def": "面試",
    "en_def": "a formal meeting where an employer asks a job seeker questions",
    "sentence": "A: You're wearing a suit today, and you keep checking your watch, so do you have an important meeting with a client this afternoon? B: Not exactly, I have a job {{BLANK}} with a bank at two o'clock, and I'm nervous because they will ask me questions in English in front of three managers.",
    "cn": "A：你今天穿西裝，又一直看手錶，下午是要跟客戶開重要的會嗎？ B：不完全是，我兩點要去一家銀行【面試】，我很緊張，因為他們會在三位經理面前用英文問我問題。"
  },
  {
    "word": "hire",
    "pos": "v.",
    "cn_def": "雇用",
    "en_def": "to give someone a job",
    "sentence": "A: Our online orders have doubled since the holiday sale started, and the warehouse staff are exhausted, so what is the boss planning to do about it? B: She has decided to {{BLANK}} five temporary workers until the end of January, so the regular team can rest and customers can still receive their packages on time.",
    "cn": "A：假期特賣開始後我們的網路訂單翻倍了，倉庫員工都累壞了，老闆打算怎麼處理？ B：她決定【雇用】五名臨時工到一月底，這樣正職團隊可以休息，顧客也能準時收到包裹。"
  },
  {
    "word": "fire",
    "pos": "v.",
    "cn_def": "開除；解雇",
    "en_def": "to make someone leave their job, usually as a punishment",
    "sentence": "A: I heard that the new cashier at the downtown branch suddenly stopped coming to work, so did she quit, or did something happen? B: The manager had to {{BLANK}} her after she was caught taking money from the register twice, even though he had given her a clear warning the first time.",
    "cn": "A：聽說市區分店的新收銀員突然不來上班了，她是辭職了，還是發生了什麼事？ B：她被抓到兩次從收銀機拿錢，經理只好【開除】她，即使第一次他已經明確警告過她了。"
  },
  {
    "word": "success",
    "pos": "n.",
    "cn_def": "成功",
    "en_def": "achieving what you planned or wanted",
    "sentence": "A: Your bakery has opened three new shops in the past two years, so what do you think is the main reason customers keep coming back? B: Much of our {{BLANK}} comes from using fresh local ingredients and listening to feedback, because we change the menu whenever regular customers suggest something new and interesting.",
    "cn": "A：你的麵包店過去兩年開了三家新店，你覺得顧客一再回訪的主要原因是什麼？ B：我們的【成功】大多來自使用新鮮的在地食材並傾聽意見，因為只要熟客提出新奇有趣的建議，我們就會調整菜單。"
  },
  {
    "word": "ambition",
    "pos": "n.",
    "cn_def": "抱負；雄心",
    "en_def": "a strong wish to achieve something",
    "sentence": "A: Your younger brother just started his first job as a sales assistant, so what kind of future does he hope to have in the company? B: His biggest {{BLANK}} is to open his own sporting goods store one day, so he is learning everything he can about buying, pricing, and managing staff while he works there.",
    "cn": "A：你弟弟剛開始他的第一份工作當銷售助理，他希望在公司裡有什麼樣的未來？ B：他最大的【抱負】是有一天開自己的運動用品店，所以他在那裡工作時盡可能學習採購、定價和管理員工的一切。"
  },
  {
    "word": "goal",
    "pos": "n.",
    "cn_def": "目標",
    "en_def": "something you are trying to achieve",
    "sentence": "A: The sales team had a difficult first half of the year, so what did the director say at the planning meeting this morning? B: She set a clear {{BLANK}} of winning ten new corporate clients by December, and she promised a team trip to Japan if we reach it before the holidays.",
    "cn": "A：業務團隊上半年很辛苦，主管今天早上在規劃會議上說了什麼？ B：她訂了一個明確的【目標】，要在十二月前爭取到十家新的企業客戶，還承諾如果我們在假期前達成，就招待團隊去日本旅遊。"
  },
  {
    "word": "path",
    "pos": "n.",
    "cn_def": "道路；（職涯）路線",
    "en_def": "a series of steps or choices that lead somewhere, such as in a career",
    "sentence": "A: You studied engineering at university, but now you work in human resources, so how did you end up in such a different field? B: My career {{BLANK}} changed after I organized training events at my first company, because I discovered that I enjoyed helping people grow much more than designing machines.",
    "cn": "A：你大學念工程，現在卻在人資部門工作，你怎麼會走進這麼不同的領域？ B：我在第一家公司籌辦培訓活動後，職涯【道路】就改變了，因為我發現比起設計機器，我更喜歡幫助別人成長。"
  },
  {
    "word": "opportunity",
    "pos": "n.",
    "cn_def": "機會",
    "en_def": "a chance to do something good",
    "sentence": "A: The head office in London has invited two staff members from our branch to work there for six months, so are you going to apply? B: Definitely, because it's a great {{BLANK}} to improve my English, learn how a global team works, and build connections that could help my career later.",
    "cn": "A：倫敦總公司邀請我們分公司兩位員工去那裡工作六個月，你要申請嗎？ B：當然，因為這是提升英文、了解國際團隊如何運作，以及建立日後對職涯有幫助的人脈的好【機會】。"
  },
  {
    "word": "balance",
    "pos": "n.",
    "cn_def": "平衡",
    "en_def": "a healthy mix of different parts, such as work and private life",
    "sentence": "A: You used to stay at the office until ten every night, but lately you leave at six, so what made you change your routine? B: I realized I needed a better {{BLANK}} between work and family, so now I finish my tasks earlier, have dinner with my kids, and go jogging on weekends.",
    "cn": "A：你以前每晚都在辦公室待到十點，最近卻六點就下班，是什麼讓你改變作息？ B：我發現我需要在工作和家庭之間取得更好的【平衡】，所以現在我提早完成工作，和孩子一起吃晚餐，週末去慢跑。"
  },
  {
    "word": "retire",
    "pos": "v.",
    "cn_def": "退休",
    "en_def": "to stop working, usually because you are older",
    "sentence": "A: Mr. Lin has managed the accounting department for almost thirty years, so is it true that the company is planning a big farewell party for him? B: Yes, he will {{BLANK}} at the end of March so he can travel around Europe with his wife, and the staff are collecting money to buy him a nice camera.",
    "cn": "A：林先生管理會計部將近三十年了，公司真的要為他辦一場盛大的歡送會嗎？ B：是的，他三月底就要【退休】了，好和太太去歐洲旅行，員工們正在集資買一台好相機送他。"
  },
  {
    "word": "long-term",
    "pos": "adj.",
    "cn_def": "長期的",
    "en_def": "lasting or planned for a long time",
    "sentence": "A: The startup offered me a higher salary than my current company, but I'm worried because it's so new, so what do you think I should do? B: Think about your {{BLANK}} plans first, because if you want to stay in one place for many years and buy a home, a stable company might be the safer choice.",
    "cn": "A：那家新創公司開的薪水比我現在的公司高，但我擔心它太新了，你覺得我該怎麼做？ B：先想想你的【長期】計畫，因為如果你想在一個地方待很多年並買房子，穩定的公司可能是比較安全的選擇。"
  },
  {
    "word": "stable",
    "pos": "adj.",
    "cn_def": "穩定的",
    "en_def": "not likely to change; steady",
    "sentence": "A: Your sister left her exciting job at a travel startup to work for the city government, so why did she make such a big change? B: After her son was born, she wanted a {{BLANK}} income with regular hours, so she chose a government office where the pay is lower but she never worries about losing her job.",
    "cn": "A：你姊姊離開了旅遊新創公司那份刺激的工作，去市政府上班，她為什麼要做這麼大的改變？ B：她兒子出生後，她想要有【穩定的】收入和規律的工時，所以選擇了政府機關，雖然薪水較低，但她從不擔心失業。"
  },
  {
    "word": "rewarding",
    "pos": "adj.",
    "cn_def": "有意義的；有成就感的",
    "en_def": "making you feel satisfied and happy",
    "sentence": "A: You gave up a well-paid position at a bank to teach science at a rural elementary school, so do you ever regret that decision? B: Not at all, because the work is very {{BLANK}}, and seeing my students get excited about experiments every week makes me happier than any bonus I received at the bank.",
    "cn": "A：你放棄銀行的高薪職位，去鄉下的小學教自然科學，你曾後悔過這個決定嗎？ B：一點也不，因為這份工作很【有成就感】，每週看到學生對實驗感到興奮，比我在銀行領過的任何獎金都讓我開心。"
  }
];

const MCQS = [
  {
    "q": "Law is a demanding _____ that requires years of study. Many lawyers in this city work more than sixty hours a week.",
    "options": [
      "profession",
      "salary",
      "resume",
      "balance"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Please write your name, address, and _____ on the registration form. The hotel needs this information for its guest records.",
    "options": [
      "path",
      "success",
      "occupation",
      "training"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "After graduating, Tom found a _____ at a shipping company near the harbor. He works there five days a week.",
    "options": [
      "salary",
      "job",
      "goal",
      "skill"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The hospital has advertised a _____ for a night-shift receptionist. Applicants should send their documents by email before Friday.",
    "options": [
      "ambition",
      "balance",
      "success",
      "position"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The new factory will create _____ for nearly two hundred local residents. The mayor said it will help the town's economy.",
    "options": [
      "resume",
      "qualification",
      "employment",
      "ambition"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Your _____ must give you a written contract before your first day of work. The contract should list your hours and pay.",
    "options": [
      "employer",
      "employee",
      "resume",
      "interview"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Each new _____ receives a company ID card and a laptop on the first day. The IT team also sets up their email account.",
    "options": [
      "employer",
      "salary",
      "path",
      "employee"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The bank pays its managers a monthly _____ of about ninety thousand dollars. Bonuses are paid separately in February.",
    "options": [
      "goal",
      "salary",
      "training",
      "path"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Restaurant staff here earn an hourly _____ of 200 dollars plus tips. Many students work there in the evenings.",
    "options": [
      "wage",
      "ambition",
      "interview",
      "qualification"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Mark received a _____ to team leader after only two years with the company. His manager praised his hard work and leadership.",
    "options": [
      "resume",
      "wage",
      "balance",
      "promotion"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Applicants should have at least two years of _____ in customer service. Those who have worked in hotels are preferred.",
    "options": [
      "ambition",
      "employer",
      "experience",
      "salary"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Typing quickly is a useful _____ for anyone who works in an office. Our free course helps adults practice it online.",
    "options": [
      "employer",
      "skill",
      "wage",
      "resume"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "A nursing license is the most important _____ for this hospital job. Without it, applicants cannot be considered.",
    "options": [
      "salary",
      "ambition",
      "balance",
      "qualification"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "All new drivers must complete two weeks of safety _____ before they carry passengers. The course includes both classroom and road practice.",
    "options": [
      "training",
      "employer",
      "wage",
      "ambition"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Please email your _____ and a short cover letter to the HR department. We will contact suitable candidates within ten days.",
    "options": [
      "ambition",
      "resume",
      "wage",
      "balance"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Candidates who pass the written test will be invited to a face-to-face _____ next week. Each meeting will last about thirty minutes.",
    "options": [
      "salary",
      "path",
      "interview",
      "skill"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The restaurant plans to _____ three more cooks before the summer season begins. The owner expects many tourists this year.",
    "options": [
      "fire",
      "hire",
      "retire",
      "balance"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The company decided to _____ the driver who repeatedly arrived late and damaged a truck. He had already received two warnings.",
    "options": [
      "hire",
      "retire",
      "balance",
      "fire"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The new product was a huge _____, selling over ten thousand units in its first week. The team celebrated with dinner.",
    "options": [
      "success",
      "wage",
      "resume",
      "employer"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Her _____ is to become the first woman to lead the company. She works hard and studies business at night.",
    "options": [
      "salary",
      "wage",
      "ambition",
      "resume"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Our _____ this quarter is to increase online sales by fifteen percent. Every department has been asked to share ideas.",
    "options": [
      "employee",
      "wage",
      "resume",
      "goal"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Choosing the right career _____ can be difficult for new graduates. Our advisers can help you compare different fields.",
    "options": [
      "wage",
      "path",
      "employer",
      "interview"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Working at the overseas branch is a great _____ to learn about other cultures. Interested staff should talk to their managers.",
    "options": [
      "wage",
      "resume",
      "opportunity",
      "employer"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Flexible hours help employees keep a healthy _____ between work and family life. Many staff now finish early on Fridays.",
    "options": [
      "balance",
      "wage",
      "resume",
      "qualification"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Mr. Chen plans to _____ next year after working at the post office for forty years. He wants to spend time gardening.",
    "options": [
      "hire",
      "fire",
      "retire",
      "balance"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The two companies signed a _____ agreement that will last until 2036. Both sides wanted to avoid renewing it every year.",
    "options": [
      "rewarding",
      "long-term",
      "stable",
      "success"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Government jobs offer a _____ income, so many young people prefer them. Workers rarely lose their positions, even in hard times.",
    "options": [
      "rewarding",
      "long-term",
      "success",
      "stable"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Volunteering at the children's hospital was very _____ for our staff. Many said it was the most meaningful day of the year.",
    "options": [
      "rewarding",
      "long-term",
      "stable",
      "opportunity"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Sales staff who reach their targets three times in a row are considered for _____. The next review takes place in June.",
    "options": [
      "wage",
      "promotion",
      "resume",
      "employer"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The internship gave Amy the _____ to work with experienced designers. She later accepted a full-time offer from the firm.",
    "options": [
      "wage",
      "resume",
      "employer",
      "opportunity"
    ],
    "answer": 3,
    "vocabIndex": 22
  }
];

const LOOKUP = {
  "profession": {
    "pos": "n.",
    "en_def": "a type of job that needs special training or education",
    "cn_def": "職業；專業"
  },
  "occupation": {
    "pos": "n.",
    "en_def": "a person's job or regular work",
    "cn_def": "職業"
  },
  "job": {
    "pos": "n.",
    "en_def": "work that you do regularly to earn money",
    "cn_def": "工作"
  },
  "position": {
    "pos": "n.",
    "en_def": "a job in a company or organization",
    "cn_def": "職位"
  },
  "employment": {
    "pos": "n.",
    "en_def": "the state of having paid work",
    "cn_def": "就業；受雇"
  },
  "employer": {
    "pos": "n.",
    "en_def": "a person or company that pays people to work for them",
    "cn_def": "雇主"
  },
  "employee": {
    "pos": "n.",
    "en_def": "a person who is paid to work for a company",
    "cn_def": "員工"
  },
  "salary": {
    "pos": "n.",
    "en_def": "fixed money paid to a worker, usually every month",
    "cn_def": "薪水（月薪；年薪）"
  },
  "wage": {
    "pos": "n.",
    "en_def": "money paid per hour or day for work",
    "cn_def": "工資（時薪；日薪）"
  },
  "promotion": {
    "pos": "n.",
    "en_def": "a move to a higher, more important job",
    "cn_def": "升遷；晉升"
  },
  "experience": {
    "pos": "n.",
    "en_def": "knowledge or skill you get from doing a job",
    "cn_def": "經驗"
  },
  "skill": {
    "pos": "n.",
    "en_def": "an ability to do something well because you have practiced it",
    "cn_def": "技能"
  },
  "qualification": {
    "pos": "n.",
    "en_def": "an exam or course result that shows you can do a job",
    "cn_def": "資格；證照"
  },
  "training": {
    "pos": "n.",
    "en_def": "teaching people the skills for a job",
    "cn_def": "培訓；訓練"
  },
  "resume": {
    "pos": "n.",
    "en_def": "a document listing your education and work history",
    "cn_def": "履歷"
  },
  "interview": {
    "pos": "n.",
    "en_def": "a formal meeting where an employer asks a job seeker questions",
    "cn_def": "面試"
  },
  "hire": {
    "pos": "v.",
    "en_def": "to give someone a job",
    "cn_def": "雇用"
  },
  "fire": {
    "pos": "v.",
    "en_def": "to make someone leave their job, usually as a punishment",
    "cn_def": "開除；解雇"
  },
  "success": {
    "pos": "n.",
    "en_def": "achieving what you planned or wanted",
    "cn_def": "成功"
  },
  "ambition": {
    "pos": "n.",
    "en_def": "a strong wish to achieve something",
    "cn_def": "抱負；雄心"
  },
  "goal": {
    "pos": "n.",
    "en_def": "something you are trying to achieve",
    "cn_def": "目標"
  },
  "path": {
    "pos": "n.",
    "en_def": "a series of steps or choices that lead somewhere, such as in a career",
    "cn_def": "道路；（職涯）路線"
  },
  "opportunity": {
    "pos": "n.",
    "en_def": "a chance to do something good",
    "cn_def": "機會"
  },
  "balance": {
    "pos": "n.",
    "en_def": "a healthy mix of different parts, such as work and private life",
    "cn_def": "平衡"
  },
  "retire": {
    "pos": "v.",
    "en_def": "to stop working, usually because you are older",
    "cn_def": "退休"
  },
  "long-term": {
    "pos": "adj.",
    "en_def": "lasting or planned for a long time",
    "cn_def": "長期的"
  },
  "stable": {
    "pos": "adj.",
    "en_def": "not likely to change; steady",
    "cn_def": "穩定的"
  },
  "rewarding": {
    "pos": "adj.",
    "en_def": "making you feel satisfied and happy",
    "cn_def": "有意義的；有成就感的"
  }
};

const EXTRA_GLOSSES = {};
