// Topic 420 Quiz Data: TV Programs 電視節目
// Source word list: https://www.examword.com/group-topic/tv-programs — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T420 - TV Programs 電視節目",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "television",
    "pos": "n.",
    "cn_def": "電視；電視機",
    "en_def": "a machine with a screen that shows programs and pictures",
    "sentence": "A: Why did the hotel manager ask the technicians to come back this afternoon after they had already fixed the lights in the lobby? B: Several guests complained that the {{BLANK}} in their rooms only showed a black screen, so the technicians need to check the cables before the evening rush begins.",
    "cn": "A：為什麼飯店經理在技術人員已經修好大廳燈光之後，還要他們今天下午再回來？ B：好幾位房客抱怨房間裡的【電視】只顯示黑畫面，所以技術人員必須在晚間人潮湧入前檢查線路。"
  },
  {
    "word": "tv program",
    "pos": "n.phr.",
    "cn_def": "電視節目",
    "en_def": "a show that is shown on television",
    "sentence": "A: Our marketing team wants to reach more young parents next year, so where do you think we should spend most of our advertising budget? B: I suggest paying for short ads during a popular {{BLANK}} about family cooking, because many parents watch it together with their children every Sunday evening.",
    "cn": "A：我們的行銷團隊明年想接觸更多年輕父母，你覺得我們應該把大部分廣告預算花在哪裡？ B：我建議在一個關於家庭料理的熱門【電視節目】中購買短廣告，因為很多父母每週日晚上都會和孩子一起收看。"
  },
  {
    "word": "channel",
    "pos": "n.",
    "cn_def": "頻道；電視台",
    "en_def": "a television station that shows programs",
    "sentence": "A: I tried to watch the company's interview with the local reporter last night, but I couldn't find it anywhere, so which station was it on? B: It was shown on the business {{BLANK}} at nine o'clock, but if you missed it, the full interview is also available on their website.",
    "cn": "A：我昨晚想看公司接受當地記者的訪問，但到處都找不到，那是在哪一台播出的？ B：它是九點在商業【頻道】播出的，如果你錯過了，完整的訪問也可以在他們的網站上看到。"
  },
  {
    "word": "episode",
    "pos": "n.",
    "cn_def": "（影集的）一集",
    "en_def": "one part of a TV series or story",
    "sentence": "A: Why are so many people in the office talking about that hospital drama this morning instead of starting their work on time? B: Last night's {{BLANK}} ended with a big surprise about the main doctor, and everyone wants to share their ideas about what will happen next week.",
    "cn": "A：為什麼今天早上辦公室裡這麼多人都在討論那部醫院劇，而不是準時開始工作？ B：昨晚那一【集】的結尾揭露了關於主角醫生的重大驚喜，大家都想分享對下週劇情發展的看法。"
  },
  {
    "word": "series",
    "pos": "n.",
    "cn_def": "系列；影集",
    "en_def": "a set of programs about the same subject or characters",
    "sentence": "A: Have you decided what kind of video content the training department will produce for new employees this year? B: Yes, we're planning a {{BLANK}} of ten short programs, and each one will explain a different part of the job, such as safety rules, customer service, and the company's history.",
    "cn": "A：你們決定今年訓練部門要為新進員工製作什麼樣的影片內容了嗎？ B：決定了，我們打算製作一【系列】共十集的短節目，每一集會說明工作的不同部分，例如安全規定、客戶服務和公司歷史。"
  },
  {
    "word": "season",
    "pos": "n.",
    "cn_def": "（節目的）一季",
    "en_def": "a group of episodes of a show made for one period",
    "sentence": "A: The producers said the cooking show was a big success, so will they make more episodes after the final one airs in December? B: Yes, they've already signed a contract for a second {{BLANK}}, and filming will start in March with three new chefs joining the team.",
    "cn": "A：製作人說那個烹飪節目非常成功，那麼十二月最後一集播出後，他們會再製作更多集嗎？ B：會的，他們已經簽約製作第二【季】，拍攝將在三月開始，還會有三位新廚師加入團隊。"
  },
  {
    "word": "broadcast",
    "pos": "v.",
    "cn_def": "播出；廣播",
    "en_def": "to send out a program on TV or radio",
    "sentence": "A: When will the station show the opening ceremony of the new city library, since our manager wants all staff to see the speech? B: They plan to {{BLANK}} the whole event at ten tomorrow morning, so we can set up the big screen in the meeting room and watch it together.",
    "cn": "A：電視台什麼時候會播出新市立圖書館的開幕典禮？因為經理希望全體員工都能看到那場演講。 B：他們計畫明天早上十點【播出】整個活動，所以我們可以在會議室架好大螢幕一起觀看。"
  },
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "節目表；時間表",
    "en_def": "a list of times when programs or events happen",
    "sentence": "A: Why did the station move our favorite evening quiz program to such a late time, when most people are already asleep? B: According to the new {{BLANK}}, the prime-time slot is now used for a news report about the election, so several regular programs had to be moved later.",
    "cn": "A：為什麼電視台把我們最喜歡的晚間益智節目移到這麼晚的時段，那時大部分人都已經睡了？ B：根據新的【節目表】，黃金時段現在用來播出選舉新聞報導，所以好幾個固定節目都必須延後。"
  },
  {
    "word": "viewer",
    "pos": "n.",
    "cn_def": "觀眾；收看者",
    "en_def": "a person who watches TV",
    "sentence": "A: How does the station know whether people actually enjoy the new travel program, since it has only been on the air for two weeks? B: Each {{BLANK}} can vote online after the show, and so far more than eighty percent of the people who answered said they liked it very much.",
    "cn": "A：電視台怎麼知道大家是否真的喜歡那個新的旅遊節目？畢竟它才播出兩週。 B：每位【觀眾】都可以在節目結束後上網投票，到目前為止，超過百分之八十回覆的人表示非常喜歡。"
  },
  {
    "word": "audience",
    "pos": "n.",
    "cn_def": "觀眾；聽眾",
    "en_def": "a group of people watching or listening to a show",
    "sentence": "A: Were you nervous when you appeared on that business talk program last Friday to explain our new product? B: A little, because there was a large {{BLANK}} sitting in the studio, but after the first question I relaxed and spoke clearly about the main features and the price.",
    "cn": "A：你上週五上那個商業談話節目介紹我們的新產品時，會緊張嗎？ B：有一點，因為攝影棚裡坐著一大群【觀眾】，但回答完第一個問題後我就放鬆了，清楚地說明了主要功能和價格。"
  },
  {
    "word": "host",
    "pos": "n.",
    "cn_def": "主持人",
    "en_def": "a person who introduces and leads a TV or radio show",
    "sentence": "A: Who will introduce the speakers and keep the program moving at the company's annual awards evening next month? B: We've hired a famous radio {{BLANK}} who is friendly and funny, and she will also interview the winners on stage after each prize is announced.",
    "cn": "A：下個月公司年度頒獎晚會上，誰會負責介紹講者並掌控節目流程？ B：我們請了一位著名的廣播【主持人】，她親切又風趣，也會在每個獎項宣布後在台上訪問得獎者。"
  },
  {
    "word": "guest",
    "pos": "n.",
    "cn_def": "來賓；客人",
    "en_def": "a person invited to appear on a show",
    "sentence": "A: Why is the receptionist preparing coffee and a meeting room so early this morning, even before the managers have arrived? B: Our CEO will be a special {{BLANK}} on a morning business program, and the film crew is coming here first to record a short interview in her office.",
    "cn": "A：為什麼接待人員今天這麼早就在準備咖啡和會議室，甚至比經理們還早到？ B：我們的執行長將擔任一個晨間商業節目的特別【來賓】，攝影團隊會先來這裡，在她的辦公室錄一段簡短訪問。"
  },
  {
    "word": "contestant",
    "pos": "n.",
    "cn_def": "參賽者",
    "en_def": "a person who takes part in a competition or quiz",
    "sentence": "A: Did you hear that someone from our accounting department appeared on that quiz program on Saturday night? B: Yes, Peter was a {{BLANK}} on it, and he answered almost every question correctly, so he won a trip to Japan and a large cash prize.",
    "cn": "A：你聽說我們會計部門有人週六晚上上了那個益智節目嗎？ B：聽說了，彼得是節目的【參賽者】，他幾乎答對每一題，所以贏得了日本旅遊和一大筆獎金。"
  },
  {
    "word": "judge",
    "pos": "n.",
    "cn_def": "評審；裁判",
    "en_def": "a person who decides who wins a competition",
    "sentence": "A: How are the winners chosen on that singing competition program that everyone at the office keeps talking about? B: Each {{BLANK}} gives the singers a score from one to ten, and then the people at home also vote by phone before the final results are announced.",
    "cn": "A：辦公室大家一直在討論的那個歌唱比賽節目，是怎麼選出優勝者的？ B：每位【評審】會給歌手一到十分的分數，接著在家的觀眾也會用電話投票，最後才宣布結果。"
  },
  {
    "word": "news",
    "pos": "n.",
    "cn_def": "新聞；消息",
    "en_def": "reports about recent events",
    "sentence": "A: Why did the sales manager call an emergency meeting right after lunch, when we usually meet only on Mondays? B: This morning's {{BLANK}} reported that our main competitor will lower its prices next week, so she wants to discuss how we should respond before customers start asking questions.",
    "cn": "A：為什麼業務經理午餐後馬上召開緊急會議？我們通常只在週一開會。 B：今天早上的【新聞】報導說我們的主要競爭對手下週會降價，所以她想在客戶開始詢問前討論我們該如何因應。"
  },
  {
    "word": "documentary",
    "pos": "n.",
    "cn_def": "紀錄片",
    "en_def": "a film or program that gives facts about real life",
    "sentence": "A: What are you planning to show the new employees during the first morning of the environmental training course? B: I'll start with a short {{BLANK}} about how factories reduce waste and save energy, because the real examples and interviews in it are easier to understand than a long lecture.",
    "cn": "A：在環保訓練課程的第一天早上，你打算給新進員工看什麼？ B：我會先播放一部關於工廠如何減少廢棄物和節約能源的短篇【紀錄片】，因為裡面的真實案例和訪談比冗長的講課更容易理解。"
  },
  {
    "word": "comedy",
    "pos": "n.",
    "cn_def": "喜劇",
    "en_def": "a funny film, play, or program that makes people laugh",
    "sentence": "A: Our team has been working very hard on the project all month, so do you have any idea for a relaxing activity on Friday evening? B: We could watch a new {{BLANK}} together in the meeting room, because laughing at funny stories is a great way to reduce stress after a busy week.",
    "cn": "A：我們團隊整個月都在努力做這個專案，你對週五晚上的放鬆活動有什麼想法嗎？ B：我們可以一起在會議室看一部新的【喜劇】，因為看有趣的故事大笑是忙碌一週後紓解壓力的好方法。"
  },
  {
    "word": "drama",
    "pos": "n.",
    "cn_def": "戲劇；連續劇",
    "en_def": "a serious story shown on TV or in a theater",
    "sentence": "A: Why does your sister always leave the office so quickly on Tuesday evenings, even when the team goes out for dinner? B: She never misses her favorite {{BLANK}} about a family running a small hotel, because every episode is full of strong emotions, difficult problems, and surprising decisions.",
    "cn": "A：為什麼你姊姊每週二晚上總是那麼快離開辦公室，連團隊出去吃晚餐也不去？ B：她從不錯過她最喜歡的那部關於一家人經營小旅館的【連續劇】，因為每一集都充滿強烈情感、棘手問題和出人意料的決定。"
  },
  {
    "word": "reality show",
    "pos": "n.phr.",
    "cn_def": "實境秀",
    "en_def": "a TV show that films real people in real situations",
    "sentence": "A: Why are there so many cameras and lights in the restaurant downstairs, and why are the cooks wearing microphones today? B: They're filming a {{BLANK}} about real restaurant workers, so the cameras will follow the staff all day to record how they handle busy lunch hours and difficult customers.",
    "cn": "A：為什麼樓下餐廳有這麼多攝影機和燈光，而且廚師今天還戴著麥克風？ B：他們正在拍一個關於真實餐廳員工的【實境秀】，所以攝影機會整天跟拍員工，記錄他們如何應付忙碌的午餐時段和難搞的客人。"
  },
  {
    "word": "game show",
    "pos": "n.phr.",
    "cn_def": "遊戲節目；益智節目",
    "en_def": "a TV show where people play games or answer questions to win prizes",
    "sentence": "A: How did your neighbor manage to win a brand-new car last month, since he told me he never buys lottery tickets? B: He took part in a TV {{BLANK}} where players answer questions and spin a big wheel, and he was lucky enough to reach the final round.",
    "cn": "A：你鄰居上個月是怎麼贏得一輛全新汽車的？他跟我說他從來不買彩券。 B：他參加了一個電視【遊戲節目】，參賽者要回答問題並轉動大轉盤，而他很幸運地進入了最後一輪。"
  },
  {
    "word": "talk show",
    "pos": "n.phr.",
    "cn_def": "談話節目；脫口秀",
    "en_def": "a TV show where a host talks with invited guests",
    "sentence": "A: How did the author of that new business book become so famous in just a few weeks? B: She was invited onto a popular late-night {{BLANK}}, where she chatted with the host about her ideas for managing time, and sales of her book increased quickly the next day.",
    "cn": "A：那本新商業書的作者怎麼能在短短幾週內就這麼出名？ B：她受邀上了一個熱門的深夜【談話節目】，和主持人聊她對時間管理的想法，隔天她的書銷量就迅速增加。"
  },
  {
    "word": "cartoon",
    "pos": "n.",
    "cn_def": "卡通；動畫",
    "en_def": "a film or show made with drawings that move",
    "sentence": "A: What can we offer the children who come with their parents to the bank on Saturday mornings while they wait in line? B: We could put a small screen in the corner that plays a {{BLANK}} with funny animals, so the kids stay happy and the parents can finish their business calmly.",
    "cn": "A：週六早上跟著父母來銀行的孩子在排隊等候時，我們可以提供什麼給他們？ B：我們可以在角落放一台小螢幕，播放有趣動物的【卡通】，這樣孩子會很開心，父母也能從容辦完事情。"
  },
  {
    "word": "advertisement",
    "pos": "n.",
    "cn_def": "廣告",
    "en_def": "a notice or short film that tells people about a product, service, or job",
    "sentence": "A: How did you find out about the job opening at the travel agency, since I didn't see it on their website? B: I saw an {{BLANK}} for it in the local newspaper last Sunday, and it said they needed someone who speaks Japanese and has experience with customer service.",
    "cn": "A：你是怎麼得知旅行社的職缺的？我在他們網站上沒看到。 B：我上週日在當地報紙上看到一則徵才【廣告】，上面說他們需要會說日語且有客服經驗的人。"
  },
  {
    "word": "commercial",
    "pos": "n.",
    "cn_def": "（電視或廣播）廣告",
    "en_def": "a short advertisement on TV or radio",
    "sentence": "A: Why has the number of phone orders increased so much since Thursday night, when last week was so quiet? B: Our new thirty-second {{BLANK}} started running during the evening news, and many viewers called right after seeing the special discount at the end of it.",
    "cn": "A：為什麼從週四晚上開始電話訂單增加了這麼多？上週明明很冷清。 B：我們新的三十秒電視【廣告】開始在晚間新聞時段播出，很多觀眾看到廣告最後的特別折扣後就立刻打電話來。"
  },
  {
    "word": "trailer",
    "pos": "n.",
    "cn_def": "預告片",
    "en_def": "a short video showing parts of a film or show to advertise it",
    "sentence": "A: How can we get more people excited about the company's new training film before it is released next month? B: Let's make a two-minute {{BLANK}} that shows the best scenes, and then share it on our social media pages and in the weekly email to all employees.",
    "cn": "A：在公司新的訓練影片下個月發布之前，我們要怎麼讓更多人感到期待？ B：我們來製作一支兩分鐘的【預告片】，展示最精彩的片段，然後分享在我們的社群媒體頁面和每週寄給全體員工的電子郵件中。"
  },
  {
    "word": "stream",
    "pos": "v.",
    "cn_def": "串流播放",
    "en_def": "to send or watch video over the internet as it plays",
    "sentence": "A: Some of our overseas staff can't travel to the main office for the president's speech, so how can they follow it in real time? B: The IT department will {{BLANK}} the speech online, so everyone can watch it on their laptops or phones and even send questions through the chat window.",
    "cn": "A：我們有些海外員工沒辦法到總公司聽總裁演講，他們要怎麼即時收看？ B：資訊部門會在網路上【串流播放】這場演講，所以大家都能用筆電或手機觀看，甚至可以透過聊天視窗提問。"
  },
  {
    "word": "record",
    "pos": "v.",
    "cn_def": "錄製；錄下",
    "en_def": "to save a program so you can watch it later",
    "sentence": "A: I have an important client dinner on Wednesday evening, but I really don't want to miss the final match of the tennis tournament. B: Don't worry, you can {{BLANK}} it on your TV box before you leave home, and then you can enjoy the whole game when you get back.",
    "cn": "A：我週三晚上有個重要的客戶晚宴，但我真的不想錯過網球錦標賽的決賽。 B：別擔心，你出門前可以用電視盒【錄下】比賽，回家後就能欣賞整場比賽。"
  },
  {
    "word": "watch",
    "pos": "v.",
    "cn_def": "觀看；看",
    "en_def": "to look at something for a period of time",
    "sentence": "A: What do you usually do to relax after a long day of meetings and phone calls at the office? B: I like to {{BLANK}} a funny program on TV with my family after dinner, because it helps me forget about work and enjoy some quiet time at home.",
    "cn": "A：在辦公室開了一整天會、接了一整天電話後，你通常怎麼放鬆？ B：我喜歡晚餐後和家人一起【看】電視上的搞笑節目，因為這能幫助我忘掉工作，在家享受安靜的時光。"
  },
  {
    "word": "popular",
    "pos": "adj.",
    "cn_def": "受歡迎的；熱門的",
    "en_def": "liked by many people",
    "sentence": "A: Why did the bookstore order so many extra copies of that cooking program's recipe book this month? B: The show has become very {{BLANK}} with young office workers, and many customers have asked for the book since the chef appeared on the morning news last week.",
    "cn": "A：為什麼這家書店這個月額外訂了那麼多本那個烹飪節目的食譜書？ B：這個節目在年輕上班族之間變得非常【受歡迎】，自從那位主廚上週上了晨間新聞後，很多顧客都來詢問這本書。"
  },
  {
    "word": "entertaining",
    "pos": "adj.",
    "cn_def": "有趣的；具娛樂性的",
    "en_def": "fun and enjoyable to watch or listen to",
    "sentence": "A: Did the staff enjoy the guest speaker at yesterday's sales conference, or did people get bored during the long afternoon session? B: Everyone loved her, because she was very {{BLANK}} and told funny stories about her years as a TV reporter while also giving us useful tips for selling.",
    "cn": "A：員工喜歡昨天業務會議上的演講嘉賓嗎？還是大家在漫長的下午場次中覺得無聊？ B：大家都很喜歡她，因為她非常【有趣】，講了她擔任電視記者那些年的趣事，同時也給了我們實用的銷售技巧。"
  },
  {
    "word": "live",
    "pos": "adv.",
    "cn_def": "現場地；實況地",
    "en_def": "shown at the same time as it happens",
    "sentence": "A: Is the mayor's speech about the new subway line going to be recorded and shown later, or can people see it as it happens? B: It will be shown {{BLANK}} on channel five at noon, so anyone in the city can watch the speech at the exact moment the mayor is speaking.",
    "cn": "A：市長關於新捷運路線的演講會先錄下來稍後播出，還是大家可以即時收看？ B：它將於中午在第五台【現場直播】，所以全市的任何人都可以在市長演講的同時觀看。"
  },
  {
    "word": "weekly",
    "pos": "adj.",
    "cn_def": "每週的",
    "en_def": "happening once every week",
    "sentence": "A: How often does the company's in-house video program share updates about new projects and staff changes? B: It's a {{BLANK}} program that comes out every Friday afternoon, and each show lasts about fifteen minutes, so employees can watch it during their coffee break.",
    "cn": "A：公司內部的影片節目多久分享一次新專案和人事異動的最新消息？ B：這是一個【每週】的節目，每週五下午推出，每集大約十五分鐘，所以員工可以在喝咖啡休息時間觀看。"
  },
  {
    "word": "daily",
    "pos": "adj.",
    "cn_def": "每日的",
    "en_def": "happening every day",
    "sentence": "A: Where do you get information about traffic and weather before you drive to the office every morning? B: I watch a {{BLANK}} program on the local channel at seven, which gives short reports about road conditions, accidents, and the weather forecast for the whole day.",
    "cn": "A：你每天早上開車上班前，從哪裡得知交通和天氣資訊？ B：我會在七點收看地方頻道的一個【每日】節目，它會簡短報導路況、事故，以及全天的天氣預報。"
  },
  {
    "word": "regularly",
    "pos": "adv.",
    "cn_def": "定期地；經常地",
    "en_def": "often, at the same times each day or week",
    "sentence": "A: How did you learn so much about economics and business news, since you studied art at university? B: I {{BLANK}} watch a business program every evening after dinner, and over the past few years it has taught me a lot about markets, companies, and prices.",
    "cn": "A：你大學念的是藝術，怎麼會對經濟和商業新聞這麼了解？ B：我【定期】在每天晚餐後看一個商業節目，過去幾年它教了我很多關於市場、公司和物價的知識。"
  },
  {
    "word": "tonight",
    "pos": "adv.",
    "cn_def": "今晚",
    "en_def": "on the evening or night of today",
    "sentence": "A: Is it true that our company's new electric scooter will appear on the evening technology program that many young people watch? B: Yes, the program will show it {{BLANK}} at eight o'clock, so please tell your friends and family to turn on their TVs and see our product.",
    "cn": "A：我們公司的新電動機車真的會出現在很多年輕人收看的晚間科技節目上嗎？ B：是的，節目將在【今晚】八點播出，所以請告訴你的親朋好友打開電視觀看我們的產品。"
  }
];

