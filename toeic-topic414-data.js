// Topic 414 Quiz Data: Training 訓練
// Source word list: https://www.examword.com/group-topic/training — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T414 - Training 訓練",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "practice",
    "pos": "n.",
    "cn_def": "練習；實踐",
    "en_def": "doing something again and again to get better at it",
    "sentence": "A: How did the new sales assistants become so confident on the phone with customers in only two weeks? B: Their manager gave them thirty minutes of daily {{BLANK}} every morning before the store opened, so they repeated common questions and answers until speaking with real customers felt natural and easy.",
    "cn": "A：新來的銷售助理怎麼只用兩個星期就能這麼有自信地跟客戶講電話？ B：他們的經理每天早上在店開門前給他們三十分鐘的【練習】，所以他們反覆演練常見的問題和回答，直到和真正的客戶說話變得自然又輕鬆。"
  },
  {
    "word": "coach",
    "pos": "n.",
    "cn_def": "教練",
    "en_def": "a person who trains a sports team or helps someone improve a skill",
    "sentence": "A: Why does our company basketball team suddenly win almost every game against the other offices this season? B: We hired a former professional player as our {{BLANK}}, and he meets us every Thursday evening after work to plan smart strategies, correct our mistakes, and keep everyone motivated before each match.",
    "cn": "A：為什麼我們公司的籃球隊這一季突然幾乎每場比賽都贏過其他辦公室？ B：我們聘請了一位前職業球員當我們的【教練】，他每週四下班後的晚上和我們見面，規劃聰明的戰術、糾正我們的錯誤，並在每場比賽前讓大家保持鬥志。"
  },
  {
    "word": "trainer",
    "pos": "n.",
    "cn_def": "培訓師；訓練員",
    "en_def": "a person whose job is to teach skills to workers or athletes",
    "sentence": "A: Who taught all the new kitchen staff how to use the expensive coffee machines safely last weekend? B: The equipment company sent a {{BLANK}} to our café on Saturday morning, and she spent three hours showing everyone how to clean, repair, and operate the machines without wasting any milk or beans.",
    "cn": "A：上週末是誰教所有新廚房員工如何安全使用那些昂貴的咖啡機？ B：設備公司在星期六早上派了一位【培訓師】到我們的咖啡店，她花了三個小時示範給大家看如何清潔、修理和操作這些機器，而且不浪費任何牛奶或咖啡豆。"
  },
  {
    "word": "skill",
    "pos": "n.",
    "cn_def": "技能；技巧",
    "en_def": "an ability to do something well because you have learned and practiced it",
    "sentence": "A: What do you think is the most important thing for the new customer service position we posted online last week? B: Clear communication is the key {{BLANK}}, because the person will answer angry phone calls all day, so they must stay calm, listen carefully, and explain our return policy in simple words.",
    "cn": "A：你認為我們上週在網路上刊登的新客服職缺，最重要的條件是什麼？ B：清楚的溝通是關鍵【技能】，因為這個人整天都要接聽憤怒的電話，所以他們必須保持冷靜、仔細聆聽，並用簡單的話解釋我們的退貨政策。"
  },
  {
    "word": "exercise",
    "pos": "n.",
    "cn_def": "運動；練習",
    "en_def": "physical activity that you do to stay healthy or to train a skill",
    "sentence": "A: Our team leader looked so tired every afternoon last month, so why does she seem full of energy these days? B: She started doing thirty minutes of light {{BLANK}} in the park near the office during her lunch break, such as jogging and stretching, and now she sleeps better and works faster.",
    "cn": "A：我們的組長上個月每天下午看起來都好累，為什麼她最近看起來精力充沛？ B：她開始在午休時間到辦公室附近的公園做三十分鐘的輕度【運動】，例如慢跑和伸展，現在她睡得更好，工作也更快了。"
  },
  {
    "word": "routine",
    "pos": "n.",
    "cn_def": "例行公事；慣例",
    "en_def": "the usual order and way in which you regularly do things",
    "sentence": "A: How do the warehouse workers manage to pack so many online orders without making mistakes during the busy holiday season? B: They follow the same daily {{BLANK}} every shift, checking the order list first, then scanning each item, and finally weighing every box before the delivery trucks arrive in the afternoon.",
    "cn": "A：在忙碌的假期旺季，倉庫員工是怎麼在不出錯的情況下包裝這麼多網路訂單的？ B：他們每一班都遵循相同的每日【例行程序】，先檢查訂單清單，接著掃描每件商品，最後在下午送貨卡車抵達前替每個箱子秤重。"
  },
  {
    "word": "drill",
    "pos": "n.",
    "cn_def": "演習；操練",
    "en_def": "a practice of what to do in an emergency, or a training activity that is repeated",
    "sentence": "A: Why did the alarm ring so loudly on the fifth floor this morning, and why did everyone walk down the stairs together? B: It was only a fire {{BLANK}}, which the building manager holds twice a year, so all employees can practice leaving the office quickly and safely in case of a real emergency.",
    "cn": "A：今天早上五樓的警鈴為什麼響得那麼大聲，而且為什麼大家一起走樓梯下去？ B：那只是一次消防【演習】，大樓管理員每年舉行兩次，讓所有員工練習在真正發生緊急狀況時快速又安全地離開辦公室。"
  },
  {
    "word": "instruction",
    "pos": "n.",
    "cn_def": "指示；說明",
    "en_def": "information that tells you how to do something",
    "sentence": "A: I tried to set up the new printer in the meeting room, but it keeps showing an error message on the screen. B: You should read the first {{BLANK}} in the user manual again, because it says you must remove the orange plastic tape inside the machine before you turn it on for the first time.",
    "cn": "A：我試著在會議室安裝新的印表機，但螢幕上一直出現錯誤訊息。 B：你應該再讀一次使用手冊裡的第一條【指示】，因為上面說在第一次開機前，你必須把機器裡面的橘色塑膠膠帶拿掉。"
  },
  {
    "word": "lesson",
    "pos": "n.",
    "cn_def": "課；一堂課",
    "en_def": "a period of time in which someone is taught something",
    "sentence": "A: Your English presentation at the client meeting yesterday was excellent, so how did you improve so quickly this year? B: Thank you! I take a private {{BLANK}} with a native speaker every Tuesday evening after work, and she helps me practice my pronunciation and prepare answers for difficult questions from customers.",
    "cn": "A：你昨天在客戶會議上的英文簡報非常出色，你今年怎麼進步得這麼快？ B：謝謝！我每週二下班後的晚上都跟一位母語人士上一堂私人【課】，她幫我練習發音，並準備回答客戶提出的困難問題。"
  },
  {
    "word": "course",
    "pos": "n.",
    "cn_def": "課程",
    "en_def": "a series of classes on a particular subject",
    "sentence": "A: Are you going to join the company trip to the beach next month, or do you have other plans for those days? B: I'm afraid I can't go, because I signed up for a three-day online marketing {{BLANK}}, and the final test is on the same weekend, so I need to stay home and study.",
    "cn": "A：你下個月會參加公司的海灘旅遊嗎，還是你那幾天有其他計畫？ B：恐怕我沒辦法去，因為我報名了一個為期三天的線上行銷【課程】，而期末測驗就在同一個週末，所以我需要待在家讀書。"
  },
  {
    "word": "workshop",
    "pos": "n.",
    "cn_def": "工作坊；研習會",
    "en_def": "a meeting where people learn about a subject by doing practical activities together",
    "sentence": "A: What will happen at the hotel conference room on Friday afternoon, and why are so many tables and laptops there? B: Our IT department is holding a hands-on {{BLANK}}, where small groups of staff will try the new accounting software together and ask the experts questions about any problems they find.",
    "cn": "A：星期五下午飯店的會議室會有什麼活動，為什麼那裡有這麼多桌子和筆電？ B：我們的資訊部門要舉辦一場實作【工作坊】，小組員工會在那裡一起試用新的會計軟體，並針對他們發現的任何問題向專家提問。"
  },
  {
    "word": "seminar",
    "pos": "n.",
    "cn_def": "研討會；專題討論會",
    "en_def": "a meeting for discussion or training on a particular subject",
    "sentence": "A: Why is the large lecture hall on the second floor fully booked for the whole morning next Wednesday? B: A famous economist from Singapore will lead a {{BLANK}} about online business trends, and about eighty managers from different branches have registered to listen to her speech and join the discussion afterward.",
    "cn": "A：為什麼二樓的大演講廳下週三整個上午都被訂滿了？ B：一位來自新加坡的知名經濟學家將主持一場關於線上商業趨勢的【研討會】，大約有八十位來自不同分公司的經理已經報名，要聽她的演講並參加之後的討論。"
  },
  {
    "word": "instructor",
    "pos": "n.",
    "cn_def": "教練；講師；指導員",
    "en_def": "a person who teaches a practical skill or a class",
    "sentence": "A: Is it difficult to learn how to drive the forklift in the factory if I have never used one before? B: Not really, because the {{BLANK}} is very patient, and she explains every step slowly, lets you practice in an empty area first, and only allows you to work alone after you pass her test.",
    "cn": "A：如果我以前從來沒用過工廠的堆高機，要學會開它會很難嗎？ B：不會很難，因為那位【指導員】很有耐心，她會慢慢解釋每一個步驟，先讓你在空曠的區域練習，只有在你通過她的測驗之後才讓你獨自作業。"
  },
  {
    "word": "guide",
    "pos": "n.",
    "cn_def": "嚮導；導遊；指南",
    "en_def": "a person who shows the way or explains things to others; also a book of helpful information",
    "sentence": "A: We have a group of business visitors from Japan arriving on Monday, so who will show them around the factory? B: I have asked Kevin to be their {{BLANK}} for the day, because he speaks some Japanese, knows every production line well, and can answer their questions about our quality control process.",
    "cn": "A：我們有一群來自日本的商務訪客星期一會抵達，誰要帶他們參觀工廠？ B：我已經請凱文當他們當天的【嚮導】，因為他會說一些日語，對每條生產線都很熟悉，而且能回答他們關於我們品管流程的問題。"
  },
  {
    "word": "demonstrate",
    "pos": "v.",
    "cn_def": "示範；展示",
    "en_def": "to show how something works or how to do something",
    "sentence": "A: Our customers often complain that the new rice cooker is too complicated, so what should we do at the trade fair? B: Let's ask one of our engineers to {{BLANK}} how it works at our booth every hour, so visitors can watch each button being used and taste the rice cooked in only twenty minutes.",
    "cn": "A：我們的顧客常常抱怨新款電鍋太複雜了，那我們在商展上應該怎麼做？ B：我們請一位工程師每小時在攤位上【示範】它的使用方式，這樣參觀者就能看到每個按鈕怎麼用，並品嚐只花二十分鐘煮好的米飯。"
  },
  {
    "word": "improve",
    "pos": "v.",
    "cn_def": "改善；改進；進步",
    "en_def": "to make something better, or to become better",
    "sentence": "A: The online reviews of our restaurant have been quite negative recently, mostly about the long waiting time for food. B: We need to {{BLANK}} our kitchen service quickly, so I plan to hire two more cooks, buy a faster oven, and train the waiters to take orders with tablets instead of paper.",
    "cn": "A：我們餐廳最近的網路評論相當負面，大多是關於上菜等待時間太長。 B：我們需要盡快【改善】廚房的服務，所以我打算再僱用兩名廚師、買一台更快的烤箱，並訓練服務生用平板電腦而不是紙張來點餐。"
  },
  {
    "word": "develop",
    "pos": "v.",
    "cn_def": "培養；發展；開發",
    "en_def": "to grow, or to make something grow and become stronger or more advanced",
    "sentence": "A: Our young assistant is clever and hardworking, but she is very quiet in meetings, so how can we help her? B: We could send her to a public speaking class next month, which would help her {{BLANK}} more confidence, and we could also let her lead a short part of our weekly team meeting.",
    "cn": "A：我們的年輕助理聰明又認真，但她在會議中非常安靜，我們可以怎麼幫助她？ B：我們可以下個月送她去上公開演說課，這會幫助她【培養】更多自信，我們也可以讓她主持每週團隊會議中的一小段。"
  },
  {
    "word": "learn",
    "pos": "v.",
    "cn_def": "學習；學會",
    "en_def": "to get knowledge or a skill by studying, practicing or being taught",
    "sentence": "A: Our company will open a new branch office in Madrid next spring, so are you interested in moving to Spain? B: Yes, I'd love to go, and I have already started to {{BLANK}} Spanish with a mobile app on the train every morning, so I can talk with local clients and colleagues there.",
    "cn": "A：我們公司明年春天要在馬德里開一間新的分公司，你有興趣搬到西班牙嗎？ B：有，我很想去，而且我已經開始每天早上在火車上用手機應用程式【學習】西班牙語，這樣我就能和當地的客戶及同事交談。"
  },
  {
    "word": "teach",
    "pos": "v.",
    "cn_def": "教；教導",
    "en_def": "to show or explain to someone how to do something",
    "sentence": "A: The new interns don't know how to use our online booking system yet, and customers are waiting at the front desk. B: Don't worry, I will {{BLANK}} them the basic steps during the quiet hour after lunch, and I'll also print a simple checklist so they can look at it whenever they feel unsure.",
    "cn": "A：新來的實習生還不知道怎麼使用我們的線上訂位系統，而顧客正在櫃台等著。 B：別擔心，我會在午餐後比較空閒的時段【教】他們基本步驟，我也會印一張簡單的檢查清單，讓他們不確定的時候可以隨時看。"
  },
  {
    "word": "prepare",
    "pos": "v.",
    "cn_def": "準備",
    "en_def": "to make something or someone ready for an event or activity",
    "sentence": "A: The sales director from our biggest client is visiting tomorrow morning to discuss next year's contract with us. B: Then we should {{BLANK}} a short report tonight showing our delivery records and prices, and we should also book the meeting room and order some coffee and snacks for the visitors.",
    "cn": "A：我們最大客戶的業務總監明天早上要來拜訪，和我們討論明年的合約。 B：那我們今晚應該【準備】一份簡短的報告，列出我們的送貨紀錄和價格，也應該預訂會議室，並為訪客訂一些咖啡和點心。"
  },
  {
    "word": "focus",
    "pos": "v.",
    "cn_def": "專注；集中注意力",
    "en_def": "to give all your attention to one thing",
    "sentence": "A: I always feel so busy at work, but at the end of the day I often haven't finished my most important tasks. B: Try to turn off your email notifications for two hours every morning, so you can {{BLANK}} on one big project at a time without stopping to answer every small message.",
    "cn": "A：我上班時總是覺得很忙，但到了一天結束時，我常常還沒完成最重要的任務。 B：試著每天早上關掉電子郵件通知兩個小時，這樣你就能一次【專注】於一個大型專案，而不用停下來回覆每則小訊息。"
  },
  {
    "word": "challenge",
    "pos": "n.",
    "cn_def": "挑戰",
    "en_def": "something new and difficult that tests your ability",
    "sentence": "A: How do you feel about managing the new team in Kaohsiung, since none of the members have worked in sales before? B: It will be a real {{BLANK}} for me, because I must train them from the beginning, but I'm excited, and I believe we can reach our goals by the end of the year.",
    "cn": "A：既然成員都沒有做過業務，你對於管理高雄的新團隊有什麼感覺？ B：這對我來說會是一個真正的【挑戰】，因為我必須從頭開始訓練他們，但我很興奮，而且我相信我們能在年底前達成目標。"
  },
  {
    "word": "progress",
    "pos": "n.",
    "cn_def": "進步；進展",
    "en_def": "the process of improving or moving forward toward a goal",
    "sentence": "A: It's been three months since the new staff began their computer training, so how are they doing now? B: They have made great {{BLANK}}, and most of them can now create spreadsheets, write professional emails, and prepare simple charts for our monthly reports without asking the senior staff for help.",
    "cn": "A：新員工開始電腦訓練已經三個月了，他們現在表現得怎麼樣？ B：他們有很大的【進步】，大部分人現在都能製作試算表、撰寫專業的電子郵件，並為我們的月報準備簡單的圖表，不必向資深員工求助。"
  },
  {
    "word": "effort",
    "pos": "n.",
    "cn_def": "努力；盡力",
    "en_def": "the physical or mental energy you use to do something",
    "sentence": "A: Did you hear that Linda's team finally won the national award for the best customer service this year? B: Yes, and it was the result of their hard {{BLANK}}, because they stayed late many nights, called every unhappy customer personally, and changed the way they handled complaints.",
    "cn": "A：你有聽說琳達的團隊今年終於贏得全國最佳顧客服務獎嗎？ B：有啊，那是他們辛苦【努力】的成果，因為他們好多個晚上都留下來加班，親自打電話給每一位不滿意的顧客，並改變了他們處理投訴的方式。"
  },
  {
    "word": "discipline",
    "pos": "n.",
    "cn_def": "紀律；自律",
    "en_def": "the ability to control yourself and follow rules or a plan",
    "sentence": "A: How does Daniel manage to study for his accounting exam every night after working such long hours at the bank? B: He has great {{BLANK}}, because he turns off his phone, studies for exactly one hour after dinner, and never skips a day, even when he feels tired or his friends invite him out.",
    "cn": "A：丹尼爾在銀行工作那麼長的時間之後，怎麼還能每天晚上準備他的會計考試？ B：他非常有【自律】，因為他會關掉手機，晚餐後剛好讀一個小時的書，而且從不跳過任何一天，即使他覺得累或朋友約他出去也一樣。"
  },
  {
    "word": "strength",
    "pos": "n.",
    "cn_def": "力量；體力；優點",
    "en_def": "the quality of being physically or mentally strong",
    "sentence": "A: The delivery job at the furniture store sounds interesting, but what kind of person are they looking for? B: You will need good physical {{BLANK}}, because you have to carry heavy sofas and tables up the stairs of old apartment buildings, and you will work with one partner for about eight hours a day.",
    "cn": "A：家具店的送貨工作聽起來很有趣，但他們在找什麼樣的人？ B：你需要有良好的【體力】，因為你必須把沉重的沙發和桌子搬上老舊公寓的樓梯，而且你一天會和一位搭檔一起工作大約八個小時。"
  },
  {
    "word": "endurance",
    "pos": "n.",
    "cn_def": "耐力；忍耐力",
    "en_def": "the ability to continue doing something difficult or tiring for a long time",
    "sentence": "A: Why does the hiking company ask all new tour guides to run ten kilometers before they can lead groups in the mountains? B: The trails are long and steep, so the guides need great {{BLANK}} to walk for eight hours, carry first-aid equipment, and still have enough energy to help tired visitors.",
    "cn": "A：為什麼這家健行公司要求所有新導遊在帶團上山之前先跑十公里？ B：步道又長又陡，所以導遊需要很強的【耐力】，才能走八個小時、攜帶急救設備，而且還有足夠的體力幫助疲累的遊客。"
  },
  {
    "word": "flexibility",
    "pos": "n.",
    "cn_def": "彈性；柔軟度；靈活性",
    "en_def": "the ability to change or bend easily; being able to adjust to new situations",
    "sentence": "A: Why do so many young workers want to join that small design company even though the salary isn't very high? B: They love the {{BLANK}} of the job, because employees can choose their own working hours, work from home twice a week, and take a day off whenever their projects are finished early.",
    "cn": "A：為什麼這麼多年輕員工想加入那家小型設計公司，即使薪水不是很高？ B：他們喜歡這份工作的【彈性】，因為員工可以自己選擇工作時間、每週在家工作兩次，而且只要專案提早完成就能休一天假。"
  },
  {
    "word": "balance",
    "pos": "n.",
    "cn_def": "平衡",
    "en_def": "a state in which different things have equal or suitable amounts",
    "sentence": "A: You used to work until ten o'clock every night, so why do you always leave the office at six these days? B: I realized I needed a better {{BLANK}} between work and family, so now I finish my tasks earlier, have dinner with my children, and check only urgent emails after they go to bed.",
    "cn": "A：你以前每天晚上都工作到十點，為什麼最近總是六點就離開辦公室？ B：我發現我需要在工作和家庭之間取得更好的【平衡】，所以現在我會早點完成工作、和孩子們一起吃晚餐，並在他們睡覺後只查看緊急的電子郵件。"
  },
  {
    "word": "feedback",
    "pos": "n.",
    "cn_def": "回饋；意見",
    "en_def": "comments or opinions about how well someone or something has done",
    "sentence": "A: We have just finished testing the new mobile app with fifty customers, so what should we do before launching it next month? B: Let's read all their {{BLANK}} carefully this week, especially the comments about the payment page, and then ask the designers to fix the problems that customers mentioned most often.",
    "cn": "A：我們剛和五十位顧客完成新手機應用程式的測試，下個月推出之前我們應該做什麼？ B：我們這週仔細閱讀他們所有的【意見回饋】，特別是關於付款頁面的評論，然後請設計師修正顧客最常提到的問題。"
  },
  {
    "word": "evaluation",
    "pos": "n.",
    "cn_def": "評估；考核",
    "en_def": "the act of judging how good or useful someone or something is",
    "sentence": "A: Why does everyone in the marketing department look so nervous this week, and why are they working so late? B: Their yearly {{BLANK}} with the director is on Friday, and she will look at each person's results, discuss their strengths and weaknesses, and decide who will get a pay raise next year.",
    "cn": "A：為什麼行銷部門的每個人這週看起來都這麼緊張，而且工作到那麼晚？ B：他們和總監的年度【考核】在星期五，她會檢視每個人的成果、討論他們的優缺點，並決定誰明年能加薪。"
  },
  {
    "word": "goal",
    "pos": "n.",
    "cn_def": "目標",
    "en_def": "something that you want to achieve",
    "sentence": "A: What did the manager say about our sales targets during the meeting this morning, since I missed it because of traffic? B: She said our main {{BLANK}} for this quarter is to find twenty new business customers, and the team that reaches it first will win a weekend trip to Hualien.",
    "cn": "A：既然我因為塞車錯過了，經理今天早上在會議上對我們的銷售指標說了什麼？ B：她說我們這一季的主要【目標】是找到二十位新的企業客戶，而最先達成的團隊將贏得花蓮週末之旅。"
  },
  {
    "word": "achievement",
    "pos": "n.",
    "cn_def": "成就；成績",
    "en_def": "something good that you succeed in doing after a lot of work",
    "sentence": "A: Congratulations on finishing the new hospital building three weeks ahead of schedule and under budget! B: Thank you, it was a big {{BLANK}} for our whole construction team, because heavy rain stopped our work for many days, and we still completed every floor safely without any serious accidents.",
    "cn": "A：恭喜你們比預定時間提早三週完成新醫院大樓，而且沒有超出預算！ B：謝謝，這對我們整個施工團隊來說是一項重大的【成就】，因為大雨讓我們停工了好多天，而我們還是安全地完成每一層樓，沒有發生任何嚴重的事故。"
  },
  {
    "word": "certificate",
    "pos": "n.",
    "cn_def": "證書；證明",
    "en_def": "an official document that proves you have finished a course or have a skill",
    "sentence": "A: The job ad for the hotel receptionist says applicants should have first-aid training, so what should I bring to the interview? B: Bring the {{BLANK}} you received after finishing the Red Cross course last summer, along with your résumé and a copy of your English test score, so the manager can see your qualifications.",
    "cn": "A：飯店櫃台接待員的徵才廣告說應徵者應該受過急救訓練，那我面試時應該帶什麼？ B：帶你去年夏天完成紅十字會課程後拿到的【證書】，連同你的履歷和英文測驗成績的影本，讓經理看到你的資格。"
  }
];

