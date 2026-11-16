// Topic 112 Quiz Data: Dream 夢想
// Source word list: https://www.examword.com/group-topic/dream — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T112 - Dream 夢想",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "aspiration",
    "pos": "n.",
    "cn_def": "抱負；志向",
    "en_def": "a strong hope to achieve something important",
    "sentence": "A: During your performance review yesterday, what did you tell the department manager about your plans for the next five years at our company? B: I explained that my main {{BLANK}} is to lead an international sales team, so I asked whether the company could pay for a management course next spring.",
    "cn": "A：昨天你的績效考核時，你跟部門經理說了你未來五年在公司有什麼計畫？ B：我說明我主要的【志向】是帶領一個國際業務團隊，所以我問公司是否能支付明年春天的管理課程費用。"
  },
  {
    "word": "ambition",
    "pos": "n.",
    "cn_def": "雄心；抱負",
    "en_def": "a strong wish to be successful or achieve something",
    "sentence": "A: Why did Daniel leave his comfortable position at the bank after working there for nearly ten years with a good salary and friendly coworkers? B: He has always had a strong {{BLANK}} to open his own coffee shop downtown, so he finally saved enough money and rented a small space near the train station.",
    "cn": "A：Daniel 在銀行工作了將近十年，薪水不錯、同事也友善，為什麼他要離開那份舒適的職位？ B：他一直懷有在市中心開自己咖啡店的強烈【雄心】，所以他終於存夠了錢，在火車站附近租了一個小店面。"
  },
  {
    "word": "vision",
    "pos": "n.",
    "cn_def": "願景；遠見",
    "en_def": "an idea or picture of what the future should be like",
    "sentence": "A: At the opening of the new branch office, what did the CEO say about the company's plans for the future and the role of our employees? B: She shared her {{BLANK}} of becoming the most trusted online bookstore in Asia, and she said every staff member would play an important part in reaching it.",
    "cn": "A：在新分公司開幕時，執行長對公司的未來計畫和員工的角色說了什麼？ B：她分享了她要成為亞洲最受信賴網路書店的【願景】，並說每位員工都會在實現它的過程中扮演重要角色。"
  },
  {
    "word": "goal",
    "pos": "n.",
    "cn_def": "目標",
    "en_def": "something you are trying to achieve",
    "sentence": "A: How many new customers does the marketing department need to find this quarter, and do you think the team can manage it with the current budget? B: Our {{BLANK}} is to sign up five hundred new members by the end of March, and I believe we can do it if the online advertising campaign starts next week.",
    "cn": "A：行銷部門這一季需要找到多少新客戶？你認為團隊用目前的預算做得到嗎？ B：我們的【目標】是在三月底前招募五百位新會員，如果線上廣告活動下週開始，我相信我們做得到。"
  },
  {
    "word": "fantasy",
    "pos": "n.",
    "cn_def": "幻想",
    "en_def": "a pleasant idea that is very unlikely to happen",
    "sentence": "A: Have you heard that Kevin from accounting wants to quit his job, buy a sailboat, and travel around the world with his family next year? B: Yes, but I think it's just a {{BLANK}}, because he still has a large house loan to pay and his children are only starting elementary school this fall.",
    "cn": "A：你有聽說會計部的 Kevin 想辭職、買一艘帆船，明年帶著家人環遊世界嗎？ B：有啊，但我覺得那只是一個【幻想】，因為他還有一大筆房貸要付，而且他的孩子今年秋天才剛要上小學。"
  },
  {
    "word": "imagination",
    "pos": "n.",
    "cn_def": "想像力",
    "en_def": "the ability to create new ideas or pictures in your mind",
    "sentence": "A: The new advertisement for our sports drinks looks really different from the old ones, so who came up with the idea of using cartoon animals? B: Our youngest designer did, and her {{BLANK}} really impressed the clients, who said the colorful characters would attract both children and their parents in supermarkets.",
    "cn": "A：我們運動飲料的新廣告看起來跟舊的很不一樣，是誰想出用卡通動物的點子？ B：是我們最年輕的設計師，她的【想像力】讓客戶非常驚艷，他們說這些色彩繽紛的角色在超市裡會同時吸引孩子和家長。"
  },
  {
    "word": "nightmare",
    "pos": "n.",
    "cn_def": "惡夢；可怕的經歷",
    "en_def": "a very bad dream; a very unpleasant experience",
    "sentence": "A: How was your business trip to Singapore last week, and did you manage to meet all the clients you had planned to see? B: It was a complete {{BLANK}}, because my flight was canceled, my luggage was lost at the airport, and two important meetings had to be moved to video calls instead.",
    "cn": "A：你上週去新加坡出差怎麼樣？你有見到所有原本計畫要見的客戶嗎？ B：簡直是一場【惡夢】，因為我的班機被取消，行李在機場遺失，兩個重要會議也只好改成視訊會議。"
  },
  {
    "word": "lucid",
    "pos": "adj.",
    "cn_def": "清楚易懂的；清醒的",
    "en_def": "clear and easy to understand",
    "sentence": "A: Did the new manager explain the changes to the company's travel policy clearly enough during the meeting this morning, or were people still confused? B: Her explanation was very {{BLANK}}, so everyone understood the new rules for booking hotels and flights, and nobody had to ask any questions afterwards.",
    "cn": "A：新經理今天早上開會時，有把公司差旅政策的改變解釋得夠清楚嗎？還是大家還是很困惑？ B：她的說明非常【清楚易懂】，所以大家都了解訂飯店和機票的新規定，事後沒有人需要再發問。"
  },
  {
    "word": "vivid",
    "pos": "adj.",
    "cn_def": "鮮明的；生動的",
    "en_def": "very clear and bright in your mind",
    "sentence": "A: Do you still remember your first day working at the hotel reception desk when that famous movie star suddenly checked in without any notice? B: Yes, I have a very {{BLANK}} memory of that day, because dozens of reporters rushed into the lobby and the manager asked me to call the security team immediately.",
    "cn": "A：你還記得你在飯店櫃檯上班的第一天，那位知名電影明星突然在沒有通知的情況下入住嗎？ B：記得，我對那天有非常【鮮明】的記憶，因為幾十位記者衝進大廳，經理要我立刻打電話給保全團隊。"
  },
  {
    "word": "surreal",
    "pos": "adj.",
    "cn_def": "超現實的；如夢似幻的",
    "en_def": "very strange, like something in a dream",
    "sentence": "A: How did it feel to stand on the stage and receive the Employee of the Year award in front of the whole company at the annual dinner? B: It was a little {{BLANK}}, because only two years ago I was a part-time cashier, and now the president was shaking my hand while hundreds of people clapped.",
    "cn": "A：在年度晚宴上當著全公司的面站上舞台領取年度最佳員工獎，感覺如何？ B：感覺有點【如夢似幻】，因為兩年前我還是兼職收銀員，而現在總裁在數百人鼓掌下跟我握手。"
  },
  {
    "word": "unreal",
    "pos": "adj.",
    "cn_def": "不真實的；難以置信的",
    "en_def": "so strange or extreme that it is hard to believe",
    "sentence": "A: Have you seen the price the developer is asking for the small office space next to the train station, and is it worth checking out? B: The rent is completely {{BLANK}}, almost three times what we pay now, so I suggest we keep looking for a cheaper place in the suburbs instead.",
    "cn": "A：你有看到開發商對火車站旁那間小辦公室開的價格嗎？值得去看看嗎？ B：那租金完全【令人難以置信】，幾乎是我們現在付的三倍，所以我建議我們改去郊區找便宜一點的地方。"
  },
  {
    "word": "doze",
    "pos": "v.",
    "cn_def": "打瞌睡；打盹",
    "en_def": "to sleep lightly for a short time",
    "sentence": "A: Why did the director look so annoyed at the end of the training session that was held in the conference room after lunch today? B: Two new employees started to {{BLANK}} during the boring safety video, so she stopped the presentation and asked everyone to stand up and stretch for a few minutes.",
    "cn": "A：為什麼今天午餐後在會議室舉行的訓練課程結束時，主任看起來那麼不高興？ B：有兩位新員工在無聊的安全影片播放時開始【打瞌睡】，所以她暫停了簡報，請大家站起來伸展幾分鐘。"
  },
  {
    "word": "drift",
    "pos": "v.",
    "cn_def": "飄移；（思緒）飄走",
    "en_def": "to move slowly without a clear direction",
    "sentence": "A: Why do you always turn off your phone notifications when you are writing the monthly sales report in the afternoon? B: If I see too many messages, my thoughts start to {{BLANK}} away from the numbers, and then I make careless mistakes that my supervisor has to correct before the report goes to headquarters.",
    "cn": "A：為什麼你下午寫每月銷售報告時總是關掉手機通知？ B：如果我看到太多訊息，我的思緒就會開始從數字上【飄走】，然後我就會犯一些粗心的錯，主管必須在報告送到總部之前幫我修正。"
  },
  {
    "word": "envision",
    "pos": "v.",
    "cn_def": "設想；展望",
    "en_def": "to imagine something that may happen in the future",
    "sentence": "A: When you started this small online clothing business in your apartment five years ago, did you expect it to grow so quickly? B: Not at all, I didn't {{BLANK}} having three stores and forty employees, because at first I only wanted to sell a few handmade shirts to my friends and neighbors.",
    "cn": "A：五年前你在公寓裡開始經營這個小小的網路服飾生意時，你有預料到它會成長得這麼快嗎？ B：完全沒有，我從沒【設想過】會擁有三家店和四十名員工，因為一開始我只想賣幾件手工襯衫給朋友和鄰居。"
  },
  {
    "word": "visualize",
    "pos": "v.",
    "cn_def": "想像；使形象化",
    "en_def": "to form a picture of something in your mind",
    "sentence": "A: Before you give an important presentation to a big client, what do you do to stay calm and feel confident in the meeting room? B: I close my eyes and try to {{BLANK}} the whole meeting from beginning to end, including the client's questions, so I feel prepared and less nervous when it actually happens.",
    "cn": "A：在向大客戶做重要簡報之前，你會做什麼來保持冷靜並在會議室裡感到有自信？ B：我會閉上眼睛，試著在腦中【想像】整場會議從頭到尾的情況，包括客戶的提問，這樣真正上場時我會覺得準備充分、比較不緊張。"
  },
  {
    "word": "long",
    "pos": "v.",
    "cn_def": "渴望",
    "en_def": "to want something very much",
    "sentence": "A: Your team has been working overtime every weekend since the new factory opened, so how are people feeling about the schedule now? B: Everyone is tired and many of them {{BLANK}} for a proper holiday, so the manager promised to give each worker three extra days off once the big order is finished.",
    "cn": "A：自從新工廠開幕後，你的團隊每個週末都在加班，大家現在對這個排班感覺如何？ B：每個人都很累，很多人都【渴望】好好放個假，所以經理承諾等這筆大訂單完成後，每位員工都多放三天假。"
  },
  {
    "word": "yearn",
    "pos": "v.",
    "cn_def": "渴望；嚮往",
    "en_def": "to want something very much, often something hard to get",
    "sentence": "A: Why did Maria apply for the job in the Paris office even though the salary there is lower than what she earns here in Taipei? B: She has always seemed to {{BLANK}} for a life abroad, and she believes that working in Europe will help her learn French and meet designers from many different countries.",
    "cn": "A：為什麼 Maria 要申請巴黎辦公室的職位，即使那裡的薪水比她在台北賺的還低？ B：她似乎一直【嚮往】在國外生活，而且她相信在歐洲工作能幫助她學法文，並認識來自許多不同國家的設計師。"
  },
  {
    "word": "destiny",
    "pos": "n.",
    "cn_def": "命運；天命",
    "en_def": "what will happen to someone in the future",
    "sentence": "A: After failing the bank's entrance exam twice, why did Jason decide to become a chef instead of trying a third time? B: He said cooking was his {{BLANK}}, because his grandmother taught him family recipes when he was young, and now his small restaurant is fully booked every weekend.",
    "cn": "A：Jason 兩次沒通過銀行的入職考試後，為什麼決定改當廚師而不是再試第三次？ B：他說烹飪是他的【天命】，因為他小時候奶奶教了他家傳食譜，而現在他的小餐廳每個週末都客滿。"
  },
  {
    "word": "target",
    "pos": "n.",
    "cn_def": "目標；指標",
    "en_def": "a result or level you try to reach",
    "sentence": "A: The regional manager looks very pleased today, so did our branch sell enough insurance policies this month to receive the bonus? B: Yes, we reached our sales {{BLANK}} three days early, so every member of the team will get an extra payment and a free dinner at the hotel restaurant on Friday.",
    "cn": "A：區域經理今天看起來非常高興，我們分行這個月賣出的保單夠多，可以拿到獎金嗎？ B：是的，我們提前三天達成了銷售【目標】，所以每位團隊成員都會拿到額外獎金，並在週五享用飯店餐廳的免費晚餐。"
  },
  {
    "word": "illusion",
    "pos": "n.",
    "cn_def": "錯覺；假象",
    "en_def": "something that seems true or real but is not",
    "sentence": "A: Our online store has a lot of visitors every day, so why are the sales numbers still so low compared with last year? B: The high number of visitors creates an {{BLANK}} of success, but most people leave the website without buying anything because our shipping fees are much higher than our competitors'.",
    "cn": "A：我們的網路商店每天有很多訪客，為什麼銷售數字跟去年相比還是那麼低？ B：大量的訪客製造了一種成功的【假象】，但大多數人沒買任何東西就離開網站，因為我們的運費比競爭對手高得多。"
  },
  {
    "word": "symbol",
    "pos": "n.",
    "cn_def": "象徵；符號",
    "en_def": "a picture or thing that represents an idea",
    "sentence": "A: Why did the design team choose a green tree for the new company logo instead of keeping the old blue letters we used for years? B: The tree is a {{BLANK}} of growth and protecting nature, and the marketing director wants customers to know that we now use recycled materials in all our products.",
    "cn": "A：為什麼設計團隊為新的公司標誌選了一棵綠色的樹，而不是保留我們用了好幾年的舊藍色字母？ B：這棵樹是成長與保護自然的【象徵】，行銷總監希望顧客知道我們現在所有產品都使用回收材料。"
  },
  {
    "word": "interpret",
    "pos": "v.",
    "cn_def": "解讀；詮釋",
    "en_def": "to explain or understand the meaning of something",
    "sentence": "A: The survey results show that many customers visited our shop only once last year, so what do you think these numbers really mean? B: It's hard to {{BLANK}} the data without more information, so I suggest we call some of those customers and ask them directly why they didn't come back.",
    "cn": "A：調查結果顯示去年很多顧客只來過我們店一次，你認為這些數字真正代表什麼？ B：沒有更多資訊很難【解讀】這些數據，所以我建議我們打電話給其中一些顧客，直接問他們為什麼沒有再回來。"
  },
  {
    "word": "reflective",
    "pos": "adj.",
    "cn_def": "沉思的；反省的",
    "en_def": "thinking quietly and carefully",
    "sentence": "A: You seemed very quiet after the team meeting where the project results were announced, so is everything all right with you? B: I'm fine, I was just in a {{BLANK}} mood, thinking about what we did wrong and how we can plan the next project better so we don't miss the deadline again.",
    "cn": "A：在宣布專案結果的團隊會議之後，你似乎很安靜，你還好嗎？ B：我沒事，我只是處於一種【沉思】的心情，在想我們哪裡做錯了，以及下一個專案要如何規劃得更好，才不會再錯過截止日期。"
  },
  {
    "word": "restful",
    "pos": "adj.",
    "cn_def": "寧靜的；令人放鬆的",
    "en_def": "making you feel calm and relaxed",
    "sentence": "A: Where are you planning to stay during the company retreat in the mountains next month, and is the hotel close to the meeting center? B: We booked a small guesthouse by the lake, which is quiet and {{BLANK}}, and it's only a ten-minute walk from the center where the workshops will be held every morning.",
    "cn": "A：下個月在山上的公司員工旅遊，你打算住哪裡？那間飯店離會議中心近嗎？ B：我們訂了湖邊的一間小民宿，那裡安靜又【令人放鬆】，而且走路到每天早上舉辦工作坊的中心只要十分鐘。"
  },
  {
    "word": "inspire",
    "pos": "v.",
    "cn_def": "激勵；啟發",
    "en_def": "to make someone want to do something good",
    "sentence": "A: Why did the company invite a famous mountain climber to speak at the annual sales conference instead of an expert in marketing? B: The president hoped his amazing story would {{BLANK}} the sales staff to work harder and never give up, even when customers say no to them many times.",
    "cn": "A：為什麼公司在年度業務會議上邀請一位知名登山家演講，而不是行銷專家？ B：總裁希望他精彩的故事能【激勵】業務人員更努力工作、永不放棄，即使客戶拒絕他們很多次。"
  },
  {
    "word": "motivating",
    "pos": "adj.",
    "cn_def": "有激勵作用的",
    "en_def": "making you want to work hard or do something",
    "sentence": "A: Do you think offering a free trip to Japan to the top salesperson of the year is a good idea for our small company? B: Yes, I think a prize like that is very {{BLANK}}, because last year, when we only gave out gift cards, most of the sales staff didn't seem excited at all.",
    "cn": "A：你覺得為我們這家小公司的年度最佳業務員提供免費日本旅遊是個好主意嗎？ B：是的，我覺得那樣的獎品非常【有激勵作用】，因為去年我們只發禮券時，大部分業務人員似乎一點都不興奮。"
  }
];

