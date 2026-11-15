// Topic 31 Quiz Data: Book 書籍
// Source word list: https://www.examword.com/group-topic/book — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T31 - Book 書籍",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "author",
    "pos": "n.",
    "cn_def": "作者；作家",
    "en_def": "a person who writes a book",
    "sentence": "A: Who is going to speak at the bookstore event next Friday evening, and do we need to prepare extra chairs for the guests? B: The {{BLANK}} of the new business guide will talk about her career, so please set up about fifty chairs and ask the café staff to serve coffee after her speech.",
    "cn": "A：下週五晚上誰要在書店活動上演講？我們需要為來賓準備額外的椅子嗎？ B：那本新商業指南的【作者】會談談她的職涯，所以請擺大約五十張椅子，並請咖啡廳員工在她演講後供應咖啡。"
  },
  {
    "word": "title",
    "pos": "n.",
    "cn_def": "書名；標題",
    "en_def": "the name of a book or other piece of writing",
    "sentence": "A: Have you decided what to call the new guide for small business owners, or is the marketing team still arguing about it? B: We finally agreed on a short and simple {{BLANK}}, so the designer can start working on the front of the book, and we can send it to the printer next week.",
    "cn": "A：你們決定好那本給小企業主的新指南要叫什麼名字了嗎？還是行銷團隊還在爭論？ B：我們終於同意採用一個簡短的【書名】，所以設計師可以開始設計書的封面，我們下週就能把它送去印刷廠。"
  },
  {
    "word": "chapter",
    "pos": "n.",
    "cn_def": "章；章節",
    "en_def": "one of the main parts of a book",
    "sentence": "A: How much of the training manual have you finished translating, because the Tokyo office needs it before the workshop starts? B: I have completed the first {{BLANK}} about customer service, and I will finish the part on handling complaints by Thursday if nobody gives me extra work this week.",
    "cn": "A：那本訓練手冊你翻譯完多少了？因為東京辦公室在研習開始前就需要它。 B：我已經完成了關於客戶服務的第一【章】，如果這週沒有人給我額外工作，我會在星期四前完成處理客訴的部分。"
  },
  {
    "word": "page",
    "pos": "n.",
    "cn_def": "頁；頁面",
    "en_def": "one side of a sheet of paper in a book",
    "sentence": "A: Why did the printer call us this morning, and is there a problem with the catalog we sent them yesterday? B: Yes, one {{BLANK}} near the end is missing the product prices, so they have stopped printing until we send them a corrected file before noon today.",
    "cn": "A：印刷廠今天早上為什麼打電話給我們？我們昨天寄給他們的型錄有問題嗎？ B：是的，接近最後的一【頁】少了產品價格，所以他們暫停印刷，直到我們今天中午前寄給他們修正過的檔案。"
  },
  {
    "word": "cover",
    "pos": "n.",
    "cn_def": "封面；書皮",
    "en_def": "the outside front and back of a book",
    "sentence": "A: What do customers usually notice first when they walk past the new books table at the front of our store? B: Most people look at the {{BLANK}}, so we chose bright colors and a large photo of the city to make the travel guide stand out from the others.",
    "cn": "A：顧客走過我們店門口的新書桌時，通常最先注意到什麼？ B：大多數人會看【封面】，所以我們選了鮮豔的顏色和一張大幅城市照片，讓這本旅遊指南在其他書中脫穎而出。"
  },
  {
    "word": "genre",
    "pos": "n.",
    "cn_def": "類型；體裁",
    "en_def": "a type of book, film, or music",
    "sentence": "A: Which kind of books should we put on the main display this month, since sales have been slow since the holidays? B: Mystery is the most popular {{BLANK}} with our customers right now, so let's choose ten crime stories and add a small sign that offers a twenty percent discount.",
    "cn": "A：既然假期後銷售一直很慢，我們這個月應該在主要展示區放哪一類書？ B：推理是目前我們顧客最喜歡的【類型】，所以我們選十本犯罪小說，再加一個提供八折優惠的小標示。"
  },
  {
    "word": "novel",
    "pos": "n.",
    "cn_def": "小說",
    "en_def": "a long story about imaginary people and events",
    "sentence": "A: What is the new book by the famous journalist about, and should we order more copies for the store before the weekend? B: It is her first {{BLANK}}, a long story about a family running a small hotel, and early reviews are so good that we should order at least two hundred copies.",
    "cn": "A：那位知名記者的新書是關於什麼的？我們週末前應該為店裡多訂一些嗎？ B：這是她的第一本【小說】，一個關於一家人經營小旅館的長篇故事，早期書評非常好，我們應該至少訂兩百本。"
  },
  {
    "word": "fiction",
    "pos": "n.",
    "cn_def": "小說；虛構作品",
    "en_def": "stories about imaginary people and events",
    "sentence": "A: Why are you moving all those books to the second floor, and where will customers find the travel guides now? B: The manager wants all the {{BLANK}} together upstairs, so stories about imaginary people will be on the second floor, while travel guides and cookbooks will stay near the entrance.",
    "cn": "A：你為什麼要把那些書都搬到二樓？顧客現在要去哪裡找旅遊指南？ B：經理希望把所有【小說類書籍】集中放在樓上，所以關於虛構人物的故事會放在二樓，而旅遊指南和食譜會留在入口附近。"
  },
  {
    "word": "nonfiction",
    "pos": "n.",
    "cn_def": "非小說類作品；紀實文學",
    "en_def": "writing about real facts, people, and events",
    "sentence": "A: What kind of books do the employees in our company book club prefer, and should we choose a mystery for next month? B: Most members prefer {{BLANK}}, such as true stories about successful business leaders, so I suggest choosing a biography instead of a mystery for our next meeting.",
    "cn": "A：我們公司讀書會的員工喜歡哪一類書？下個月我們應該選一本推理小說嗎？ B：大多數成員比較喜歡【非小說類書籍】，例如成功企業領袖的真實故事，所以我建議下次聚會選一本傳記而不是推理小說。"
  },
  {
    "word": "plot",
    "pos": "n.",
    "cn_def": "情節；故事梗概",
    "en_def": "the series of events in a story",
    "sentence": "A: Did you enjoy the mystery novel that the book club chose for this month, or did you stop halfway through it? B: I finished it in two days because the {{BLANK}} was full of surprises, and I never guessed who stole the money from the bank until the last chapter.",
    "cn": "A：你喜歡讀書會這個月選的那本推理小說嗎？還是讀到一半就放棄了？ B：我兩天就讀完了，因為【情節】充滿驚喜，直到最後一章我都沒猜到是誰偷了銀行的錢。"
  },
  {
    "word": "character",
    "pos": "n.",
    "cn_def": "角色；人物",
    "en_def": "a person in a story, film, or play",
    "sentence": "A: What did the readers at the library discussion say about the new novel, and did they like the ending? B: Most of them loved the main {{BLANK}}, a hard-working young nurse who opens her own clinic, but several people thought the ending was too sad and too sudden.",
    "cn": "A：圖書館討論會的讀者對那本新小說有什麼看法？他們喜歡結局嗎？ B：他們大多數人都很喜歡主要【角色】，一位開設自己診所的勤奮年輕護士，但有幾個人覺得結局太悲傷也太突然。"
  },
  {
    "word": "setting",
    "pos": "n.",
    "cn_def": "背景；場景",
    "en_def": "the place and time in which a story happens",
    "sentence": "A: Why does the publisher want the writer to make changes to the story before it is printed next spring? B: They think the {{BLANK}} should be modern Taipei instead of a small village in the past, because young readers will connect more easily with a busy city they know.",
    "cn": "A：出版社為什麼要作者在明年春天印刷前修改故事？ B：他們認為故事【背景】應該是現代的台北，而不是過去的小村莊，因為年輕讀者會更容易對他們熟悉的繁忙城市產生共鳴。"
  },
  {
    "word": "theme",
    "pos": "n.",
    "cn_def": "主題",
    "en_def": "the main subject or idea in a piece of writing",
    "sentence": "A: What is the main idea of the business novel we are discussing at lunch, since I only finished half of it? B: The central {{BLANK}} is teamwork, because the story shows how a small group of workers saves their failing company by listening to each other and sharing ideas.",
    "cn": "A：我們午餐時要討論的那本商業小說主要想法是什麼？我只讀完了一半。 B：核心【主題】是團隊合作，因為故事描述一小群員工如何透過互相傾聽和分享想法，拯救了他們快倒閉的公司。"
  },
  {
    "word": "narrative",
    "pos": "n.",
    "cn_def": "敘述；故事",
    "en_def": "a story or a description of events",
    "sentence": "A: Why did the editor ask you to rewrite the company history book, when you already spent six months on it? B: She said the {{BLANK}} jumped between different years too often, so readers got confused, and she wants the story told in order from the founding of the company.",
    "cn": "A：既然你已經花了六個月寫那本公司歷史書，編輯為什麼還要你重寫？ B：她說【敘述】太常在不同年份之間跳來跳去，讓讀者感到混亂，她希望故事從公司創立開始依序講述。"
  },
  {
    "word": "dialogue",
    "pos": "n.",
    "cn_def": "對話",
    "en_def": "a conversation between people in a book, play, or film",
    "sentence": "A: What do you think of the new English textbook for our staff training, and is it useful for beginners? B: I like it because each lesson has a short {{BLANK}} between a hotel clerk and a guest, so the trainees can practice speaking in pairs before they talk to real customers.",
    "cn": "A：你覺得我們員工訓練用的新英文課本怎麼樣？對初學者有用嗎？ B：我喜歡它，因為每一課都有一段飯店櫃台人員和客人之間的簡短【對話】，所以受訓者可以在和真正的顧客交談前兩人一組練習口說。"
  },
  {
    "word": "description",
    "pos": "n.",
    "cn_def": "描述；說明",
    "en_def": "words that tell what something is like",
    "sentence": "A: Has the online bookstore added the new cookbook to its website yet, because several customers have asked when they can order it? B: Not yet, they are still waiting for a short {{BLANK}} of the book, so I need to send them a paragraph about the recipes and the chef by tomorrow morning.",
    "cn": "A：網路書店把新食譜書放上網站了嗎？因為有好幾位顧客問什麼時候可以訂購。 B：還沒有，他們還在等這本書的簡短【介紹】，所以我需要在明天早上前寄給他們一段關於食譜和主廚的文字。"
  },
  {
    "word": "edition",
    "pos": "n.",
    "cn_def": "版本；版次",
    "en_def": "one version of a book printed at a particular time",
    "sentence": "A: Why are some customers returning the accounting textbook they bought from us last month, and is something wrong with it? B: The publisher released a new {{BLANK}} with updated tax rules last week, so the professors told their students to buy the latest version instead of the old one.",
    "cn": "A：為什麼有些顧客要退回上個月向我們買的會計課本？書有什麼問題嗎？ B：出版社上週發行了更新稅法的新【版本】，所以教授們要學生改買最新版而不是舊版。"
  },
  {
    "word": "publisher",
    "pos": "n.",
    "cn_def": "出版社；出版商",
    "en_def": "a company that prepares and sells books",
    "sentence": "A: Have you heard back from anyone about the business guide you wrote last year, or are you still waiting for an answer? B: Yes, a large {{BLANK}} in Taipei called me yesterday and offered to print five thousand copies, so I am meeting their editor next Tuesday to sign the contract.",
    "cn": "A：你去年寫的那本商業指南有收到任何回音嗎？還是你還在等回覆？ B：有，台北一家大型【出版社】昨天打電話給我，提議印五千本，所以我下週二要和他們的編輯見面簽約。"
  },
  {
    "word": "hardcover",
    "pos": "n.",
    "cn_def": "精裝本",
    "en_def": "a book with a stiff, strong cover",
    "sentence": "A: Should we order the cheaper version of the art book for the store, or will customers pay more for a better one? B: For art books, many customers prefer the {{BLANK}} because it is strong and looks beautiful on a shelf, so let's order mostly that version even though it costs more.",
    "cn": "A：我們店裡應該訂那本藝術書比較便宜的版本，還是顧客會願意多付錢買比較好的？ B：對藝術書來說，很多顧客偏好【精裝本】，因為它很堅固，放在書架上也很好看，所以即使比較貴，我們還是大多訂那個版本吧。"
  },
  {
    "word": "paperback",
    "pos": "n.",
    "cn_def": "平裝本",
    "en_def": "a book with a soft paper cover",
    "sentence": "A: Which version of the novel should I take on my business trip to Singapore, since my suitcase is already quite heavy? B: You should take the {{BLANK}}, because it is light and small enough to fit in your jacket pocket, and it costs only half the price of the other one.",
    "cn": "A：我去新加坡出差應該帶哪個版本的小說？我的行李箱已經很重了。 B：你應該帶【平裝本】，因為它又輕又小，可以放進外套口袋，而且價格只有另一種的一半。"
  },
  {
    "word": "illustration",
    "pos": "n.",
    "cn_def": "插圖；圖解",
    "en_def": "a picture in a book",
    "sentence": "A: Why is the children's book about saving energy taking so long to finish, when the writer sent us the story in May? B: The artist is still drawing the last {{BLANK}} for the final page, and she wants every picture to be bright and clear so young readers can understand the ideas.",
    "cn": "A：既然作者五月就把故事寄給我們了，那本關於節約能源的童書為什麼要花這麼久才完成？ B：畫家還在畫最後一頁的最後一張【插圖】，她希望每張圖都鮮明清楚，讓年輕讀者能理解其中的概念。"
  },
  {
    "word": "read",
    "pos": "v.",
    "cn_def": "閱讀；讀",
    "en_def": "to look at words and understand them",
    "sentence": "A: Have you had time to look at the new safety manual before the training session with the factory workers this afternoon? B: Yes, I managed to {{BLANK}} the whole thing on the train this morning, and I wrote down three questions about the fire exits that I want to ask the manager.",
    "cn": "A：今天下午和工廠員工的訓練課程之前，你有時間看新的安全手冊嗎？ B：有，我今天早上在火車上把整本【讀】完了，還寫下了三個關於逃生出口的問題要問經理。"
  },
  {
    "word": "review",
    "pos": "n.",
    "cn_def": "評論；書評",
    "en_def": "a written report that gives an opinion about a book, film, etc.",
    "sentence": "A: How did the newspaper describe our company's new travel guide, and will it help us sell more copies this month? B: The {{BLANK}} in Sunday's newspaper said it was clear, useful, and full of great photos, so I expect sales to rise quickly over the next few weeks.",
    "cn": "A：報紙怎麼描述我們公司的新旅遊指南？這會幫助我們這個月多賣一些嗎？ B：週日報紙上的【書評】說它內容清楚、實用，而且有很多很棒的照片，所以我預期接下來幾週銷售會快速上升。"
  },
  {
    "word": "bookmark",
    "pos": "n.",
    "cn_def": "書籤",
    "en_def": "a thin strip put in a book to mark a page",
    "sentence": "A: Are we giving customers anything free with their purchases during the book fair this weekend, like we did last year? B: Yes, every customer will get a paper {{BLANK}} with our store's logo and website on it, so they can keep their place in a book and remember to shop with us again.",
    "cn": "A：這週末書展期間，我們會像去年一樣隨購買贈送顧客任何東西嗎？ B：會，每位顧客都會拿到一張印有我們店標誌和網址的紙製【書籤】，這樣他們可以標記閱讀的位置，也會記得再來我們店購物。"
  },
  {
    "word": "library",
    "pos": "n.",
    "cn_def": "圖書館；圖書室",
    "en_def": "a place where books are kept for people to read or borrow",
    "sentence": "A: Where can I find old reports about the market in Southeast Asia, since I need them for my presentation on Monday? B: The company {{BLANK}} on the third floor keeps copies of all reports from the past ten years, and you can borrow them for two weeks if you show your staff card.",
    "cn": "A：我可以在哪裡找到東南亞市場的舊報告？我星期一的簡報需要用到。 B：三樓的公司【圖書室】保存了過去十年所有報告的副本，只要出示員工證，你就可以借兩個星期。"
  },
  {
    "word": "literature",
    "pos": "n.",
    "cn_def": "文學",
    "en_def": "books, poems, and plays that are thought to be important art",
    "sentence": "A: Why did the bookstore hire a new staff member for the second floor, and what will she be responsible for? B: She studied English {{BLANK}} at university and knows a lot about famous poems and plays, so she will help customers choose good books and organize our monthly reading events.",
    "cn": "A：書店為什麼為二樓僱用了一位新員工？她會負責什麼？ B：她大學念英國【文學】，對著名的詩和劇本很了解，所以她會幫顧客挑選好書，並籌辦我們每月的讀書活動。"
  },
  {
    "word": "classic",
    "pos": "n.",
    "cn_def": "經典作品；名著",
    "en_def": "a famous book that people have admired for a long time",
    "sentence": "A: Which books should we include in the gift box for our loyal customers this holiday season, since we want something that lasts? B: Let's include a famous {{BLANK}} that people have loved for over a hundred years, along with a new bestseller, so the box appeals to both older and younger readers.",
    "cn": "A：這個假期我們要在送給忠實顧客的禮盒裡放哪些書？我們想要有長久價值的東西。 B：我們放一本人們喜愛了一百多年的著名【經典作品】，再加一本新的暢銷書，讓禮盒同時吸引年長和年輕的讀者。"
  },
  {
    "word": "bestseller",
    "pos": "n.",
    "cn_def": "暢銷書",
    "en_def": "a book that sells a very large number of copies",
    "sentence": "A: Why did the publishing company decide to print another twenty thousand copies of the cookbook this month? B: It became a {{BLANK}} just two weeks after it came out, because a famous TV chef recommended it on her show, and many bookstores have already sold all their copies.",
    "cn": "A：出版公司為什麼決定這個月再加印兩萬本那本食譜書？ B：它出版短短兩週就成為【暢銷書】，因為一位知名電視主廚在節目中推薦了它，許多書店都已經賣光了。"
  },
  {
    "word": "inspiring",
    "pos": "adj.",
    "cn_def": "激勵人心的；鼓舞人的",
    "en_def": "making people feel excited and want to do something",
    "sentence": "A: Why are so many employees talking about the speaker at yesterday's training event, and what did she talk about? B: Her speech was very {{BLANK}}, because she described how she started her bookstore with almost no money, and now many of us feel ready to try new ideas at work.",
    "cn": "A：為什麼這麼多員工在談論昨天訓練活動的講者？她講了什麼？ B：她的演講非常【激勵人心】，因為她描述了自己如何在幾乎沒有錢的情況下開了書店，現在我們很多人都覺得準備好在工作上嘗試新點子了。"
  }
];

