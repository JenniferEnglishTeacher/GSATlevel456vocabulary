// Topic 254 Quiz Data: Natural Talent 天賦
// Source word list: https://www.examword.com/group-topic/natural-talent — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T254 - Natural Talent 天賦",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "gift",
    "pos": "n.",
    "cn_def": "天賦；天分",
    "en_def": "a natural ability to do something well",
    "sentence": "A: Why did the marketing director ask Linda to lead the client presentation next week instead of the senior manager? B: Linda has a real {{BLANK}} for explaining complicated ideas in simple words, and the clients always feel relaxed and interested when she speaks during meetings.",
    "cn": "A：為什麼行銷總監要琳達主導下週的客戶簡報，而不是資深經理？ B：琳達在用簡單的話解釋複雜概念方面有真正的【天賦】，而且她在會議中發言時，客戶總是感到輕鬆又感興趣。"
  },
  {
    "word": "ability",
    "pos": "n.",
    "cn_def": "能力",
    "en_def": "the power or skill to do something",
    "sentence": "A: What made you choose Kevin for the new customer service position when so many people with more experience applied for the job? B: During the interview, he showed an amazing {{BLANK}} to stay calm with angry callers, and he solved every problem in our role-play test quickly and politely.",
    "cn": "A：這麼多更有經驗的人應徵這份工作，你為什麼選凱文擔任新的客服職位？ B：面試時，他展現出面對憤怒來電者仍保持冷靜的驚人【能力】，而且他在我們的角色扮演測驗中迅速又有禮貌地解決了每個問題。"
  },
  {
    "word": "skill",
    "pos": "n.",
    "cn_def": "技能；技巧",
    "en_def": "an ability to do something well, usually learned through training",
    "sentence": "A: Should we send the new assistants to the writing workshop downtown next month, or is it too expensive for our small department budget? B: I think we should, because writing clear emails is an important {{BLANK}} in this office, and many customers have complained about confusing messages from our team.",
    "cn": "A：我們該讓新助理下個月去市中心參加寫作工作坊嗎？還是那對我們部門的小預算來說太貴了？ B：我認為應該去，因為寫清楚的電子郵件在這間辦公室是很重要的【技能】，而且很多客戶都抱怨過我們團隊寄出令人困惑的訊息。"
  },
  {
    "word": "strength",
    "pos": "n.",
    "cn_def": "長處；優點",
    "en_def": "a good quality or ability that someone has",
    "sentence": "A: When the interviewer asked about my best qualities yesterday afternoon, I wasn't sure what to say, so I just talked about being hardworking. B: Next time, mention that organizing big events is your greatest {{BLANK}}, because you planned our company's annual dinner for three hundred guests without any problems.",
    "cn": "A：昨天下午面試官問我最好的特質時，我不確定該說什麼，所以只說了自己很努力。 B：下次要提到籌辦大型活動是你最大的【長處】，因為你毫無問題地規劃了我們公司三百位賓客的年度晚宴。"
  },
  {
    "word": "potential",
    "pos": "n.",
    "cn_def": "潛力",
    "en_def": "qualities that may develop and lead to future success",
    "sentence": "A: Why is the manager spending so much time training the young intern when we are already so busy with the year-end reports? B: She believes the intern has great {{BLANK}} as a future team leader, so she wants to teach him how our department works before he finishes his program in June.",
    "cn": "A：我們已經忙著年終報告了，為什麼經理還花這麼多時間訓練那位年輕的實習生？ B：她認為那位實習生很有成為未來團隊領導者的【潛力】，所以想在他六月結束實習計畫前，教他我們部門的運作方式。"
  },
  {
    "word": "aptitude",
    "pos": "n.",
    "cn_def": "天資；才能",
    "en_def": "a natural ability to learn or do something",
    "sentence": "A: Why did the bank move Sarah from the front desk to the data analysis team after only six months of working here? B: Her supervisor noticed that she had a strong {{BLANK}} for numbers, since she could find mistakes in long financial reports much faster than anyone else in the branch.",
    "cn": "A：為什麼莎拉在這裡工作才六個月，銀行就把她從櫃檯調到資料分析團隊？ B：她的主管注意到她對數字有很強的【天資】，因為她找出冗長財務報告中錯誤的速度比分行裡任何人都快。"
  },
  {
    "word": "genius",
    "pos": "n.",
    "cn_def": "天才",
    "en_def": "a very clever or talented person",
    "sentence": "A: Have you heard about the young engineer who designed the new energy-saving system for our factory in only two weeks? B: Yes, everyone says she is a {{BLANK}}, because her design cut our electricity costs by thirty percent, and other companies have already asked to buy her idea.",
    "cn": "A：你聽說那位只花兩週就為我們工廠設計出新節能系統的年輕工程師了嗎？ B：聽說了，大家都說她是個【天才】，因為她的設計讓我們的電費降低了百分之三十，而且其他公司已經來詢問要買她的點子。"
  },
  {
    "word": "prodigy",
    "pos": "n.",
    "cn_def": "神童；奇才",
    "en_def": "a young person with unusually great ability",
    "sentence": "A: Who is the teenage boy playing the piano in the hotel lobby tonight, and why are so many guests stopping to listen to him? B: He is a famous local {{BLANK}} who started giving concerts at age eight, and the hotel manager invited him to play for the guests during the holiday season.",
    "cn": "A：今晚在飯店大廳彈鋼琴的那個青少年是誰？為什麼這麼多房客停下來聽他彈奏？ B：他是當地有名的【神童】，八歲就開始舉辦音樂會，飯店經理邀請他在假期期間為房客演奏。"
  },
  {
    "word": "instinct",
    "pos": "n.",
    "cn_def": "直覺；本能",
    "en_def": "a natural feeling that makes you act or know something without thinking",
    "sentence": "A: How did the sales manager know that the new client was not serious about signing the contract before the meeting even ended? B: She has a good business {{BLANK}} after twenty years in sales, so she could tell from his questions and body language that he was only comparing prices.",
    "cn": "A：會議都還沒結束，業務經理怎麼知道那位新客戶並不是認真要簽約？ B：她在業務界二十年，擁有很好的商業【直覺】，所以能從他的問題和肢體語言看出他只是在比價。"
  },
  {
    "word": "flair",
    "pos": "n.",
    "cn_def": "天賦；才華",
    "en_def": "a natural ability to do something well and in an interesting way",
    "sentence": "A: Who decorated the hotel ballroom for the company's anniversary party last Friday, because all the guests were talking about how beautiful it looked? B: Our receptionist, Mia, did it in her free time, since she has a real {{BLANK}} for design, and she used only cheap flowers and lights from a local market.",
    "cn": "A：上週五公司週年派對的飯店宴會廳是誰佈置的？所有賓客都在談論它有多美。 B：是我們的接待員蜜雅利用空閒時間佈置的，因為她在設計方面很有【天賦】，而且她只用了當地市場買來的便宜花朵和燈飾。"
  },
  {
    "word": "knack",
    "pos": "n.",
    "cn_def": "訣竅；本領",
    "en_def": "a special skill that is often hard to explain or teach",
    "sentence": "A: How does Tom always manage to get the old copy machine working again when everyone else in the office just gives up? B: He seems to have a {{BLANK}} for fixing machines, and he says he learned many useful tricks while working in his father's repair shop as a teenager.",
    "cn": "A：為什麼辦公室其他人都放棄時，湯姆總是能讓那台舊影印機重新運作？ B：他似乎有修理機器的【本領】，他說他青少年時期在父親的修理店工作時學到了很多實用的訣竅。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的",
    "en_def": "good at thinking of new and original ideas",
    "sentence": "A: Our sales of winter jackets have been falling for three months, so what should we do before the busy holiday season begins next month? B: We need a more {{BLANK}} advertising campaign, so let's ask the design team to make some funny short videos that customers will want to share online with their friends.",
    "cn": "A：我們冬季外套的銷量已經下滑三個月了，在下個月忙碌的假期旺季開始前該怎麼辦？ B：我們需要一個更有【創意】的廣告活動，所以請設計團隊製作一些顧客會想在網路上分享給朋友的有趣短片吧。"
  },
  {
    "word": "talented",
    "pos": "adj.",
    "cn_def": "有才華的",
    "en_def": "having a natural ability to do something well",
    "sentence": "A: Are you sure we can finish the new company website before the product launch at the end of the month? B: Don't worry, because we hired a very {{BLANK}} web designer from Taichung last week, and she has already finished the home page and two product pages in just four days.",
    "cn": "A：你確定我們能在月底產品發表會前完成公司新網站嗎？ B：別擔心，我們上週從台中聘請了一位非常【有才華的】網頁設計師，她只花四天就已經完成了首頁和兩個產品頁面。"
  },
  {
    "word": "gifted",
    "pos": "adj.",
    "cn_def": "有天賦的；資優的",
    "en_def": "having a natural ability or very high intelligence",
    "sentence": "A: Why did the city library start offering free weekend classes for children who are very good at math and science? B: Many parents of {{BLANK}} students asked for more learning chances outside school, so the library worked with a local university to create classes taught by real scientists.",
    "cn": "A：為什麼市立圖書館開始為非常擅長數學和科學的孩子提供免費週末課程？ B：許多【資優】學生的家長要求在校外有更多學習機會，所以圖書館與當地一所大學合作，開設由真正科學家授課的課程。"
  },
  {
    "word": "skilled",
    "pos": "adj.",
    "cn_def": "熟練的；有技術的",
    "en_def": "having the training and experience to do a job well",
    "sentence": "A: Why has the new factory in the south been so slow to start production, even though all the machines arrived last month? B: The company cannot find enough {{BLANK}} workers who know how to operate the new equipment, so it is now sending some staff overseas for special training.",
    "cn": "A：南部的新工廠為什麼這麼慢才開始生產？所有機器上個月就到了。 B：公司找不到足夠懂得操作新設備的【熟練】工人，所以現在正派一些員工到海外接受特別訓練。"
  },
  {
    "word": "brilliant",
    "pos": "adj.",
    "cn_def": "傑出的；絕妙的",
    "en_def": "extremely clever or impressive",
    "sentence": "A: What did the board members think about the plan to open small coffee shops inside our bookstores across the country? B: They said it was a {{BLANK}} idea, because customers will stay longer and buy more books, and the first test shop in Kaohsiung has already doubled its sales.",
    "cn": "A：董事會成員對於在全國書店內開設小型咖啡店的計畫有什麼看法？ B：他們說那是個【絕妙的】點子，因為顧客會待得更久、買更多書，而高雄的第一家試營運店銷售額已經翻倍了。"
  },
  {
    "word": "innovative",
    "pos": "adj.",
    "cn_def": "創新的",
    "en_def": "using new methods or ideas",
    "sentence": "A: Why did our company win the national business award this year when there were so many large competitors in the same industry? B: The judges were impressed by our {{BLANK}} delivery system, which uses a mobile app to let customers choose the exact time and place to receive their packages.",
    "cn": "A：同產業中有這麼多大型競爭對手，為什麼我們公司今年能贏得全國企業獎？ B：評審對我們【創新的】配送系統印象深刻，這個系統用手機應用程式讓顧客選擇收包裹的確切時間和地點。"
  },
  {
    "word": "capable",
    "pos": "adj.",
    "cn_def": "有能力的；能幹的",
    "en_def": "having the ability to do something well",
    "sentence": "A: Are you worried about leaving the office for two weeks while the new assistant handles all the customer orders by herself? B: Not really, because she is very {{BLANK}} and organized, and she already managed the busy holiday orders last month without making a single mistake or missing any deadlines.",
    "cn": "A：你要離開辦公室兩週，讓新助理獨自處理所有客戶訂單，你擔心嗎？ B：不太擔心，因為她非常【能幹】又有條理，上個月她已經處理過忙碌的節日訂單，沒有犯任何錯，也沒錯過任何期限。"
  },
  {
    "word": "naturally",
    "pos": "adv.",
    "cn_def": "天生地；自然地",
    "en_def": "in a way that comes from your character, without training or effort",
    "sentence": "A: How did the new salesperson become so popular with customers in such a short time when she has no experience in retail? B: She is {{BLANK}} friendly and patient with everyone, so customers feel comfortable asking her questions, and many of them come back to the store just to talk with her.",
    "cn": "A：新來的銷售員沒有零售經驗，怎麼能在這麼短的時間內這麼受顧客歡迎？ B：她【天生】就對每個人友善又有耐心，所以顧客問她問題時感到很自在，很多人甚至只是為了跟她聊天而再回到店裡。"
  },
  {
    "word": "effortlessly",
    "pos": "adv.",
    "cn_def": "毫不費力地",
    "en_def": "easily, without seeming to try hard",
    "sentence": "A: Did you watch the new manager give her speech to the foreign investors at the conference in Singapore yesterday morning? B: Yes, she switched {{BLANK}} between English, Japanese, and Chinese while answering their questions, and the investors seemed very impressed by her language ability and her knowledge of the market.",
    "cn": "A：你有看到新經理昨天早上在新加坡研討會上對外國投資人演講嗎？ B：有，她在回答問題時【毫不費力地】在英文、日文和中文之間切換，投資人似乎對她的語言能力和市場知識印象非常深刻。"
  },
  {
    "word": "excel",
    "pos": "v.",
    "cn_def": "擅長；表現優異",
    "en_def": "to be extremely good at something",
    "sentence": "A: Why do you think Daniel was chosen to manage the new branch office in Tokyo instead of someone with more years at the company? B: He has always been able to {{BLANK}} at building good relationships with clients, and the managers believe this will help us win many new customers in Japan.",
    "cn": "A：你覺得為什麼丹尼爾被選去管理東京的新分公司，而不是在公司待更久的人？ B：他一直都很【擅長】與客戶建立良好關係，經理們相信這會幫助我們在日本贏得許多新客戶。"
  },
  {
    "word": "master",
    "pos": "v.",
    "cn_def": "精通；掌握",
    "en_def": "to learn something completely and well",
    "sentence": "A: How long will it take the new staff to learn our accounting software, since the busy tax season starts in only six weeks? B: Most people {{BLANK}} the basic functions in about a week, but I will hold extra training sessions every afternoon so everyone feels confident before the busy period begins.",
    "cn": "A：新員工學會我們的會計軟體要多久？忙碌的報稅季只剩六週就要開始了。 B：大多數人大約一週就能【掌握】基本功能，但我每天下午會加開訓練課程，讓大家在忙碌期開始前都有信心。"
  },
  {
    "word": "develop",
    "pos": "v.",
    "cn_def": "發展；培養",
    "en_def": "to grow or improve a skill or ability",
    "sentence": "A: What is the main purpose of the leadership program that the company is offering to junior staff this year? B: It helps young employees {{BLANK}} their management skills through workshops and real projects, so they will be ready to lead their own teams when senior managers retire in the next few years.",
    "cn": "A：公司今年為基層員工開辦的領導力課程主要目的是什麼？ B：它透過工作坊和實際專案幫助年輕員工【培養】管理技能，讓他們在未來幾年資深經理退休時，準備好帶領自己的團隊。"
  },
  {
    "word": "cultivate",
    "pos": "v.",
    "cn_def": "培養；建立",
    "en_def": "to work to develop a quality, skill, or relationship",
    "sentence": "A: Why does the sales director take our most important clients to dinner every month, even when there is no new contract to discuss? B: She says it is important to {{BLANK}} strong relationships with clients over time, because loyal customers are more likely to recommend us to other businesses.",
    "cn": "A：為什麼業務總監每個月都帶我們最重要的客戶去吃晚餐，即使沒有新合約要討論？ B：她說長期與客戶【建立】穩固的關係很重要，因為忠實的顧客比較可能把我們推薦給其他企業。"
  },
  {
    "word": "inherit",
    "pos": "v.",
    "cn_def": "遺傳；繼承",
    "en_def": "to get a quality or ability from your parents",
    "sentence": "A: Your daughter played the violin beautifully at the company's family day yesterday, so did she take lessons for many years? B: Only for two years, but she seems to {{BLANK}} her musical ability from my wife, who played in the city orchestra before she started working at the bank.",
    "cn": "A：你女兒昨天在公司家庭日小提琴拉得很好聽，她學了很多年嗎？ B：只學了兩年，但她似乎【遺傳】了我太太的音樂才能，我太太在到銀行工作之前曾在市立管弦樂團演奏。"
  },
  {
    "word": "perform",
    "pos": "v.",
    "cn_def": "表演；執行",
    "en_def": "to do something such as a job, task, or show in front of people",
    "sentence": "A: Is the new receptionist nervous about singing at the company's year-end party next Friday in front of all the staff? B: Not at all, because she used to {{BLANK}} with a band at weekend weddings while she was at university, so singing in front of a large crowd feels normal to her.",
    "cn": "A：新來的接待員要在下週五的公司尾牙上，在所有員工面前唱歌，她會緊張嗎？ B：一點也不，因為她大學時曾在週末婚禮上跟樂團一起【表演】，所以在一大群人面前唱歌對她來說很平常。"
  },
  {
    "word": "confidence",
    "pos": "n.",
    "cn_def": "自信；信心",
    "en_def": "the feeling that you can do things well",
    "sentence": "A: How did the new sales assistant improve so quickly after making so many mistakes during her first few weeks here? B: Her manager praised her small successes every day, which gave her more {{BLANK}}, and now she talks to customers easily and even helps train the newer staff members.",
    "cn": "A：新的銷售助理剛來前幾週犯了那麼多錯，後來怎麼進步得這麼快？ B：她的經理每天稱讚她的小成就，讓她更有【自信】，現在她能輕鬆地和顧客交談，甚至還幫忙訓練更新進的員工。"
  },
  {
    "word": "passion",
    "pos": "n.",
    "cn_def": "熱情；熱愛",
    "en_def": "a very strong interest in or love for something",
    "sentence": "A: Why did Brian leave his well-paid job at the bank to open a small bakery near the train station last spring? B: He has always had a {{BLANK}} for baking bread and cakes, and he decided he wanted to spend his working life doing something that truly makes him happy.",
    "cn": "A：布萊恩為什麼去年春天辭掉銀行的高薪工作，在火車站附近開了一間小麵包店？ B：他一直都對烘焙麵包和蛋糕充滿【熱情】，他決定要把職業生涯花在真正讓他快樂的事情上。"
  },
  {
    "word": "dedication",
    "pos": "n.",
    "cn_def": "投入；奉獻",
    "en_def": "hard work and effort that you give to something",
    "sentence": "A: Why is the hotel giving an award to the housekeeping supervisor at the staff dinner next week? B: She has shown great {{BLANK}} to her work for fifteen years, often staying late to train new staff and making sure every room is perfect before important guests arrive.",
    "cn": "A：為什麼飯店要在下週的員工餐會上頒獎給房務主管？ B：她十五年來對工作展現了極大的【投入】，常常留到很晚訓練新員工，並確保每個房間在重要賓客抵達前都完美無缺。"
  },
  {
    "word": "practice",
    "pos": "n.",
    "cn_def": "練習",
    "en_def": "regular repeated activity to improve a skill",
    "sentence": "A: How did you become such a confident speaker when you used to be so nervous during our team meetings last year? B: It took a lot of {{BLANK}}, since I joined a public speaking club, gave a short talk every week, and asked my colleagues for honest feedback after each presentation.",
    "cn": "A：你去年在團隊會議上還那麼緊張，怎麼變成這麼有自信的演講者？ B：那需要大量的【練習】，因為我參加了一個公眾演說社團，每週做一次簡短演講，並在每次簡報後請同事給我誠實的意見。"
  },
  {
    "word": "inborn",
    "pos": "adj.",
    "cn_def": "天生的；與生俱來的",
    "en_def": "present in a person from birth",
    "sentence": "A: Do you think anyone can learn to be a good leader, or do some people just have the right personality from the start? B: I believe some people have an {{BLANK}} ability to make others feel calm and trusted, but anyone can improve with good training, hard work, and enough experience.",
    "cn": "A：你認為任何人都能學會成為好的領導者嗎？還是有些人一開始就擁有合適的個性？ B：我相信有些人具有讓別人感到安心、受信任的【天生】能力，但任何人透過好的訓練、努力和足夠的經驗都能進步。"
  },
  {
    "word": "innate",
    "pos": "adj.",
    "cn_def": "天生的；固有的",
    "en_def": "natural, existing in someone since birth",
    "sentence": "A: Why does the hiring team give job applicants a puzzle to solve during the second interview for the design department? B: They want to see if the candidates have an {{BLANK}} sense of problem-solving, because our designers often need to find quick solutions when clients change their minds at the last minute.",
    "cn": "A：為什麼招募團隊在設計部門的第二次面試中給應徵者一道謎題？ B：他們想看看應徵者是否有【與生俱來的】解決問題意識，因為當客戶在最後一刻改變主意時，我們的設計師常常需要很快找到解決辦法。"
  },
  {
    "word": "remarkable",
    "pos": "adj.",
    "cn_def": "非凡的；了不起的",
    "en_def": "unusual and surprising in a good way",
    "sentence": "A: Have you seen the sales results for the new branch in Tainan, which only opened in March this year? B: Yes, it is {{BLANK}} that such a small team doubled the sales target in six months, so the head office has asked the branch manager to share her methods with other branches.",
    "cn": "A：你看到今年三月才開幕的台南新分店的銷售成績了嗎？ B：看到了，這麼小的團隊在六個月內就達成兩倍銷售目標，真是【了不起】，所以總公司已經請分店經理向其他分店分享她的方法。"
  },
  {
    "word": "outstanding",
    "pos": "adj.",
    "cn_def": "傑出的；出色的",
    "en_def": "extremely good",
    "sentence": "A: Why did the company give Jenny a bonus and a promotion at the end of the year when she joined only eighteen months ago? B: Her work on the new customer program was {{BLANK}}, because it brought in over two hundred new clients and received excellent reviews from everyone who used it.",
    "cn": "A：珍妮十八個月前才加入公司，為什麼年底就獲得獎金和升遷？ B：她在新客戶計畫上的表現非常【傑出】，因為那個計畫帶來了兩百多位新客戶，而且每位使用過的人都給予極好的評價。"
  },
  {
    "word": "exceptional",
    "pos": "adj.",
    "cn_def": "優秀的；非凡的",
    "en_def": "much better than usual",
    "sentence": "A: Why does the hotel have so many five-star online reviews when its rooms are smaller and older than those of its competitors? B: Guests love the {{BLANK}} service there, since the staff remember everyone's name, offer free local tours, and solve problems quickly, even late at night.",
    "cn": "A：這家飯店的房間比競爭對手小又舊，為什麼網路上有這麼多五星評價？ B：房客很喜歡那裡【優秀的】服務，因為員工記得每個人的名字、提供免費的在地導覽，而且即使在深夜也能很快解決問題。"
  },
  {
    "word": "versatile",
    "pos": "adj.",
    "cn_def": "多才多藝的；多功能的",
    "en_def": "able to do many different things well",
    "sentence": "A: Why does the manager always ask Ken to help whenever another department is short of staff during the busy season? B: He is very {{BLANK}}, since he can handle accounting, customer service, and even simple computer repairs, so he is useful wherever the company needs extra help.",
    "cn": "A：為什麼旺季時只要其他部門人手不足，經理總是請肯去幫忙？ B：他非常【多才多藝】，他能處理會計、客服，甚至簡單的電腦維修，所以公司哪裡需要額外人手，他都派得上用場。"
  },
  {
    "word": "talent show",
    "pos": "n.phr.",
    "cn_def": "才藝表演",
    "en_def": "an event where people show their singing, dancing, or other skills",
    "sentence": "A: What activities have you planned for the company's annual family day at the park next Saturday afternoon? B: We will have games for the children, a big barbecue lunch, and a {{BLANK}} where employees and their kids can sing, dance, or do magic tricks on a small outdoor stage.",
    "cn": "A：下週六下午在公園舉行的公司年度家庭日，你規劃了哪些活動？ B：我們會有兒童遊戲、豐盛的烤肉午餐，還有一場【才藝表演】，讓員工和孩子們在戶外小舞台上唱歌、跳舞或表演魔術。"
  }
];

