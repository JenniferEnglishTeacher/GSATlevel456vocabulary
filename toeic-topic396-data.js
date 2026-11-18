// Topic 396 Quiz Data: Teacher 老師
// Source word list: https://www.examword.com/group-topic/teacher — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T396 - Teacher 老師",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "educator",
    "pos": "n.",
    "cn_def": "教育工作者",
    "en_def": "a person whose job is to teach or train others",
    "sentence": "A: Who is going to lead the new training program for our customer service staff next month at the downtown office? B: We hired an experienced {{BLANK}} from the local university, and she will run weekly workshops on communication skills because many new employees have trouble handling difficult calls.",
    "cn": "A：下個月誰要負責在市區辦公室為我們客服人員帶領新的訓練課程？ B：我們從當地大學聘請了一位經驗豐富的【教育工作者】，她將每週舉辦溝通技巧工作坊，因為許多新進員工在處理棘手電話時有困難。"
  },
  {
    "word": "instructor",
    "pos": "n.",
    "cn_def": "講師；教練",
    "en_def": "a person who teaches a practical skill or activity",
    "sentence": "A: Did you sign up for the computer course that the company is offering to employees on Thursday evenings this spring? B: Yes, I did, and the {{BLANK}} is very helpful because he explains each step of the new accounting software slowly and answers all of our questions after class.",
    "cn": "A：你有報名公司今年春天在星期四晚上提供給員工的電腦課程嗎？ B：有，我報名了，而且那位【講師】非常有幫助，因為他會慢慢解釋新會計軟體的每一個步驟，並在下課後回答我們所有的問題。"
  },
  {
    "word": "mentor",
    "pos": "n.",
    "cn_def": "導師；指導者",
    "en_def": "an experienced person who gives advice and help to a less experienced person",
    "sentence": "A: How did you manage to adjust so quickly when you first joined the marketing department last year without any experience? B: My manager introduced me to a senior colleague who became my {{BLANK}}, and she met me every Friday to review my reports and share useful tips about our clients.",
    "cn": "A：你去年剛加入行銷部門、沒有任何經驗時，是怎麼這麼快就適應的？ B：我的經理把我介紹給一位資深同事，她成了我的【導師】，每週五和我見面檢查我的報告，並分享關於我們客戶的實用訣竅。"
  },
  {
    "word": "tutor",
    "pos": "n.",
    "cn_def": "家教；個別指導老師",
    "en_def": "a private teacher who teaches one student or a small group",
    "sentence": "A: Your son's math grades have improved a lot this semester, so what changed after his poor results in the autumn? B: We found a university student who works as a {{BLANK}} in our neighborhood, and she comes to our apartment twice a week to help him practice difficult problems before his exams.",
    "cn": "A：你兒子這學期的數學成績進步很多，他秋天成績不好之後有什麼改變嗎？ B：我們找到一位在我們社區當【家教】的大學生，她每週來我們公寓兩次，幫他在考試前練習困難的題目。"
  },
  {
    "word": "professor",
    "pos": "n.",
    "cn_def": "教授",
    "en_def": "a teacher of the highest rank at a university",
    "sentence": "A: Who will give the opening speech at the business conference that our company is organizing at the convention center next week? B: A well-known {{BLANK}} of economics from National Taiwan University has agreed to speak, and she will talk about how small companies can grow during difficult times.",
    "cn": "A：我們公司下週在會議中心舉辦的商業研討會，誰會發表開幕演講？ B：一位來自國立台灣大學的知名經濟學【教授】已經答應演講，她將談談小公司如何在艱困時期成長。"
  },
  {
    "word": "lecturer",
    "pos": "n.",
    "cn_def": "（大學）講師",
    "en_def": "a person who teaches and gives talks at a college or university",
    "sentence": "A: Why does your sister travel to the college in Taichung every Tuesday even though she lives and works in Taipei? B: She works part-time as a {{BLANK}} in the hotel management department there, so she gives two classes on customer service and then takes the high-speed train home in the evening.",
    "cn": "A：你姊姊住在台北也在台北工作，為什麼每週二都要去台中的大學？ B：她在那裡的飯店管理系兼任【講師】，所以她會上兩堂客戶服務的課，然後晚上搭高鐵回家。"
  },
  {
    "word": "coach",
    "pos": "n.",
    "cn_def": "教練",
    "en_def": "a person who trains a sports team or helps someone improve a skill",
    "sentence": "A: Has our company basketball team been practicing for the tournament against the other banks in the city next month? B: Yes, we hired a professional {{BLANK}} who used to play in the national league, and he makes us run and practice our passing every Wednesday after work.",
    "cn": "A：我們公司的籃球隊有在為下個月和市內其他銀行的比賽練習嗎？ B：有，我們請了一位曾在全國聯賽打球的專業【教練】，他每週三下班後都要我們跑步並練習傳球。"
  },
  {
    "word": "guide",
    "pos": "n.",
    "cn_def": "導覽員；嚮導",
    "en_def": "a person who shows visitors around a place and gives information",
    "sentence": "A: Will the overseas clients be able to visit the old factory museum on Saturday morning before their flight leaves? B: Yes, I have booked a private tour for them, and a {{BLANK}} who speaks excellent Japanese will explain the history of our company while they walk through the building.",
    "cn": "A：海外客戶在週六早上班機起飛前能去參觀舊工廠博物館嗎？ B：可以，我已經為他們預訂了私人導覽，一位日語非常好的【導覽員】會在他們參觀建築時解說我們公司的歷史。"
  },
  {
    "word": "facilitator",
    "pos": "n.",
    "cn_def": "引導者；協調人",
    "en_def": "a person who helps a group discuss or work together more easily",
    "sentence": "A: Who is going to manage the brainstorming meeting between the sales and design teams on Monday afternoon in the large conference room? B: The human resources office has asked an outside {{BLANK}} to keep the discussion on track, so everyone gets a chance to share ideas without arguing too much.",
    "cn": "A：星期一下午在大會議室舉行的業務和設計團隊腦力激盪會議，誰要負責主持？ B：人資部請了一位外部【引導者】讓討論保持正軌，這樣每個人都有機會分享想法而不會爭論太多。"
  },
  {
    "word": "role model",
    "pos": "n.phr.",
    "cn_def": "榜樣；模範",
    "en_def": "a person whose behavior others admire and try to copy",
    "sentence": "A: Why do so many young employees in the office ask Mrs. Wang for advice about their careers and future plans? B: She started as a receptionist twenty years ago and became our regional director, so she is a great {{BLANK}} for anyone who wants to work hard and move up in the company.",
    "cn": "A：為什麼辦公室裡有這麼多年輕員工向王太太請教職涯和未來規劃的建議？ B：她二十年前從接待員做起，後來成為我們的區域總監，所以對任何想努力工作並在公司升遷的人來說，她都是很好的【榜樣】。"
  },
  {
    "word": "leader",
    "pos": "n.",
    "cn_def": "領導者；隊長",
    "en_def": "a person who is in charge of a group and directs it",
    "sentence": "A: Who will be responsible for the team that is building the new online shopping website for our clothing store this summer? B: Kevin will be the project {{BLANK}} because he has managed similar websites before, and he will hold short meetings every morning to check everyone's progress.",
    "cn": "A：今年夏天為我們服飾店建置新網購網站的團隊，誰會負責？ B：凱文將擔任專案【負責人】，因為他以前管理過類似的網站，而且他每天早上會開簡短會議檢查每個人的進度。"
  },
  {
    "word": "professional",
    "pos": "n.",
    "cn_def": "專業人士",
    "en_def": "a person who has special training and skill in a job",
    "sentence": "A: Should we try to repair the broken air conditioner in the meeting room ourselves before the clients arrive this afternoon? B: I don't think that is a good idea, because it is quite old and complicated, so we should call a {{BLANK}} from the repair company to fix it safely.",
    "cn": "A：客戶今天下午到之前，我們要不要自己試著修理會議室壞掉的冷氣？ B：我覺得這不是好主意，因為它很舊又複雜，所以我們應該打電話請維修公司的【專業人士】來安全地修好它。"
  },
  {
    "word": "patient",
    "pos": "adj.",
    "cn_def": "有耐心的",
    "en_def": "able to wait calmly or deal with problems without getting angry",
    "sentence": "A: How does the new trainer handle the older staff members who find the computer system difficult to learn? B: She is very {{BLANK}} with them, and she shows them the same steps again and again without complaining until they feel confident enough to use the program alone.",
    "cn": "A：新來的訓練員怎麼應對那些覺得電腦系統很難學的年長員工？ B：她對他們非常【有耐心】，一次又一次示範同樣的步驟而不抱怨，直到他們有足夠信心獨自使用這個程式。"
  },
  {
    "word": "kind",
    "pos": "adj.",
    "cn_def": "親切的；仁慈的",
    "en_def": "friendly, helpful and caring toward other people",
    "sentence": "A: How was your first day at the new branch office after you moved from the headquarters in Kaohsiung? B: It went really well, because my supervisor was very {{BLANK}} to me, and she took me to lunch and introduced me to everyone on the team so I wouldn't feel lonely.",
    "cn": "A：你從高雄總部調過來後，在新分公司的第一天過得如何？ B：很順利，因為我的主管對我非常【親切】，她帶我去吃午餐，還把我介紹給團隊裡的每個人，讓我不會覺得孤單。"
  },
  {
    "word": "strict",
    "pos": "adj.",
    "cn_def": "嚴格的",
    "en_def": "demanding that rules are obeyed",
    "sentence": "A: Why do all the new workers at the food factory wear hats, gloves and masks even when the machines are turned off? B: The manager is very {{BLANK}} about safety and cleanliness, so anyone who enters the production area without the right clothing will be sent home for the day.",
    "cn": "A：為什麼食品工廠的新員工即使在機器關掉時也都戴著帽子、手套和口罩？ B：經理對安全和清潔非常【嚴格】，所以任何人沒穿合適服裝就進入生產區，當天都會被請回家。"
  },
  {
    "word": "fair",
    "pos": "adj.",
    "cn_def": "公平的",
    "en_def": "treating people equally and in a right way",
    "sentence": "A: Were the employees happy with the way the new bonuses were shared at the end of the year? B: Most of them were satisfied, because the director used a {{BLANK}} system that was based on clear sales results, so nobody felt that the money was given only to her favorite workers.",
    "cn": "A：員工對年底新獎金的分配方式滿意嗎？ B：大部分人都很滿意，因為總監採用了一套以明確業績為依據的【公平】制度，所以沒有人覺得錢只發給她偏愛的員工。"
  },
  {
    "word": "supportive",
    "pos": "adj.",
    "cn_def": "支持的；給予鼓勵的",
    "en_def": "giving help and encouragement",
    "sentence": "A: How did you feel when you had to give your first big presentation to the board of directors last month? B: I was nervous at first, but my team was very {{BLANK}}, and they practiced with me for several evenings and gave me helpful advice about my slides and my voice.",
    "cn": "A：上個月你第一次向董事會做大型簡報時感覺如何？ B：我一開始很緊張，但我的團隊非常【支持】我，他們陪我練習了好幾個晚上，並對我的投影片和聲音給了有幫助的建議。"
  },
  {
    "word": "knowledgeable",
    "pos": "adj.",
    "cn_def": "知識淵博的；熟悉的",
    "en_def": "knowing a lot about a subject",
    "sentence": "A: Who should I talk to if I have questions about the new tax rules before I prepare the company's annual report? B: You should ask Mr. Lin in the finance office, because he is very {{BLANK}} about tax laws and always explains the changes in a simple way that everyone can understand.",
    "cn": "A：我在準備公司年度報告之前，若對新的稅務規定有疑問應該找誰？ B：你應該去問財務室的林先生，因為他對稅法非常【熟悉】，而且總是用大家都能理解的簡單方式解釋相關變動。"
  },
  {
    "word": "experienced",
    "pos": "adj.",
    "cn_def": "經驗豐富的",
    "en_def": "having skill and knowledge because you have done something many times",
    "sentence": "A: Are you worried about the new restaurant opening next week, since most of the staff have never worked together before? B: Not really, because we hired an {{BLANK}} chef who has managed busy hotel kitchens for fifteen years, and he will train the cooks during the first few weeks.",
    "cn": "A：新餐廳下週開幕，大部分員工以前從沒一起工作過，你會擔心嗎？ B：不太會，因為我們聘請了一位【經驗豐富的】主廚，他管理忙碌的飯店廚房已經十五年，頭幾週他會訓練廚師們。"
  },
  {
    "word": "dedicated",
    "pos": "adj.",
    "cn_def": "盡心盡力的；專注的",
    "en_def": "working hard at something because you care about it a lot",
    "sentence": "A: Why did the company give Ms. Chen the employee of the year award at the party last night? B: She is extremely {{BLANK}} to her customers, and she often stays late to solve their problems, so many clients wrote letters to the manager to thank her for her excellent service.",
    "cn": "A：公司昨晚在派對上為什麼頒給陳小姐年度最佳員工獎？ B：她對客戶極為【盡心盡力】，常常留下來加班解決他們的問題，所以很多客戶寫信給經理感謝她的優質服務。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的",
    "en_def": "good at thinking of new and original ideas",
    "sentence": "A: How did the design team come up with such an interesting advertisement for the new coffee shop downtown? B: Our new designer is very {{BLANK}}, and she suggested using real customers' stories and colorful drawings, which made the posters more attractive than the plain photos we used before.",
    "cn": "A：設計團隊是怎麼為市區新咖啡店想出這麼有趣的廣告的？ B：我們的新設計師非常【有創意】，她建議使用真實顧客的故事和色彩繽紛的插畫，讓海報比我們以前用的單調照片更吸引人。"
  },
  {
    "word": "motivating",
    "pos": "adj.",
    "cn_def": "激勵人心的",
    "en_def": "making people want to work hard or do something",
    "sentence": "A: What did you think of the speech that the new sales director gave at the meeting on Monday morning? B: I found it very {{BLANK}}, because she shared stories about how she reached her goals after many failures, and now the whole team wants to try harder this quarter.",
    "cn": "A：你覺得新業務總監星期一早上在會議上的演講怎麼樣？ B：我覺得非常【激勵人心】，因為她分享了自己在多次失敗後如何達成目標的故事，現在整個團隊都想在這一季更加努力。"
  },
  {
    "word": "inspiring",
    "pos": "adj.",
    "cn_def": "鼓舞人心的；啟發人心的",
    "en_def": "making you feel excited and wanting to do something good",
    "sentence": "A: Did you enjoy the documentary about the young businesswoman that the training department showed us yesterday afternoon? B: Yes, it was really {{BLANK}}, because she started a successful company with very little money, and it made me think seriously about starting my own small business someday.",
    "cn": "A：你喜歡訓練部門昨天下午放給我們看的那部關於年輕女企業家的紀錄片嗎？ B：喜歡，真的很【鼓舞人心】，因為她用很少的錢創辦了一家成功的公司，讓我認真考慮有一天要創立自己的小生意。"
  },
  {
    "word": "responsible",
    "pos": "adj.",
    "cn_def": "負責的",
    "en_def": "having the job of taking care of something or someone",
    "sentence": "A: Who should I contact if the projector in the training room stops working during my presentation tomorrow? B: Please call Tom from the technical support team, because he is {{BLANK}} for all the equipment on this floor, and he can usually come and fix problems within ten minutes.",
    "cn": "A：如果明天我簡報時訓練室的投影機故障，我應該聯絡誰？ B：請打電話給技術支援團隊的湯姆，因為這層樓所有的設備都由他【負責】，他通常能在十分鐘內過來處理問題。"
  },
  {
    "word": "communicative",
    "pos": "adj.",
    "cn_def": "善於溝通的；健談的",
    "en_def": "willing and able to talk and share information with others",
    "sentence": "A: Why do you think the new project manager has become so popular with both the clients and the staff? B: She is very {{BLANK}}, and she sends everyone a clear update every Friday, so nobody feels confused about deadlines and clients always know what is happening with their orders.",
    "cn": "A：你認為新專案經理為什麼這麼受客戶和員工歡迎？ B：她非常【善於溝通】，每週五都會發給大家清楚的進度更新，所以沒有人對期限感到困惑，客戶也總是知道他們訂單的狀況。"
  },
  {
    "word": "organized",
    "pos": "adj.",
    "cn_def": "有條理的",
    "en_def": "planning things carefully and keeping them in order",
    "sentence": "A: How does your assistant manage to remember all of the director's meetings, trips and phone calls every week? B: She is extremely {{BLANK}}, and she keeps a detailed online calendar and a list of tasks for each day, so nothing important is ever forgotten or done late.",
    "cn": "A：你的助理是怎麼記得總監每週所有的會議、出差和電話的？ B：她非常【有條理】，她有一份詳細的線上行事曆和每天的待辦清單，所以重要的事從來不會被忘記或延誤。"
  },
  {
    "word": "discipline",
    "pos": "n.",
    "cn_def": "紀律；自律",
    "en_def": "the ability to control your behavior and follow rules",
    "sentence": "A: How did you manage to finish your online business degree while working full-time at the bank for three years? B: It took a lot of {{BLANK}}, because I had to study for two hours every night after work and on weekends instead of going out with my friends.",
    "cn": "A：你是怎麼在銀行全職工作的三年間完成線上商學學位的？ B：這需要很大的【自律】，因為我每天下班後和週末都得讀書兩小時，而不是跟朋友出去玩。"
  },
  {
    "word": "authority",
    "pos": "n.",
    "cn_def": "權力；職權",
    "en_def": "the power to give orders or make decisions",
    "sentence": "A: Can the store supervisor give a customer a full refund if the product was damaged during delivery? B: Yes, she has the {{BLANK}} to approve refunds of up to five thousand dollars, but for larger amounts she must ask the regional manager to sign the form first.",
    "cn": "A：如果商品在運送中損壞，店長可以給顧客全額退款嗎？ B：可以，她有【權限】核准最高五千元的退款，但金額更大的話，她必須先請區域經理簽署表格。"
  },
  {
    "word": "guidance",
    "pos": "n.",
    "cn_def": "指導；輔導",
    "en_def": "help and advice about how to do something",
    "sentence": "A: Were you nervous about writing your first contract when you joined the law firm last spring? B: A little, but my supervisor gave me excellent {{BLANK}}, and she checked each part of the document with me and explained the mistakes that new lawyers often make.",
    "cn": "A：你去年春天加入律師事務所時，第一次撰寫合約會緊張嗎？ B：有一點，但我的主管給了我很好的【指導】，她和我一起檢查文件的每個部分，並解釋新進律師常犯的錯誤。"
  },
  {
    "word": "assessment",
    "pos": "n.",
    "cn_def": "評估；考核",
    "en_def": "the act of judging or measuring the quality or ability of someone or something",
    "sentence": "A: When will the new employees find out if they have passed their three-month training period at the hotel? B: The manager will complete a detailed {{BLANK}} of each worker next Friday, which includes their customer reviews, attendance and language skills, and then she will meet them one by one.",
    "cn": "A：新員工什麼時候會知道自己是否通過飯店三個月的訓練期？ B：經理下週五會完成每位員工的詳細【評估】，內容包含顧客評價、出勤狀況和語言能力，然後她會一一和他們面談。"
  },
  {
    "word": "feedback",
    "pos": "n.",
    "cn_def": "回饋意見",
    "en_def": "comments about how well someone has done something",
    "sentence": "A: How did you improve your sales presentations so much after the disappointing meeting with the clients in March? B: I asked my manager and several colleagues for honest {{BLANK}}, and they told me to speak more slowly and use fewer numbers, which made my talks much easier to follow.",
    "cn": "A：你在三月和客戶那次令人失望的會議之後，是怎麼讓銷售簡報進步這麼多的？ B：我請經理和幾位同事給我誠實的【回饋意見】，他們要我講慢一點、少用數字，這讓我的簡報更容易理解。"
  },
  {
    "word": "commitment",
    "pos": "n.",
    "cn_def": "承諾；投入",
    "en_def": "a promise or strong decision to do something",
    "sentence": "A: Why is the company spending so much money on training programs and English classes for the staff this year? B: The president has made a strong {{BLANK}} to helping employees grow, because she believes that well-trained workers will stay longer and serve our international customers better.",
    "cn": "A：公司今年為什麼花這麼多錢在員工的訓練課程和英文課上？ B：總裁做出了幫助員工成長的堅定【承諾】，因為她相信訓練有素的員工會待得更久，也能為我們的國際客戶提供更好的服務。"
  },
  {
    "word": "passion",
    "pos": "n.",
    "cn_def": "熱情；熱愛",
    "en_def": "a very strong feeling of liking something",
    "sentence": "A: Why did you decide to leave your banking job and open a small bakery near the train station? B: I have always had a {{BLANK}} for baking bread and cakes, and after working with numbers for ten years, I wanted a job that would make me happy every morning.",
    "cn": "A：你為什麼決定辭去銀行工作，在火車站附近開一間小烘焙坊？ B：我一直對烤麵包和蛋糕有【熱情】，而且在和數字打交道十年後，我想要一份每天早上都讓我快樂的工作。"
  }
];

