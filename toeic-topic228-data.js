// Topic 228 Quiz Data: Magazine 雜誌
// Source word list: https://www.examword.com/group-topic/magazine — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T228 - Magazine 雜誌",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "issue",
    "pos": "n.",
    "cn_def": "（雜誌的）期；一期",
    "en_def": "one copy of a magazine printed at a certain time",
    "sentence": "A: I heard our company is going to appear in Business Weekly soon, but do you know exactly when the story will come out in stores? B: Yes, the reporter told me it will be in the March {{BLANK}}, so I already ordered twenty copies to give to our best clients at the spring meeting.",
    "cn": "A：我聽說我們公司很快就會登上《商業週刊》，但你知道那篇報導確切什麼時候會在店裡出現嗎？ B：知道，記者告訴我會刊登在三月【號】，所以我已經訂了二十本，要在春季會議上送給我們最好的客戶。"
  },
  {
    "word": "edition",
    "pos": "n.",
    "cn_def": "版本；版",
    "en_def": "one version of a magazine or book printed for a certain time or place",
    "sentence": "A: Our sales team in Japan keeps asking for information about the new product line, so should we just send them the English magazine we published last month? B: No, I think we should wait for the Japanese {{BLANK}}, because it includes local prices, store addresses, and a special message from our Tokyo manager.",
    "cn": "A：我們在日本的業務團隊一直要求新產品線的資訊，那我們要不要直接把上個月出版的英文雜誌寄給他們？ B：不，我覺得我們應該等日文【版】，因為它包含當地價格、門市地址，還有我們東京經理的特別致詞。"
  },
  {
    "word": "article",
    "pos": "n.",
    "cn_def": "文章；報導",
    "en_def": "a piece of writing about one subject in a magazine or newspaper",
    "sentence": "A: Have you seen the travel magazine on the table in the waiting room, because a few customers were reading it and talking about our hotel this morning? B: Yes, there is a two-page {{BLANK}} about our new rooftop restaurant, and the writer said our chef makes the best seafood pasta in the city.",
    "cn": "A：你有看到等候室桌上的旅遊雜誌嗎？今天早上有幾位客人在看，還在討論我們飯店。 B：有，裡面有一篇兩頁的【報導】在介紹我們新的頂樓餐廳，作者說我們的主廚做的海鮮義大利麵是全市最好吃的。"
  },
  {
    "word": "feature",
    "pos": "n.",
    "cn_def": "特稿；專題報導",
    "en_def": "a special, longer story in a magazine about one person or subject",
    "sentence": "A: The editor called me this afternoon and asked if she could spend a whole day at our factory next month, so do you know why she needs so much time? B: She is writing a long {{BLANK}} about family businesses in Taiwan, and she wants to interview workers, take photos, and learn our whole history.",
    "cn": "A：編輯今天下午打電話給我，問她下個月能不能在我們工廠待一整天，你知道她為什麼需要這麼多時間嗎？ B：她正在寫一篇關於台灣家族企業的長篇【專題報導】，她想訪問員工、拍照，並了解我們完整的歷史。"
  },
  {
    "word": "column",
    "pos": "n.",
    "cn_def": "專欄",
    "en_def": "a regular piece of writing by the same writer in a magazine",
    "sentence": "A: I really enjoy the short money advice on the last page of this business magazine, but do you know who writes it every month for the readers? B: That {{BLANK}} is written by a retired bank manager from Kaohsiung, and he answers questions that readers send him about saving, loans, and small business taxes.",
    "cn": "A：我很喜歡這本商業雜誌最後一頁的簡短理財建議，你知道每個月是誰為讀者寫的嗎？ B：那個【專欄】是一位來自高雄的退休銀行經理寫的，他會回答讀者寄給他的有關儲蓄、貸款和小企業稅務的問題。"
  },
  {
    "word": "editor",
    "pos": "n.",
    "cn_def": "編輯",
    "en_def": "a person who checks, changes and decides what goes into a magazine",
    "sentence": "A: Our marketing team finished the article about the new office building last night, so can we send it to the printer before lunch today? B: Not yet, because the {{BLANK}} still has to read it carefully, correct any spelling mistakes, and decide whether the photos are good enough for the front pages.",
    "cn": "A：我們的行銷團隊昨晚完成了關於新辦公大樓的文章，那我們今天午餐前可以把它送去印刷廠嗎？ B：還不行，因為【編輯】還必須仔細閱讀、修正拼字錯誤，並決定照片是否夠好可以放在前面幾頁。"
  },
  {
    "word": "editorial",
    "pos": "n.",
    "cn_def": "社論；編者評論",
    "en_def": "a piece of writing that gives the opinion of the magazine's leaders",
    "sentence": "A: Did you notice that the industry magazine said something about the new government rules for electric scooters in its opening pages this month? B: Yes, the {{BLANK}} strongly supports the rules, and the writers explain that safer roads will help delivery companies like ours lower accident costs over the next few years.",
    "cn": "A：你有注意到這本產業雜誌這個月在開頭幾頁提到政府對電動機車的新規定嗎？ B：有，那篇【社論】強力支持這些規定，作者解釋說更安全的道路能幫助像我們這樣的外送公司在未來幾年降低事故成本。"
  },
  {
    "word": "publisher",
    "pos": "n.",
    "cn_def": "出版商；出版社",
    "en_def": "a company or person that prepares and sells magazines or books",
    "sentence": "A: We want to put a full-page advertisement in that popular cooking magazine before Chinese New Year, but who should I contact about the prices and deadlines? B: You should call the {{BLANK}} directly, because the company that owns the magazine handles all advertising contracts and can sometimes give a discount to first-time customers.",
    "cn": "A：我們想在農曆新年前於那本熱門的烹飪雜誌刊登全頁廣告，但我應該聯絡誰詢問價格和截止日期？ B：你應該直接打電話給【出版商】，因為擁有那本雜誌的公司負責處理所有廣告合約，有時還會給首次合作的客戶折扣。"
  },
  {
    "word": "journalist",
    "pos": "n.",
    "cn_def": "記者",
    "en_def": "a person whose job is to write news stories for magazines or newspapers",
    "sentence": "A: There is a woman at the front desk with a notebook and a camera, and she says she has an appointment with our general manager at ten o'clock. B: Oh, she is the {{BLANK}} from the technology magazine, so please bring her to the meeting room and offer her some coffee while I tell the manager.",
    "cn": "A：前台有一位女士帶著筆記本和相機，她說她十點跟我們總經理有約。 B：喔，她是科技雜誌的【記者】，請帶她到會議室並請她喝杯咖啡，我去通知經理。"
  },
  {
    "word": "photography",
    "pos": "n.",
    "cn_def": "攝影",
    "en_def": "the art or job of taking photos",
    "sentence": "A: The pictures in this fashion magazine look so bright and professional, so do you think we could make our product catalog look this good next season? B: Probably, but we would need to hire an expert in {{BLANK}}, rent a studio with good lights, and spend more money than we planned in this year's budget.",
    "cn": "A：這本時尚雜誌裡的照片看起來好明亮又專業，你覺得我們下一季的產品型錄能做得這麼好看嗎？ B：大概可以，但我們需要聘請【攝影】專家、租一間燈光好的攝影棚，並且花比今年預算計畫更多的錢。"
  },
  {
    "word": "cover",
    "pos": "n.",
    "cn_def": "封面",
    "en_def": "the outside front page of a magazine",
    "sentence": "A: The new issue of the city magazine is on the shelves now, and many people are talking about it on the subway this week, but why is it so popular? B: Our CEO is on the {{BLANK}}, smiling in front of our new store, so everyone who walks past the newsstand can see our company right away.",
    "cn": "A：本期城市雜誌現在已經上架了，這週很多人在捷運上討論它，但為什麼它這麼受歡迎？ B：我們的執行長登上了【封面】，在我們的新店前微笑，所以每個經過書報攤的人都能馬上看到我們公司。"
  },
  {
    "word": "headline",
    "pos": "n.",
    "cn_def": "標題；頭條",
    "en_def": "the title of a story printed in large letters",
    "sentence": "A: The article about our company is quite long, and I'm worried busy people will turn the page without reading it, so what can we do about that? B: We should ask the editor for a short, exciting {{BLANK}} in big letters at the top, because a strong title is what makes readers stop and look.",
    "cn": "A：關於我們公司的文章蠻長的，我擔心忙碌的人會不看就翻頁，那我們能怎麼辦？ B：我們應該請編輯在最上方用大字放一個簡短又吸引人的【標題】，因為有力的標題才能讓讀者停下來看。"
  },
  {
    "word": "layout",
    "pos": "n.",
    "cn_def": "版面設計；排版",
    "en_def": "the way words and pictures are arranged on a page",
    "sentence": "A: I like the photos and the writing in our company magazine, but the pages still look crowded and hard to read, so what do you think is wrong? B: The {{BLANK}} needs more white space, larger pictures, and fewer columns of text, so readers can easily follow each story from the top of the page to the bottom.",
    "cn": "A：我喜歡我們公司雜誌的照片和文字，但頁面看起來還是很擁擠又難讀，你覺得問題出在哪？ B：【版面】需要更多留白、更大的圖片和更少的文字欄，這樣讀者就能輕鬆地從頁面頂端讀到底部。"
  },
  {
    "word": "design",
    "pos": "n.",
    "cn_def": "設計",
    "en_def": "the way something is planned and drawn to look",
    "sentence": "A: Our sales magazine has looked the same for almost ten years, and younger customers say it seems old-fashioned, so should we change anything before the next issue? B: Yes, I think we need a fresh {{BLANK}} with modern colors, a new logo, and clean fonts, so the magazine matches the style of our new stores.",
    "cn": "A：我們的銷售雜誌近十年來都長得一樣，年輕客戶說它看起來很過時，那我們要在下一期之前做些改變嗎？ B：要，我覺得我們需要全新的【設計】，用現代的顏色、新的標誌和簡潔的字體，讓雜誌符合我們新門市的風格。"
  },
  {
    "word": "subscription",
    "pos": "n.",
    "cn_def": "訂閱；訂閱費",
    "en_def": "an amount of money paid to receive a magazine regularly",
    "sentence": "A: I read the business magazine in the office every week, but I would like to get my own copy at home so I can read it on weekends. B: You can buy a one-year {{BLANK}} online for about two thousand dollars, and the magazine will be sent to your apartment every Monday morning.",
    "cn": "A：我每週都在辦公室看那本商業雜誌，但我想在家有自己的一本，這樣週末就能看。 B：你可以在網路上買一年的【訂閱】，大約兩千元，雜誌每週一早上就會寄到你的公寓。"
  },
  {
    "word": "circulation",
    "pos": "n.",
    "cn_def": "發行量",
    "en_def": "the number of copies of a magazine that are sold or given out",
    "sentence": "A: The sales manager from the airline magazine wants us to pay a lot for one advertisement, so how do we know the price is fair? B: Ask them about their {{BLANK}} first, because if they really send out two hundred thousand copies every month, our ad will be seen by many travelers.",
    "cn": "A：航空雜誌的業務經理希望我們為一則廣告付很多錢，那我們怎麼知道這個價格合不合理？ B：先問他們的【發行量】，因為如果他們真的每個月發出二十萬本，我們的廣告就會被很多旅客看到。"
  },
  {
    "word": "publication",
    "pos": "n.",
    "cn_def": "出版物；刊物",
    "en_def": "a magazine, book or report that is printed and sold",
    "sentence": "A: Our research team wrote a great report about online shopping habits in Asia, and I think more people outside our company should read it. B: We could send it to a trade {{BLANK}} that many retail managers read every month, and that would help our company look like an expert in the industry.",
    "cn": "A：我們的研究團隊寫了一份很棒的亞洲網購習慣報告，我覺得公司外應該有更多人讀到它。 B：我們可以把它投到一份很多零售經理每個月都會看的產業【刊物】，這能讓我們公司看起來像業界專家。"
  },
  {
    "word": "print",
    "pos": "v.",
    "cn_def": "印刷；刊登",
    "en_def": "to produce words or pictures on paper with a machine",
    "sentence": "A: The editor finally approved all the pages of our spring catalog this afternoon, so when will customers be able to pick up a copy in our stores? B: The factory will {{BLANK}} five thousand copies over the weekend, and the delivery trucks should bring them to every store by Tuesday morning.",
    "cn": "A：編輯今天下午終於核准了春季型錄的所有頁面，那顧客什麼時候能在我們店裡拿到一本？ B：工廠週末會【印刷】五千本，貨車應該在週二早上前送到每家門市。"
  },
  {
    "word": "release",
    "pos": "v.",
    "cn_def": "發行；發布",
    "en_def": "to make something available to the public",
    "sentence": "A: Many readers have been asking on social media when the special anniversary issue will be ready, so what should I tell them? B: Tell them we will {{BLANK}} it on the first of next month, both in convenience stores and online, and the first thousand buyers will get a free tote bag.",
    "cn": "A：很多讀者一直在社群媒體上問週年特刊什麼時候好，我該怎麼回覆他們？ B：告訴他們我們會在下個月一號【發行】，便利商店和網路上都買得到，前一千名購買者還能獲得免費帆布袋。"
  },
  {
    "word": "advertisement",
    "pos": "n.",
    "cn_def": "廣告",
    "en_def": "a notice or picture that tries to sell a product or service",
    "sentence": "A: We are opening a new coffee shop near the train station next month, so how can we tell people in the neighborhood about it? B: We could put an {{BLANK}} in the free local magazine that people pick up at the station, with a coupon for a half-price latte during the first week.",
    "cn": "A：我們下個月要在火車站附近開一家新咖啡店，該怎麼讓附近的人知道？ B：我們可以在大家在車站拿的免費地方雜誌上刊登【廣告】，附上第一週拿鐵半價的優惠券。"
  },
  {
    "word": "review",
    "pos": "n.",
    "cn_def": "評論；評價",
    "en_def": "an article that gives an opinion about a product, film, book or restaurant",
    "sentence": "A: Why are there so many people waiting outside our restaurant tonight, because it's only Tuesday and we usually have empty tables? B: A food magazine published a great {{BLANK}} of our new menu this week, and the writer gave us five stars for our beef noodles and friendly service.",
    "cn": "A：為什麼今晚我們餐廳外面有這麼多人在排隊？今天才星期二，我們平常都有空桌。 B：一本美食雜誌這週刊登了一篇對我們新菜單的好【評論】，作者給我們的牛肉麵和親切服務五顆星。"
  },
  {
    "word": "interview",
    "pos": "n.",
    "cn_def": "訪問；採訪",
    "en_def": "a meeting where a reporter asks someone questions for a story",
    "sentence": "A: The reporter from the business magazine will be here at two, so how long should I book the meeting room for this afternoon? B: Please book it for two hours, because the {{BLANK}} with our CEO will include questions about our new factory, and the photographer also needs time to take pictures.",
    "cn": "A：商業雜誌的記者兩點會到，那我今天下午會議室要預訂多久？ B：請預訂兩個小時，因為跟我們執行長的【訪問】會包括新工廠的問題，攝影師也需要時間拍照。"
  },
  {
    "word": "content",
    "pos": "n.",
    "cn_def": "內容",
    "en_def": "the information, stories and pictures in a magazine or website",
    "sentence": "A: Our online magazine gets many visitors, but most of them leave after a few seconds, so what do you think we should change first? B: We need better {{BLANK}}, like useful tips, short videos, and real customer stories, because people only stay when the pages give them something interesting to read and watch.",
    "cn": "A：我們的線上雜誌有很多訪客，但大多數幾秒後就離開了，你覺得我們應該先改什麼？ B：我們需要更好的【內容】，像是實用的小技巧、短影片和真實的顧客故事，因為只有頁面提供有趣的東西可看，人們才會留下來。"
  },
  {
    "word": "reader",
    "pos": "n.",
    "cn_def": "讀者",
    "en_def": "a person who reads a magazine, book or newspaper",
    "sentence": "A: I just got a long email from a woman in Tainan who has bought our travel magazine every month for twenty years, and she has some suggestions. B: That kind of loyal {{BLANK}} is very important to us, so please write back to her today and thank her for her ideas about the hotel pages.",
    "cn": "A：我剛收到一封台南一位女士寄來的長信，她二十年來每個月都買我們的旅遊雜誌，她有一些建議。 B：這樣忠實的【讀者】對我們非常重要，請今天就回信給她，謝謝她對飯店頁面的建議。"
  },
  {
    "word": "audience",
    "pos": "n.",
    "cn_def": "受眾；觀眾",
    "en_def": "the group of people who read, watch or listen to something",
    "sentence": "A: Our new sports magazine is mainly about running and cycling, so should we put advertisements for expensive watches and business suits inside it? B: I don't think so, because our main {{BLANK}} is young people who exercise, so ads for shoes, energy drinks, and sports apps will work much better.",
    "cn": "A：我們的新運動雜誌主要介紹跑步和自行車，那我們要在裡面放昂貴手錶和西裝的廣告嗎？ B：我不這麼認為，因為我們的主要【受眾】是愛運動的年輕人，所以鞋子、能量飲料和運動應用程式的廣告會有效得多。"
  },
  {
    "word": "glossy",
    "pos": "adj.",
    "cn_def": "光面的；精美的",
    "en_def": "shiny and smooth, printed on high-quality paper with color photos",
    "sentence": "A: The hotel manager wants a magazine for guests to read in their rooms, but should we use the cheap paper we use for our weekly newsletter? B: No, guests at a five-star hotel expect a thick, {{BLANK}} magazine with beautiful color photos, so we should spend more on better paper this time.",
    "cn": "A：飯店經理想要一本讓客人在房間閱讀的雜誌，我們要用每週電子報用的便宜紙張嗎？ B：不，五星級飯店的客人會期待一本厚實、【光面精美】的雜誌，有漂亮的彩色照片，所以這次我們應該花多一點錢用好紙。"
  },
  {
    "word": "illustrated",
    "pos": "adj.",
    "cn_def": "有插圖的；圖解的",
    "en_def": "having pictures or drawings",
    "sentence": "A: Our safety guide for new factory workers is twenty pages of small text, and many young employees say they never finish reading it. B: Let's make a short {{BLANK}} version with simple drawings that show each step, because pictures are easier to remember than long paragraphs, especially for people who are new to the job.",
    "cn": "A：我們給新工廠員工的安全指南有二十頁小字，很多年輕員工說他們從來沒讀完。 B：我們來做一個簡短的【附插圖】版本，用簡單的圖畫顯示每個步驟，因為圖片比長段落更容易記住，尤其是對剛上任的人。"
  },
  {
    "word": "informative",
    "pos": "adj.",
    "cn_def": "資訊豐富的；有益的",
    "en_def": "giving a lot of useful information",
    "sentence": "A: I was going to throw away that old marketing magazine on the meeting room table, but did you want to keep it for some reason? B: Please keep it, because the article about social media ads was really {{BLANK}}, and I want to share the ideas and numbers with our team on Friday.",
    "cn": "A：我本來要把會議室桌上那本舊行銷雜誌丟掉，你是因為什麼原因想留著嗎？ B：請留著，因為那篇關於社群媒體廣告的文章真的很【有用、資訊豐富】，我想在週五跟團隊分享裡面的想法和數據。"
  },
  {
    "word": "entertaining",
    "pos": "adj.",
    "cn_def": "有趣的；娛樂性的",
    "en_def": "interesting and fun to read or watch",
    "sentence": "A: Our company newsletter is full of numbers and rules, and I think most employees delete it without opening it, so how can we fix that? B: We could make it more {{BLANK}} by adding funny office stories, staff photos, and a small quiz, so people actually enjoy reading it during their lunch break.",
    "cn": "A：我們的公司電子報充滿數字和規定，我想大部分員工都沒打開就刪掉了，該怎麼改善？ B：我們可以加入有趣的辦公室故事、員工照片和小測驗，讓它更【有趣】，這樣大家在午休時會真的喜歡閱讀。"
  },
  {
    "word": "monthly",
    "pos": "adj.",
    "cn_def": "每月的",
    "en_def": "happening or produced once a month",
    "sentence": "A: Our customers say they want regular news about our products, but our small team doesn't have time to write a new magazine every week. B: Then let's start a {{BLANK}} magazine instead, because twelve issues a year is much easier for us to manage, and customers will still hear from us often.",
    "cn": "A：我們的客戶說他們想定期收到產品消息，但我們的小團隊沒時間每週寫一本新雜誌。 B：那我們改成發行【每月】雜誌吧，因為一年十二期對我們來說好管理得多，客戶仍然能常常收到我們的消息。"
  },
  {
    "word": "weekly",
    "pos": "adj.",
    "cn_def": "每週的",
    "en_def": "happening or produced once every week",
    "sentence": "A: The stock market changes so fast these days, and the monthly finance magazine I read always seems to have old information when it arrives. B: You should try a {{BLANK}} business magazine instead, because it comes out every Friday, so the news and advice about companies are much more up to date.",
    "cn": "A：最近股市變化很快，我看的財經月刊寄到時資訊似乎總是過時了。 B：你應該改看【每週】出刊的商業雜誌，因為它每週五出版，所以關於公司的新聞和建議都新得多。"
  },
  {
    "word": "digitally",
    "pos": "adv.",
    "cn_def": "以數位方式",
    "en_def": "in a digital form, using computers or the internet",
    "sentence": "A: Printing and mailing our magazine costs more every year, and many readers say they don't have space at home for paper copies anymore. B: Then we should start publishing it {{BLANK}}, so readers can download each issue to their phones and tablets, and we can save a lot on paper and postage.",
    "cn": "A：印刷和郵寄我們的雜誌每年花費越來越高，很多讀者也說家裡沒空間放紙本了。 B：那我們應該開始【以數位方式】出版，讓讀者可以把每期下載到手機和平板上，我們也能省下大筆紙張和郵資費用。"
  },
  {
    "word": "regularly",
    "pos": "adv.",
    "cn_def": "定期地；經常",
    "en_def": "often, at the same times each week, month or year",
    "sentence": "A: How did you learn so much about new marketing ideas, because you only joined the company last year and you already know more than me? B: I {{BLANK}} read two business magazines, one every week and one every month, and I always write down useful ideas in a notebook on the train.",
    "cn": "A：你是怎麼學到這麼多行銷新點子的？你去年才進公司，懂的就已經比我多了。 B：我【定期】閱讀兩本商業雜誌，一本週刊和一本月刊，而且我總是在火車上把有用的點子記在筆記本裡。"
  },
  {
    "word": "widely",
    "pos": "adv.",
    "cn_def": "廣泛地",
    "en_def": "by a lot of people or in many places",
    "sentence": "A: Why does the marketing department want to spend so much money on an advertisement in that particular magazine instead of a cheaper one? B: Because it is {{BLANK}} read by business owners all over Asia, so our new software will be seen by thousands of possible customers in many different countries.",
    "cn": "A：為什麼行銷部門想花那麼多錢在那本特定雜誌上登廣告，而不選便宜一點的？ B：因為它被全亞洲的企業主【廣泛地】閱讀，所以我們的新軟體會被許多國家成千上萬的潛在客戶看到。"
  }
];

