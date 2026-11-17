// Topic 264 Quiz Data: Online Video 網路影片
// Source word list: https://www.examword.com/group-topic/online-video — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T264 - Online Video 網路影片",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "livestream",
    "pos": "n.",
    "cn_def": "直播",
    "en_def": "a video broadcast that people watch online while it is happening",
    "sentence": "A: Will customers who live overseas be able to watch the launch of our new smartphone next Thursday, even though the event is being held in Taipei? B: Yes, the marketing team is going to run a free {{BLANK}} on our website, so anyone with an internet connection can watch the presentation in real time and ask questions.",
    "cn": "A：住在海外的顧客能觀看我們下週四的新智慧型手機發表會嗎？即使活動是在台北舉辦？ B：可以，行銷團隊將在我們的網站上進行免費的【直播】，所以任何有網路連線的人都能即時觀看簡報並提出問題。"
  },
  {
    "word": "stream",
    "pos": "v.",
    "cn_def": "串流播放；直播",
    "en_def": "to send or play video or sound over the internet",
    "sentence": "A: Is it possible for employees who are working from home to attend the training session on the new accounting software tomorrow afternoon? B: Of course, the IT department will {{BLANK}} the whole session through the company intranet, and a recording will also be available afterward for anyone who misses it.",
    "cn": "A：在家工作的員工可以參加明天下午新會計軟體的訓練課程嗎？ B：當然可以，資訊部門會透過公司內部網路【串流播放】整場課程，之後也會提供錄影給錯過的人觀看。"
  },
  {
    "word": "viral",
    "pos": "adj.",
    "cn_def": "（網路上）爆紅的；迅速流傳的",
    "en_def": "spreading very quickly to many people on the internet",
    "sentence": "A: Why has the customer service team been receiving so many phone calls about our coffee machines since Monday morning? B: A short video showing how quickly our new model makes a latte went {{BLANK}} over the weekend, and now thousands of people want to know where they can buy one.",
    "cn": "A：為什麼客服團隊從週一早上開始接到這麼多關於我們咖啡機的電話？ B：一段展示我們新機型多快就能做出拿鐵的短片在週末【爆紅】，現在有成千上萬的人想知道哪裡可以買到。"
  },
  {
    "word": "content",
    "pos": "n.",
    "cn_def": "內容",
    "en_def": "the videos, pictures and words on a website or channel",
    "sentence": "A: What kind of videos should our small bakery post online if we want to attract more young customers to the shop this year? B: I think short, friendly {{BLANK}} that shows our bakers making fresh bread early in the morning would work well, because people enjoy seeing what happens behind the scenes.",
    "cn": "A：如果我們今年想吸引更多年輕顧客到店裡，我們的小麵包店應該在網路上發布什麼樣的影片？ B：我認為簡短、親切的【內容】，展示我們的麵包師傅一大早製作新鮮麵包，效果會很好，因為人們喜歡看幕後發生的事。"
  },
  {
    "word": "creator",
    "pos": "n.",
    "cn_def": "創作者",
    "en_def": "a person who makes videos or other things for people online",
    "sentence": "A: Who made the cooking videos that our marketing manager showed during the meeting about the new line of kitchen products? B: They were made by a popular video {{BLANK}} from Kaohsiung who has over a million followers, and our company is hoping to hire her for an advertising campaign next spring.",
    "cn": "A：行銷經理在新廚房產品系列會議中播放的料理影片是誰做的？ B：那是一位來自高雄、擁有超過一百萬名追蹤者的人氣影片【創作者】做的，我們公司希望明年春天能請她參與廣告活動。"
  },
  {
    "word": "subscriber",
    "pos": "n.",
    "cn_def": "訂閱者",
    "en_def": "a person who signs up to follow a channel and get its new videos",
    "sentence": "A: How do we know whether our company's new cooking channel is actually becoming more popular with viewers after three months? B: Well, every week the marketing assistant checks how many people have signed up, and we gained almost one thousand new followers, so each new {{BLANK}} tells us that people really like our recipes.",
    "cn": "A：三個月後，我們怎麼知道公司新的料理頻道是否真的越來越受觀眾歡迎？ B：嗯，行銷助理每週都會檢查有多少人訂閱，我們增加了將近一千名新追蹤者，所以每一位新【訂閱者】都告訴我們大家真的很喜歡我們的食譜。"
  },
  {
    "word": "view",
    "pos": "n.",
    "cn_def": "觀看次數；瀏覽",
    "en_def": "one time that a video is watched",
    "sentence": "A: How can we tell whether the safety video that we posted for new factory workers last month is actually being watched? B: The website counts every single {{BLANK}}, and the report shows that most workers watched it from beginning to end, so the manager has decided to make two more videos like it.",
    "cn": "A：我們怎麼知道上個月為新工廠員工發布的安全影片真的有人在看？ B：網站會計算每一次【觀看】，報告顯示大多數員工從頭看到尾，所以經理決定再製作兩支類似的影片。"
  },
  {
    "word": "thumbnail",
    "pos": "n.",
    "cn_def": "縮圖",
    "en_def": "a small picture that shows what a video is about",
    "sentence": "A: Why do you think so few people have clicked on the product video that we put on our website last Friday afternoon? B: The small picture that appears before the video starts is dark and blurry, so I suggest we design a brighter {{BLANK}} with a clear photo of the product and a short title.",
    "cn": "A：你覺得為什麼上週五下午我們放上網站的產品影片很少人點閱？ B：影片開始前出現的小圖又暗又模糊，所以我建議我們設計一張更亮的【縮圖】，放上清楚的產品照片和簡短的標題。"
  },
  {
    "word": "algorithm",
    "pos": "n.",
    "cn_def": "演算法",
    "en_def": "a set of computer rules that decides what to show a user",
    "sentence": "A: Why does the video website keep recommending travel videos to me every time I open it during my lunch break at the office? B: The site uses a computer {{BLANK}} that studies what you watched before and how long you watched it, so it guesses which new videos you will probably enjoy next.",
    "cn": "A：為什麼每次我在辦公室午休打開那個影片網站，它都一直推薦旅遊影片給我？ B：那個網站使用一套電腦【演算法】，分析你之前看過什麼以及看了多久，所以它會猜測你接下來可能會喜歡哪些新影片。"
  },
  {
    "word": "playlist",
    "pos": "n.",
    "cn_def": "播放清單",
    "en_def": "a list of videos or songs that play one after another",
    "sentence": "A: The new employees will watch several training videos on their first day, but how will they know which one to watch first? B: I have put all eight videos into one {{BLANK}} in the correct order, so they just need to press play once and each video will start automatically after the previous one ends.",
    "cn": "A：新員工第一天要看好幾支訓練影片，但他們怎麼知道先看哪一支？ B：我已經把八支影片依正確順序放進一個【播放清單】，所以他們只要按一次播放，每支影片就會在前一支結束後自動開始。"
  },
  {
    "word": "buffer",
    "pos": "v.",
    "cn_def": "緩衝",
    "en_def": "(of a video) to stop and load more data before playing",
    "sentence": "A: Why did the video call with our clients in London keep stopping and starting during this morning's important sales presentation? B: The internet connection in the meeting room is very slow, so the video had to {{BLANK}} every few minutes, and the technician says he will install a faster router before Friday.",
    "cn": "A：為什麼今天早上重要的業務簡報期間，我們和倫敦客戶的視訊通話一直斷斷續續？ B：會議室的網路連線很慢，所以影片每隔幾分鐘就必須【緩衝】，技術人員說他會在週五前安裝一台更快的路由器。"
  },
  {
    "word": "resolution",
    "pos": "n.",
    "cn_def": "解析度",
    "en_def": "how clear and sharp a picture or video is",
    "sentence": "A: The product images in our new advertising video look a bit blurry on the large screen in the shopping mall, don't they? B: Yes, the designer saved the file at a low {{BLANK}} to make it smaller, so she will export it again in high quality and send it to the mall manager this afternoon.",
    "cn": "A：我們新廣告影片裡的產品畫面在購物中心的大螢幕上看起來有點模糊，不是嗎？ B：是的，設計師為了讓檔案小一點而用低【解析度】儲存，所以她今天下午會用高畫質重新輸出，並寄給購物中心經理。"
  },
  {
    "word": "subtitle",
    "pos": "n.",
    "cn_def": "字幕",
    "en_def": "words at the bottom of the screen that translate what people say",
    "sentence": "A: Many of our customers in Japan and Korea do not understand Chinese, so how can they follow our new product video? B: Our translation team is adding a {{BLANK}} file in English so the words appear at the bottom of the screen, and next month they will also prepare Japanese and Korean versions.",
    "cn": "A：我們很多日本和韓國的顧客看不懂中文，他們要怎麼看懂我們的新產品影片？ B：我們的翻譯團隊正在加入英文【字幕】檔，讓文字出現在螢幕下方，下個月他們也會準備日文和韓文版本。"
  },
  {
    "word": "caption",
    "pos": "n.",
    "cn_def": "（圖片、影片的）說明文字",
    "en_def": "a few words written under a picture or video to explain it",
    "sentence": "A: What should I write under the photo of our team at the charity run before I post it on the company's social media page? B: Write a short {{BLANK}} that thanks everyone who joined the event, mentions how much money we raised for the children's hospital, and invites people to take part next year.",
    "cn": "A：在我把我們團隊參加慈善路跑的照片發到公司社群媒體頁面前，我應該在照片下方寫些什麼？ B：寫一段簡短的【說明文字】，感謝所有參加活動的人，提到我們為兒童醫院募得多少錢，並邀請大家明年一起參加。"
  },
  {
    "word": "comment",
    "pos": "n.",
    "cn_def": "留言；評論",
    "en_def": "a short message that a viewer writes about a video or post",
    "sentence": "A: How did viewers respond to the video about our new electric scooter that the marketing team posted online last Tuesday? B: Most people were very positive, but one {{BLANK}} below the video asked about the battery life, so our engineer is preparing a clear answer to post there later today.",
    "cn": "A：觀眾對行銷團隊上週二在網路上發布的新電動機車影片反應如何？ B：大部分人都很正面，但影片下方有一則【留言】問到電池續航力，所以我們的工程師正在準備一個清楚的答覆，今天稍晚會貼在那裡。"
  },
  {
    "word": "share",
    "pos": "v.",
    "cn_def": "分享",
    "en_def": "to send a video, photo or link so other people can see it",
    "sentence": "A: Our charity concert next month still needs more volunteers, so what is the fastest way to spread the information to the staff? B: Ask each department manager to {{BLANK}} the short promotional video with their team through the company chat group, because people usually respond more quickly to videos than to long emails.",
    "cn": "A：我們下個月的慈善音樂會還需要更多志工，把消息傳給員工最快的方法是什麼？ B：請各部門經理透過公司聊天群組把那支簡短的宣傳影片【分享】給他們的團隊，因為人們通常對影片的反應比對長篇電子郵件快。"
  },
  {
    "word": "upload",
    "pos": "v.",
    "cn_def": "上傳",
    "en_def": "to move a file from your computer to a website",
    "sentence": "A: The video of the president's speech at the annual meeting is ready, but when will employees in the overseas offices be able to watch it? B: I will {{BLANK}} the file to the company website as soon as the subtitles are finished this evening, so everyone should be able to see it by tomorrow morning.",
    "cn": "A：董事長在年會上演講的影片準備好了，但海外辦公室的員工什麼時候能看到？ B：今晚字幕一完成我就會把檔案【上傳】到公司網站，所以大家明天早上應該就能看到了。"
  },
  {
    "word": "download",
    "pos": "v.",
    "cn_def": "下載",
    "en_def": "to copy a file from the internet onto your computer or phone",
    "sentence": "A: I am flying to Singapore for a business trip tomorrow, and I am worried that the internet on the plane will be too slow for watching the training course. B: You can {{BLANK}} all the lessons to your laptop before you go to bed tonight, so you will be able to watch them offline during the long flight.",
    "cn": "A：我明天要飛去新加坡出差，我擔心飛機上的網路太慢，沒辦法看訓練課程。 B：你可以在今晚睡覺前把所有課程【下載】到你的筆電，這樣在長途飛行時就能離線觀看。"
  },
  {
    "word": "monetize",
    "pos": "v.",
    "cn_def": "營利化；使…能賺錢",
    "en_def": "to start earning money from something",
    "sentence": "A: Our cooking channel now has thousands of loyal viewers, but how can we start earning money from all the videos we make every week? B: We can {{BLANK}} the channel by allowing short advertisements before each video and by working with kitchen brands that will pay us to show their products.",
    "cn": "A：我們的料理頻道現在有數千名忠實觀眾，但我們要怎麼開始從每週製作的影片中賺錢？ B：我們可以讓每支影片前播放短廣告，並與願意付費請我們展示產品的廚具品牌合作，藉此將頻道【營利化】。"
  },
  {
    "word": "advertisement",
    "pos": "n.",
    "cn_def": "廣告",
    "en_def": "a short video, picture or notice that tries to sell something",
    "sentence": "A: Why did sales of our new sports drink increase so quickly in the second week of July, even though the price stayed the same? B: We ran a thirty-second {{BLANK}} before popular basketball videos online, and many young people who saw it went to convenience stores to try the drink.",
    "cn": "A：為什麼我們新運動飲料的銷量在七月第二週增加得這麼快，即使價格沒變？ B：我們在網路上熱門籃球影片前播放了一支三十秒的【廣告】，許多看到廣告的年輕人就去便利商店試喝了。"
  },
  {
    "word": "vlog",
    "pos": "n.",
    "cn_def": "影音部落格；影片日誌",
    "en_def": "a video diary that someone posts online regularly",
    "sentence": "A: How is the new sales assistant planning to show customers what life is like at our hotel during the busy summer season? B: She is making a weekly {{BLANK}}, a kind of video diary in which she films her own working day, talks to the chefs and guests, and shows the beautiful rooms and the pool.",
    "cn": "A：新來的業務助理打算怎麼向顧客展示我們飯店在忙碌夏季的生活樣貌？ B：她正在製作每週一次的【影音部落格】，一種影片日記，拍攝她自己的工作日、和廚師與客人聊天，並展示漂亮的客房和泳池。"
  },
  {
    "word": "tutorial",
    "pos": "n.",
    "cn_def": "教學；教學影片",
    "en_def": "a lesson that shows you step by step how to do something",
    "sentence": "A: Many customers have called to ask how to set up the new wireless printer, so what can we do to reduce the number of calls? B: Let's record a short video {{BLANK}} that explains each step clearly, from connecting to the Wi-Fi to printing the first page, and put the link on our support website.",
    "cn": "A：很多顧客打電話來問怎麼設定新的無線印表機，我們能做什麼來減少來電數量？ B：我們來錄一支簡短的影片【教學】，清楚說明每個步驟，從連接Wi-Fi到印出第一頁，並把連結放在我們的客服網站上。"
  },
  {
    "word": "reaction",
    "pos": "n.",
    "cn_def": "反應",
    "en_def": "what you feel, say or do because of something",
    "sentence": "A: Why did the marketing team film several customers while they tried our new spicy noodles at the food fair last weekend? B: They wanted to record each person's honest {{BLANK}} to the strong flavor, because funny and surprised faces make great short videos that people love to watch online.",
    "cn": "A：為什麼行銷團隊上週末在美食展上拍攝幾位顧客試吃我們新辣味麵的樣子？ B：他們想記錄每個人對那股濃烈味道的真實【反應】，因為有趣又驚訝的表情能做成大家很愛在網路上看的精彩短片。"
  },
  {
    "word": "engagement",
    "pos": "n.",
    "cn_def": "互動；參與度",
    "en_def": "how much people like, comment on and share online posts",
    "sentence": "A: Our videos get a lot of views, so why is the marketing director still unhappy with the results of our online campaign? B: She says that viewer {{BLANK}} is too low, because very few people like, comment on, or share the videos, which means they are not really interested in our brand.",
    "cn": "A：我們的影片觀看次數很多，為什麼行銷總監還是對網路宣傳活動的成果不滿意？ B：她說觀眾【互動率】太低，因為很少人按讚、留言或分享影片，這表示他們對我們的品牌並不是真的感興趣。"
  },
  {
    "word": "trending",
    "pos": "adj.",
    "cn_def": "熱門的；流行趨勢的",
    "en_def": "very popular and talked about online right now",
    "sentence": "A: How did so many people find the video about our hotel's rooftop restaurant so quickly after we posted it on Friday? B: It became one of the top {{BLANK}} videos on the website within a day, so it appeared on the home page, and thousands of people watched it over the weekend.",
    "cn": "A：我們週五發布那支關於飯店頂樓餐廳的影片後，怎麼這麼快就有這麼多人看到？ B：它在一天之內就成為網站上最【熱門】的影片之一，所以出現在首頁上，週末有成千上萬的人觀看。"
  },
  {
    "word": "influencer",
    "pos": "n.",
    "cn_def": "網紅；有影響力的人",
    "en_def": "a person with many online followers who can affect what they buy",
    "sentence": "A: Why is our cosmetics company paying a young woman with two million online followers to try our new face cream in her videos? B: She is a well-known beauty {{BLANK}}, and her fans trust her opinions, so when she recommends a product, many of them decide to buy it too.",
    "cn": "A：我們化妝品公司為什麼要付錢請一位擁有兩百萬網路追蹤者的年輕女性在影片中試用我們的新面霜？ B：她是知名的美妝【網紅】，她的粉絲信任她的意見，所以當她推薦一項產品時，很多粉絲也會決定購買。"
  },
  {
    "word": "short-form",
    "pos": "adj.",
    "cn_def": "短篇的；短影音的",
    "en_def": "(of videos) very short, usually under one minute",
    "sentence": "A: Our department wants to attract younger customers, but most of them stop watching our five-minute product videos after a few seconds. B: Then we should focus on {{BLANK}} videos that last less than one minute, because busy young people prefer quick, fun clips they can watch on their phones while waiting for the bus.",
    "cn": "A：我們部門想吸引年輕顧客，但他們大多數在看了幾秒後就不看我們五分鐘的產品影片了。 B：那我們應該專注於不到一分鐘的【短】影音，因為忙碌的年輕人比較喜歡可以在等公車時用手機觀看、快速又有趣的短片。"
  },
  {
    "word": "long-form",
    "pos": "adj.",
    "cn_def": "長篇的",
    "en_def": "(of videos or articles) long and detailed",
    "sentence": "A: Our quick product clips are popular, but how can we explain the complicated features of our new accounting software to business customers? B: We should also make {{BLANK}} videos of about twenty minutes, because professionals who are thinking about buying expensive software usually want detailed explanations and real examples.",
    "cn": "A：我們的產品短片很受歡迎，但我們要怎麼向企業客戶解釋新會計軟體的複雜功能？ B：我們也應該製作大約二十分鐘的【長篇】影片，因為考慮購買昂貴軟體的專業人士通常想要詳細的說明和實際例子。"
  },
  {
    "word": "livestreamer",
    "pos": "n.",
    "cn_def": "直播主",
    "en_def": "a person who broadcasts live videos online",
    "sentence": "A: Who is the friendly young man selling our kitchen knives on the shopping website every Saturday evening? B: He is a professional {{BLANK}} that our company hired last month, and he talks to thousands of viewers in real time while he shows them how sharp the knives are.",
    "cn": "A：每週六晚上在購物網站上販售我們廚房刀具的那位親切年輕人是誰？ B：他是我們公司上個月聘請的專業【直播主】，他一邊即時和數千名觀眾聊天，一邊展示刀子有多鋒利。"
  },
  {
    "word": "platform",
    "pos": "n.",
    "cn_def": "平台",
    "en_def": "a website or service where people can post and watch things",
    "sentence": "A: Which website should our travel agency use to show our new videos about tours in Taiwan to customers in Europe? B: We should choose a {{BLANK}} that is popular in Europe and easy to use on mobile phones, and then we can compare the number of viewers after one month.",
    "cn": "A：我們的旅行社應該用哪個網站向歐洲顧客展示關於台灣旅遊行程的新影片？ B：我們應該選擇一個在歐洲受歡迎、而且在手機上容易使用的【平台】，一個月後再比較觀看人數。"
  },
  {
    "word": "channel",
    "pos": "n.",
    "cn_def": "頻道",
    "en_def": "a page on a video website where one person or company posts videos",
    "sentence": "A: Where can customers find all of our product videos, from the cooking demonstrations to the cleaning tips and repair guides? B: We have created an official company {{BLANK}} on the video website, so customers can follow it and receive a message every time we post something new.",
    "cn": "A：顧客可以在哪裡找到我們所有的產品影片，從烹飪示範到清潔訣竅和維修指南？ B：我們在影片網站上建立了官方公司【頻道】，所以顧客可以追蹤它，每次我們發布新影片時都會收到通知。"
  },
  {
    "word": "filter",
    "pos": "n.",
    "cn_def": "濾鏡",
    "en_def": "an effect that changes the colors or look of a photo or video",
    "sentence": "A: Why do the photos of our new hotel rooms look much warmer and brighter on social media than they do on the hotel's website? B: The designer added a soft {{BLANK}} to the pictures before posting them, which changes the colors a little, but we should be careful not to make the rooms look different from reality.",
    "cn": "A：為什麼我們飯店新客房的照片在社群媒體上看起來比在飯店官網上溫暖明亮得多？ B：設計師在發布前替照片加了一層柔和的【濾鏡】，稍微改變了顏色，但我們應該小心，不要讓房間看起來和實際不同。"
  },
  {
    "word": "clip",
    "pos": "n.",
    "cn_def": "片段；短片",
    "en_def": "a short part of a longer video",
    "sentence": "A: The full recording of the conference is three hours long, so how can we show the highlights to people who missed it? B: The video team will cut a short {{BLANK}} of about two minutes from the most important speeches, and we will post it on the company website and social media tomorrow.",
    "cn": "A：研討會的完整錄影長達三小時，我們要怎麼把精華展示給錯過的人看？ B：影片團隊會從最重要的演講中剪出一段大約兩分鐘的【片段】，我們明天會把它發布在公司網站和社群媒體上。"
  },
  {
    "word": "binge-watch",
    "pos": "v.",
    "cn_def": "追劇；一口氣看完",
    "en_def": "to watch many episodes of a show one after another",
    "sentence": "A: You look really tired this morning, so did you stay late at the office to finish the sales report for the meeting? B: No, I finished the report early, but then I started to {{BLANK}} a new drama series at home and watched eight episodes in a row until three o'clock in the morning.",
    "cn": "A：你今天早上看起來很累，你是為了完成會議要用的業務報告而在辦公室待到很晚嗎？ B：沒有，我很早就寫完報告了，但後來我在家開始【追劇】看一部新的連續劇，一口氣看了八集，直到凌晨三點。"
  }
];