const MCQS = [
  {
    "q": "Many young engineers join our firm with the _____ of working overseas. The international training program helps them reach that dream.",
    "options": [
      "aspiration",
      "nightmare",
      "illusion",
      "symbol"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The new intern has a clear _____ to become a manager within five years. She stays late every day to learn new skills.",
    "options": [
      "illusion",
      "ambition",
      "symbol",
      "destiny"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The founder described her _____ for the company's future at the annual meeting. She hopes to open stores in twenty countries by 2035.",
    "options": [
      "nightmare",
      "illusion",
      "vision",
      "symbol"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Our department's main _____ this year is to reduce paper use by half. Every employee has been asked to print only when necessary.",
    "options": [
      "fantasy",
      "illusion",
      "nightmare",
      "goal"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Retiring at the age of thirty-five is only a _____ for most office workers. In reality, they need to save money for many decades.",
    "options": [
      "symbol",
      "fantasy",
      "imagination",
      "nightmare"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The toy company is looking for designers with a lot of _____. Applicants must show at least three original toy ideas.",
    "options": [
      "destiny",
      "illusion",
      "symbol",
      "imagination"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Moving the entire warehouse during the holiday season was a _____ for the logistics team. Many orders were delayed and several boxes were lost.",
    "options": [
      "nightmare",
      "vision",
      "symbol",
      "aspiration"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The consultant gave a _____ explanation of the new tax rules. Even employees without any accounting background understood them easily.",
    "options": [
      "restful",
      "surreal",
      "lucid",
      "unreal"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The travel brochure uses _____ colors and large photos of the beaches. Many customers say the pictures made them want to book a trip.",
    "options": [
      "lucid",
      "reflective",
      "motivating",
      "vivid"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Walking through the empty airport at three in the morning felt completely _____. The lights were on, but there was no one in sight.",
    "options": [
      "surreal",
      "lucid",
      "motivating",
      "vivid"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The asking price of ten million dollars for a tiny apartment seems _____. Most buyers in this area could never afford it.",
    "options": [
      "lucid",
      "unreal",
      "restful",
      "reflective"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Passengers on the night bus often _____ off during the trip. The driver plays soft music to help them rest.",
    "options": [
      "interpret",
      "envision",
      "doze",
      "inspire"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "During the dull meeting, my attention began to _____ away from the speaker. I had to take notes to stay focused.",
    "options": [
      "drift",
      "inspire",
      "interpret",
      "envision"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The architect could _____ a modern library where the old factory now stands. City officials approved her design last week.",
    "options": [
      "doze",
      "drift",
      "envision",
      "interpret"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Use this software to _____ the new office layout in three dimensions. You can move desks and walls with a few clicks.",
    "options": [
      "doze",
      "yearn",
      "inspire",
      "visualize"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "After six months of working on the night shift, Tom began to _____ for a normal schedule. He finally asked his manager for a day position.",
    "options": [
      "doze",
      "long",
      "interpret",
      "envision"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Many city workers _____ for a quiet life in the countryside. Some of them are now choosing to work remotely from small towns.",
    "options": [
      "doze",
      "interpret",
      "yearn",
      "visualize"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The old coach told the young player that his _____ was in his own hands. Hard work, not luck, would decide his future.",
    "options": [
      "symbol",
      "destiny",
      "illusion",
      "nightmare"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The sales team missed its monthly _____ by only twenty units. The manager believes they will reach it easily next month.",
    "options": [
      "target",
      "symbol",
      "fantasy",
      "imagination"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Large mirrors on the walls create the _____ of a much bigger dining room. Many small restaurants use this simple design trick.",
    "options": [
      "ambition",
      "destiny",
      "aspiration",
      "illusion"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The company's red logo has become a _____ of quality and trust. Customers recognize it immediately in stores around the world.",
    "options": [
      "nightmare",
      "symbol",
      "ambition",
      "fantasy"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The new analyst helps managers _____ complicated sales data. She turns the numbers into simple charts that everyone can understand.",
    "options": [
      "interpret",
      "doze",
      "yearn",
      "drift"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "After the project ended, the team held a quiet, _____ meeting to discuss what went wrong. Everyone shared lessons for the future.",
    "options": [
      "vivid",
      "surreal",
      "reflective",
      "unreal"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Guests describe the mountain hotel as quiet and _____. There are no televisions in the rooms, and the garden is full of birds.",
    "options": [
      "lucid",
      "motivating",
      "vivid",
      "restful"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The CEO's speech was meant to _____ employees to share new ideas. Afterward, the suggestion box was full of creative proposals.",
    "options": [
      "inspire",
      "doze",
      "drift",
      "interpret"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Many staff members find the new bonus system very _____. Sales have increased by twenty percent since it started in January.",
    "options": [
      "lucid",
      "surreal",
      "restful",
      "motivating"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Reducing customer complaints is the top _____ of the new service manager. She plans to train every staff member by June.",
    "options": [
      "illusion",
      "goal",
      "nightmare",
      "symbol"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The mayor shared his _____ of a greener city with more parks and bike lanes. Residents can comment on the plan online.",
    "options": [
      "nightmare",
      "destiny",
      "vision",
      "illusion"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Stories of successful local businesses can _____ young people to start their own companies. The library holds a talk about this every month.",
    "options": [
      "doze",
      "drift",
      "interpret",
      "inspire"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The tour guide gave a _____ description of life in the old castle. Visitors felt as if they had traveled back in time.",
    "options": [
      "restful",
      "vivid",
      "reflective",
      "unreal"
    ],
    "answer": 1,
    "vocabIndex": 8
  }
];

const LOOKUP = {
  "aspiration": {
    "pos": "n.",
    "en_def": "a strong hope to achieve something important",
    "cn_def": "抱負；志向"
  },
  "ambition": {
    "pos": "n.",
    "en_def": "a strong wish to be successful or achieve something",
    "cn_def": "雄心；抱負"
  },
  "vision": {
    "pos": "n.",
    "en_def": "an idea or picture of what the future should be like",
    "cn_def": "願景；遠見"
  },
  "goal": {
    "pos": "n.",
    "en_def": "something you are trying to achieve",
    "cn_def": "目標"
  },
  "fantasy": {
    "pos": "n.",
    "en_def": "a pleasant idea that is very unlikely to happen",
    "cn_def": "幻想"
  },
  "imagination": {
    "pos": "n.",
    "en_def": "the ability to create new ideas or pictures in your mind",
    "cn_def": "想像力"
  },
  "nightmare": {
    "pos": "n.",
    "en_def": "a very bad dream; a very unpleasant experience",
    "cn_def": "惡夢；可怕的經歷"
  },
  "lucid": {
    "pos": "adj.",
    "en_def": "clear and easy to understand",
    "cn_def": "清楚易懂的；清醒的"
  },
  "vivid": {
    "pos": "adj.",
    "en_def": "very clear and bright in your mind",
    "cn_def": "鮮明的；生動的"
  },
  "surreal": {
    "pos": "adj.",
    "en_def": "very strange, like something in a dream",
    "cn_def": "超現實的；如夢似幻的"
  },
  "unreal": {
    "pos": "adj.",
    "en_def": "so strange or extreme that it is hard to believe",
    "cn_def": "不真實的；難以置信的"
  },
  "doze": {
    "pos": "v.",
    "en_def": "to sleep lightly for a short time",
    "cn_def": "打瞌睡；打盹"
  },
  "drift": {
    "pos": "v.",
    "en_def": "to move slowly without a clear direction",
    "cn_def": "飄移；（思緒）飄走"
  },
  "envision": {
    "pos": "v.",
    "en_def": "to imagine something that may happen in the future",
    "cn_def": "設想；展望"
  },
  "visualize": {
    "pos": "v.",
    "en_def": "to form a picture of something in your mind",
    "cn_def": "想像；使形象化"
  },
  "long": {
    "pos": "v.",
    "en_def": "to want something very much",
    "cn_def": "渴望"
  },
  "yearn": {
    "pos": "v.",
    "en_def": "to want something very much, often something hard to get",
    "cn_def": "渴望；嚮往"
  },
  "destiny": {
    "pos": "n.",
    "en_def": "what will happen to someone in the future",
    "cn_def": "命運；天命"
  },
  "target": {
    "pos": "n.",
    "en_def": "a result or level you try to reach",
    "cn_def": "目標；指標"
  },
  "illusion": {
    "pos": "n.",
    "en_def": "something that seems true or real but is not",
    "cn_def": "錯覺；假象"
  },
  "symbol": {
    "pos": "n.",
    "en_def": "a picture or thing that represents an idea",
    "cn_def": "象徵；符號"
  },
  "interpret": {
    "pos": "v.",
    "en_def": "to explain or understand the meaning of something",
    "cn_def": "解讀；詮釋"
  },
  "reflective": {
    "pos": "adj.",
    "en_def": "thinking quietly and carefully",
    "cn_def": "沉思的；反省的"
  },
  "restful": {
    "pos": "adj.",
    "en_def": "making you feel calm and relaxed",
    "cn_def": "寧靜的；令人放鬆的"
  },
  "inspire": {
    "pos": "v.",
    "en_def": "to make someone want to do something good",
    "cn_def": "激勵；啟發"
  },
  "motivating": {
    "pos": "adj.",
    "en_def": "making you want to work hard or do something",
    "cn_def": "有激勵作用的"
  }
};

const EXTRA_GLOSSES = {};
