// Topic 5 Quiz Data: Actor 演員
// Source word list: https://www.examword.com/group-topic/actor — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T05 - Actor 演員",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "actress",
    "pos": "n.",
    "cn_def": "女演員",
    "en_def": "a woman whose job is acting in plays, films, or TV shows",
    "sentence": "A: Who is going to appear in the new television commercial for our skin care products, and has the marketing team already signed the contract with her agent? B: We hired a young {{BLANK}} from Taipei who has starred in two popular dramas, and her agent signed the contract yesterday, so filming will start next Monday at the studio downtown.",
    "cn": "A：誰要出演我們護膚產品的新電視廣告？行銷團隊已經和她的經紀人簽約了嗎？ B：我們聘請了一位來自台北、主演過兩部熱門連續劇的年輕【女演員】，她的經紀人昨天已經簽約了，所以下週一將在市中心的攝影棚開始拍攝。"
  },
  {
    "word": "perform",
    "pos": "v.",
    "cn_def": "表演；演出",
    "en_def": "to act, sing, or dance in front of an audience",
    "sentence": "A: What kind of entertainment have you planned for the company's annual dinner, and will it be finished before the awards ceremony begins? B: A local theater group will {{BLANK}} a short comedy about office life for about twenty minutes, and then the managers will hand out the awards right after the actors leave the stage.",
    "cn": "A：你為公司年度晚宴安排了什麼樣的娛樂節目？會在頒獎典禮開始前結束嗎？ B：一個當地劇團將【表演】一齣大約二十分鐘、關於辦公室生活的短篇喜劇，演員們一離開舞台，經理們就會立刻頒發獎項。"
  },
  {
    "word": "performance",
    "pos": "n.",
    "cn_def": "演出；表演",
    "en_def": "an event when people act, sing, or dance for an audience",
    "sentence": "A: Did you enjoy the play that the sales department took our overseas clients to see at the National Theater last Friday evening? B: Yes, the {{BLANK}} was excellent, and the clients were so impressed by the actors and the music that they asked our manager to book tickets for another show before they fly home.",
    "cn": "A：上週五晚上業務部帶海外客戶去國家戲劇院看的那齣戲，你喜歡嗎？ B：喜歡，那場【演出】非常精彩，客戶們對演員和音樂印象深刻，還請我們經理在他們回國前再訂另一場表演的票。"
  },
  {
    "word": "role",
    "pos": "n.",
    "cn_def": "角色",
    "en_def": "the part that an actor plays in a film or play",
    "sentence": "A: Why has the famous actor agreed to appear in such a small training video for our bank, even though he usually only makes big movies? B: His sister works in our customer service department, and he liked the {{BLANK}} of a friendly bank teller who helps an elderly customer, so he agreed to take a much lower fee than usual.",
    "cn": "A：為什麼那位知名演員願意出演我們銀行這麼小的培訓影片，他平常不是只拍大型電影嗎？ B：他的妹妹在我們客服部工作，而且他喜歡那個幫助年長顧客的親切銀行櫃員【角色】，所以他同意收取比平常低很多的酬勞。"
  },
  {
    "word": "character",
    "pos": "n.",
    "cn_def": "角色；人物",
    "en_def": "a person or animal in a story, film, or play",
    "sentence": "A: What do you think about the new animated advertisement that the design team created for our online shopping app last week? B: I really like the main {{BLANK}}, a cheerful delivery cat who brings packages to customers' doors, because it is cute and easy to remember, and many young shoppers have already shared the video on social media.",
    "cn": "A：你覺得設計團隊上週為我們的網購應用程式製作的新動畫廣告怎麼樣？ B：我很喜歡那個主要【角色】，一隻把包裹送到顧客家門口的開心送貨貓，因為牠很可愛又好記，許多年輕購物者已經在社群媒體上分享這支影片了。"
  },
  {
    "word": "cast",
    "pos": "n.",
    "cn_def": "全體演員；演員陣容",
    "en_def": "all the actors in a film, play, or show",
    "sentence": "A: How many people will be in the short film that the human resources department is making about workplace safety this spring? B: The whole {{BLANK}} includes eight employees from different departments, and they will practice their parts together every Wednesday afternoon in the meeting room until filming begins at the factory in April.",
    "cn": "A：人資部今年春天要拍的職場安全短片會有多少人參與演出？ B：【全體演員】包括來自不同部門的八名員工，他們每週三下午會在會議室一起排練各自的部分，直到四月在工廠開拍為止。"
  },
  {
    "word": "script",
    "pos": "n.",
    "cn_def": "劇本；腳本",
    "en_def": "the written words that actors say in a film, play, or ad",
    "sentence": "A: Have you finished writing the words for the product video, or do you still need more time to check the technical details with the engineers? B: I finished the {{BLANK}} last night and emailed it to the engineers this morning, so once they confirm the information is correct, the actors can start learning their parts tomorrow.",
    "cn": "A：你寫完產品影片的台詞了嗎？還是你還需要更多時間跟工程師確認技術細節？ B：我昨晚完成了【劇本】，今天早上已經寄給工程師了，所以只要他們確認資訊正確，演員明天就能開始背自己的部分。"
  },
  {
    "word": "rehearse",
    "pos": "v.",
    "cn_def": "排練；預演",
    "en_def": "to practice a play, speech, or show before the real event",
    "sentence": "A: Why are the sales team members staying so late in the conference room every evening this week, even though their reports are already finished? B: They want to {{BLANK}} the short play they are presenting at the trade show on Saturday, because they will perform in front of hundreds of visitors and don't want to forget anything.",
    "cn": "A：為什麼業務團隊成員這週每天晚上都在會議室待到這麼晚，他們的報告不是已經完成了嗎？ B：他們想【排練】週六要在商展上演出的短劇，因為他們將在數百名參觀者面前表演，不想忘記任何東西。"
  },
  {
    "word": "dialogue",
    "pos": "n.",
    "cn_def": "對話；對白",
    "en_def": "the words that characters say to each other in a film or play",
    "sentence": "A: Why did the director stop filming the scene in the hotel lobby so many times this afternoon, and is there a problem with the actors? B: The {{BLANK}} between the receptionist and the guest sounded too formal and unnatural, so the writer is changing some of the words to make the conversation sound more like real people talking.",
    "cn": "A：為什麼導演今天下午在飯店大廳拍那場戲時喊停了那麼多次？演員有什麼問題嗎？ B：櫃台人員和客人之間的【對白】聽起來太正式、不自然，所以編劇正在修改一些用字，讓這段對話聽起來更像真人在交談。"
  },
  {
    "word": "monologue",
    "pos": "n.",
    "cn_def": "獨白",
    "en_def": "a long speech by one actor alone",
    "sentence": "A: What will the actor do at the start of our product launch event, before the CEO walks out to introduce the new smartphone? B: He will deliver a two-minute {{BLANK}} alone on the stage about how much a phone changes our daily lives, and then the lights will go down and the CEO will appear.",
    "cn": "A：在執行長走出來介紹新智慧型手機之前，那位演員會在我們產品發表會一開始做什麼？ B：他會獨自在舞台上發表一段兩分鐘的【獨白】，講述手機如何改變我們的日常生活，然後燈光會暗下來，執行長就會登場。"
  },
  {
    "word": "stage",
    "pos": "n.",
    "cn_def": "舞台",
    "en_def": "the raised area in a theater or hall where people perform",
    "sentence": "A: Is the main hall ready for tomorrow's awards ceremony, or are the workers still setting up the lights and the sound system? B: The workers finished building the {{BLANK}} this afternoon, but they are still testing the microphones and the lights, so I think everything will be ready by about ten o'clock tonight.",
    "cn": "A：大廳已經準備好明天的頒獎典禮了嗎？還是工作人員還在架設燈光和音響系統？ B：工作人員今天下午已經搭好【舞台】，但他們還在測試麥克風和燈光，所以我想今晚十點左右一切都會準備就緒。"
  },
  {
    "word": "screen",
    "pos": "n.",
    "cn_def": "螢幕；銀幕",
    "en_def": "the surface where films or TV shows are seen; films and TV in general",
    "sentence": "A: Why did the company choose that young actor for our new coffee commercial when there are so many experienced people available? B: He looks very warm and friendly on {{BLANK}}, and when we tested his video with customers in three cities, most of them said they trusted him more than the other actors.",
    "cn": "A：為什麼公司選了那位年輕演員拍我們新的咖啡廣告，明明有那麼多有經驗的人可以選？ B：他在【螢幕】上看起來非常溫暖親切，而且我們在三個城市拿他的影片給顧客測試時，大多數人都說比起其他演員更信任他。"
  },
  {
    "word": "audition",
    "pos": "n.",
    "cn_def": "試鏡",
    "en_def": "a short test where an actor shows if they are right for a part",
    "sentence": "A: How did you choose the actors for the training videos, and how many people came to try out for the parts last weekend? B: We held an {{BLANK}} at our office on Saturday morning, and more than forty people came to read the script, so it took us the whole day to choose the final six actors.",
    "cn": "A：你們是怎麼挑選培訓影片的演員的？上週末有多少人來爭取角色？ B：我們週六早上在辦公室舉辦了一場【試鏡】，有四十多人來讀劇本，所以我們花了一整天才選出最後的六位演員。"
  },
  {
    "word": "director",
    "pos": "n.",
    "cn_def": "導演",
    "en_def": "the person who tells the actors and crew what to do when making a film or play",
    "sentence": "A: Who is in charge of telling the actors where to stand and how to say their words during the filming of our new advertisement? B: The {{BLANK}} we hired from a film company will guide the actors and the camera crew, and she will also decide which scenes we keep after filming is finished next week.",
    "cn": "A：在拍攝我們的新廣告時，誰負責告訴演員站在哪裡以及如何說台詞？ B：我們從一家電影公司請來的【導演】會指導演員和攝影團隊，下週拍攝結束後，她也會決定保留哪些場景。"
  },
  {
    "word": "producer",
    "pos": "n.",
    "cn_def": "製作人",
    "en_def": "the person who controls the money and plans for a film, show, or play",
    "sentence": "A: Who is responsible for the budget of the company documentary, and who should I talk to if we need to rent more equipment? B: You should speak to the {{BLANK}}, because he controls the money, hires the staff, and makes sure the project finishes on time, so he will decide whether we can rent more equipment.",
    "cn": "A：誰負責公司紀錄片的預算？如果我們需要租更多設備，我應該找誰談？ B：你應該和【製作人】談，因為他掌控資金、聘請工作人員，並確保專案準時完成，所以要不要多租設備由他決定。"
  },
  {
    "word": "talent",
    "pos": "n.",
    "cn_def": "天賦；才能",
    "en_def": "a natural ability to do something well",
    "sentence": "A: Why did the manager ask Lisa from accounting to speak in the new recruiting video instead of hiring a professional actor? B: Lisa has a natural {{BLANK}} for speaking in front of a camera, and she is relaxed and friendly, so the manager believes job seekers will find her more honest than a paid actor.",
    "cn": "A：為什麼經理請會計部的Lisa在新的招募影片中說話，而不是聘請專業演員？ B：Lisa天生有面對鏡頭說話的【天賦】，而且她輕鬆又親切，所以經理認為求職者會覺得她比付費請來的演員更真誠。"
  },
  {
    "word": "expressive",
    "pos": "adj.",
    "cn_def": "富有表情的；善於表達的",
    "en_def": "showing feelings clearly, often with the face or voice",
    "sentence": "A: Why did the advertising agency choose that actor for our silent video, which has no words, only music and pictures? B: He has a very {{BLANK}} face, so he can show surprise, joy, and worry clearly without saying anything, which is perfect for a video that will play on screens in busy train stations.",
    "cn": "A：為什麼廣告公司為我們那支沒有台詞、只有音樂和畫面的無聲影片挑選了那位演員？ B：他的臉非常【富有表情】，不用說話就能清楚地表現驚訝、喜悅和擔憂，非常適合在繁忙火車站的螢幕上播放的影片。"
  },
  {
    "word": "dramatic",
    "pos": "adj.",
    "cn_def": "戲劇性的；激動人心的",
    "en_def": "exciting, sudden, or full of strong feeling",
    "sentence": "A: How did the audience react at the end of the play that our company sponsored at the city theater last weekend? B: The ending was very {{BLANK}}, with loud music and the main character running into the rain, so many people in the audience stood up and clapped for several minutes after the lights came back on.",
    "cn": "A：我們公司上週末在市立劇院贊助的那齣戲，結尾時觀眾有什麼反應？ B：結局非常【戲劇性】，配上響亮的音樂和主角衝進雨中的畫面，所以燈光重新亮起後，許多觀眾起立鼓掌了好幾分鐘。"
  },
  {
    "word": "convincing",
    "pos": "adj.",
    "cn_def": "令人信服的；逼真的",
    "en_def": "making people believe that something is true or real",
    "sentence": "A: Did the customers believe the actor in our new advertisement was a real doctor, or did they think he was just reading a script? B: His acting was so {{BLANK}} that many viewers called our office to ask which hospital he worked at, so we had to add a small note saying that he is an actor.",
    "cn": "A：顧客相信我們新廣告裡的演員是真正的醫生嗎？還是他們覺得他只是在念劇本？ B：他的演技非常【逼真】，許多觀眾打電話到我們辦公室詢問他在哪家醫院工作，所以我們只好加上一個小註記，說明他是演員。"
  },
  {
    "word": "versatile",
    "pos": "adj.",
    "cn_def": "多才多藝的；多用途的",
    "en_def": "able to do many different things well",
    "sentence": "A: Why do you want to hire the same actor for all three of our commercials, when each one is so different in style and mood? B: She is very {{BLANK}}, so she can play a serious business owner in one commercial, a funny mother in another, and a sporty student in the third without any problem.",
    "cn": "A：我們的三支廣告風格和氛圍都很不一樣，為什麼你想讓同一位演員拍全部三支？ B：她非常【多才多藝】，所以她可以在一支廣告中飾演嚴肅的企業主，在另一支中飾演風趣的媽媽，在第三支中飾演愛運動的學生，完全沒問題。"
  },
  {
    "word": "famous",
    "pos": "adj.",
    "cn_def": "有名的；著名的",
    "en_def": "known by many people",
    "sentence": "A: Why are there so many reporters and photographers waiting outside the hotel entrance this morning, blocking the guests' cars? B: A {{BLANK}} movie star is staying here while she films a new action movie in the city, and the reporters are hoping to take her picture when she leaves for the studio.",
    "cn": "A：為什麼今天早上有那麼多記者和攝影師在飯店門口等候，還擋住了客人的車？ B：一位【有名的】電影明星在本市拍攝新動作片期間住在這裡，記者們希望在她出發去攝影棚時拍到她的照片。"
  },
  {
    "word": "celebrity",
    "pos": "n.",
    "cn_def": "名人",
    "en_def": "a famous person, especially in entertainment",
    "sentence": "A: How can we attract more visitors to the opening of our new shopping mall next month, since the advertising budget is limited? B: We could invite a local {{BLANK}}, such as a popular TV host or singer, to cut the ribbon, because fans will come to see them and then stay to shop in the stores.",
    "cn": "A：既然廣告預算有限，我們下個月新購物中心開幕時要怎麼吸引更多遊客？ B：我們可以邀請一位當地【名人】，例如受歡迎的電視主持人或歌手來剪綵，因為粉絲會來看他們，然後留下來在店裡購物。"
  },
  {
    "word": "spotlight",
    "pos": "n.",
    "cn_def": "聚光燈；眾人注目的焦點",
    "en_def": "a strong light on a performer; public attention",
    "sentence": "A: Why did the new manager look so nervous at the award ceremony, even though she won the prize for the best sales results? B: She is a quiet person who doesn't enjoy being in the {{BLANK}}, so standing on the stage in front of five hundred coworkers with everyone looking at her made her very uncomfortable.",
    "cn": "A：為什麼新經理在頒獎典禮上看起來那麼緊張，她明明拿到了最佳業績獎？ B：她是個安靜的人，不喜歡成為【眾人注目的焦點】，所以站在五百名同事面前的舞台上、被大家盯著看，讓她非常不自在。"
  },
  {
    "word": "emotion",
    "pos": "n.",
    "cn_def": "情感；情緒",
    "en_def": "a strong feeling, such as love, fear, or sadness",
    "sentence": "A: Why did so many people at the charity event start crying while they were watching the short film about the children's hospital? B: The young actors showed real {{BLANK}} when they played sick children waiting for help, and the story was so touching that the guests donated twice as much money as we expected.",
    "cn": "A：為什麼慈善活動上那麼多人在看那部關於兒童醫院的短片時哭了？ B：年輕演員們在飾演等待幫助的生病孩子時流露出真實的【情感】，故事非常感人，所以賓客捐出的錢是我們預期的兩倍。"
  },
  {
    "word": "improvise",
    "pos": "v.",
    "cn_def": "即興表演；即興發揮",
    "en_def": "to act or speak without planning or practicing first",
    "sentence": "A: What happened during the live product show yesterday when the projector suddenly stopped working in the middle of the presentation? B: The host had to {{BLANK}} for about five minutes, so he told funny stories and asked the audience questions until the technicians fixed the problem, and nobody even noticed that anything was wrong.",
    "cn": "A：昨天的現場產品展示會上，投影機在簡報進行到一半時突然故障，發生了什麼事？ B：主持人只好【即興發揮】了大約五分鐘，他講了好笑的故事並向觀眾提問，直到技術人員解決問題，根本沒有人察覺出了狀況。"
  },
  {
    "word": "line",
    "pos": "n.",
    "cn_def": "台詞",
    "en_def": "words that an actor says in a play or film",
    "sentence": "A: Why did the filming of the bank commercial take so much longer than planned yesterday afternoon? B: The actor kept forgetting his last {{BLANK}}, \"Your money is safe with us,\" because he was nervous, so the director had to film the same short scene about fifteen times before it was perfect.",
    "cn": "A：為什麼昨天下午銀行廣告的拍攝時間比計畫中長那麼多？ B：那位演員因為緊張，一直忘記他的最後一句【台詞】「您的錢交給我們很安全」，所以導演只好把同一個短場景拍了大約十五次才完美。"
  },
  {
    "word": "backstage",
    "pos": "adv.",
    "cn_def": "在後台",
    "en_def": "in the area behind the stage that the audience cannot see",
    "sentence": "A: Where should the speakers wait before they give their presentations at the conference, and can they bring their own laptops? B: They should wait {{BLANK}} in the small room behind the main hall, where there are chairs, water, and power outlets, so they can check their slides on their laptops before they go on.",
    "cn": "A：講者在研討會上簡報之前應該在哪裡等候？他們可以帶自己的筆電嗎？ B：他們應該在【後台】、也就是大廳後方的小房間等候，那裡有椅子、水和電源插座，所以他們上台前可以先用筆電檢查投影片。"
  },
  {
    "word": "costume",
    "pos": "n.",
    "cn_def": "戲服；服裝",
    "en_def": "special clothes an actor wears to look like a character",
    "sentence": "A: Why is the marketing team spending so much money on clothes for the history video about our company's first factory? B: Each actor needs a {{BLANK}} that looks like the clothes workers wore in the 1960s, because the video should look real, and the old photos show exactly what everyone was wearing back then.",
    "cn": "A：為什麼行銷團隊為了那支關於我們公司第一間工廠的歷史影片，花那麼多錢在服裝上？ B：每位演員都需要一套看起來像1960年代工人穿著的【戲服】，因為影片要看起來真實，而舊照片清楚顯示了當時每個人穿的衣服。"
  },
  {
    "word": "makeup",
    "pos": "n.",
    "cn_def": "化妝；彩妝",
    "en_def": "colors and creams put on the face to change how it looks",
    "sentence": "A: Why do the managers have to arrive at the studio an hour before the filming of the company interview video starts? B: The {{BLANK}} artist needs time to prepare their faces, because the bright studio lights can make people look pale or shiny on camera, and she wants everyone to look healthy and natural.",
    "cn": "A：為什麼經理們必須在公司訪談影片開拍前一小時抵達攝影棚？ B：【化妝】師需要時間幫他們的臉做準備，因為攝影棚明亮的燈光會讓人在鏡頭前看起來蒼白或油亮，她希望每個人看起來都健康自然。"
  },
  {
    "word": "scene",
    "pos": "n.",
    "cn_def": "場景；一場戲",
    "en_def": "one part of a film or play that happens in one place",
    "sentence": "A: Which part of the new commercial do you think the customers will remember most after they see it on television? B: I think they will remember the final {{BLANK}}, where the whole family sits around the table and shares our frozen dumplings, because it is warm, simple, and shows the product clearly.",
    "cn": "A：你覺得顧客在電視上看到新廣告後，會對哪個部分印象最深？ B：我想他們會記得最後一【場戲】，全家人圍坐在餐桌旁分享我們的冷凍水餃，因為那一幕溫馨、簡單，又能清楚呈現產品。"
  },
  {
    "word": "lead",
    "pos": "n.",
    "cn_def": "主角",
    "en_def": "the main part in a play or film, or the actor who plays it",
    "sentence": "A: Who is going to play the main part in the musical that our company is sponsoring at the arts festival this summer? B: A young singer from Kaohsiung got the {{BLANK}} after a long competition with many other performers, and the director says her strong voice will help the show sell lots of tickets.",
    "cn": "A：誰要在我們公司今年夏天於藝術節贊助的音樂劇中擔任主要角色？ B：一位來自高雄的年輕歌手在和許多其他表演者激烈競爭後拿到了【主角】，導演說她渾厚的嗓音將幫助這齣戲賣出很多票。"
  },
  {
    "word": "supporting",
    "pos": "adj.",
    "cn_def": "配角的；輔助的",
    "en_def": "(of an actor or part) less important than the main part",
    "sentence": "A: Did the actor from our company's training video win any prizes at the short film festival last month? B: Yes, he won the award for best {{BLANK}} actor, because even though he only appeared in a few scenes as the helpful coworker, his acting made the whole story feel more real.",
    "cn": "A：我們公司培訓影片中的那位演員，上個月在短片影展有得到任何獎項嗎？ B：有，他獲得了最佳【男配角】獎，因為雖然他只在幾場戲中飾演樂於助人的同事，但他的演技讓整個故事感覺更真實。"
  },
  {
    "word": "career",
    "pos": "n.",
    "cn_def": "職業生涯；事業",
    "en_def": "the job or series of jobs a person does for a long time",
    "sentence": "A: Why did the well-known TV actor agree to teach a public speaking workshop for our sales staff next month? B: He started his {{BLANK}} as a salesperson before he became an actor, so he understands how hard it is to talk to customers, and he wants to share his speaking skills with young employees.",
    "cn": "A：為什麼那位知名電視演員同意下個月為我們的業務人員教授公眾演說工作坊？ B：他在成為演員之前，是以業務員開始他的【職業生涯】的，所以他了解和顧客交談有多難，也想和年輕員工分享他的說話技巧。"
  },
  {
    "word": "applause",
    "pos": "n.",
    "cn_def": "掌聲",
    "en_def": "the sound of people clapping their hands to show they liked something",
    "sentence": "A: How did the employees respond when the CEO announced the year-end bonuses at the end of the company party last night? B: There was loud {{BLANK}} that lasted for almost a minute, and some people even stood on their chairs and cheered, because the bonuses were much bigger than everyone had expected this year.",
    "cn": "A：昨晚公司派對結束時執行長宣布年終獎金，員工們有什麼反應？ B：現場響起了幾乎持續一分鐘的熱烈【掌聲】，有些人甚至站到椅子上歡呼，因為今年的獎金比大家預期的多很多。"
  }
];

