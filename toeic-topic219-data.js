// Topic 219 Quiz Data: Library 圖書館
// Source word list: https://www.examword.com/group-topic/library — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T219 - Library 圖書館",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "librarian",
    "pos": "n.",
    "cn_def": "圖書館員",
    "en_def": "a person who works in or manages a library",
    "sentence": "A: Our company is opening a small resource room on the third floor next month, so who will organize the books and help staff find useful materials? B: We have hired a trained {{BLANK}} who worked at the city library for ten years, and she will also teach new employees how to search for reports online.",
    "cn": "A：我們公司下個月要在三樓開設一間小型資料室，那誰會負責整理書籍並幫助員工找到有用的資料？ B：我們聘請了一位受過專業訓練的【圖書館員】，她曾在市立圖書館工作十年，也會教新進員工如何在線上搜尋報告。"
  },
  {
    "word": "bookshelf",
    "pos": "n.",
    "cn_def": "書架",
    "en_def": "a shelf or set of shelves for holding books",
    "sentence": "A: The new break room looks great, but where should we put all the travel guides and business books that employees donated last month? B: Let's buy a tall wooden {{BLANK}} and place it next to the window, so people can pick up something interesting to read while they enjoy their lunch.",
    "cn": "A：新的休息室看起來很棒，但我們該把員工上個月捐贈的旅遊指南和商業書籍放在哪裡呢？ B：我們買一個高大的木製【書架】放在窗邊吧，這樣大家吃午餐時就能拿點有趣的東西來讀。"
  },
  {
    "word": "catalog",
    "pos": "n.",
    "cn_def": "目錄",
    "en_def": "a list of all the books or items in a collection",
    "sentence": "A: I need several books about project management for my training course, but I don't have time to walk through every floor of the library this afternoon. B: You can search the online {{BLANK}} from your office computer, which shows the title, the location, and whether each book is available right now.",
    "cn": "A：我的培訓課程需要幾本關於專案管理的書，但我今天下午沒時間逐層走遍圖書館。 B：你可以用辦公室電腦搜尋線上【目錄】，它會顯示書名、位置以及每本書目前是否可借。"
  },
  {
    "word": "archive",
    "pos": "n.",
    "cn_def": "檔案庫；檔案室",
    "en_def": "a place where old records and documents are kept",
    "sentence": "A: The marketing manager wants to see the advertisements we used in the 1990s for our anniversary event, but where can I find such old materials? B: All the company's old posters, photos, and newspaper ads are stored in the {{BLANK}} in the basement, and you just need to fill out a request form first.",
    "cn": "A：行銷經理想看我們在1990年代使用的廣告，好用於週年活動，但我要去哪裡找這麼舊的資料呢？ B：公司所有的舊海報、照片和報紙廣告都存放在地下室的【檔案庫】裡，你只需要先填寫一份申請表。"
  },
  {
    "word": "collection",
    "pos": "n.",
    "cn_def": "館藏；收藏",
    "en_def": "a group of books or objects kept together",
    "sentence": "A: Why did so many visitors come to the city library last weekend, even though it was raining heavily the whole time? B: The library opened a new exhibit that displays its rare {{BLANK}} of old maps and photographs of Taipei, and many families wanted to see how the city looked a hundred years ago.",
    "cn": "A：為什麼上週末雖然一直下大雨，還是有那麼多訪客來市立圖書館？ B：圖書館開了一個新展覽，展出館內珍貴的台北古地圖與老照片【館藏】，很多家庭都想看看這座城市一百年前的樣子。"
  },
  {
    "word": "borrow",
    "pos": "v.",
    "cn_def": "借入；借",
    "en_def": "to take something and promise to give it back later",
    "sentence": "A: I want to read the latest book about online marketing before our team meeting, but it is quite expensive to buy at the bookstore near the office. B: You can {{BLANK}} it from the public library for free with your membership, and you are allowed to keep it for three weeks before you have to bring it back.",
    "cn": "A：我想在團隊會議前讀那本最新的網路行銷書，但在公司附近的書店買相當貴。 B：你可以用會員資格從公立圖書館免費【借】這本書，而且可以保留三週後再歸還。"
  },
  {
    "word": "return",
    "pos": "v.",
    "cn_def": "歸還",
    "en_def": "to give or bring something back",
    "sentence": "A: I'm leaving for a business trip to Tokyo tomorrow morning, but I still have two library books at home that are due on Friday. B: You should {{BLANK}} them tonight using the drop box outside the main entrance, because the library charges a small fine for every day a book is late.",
    "cn": "A：我明天早上要去東京出差，但家裡還有兩本週五到期的圖書館書。 B：你今晚應該用大門外的還書箱把書【歸還】，因為書每晚還一天，圖書館就會收取一筆小額罰款。"
  },
  {
    "word": "loan",
    "pos": "n.",
    "cn_def": "借閱；借出",
    "en_def": "the act of lending something, or the time you can keep it",
    "sentence": "A: Can I take this report on Asian markets home over the weekend so I can finish my presentation for Monday's meeting with the sales team? B: I'm sorry, but this report is only available for a short {{BLANK}} of two hours, so you must read it here in the library or make a few copies.",
    "cn": "A：我可以週末把這份亞洲市場報告帶回家嗎？這樣我才能完成週一和業務團隊開會的簡報。 B：抱歉，這份報告只提供兩小時的短期【借閱】，所以你必須在圖書館內閱讀或影印幾頁。"
  },
  {
    "word": "due",
    "pos": "adj.",
    "cn_def": "到期的",
    "en_def": "expected to be returned or paid at a certain time",
    "sentence": "A: I borrowed three books about accounting from the library for my certification exam, but I can't remember exactly when I have to give them back. B: According to the receipt the librarian gave you, the books are {{BLANK}} next Tuesday, but you can renew them online if you need more time to prepare.",
    "cn": "A：我為了證照考試向圖書館借了三本會計書，但不記得確切什麼時候要還。 B：根據圖書館員給你的收據，這些書下週二【到期】，但如果你需要更多時間準備，可以上網續借。"
  },
  {
    "word": "overdue",
    "pos": "adj.",
    "cn_def": "逾期的",
    "en_def": "not returned or paid by the expected time",
    "sentence": "A: Why did the library send me an email this morning asking me to pay a fine of one hundred and fifty dollars? B: The system shows that one of the travel guides you borrowed for your business trip is two weeks {{BLANK}}, so you need to bring it back as soon as possible.",
    "cn": "A：為什麼圖書館今天早上寄電子郵件要我繳一百五十元的罰款？ B：系統顯示你為出差借的其中一本旅遊指南已經【逾期】兩週了，所以你需要盡快歸還。"
  },
  {
    "word": "reference",
    "pos": "n.",
    "cn_def": "參考資料；參考書",
    "en_def": "a book such as a dictionary that you look at for information",
    "sentence": "A: May I take this thick guide to business law home tonight, since I need to check some details for a contract I'm writing? B: Unfortunately, it is a {{BLANK}} book, so it must stay in the library at all times, but you are welcome to use it at one of the tables near the front desk.",
    "cn": "A：我今晚可以把這本厚厚的商業法律指南帶回家嗎？我正在寫一份合約，需要查一些細節。 B：很遺憾，這是【參考】用書，必須一直留在圖書館內，但歡迎你在服務台附近的桌子使用它。"
  },
  {
    "word": "encyclopedia",
    "pos": "n.",
    "cn_def": "百科全書",
    "en_def": "a book or set of books with facts about many subjects",
    "sentence": "A: My daughter has a school project about famous inventors, but our internet at home is not working this week, so where can she find reliable information? B: She can use the {{BLANK}} in the children's area of the library, which explains thousands of topics clearly and includes many helpful pictures and timelines.",
    "cn": "A：我女兒有一個關於著名發明家的學校作業，但我們家的網路這週壞了，她能去哪裡找可靠的資料？ B：她可以使用圖書館兒童區的【百科全書】，裡面清楚說明了數千個主題，還附有許多實用的圖片和年表。"
  },
  {
    "word": "dictionary",
    "pos": "n.",
    "cn_def": "字典；辭典",
    "en_def": "a book that lists words and explains their meanings",
    "sentence": "A: I have to translate an important sales contract from Japanese into English by Friday, but many of these legal terms are completely new to me. B: You should borrow a specialized business {{BLANK}} from the library, because it gives clear meanings and example sentences for difficult words used in contracts.",
    "cn": "A：我週五前必須把一份重要的銷售合約從日文翻成英文，但很多法律用語對我來說完全陌生。 B：你應該向圖書館借一本專業的商業【字典】，因為它對合約中的難字提供清楚的定義和例句。"
  },
  {
    "word": "periodical",
    "pos": "n.",
    "cn_def": "期刊",
    "en_def": "a magazine or journal published at regular times",
    "sentence": "A: Where can I find the latest issues of business magazines that come out every month, since I want to read about new trends in retail? B: Go to the {{BLANK}} area on the second floor, where the library keeps weekly and monthly publications, and you can read them on the comfortable sofas there.",
    "cn": "A：我在哪裡可以找到每月出刊的商業雜誌最新一期？我想讀讀零售業的新趨勢。 B：去二樓的【期刊】區，圖書館把週刊和月刊放在那裡，你可以坐在那邊舒服的沙發上閱讀。"
  },
  {
    "word": "journal",
    "pos": "n.",
    "cn_def": "學術期刊；專業期刊",
    "en_def": "a serious magazine with articles about a special subject",
    "sentence": "A: Our research team needs evidence that our new skin cream is safe before we present it to the investors next month, so what should we read? B: We should look for articles in a respected medical {{BLANK}}, because experts carefully review every study before it is published there.",
    "cn": "A：我們的研究團隊需要在下個月向投資人介紹新乳霜前，找到它安全的證據，我們該讀些什麼？ B：我們應該在受人敬重的醫學【期刊】中尋找文章，因為每篇研究在刊登前都會經過專家仔細審查。"
  },
  {
    "word": "novel",
    "pos": "n.",
    "cn_def": "小說",
    "en_def": "a long story about imaginary people and events",
    "sentence": "A: I'm going on a long flight to London next week, and I'd like something relaxing to read instead of working the whole time; any ideas? B: You could borrow a popular mystery {{BLANK}} from the library, since an exciting story with interesting characters will make the twelve-hour trip feel much shorter.",
    "cn": "A：我下週要搭長途班機去倫敦，想讀點輕鬆的東西，而不是整趟都在工作，有什麼建議嗎？ B：你可以向圖書館借一本熱門的推理【小說】，因為一個角色有趣的精彩故事會讓十二小時的旅程感覺短很多。"
  },
  {
    "word": "biography",
    "pos": "n.",
    "cn_def": "傳記",
    "en_def": "a book about the life of a real person, written by someone else",
    "sentence": "A: I'd like to learn how successful business leaders handled difficult problems early in their careers, so what kind of book would you recommend? B: You should read a {{BLANK}} of a famous company founder, because it describes the real challenges, mistakes, and decisions that person faced while building the business.",
    "cn": "A：我想了解成功的企業領袖在職涯早期如何處理困難問題，你會推薦什麼樣的書？ B：你應該讀一本知名企業創辦人的【傳記】，因為它描述了那個人在創業過程中面對的真實挑戰、錯誤和決策。"
  },
  {
    "word": "study",
    "pos": "v.",
    "cn_def": "讀書；研讀",
    "en_def": "to spend time learning about a subject",
    "sentence": "A: Why do so many university students and office workers fill the library every evening during the weeks before the national exams? B: The library provides a calm environment with free wireless internet and good lighting, so people can {{BLANK}} for hours without being disturbed by noise at home.",
    "cn": "A：為什麼國家考試前幾週，每天晚上都有那麼多大學生和上班族擠滿圖書館？ B：圖書館提供安靜的環境、免費無線網路和良好的照明，所以大家可以連續好幾個小時【讀書】，不會被家裡的噪音打擾。"
  },
  {
    "word": "research",
    "pos": "n.",
    "cn_def": "研究；調查",
    "en_def": "careful study to find new facts or information",
    "sentence": "A: Before we open a new coffee shop in the business district, how can we find out what kind of customers live and work in that area? B: Our team will do some market {{BLANK}} at the city library, where we can use government reports and local surveys about population, income, and spending habits.",
    "cn": "A：在商業區開新咖啡店之前，我們要怎麼知道那一帶住著和工作著什麼樣的顧客？ B：我們團隊會在市立圖書館做一些市場【調查】，在那裡可以使用政府報告和關於人口、收入與消費習慣的地方調查資料。"
  },
  {
    "word": "quiet",
    "pos": "adj.",
    "cn_def": "安靜的",
    "en_def": "making little or no noise",
    "sentence": "A: Is there a good place in the library where I can hold an online job interview this afternoon without being bothered by other people? B: You can book one of the private rooms on the fourth floor, which are very {{BLANK}} because they have thick walls and are far away from the busy children's area.",
    "cn": "A：圖書館裡有沒有好地方讓我今天下午進行線上求職面試，又不會被別人打擾？ B：你可以預約四樓的其中一間私人房間，因為牆壁很厚又遠離熱鬧的兒童區，所以非常【安靜】。"
  },
  {
    "word": "silence",
    "pos": "n.",
    "cn_def": "寂靜；沉默",
    "en_def": "complete quiet; no sound",
    "sentence": "A: Why did the librarian ask the two businessmen near the window to leave the reading area during their phone call this morning? B: This floor has a strict rule of complete {{BLANK}}, so people who need to talk on the phone or discuss work have to go to the lobby or a meeting room downstairs.",
    "cn": "A：為什麼今天早上圖書館員請窗邊兩位正在講電話的商務人士離開閱覽區？ B：這層樓嚴格規定要保持完全【寂靜】，所以需要講電話或討論工作的人必須到大廳或樓下的會議室。"
  },
  {
    "word": "reading",
    "pos": "n.",
    "cn_def": "閱讀",
    "en_def": "the activity of looking at and understanding written words",
    "sentence": "A: Our manager wants everyone on the team to improve their English before the international conference in May, so what should we do every day? B: She suggests doing at least twenty minutes of {{BLANK}} each morning, such as business news articles and short reports, because it builds vocabulary and helps us understand how professionals write.",
    "cn": "A：我們經理希望團隊每個人在五月的國際會議前提升英文，我們每天應該做什麼？ B：她建議每天早上至少做二十分鐘的【閱讀】，例如商業新聞文章和短篇報告，因為這能累積字彙，也幫助我們了解專業人士如何寫作。"
  },
  {
    "word": "desk",
    "pos": "n.",
    "cn_def": "服務台；書桌",
    "en_def": "a table for working, or a counter where you get service",
    "sentence": "A: I just arrived at the library for the first time and I'd like to get a membership, but I'm not sure where I should go. B: Please go to the information {{BLANK}} near the main entrance, where a staff member will check your ID and help you fill out the application form in a few minutes.",
    "cn": "A：我第一次來圖書館，想辦會員，但不確定該去哪裡。 B：請到大門附近的【服務台】，工作人員會檢查你的身分證件，並在幾分鐘內協助你填寫申請表。"
  },
  {
    "word": "computer",
    "pos": "n.",
    "cn_def": "電腦",
    "en_def": "an electronic machine that stores and processes information",
    "sentence": "A: My laptop suddenly stopped working this morning, and I have to send an updated sales report to a client in Singapore before five o'clock. B: The library downtown has public {{BLANK}} stations on the second floor that anyone with a membership can use for two hours a day, and printing is also available there.",
    "cn": "A：我的筆電今天早上突然壞了，而我必須在五點前把更新過的銷售報告寄給新加坡的客戶。 B：市中心的圖書館二樓有公用【電腦】區，任何會員每天都可以使用兩小時，那裡也可以列印。"
  },
  {
    "word": "database",
    "pos": "n.",
    "cn_def": "資料庫",
    "en_def": "a large amount of information stored in a computer system",
    "sentence": "A: I need recent articles about electric car sales in Europe for my report, but most of the good websites ask me to pay for every page I read. B: With your library card, you can log in to an online {{BLANK}} that contains thousands of business articles and industry reports, and it doesn't cost anything extra.",
    "cn": "A：我的報告需要歐洲電動車銷售的最新文章，但大多數好網站每讀一頁都要付費。 B：你可以用借書證登入一個線上【資料庫】，裡面有數千篇商業文章和產業報告，而且不需額外付費。"
  },
  {
    "word": "membership",
    "pos": "n.",
    "cn_def": "會員資格",
    "en_def": "the state of being a member of a group or organization",
    "sentence": "A: Our company would like employees to use the professional library downtown for their training courses, but how much does it cost to join? B: A yearly {{BLANK}} costs about two thousand dollars per person, but the library offers a twenty percent discount for companies that sign up ten or more employees.",
    "cn": "A：我們公司希望員工能利用市中心的專業圖書館進行培訓課程，但加入要花多少錢？ B：每人一年的【會員資格】約兩千元，但公司若為十位以上員工報名，圖書館提供八折優惠。"
  },
  {
    "word": "card",
    "pos": "n.",
    "cn_def": "卡片；證件",
    "en_def": "a small piece of plastic or paper with information on it",
    "sentence": "A: I tried to borrow these books at the self-service machine, but the screen keeps showing an error message; what's the problem? B: It looks like your library {{BLANK}} expired at the end of last month, so you need to bring your ID to the front desk and renew it before you can check anything out.",
    "cn": "A：我試著在自助機借這些書，但螢幕一直顯示錯誤訊息，是什麼問題？ B：看來你的借書【證】上個月底已過期，所以你需要帶身分證件到櫃台續辦，才能借任何東西。"
  },
  {
    "word": "section",
    "pos": "n.",
    "cn_def": "區；部分",
    "en_def": "one part or area of a place",
    "sentence": "A: Excuse me, I'm looking for books about starting a small business, but I've already walked around this floor twice without finding anything. B: Those books are kept in the business and economics {{BLANK}} on the third floor, right next to the elevators, and they are arranged by topic.",
    "cn": "A：不好意思，我在找有關創業的書，但我已經在這層樓繞了兩圈都找不到。 B：那些書放在三樓的商業與經濟【區】，就在電梯旁邊，而且是依主題排列的。"
  },
  {
    "word": "stack",
    "pos": "n.",
    "cn_def": "書庫；一疊",
    "en_def": "a pile of things; the area of a library where books are stored",
    "sentence": "A: I asked for an old business report from 1985, but why does the librarian say I have to wait twenty minutes to receive it? B: Older materials are kept in a closed {{BLANK}} area in the basement, where only staff can enter, so someone must go down and find the report for you.",
    "cn": "A：我要求調閱一份1985年的舊商業報告，但為什麼圖書館員說我要等二十分鐘才能拿到？ B：較舊的資料存放在地下室的封閉式【書庫】區，只有工作人員可以進入，所以必須有人下去幫你找那份報告。"
  },
  {
    "word": "circulation",
    "pos": "n.",
    "cn_def": "流通；借還書",
    "en_def": "the lending and returning of library books",
    "sentence": "A: If I want to renew the books I borrowed last month or ask why I was charged a late fee, which counter should I go to? B: You should visit the {{BLANK}} desk on the first floor, where staff handle borrowing, returns, renewals, and any problems with your account.",
    "cn": "A：如果我想續借上個月借的書，或詢問為什麼被收了逾期費，應該去哪個櫃台？ B：你應該去一樓的【流通】櫃台，那裡的工作人員負責借書、還書、續借以及你帳戶的任何問題。"
  },
  {
    "word": "browse",
    "pos": "v.",
    "cn_def": "瀏覽",
    "en_def": "to look through books or items casually without a clear plan",
    "sentence": "A: Do you have a specific book in mind for your lunch break today, or are you just going to the library to relax for a while? B: I don't have any particular title in mind, so I'll just {{BLANK}} the new arrivals shelf and pick up anything about travel or cooking that looks interesting.",
    "cn": "A：你今天午休有特別想看的書嗎，還是只是去圖書館放鬆一下？ B：我沒有特定想看的書名，所以我會隨意【瀏覽】新書架，挑任何看起來有趣的旅遊或烹飪書。"
  },
  {
    "word": "reserve",
    "pos": "v.",
    "cn_def": "預約；預訂",
    "en_def": "to arrange for something to be kept for you",
    "sentence": "A: The popular book about leadership that our CEO recommended is checked out right now, and I'd really like to read it before the training next month. B: You can {{BLANK}} it through the library's website, and they will send you a text message as soon as it comes back and is ready for you to pick up.",
    "cn": "A：我們執行長推薦的那本熱門領導力書籍目前已被借出，而我很想在下個月培訓前讀它。 B：你可以透過圖書館網站【預約】這本書，書一歸還並可領取時，他們就會傳簡訊通知你。"
  },
  {
    "word": "digital",
    "pos": "adj.",
    "cn_def": "數位的",
    "en_def": "using computer technology; stored as electronic data",
    "sentence": "A: Our office is running out of space for all the old paper files, and it takes too long to find documents when clients call; what do you suggest? B: We should scan everything and create a {{BLANK}} library on our company server, so staff can search for any file in seconds from their own computers.",
    "cn": "A：我們辦公室快放不下那些舊的紙本檔案了，而且客戶來電時要花太久時間找文件，你有什麼建議？ B：我們應該把所有東西掃描起來，在公司伺服器上建立一個【數位】圖書館，這樣員工就能在幾秒內從自己的電腦搜尋任何檔案。"
  },
  {
    "word": "ebook",
    "pos": "n.",
    "cn_def": "電子書",
    "en_def": "a book that you read on a computer, tablet, or phone",
    "sentence": "A: I travel for work almost every week, and carrying heavy books in my suitcase is really tiring; is there an easier way to keep reading? B: You can download an {{BLANK}} from the library's app onto your tablet, and it will disappear automatically after fourteen days, so you never have to worry about late fees.",
    "cn": "A：我幾乎每週都要出差，行李箱裡帶著厚重的書真的很累，有更輕鬆的方式可以持續閱讀嗎？ B：你可以從圖書館的應用程式下載【電子書】到平板上，十四天後它會自動消失，所以你永遠不必擔心逾期費。"
  },
  {
    "word": "resource",
    "pos": "n.",
    "cn_def": "資源",
    "en_def": "something useful, such as a book or website, that helps you",
    "sentence": "A: Our new employees often struggle to write professional emails in English during their first few months, so how can we support them better? B: The company library is an excellent {{BLANK}} for them, since it offers writing guides, sample business letters, and online courses they can take during their free time.",
    "cn": "A：我們的新進員工在頭幾個月常常很難用英文寫專業的電子郵件，我們該如何更好地支援他們？ B：公司圖書館對他們來說是很棒的【資源】，因為它提供寫作指南、商業書信範例，以及他們可以在空閒時間上的線上課程。"
  }
];

