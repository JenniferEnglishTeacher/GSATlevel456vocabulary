// Topic 310 Quiz Data: Profession 職業
// Source word list: https://www.examword.com/group-topic/profession — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T310 - Profession 職業",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "career",
    "pos": "n.",
    "cn_def": "職業生涯；事業",
    "en_def": "the series of jobs a person does in one field during their working life",
    "sentence": "A: Why did your sister leave the bank after working there for twelve years, even though she had a good office and friendly coworkers? B: She wanted to start a new {{BLANK}} in graphic design, so she took evening classes and now works for a small advertising company downtown.",
    "cn": "A：你姊姊在銀行工作了十二年，雖然有很好的辦公室和友善的同事，她為什麼還要離開？ B：她想在平面設計領域展開新的【職業生涯】，所以她上了夜間課程，現在在市中心一家小型廣告公司工作。"
  },
  {
    "word": "occupation",
    "pos": "n.",
    "cn_def": "職業；工作",
    "en_def": "a person's job or regular work",
    "sentence": "A: The bank's online form keeps asking for my {{BLANK}}, but I'm a freelance translator who also teaches part-time, so what should I write in that box? B: Just enter the work that brings you most of your income, and you can add the teaching in the notes section below.",
    "cn": "A：銀行的線上表格一直要求我填寫【職業】，但我是自由譯者，也兼職教書，那一欄我該寫什麼？ B：就填你主要收入來源的工作，教書的部分可以寫在下面的備註欄。"
  },
  {
    "word": "vocation",
    "pos": "n.",
    "cn_def": "天職；使命感的職業",
    "en_def": "a type of work you feel strongly suited to and want to do",
    "sentence": "A: Your aunt has worked as a nurse for thirty years and still smiles every morning, even after long night shifts at the busy hospital. How does she do it? B: She says caring for sick people is her true {{BLANK}}, so the hard work never feels like a burden to her.",
    "cn": "A：你阿姨當了三十年護理師，即使在忙碌的醫院值完漫長的夜班，每天早上仍然面帶笑容。她是怎麼做到的？ B：她說照顧病人是她真正的【天職】，所以辛苦的工作對她來說從不是負擔。"
  },
  {
    "word": "employment",
    "pos": "n.",
    "cn_def": "就業；雇用",
    "en_def": "the state of having a paid job; work",
    "sentence": "A: Since the new electronics factory opened near the river last spring, have things changed much for the young people in your hometown? B: Yes, it has created stable {{BLANK}} for over five hundred local workers, so fewer graduates need to move to the big cities to find work.",
    "cn": "A：自從去年春天河邊那間新的電子工廠開幕後，你家鄉的年輕人生活有很大的改變嗎？ B：有，它為五百多名當地工人創造了穩定的【就業】機會，所以需要搬到大城市找工作的畢業生變少了。"
  },
  {
    "word": "job",
    "pos": "n.",
    "cn_def": "工作；職務",
    "en_def": "work that you do regularly to earn money",
    "sentence": "A: You look really tired today, and I noticed you left the office very late every night this week. Is everything okay with your team? B: I'm fine, but I've been working a second {{BLANK}} at a restaurant on weekends because I'm saving money for my wedding next year.",
    "cn": "A：你今天看起來很累，而且我注意到你這星期每天都很晚才離開辦公室。你的團隊都還好嗎？ B：我沒事，只是我週末在一家餐廳做第二份【工作】，因為我在為明年的婚禮存錢。"
  },
  {
    "word": "position",
    "pos": "n.",
    "cn_def": "職位；職務",
    "en_def": "a job in a company or organization",
    "sentence": "A: I saw on the company website that the marketing department is hiring again. Do you know what kind of person they are looking for this time? B: They need someone for a senior {{BLANK}} who can lead a small team, speak fluent Japanese, and travel to Tokyo several times a year.",
    "cn": "A：我在公司網站上看到行銷部又在徵人了。你知道他們這次在找什麼樣的人嗎？ B：他們需要一個資深【職位】的人選，能帶領小團隊、說流利的日語，而且每年要去東京出差好幾次。"
  },
  {
    "word": "post",
    "pos": "n.",
    "cn_def": "職位；崗位",
    "en_def": "an official job, especially an important one",
    "sentence": "A: Have you heard that our regional manager is moving to the Singapore office next month after working here for almost ten years? B: Yes, and the board has already offered her {{BLANK}} to Mr. Lin from the sales department, because he knows our clients and the local market very well.",
    "cn": "A：你有聽說我們的區域經理在這裡工作快十年後，下個月要調到新加坡辦公室嗎？ B：有，而且董事會已經把她的【職位】給了業務部的林先生，因為他非常了解我們的客戶和當地市場。"
  },
  {
    "word": "workplace",
    "pos": "n.",
    "cn_def": "工作場所；職場",
    "en_def": "the place where people work, such as an office or factory",
    "sentence": "A: Why did the company spend so much money on new chairs, brighter lights, and plants for every floor of the building this year? B: The managers believe a comfortable and healthy {{BLANK}} helps staff feel happier, take fewer sick days, and produce better results for our customers.",
    "cn": "A：公司今年為什麼花那麼多錢在大樓每層樓添購新椅子、更亮的燈和植物？ B：主管們相信舒適健康的【工作場所】能讓員工更快樂、少請病假，並為客戶創造更好的成果。"
  },
  {
    "word": "colleague",
    "pos": "n.",
    "cn_def": "同事",
    "en_def": "a person you work with",
    "sentence": "A: Who is going to finish the sales report while you are away on vacation in Thailand for two weeks, since the deadline is next Friday? B: A {{BLANK}} from my department has agreed to check the final numbers and send it to the director, and I'll answer her emails if she has any questions.",
    "cn": "A：你去泰國度假兩週期間，誰要完成業績報告？截止日是下週五。 B：我們部門的一位【同事】同意幫忙核對最後的數字並寄給主任，如果她有問題，我會回覆她的電子郵件。"
  },
  {
    "word": "employer",
    "pos": "n.",
    "cn_def": "雇主",
    "en_def": "a person or company that pays people to work for them",
    "sentence": "A: I'm thinking about changing companies because I want more training and a better schedule, but I'm worried about leaving a safe job. What do you think? B: A good {{BLANK}} should offer chances to learn new things and respect your time, so it's reasonable to look for a company that does.",
    "cn": "A：我在考慮換公司，因為我想要更多培訓和更好的工作時間，但我擔心離開一份穩定的工作。你覺得呢？ B：一個好的【雇主】應該提供學習新事物的機會並尊重你的時間，所以找一間做得到的公司是合理的。"
  },
  {
    "word": "employee",
    "pos": "n.",
    "cn_def": "員工；受雇者",
    "en_def": "a person who is paid to work for a person or company",
    "sentence": "A: Why is there a big cake and so many balloons in the meeting room this afternoon? Is it someone's birthday today? B: No, we're celebrating Mrs. Chen, who has been our most loyal {{BLANK}} for twenty-five years, and the president will give a short speech at three o'clock.",
    "cn": "A：今天下午會議室裡為什麼有個大蛋糕和那麼多氣球？今天是誰生日嗎？ B：不是，我們在慶祝陳太太，她已經是我們最忠誠的【員工】長達二十五年了，總裁三點會發表簡短致詞。"
  },
  {
    "word": "qualification",
    "pos": "n.",
    "cn_def": "資格；學歷證明",
    "en_def": "an official record such as a degree that shows you have the training for a job",
    "sentence": "A: I really want to become an accountant at an international firm, but I only studied history at university. Can I still get hired? B: You'll probably need a professional {{BLANK}} in accounting first, so many people take a one-year evening course before they apply to those firms.",
    "cn": "A：我很想在國際事務所當會計師，但我大學只讀歷史。我還能被錄用嗎？ B：你可能需要先取得會計方面的專業【資格】，所以很多人在應徵那些事務所之前會先上一年的夜間課程。"
  },
  {
    "word": "certificate",
    "pos": "n.",
    "cn_def": "證書；證明",
    "en_def": "an official document that shows you have finished a course or passed an exam",
    "sentence": "A: The hotel manager asked me to bring proof of my food safety training before I start working in the kitchen next Monday. What should I give her? B: Bring the {{BLANK}} you received after finishing the course last month, and make a copy so she can keep it in your file.",
    "cn": "A：飯店經理要我下週一開始在廚房工作前，帶食品安全培訓的證明。我該給她什麼？ B：帶你上個月完成課程後拿到的【證書】，再影印一份讓她放進你的檔案。"
  },
  {
    "word": "degree",
    "pos": "n.",
    "cn_def": "學位",
    "en_def": "a qualification given by a university after you finish your studies",
    "sentence": "A: Why is your brother studying so late every night at the library after working a full day at the hospital? B: He's working toward a master's {{BLANK}} in business, because he hopes to become the hospital's operations manager when his boss retires in two years.",
    "cn": "A：你哥哥在醫院工作一整天後，為什麼每天晚上還在圖書館讀書讀到那麼晚？ B：他正在攻讀企管碩士【學位】，因為他希望兩年後老闆退休時能成為醫院的營運經理。"
  },
  {
    "word": "internship",
    "pos": "n.",
    "cn_def": "實習",
    "en_def": "a short period of work, often for students, to gain experience",
    "sentence": "A: Our department is very busy this summer, and the manager mentioned that some university students will be joining us soon. What will they do here? B: They're starting a three-month {{BLANK}}, so they'll help with customer research and learn how a real marketing team works before they graduate.",
    "cn": "A：我們部門這個夏天很忙，經理提到有些大學生很快就會加入我們。他們在這裡要做什麼？ B：他們要開始為期三個月的【實習】，所以會協助客戶研究，並在畢業前學習真正的行銷團隊如何運作。"
  },
  {
    "word": "apprentice",
    "pos": "n.",
    "cn_def": "學徒",
    "en_def": "a person who works for an expert for a period of time to learn a skill",
    "sentence": "A: Who is the young man watching the head chef so carefully while he cuts the vegetables and prepares the sauce? B: He's our new {{BLANK}}, so he'll work beside the chef for two years, learning every dish on the menu before he can cook for customers on his own.",
    "cn": "A：那個在主廚切菜和準備醬汁時看得那麼仔細的年輕人是誰？ B：他是我們新來的【學徒】，所以他會在主廚身邊工作兩年，學會菜單上每道菜，之後才能獨自為客人烹調。"
  },
  {
    "word": "expertise",
    "pos": "n.",
    "cn_def": "專門知識；專長",
    "en_def": "special knowledge or skill in a particular area",
    "sentence": "A: Our online store keeps losing customers because the website is so slow, and nobody on our team knows how to fix it. What should we do? B: Let's hire an outside consultant with {{BLANK}} in web design, because paying for expert help now will save us money later.",
    "cn": "A：我們的網路商店因為網站太慢一直流失顧客，而團隊裡沒人知道怎麼修。我們該怎麼辦？ B：我們找一位具備網頁設計【專業知識】的外部顧問吧，因為現在花錢請專家幫忙，以後能幫我們省錢。"
  },
  {
    "word": "skill",
    "pos": "n.",
    "cn_def": "技能；技巧",
    "en_def": "an ability to do something well because you have practiced it",
    "sentence": "A: Why did the manager choose Kevin to speak with the angry customer instead of the other staff in the shop? B: Kevin has a special {{BLANK}} for staying calm and listening carefully, so customers usually feel better after talking to him, even when they arrive very upset.",
    "cn": "A：經理為什麼選Kevin去跟那位生氣的顧客談，而不是店裡其他員工？ B：Kevin有保持冷靜和仔細傾聽的特別【技能】，所以即使顧客來的時候很不高興，跟他談完後通常都會覺得好多了。"
  },
  {
    "word": "competence",
    "pos": "n.",
    "cn_def": "能力；勝任",
    "en_def": "the ability to do something well or effectively",
    "sentence": "A: Before the new pilots are allowed to fly passengers, what does the airline make them do after they finish their classroom training? B: They must show their {{BLANK}} during several tests in a flight simulator, and a senior captain watches every step before giving final approval.",
    "cn": "A：新進飛行員在被允許載客之前，航空公司在他們完成課堂訓練後會要求他們做什麼？ B：他們必須在幾次飛行模擬器測試中證明自己的【能力】，而且資深機長會在核准前觀察每個步驟。"
  },
  {
    "word": "professional",
    "pos": "adj.",
    "cn_def": "專業的；職業的",
    "en_def": "connected with a job that needs special training; showing high standards at work",
    "sentence": "A: The client from Germany is visiting our office tomorrow morning, and I'm nervous because it's my first big meeting. Any advice? B: Wear a {{BLANK}} suit, arrive ten minutes early, and prepare a short summary of our plan so you look organized and confident.",
    "cn": "A：德國客戶明天早上要來我們辦公室，這是我第一次參加大型會議，我很緊張。有什麼建議嗎？ B：穿一套【專業的】西裝，提早十分鐘到，再準備一份計畫的簡短摘要，讓你看起來有條理又有自信。"
  },
  {
    "word": "promotion",
    "pos": "n.",
    "cn_def": "升遷；晉升",
    "en_def": "a move to a higher and more important job",
    "sentence": "A: Why is Amanda moving into the large office on the top floor next week, and why is everyone congratulating her today? B: She got a {{BLANK}} to department manager because her team doubled its sales this year, so she'll now lead fifteen people.",
    "cn": "A：Amanda下週為什麼要搬到頂樓的大辦公室？為什麼今天大家都在恭喜她？ B：她【升遷】為部門經理了，因為她的團隊今年業績翻倍，所以她現在要帶領十五個人。"
  },
  {
    "word": "salary",
    "pos": "n.",
    "cn_def": "薪水；月薪",
    "en_def": "a fixed amount of money paid to a worker, usually every month",
    "sentence": "A: The job in Taichung sounds interesting, but it would mean moving my whole family. Did the company tell you how much they would pay? B: They offered a higher {{BLANK}} than my current one, plus a housing allowance, so I think the move would be worth it.",
    "cn": "A：台中的那份工作聽起來很有意思，但這代表我要舉家搬遷。公司有告訴你他們會付多少嗎？ B：他們開出比我現在更高的【薪水】，再加上住房津貼，所以我覺得搬家是值得的。"
  },
  {
    "word": "wage",
    "pos": "n.",
    "cn_def": "工資；時薪",
    "en_def": "money paid for work, usually by the hour or week",
    "sentence": "A: Why are so many restaurants in the city having trouble finding kitchen staff this year, even though business is good? B: Many workers have moved to factories that pay a better hourly {{BLANK}}, so restaurant owners are now raising pay and offering free meals to attract people.",
    "cn": "A：今年城裡為什麼有那麼多餐廳找不到廚房員工，即使生意很好？ B：很多工人轉往時薪【工資】更好的工廠，所以餐廳老闆現在正在加薪並提供免費餐點來吸引人。"
  },
  {
    "word": "benefit",
    "pos": "n.",
    "cn_def": "福利；津貼",
    "en_def": "something extra such as insurance or holidays that a worker gets besides pay",
    "sentence": "A: The two job offers pay about the same, so how are you going to decide which company to join before Friday? B: The second company offers free health insurance as an extra {{BLANK}}, along with flexible hours, so I'll probably accept their offer.",
    "cn": "A：這兩份工作的薪水差不多，那你要怎麼在週五前決定加入哪家公司？ B：第二家公司提供免費健康保險作為額外【福利】，還有彈性工時，所以我可能會接受他們的錄取。"
  },
  {
    "word": "retire",
    "pos": "v.",
    "cn_def": "退休",
    "en_def": "to stop working, usually because of age",
    "sentence": "A: Mr. Wang has been the factory's chief engineer for almost forty years. Is it true that he is leaving the company soon? B: Yes, he plans to {{BLANK}} at the end of this year, so he's training two younger engineers to take over his duties before then.",
    "cn": "A：王先生擔任工廠的總工程師快四十年了。他真的很快要離開公司嗎？ B：是的，他打算在今年年底【退休】，所以他正在訓練兩名年輕工程師，在那之前接手他的職務。"
  },
  {
    "word": "resign",
    "pos": "v.",
    "cn_def": "辭職",
    "en_def": "to officially leave your job",
    "sentence": "A: Why did the finance director suddenly give the president a letter this morning, and why does everyone in the office look so surprised? B: She decided to {{BLANK}} because she received an offer from a bank in London, and she will work her final day here at the end of the month.",
    "cn": "A：財務長今天早上為什麼突然交給總裁一封信？為什麼辦公室裡每個人看起來都那麼驚訝？ B：她決定【辭職】，因為她收到倫敦一家銀行的錄取，她會在月底在這裡工作最後一天。"
  },
  {
    "word": "recruit",
    "pos": "v.",
    "cn_def": "招募；招聘",
    "en_def": "to find new people to join a company or group",
    "sentence": "A: Our online orders have increased so quickly this year that the warehouse staff can't pack everything on time. What is the company planning? B: The manager wants to {{BLANK}} twenty more workers before the holiday season, so the human resources team will attend three job fairs next month.",
    "cn": "A：今年我們的線上訂單增加太快，倉庫人員無法準時把所有東西打包好。公司有什麼計畫？ B：經理想在假期旺季前再【招募】二十名員工，所以人資團隊下個月會參加三場就業博覽會。"
  },
  {
    "word": "interview",
    "pos": "n.",
    "cn_def": "面試",
    "en_def": "a formal meeting where someone is asked questions to see if they are right for a job",
    "sentence": "A: You look very nervous this morning, and you're wearing a new suit. Do you have an important meeting with a client today? B: Not exactly, I have a job {{BLANK}} at a software company at ten o'clock, so I've been practicing my answers about my past work all week.",
    "cn": "A：你今天早上看起來很緊張，還穿了新西裝。你今天要跟客戶開重要的會嗎？ B：不完全是，我十點在一家軟體公司有工作【面試】，所以我整個星期都在練習回答關於過去工作經歷的問題。"
  },
  {
    "word": "responsibility",
    "pos": "n.",
    "cn_def": "責任；職責",
    "en_def": "a duty to take care of something or someone as part of your job",
    "sentence": "A: Now that you've become the team leader, what has changed most in your daily work compared with last year? B: My main {{BLANK}} is making sure every project finishes on time, so I spend more time checking schedules and helping my team solve problems.",
    "cn": "A：你現在當上組長了，跟去年相比，你的日常工作最大的改變是什麼？ B：我的主要【職責】是確保每個專案準時完成，所以我花更多時間檢查進度並幫助團隊解決問題。"
  },
  {
    "word": "ethic",
    "pos": "n.",
    "cn_def": "倫理；道德規範",
    "en_def": "a set of moral beliefs about how to behave, especially at work",
    "sentence": "A: Why does the manager always choose Lisa for difficult projects, even though some of the other staff have worked here longer? B: She has a strong work {{BLANK}}, so she never misses deadlines, always checks her work twice, and helps others when they fall behind.",
    "cn": "A：經理為什麼總是選Lisa做困難的專案，即使有些員工在這裡待得更久？ B：她有很強的工作【倫理】，所以她從不錯過截止日期，總是把工作檢查兩次，並在別人落後時幫忙。"
  },
  {
    "word": "reputation",
    "pos": "n.",
    "cn_def": "名聲；聲譽",
    "en_def": "the opinion people have about someone or something",
    "sentence": "A: Why are so many customers willing to wait three weeks for a table at that small Italian restaurant near the train station? B: The owner has built an excellent {{BLANK}} for fresh food and friendly service over twenty years, so people trust that the meal will be worth waiting for.",
    "cn": "A：為什麼那麼多顧客願意等三週才能在火車站附近那家小義大利餐廳訂到位子？ B：老闆二十年來以新鮮食物和親切服務建立了極佳的【聲譽】，所以大家相信這頓飯值得等待。"
  },
  {
    "word": "network",
    "pos": "v.",
    "cn_def": "建立人脈；交際",
    "en_def": "to meet and talk with people who may help you in your work",
    "sentence": "A: Why are you going to the business conference in Taipei this weekend if you don't have to give a speech or present anything? B: I want to {{BLANK}} with managers from other companies, because meeting the right people could help me find new clients for our design studio.",
    "cn": "A：既然你不用演講或發表任何東西，為什麼這個週末還要去台北參加商務會議？ B：我想跟其他公司的經理【建立人脈】，因為認識對的人可以幫我為我們的設計工作室找到新客戶。"
  },
  {
    "word": "specialize",
    "pos": "v.",
    "cn_def": "專攻；專門從事",
    "en_def": "to focus on one particular area of work or study",
    "sentence": "A: Our company needs a lawyer to help with a contract for our new factory in Vietnam. Do you know anyone who could help us? B: My cousin's firm is a good choice because they {{BLANK}} in international business law and have helped many Taiwanese companies open offices in Southeast Asia.",
    "cn": "A：我們公司需要一位律師協助處理越南新工廠的合約。你認識可以幫忙的人嗎？ B：我表哥的事務所是不錯的選擇，因為他們【專攻】國際商法，而且幫助過許多台灣公司在東南亞設立辦事處。"
  },
  {
    "word": "experienced",
    "pos": "adj.",
    "cn_def": "有經驗的",
    "en_def": "having skill or knowledge because you have done something for a long time",
    "sentence": "A: The new branch office opens next month, and none of the new staff have ever worked in a bank before. Who will train them? B: The company is sending two {{BLANK}} managers from the main office, so they can guide the new team through their first busy weeks.",
    "cn": "A：新分行下個月開幕，而新員工都沒有在銀行工作過。誰來訓練他們？ B：公司會從總行派兩位【有經驗的】經理過去，讓他們能帶領新團隊度過最初忙碌的幾週。"
  }
];