const MCQS = [
  {
    "q": "Each guest room at the hotel includes free Wi-Fi and a large flat-screen _____. Guests can also order movies through the front desk.",
    "options": [
      "television",
      "cartoon",
      "trailer",
      "audience"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The company's new advertisement will appear on the sports _____ during the baseball finals. Marketing expects millions of fans to see it.",
    "options": [
      "episode",
      "channel",
      "judge",
      "season"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Viewers were shocked by the final _____ of the hospital drama last night. The main character suddenly decided to leave the city.",
    "options": [
      "host",
      "viewer",
      "episode",
      "schedule"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The bank produced a _____ of short videos to explain online banking. Each video covers one simple topic, such as paying bills.",
    "options": [
      "guest",
      "judge",
      "host",
      "series"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The cooking competition was so successful that the network ordered a second _____. Filming of the new episodes will begin in March.",
    "options": [
      "viewer",
      "season",
      "contestant",
      "cartoon"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The station plans to _____ the mayor's speech live on channel five at noon. Residents can follow it on their TVs at home.",
    "options": [
      "record",
      "judge",
      "watch",
      "broadcast"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "According to the new program _____, the evening news will start thirty minutes earlier. Two comedy shows have been moved to Saturday.",
    "options": [
      "schedule",
      "audience",
      "episode",
      "guest"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Each _____ at home can vote online for their favorite singer after the show. The results are announced at the start of next week's episode.",
    "options": [
      "host",
      "trailer",
      "viewer",
      "contestant"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The talk show is filmed in front of a live studio _____ every Tuesday. Free tickets are available on the station's website.",
    "options": [
      "audience",
      "viewer",
      "channel",
      "series"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The awards evening will be led by a popular radio _____. She will introduce each speaker and interview the winners on stage.",
    "options": [
      "cartoon",
      "host",
      "trailer",
      "season"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The CEO will appear as a special _____ on tomorrow's morning business program. She will discuss the company's plans for expansion in Asia.",
    "options": [
      "trailer",
      "channel",
      "guest",
      "schedule"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Peter Lee from accounting was a _____ on a popular quiz show last weekend. He answered every question correctly and won a cash prize.",
    "options": [
      "documentary",
      "channel",
      "episode",
      "contestant"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Each _____ on the singing competition gives a score from one to ten. The singer with the highest total moves to the next round.",
    "options": [
      "trailer",
      "judge",
      "cartoon",
      "channel"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Investors were surprised by this morning's _____ about the merger. The company's stock price rose by ten percent before noon.",
    "options": [
      "comedy",
      "cartoon",
      "trailer",
      "news"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The training course begins with a short _____ about how factories reduce waste. It includes real interviews with engineers and plant managers.",
    "options": [
      "documentary",
      "comedy",
      "cartoon",
      "contestant"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The new _____ made the whole audience laugh from beginning to end. Critics say it is the funniest film of the year.",
    "options": [
      "documentary",
      "schedule",
      "comedy",
      "judge"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The award-winning TV _____ follows a family running a small hotel. Each episode is full of strong emotions and difficult decisions.",
    "options": [
      "drama",
      "commercial",
      "schedule",
      "trailer"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The restaurant staff agreed to appear on a _____ that follows their real working day. Cameras will film them from morning until closing.",
    "options": [
      "talk show",
      "reality show",
      "game show",
      "television"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The author was invited onto a late-night _____ to chat with the host about her book. Sales rose sharply the next day.",
    "options": [
      "reality show",
      "game show",
      "talk show",
      "documentary"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The bank plays a funny _____ with talking animals in the waiting area. It keeps young children happy while their parents are served.",
    "options": [
      "documentary",
      "judge",
      "schedule",
      "cartoon"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Phone orders doubled after our new thirty-second TV _____ aired during the evening news. It showed a special discount for first-time customers.",
    "options": [
      "trailer",
      "commercial",
      "episode",
      "host"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The film studio released a two-minute _____ showing the best scenes of the movie. Fans shared it widely before the opening weekend.",
    "options": [
      "audience",
      "judge",
      "season",
      "trailer"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The IT team will _____ the president's speech online for overseas staff. Employees can watch it on their phones in real time.",
    "options": [
      "stream",
      "record",
      "judge",
      "entertain"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "If you cannot stay home for the final match, you can _____ it on your TV box. Then you can watch the whole game later.",
    "options": [
      "broadcast",
      "judge",
      "record",
      "host"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The cooking show has become very _____ with young office workers. Its recipe book is now a best-seller in many bookstores.",
    "options": [
      "popular",
      "daily",
      "weekly",
      "live"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The guest speaker was very _____, and her funny stories kept everyone laughing. Many staff said it was the best session of the conference.",
    "options": [
      "daily",
      "entertaining",
      "weekly",
      "live"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The mayor's speech will be shown _____ on channel five at noon. Viewers can see it at the exact moment it happens.",
    "options": [
      "tonight",
      "regularly",
      "live",
      "slowly"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The company's _____ video update comes out every Friday afternoon. Each fifteen-minute show covers new projects and staff changes.",
    "options": [
      "daily",
      "monthly",
      "yearly",
      "weekly"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "I watch a _____ morning program that reports on traffic and weather. It is shown at seven o'clock every day of the week.",
    "options": [
      "weekly",
      "daily",
      "monthly",
      "yearly"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "Our new scooter will appear on the technology program _____ at eight o'clock. Please remind your friends to turn on their TVs this evening.",
    "options": [
      "yesterday",
      "regularly",
      "slowly",
      "tonight"
    ],
    "answer": 3,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "television": {
    "pos": "n.",
    "en_def": "a machine with a screen that shows programs and pictures",
    "cn_def": "電視；電視機"
  },
  "tv program": {
    "pos": "n.phr.",
    "en_def": "a show that is shown on television",
    "cn_def": "電視節目"
  },
  "channel": {
    "pos": "n.",
    "en_def": "a television station that shows programs",
    "cn_def": "頻道；電視台"
  },
  "episode": {
    "pos": "n.",
    "en_def": "one part of a TV series or story",
    "cn_def": "（影集的）一集"
  },
  "series": {
    "pos": "n.",
    "en_def": "a set of programs about the same subject or characters",
    "cn_def": "系列；影集"
  },
  "season": {
    "pos": "n.",
    "en_def": "a group of episodes of a show made for one period",
    "cn_def": "（節目的）一季"
  },
  "broadcast": {
    "pos": "v.",
    "en_def": "to send out a program on TV or radio",
    "cn_def": "播出；廣播"
  },
  "schedule": {
    "pos": "n.",
    "en_def": "a list of times when programs or events happen",
    "cn_def": "節目表；時間表"
  },
  "viewer": {
    "pos": "n.",
    "en_def": "a person who watches TV",
    "cn_def": "觀眾；收看者"
  },
  "audience": {
    "pos": "n.",
    "en_def": "a group of people watching or listening to a show",
    "cn_def": "觀眾；聽眾"
  },
  "host": {
    "pos": "n.",
    "en_def": "a person who introduces and leads a TV or radio show",
    "cn_def": "主持人"
  },
  "guest": {
    "pos": "n.",
    "en_def": "a person invited to appear on a show",
    "cn_def": "來賓；客人"
  },
  "contestant": {
    "pos": "n.",
    "en_def": "a person who takes part in a competition or quiz",
    "cn_def": "參賽者"
  },
  "judge": {
    "pos": "n.",
    "en_def": "a person who decides who wins a competition",
    "cn_def": "評審；裁判"
  },
  "news": {
    "pos": "n.",
    "en_def": "reports about recent events",
    "cn_def": "新聞；消息"
  },
  "documentary": {
    "pos": "n.",
    "en_def": "a film or program that gives facts about real life",
    "cn_def": "紀錄片"
  },
  "comedy": {
    "pos": "n.",
    "en_def": "a funny film, play, or program that makes people laugh",
    "cn_def": "喜劇"
  },
  "drama": {
    "pos": "n.",
    "en_def": "a serious story shown on TV or in a theater",
    "cn_def": "戲劇；連續劇"
  },
  "reality show": {
    "pos": "n.phr.",
    "en_def": "a TV show that films real people in real situations",
    "cn_def": "實境秀"
  },
  "game show": {
    "pos": "n.phr.",
    "en_def": "a TV show where people play games or answer questions to win prizes",
    "cn_def": "遊戲節目；益智節目"
  },
  "talk show": {
    "pos": "n.phr.",
    "en_def": "a TV show where a host talks with invited guests",
    "cn_def": "談話節目；脫口秀"
  },
  "cartoon": {
    "pos": "n.",
    "en_def": "a film or show made with drawings that move",
    "cn_def": "卡通；動畫"
  },
  "advertisement": {
    "pos": "n.",
    "en_def": "a notice or short film that tells people about a product, service, or job",
    "cn_def": "廣告"
  },
  "commercial": {
    "pos": "n.",
    "en_def": "a short advertisement on TV or radio",
    "cn_def": "（電視或廣播）廣告"
  },
  "trailer": {
    "pos": "n.",
    "en_def": "a short video showing parts of a film or show to advertise it",
    "cn_def": "預告片"
  },
  "stream": {
    "pos": "v.",
    "en_def": "to send or watch video over the internet as it plays",
    "cn_def": "串流播放"
  },
  "record": {
    "pos": "v.",
    "en_def": "to save a program so you can watch it later",
    "cn_def": "錄製；錄下"
  },
  "watch": {
    "pos": "v.",
    "en_def": "to look at something for a period of time",
    "cn_def": "觀看；看"
  },
  "popular": {
    "pos": "adj.",
    "en_def": "liked by many people",
    "cn_def": "受歡迎的；熱門的"
  },
  "entertaining": {
    "pos": "adj.",
    "en_def": "fun and enjoyable to watch or listen to",
    "cn_def": "有趣的；具娛樂性的"
  },
  "live": {
    "pos": "adv.",
    "en_def": "shown at the same time as it happens",
    "cn_def": "現場地；實況地"
  },
  "weekly": {
    "pos": "adj.",
    "en_def": "happening once every week",
    "cn_def": "每週的"
  },
  "daily": {
    "pos": "adj.",
    "en_def": "happening every day",
    "cn_def": "每日的"
  },
  "regularly": {
    "pos": "adv.",
    "en_def": "often, at the same times each day or week",
    "cn_def": "定期地；經常地"
  },
  "tonight": {
    "pos": "adv.",
    "en_def": "on the evening or night of today",
    "cn_def": "今晚"
  }
};

const EXTRA_GLOSSES = {};
