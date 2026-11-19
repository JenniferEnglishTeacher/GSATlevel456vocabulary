// Topic 427 Quiz Data: Video 影片
// Source word list: https://www.examword.com/group-topic/video — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T427 - Video 影片",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "footage",
    "pos": "n.",
    "cn_def": "影片片段；鏡頭畫面",
    "en_def": "film or video recorded of an event",
    "sentence": "A: Did the security team find anything useful after the break-in at our downtown store last weekend? B: Yes, they checked the camera {{BLANK}} from Saturday night and saw two men entering through the back door, so the police now have clear pictures to help them with the investigation.",
    "cn": "A：我們市中心門市上週末遭人闖入後，保全團隊有找到任何有用的線索嗎？ B：有，他們檢查了週六晚上的監視器【影片畫面】，看到兩名男子從後門進入，所以警方現在有清楚的畫面可以協助調查。"
  },
  {
    "word": "stream",
    "pos": "v.",
    "cn_def": "串流播放；線上直播",
    "en_def": "to send video or sound over the internet so people can watch it as it plays",
    "sentence": "A: Our sales conference is next Friday, but many staff in the Taipei and Tokyo branches cannot travel because of the tight budget this year. B: That's no problem, because the IT department plans to {{BLANK}} every session online, so everyone can watch from their own office and ask questions in the chat.",
    "cn": "A：我們的業務大會在下週五，但台北和東京分公司的許多員工因為今年預算吃緊而無法出差。 B：沒問題，因為資訊部門打算在線上【串流播放】每一場會議，所以每個人都能在自己的辦公室觀看，並在聊天室裡提問。"
  },
  {
    "word": "clip",
    "pos": "n.",
    "cn_def": "短片；片段",
    "en_def": "a short part of a film or video",
    "sentence": "A: The marketing manager wants something short to show customers at the trade fair booth next month. Do you have any ideas? B: I think we should make a thirty-second {{BLANK}} of our new coffee machine in action, because busy visitors usually stop only for a moment as they walk past.",
    "cn": "A：行銷經理想要一些簡短的東西，在下個月的商展攤位上給顧客看。你有什麼想法嗎？ B：我覺得我們應該做一段三十秒的新咖啡機實際運作【短片】，因為忙碌的參觀者經過時通常只會停留片刻。"
  },
  {
    "word": "viral",
    "pos": "adj.",
    "cn_def": "（在網路上）爆紅的；迅速傳播的",
    "en_def": "spreading very quickly to many people on the internet",
    "sentence": "A: Why are so many people suddenly calling the customer service line to ask about our cheap umbrella from last year? B: A famous singer shared a funny video of herself using it in the rain, and it went {{BLANK}} overnight, so now everyone in the city wants to buy one before they sell out.",
    "cn": "A：為什麼突然有這麼多人打客服專線，詢問我們去年那款便宜的雨傘？ B：一位知名歌手分享了一段她在雨中撐這把傘的搞笑影片，結果一夜之間就【爆紅】了，所以現在全市的人都想在賣完之前買一把。"
  },
  {
    "word": "upload",
    "pos": "v.",
    "cn_def": "上傳",
    "en_def": "to move a file from your computer or phone to the internet",
    "sentence": "A: The training video for the new employees is finally finished, but how will the staff at our three other branches get a copy of it? B: I'll {{BLANK}} it to the company's shared drive this afternoon and send everyone the link, so they can watch it whenever they have free time this week.",
    "cn": "A：新進員工的訓練影片終於完成了，但我們另外三間分公司的員工要怎麼拿到這份影片？ B：我今天下午會把它【上傳】到公司的共用雲端硬碟，再把連結寄給大家，這樣他們這週有空時就能隨時觀看。"
  },
  {
    "word": "download",
    "pos": "v.",
    "cn_def": "下載",
    "en_def": "to copy a file from the internet onto your computer or phone",
    "sentence": "A: I'm flying to Singapore for the client meeting tomorrow, and I'm worried the internet on the plane will be too slow to watch anything. B: You should {{BLANK}} the product videos onto your laptop tonight while you are still at the hotel, so you can review them during the long flight without any connection.",
    "cn": "A：我明天要飛去新加坡和客戶開會，擔心飛機上的網路太慢，什麼都看不了。 B：你應該今晚還在飯店時就把產品影片【下載】到筆電裡，這樣在長途飛行中不用連線也能複習。"
  },
  {
    "word": "subtitle",
    "pos": "n.",
    "cn_def": "字幕",
    "en_def": "words at the bottom of a film or video that show what people are saying",
    "sentence": "A: Our new advertisement will be shown in Japan and Korea next month, but most viewers there don't understand English very well. B: Then we should make sure every spoken line has a {{BLANK}} in the local language at the bottom of the picture, so people can follow the story easily even with the sound turned off.",
    "cn": "A：我們的新廣告下個月會在日本和韓國播出，但那裡大多數觀眾的英文不太好。 B：那我們就該確保每一句台詞在畫面下方都有當地語言的【字幕】，這樣即使關掉聲音，大家也能輕鬆看懂故事。"
  },
  {
    "word": "viewer",
    "pos": "n.",
    "cn_def": "觀眾；收看者",
    "en_def": "a person who watches television or a video",
    "sentence": "A: How did the cooking show that our company sponsored do on its first night on television last Sunday? B: It did very well, and the station told us that almost every {{BLANK}} stayed until the end, so our brand name was seen by a large number of families across the country.",
    "cn": "A：我們公司贊助的烹飪節目上週日首播的表現如何？ B：表現非常好，電視台告訴我們幾乎每位【觀眾】都看到了最後，所以全國有非常多的家庭看到了我們的品牌名稱。"
  },
  {
    "word": "channel",
    "pos": "n.",
    "cn_def": "頻道",
    "en_def": "a television station, or a place on a video website where one person or company posts videos",
    "sentence": "A: Our boss wants to share short product videos with customers every week, but where should we post them so people can find them easily? B: We could start an official {{BLANK}} on YouTube for the company, and customers who subscribe will get a message every time we post something new.",
    "cn": "A：老闆想每週和顧客分享簡短的產品影片，但我們該放在哪裡，大家才容易找到？ B：我們可以替公司在YouTube上開一個官方【頻道】，訂閱的顧客每次在我們發布新內容時都會收到通知。"
  },
  {
    "word": "commentary",
    "pos": "n.",
    "cn_def": "（現場）解說；評論",
    "en_def": "a spoken description of an event while it is happening",
    "sentence": "A: The sports video we made for the client looks great, but it feels a little boring without any voices. What do you think is missing? B: I think it needs some lively {{BLANK}} from an experienced speaker who can explain each play and tell the audience why the moment is so exciting.",
    "cn": "A：我們替客戶做的運動影片看起來很棒，但沒有任何人聲，感覺有點無聊。你覺得少了什麼？ B：我認為它需要一位經驗豐富的講者來做生動的【解說】，說明每一次進攻，並告訴觀眾那一刻為什麼如此精彩。"
  },
  {
    "word": "capture",
    "pos": "v.",
    "cn_def": "捕捉；拍攝下來",
    "en_def": "to record something in a photo or video",
    "sentence": "A: The photographer is coming to our office on Thursday morning to film a video for the company website. What should she focus on? B: She should {{BLANK}} our employees working together in the bright meeting rooms, because clients want to see a friendly and busy team before they decide to work with us.",
    "cn": "A：攝影師週四早上會來我們辦公室，替公司網站拍一支影片。她應該把重點放在哪裡？ B：她應該【拍下】員工們在明亮會議室裡一起工作的樣子，因為客戶在決定和我們合作之前，想看到一個友善又忙碌的團隊。"
  },
  {
    "word": "documentary",
    "pos": "n.",
    "cn_def": "紀錄片",
    "en_def": "a film or TV program that gives facts about a real subject",
    "sentence": "A: Why has the hotel suddenly become so popular with tourists from Europe and America this year? B: A famous film company made a {{BLANK}} about the history of our old building and the families who have run it for a hundred years, and it was shown on a major streaming service in spring.",
    "cn": "A：為什麼這間飯店今年突然這麼受歐美遊客歡迎？ B：一家知名電影公司拍了一部【紀錄片】，介紹我們這棟老建築的歷史和經營它一百年的家族，今年春天在一個大型串流平台上播出了。"
  },
  {
    "word": "edit",
    "pos": "v.",
    "cn_def": "剪輯；編輯",
    "en_def": "to change a video or text by cutting or correcting parts of it",
    "sentence": "A: The interview with our CEO lasted nearly two hours, but the marketing team only wants a short video for the website. B: Don't worry, I will {{BLANK}} the recording this weekend and keep only the most important parts, so the final version will be around five minutes long.",
    "cn": "A：我們執行長的訪談錄了將近兩個小時，但行銷團隊只想要一支放在網站上的短片。 B：別擔心，我這個週末會【剪輯】這段錄影，只保留最重要的部分，所以最終版本大約會是五分鐘長。"
  },
  {
    "word": "effect",
    "pos": "n.",
    "cn_def": "效果；特效",
    "en_def": "a special image or sound added to a film or video",
    "sentence": "A: The new product advertisement looks a bit plain, and the manager said it doesn't catch people's attention at all. B: We could add a special {{BLANK}} at the start, such as the phone flying out of the box in slow motion, so viewers feel surprised and want to keep watching.",
    "cn": "A：新產品廣告看起來有點平淡，經理說它完全吸引不了人的注意。 B：我們可以在開頭加一個特殊【效果】，例如讓手機以慢動作從盒子裡飛出來，讓觀眾感到驚喜並想繼續看下去。"
  },
  {
    "word": "screen",
    "pos": "n.",
    "cn_def": "螢幕；銀幕",
    "en_def": "the flat surface on which pictures or videos are shown",
    "sentence": "A: Why did the sales manager move the client presentation from the small meeting room to the main hall this afternoon? B: The small room only has an old television, but the main hall has a huge {{BLANK}} on the wall, so all twenty visitors can see the video clearly from their seats.",
    "cn": "A：業務經理今天下午為什麼把客戶簡報從小會議室移到大廳？ B：小會議室只有一台舊電視，但大廳牆上有一個巨大的【螢幕】，所以二十位訪客坐在座位上都能清楚看到影片。"
  },
  {
    "word": "record",
    "pos": "v.",
    "cn_def": "錄影；錄音；錄製",
    "en_def": "to store sound or pictures so they can be watched or heard later",
    "sentence": "A: I have to visit a customer in Kaohsiung on Wednesday, so I'll miss the online training about the new sales software. B: Don't worry, the trainer will {{BLANK}} the whole session and send a link to everyone afterward, so you can watch it on the train back home.",
    "cn": "A：我週三要去高雄拜訪客戶，所以會錯過新業務軟體的線上訓練。 B：別擔心，講師會把整堂課【錄下來】，之後把連結寄給大家，所以你可以在回家的火車上觀看。"
  },
  {
    "word": "broadcast",
    "pos": "v.",
    "cn_def": "廣播；播送；轉播",
    "en_def": "to send out a program on television or radio",
    "sentence": "A: Why is the camera crew setting up so many cables and lights in the lobby of our hotel this morning? B: A national television station will {{BLANK}} the mayor's speech live from here tonight, so the manager wants every part of the building to look clean and professional for the viewers at home.",
    "cn": "A：為什麼攝影團隊今天早上在我們飯店大廳架設這麼多電線和燈光？ B：一家全國性電視台今晚會在這裡現場【轉播】市長的演講，所以經理希望大樓的每個角落在家中觀眾眼裡都乾淨又專業。"
  },
  {
    "word": "animate",
    "pos": "v.",
    "cn_def": "製作動畫；使動起來",
    "en_def": "to make drawings or models look as if they are moving in a film",
    "sentence": "A: The children's toy company wants a fun video for its new product, but it doesn't have the money to hire real actors. B: Our design team can {{BLANK}} the toy characters with computer software, so they look like they are walking and talking, and kids will love watching them on their tablets.",
    "cn": "A：那家兒童玩具公司想為新產品做一支有趣的影片，但沒有預算請真人演員。 B：我們的設計團隊可以用電腦軟體把玩具角色【做成動畫】，讓它們看起來像在走路和說話，孩子們一定會喜歡在平板上看。"
  },
  {
    "word": "tutorial",
    "pos": "n.",
    "cn_def": "教學（影片）；指導課程",
    "en_def": "a lesson, often a video, that shows how to do something step by step",
    "sentence": "A: Many customers have called this week because they don't know how to set up the new printer at home. What should we do? B: Let's make a simple video {{BLANK}} that shows each step slowly and clearly, and then we can put the link on the front page of our website and in the instruction booklet.",
    "cn": "A：這週有很多顧客打電話來，因為他們不知道怎麼在家設定新印表機。我們該怎麼辦？ B：我們來做一支簡單的【教學】影片，慢慢且清楚地示範每個步驟，然後把連結放在網站首頁和說明手冊裡。"
  },
  {
    "word": "review",
    "pos": "n.",
    "cn_def": "評論；評價",
    "en_def": "a report that gives an opinion about a product, film, or service",
    "sentence": "A: Sales of our new headphones went up by thirty percent last week, and nobody in the office knows the reason. B: A popular technology blogger posted a positive {{BLANK}} of them on her video channel, saying the sound was clear and the price was fair, so many of her fans decided to buy a pair.",
    "cn": "A：我們的新耳機上週銷量增加了百分之三十，辦公室裡沒人知道原因。 B：一位很受歡迎的科技部落客在她的影音頻道上發表了正面的【評論】，說音質清晰、價格合理，所以她的許多粉絲決定買一副。"
  },
  {
    "word": "cinematic",
    "pos": "adj.",
    "cn_def": "電影般的；電影的",
    "en_def": "looking or feeling like a film made for the cinema",
    "sentence": "A: The travel agency's new advertisement looks so beautiful. How did the team make a simple video of mountains look so special? B: They used a drone, slow camera movement, and soft music to create a {{BLANK}} style, so the video feels like the opening of a big Hollywood film rather than an ordinary advertisement.",
    "cn": "A：旅行社的新廣告看起來好美。團隊是怎麼讓一支簡單的山景影片看起來這麼特別的？ B：他們用了空拍機、緩慢的運鏡和柔和的音樂，營造出【電影般的】風格，所以這支影片感覺像好萊塢大片的開場，而不是一般的廣告。"
  },
  {
    "word": "resolution",
    "pos": "n.",
    "cn_def": "解析度",
    "en_def": "how clear and detailed a picture or screen is",
    "sentence": "A: The video of our new hotel rooms looked clear on my phone, but it looked blurry on the large television in the lobby. B: That's because the photographer filmed it at a low {{BLANK}} to save time, so we should ask him to shoot it again with a better camera next week.",
    "cn": "A：我們新客房的影片在我手機上看很清楚，但在大廳的大電視上看起來卻很模糊。 B：那是因為攝影師為了節省時間用低【解析度】拍攝，所以我們應該請他下週用更好的相機重拍。"
  },
  {
    "word": "thumbnail",
    "pos": "n.",
    "cn_def": "縮圖",
    "en_def": "a small picture that shows what a video or file is about",
    "sentence": "A: Our cooking videos are useful, but very few people click on them when they appear in search results. What can we do? B: We should design a brighter {{BLANK}} for each video, with a close-up picture of the finished dish and a few large words, so people notice it right away while they are scrolling.",
    "cn": "A：我們的烹飪影片很實用，但出現在搜尋結果時，很少有人點進去。我們能怎麼做？ B：我們應該為每支影片設計更亮眼的【縮圖】，放上完成料理的特寫和幾個大字，讓大家在滑動頁面時馬上注意到。"
  },
  {
    "word": "podcast",
    "pos": "n.",
    "cn_def": "播客；Podcast節目",
    "en_def": "a recorded talk show that people can download and listen to",
    "sentence": "A: I spend nearly an hour on the bus every morning, and I want to use that time to learn more about marketing. B: You should listen to a business {{BLANK}} on your phone, because many experts talk about new ideas in each episode, and you can enjoy it while looking out the window.",
    "cn": "A：我每天早上要搭將近一小時的公車，想利用這段時間多學一些行銷知識。 B：你應該用手機聽商業類的【Podcast節目】，因為每一集都有許多專家分享新想法，而且你可以一邊看窗外一邊收聽。"
  },
  {
    "word": "livestream",
    "pos": "n.",
    "cn_def": "網路直播",
    "en_def": "a video broadcast on the internet at the same time as it happens",
    "sentence": "A: How will customers who cannot come to the store opening on Saturday see the new products and the special guests? B: We will run a {{BLANK}} on our social media page for the whole afternoon, so people at home can watch everything as it happens and even ask questions in real time.",
    "cn": "A：週六無法來參加門市開幕的顧客，要怎麼看到新產品和特別來賓？ B：我們整個下午會在社群媒體專頁上進行【網路直播】，讓在家的人能即時看到所有過程，甚至可以即時發問。"
  },
  {
    "word": "audience",
    "pos": "n.",
    "cn_def": "觀眾；聽眾；受眾",
    "en_def": "the group of people who watch or listen to something",
    "sentence": "A: Our new advertisement is funny, but the manager is worried that older customers will not understand the jokes. B: Before we spend money on television time, we should decide who our main {{BLANK}} is, because a video for teenagers should be very different from one for retired people.",
    "cn": "A：我們的新廣告很好笑，但經理擔心年長的顧客聽不懂其中的笑點。 B：在花錢買電視時段之前，我們應該先決定主要的【受眾】是誰，因為給青少年看的影片應該和給退休人士看的很不一樣。"
  },
  {
    "word": "scene",
    "pos": "n.",
    "cn_def": "（電影的）一場戲；場景",
    "en_def": "one part of a film or play that happens in one place",
    "sentence": "A: The director wants to finish filming the coffee shop advertisement today, but it's already six o'clock in the evening. B: We only have one more {{BLANK}} to shoot, where the customer smiles after the first sip, so if everyone stays for another hour, we can complete the whole project tonight.",
    "cn": "A：導演想今天拍完咖啡店廣告，但現在已經傍晚六點了。 B：我們只剩下一場【戲】要拍，就是顧客喝下第一口後微笑的畫面，所以如果大家再多留一小時，今晚就能完成整個案子。"
  },
  {
    "word": "script",
    "pos": "n.",
    "cn_def": "劇本；腳本",
    "en_def": "the written words that actors say in a film, play, or video",
    "sentence": "A: The actors for the company training video will arrive tomorrow morning, but do they know what they need to say? B: Yes, I emailed them the final {{BLANK}} last night, and it includes every line of dialogue, so they can practice tonight and be ready when the camera starts rolling.",
    "cn": "A：公司訓練影片的演員明天早上會到，但他們知道自己要說什麼嗎？ B：知道，我昨晚已經把最終版【腳本】寄給他們了，裡面有每一句台詞，所以他們今晚可以練習，等攝影機開拍時就準備好了。"
  },
  {
    "word": "platform",
    "pos": "n.",
    "cn_def": "平台",
    "en_def": "a website or service where people share or watch content",
    "sentence": "A: Our boss wants to sell more products to young people, but we are not sure where to share our videos online. B: We should choose a popular {{BLANK}} like TikTok or Instagram, because most teenagers spend hours there every day, and short videos can reach thousands of users very quickly.",
    "cn": "A：老闆想把更多產品賣給年輕人，但我們不確定該在網路上的哪裡分享影片。 B：我們應該選擇像TikTok或Instagram這樣熱門的【平台】，因為大多數青少年每天都在那裡花好幾個小時，而短影片可以很快觸及成千上萬的使用者。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的；有創造力的",
    "en_def": "able to think of new and interesting ideas",
    "sentence": "A: Why did the client choose our small company instead of the big agency for their new video campaign? B: They said our team was more {{BLANK}}, because we suggested telling the story through the eyes of a pet dog, which was an original idea that nobody else had offered them.",
    "cn": "A：為什麼客戶的新影片宣傳活動選擇了我們這家小公司，而不是那家大型廣告公司？ B：他們說我們的團隊比較【有創意】，因為我們提議透過一隻寵物狗的眼睛來說故事，這是其他人都沒提出過的獨特點子。"
  },
  {
    "word": "engaging",
    "pos": "adj.",
    "cn_def": "吸引人的；引人入勝的",
    "en_def": "interesting enough to keep your attention",
    "sentence": "A: Last year's safety training video was so boring that most workers stopped paying attention after a few minutes. B: This year we should make it more {{BLANK}} by adding short quizzes, real stories from the factory floor, and some humor, so the staff stay interested from beginning to end.",
    "cn": "A：去年的安全訓練影片太無聊了，大部分員工看幾分鐘就不專心了。 B：今年我們應該加入簡短的小測驗、工廠現場的真實故事和一些幽默，讓它更【吸引人】，讓員工從頭到尾都保持興趣。"
  },
  {
    "word": "entertain",
    "pos": "v.",
    "cn_def": "娛樂；使開心",
    "en_def": "to keep people interested and give them enjoyment",
    "sentence": "A: The children waiting with their parents at the bank always get bored and noisy during busy afternoons. Any ideas? B: We could put a small television in the corner and play some cartoons to {{BLANK}} them, so the parents can talk to the staff calmly and finish their business more quickly.",
    "cn": "A：在忙碌的下午，跟著父母在銀行等候的孩子總是很無聊又吵鬧。有什麼點子嗎？ B：我們可以在角落放一台小電視播些卡通來【娛樂】他們，這樣家長就能冷靜地和行員交談，更快辦完事情。"
  },
  {
    "word": "influencer",
    "pos": "n.",
    "cn_def": "網紅；有影響力的人",
    "en_def": "a person with many online followers who can affect what they buy or think",
    "sentence": "A: How can our small skincare company reach more young customers without spending a lot of money on television ads? B: We could work with a popular {{BLANK}} who has thousands of followers online, because when she shows our products in her videos, her fans often trust her opinion and buy them.",
    "cn": "A：我們這家小型保養品公司，要如何在不花大錢買電視廣告的情況下接觸更多年輕顧客？ B：我們可以和一位在網路上擁有數千名追蹤者的熱門【網紅】合作，因為她在影片中展示我們的產品時，粉絲往往會相信她的意見並購買。"
  },
  {
    "word": "reaction",
    "pos": "n.",
    "cn_def": "反應",
    "en_def": "what you say, feel, or do because of something that happens",
    "sentence": "A: How did the customers at the focus group respond when you showed them our new commercial yesterday afternoon? B: Their {{BLANK}} was mostly positive, because many of them laughed at the funny ending, but a few people said the music was too loud, so we will make some small changes.",
    "cn": "A：你昨天下午把我們的新廣告給焦點團體的顧客看時，他們有什麼回應？ B：他們的【反應】大多是正面的，很多人看到好笑的結尾都笑了，但有幾個人說音樂太大聲，所以我們會做一些小修改。"
  },
  {
    "word": "feature",
    "pos": "v.",
    "cn_def": "以…為特色；特別介紹",
    "en_def": "to include someone or something as an important part of a show, film, or article",
    "sentence": "A: Why is everyone in the marketing department so excited this morning? Did something good happen? B: A famous travel show is going to {{BLANK}} our hotel in its next episode, so millions of viewers will see our rooms, our restaurant, and the beautiful view from the rooftop garden.",
    "cn": "A：為什麼行銷部的每個人今天早上都這麼興奮？發生了什麼好事嗎？ B：一個知名旅遊節目將在下一集【特別介紹】我們的飯店，所以數百萬名觀眾會看到我們的客房、餐廳，以及屋頂花園的美麗景色。"
  },
  {
    "word": "presentation",
    "pos": "n.",
    "cn_def": "簡報；報告",
    "en_def": "a talk that gives information to a group, often with slides",
    "sentence": "A: I'm meeting the new client from Germany on Monday, and I'm nervous about explaining our services in English. B: Why don't you prepare a short {{BLANK}} with a few slides and a two-minute video, so the client can see our work clearly and you don't need to speak for too long?",
    "cn": "A：我週一要和來自德國的新客戶見面，對於用英文介紹我們的服務感到很緊張。 B：你何不準備一份附有幾張投影片和兩分鐘影片的簡短【簡報】，這樣客戶能清楚看到我們的成果，你也不需要講太久？"
  },
  {
    "word": "memorable",
    "pos": "adj.",
    "cn_def": "難忘的；值得紀念的",
    "en_def": "special or good enough to be remembered easily",
    "sentence": "A: Hundreds of companies make advertisements every day, so how can we make sure people remember ours? B: We need a {{BLANK}} ending, such as a catchy song or a funny line from the main character, so viewers keep thinking about our product even after the video is over.",
    "cn": "A：每天有上百家公司在做廣告，我們要怎麼確保大家會記得我們的？ B：我們需要一個【令人難忘的】結尾，例如一首朗朗上口的歌或主角的一句搞笑台詞，讓觀眾在影片結束後仍會一直想到我們的產品。"
  }
];