const MCQS = [
  {
    "q": "The March _____ of the magazine includes a long interview with our CEO. Please order fifty copies for the sales team.",
    "options": [
      "issue",
      "headline",
      "layout",
      "column"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The Japanese _____ of our catalog will be printed next week. It includes local prices and store addresses.",
    "options": [
      "editor",
      "edition",
      "audience",
      "reader"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Ms. Chen wrote an _____ about remote work for a business magazine. It explains how small firms can save office costs.",
    "options": [
      "advertisement",
      "audience",
      "article",
      "subscription"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The magazine's main _____ this month is a ten-page story about young Taiwanese designers. It begins right after the contents page.",
    "options": [
      "publisher",
      "circulation",
      "subscription",
      "feature"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Mr. Lin writes a weekly _____ about personal finance in the Sunday magazine. Readers often send him questions by email.",
    "options": [
      "cover",
      "column",
      "layout",
      "release"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The _____ asked the writer to shorten the article by two hundred words. The final version is due on Friday.",
    "options": [
      "editor",
      "audience",
      "reader",
      "subscription"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "This month's _____ criticizes the city's new parking rules. It reflects the opinion of the magazine's senior staff.",
    "options": [
      "photography",
      "circulation",
      "subscription",
      "editorial"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Our _____ has agreed to release the cooking magazine in Hong Kong next year. Distribution contracts will be signed in March.",
    "options": [
      "reader",
      "audience",
      "publisher",
      "headline"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "A _____ from a technology magazine will visit the factory on Monday. Please prepare a short tour of the production line.",
    "options": [
      "journalist",
      "publication",
      "subscription",
      "circulation"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The magazine hired an expert in food _____ for its new restaurant section. Every dish will be shot in a professional studio.",
    "options": [
      "circulation",
      "photography",
      "subscription",
      "publication"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Our new product will appear on the front _____ of next month's design magazine. The photo shoot is scheduled for Thursday.",
    "options": [
      "column",
      "content",
      "cover",
      "edition"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The merger was the main _____ in every business magazine this week. Our company shares rose sharply soon after the news appeared.",
    "options": [
      "layout",
      "design",
      "column",
      "headline"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The designer changed the page _____ so that photos and text are easier to follow. Readers have responded very positively.",
    "options": [
      "audience",
      "layout",
      "circulation",
      "subscription"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The magazine will launch a new _____ with brighter colors and a modern logo. The change starts with the April issue.",
    "options": [
      "design",
      "reader",
      "journalist",
      "publisher"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "You can cancel your _____ at any time by calling customer service. Any unused months will be refunded to your card.",
    "options": [
      "circulation",
      "photography",
      "headline",
      "subscription"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The travel magazine has a _____ of over 200,000 copies a month. That makes it attractive to hotel and airline advertisers.",
    "options": [
      "column",
      "layout",
      "circulation",
      "cover"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The report was first printed in a monthly trade _____ for retail managers. It was later shared on our company website.",
    "options": [
      "publication",
      "journalist",
      "editor",
      "reader"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The printing company will _____ the brochures overnight. They will be delivered to all branches before the sale on Monday.",
    "options": [
      "interview",
      "print",
      "cover",
      "feature"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The publisher plans to _____ the anniversary issue on May 1. Advance copies will be sent to major advertisers this week.",
    "options": [
      "cover",
      "design",
      "release",
      "feature"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "We placed an _____ in the local magazine to promote our grand opening. It includes a coupon for a free drink.",
    "options": [
      "editorial",
      "interview",
      "audience",
      "advertisement"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The restaurant received an excellent _____ in a popular food magazine last week. Since then, reservations have nearly doubled.",
    "options": [
      "layout",
      "review",
      "circulation",
      "edition"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The CEO gave a long _____ to a business magazine about the company's growth plans. It will appear in the June issue.",
    "options": [
      "interview",
      "subscription",
      "headline",
      "publisher"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Our website needs fresh _____ such as short videos and customer stories. Visitors currently leave after only a few seconds.",
    "options": [
      "circulation",
      "audience",
      "editor",
      "content"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Each _____ who completes the online survey will receive a free digital issue. The survey closes at the end of the month.",
    "options": [
      "layout",
      "feature",
      "reader",
      "column"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The magazine's target _____ is young professionals living in large cities. Most of its advertisers sell travel and technology products.",
    "options": [
      "audience",
      "edition",
      "cover",
      "headline"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Luxury hotels often place _____ magazines in guest rooms. The shiny pages and color photos create a high-end impression.",
    "options": [
      "weekly",
      "glossy",
      "informative",
      "entertaining"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The new employee handbook is fully _____ with simple drawings. Workers can now understand the safety steps much more quickly.",
    "options": [
      "entertaining",
      "informative",
      "illustrated",
      "glossy"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Many staff members found the article on tax changes very _____. It answered most of their questions about next year's forms.",
    "options": [
      "glossy",
      "illustrated",
      "monthly",
      "informative"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The editors want the newsletter to be more _____ for employees. They plan to add funny office stories and a short quiz.",
    "options": [
      "illustrated",
      "entertaining",
      "monthly",
      "glossy"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The company publishes a _____ magazine for its customers. Each issue arrives on the first day of the month.",
    "options": [
      "monthly",
      "glossy",
      "illustrated",
      "informative"
    ],
    "answer": 0,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "issue": {
    "pos": "n.",
    "en_def": "one copy of a magazine printed at a certain time",
    "cn_def": "（雜誌的）期；一期"
  },
  "edition": {
    "pos": "n.",
    "en_def": "one version of a magazine or book printed for a certain time or place",
    "cn_def": "版本；版"
  },
  "article": {
    "pos": "n.",
    "en_def": "a piece of writing about one subject in a magazine or newspaper",
    "cn_def": "文章；報導"
  },
  "feature": {
    "pos": "n.",
    "en_def": "a special, longer story in a magazine about one person or subject",
    "cn_def": "特稿；專題報導"
  },
  "column": {
    "pos": "n.",
    "en_def": "a regular piece of writing by the same writer in a magazine",
    "cn_def": "專欄"
  },
  "editor": {
    "pos": "n.",
    "en_def": "a person who checks, changes and decides what goes into a magazine",
    "cn_def": "編輯"
  },
  "editorial": {
    "pos": "n.",
    "en_def": "a piece of writing that gives the opinion of the magazine's leaders",
    "cn_def": "社論；編者評論"
  },
  "publisher": {
    "pos": "n.",
    "en_def": "a company or person that prepares and sells magazines or books",
    "cn_def": "出版商；出版社"
  },
  "journalist": {
    "pos": "n.",
    "en_def": "a person whose job is to write news stories for magazines or newspapers",
    "cn_def": "記者"
  },
  "photography": {
    "pos": "n.",
    "en_def": "the art or job of taking photos",
    "cn_def": "攝影"
  },
  "cover": {
    "pos": "n.",
    "en_def": "the outside front page of a magazine",
    "cn_def": "封面"
  },
  "headline": {
    "pos": "n.",
    "en_def": "the title of a story printed in large letters",
    "cn_def": "標題；頭條"
  },
  "layout": {
    "pos": "n.",
    "en_def": "the way words and pictures are arranged on a page",
    "cn_def": "版面設計；排版"
  },
  "design": {
    "pos": "n.",
    "en_def": "the way something is planned and drawn to look",
    "cn_def": "設計"
  },
  "subscription": {
    "pos": "n.",
    "en_def": "an amount of money paid to receive a magazine regularly",
    "cn_def": "訂閱；訂閱費"
  },
  "circulation": {
    "pos": "n.",
    "en_def": "the number of copies of a magazine that are sold or given out",
    "cn_def": "發行量"
  },
  "publication": {
    "pos": "n.",
    "en_def": "a magazine, book or report that is printed and sold",
    "cn_def": "出版物；刊物"
  },
  "print": {
    "pos": "v.",
    "en_def": "to produce words or pictures on paper with a machine",
    "cn_def": "印刷；刊登"
  },
  "release": {
    "pos": "v.",
    "en_def": "to make something available to the public",
    "cn_def": "發行；發布"
  },
  "advertisement": {
    "pos": "n.",
    "en_def": "a notice or picture that tries to sell a product or service",
    "cn_def": "廣告"
  },
  "review": {
    "pos": "n.",
    "en_def": "an article that gives an opinion about a product, film, book or restaurant",
    "cn_def": "評論；評價"
  },
  "interview": {
    "pos": "n.",
    "en_def": "a meeting where a reporter asks someone questions for a story",
    "cn_def": "訪問；採訪"
  },
  "content": {
    "pos": "n.",
    "en_def": "the information, stories and pictures in a magazine or website",
    "cn_def": "內容"
  },
  "reader": {
    "pos": "n.",
    "en_def": "a person who reads a magazine, book or newspaper",
    "cn_def": "讀者"
  },
  "audience": {
    "pos": "n.",
    "en_def": "the group of people who read, watch or listen to something",
    "cn_def": "受眾；觀眾"
  },
  "glossy": {
    "pos": "adj.",
    "en_def": "shiny and smooth, printed on high-quality paper with color photos",
    "cn_def": "光面的；精美的"
  },
  "illustrated": {
    "pos": "adj.",
    "en_def": "having pictures or drawings",
    "cn_def": "有插圖的；圖解的"
  },
  "informative": {
    "pos": "adj.",
    "en_def": "giving a lot of useful information",
    "cn_def": "資訊豐富的；有益的"
  },
  "entertaining": {
    "pos": "adj.",
    "en_def": "interesting and fun to read or watch",
    "cn_def": "有趣的；娛樂性的"
  },
  "monthly": {
    "pos": "adj.",
    "en_def": "happening or produced once a month",
    "cn_def": "每月的"
  },
  "weekly": {
    "pos": "adj.",
    "en_def": "happening or produced once every week",
    "cn_def": "每週的"
  },
  "digitally": {
    "pos": "adv.",
    "en_def": "in a digital form, using computers or the internet",
    "cn_def": "以數位方式"
  },
  "regularly": {
    "pos": "adv.",
    "en_def": "often, at the same times each week, month or year",
    "cn_def": "定期地；經常"
  },
  "widely": {
    "pos": "adv.",
    "en_def": "by a lot of people or in many places",
    "cn_def": "廣泛地"
  }
};

const EXTRA_GLOSSES = {};
