// Topic 248 Quiz Data: Movie 電影
// Source word list: https://www.examword.com/group-topic/movie — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T248 - Movie 電影",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "film",
    "pos": "n.",
    "cn_def": "電影；影片",
    "en_def": "a story or event recorded as moving pictures and shown on a screen",
    "sentence": "A: Our company is planning a team-building night next Friday, so do you have any ideas about what everyone could enjoy together after work? B: I think we should rent the small hall downstairs and show a funny {{BLANK}} about office life, because people can relax, laugh together, and talk about it over pizza afterward.",
    "cn": "A：我們公司下週五要辦團隊聚會之夜，你有沒有什麼點子，是下班後大家可以一起享受的活動？ B：我認為我們應該租樓下的小廳，放映一部關於辦公室生活的有趣【電影】，因為大家可以放鬆、一起笑，之後還能邊吃披薩邊聊。"
  },
  {
    "word": "cinema",
    "pos": "n.",
    "cn_def": "電影院",
    "en_def": "a building where people go to watch movies",
    "sentence": "A: The client from Tokyo arrives on Saturday and will have a free evening, so where do you think we should take her for some entertainment? B: There is a new {{BLANK}} in the shopping mall near her hotel with large comfortable seats and English movies, so she can walk there easily and enjoy a quiet evening.",
    "cn": "A：東京來的客戶星期六抵達，會有一個空閒的晚上，你覺得我們該帶她去哪裡娛樂一下？ B：她飯店附近的購物中心有一家新的【電影院】，座位又大又舒服，還有英語電影，所以她可以輕鬆走過去，享受一個安靜的夜晚。"
  },
  {
    "word": "theater",
    "pos": "n.",
    "cn_def": "戲院；電影院；劇院",
    "en_def": "a building where movies or plays are shown",
    "sentence": "A: Why did the marketing team decide to hold the product launch downtown instead of in our own conference room this year? B: They rented an old movie {{BLANK}} with five hundred seats and a huge screen, because they expect many reporters and customers and want the new phone to look exciting on stage.",
    "cn": "A：為什麼行銷團隊今年決定在市中心舉辦產品發表會，而不是在我們自己的會議室？ B：他們租了一間有五百個座位和巨大銀幕的老【戲院】，因為他們預期會有很多記者和客戶，想讓新手機在舞台上看起來很吸睛。"
  },
  {
    "word": "screen",
    "pos": "n.",
    "cn_def": "螢幕；銀幕",
    "en_def": "the flat surface on which pictures or movies are shown",
    "sentence": "A: The people sitting in the back row of the training room keep saying that they cannot see the charts during the afternoon presentations. B: I have already asked the facilities department to install a bigger {{BLANK}} on the front wall next week, and they will also move the projector closer so the numbers are clearer.",
    "cn": "A：坐在訓練教室最後一排的人一直說，下午簡報時看不到圖表。 B：我已經請總務部門下週在前面牆上裝一個更大的【螢幕】，他們也會把投影機移近一點，讓數字更清楚。"
  },
  {
    "word": "scene",
    "pos": "n.",
    "cn_def": "場景；一幕",
    "en_def": "one part of a movie that happens in one place and time",
    "sentence": "A: How did the advertising agency's video for our new hotel look when you watched the first version this morning? B: Most of it was beautiful, but the opening {{BLANK}} in the crowded lobby felt too long and noisy, so I asked them to shorten it and start with the ocean view instead.",
    "cn": "A：你今天早上看了廣告公司為我們新飯店拍的影片初版，感覺怎麼樣？ B：大部分都很漂亮，但在擁擠大廳裡的開場【場景】感覺太長又太吵，所以我請他們縮短，改以海景開場。"
  },
  {
    "word": "plot",
    "pos": "n.",
    "cn_def": "情節；劇情",
    "en_def": "the main events of a story",
    "sentence": "A: You said you watched that new spy movie on the flight back from the sales meeting in London, so would you recommend it to the team? B: The actors were great, but the {{BLANK}} was so complicated, with too many secret agents and surprising changes, that I got confused and had to check the story online afterward.",
    "cn": "A：你說從倫敦業務會議回來的班機上看了那部新的間諜片，你會推薦給團隊嗎？ B：演員很棒，但【情節】太複雜了，有太多秘密特務和出人意料的轉折，我都看糊塗了，之後只好上網查故事內容。"
  },
  {
    "word": "character",
    "pos": "n.",
    "cn_def": "角色；人物",
    "en_def": "a person or animal in a story or movie",
    "sentence": "A: Which part of the new cartoon advertisement did the children in our focus group seem to enjoy the most during yesterday's test? B: They loved the friendly robot {{BLANK}} who helps the family clean the kitchen, so the marketing manager wants to use him on our packaging and in future commercials too.",
    "cn": "A：昨天測試時，我們焦點團體裡的孩子似乎最喜歡新卡通廣告的哪個部分？ B：他們很喜歡那個幫全家打掃廚房的友善機器人【角色】，所以行銷經理也想把他用在我們的包裝和未來的廣告上。"
  },
  {
    "word": "actor",
    "pos": "n.",
    "cn_def": "男演員；演員",
    "en_def": "a man whose job is acting in movies, plays, or TV shows",
    "sentence": "A: Why is there such a long line of people outside the bookstore downtown this afternoon, even though it is raining heavily? B: A famous {{BLANK}} from that popular police drama is signing copies of his new book about his life, and many fans have been waiting since early this morning to meet him.",
    "cn": "A：為什麼今天下午市中心的書店外面排了這麼長的隊伍，雖然雨下得很大？ B：那部熱門警匪劇裡一位有名的【男演員】正在為他的自傳新書簽名，很多粉絲從今天一大早就在等著見他。"
  },
  {
    "word": "actress",
    "pos": "n.",
    "cn_def": "女演員",
    "en_def": "a woman whose job is acting in movies, plays, or TV shows",
    "sentence": "A: Who did the cosmetics company finally choose to appear in their new television commercial for the summer skin care line? B: They hired a well-known {{BLANK}} who won an award last year, because she has a healthy, natural image and many young women follow her on social media every day.",
    "cn": "A：化妝品公司最後選了誰來拍他們夏季保養系列的新電視廣告？ B：他們聘請了一位去年得過獎的知名【女演員】，因為她形象健康自然，而且每天都有很多年輕女性在社群媒體上追蹤她。"
  },
  {
    "word": "director",
    "pos": "n.",
    "cn_def": "導演",
    "en_def": "the person who tells the actors and crew what to do when making a movie",
    "sentence": "A: The video for our company's anniversary party looks so professional, so who was in charge of planning all the shots and guiding the staff? B: We hired a young {{BLANK}} who used to make music videos, and she told everyone where to stand, when to smile, and how to speak naturally to the camera.",
    "cn": "A：我們公司週年派對的影片看起來好專業，是誰負責規劃所有鏡頭並指導員工的？ B：我們請了一位以前拍音樂錄影帶的年輕【導演】，她告訴每個人要站哪裡、什麼時候微笑，以及如何自然地對著鏡頭說話。"
  },
  {
    "word": "producer",
    "pos": "n.",
    "cn_def": "製作人；製片",
    "en_def": "the person who finds the money and manages the making of a movie",
    "sentence": "A: Who is responsible for finding the money, hiring the crew, and keeping the budget under control for our new training video series? B: That is the job of the {{BLANK}}, and the one we hired from the media company has already found a cheaper studio and signed contracts with three camera operators.",
    "cn": "A：誰負責籌錢、聘請工作人員，並控制我們新訓練影片系列的預算？ B：那是【製作人】的工作，我們從媒體公司請來的那位已經找到一間較便宜的攝影棚，並和三位攝影師簽了約。"
  },
  {
    "word": "script",
    "pos": "n.",
    "cn_def": "腳本；劇本",
    "en_def": "the written words that actors say in a movie, play, or video",
    "sentence": "A: Are the speakers ready to record the safety video for new factory workers tomorrow morning, or do they still need more time to prepare? B: They received the final {{BLANK}} yesterday afternoon and have practiced every line twice, so I think they can finish recording before lunch if the equipment works.",
    "cn": "A：講者準備好明天早上為工廠新進員工錄製安全影片了嗎？還是還需要更多時間準備？ B：他們昨天下午拿到了定稿的【腳本】，每句台詞都練習了兩次，所以如果設備正常，我想他們午餐前就能錄完。"
  },
  {
    "word": "dialogue",
    "pos": "n.",
    "cn_def": "對話；對白",
    "en_def": "a conversation between people in a story, movie, or lesson",
    "sentence": "A: Why did the language school's new online course get so many good comments from adult learners during the first month? B: Each lesson includes a short video {{BLANK}} between two coworkers in a real office, so students can hear natural conversations about meetings, emails, and phone calls.",
    "cn": "A：為什麼那家語言學校的新線上課程第一個月就得到成人學習者這麼多好評？ B：每一課都有一段兩位同事在真實辦公室裡的短片【對話】，所以學生能聽到關於會議、電子郵件和電話的自然交談。"
  },
  {
    "word": "genre",
    "pos": "n.",
    "cn_def": "類型；體裁",
    "en_def": "a type or style of movie, music, or writing",
    "sentence": "A: The streaming company wants to know what kinds of movies our customers watch most, so what did the survey results show last week? B: Science fiction was the most popular {{BLANK}} among young customers, while older viewers preferred family stories and historical movies, especially on weekend evenings at home.",
    "cn": "A：串流公司想知道我們的客戶最常看哪種電影，上週的調查結果顯示了什麼？ B：科幻片是年輕客戶最喜歡的【類型】，而年長觀眾比較喜歡家庭故事和歷史電影，尤其是週末晚上在家的時候。"
  },
  {
    "word": "comedy",
    "pos": "n.",
    "cn_def": "喜劇",
    "en_def": "a funny movie or play that makes people laugh",
    "sentence": "A: Everyone has been so stressed about the year-end deadlines, so what kind of movie should we show at the staff party on Friday night? B: Let's choose a light {{BLANK}} with lots of silly jokes and a happy ending, because people need to laugh and forget about their reports for a few hours.",
    "cn": "A：大家都因為年底的截止期限壓力很大，星期五晚上的員工派對我們應該放哪種電影？ B：我們選一部有很多搞笑笑話、結局圓滿的輕鬆【喜劇】吧，因為大家需要笑一笑，暫時忘掉報告幾個小時。"
  },
  {
    "word": "drama",
    "pos": "n.",
    "cn_def": "劇情片；戲劇",
    "en_def": "a serious movie, play, or TV show about people's lives and problems",
    "sentence": "A: Have you seen that new television series about doctors working in a busy city hospital that everyone in the office keeps talking about? B: Yes, it is a serious {{BLANK}} about difficult choices and family problems, so I usually watch one episode on Sunday night when I have time to think about the story.",
    "cn": "A：你看了辦公室大家一直在聊的那部新電視影集嗎？講的是在繁忙城市醫院工作的醫生。 B：看了，那是一部關於艱難抉擇和家庭問題的嚴肅【劇情片】，所以我通常在星期天晚上有時間思考劇情時看一集。"
  },
  {
    "word": "thriller",
    "pos": "n.",
    "cn_def": "驚悚片；驚悚小說",
    "en_def": "an exciting movie or book full of danger and surprises",
    "sentence": "A: I am flying to Singapore for the trade show tonight, so can you recommend something to watch that will keep me awake on the plane? B: Try that new {{BLANK}} about a bank manager who discovers a secret plan to steal money, because it is full of danger and surprises until the very last minute.",
    "cn": "A：我今晚要飛新加坡參加商展，你可以推薦一部能讓我在飛機上保持清醒的片子嗎？ B：試試那部新的【驚悚片】吧，講一位銀行經理發現了一個偷錢的秘密計畫，從頭到最後一分鐘都充滿危險和驚奇。"
  },
  {
    "word": "action",
    "pos": "n.",
    "cn_def": "動作（片）",
    "en_def": "a type of movie with fighting, chasing, and exciting events",
    "sentence": "A: Why did the cinema near our office add so many extra evening shows for the new superhero movie this week? B: It is an {{BLANK}} movie with exciting car chases and huge explosions, so many young workers want to watch it on the big screen right after work with their friends.",
    "cn": "A：為什麼我們辦公室附近的電影院這週為那部新的超級英雄電影加開了那麼多晚場？ B：那是一部有刺激飛車追逐和巨大爆炸場面的【動作】片，所以很多年輕上班族下班後想馬上跟朋友去看大銀幕。"
  },
  {
    "word": "animation",
    "pos": "n.",
    "cn_def": "動畫",
    "en_def": "moving pictures made from drawings or computer images",
    "sentence": "A: Our sales training videos are a little boring, so how can we make them more interesting for the new staff next quarter? B: We could use simple {{BLANK}} with colorful cartoon figures to explain each product, because drawings that move are easier to remember than long slides full of text.",
    "cn": "A：我們的業務訓練影片有點無聊，下一季要怎麼讓新員工覺得更有趣？ B：我們可以用色彩繽紛的卡通人物做簡單的【動畫】來說明每項產品，因為會動的圖畫比滿是文字的長投影片更容易記住。"
  },
  {
    "word": "documentary",
    "pos": "n.",
    "cn_def": "紀錄片",
    "en_def": "a movie or TV program that gives facts about real people or events",
    "sentence": "A: What did the environmental group show at the community center last night, and why were so many local business owners there? B: They showed a {{BLANK}} about plastic waste in our river, with real interviews and facts, and many store owners came because they want to reduce plastic bags.",
    "cn": "A：環保團體昨晚在社區中心放映了什麼？為什麼有那麼多當地商家老闆去？ B：他們放映了一部關於我們河川塑膠垃圾的【紀錄片】，有真實的訪談和事實，很多店家老闆來是因為他們想減少塑膠袋。"
  },
  {
    "word": "soundtrack",
    "pos": "n.",
    "cn_def": "電影配樂；原聲帶",
    "en_def": "the music that is played in a movie",
    "sentence": "A: The music in that new car commercial is so beautiful, so do you know where the advertising team found such a moving song? B: They bought the rights to a song from the {{BLANK}} of a famous romantic movie, and now many customers are asking our sales staff about the music too.",
    "cn": "A：那支新汽車廣告裡的音樂好美，你知道廣告團隊在哪裡找到這麼動人的歌嗎？ B：他們買下了一部知名浪漫電影【原聲帶】中一首歌的版權，現在很多客戶也在向我們的業務員詢問那首音樂。"
  },
  {
    "word": "subtitle",
    "pos": "n.",
    "cn_def": "字幕",
    "en_def": "words at the bottom of a screen that show what people are saying",
    "sentence": "A: Our product videos are going to be shown to customers in Japan and Korea next month, so what do we need to change before then? B: We should add a {{BLANK}} in each language at the bottom of the screen, so viewers can read what our engineers are saying without needing a translator.",
    "cn": "A：我們的產品影片下個月要播給日本和韓國的客戶看，在那之前我們需要改什麼？ B：我們應該在畫面下方加上各語言的【字幕】，讓觀眾不需要翻譯就能讀懂我們工程師在說什麼。"
  },
  {
    "word": "dub",
    "pos": "v.",
    "cn_def": "配音；譯製",
    "en_def": "to replace the voices in a movie with voices in another language",
    "sentence": "A: Many young children in our target market cannot read well yet, so how can they understand our cartoon advertisements from overseas? B: We will hire local voice actors to {{BLANK}} the cartoons into Chinese, so the children can hear the characters speaking their own language instead of reading words on the screen.",
    "cn": "A：我們目標市場的很多年幼孩童還不太識字，他們要怎麼看懂我們從國外引進的卡通廣告？ B：我們會請本地的配音員把卡通【配音】成中文，讓孩子們能聽到角色說自己的語言，而不用看螢幕上的字。"
  },
  {
    "word": "release",
    "pos": "v.",
    "cn_def": "發行；上映",
    "en_def": "to make a movie, song, or product available to the public",
    "sentence": "A: When is the studio planning to show its new family movie in theaters, and will it be ready before the winter holidays? B: They plan to {{BLANK}} it in early December, just before schools close, because families often go to the movies together during the long holiday break.",
    "cn": "A：電影公司打算何時在戲院推出新的家庭電影？寒假前會準備好嗎？ B：他們計劃在十二月初【上映】，就在學校放假前，因為長假期間家人常常一起去看電影。"
  },
  {
    "word": "premiere",
    "pos": "n.",
    "cn_def": "首映；首映會",
    "en_def": "the first public showing of a movie or play",
    "sentence": "A: Why does the hotel lobby look so busy tonight, with photographers, red carpets, and security guards standing at every door? B: The {{BLANK}} of a big new movie is being held in our ballroom, so the stars and the director will arrive in an hour to meet reporters before the first public showing.",
    "cn": "A：為什麼今晚飯店大廳這麼忙，有攝影師、紅地毯，每扇門都站著保全？ B：一部大片的【首映會】正在我們的宴會廳舉行，所以明星和導演一小時後會抵達，在首次公開放映前接受記者採訪。"
  },
  {
    "word": "trailer",
    "pos": "n.",
    "cn_def": "預告片",
    "en_def": "a short video that shows parts of a movie to advertise it",
    "sentence": "A: How are we going to get people excited about the company's new training film before it is shown at the annual meeting? B: We will post a short {{BLANK}} on the staff website next Monday, showing a few funny moments and interesting interviews, so employees will look forward to seeing the whole thing.",
    "cn": "A：在年會播放公司新的訓練影片之前，我們要如何讓大家感到期待？ B：我們下週一會在員工網站上發布一支簡短的【預告片】，展示一些有趣片段和精彩訪談，讓員工期待看完整部影片。"
  },
  {
    "word": "review",
    "pos": "n.",
    "cn_def": "評論；影評",
    "en_def": "a piece of writing that gives an opinion about a movie, book, or product",
    "sentence": "A: Should we take our overseas guests to see that new musical movie on Saturday night, or is there something better showing in town? B: I read a {{BLANK}} in the newspaper this morning, and the writer said the songs were wonderful but the story was weak, so maybe we should check other options first.",
    "cn": "A：星期六晚上我們該帶海外貴賓去看那部新的歌舞電影嗎？還是城裡有更好的片子在上映？ B：我今天早上在報紙上讀了一篇【影評】，作者說歌曲很棒但故事薄弱，所以也許我們應該先看看其他選擇。"
  },
  {
    "word": "rating",
    "pos": "n.",
    "cn_def": "分級；評分",
    "en_def": "a mark or level that shows who a movie is suitable for or how good it is",
    "sentence": "A: I want to take my nine-year-old son to a movie this weekend, but how can I tell if a film is suitable for children? B: Look at the age {{BLANK}} printed on the ticket website, because it shows whether a movie has violence or strong language that might not be appropriate for young viewers.",
    "cn": "A：這個週末我想帶九歲的兒子去看電影，但我要怎麼知道一部電影適不適合小孩？ B：看看售票網站上標示的年齡【分級】，因為它會顯示電影是否有暴力或粗話等可能不適合年幼觀眾的內容。"
  },
  {
    "word": "box office",
    "pos": "n.phr.",
    "cn_def": "票房；售票處",
    "en_def": "the money a movie earns from ticket sales; the place where tickets are sold",
    "sentence": "A: The newspaper says the new animated movie earned more than fifty million dollars in its first weekend, so is that a big success? B: Yes, that is an excellent result at the {{BLANK}}, especially in winter, so the studio will probably make a second movie and sell many toys based on the characters.",
    "cn": "A：報紙說那部新動畫電影首週末賺了超過五千萬美元，這算很大的成功嗎？ B：是的，那是非常好的【票房】成績，尤其是在冬天，所以電影公司可能會拍續集，並推出許多以角色為主的玩具。"
  },
  {
    "word": "performance",
    "pos": "n.",
    "cn_def": "演出；表演",
    "en_def": "the way an actor plays a part in a movie or play",
    "sentence": "A: Why did so many critics say that the movie about the old fisherman deserves an award at next month's film festival? B: The lead actor gave an amazing {{BLANK}}, showing the man's sadness and hope with very few words, and many people in the audience were crying at the end.",
    "cn": "A：為什麼這麼多影評人說那部關於老漁夫的電影應該在下個月的影展得獎？ B：男主角的【演出】非常精彩，只用很少的台詞就表現出那個人的悲傷和希望，很多觀眾在最後都哭了。"
  },
  {
    "word": "cinematography",
    "pos": "n.",
    "cn_def": "電影攝影；攝影技術",
    "en_def": "the art of filming a movie, including lighting and camera work",
    "sentence": "A: The movie we watched at the team outing had a very simple story, so why did it win the prize for the best-looking film this year? B: Its {{BLANK}} was beautiful, with careful lighting, wide mountain views, and smooth camera movements, so almost every shot looked like a painting you could hang on a wall.",
    "cn": "A：我們團體出遊時看的那部電影故事很簡單，為什麼它能贏得今年最佳視覺電影獎？ B：它的【攝影】非常美，燈光講究、山景遼闊、鏡頭運動流暢，所以幾乎每個鏡頭都像一幅可以掛在牆上的畫。"
  },
  {
    "word": "editing",
    "pos": "n.",
    "cn_def": "剪輯；編輯",
    "en_def": "the work of choosing and putting together parts of a video or movie",
    "sentence": "A: We recorded almost three hours of interviews at the conference, so how long will it take to turn them into a five-minute video for our website? B: The {{BLANK}} will probably take about a week, because the team has to choose the best parts, cut out mistakes, and add music and company logos.",
    "cn": "A：我們在研討會錄了將近三小時的訪談，要把它們做成網站上的五分鐘影片需要多久？ B：【剪輯】大概要一週左右，因為團隊得挑選最好的片段、剪掉錯誤，再加上音樂和公司標誌。"
  },
  {
    "word": "visual effects",
    "pos": "n.phr.",
    "cn_def": "視覺特效",
    "en_def": "images added to a movie with computers or special methods",
    "sentence": "A: How did the travel company make it look like our tour guide was flying over the mountains in their new online advertisement? B: They filmed her in a studio and then added {{BLANK}} on the computer, so the clouds, mountains, and flying scene were all created later by designers.",
    "cn": "A：旅行社在新的網路廣告裡，是怎麼讓我們的導遊看起來像在山上飛行的？ B：他們在攝影棚拍她，然後用電腦加上【視覺特效】，所以雲、山和飛行場景都是設計師後來製作的。"
  },
  {
    "word": "entertaining",
    "pos": "adj.",
    "cn_def": "有趣的；娛樂性高的",
    "en_def": "fun and interesting to watch or listen to",
    "sentence": "A: Did the guests at the company dinner enjoy the speaker who talked about the history of movies after the main course? B: Yes, she was very {{BLANK}}, telling funny stories about famous stars and old studios, so nobody looked at their phones and everyone stayed until the end of her talk.",
    "cn": "A：公司晚宴的賓客喜歡主菜後那位談電影歷史的講者嗎？ B：喜歡，她非常【有趣】，講了很多關於知名明星和老片廠的趣事，所以沒有人看手機，每個人都待到她演講結束。"
  },
  {
    "word": "emotional",
    "pos": "adj.",
    "cn_def": "感人的；情感的",
    "en_def": "making people feel strong feelings such as sadness or joy",
    "sentence": "A: Why did several people in the meeting room cry when the charity showed its short video about the children's hospital this morning? B: The video was very {{BLANK}}, because it showed sick children smiling and thanking the volunteers, and many of us felt both sad and hopeful at the same time.",
    "cn": "A：為什麼今天早上慈善團體播放兒童醫院的短片時，會議室裡有好幾個人哭了？ B：那部影片非常【感人】，因為它呈現了生病的孩子們微笑著感謝志工，我們很多人同時感到難過又充滿希望。"
  }
];