const MCQS = [
  {
    "q": "The police asked the store manager for the security camera _____ from last night. It clearly showed the thief leaving through the back door.",
    "options": [
      "footage",
      "thumbnail",
      "podcast",
      "commentary"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Because many employees work from home, the company will _____ the annual meeting live on the internet. Staff can watch it on any device.",
    "options": [
      "animate",
      "entertain",
      "stream",
      "download"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The sales team showed a short video _____ of the new blender at the trade fair. Visitors stopped to watch it for about thirty seconds.",
    "options": [
      "platform",
      "clip",
      "influencer",
      "resolution"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Our funny advertisement featuring a dancing cat went _____ within two days. Millions of people around the world shared it online.",
    "options": [
      "cinematic",
      "memorable",
      "creative",
      "viral"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Please _____ your sales report to the shared folder before Friday afternoon. The manager will review all the files over the weekend.",
    "options": [
      "capture",
      "animate",
      "upload",
      "entertain"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The hotel offers free Wi-Fi, so guests can _____ movies to their tablets before a long flight. This service is very popular with business travelers.",
    "options": [
      "download",
      "edit",
      "animate",
      "broadcast"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The film was in French, but each line of dialogue had an English _____ at the bottom. Even the American visitors could follow the story easily.",
    "options": [
      "thumbnail",
      "platform",
      "audience",
      "subtitle"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Every _____ who calls the station during the show can win a free dinner. The cooking program is broadcast every Sunday evening.",
    "options": [
      "script",
      "viewer",
      "thumbnail",
      "footage"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The company started its own YouTube _____ last year to share product videos. It now has over fifty thousand subscribers.",
    "options": [
      "channel",
      "subtitle",
      "reaction",
      "scene"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The former tennis star will provide live _____ during the final match on Sunday. She will explain each player's strategy to the viewers.",
    "options": [
      "thumbnail",
      "resolution",
      "commentary",
      "platform"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The photographer tried to _____ the excitement of the opening ceremony in her pictures. Her photos later appeared in the company newsletter.",
    "options": [
      "entertain",
      "capture",
      "download",
      "animate"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The film crew spent two years making a _____ about wildlife in Taiwan's mountains. It will be shown on public television next month.",
    "options": [
      "thumbnail",
      "subtitle",
      "reaction",
      "documentary"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Before posting the interview online, the team needs to _____ the video and remove the long pauses. The final version should be under ten minutes.",
    "options": [
      "entertain",
      "animate",
      "edit",
      "capture"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The movie used a special _____ to make the car look like it was flying. Audiences were amazed by how real it appeared.",
    "options": [
      "effect",
      "audience",
      "platform",
      "podcast"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The meeting room has a large _____ on the wall for video calls. Everyone can see the remote team members clearly.",
    "options": [
      "podcast",
      "script",
      "reaction",
      "screen"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Our trainer will _____ today's online workshop for staff who cannot attend. They can watch the video later this week.",
    "options": [
      "entertain",
      "record",
      "animate",
      "enroll"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The national television station will _____ the president's speech live at eight o'clock tonight. Many families plan to watch it together.",
    "options": [
      "broadcast",
      "animate",
      "edit",
      "entertain"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The design team used computer software to _____ the cartoon characters for the children's advertisement. Now the toys appear to dance and sing.",
    "options": [
      "broadcast",
      "record",
      "animate",
      "stream"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Customers who have trouble setting up the printer can watch a short video _____ on our website. It explains each step clearly.",
    "options": [
      "thumbnail",
      "tutorial",
      "influencer",
      "resolution"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The technology blogger wrote a positive _____ of our new headphones on her website. Sales increased by twenty percent the following week.",
    "options": [
      "resolution",
      "thumbnail",
      "scene",
      "review"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The travel agency's new advertisement has a _____ style with wide mountain shots and dramatic music. It looks like a Hollywood movie.",
    "options": [
      "viral",
      "accurate",
      "cinematic",
      "patient"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The video looked blurry on the big screen because it was filmed at a low _____. We need a better camera next time.",
    "options": [
      "resolution",
      "audience",
      "reaction",
      "commentary"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "A bright _____ image helps viewers notice your video in search results. It should show a clear picture and a few large words.",
    "options": [
      "podcast",
      "audience",
      "script",
      "thumbnail"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Every Monday, our CEO records a short business _____ that employees can listen to on the way to work. Each episode lasts about fifteen minutes.",
    "options": [
      "thumbnail",
      "podcast",
      "screen",
      "subtitle"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The store will host a _____ on its social media page during Saturday's grand opening. Viewers at home can ask questions in real time.",
    "options": [
      "livestream",
      "thumbnail",
      "subtitle",
      "resolution"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The comedian made the whole _____ laugh with his jokes about office life. More than five hundred people attended the show.",
    "options": [
      "script",
      "platform",
      "audience",
      "thumbnail"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The director wants to shoot the final _____ at the beach just before sunset. The actors must arrive by five o'clock.",
    "options": [
      "viewer",
      "scene",
      "thumbnail",
      "podcast"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The actors received the final _____ a week before filming began. They practiced every line of dialogue carefully.",
    "options": [
      "thumbnail",
      "resolution",
      "influencer",
      "script"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Many young shoppers discover new brands on a social media _____ such as Instagram. Our company plans to advertise there next month.",
    "options": [
      "subtitle",
      "commentary",
      "platform",
      "reaction"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Our agency won the contract because we suggested a very _____ idea. Nobody else thought of telling the story through a pet's eyes.",
    "options": [
      "creative",
      "viral",
      "sleepy",
      "wooden"
    ],
    "answer": 0,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "footage": {
    "pos": "n.",
    "en_def": "film or video recorded of an event",
    "cn_def": "影片片段；鏡頭畫面"
  },
  "stream": {
    "pos": "v.",
    "en_def": "to send video or sound over the internet so people can watch it as it plays",
    "cn_def": "串流播放；線上直播"
  },
  "clip": {
    "pos": "n.",
    "en_def": "a short part of a film or video",
    "cn_def": "短片；片段"
  },
  "viral": {
    "pos": "adj.",
    "en_def": "spreading very quickly to many people on the internet",
    "cn_def": "（在網路上）爆紅的；迅速傳播的"
  },
  "upload": {
    "pos": "v.",
    "en_def": "to move a file from your computer or phone to the internet",
    "cn_def": "上傳"
  },
  "download": {
    "pos": "v.",
    "en_def": "to copy a file from the internet onto your computer or phone",
    "cn_def": "下載"
  },
  "subtitle": {
    "pos": "n.",
    "en_def": "words at the bottom of a film or video that show what people are saying",
    "cn_def": "字幕"
  },
  "viewer": {
    "pos": "n.",
    "en_def": "a person who watches television or a video",
    "cn_def": "觀眾；收看者"
  },
  "channel": {
    "pos": "n.",
    "en_def": "a television station, or a place on a video website where one person or company posts videos",
    "cn_def": "頻道"
  },
  "commentary": {
    "pos": "n.",
    "en_def": "a spoken description of an event while it is happening",
    "cn_def": "（現場）解說；評論"
  },
  "capture": {
    "pos": "v.",
    "en_def": "to record something in a photo or video",
    "cn_def": "捕捉；拍攝下來"
  },
  "documentary": {
    "pos": "n.",
    "en_def": "a film or TV program that gives facts about a real subject",
    "cn_def": "紀錄片"
  },
  "edit": {
    "pos": "v.",
    "en_def": "to change a video or text by cutting or correcting parts of it",
    "cn_def": "剪輯；編輯"
  },
  "effect": {
    "pos": "n.",
    "en_def": "a special image or sound added to a film or video",
    "cn_def": "效果；特效"
  },
  "screen": {
    "pos": "n.",
    "en_def": "the flat surface on which pictures or videos are shown",
    "cn_def": "螢幕；銀幕"
  },
  "record": {
    "pos": "v.",
    "en_def": "to store sound or pictures so they can be watched or heard later",
    "cn_def": "錄影；錄音；錄製"
  },
  "broadcast": {
    "pos": "v.",
    "en_def": "to send out a program on television or radio",
    "cn_def": "廣播；播送；轉播"
  },
  "animate": {
    "pos": "v.",
    "en_def": "to make drawings or models look as if they are moving in a film",
    "cn_def": "製作動畫；使動起來"
  },
  "tutorial": {
    "pos": "n.",
    "en_def": "a lesson, often a video, that shows how to do something step by step",
    "cn_def": "教學（影片）；指導課程"
  },
  "review": {
    "pos": "n.",
    "en_def": "a report that gives an opinion about a product, film, or service",
    "cn_def": "評論；評價"
  },
  "cinematic": {
    "pos": "adj.",
    "en_def": "looking or feeling like a film made for the cinema",
    "cn_def": "電影般的；電影的"
  },
  "resolution": {
    "pos": "n.",
    "en_def": "how clear and detailed a picture or screen is",
    "cn_def": "解析度"
  },
  "thumbnail": {
    "pos": "n.",
    "en_def": "a small picture that shows what a video or file is about",
    "cn_def": "縮圖"
  },
  "podcast": {
    "pos": "n.",
    "en_def": "a recorded talk show that people can download and listen to",
    "cn_def": "播客；Podcast節目"
  },
  "livestream": {
    "pos": "n.",
    "en_def": "a video broadcast on the internet at the same time as it happens",
    "cn_def": "網路直播"
  },
  "audience": {
    "pos": "n.",
    "en_def": "the group of people who watch or listen to something",
    "cn_def": "觀眾；聽眾；受眾"
  },
  "scene": {
    "pos": "n.",
    "en_def": "one part of a film or play that happens in one place",
    "cn_def": "（電影的）一場戲；場景"
  },
  "script": {
    "pos": "n.",
    "en_def": "the written words that actors say in a film, play, or video",
    "cn_def": "劇本；腳本"
  },
  "platform": {
    "pos": "n.",
    "en_def": "a website or service where people share or watch content",
    "cn_def": "平台"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "able to think of new and interesting ideas",
    "cn_def": "有創意的；有創造力的"
  },
  "engaging": {
    "pos": "adj.",
    "en_def": "interesting enough to keep your attention",
    "cn_def": "吸引人的；引人入勝的"
  },
  "entertain": {
    "pos": "v.",
    "en_def": "to keep people interested and give them enjoyment",
    "cn_def": "娛樂；使開心"
  },
  "influencer": {
    "pos": "n.",
    "en_def": "a person with many online followers who can affect what they buy or think",
    "cn_def": "網紅；有影響力的人"
  },
  "reaction": {
    "pos": "n.",
    "en_def": "what you say, feel, or do because of something that happens",
    "cn_def": "反應"
  },
  "feature": {
    "pos": "v.",
    "en_def": "to include someone or something as an important part of a show, film, or article",
    "cn_def": "以…為特色；特別介紹"
  },
  "presentation": {
    "pos": "n.",
    "en_def": "a talk that gives information to a group, often with slides",
    "cn_def": "簡報；報告"
  },
  "memorable": {
    "pos": "adj.",
    "en_def": "special or good enough to be remembered easily",
    "cn_def": "難忘的；值得紀念的"
  }
};

const EXTRA_GLOSSES = {};
