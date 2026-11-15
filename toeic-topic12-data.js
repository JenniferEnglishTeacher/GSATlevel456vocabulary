// Topic 12 Quiz Data: Ambition 抱負
// Source word list: https://www.examword.com/group-topic/ambition — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T12 - Ambition 抱負",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "desire",
    "pos": "v.",
    "cn_def": "渴望；想要",
    "en_def": "to want something very much",
    "sentence": "A: Why did Mr. Lee leave his well-paid job at the bank last month, even though his manager offered him a promotion and a bigger office? B: He told me he had always wanted to run his own café, and he did not {{BLANK}} a higher position at a company where he felt bored every day.",
    "cn": "A：為什麼李先生上個月離開銀行那份高薪工作，即使他的經理提供他升遷和更大的辦公室？ B：他告訴我他一直想經營自己的咖啡店，而且他並不【渴望】在一家每天都讓他覺得無聊的公司裡得到更高的職位。"
  },
  {
    "word": "determination",
    "pos": "n.",
    "cn_def": "決心；毅力",
    "en_def": "a strong wish to keep trying until you succeed",
    "sentence": "A: How did Sarah finish her MBA while working full-time at the marketing agency and taking care of her two young children? B: She studied late every night after the kids went to bed, and her {{BLANK}} to get a management role helped her pass every exam, even when she felt very tired.",
    "cn": "A：莎拉是怎麼在行銷公司全職工作、還要照顧兩個年幼孩子的同時完成企管碩士學位的？ B：她每天晚上等孩子睡了之後讀書讀到很晚，而她想取得管理職位的【決心】幫助她通過了每一場考試，即使她覺得非常疲累。"
  },
  {
    "word": "improve",
    "pos": "v.",
    "cn_def": "改善；提升",
    "en_def": "to make something better",
    "sentence": "A: Our team leader said the customer survey results were disappointing this quarter, so what is the plan for the next three months? B: We are going to give all the call center staff extra training, because we really need to {{BLANK}} our service quality before the important contract with the hotel chain is renewed.",
    "cn": "A：我們的組長說這一季的顧客調查結果令人失望，那接下來三個月的計畫是什麼？ B：我們要給所有客服中心的員工額外的訓練，因為在和連鎖飯店的重要合約續約之前，我們真的需要【改善】我們的服務品質。"
  },
  {
    "word": "achieve",
    "pos": "v.",
    "cn_def": "達成；實現",
    "en_def": "to succeed in reaching a goal",
    "sentence": "A: Do you think the sales department can reach its target of one million dollars by the end of the year, even with the new competitor in town? B: I think we can {{BLANK}} it if everyone keeps visiting new clients and the marketing team launches the holiday campaign on time next month.",
    "cn": "A：你覺得即使鎮上出現了新的競爭對手，業務部門還是能在年底前達到一百萬美元的目標嗎？ B：我認為如果每個人都持續拜訪新客戶，而且行銷團隊下個月準時推出節慶活動，我們就能【達成】它。"
  },
  {
    "word": "realize",
    "pos": "v.",
    "cn_def": "實現（夢想、計畫）；了解",
    "en_def": "to make a hope or plan really happen",
    "sentence": "A: I heard you finally opened your own design studio downtown, so how does it feel after dreaming about it for so many years? B: It feels wonderful, because I saved money for ten years and took business classes at night, and now I can finally {{BLANK}} my dream of working for myself.",
    "cn": "A：我聽說你終於在市中心開了自己的設計工作室，夢想了這麼多年，現在感覺如何？ B：感覺很棒，因為我存了十年的錢，晚上還去上商業課程，現在我終於可以【實現】自己當老闆的夢想了。"
  },
  {
    "word": "skip",
    "pos": "v.",
    "cn_def": "略過；不做",
    "en_def": "to not do something you usually do",
    "sentence": "A: You look exhausted this morning, so did you stay at the office late again to prepare the slides for the investors' meeting? B: Yes, I worked until midnight, and I had to {{BLANK}} lunch and dinner yesterday because I want this project to succeed and help me get promoted next year.",
    "cn": "A：你今天早上看起來累壞了，你昨天又為了準備投資人會議的簡報留在辦公室到很晚嗎？ B：對，我工作到半夜，昨天還不得不【略過】午餐和晚餐，因為我希望這個專案成功，幫助我明年獲得升遷。"
  },
  {
    "word": "distracted",
    "pos": "adj.",
    "cn_def": "分心的",
    "en_def": "not able to pay attention to what you are doing",
    "sentence": "A: Why did James make so many mistakes in the monthly budget report that he sent to the finance director on Friday afternoon? B: He was {{BLANK}} because his phone kept ringing with calls about his new apartment, and he could not focus on the numbers while he was worrying about moving.",
    "cn": "A：為什麼詹姆士週五下午寄給財務長的月度預算報告裡有那麼多錯誤？ B：他【分心】了，因為他的手機一直響，都是關於他新公寓的電話，而他在擔心搬家的時候沒辦法專注在數字上。"
  },
  {
    "word": "dull",
    "pos": "adj.",
    "cn_def": "乏味的；單調的",
    "en_def": "boring; not interesting",
    "sentence": "A: Why did Kevin decide to leave the accounting department and apply for a position on the sales team last month? B: He said his daily work was {{BLANK}} because he entered the same kind of data every day, and he wanted a more exciting job where he could travel and meet new people.",
    "cn": "A：為什麼凱文上個月決定離開會計部門，去應徵業務團隊的職位？ B：他說他每天的工作很【乏味】，因為他每天都在輸入同一類的資料，而他想要一份更刺激、可以出差和認識新朋友的工作。"
  },
  {
    "word": "standstill",
    "pos": "n.",
    "cn_def": "停頓；停滯",
    "en_def": "a situation where nothing moves or makes progress",
    "sentence": "A: What happened with the plan to build the new shopping mall next to the train station, which was supposed to open next spring? B: The project has come to a {{BLANK}} because the city has not approved the final design yet, so the builders are waiting and nobody knows when work will start again.",
    "cn": "A：原本預計明年春天開幕、蓋在火車站旁的新購物中心，計畫後來怎麼樣了？ B：這個專案已經陷入【停頓】，因為市政府還沒有核准最終設計，所以營建商都在等待，也沒有人知道工程什麼時候會再開始。"
  },
  {
    "word": "ignore",
    "pos": "v.",
    "cn_def": "忽視；不理會",
    "en_def": "to pay no attention to someone or something",
    "sentence": "A: Did the manager listen to your suggestions about the new schedule, or did she decide to keep the old system for the warehouse staff? B: Unfortunately, she decided to {{BLANK}} my ideas at the meeting, but I will write a detailed report with numbers so she can see how much time we could save.",
    "cn": "A：經理有聽你對新班表的建議嗎？還是她決定讓倉庫員工維持舊制度？ B：很可惜，她在會議上決定【忽視】我的想法，但我會寫一份附有數據的詳細報告，讓她看看我們可以節省多少時間。"
  },
  {
    "word": "arrange",
    "pos": "v.",
    "cn_def": "安排",
    "en_def": "to plan or organize something",
    "sentence": "A: I am interested in learning more about the leadership training program, but I am not sure whom I should contact about it. B: You should talk to Ms. Chen in Human Resources, because she can {{BLANK}} a meeting with the program director for you next week and explain how to apply before the deadline.",
    "cn": "A：我有興趣多了解領導力培訓課程，但我不確定該聯絡誰。 B：你應該去找人資部的陳小姐，因為她可以幫你【安排】下週和課程主任開會，並向你說明如何在截止日期前申請。"
  },
  {
    "word": "uncertain",
    "pos": "adj.",
    "cn_def": "不確定的",
    "en_def": "not sure about something",
    "sentence": "A: Are you going to accept the job offer from the company in Singapore, or will you stay here in Taipei with your current team? B: I am still {{BLANK}} about it, because the salary is much higher, but I would have to move far away from my family and learn a whole new market.",
    "cn": "A：你會接受新加坡那家公司的工作邀約，還是會留在台北和你現在的團隊一起？ B：我對這件事還【不確定】，因為薪水高很多，但我必須搬到離家人很遠的地方，還要學習一個全新的市場。"
  },
  {
    "word": "unpredictable",
    "pos": "adj.",
    "cn_def": "難以預測的",
    "en_def": "changing in a way that is hard to know before",
    "sentence": "A: Why does the restaurant need so many part-time workers on the weekend schedule when some evenings are very quiet? B: The number of customers is very {{BLANK}} on Saturdays and Sundays, so the manager prefers to have extra staff ready in case a large tour group suddenly walks in.",
    "cn": "A：為什麼有些晚上很冷清，餐廳週末的班表卻需要那麼多兼職人員？ B：週六和週日的客人數量非常【難以預測】，所以經理寧願多準備一些人手，以防大型旅行團突然上門。"
  },
  {
    "word": "involvement",
    "pos": "n.",
    "cn_def": "參與；涉入",
    "en_def": "the act of taking part in something",
    "sentence": "A: Why did the company choose Linda to lead the new community project instead of someone with more experience in marketing? B: Her {{BLANK}} in several charity events over the past three years showed the directors that she works well with volunteers and really cares about helping local families.",
    "cn": "A：為什麼公司選琳達帶領新的社區專案，而不是選一個行銷經驗更豐富的人？ B：她過去三年【參與】了好幾場慈善活動，讓董事們看到她很擅長和志工合作，而且真心在乎幫助當地家庭。"
  },
  {
    "word": "mandatory",
    "pos": "adj.",
    "cn_def": "強制的；義務的",
    "en_def": "required by a rule",
    "sentence": "A: Do all the new employees have to attend the safety workshop on Monday morning, or can some of them join the online version later? B: The workshop is {{BLANK}} for everyone who works in the factory, so please tell your team to arrive at eight o'clock and bring their ID cards with them.",
    "cn": "A：所有新進員工都必須參加週一早上的安全講習嗎？還是有些人可以之後再參加線上版？ B：這場講習對所有在工廠工作的人來說都是【強制性的】，所以請告訴你的團隊八點到場，並帶上他們的識別證。"
  },
  {
    "word": "path",
    "pos": "n.",
    "cn_def": "道路；途徑",
    "en_def": "a way of living or a direction in your career",
    "sentence": "A: My younger brother just graduated from university, and he cannot decide whether to work in finance or become a teacher. B: Tell him to try a few internships first, because it takes time to find the right career {{BLANK}}, and real work experience will show him what he enjoys doing every day.",
    "cn": "A：我弟弟剛從大學畢業，他無法決定要從事金融業還是當老師。 B：告訴他先試試幾份實習，因為要找到對的職涯【道路】需要時間，而真正的工作經驗會讓他知道自己每天喜歡做什麼。"
  },
  {
    "word": "renowned",
    "pos": "adj.",
    "cn_def": "著名的；有名望的",
    "en_def": "famous and respected",
    "sentence": "A: Why is the hotel ballroom so full tonight, when the business dinner usually has only about fifty guests? B: A {{BLANK}} chef from Paris is cooking the main course this evening, so many local business owners bought tickets because they wanted to taste his food and meet him in person.",
    "cn": "A：為什麼今晚飯店宴會廳這麼滿，而商務晚宴平常只有大約五十位賓客？ B：今晚有一位來自巴黎的【知名】主廚料理主菜，所以很多當地企業老闆都買了票，因為他們想品嚐他的料理並親自見到他。"
  },
  {
    "word": "initiation",
    "pos": "n.",
    "cn_def": "開始；啟動；入會",
    "en_def": "the start of a plan or process",
    "sentence": "A: When did the new training program for junior managers officially begin, and has it helped the staff so far? B: Since its {{BLANK}} in January, more than forty employees have joined the program, and many of them say they now feel more confident when they lead meetings and give feedback.",
    "cn": "A：給初階主管的新培訓計畫是什麼時候正式開始的？到目前為止對員工有幫助嗎？ B：自從一月【開始實施】以來，已經有四十多名員工參加了這個計畫，其中許多人說他們現在主持會議和給予回饋時更有自信了。"
  },
  {
    "word": "fulfilling",
    "pos": "adj.",
    "cn_def": "令人有成就感的；令人滿足的",
    "en_def": "making you feel happy and satisfied",
    "sentence": "A: You used to earn a lot more at the law firm, so why did you decide to work for a small charity that helps older people? B: The pay is lower, but the work is much more {{BLANK}} because I can see how my daily efforts make a real difference in people's lives.",
    "cn": "A：你以前在律師事務所賺得多很多，為什麼決定到一個幫助長者的小型慈善機構工作？ B：薪水是比較低，但這份工作讓人更有【成就感】，因為我可以看到自己每天的努力真正改變了人們的生活。"
  },
  {
    "word": "frustrated",
    "pos": "adj.",
    "cn_def": "挫折的；沮喪的",
    "en_def": "upset because you cannot do or change something",
    "sentence": "A: Why did Tom look so upset when he left the meeting with the IT department this afternoon? B: He feels {{BLANK}} because he has asked them three times to fix the computer system, but they keep saying they are too busy, so his team still cannot process customer orders quickly.",
    "cn": "A：為什麼湯姆今天下午和資訊部開完會離開時看起來那麼不高興？ B：他覺得很【挫折】，因為他已經要求他們修電腦系統三次了，但他們一直說太忙，所以他的團隊還是沒辦法快速處理顧客的訂單。"
  },
  {
    "word": "immense",
    "pos": "adj.",
    "cn_def": "巨大的；極大的",
    "en_def": "very large",
    "sentence": "A: How did the new product launch go last weekend, and were there many visitors at the company's booth at the trade fair? B: It was an {{BLANK}} success, because thousands of people visited our booth over two days, and we received more orders than we had expected for the whole month.",
    "cn": "A：上週末的新產品發表會進行得怎麼樣？公司在商展的攤位有很多訪客嗎？ B：那是一次【巨大的】成功，因為兩天內有數千人參觀我們的攤位，而我們收到的訂單比原本預期整個月的還要多。"
  },
  {
    "word": "possibility",
    "pos": "n.",
    "cn_def": "可能性",
    "en_def": "something that might happen or be true",
    "sentence": "A: Do you think the company will open a branch office in Tokyo next year, since our sales in Japan have grown so quickly? B: There is a strong {{BLANK}} that it will happen, because the board discussed it last week, but they still need to find the right location and hire local staff.",
    "cn": "A：既然我們在日本的銷售成長得這麼快，你覺得公司明年會在東京開設分公司嗎？ B：這件事很有【可能】發生，因為董事會上週討論過了，但他們還需要找到合適的地點並僱用當地員工。"
  },
  {
    "word": "impressive",
    "pos": "adj.",
    "cn_def": "令人印象深刻的",
    "en_def": "so good that people admire it",
    "sentence": "A: Did you read the résumé from the woman who applied for the marketing manager position, and what did you think of her experience? B: Yes, her background is very {{BLANK}}, since she has worked for two international companies and led a team that doubled online sales in only one year.",
    "cn": "A：你讀過那位應徵行銷經理職位女士的履歷了嗎？你覺得她的經歷如何？ B：讀過了，她的背景非常【令人印象深刻】，因為她曾在兩家跨國公司工作，還帶領團隊在短短一年內讓線上銷售翻倍。"
  },
  {
    "word": "decent",
    "pos": "adj.",
    "cn_def": "還不錯的；像樣的",
    "en_def": "good enough; acceptable",
    "sentence": "A: Are you happy with the new job at the logistics company, or are you still looking for something better in the city? B: I am quite happy, because the company pays a {{BLANK}} salary and gives good benefits, and my manager has promised to send me to training courses next year.",
    "cn": "A：你對物流公司的新工作滿意嗎？還是你還在城裡找更好的工作？ B：我蠻滿意的，因為公司給的薪水【還不錯】，福利也很好，而且我的主管答應明年會送我去上培訓課程。"
  },
  {
    "word": "dedication",
    "pos": "n.",
    "cn_def": "奉獻；投入",
    "en_def": "hard work and loyalty to a job or goal",
    "sentence": "A: Why is the CEO giving Ms. Wang a special award at the annual dinner, when she is not a manager or a director? B: She has worked here for twenty-five years and never missed a deadline, so the award is to thank her for her {{BLANK}} to the company and its customers.",
    "cn": "A：為什麼執行長要在年度晚宴上頒特別獎給王小姐，而她既不是經理也不是主管？ B：她在這裡工作了二十五年，從來沒錯過任何截止期限，所以這個獎是為了感謝她對公司和顧客的【奉獻】。"
  },
  {
    "word": "vital",
    "pos": "adj.",
    "cn_def": "極為重要的；必要的",
    "en_def": "very important; necessary",
    "sentence": "A: Should I spend more time on the slides or on practicing my speech before tomorrow's presentation to the new clients from Korea? B: Practicing is {{BLANK}}, because the clients will judge you by how clearly and confidently you speak, and nice slides will not help if you cannot answer their questions.",
    "cn": "A：明天要向來自韓國的新客戶做簡報，在那之前我應該多花時間做投影片還是練習演講？ B：練習是【極為重要的】，因為客戶會根據你說話有多清楚、多有自信來評價你，如果你回答不了他們的問題，漂亮的投影片也沒有用。"
  },
  {
    "word": "fascination",
    "pos": "n.",
    "cn_def": "著迷；強烈的興趣",
    "en_def": "a very strong interest in something",
    "sentence": "A: How did Maria end up working as an engineer for an airline company after studying history at university? B: She has had a {{BLANK}} with airplanes since she was a little girl, so after graduation she took night classes in engineering and finally got the job she always dreamed of.",
    "cn": "A：瑪莉亞大學念的是歷史，最後怎麼會在航空公司當工程師？ B：她從小就對飛機非常【著迷】，所以畢業後她去上工程的夜間課程，終於得到了她一直夢想的工作。"
  },
  {
    "word": "prospect",
    "pos": "n.",
    "cn_def": "前景；可能性",
    "en_def": "the chance that something good will happen in the future",
    "sentence": "A: Why are so many young people applying for jobs at the new electric car factory outside the city this year? B: The company offers good training, and the {{BLANK}} of getting promoted quickly is attractive to graduates who want to build a long career in a growing industry.",
    "cn": "A：為什麼今年有這麼多年輕人去應徵城外那間新電動車工廠的工作？ B：這家公司提供很好的訓練，而且快速升遷的【前景】對想在成長產業中長久發展的畢業生很有吸引力。"
  },
  {
    "word": "astonishing",
    "pos": "adj.",
    "cn_def": "驚人的；令人驚訝的",
    "en_def": "very surprising",
    "sentence": "A: Did you hear that the small startup down the street was bought by a huge technology company for fifty million dollars? B: Yes, it is {{BLANK}} news, because the company only started two years ago in a tiny office with three employees, and now everyone in the industry is talking about it.",
    "cn": "A：你聽說街上那家小型新創公司被一家大型科技公司以五千萬美元收購了嗎？ B：聽說了，這真是【驚人的】消息，因為那家公司兩年前才在一間小辦公室裡由三名員工創立，現在業界每個人都在談論它。"
  },
  {
    "word": "facility",
    "pos": "n.",
    "cn_def": "設施；場所",
    "en_def": "a building or place used for a special purpose",
    "sentence": "A: Where will the new employees from the overseas office receive their technical training when they arrive next month? B: They will stay at the company's training {{BLANK}} in Hsinchu, which has modern classrooms, a lab, and a small hotel, so they will not need to travel every day.",
    "cn": "A：海外辦公室的新進員工下個月抵達後，會在哪裡接受技術訓練？ B：他們會待在公司位於新竹的訓練【設施】，那裡有現代化的教室、實驗室和一間小旅館，所以他們不需要每天通勤。"
  },
  {
    "word": "aspiration",
    "pos": "n.",
    "cn_def": "抱負；志向",
    "en_def": "a strong hope to achieve something",
    "sentence": "A: During your job interview, what did you tell the manager when she asked about your goals for the next five years? B: I told her that my {{BLANK}} is to become a team leader, so I plan to take management courses and learn as much as I can from experienced colleagues.",
    "cn": "A：在你的工作面試中，當經理問你未來五年的目標時，你怎麼回答？ B：我告訴她我的【抱負】是成為團隊領導人，所以我打算去上管理課程，並盡可能向有經驗的同事學習。"
  },
  {
    "word": "contribute",
    "pos": "v.",
    "cn_def": "貢獻；捐助",
    "en_def": "to give money, help, or ideas",
    "sentence": "A: Our department is collecting money for the new library at the children's hospital, so would you like to join us this month? B: Of course, I would be glad to {{BLANK}} some money, and I can also ask my friends at the bank if they want to help with books and toys.",
    "cn": "A：我們部門正在為兒童醫院的新圖書室募款，你這個月想加入我們嗎？ B：當然，我很樂意【捐】一些錢，我也可以問問我在銀行的朋友，看他們是否想幫忙提供書籍和玩具。"
  }
];