const MCQS = [
  {
    "q": "The film studio is looking for a woman in her thirties. The _____ will play a busy lawyer in a new legal drama.",
    "options": [
      "actress",
      "producer",
      "applause",
      "makeup"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The silent film had no spoken words at all. The actors had to use very _____ faces to tell the story.",
    "options": [
      "supporting",
      "expressive",
      "versatile",
      "convincing"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Tickets for Friday's show sold out in two days. The evening _____ will begin at 7:30, so please arrive early.",
    "options": [
      "costume",
      "career",
      "makeup",
      "performance"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Mr. Chen was offered a small part in the new series. He will play the _____ of a hotel manager in three episodes.",
    "options": [
      "applause",
      "makeup",
      "role",
      "spotlight"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Children loved the new cartoon mascot in our ad. The friendly _____ now appears on all of our juice boxes.",
    "options": [
      "audition",
      "character",
      "applause",
      "career"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "All the actors met for the first time on Monday. The director thanked the entire _____ for joining the project.",
    "options": [
      "costume",
      "spotlight",
      "cast",
      "makeup"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Sales jumped by 300 percent after the new ad campaign. The _____ increase surprised even the marketing director.",
    "options": [
      "expressive",
      "supporting",
      "versatile",
      "dramatic"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The writer sent the final version to the actors last night. Everyone must read the _____ carefully before the first rehearsal.",
    "options": [
      "script",
      "applause",
      "celebrity",
      "emotion"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The conversation between the two characters sounded unnatural. The writer rewrote the _____ to make it more realistic.",
    "options": [
      "costume",
      "audition",
      "career",
      "dialogue"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "In the opening scene, the actor speaks alone for three minutes. His _____ explains why he left his hometown.",
    "options": [
      "monologue",
      "applause",
      "makeup",
      "producer"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The actors bowed as the curtain came down. Then they walked off the _____ and returned to their dressing rooms.",
    "options": [
      "talent",
      "stage",
      "career",
      "emotion"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The salesperson explained the benefits of the product clearly. Her argument was so _____ that the client signed the contract immediately.",
    "options": [
      "famous",
      "supporting",
      "convincing",
      "expressive"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Some actors feel nervous in front of a live audience. They prefer working on _____, where they can repeat scenes many times.",
    "options": [
      "applause",
      "screen",
      "celebrity",
      "producer"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Over two hundred people applied for the part. Each person had five minutes at the _____ to show what they could do.",
    "options": [
      "audition",
      "applause",
      "career",
      "emotion"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The actors were confused about where to stand. The _____ walked onto the set and explained exactly how to film the scene.",
    "options": [
      "costume",
      "applause",
      "director",
      "spotlight"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The film ran out of money halfway through filming. The _____ had to find new investors to finish the project.",
    "options": [
      "makeup",
      "scene",
      "applause",
      "producer"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Mr. Wu can sing, dance, and act in both comedies and dramas. Because of his many skills, he is very _____.",
    "options": [
      "supporting",
      "convincing",
      "versatile",
      "dramatic"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Our receptionist sings beautifully at every company party. Her _____ for music surprised everyone at last year's year-end dinner.",
    "options": [
      "talent",
      "costume",
      "script",
      "applause"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The new restaurant hired a well-known TV chef for its opening day. The _____ attracted hundreds of fans to the event.",
    "options": [
      "monologue",
      "celebrity",
      "makeup",
      "dialogue"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "After the product won a national award, the small company was suddenly in the _____. Reporters called the office every day.",
    "options": [
      "costume",
      "applause",
      "script",
      "spotlight"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The actor is known by almost everyone in Asia. He is so _____ that he cannot walk down the street without fans stopping him.",
    "options": [
      "supporting",
      "famous",
      "expressive",
      "versatile"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The actress cried real tears in the final scene. Her strong _____ moved many people in the audience.",
    "options": [
      "costume",
      "script",
      "emotion",
      "producer"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The new actor had only one short sentence to say. He practiced his _____ over and over before filming.",
    "options": [
      "line",
      "applause",
      "producer",
      "celebrity"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The museum guide dressed like a soldier from the 1800s. His _____ helped visitors imagine life two hundred years ago.",
    "options": [
      "applause",
      "career",
      "spotlight",
      "costume"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The actors' faces looked too pale under the bright lights. A team put _____ on everyone before the cameras started.",
    "options": [
      "makeup",
      "applause",
      "career",
      "scene"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Ms. Huang does not play the main character in the film. She has a small _____ role as the hero's older sister.",
    "options": [
      "famous",
      "versatile",
      "expressive",
      "supporting"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The final part of the film takes place at an airport. That _____ was filmed at night when there were no passengers.",
    "options": [
      "applause",
      "talent",
      "scene",
      "career"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Ms. Lin will play the most important character in the musical. She got the _____ after three rounds of auditions.",
    "options": [
      "applause",
      "lead",
      "makeup",
      "emotion"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Mr. Park worked as an actor for forty years. He is retiring next month after a long and successful _____.",
    "options": [
      "costume",
      "makeup",
      "spotlight",
      "career"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "When the presentation ended, the audience clapped loudly. The _____ continued for several minutes as the speaker smiled and bowed.",
    "options": [
      "makeup",
      "script",
      "applause",
      "costume"
    ],
    "answer": 2,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "actress": {
    "pos": "n.",
    "en_def": "a woman whose job is acting in plays, films, or TV shows",
    "cn_def": "女演員"
  },
  "perform": {
    "pos": "v.",
    "en_def": "to act, sing, or dance in front of an audience",
    "cn_def": "表演；演出"
  },
  "performance": {
    "pos": "n.",
    "en_def": "an event when people act, sing, or dance for an audience",
    "cn_def": "演出；表演"
  },
  "role": {
    "pos": "n.",
    "en_def": "the part that an actor plays in a film or play",
    "cn_def": "角色"
  },
  "character": {
    "pos": "n.",
    "en_def": "a person or animal in a story, film, or play",
    "cn_def": "角色；人物"
  },
  "cast": {
    "pos": "n.",
    "en_def": "all the actors in a film, play, or show",
    "cn_def": "全體演員；演員陣容"
  },
  "script": {
    "pos": "n.",
    "en_def": "the written words that actors say in a film, play, or ad",
    "cn_def": "劇本；腳本"
  },
  "rehearse": {
    "pos": "v.",
    "en_def": "to practice a play, speech, or show before the real event",
    "cn_def": "排練；預演"
  },
  "dialogue": {
    "pos": "n.",
    "en_def": "the words that characters say to each other in a film or play",
    "cn_def": "對話；對白"
  },
  "monologue": {
    "pos": "n.",
    "en_def": "a long speech by one actor alone",
    "cn_def": "獨白"
  },
  "stage": {
    "pos": "n.",
    "en_def": "the raised area in a theater or hall where people perform",
    "cn_def": "舞台"
  },
  "screen": {
    "pos": "n.",
    "en_def": "the surface where films or TV shows are seen; films and TV in general",
    "cn_def": "螢幕；銀幕"
  },
  "audition": {
    "pos": "n.",
    "en_def": "a short test where an actor shows if they are right for a part",
    "cn_def": "試鏡"
  },
  "director": {
    "pos": "n.",
    "en_def": "the person who tells the actors and crew what to do when making a film or play",
    "cn_def": "導演"
  },
  "producer": {
    "pos": "n.",
    "en_def": "the person who controls the money and plans for a film, show, or play",
    "cn_def": "製作人"
  },
  "talent": {
    "pos": "n.",
    "en_def": "a natural ability to do something well",
    "cn_def": "天賦；才能"
  },
  "expressive": {
    "pos": "adj.",
    "en_def": "showing feelings clearly, often with the face or voice",
    "cn_def": "富有表情的；善於表達的"
  },
  "dramatic": {
    "pos": "adj.",
    "en_def": "exciting, sudden, or full of strong feeling",
    "cn_def": "戲劇性的；激動人心的"
  },
  "convincing": {
    "pos": "adj.",
    "en_def": "making people believe that something is true or real",
    "cn_def": "令人信服的；逼真的"
  },
  "versatile": {
    "pos": "adj.",
    "en_def": "able to do many different things well",
    "cn_def": "多才多藝的；多用途的"
  },
  "famous": {
    "pos": "adj.",
    "en_def": "known by many people",
    "cn_def": "有名的；著名的"
  },
  "celebrity": {
    "pos": "n.",
    "en_def": "a famous person, especially in entertainment",
    "cn_def": "名人"
  },
  "spotlight": {
    "pos": "n.",
    "en_def": "a strong light on a performer; public attention",
    "cn_def": "聚光燈；眾人注目的焦點"
  },
  "emotion": {
    "pos": "n.",
    "en_def": "a strong feeling, such as love, fear, or sadness",
    "cn_def": "情感；情緒"
  },
  "improvise": {
    "pos": "v.",
    "en_def": "to act or speak without planning or practicing first",
    "cn_def": "即興表演；即興發揮"
  },
  "line": {
    "pos": "n.",
    "en_def": "words that an actor says in a play or film",
    "cn_def": "台詞"
  },
  "backstage": {
    "pos": "adv.",
    "en_def": "in the area behind the stage that the audience cannot see",
    "cn_def": "在後台"
  },
  "costume": {
    "pos": "n.",
    "en_def": "special clothes an actor wears to look like a character",
    "cn_def": "戲服；服裝"
  },
  "makeup": {
    "pos": "n.",
    "en_def": "colors and creams put on the face to change how it looks",
    "cn_def": "化妝；彩妝"
  },
  "scene": {
    "pos": "n.",
    "en_def": "one part of a film or play that happens in one place",
    "cn_def": "場景；一場戲"
  },
  "lead": {
    "pos": "n.",
    "en_def": "the main part in a play or film, or the actor who plays it",
    "cn_def": "主角"
  },
  "supporting": {
    "pos": "adj.",
    "en_def": "(of an actor or part) less important than the main part",
    "cn_def": "配角的；輔助的"
  },
  "career": {
    "pos": "n.",
    "en_def": "the job or series of jobs a person does for a long time",
    "cn_def": "職業生涯；事業"
  },
  "applause": {
    "pos": "n.",
    "en_def": "the sound of people clapping their hands to show they liked something",
    "cn_def": "掌聲"
  }
};

const EXTRA_GLOSSES = {};
