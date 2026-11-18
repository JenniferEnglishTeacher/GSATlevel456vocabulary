// Topic 398 Quiz Data: Technology 科技
// Source word list: https://www.examword.com/group-topic/technology — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T398 - Technology 科技",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "computer age",
    "pos": "n.phr.",
    "cn_def": "電腦時代",
    "en_def": "the period in history when computers are widely used",
    "sentence": "A: Why does our library still keep so many old paper catalogs in the basement when almost everyone searches for books online now? B: The director wants to show visiting students how researchers worked before the {{BLANK}} began, so she is planning a small exhibition about the history of information next month.",
    "cn": "A：既然現在幾乎每個人都在網上查書，為什麼我們圖書館的地下室還保留這麼多舊的紙本目錄？ B：館長想讓來參觀的學生看看在【電腦時代】開始之前研究人員是怎麼工作的，所以她打算下個月辦一個關於資訊歷史的小型展覽。"
  },
  {
    "word": "cutting-edge",
    "pos": "adj.",
    "cn_def": "尖端的；最先進的",
    "en_def": "very new and the most advanced",
    "sentence": "A: What made you choose this hospital for your knee surgery instead of the one closer to your apartment? B: My doctor told me that the surgeons here use {{BLANK}} equipment that allows them to make smaller cuts, so patients usually recover faster and can return to work within two weeks.",
    "cn": "A：你為什麼選這家醫院做膝蓋手術，而不是離你公寓比較近的那家？ B：我的醫生告訴我，這裡的外科醫師使用【最先進的】設備，可以讓切口更小，所以病人通常恢復得比較快，兩週內就能回去上班。"
  },
  {
    "word": "desktop PC",
    "pos": "n.phr.",
    "cn_def": "桌上型電腦",
    "en_def": "a personal computer made to stay on a desk",
    "sentence": "A: Do you think I should buy a laptop or something bigger for the graphic design work I will be doing at home? B: If you rarely travel, a {{BLANK}} is probably a better choice because it gives you a larger screen and more power for the same price, and it is easier to repair later.",
    "cn": "A：你覺得我在家做平面設計工作，應該買筆電還是大一點的電腦？ B：如果你很少出差，【桌上型電腦】可能是比較好的選擇，因為同樣的價錢它有更大的螢幕和更強的效能，而且以後也比較容易維修。"
  },
  {
    "word": "download",
    "pos": "v.",
    "cn_def": "下載",
    "en_def": "to copy files or programs from the internet onto a computer or phone",
    "sentence": "A: I am flying to Tokyo tomorrow morning for the trade show, but I heard the airplane will not have internet access during the flight. B: In that case, you should {{BLANK}} the presentation slides and the client contracts tonight, so you can review them on your tablet while you are in the air.",
    "cn": "A：我明天早上要飛東京參加商展，但聽說飛機上在飛行期間沒有網路。 B：既然這樣，你今晚就應該把簡報投影片和客戶合約【下載】下來，這樣你在飛機上就可以用平板複習。"
  },
  {
    "word": "essential",
    "pos": "adj.",
    "cn_def": "必要的；不可或缺的",
    "en_def": "extremely important and necessary",
    "sentence": "A: Our new employees keep asking which software they actually need to learn during their first week at the company. B: Tell them that the email system and the shared calendar are {{BLANK}}, because every department uses them to schedule meetings, but the other programs can wait until their managers give them specific projects.",
    "cn": "A：我們的新員工一直在問，他們進公司第一週到底需要學哪些軟體。 B：告訴他們電子郵件系統和共用行事曆是【必要的】，因為每個部門都用它們來安排會議，但其他程式可以等到主管給他們具體專案時再學。"
  },
  {
    "word": "gadget",
    "pos": "n.",
    "cn_def": "小型電子裝置；小工具",
    "en_def": "a small, clever device or tool",
    "sentence": "A: What are you planning to give your father for his birthday, since he already owns almost everything he needs? B: I found a small kitchen {{BLANK}} that connects to his phone and tells him when the meat is cooked, which is perfect because he loves cooking for the whole family on weekends.",
    "cn": "A：你爸爸幾乎什麼都有了，你打算送他什麼生日禮物？ B：我找到一個小巧的廚房【小裝置】，可以連接他的手機並告訴他肉什麼時候熟了，這再適合不過了，因為他週末很喜歡為全家人下廚。"
  },
  {
    "word": "hold the line",
    "pos": "v.phr.",
    "cn_def": "（電話中）稍候別掛斷",
    "en_def": "to wait on the telephone without hanging up",
    "sentence": "A: Hello, I am calling about the order I placed last Friday, because the package still has not arrived at our office. B: I am sorry about the delay; could you please {{BLANK}} for a moment while I check the delivery record with our warehouse team in Kaohsiung?",
    "cn": "A：你好，我打來是關於上週五下的訂單，因為包裹到現在還沒送到我們辦公室。 B：很抱歉延誤了；可以請您【稍候別掛斷】一下嗎？我向我們高雄的倉庫團隊查一下配送紀錄。"
  },
  {
    "word": "operating system",
    "pos": "n.phr.",
    "cn_def": "作業系統",
    "en_def": "the main software that controls how a computer works",
    "sentence": "A: Why did the IT department ask everyone to leave their computers turned on before going home this evening? B: They are installing a new version of the {{BLANK}} overnight, which should fix the security problems we had last month and make the older machines in the accounting office run a little faster.",
    "cn": "A：資訊部門為什麼要求大家今晚下班前讓電腦保持開機？ B：他們今晚要安裝新版的【作業系統】，應該能修正我們上個月遇到的安全問題，也能讓會計室裡比較舊的電腦跑得快一點。"
  },
  {
    "word": "rocket science",
    "pos": "n.phr.",
    "cn_def": "非常困難的事（常用於否定）",
    "en_def": "something very difficult to understand (often in \"it's not rocket science\")",
    "sentence": "A: I am a little nervous about using the new online booking system for our customers, because I have never worked with anything like it. B: Don't worry, it isn't {{BLANK}}; you just choose a date, enter the customer's name and phone number, and the program sends them a confirmation message automatically.",
    "cn": "A：我對於幫客戶使用新的線上訂位系統有點緊張，因為我從來沒用過類似的東西。 B：別擔心，這又不是什麼【艱深的難事】；你只要選日期、輸入客戶的姓名和電話號碼，程式就會自動寄確認訊息給他們。"
  },
  {
    "word": "back up",
    "pos": "v.phr.",
    "cn_def": "備份（檔案）",
    "en_def": "to make an extra copy of computer files in case the originals are lost",
    "sentence": "A: My laptop suddenly stopped working this morning, and I am worried that I have lost all the sales reports for this quarter. B: That is exactly why the manager reminds us to {{BLANK}} our files to the company cloud every Friday afternoon, so let's check whether your latest reports are saved there.",
    "cn": "A：我的筆電今天早上突然壞了，我擔心這一季的銷售報告全都不見了。 B：這正是經理提醒我們每週五下午要把檔案【備份】到公司雲端的原因，我們來看看你最新的報告有沒有存在那裡。"
  },
  {
    "word": "boot up",
    "pos": "v.phr.",
    "cn_def": "開機；啟動（電腦）",
    "en_def": "to start a computer so that it is ready to use",
    "sentence": "A: Why are you always the first person to arrive at the office, even though the meetings never start before nine? B: My old computer takes almost ten minutes to {{BLANK}} every morning, so I come in early to turn it on and make a cup of coffee while I wait.",
    "cn": "A：會議從來不會在九點前開始，為什麼你總是第一個到辦公室？ B：我的舊電腦每天早上要花將近十分鐘才能【開機】，所以我提早來把它打開，等待的時候順便泡杯咖啡。"
  },
  {
    "word": "browse websites",
    "pos": "v.phr.",
    "cn_def": "瀏覽網站",
    "en_def": "to look at different websites in a relaxed way",
    "sentence": "A: How did you find such a cheap hotel near the convention center when every place I checked was already fully booked? B: Whenever I travel for work, I {{BLANK}} that compare prices from different booking companies, and one of them showed a special discount for guests who stay at least three nights.",
    "cn": "A：我查的每個地方都已經客滿了，你是怎麼在會展中心附近找到這麼便宜的飯店？ B：每次出差，我都會【瀏覽網站】比較各家訂房公司的價格，其中一個顯示住滿三晚的房客有特別折扣。"
  },
  {
    "word": "crash",
    "pos": "v.",
    "cn_def": "當機；（程式）崩潰",
    "en_def": "(of a computer or program) to suddenly stop working",
    "sentence": "A: Why did you send the monthly budget to the director so late yesterday when you had finished it before lunch? B: The spreadsheet program would {{BLANK}} every time I added the large charts, so I had to restart my computer three times and rebuild some of the tables from the beginning.",
    "cn": "A：你昨天午餐前就做完了月度預算，為什麼那麼晚才寄給主任？ B：每次我加入大型圖表，試算表程式就會【當機】，所以我必須重開電腦三次，還得從頭重做一些表格。"
  },
  {
    "word": "go online",
    "pos": "v.phr.",
    "cn_def": "上網；連上網路",
    "en_def": "to connect to the internet",
    "sentence": "A: Is there anything I need to do before the video interview with the client in Singapore starts at three o'clock? B: Please {{BLANK}} about fifteen minutes early to test your camera and microphone, because the connection in the small meeting room is sometimes slow when many people are using it.",
    "cn": "A：在三點和新加坡客戶的視訊面談開始前，我有什麼需要做的嗎？ B：請提早大約十五分鐘【上網】測試你的鏡頭和麥克風，因為很多人同時使用時，小會議室的網路有時候會很慢。"
  },
  {
    "word": "navigate",
    "pos": "v.",
    "cn_def": "找到路；操作（系統、程式）",
    "en_def": "to find your way around a place, system or program",
    "sentence": "A: Have the new interns had any trouble learning how to use our company's internal database since they joined last week? B: At first they found it confusing, but after Mr. Lin showed them a few shortcuts, they could {{BLANK}} the different sections easily and find customer records in less than a minute.",
    "cn": "A：新來的實習生上週加入後，學習使用公司內部資料庫有遇到困難嗎？ B：一開始他們覺得很混亂，但林先生教了他們幾個快捷鍵之後，他們就能輕鬆【操作】各個區塊，不到一分鐘就找到客戶資料。"
  },
  {
    "word": "navigate a website",
    "pos": "v.phr.",
    "cn_def": "在網站中瀏覽找資訊",
    "en_def": "to move around the pages of a website to find information",
    "sentence": "A: Why did so many customers call our service center last month instead of ordering products online by themselves? B: Our survey showed that older customers found it hard to {{BLANK}} with so many pop-up windows and small buttons, so the design team is now making the pages simpler and clearer.",
    "cn": "A：上個月為什麼有這麼多客戶打電話到服務中心，而不是自己上網訂購產品？ B：我們的調查顯示，年長的客戶覺得在有這麼多彈出視窗和小按鈕的情況下很難【在網站上瀏覽找資訊】，所以設計團隊現在正在讓頁面更簡單、更清楚。"
  },
  {
    "word": "pull the plug",
    "pos": "v.phr.",
    "cn_def": "喊停；中止（計畫）",
    "en_def": "to stop a project or activity, usually by ending its money or support",
    "sentence": "A: What happened to the mobile game that your team was developing for the children's education market? B: After the test version received poor reviews and the costs kept rising, the board decided to {{BLANK}} on the project, so most of us have been moved to the new shopping app instead.",
    "cn": "A：你們團隊為兒童教育市場開發的手機遊戲後來怎麼了？ B：測試版評價很差，成本又一直上升，董事會決定【喊停】這個專案，所以我們大多數人都被調去做新的購物應用程式了。"
  },
  {
    "word": "surf the web",
    "pos": "v.phr.",
    "cn_def": "上網瀏覽",
    "en_def": "to spend time looking at different things on the internet",
    "sentence": "A: What do you usually do in the evening after you finish working and have dinner with your family? B: I often {{BLANK}} for an hour to read news about the travel industry, because I want to know which places are becoming popular before I plan the next tour packages for our agency.",
    "cn": "A：你下班和家人吃完晚餐後，晚上通常做什麼？ B：我常常【上網瀏覽】一個小時，看看旅遊業的新聞，因為在幫我們旅行社規劃下一批套裝行程之前，我想知道哪些地方正變得熱門。"
  },
  {
    "word": "upgrade",
    "pos": "v.",
    "cn_def": "升級",
    "en_def": "to improve something, especially by replacing it with a newer or better version",
    "sentence": "A: Our online store has been very slow during the holiday sales, and many customers have complained that the payment page keeps freezing. B: We should {{BLANK}} our server before the New Year promotion starts, because the current one cannot handle so many visitors shopping at the same time.",
    "cn": "A：我們的網路商店在假期特賣期間非常慢，很多客戶抱怨付款頁面一直卡住。 B：我們應該在新年促銷開始前把伺服器【升級】，因為現在這台無法同時應付這麼多購物的訪客。"
  },
  {
    "word": "well-oiled",
    "pos": "adj.",
    "cn_def": "運作順暢的",
    "en_def": "working smoothly and effectively (often in \"a well-oiled machine\")",
    "sentence": "A: How does the restaurant manage to serve over three hundred guests every night without making customers wait too long? B: The kitchen staff have worked together for years, so the whole team runs like a {{BLANK}} machine, with each cook knowing exactly which dishes to prepare and when to send them out.",
    "cn": "A：這家餐廳是怎麼做到每晚服務三百多位客人，又不讓客人等太久的？ B：廚房員工已經一起工作好幾年了，所以整個團隊像一台【運作順暢的】機器，每位廚師都清楚知道要準備哪些菜、什麼時候出菜。"
  },
  {
    "word": "silver surfer",
    "pos": "n.phr.",
    "cn_def": "銀髮網友（常上網的長者）",
    "en_def": "an older person who uses the internet regularly",
    "sentence": "A: Is your grandmother still asking you to help her every time she wants to pay her bills or talk to her friends? B: Not anymore; after taking a free computer class at the community center, she has become a real {{BLANK}} who shops online, joins video calls, and even posts photos of her garden.",
    "cn": "A：你奶奶還是每次要繳帳單或和朋友聊天都請你幫忙嗎？ B：不會了；在社區中心上過免費電腦課之後，她已經成為真正的【銀髮網友】，會上網購物、參加視訊通話，甚至還會貼她花園的照片。"
  },
  {
    "word": "techie",
    "pos": "n.",
    "cn_def": "科技通；技術人員",
    "en_def": "a person who knows a lot about technology and enjoys it",
    "sentence": "A: Who should I ask for help setting up the projector and the sound system for tomorrow's training session in the main hall? B: Talk to Kevin from the marketing team; he is a real {{BLANK}} who builds his own computers at home, and he has fixed almost every machine in this office at least once.",
    "cn": "A：明天在大廳的培訓課程要架設投影機和音響，我應該找誰幫忙？ B：去找行銷部的凱文；他是個道地的【科技通】，在家自己組電腦，這間辦公室幾乎每台機器他都至少修過一次。"
  },
  {
    "word": "virtual friend",
    "pos": "n.phr.",
    "cn_def": "網友",
    "en_def": "a friend you know only through the internet",
    "sentence": "A: How did you get the idea to open a small café that sells only coffee beans from Central America? B: A {{BLANK}} I met in an online coffee forum several years ago runs a farm in Guatemala, and after chatting for months, we finally decided to start a business together.",
    "cn": "A：你怎麼會想到開一家只賣中美洲咖啡豆的小咖啡館？ B：幾年前我在一個線上咖啡論壇認識的一位【網友】在瓜地馬拉經營農場，我們聊了好幾個月之後，終於決定一起創業。"
  },
  {
    "word": "detrimental",
    "pos": "adj.",
    "cn_def": "有害的；不利的",
    "en_def": "harmful; causing damage",
    "sentence": "A: Why has the company decided to block social media apps on our work computers starting next Monday? B: The managers believe that spending so much time on those apps is {{BLANK}} to our productivity, especially in the customer service department, where several important emails were not answered on time last month.",
    "cn": "A：公司為什麼決定從下週一開始封鎖工作電腦上的社群媒體應用程式？ B：主管們認為花那麼多時間在那些應用程式上對我們的生產力【有害】，尤其是客服部門，上個月有好幾封重要郵件都沒有準時回覆。"
  },
  {
    "word": "excessively",
    "pos": "adv.",
    "cn_def": "過度地",
    "en_def": "too much; more than is reasonable",
    "sentence": "A: Why did the doctor tell you to take a break from your phone and computer for a few days? B: She said my eyes were tired and dry because I had been using screens {{BLANK}} at work and at home, sometimes for more than twelve hours a day without resting.",
    "cn": "A：醫生為什麼叫你這幾天暫停使用手機和電腦？ B：她說我的眼睛又累又乾，因為我在公司和家裡都【過度地】使用螢幕，有時一天超過十二小時都沒休息。"
  },
  {
    "word": "undeniable",
    "pos": "adj.",
    "cn_def": "不可否認的",
    "en_def": "certainly true; impossible to deny",
    "sentence": "A: Do you really think our small bookstore needs to start selling e-books and offering online orders? B: Yes, because it is {{BLANK}} that more young readers are buying books on their phones, and if we do not change soon, we will lose many customers to the large online shops.",
    "cn": "A：你真的認為我們的小書店需要開始賣電子書並提供線上訂購嗎？ B：是的，因為越來越多年輕讀者用手機買書是【不可否認的】，如果我們不盡快改變，就會把很多客人輸給大型網路書店。"
  },
  {
    "word": "scroll",
    "pos": "v.",
    "cn_def": "捲動（螢幕）；滑",
    "en_def": "to move text or pictures up or down on a screen",
    "sentence": "A: I cannot find the section about the travel allowance in the employee handbook that HR sent us this morning. B: You need to {{BLANK}} down to the bottom of the document, because it is listed in the last chapter, right after the rules about working from home and taking sick leave.",
    "cn": "A：我在人資今天早上寄來的員工手冊裡找不到差旅津貼那一節。 B：你要往下【捲動】到文件最底部，因為它列在最後一章，就在居家工作和請病假的規定後面。"
  },
  {
    "word": "browse",
    "pos": "v.",
    "cn_def": "隨意瀏覽；隨便看看",
    "en_def": "to look through things casually, without a clear plan to buy",
    "sentence": "A: May I help you find anything in particular today, or are you looking for a gift for someone special? B: Thank you, but I would just like to {{BLANK}} for a few minutes, because I am not sure yet which kind of headphones my son would prefer for his long train rides to school.",
    "cn": "A：今天有什麼特別需要我幫您找的嗎？還是您在找要送給特別的人的禮物？ B：謝謝，不過我只想先【隨便看看】幾分鐘，因為我還不確定我兒子搭長途火車上學時會比較喜歡哪種耳機。"
  },
  {
    "word": "indifferent",
    "pos": "adj.",
    "cn_def": "漠不關心的；不感興趣的",
    "en_def": "not interested in something and not caring about it",
    "sentence": "A: Why did the sales team decide to change the design of our new smartwatch advertisement so close to the launch date? B: The first version tested poorly because most young viewers were {{BLANK}} to its technical details, so we decided to focus on fun features like fitness tracking and colorful bands instead.",
    "cn": "A：業務團隊為什麼在快要上市時決定更改新智慧手錶廣告的設計？ B：第一版測試結果很差，因為大多數年輕觀眾對其中的技術細節【不感興趣】，所以我們決定改為強調健身追蹤和彩色錶帶等有趣的功能。"
  }
];

