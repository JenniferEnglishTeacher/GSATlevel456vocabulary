// Topic 135 Quiz Data: Famous 有名的
// Source word list: https://www.examword.com/group-topic/famous — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T135 - Famous 有名的",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "well-known",
    "pos": "adj.",
    "cn_def": "眾所周知的；有名的",
    "en_def": "known by many people",
    "sentence": "A: Why did our marketing team choose that small bakery on Main Street to provide the snacks for next week's product launch event? B: It is a {{BLANK}} shop in this neighborhood, and many of our regular customers already love its bread, so serving its food should make guests feel comfortable and welcome.",
    "cn": "A：為什麼我們的行銷團隊選擇主街上那家小麵包店，為下週的產品發表活動提供點心？ B：它是這個社區裡一家【眾所周知的】店，我們許多老顧客已經很喜歡它的麵包，所以提供它的食物應該能讓來賓感到自在又受歡迎。"
  },
  {
    "word": "renowned",
    "pos": "adj.",
    "cn_def": "著名的；享有盛譽的",
    "en_def": "famous and admired for a special skill or quality",
    "sentence": "A: Have you heard who will lead the cooking workshop that the hotel is organizing for its kitchen staff next month? B: Yes, a {{BLANK}} chef from Paris is coming, and since he has won several international awards, the manager expects every cook to attend and take careful notes.",
    "cn": "A：你聽說飯店下個月為廚房員工舉辦的烹飪工作坊將由誰主持嗎？ B：聽說了，一位來自巴黎的【著名的】主廚會來，因為他贏過好幾個國際獎項，經理希望每位廚師都參加並仔細做筆記。"
  },
  {
    "word": "celebrated",
    "pos": "adj.",
    "cn_def": "著名的；備受讚揚的",
    "en_def": "praised and admired by many people",
    "sentence": "A: Why are so many visitors lining up outside the art gallery downtown even though it is raining heavily this afternoon? B: The gallery is showing paintings by a {{BLANK}} local artist for only three days, so people want to see her work before the exhibition closes on Sunday evening.",
    "cn": "A：為什麼今天下午雨下得這麼大，市中心的美術館外面還有這麼多遊客在排隊？ B：美術館只展出三天一位【備受讚揚的】本地藝術家的畫作，所以大家想在週日晚上展覽結束前去看她的作品。"
  },
  {
    "word": "notable",
    "pos": "adj.",
    "cn_def": "值得注意的；顯著的",
    "en_def": "important or interesting enough to be noticed",
    "sentence": "A: Did anything special happen at the annual sales conference in Tokyo, or was it the same as last year's boring meeting? B: There was one {{BLANK}} change, because the company invited customers to share their opinions on stage, and many managers said it was the most useful session of the whole week.",
    "cn": "A：在東京舉行的年度業務大會上有發生什麼特別的事嗎？還是跟去年一樣是無聊的會議？ B：有一個【值得注意的】改變，因為公司邀請客戶上台分享意見，許多經理說那是整週最有用的一場。"
  },
  {
    "word": "prominent",
    "pos": "adj.",
    "cn_def": "重要的；著名的；顯眼的",
    "en_def": "important and well known",
    "sentence": "A: Who is going to cut the ribbon at the opening ceremony of our new factory in the industrial park next Friday morning? B: A {{BLANK}} business leader from the local chamber of commerce agreed to come, and her presence will help us attract attention from reporters and possible investors.",
    "cn": "A：下週五早上我們在工業區新工廠的開幕典禮上，由誰來剪綵？ B：本地商會一位【重要的】企業領袖答應要來，她的出席將幫助我們吸引記者和潛在投資人的注意。"
  },
  {
    "word": "distinguished",
    "pos": "adj.",
    "cn_def": "傑出的；卓越的",
    "en_def": "very successful and respected",
    "sentence": "A: Why did the university ask our CEO to give the main speech at its graduation ceremony this summer instead of a professor? B: He has had a long and {{BLANK}} career in international trade, and the students hope to learn how he built the company from a tiny office into a global business.",
    "cn": "A：為什麼大學請我們的執行長在今年夏天的畢業典禮上致主要演說，而不是請一位教授？ B：他在國際貿易領域有一段漫長而【傑出的】職業生涯，學生們希望了解他如何把公司從一間小辦公室發展成全球企業。"
  },
  {
    "word": "legendary",
    "pos": "adj.",
    "cn_def": "傳奇的；極其有名的",
    "en_def": "very famous and talked about for a long time",
    "sentence": "A: Why is everyone in the sales department so excited about the training session scheduled for tomorrow morning in the large meeting room? B: A {{BLANK}} salesperson who once sold more cars in one year than anyone else in the country will share his secrets and answer our questions after lunch.",
    "cn": "A：為什麼業務部的每個人都對明天早上在大會議室舉行的訓練課程這麼興奮？ B：一位曾在一年內賣出比全國任何人都多汽車的【傳奇的】業務員，會分享他的秘訣，並在午餐後回答我們的問題。"
  },
  {
    "word": "iconic",
    "pos": "adj.",
    "cn_def": "代表性的；標誌性的",
    "en_def": "very famous and seen as a symbol of something",
    "sentence": "A: Where should we take the overseas clients for photos on Saturday afternoon before their flight back to London leaves in the evening? B: Let's take them to the {{BLANK}} tower near the river, because it appears on almost every postcard of the city, and visitors always enjoy the amazing view from the top.",
    "cn": "A：週六下午在海外客戶晚上飛回倫敦之前，我們應該帶他們去哪裡拍照？ B：帶他們去河邊那座【標誌性的】塔吧，因為它幾乎出現在這座城市的每一張明信片上，而且遊客總是很喜歡從頂樓看到的壯觀景色。"
  },
  {
    "word": "popular",
    "pos": "adj.",
    "cn_def": "受歡迎的；流行的",
    "en_def": "liked or enjoyed by many people",
    "sentence": "A: Which item on the new lunch menu should we advertise first on the café's social media account this week? B: The chicken salad has been very {{BLANK}} with office workers since we started selling it on Monday, so let's post a photo of it with a short discount offer for weekday customers.",
    "cn": "A：這週我們應該先在咖啡廳的社群帳號上宣傳新午餐菜單中的哪一道？ B：雞肉沙拉從週一開賣以來就很【受歡迎】，深受上班族喜愛，所以我們貼一張它的照片，再加上給平日顧客的短期折扣優惠吧。"
  },
  {
    "word": "influential",
    "pos": "adj.",
    "cn_def": "有影響力的",
    "en_def": "having the power to change what people think or do",
    "sentence": "A: Why did the publishing company send free copies of our new business book to that blogger who writes about personal finance? B: She is very {{BLANK}} among young professionals, and if she writes a positive review, thousands of readers will probably order the book from online stores within a few days.",
    "cn": "A：為什麼出版公司要把我們的新商業書免費寄給那位寫個人理財的部落客？ B：她在年輕上班族之間非常【有影響力】，如果她寫了正面的書評，幾天內可能會有數千名讀者從網路書店訂購這本書。"
  },
  {
    "word": "respected",
    "pos": "adj.",
    "cn_def": "受尊敬的",
    "en_def": "admired by others because of good work or character",
    "sentence": "A: Why does the board want Ms. Chen to lead the new project team instead of hiring an experienced manager from outside the company? B: She is a {{BLANK}} engineer who has worked here for fifteen years, and her colleagues trust her because she always listens carefully and makes fair decisions.",
    "cn": "A：為什麼董事會想讓陳女士領導新的專案團隊，而不是從公司外部聘請一位有經驗的經理？ B：她是一位在這裡工作了十五年、【受尊敬的】工程師，同事們都信任她，因為她總是仔細傾聽並做出公平的決定。"
  },
  {
    "word": "recognized",
    "pos": "adj.",
    "cn_def": "公認的；被認可的",
    "en_def": "accepted or known as good or official",
    "sentence": "A: Should we hire the cheaper training company, or is it worth paying extra for the one that the human resources director suggested? B: I think we should pay more, because the other company offers a {{BLANK}} certificate that employers across the country accept, and that will help our staff get promoted later.",
    "cn": "A：我們應該聘請比較便宜的培訓公司，還是值得多付錢給人資主管推薦的那一家？ B：我認為應該多付一點，因為那家公司提供全國雇主都接受的【公認的】證書，這會幫助我們的員工以後升職。"
  },
  {
    "word": "acclaimed",
    "pos": "adj.",
    "cn_def": "廣受好評的",
    "en_def": "praised publicly by many people, especially critics",
    "sentence": "A: Why are tickets for the theater show on Friday night so expensive compared with the other performances in town this month? B: It is a highly {{BLANK}} musical that won several awards in New York last year, so the theater knows many people are willing to pay more to see it.",
    "cn": "A：為什麼週五晚上那場戲劇表演的票，跟這個月城裡其他的表演比起來這麼貴？ B：那是一齣去年在紐約贏得好幾個獎項、非常【廣受好評的】音樂劇，所以劇院知道很多人願意多付錢去看。"
  },
  {
    "word": "esteemed",
    "pos": "adj.",
    "cn_def": "受敬重的；尊敬的",
    "en_def": "greatly respected and admired",
    "sentence": "A: How should I begin the welcome speech for the international guests at tonight's company dinner in the hotel ballroom? B: Start by thanking our {{BLANK}} partners from Germany and Japan for traveling so far, and then briefly explain how our cooperation has helped both sides grow over the past ten years.",
    "cn": "A：今晚在飯店宴會廳的公司晚宴上，我該如何開始給國際來賓的歡迎致詞？ B：先感謝我們來自德國和日本、【受敬重的】合作夥伴遠道而來，然後簡短說明過去十年來我們的合作如何幫助雙方成長。"
  },
  {
    "word": "eminent",
    "pos": "adj.",
    "cn_def": "傑出的；著名的（指專業領域）",
    "en_def": "famous and respected in a particular profession",
    "sentence": "A: Who will speak at the medical conference that our pharmaceutical company is sponsoring at the convention center next month? B: An {{BLANK}} doctor who has studied heart disease for thirty years will give the opening talk, and the organizers expect more than five hundred people to attend her session.",
    "cn": "A：下個月我們製藥公司在會議中心贊助的醫學研討會上，誰會演講？ B：一位研究心臟疾病三十年的【傑出的】醫生將發表開幕演說，主辦單位預計會有超過五百人參加她的場次。"
  },
  {
    "word": "star",
    "pos": "n.",
    "cn_def": "明星；巨星",
    "en_def": "a very famous performer, such as an actor or athlete",
    "sentence": "A: Why are there so many reporters and photographers waiting outside the shopping mall entrance this morning? B: A famous movie {{BLANK}} is opening a new clothing store on the second floor, and the manager expects a huge crowd, so extra security guards have been hired for the whole weekend.",
    "cn": "A：為什麼今天早上購物中心入口外有這麼多記者和攝影師在等候？ B：一位知名電影【明星】要在二樓開一家新的服裝店，經理預期會有大批人潮，所以整個週末都加聘了保全人員。"
  },
  {
    "word": "celebrity",
    "pos": "n.",
    "cn_def": "名人",
    "en_def": "a famous person, especially in entertainment",
    "sentence": "A: Do you think hiring a famous singer for our new shampoo advertisement is really worth the high cost? B: Yes, because research shows that customers often trust products when a {{BLANK}} uses them, and our sales team believes the campaign could double our market share within a year.",
    "cn": "A：你認為為我們的新洗髮精廣告請一位知名歌手，真的值得這麼高的費用嗎？ B：值得，因為研究顯示當【名人】使用某產品時，顧客往往會信任它，而且我們的業務團隊相信這次宣傳活動可以在一年內讓市占率翻倍。"
  },
  {
    "word": "figure",
    "pos": "n.",
    "cn_def": "人物",
    "en_def": "an important or well-known person",
    "sentence": "A: Who was the man giving interviews to the reporters in the hotel lobby after the economic forum ended yesterday? B: He is a leading {{BLANK}} in the electric car industry, and many people believe his company will soon build a large factory in our city, creating thousands of new jobs.",
    "cn": "A：昨天經濟論壇結束後，在飯店大廳接受記者採訪的那位男士是誰？ B：他是電動車產業的一位重要【人物】，很多人相信他的公司很快就會在我們的城市蓋一座大型工廠，創造數千個新工作機會。"
  },
  {
    "word": "hero",
    "pos": "n.",
    "cn_def": "英雄",
    "en_def": "a person admired for being brave or doing something great",
    "sentence": "A: Why did the staff give the security guard a big round of applause at the morning meeting today? B: He became a {{BLANK}} last night when he noticed smoke in the storage room, called the fire department quickly, and helped everyone leave the building safely before the fire spread.",
    "cn": "A：為什麼今天早上的會議上員工們給那位保全熱烈的掌聲？ B：他昨晚成了【英雄】，因為他發現儲藏室冒煙，迅速打電話給消防隊，並在火勢蔓延前幫助大家安全離開大樓。"
  },
  {
    "word": "idol",
    "pos": "n.",
    "cn_def": "偶像",
    "en_def": "a famous person that many people love and admire",
    "sentence": "A: Why is your teenage son so excited about the concert at the stadium next Saturday evening? B: His {{BLANK}} is a young pop singer from Korea, and he has saved his allowance for months to buy a ticket, so he can finally see her perform live with his friends.",
    "cn": "A：為什麼你十幾歲的兒子對下週六晚上在體育館舉行的演唱會這麼興奮？ B：他的【偶像】是一位來自韓國的年輕流行歌手，他存了好幾個月的零用錢買票，終於可以和朋友們一起看她的現場表演了。"
  },
  {
    "word": "household name",
    "pos": "n.phr.",
    "cn_def": "家喻戶曉的名字",
    "en_def": "a person or product that almost everyone knows",
    "sentence": "A: Was the coffee company always this successful, or did it start as a small business like ours? B: It started with one tiny shop twenty years ago, but after years of hard work and clever advertising, it became a {{BLANK}} that almost every family in the country knows today.",
    "cn": "A：那家咖啡公司一直都這麼成功嗎？還是也像我們一樣從小生意開始？ B：它二十年前從一家小店開始，但經過多年努力和巧妙的廣告，它成了一個【家喻戶曉的名字】，如今全國幾乎每個家庭都知道。"
  },
  {
    "word": "spotlight",
    "pos": "n.",
    "cn_def": "公眾注意；聚光燈",
    "en_def": "public attention",
    "sentence": "A: Why did the new manager decline the invitation to appear on the television business program next week? B: She prefers to work quietly and avoid the {{BLANK}}, so she asked the company's founder to answer the reporters' questions about the merger instead of doing the interview herself.",
    "cn": "A：為什麼新經理拒絕了下週上電視商業節目的邀請？ B：她比較喜歡低調工作、避開【公眾注意】，所以她請公司創辦人代替她回答記者有關合併的問題，而不是自己接受採訪。"
  },
  {
    "word": "publicity",
    "pos": "n.",
    "cn_def": "宣傳；公眾的注意",
    "en_def": "attention given to someone or something by newspapers, TV, and the internet",
    "sentence": "A: Is the charity run that our company is organizing in the park next month going to help our brand at all? B: Yes, it should bring us a lot of positive {{BLANK}}, because several local newspapers and radio stations have already promised to report on the event and interview our volunteers.",
    "cn": "A：我們公司下個月在公園舉辦的慈善路跑，對我們的品牌會有幫助嗎？ B：會，它應該能帶給我們很多正面的【宣傳】，因為好幾家地方報紙和電台已經答應要報導這個活動並採訪我們的志工。"
  },
  {
    "word": "reputation",
    "pos": "n.",
    "cn_def": "名聲；聲譽",
    "en_def": "the opinion that people have about someone or something",
    "sentence": "A: Why do you want to choose that printing company even though its prices are a little higher than the others? B: It has an excellent {{BLANK}} for finishing large orders on time, and last year it printed all our catalogs without a single mistake, so I think it is worth the extra cost.",
    "cn": "A：為什麼即使那家印刷公司的價格比別家高一點，你還是想選它？ B：它以準時完成大訂單而享有極好的【聲譽】，去年它印我們所有的型錄都沒有出過任何錯，所以我認為多付的費用很值得。"
  },
  {
    "word": "prestige",
    "pos": "n.",
    "cn_def": "聲望；威望",
    "en_def": "respect and admiration because of success or high quality",
    "sentence": "A: Why did you decide to accept the job offer from the international bank instead of the local company that offered a higher salary? B: Working for such a large bank brings a lot of {{BLANK}}, and I believe the experience will open many doors for my career in finance later on.",
    "cn": "A：為什麼你決定接受那家國際銀行的工作，而不是薪水比較高的本地公司？ B：在這麼大的銀行工作會帶來很高的【聲望】，而且我相信這段經驗以後會為我在金融業的職涯打開很多扇門。"
  },
  {
    "word": "recognition",
    "pos": "n.",
    "cn_def": "表揚；認可",
    "en_def": "praise and thanks for someone's work",
    "sentence": "A: Why did the director give Mr. Lee a special award at the year-end party in the hotel last night? B: It was in {{BLANK}} of his hard work on the new customer service system, which reduced complaints by half and saved the company a lot of money this year.",
    "cn": "A：為什麼主管在昨晚飯店的尾牙上頒給李先生一個特別獎？ B：那是為了【表揚】他在新客服系統上的努力，那套系統讓客訴減少了一半，今年也為公司省下很多錢。"
  },
  {
    "word": "fame",
    "pos": "n.",
    "cn_def": "名聲；名氣",
    "en_def": "the state of being known by many people",
    "sentence": "A: How did that small noodle restaurant near the train station suddenly become so busy every night? B: It rose to {{BLANK}} after a popular food blogger posted a video about its spicy beef soup, and now people wait in long lines even on cold and rainy evenings.",
    "cn": "A：火車站附近那家小麵館怎麼突然每天晚上都這麼忙？ B：在一位受歡迎的美食部落客貼出它的辣牛肉湯影片之後，它就打響了【名氣】，現在連寒冷下雨的晚上大家都要排長長的隊。"
  },
  {
    "word": "stardom",
    "pos": "n.",
    "cn_def": "明星地位；星運",
    "en_def": "the state of being a very famous performer",
    "sentence": "A: Did the young actress in our coffee commercial become famous right after the advertisement appeared on television? B: Not immediately, but her road to {{BLANK}} began with that commercial, because a film director saw it, invited her to an audition, and later gave her the main role in a successful movie.",
    "cn": "A：我們咖啡廣告裡的那位年輕女演員，是在廣告上電視之後就馬上出名了嗎？ B：沒有馬上，但她通往【明星地位】之路是從那支廣告開始的，因為一位電影導演看到了它，邀請她去試鏡，後來讓她在一部賣座電影中擔任主角。"
  },
  {
    "word": "notoriety",
    "pos": "n.",
    "cn_def": "惡名；臭名",
    "en_def": "the state of being famous for something bad",
    "sentence": "A: Why did the hotel change its name and repaint the whole building last spring? B: It gained {{BLANK}} after several guests posted angry reviews online about dirty rooms and rude staff, so the new owners wanted a fresh start and a completely different image for travelers.",
    "cn": "A：為什麼那家飯店去年春天改名並重新粉刷整棟建築？ B：在幾位客人上網發表關於房間骯髒和員工無禮的憤怒評論後，它就有了【惡名】，所以新老闆想要重新開始，給旅客一個完全不同的形象。"
  },
  {
    "word": "viral",
    "pos": "adj.",
    "cn_def": "（網路上）爆紅的；迅速傳播的",
    "en_def": "spreading quickly to many people on the internet",
    "sentence": "A: How did the small toy company receive so many online orders over the weekend without spending money on advertising? B: A funny video of a cat playing with one of its toys went {{BLANK}}, and within two days millions of people watched it and shared it with their friends.",
    "cn": "A：那家小玩具公司怎麼能在週末沒花錢打廣告就收到這麼多網路訂單？ B：一支貓咪玩它家玩具的有趣影片在網路上【爆紅】，兩天之內就有數百萬人觀看並分享給朋友。"
  },
  {
    "word": "globally",
    "pos": "adv.",
    "cn_def": "全球地；在全世界",
    "en_def": "in or around the whole world",
    "sentence": "A: Why is the company hiring so many translators and customer service staff who can speak different languages this year? B: The management plans to sell our phones {{BLANK}} instead of only in Asia, so we need people who can support customers in Europe, Africa, and South America.",
    "cn": "A：為什麼公司今年要聘請這麼多會說不同語言的翻譯和客服人員？ B：管理階層計畫將我們的手機銷售到【全球】，而不只在亞洲，所以我們需要能支援歐洲、非洲和南美洲客戶的人員。"
  },
  {
    "word": "widely",
    "pos": "adv.",
    "cn_def": "廣泛地",
    "en_def": "by many people or in many places",
    "sentence": "A: Why don't we use the new accounting software that the sales representative showed us at the trade fair? B: It is not {{BLANK}} used yet, and our accountants say it might be difficult to find training courses or technical support if something goes wrong during the busy tax season.",
    "cn": "A：為什麼我們不用那位業務代表在商展上展示給我們看的新會計軟體？ B：它還沒有被【廣泛地】使用，而我們的會計師說，如果在忙碌的報稅季出問題，可能很難找到訓練課程或技術支援。"
  },
  {
    "word": "publicly",
    "pos": "adv.",
    "cn_def": "公開地",
    "en_def": "in a way that is open for everyone to see or hear",
    "sentence": "A: Has the company told the employees about the plan to move the main office to another city next year? B: Not yet, because the president wants to announce it {{BLANK}} at the press conference on Monday, and he asked the managers to keep the information secret until then.",
    "cn": "A：公司已經告訴員工明年要把總部搬到另一個城市的計畫了嗎？ B：還沒，因為總裁想在週一的記者會上【公開地】宣布，他要求經理們在那之前對這個消息保密。"
  },
  {
    "word": "admire",
    "pos": "v.",
    "cn_def": "欽佩；讚賞",
    "en_def": "to respect and like someone or something very much",
    "sentence": "A: Why do you always ask Mrs. Wang for advice when you have problems with difficult customers at the store? B: I really {{BLANK}} the way she stays calm and polite even when people shout at her, and I hope I can handle complaints as well as she does someday.",
    "cn": "A：為什麼你在店裡遇到難搞的顧客時，總是向王太太請教？ B：我真的很【欽佩】她即使在別人對她大吼時也能保持冷靜和禮貌，我希望有一天也能像她一樣處理客訴。"
  },
  {
    "word": "honor",
    "pos": "v.",
    "cn_def": "表揚；向……致敬",
    "en_def": "to show public respect for someone",
    "sentence": "A: What is the purpose of the special dinner that the company is holding at the restaurant on Friday evening? B: We want to {{BLANK}} three employees who have worked here for more than thirty years, so the president will give each of them a gold watch and a short speech.",
    "cn": "A：公司週五晚上在餐廳舉辦的特別晚宴目的是什麼？ B：我們想【表揚】三位在這裡工作超過三十年的員工，所以總裁會送給他們每人一支金錶並發表簡短演說。"
  }
];