const MCQS = [
  {
    "q": "The reference _____ helped me find three reports on the hotel industry. She also showed me how to save articles to my account.",
    "options": [
      "librarian",
      "biography",
      "periodical",
      "catalog"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Please place the new training manuals on the _____ beside the printer. Employees can then take a copy whenever they need one.",
    "options": [
      "database",
      "bookshelf",
      "membership",
      "circulation"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Before visiting the branch office library, check the online _____ to see whether the book is available. It also lists the shelf number for each title.",
    "options": [
      "novel",
      "biography",
      "catalog",
      "loan"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "All contracts signed before 2010 are kept in the company _____ in the basement. Staff must sign a form before removing any file.",
    "options": [
      "novel",
      "dictionary",
      "biography",
      "archive"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The museum library has an impressive _____ of rare maps from the nineteenth century. Researchers from overseas often visit to study them.",
    "options": [
      "circulation",
      "collection",
      "membership",
      "silence"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Employees may _____ laptops from the IT department for business trips. They must bring them back within three days of returning to the office.",
    "options": [
      "browse",
      "study",
      "return",
      "borrow"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Please _____ your visitor badge to the security desk before you leave the building. Lost badges will cost twenty dollars to replace.",
    "options": [
      "return",
      "borrow",
      "browse",
      "study"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "These rare reports are not available for _____ outside the building. Visitors may only read them in the reference room.",
    "options": [
      "biography",
      "novel",
      "loan",
      "catalog"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The quarterly sales report is _____ on Friday at noon. Please send your figures to the finance manager by Wednesday.",
    "options": [
      "due",
      "quiet",
      "digital",
      "silent"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The client's payment is now three weeks _____. Please call their accounting department and ask when we can expect it.",
    "options": [
      "quiet",
      "overdue",
      "digital",
      "due"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "This thick guide is a _____ book, so it cannot leave the library. You may photocopy up to ten pages at the front desk.",
    "options": [
      "circulation",
      "membership",
      "reference",
      "silence"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The online _____ explains thousands of subjects, from ancient history to modern science. Students often use it as a starting point for school projects.",
    "options": [
      "membership",
      "circulation",
      "loan",
      "encyclopedia"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "If you do not know a technical term, look it up in a business _____. Our office keeps two copies near the reception desk.",
    "options": [
      "novel",
      "dictionary",
      "biography",
      "archive"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The library receives over two hundred _____ titles, including weekly news magazines and monthly trade publications. Back issues are kept for one year.",
    "options": [
      "dictionary",
      "archive",
      "librarian",
      "periodical"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Our research team published its findings in a respected medical _____ last spring. The article has since been cited by many other scientists.",
    "options": [
      "journal",
      "catalog",
      "bookshelf",
      "membership"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The author's latest _____ tells the story of a young woman who opens a bakery in Tainan. It became a bestseller within a month.",
    "options": [
      "database",
      "catalog",
      "novel",
      "encyclopedia"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The new _____ of the company's founder describes his early years in a small village. It is based on interviews with his family.",
    "options": [
      "biography",
      "catalog",
      "periodical",
      "database"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Many employees stay after work to _____ for the accounting certification exam. The company pays the test fee for anyone who passes.",
    "options": [
      "browse",
      "study",
      "borrow",
      "reserve"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Before launching the product, the team carried out market _____ in three major cities. The results showed strong demand among young professionals.",
    "options": [
      "silence",
      "circulation",
      "research",
      "membership"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Please keep the open office area _____ during the afternoon. Several colleagues are on important calls with overseas clients.",
    "options": [
      "due",
      "overdue",
      "digital",
      "quiet"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The hotel offers a comfortable _____ room with newspapers in five languages. Guests can relax there with a free cup of tea.",
    "options": [
      "membership",
      "reading",
      "silence",
      "biography"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "All customer contact details are stored in a secure _____ that only managers can access. It is backed up every night.",
    "options": [
      "novel",
      "biography",
      "periodical",
      "database"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Annual _____ at the business library costs two thousand dollars per person. Companies that register ten or more employees receive a discount.",
    "options": [
      "membership",
      "silence",
      "archive",
      "biography"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Travel guides can be found in the nonfiction _____ on the second floor. They are arranged by country in alphabetical order.",
    "options": [
      "novel",
      "journal",
      "section",
      "librarian"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "A tall _____ of unopened mail was waiting on her desk after the business trip. She spent the whole morning sorting through it.",
    "options": [
      "stack",
      "catalog",
      "journal",
      "loan"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The magazine has a monthly _____ of about fifty thousand copies. Most of its readers work in finance and banking.",
    "options": [
      "silence",
      "circulation",
      "archive",
      "catalog"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Customers are welcome to _____ the shelves without buying anything. Staff will only help if a visitor asks for assistance.",
    "options": [
      "borrow",
      "return",
      "browse",
      "reserve"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Please _____ a meeting room at least two days in advance through the online system. Rooms are often fully booked on Mondays.",
    "options": [
      "return",
      "browse",
      "study",
      "reserve"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The museum plans to create _____ copies of all its old photographs this year. Visitors will then be able to view them online.",
    "options": [
      "quiet",
      "digital",
      "due",
      "overdue"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The company intranet is a useful _____ for new staff who have questions about benefits. It includes guides, forms, and contact lists.",
    "options": [
      "silence",
      "novel",
      "biography",
      "resource"
    ],
    "answer": 3,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "librarian": {
    "pos": "n.",
    "en_def": "a person who works in or manages a library",
    "cn_def": "圖書館員"
  },
  "bookshelf": {
    "pos": "n.",
    "en_def": "a shelf or set of shelves for holding books",
    "cn_def": "書架"
  },
  "catalog": {
    "pos": "n.",
    "en_def": "a list of all the books or items in a collection",
    "cn_def": "目錄"
  },
  "archive": {
    "pos": "n.",
    "en_def": "a place where old records and documents are kept",
    "cn_def": "檔案庫；檔案室"
  },
  "collection": {
    "pos": "n.",
    "en_def": "a group of books or objects kept together",
    "cn_def": "館藏；收藏"
  },
  "borrow": {
    "pos": "v.",
    "en_def": "to take something and promise to give it back later",
    "cn_def": "借入；借"
  },
  "return": {
    "pos": "v.",
    "en_def": "to give or bring something back",
    "cn_def": "歸還"
  },
  "loan": {
    "pos": "n.",
    "en_def": "the act of lending something, or the time you can keep it",
    "cn_def": "借閱；借出"
  },
  "due": {
    "pos": "adj.",
    "en_def": "expected to be returned or paid at a certain time",
    "cn_def": "到期的"
  },
  "overdue": {
    "pos": "adj.",
    "en_def": "not returned or paid by the expected time",
    "cn_def": "逾期的"
  },
  "reference": {
    "pos": "n.",
    "en_def": "a book such as a dictionary that you look at for information",
    "cn_def": "參考資料；參考書"
  },
  "encyclopedia": {
    "pos": "n.",
    "en_def": "a book or set of books with facts about many subjects",
    "cn_def": "百科全書"
  },
  "dictionary": {
    "pos": "n.",
    "en_def": "a book that lists words and explains their meanings",
    "cn_def": "字典；辭典"
  },
  "periodical": {
    "pos": "n.",
    "en_def": "a magazine or journal published at regular times",
    "cn_def": "期刊"
  },
  "journal": {
    "pos": "n.",
    "en_def": "a serious magazine with articles about a special subject",
    "cn_def": "學術期刊；專業期刊"
  },
  "novel": {
    "pos": "n.",
    "en_def": "a long story about imaginary people and events",
    "cn_def": "小說"
  },
  "biography": {
    "pos": "n.",
    "en_def": "a book about the life of a real person, written by someone else",
    "cn_def": "傳記"
  },
  "study": {
    "pos": "v.",
    "en_def": "to spend time learning about a subject",
    "cn_def": "讀書；研讀"
  },
  "research": {
    "pos": "n.",
    "en_def": "careful study to find new facts or information",
    "cn_def": "研究；調查"
  },
  "quiet": {
    "pos": "adj.",
    "en_def": "making little or no noise",
    "cn_def": "安靜的"
  },
  "silence": {
    "pos": "n.",
    "en_def": "complete quiet; no sound",
    "cn_def": "寂靜；沉默"
  },
  "reading": {
    "pos": "n.",
    "en_def": "the activity of looking at and understanding written words",
    "cn_def": "閱讀"
  },
  "desk": {
    "pos": "n.",
    "en_def": "a table for working, or a counter where you get service",
    "cn_def": "服務台；書桌"
  },
  "computer": {
    "pos": "n.",
    "en_def": "an electronic machine that stores and processes information",
    "cn_def": "電腦"
  },
  "database": {
    "pos": "n.",
    "en_def": "a large amount of information stored in a computer system",
    "cn_def": "資料庫"
  },
  "membership": {
    "pos": "n.",
    "en_def": "the state of being a member of a group or organization",
    "cn_def": "會員資格"
  },
  "card": {
    "pos": "n.",
    "en_def": "a small piece of plastic or paper with information on it",
    "cn_def": "卡片；證件"
  },
  "section": {
    "pos": "n.",
    "en_def": "one part or area of a place",
    "cn_def": "區；部分"
  },
  "stack": {
    "pos": "n.",
    "en_def": "a pile of things; the area of a library where books are stored",
    "cn_def": "書庫；一疊"
  },
  "circulation": {
    "pos": "n.",
    "en_def": "the lending and returning of library books",
    "cn_def": "流通；借還書"
  },
  "browse": {
    "pos": "v.",
    "en_def": "to look through books or items casually without a clear plan",
    "cn_def": "瀏覽"
  },
  "reserve": {
    "pos": "v.",
    "en_def": "to arrange for something to be kept for you",
    "cn_def": "預約；預訂"
  },
  "digital": {
    "pos": "adj.",
    "en_def": "using computer technology; stored as electronic data",
    "cn_def": "數位的"
  },
  "ebook": {
    "pos": "n.",
    "en_def": "a book that you read on a computer, tablet, or phone",
    "cn_def": "電子書"
  },
  "resource": {
    "pos": "n.",
    "en_def": "something useful, such as a book or website, that helps you",
    "cn_def": "資源"
  }
};

const EXTRA_GLOSSES = {};
