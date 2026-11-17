// Topic 300 Quiz Data: Praising 讚美
// Source word list: https://www.examword.com/group-topic/praising — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T300 - Praising 讚美",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "compliment",
    "pos": "n.",
    "cn_def": "讚美；恭維",
    "en_def": "a polite remark that praises someone",
    "sentence": "A: Did the new client say anything about the design team's work during the video meeting this afternoon? B: Yes, she paid us a lovely {{BLANK}} on the colorful brochure, and she said it looked much more professional than the one her last agency made for her company.",
    "cn": "A：新客戶在今天下午的視訊會議中有提到設計團隊的作品嗎？ B：有，她對那份色彩豐富的小冊子給了我們很棒的【讚美】，還說它看起來比她上一家廣告公司為她公司做的專業多了。"
  },
  {
    "word": "admire",
    "pos": "v.",
    "cn_def": "欽佩；欣賞",
    "en_def": "to like and respect someone or something very much",
    "sentence": "A: Why do so many young employees ask to join Ms. Chen's team when the yearly transfer list opens? B: They really {{BLANK}} the way she stays calm under pressure, listens to everyone's ideas, and still finishes every project on time without making her staff work late.",
    "cn": "A：為什麼每年調職名單開放時，那麼多年輕員工都要求加入陳小姐的團隊？ B：他們非常【欽佩】她在壓力下保持冷靜、傾聽每個人的想法，而且還能準時完成每個專案、不讓員工加班的方式。"
  },
  {
    "word": "applaud",
    "pos": "v.",
    "cn_def": "鼓掌；稱讚",
    "en_def": "to clap your hands to show you liked something; to praise",
    "sentence": "A: How did the audience react when the sales director finished her speech at the annual conference last night? B: Everyone stood up to {{BLANK}} for almost two minutes, because she had shared real stories about the team's hard year and thanked each department by name.",
    "cn": "A：昨晚年度大會上，業務總監結束演講時，觀眾有什麼反應？ B：大家都站起來【鼓掌】了將近兩分鐘，因為她分享了團隊這艱難一年的真實故事，並且點名感謝了每個部門。"
  },
  {
    "word": "commend",
    "pos": "v.",
    "cn_def": "表揚；稱讚",
    "en_def": "to praise someone formally, often in public",
    "sentence": "A: Is the hotel manager going to say anything to the front desk staff after last weekend's busy wedding event? B: Yes, she plans to {{BLANK}} them at Monday's meeting for handling over three hundred guests politely, even when the elevators stopped working for an hour.",
    "cn": "A：上週末忙碌的婚禮活動之後，飯店經理會對櫃檯人員說些什麼嗎？ B：會，她打算在週一的會議上【表揚】他們禮貌地接待了三百多位賓客，即使電梯停擺了一個小時也一樣。"
  },
  {
    "word": "approve",
    "pos": "v.",
    "cn_def": "批准；贊成",
    "en_def": "to officially agree to a plan or request",
    "sentence": "A: Can we start ordering the new office chairs this week, or do we still have to wait for the finance team? B: We have to wait until the finance director can {{BLANK}} the budget on Thursday, because any purchase over fifty thousand dollars needs her signature first.",
    "cn": "A：我們這週可以開始訂購新的辦公椅了嗎，還是還要等財務團隊？ B：我們得等財務總監在週四【批准】預算，因為任何超過五萬元的採購都需要先有她的簽名。"
  },
  {
    "word": "endorse",
    "pos": "v.",
    "cn_def": "代言；公開支持",
    "en_def": "to say publicly that you support a person or product",
    "sentence": "A: Why did the sports drink company's sales jump so quickly after last month's television advertisement started? B: A famous tennis player agreed to {{BLANK}} the product in the ad, and many young customers trusted her opinion because she actually drinks it during her matches.",
    "cn": "A：為什麼上個月電視廣告開播後，那家運動飲料公司的銷售量增加得那麼快？ B：一位知名網球選手同意在廣告中【代言】這項產品，而許多年輕顧客相信她的意見，因為她真的在比賽中喝這款飲料。"
  },
  {
    "word": "celebrate",
    "pos": "v.",
    "cn_def": "慶祝",
    "en_def": "to do something enjoyable for a special event or success",
    "sentence": "A: What are we doing on Friday afternoon now that the team has finally reached its sales goal for the year? B: The manager has booked a private room at the Italian restaurant across the street so that we can {{BLANK}} together, and the company will pay for dinner.",
    "cn": "A：既然團隊終於達成了今年的業績目標，我們週五下午要做什麼？ B：經理在對街的義大利餐廳訂了一間包廂，讓我們可以一起【慶祝】，公司會支付晚餐費用。"
  },
  {
    "word": "congratulate",
    "pos": "v.",
    "cn_def": "恭喜；祝賀",
    "en_def": "to tell someone you are happy about their success",
    "sentence": "A: Have you heard that Kevin from the accounting department was promoted to senior manager this morning? B: Yes, I'm going to walk over to his office after lunch to {{BLANK}} him personally, because he helped me so much when I first joined the company.",
    "cn": "A：你聽說會計部的凱文今天早上被升為資深經理了嗎？ B：聽說了，我午餐後要親自走去他的辦公室【恭喜】他，因為我剛進公司時他幫了我很多忙。"
  },
  {
    "word": "acclaim",
    "pos": "n.",
    "cn_def": "讚譽；喝采",
    "en_def": "strong public praise",
    "sentence": "A: Why is everyone in the marketing department talking about the small design studio in the building next door? B: Their new advertising campaign for a local coffee chain received wide {{BLANK}} from critics and customers, and now several big companies want to hire them.",
    "cn": "A：為什麼行銷部的每個人都在談論隔壁大樓那家小設計工作室？ B：他們為本地一家咖啡連鎖店做的新廣告活動獲得了評論家和顧客的廣泛【讚譽】，現在好幾家大公司都想聘請他們。"
  },
  {
    "word": "exalt",
    "pos": "v.",
    "cn_def": "讚揚；抬高",
    "en_def": "to praise someone very highly or raise them to a high position",
    "sentence": "A: Why didn't you like the speech the new chairman gave at the shareholders' meeting yesterday? B: He seemed to {{BLANK}} himself as the only hero of the company's success, and he never mentioned the hundreds of workers who actually built the products in our factories.",
    "cn": "A：你為什麼不喜歡新董事長昨天在股東大會上的演講？ B：他似乎把自己【抬高讚頌】為公司成功的唯一英雄，卻從未提到在我們工廠裡實際製造產品的數百名員工。"
  },
  {
    "word": "flatter",
    "pos": "v.",
    "cn_def": "奉承；恭維",
    "en_def": "to praise someone too much, often to get something",
    "sentence": "A: Why does the salesman keep telling every customer how young and smart they look before he shows them the cars? B: He believes that if he can {{BLANK}} people a little at the beginning, they will feel relaxed and be more willing to buy an expensive model.",
    "cn": "A：為什麼那位業務員在介紹車子之前，總是告訴每位顧客他們看起來多年輕又聰明？ B：他相信如果一開始稍微【奉承】一下顧客，他們就會感到放鬆，也更願意買昂貴的車款。"
  },
  {
    "word": "tribute",
    "pos": "n.",
    "cn_def": "致敬；頌詞",
    "en_def": "something said or done to show respect and thanks",
    "sentence": "A: Why is there a large photo of Mr. Lin hanging in the lobby of the main office building this week? B: The company is paying {{BLANK}} to him because he retired after forty years, and he started the factory with only five workers and one small machine.",
    "cn": "A：為什麼這週總部大樓大廳掛著一張林先生的大照片？ B：公司正在向他【致敬】，因為他在服務四十年後退休了，而他當初只有五名員工和一台小機器就創辦了這間工廠。"
  },
  {
    "word": "recognition",
    "pos": "n.",
    "cn_def": "認可；表彰",
    "en_def": "public praise and thanks for someone's work",
    "sentence": "A: Do you think the new employee award program will really make a difference to the staff in our customer service center? B: Yes, many workers feel tired and ignored, so public {{BLANK}} of their hard work at the monthly meeting will make them feel valued and more motivated.",
    "cn": "A：你認為新的員工獎勵計畫真的會對我們客服中心的員工產生影響嗎？ B：會，很多員工覺得疲累又被忽視，所以在月會上公開【認可】他們的辛勤工作，會讓他們覺得受到重視、更有動力。"
  },
  {
    "word": "approval",
    "pos": "n.",
    "cn_def": "核准；贊同",
    "en_def": "official permission; agreement that something is good",
    "sentence": "A: Has the city government decided whether our company can build the new warehouse near the river? B: Not yet, we are still waiting for final {{BLANK}} from the planning office, which needs to check the environmental report before construction can begin next spring.",
    "cn": "A：市政府決定我們公司是否可以在河邊蓋新倉庫了嗎？ B：還沒，我們還在等規劃處的最終【核准】，他們需要先審查環境報告，明年春天才能開始施工。"
  },
  {
    "word": "appreciation",
    "pos": "n.",
    "cn_def": "感謝；欣賞",
    "en_def": "a feeling of thanks for something",
    "sentence": "A: Why did the manager bring a big box of cakes and handwritten cards to the warehouse this morning? B: She wanted to show her {{BLANK}} to the workers who stayed late every night last week to pack the holiday orders before the shipping deadline.",
    "cn": "A：為什麼經理今天早上帶了一大盒蛋糕和手寫卡片到倉庫？ B：她想向上週每晚留下來加班、在出貨截止日前包裝好節日訂單的員工表達【感謝】。"
  },
  {
    "word": "admiration",
    "pos": "n.",
    "cn_def": "欽佩；讚賞",
    "en_def": "a feeling of great respect and liking",
    "sentence": "A: What do the younger engineers think about the senior designer who created our company's most popular product? B: They are full of {{BLANK}} for her, because she taught herself to design machines while working at a small shop, and now she leads a team of fifty people.",
    "cn": "A：較年輕的工程師對設計出我們公司最受歡迎產品的資深設計師有什麼看法？ B：他們對她充滿【欽佩】，因為她在一家小店工作時自學設計機器，現在帶領一個五十人的團隊。"
  },
  {
    "word": "ovation",
    "pos": "n.",
    "cn_def": "熱烈鼓掌",
    "en_def": "a long period of clapping by an audience",
    "sentence": "A: How was the concert that the company sponsored at the city hall last Saturday evening? B: It was wonderful, and when the young pianist played her final piece, the whole audience gave her a standing {{BLANK}} that lasted for several minutes.",
    "cn": "A：公司上週六晚上在市政廳贊助的音樂會怎麼樣？ B：很精彩，當那位年輕鋼琴家彈奏最後一首曲子時，全場觀眾起立為她【熱烈鼓掌】，持續了好幾分鐘。"
  },
  {
    "word": "honor",
    "pos": "v.",
    "cn_def": "向…致敬；表揚",
    "en_def": "to show public respect for someone",
    "sentence": "A: Why is the hotel holding a special dinner in the main ballroom on Friday night? B: The owners want to {{BLANK}} the head chef, who has worked here for twenty-five years and has won several national cooking awards for the hotel's popular seafood restaurant.",
    "cn": "A：為什麼飯店週五晚上要在主宴會廳舉辦特別晚宴？ B：老闆們想要【表揚】主廚，他在這裡工作了二十五年，並為飯店受歡迎的海鮮餐廳贏得了好幾個全國烹飪獎項。"
  },
  {
    "word": "salute",
    "pos": "v.",
    "cn_def": "讚揚；向…致敬",
    "en_def": "to praise and show respect for someone's actions",
    "sentence": "A: Why did the CEO mention the nurses at the local hospital in her speech at the charity event? B: She wanted to {{BLANK}} their courage and hard work during the flu season, when they worked extra hours for weeks to take care of hundreds of patients.",
    "cn": "A：為什麼執行長在慈善活動的演講中提到本地醫院的護理師？ B：她想要【讚揚】她們在流感季節的勇氣和辛勞，那時她們連續好幾週加班照顧數百名病患。"
  },
  {
    "word": "credit",
    "pos": "n.",
    "cn_def": "功勞；讚揚",
    "en_def": "praise for doing something good",
    "sentence": "A: Everyone says the new website is much easier to use, but who actually designed the new booking system? B: Most of the {{BLANK}} should go to Amy in the IT department, because she worked on it for three months and tested it with real customers before it went online.",
    "cn": "A：大家都說新網站好用多了，但新的訂位系統到底是誰設計的？ B：大部分的【功勞】應該歸於資訊部的艾咪，因為她花了三個月製作，並在上線前讓真實顧客測試過。"
  },
  {
    "word": "acknowledge",
    "pos": "v.",
    "cn_def": "承認；致謝",
    "en_def": "to admit that something is true; to publicly thank someone",
    "sentence": "A: Did the director say anything about the problems with the delayed shipment during this morning's meeting? B: Yes, she was willing to {{BLANK}} that the planning team made a mistake, and she also thanked the drivers for working through the weekend to fix the situation.",
    "cn": "A：主管在今天早上的會議中有提到延遲出貨的問題嗎？ B：有，她願意【承認】規劃團隊犯了錯，也感謝司機們整個週末加班來解決這個狀況。"
  },
  {
    "word": "laud",
    "pos": "v.",
    "cn_def": "讚美；稱頌",
    "en_def": "to praise someone highly, often in public",
    "sentence": "A: Why are the local newspapers writing so many articles about the small bakery on Main Street? B: Reporters {{BLANK}} the owner for hiring older workers who could not find jobs elsewhere, and they say her bread is also the best in the whole city.",
    "cn": "A：為什麼本地報紙寫了那麼多關於大街上那家小麵包店的文章？ B：記者們【讚揚】老闆雇用了在別處找不到工作的年長員工，而且他們說她的麵包也是全市最好吃的。"
  },
  {
    "word": "extol",
    "pos": "v.",
    "cn_def": "極力讚揚；頌揚",
    "en_def": "to praise something very highly and with excitement",
    "sentence": "A: Why does the travel agent keep talking about the same small island every time a customer comes in? B: She likes to {{BLANK}} its clean beaches, friendly local people, and cheap seafood restaurants, because she spent her own vacation there last summer and loved every day.",
    "cn": "A：為什麼每次有顧客進來，那位旅行社專員都一直談論同一座小島？ B：她喜歡【大力讚揚】那裡乾淨的海灘、友善的居民和便宜的海鮮餐廳，因為她去年夏天在那裡度假，每天都很喜歡。"
  },
  {
    "word": "glorify",
    "pos": "v.",
    "cn_def": "美化；讚頌",
    "en_def": "to make something seem better or more exciting than it really is",
    "sentence": "A: Why did the parents' group complain about the new video game advertisement on the bus station walls? B: They felt the ad seemed to {{BLANK}} fighting and dangerous driving, and they worried that young children waiting for the bus would think such behavior was cool.",
    "cn": "A：為什麼家長團體抱怨公車站牆上的新電玩廣告？ B：他們覺得那則廣告似乎在【美化】打架和危險駕駛，擔心等公車的小孩會認為這種行為很酷。"
  },
  {
    "word": "bravo",
    "pos": "n.",
    "cn_def": "好極了；喝采聲",
    "en_def": "a word people shout to praise a great performance",
    "sentence": "A: How did the guests at the opening night of the new theater respond to the actors' performance? B: When the curtain came down, people in the front rows shouted \"{{BLANK}}!\" again and again, and the director said it was the warmest welcome the show had ever received.",
    "cn": "A：新劇院首演之夜的觀眾對演員的表演有什麼反應？ B：當幕落下時，前排的觀眾一次又一次地喊著「【好極了】！」，導演說這是這齣戲有史以來得到最熱烈的歡迎。"
  },
  {
    "word": "cheer",
    "pos": "v.",
    "cn_def": "歡呼；加油",
    "en_def": "to shout to show support or praise",
    "sentence": "A: Are you going to the company's basketball game against the bank team on Saturday afternoon? B: Yes, a group of us from the sales office will sit together near the court to {{BLANK}} for our players, and we've even made some colorful signs with their names.",
    "cn": "A：你週六下午要去看公司對銀行隊的籃球比賽嗎？ B：要，我們業務部有一群人會坐在球場附近一起為我們的球員【加油】，我們甚至做了一些寫著他們名字的彩色標語。"
  },
  {
    "word": "recommend",
    "pos": "v.",
    "cn_def": "推薦；建議",
    "en_def": "to say that someone or something is good or suitable",
    "sentence": "A: I'm traveling to Tokyo for a business meeting next month, and I've never been there before, so where should I stay? B: I would {{BLANK}} staying at a hotel near the main train station, because it's convenient for meetings downtown and you can easily take the express train to the airport.",
    "cn": "A：我下個月要去東京開商務會議，我以前從沒去過，我應該住哪裡？ B：我會【推薦】住在主要火車站附近的飯店，因為去市中心開會很方便，而且可以輕鬆搭快車到機場。"
  },
  {
    "word": "boast",
    "pos": "v.",
    "cn_def": "吹噓；自誇",
    "en_def": "to talk too proudly about yourself",
    "sentence": "A: Why don't the other managers enjoy having lunch with Tom from the purchasing department? B: He likes to {{BLANK}} about the big deals he has made and the expensive car he drives, so nobody else gets a chance to talk during the meal.",
    "cn": "A：為什麼其他經理不喜歡跟採購部的湯姆一起吃午餐？ B：他喜歡【吹噓】自己談成的大生意和開的名車，所以吃飯時其他人都沒有機會說話。"
  },
  {
    "word": "respect",
    "pos": "n.",
    "cn_def": "尊敬；尊重",
    "en_def": "a feeling that someone is good and important",
    "sentence": "A: Why do the factory workers always listen so carefully when Mr. Wang explains new safety rules? B: He has earned their {{BLANK}} over many years by working on the production line himself, treating everyone fairly, and never asking anyone to do a job he wouldn't do.",
    "cn": "A：為什麼王先生解釋新的安全規定時，工廠員工總是聽得那麼仔細？ B：多年來他親自在生產線上工作、公平對待每個人，從不要求別人做他自己不願做的工作，因此贏得了他們的【尊敬】。"
  },
  {
    "word": "esteem",
    "pos": "n.",
    "cn_def": "敬重；尊重",
    "en_def": "respect and good opinion of someone",
    "sentence": "A: Why was Professor Lee invited to give the opening speech at this year's international business conference? B: She is held in high {{BLANK}} by companies all over Asia, because her research on online shopping has helped many small businesses increase their sales.",
    "cn": "A：為什麼李教授受邀在今年的國際商業會議上致開幕詞？ B：她深受亞洲各地企業的【敬重】，因為她對網路購物的研究幫助了許多小型企業提升銷售量。"
  },
  {
    "word": "complimentary",
    "pos": "adj.",
    "cn_def": "讚美的；免費贈送的",
    "en_def": "praising; also given free",
    "sentence": "A: The customer survey results came back this morning, so what did the guests say about our new hotel restaurant? B: Most of the comments were very {{BLANK}}, especially about the friendly waiters and the fresh breakfast, though a few guests said the coffee was too weak.",
    "cn": "A：顧客問卷結果今天早上出來了，客人對我們飯店的新餐廳有什麼評價？ B：大部分的評論都非常【讚賞】，特別是關於友善的服務生和新鮮的早餐，不過有幾位客人說咖啡太淡了。"
  },
  {
    "word": "appreciative",
    "pos": "adj.",
    "cn_def": "感激的；欣賞的",
    "en_def": "feeling or showing thanks",
    "sentence": "A: How did the elderly customers react when our staff helped them set up the new mobile banking app at the branch? B: They were very {{BLANK}}, and several of them wrote thank-you notes to the manager saying the young employees had been patient and kind.",
    "cn": "A：當我們的員工在分行幫年長顧客設定新的行動銀行應用程式時，他們有什麼反應？ B：他們非常【感激】，有好幾位還寫了感謝卡給經理，說年輕員工既有耐心又親切。"
  },
  {
    "word": "favorable",
    "pos": "adj.",
    "cn_def": "贊同的；有利的",
    "en_def": "showing approval or support; good for someone",
    "sentence": "A: Do you think the bank will lend us the money to open a second store downtown next year? B: I think so, because the bank manager gave us a {{BLANK}} response after reading our business plan, and she said our sales numbers look very strong.",
    "cn": "A：你覺得銀行明年會借錢給我們在市中心開第二家店嗎？ B：我覺得會，因為銀行經理看完我們的營運計畫後給了【正面的】回應，她說我們的銷售數字看起來非常亮眼。"
  },
  {
    "word": "positive",
    "pos": "adj.",
    "cn_def": "正面的；積極的",
    "en_def": "good, hopeful, or showing agreement",
    "sentence": "A: How did the staff feel about the new flexible working hours after the first month of the trial? B: The feedback was mostly {{BLANK}}, because parents could pick up their children from school, and many workers said they felt less stressed during the morning traffic.",
    "cn": "A：新的彈性工時試行第一個月後，員工覺得怎麼樣？ B：回饋大多是【正面的】，因為家長可以去學校接小孩，許多員工也說早上塞車時覺得壓力比較小。"
  }
];