const MCQS = [
  {
    "q": "Playing the piano well takes years of daily _____. Ms Chen asks her students to repeat each song at home for an hour.",
    "options": [
      "practice",
      "permission",
      "decision",
      "location"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The soccer team has improved since the new _____ arrived in May. He trains the players three times a week and plans every match.",
    "options": [
      "tenant",
      "cashier",
      "coach",
      "landlord"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Speaking two languages is a valuable _____ in the tourism industry. Hotels often pay bilingual staff a higher salary.",
    "options": [
      "fee",
      "skill",
      "damage",
      "delay"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Doctors recommend at least thirty minutes of _____ every day. Walking to work or using the stairs can help you stay healthy.",
    "options": [
      "invoice",
      "traffic",
      "furniture",
      "exercise"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Checking emails first thing every morning is part of my daily _____. After that, I review the schedule for the day.",
    "options": [
      "refund",
      "routine",
      "warranty",
      "receipt"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "All staff must leave the building during the fire _____ at ten o'clock. Please use the stairs instead of the elevators.",
    "options": [
      "drill",
      "tax",
      "fare",
      "rent"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Mark is taking a cooking _____ every Saturday morning. The chef teaches the class how to make one new dish each week.",
    "options": [
      "receipt",
      "budget",
      "invoice",
      "lesson"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The company will pay for any employee who takes an online accounting _____. Interested staff should sign up by the end of March.",
    "options": [
      "shelf",
      "parcel",
      "course",
      "tenant"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Participants in the two-hour _____ will build a simple website with the help of experts. Please bring your own laptop to the session.",
    "options": [
      "workshop",
      "warehouse",
      "mailbox",
      "garage"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Dr Wang will lead a _____ on global trade at the convention center. About two hundred business leaders are expected to attend.",
    "options": [
      "salary",
      "seminar",
      "receipt",
      "pension"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Our yoga _____ always shows each position slowly before we try it. She also walks around the room to correct our mistakes.",
    "options": [
      "landlord",
      "accountant",
      "plumber",
      "instructor"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "At the trade fair, our engineers will _____ how the new vacuum cleaner works. Visitors can then try the machine themselves.",
    "options": [
      "demonstrate",
      "borrow",
      "apologize",
      "owe"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The hotel hired more cleaners to _____ the quality of its rooms. Guests had complained about dirty towels and dusty floors.",
    "options": [
      "borrow",
      "delay",
      "improve",
      "refuse"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The training program helps new managers _____ the leadership skills they need. It includes role-plays, group projects, and coaching sessions.",
    "options": [
      "cancel",
      "rent",
      "deliver",
      "develop"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Experienced staff will _____ the new interns how to use the cash register. The training starts at nine o'clock on Monday.",
    "options": [
      "borrow",
      "teach",
      "rent",
      "apply"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Please _____ a short report on last month's sales before the meeting. The director wants to see the figures for each region.",
    "options": [
      "refuse",
      "owe",
      "prepare",
      "attend"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Turning off your phone helps you _____ on your work. Many employees finish their tasks faster when they are not interrupted.",
    "options": [
      "focus",
      "borrow",
      "deliver",
      "hire"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Opening a new store in a foreign country is a big _____ for any small business. The owners must learn local laws and customs quickly.",
    "options": [
      "receipt",
      "invoice",
      "discount",
      "challenge"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The construction team has made good _____ on the new bridge this month. It should open to traffic before the end of the year.",
    "options": [
      "luggage",
      "progress",
      "furniture",
      "receipt"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Thanks to everyone's hard _____, the project was completed on time. The manager bought lunch for the whole team to say thank you.",
    "options": [
      "luggage",
      "weather",
      "effort",
      "price"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Working from home requires strong self-control and _____. Without a clear schedule, many people find it hard to finish their tasks.",
    "options": [
      "luggage",
      "scenery",
      "postage",
      "discipline"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The warehouse job requires physical _____ because workers lift heavy boxes all day. Applicants must be able to carry twenty kilograms.",
    "options": [
      "strength",
      "weather",
      "decoration",
      "scenery"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Marathon runners need great _____ to keep going for more than forty kilometers. They train for months to build up their energy.",
    "options": [
      "attendance",
      "insurance",
      "endurance",
      "appearance"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Many workers prefer jobs that offer _____ in their working hours. Being able to start later helps parents take their children to school.",
    "options": [
      "pollution",
      "flexibility",
      "shortage",
      "emergency"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Taking regular vacations helps employees keep a healthy _____ between work and personal life. Tired workers often make more mistakes.",
    "options": [
      "balance",
      "receipt",
      "salary",
      "profit"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "After each training session, participants are asked to give _____ on a short form. Their comments help us improve future programs.",
    "options": [
      "luggage",
      "furniture",
      "equipment",
      "feedback"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Every employee receives a performance _____ at the end of the year. The results help managers decide who will be promoted.",
    "options": [
      "reservation",
      "destination",
      "evaluation",
      "decoration"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Our sales _____ for this quarter is to increase revenue by ten percent. Every team member will receive a bonus if we reach it.",
    "options": [
      "counter",
      "goal",
      "clerk",
      "floor"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "Winning the national design award was a great _____ for our small studio. The whole team celebrated with a dinner at a famous restaurant.",
    "options": [
      "complaint",
      "shortage",
      "delay",
      "achievement"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "Participants who complete all five training sessions will receive a _____. They can show it to employers as proof of their new skills.",
    "options": [
      "certificate",
      "complaint",
      "penalty",
      "shortage"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "practice": {
    "pos": "n.",
    "en_def": "doing something again and again to get better at it",
    "cn_def": "練習；實踐"
  },
  "coach": {
    "pos": "n.",
    "en_def": "a person who trains a sports team or helps someone improve a skill",
    "cn_def": "教練"
  },
  "trainer": {
    "pos": "n.",
    "en_def": "a person whose job is to teach skills to workers or athletes",
    "cn_def": "培訓師；訓練員"
  },
  "skill": {
    "pos": "n.",
    "en_def": "an ability to do something well because you have learned and practiced it",
    "cn_def": "技能；技巧"
  },
  "exercise": {
    "pos": "n.",
    "en_def": "physical activity that you do to stay healthy or to train a skill",
    "cn_def": "運動；練習"
  },
  "routine": {
    "pos": "n.",
    "en_def": "the usual order and way in which you regularly do things",
    "cn_def": "例行公事；慣例"
  },
  "drill": {
    "pos": "n.",
    "en_def": "a practice of what to do in an emergency, or a training activity that is repeated",
    "cn_def": "演習；操練"
  },
  "instruction": {
    "pos": "n.",
    "en_def": "information that tells you how to do something",
    "cn_def": "指示；說明"
  },
  "lesson": {
    "pos": "n.",
    "en_def": "a period of time in which someone is taught something",
    "cn_def": "課；一堂課"
  },
  "course": {
    "pos": "n.",
    "en_def": "a series of classes on a particular subject",
    "cn_def": "課程"
  },
  "workshop": {
    "pos": "n.",
    "en_def": "a meeting where people learn about a subject by doing practical activities together",
    "cn_def": "工作坊；研習會"
  },
  "seminar": {
    "pos": "n.",
    "en_def": "a meeting for discussion or training on a particular subject",
    "cn_def": "研討會；專題討論會"
  },
  "instructor": {
    "pos": "n.",
    "en_def": "a person who teaches a practical skill or a class",
    "cn_def": "教練；講師；指導員"
  },
  "guide": {
    "pos": "n.",
    "en_def": "a person who shows the way or explains things to others; also a book of helpful information",
    "cn_def": "嚮導；導遊；指南"
  },
  "demonstrate": {
    "pos": "v.",
    "en_def": "to show how something works or how to do something",
    "cn_def": "示範；展示"
  },
  "improve": {
    "pos": "v.",
    "en_def": "to make something better, or to become better",
    "cn_def": "改善；改進；進步"
  },
  "develop": {
    "pos": "v.",
    "en_def": "to grow, or to make something grow and become stronger or more advanced",
    "cn_def": "培養；發展；開發"
  },
  "learn": {
    "pos": "v.",
    "en_def": "to get knowledge or a skill by studying, practicing or being taught",
    "cn_def": "學習；學會"
  },
  "teach": {
    "pos": "v.",
    "en_def": "to show or explain to someone how to do something",
    "cn_def": "教；教導"
  },
  "prepare": {
    "pos": "v.",
    "en_def": "to make something or someone ready for an event or activity",
    "cn_def": "準備"
  },
  "focus": {
    "pos": "v.",
    "en_def": "to give all your attention to one thing",
    "cn_def": "專注；集中注意力"
  },
  "challenge": {
    "pos": "n.",
    "en_def": "something new and difficult that tests your ability",
    "cn_def": "挑戰"
  },
  "progress": {
    "pos": "n.",
    "en_def": "the process of improving or moving forward toward a goal",
    "cn_def": "進步；進展"
  },
  "effort": {
    "pos": "n.",
    "en_def": "the physical or mental energy you use to do something",
    "cn_def": "努力；盡力"
  },
  "discipline": {
    "pos": "n.",
    "en_def": "the ability to control yourself and follow rules or a plan",
    "cn_def": "紀律；自律"
  },
  "strength": {
    "pos": "n.",
    "en_def": "the quality of being physically or mentally strong",
    "cn_def": "力量；體力；優點"
  },
  "endurance": {
    "pos": "n.",
    "en_def": "the ability to continue doing something difficult or tiring for a long time",
    "cn_def": "耐力；忍耐力"
  },
  "flexibility": {
    "pos": "n.",
    "en_def": "the ability to change or bend easily; being able to adjust to new situations",
    "cn_def": "彈性；柔軟度；靈活性"
  },
  "balance": {
    "pos": "n.",
    "en_def": "a state in which different things have equal or suitable amounts",
    "cn_def": "平衡"
  },
  "feedback": {
    "pos": "n.",
    "en_def": "comments or opinions about how well someone or something has done",
    "cn_def": "回饋；意見"
  },
  "evaluation": {
    "pos": "n.",
    "en_def": "the act of judging how good or useful someone or something is",
    "cn_def": "評估；考核"
  },
  "goal": {
    "pos": "n.",
    "en_def": "something that you want to achieve",
    "cn_def": "目標"
  },
  "achievement": {
    "pos": "n.",
    "en_def": "something good that you succeed in doing after a lot of work",
    "cn_def": "成就；成績"
  },
  "certificate": {
    "pos": "n.",
    "en_def": "an official document that proves you have finished a course or have a skill",
    "cn_def": "證書；證明"
  }
};

const EXTRA_GLOSSES = {};