const MCQS = [
  {
    "q": "Our new receptionist has the _____ to speak four languages. Visitors from many countries feel welcome when they arrive at the front desk.",
    "options": [
      "ability",
      "passion",
      "instinct",
      "dedication"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Negotiation is a key _____ for anyone who works in sales. The company offers a two-day course to help staff improve in this area.",
    "options": [
      "prodigy",
      "dedication",
      "skill",
      "confidence"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Mary's greatest _____ is her ability to stay calm under pressure. That is why she handles all the difficult client calls.",
    "options": [
      "knack",
      "strength",
      "prodigy",
      "practice"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The investors believe the small startup has huge _____ for growth. They plan to put two million dollars into the company next year.",
    "options": [
      "practice",
      "dedication",
      "instinct",
      "potential"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The ten-year-old chess _____ beat three adult champions at the tournament. Several sponsors have already offered to pay for her training.",
    "options": [
      "practice",
      "strength",
      "prodigy",
      "confidence"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Experienced investors often trust their _____ when the market changes quickly. They sometimes make decisions before the full data is available.",
    "options": [
      "instinct",
      "passion",
      "practice",
      "prodigy"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The new chef has a real _____ for presenting food beautifully. Customers often take photos of their dishes before they start eating.",
    "options": [
      "confidence",
      "dedication",
      "strength",
      "flair"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Our office manager has a _____ for finding cheap flights and hotels. She saved the company thousands of dollars on business trips last year.",
    "options": [
      "confidence",
      "knack",
      "practice",
      "strength"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The marketing team needs more _____ ideas for the new advertising campaign. The director wants something that customers will remember for years.",
    "options": [
      "creative",
      "capable",
      "skilled",
      "inborn"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Lisa is very musically _____ and learned to play the guitar without lessons. She now plays at local cafés on weekends.",
    "options": [
      "innate",
      "inborn",
      "innovative",
      "talented"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The factory is looking for _____ workers who can operate the new machines. Applicants must have at least three years of experience.",
    "options": [
      "innate",
      "inborn",
      "skilled",
      "remarkable"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Everyone at the meeting agreed that opening a second store downtown was a _____ idea. Sales there have been strong since the first week.",
    "options": [
      "capable",
      "brilliant",
      "skilled",
      "inborn"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The startup won an award for its _____ approach to recycling plastic. It turns old bottles into strong building materials.",
    "options": [
      "inborn",
      "capable",
      "talented",
      "innovative"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Don't worry about the project while you are away on vacation. Kevin is fully _____ of managing the team on his own.",
    "options": [
      "capable",
      "skilled",
      "talented",
      "versatile"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Public speaking does not come _____ to everyone. Many managers take special courses to feel more relaxed in front of large audiences.",
    "options": [
      "recently",
      "naturally",
      "loudly",
      "carefully"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The experienced pianist played the difficult piece _____, without a single mistake. The audience stood up and clapped for several minutes.",
    "options": [
      "rarely",
      "barely",
      "effortlessly",
      "lately"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Students who _____ in mathematics often find good jobs in finance. Banks are always looking for people who are strong with numbers.",
    "options": [
      "inherit",
      "excel",
      "cultivate",
      "master"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "It usually takes new employees about a month to _____ our booking software. After that, they can handle most customer requests alone.",
    "options": [
      "excel",
      "inherit",
      "perform",
      "master"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The training program helps employees _____ their leadership skills through real projects. Many graduates of the program now manage their own teams.",
    "options": [
      "develop",
      "excel",
      "inherit",
      "perform"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Successful salespeople work hard to _____ long-term relationships with their clients. They call regularly, even when there is nothing new to sell.",
    "options": [
      "excel",
      "inherit",
      "cultivate",
      "master"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Many children _____ their love of music from their parents. Both of my sister's sons began playing the piano at age four.",
    "options": [
      "perform",
      "excel",
      "master",
      "inherit"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The band will _____ live at the hotel's grand opening party on Friday night. Tickets are free for all guests staying at the hotel.",
    "options": [
      "excel",
      "perform",
      "inherit",
      "cultivate"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Regular feedback from managers helps new staff build _____ in their work. They then feel more comfortable making decisions on their own.",
    "options": [
      "confidence",
      "prodigy",
      "flair",
      "instinct"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Our head chef has a deep _____ for traditional Italian cooking. He travels to Italy every summer to learn new recipes.",
    "options": [
      "strength",
      "prodigy",
      "passion",
      "practice"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The nurse received an award for her _____ to patient care over thirty years. She often stayed late to help families in need.",
    "options": [
      "instinct",
      "dedication",
      "prodigy",
      "knack"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Learning a new language takes a lot of _____ and patience. Our staff study English together for thirty minutes every morning.",
    "options": [
      "practice",
      "prodigy",
      "instinct",
      "flair"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The new branch has made _____ progress in its first year. Its sales are already higher than those of our oldest store.",
    "options": [
      "inborn",
      "innate",
      "capable",
      "remarkable"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "Ken is a very _____ employee who can work in sales, accounting, or customer service. The manager moves him wherever extra help is needed.",
    "options": [
      "innate",
      "inborn",
      "versatile",
      "innovative"
    ],
    "answer": 2,
    "vocabIndex": 35
  },
  {
    "q": "The school is holding a _____ next Friday evening. Students will sing, dance, and play instruments on stage for their parents.",
    "options": [
      "prodigy",
      "strength",
      "instinct",
      "talent show"
    ],
    "answer": 3,
    "vocabIndex": 36
  },
  {
    "q": "Some researchers believe that language learning is an _____ human ability. Babies begin to recognize sounds long before they can speak.",
    "options": [
      "innovative",
      "innate",
      "capable",
      "versatile"
    ],
    "answer": 1,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "gift": {
    "pos": "n.",
    "en_def": "a natural ability to do something well",
    "cn_def": "天賦；天分"
  },
  "ability": {
    "pos": "n.",
    "en_def": "the power or skill to do something",
    "cn_def": "能力"
  },
  "skill": {
    "pos": "n.",
    "en_def": "an ability to do something well, usually learned through training",
    "cn_def": "技能；技巧"
  },
  "strength": {
    "pos": "n.",
    "en_def": "a good quality or ability that someone has",
    "cn_def": "長處；優點"
  },
  "potential": {
    "pos": "n.",
    "en_def": "qualities that may develop and lead to future success",
    "cn_def": "潛力"
  },
  "aptitude": {
    "pos": "n.",
    "en_def": "a natural ability to learn or do something",
    "cn_def": "天資；才能"
  },
  "genius": {
    "pos": "n.",
    "en_def": "a very clever or talented person",
    "cn_def": "天才"
  },
  "prodigy": {
    "pos": "n.",
    "en_def": "a young person with unusually great ability",
    "cn_def": "神童；奇才"
  },
  "instinct": {
    "pos": "n.",
    "en_def": "a natural feeling that makes you act or know something without thinking",
    "cn_def": "直覺；本能"
  },
  "flair": {
    "pos": "n.",
    "en_def": "a natural ability to do something well and in an interesting way",
    "cn_def": "天賦；才華"
  },
  "knack": {
    "pos": "n.",
    "en_def": "a special skill that is often hard to explain or teach",
    "cn_def": "訣竅；本領"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "good at thinking of new and original ideas",
    "cn_def": "有創意的"
  },
  "talented": {
    "pos": "adj.",
    "en_def": "having a natural ability to do something well",
    "cn_def": "有才華的"
  },
  "gifted": {
    "pos": "adj.",
    "en_def": "having a natural ability or very high intelligence",
    "cn_def": "有天賦的；資優的"
  },
  "skilled": {
    "pos": "adj.",
    "en_def": "having the training and experience to do a job well",
    "cn_def": "熟練的；有技術的"
  },
  "brilliant": {
    "pos": "adj.",
    "en_def": "extremely clever or impressive",
    "cn_def": "傑出的；絕妙的"
  },
  "innovative": {
    "pos": "adj.",
    "en_def": "using new methods or ideas",
    "cn_def": "創新的"
  },
  "capable": {
    "pos": "adj.",
    "en_def": "having the ability to do something well",
    "cn_def": "有能力的；能幹的"
  },
  "naturally": {
    "pos": "adv.",
    "en_def": "in a way that comes from your character, without training or effort",
    "cn_def": "天生地；自然地"
  },
  "effortlessly": {
    "pos": "adv.",
    "en_def": "easily, without seeming to try hard",
    "cn_def": "毫不費力地"
  },
  "excel": {
    "pos": "v.",
    "en_def": "to be extremely good at something",
    "cn_def": "擅長；表現優異"
  },
  "master": {
    "pos": "v.",
    "en_def": "to learn something completely and well",
    "cn_def": "精通；掌握"
  },
  "develop": {
    "pos": "v.",
    "en_def": "to grow or improve a skill or ability",
    "cn_def": "發展；培養"
  },
  "cultivate": {
    "pos": "v.",
    "en_def": "to work to develop a quality, skill, or relationship",
    "cn_def": "培養；建立"
  },
  "inherit": {
    "pos": "v.",
    "en_def": "to get a quality or ability from your parents",
    "cn_def": "遺傳；繼承"
  },
  "perform": {
    "pos": "v.",
    "en_def": "to do something such as a job, task, or show in front of people",
    "cn_def": "表演；執行"
  },
  "confidence": {
    "pos": "n.",
    "en_def": "the feeling that you can do things well",
    "cn_def": "自信；信心"
  },
  "passion": {
    "pos": "n.",
    "en_def": "a very strong interest in or love for something",
    "cn_def": "熱情；熱愛"
  },
  "dedication": {
    "pos": "n.",
    "en_def": "hard work and effort that you give to something",
    "cn_def": "投入；奉獻"
  },
  "practice": {
    "pos": "n.",
    "en_def": "regular repeated activity to improve a skill",
    "cn_def": "練習"
  },
  "inborn": {
    "pos": "adj.",
    "en_def": "present in a person from birth",
    "cn_def": "天生的；與生俱來的"
  },
  "innate": {
    "pos": "adj.",
    "en_def": "natural, existing in someone since birth",
    "cn_def": "天生的；固有的"
  },
  "remarkable": {
    "pos": "adj.",
    "en_def": "unusual and surprising in a good way",
    "cn_def": "非凡的；了不起的"
  },
  "outstanding": {
    "pos": "adj.",
    "en_def": "extremely good",
    "cn_def": "傑出的；出色的"
  },
  "exceptional": {
    "pos": "adj.",
    "en_def": "much better than usual",
    "cn_def": "優秀的；非凡的"
  },
  "versatile": {
    "pos": "adj.",
    "en_def": "able to do many different things well",
    "cn_def": "多才多藝的；多功能的"
  },
  "talent show": {
    "pos": "n.phr.",
    "en_def": "an event where people show their singing, dancing, or other skills",
    "cn_def": "才藝表演"
  }
};

const EXTRA_GLOSSES = {};