const MCQS = [
  {
    "q": "The training center is looking for an experienced _____ to design English courses for hotel staff. Applicants should have at least five years of classroom experience.",
    "options": [
      "educator",
      "captain",
      "patient",
      "passion"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our yoga _____ will lead a free class in the staff lounge every Wednesday at noon. Please bring comfortable clothes and a towel.",
    "options": [
      "assessment",
      "instructor",
      "authority",
      "commitment"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Each new employee is paired with a senior _____ during the first year. This person offers career advice and answers practical questions.",
    "options": [
      "discipline",
      "feedback",
      "mentor",
      "passion"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Mrs. Huang hired a private _____ to help her daughter prepare for the English exam. The lessons take place at their home twice a week.",
    "options": [
      "authority",
      "guidance",
      "commitment",
      "tutor"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "A visiting _____ from Kyoto University will give a lecture on robotics this Friday. Seats in the main hall are limited.",
    "options": [
      "patient",
      "professor",
      "discipline",
      "feedback"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Mr. Lee works as a part-time _____ at the local college, where he teaches marketing. He also runs a small consulting firm downtown.",
    "options": [
      "lecturer",
      "assessment",
      "passion",
      "authority"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The company tennis team has hired a new _____ to prepare for the regional tournament. Training sessions will begin next Monday after work.",
    "options": [
      "guidance",
      "commitment",
      "feedback",
      "coach"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Visitors to the factory must stay with the tour _____ at all times. Photography is not allowed inside the production area.",
    "options": [
      "assessment",
      "discipline",
      "guide",
      "authority"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "An outside _____ was invited to lead the workshop so that every team could share ideas freely. The session lasted three hours.",
    "options": [
      "facilitator",
      "commitment",
      "passion",
      "guidance"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Ms. Tsai is considered a positive _____ for young women in the technology industry. She often speaks at schools about her career.",
    "options": [
      "feedback",
      "discipline",
      "role model",
      "authority"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "As team _____, Daniel is responsible for setting weekly goals for the sales staff. He also reports progress to the director every Friday.",
    "options": [
      "assessment",
      "leader",
      "guidance",
      "passion"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Customer service agents must remain _____ when callers are upset. Speaking calmly usually helps solve the problem more quickly.",
    "options": [
      "creative",
      "organized",
      "inspiring",
      "patient"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The hotel receptionist was very _____ to the elderly guests and carried their bags upstairs. They later praised her in an online review.",
    "options": [
      "strict",
      "organized",
      "kind",
      "motivating"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The laboratory has _____ rules about wearing safety glasses at all times. Anyone who breaks them will lose access to the room.",
    "options": [
      "strict",
      "creative",
      "communicative",
      "inspiring"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Every candidate will receive a _____ chance to present their proposal to the committee. Each speaker will have exactly ten minutes.",
    "options": [
      "creative",
      "motivating",
      "knowledgeable",
      "fair"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Ms. Wu thanked her manager for being so _____ during her difficult first year. His encouragement helped her stay with the company.",
    "options": [
      "strict",
      "supportive",
      "organized",
      "communicative"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The museum hires guides who are _____ about local history. They must also be able to answer questions in English and Japanese.",
    "options": [
      "patient",
      "strict",
      "kind",
      "knowledgeable"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The firm is looking for a highly _____ accountant with at least ten years in the industry. Knowledge of international tax law is preferred.",
    "options": [
      "inspiring",
      "motivating",
      "experienced",
      "kind"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Mr. Chou has been _____ to the charity for over twenty years. He spends most weekends organizing food donations for local families.",
    "options": [
      "dedicated",
      "creative",
      "strict",
      "communicative"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The marketing team needs a _____ solution to attract younger customers. The director wants fresh ideas by the end of the month.",
    "options": [
      "patient",
      "creative",
      "strict",
      "responsible"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The manager gave a short but _____ talk before the busy holiday season. Afterward, the staff felt ready to work harder.",
    "options": [
      "motivating",
      "strict",
      "organized",
      "knowledgeable"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The founder shared an _____ story about building her company from nothing. Many audience members said it changed the way they think about failure.",
    "options": [
      "strict",
      "patient",
      "organized",
      "inspiring"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Ms. Kao is _____ for training all new cashiers at the store. She also prepares the weekly work schedule.",
    "options": [
      "creative",
      "responsible",
      "inspiring",
      "kind"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Mr. Ho keeps his files well _____ so that he can find any contract in seconds. His desk is always neat and clean.",
    "options": [
      "patient",
      "inspiring",
      "organized",
      "kind"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Working from home requires a great deal of _____. Employees must manage their own time without a supervisor nearby.",
    "options": [
      "guidance",
      "discipline",
      "assessment",
      "feedback"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Only the branch manager has the _____ to approve overtime pay. Requests should be sent to her by Thursday afternoon.",
    "options": [
      "authority",
      "passion",
      "feedback",
      "discipline"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The new interns will work under the _____ of a senior engineer. They will receive training in safety procedures during the first week.",
    "options": [
      "authority",
      "passion",
      "guidance",
      "discipline"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "All staff members will receive a performance _____ at the end of the year. The results will be used to decide salary increases.",
    "options": [
      "passion",
      "commitment",
      "discipline",
      "assessment"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Please give us your _____ on the new menu by filling out the short survey. Your comments will help us improve our service.",
    "options": [
      "feedback",
      "authority",
      "discipline",
      "commitment"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The company has made a long-term _____ to reducing plastic waste. All offices will stop using disposable cups next month.",
    "options": [
      "assessment",
      "authority",
      "guidance",
      "commitment"
    ],
    "answer": 3,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "educator": {
    "pos": "n.",
    "en_def": "a person whose job is to teach or train others",
    "cn_def": "教育工作者"
  },
  "instructor": {
    "pos": "n.",
    "en_def": "a person who teaches a practical skill or activity",
    "cn_def": "講師；教練"
  },
  "mentor": {
    "pos": "n.",
    "en_def": "an experienced person who gives advice and help to a less experienced person",
    "cn_def": "導師；指導者"
  },
  "tutor": {
    "pos": "n.",
    "en_def": "a private teacher who teaches one student or a small group",
    "cn_def": "家教；個別指導老師"
  },
  "professor": {
    "pos": "n.",
    "en_def": "a teacher of the highest rank at a university",
    "cn_def": "教授"
  },
  "lecturer": {
    "pos": "n.",
    "en_def": "a person who teaches and gives talks at a college or university",
    "cn_def": "（大學）講師"
  },
  "coach": {
    "pos": "n.",
    "en_def": "a person who trains a sports team or helps someone improve a skill",
    "cn_def": "教練"
  },
  "guide": {
    "pos": "n.",
    "en_def": "a person who shows visitors around a place and gives information",
    "cn_def": "導覽員；嚮導"
  },
  "facilitator": {
    "pos": "n.",
    "en_def": "a person who helps a group discuss or work together more easily",
    "cn_def": "引導者；協調人"
  },
  "role model": {
    "pos": "n.phr.",
    "en_def": "a person whose behavior others admire and try to copy",
    "cn_def": "榜樣；模範"
  },
  "leader": {
    "pos": "n.",
    "en_def": "a person who is in charge of a group and directs it",
    "cn_def": "領導者；隊長"
  },
  "professional": {
    "pos": "n.",
    "en_def": "a person who has special training and skill in a job",
    "cn_def": "專業人士"
  },
  "patient": {
    "pos": "adj.",
    "en_def": "able to wait calmly or deal with problems without getting angry",
    "cn_def": "有耐心的"
  },
  "kind": {
    "pos": "adj.",
    "en_def": "friendly, helpful and caring toward other people",
    "cn_def": "親切的；仁慈的"
  },
  "strict": {
    "pos": "adj.",
    "en_def": "demanding that rules are obeyed",
    "cn_def": "嚴格的"
  },
  "fair": {
    "pos": "adj.",
    "en_def": "treating people equally and in a right way",
    "cn_def": "公平的"
  },
  "supportive": {
    "pos": "adj.",
    "en_def": "giving help and encouragement",
    "cn_def": "支持的；給予鼓勵的"
  },
  "knowledgeable": {
    "pos": "adj.",
    "en_def": "knowing a lot about a subject",
    "cn_def": "知識淵博的；熟悉的"
  },
  "experienced": {
    "pos": "adj.",
    "en_def": "having skill and knowledge because you have done something many times",
    "cn_def": "經驗豐富的"
  },
  "dedicated": {
    "pos": "adj.",
    "en_def": "working hard at something because you care about it a lot",
    "cn_def": "盡心盡力的；專注的"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "good at thinking of new and original ideas",
    "cn_def": "有創意的"
  },
  "motivating": {
    "pos": "adj.",
    "en_def": "making people want to work hard or do something",
    "cn_def": "激勵人心的"
  },
  "inspiring": {
    "pos": "adj.",
    "en_def": "making you feel excited and wanting to do something good",
    "cn_def": "鼓舞人心的；啟發人心的"
  },
  "responsible": {
    "pos": "adj.",
    "en_def": "having the job of taking care of something or someone",
    "cn_def": "負責的"
  },
  "communicative": {
    "pos": "adj.",
    "en_def": "willing and able to talk and share information with others",
    "cn_def": "善於溝通的；健談的"
  },
  "organized": {
    "pos": "adj.",
    "en_def": "planning things carefully and keeping them in order",
    "cn_def": "有條理的"
  },
  "discipline": {
    "pos": "n.",
    "en_def": "the ability to control your behavior and follow rules",
    "cn_def": "紀律；自律"
  },
  "authority": {
    "pos": "n.",
    "en_def": "the power to give orders or make decisions",
    "cn_def": "權力；職權"
  },
  "guidance": {
    "pos": "n.",
    "en_def": "help and advice about how to do something",
    "cn_def": "指導；輔導"
  },
  "assessment": {
    "pos": "n.",
    "en_def": "the act of judging or measuring the quality or ability of someone or something",
    "cn_def": "評估；考核"
  },
  "feedback": {
    "pos": "n.",
    "en_def": "comments about how well someone has done something",
    "cn_def": "回饋意見"
  },
  "commitment": {
    "pos": "n.",
    "en_def": "a promise or strong decision to do something",
    "cn_def": "承諾；投入"
  },
  "passion": {
    "pos": "n.",
    "en_def": "a very strong feeling of liking something",
    "cn_def": "熱情；熱愛"
  }
};

const EXTRA_GLOSSES = {};