const MCQS = [
  {
    "q": "The client paid our designer a warm _____ on the new logo. She said it was the best work she had seen this year.",
    "options": [
      "compliment",
      "complaint",
      "discount",
      "deposit"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Many young staff members _____ the CEO for building the company from nothing. They often ask her for career advice at lunch.",
    "options": [
      "blame",
      "admire",
      "ignore",
      "doubt"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "When the speaker finished her talk, the whole audience began to _____ loudly. Some people even stood up from their seats.",
    "options": [
      "ignore",
      "apologize",
      "applaud",
      "rehearse"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The manager will _____ the delivery team for finishing every order on time. Each driver will also receive a small bonus this month.",
    "options": [
      "punish",
      "warn",
      "fire",
      "commend"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The board must _____ the new budget before we can hire more staff. The vote will take place at Thursday's meeting.",
    "options": [
      "delay",
      "approve",
      "cancel",
      "borrow"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The company paid a famous runner to _____ its new line of sports shoes. Sales doubled within two months of the first advertisement.",
    "options": [
      "endorse",
      "repair",
      "return",
      "refund"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The staff will _____ the company's tenth anniversary with a party on Friday evening. Food and drinks will be provided in the lobby.",
    "options": [
      "attend",
      "forget",
      "repeat",
      "celebrate"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "We sent flowers to _____ Ms. Park on her promotion to vice president. She has worked at the firm for twelve years.",
    "options": [
      "remind",
      "invite",
      "congratulate",
      "interview"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The architect's new museum design won international _____ from critics. It has already appeared in several famous design magazines.",
    "options": [
      "acclaim",
      "debt",
      "shortage",
      "delay"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Some salespeople _____ customers by saying how smart and young they look. Our store prefers to give honest advice instead of empty praise.",
    "options": [
      "charge",
      "refund",
      "flatter",
      "deliver"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "At the retirement dinner, the CEO paid _____ to Mr. Lin for forty years of service. Many former workers also shared their memories.",
    "options": [
      "rent",
      "tribute",
      "tax",
      "cash"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The award was given in _____ of her excellent work with overseas clients. She was very surprised when her name was announced.",
    "options": [
      "complaint",
      "shortage",
      "damage",
      "recognition"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The new shopping mall cannot open until it receives final _____ from the city. Inspectors will visit the building next Tuesday.",
    "options": [
      "approval",
      "complaint",
      "warning",
      "advice"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "As a sign of our _____, every volunteer will receive a free lunch and a thank-you card. Their help at the event was extremely valuable.",
    "options": [
      "concern",
      "appreciation",
      "anger",
      "confusion"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The young engineer spoke with deep _____ about her mentor's patience and skill. She hopes to become a great leader like him someday.",
    "options": [
      "anger",
      "boredom",
      "fear",
      "admiration"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The pianist received a standing _____ after her final performance. The audience clapped for nearly five minutes without stopping.",
    "options": [
      "invitation",
      "schedule",
      "ovation",
      "permit"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The hotel will _____ its head chef with a special dinner this Friday. He has worked in the kitchen for twenty-five years.",
    "options": [
      "charge",
      "honor",
      "warn",
      "blame"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Most of the _____ for the successful launch should go to the IT team. They worked many late nights to fix the website.",
    "options": [
      "credit",
      "cost",
      "risk",
      "debt"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The director was willing to _____ that the delay was the company's fault. She also offered every customer a full refund.",
    "options": [
      "forget",
      "require",
      "acknowledge",
      "prevent"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Hundreds of fans came to _____ for the home team at the final match. They waved flags and sang songs during the whole game.",
    "options": [
      "pay",
      "apply",
      "account",
      "cheer"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "I would strongly _____ booking your hotel early during the holiday season. Most rooms in the city center are sold out by December.",
    "options": [
      "recommend",
      "refuse",
      "deny",
      "promise"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Tom likes to _____ about his big sales deals during every team lunch. His coworkers are tired of hearing the same stories.",
    "options": [
      "depend",
      "insist",
      "rely",
      "boast"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Ms. Chen earned the _____ of her staff by always treating everyone fairly. Workers trust her and follow her advice.",
    "options": [
      "salary",
      "respect",
      "budget",
      "cost"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The professor is held in high _____ by business leaders across Asia. Many companies invite her to speak at their conferences.",
    "options": [
      "price",
      "speed",
      "esteem",
      "cost"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Guests at the hotel receive a _____ breakfast every morning. Coffee, fruit, and fresh bread are served in the lobby until ten.",
    "options": [
      "complimentary",
      "careless",
      "nervous",
      "guilty"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The elderly customers were very _____ of the staff's patient help with the new app. Several of them wrote thank-you notes to the manager.",
    "options": [
      "jealous",
      "appreciative",
      "careless",
      "guilty"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The new restaurant received a _____ review in the city newspaper this week. As a result, every table was booked for the weekend.",
    "options": [
      "careless",
      "lazy",
      "favorable",
      "nervous"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Feedback from the first month of flexible hours has been mostly _____. Many workers say they feel less stressed and more productive.",
    "options": [
      "empty",
      "absent",
      "missing",
      "positive"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "The travel guide continued to _____ the island's beaches and friendly people. Her excitement made many tourists want to visit.",
    "options": [
      "cancel",
      "extol",
      "delay",
      "borrow"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Parents worried that the movie seemed to _____ dangerous driving. They asked the theater to stop showing its advertisements to young children.",
    "options": [
      "glorify",
      "measure",
      "insure",
      "repair"
    ],
    "answer": 0,
    "vocabIndex": 23
  }
];

const LOOKUP = {
  "compliment": {
    "pos": "n.",
    "en_def": "a polite remark that praises someone",
    "cn_def": "讚美；恭維"
  },
  "admire": {
    "pos": "v.",
    "en_def": "to like and respect someone or something very much",
    "cn_def": "欽佩；欣賞"
  },
  "applaud": {
    "pos": "v.",
    "en_def": "to clap your hands to show you liked something; to praise",
    "cn_def": "鼓掌；稱讚"
  },
  "commend": {
    "pos": "v.",
    "en_def": "to praise someone formally, often in public",
    "cn_def": "表揚；稱讚"
  },
  "approve": {
    "pos": "v.",
    "en_def": "to officially agree to a plan or request",
    "cn_def": "批准；贊成"
  },
  "endorse": {
    "pos": "v.",
    "en_def": "to say publicly that you support a person or product",
    "cn_def": "代言；公開支持"
  },
  "celebrate": {
    "pos": "v.",
    "en_def": "to do something enjoyable for a special event or success",
    "cn_def": "慶祝"
  },
  "congratulate": {
    "pos": "v.",
    "en_def": "to tell someone you are happy about their success",
    "cn_def": "恭喜；祝賀"
  },
  "acclaim": {
    "pos": "n.",
    "en_def": "strong public praise",
    "cn_def": "讚譽；喝采"
  },
  "exalt": {
    "pos": "v.",
    "en_def": "to praise someone very highly or raise them to a high position",
    "cn_def": "讚揚；抬高"
  },
  "flatter": {
    "pos": "v.",
    "en_def": "to praise someone too much, often to get something",
    "cn_def": "奉承；恭維"
  },
  "tribute": {
    "pos": "n.",
    "en_def": "something said or done to show respect and thanks",
    "cn_def": "致敬；頌詞"
  },
  "recognition": {
    "pos": "n.",
    "en_def": "public praise and thanks for someone's work",
    "cn_def": "認可；表彰"
  },
  "approval": {
    "pos": "n.",
    "en_def": "official permission; agreement that something is good",
    "cn_def": "核准；贊同"
  },
  "appreciation": {
    "pos": "n.",
    "en_def": "a feeling of thanks for something",
    "cn_def": "感謝；欣賞"
  },
  "admiration": {
    "pos": "n.",
    "en_def": "a feeling of great respect and liking",
    "cn_def": "欽佩；讚賞"
  },
  "ovation": {
    "pos": "n.",
    "en_def": "a long period of clapping by an audience",
    "cn_def": "熱烈鼓掌"
  },
  "honor": {
    "pos": "v.",
    "en_def": "to show public respect for someone",
    "cn_def": "向…致敬；表揚"
  },
  "salute": {
    "pos": "v.",
    "en_def": "to praise and show respect for someone's actions",
    "cn_def": "讚揚；向…致敬"
  },
  "credit": {
    "pos": "n.",
    "en_def": "praise for doing something good",
    "cn_def": "功勞；讚揚"
  },
  "acknowledge": {
    "pos": "v.",
    "en_def": "to admit that something is true; to publicly thank someone",
    "cn_def": "承認；致謝"
  },
  "laud": {
    "pos": "v.",
    "en_def": "to praise someone highly, often in public",
    "cn_def": "讚美；稱頌"
  },
  "extol": {
    "pos": "v.",
    "en_def": "to praise something very highly and with excitement",
    "cn_def": "極力讚揚；頌揚"
  },
  "glorify": {
    "pos": "v.",
    "en_def": "to make something seem better or more exciting than it really is",
    "cn_def": "美化；讚頌"
  },
  "bravo": {
    "pos": "n.",
    "en_def": "a word people shout to praise a great performance",
    "cn_def": "好極了；喝采聲"
  },
  "cheer": {
    "pos": "v.",
    "en_def": "to shout to show support or praise",
    "cn_def": "歡呼；加油"
  },
  "recommend": {
    "pos": "v.",
    "en_def": "to say that someone or something is good or suitable",
    "cn_def": "推薦；建議"
  },
  "boast": {
    "pos": "v.",
    "en_def": "to talk too proudly about yourself",
    "cn_def": "吹噓；自誇"
  },
  "respect": {
    "pos": "n.",
    "en_def": "a feeling that someone is good and important",
    "cn_def": "尊敬；尊重"
  },
  "esteem": {
    "pos": "n.",
    "en_def": "respect and good opinion of someone",
    "cn_def": "敬重；尊重"
  },
  "complimentary": {
    "pos": "adj.",
    "en_def": "praising; also given free",
    "cn_def": "讚美的；免費贈送的"
  },
  "appreciative": {
    "pos": "adj.",
    "en_def": "feeling or showing thanks",
    "cn_def": "感激的；欣賞的"
  },
  "favorable": {
    "pos": "adj.",
    "en_def": "showing approval or support; good for someone",
    "cn_def": "贊同的；有利的"
  },
  "positive": {
    "pos": "adj.",
    "en_def": "good, hopeful, or showing agreement",
    "cn_def": "正面的；積極的"
  }
};

const EXTRA_GLOSSES = {};
