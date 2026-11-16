// Topic 165 Quiz Data: Handwriting 手寫
// Source word list: https://www.examword.com/group-topic/handwriting — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T165 - Handwriting 手寫",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "traditional",
    "pos": "adj.",
    "cn_def": "傳統的",
    "en_def": "following old ways that have existed for a long time",
    "sentence": "A: Why does the hotel manager still ask guests to sign a paper guest book at the front desk when we already have an online check-in system? B: She likes the {{BLANK}} way of welcoming people, and many older visitors enjoy writing a short message by hand before they go up to their rooms.",
    "cn": "A：既然我們已經有線上入住系統，為什麼飯店經理還要請客人在櫃台的紙本留言簿上簽名？ B：她喜歡用【傳統的】方式迎接客人，而且很多年長的旅客喜歡在上樓回房前親手寫一段簡短的留言。"
  },
  {
    "word": "oftentimes",
    "pos": "adv.",
    "cn_def": "時常；常常",
    "en_def": "often; many times",
    "sentence": "A: Do you prefer to type your meeting notes on a laptop, or do you still write them down in a notebook during the weekly sales meeting? B: {{BLANK}} I write them by hand, because it helps me remember the main points, and later I type a short summary for the whole team.",
    "cn": "A：每週業務會議時，你比較喜歡用筆電打會議紀錄，還是仍然寫在筆記本上？ B：我【時常】用手寫，因為這能幫助我記住重點，之後我再為整個團隊打一份簡短摘要。"
  },
  {
    "word": "convenient",
    "pos": "adj.",
    "cn_def": "方便的",
    "en_def": "easy to use; saving time or trouble",
    "sentence": "A: Why did the receptionist leave a small pad of paper and a pen next to every phone in the office instead of asking us to use the computer? B: She thought it would be more {{BLANK}} for staff to write down quick phone messages by hand while they are still talking to the customer.",
    "cn": "A：為什麼接待人員在辦公室每支電話旁都放了一小本便條紙和一支筆，而不是要我們用電腦？ B：她認為員工在跟客戶講電話時，就能用手快速記下電話留言，這樣會比較【方便】。"
  },
  {
    "word": "penmanship",
    "pos": "n.",
    "cn_def": "書法；書寫技巧；字跡",
    "en_def": "the skill or style of handwriting",
    "sentence": "A: Why did the wedding planning company hire a new staff member who has no experience in event design or customer service? B: Her {{BLANK}} is so beautiful that the manager wants her to write all the names on the invitation cards and seating cards for our clients' weddings.",
    "cn": "A：為什麼婚禮企劃公司僱用了一位沒有活動設計或客服經驗的新員工？ B：她的【字跡】非常漂亮，所以經理希望她為客戶的婚禮手寫所有邀請卡和座位卡上的名字。"
  },
  {
    "word": "legible",
    "pos": "adj.",
    "cn_def": "字跡清楚的；易讀的",
    "en_def": "clear enough to be read easily",
    "sentence": "A: The warehouse team keeps sending the wrong items to customers, so what do you think is causing all these mistakes in our orders? B: I think some of the handwritten order forms are not {{BLANK}}, so the workers guess the product numbers and often pick the wrong boxes from the shelves.",
    "cn": "A：倉庫團隊一直寄錯商品給客戶，你認為我們訂單出這麼多錯的原因是什麼？ B：我認為有些手寫訂購單的字跡不【清楚】，所以工人只能猜產品編號，常常從貨架上拿錯箱子。"
  },
  {
    "word": "illegible",
    "pos": "adj.",
    "cn_def": "難以辨認的；字跡潦草的",
    "en_def": "impossible or very hard to read",
    "sentence": "A: Why did the pharmacist call the clinic this morning before she gave the elderly patient his medicine? B: The doctor's note was completely {{BLANK}}, so she wanted to check the name and amount of the medicine to make sure the patient would not take the wrong pills.",
    "cn": "A：為什麼藥師今天早上在把藥交給那位年長病人前，先打電話給診所？ B：醫師的處方字跡完全【難以辨認】，所以她想確認藥名和劑量，以確保病人不會吃錯藥。"
  },
  {
    "word": "compulsory",
    "pos": "adj.",
    "cn_def": "強制的；必修的",
    "en_def": "required by a rule; must be done",
    "sentence": "A: Do all new employees at the bank have to attend the training session about filling in paper forms for customers who cannot use the online system? B: Yes, it is {{BLANK}} for everyone, because mistakes on these forms can delay payments and cause serious problems for both the bank and the customers.",
    "cn": "A：銀行所有新進員工都必須參加如何為無法使用線上系統的客戶填寫紙本表格的訓練課程嗎？ B：是的，這對每個人都是【強制的】，因為這些表格上的錯誤可能延誤付款，給銀行和客戶都造成嚴重的問題。"
  },
  {
    "word": "cursive",
    "pos": "n.",
    "cn_def": "草寫體；連筆字",
    "en_def": "a style of handwriting with joined letters",
    "sentence": "A: Why is the young intern having trouble reading the old letters that the company founder wrote to his business partners in the 1960s? B: The letters are written in {{BLANK}}, and since she mostly learned to type at school, she finds the joined-up letters very difficult to read quickly.",
    "cn": "A：為什麼那位年輕實習生在閱讀公司創辦人1960年代寫給事業夥伴的舊信件時有困難？ B：那些信是用【草寫體】寫的，而她在學校大多學打字，所以覺得那種連筆字很難快速讀懂。"
  },
  {
    "word": "value",
    "pos": "v.",
    "cn_def": "重視；珍視",
    "en_def": "to think something is important or useful",
    "sentence": "A: Why does our sales director still send a handwritten thank-you card to every new client, even though it takes her a lot of time each month? B: She knows that many clients {{BLANK}} a personal message more than an email, and it helps the company build strong and long-lasting business relationships.",
    "cn": "A：為什麼我們的業務總監仍會寄手寫感謝卡給每位新客戶，即使每個月都要花她很多時間？ B：她知道很多客戶【重視】個人化的訊息勝過電子郵件，而這能幫助公司建立穩固且長久的商業關係。"
  },
  {
    "word": "absolutely",
    "pos": "adv.",
    "cn_def": "絕對地；完全地",
    "en_def": "completely; totally",
    "sentence": "A: Is it really necessary for me to sign every page of the rental contract by hand, or can I just sign the last page and send it back by email? B: It is {{BLANK}} necessary to sign each page, because the landlord's lawyer will not accept the contract if even one page is missing a signature.",
    "cn": "A：我真的需要在租約的每一頁都親筆簽名嗎？還是只簽最後一頁再用電子郵件寄回就好？ B：每一頁都【絕對】必須簽名，因為只要有一頁漏簽，房東的律師就不會接受這份合約。"
  },
  {
    "word": "essential",
    "pos": "adj.",
    "cn_def": "必要的；不可或缺的",
    "en_def": "very important and necessary",
    "sentence": "A: What skills should we look for when we hire a new assistant for the busy front office at the medical clinic? B: Clear handwriting is {{BLANK}} for this job, because the assistant writes appointment cards and notes for patients, and nobody wants patients to miss their visits because of a mistake.",
    "cn": "A：我們為診所忙碌的前台招聘新助理時，應該重視哪些技能？ B：清楚的字跡對這份工作是【必要的】，因為助理要為病人寫預約卡和便條，沒有人希望病人因為寫錯而錯過看診。"
  },
  {
    "word": "signing",
    "pos": "n.",
    "cn_def": "簽署；簽字",
    "en_def": "the act of writing your name on an official document",
    "sentence": "A: Why are so many reporters and photographers waiting in the hotel lobby this afternoon, and why has the meeting room been decorated with flags? B: The two companies are holding the official {{BLANK}} of their partnership agreement there at three o'clock, and both presidents will put their names on the documents in front of the cameras.",
    "cn": "A：為什麼今天下午有這麼多記者和攝影師在飯店大廳等候，而且會議室還用旗子裝飾？ B：兩家公司三點要在那裡舉行合作協議的正式【簽署】儀式，兩位總裁將在鏡頭前於文件上簽名。"
  },
  {
    "word": "overlook",
    "pos": "v.",
    "cn_def": "忽略；忽視",
    "en_def": "to fail to notice something",
    "sentence": "A: Why did the accounting department send the expense report back to me when I had already attached all the receipts last Friday? B: You forgot to sign the bottom of the form, and the manager said it is easy to {{BLANK}} that small box, but the report cannot be approved without your signature.",
    "cn": "A：我上週五已經附上所有收據了，為什麼會計部門還把費用報告退回給我？ B：你忘了在表格底部簽名，經理說那個小格子很容易被【忽略】，但沒有你的簽名，報告就無法核准。"
  },
  {
    "word": "firmly",
    "pos": "adv.",
    "cn_def": "用力地；堅定地",
    "en_def": "strongly and steadily",
    "sentence": "A: Why did the bank clerk ask me to sign the form again when I had already written my name at the bottom of the page? B: You need to press {{BLANK}} with the pen, because the form has three copies underneath, and your signature was too light to appear on the last one.",
    "cn": "A：我已經在頁面底部寫了名字，為什麼銀行行員還要我再簽一次？ B：你需要用筆【用力地】按壓，因為那份表格底下有三聯複寫，你的簽名太淡，沒有印到最後一聯。"
  },
  {
    "word": "digital pen",
    "pos": "n.phr.",
    "cn_def": "數位筆；觸控筆",
    "en_def": "a pen-like tool for writing on a screen or tablet",
    "sentence": "A: How do the delivery drivers collect customers' signatures now that the company has stopped using paper receipts at every door? B: Each driver carries a tablet with a {{BLANK}}, so customers can write their names on the screen, and the signature is sent to the main office right away.",
    "cn": "A：公司已經不再於每戶門口使用紙本收據，送貨司機現在要怎麼收集客戶的簽名？ B：每位司機都帶著一台附有【數位筆】的平板，客戶可以在螢幕上寫下名字，簽名會立刻傳送到總公司。"
  },
  {
    "word": "graphology",
    "pos": "n.",
    "cn_def": "筆跡學",
    "en_def": "the study of handwriting to learn about a person's character",
    "sentence": "A: Is it true that some companies in Europe used to study job applicants' handwriting before they decided whom to hire? B: Yes, they used {{BLANK}} to guess people's personalities from their writing, but most experts now say it is not a reliable way to choose the right employees.",
    "cn": "A：聽說歐洲有些公司以前會在決定僱用誰之前，研究求職者的筆跡，是真的嗎？ B：是的，他們用【筆跡學】從字跡推測人的性格，但現在大多數專家認為這不是挑選合適員工的可靠方法。"
  },
  {
    "word": "outgoing",
    "pos": "adj.",
    "cn_def": "外向的；友善的",
    "en_def": "friendly and enjoying meeting people",
    "sentence": "A: The handwriting expert at the company workshop said that people with large, wide letters often enjoy meeting others, so does that describe you? B: I think so, because I'm quite {{BLANK}}, I love talking to new customers at trade fairs, and my handwriting really is big and round.",
    "cn": "A：公司工作坊的筆跡專家說，字寫得又大又寬的人通常喜歡認識別人，這符合你的情況嗎？ B：我想是的，因為我相當【外向】，很喜歡在商展上和新客戶聊天，而且我的字真的又大又圓。"
  },
  {
    "word": "reveal",
    "pos": "v.",
    "cn_def": "透露；顯示",
    "en_def": "to show or make something known",
    "sentence": "A: Why did the manager keep the handwritten comment cards that the guests left at the hotel restaurant last month? B: She believes the cards {{BLANK}} what guests really think about the food and service, because people often write more honest opinions by hand than in online reviews.",
    "cn": "A：為什麼經理要保留上個月客人在飯店餐廳留下的手寫意見卡？ B：她認為這些卡片能【顯示】客人對餐點和服務的真實想法，因為人們手寫時常常比在網路評論中寫得更坦白。"
  },
  {
    "word": "intricate",
    "pos": "adj.",
    "cn_def": "複雜精細的",
    "en_def": "having many small parts or details",
    "sentence": "A: Why did it take the designer almost three weeks to finish the handwritten logo for the new coffee shop downtown? B: The owner wanted a very {{BLANK}} design with many small curls and decorations, so the designer had to draw each letter slowly and carefully by hand many times.",
    "cn": "A：為什麼設計師花了將近三週，才完成市中心那家新咖啡店的手寫標誌？ B：店主想要一個帶有許多小捲曲和裝飾的【複雜精細】的設計，所以設計師必須一筆一畫慢慢、仔細地手繪每個字母很多次。"
  },
  {
    "word": "introverted",
    "pos": "adj.",
    "cn_def": "內向的",
    "en_def": "quiet and preferring to spend time alone",
    "sentence": "A: Why does Kevin from the IT department prefer to leave handwritten notes on our desks instead of coming over to talk to us in person? B: He is quite {{BLANK}} and feels nervous speaking in front of people, so writing short notes is an easier way for him to share his ideas.",
    "cn": "A：為什麼資訊部的凱文喜歡在我們桌上留手寫紙條，而不是親自過來跟我們說話？ B：他相當【內向】，在人前說話會緊張，所以寫簡短的紙條對他來說是分享想法比較容易的方式。"
  },
  {
    "word": "timid",
    "pos": "adj.",
    "cn_def": "膽怯的；害羞的",
    "en_def": "shy and easily frightened",
    "sentence": "A: Why did the new trainee write her questions on a piece of paper and hand it to the supervisor after the meeting had finished? B: She was too {{BLANK}} to raise her hand in front of thirty experienced colleagues, but she still wanted clear answers about the new safety rules.",
    "cn": "A：為什麼那位新進受訓人員在會議結束後，把問題寫在紙上交給主管？ B：她太【膽怯】了，不敢在三十位資深同事面前舉手，但她仍然想得到關於新安全規定的明確答案。"
  },
  {
    "word": "emphatic",
    "pos": "adj.",
    "cn_def": "強調的；斷然的",
    "en_def": "saying something strongly and clearly",
    "sentence": "A: Did the general manager agree with the plan to replace all paper forms with an online system before the end of this year? B: No, she was very {{BLANK}} that some older customers still need paper forms, so she said both options must stay available for at least two more years.",
    "cn": "A：總經理同意在今年年底前把所有紙本表格換成線上系統的計畫嗎？ B：不，她非常【強調】有些年長客戶仍然需要紙本表格，所以她說兩種選擇都必須至少再保留兩年。"
  },
  {
    "word": "confidence",
    "pos": "n.",
    "cn_def": "自信；信心",
    "en_def": "a feeling of being sure of yourself",
    "sentence": "A: Why does the handwriting coach tell people to practice writing their signatures slowly before an important business meeting? B: She says a smooth and steady signature shows {{BLANK}}, and clients may feel more comfortable making a deal with someone who seems calm and sure of themselves.",
    "cn": "A：為什麼書寫教練要大家在重要商務會議前慢慢練習簽名？ B：她說流暢穩定的簽名能展現【自信】，而客戶可能會更放心與看起來冷靜又有把握的人達成交易。"
  },
  {
    "word": "judge",
    "pos": "v.",
    "cn_def": "評斷；判斷",
    "en_def": "to form an opinion about someone or something",
    "sentence": "A: Do you think the hiring manager will look at the handwritten notes I add to my application form when she makes her decision? B: She might, but she usually tries not to {{BLANK}} people by their handwriting, because she cares much more about their work experience and how they perform in the interview.",
    "cn": "A：你認為招募經理做決定時，會看我在申請表上加的手寫註記嗎？ B：她可能會看，但她通常盡量不以字跡來【評斷】人，因為她更在意他們的工作經驗以及面試時的表現。"
  },
  {
    "word": "efficient",
    "pos": "adj.",
    "cn_def": "有效率的",
    "en_def": "working well without wasting time or energy",
    "sentence": "A: Why did our office decide to use voice-typing software instead of asking the secretary to write the meeting notes by hand? B: The software is much more {{BLANK}}, because it saves the secretary about two hours every week, and she can spend that time preparing reports for the directors.",
    "cn": "A：為什麼我們辦公室決定使用語音輸入軟體，而不是請秘書手寫會議紀錄？ B：這套軟體【有效率】得多，因為它每週可以替秘書省下大約兩個小時，她能用那些時間為主管們準備報告。"
  },
  {
    "word": "instantaneously",
    "pos": "adv.",
    "cn_def": "即時地；瞬間地",
    "en_def": "immediately; in a very short moment",
    "sentence": "A: How long does it take for the signed delivery form to reach the customer service team after the driver collects it at the store? B: It is sent {{BLANK}} through the mobile app, so the team can see the customer's signature on their computer screen less than a second after the driver presses the button.",
    "cn": "A：司機在店裡收到簽好的送貨單之後，要多久才會傳到客服團隊？ B：它會透過手機應用程式【即時地】傳送，所以司機按下按鈕不到一秒，團隊就能在電腦螢幕上看到客戶的簽名。"
  },
  {
    "word": "obsolete",
    "pos": "adj.",
    "cn_def": "過時的；淘汰的",
    "en_def": "no longer used because something newer exists",
    "sentence": "A: Why did the office manager remove the old fax machine and the boxes of carbon paper from the storage room last weekend? B: They have become {{BLANK}} since we started using email and electronic signatures, and the space is now needed for new computers and printer supplies.",
    "cn": "A：為什麼辦公室經理上週末把舊傳真機和成箱的複寫紙從儲藏室搬走？ B：自從我們開始使用電子郵件和電子簽名，它們就已經【過時】了，而現在需要那個空間來放新電腦和印表機耗材。"
  },
  {
    "word": "accessible",
    "pos": "adj.",
    "cn_def": "可取得的；容易使用的",
    "en_def": "easy to reach, get or use",
    "sentence": "A: Why did the city library scan all of its old handwritten letters and diaries and put them on its website last spring? B: The librarians wanted to make these documents {{BLANK}} to students and researchers around the world, since many people could not travel to the library to see them.",
    "cn": "A：為什麼市立圖書館去年春天把所有舊的手寫信件和日記掃描並放上網站？ B：圖書館員希望讓全世界的學生和研究人員都能【取得】這些文件，因為很多人無法親自到圖書館去看。"
  },
  {
    "word": "rely on",
    "pos": "v.phr.",
    "cn_def": "依賴；依靠",
    "en_def": "to depend on someone or something",
    "sentence": "A: Why do you still carry a paper notebook to every client meeting when you already have a smartphone and a laptop with you? B: I don't want to {{BLANK}} technology alone, because batteries can die and the internet can fail, but my notebook always works when I need to write something down.",
    "cn": "A：既然你已經隨身帶著智慧型手機和筆電，為什麼每次客戶會議還要帶紙本筆記本？ B：我不想只【依賴】科技，因為電池可能沒電、網路可能斷線，但我需要寫東西時，筆記本永遠派得上用場。"
  },
  {
    "word": "corner",
    "pos": "n.",
    "cn_def": "角落；轉角",
    "en_def": "the place where two sides or edges meet",
    "sentence": "A: Where should I put my signature on this delivery form, because I don't see a line marked for the customer's name? B: Please sign in the bottom right {{BLANK}} of the page, next to today's date, and then give the yellow copy back to the driver before he leaves.",
    "cn": "A：我應該在這張送貨單的哪裡簽名？我沒看到標示客戶姓名的欄位。 B：請在這頁右下【角】、今天日期旁邊簽名，然後在司機離開前把黃色那聯還給他。"
  },
  {
    "word": "perfect",
    "pos": "adj.",
    "cn_def": "完美的",
    "en_def": "without any mistakes; as good as possible",
    "sentence": "A: Why did the designer write the restaurant's menu by hand forty times before she finally sent it to the printer? B: She wanted every letter to look {{BLANK}}, because the owner planned to use the menu for the grand opening, and even a small mistake would be printed on hundreds of copies.",
    "cn": "A：為什麼設計師手寫了四十次餐廳菜單，才終於送去印刷？ B：她希望每個字母看起來都很【完美】，因為老闆打算在盛大開幕時使用這份菜單，即使一個小錯誤也會被印在數百份上。"
  },
  {
    "word": "attached",
    "pos": "adj.",
    "cn_def": "依戀的；有感情的",
    "en_def": "feeling love or strong liking for something",
    "sentence": "A: Why does our boss still use that old fountain pen when the company gives everyone free ballpoint pens every year? B: She is very {{BLANK}} to it, because her father gave it to her on her first day of work, and she has signed every important contract with it since then.",
    "cn": "A：公司每年都免費發原子筆給大家，為什麼我們老闆還在用那支舊鋼筆？ B：她對它非常【依戀】，因為那是她父親在她第一天上班時送她的，從那之後她就用它簽下每一份重要的合約。"
  }
];