const MCQS = [
  {
    "q": "The bookstore invited a local _____ to sign copies of her new novel. Customers waited in line for over an hour to meet her.",
    "options": [
      "bookmark",
      "edition",
      "author",
      "genre"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The marketing team suggested changing the _____ of the guide. They believed a shorter name would be easier for customers to remember.",
    "options": [
      "library",
      "plot",
      "illustration",
      "title"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The training manual is divided into ten parts. Each _____ ends with a short quiz to check what employees have learned.",
    "options": [
      "cover",
      "chapter",
      "publisher",
      "dialogue"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Please check the catalog carefully before printing. The phone number on the last _____ is missing one digit.",
    "options": [
      "page",
      "theme",
      "review",
      "novel"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The designer chose a bright red _____ for the new travel guide. She hopes it will catch shoppers' eyes in the store window.",
    "options": [
      "literature",
      "character",
      "setting",
      "cover"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Mystery is the fastest-growing _____ at our bookstore this year. We plan to add two more shelves for these titles next month.",
    "options": [
      "genre",
      "edition",
      "paperback",
      "narrative"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The famous journalist has written her first _____. The long story follows a family that runs a small hotel by the sea.",
    "options": [
      "bookmark",
      "description",
      "novel",
      "publisher"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Customers looking for stories about imaginary people should go to the second floor. All _____ is arranged there by the author's last name.",
    "options": [
      "page",
      "fiction",
      "chapter",
      "bookmark"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Our book club usually reads true stories about real business leaders. Members say _____ helps them learn useful lessons for their careers.",
    "options": [
      "title",
      "illustration",
      "hardcover",
      "nonfiction"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The reviewer praised the novel's exciting _____. She said the events moved quickly and surprised her until the very end.",
    "options": [
      "library",
      "plot",
      "cover",
      "edition"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Readers loved the main _____ in the story. She is a young nurse who works hard to open her own clinic.",
    "options": [
      "character",
      "bookmark",
      "publisher",
      "genre"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The story takes place in a busy hotel in Tokyo. The writer chose this _____ because she worked there for five years.",
    "options": [
      "title",
      "paperback",
      "setting",
      "literature"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Teamwork is the main _____ of the business novel. Every chapter shows how workers solve problems by sharing their ideas.",
    "options": [
      "theme",
      "edition",
      "cover",
      "page"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The editor asked the writer to tell the events in the order they happened. She felt the _____ was too confusing for most readers.",
    "options": [
      "bookmark",
      "narrative",
      "library",
      "hardcover"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Our manager shared a very _____ story about a woman who built a successful bakery. It encouraged the whole team to work harder.",
    "options": [
      "nonfiction",
      "paperback",
      "inspiring",
      "hardcover"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Each lesson in the English textbook includes a short _____ between a hotel clerk and a guest. Trainees practice it in pairs.",
    "options": [
      "bestseller",
      "setting",
      "publisher",
      "dialogue"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The online store needs a short _____ of each product. Please write a few sentences explaining what the book is about.",
    "options": [
      "description",
      "plot",
      "classic",
      "novel"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The publisher released an updated _____ of the accounting textbook. It includes the new tax rules that began in January.",
    "options": [
      "title",
      "edition",
      "character",
      "author"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The writer finally found a _____ for her business guide. The company agreed to print five thousand copies next spring.",
    "options": [
      "setting",
      "illustration",
      "genre",
      "publisher"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Many art lovers prefer to buy the _____ of this photo book. It is stronger and lasts much longer than the cheaper version.",
    "options": [
      "theme",
      "dialogue",
      "hardcover",
      "review"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "If you travel often, the _____ is a good choice. It is light, small, and costs about half the price of the other version.",
    "options": [
      "chapter",
      "paperback",
      "literature",
      "narrative"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The children's book has a colorful _____ on every page. The pictures help young readers understand the story more easily.",
    "options": [
      "publisher",
      "bestseller",
      "nonfiction",
      "illustration"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Please _____ the safety instructions aloud to the new workers before their shift. Everyone must hear the rules at least once.",
    "options": [
      "review",
      "bookmark",
      "read",
      "cover"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The newspaper published a positive _____ of our travel guide on Sunday. Sales went up by thirty percent the following week.",
    "options": [
      "review",
      "setting",
      "bookmark",
      "genre"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Every customer at the book fair received a free paper _____. It helps readers keep their place without folding the pages.",
    "options": [
      "plot",
      "edition",
      "theme",
      "bookmark"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Employees can borrow market reports from the company _____ on the third floor. Each report may be kept for two weeks.",
    "options": [
      "library",
      "cover",
      "narrative",
      "character"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The new staff member studied English _____ at university. She knows a lot about famous poems, plays, and old novels.",
    "options": [
      "page",
      "illustration",
      "literature",
      "dialogue"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "This novel was written over a hundred years ago. It is still a _____ that many teachers ask their students to read.",
    "options": [
      "publisher",
      "classic",
      "title",
      "paperback"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The cookbook became a _____ only two weeks after it came out. The publisher quickly printed twenty thousand more copies.",
    "options": [
      "chapter",
      "setting",
      "bestseller",
      "description"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The speaker's story about starting her own company was truly _____. Many employees said they felt ready to try new ideas.",
    "options": [
      "inspiring",
      "paperback",
      "hardcover",
      "nonfiction"
    ],
    "answer": 0,
    "vocabIndex": 28
  }
];

const LOOKUP = {
  "author": {
    "pos": "n.",
    "en_def": "a person who writes a book",
    "cn_def": "作者；作家"
  },
  "title": {
    "pos": "n.",
    "en_def": "the name of a book or other piece of writing",
    "cn_def": "書名；標題"
  },
  "chapter": {
    "pos": "n.",
    "en_def": "one of the main parts of a book",
    "cn_def": "章；章節"
  },
  "page": {
    "pos": "n.",
    "en_def": "one side of a sheet of paper in a book",
    "cn_def": "頁；頁面"
  },
  "cover": {
    "pos": "n.",
    "en_def": "the outside front and back of a book",
    "cn_def": "封面；書皮"
  },
  "genre": {
    "pos": "n.",
    "en_def": "a type of book, film, or music",
    "cn_def": "類型；體裁"
  },
  "novel": {
    "pos": "n.",
    "en_def": "a long story about imaginary people and events",
    "cn_def": "小說"
  },
  "fiction": {
    "pos": "n.",
    "en_def": "stories about imaginary people and events",
    "cn_def": "小說；虛構作品"
  },
  "nonfiction": {
    "pos": "n.",
    "en_def": "writing about real facts, people, and events",
    "cn_def": "非小說類作品；紀實文學"
  },
  "plot": {
    "pos": "n.",
    "en_def": "the series of events in a story",
    "cn_def": "情節；故事梗概"
  },
  "character": {
    "pos": "n.",
    "en_def": "a person in a story, film, or play",
    "cn_def": "角色；人物"
  },
  "setting": {
    "pos": "n.",
    "en_def": "the place and time in which a story happens",
    "cn_def": "背景；場景"
  },
  "theme": {
    "pos": "n.",
    "en_def": "the main subject or idea in a piece of writing",
    "cn_def": "主題"
  },
  "narrative": {
    "pos": "n.",
    "en_def": "a story or a description of events",
    "cn_def": "敘述；故事"
  },
  "dialogue": {
    "pos": "n.",
    "en_def": "a conversation between people in a book, play, or film",
    "cn_def": "對話"
  },
  "description": {
    "pos": "n.",
    "en_def": "words that tell what something is like",
    "cn_def": "描述；說明"
  },
  "edition": {
    "pos": "n.",
    "en_def": "one version of a book printed at a particular time",
    "cn_def": "版本；版次"
  },
  "publisher": {
    "pos": "n.",
    "en_def": "a company that prepares and sells books",
    "cn_def": "出版社；出版商"
  },
  "hardcover": {
    "pos": "n.",
    "en_def": "a book with a stiff, strong cover",
    "cn_def": "精裝本"
  },
  "paperback": {
    "pos": "n.",
    "en_def": "a book with a soft paper cover",
    "cn_def": "平裝本"
  },
  "illustration": {
    "pos": "n.",
    "en_def": "a picture in a book",
    "cn_def": "插圖；圖解"
  },
  "read": {
    "pos": "v.",
    "en_def": "to look at words and understand them",
    "cn_def": "閱讀；讀"
  },
  "review": {
    "pos": "n.",
    "en_def": "a written report that gives an opinion about a book, film, etc.",
    "cn_def": "評論；書評"
  },
  "bookmark": {
    "pos": "n.",
    "en_def": "a thin strip put in a book to mark a page",
    "cn_def": "書籤"
  },
  "library": {
    "pos": "n.",
    "en_def": "a place where books are kept for people to read or borrow",
    "cn_def": "圖書館；圖書室"
  },
  "literature": {
    "pos": "n.",
    "en_def": "books, poems, and plays that are thought to be important art",
    "cn_def": "文學"
  },
  "classic": {
    "pos": "n.",
    "en_def": "a famous book that people have admired for a long time",
    "cn_def": "經典作品；名著"
  },
  "bestseller": {
    "pos": "n.",
    "en_def": "a book that sells a very large number of copies",
    "cn_def": "暢銷書"
  },
  "inspiring": {
    "pos": "adj.",
    "en_def": "making people feel excited and want to do something",
    "cn_def": "激勵人心的；鼓舞人的"
  }
};

const EXTRA_GLOSSES = {};
