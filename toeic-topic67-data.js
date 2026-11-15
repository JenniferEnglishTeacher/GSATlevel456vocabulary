// Topic 67 Quiz Data: Comedy 喜劇
// Source word list: https://www.examword.com/group-topic/comedy — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T67 - Comedy 喜劇",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "humor",
    "pos": "n.",
    "cn_def": "幽默；幽默感",
    "en_def": "the quality of being funny; the ability to see what is funny",
    "sentence": "A: Why did the hotel choose Daniel to lead the welcome talk for the new staff instead of the training manager this year? B: He explains the rules clearly, but he also uses a lot of gentle {{BLANK}} in his talks, so nervous new workers relax quickly and remember the important points much better.",
    "cn": "A：為什麼今年飯店選擇丹尼爾、而不是訓練經理，來主持新進員工的歡迎講話？ B：他把規定解釋得很清楚，但他的講話中也用了很多溫和的【幽默】，所以緊張的新員工很快就放鬆下來，也更能記住重要的重點。"
  },
  {
    "word": "joke",
    "pos": "n.",
    "cn_def": "笑話；玩笑",
    "en_def": "a short funny story or remark told to make people laugh",
    "sentence": "A: How did you start your speech at the sales conference in Kaohsiung when everyone looked so tired after lunch? B: I opened with a short {{BLANK}} about my first day as a salesperson, when I got lost in the client's building, and the whole room woke up and started paying attention.",
    "cn": "A：午餐後大家看起來都很累，你在高雄的業務會議上是怎麼開始演講的？ B：我用一個關於我當業務員第一天的簡短【笑話】開場，那天我在客戶的大樓裡迷路了，結果整個會場都醒了過來，開始專心聽講。"
  },
  {
    "word": "punchline",
    "pos": "n.",
    "cn_def": "笑點；（笑話的）妙語結尾",
    "en_def": "the last, funniest line of a joke or story",
    "sentence": "A: Why didn't anyone smile at the end of Kevin's story during the team dinner last Friday night? B: He was so nervous that he forgot the {{BLANK}} and had to check his phone to remember it, so by the time he finally said it, everyone had already lost interest.",
    "cn": "A：上週五晚上的團隊聚餐，凱文講完故事時為什麼沒有人笑？ B：他太緊張了，忘了【笑點】，還得看手機才想起來，所以等他終於說出來時，大家早就沒興趣了。"
  },
  {
    "word": "wit",
    "pos": "n.",
    "cn_def": "機智；風趣",
    "en_def": "the ability to say clever and funny things quickly",
    "sentence": "A: What do the customers like most about the new host of the morning radio program that our company sponsors? B: They love her quick {{BLANK}}, because she answers callers' questions in clever and funny ways, and the station says the number of listeners has grown by twenty percent since she started.",
    "cn": "A：顧客最喜歡我們公司贊助的晨間廣播節目新主持人哪一點？ B：他們很喜歡她敏捷的【機智】，因為她總能用聰明又有趣的方式回答聽眾的問題，電台說自從她開始主持以來，聽眾人數增加了百分之二十。"
  },
  {
    "word": "satire",
    "pos": "n.",
    "cn_def": "諷刺（作品）",
    "en_def": "humor that shows how foolish people, ideas or organizations are",
    "sentence": "A: Why is the new online show about office life getting so much attention from business magazines this month? B: It is a clever {{BLANK}} of big companies that hold too many useless meetings, and many managers say they recognize their own bad habits, even though the show makes them feel a little embarrassed.",
    "cn": "A：為什麼這個關於職場生活的新網路節目這個月受到商業雜誌這麼多關注？ B：它是一部巧妙【諷刺】大公司開太多無用會議的作品，許多主管說他們從中看到了自己的壞習慣，雖然這個節目讓他們覺得有點難為情。"
  },
  {
    "word": "parody",
    "pos": "n.",
    "cn_def": "模仿作品；惡搞",
    "en_def": "a funny copy of a famous song, film or style",
    "sentence": "A: What did the marketing team show at the company's year-end party that made the general manager smile so much? B: They made a short video {{BLANK}} of a famous movie trailer, using our own products and staff as the actors, and it was so popular that we later posted it on our social media page.",
    "cn": "A：行銷團隊在公司尾牙上播放了什麼，讓總經理笑得那麼開心？ B：他們拍了一支知名電影預告片的【模仿】短片，用我們自己的產品和員工當演員，因為太受歡迎了，我們後來還把它放上公司的社群網頁。"
  },
  {
    "word": "skit",
    "pos": "n.",
    "cn_def": "短劇；幽默小品",
    "en_def": "a short funny performance, often by amateurs",
    "sentence": "A: How is the customer service department preparing for the training day for new employees next Monday morning? B: Two senior staff members will act out a short {{BLANK}} about a very angry customer and a calm assistant, so the new workers can see the right way to handle difficult situations.",
    "cn": "A：客服部門如何準備下週一早上的新進員工訓練日？ B：兩位資深員工會表演一齣關於一位非常生氣的客人和一位冷靜店員的【短劇】，讓新員工能看到處理困難狀況的正確方法。"
  },
  {
    "word": "slapstick",
    "pos": "n.",
    "cn_def": "打鬧喜劇；鬧劇",
    "en_def": "comedy based on silly actions, such as people falling over",
    "sentence": "A: Which kind of show do you think we should book for the family day at the factory next month, since many workers are bringing young children? B: Let's choose a {{BLANK}} performance, because kids love clowns who fall over, slip on banana skins and throw pies, and they don't need to understand difficult words.",
    "cn": "A：既然很多員工會帶小孩來，你覺得下個月工廠家庭日我們該訂哪一種表演？ B：我們選一場【打鬧喜劇】表演吧，因為小孩子很喜歡會跌倒、踩到香蕉皮滑倒和丟派的小丑，而且他們不需要聽懂困難的字。"
  },
  {
    "word": "stand-up",
    "pos": "n.",
    "cn_def": "單口喜劇；脫口秀",
    "en_def": "comedy in which one person stands on stage and tells jokes",
    "sentence": "A: Is it true that your colleague in the accounting department has a second job on the weekends, and what does he do? B: Yes, he performs {{BLANK}} at a small bar near Taipei Main Station every Saturday night, telling funny stories about numbers, tax forms and his strict boss to a crowd of young office workers.",
    "cn": "A：你那位會計部門的同事週末真的有第二份工作嗎？他做什麼？ B：是的，他每個星期六晚上在台北車站附近的一間小酒吧表演【單口喜劇】，對著一群年輕上班族講關於數字、稅表和他嚴格老闆的好笑故事。"
  },
  {
    "word": "comedian",
    "pos": "n.",
    "cn_def": "喜劇演員",
    "en_def": "a person whose job is to make people laugh",
    "sentence": "A: Who is going to host the charity dinner that our bank is organizing at the Grand Hotel next month? B: We hired a well-known {{BLANK}} from a popular TV show, because we hope his funny stories will keep the guests in a good mood and encourage them to give more money to the children's hospital.",
    "cn": "A：我們銀行下個月在大飯店舉辦的慈善晚宴由誰主持？ B：我們請了一位知名電視節目的【喜劇演員】，因為我們希望他的趣事能讓賓客保持好心情，並鼓勵他們捐更多錢給兒童醫院。"
  },
  {
    "word": "comic",
    "pos": "adj.",
    "cn_def": "滑稽的；喜劇的",
    "en_def": "funny; connected with comedy",
    "sentence": "A: Why did the director of the training video ask the shy new receptionist to take a part in it? B: He thought her natural {{BLANK}} style would make the safety rules more interesting to watch, and in the end, her funny face when the fire alarm rang became everyone's favorite scene.",
    "cn": "A：為什麼訓練影片的導演請那位害羞的新接待員參與演出？ B：他認為她自然的【滑稽】風格會讓安全規定看起來更有趣，結果最後，她在火災警報響起時的好笑表情成了大家最喜歡的一幕。"
  },
  {
    "word": "funny",
    "pos": "adj.",
    "cn_def": "好笑的；有趣的；奇怪的",
    "en_def": "making you laugh or smile; also strange",
    "sentence": "A: Did you enjoy the guest speaker at the marketing seminar this afternoon, or was it as boring as last year's talk? B: It was much better, because she told a really {{BLANK}} story about losing her luggage in Tokyo before an important meeting, and then she explained what that experience taught her about planning.",
    "cn": "A：你喜歡今天下午行銷研討會的客座講者嗎？還是跟去年的演講一樣無聊？ B：好多了，因為她講了一個真的很【好笑】的故事，說她在一場重要會議前在東京弄丟了行李，然後她解釋了那次經驗教她的規劃之道。"
  },
  {
    "word": "hilarious",
    "pos": "adj.",
    "cn_def": "極好笑的；爆笑的",
    "en_def": "extremely funny",
    "sentence": "A: Why was everyone in the meeting room crying with laughter when I walked past the glass door this morning? B: The new translation software turned our product name into something {{BLANK}} in the Japanese version of the brochure, and we were all very lucky that we noticed it before it was printed.",
    "cn": "A：今天早上我經過玻璃門時，為什麼會議室裡的大家都笑到流眼淚？ B：新的翻譯軟體把我們的產品名稱在日文版手冊裡翻成了很【爆笑】的東西，幸好我們在印刷前就發現了。"
  },
  {
    "word": "amusing",
    "pos": "adj.",
    "cn_def": "有趣的；逗趣的",
    "en_def": "funny and enjoyable",
    "sentence": "A: What did you think of the short film that the training department showed at the beginning of the workshop on customer service? B: I found it quite {{BLANK}}, because it showed a waiter making every possible mistake in one evening, and it was a light way to introduce a serious topic before lunch.",
    "cn": "A：你覺得訓練部門在客服工作坊一開始播放的短片如何？ B：我覺得相當【有趣】，因為它呈現了一位服務生在一個晚上犯下所有可能的錯誤，在午餐前用輕鬆的方式介紹一個嚴肅的主題。"
  },
  {
    "word": "witty",
    "pos": "adj.",
    "cn_def": "機智風趣的；妙語如珠的",
    "en_def": "clever and funny in the way you speak or write",
    "sentence": "A: Why do so many people follow the online account of that small coffee shop near our office building? B: The owner writes short, {{BLANK}} posts about daily life behind the counter, such as customers who order very strange drinks, and many readers come in to try the coffee after reading them.",
    "cn": "A：為什麼這麼多人追蹤我們辦公大樓附近那間小咖啡店的網路帳號？ B：老闆會寫一些簡短又【機智風趣】的貼文，描述櫃台後的日常生活，例如點了非常奇怪飲料的客人，很多讀者看完之後就會進店試喝咖啡。"
  },
  {
    "word": "sarcastic",
    "pos": "adj.",
    "cn_def": "諷刺的；挖苦的",
    "en_def": "saying the opposite of what you mean, to criticize or joke",
    "sentence": "A: Why did the sales manager ask Tom to come to her office after the team meeting this afternoon? B: When she announced the new weekend schedule, he said, 'Great, I love working on Sundays,' in a very {{BLANK}} voice, and some customers waiting outside the room heard him and looked surprised.",
    "cn": "A：為什麼業務經理在今天下午的團隊會議後叫湯姆去她辦公室？ B：她宣布新的週末班表時，他用非常【挖苦】的語氣說：「太好了，我最愛星期天上班了。」幾位在會議室外等候的客人聽到了，看起來很驚訝。"
  },
  {
    "word": "ridiculous",
    "pos": "adj.",
    "cn_def": "荒謬的；可笑的",
    "en_def": "very silly or unreasonable",
    "sentence": "A: Are you going to accept the offer from the moving company to carry our office furniture to the new building? B: No, they asked for a {{BLANK}} amount of money, almost three times what other companies charge, so I am going to call two more movers this afternoon and compare prices.",
    "cn": "A：你要接受搬家公司把我們的辦公家具搬到新大樓的報價嗎？ B：不要，他們開了一個【荒謬】的價格，幾乎是其他公司收費的三倍，所以我今天下午要再打給兩家搬家公司比價。"
  },
  {
    "word": "absurd",
    "pos": "adj.",
    "cn_def": "荒唐的；不合理的",
    "en_def": "completely unreasonable or silly",
    "sentence": "A: What do you think about the new rule that every employee must fill out a form before using the office printer? B: It seems completely {{BLANK}} to me, because we print hundreds of pages every day, and filling out so many forms will waste more paper and time than it saves.",
    "cn": "A：你覺得每位員工使用辦公室印表機前都要填表格的新規定怎麼樣？ B：我覺得完全【荒唐】，因為我們每天要印好幾百頁，填這麼多表格浪費的紙和時間比省下來的還多。"
  },
  {
    "word": "playful",
    "pos": "adj.",
    "cn_def": "俏皮的；愛玩的；開玩笑的",
    "en_def": "light-hearted and fun; not serious",
    "sentence": "A: Why did the toy company decide to change the logo and colors on all its packages this year? B: Their old design looked too serious and formal, so they wanted a more {{BLANK}} style with bright colors and cartoon animals that would attract young children and their parents in busy shops.",
    "cn": "A：為什麼這家玩具公司今年決定更換所有包裝上的商標和顏色？ B：他們舊的設計看起來太嚴肅、太正式了，所以他們想要一種更【俏皮】的風格，用鮮豔的色彩和卡通動物，在熱鬧的商店裡吸引小孩和家長。"
  },
  {
    "word": "laugh",
    "pos": "v.",
    "cn_def": "笑；大笑",
    "en_def": "to make sounds that show you think something is funny",
    "sentence": "A: How did the new manager make such a good first impression on the staff at yesterday's welcome lunch? B: She told an honest story about her own mistakes in her first job, and it made everyone {{BLANK}}, so people felt comfortable talking to her and asking questions for the rest of the afternoon.",
    "cn": "A：新經理是如何在昨天的歡迎午餐上給員工留下這麼好的第一印象？ B：她誠實地講了自己第一份工作犯錯的故事，讓大家都【笑】了，所以整個下午大家都很自在地跟她聊天、問問題。"
  },
  {
    "word": "giggle",
    "pos": "v.",
    "cn_def": "咯咯地笑；傻笑",
    "en_def": "to laugh in a quiet, silly way",
    "sentence": "A: Why did the photographer have so much trouble taking the group picture of the sales team for the company website? B: Two of the younger staff members kept starting to {{BLANK}} every time he asked them to look serious, so it took nearly forty minutes to get one good photo.",
    "cn": "A：為什麼攝影師幫業務團隊拍公司網站用的團體照這麼困難？ B：每次他要大家表情嚴肅一點，兩位比較年輕的員工就忍不住【咯咯地笑】起來，所以花了將近四十分鐘才拍到一張好照片。"
  },
  {
    "word": "chuckle",
    "pos": "v.",
    "cn_def": "輕聲笑；暗自發笑",
    "en_def": "to laugh quietly",
    "sentence": "A: How did the chairman react when the intern accidentally showed a picture of her cat during the financial presentation? B: Luckily, he just began to {{BLANK}} softly and said that the cat looked smarter than some of our competitors, so the intern relaxed and finished her talk without any problems.",
    "cn": "A：實習生在財務簡報中不小心秀出她家貓咪的照片時，董事長有什麼反應？ B：幸好他只是輕聲地【笑了笑】，說那隻貓看起來比我們的一些競爭對手還聰明，於是實習生放鬆下來，順利完成了報告。"
  },
  {
    "word": "snicker",
    "pos": "v.",
    "cn_def": "竊笑；暗笑",
    "en_def": "to laugh quietly in an unkind way",
    "sentence": "A: Why did the trainer stop the workshop for a moment and speak to the group in such a serious voice? B: When a new employee gave a wrong answer, some people in the back row began to {{BLANK}}, so the trainer reminded everyone that the session was a safe place to make mistakes and learn.",
    "cn": "A：為什麼講師暫停工作坊，用那麼嚴肅的語氣跟大家說話？ B：有位新員工答錯時，後排有些人開始【竊笑】，所以講師提醒大家，這堂課是一個可以安心犯錯和學習的地方。"
  },
  {
    "word": "tease",
    "pos": "v.",
    "cn_def": "取笑；逗弄",
    "en_def": "to make jokes about someone, in a friendly or unkind way",
    "sentence": "A: Why does Mark look so embarrassed whenever someone mentions the word 'coffee' in the office kitchen? B: Last month he spilled a whole cup on the CEO's shirt during a meeting, and his colleagues still {{BLANK}} him about it in a friendly way, although the CEO forgave him the same day.",
    "cn": "A：為什麼每次有人在辦公室茶水間提到「咖啡」這個字，馬克就看起來很難為情？ B：上個月他在會議中把一整杯咖啡潑到執行長的襯衫上，同事們到現在還會善意地拿這件事【取笑】他，雖然執行長當天就原諒他了。"
  },
  {
    "word": "entertain",
    "pos": "v.",
    "cn_def": "娛樂；招待",
    "en_def": "to keep people interested and amused; to welcome guests",
    "sentence": "A: What are we going to do with the visiting clients from Singapore after the factory tour ends on Thursday afternoon? B: We plan to {{BLANK}} them at a traditional restaurant in Tamsui, where they can enjoy local food, watch the sunset by the river and listen to a live band before going back to their hotel.",
    "cn": "A：週四下午工廠參觀結束後，我們要怎麼安排來自新加坡的訪問客戶？ B：我們打算在淡水的一間傳統餐廳【招待】他們，讓他們享用在地美食、在河邊看夕陽、聽現場樂團演奏，然後再回飯店。"
  },
  {
    "word": "improvise",
    "pos": "v.",
    "cn_def": "即興表演；臨場發揮",
    "en_def": "to do or say something without preparing it first",
    "sentence": "A: What happened when the projector stopped working in the middle of your presentation to the investors yesterday? B: I had to {{BLANK}} and draw the main charts on the whiteboard by hand, and the investors said they actually understood the numbers better because I explained each step slowly.",
    "cn": "A：昨天你向投資人做簡報時，投影機在中途壞掉，結果怎麼樣？ B：我只好【臨場發揮】，用手在白板上畫出主要圖表，投資人說因為我一步一步慢慢解釋，他們反而更了解那些數字。"
  },
  {
    "word": "timing",
    "pos": "n.",
    "cn_def": "時機掌握；節奏",
    "en_def": "the skill of doing or saying something at exactly the right moment",
    "sentence": "A: Why do you think Jessica's toast at the retirement party got such a warm reaction from the guests? B: Her {{BLANK}} was excellent, because she paused at exactly the right moments before each funny line, and she finished her speech just as the waiters were bringing out the cake.",
    "cn": "A：你覺得為什麼潔西卡在退休派對上的祝酒詞得到賓客這麼熱烈的反應？ B：她的【時機掌握】非常好，每句好笑的話之前都在恰到好處的時刻停頓，而且她剛好在服務生端出蛋糕時結束了致詞。"
  },
  {
    "word": "delivery",
    "pos": "n.",
    "cn_def": "表達方式；講述方式",
    "en_def": "the way someone speaks when giving a speech or performance",
    "sentence": "A: Your report on the new market had great information, so why did the director say it still needs more practice? B: She said my {{BLANK}} was too fast and too quiet, so people at the back of the room couldn't follow me, and she wants me to speak more slowly and look at the listeners.",
    "cn": "A：你的新市場報告內容很好，為什麼主管說還需要多練習？ B：她說我的【表達方式】太快又太小聲，會議室後面的人跟不上，她希望我講慢一點並看著聽眾。"
  },
  {
    "word": "audience",
    "pos": "n.",
    "cn_def": "觀眾；聽眾",
    "en_def": "the people who watch or listen to a performance or talk",
    "sentence": "A: How many people came to the product launch at the exhibition center in Nangang last Saturday afternoon? B: We had an {{BLANK}} of about five hundred, including reporters, store owners and online influencers, which was much bigger than we expected, so we ran out of free samples in an hour.",
    "cn": "A：上週六下午在南港展覽館的產品發表會來了多少人？ B：我們大約有五百位【觀眾】，包括記者、店家老闆和網紅，比我們預期的多很多，所以免費試用品一個小時就發完了。"
  },
  {
    "word": "sketch",
    "pos": "n.",
    "cn_def": "幽默短劇；小品",
    "en_def": "a short funny scene that is part of a comedy show",
    "sentence": "A: What is the most popular part of the weekly comedy show that our company advertises on during prime time? B: Viewers love the short {{BLANK}} at the end of each episode, in which two actors play a confused boss and a lazy assistant, and clips of it often get millions of views online.",
    "cn": "A：我們公司在黃金時段打廣告的那個每週喜劇節目，最受歡迎的部分是什麼？ B：觀眾很喜歡每集最後的【短劇】，兩位演員分別扮演搞不清楚狀況的老闆和懶惰的助理，片段常常在網路上獲得數百萬次觀看。"
  },
  {
    "word": "spoof",
    "pos": "n.",
    "cn_def": "惡搞；諷刺模仿",
    "en_def": "a funny copy of something that makes fun of it",
    "sentence": "A: Why did our competitor's new advertisement get so many comments on social media this week? B: It is a {{BLANK}} of a famous sports commercial, but instead of a star athlete, it shows an office worker running to catch the last bus home, and many people say it reminds them of their own lives.",
    "cn": "A：為什麼競爭對手的新廣告這週在社群媒體上得到這麼多留言？ B：那是一支知名運動廣告的【惡搞】版，但影片中不是明星運動員，而是一位上班族為了趕末班公車回家而狂奔，許多人說這讓他們想起自己的生活。"
  },
  {
    "word": "banter",
    "pos": "n.",
    "cn_def": "打趣；玩笑話",
    "en_def": "friendly, joking conversation",
    "sentence": "A: Do the two hosts of the business podcast really get along, or is their friendly attitude just for the listeners? B: They have been close friends since university, so the easy {{BLANK}} between them is completely natural, and that relaxed style is the main reason the show has so many loyal fans.",
    "cn": "A：那個商業播客的兩位主持人真的處得很好嗎？還是他們友好的態度只是做給聽眾看的？ B：他們從大學時就是好朋友，所以兩人之間輕鬆的【打趣】完全是自然的，而這種輕鬆的風格正是節目有這麼多忠實粉絲的主要原因。"
  },
  {
    "word": "gag",
    "pos": "n.",
    "cn_def": "笑話；噱頭",
    "en_def": "a joke or funny trick",
    "sentence": "A: Why is there a rubber chicken sitting on the reception desk in the marketing department this week? B: It's a silly {{BLANK}} from the team's birthday party for the manager, and now everyone moves it to a new place every morning to see who will find it first.",
    "cn": "A：為什麼這週行銷部的接待櫃台上放著一隻橡膠雞？ B：那是團隊幫經理辦生日派對時留下的一個傻氣【噱頭】，現在大家每天早上都會把它移到新的地方，看誰會先找到它。"
  },
  {
    "word": "farce",
    "pos": "n.",
    "cn_def": "鬧劇；荒唐的事",
    "en_def": "a comedy with silly situations; an event so badly organized that it is ridiculous",
    "sentence": "A: How did the meeting with the new supplier go yesterday, since you were waiting for it all week? B: It was a complete {{BLANK}}, because they brought the wrong samples, their laptop wouldn't connect to our screen, and their sales manager got our company name wrong three times.",
    "cn": "A：你等了一整個星期，昨天跟新供應商的會議進行得怎麼樣？ B：那完全是一場【鬧劇】，他們帶錯了樣品，筆電連不上我們的螢幕，他們的業務經理還把我們公司名字說錯了三次。"
  }
];