const MCQS = [
  {
    "q": "The tea company sells its products in boxes with old-style Chinese writing. Customers say the _____ design reminds them of their grandparents' shops.",
    "options": [
      "traditional",
      "emphatic",
      "timid",
      "compulsory"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The new hotel offers free shuttle buses to the airport every thirty minutes. Business travelers find this service very _____ when they have early flights.",
    "options": [
      "intricate",
      "introverted",
      "convenient",
      "legible"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The calligraphy teacher praised Ms. Lin's neat _____ during the workshop. She asked her to write the welcome sign for the company's annual dinner.",
    "options": [
      "confidence",
      "penmanship",
      "corner",
      "signing"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Please make sure the address on every package is clear and _____. Otherwise, the delivery company may return the boxes to our warehouse.",
    "options": [
      "outgoing",
      "timid",
      "emphatic",
      "legible"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The insurance company rejected the claim form because several numbers were _____. The customer had to fill out a new form by hand.",
    "options": [
      "introverted",
      "outgoing",
      "illegible",
      "timid"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Attendance at Friday's fire safety training is _____ for all factory workers. Anyone who misses it must attend the next session in March.",
    "options": [
      "compulsory",
      "intricate",
      "outgoing",
      "legible"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Some schools have stopped teaching students how to write in _____. Many teachers now spend more time on typing and computer skills.",
    "options": [
      "confidence",
      "corner",
      "signing",
      "cursive"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Our customers _____ fast and friendly service more than low prices. That is why we train every new employee carefully before the store opens.",
    "options": [
      "overlook",
      "value",
      "reveal",
      "judge"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The manager said it is _____ necessary to back up all files before Friday. The old computer system will be shut down over the weekend.",
    "options": [
      "absolutely",
      "instantaneously",
      "firmly",
      "oftentimes"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Good communication skills are _____ for anyone who works at the front desk. Receptionists must answer questions from guests all day long.",
    "options": [
      "obsolete",
      "illegible",
      "essential",
      "timid"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The _____ of the new lease will take place in the lawyer's office on Monday. Both the landlord and the tenant must bring photo identification.",
    "options": [
      "corner",
      "signing",
      "cursive",
      "graphology"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Editors should never _____ small spelling mistakes in a client's brochure. Even one error can make the whole company look careless.",
    "options": [
      "value",
      "reveal",
      "rely on",
      "overlook"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Hold the pen _____ but not too tightly when you sign the contract. A steady hand will make your signature look clear and professional.",
    "options": [
      "absolutely",
      "instantaneously",
      "firmly",
      "oftentimes"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Designers at our studio draw directly on their tablets with a _____. Their sketches are then saved automatically to the shared online folder.",
    "options": [
      "digital pen",
      "corner",
      "cursive",
      "graphology"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "We are looking for a sales assistant who is _____ and enjoys talking to customers. The job includes greeting visitors at our booth during trade shows.",
    "options": [
      "timid",
      "introverted",
      "illegible",
      "outgoing"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The annual survey will _____ how satisfied employees feel about their working conditions. The results will be shared with all departments next month.",
    "options": [
      "overlook",
      "reveal",
      "rely on",
      "value"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The jewelry store is famous for its _____ silver necklaces with tiny flowers. Each piece takes a skilled artist several days to make by hand.",
    "options": [
      "intricate",
      "compulsory",
      "legible",
      "obsolete"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Although Mark is rather _____ and quiet at parties, he gives excellent presentations. His clients respect his careful preparation and clear explanations.",
    "options": [
      "outgoing",
      "efficient",
      "introverted",
      "legible"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The puppy was _____ at first and hid under the sofa when visitors arrived. After a few weeks, it became friendly with everyone in the office.",
    "options": [
      "essential",
      "timid",
      "emphatic",
      "accessible"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The CEO gave an _____ answer when reporters asked about closing the factory. She clearly said that no workers would lose their jobs this year.",
    "options": [
      "illegible",
      "obsolete",
      "accessible",
      "emphatic"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Practicing your presentation several times will give you more _____ on stage. You will feel calmer when you speak to the board of directors.",
    "options": [
      "penmanship",
      "signing",
      "confidence",
      "cursive"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Interviewers should not _____ applicants only by the clothes they wear. Skills and experience are much more important for the position.",
    "options": [
      "judge",
      "reveal",
      "overlook",
      "rely on"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The new scanning machine is more _____ than the old one. It can process two hundred pages per minute while using less electricity.",
    "options": [
      "timid",
      "introverted",
      "emphatic",
      "efficient"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "When customers pay with their phones, the money is transferred almost _____. They do not have to wait for the bank to process the payment.",
    "options": [
      "absolutely",
      "instantaneously",
      "firmly",
      "oftentimes"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Many video rental stores closed because their business model became _____. Most people now watch movies through online streaming services at home.",
    "options": [
      "obsolete",
      "outgoing",
      "intricate",
      "timid"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The new subway station makes the shopping mall easily _____ for visitors from downtown. Store owners expect many more customers this year.",
    "options": [
      "emphatic",
      "introverted",
      "accessible",
      "illegible"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Small farms often _____ local volunteers during the busy harvest season. Without their help, much of the fruit would be left on the trees.",
    "options": [
      "overlook",
      "rely on",
      "reveal",
      "judge"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Our new café is located on the _____ of Main Street and Park Avenue. It is just a two-minute walk from the train station.",
    "options": [
      "signing",
      "cursive",
      "confidence",
      "corner"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The weather was _____ for the company picnic on Saturday afternoon. It was sunny and warm, with a gentle breeze from the lake.",
    "options": [
      "illegible",
      "compulsory",
      "perfect",
      "introverted"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Many employees feel strongly _____ to the old office building where the company began. They were sad when the managers announced the move.",
    "options": [
      "attached",
      "legible",
      "efficient",
      "compulsory"
    ],
    "answer": 0,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "traditional": {
    "pos": "adj.",
    "en_def": "following old ways that have existed for a long time",
    "cn_def": "傳統的"
  },
  "oftentimes": {
    "pos": "adv.",
    "en_def": "often; many times",
    "cn_def": "時常；常常"
  },
  "convenient": {
    "pos": "adj.",
    "en_def": "easy to use; saving time or trouble",
    "cn_def": "方便的"
  },
  "penmanship": {
    "pos": "n.",
    "en_def": "the skill or style of handwriting",
    "cn_def": "書法；書寫技巧；字跡"
  },
  "legible": {
    "pos": "adj.",
    "en_def": "clear enough to be read easily",
    "cn_def": "字跡清楚的；易讀的"
  },
  "illegible": {
    "pos": "adj.",
    "en_def": "impossible or very hard to read",
    "cn_def": "難以辨認的；字跡潦草的"
  },
  "compulsory": {
    "pos": "adj.",
    "en_def": "required by a rule; must be done",
    "cn_def": "強制的；必修的"
  },
  "cursive": {
    "pos": "n.",
    "en_def": "a style of handwriting with joined letters",
    "cn_def": "草寫體；連筆字"
  },
  "value": {
    "pos": "v.",
    "en_def": "to think something is important or useful",
    "cn_def": "重視；珍視"
  },
  "absolutely": {
    "pos": "adv.",
    "en_def": "completely; totally",
    "cn_def": "絕對地；完全地"
  },
  "essential": {
    "pos": "adj.",
    "en_def": "very important and necessary",
    "cn_def": "必要的；不可或缺的"
  },
  "signing": {
    "pos": "n.",
    "en_def": "the act of writing your name on an official document",
    "cn_def": "簽署；簽字"
  },
  "overlook": {
    "pos": "v.",
    "en_def": "to fail to notice something",
    "cn_def": "忽略；忽視"
  },
  "firmly": {
    "pos": "adv.",
    "en_def": "strongly and steadily",
    "cn_def": "用力地；堅定地"
  },
  "digital pen": {
    "pos": "n.phr.",
    "en_def": "a pen-like tool for writing on a screen or tablet",
    "cn_def": "數位筆；觸控筆"
  },
  "graphology": {
    "pos": "n.",
    "en_def": "the study of handwriting to learn about a person's character",
    "cn_def": "筆跡學"
  },
  "outgoing": {
    "pos": "adj.",
    "en_def": "friendly and enjoying meeting people",
    "cn_def": "外向的；友善的"
  },
  "reveal": {
    "pos": "v.",
    "en_def": "to show or make something known",
    "cn_def": "透露；顯示"
  },
  "intricate": {
    "pos": "adj.",
    "en_def": "having many small parts or details",
    "cn_def": "複雜精細的"
  },
  "introverted": {
    "pos": "adj.",
    "en_def": "quiet and preferring to spend time alone",
    "cn_def": "內向的"
  },
  "timid": {
    "pos": "adj.",
    "en_def": "shy and easily frightened",
    "cn_def": "膽怯的；害羞的"
  },
  "emphatic": {
    "pos": "adj.",
    "en_def": "saying something strongly and clearly",
    "cn_def": "強調的；斷然的"
  },
  "confidence": {
    "pos": "n.",
    "en_def": "a feeling of being sure of yourself",
    "cn_def": "自信；信心"
  },
  "judge": {
    "pos": "v.",
    "en_def": "to form an opinion about someone or something",
    "cn_def": "評斷；判斷"
  },
  "efficient": {
    "pos": "adj.",
    "en_def": "working well without wasting time or energy",
    "cn_def": "有效率的"
  },
  "instantaneously": {
    "pos": "adv.",
    "en_def": "immediately; in a very short moment",
    "cn_def": "即時地；瞬間地"
  },
  "obsolete": {
    "pos": "adj.",
    "en_def": "no longer used because something newer exists",
    "cn_def": "過時的；淘汰的"
  },
  "accessible": {
    "pos": "adj.",
    "en_def": "easy to reach, get or use",
    "cn_def": "可取得的；容易使用的"
  },
  "rely on": {
    "pos": "v.phr.",
    "en_def": "to depend on someone or something",
    "cn_def": "依賴；依靠"
  },
  "corner": {
    "pos": "n.",
    "en_def": "the place where two sides or edges meet",
    "cn_def": "角落；轉角"
  },
  "perfect": {
    "pos": "adj.",
    "en_def": "without any mistakes; as good as possible",
    "cn_def": "完美的"
  },
  "attached": {
    "pos": "adj.",
    "en_def": "feeling love or strong liking for something",
    "cn_def": "依戀的；有感情的"
  }
};

const EXTRA_GLOSSES = {};