const MCQS = [
  {
    "q": "Many traditional bookstores struggled to survive in the _____. Customers began ordering books online instead of visiting shops.",
    "options": [
      "computer age",
      "rocket science",
      "silver surfer",
      "operating system"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The laboratory recently purchased _____ equipment for its cancer research. The new machines can analyze samples twice as fast.",
    "options": [
      "indifferent",
      "cutting-edge",
      "detrimental",
      "undeniable"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Our designer prefers working on a _____ at the office. Its large screen makes editing photos much easier.",
    "options": [
      "silver surfer",
      "rocket science",
      "desktop PC",
      "virtual friend"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Passengers can _____ the airline's free app before their trip. It allows them to check in and choose seats.",
    "options": [
      "crash",
      "scroll",
      "navigate",
      "download"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "A reliable internet connection is _____ for employees who work from home. Without it, they cannot join online meetings.",
    "options": [
      "essential",
      "indifferent",
      "well-oiled",
      "cutting-edge"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The electronics store displays its newest _____ near the entrance. Shoppers can test the tiny wireless speaker before buying it.",
    "options": [
      "techie",
      "gadget",
      "computer age",
      "rocket science"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The receptionist asked the caller to _____ while she found the manager. The call was transferred two minutes later.",
    "options": [
      "pull the plug",
      "boot up",
      "hold the line",
      "go online"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The technician installed a new _____ on every laptop last weekend. Staff should restart their computers to complete the update.",
    "options": [
      "computer age",
      "virtual friend",
      "silver surfer",
      "operating system"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Filling out the online expense form is not _____. Most employees finish it in less than five minutes.",
    "options": [
      "rocket science",
      "operating system",
      "desktop PC",
      "computer age"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Remember to _____ your files before the system update tonight. Any unsaved documents may be lost during the process.",
    "options": [
      "boot up",
      "back up",
      "hold the line",
      "pull the plug"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The old printer in the lobby takes several minutes to _____ each morning. Please turn it on before customers arrive.",
    "options": [
      "back up",
      "surf the web",
      "boot up",
      "hold the line"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Before booking a tour, travelers often _____ to read reviews from other customers. Honest comments help them choose reliable agencies.",
    "options": [
      "pull the plug",
      "hold the line",
      "boot up",
      "browse websites"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The ticket website began to _____ when thousands of fans tried to buy concert seats. Many buyers had to wait an hour.",
    "options": [
      "crash",
      "download",
      "scroll",
      "browse"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Hotel guests can _____ for free in the lobby. The password is printed on the back of each room key card.",
    "options": [
      "pull the plug",
      "go online",
      "hold the line",
      "back up"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The new map app helps drivers _____ busy city streets. It also warns them about traffic jams and road repairs.",
    "options": [
      "download",
      "crash",
      "navigate",
      "scroll"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Clear menus make it easier for customers to _____ and find products. Our designers removed unnecessary buttons from the homepage.",
    "options": [
      "hold the line",
      "boot up",
      "pull the plug",
      "navigate a website"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Investors decided to _____ on the expensive shopping mall project. Construction stopped after sales forecasts dropped sharply.",
    "options": [
      "pull the plug",
      "hold the line",
      "surf the web",
      "go online"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "During long train rides, many commuters _____ on their phones. The railway company now offers free wireless internet in every car.",
    "options": [
      "hold the line",
      "surf the web",
      "pull the plug",
      "boot up"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The hotel plans to _____ its booking system next month. Guests will then be able to change reservations online.",
    "options": [
      "crash",
      "scroll",
      "upgrade",
      "browse"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Frequent flyers can _____ to business class by using their reward points. Requests must be made at least two days before departure.",
    "options": [
      "navigate",
      "download",
      "scroll",
      "upgrade"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "After years of practice, the event team works like a _____ machine. Every conference they organize starts and ends on time.",
    "options": [
      "well-oiled",
      "indifferent",
      "detrimental",
      "undeniable"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "My seventy-year-old neighbor has become a true _____. She video-calls her grandchildren and shops online every week.",
    "options": [
      "rocket science",
      "silver surfer",
      "operating system",
      "computer age"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Ask Daniel to fix the projector because he is a real _____. He even builds his own computers at home.",
    "options": [
      "gadget",
      "desktop PC",
      "techie",
      "operating system"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Lisa met her business partner as a _____ in an online design forum. They chatted for a year before meeting in person.",
    "options": [
      "gadget",
      "desktop PC",
      "operating system",
      "virtual friend"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Working long hours without breaks can be _____ to your health. Experts recommend standing up and stretching every hour.",
    "options": [
      "detrimental",
      "well-oiled",
      "cutting-edge",
      "undeniable"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Some children use their tablets _____, sometimes for over six hours a day. Parents should set clear limits on screen time.",
    "options": [
      "politely",
      "excessively",
      "rarely",
      "briefly"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The benefits of online banking are _____ for busy workers. Customers can pay bills at any time without visiting a branch.",
    "options": [
      "indifferent",
      "detrimental",
      "undeniable",
      "well-oiled"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Please _____ down to the bottom of the page to find the contact form. Then enter your name and email address.",
    "options": [
      "crash",
      "download",
      "upgrade",
      "scroll"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Visitors may _____ the gift shop's shelves before the museum closes at six. Members receive a ten percent discount on all books.",
    "options": [
      "browse",
      "crash",
      "upgrade",
      "download"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Many young shoppers seem _____ to the brand name of a phone. They care more about its price and camera quality.",
    "options": [
      "cutting-edge",
      "indifferent",
      "detrimental",
      "well-oiled"
    ],
    "answer": 1,
    "vocabIndex": 28
  }
];

const LOOKUP = {
  "computer age": {
    "pos": "n.phr.",
    "en_def": "the period in history when computers are widely used",
    "cn_def": "電腦時代"
  },
  "cutting-edge": {
    "pos": "adj.",
    "en_def": "very new and the most advanced",
    "cn_def": "尖端的；最先進的"
  },
  "desktop pc": {
    "pos": "n.phr.",
    "en_def": "a personal computer made to stay on a desk",
    "cn_def": "桌上型電腦"
  },
  "download": {
    "pos": "v.",
    "en_def": "to copy files or programs from the internet onto a computer or phone",
    "cn_def": "下載"
  },
  "essential": {
    "pos": "adj.",
    "en_def": "extremely important and necessary",
    "cn_def": "必要的；不可或缺的"
  },
  "gadget": {
    "pos": "n.",
    "en_def": "a small, clever device or tool",
    "cn_def": "小型電子裝置；小工具"
  },
  "hold the line": {
    "pos": "v.phr.",
    "en_def": "to wait on the telephone without hanging up",
    "cn_def": "（電話中）稍候別掛斷"
  },
  "operating system": {
    "pos": "n.phr.",
    "en_def": "the main software that controls how a computer works",
    "cn_def": "作業系統"
  },
  "rocket science": {
    "pos": "n.phr.",
    "en_def": "something very difficult to understand (often in \"it's not rocket science\")",
    "cn_def": "非常困難的事（常用於否定）"
  },
  "back up": {
    "pos": "v.phr.",
    "en_def": "to make an extra copy of computer files in case the originals are lost",
    "cn_def": "備份（檔案）"
  },
  "boot up": {
    "pos": "v.phr.",
    "en_def": "to start a computer so that it is ready to use",
    "cn_def": "開機；啟動（電腦）"
  },
  "browse websites": {
    "pos": "v.phr.",
    "en_def": "to look at different websites in a relaxed way",
    "cn_def": "瀏覽網站"
  },
  "crash": {
    "pos": "v.",
    "en_def": "(of a computer or program) to suddenly stop working",
    "cn_def": "當機；（程式）崩潰"
  },
  "go online": {
    "pos": "v.phr.",
    "en_def": "to connect to the internet",
    "cn_def": "上網；連上網路"
  },
  "navigate": {
    "pos": "v.",
    "en_def": "to find your way around a place, system or program",
    "cn_def": "找到路；操作（系統、程式）"
  },
  "navigate a website": {
    "pos": "v.phr.",
    "en_def": "to move around the pages of a website to find information",
    "cn_def": "在網站中瀏覽找資訊"
  },
  "pull the plug": {
    "pos": "v.phr.",
    "en_def": "to stop a project or activity, usually by ending its money or support",
    "cn_def": "喊停；中止（計畫）"
  },
  "surf the web": {
    "pos": "v.phr.",
    "en_def": "to spend time looking at different things on the internet",
    "cn_def": "上網瀏覽"
  },
  "upgrade": {
    "pos": "v.",
    "en_def": "to improve something, especially by replacing it with a newer or better version",
    "cn_def": "升級"
  },
  "well-oiled": {
    "pos": "adj.",
    "en_def": "working smoothly and effectively (often in \"a well-oiled machine\")",
    "cn_def": "運作順暢的"
  },
  "silver surfer": {
    "pos": "n.phr.",
    "en_def": "an older person who uses the internet regularly",
    "cn_def": "銀髮網友（常上網的長者）"
  },
  "techie": {
    "pos": "n.",
    "en_def": "a person who knows a lot about technology and enjoys it",
    "cn_def": "科技通；技術人員"
  },
  "virtual friend": {
    "pos": "n.phr.",
    "en_def": "a friend you know only through the internet",
    "cn_def": "網友"
  },
  "detrimental": {
    "pos": "adj.",
    "en_def": "harmful; causing damage",
    "cn_def": "有害的；不利的"
  },
  "excessively": {
    "pos": "adv.",
    "en_def": "too much; more than is reasonable",
    "cn_def": "過度地"
  },
  "undeniable": {
    "pos": "adj.",
    "en_def": "certainly true; impossible to deny",
    "cn_def": "不可否認的"
  },
  "scroll": {
    "pos": "v.",
    "en_def": "to move text or pictures up or down on a screen",
    "cn_def": "捲動（螢幕）；滑"
  },
  "browse": {
    "pos": "v.",
    "en_def": "to look through things casually, without a clear plan to buy",
    "cn_def": "隨意瀏覽；隨便看看"
  },
  "indifferent": {
    "pos": "adj.",
    "en_def": "not interested in something and not caring about it",
    "cn_def": "漠不關心的；不感興趣的"
  }
};

const EXTRA_GLOSSES = {};