const MCQS = [
  {
    "q": "The marketing team made a short _____ about our factory. It will be shown to visitors in the lobby every morning.",
    "options": [
      "film",
      "genre",
      "subtitle",
      "rating"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The new _____ downtown has twelve screens and comfortable reclining seats. Tickets are cheaper on Tuesday afternoons for students and seniors.",
    "options": [
      "genre",
      "cinema",
      "plot",
      "trailer"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Employees in the back row could not see the slides clearly. The facilities team will install a larger _____ before Friday's meeting.",
    "options": [
      "scene",
      "plot",
      "screen",
      "genre"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The director filmed the final _____ on the hotel rooftop at sunset. It took the crew six hours to get every shot right.",
    "options": [
      "genre",
      "rating",
      "subtitle",
      "scene"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Many viewers complained that the _____ was hard to follow. There were too many characters and sudden changes in the story.",
    "options": [
      "plot",
      "screen",
      "soundtrack",
      "trailer"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Children loved the friendly robot _____ in the cartoon commercial. The company now plans to put him on its cereal boxes.",
    "options": [
      "producer",
      "character",
      "genre",
      "review"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The famous _____ will sign autographs at the bookstore on Saturday. He played a police officer in last year's most popular series.",
    "options": [
      "documentary",
      "genre",
      "actor",
      "rating"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The _____ asked the actors to repeat the scene several times. She wanted their voices to sound more natural on camera.",
    "options": [
      "soundtrack",
      "genre",
      "subtitle",
      "director"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "As the film's _____, Ms. Park found investors and managed the budget carefully. She also hired the crew and signed every contract.",
    "options": [
      "producer",
      "actress",
      "genre",
      "trailer"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The speakers received the final _____ yesterday afternoon. They have already practiced every line for tomorrow's recording session.",
    "options": [
      "genre",
      "script",
      "premiere",
      "rating"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Each lesson in the online course includes a short _____ between two coworkers. Learners can hear natural conversations about office life.",
    "options": [
      "genre",
      "rating",
      "dialogue",
      "cinema"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Science fiction is the most popular movie _____ among our young customers. Older viewers usually prefer historical films and family stories.",
    "options": [
      "trailer",
      "screen",
      "premiere",
      "genre"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The new _____ kept everyone on the edge of their seats. Nobody could guess who stole the money until the final minute.",
    "options": [
      "thriller",
      "comedy",
      "subtitle",
      "cinema"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The training team used colorful _____ to explain each product. Moving cartoon drawings are easier to remember than long slides.",
    "options": [
      "dialogue",
      "animation",
      "rating",
      "premiere"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The environmental group showed a _____ about plastic waste in the river. It included real interviews and facts from local scientists.",
    "options": [
      "comedy",
      "trailer",
      "documentary",
      "subtitle"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The song in the car commercial comes from the _____ of a famous romantic movie. Many customers have asked about the music.",
    "options": [
      "subtitle",
      "plot",
      "rating",
      "soundtrack"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The video will be shown to clients in Japan next month. Please add a Japanese _____ at the bottom of the screen.",
    "options": [
      "subtitle",
      "trailer",
      "genre",
      "premiere"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The studio hired local voice actors to _____ the cartoon into Chinese. Young children can now understand it without reading anything.",
    "options": [
      "release",
      "dub",
      "review",
      "film"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The studio plans to _____ its new family movie in theaters nationwide in early December. Families often watch movies together during holidays.",
    "options": [
      "review",
      "dub",
      "release",
      "rate"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Movie stars walked down the red carpet at last night's _____. It was the first public showing of the long-awaited film.",
    "options": [
      "trailer",
      "review",
      "subtitle",
      "premiere"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "We will post a short _____ on the website before the film opens. It shows a few exciting moments to attract viewers.",
    "options": [
      "trailer",
      "premiere",
      "genre",
      "cinema"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "According to a _____ in today's newspaper, the songs are wonderful but the story is weak. Maybe we should choose another movie.",
    "options": [
      "trailer",
      "review",
      "subtitle",
      "genre"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Parents should check the age _____ before buying movie tickets. Some films contain violence that is not suitable for young children.",
    "options": [
      "plot",
      "scene",
      "rating",
      "soundtrack"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The animated movie earned fifty million dollars at the _____ in its first weekend. The studio is already planning a second film.",
    "options": [
      "cinematography",
      "soundtrack",
      "premiere",
      "box office"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Critics praised the lead actor for his amazing _____ as an old fisherman. Many people expect him to win an award this year.",
    "options": [
      "performance",
      "cinematography",
      "subtitle",
      "genre"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The film's _____ is beautiful, with careful lighting and wide mountain views. Almost every shot looks like a painting on a wall.",
    "options": [
      "dialogue",
      "cinematography",
      "subtitle",
      "box office"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The _____ of the interview video will take about a week. The team must cut out mistakes and choose the best parts.",
    "options": [
      "premiere",
      "rating",
      "editing",
      "genre"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The designers added _____ on the computer after filming in the studio. The clouds and flying scenes were all created later.",
    "options": [
      "box office",
      "soundtrack",
      "premiere",
      "visual effects"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The speaker at the company dinner was very _____. She told funny stories about famous stars, and nobody looked at their phones.",
    "options": [
      "entertaining",
      "silent",
      "absent",
      "empty"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "The charity's short video was very _____. Many people in the audience felt sad and hopeful, and several of them cried.",
    "options": [
      "technical",
      "emotional",
      "crowded",
      "punctual"
    ],
    "answer": 1,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "film": {
    "pos": "n.",
    "en_def": "a story or event recorded as moving pictures and shown on a screen",
    "cn_def": "電影；影片"
  },
  "cinema": {
    "pos": "n.",
    "en_def": "a building where people go to watch movies",
    "cn_def": "電影院"
  },
  "theater": {
    "pos": "n.",
    "en_def": "a building where movies or plays are shown",
    "cn_def": "戲院；電影院；劇院"
  },
  "screen": {
    "pos": "n.",
    "en_def": "the flat surface on which pictures or movies are shown",
    "cn_def": "螢幕；銀幕"
  },
  "scene": {
    "pos": "n.",
    "en_def": "one part of a movie that happens in one place and time",
    "cn_def": "場景；一幕"
  },
  "plot": {
    "pos": "n.",
    "en_def": "the main events of a story",
    "cn_def": "情節；劇情"
  },
  "character": {
    "pos": "n.",
    "en_def": "a person or animal in a story or movie",
    "cn_def": "角色；人物"
  },
  "actor": {
    "pos": "n.",
    "en_def": "a man whose job is acting in movies, plays, or TV shows",
    "cn_def": "男演員；演員"
  },
  "actress": {
    "pos": "n.",
    "en_def": "a woman whose job is acting in movies, plays, or TV shows",
    "cn_def": "女演員"
  },
  "director": {
    "pos": "n.",
    "en_def": "the person who tells the actors and crew what to do when making a movie",
    "cn_def": "導演"
  },
  "producer": {
    "pos": "n.",
    "en_def": "the person who finds the money and manages the making of a movie",
    "cn_def": "製作人；製片"
  },
  "script": {
    "pos": "n.",
    "en_def": "the written words that actors say in a movie, play, or video",
    "cn_def": "腳本；劇本"
  },
  "dialogue": {
    "pos": "n.",
    "en_def": "a conversation between people in a story, movie, or lesson",
    "cn_def": "對話；對白"
  },
  "genre": {
    "pos": "n.",
    "en_def": "a type or style of movie, music, or writing",
    "cn_def": "類型；體裁"
  },
  "comedy": {
    "pos": "n.",
    "en_def": "a funny movie or play that makes people laugh",
    "cn_def": "喜劇"
  },
  "drama": {
    "pos": "n.",
    "en_def": "a serious movie, play, or TV show about people's lives and problems",
    "cn_def": "劇情片；戲劇"
  },
  "thriller": {
    "pos": "n.",
    "en_def": "an exciting movie or book full of danger and surprises",
    "cn_def": "驚悚片；驚悚小說"
  },
  "action": {
    "pos": "n.",
    "en_def": "a type of movie with fighting, chasing, and exciting events",
    "cn_def": "動作（片）"
  },
  "animation": {
    "pos": "n.",
    "en_def": "moving pictures made from drawings or computer images",
    "cn_def": "動畫"
  },
  "documentary": {
    "pos": "n.",
    "en_def": "a movie or TV program that gives facts about real people or events",
    "cn_def": "紀錄片"
  },
  "soundtrack": {
    "pos": "n.",
    "en_def": "the music that is played in a movie",
    "cn_def": "電影配樂；原聲帶"
  },
  "subtitle": {
    "pos": "n.",
    "en_def": "words at the bottom of a screen that show what people are saying",
    "cn_def": "字幕"
  },
  "dub": {
    "pos": "v.",
    "en_def": "to replace the voices in a movie with voices in another language",
    "cn_def": "配音；譯製"
  },
  "release": {
    "pos": "v.",
    "en_def": "to make a movie, song, or product available to the public",
    "cn_def": "發行；上映"
  },
  "premiere": {
    "pos": "n.",
    "en_def": "the first public showing of a movie or play",
    "cn_def": "首映；首映會"
  },
  "trailer": {
    "pos": "n.",
    "en_def": "a short video that shows parts of a movie to advertise it",
    "cn_def": "預告片"
  },
  "review": {
    "pos": "n.",
    "en_def": "a piece of writing that gives an opinion about a movie, book, or product",
    "cn_def": "評論；影評"
  },
  "rating": {
    "pos": "n.",
    "en_def": "a mark or level that shows who a movie is suitable for or how good it is",
    "cn_def": "分級；評分"
  },
  "box office": {
    "pos": "n.phr.",
    "en_def": "the money a movie earns from ticket sales; the place where tickets are sold",
    "cn_def": "票房；售票處"
  },
  "performance": {
    "pos": "n.",
    "en_def": "the way an actor plays a part in a movie or play",
    "cn_def": "演出；表演"
  },
  "cinematography": {
    "pos": "n.",
    "en_def": "the art of filming a movie, including lighting and camera work",
    "cn_def": "電影攝影；攝影技術"
  },
  "editing": {
    "pos": "n.",
    "en_def": "the work of choosing and putting together parts of a video or movie",
    "cn_def": "剪輯；編輯"
  },
  "visual effects": {
    "pos": "n.phr.",
    "en_def": "images added to a movie with computers or special methods",
    "cn_def": "視覺特效"
  },
  "entertaining": {
    "pos": "adj.",
    "en_def": "fun and interesting to watch or listen to",
    "cn_def": "有趣的；娛樂性高的"
  },
  "emotional": {
    "pos": "adj.",
    "en_def": "making people feel strong feelings such as sadness or joy",
    "cn_def": "感人的；情感的"
  }
};

const EXTRA_GLOSSES = {};