const MCQS = [
  {
    "q": "Our new team leader is strict about deadlines. However, her sense of _____ makes long meetings much easier for everyone.",
    "options": [
      "audience",
      "humor",
      "delivery",
      "satire"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Mr. Lin opened the sales meeting by telling a short _____. Everyone laughed, and the tired staff began to pay attention.",
    "options": [
      "audience",
      "slapstick",
      "joke",
      "timing"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Ben forgot the last line of his story at dinner. Without the _____, nobody understood why the story was supposed to be funny.",
    "options": [
      "audience",
      "comedian",
      "banter",
      "punchline"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The hotel manager handled the angry guest with calm and quick _____. Within minutes, the guest was smiling and thanking her.",
    "options": [
      "wit",
      "audience",
      "slapstick",
      "parody"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The online show makes fun of politicians and big banks. Critics say it is the sharpest political _____ on television this year.",
    "options": [
      "delivery",
      "timing",
      "audience",
      "satire"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The marketing team made a funny _____ of a famous song for the product launch. They changed the words to describe our new phone.",
    "options": [
      "audience",
      "timing",
      "parody",
      "wit"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The children's show uses a lot of _____, such as actors falling over and throwing pies. Young kids find it extremely entertaining.",
    "options": [
      "satire",
      "slapstick",
      "timing",
      "delivery"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "After work, my colleague performs _____ at a small comedy club. He tells jokes alone on stage for about twenty minutes.",
    "options": [
      "stand-up",
      "delivery",
      "punchline",
      "banter"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The bank hired a famous _____ to host its charity dinner. His jokes kept the guests laughing for the whole evening.",
    "options": [
      "audience",
      "punchline",
      "timing",
      "comedian"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The clumsy assistant in the drama provides _____ relief. Without him, the story would feel far too dark and serious.",
    "options": [
      "sarcastic",
      "comic",
      "absurd",
      "ridiculous"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "This printer has been making a _____ noise all morning. Please call the technician before it breaks down completely.",
    "options": [
      "sarcastic",
      "witty",
      "funny",
      "comic"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The new comedy film is absolutely _____. I laughed so hard at the cinema that my stomach hurt afterwards.",
    "options": [
      "hilarious",
      "comic",
      "amusing",
      "sarcastic"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Guests found the clown's tricks mildly _____. They smiled politely, but nobody in the room laughed out loud.",
    "options": [
      "hilarious",
      "amusing",
      "sarcastic",
      "comic"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The CEO gave a short and _____ reply to the reporter's difficult question. Her clever answer was quoted in every newspaper the next day.",
    "options": [
      "absurd",
      "ridiculous",
      "comic",
      "witty"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "When Tom said, 'Great, more paperwork,' he was being _____. He actually hates filling out forms more than anything else.",
    "options": [
      "hilarious",
      "comic",
      "sarcastic",
      "absurd"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The moving company asked for a _____ price of fifty thousand dollars. Other companies offered to do the same job for less than ten.",
    "options": [
      "ridiculous",
      "witty",
      "playful",
      "comic"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "It is _____ to ask staff to fill out a form every time they print. The rule wastes more time than it saves.",
    "options": [
      "witty",
      "playful",
      "absurd",
      "comic"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The toy company wanted a bright, _____ logo to attract young children. Its old design looked too serious and formal for its products.",
    "options": [
      "sarcastic",
      "absurd",
      "ridiculous",
      "playful"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The audience began to _____ loudly at the comedian's first joke. The noise filled the whole theater for almost a minute.",
    "options": [
      "improvise",
      "laugh",
      "entertain",
      "tease"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The young children began to _____ quietly when the clown's hat fell off. Their teacher smiled and let them enjoy the moment.",
    "options": [
      "giggle",
      "improvise",
      "entertain",
      "tease"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Mr. Wang read the funny email and began to _____ softly at his desk. His colleagues wondered what had made him so cheerful.",
    "options": [
      "improvise",
      "entertain",
      "chuckle",
      "tease"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Please do not _____ new employees about their accents. Such jokes may seem friendly, but they can make people feel uncomfortable.",
    "options": [
      "laugh",
      "tease",
      "improvise",
      "entertain"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The sales team will _____ the visiting clients at a seafood restaurant tonight. The company will pay for the dinner and the drinks.",
    "options": [
      "entertain",
      "laugh",
      "improvise",
      "giggle"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The speaker's laptop crashed during the presentation, so he had to _____. He drew the charts on a whiteboard instead.",
    "options": [
      "entertain",
      "tease",
      "giggle",
      "improvise"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Good comic _____ means knowing exactly when to pause. A joke told one second too early can lose its effect.",
    "options": [
      "timing",
      "audience",
      "banter",
      "gag"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Your report had excellent content, but your _____ was too fast. Please speak more slowly and look at the listeners next time.",
    "options": [
      "audience",
      "satire",
      "wit",
      "delivery"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "More than three hundred people attended the product launch. The _____ cheered loudly when the new laptop appeared on stage.",
    "options": [
      "punchline",
      "audience",
      "timing",
      "parody"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The TV show ends with a short comedy _____ every week. Two actors play a confused boss and his lazy assistant.",
    "options": [
      "audience",
      "timing",
      "sketch",
      "delivery"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The two radio hosts are old friends from university. Listeners enjoy the friendly _____ between them every morning.",
    "options": [
      "banter",
      "satire",
      "timing",
      "slapstick"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "The rubber spider on the manager's desk was just a silly _____. Someone in the design team put it there for fun.",
    "options": [
      "audience",
      "timing",
      "delivery",
      "gag"
    ],
    "answer": 3,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "humor": {
    "pos": "n.",
    "en_def": "the quality of being funny; the ability to see what is funny",
    "cn_def": "幽默；幽默感"
  },
  "joke": {
    "pos": "n.",
    "en_def": "a short funny story or remark told to make people laugh",
    "cn_def": "笑話；玩笑"
  },
  "punchline": {
    "pos": "n.",
    "en_def": "the last, funniest line of a joke or story",
    "cn_def": "笑點；（笑話的）妙語結尾"
  },
  "wit": {
    "pos": "n.",
    "en_def": "the ability to say clever and funny things quickly",
    "cn_def": "機智；風趣"
  },
  "satire": {
    "pos": "n.",
    "en_def": "humor that shows how foolish people, ideas or organizations are",
    "cn_def": "諷刺（作品）"
  },
  "parody": {
    "pos": "n.",
    "en_def": "a funny copy of a famous song, film or style",
    "cn_def": "模仿作品；惡搞"
  },
  "skit": {
    "pos": "n.",
    "en_def": "a short funny performance, often by amateurs",
    "cn_def": "短劇；幽默小品"
  },
  "slapstick": {
    "pos": "n.",
    "en_def": "comedy based on silly actions, such as people falling over",
    "cn_def": "打鬧喜劇；鬧劇"
  },
  "stand-up": {
    "pos": "n.",
    "en_def": "comedy in which one person stands on stage and tells jokes",
    "cn_def": "單口喜劇；脫口秀"
  },
  "comedian": {
    "pos": "n.",
    "en_def": "a person whose job is to make people laugh",
    "cn_def": "喜劇演員"
  },
  "comic": {
    "pos": "adj.",
    "en_def": "funny; connected with comedy",
    "cn_def": "滑稽的；喜劇的"
  },
  "funny": {
    "pos": "adj.",
    "en_def": "making you laugh or smile; also strange",
    "cn_def": "好笑的；有趣的；奇怪的"
  },
  "hilarious": {
    "pos": "adj.",
    "en_def": "extremely funny",
    "cn_def": "極好笑的；爆笑的"
  },
  "amusing": {
    "pos": "adj.",
    "en_def": "funny and enjoyable",
    "cn_def": "有趣的；逗趣的"
  },
  "witty": {
    "pos": "adj.",
    "en_def": "clever and funny in the way you speak or write",
    "cn_def": "機智風趣的；妙語如珠的"
  },
  "sarcastic": {
    "pos": "adj.",
    "en_def": "saying the opposite of what you mean, to criticize or joke",
    "cn_def": "諷刺的；挖苦的"
  },
  "ridiculous": {
    "pos": "adj.",
    "en_def": "very silly or unreasonable",
    "cn_def": "荒謬的；可笑的"
  },
  "absurd": {
    "pos": "adj.",
    "en_def": "completely unreasonable or silly",
    "cn_def": "荒唐的；不合理的"
  },
  "playful": {
    "pos": "adj.",
    "en_def": "light-hearted and fun; not serious",
    "cn_def": "俏皮的；愛玩的；開玩笑的"
  },
  "laugh": {
    "pos": "v.",
    "en_def": "to make sounds that show you think something is funny",
    "cn_def": "笑；大笑"
  },
  "giggle": {
    "pos": "v.",
    "en_def": "to laugh in a quiet, silly way",
    "cn_def": "咯咯地笑；傻笑"
  },
  "chuckle": {
    "pos": "v.",
    "en_def": "to laugh quietly",
    "cn_def": "輕聲笑；暗自發笑"
  },
  "snicker": {
    "pos": "v.",
    "en_def": "to laugh quietly in an unkind way",
    "cn_def": "竊笑；暗笑"
  },
  "tease": {
    "pos": "v.",
    "en_def": "to make jokes about someone, in a friendly or unkind way",
    "cn_def": "取笑；逗弄"
  },
  "entertain": {
    "pos": "v.",
    "en_def": "to keep people interested and amused; to welcome guests",
    "cn_def": "娛樂；招待"
  },
  "improvise": {
    "pos": "v.",
    "en_def": "to do or say something without preparing it first",
    "cn_def": "即興表演；臨場發揮"
  },
  "timing": {
    "pos": "n.",
    "en_def": "the skill of doing or saying something at exactly the right moment",
    "cn_def": "時機掌握；節奏"
  },
  "delivery": {
    "pos": "n.",
    "en_def": "the way someone speaks when giving a speech or performance",
    "cn_def": "表達方式；講述方式"
  },
  "audience": {
    "pos": "n.",
    "en_def": "the people who watch or listen to a performance or talk",
    "cn_def": "觀眾；聽眾"
  },
  "sketch": {
    "pos": "n.",
    "en_def": "a short funny scene that is part of a comedy show",
    "cn_def": "幽默短劇；小品"
  },
  "spoof": {
    "pos": "n.",
    "en_def": "a funny copy of something that makes fun of it",
    "cn_def": "惡搞；諷刺模仿"
  },
  "banter": {
    "pos": "n.",
    "en_def": "friendly, joking conversation",
    "cn_def": "打趣；玩笑話"
  },
  "gag": {
    "pos": "n.",
    "en_def": "a joke or funny trick",
    "cn_def": "笑話；噱頭"
  },
  "farce": {
    "pos": "n.",
    "en_def": "a comedy with silly situations; an event so badly organized that it is ridiculous",
    "cn_def": "鬧劇；荒唐的事"
  }
};

const EXTRA_GLOSSES = {};
