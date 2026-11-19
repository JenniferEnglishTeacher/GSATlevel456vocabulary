// Topic 442 Quiz Data: Weekend 週末
// Source word list: https://www.examword.com/group-topic/weekend — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T442 - Weekend 週末",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "relaxing",
    "pos": "adj.",
    "cn_def": "令人放鬆的",
    "en_def": "making you feel calm and comfortable",
    "sentence": "A: You looked so tired on Friday after the long sales meeting, so how did you spend your two days away from the office? B: I had a really {{BLANK}} time at a small hot spring hotel in the mountains, where I read books, slept late, and finally stopped thinking about the monthly report.",
    "cn": "A：星期五漫長的業務會議後你看起來好累，那你離開辦公室的這兩天是怎麼過的？ B：我在山上一家小溫泉旅館度過了非常【令人放鬆的】時光，在那裡看書、睡到很晚，終於不再想著月報的事了。"
  },
  {
    "word": "rejuvenate",
    "pos": "v.",
    "cn_def": "使恢復活力；使年輕",
    "en_def": "to make someone feel young, fresh, and full of energy again",
    "sentence": "A: Our team has been working overtime for three weeks on the new product launch, so what do you think the company should do for us now? B: The manager is planning a weekend trip to a quiet island resort, because she believes a few days by the sea will {{BLANK}} everyone before the next project starts.",
    "cn": "A：我們團隊為了新產品發表已經連續加班三週了，你覺得公司現在應該為我們做些什麼？ B：經理正在規劃一趟到安靜小島度假村的週末旅行，因為她相信在海邊待幾天能讓大家在下個專案開始前【恢復活力】。"
  },
  {
    "word": "struggle",
    "pos": "v.",
    "cn_def": "努力；掙扎；吃力地做",
    "en_def": "to try very hard to do something that is difficult",
    "sentence": "A: Why do you always look so sleepy when you arrive at the office on Monday mornings, even though you had two full days off? B: I usually stay up very late watching movies on Saturday and Sunday nights, so I {{BLANK}} to wake up early when my alarm rings at six o'clock.",
    "cn": "A：為什麼你星期一早上到辦公室時總是看起來很睏，明明你才放了整整兩天假？ B：我星期六和星期日晚上通常會熬夜看電影到很晚，所以早上六點鬧鐘響時，我很【吃力地】才能早起。"
  },
  {
    "word": "occupied",
    "pos": "adj.",
    "cn_def": "忙碌的；被佔用的",
    "en_def": "busy doing something; not free",
    "sentence": "A: I tried to call you several times on Saturday afternoon about the client's urgent order, but you never picked up the phone, so were you away on a trip? B: Sorry, I was completely {{BLANK}} with helping my parents move into their new apartment, and I left my phone in the car all day.",
    "cn": "A：星期六下午我為了客戶的緊急訂單打了好幾次電話給你，但你都沒接，你是出去旅行了嗎？ B：抱歉，我那時完全【忙著】幫我爸媽搬進新公寓，而且一整天都把手機忘在車上。"
  },
  {
    "word": "challenge",
    "pos": "n.",
    "cn_def": "挑戰；難題",
    "en_def": "something difficult that tests your ability or strength",
    "sentence": "A: Are you joining the company hiking club this Saturday, or are you planning to rest at home after such a busy week of meetings? B: I'm definitely going, because climbing the highest mountain near the city in only five hours will be a real {{BLANK}} for someone like me who sits at a desk all week.",
    "cn": "A：你這週六要參加公司的登山社嗎？還是忙了一整週的會議後打算在家休息？ B：我一定會去，因為對我這種整週都坐在辦公桌前的人來說，只花五小時爬上城市附近最高的山會是一大【挑戰】。"
  },
  {
    "word": "recreation",
    "pos": "n.",
    "cn_def": "娛樂；休閒活動",
    "en_def": "activities that people do for fun when they are not working",
    "sentence": "A: The new office building looks great, but why did the company decide to build a gym and a games room on the top floor? B: The directors believe that staff who have space for {{BLANK}} during lunch breaks and on weekends will feel happier, stay healthier, and work more efficiently.",
    "cn": "A：新辦公大樓看起來很棒，但公司為什麼決定在頂樓蓋健身房和遊戲室？ B：董事們相信，員工如果在午休和週末有【休閒活動】的空間，會更快樂、更健康，工作也會更有效率。"
  },
  {
    "word": "interact",
    "pos": "v.",
    "cn_def": "互動；交流",
    "en_def": "to talk and spend time with other people",
    "sentence": "A: Why did the human resources department organize a weekend barbecue for all the new employees instead of just another training session in the office? B: They wanted the new staff to {{BLANK}} with senior colleagues in a friendly, relaxed setting, so that they would feel more comfortable asking questions at work.",
    "cn": "A：為什麼人資部門為所有新進員工舉辦週末烤肉，而不是在辦公室再開一次訓練課程？ B：他們希望新員工能在友善輕鬆的環境中和資深同事【互動】，這樣他們在工作上提問時會比較自在。"
  },
  {
    "word": "eagerly",
    "pos": "adv.",
    "cn_def": "熱切地；渴望地",
    "en_def": "in a way that shows you really want to do or have something",
    "sentence": "A: The marketing team seems very cheerful this afternoon, even though there is still a lot of work to finish before the end of the day, so what's going on? B: They are {{BLANK}} waiting for five o'clock, because the company has given everyone a long weekend and many of them are flying to Japan tonight.",
    "cn": "A：雖然今天下班前還有很多工作要完成，但行銷團隊今天下午看起來心情很好，發生了什麼事？ B：他們正【熱切地】等待五點的到來，因為公司給大家放了連假，其中很多人今晚就要飛去日本。"
  },
  {
    "word": "contingency",
    "pos": "n.",
    "cn_def": "應急措施；意外情況",
    "en_def": "a plan for something that might happen in the future",
    "sentence": "A: The weather report says it might rain heavily during our outdoor company picnic on Sunday, so should we cancel the whole event now? B: No, I've already made a {{BLANK}} plan with the hotel next to the park, so we can move all the food and games inside their hall if the weather turns bad.",
    "cn": "A：氣象報告說我們週日的公司戶外野餐可能會下大雨，那我們現在應該取消整個活動嗎？ B：不用，我已經和公園旁的飯店擬好了【應急】計畫，如果天氣變差，我們可以把所有食物和遊戲搬到他們的大廳裡。"
  },
  {
    "word": "hobby",
    "pos": "n.",
    "cn_def": "嗜好；業餘愛好",
    "en_def": "an activity that you enjoy doing in your free time",
    "sentence": "A: I noticed some beautiful photos of birds and mountains on the wall of your office, so did you buy them from a gallery downtown? B: No, I took them myself, because photography has been my favorite {{BLANK}} for years, and I usually spend my Saturdays walking in the countryside with my camera.",
    "cn": "A：我注意到你辦公室牆上有一些很漂亮的鳥類和山景照片，是你在市中心的藝廊買的嗎？ B：不是，是我自己拍的，因為攝影多年來一直是我最喜歡的【嗜好】，我星期六通常會帶著相機到鄉間散步。"
  },
  {
    "word": "plenty",
    "pos": "n.",
    "cn_def": "大量；充足",
    "en_def": "a large amount that is enough or more than enough",
    "sentence": "A: Do you think we will be able to visit both the museum and the night market if we leave the hotel after breakfast on Saturday? B: Sure, the museum closes at five, and the night market doesn't open until six, so we'll have {{BLANK}} of time to see everything and still enjoy a nice dinner.",
    "cn": "A：如果我們星期六吃完早餐後才離開飯店，你覺得我們能同時去博物館和夜市嗎？ B：當然可以，博物館五點關門，夜市六點才開，所以我們會有【充足】的時間看完所有東西，還能好好享受一頓晚餐。"
  },
  {
    "word": "straightforward",
    "pos": "adj.",
    "cn_def": "簡單明瞭的；直接的",
    "en_def": "easy to understand or do; not complicated",
    "sentence": "A: I've never booked a weekend train trip online before, so is it difficult to choose the seats and pay for the tickets on the railway website? B: Not at all, the booking process is quite {{BLANK}}, because you only need to choose the date, pick your seats on a map, and pay with your credit card.",
    "cn": "A：我以前從沒在網路上訂過週末火車旅行，在鐵路網站上選座位和付票錢會很難嗎？ B：一點也不，訂票流程相當【簡單明瞭】，你只需要選日期、在座位圖上挑座位，然後用信用卡付款就好了。"
  },
  {
    "word": "habit",
    "pos": "n.",
    "cn_def": "習慣",
    "en_def": "something that you do often and regularly, sometimes without thinking",
    "sentence": "A: How do you manage to stay so fit and energetic when you work such long hours at the bank during the week? B: I made it a {{BLANK}} to go swimming every Saturday morning before breakfast, and after doing it for two years, I feel strange if I miss even one week.",
    "cn": "A：你平日在銀行工作那麼長的時間，是怎麼保持身材和精力充沛的？ B：我養成了每週六早上吃早餐前去游泳的【習慣】，持續了兩年之後，就算只錯過一週我都會覺得怪怪的。"
  },
  {
    "word": "pamper",
    "pos": "v.",
    "cn_def": "寵愛；悉心照顧",
    "en_def": "to treat someone very kindly and give them special comfort",
    "sentence": "A: You've been working on the annual budget every night for a month, so what are you going to do now that it has finally been approved? B: I've booked a whole day at a spa downtown this Saturday, and I plan to {{BLANK}} myself with a massage, a nice lunch, and a long nap.",
    "cn": "A：你這一個月每晚都在處理年度預算，現在終於通過了，你打算做什麼？ B：我這週六在市中心的水療館預約了一整天，打算用按摩、一頓美味的午餐和長長的午覺來好好【犒賞】自己。"
  },
  {
    "word": "chitchat",
    "pos": "n.",
    "cn_def": "閒聊",
    "en_def": "friendly talk about unimportant things",
    "sentence": "A: The Monday morning meeting started twenty minutes late again today, so what were all the team members doing in the conference room before the director arrived? B: They were just having some {{BLANK}} about their weekends, sharing stories about the movies they had watched and the restaurants they had tried.",
    "cn": "A：今天星期一早上的會議又晚了二十分鐘開始，主管到之前所有組員在會議室裡做什麼？ B：他們只是在【閒聊】週末的事，分享他們看過的電影和嘗試過的餐廳。"
  },
  {
    "word": "plunge",
    "pos": "v.",
    "cn_def": "跳入；投入",
    "en_def": "to jump or fall suddenly into water",
    "sentence": "A: Why did you bring a towel and a swimsuit to the office today, when we have a full afternoon of meetings with the overseas suppliers? B: My friends and I are driving to the lake right after work, and I can't wait to {{BLANK}} into the cool water after such a hot and stressful week.",
    "cn": "A：今天下午我們要和海外供應商開一整個下午的會，你為什麼帶毛巾和泳衣來辦公室？ B：我和朋友下班後要直接開車去湖邊，在這麼炎熱又緊張的一週後，我等不及要【跳進】涼爽的湖水裡了。"
  },
  {
    "word": "actual",
    "pos": "adj.",
    "cn_def": "實際的；真實的",
    "en_def": "real; existing in fact",
    "sentence": "A: The travel agency said the weekend tour package would cost only five thousand dollars per person, so why did you spend so much more? B: The {{BLANK}} cost was much higher than the advertised price, because hotel taxes, meals, and entrance tickets to the attractions were not included in the package.",
    "cn": "A：旅行社說週末旅遊套裝行程每人只要五千元，為什麼你花了多那麼多？ B：【實際的】花費比廣告上的價格高很多，因為飯店稅、餐費和景點門票都沒有包含在套裝行程裡。"
  },
  {
    "word": "plethora",
    "pos": "n.",
    "cn_def": "過多；大量",
    "en_def": "a very large amount of something, often more than you need",
    "sentence": "A: I'm visiting the city with my family next weekend, but we've never been there before, so where should we go to find good places to eat? B: Try the old harbor district, because there is a {{BLANK}} of seafood restaurants, coffee shops, and street food stalls along the waterfront, and most of them are open late.",
    "cn": "A：我下週末要和家人去那個城市玩，但我們從沒去過，我們應該去哪裡找好吃的地方？ B：去舊港區試試，因為沿著海濱有【大量】的海鮮餐廳、咖啡店和小吃攤，而且大部分都開到很晚。"
  },
  {
    "word": "recharge",
    "pos": "v.",
    "cn_def": "恢復精力；充電",
    "en_def": "to rest so that you get back your energy",
    "sentence": "A: Why don't you check your work email on weekends anymore, even when the sales team sends urgent messages about client orders? B: My doctor told me I needed time to {{BLANK}}, so now I switch off my phone on Saturdays, spend time with my children, and deal with the messages first thing on Monday.",
    "cn": "A：為什麼你週末不再查看工作郵件了，即使業務團隊寄來客戶訂單的緊急訊息也一樣？ B：我的醫生說我需要時間【恢復精力】，所以現在我星期六會關掉手機、陪孩子，然後星期一一早再處理那些訊息。"
  },
  {
    "word": "exhausting",
    "pos": "adj.",
    "cn_def": "令人筋疲力盡的",
    "en_def": "making you feel extremely tired",
    "sentence": "A: You look really tired this morning, so did something happen during your weekend at the trade fair in Shanghai? B: Standing at our company's booth for ten hours a day and explaining our products to hundreds of visitors was {{BLANK}}, and my flight back last night was delayed by three hours.",
    "cn": "A：你今天早上看起來真的很累，你週末在上海參加商展時發生了什麼事嗎？ B：每天在公司攤位站十個小時、向幾百位訪客介紹我們的產品真是【令人筋疲力盡】，而且我昨晚回來的班機還延誤了三個小時。"
  },
  {
    "word": "grind",
    "pos": "n.",
    "cn_def": "苦差事；單調辛苦的工作",
    "en_def": "hard, boring work that continues for a long time",
    "sentence": "A: Why are so many people in our department taking Friday off this week, when the quarterly reports are due at the end of the month? B: After weeks of the daily {{BLANK}} of checking numbers and answering customer complaints, they decided to take a long weekend and get away from the office for a while.",
    "cn": "A：季報月底就要交了，為什麼我們部門這週有那麼多人星期五請假？ B：在連續幾週每天核對數字和回覆客訴的【單調苦差事】之後，他們決定放個長週末，暫時遠離辦公室。"
  },
  {
    "word": "crowd",
    "pos": "n.",
    "cn_def": "人群",
    "en_def": "a large group of people together in one place",
    "sentence": "A: Should we visit the famous flower garden on Saturday afternoon, or is there a better time to go during the spring festival? B: I'd suggest going early on Sunday morning instead, because a huge {{BLANK}} of tourists usually arrives by bus on Saturday afternoon, and it's almost impossible to take nice photos then.",
    "cn": "A：我們應該星期六下午去那座有名的花園嗎？還是春季花節期間有更好的時間去？ B：我建議改成星期日一早去，因為星期六下午通常會有一大批搭遊覽車來的觀光客【人群】，那時幾乎不可能拍到好照片。"
  },
  {
    "word": "packed",
    "pos": "adj.",
    "cn_def": "擠滿的；客滿的",
    "en_def": "very full of people or things",
    "sentence": "A: I'd like to take our visiting clients to the new Italian restaurant downtown on Saturday evening, so do you think we can just walk in without a reservation? B: I don't think so, because the restaurant is always {{BLANK}} on weekends, and my friends had to wait over an hour for a table last week.",
    "cn": "A：我想星期六晚上帶來訪的客戶去市中心新開的義大利餐廳，你覺得我們不訂位直接去可以嗎？ B：我覺得不行，因為那家餐廳週末總是【擠滿了人】，我朋友上週等了一個多小時才有位子。"
  },
  {
    "word": "composed",
    "pos": "adj.",
    "cn_def": "鎮定的；沉著的",
    "en_def": "calm and in control of your feelings",
    "sentence": "A: The client's presentation on Monday is extremely important, so how do you stay so calm when everyone else on the team seems so nervous? B: I spent the whole weekend doing yoga and walking in the park, so I feel {{BLANK}} and ready to answer any difficult questions they might ask.",
    "cn": "A：星期一要給客戶的簡報非常重要，團隊其他人看起來都那麼緊張，你怎麼能保持這麼冷靜？ B：我整個週末都在做瑜伽和到公園散步，所以我覺得很【沉著】，準備好回答他們可能提出的任何困難問題。"
  },
  {
    "word": "day off",
    "pos": "n.phr.",
    "cn_def": "休假日；放假的一天",
    "en_def": "a day when you do not have to go to work",
    "sentence": "A: You've been working at the store every Saturday and Sunday for two months, so when are you going to get some rest? B: My manager finally agreed to give me a {{BLANK}} next Friday, so I'm planning to take a short trip to the beach with my sister and come back on Sunday.",
    "cn": "A：你連續兩個月每個星期六和星期日都在店裡上班，你什麼時候才能休息一下？ B：我的經理終於同意下週五給我【放一天假】，所以我打算和姊姊去海邊短途旅行，星期日再回來。"
  },
  {
    "word": "hangout",
    "pos": "n.",
    "cn_def": "聚會場所；常去的地方",
    "en_def": "a place where people like to meet and spend time together",
    "sentence": "A: Where do the young engineers from the software department usually go after work on Friday evenings to celebrate the end of the week? B: Their favorite {{BLANK}} is a small café with board games near the train station, where they play games, eat snacks, and talk about everything except work until midnight.",
    "cn": "A：軟體部門的年輕工程師週五晚上下班後通常去哪裡慶祝一週結束？ B：他們最愛的【聚會場所】是火車站附近一家有桌遊的小咖啡館，他們會在那裡玩遊戲、吃點心，聊工作以外的所有事一直到半夜。"
  },
  {
    "word": "refresh",
    "pos": "v.",
    "cn_def": "使恢復精神；使清新",
    "en_def": "to make someone feel less tired and more energetic",
    "sentence": "A: The training workshop lasts the whole weekend, so how will the participants stay focused from early morning until late in the afternoon? B: The organizers have planned short coffee breaks every ninety minutes, and they hope a walk in the hotel garden will {{BLANK}} everyone before the afternoon sessions start.",
    "cn": "A：訓練工作坊持續整個週末，參加者要怎麼從一大早一直保持專注到傍晚？ B：主辦單位安排了每九十分鐘一次的短暫咖啡休息時間，他們希望在飯店花園散步能讓大家在下午的課程開始前【恢復精神】。"
  },
  {
    "word": "upcoming",
    "pos": "adj.",
    "cn_def": "即將到來的",
    "en_def": "happening soon",
    "sentence": "A: Have you heard anything about the {{BLANK}} long weekend in October, and whether the factory will stay open or close for the national holiday? B: The plant manager announced yesterday that the factory will close for three days, but the warehouse will still accept deliveries on Saturday morning.",
    "cn": "A：你有沒有聽說十月【即將到來的】連假，工廠在國定假日期間會繼續營運還是關閉？ B：廠長昨天宣布工廠會關閉三天，但倉庫星期六早上還是會收貨。"
  },
  {
    "word": "extent",
    "pos": "n.",
    "cn_def": "程度；範圍",
    "en_def": "how large, important, or serious something is",
    "sentence": "A: The storm hit the coast on Saturday night, so have you visited the seaside branch office to see how much damage was done to the building? B: I went there yesterday morning, but we still don't know the full {{BLANK}} of the damage, because the engineers need a few more days to inspect the roof and the computer room.",
    "cn": "A：暴風雨星期六晚上侵襲海岸，你有沒有去海邊的分公司看看大樓受損多嚴重？ B：我昨天早上去過了，但我們仍不清楚損害的完整【程度】，因為工程師還需要幾天時間檢查屋頂和機房。"
  },
  {
    "word": "focus",
    "pos": "v.",
    "cn_def": "專注；集中",
    "en_def": "to give all your attention to one thing",
    "sentence": "A: Why did you decide to stop answering work calls and messages from Friday evening until Monday morning? B: I realized that I was always tired and stressed, so now I try to {{BLANK}} on my family and my health during the weekend and leave all office problems until I'm back at my desk.",
    "cn": "A：你為什麼決定從週五晚上到週一早上都不接工作電話、不回訊息？ B：我發現自己總是又累又有壓力，所以現在週末我會試著【專注】在家人和健康上，把所有公司的問題留到回到辦公桌時再處理。"
  },
  {
    "word": "revive",
    "pos": "v.",
    "cn_def": "使復甦；使恢復",
    "en_def": "to make someone or something strong, active, or healthy again",
    "sentence": "A: Sales at our downtown café have been falling for months, so what is the new manager planning to do to bring customers back? B: She wants to {{BLANK}} the weekend business by offering live music on Saturday nights and a special family brunch menu on Sunday mornings.",
    "cn": "A：我們市中心咖啡館的業績已經下滑好幾個月了，新經理打算怎麼做來吸引顧客回流？ B：她想藉由週六晚上提供現場音樂、週日早上推出特別的家庭早午餐菜單，讓週末生意【復甦】起來。"
  }
];

