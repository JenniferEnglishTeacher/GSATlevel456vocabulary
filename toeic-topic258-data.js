// Topic 258 Quiz Data: News 新聞
// Source word list: https://www.examword.com/group-topic/news — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T258 - News 新聞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "publish",
    "pos": "v.",
    "cn_def": "出版；發表；刊登",
    "en_def": "to print or put a story, book, or article out for the public",
    "sentence": "A: Has the marketing team finished the article about our new electric scooter, and when will the local newspaper share it with readers? B: The editor said they will {{BLANK}} it in this Friday's business section, so we should prepare extra stock in the stores before customers start calling about it.",
    "cn": "A：行銷團隊完成我們新款電動滑板車的文章了嗎？當地報紙什麼時候會和讀者分享？ B：編輯說他們會在本週五的商業版【刊登】這篇文章，所以我們應該在顧客開始打電話詢問之前，先在店裡準備額外的庫存。"
  },
  {
    "word": "publication",
    "pos": "n.",
    "cn_def": "出版品；刊物；出版",
    "en_def": "a book, magazine, or newspaper that is printed and sold",
    "sentence": "A: Which magazine should we choose for the advertisement about our new hotel, since our budget this year is quite small? B: I suggest the monthly travel {{BLANK}} that most business travelers read on the train, because it reaches the right customers and its prices are lower than the big national newspapers.",
    "cn": "A：既然我們今年的預算很少，我們應該選哪本雜誌來刊登新飯店的廣告？ B：我建議選那份大多數商務旅客會在火車上閱讀的每月旅遊【刊物】，因為它能接觸到對的客群，而且價格比大型全國性報紙低。"
  },
  {
    "word": "provide",
    "pos": "v.",
    "cn_def": "提供",
    "en_def": "to give something that people need",
    "sentence": "A: Why do so many of our employees read the company newsletter every Monday morning before they start their work? B: It is because the newsletter can {{BLANK}} useful information about new projects, schedule changes, and training courses, so everyone knows what is happening in other departments during the week.",
    "cn": "A：為什麼我們有這麼多員工每週一早上開始工作前都會讀公司的電子報？ B：因為電子報能【提供】關於新專案、時程變動和培訓課程的實用資訊，所以每個人都知道這週其他部門正在發生什麼事。"
  },
  {
    "word": "content",
    "pos": "n.",
    "cn_def": "內容",
    "en_def": "the information, articles, or videos in a newspaper, website, or program",
    "sentence": "A: Why did the number of visitors to our news website drop so much last month, even though we spent more money on advertising? B: Many readers complained that the {{BLANK}} was too similar to other sites, so our editors are now planning more local stories and short videos to attract them back.",
    "cn": "A：為什麼我們新聞網站上個月的訪客數掉了這麼多，即使我們在廣告上花了更多錢？ B：很多讀者抱怨網站的【內容】和其他網站太相似，所以我們的編輯現在正在規劃更多在地報導和短片來把他們吸引回來。"
  },
  {
    "word": "variety",
    "pos": "n.",
    "cn_def": "多樣；各種",
    "en_def": "many different kinds of things",
    "sentence": "A: What do you like most about the new news app that the IT department recommended for everyone in the office last week? B: It offers a wide {{BLANK}} of topics, such as business, sports, technology, and travel, so I can quickly read the stories I care about during my short lunch break.",
    "cn": "A：IT部門上週推薦給辦公室每個人的新的新聞應用程式，你最喜歡它哪一點？ B：它提供【各式各樣】的主題，例如商業、運動、科技和旅遊，所以我可以在短暫的午休時間快速閱讀我在乎的報導。"
  },
  {
    "word": "theme",
    "pos": "n.",
    "cn_def": "主題",
    "en_def": "the main subject or idea of something",
    "sentence": "A: Have you decided what the special weekend edition of the newspaper will focus on, because the advertisers keep asking me about it? B: Yes, the main {{BLANK}} will be green energy, so we will include interviews with local companies that use solar power and tips for families who want to save electricity.",
    "cn": "A：你決定週末特刊要聚焦在什麼了嗎？因為廣告商一直在問我這件事。 B：是的，主要【主題】會是綠色能源，所以我們會收錄對使用太陽能的在地公司的訪談，以及給想要省電的家庭的小撇步。"
  },
  {
    "word": "concern",
    "pos": "n.",
    "cn_def": "擔憂；關切",
    "en_def": "a feeling of worry about something important",
    "sentence": "A: Why did the manager call an emergency meeting right after the evening news report about our factory near the river? B: The report raised public {{BLANK}} about the safety of our products, so she wants to answer customers' questions quickly and explain the tests we do before anything leaves the building.",
    "cn": "A：為什麼經理在晚間新聞報導我們河邊工廠的消息後，馬上召開緊急會議？ B：那則報導引起大眾對我們產品安全的【擔憂】，所以她想要迅速回答顧客的問題，並說明我們在任何產品出廠前所做的測試。"
  },
  {
    "word": "specialized",
    "pos": "adj.",
    "cn_def": "專門的；專業的",
    "en_def": "made for or about one particular subject or group",
    "sentence": "A: Where can our engineers find the latest information about new building materials, since the daily newspapers rarely cover that subject? B: They should subscribe to a {{BLANK}} magazine for the construction industry, which publishes detailed reports, expert interviews, and product reviews that ordinary readers would probably find too technical.",
    "cn": "A：既然日報很少報導那個主題，我們的工程師可以去哪裡找到關於新建材的最新資訊？ B：他們應該訂閱一本營建業的【專業】雜誌，它刊登詳細的報導、專家訪談和產品評論，一般讀者可能會覺得太技術性。"
  },
  {
    "word": "aim",
    "pos": "v.",
    "cn_def": "目標是；旨在；瞄準",
    "en_def": "to plan or try to achieve something",
    "sentence": "A: Why is the newspaper changing its website design and adding so many short videos to every story this year? B: The publishers {{BLANK}} to attract younger readers who usually get their news from their phones, and they hope the new design will also bring in more online advertising money.",
    "cn": "A：為什麼報社今年要改變網站設計，還在每篇報導裡加入這麼多短片？ B：發行人的【目標是】吸引通常從手機取得新聞的年輕讀者，他們也希望新設計能帶來更多線上廣告收入。"
  },
  {
    "word": "digest",
    "pos": "n.",
    "cn_def": "摘要；文摘",
    "en_def": "a short report that gives the most important news or facts",
    "sentence": "A: I don't have time to read all the industry reports every morning, so how do you stay updated on the market before the sales meeting? B: I read the daily email {{BLANK}} from our research team, which lists the five most important business stories in a few short paragraphs.",
    "cn": "A：我每天早上沒時間讀所有的產業報告，那你是怎麼在業務會議前掌握最新市場動態的？ B：我會讀研究團隊每天寄出的電子郵件【摘要】，它用幾段簡短的文字列出五則最重要的商業新聞。"
  },
  {
    "word": "popularity",
    "pos": "n.",
    "cn_def": "受歡迎；普及",
    "en_def": "the state of being liked by many people",
    "sentence": "A: Why did the television station decide to move the business news program from late at night to seven o'clock in the evening? B: Its {{BLANK}} has grown quickly among office workers, so the managers believe that more viewers will watch it after dinner, which will also make advertising slots more valuable.",
    "cn": "A：為什麼電視台決定把商業新聞節目從深夜移到晚上七點？ B：它在上班族之間的【受歡迎程度】迅速增加，所以主管們相信晚餐後會有更多觀眾收看，這也會讓廣告時段更有價值。"
  },
  {
    "word": "regardless of",
    "pos": "phr.",
    "cn_def": "不管；無論",
    "en_def": "without being affected by something",
    "sentence": "A: Should we still send the press release to the newspapers today, even though the director has not approved the final photos yet? B: Yes, the event is next Monday, so we must send it this afternoon {{BLANK}} the photos, and we can email better pictures to the reporters tomorrow.",
    "cn": "A：即使總監還沒核准最後的照片，我們今天還是要把新聞稿寄給報社嗎？ B：是的，活動在下週一，所以【不管】照片如何，我們今天下午都必須寄出，明天再把更好的照片用電子郵件寄給記者。"
  },
  {
    "word": "affordable",
    "pos": "adj.",
    "cn_def": "負擔得起的；價格實惠的",
    "en_def": "cheap enough for most people to buy",
    "sentence": "A: Many of our customers have stopped buying the printed newspaper, so what is the company planning to do about falling sales? B: We are launching an {{BLANK}} digital subscription that costs only three dollars a month, so students and young workers can read every article on their phones without paying too much.",
    "cn": "A：很多顧客已經不再買紙本報紙了，公司打算怎麼應對銷量下滑？ B：我們要推出一個【價格實惠的】數位訂閱方案，每月只要三美元，讓學生和年輕上班族不用花太多錢，就能在手機上閱讀每一篇文章。"
  },
  {
    "word": "approachable",
    "pos": "adj.",
    "cn_def": "平易近人的；容易親近的",
    "en_def": "friendly and easy to talk to",
    "sentence": "A: How was your interview with the new mayor for tomorrow's front-page story, and did she answer all of your difficult questions? B: She was very {{BLANK}} and smiled the whole time, so I felt relaxed asking about the city budget, and she even gave me her assistant's phone number for follow-up questions.",
    "cn": "A：你為明天頭版報導對新市長做的專訪如何？她有回答你所有困難的問題嗎？ B：她非常【平易近人】，全程都面帶微笑，所以我問市政預算的問題時覺得很輕鬆，她甚至還給了我她助理的電話號碼，方便後續提問。"
  },
  {
    "word": "reliable",
    "pos": "adj.",
    "cn_def": "可靠的；可信賴的",
    "en_def": "able to be trusted because it is correct or works well",
    "sentence": "A: Where did you find the sales figures that you used in your presentation to the board of directors yesterday afternoon? B: I took them from a {{BLANK}} business newspaper that checks every fact carefully, because I did not want to repeat any wrong numbers that I had seen on social media.",
    "cn": "A：你昨天下午向董事會簡報時用的銷售數字是從哪裡找到的？ B：我是從一份會仔細查證每個事實的【可靠】商業報紙取得的，因為我不想重複我在社群媒體上看到的任何錯誤數字。"
  },
  {
    "word": "ubiquitous",
    "pos": "adj.",
    "cn_def": "無所不在的；隨處可見的",
    "en_def": "seeming to be everywhere at the same time",
    "sentence": "A: Why did our company stop printing advertisements in the morning newspaper and move most of the budget to online news sites? B: Smartphones have become {{BLANK}} in offices, trains, and coffee shops, so people now read the news on screens all day, and online ads reach many more of our customers.",
    "cn": "A：為什麼我們公司不再在早報上刊登廣告，而把大部分預算轉到線上新聞網站？ B：智慧型手機在辦公室、火車和咖啡店裡已經【隨處可見】，所以人們現在整天都在螢幕上看新聞，線上廣告能接觸到更多我們的顧客。"
  },
  {
    "word": "flick",
    "pos": "v.",
    "cn_def": "快速翻閱；快速轉台",
    "en_def": "to turn pages or change channels quickly",
    "sentence": "A: Do you actually read every article in the business magazines that we keep in the waiting room for our clients? B: Not really, I usually {{BLANK}} through the pages while I drink my coffee, and I only stop to read the stories about companies in our industry or interesting new products.",
    "cn": "A：你真的會讀我們放在等候室給客戶看的商業雜誌裡的每一篇文章嗎？ B：其實不會，我通常是邊喝咖啡邊【快速翻閱】，只有看到關於我們產業的公司或有趣的新產品的報導時才會停下來讀。"
  },
  {
    "word": "obviously",
    "pos": "adv.",
    "cn_def": "明顯地；顯然",
    "en_def": "in a way that is easy to see or understand",
    "sentence": "A: Did you watch the press conference this morning when the CEO answered questions about the delayed product launch? B: Yes, he was {{BLANK}} nervous, because his voice was shaking and he kept looking at his notes, so many reporters wrote that the company is hiding serious problems.",
    "cn": "A：你有看今天早上執行長回答產品延後上市問題的記者會嗎？ B：有，他【顯然】很緊張，因為他的聲音在發抖，還一直看他的筆記，所以很多記者寫說公司正在隱瞞嚴重的問題。"
  },
  {
    "word": "affair",
    "pos": "n.",
    "cn_def": "事件；事務；活動",
    "en_def": "an event or a matter, often an important or public one",
    "sentence": "A: Are you going to the opening of our new branch downtown next Friday, and will the local media be there? B: Yes, it is going to be a big {{BLANK}} with reporters from three television stations, so the manager asked everyone to dress formally and prepare short answers about our services.",
    "cn": "A：你下週五會去市中心我們新分店的開幕嗎？當地媒體會到場嗎？ B：會，那將會是一場盛大的【活動】，有三家電視台的記者到場，所以經理要求大家穿著正式，並準備關於我們服務的簡短回答。"
  },
  {
    "word": "direct",
    "pos": "v.",
    "cn_def": "指引；把…轉給；指揮",
    "en_def": "to send someone or something to a particular person or place; to manage",
    "sentence": "A: A reporter from the evening news just called me and asked about the problem with our online payment system, so what should I say? B: Please do not answer any questions yourself; just {{BLANK}} all calls from journalists to the public relations office, which will prepare an official statement this afternoon.",
    "cn": "A：晚間新聞的一位記者剛打電話給我，詢問我們線上付款系統的問題，我該怎麼說？ B：請不要自己回答任何問題，只要把所有記者的來電【轉給】公關室就好，他們今天下午會準備正式聲明。"
  },
  {
    "word": "enrich",
    "pos": "v.",
    "cn_def": "使豐富；充實",
    "en_def": "to make something better or more valuable",
    "sentence": "A: Why does the company pay for every employee to receive a free subscription to an international business newspaper? B: The managers believe reading news from other countries can {{BLANK}} our knowledge of global markets, which helps us make smarter decisions when we work with overseas partners and customers.",
    "cn": "A：為什麼公司要出錢讓每位員工免費訂閱一份國際商業報紙？ B：主管們相信閱讀其他國家的新聞能【充實】我們對全球市場的了解，這有助於我們和海外夥伴與客戶合作時做出更明智的決定。"
  },
  {
    "word": "horizon",
    "pos": "n.",
    "cn_def": "地平線；眼界；即將發生",
    "en_def": "the line where the sky meets the land; on the horizon = likely to happen soon",
    "sentence": "A: The newspaper said that our industry might face new rules on plastic packaging, but is anything going to happen soon? B: Yes, the article explained that big changes are on the {{BLANK}}, so our product team has already started testing paper boxes before the government announces the new law next year.",
    "cn": "A：報紙說我們的產業可能面臨塑膠包裝的新規定，但近期會有任何事發生嗎？ B：會，那篇文章說明重大改變【即將到來】，所以我們的產品團隊在政府明年宣布新法之前，就已經開始測試紙盒了。"
  },
  {
    "word": "track",
    "pos": "v.",
    "cn_def": "追蹤；追查",
    "en_def": "to follow the progress of something",
    "sentence": "A: How do you know so quickly when a news website mentions our company or one of our new products? B: Our marketing team uses special software to {{BLANK}} every online article and social media post about us, and it sends an alert to my phone whenever a new story appears.",
    "cn": "A：新聞網站提到我們公司或我們的新產品時，你怎麼會這麼快就知道？ B：我們的行銷團隊使用特別的軟體來【追蹤】每一篇關於我們的線上文章和社群媒體貼文，每當有新的報導出現，它就會傳送通知到我的手機。"
  },
  {
    "word": "appealing",
    "pos": "adj.",
    "cn_def": "吸引人的",
    "en_def": "attractive or interesting",
    "sentence": "A: Why does our online magazine get so many more readers when we put a large photo at the top of each article? B: Readers find stories with bright pictures much more {{BLANK}} than long pages of text, so they click on them, share them with friends, and stay on our website longer.",
    "cn": "A：為什麼我們的線上雜誌在每篇文章頂端放一張大照片時，會得到更多讀者？ B：讀者覺得有鮮豔圖片的報導比整頁長篇文字更【吸引人】，所以他們會點進去、分享給朋友，並在我們的網站停留更久。"
  },
  {
    "word": "halt",
    "pos": "v.",
    "cn_def": "停止；中止",
    "en_def": "to stop something",
    "sentence": "A: Did you read the morning news about the factory fire near the harbor, and will it affect our orders from that supplier? B: Yes, the report said the company had to {{BLANK}} production for at least two weeks, so we should contact another supplier today before our stores run out of stock.",
    "cn": "A：你有看到早上港口附近工廠火災的新聞嗎？這會影響我們向那家供應商下的訂單嗎？ B：會，報導說那家公司必須【停止】生產至少兩週，所以我們今天應該聯絡另一家供應商，免得我們的店缺貨。"
  },
  {
    "word": "convenience",
    "pos": "n.",
    "cn_def": "便利；方便",
    "en_def": "the quality of being easy, useful, and saving time",
    "sentence": "A: Why do you read the news on your tablet instead of buying a paper at the station like you used to do every morning? B: I enjoy the {{BLANK}} of getting updates instantly wherever I am, and I can save interesting articles to read again later without carrying heavy newspapers around the office.",
    "cn": "A：為什麼你現在用平板看新聞，不像以前每天早上在車站買報紙？ B：我喜歡無論在哪裡都能立即獲得最新消息的【便利】，而且我可以把有趣的文章存起來晚點再讀，不用在辦公室裡帶著沉重的報紙走來走去。"
  },
  {
    "word": "hassle",
    "pos": "n.",
    "cn_def": "麻煩；困擾",
    "en_def": "something annoying that causes trouble or takes effort",
    "sentence": "A: Did you cancel your newspaper delivery before you moved to the new apartment near the office last month? B: I tried, but it was a real {{BLANK}} because I had to call the customer service center three times and wait on the phone for almost an hour before someone helped me.",
    "cn": "A：你上個月搬到公司附近的新公寓之前，有取消報紙的配送嗎？ B：我試過了，但那真的很【麻煩】，因為我必須打三次電話給客服中心，還在電話上等了將近一個小時才有人幫我。"
  },
  {
    "word": "hectic",
    "pos": "adj.",
    "cn_def": "忙亂的；繁忙的",
    "en_def": "very busy and full of activity",
    "sentence": "A: How was your first week working as an assistant in the newsroom, and did you have time to learn the computer system? B: It was really {{BLANK}} because there was a big election, so reporters were running everywhere, phones never stopped ringing, and I only had a few minutes to eat lunch each day.",
    "cn": "A：你在新聞編輯室擔任助理的第一週怎麼樣？你有時間學電腦系統嗎？ B：真的很【忙亂】，因為有一場大型選舉，所以記者們到處跑，電話響個不停，我每天只有幾分鐘吃午餐。"
  },
  {
    "word": "redundant",
    "pos": "adj.",
    "cn_def": "多餘的；被裁員的",
    "en_def": "not needed because it repeats something or is no longer useful",
    "sentence": "A: Why did the editor remove the last two paragraphs from your article about the new shopping mall before it was printed? B: She said they were {{BLANK}} because they repeated the same information about the opening date and parking, so cutting them made the story shorter and easier for readers to follow.",
    "cn": "A：為什麼編輯在你那篇關於新購物中心的文章付印前，刪掉了最後兩段？ B：她說那兩段是【多餘的】，因為重複了關於開幕日期和停車的相同資訊，所以刪掉它們讓報導更短，也讓讀者更容易理解。"
  },
  {
    "word": "impressive",
    "pos": "adj.",
    "cn_def": "令人印象深刻的",
    "en_def": "very good and making people admire it",
    "sentence": "A: Have you seen the business news today about our company's sales results for the first half of the year? B: Yes, the numbers are really {{BLANK}}, with online orders up forty percent, so several journalists have already asked the CEO for interviews about how we grew so quickly.",
    "cn": "A：你看過今天關於我們公司上半年銷售成績的商業新聞了嗎？ B：看過了，數字真的【令人印象深刻】，線上訂單成長了百分之四十，所以已經有好幾位記者向執行長邀約採訪，想了解我們如何成長得這麼快。"
  },
  {
    "word": "editorial",
    "pos": "n.",
    "cn_def": "社論",
    "en_def": "an article in a newspaper that gives the editor's opinion",
    "sentence": "A: Did you notice that the city newspaper wrote about the plan to build a new train station next to our office park? B: Yes, today's {{BLANK}} strongly supported the plan, saying it would reduce traffic and help local businesses, so I think the city council will probably approve it next month.",
    "cn": "A：你有注意到市報寫了在我們辦公園區旁邊蓋新火車站的計畫嗎？ B：有，今天的【社論】強烈支持這個計畫，說它能減少交通壅塞並幫助在地企業，所以我想市議會下個月很可能會通過。"
  },
  {
    "word": "comprehend",
    "pos": "v.",
    "cn_def": "理解；領會",
    "en_def": "to understand something fully",
    "sentence": "A: Why did the training manager give every new staff member a simple summary of the long financial news report? B: Many of them found it hard to {{BLANK}} the technical terms about interest rates and stock prices, so the summary explains the main points in plain language with a few examples.",
    "cn": "A：為什麼培訓經理要給每位新員工一份那篇冗長財經新聞報導的簡單摘要？ B：他們很多人覺得很難【理解】關於利率和股價的專業術語，所以那份摘要用淺白的語言和幾個例子來說明重點。"
  },
  {
    "word": "slogan",
    "pos": "n.",
    "cn_def": "標語；口號",
    "en_def": "a short, easy-to-remember phrase used in advertising",
    "sentence": "A: The newspaper advertisement for our new coffee shop is almost ready, but do you think it needs anything else before we send it? B: I think we need a short, catchy {{BLANK}} under the logo, something like \"Fresh Every Morning,\" so readers will remember our name when they pass the shop on their way to work.",
    "cn": "A：我們新咖啡店的報紙廣告快完成了，但你覺得在寄出之前還需要加什麼嗎？ B：我覺得我們需要在標誌下方加一句簡短好記的【標語】，例如「每天早上都新鮮」，這樣讀者上班途中經過店門口時就會記得我們的名字。"
  },
  {
    "word": "retain",
    "pos": "v.",
    "cn_def": "保留；留住",
    "en_def": "to keep or continue to have something",
    "sentence": "A: Our online news service lost many subscribers last year, so what is the new manager going to change to keep the ones we still have? B: She plans to {{BLANK}} our current readers by offering them special discounts, a weekly newsletter, and free tickets to events, because finding new customers is much more expensive.",
    "cn": "A：我們的線上新聞服務去年流失了許多訂閱者，新經理打算做什麼改變來留住現有的訂閱者？ B：她打算透過提供特別折扣、每週電子報和免費活動門票來【留住】我們目前的讀者，因為開發新顧客的成本高得多。"
  },
  {
    "word": "alter",
    "pos": "v.",
    "cn_def": "更改；修改",
    "en_def": "to change something slightly",
    "sentence": "A: The reporter sent us a draft of her article about our hotel, but some of the prices she listed are wrong, so what should we do? B: Please call her this morning and politely ask her to {{BLANK}} the room prices before it goes to print, and send her our latest price list by email.",
    "cn": "A：那位記者寄給我們她關於我們飯店的文章草稿，但她列出的一些價格是錯的，我們該怎麼辦？ B：請今天早上打電話給她，禮貌地請她在付印前【修改】房價，並用電子郵件寄給她我們最新的價目表。"
  },
  {
    "word": "rumor",
    "pos": "n.",
    "cn_def": "謠言；傳聞",
    "en_def": "a story that people talk about that may not be true",
    "sentence": "A: Is it true that our company is going to close the branch in Kaohsiung, because several coworkers were talking about it at lunch? B: No, that is just a {{BLANK}} that started on social media last week, and the CEO will make an official announcement this afternoon to explain that the branch will actually expand.",
    "cn": "A：我們公司要關閉高雄分公司是真的嗎？因為好幾個同事午餐時都在談論這件事。 B：不是，那只是上週從社群媒體開始流傳的【謠言】，執行長今天下午會發布正式聲明，說明那間分公司其實會擴大營運。"
  },
  {
    "word": "deny",
    "pos": "v.",
    "cn_def": "否認",
    "en_def": "to say that something is not true",
    "sentence": "A: Did the electronics company answer the newspaper's report that it is planning to buy a smaller rival next month? B: Yes, its spokesperson continued to {{BLANK}} the story at the press conference, but many investors still believe the deal will happen because the two companies have held several private meetings.",
    "cn": "A：那家電子公司有回應報紙報導說它計畫下個月收購一家較小的競爭對手嗎？ B：有，它的發言人在記者會上持續【否認】這則報導，但許多投資人仍相信這筆交易會成交，因為兩家公司已經私下會面好幾次了。"
  },
  {
    "word": "prevalent",
    "pos": "adj.",
    "cn_def": "普遍的；盛行的",
    "en_def": "common in a particular place or time",
    "sentence": "A: Why is our team spending so much time checking the facts in every story before we post it on the company website? B: Fake news has become very {{BLANK}} online in recent years, so we want to make sure our readers can trust every number and quote that we publish under our company's name.",
    "cn": "A：為什麼我們團隊在把每篇報導發布到公司網站前，要花這麼多時間查證事實？ B：近年來假新聞在網路上變得非常【普遍】，所以我們想確保讀者能信任我們以公司名義發布的每一個數字和每一句引述。"
  }
];