const MCQS = [
  {
    "q": "Mark failed the accounting exam twice last year. His _____ to pass finally paid off when he got the highest score in his group.",
    "options": [
      "determination",
      "facility",
      "standstill",
      "prospect"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The hotel received many complaints about slow check-in. The manager hired two more receptionists to _____ the service at the front desk.",
    "options": [
      "skip",
      "improve",
      "ignore",
      "desire"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The marketing team worked overtime for three months. As a result, they were able to _____ their goal of 10,000 new users.",
    "options": [
      "arrange",
      "skip",
      "achieve",
      "contribute"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "After years of saving money, Ms. Lin opened a bakery in her hometown. She was proud to finally _____ her childhood dream.",
    "options": [
      "ignore",
      "improve",
      "arrange",
      "realize"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The flight to Osaka leaves at six in the morning. We will have to _____ breakfast at the hotel and eat at the airport instead.",
    "options": [
      "achieve",
      "skip",
      "contribute",
      "realize"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Please turn off your phones during the training session. Many participants get _____ by messages and miss important information.",
    "options": [
      "renowned",
      "decent",
      "immense",
      "distracted"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Most staff stopped listening halfway through the speech. It was long and _____, with no examples or pictures to keep people interested.",
    "options": [
      "dull",
      "vital",
      "mandatory",
      "impressive"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Heavy snow closed all the roads around the city yesterday. Deliveries came to a complete _____ until the trucks could move again.",
    "options": [
      "aspiration",
      "involvement",
      "standstill",
      "dedication"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The printer has been showing an error message all week. Please do not _____ the warning, or the machine may break completely.",
    "options": [
      "achieve",
      "realize",
      "contribute",
      "ignore"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Our clients from Germany arrive on Tuesday afternoon. Could you _____ a car to pick them up at the airport and take them to the hotel?",
    "options": [
      "arrange",
      "skip",
      "ignore",
      "desire"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The board has not decided whether to move the head office. The date of the move is still _____, so please do not pack yet.",
    "options": [
      "astonishing",
      "fulfilling",
      "uncertain",
      "renowned"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Prices for fresh fruit change a lot from week to week. Because the market is so _____, the restaurant buys only what it needs each day.",
    "options": [
      "decent",
      "unpredictable",
      "fulfilling",
      "impressive"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The new park was built with help from local residents. The mayor thanked them for their _____ in planning and cleaning the area.",
    "options": [
      "standstill",
      "facility",
      "involvement",
      "prospect"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "All visitors must wear a helmet inside the construction site. This rule is _____, and anyone without one will be asked to leave.",
    "options": [
      "mandatory",
      "dull",
      "distracted",
      "astonishing"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Many graduates are not sure what kind of job they want. A career counselor can help them choose the right _____ for their future.",
    "options": [
      "standstill",
      "involvement",
      "fascination",
      "path"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The conference will open with a speech by Dr. Kim. She is a _____ expert in online marketing who has written five best-selling books.",
    "options": [
      "frustrated",
      "renowned",
      "distracted",
      "uncertain"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Ms. Ho left her banking job to teach at a rural school. She says her new job is more _____ because she helps children every day.",
    "options": [
      "fulfilling",
      "unpredictable",
      "mandatory",
      "frustrated"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The customer waited on the phone for forty minutes. He became very _____ and asked to speak directly to the manager.",
    "options": [
      "renowned",
      "vital",
      "frustrated",
      "decent"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The new shopping mall is the largest in the country. It took an _____ amount of money and five years to build.",
    "options": [
      "frustrated",
      "immense",
      "distracted",
      "fulfilling"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Our sales have dropped for three months in a row. The director is now discussing the _____ of closing two small stores.",
    "options": [
      "dedication",
      "aspiration",
      "fascination",
      "possibility"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The new designer finished the whole website in just one week. Her work was so _____ that the manager gave her a bonus.",
    "options": [
      "uncertain",
      "impressive",
      "frustrated",
      "mandatory"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The hotel near the station is not luxurious, but it is clean and cheap. It is a _____ place to stay for a short business trip.",
    "options": [
      "decent",
      "immense",
      "distracted",
      "frustrated"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Mr. Chang has worked at the factory for thirty years without missing a day. The company gave him a gold watch for his _____.",
    "options": [
      "standstill",
      "possibility",
      "facility",
      "dedication"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Clear communication is _____ when a team works in different time zones. Without it, small mistakes can quickly become big problems.",
    "options": [
      "dull",
      "distracted",
      "vital",
      "renowned"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Kevin has loved computers since he was a child. His _____ with technology led him to start his own software company.",
    "options": [
      "standstill",
      "initiation",
      "possibility",
      "fascination"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Several staff members applied for the job in the new Tokyo branch. The _____ of working abroad excited many of the younger employees.",
    "options": [
      "standstill",
      "prospect",
      "dedication",
      "facility"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The small café sold more than two thousand cups of coffee on its first day. The owners were amazed by the _____ number of customers.",
    "options": [
      "astonishing",
      "mandatory",
      "distracted",
      "frustrated"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The company is building a new storage _____ near the port. It will hold ten thousand boxes and open next summer.",
    "options": [
      "aspiration",
      "involvement",
      "facility",
      "fascination"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Jenny wants to manage her own team one day. To reach this _____, she is taking a leadership course every Saturday.",
    "options": [
      "facility",
      "aspiration",
      "standstill",
      "involvement"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Every department was asked to give ideas for the new product. Everyone is welcome to _____ suggestions before the meeting on Friday.",
    "options": [
      "skip",
      "realize",
      "ignore",
      "contribute"
    ],
    "answer": 3,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "desire": {
    "pos": "v.",
    "en_def": "to want something very much",
    "cn_def": "渴望；想要"
  },
  "determination": {
    "pos": "n.",
    "en_def": "a strong wish to keep trying until you succeed",
    "cn_def": "決心；毅力"
  },
  "improve": {
    "pos": "v.",
    "en_def": "to make something better",
    "cn_def": "改善；提升"
  },
  "achieve": {
    "pos": "v.",
    "en_def": "to succeed in reaching a goal",
    "cn_def": "達成；實現"
  },
  "realize": {
    "pos": "v.",
    "en_def": "to make a hope or plan really happen",
    "cn_def": "實現（夢想、計畫）；了解"
  },
  "skip": {
    "pos": "v.",
    "en_def": "to not do something you usually do",
    "cn_def": "略過；不做"
  },
  "distracted": {
    "pos": "adj.",
    "en_def": "not able to pay attention to what you are doing",
    "cn_def": "分心的"
  },
  "dull": {
    "pos": "adj.",
    "en_def": "boring; not interesting",
    "cn_def": "乏味的；單調的"
  },
  "standstill": {
    "pos": "n.",
    "en_def": "a situation where nothing moves or makes progress",
    "cn_def": "停頓；停滯"
  },
  "ignore": {
    "pos": "v.",
    "en_def": "to pay no attention to someone or something",
    "cn_def": "忽視；不理會"
  },
  "arrange": {
    "pos": "v.",
    "en_def": "to plan or organize something",
    "cn_def": "安排"
  },
  "uncertain": {
    "pos": "adj.",
    "en_def": "not sure about something",
    "cn_def": "不確定的"
  },
  "unpredictable": {
    "pos": "adj.",
    "en_def": "changing in a way that is hard to know before",
    "cn_def": "難以預測的"
  },
  "involvement": {
    "pos": "n.",
    "en_def": "the act of taking part in something",
    "cn_def": "參與；涉入"
  },
  "mandatory": {
    "pos": "adj.",
    "en_def": "required by a rule",
    "cn_def": "強制的；義務的"
  },
  "path": {
    "pos": "n.",
    "en_def": "a way of living or a direction in your career",
    "cn_def": "道路；途徑"
  },
  "renowned": {
    "pos": "adj.",
    "en_def": "famous and respected",
    "cn_def": "著名的；有名望的"
  },
  "initiation": {
    "pos": "n.",
    "en_def": "the start of a plan or process",
    "cn_def": "開始；啟動；入會"
  },
  "fulfilling": {
    "pos": "adj.",
    "en_def": "making you feel happy and satisfied",
    "cn_def": "令人有成就感的；令人滿足的"
  },
  "frustrated": {
    "pos": "adj.",
    "en_def": "upset because you cannot do or change something",
    "cn_def": "挫折的；沮喪的"
  },
  "immense": {
    "pos": "adj.",
    "en_def": "very large",
    "cn_def": "巨大的；極大的"
  },
  "possibility": {
    "pos": "n.",
    "en_def": "something that might happen or be true",
    "cn_def": "可能性"
  },
  "impressive": {
    "pos": "adj.",
    "en_def": "so good that people admire it",
    "cn_def": "令人印象深刻的"
  },
  "decent": {
    "pos": "adj.",
    "en_def": "good enough; acceptable",
    "cn_def": "還不錯的；像樣的"
  },
  "dedication": {
    "pos": "n.",
    "en_def": "hard work and loyalty to a job or goal",
    "cn_def": "奉獻；投入"
  },
  "vital": {
    "pos": "adj.",
    "en_def": "very important; necessary",
    "cn_def": "極為重要的；必要的"
  },
  "fascination": {
    "pos": "n.",
    "en_def": "a very strong interest in something",
    "cn_def": "著迷；強烈的興趣"
  },
  "prospect": {
    "pos": "n.",
    "en_def": "the chance that something good will happen in the future",
    "cn_def": "前景；可能性"
  },
  "astonishing": {
    "pos": "adj.",
    "en_def": "very surprising",
    "cn_def": "驚人的；令人驚訝的"
  },
  "facility": {
    "pos": "n.",
    "en_def": "a building or place used for a special purpose",
    "cn_def": "設施；場所"
  },
  "aspiration": {
    "pos": "n.",
    "en_def": "a strong hope to achieve something",
    "cn_def": "抱負；志向"
  },
  "contribute": {
    "pos": "v.",
    "en_def": "to give money, help, or ideas",
    "cn_def": "貢獻；捐助"
  }
};

const EXTRA_GLOSSES = {};