const MCQS = [
  {
    "q": "We spent a _____ afternoon by the lake after the conference ended. Everyone felt calm and ready to return to work.",
    "options": [
      "relaxing",
      "exhausting",
      "packed",
      "occupied"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The company offers free yoga classes to help _____ staff after busy weeks. Many employees say they feel younger and stronger now.",
    "options": [
      "interact",
      "rejuvenate",
      "plunge",
      "nominate"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Many new drivers _____ to find parking downtown on Saturdays. The city plans to build another garage near the mall.",
    "options": [
      "pamper",
      "refresh",
      "struggle",
      "revive"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The meeting room is _____ until three o'clock this afternoon. Please book the small room on the second floor instead.",
    "options": [
      "composed",
      "relaxing",
      "actual",
      "occupied"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Hiring enough staff for the weekend shift is a serious _____ for the hotel. The manager has posted several job advertisements online.",
    "options": [
      "hangout",
      "challenge",
      "habit",
      "plethora"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The new park includes a large area for outdoor _____ and sports. Families can use the tennis courts free of charge.",
    "options": [
      "recreation",
      "contingency",
      "chitchat",
      "extent"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The sales event lets customers _____ with the designers in person. Visitors can ask questions about every product on display.",
    "options": [
      "rejuvenate",
      "recharge",
      "struggle",
      "interact"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The children waited _____ for the theme park gates to open on Saturday morning. Their parents had bought the tickets a month earlier.",
    "options": [
      "extremely",
      "barely",
      "eagerly",
      "rarely"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The airline keeps extra crew members on standby as a _____ measure. This helps prevent cancellations during busy holiday weekends.",
    "options": [
      "contingency",
      "recreation",
      "grind",
      "crowd"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Gardening became Mr. Lin's favorite _____ after he retired from the bank. He now grows vegetables and flowers in his backyard.",
    "options": [
      "challenge",
      "extent",
      "hobby",
      "grind"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Please bring _____ of water and sunscreen to the company beach day. The weather forecast says it will be very hot.",
    "options": [
      "plethora",
      "plenty",
      "crowd",
      "extent"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The instructions for assembling the desk are quite _____. Most customers finish the job in less than twenty minutes.",
    "options": [
      "exhausting",
      "occupied",
      "upcoming",
      "straightforward"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Checking work email late at night is a bad _____ for many managers. Experts say it can make people tired and stressed.",
    "options": [
      "hobby",
      "hangout",
      "habit",
      "contingency"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The luxury hotel promises to _____ its guests with fresh flowers and free massages. Rooms for the holiday weekend are already sold out.",
    "options": [
      "pamper",
      "plunge",
      "struggle",
      "focus"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "After a few minutes of friendly _____, the director started the meeting. She first introduced the new members of the team.",
    "options": [
      "grind",
      "chitchat",
      "challenge",
      "recreation"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Several swimmers decided to _____ into the cold sea on New Year's Day. The event raised money for a local children's hospital.",
    "options": [
      "revive",
      "interact",
      "pamper",
      "plunge"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The _____ number of visitors was twice as high as the organizers expected. More staff had to be called in on Sunday.",
    "options": [
      "actual",
      "upcoming",
      "relaxing",
      "straightforward"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The new shopping mall offers a _____ of entertainment options for families. There are cinemas, arcades, and more than fifty restaurants.",
    "options": [
      "habit",
      "contingency",
      "day off",
      "plethora"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "A short walk outside at lunchtime can help you _____ your energy. Many workers feel more productive in the afternoon afterwards.",
    "options": [
      "interact",
      "recharge",
      "struggle",
      "plunge"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Moving all the office furniture by ourselves was _____ work. Next time we will hire a professional moving company.",
    "options": [
      "relaxing",
      "composed",
      "exhausting",
      "straightforward"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Many workers find it hard to return to the daily _____ after a holiday. Some companies now allow staff to start late on Mondays.",
    "options": [
      "hobby",
      "hangout",
      "extent",
      "grind"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "A large _____ gathered outside the store before the weekend sale began. Security guards helped customers line up in an orderly way.",
    "options": [
      "plenty",
      "crowd",
      "habit",
      "challenge"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The train to the beach was completely _____ on Saturday morning. Many passengers had to stand for the whole two-hour trip.",
    "options": [
      "packed",
      "composed",
      "occupied",
      "actual"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The pilot stayed _____ when the engine warning light came on. He calmly explained the situation to the passengers and landed safely.",
    "options": [
      "packed",
      "exhausting",
      "composed",
      "eager"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Employees who work on national holidays will receive an extra _____ later in the month. Please discuss the date with your supervisor.",
    "options": [
      "hangout",
      "day off",
      "chitchat",
      "recreation"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The rooftop bar has become a popular _____ for young professionals. It is usually busy from Thursday to Saturday nights.",
    "options": [
      "habit",
      "grind",
      "contingency",
      "hangout"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The hotel serves cold drinks by the pool to _____ guests on hot afternoons. The service is included in the room price.",
    "options": [
      "refresh",
      "struggle",
      "interact",
      "focus"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Please check the website for details about our _____ weekend workshops. Registration for the November sessions opens next Monday.",
    "options": [
      "actual",
      "relaxing",
      "upcoming",
      "packed"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The report shows the _____ of the problem with late weekend deliveries. Nearly thirty percent of orders arrived more than a day late.",
    "options": [
      "plethora",
      "crowd",
      "plenty",
      "extent"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The town hopes the new weekend market will _____ the old shopping street. Many shops there have closed in recent years.",
    "options": [
      "focus",
      "revive",
      "pamper",
      "interact"
    ],
    "answer": 1,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "relaxing": {
    "pos": "adj.",
    "en_def": "making you feel calm and comfortable",
    "cn_def": "令人放鬆的"
  },
  "rejuvenate": {
    "pos": "v.",
    "en_def": "to make someone feel young, fresh, and full of energy again",
    "cn_def": "使恢復活力；使年輕"
  },
  "struggle": {
    "pos": "v.",
    "en_def": "to try very hard to do something that is difficult",
    "cn_def": "努力；掙扎；吃力地做"
  },
  "occupied": {
    "pos": "adj.",
    "en_def": "busy doing something; not free",
    "cn_def": "忙碌的；被佔用的"
  },
  "challenge": {
    "pos": "n.",
    "en_def": "something difficult that tests your ability or strength",
    "cn_def": "挑戰；難題"
  },
  "recreation": {
    "pos": "n.",
    "en_def": "activities that people do for fun when they are not working",
    "cn_def": "娛樂；休閒活動"
  },
  "interact": {
    "pos": "v.",
    "en_def": "to talk and spend time with other people",
    "cn_def": "互動；交流"
  },
  "eagerly": {
    "pos": "adv.",
    "en_def": "in a way that shows you really want to do or have something",
    "cn_def": "熱切地；渴望地"
  },
  "contingency": {
    "pos": "n.",
    "en_def": "a plan for something that might happen in the future",
    "cn_def": "應急措施；意外情況"
  },
  "hobby": {
    "pos": "n.",
    "en_def": "an activity that you enjoy doing in your free time",
    "cn_def": "嗜好；業餘愛好"
  },
  "plenty": {
    "pos": "n.",
    "en_def": "a large amount that is enough or more than enough",
    "cn_def": "大量；充足"
  },
  "straightforward": {
    "pos": "adj.",
    "en_def": "easy to understand or do; not complicated",
    "cn_def": "簡單明瞭的；直接的"
  },
  "habit": {
    "pos": "n.",
    "en_def": "something that you do often and regularly, sometimes without thinking",
    "cn_def": "習慣"
  },
  "pamper": {
    "pos": "v.",
    "en_def": "to treat someone very kindly and give them special comfort",
    "cn_def": "寵愛；悉心照顧"
  },
  "chitchat": {
    "pos": "n.",
    "en_def": "friendly talk about unimportant things",
    "cn_def": "閒聊"
  },
  "plunge": {
    "pos": "v.",
    "en_def": "to jump or fall suddenly into water",
    "cn_def": "跳入；投入"
  },
  "actual": {
    "pos": "adj.",
    "en_def": "real; existing in fact",
    "cn_def": "實際的；真實的"
  },
  "plethora": {
    "pos": "n.",
    "en_def": "a very large amount of something, often more than you need",
    "cn_def": "過多；大量"
  },
  "recharge": {
    "pos": "v.",
    "en_def": "to rest so that you get back your energy",
    "cn_def": "恢復精力；充電"
  },
  "exhausting": {
    "pos": "adj.",
    "en_def": "making you feel extremely tired",
    "cn_def": "令人筋疲力盡的"
  },
  "grind": {
    "pos": "n.",
    "en_def": "hard, boring work that continues for a long time",
    "cn_def": "苦差事；單調辛苦的工作"
  },
  "crowd": {
    "pos": "n.",
    "en_def": "a large group of people together in one place",
    "cn_def": "人群"
  },
  "packed": {
    "pos": "adj.",
    "en_def": "very full of people or things",
    "cn_def": "擠滿的；客滿的"
  },
  "composed": {
    "pos": "adj.",
    "en_def": "calm and in control of your feelings",
    "cn_def": "鎮定的；沉著的"
  },
  "day off": {
    "pos": "n.phr.",
    "en_def": "a day when you do not have to go to work",
    "cn_def": "休假日；放假的一天"
  },
  "hangout": {
    "pos": "n.",
    "en_def": "a place where people like to meet and spend time together",
    "cn_def": "聚會場所；常去的地方"
  },
  "refresh": {
    "pos": "v.",
    "en_def": "to make someone feel less tired and more energetic",
    "cn_def": "使恢復精神；使清新"
  },
  "upcoming": {
    "pos": "adj.",
    "en_def": "happening soon",
    "cn_def": "即將到來的"
  },
  "extent": {
    "pos": "n.",
    "en_def": "how large, important, or serious something is",
    "cn_def": "程度；範圍"
  },
  "focus": {
    "pos": "v.",
    "en_def": "to give all your attention to one thing",
    "cn_def": "專注；集中"
  },
  "revive": {
    "pos": "v.",
    "en_def": "to make someone or something strong, active, or healthy again",
    "cn_def": "使復甦；使恢復"
  }
};

const EXTRA_GLOSSES = {};