const MCQS = [
  {
    "q": "Our team has finished the report on customer habits. The editor plans to _____ it in next month's industry magazine.",
    "options": [
      "publish",
      "deny",
      "comprehend",
      "halt"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The marketing department advertises in only one weekly _____. It is read mainly by hotel managers and restaurant owners.",
    "options": [
      "rumor",
      "hassle",
      "publication",
      "slogan"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The new app will _____ customers with daily updates about delivery times. It also sends a message when an order arrives.",
    "options": [
      "deny",
      "provide",
      "comprehend",
      "halt"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Visitors to our website say the _____ is useful and easy to read. Most of them return several times a week.",
    "options": [
      "hassle",
      "rumor",
      "horizon",
      "content"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The hotel shop sells a wide _____ of newspapers and magazines. Guests can find titles in English, Japanese, and Chinese.",
    "options": [
      "concern",
      "theme",
      "variety",
      "hassle"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "This year's sales conference has a clear _____. Every speaker will talk about using new technology to serve customers better.",
    "options": [
      "theme",
      "rumor",
      "hassle",
      "digest"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Customers have expressed _____ about the safety of online payments. The bank will add a new security check next week.",
    "options": [
      "popularity",
      "convenience",
      "variety",
      "concern"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "This _____ newsletter covers only one field. It is written for nurses and doctors who need details about new medical equipment.",
    "options": [
      "hectic",
      "specialized",
      "redundant",
      "approachable"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Every Monday, staff receive a weekly news _____ by email. It summarizes the most important industry stories in one short page.",
    "options": [
      "horizon",
      "slogan",
      "rumor",
      "digest"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The cooking show has grown in _____ since it moved to Saturday evenings. Its audience is now twice as large.",
    "options": [
      "concern",
      "popularity",
      "convenience",
      "publication"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The new phone plan is very _____ for students. It costs only five dollars a month and includes free news apps.",
    "options": [
      "affordable",
      "hectic",
      "redundant",
      "prevalent"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Our new branch manager is friendly and _____. Employees feel comfortable visiting her office to share ideas or problems.",
    "options": [
      "redundant",
      "specialized",
      "approachable",
      "hectic"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Please use only _____ sources when you prepare the market report. The director does not want any unchecked numbers from blogs.",
    "options": [
      "hectic",
      "reliable",
      "redundant",
      "approachable"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The printer was _____ broken because smoke was coming out of it. The office manager called the repair company right away.",
    "options": [
      "politely",
      "rarely",
      "freely",
      "obviously"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Reading international business news can _____ your understanding of foreign markets. Many managers do it every morning before work.",
    "options": [
      "deny",
      "halt",
      "enrich",
      "flick"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The delivery app lets customers _____ their packages in real time. They can see exactly when the driver will arrive.",
    "options": [
      "track",
      "deny",
      "enrich",
      "comprehend"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The new menu design is much more _____ to young customers. It uses bright colors and large photos of each dish.",
    "options": [
      "redundant",
      "hectic",
      "appealing",
      "reliable"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The factory had to _____ production for two days after the power failure. Workers used the time to clean the machines.",
    "options": [
      "halt",
      "provide",
      "enrich",
      "comprehend"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "For your _____, a shuttle bus runs between the airport and the hotel every thirty minutes. Tickets are free for guests.",
    "options": [
      "concern",
      "popularity",
      "variety",
      "convenience"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Booking tickets online saves travelers the _____ of waiting in long lines. Most passengers now buy them on their phones.",
    "options": [
      "theme",
      "hassle",
      "variety",
      "popularity"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "December is always a _____ month for the sales team. They handle twice as many orders and often work late.",
    "options": [
      "hectic",
      "specialized",
      "reliable",
      "redundant"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The editor deleted the second paragraph because it was _____. It simply repeated information that was already in the first one.",
    "options": [
      "affordable",
      "approachable",
      "redundant",
      "appealing"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The new branch had _____ results in its first year. Sales were thirty percent higher than the company had expected.",
    "options": [
      "hectic",
      "impressive",
      "redundant",
      "approachable"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The chief editor's _____ in today's paper criticized the city's traffic plan. She argued that more buses are urgently needed.",
    "options": [
      "slogan",
      "digest",
      "rumor",
      "editorial"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "Some new employees cannot fully _____ the safety manual because it uses many technical terms. The trainer will explain it in simpler words.",
    "options": [
      "halt",
      "comprehend",
      "provide",
      "deny"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The company needs a short, catchy _____ for its new sports drink. The best idea will appear on every bottle and poster.",
    "options": [
      "rumor",
      "hassle",
      "concern",
      "slogan"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The hotel offers loyalty points to _____ its regular guests. Managers know that keeping old customers costs less than finding new ones.",
    "options": [
      "retain",
      "deny",
      "comprehend",
      "halt"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "There is a _____ that the company will move its headquarters to Taichung. However, the CEO says no decision has been made.",
    "options": [
      "slogan",
      "theme",
      "rumor",
      "digest"
    ],
    "answer": 2,
    "vocabIndex": 35
  },
  {
    "q": "The spokesperson continued to _____ the reports about job cuts. She said the company is actually hiring fifty new workers.",
    "options": [
      "enrich",
      "provide",
      "retain",
      "deny"
    ],
    "answer": 3,
    "vocabIndex": 36
  },
  {
    "q": "Online shopping is now _____ among office workers in large cities. Most of them order groceries and clothes from their phones.",
    "options": [
      "approachable",
      "prevalent",
      "hectic",
      "redundant"
    ],
    "answer": 1,
    "vocabIndex": 37
  }
];

const LOOKUP = {
  "publish": {
    "pos": "v.",
    "en_def": "to print or put a story, book, or article out for the public",
    "cn_def": "出版；發表；刊登"
  },
  "publication": {
    "pos": "n.",
    "en_def": "a book, magazine, or newspaper that is printed and sold",
    "cn_def": "出版品；刊物；出版"
  },
  "provide": {
    "pos": "v.",
    "en_def": "to give something that people need",
    "cn_def": "提供"
  },
  "content": {
    "pos": "n.",
    "en_def": "the information, articles, or videos in a newspaper, website, or program",
    "cn_def": "內容"
  },
  "variety": {
    "pos": "n.",
    "en_def": "many different kinds of things",
    "cn_def": "多樣；各種"
  },
  "theme": {
    "pos": "n.",
    "en_def": "the main subject or idea of something",
    "cn_def": "主題"
  },
  "concern": {
    "pos": "n.",
    "en_def": "a feeling of worry about something important",
    "cn_def": "擔憂；關切"
  },
  "specialized": {
    "pos": "adj.",
    "en_def": "made for or about one particular subject or group",
    "cn_def": "專門的；專業的"
  },
  "aim": {
    "pos": "v.",
    "en_def": "to plan or try to achieve something",
    "cn_def": "目標是；旨在；瞄準"
  },
  "digest": {
    "pos": "n.",
    "en_def": "a short report that gives the most important news or facts",
    "cn_def": "摘要；文摘"
  },
  "popularity": {
    "pos": "n.",
    "en_def": "the state of being liked by many people",
    "cn_def": "受歡迎；普及"
  },
  "regardless of": {
    "pos": "phr.",
    "en_def": "without being affected by something",
    "cn_def": "不管；無論"
  },
  "affordable": {
    "pos": "adj.",
    "en_def": "cheap enough for most people to buy",
    "cn_def": "負擔得起的；價格實惠的"
  },
  "approachable": {
    "pos": "adj.",
    "en_def": "friendly and easy to talk to",
    "cn_def": "平易近人的；容易親近的"
  },
  "reliable": {
    "pos": "adj.",
    "en_def": "able to be trusted because it is correct or works well",
    "cn_def": "可靠的；可信賴的"
  },
  "ubiquitous": {
    "pos": "adj.",
    "en_def": "seeming to be everywhere at the same time",
    "cn_def": "無所不在的；隨處可見的"
  },
  "flick": {
    "pos": "v.",
    "en_def": "to turn pages or change channels quickly",
    "cn_def": "快速翻閱；快速轉台"
  },
  "obviously": {
    "pos": "adv.",
    "en_def": "in a way that is easy to see or understand",
    "cn_def": "明顯地；顯然"
  },
  "affair": {
    "pos": "n.",
    "en_def": "an event or a matter, often an important or public one",
    "cn_def": "事件；事務；活動"
  },
  "direct": {
    "pos": "v.",
    "en_def": "to send someone or something to a particular person or place; to manage",
    "cn_def": "指引；把…轉給；指揮"
  },
  "enrich": {
    "pos": "v.",
    "en_def": "to make something better or more valuable",
    "cn_def": "使豐富；充實"
  },
  "horizon": {
    "pos": "n.",
    "en_def": "the line where the sky meets the land; on the horizon = likely to happen soon",
    "cn_def": "地平線；眼界；即將發生"
  },
  "track": {
    "pos": "v.",
    "en_def": "to follow the progress of something",
    "cn_def": "追蹤；追查"
  },
  "appealing": {
    "pos": "adj.",
    "en_def": "attractive or interesting",
    "cn_def": "吸引人的"
  },
  "halt": {
    "pos": "v.",
    "en_def": "to stop something",
    "cn_def": "停止；中止"
  },
  "convenience": {
    "pos": "n.",
    "en_def": "the quality of being easy, useful, and saving time",
    "cn_def": "便利；方便"
  },
  "hassle": {
    "pos": "n.",
    "en_def": "something annoying that causes trouble or takes effort",
    "cn_def": "麻煩；困擾"
  },
  "hectic": {
    "pos": "adj.",
    "en_def": "very busy and full of activity",
    "cn_def": "忙亂的；繁忙的"
  },
  "redundant": {
    "pos": "adj.",
    "en_def": "not needed because it repeats something or is no longer useful",
    "cn_def": "多餘的；被裁員的"
  },
  "impressive": {
    "pos": "adj.",
    "en_def": "very good and making people admire it",
    "cn_def": "令人印象深刻的"
  },
  "editorial": {
    "pos": "n.",
    "en_def": "an article in a newspaper that gives the editor's opinion",
    "cn_def": "社論"
  },
  "comprehend": {
    "pos": "v.",
    "en_def": "to understand something fully",
    "cn_def": "理解；領會"
  },
  "slogan": {
    "pos": "n.",
    "en_def": "a short, easy-to-remember phrase used in advertising",
    "cn_def": "標語；口號"
  },
  "retain": {
    "pos": "v.",
    "en_def": "to keep or continue to have something",
    "cn_def": "保留；留住"
  },
  "alter": {
    "pos": "v.",
    "en_def": "to change something slightly",
    "cn_def": "更改；修改"
  },
  "rumor": {
    "pos": "n.",
    "en_def": "a story that people talk about that may not be true",
    "cn_def": "謠言；傳聞"
  },
  "deny": {
    "pos": "v.",
    "en_def": "to say that something is not true",
    "cn_def": "否認"
  },
  "prevalent": {
    "pos": "adj.",
    "en_def": "common in a particular place or time",
    "cn_def": "普遍的；盛行的"
  }
};

const EXTRA_GLOSSES = {};