const MCQS = [
  {
    "q": "The product launch will be shown online in real time. Customers can join the free _____ on our website at seven on Friday evening.",
    "options": [
      "livestream",
      "subtitle",
      "thumbnail",
      "algorithm"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Staff working from home cannot come to the training. The IT team will _____ the session live through the company intranet.",
    "options": [
      "monetize",
      "binge-watch",
      "stream",
      "buffer"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The funny video of our office cat was shared thousands of times overnight. It went _____ and brought many new customers to our shop.",
    "options": [
      "long-form",
      "viral",
      "short-form",
      "portable"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Our marketing team posts new videos every week. Customers say the _____ is useful because it explains how to care for our products.",
    "options": [
      "thumbnail",
      "buffer",
      "resolution",
      "content"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The cooking videos were made by a famous video _____ from Tainan. She has over a million followers and often works with food brands.",
    "options": [
      "subscriber",
      "algorithm",
      "creator",
      "playlist"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Our channel gained five hundred new followers this month. Every new _____ receives a message when we post a fresh video.",
    "options": [
      "subscriber",
      "advertisement",
      "thumbnail",
      "algorithm"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The website counts each _____ of our training video. So far, the safety video has been watched more than three thousand times.",
    "options": [
      "caption",
      "resolution",
      "filter",
      "view"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Few people clicked on our new video because its small preview picture was blurry. The designer will create a brighter _____ today.",
    "options": [
      "subtitle",
      "thumbnail",
      "algorithm",
      "comment"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The website studies what each user has watched before. Its _____ then recommends new videos that the user will probably enjoy.",
    "options": [
      "algorithm",
      "caption",
      "playlist",
      "subtitle"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "New staff must watch eight training videos in order. I put them all into one _____ so they play automatically one after another.",
    "options": [
      "subtitle",
      "thumbnail",
      "playlist",
      "comment"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The internet in the meeting room is very slow today. The video keeps stopping because it has to _____ every few minutes.",
    "options": [
      "monetize",
      "buffer",
      "share",
      "binge-watch"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The advertisement looks blurry on the large screen in the mall. Please export the file again at a higher _____ before Friday.",
    "options": [
      "engagement",
      "reaction",
      "algorithm",
      "resolution"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Many of our overseas customers do not understand Chinese. We will add an English _____ file so they can read the dialogue.",
    "options": [
      "thumbnail",
      "comment",
      "subtitle",
      "algorithm"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Please write a short _____ under the photo of our team at the charity run. Mention how much money we raised for the hospital.",
    "options": [
      "caption",
      "algorithm",
      "resolution",
      "subscriber"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "One viewer asked about the battery life in a _____ below our scooter video. Our engineer will reply to the question this afternoon.",
    "options": [
      "thumbnail",
      "resolution",
      "algorithm",
      "comment"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Our charity event still needs volunteers. Please _____ the promotional video with your team through the company chat group today.",
    "options": [
      "buffer",
      "share",
      "monetize",
      "binge-watch"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The video of the president's speech is finally ready. I will _____ it to the company website as soon as the subtitles are finished.",
    "options": [
      "upload",
      "buffer",
      "binge-watch",
      "monetize"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The internet on the plane is often very slow. You should _____ the training lessons to your laptop before your flight tomorrow.",
    "options": [
      "monetize",
      "buffer",
      "download",
      "share"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Our cooking channel has many loyal viewers now. We plan to _____ it by showing short advertisements and working with kitchen brands.",
    "options": [
      "buffer",
      "monetize",
      "download",
      "binge-watch"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Sales of the sports drink rose quickly in July. Many young people saw our thirty-second _____ before popular basketball videos online.",
    "options": [
      "subtitle",
      "algorithm",
      "playlist",
      "advertisement"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Customers often call to ask how to set up the new printer. A short video _____ explaining each step should reduce the number of calls.",
    "options": [
      "subscriber",
      "algorithm",
      "tutorial",
      "resolution"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Our videos get many views, but few people like or share them. The director wants to improve viewer _____ in the next campaign.",
    "options": [
      "engagement",
      "resolution",
      "thumbnail",
      "subtitle"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Thousands of people are talking about our hotel video right now. It is currently _____ on the home page of the website.",
    "options": [
      "long-form",
      "short-form",
      "portable",
      "trending"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Our company paid a famous beauty _____ to try our face cream in her videos. Her two million fans trust her opinions.",
    "options": [
      "algorithm",
      "influencer",
      "subtitle",
      "thumbnail"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Young viewers stop watching our five-minute videos after a few seconds. We should make _____ videos that last less than one minute.",
    "options": [
      "short-form",
      "long-form",
      "portable",
      "durable"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Business customers need detailed explanations of our software. We will make _____ videos of about twenty minutes with real examples.",
    "options": [
      "short-form",
      "portable",
      "long-form",
      "fragile"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "We need a video-sharing _____ that is popular in Europe. It should also be easy to use on mobile phones.",
    "options": [
      "thumbnail",
      "platform",
      "caption",
      "subtitle"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Customers can follow our official _____ on the video website. They receive a message every time we post a new video.",
    "options": [
      "algorithm",
      "caption",
      "resolution",
      "channel"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The conference recording is three hours long. Our team will cut a two-minute _____ of the best moments for social media.",
    "options": [
      "subscriber",
      "algorithm",
      "clip",
      "caption"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "I watched eight episodes of the new drama in a row last night. I often _____ whole series like this during long holidays.",
    "options": [
      "binge-watch",
      "buffer",
      "monetize",
      "subscribe"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "livestream": {
    "pos": "n.",
    "en_def": "a video broadcast that people watch online while it is happening",
    "cn_def": "直播"
  },
  "stream": {
    "pos": "v.",
    "en_def": "to send or play video or sound over the internet",
    "cn_def": "串流播放；直播"
  },
  "viral": {
    "pos": "adj.",
    "en_def": "spreading very quickly to many people on the internet",
    "cn_def": "（網路上）爆紅的；迅速流傳的"
  },
  "content": {
    "pos": "n.",
    "en_def": "the videos, pictures and words on a website or channel",
    "cn_def": "內容"
  },
  "creator": {
    "pos": "n.",
    "en_def": "a person who makes videos or other things for people online",
    "cn_def": "創作者"
  },
  "subscriber": {
    "pos": "n.",
    "en_def": "a person who signs up to follow a channel and get its new videos",
    "cn_def": "訂閱者"
  },
  "view": {
    "pos": "n.",
    "en_def": "one time that a video is watched",
    "cn_def": "觀看次數；瀏覽"
  },
  "thumbnail": {
    "pos": "n.",
    "en_def": "a small picture that shows what a video is about",
    "cn_def": "縮圖"
  },
  "algorithm": {
    "pos": "n.",
    "en_def": "a set of computer rules that decides what to show a user",
    "cn_def": "演算法"
  },
  "playlist": {
    "pos": "n.",
    "en_def": "a list of videos or songs that play one after another",
    "cn_def": "播放清單"
  },
  "buffer": {
    "pos": "v.",
    "en_def": "(of a video) to stop and load more data before playing",
    "cn_def": "緩衝"
  },
  "resolution": {
    "pos": "n.",
    "en_def": "how clear and sharp a picture or video is",
    "cn_def": "解析度"
  },
  "subtitle": {
    "pos": "n.",
    "en_def": "words at the bottom of the screen that translate what people say",
    "cn_def": "字幕"
  },
  "caption": {
    "pos": "n.",
    "en_def": "a few words written under a picture or video to explain it",
    "cn_def": "（圖片、影片的）說明文字"
  },
  "comment": {
    "pos": "n.",
    "en_def": "a short message that a viewer writes about a video or post",
    "cn_def": "留言；評論"
  },
  "share": {
    "pos": "v.",
    "en_def": "to send a video, photo or link so other people can see it",
    "cn_def": "分享"
  },
  "upload": {
    "pos": "v.",
    "en_def": "to move a file from your computer to a website",
    "cn_def": "上傳"
  },
  "download": {
    "pos": "v.",
    "en_def": "to copy a file from the internet onto your computer or phone",
    "cn_def": "下載"
  },
  "monetize": {
    "pos": "v.",
    "en_def": "to start earning money from something",
    "cn_def": "營利化；使…能賺錢"
  },
  "advertisement": {
    "pos": "n.",
    "en_def": "a short video, picture or notice that tries to sell something",
    "cn_def": "廣告"
  },
  "vlog": {
    "pos": "n.",
    "en_def": "a video diary that someone posts online regularly",
    "cn_def": "影音部落格；影片日誌"
  },
  "tutorial": {
    "pos": "n.",
    "en_def": "a lesson that shows you step by step how to do something",
    "cn_def": "教學；教學影片"
  },
  "reaction": {
    "pos": "n.",
    "en_def": "what you feel, say or do because of something",
    "cn_def": "反應"
  },
  "engagement": {
    "pos": "n.",
    "en_def": "how much people like, comment on and share online posts",
    "cn_def": "互動；參與度"
  },
  "trending": {
    "pos": "adj.",
    "en_def": "very popular and talked about online right now",
    "cn_def": "熱門的；流行趨勢的"
  },
  "influencer": {
    "pos": "n.",
    "en_def": "a person with many online followers who can affect what they buy",
    "cn_def": "網紅；有影響力的人"
  },
  "short-form": {
    "pos": "adj.",
    "en_def": "(of videos) very short, usually under one minute",
    "cn_def": "短篇的；短影音的"
  },
  "long-form": {
    "pos": "adj.",
    "en_def": "(of videos or articles) long and detailed",
    "cn_def": "長篇的"
  },
  "livestreamer": {
    "pos": "n.",
    "en_def": "a person who broadcasts live videos online",
    "cn_def": "直播主"
  },
  "platform": {
    "pos": "n.",
    "en_def": "a website or service where people can post and watch things",
    "cn_def": "平台"
  },
  "channel": {
    "pos": "n.",
    "en_def": "a page on a video website where one person or company posts videos",
    "cn_def": "頻道"
  },
  "filter": {
    "pos": "n.",
    "en_def": "an effect that changes the colors or look of a photo or video",
    "cn_def": "濾鏡"
  },
  "clip": {
    "pos": "n.",
    "en_def": "a short part of a longer video",
    "cn_def": "片段；短片"
  },
  "binge-watch": {
    "pos": "v.",
    "en_def": "to watch many episodes of a show one after another",
    "cn_def": "追劇；一口氣看完"
  }
};

const EXTRA_GLOSSES = {};