const MCQS = [
  {
    "q": "After ten years in sales, Daniel decided to change his _____ completely. He is now training to become a chef in a hotel kitchen.",
    "options": [
      "career",
      "salary",
      "wage",
      "certificate"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Please write your full name, address, and _____ on the visa application. The embassy needs to know what work you do.",
    "options": [
      "promotion",
      "occupation",
      "reputation",
      "internship"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Many teachers say that helping young people learn is a _____ rather than a job. They feel called to the work.",
    "options": [
      "benefit",
      "wage",
      "vocation",
      "degree"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The new shopping mall will provide _____ for about three hundred residents. Most of the jobs will be in retail and cleaning.",
    "options": [
      "expertise",
      "competence",
      "responsibility",
      "employment"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Sam lost his _____ when the factory closed last year. He found new work at a logistics company two months later.",
    "options": [
      "degree",
      "job",
      "skill",
      "ethic"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The bank has advertised a _____ for a branch manager in Kaohsiung. Applicants must have at least five years of banking experience.",
    "options": [
      "wage",
      "certificate",
      "reputation",
      "position"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Dr. Hsu has accepted the _____ of hospital director. She will officially start her new duties in January.",
    "options": [
      "post",
      "salary",
      "skill",
      "internship"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The company banned smoking everywhere in the _____ last month. Staff who want to smoke must now leave the building.",
    "options": [
      "employer",
      "colleague",
      "workplace",
      "apprentice"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Jenny asked a _____ to cover her shift on Saturday. She needs to attend her cousin's wedding in Tainan.",
    "options": [
      "workplace",
      "vocation",
      "degree",
      "colleague"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The city government is now the largest _____ in the region. It hires more than eight thousand people.",
    "options": [
      "employer",
      "employee",
      "apprentice",
      "colleague"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Every new _____ must attend a safety training session on the first day. The session lasts about three hours.",
    "options": [
      "employer",
      "employee",
      "workplace",
      "occupation"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "A teaching _____ is required for all English teachers at our school. Applicants without one will not be considered.",
    "options": [
      "promotion",
      "salary",
      "qualification",
      "reputation"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "You will receive a _____ after you complete the first aid course. Keep it because some employers will ask to see it.",
    "options": [
      "certificate",
      "career",
      "benefit",
      "wage"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Most engineering jobs require a university _____ in a related subject. Some companies also ask for work experience.",
    "options": [
      "promotion",
      "wage",
      "post",
      "degree"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Lily did a summer _____ at a law firm in Taipei. The experience helped her decide to study law after graduation.",
    "options": [
      "salary",
      "internship",
      "ethic",
      "reputation"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "He started as an _____ in a furniture workshop at eighteen. Now he owns his own business and trains young workers.",
    "options": [
      "employer",
      "occupation",
      "apprentice",
      "expertise"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "We hired Ms. Kim for her _____ in international tax law. She has helped dozens of companies reduce their costs.",
    "options": [
      "employment",
      "expertise",
      "wage",
      "promotion"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Speaking clearly in meetings is an important _____ for any manager. The company offers a free course to improve it.",
    "options": [
      "skill",
      "salary",
      "post",
      "certificate"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The inspector checked the electrician's _____ before approving the license. Every wire in the test building had to be installed correctly.",
    "options": [
      "vocation",
      "promotion",
      "benefit",
      "competence"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "If you want _____ help with your taxes, contact an accountant. The service costs about two thousand dollars.",
    "options": [
      "nervous",
      "jealous",
      "professional",
      "lazy"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Tom was given a _____ to sales director after only three years. His boss was impressed by his results.",
    "options": [
      "promotion",
      "degree",
      "certificate",
      "vocation"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The annual _____ for this position is about nine hundred thousand dollars. It also includes a year-end bonus.",
    "options": [
      "benefit",
      "qualification",
      "salary",
      "responsibility"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Part-time workers at the café earn an hourly _____ of two hundred dollars. Tips are shared at the end of each week.",
    "options": [
      "degree",
      "wage",
      "post",
      "career"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Free lunch is one _____ that all staff at the company enjoy. Employees also get twelve days of paid vacation.",
    "options": [
      "occupation",
      "certificate",
      "interview",
      "benefit"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "My grandfather plans to _____ next year at the age of sixty-five. He wants to spend more time in his garden.",
    "options": [
      "recruit",
      "network",
      "retire",
      "specialize"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The manager threatened to _____ if the board cut her team's budget again. Fortunately, the directors changed their plan.",
    "options": [
      "resign",
      "recruit",
      "specialize",
      "network"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The airline hopes to _____ five hundred new flight attendants this year. Training will take place in Taoyuan.",
    "options": [
      "retire",
      "resign",
      "specialize",
      "recruit"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Your _____ with the hiring manager is scheduled for Tuesday at two o'clock. Please bring a copy of your résumé.",
    "options": [
      "responsibility",
      "interview",
      "salary",
      "ethic"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "It is the driver's _____ to check the truck's brakes every morning. A record must be kept in the logbook.",
    "options": [
      "responsibility",
      "expertise",
      "interview",
      "degree"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The hotel wants an _____ manager to lead the front desk. Candidates must have worked in the industry for at least ten years.",
    "options": [
      "anxious",
      "idle",
      "experienced",
      "absent"
    ],
    "answer": 2,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "career": {
    "pos": "n.",
    "en_def": "the series of jobs a person does in one field during their working life",
    "cn_def": "職業生涯；事業"
  },
  "occupation": {
    "pos": "n.",
    "en_def": "a person's job or regular work",
    "cn_def": "職業；工作"
  },
  "vocation": {
    "pos": "n.",
    "en_def": "a type of work you feel strongly suited to and want to do",
    "cn_def": "天職；使命感的職業"
  },
  "employment": {
    "pos": "n.",
    "en_def": "the state of having a paid job; work",
    "cn_def": "就業；雇用"
  },
  "job": {
    "pos": "n.",
    "en_def": "work that you do regularly to earn money",
    "cn_def": "工作；職務"
  },
  "position": {
    "pos": "n.",
    "en_def": "a job in a company or organization",
    "cn_def": "職位；職務"
  },
  "post": {
    "pos": "n.",
    "en_def": "an official job, especially an important one",
    "cn_def": "職位；崗位"
  },
  "workplace": {
    "pos": "n.",
    "en_def": "the place where people work, such as an office or factory",
    "cn_def": "工作場所；職場"
  },
  "colleague": {
    "pos": "n.",
    "en_def": "a person you work with",
    "cn_def": "同事"
  },
  "employer": {
    "pos": "n.",
    "en_def": "a person or company that pays people to work for them",
    "cn_def": "雇主"
  },
  "employee": {
    "pos": "n.",
    "en_def": "a person who is paid to work for a person or company",
    "cn_def": "員工；受雇者"
  },
  "qualification": {
    "pos": "n.",
    "en_def": "an official record such as a degree that shows you have the training for a job",
    "cn_def": "資格；學歷證明"
  },
  "certificate": {
    "pos": "n.",
    "en_def": "an official document that shows you have finished a course or passed an exam",
    "cn_def": "證書；證明"
  },
  "degree": {
    "pos": "n.",
    "en_def": "a qualification given by a university after you finish your studies",
    "cn_def": "學位"
  },
  "internship": {
    "pos": "n.",
    "en_def": "a short period of work, often for students, to gain experience",
    "cn_def": "實習"
  },
  "apprentice": {
    "pos": "n.",
    "en_def": "a person who works for an expert for a period of time to learn a skill",
    "cn_def": "學徒"
  },
  "expertise": {
    "pos": "n.",
    "en_def": "special knowledge or skill in a particular area",
    "cn_def": "專門知識；專長"
  },
  "skill": {
    "pos": "n.",
    "en_def": "an ability to do something well because you have practiced it",
    "cn_def": "技能；技巧"
  },
  "competence": {
    "pos": "n.",
    "en_def": "the ability to do something well or effectively",
    "cn_def": "能力；勝任"
  },
  "professional": {
    "pos": "adj.",
    "en_def": "connected with a job that needs special training; showing high standards at work",
    "cn_def": "專業的；職業的"
  },
  "promotion": {
    "pos": "n.",
    "en_def": "a move to a higher and more important job",
    "cn_def": "升遷；晉升"
  },
  "salary": {
    "pos": "n.",
    "en_def": "a fixed amount of money paid to a worker, usually every month",
    "cn_def": "薪水；月薪"
  },
  "wage": {
    "pos": "n.",
    "en_def": "money paid for work, usually by the hour or week",
    "cn_def": "工資；時薪"
  },
  "benefit": {
    "pos": "n.",
    "en_def": "something extra such as insurance or holidays that a worker gets besides pay",
    "cn_def": "福利；津貼"
  },
  "retire": {
    "pos": "v.",
    "en_def": "to stop working, usually because of age",
    "cn_def": "退休"
  },
  "resign": {
    "pos": "v.",
    "en_def": "to officially leave your job",
    "cn_def": "辭職"
  },
  "recruit": {
    "pos": "v.",
    "en_def": "to find new people to join a company or group",
    "cn_def": "招募；招聘"
  },
  "interview": {
    "pos": "n.",
    "en_def": "a formal meeting where someone is asked questions to see if they are right for a job",
    "cn_def": "面試"
  },
  "responsibility": {
    "pos": "n.",
    "en_def": "a duty to take care of something or someone as part of your job",
    "cn_def": "責任；職責"
  },
  "ethic": {
    "pos": "n.",
    "en_def": "a set of moral beliefs about how to behave, especially at work",
    "cn_def": "倫理；道德規範"
  },
  "reputation": {
    "pos": "n.",
    "en_def": "the opinion people have about someone or something",
    "cn_def": "名聲；聲譽"
  },
  "network": {
    "pos": "v.",
    "en_def": "to meet and talk with people who may help you in your work",
    "cn_def": "建立人脈；交際"
  },
  "specialize": {
    "pos": "v.",
    "en_def": "to focus on one particular area of work or study",
    "cn_def": "專攻；專門從事"
  },
  "experienced": {
    "pos": "adj.",
    "en_def": "having skill or knowledge because you have done something for a long time",
    "cn_def": "有經驗的"
  }
};

const EXTRA_GLOSSES = {};