const MCQS = [
  {
    "q": "The hotel is near a _____ shopping street in the city center. Guests can easily walk there in ten minutes.",
    "options": [
      "well-known",
      "eminent",
      "viral",
      "esteemed"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The new restaurant hired a _____ chef from Italy. Reservations are now full for the next two months.",
    "options": [
      "viral",
      "widely",
      "renowned",
      "public"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The museum will display works by a _____ painter next month. Members can visit the exhibition one day early.",
    "options": [
      "viral",
      "celebrated",
      "notorious",
      "complimentary"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Sales increased in every region this quarter. The most _____ growth came from our new stores in Southeast Asia.",
    "options": [
      "esteemed",
      "legendary",
      "respected",
      "notable"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The company logo should appear in a _____ position on the website. Customers must see it as soon as the page opens.",
    "options": [
      "renowned",
      "respected",
      "prominent",
      "acclaimed"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Please welcome our _____ guests from the trade ministry. They will join us for lunch after the factory tour.",
    "options": [
      "distinguished",
      "viral",
      "popular",
      "iconic"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The red double-decker bus is an _____ symbol of London. Our tour package includes a ride on one.",
    "options": [
      "esteemed",
      "eminent",
      "respected",
      "iconic"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Online cooking classes have become very _____ with busy office workers. Our company now offers three new courses every month.",
    "options": [
      "eminent",
      "popular",
      "distinguished",
      "esteemed"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The report was written by an _____ group of economists. Many government leaders read it before making decisions.",
    "options": [
      "influential",
      "viral",
      "popular",
      "iconic"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Dr. Lin is a highly _____ member of the research team. Her colleagues often ask her to check their reports.",
    "options": [
      "viral",
      "iconic",
      "respected",
      "legendary"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The factory follows an internationally _____ safety standard. Inspectors visit twice a year to check all equipment.",
    "options": [
      "famous",
      "recognized",
      "admired",
      "popular"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The director's latest film was critically _____ at the festival. It will be shown in theaters across Europe next month.",
    "options": [
      "notable",
      "prominent",
      "iconic",
      "acclaimed"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The conference will open with a talk by an _____ scientist. She has studied climate change for forty years.",
    "options": [
      "viral",
      "popular",
      "eminent",
      "widely"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The basketball _____ signed a contract to promote our sports drinks. The advertisements will appear on television next week.",
    "options": [
      "star",
      "reputation",
      "fame",
      "publicity"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The perfume company paid a _____ to appear in its new advertisement. Sales rose by twenty percent in one month.",
    "options": [
      "publicity",
      "spotlight",
      "prestige",
      "celebrity"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The former mayor is a well-known public _____ in this city. Many people attended his speech at the business forum.",
    "options": [
      "fame",
      "figure",
      "prestige",
      "stardom"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The pilot was called a _____ after he landed the plane safely. All passengers thanked him at the airport.",
    "options": [
      "hero",
      "publicity",
      "notoriety",
      "prestige"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "After ten years of strong sales, the small brand became a _____. Almost every family in the country now knows it.",
    "options": [
      "spotlight",
      "notoriety",
      "household name",
      "stardom"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The young manager was suddenly in the _____ after the merger. Reporters called her office every day for interviews.",
    "options": [
      "reputation",
      "spotlight",
      "recognition",
      "prestige"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The charity concert attracted a lot of positive _____ for the bank. Several newspapers wrote articles about the event.",
    "options": [
      "stardom",
      "notoriety",
      "celebrity",
      "publicity"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The supplier has a good _____ for delivering goods on time. We have worked with them for over five years.",
    "options": [
      "stardom",
      "celebrity",
      "reputation",
      "spotlight"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Working for a famous law firm brings great _____ to young lawyers. However, the hours are usually very long.",
    "options": [
      "prestige",
      "publicity",
      "celebrity",
      "notoriety"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Ms. Park received an award in _____ of her excellent service. The ceremony took place at the annual staff dinner.",
    "options": [
      "prestige",
      "fame",
      "stardom",
      "recognition"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The small bakery rose to _____ after appearing on a cooking show. Now it opens two more branches every year.",
    "options": [
      "spotlight",
      "fame",
      "celebrity",
      "figure"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The airline gained _____ for losing passengers' luggage last year. It is now working hard to improve its image.",
    "options": [
      "notoriety",
      "prestige",
      "stardom",
      "celebrity"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Our advertisement went _____ on social media within two days. Millions of people watched and shared the funny video.",
    "options": [
      "eminent",
      "esteemed",
      "viral",
      "distinguished"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The company sells its products _____ through online stores. Customers in over fifty countries can order them easily.",
    "options": [
      "eminently",
      "globally",
      "notably",
      "prominently"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "This software is _____ used in hospitals across the country. Doctors find it simple and very reliable.",
    "options": [
      "globally",
      "publicly",
      "eminently",
      "widely"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The president will _____ announce the new product at the trade show. Until then, all details must remain secret.",
    "options": [
      "widely",
      "globally",
      "publicly",
      "notably"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Many employees _____ the director for her honesty and hard work. She always explains her decisions clearly to the staff.",
    "options": [
      "admire",
      "publicize",
      "notice",
      "announce"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "well-known": {
    "pos": "adj.",
    "en_def": "known by many people",
    "cn_def": "眾所周知的；有名的"
  },
  "renowned": {
    "pos": "adj.",
    "en_def": "famous and admired for a special skill or quality",
    "cn_def": "著名的；享有盛譽的"
  },
  "celebrated": {
    "pos": "adj.",
    "en_def": "praised and admired by many people",
    "cn_def": "著名的；備受讚揚的"
  },
  "notable": {
    "pos": "adj.",
    "en_def": "important or interesting enough to be noticed",
    "cn_def": "值得注意的；顯著的"
  },
  "prominent": {
    "pos": "adj.",
    "en_def": "important and well known",
    "cn_def": "重要的；著名的；顯眼的"
  },
  "distinguished": {
    "pos": "adj.",
    "en_def": "very successful and respected",
    "cn_def": "傑出的；卓越的"
  },
  "legendary": {
    "pos": "adj.",
    "en_def": "very famous and talked about for a long time",
    "cn_def": "傳奇的；極其有名的"
  },
  "iconic": {
    "pos": "adj.",
    "en_def": "very famous and seen as a symbol of something",
    "cn_def": "代表性的；標誌性的"
  },
  "popular": {
    "pos": "adj.",
    "en_def": "liked or enjoyed by many people",
    "cn_def": "受歡迎的；流行的"
  },
  "influential": {
    "pos": "adj.",
    "en_def": "having the power to change what people think or do",
    "cn_def": "有影響力的"
  },
  "respected": {
    "pos": "adj.",
    "en_def": "admired by others because of good work or character",
    "cn_def": "受尊敬的"
  },
  "recognized": {
    "pos": "adj.",
    "en_def": "accepted or known as good or official",
    "cn_def": "公認的；被認可的"
  },
  "acclaimed": {
    "pos": "adj.",
    "en_def": "praised publicly by many people, especially critics",
    "cn_def": "廣受好評的"
  },
  "esteemed": {
    "pos": "adj.",
    "en_def": "greatly respected and admired",
    "cn_def": "受敬重的；尊敬的"
  },
  "eminent": {
    "pos": "adj.",
    "en_def": "famous and respected in a particular profession",
    "cn_def": "傑出的；著名的（指專業領域）"
  },
  "star": {
    "pos": "n.",
    "en_def": "a very famous performer, such as an actor or athlete",
    "cn_def": "明星；巨星"
  },
  "celebrity": {
    "pos": "n.",
    "en_def": "a famous person, especially in entertainment",
    "cn_def": "名人"
  },
  "figure": {
    "pos": "n.",
    "en_def": "an important or well-known person",
    "cn_def": "人物"
  },
  "hero": {
    "pos": "n.",
    "en_def": "a person admired for being brave or doing something great",
    "cn_def": "英雄"
  },
  "idol": {
    "pos": "n.",
    "en_def": "a famous person that many people love and admire",
    "cn_def": "偶像"
  },
  "household name": {
    "pos": "n.phr.",
    "en_def": "a person or product that almost everyone knows",
    "cn_def": "家喻戶曉的名字"
  },
  "spotlight": {
    "pos": "n.",
    "en_def": "public attention",
    "cn_def": "公眾注意；聚光燈"
  },
  "publicity": {
    "pos": "n.",
    "en_def": "attention given to someone or something by newspapers, TV, and the internet",
    "cn_def": "宣傳；公眾的注意"
  },
  "reputation": {
    "pos": "n.",
    "en_def": "the opinion that people have about someone or something",
    "cn_def": "名聲；聲譽"
  },
  "prestige": {
    "pos": "n.",
    "en_def": "respect and admiration because of success or high quality",
    "cn_def": "聲望；威望"
  },
  "recognition": {
    "pos": "n.",
    "en_def": "praise and thanks for someone's work",
    "cn_def": "表揚；認可"
  },
  "fame": {
    "pos": "n.",
    "en_def": "the state of being known by many people",
    "cn_def": "名聲；名氣"
  },
  "stardom": {
    "pos": "n.",
    "en_def": "the state of being a very famous performer",
    "cn_def": "明星地位；星運"
  },
  "notoriety": {
    "pos": "n.",
    "en_def": "the state of being famous for something bad",
    "cn_def": "惡名；臭名"
  },
  "viral": {
    "pos": "adj.",
    "en_def": "spreading quickly to many people on the internet",
    "cn_def": "（網路上）爆紅的；迅速傳播的"
  },
  "globally": {
    "pos": "adv.",
    "en_def": "in or around the whole world",
    "cn_def": "全球地；在全世界"
  },
  "widely": {
    "pos": "adv.",
    "en_def": "by many people or in many places",
    "cn_def": "廣泛地"
  },
  "publicly": {
    "pos": "adv.",
    "en_def": "in a way that is open for everyone to see or hear",
    "cn_def": "公開地"
  },
  "admire": {
    "pos": "v.",
    "en_def": "to respect and like someone or something very much",
    "cn_def": "欽佩；讚賞"
  },
  "honor": {
    "pos": "v.",
    "en_def": "to show public respect for someone",
    "cn_def": "表揚；向……致敬"
  }
};

const EXTRA_GLOSSES = {};
