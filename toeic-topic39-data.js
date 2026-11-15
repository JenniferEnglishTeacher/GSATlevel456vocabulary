// Topic 39 Quiz Data: Busy 忙碌
// Source word list: https://www.examword.com/group-topic/busy — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T39 - Busy 忙碌",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "occupied",
    "pos": "adj.",
    "cn_def": "忙碌的；（座位、房間）有人使用的",
    "en_def": "busy doing something, or being used by someone",
    "sentence": "A: I wanted to ask the director about the new budget plan this morning, but is she available to talk for a few minutes before lunch? B: I'm afraid she will be {{BLANK}} with job interviews until two o'clock, so you should send her an email now and she can reply after the last candidate leaves.",
    "cn": "A：我今天早上想問主任有關新預算計畫的事，她午餐前有空談幾分鐘嗎？ B：恐怕她到兩點前都會【忙著】面試應徵者，所以你現在應該寄電子郵件給她，等最後一位應徵者離開後她就可以回覆你。"
  },
  {
    "word": "overworked",
    "pos": "adj.",
    "cn_def": "工作過度的；過勞的",
    "en_def": "having too much work to do",
    "sentence": "A: Why did three people from the customer service team quit last month, even though the company had just raised everyone's salary in January? B: Most of them felt {{BLANK}} because they had to answer hundreds of calls every day without enough breaks, and the manager never hired anyone new to help them.",
    "cn": "A：為什麼客服團隊上個月有三個人離職，即使公司一月才剛幫大家加薪？ B：他們大多覺得【工作過度】，因為每天必須接數百通電話又沒有足夠的休息時間，而經理也從沒僱用新人來幫忙。"
  },
  {
    "word": "swamped",
    "pos": "adj.",
    "cn_def": "忙得不可開交的；應接不暇的",
    "en_def": "having so much work that you can hardly deal with it",
    "sentence": "A: Could you help me check these sales figures before the meeting with our partners from Tokyo tomorrow morning? B: I'd love to, but I'm completely {{BLANK}} with customer orders since the holiday promotion started, so maybe you could ask Kevin in the finance department, who usually has more free time on Thursdays.",
    "cn": "A：你可以幫我在明天早上和東京合作夥伴開會前檢查這些銷售數字嗎？ B：我很樂意，但自從假期促銷開始後，我就完全被顧客訂單【淹沒】了，所以也許你可以問財務部的凱文，他星期四通常比較有空。"
  },
  {
    "word": "loaded",
    "pos": "adj.",
    "cn_def": "裝滿的；堆滿的",
    "en_def": "carrying or having a large amount of something",
    "sentence": "A: Are you sure you can take on the hotel booking for the sales conference as well as the monthly report? B: To be honest, my desk is already {{BLANK}} with files from the new clients, but if you give me until Friday afternoon, I can finish the report first and then book the rooms.",
    "cn": "A：你確定你能在處理月報之外，也負責業務研討會的飯店訂房嗎？ B：老實說，我的桌上已經【堆滿】了新客戶的檔案，但如果你給我到星期五下午的時間，我可以先完成報告再訂房間。"
  },
  {
    "word": "stretched",
    "pos": "adj.",
    "cn_def": "（人力、資源）吃緊的",
    "en_def": "having hardly enough time, money or people for what is needed",
    "sentence": "A: Can our design team start working on the new website for the restaurant chain next week, as the client requested? B: I'm not sure, because the team is already {{BLANK}} with two other big projects, and two designers are on vacation, so we might need to ask the client for an extra month.",
    "cn": "A：我們的設計團隊可以照客戶要求，下週開始製作連鎖餐廳的新網站嗎？ B：我不確定，因為團隊已經因為另外兩個大案子而【人手吃緊】，而且有兩位設計師在休假，所以我們可能需要請客戶多給一個月。"
  },
  {
    "word": "hectic",
    "pos": "adj.",
    "cn_def": "忙亂的；繁忙的",
    "en_def": "very busy and full of activity",
    "sentence": "A: How was your first week at the airport information desk, now that the summer travel season has begun? B: It was really {{BLANK}}, because thousands of passengers kept asking about delayed flights and lost bags, but my supervisor was very kind and showed me how to stay calm and handle each problem one by one.",
    "cn": "A：既然夏季旅遊旺季已經開始，你在機場服務台的第一週過得如何？ B：真的很【忙亂】，因為成千上萬的旅客一直詢問延誤的航班和遺失的行李，但我的主管人很好，教我如何保持冷靜，一一處理每個問題。"
  },
  {
    "word": "frantic",
    "pos": "adj.",
    "cn_def": "慌亂的；瘋狂的",
    "en_def": "done in a hurried and worried way, without control",
    "sentence": "A: Why was everyone in the marketing office running around and shouting this morning before the product launch? B: They were in a {{BLANK}} search for the USB drive with the presentation slides, because the CEO was arriving in twenty minutes and nobody could remember where the intern had put it last night.",
    "cn": "A：今天早上產品發表前，行銷辦公室的每個人為什麼都跑來跑去還大聲喊叫？ B：他們在【慌亂地】尋找存有簡報投影片的隨身碟，因為執行長二十分鐘後就要到了，卻沒人記得實習生昨晚把它放在哪裡。"
  },
  {
    "word": "rushed",
    "pos": "adj.",
    "cn_def": "匆忙的；倉促的",
    "en_def": "done too quickly, or having to hurry",
    "sentence": "A: Did you enjoy the business lunch with the new suppliers from Vietnam at the hotel yesterday? B: Not really, because it felt very {{BLANK}}, since we only had forty minutes before their train left, so we had to eat quickly and couldn't discuss the delivery prices in much detail.",
    "cn": "A：你昨天在飯店和越南新供應商的商務午餐吃得愉快嗎？ B：不太愉快，感覺很【匆忙】，因為他們的火車開之前我們只有四十分鐘，所以我們得吃很快，也沒辦法詳細討論運費價格。"
  },
  {
    "word": "pressed",
    "pos": "adj.",
    "cn_def": "（時間、金錢）緊迫的；不足的",
    "en_def": "not having enough of something, especially time",
    "sentence": "A: Would you like to join us for a coffee and a quick chat about the training program in the lobby café? B: I'm a little {{BLANK}} for time today, because I have to prepare a sales presentation for an important client by four o'clock, but I'd be happy to meet you tomorrow morning instead.",
    "cn": "A：你要不要和我們一起去大廳的咖啡廳喝杯咖啡，簡短聊一下培訓課程？ B：我今天時間有點【緊迫】，因為我得在四點前為一位重要客戶準備銷售簡報，但我很樂意改成明天早上和你碰面。"
  },
  {
    "word": "demanding",
    "pos": "adj.",
    "cn_def": "費力的；要求高的",
    "en_def": "needing a lot of time, energy or skill",
    "sentence": "A: Why did Linda decide to leave her well-paid position at the international bank after only one year? B: She said the job was too {{BLANK}}, since she often worked late into the night and traveled abroad twice a month, so she hardly saw her family and felt tired all the time.",
    "cn": "A：為什麼琳達在國際銀行待了才一年就決定離開她高薪的職位？ B：她說那份工作太【吃力】了，因為她常常工作到深夜，而且每個月出國兩次，所以她幾乎見不到家人，總是覺得很累。"
  },
  {
    "word": "time-consuming",
    "pos": "adj.",
    "cn_def": "耗時的；費時的",
    "en_def": "taking a lot of time",
    "sentence": "A: Should we check every customer survey by hand, or is there a faster way to find the most common complaints? B: Reading them one by one would be very {{BLANK}}, because we received more than five thousand forms last month, so I suggest we use the new software that sorts the comments automatically.",
    "cn": "A：我們應該人工檢查每份顧客問卷，還是有更快的方法找出最常見的抱怨？ B：一份一份看會非常【耗時】，因為我們上個月收到超過五千份表格，所以我建議用那套能自動分類意見的新軟體。"
  },
  {
    "word": "engaged",
    "pos": "adj.",
    "cn_def": "忙碌的；（電話）佔線的",
    "en_def": "busy; (of a phone line) being used",
    "sentence": "A: I've been trying to call the shipping company all morning to ask about our missing boxes, but why can't I get through? B: Their line is probably {{BLANK}} because many customers are calling after the storm delayed deliveries, so why don't you send them a message through their website instead?",
    "cn": "A：我整個早上一直打電話給貨運公司詢問我們遺失的箱子，但為什麼都打不通？ B：他們的電話大概【佔線中】，因為暴風雨延誤了送貨，很多顧客都在打電話，所以你何不改成透過他們的網站傳訊息？"
  },
  {
    "word": "active",
    "pos": "adj.",
    "cn_def": "活躍的；積極的",
    "en_def": "busy doing many things; full of energy",
    "sentence": "A: Your grandfather is almost eighty, so does he still spend most of his time at home since he retired from the factory? B: Not at all, he's still very {{BLANK}}, because he volunteers at the local library three mornings a week, plays tennis on weekends, and even takes an English class at the community center.",
    "cn": "A：你祖父快八十歲了，他從工廠退休後是不是大部分時間都待在家裡？ B：完全不是，他還是非常【活躍】，因為他每週有三個早上在當地圖書館當志工，週末打網球，甚至還在社區中心上英文課。"
  },
  {
    "word": "on the go",
    "pos": "adj.phr.",
    "cn_def": "忙個不停的",
    "en_def": "very busy and moving around all the time",
    "sentence": "A: How does your sister manage to run her own bakery and take care of three young children at the same time? B: She's always {{BLANK}} from six in the morning until late at night, but she says she enjoys it, and her husband helps with the kids after he finishes work at the hospital.",
    "cn": "A：你姊姊是怎麼同時經營自己的麵包店又照顧三個小孩的？ B：她從早上六點到深夜總是【忙個不停】，但她說她很享受，而且她先生在醫院下班後也會幫忙照顧孩子。"
  },
  {
    "word": "full",
    "pos": "adj.",
    "cn_def": "滿的；排滿的",
    "en_def": "having no free space or time left",
    "sentence": "A: Can I book an appointment with Dr. Chen this Friday afternoon to talk about the results of my health check? B: I'm sorry, but her calendar is completely {{BLANK}} on Friday because of the medical conference, so the earliest time I can offer you is next Monday at ten o'clock in the morning.",
    "cn": "A：我可以預約陳醫師這個星期五下午，談一下我的健康檢查結果嗎？ B：很抱歉，因為醫學研討會，她星期五的行事曆完全【排滿】了，所以我能提供給您最早的時間是下星期一早上十點。"
  },
  {
    "word": "packed",
    "pos": "adj.",
    "cn_def": "擠滿的；塞滿的",
    "en_def": "very crowded; full of people or things",
    "sentence": "A: Do you think we can find seats on the train to Kaohsiung if we arrive at the station around five o'clock on Friday? B: I doubt it, because the trains are always {{BLANK}} with office workers going home for the long weekend, so we should buy our tickets online tonight to be safe.",
    "cn": "A：如果我們星期五五點左右到車站，你覺得我們找得到往高雄火車的座位嗎？ B：我很懷疑，因為火車上總是【擠滿】了要回家過連假的上班族，所以為了保險起見，我們今晚應該在網路上買票。"
  },
  {
    "word": "jam-packed",
    "pos": "adj.",
    "cn_def": "擠得水洩不通的；塞得滿滿的",
    "en_def": "extremely full or crowded",
    "sentence": "A: What did you think of the trade fair in Taipei, and did your company get many new business contacts? B: The exhibition hall was {{BLANK}} with visitors from all over Asia, so it was hard to move around, but we collected more than two hundred business cards and received several large orders.",
    "cn": "A：你覺得台北的商展怎麼樣，你們公司有得到很多新的商業人脈嗎？ B：展覽館裡【擠得水洩不通】，都是來自亞洲各地的訪客，所以很難走動，但我們收集了兩百多張名片，還接到好幾筆大訂單。"
  },
  {
    "word": "tight",
    "pos": "adj.",
    "cn_def": "緊湊的；拮据的",
    "en_def": "with very little free time or money",
    "sentence": "A: Is it possible to add a visit to the new factory during the clients' trip to Taichung next week? B: The program is already very {{BLANK}}, since they have meetings from nine to six both days and fly back on Wednesday night, but I'll ask whether they'd like to skip the city tour instead.",
    "cn": "A：下週客戶到台中的行程中，有可能加入參觀新工廠嗎？ B：行程已經非常【緊湊】，因為他們兩天都從九點開會到六點，而且星期三晚上就要飛回去，但我會問他們是否願意改為取消市區觀光。"
  },
  {
    "word": "burdened",
    "pos": "adj.",
    "cn_def": "負擔沉重的",
    "en_def": "having a heavy load of work, duties or problems",
    "sentence": "A: Why does the new accountant look so stressed during our team meetings these days? B: She feels {{BLANK}} with too many responsibilities, because she has to handle the annual tax report, train two interns, and cover for a colleague who is on maternity leave until the end of next month.",
    "cn": "A：為什麼新來的會計師最近在我們的團隊會議上看起來壓力那麼大？ B：她覺得被太多責任【壓得喘不過氣】，因為她必須處理年度稅務報告、訓練兩位實習生，還要代理一位休產假到下個月底的同事。"
  },
  {
    "word": "workload",
    "pos": "n.",
    "cn_def": "工作量",
    "en_def": "the amount of work a person has to do",
    "sentence": "A: Since two people left the accounting team last month, how are the rest of you dealing with all the extra work? B: Our {{BLANK}} has nearly doubled, so we've asked the manager to hire a temporary assistant, and in the meantime we've agreed to share the urgent jobs and work one extra hour each evening.",
    "cn": "A：自從會計團隊上個月有兩個人離職後，你們其他人怎麼應付那些額外的工作？ B：我們的【工作量】幾乎加倍了，所以我們已經請經理僱用一位臨時助理，同時我們也同意分擔緊急的工作，每天晚上多工作一小時。"
  },
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "時間表；行程表",
    "en_def": "a plan that lists when things will happen",
    "sentence": "A: Have you planned the visit for the Japanese buyers who are coming to see our showroom on Tuesday? B: Yes, I've prepared a detailed {{BLANK}} for their visit, starting with a factory tour at nine, followed by a product demonstration and lunch, and I'll email a copy to everyone on the sales team this afternoon.",
    "cn": "A：你安排好星期二要來參觀我們展示間的日本買家的行程了嗎？ B：是的，我已經為他們的參訪準備了一份詳細的【行程表】，九點從工廠參觀開始，接著是產品示範和午餐，我今天下午會把副本寄給業務團隊的每個人。"
  },
  {
    "word": "deadline",
    "pos": "n.",
    "cn_def": "截止期限",
    "en_def": "the latest time by which something must be done",
    "sentence": "A: When does the marketing department need the final version of the brochure for the new hotel? B: The {{BLANK}} is next Monday at noon, because the printing company needs three days to print five thousand copies before the grand opening, so we must not make any more changes after this weekend.",
    "cn": "A：行銷部什麼時候需要新飯店宣傳手冊的最終版本？ B：【截止期限】是下星期一中午，因為印刷公司需要三天在盛大開幕前印好五千份，所以這個週末之後我們不能再做任何修改了。"
  },
  {
    "word": "commitment",
    "pos": "n.",
    "cn_def": "承諾；應盡的責任",
    "en_def": "something you have promised to do, which takes your time",
    "sentence": "A: Would you like to lead the planning team for the company's twentieth anniversary party in December? B: I'd love to help, but I have a family {{BLANK}} on weekends, since I travel to Tainan to take care of my elderly parents, so I wouldn't be able to attend the planning meetings held on Saturday mornings.",
    "cn": "A：你願意帶領十二月公司二十週年派對的籌備小組嗎？ B：我很樂意幫忙，但我週末有家庭【責任】，因為我要去台南照顧年邁的父母，所以我沒辦法參加星期六早上舉行的籌備會議。"
  },
  {
    "word": "task",
    "pos": "n.",
    "cn_def": "任務；工作",
    "en_def": "a piece of work that must be done",
    "sentence": "A: What should I do first on my first day as a receptionist at the hotel, since everything here seems so new to me? B: Your first {{BLANK}} is to learn how to use the booking system, and after lunch Sarah will show you how to welcome guests, check their passports, and give them their room keys.",
    "cn": "A：我第一天在飯店當櫃檯人員應該先做什麼呢？這裡的一切對我來說都好新。 B：你的第一項【任務】是學會使用訂房系統，午餐後莎拉會教你如何接待客人、檢查他們的護照，並把房間鑰匙交給他們。"
  },
  {
    "word": "assignment",
    "pos": "n.",
    "cn_def": "（分派的）任務；派任工作",
    "en_def": "a piece of work or job that someone is given to do",
    "sentence": "A: Why is Mark flying to Jakarta next month when he only joined the engineering department in March? B: The company gave him a six-month {{BLANK}} at our new factory there, because he speaks Indonesian and can help the local staff learn how to use the machines we bought from Germany.",
    "cn": "A：馬克三月才加入工程部，為什麼下個月就要飛去雅加達？ B：公司給了他一項在那裡新工廠為期六個月的【派任工作】，因為他會說印尼語，可以幫助當地員工學會使用我們從德國買來的機器。"
  },
  {
    "word": "multitask",
    "pos": "v.",
    "cn_def": "同時處理多項工作",
    "en_def": "to do several things at the same time",
    "sentence": "A: What kind of skills are you looking for in the new office assistant you plan to hire next month? B: We need someone who can {{BLANK}} well, because the assistant will answer phone calls, greet visitors, and update the sales records at the same time, especially during our busy morning hours.",
    "cn": "A：你們下個月打算僱用的新辦公室助理，需要具備什麼樣的技能？ B：我們需要一個很能【同時處理多項工作】的人，因為助理要同時接電話、招呼訪客和更新銷售紀錄，特別是在早上忙碌的時段。"
  },
  {
    "word": "juggle",
    "pos": "v.",
    "cn_def": "兼顧；同時應付",
    "en_def": "to try to deal with several jobs or duties at the same time",
    "sentence": "A: How do you manage to study for your MBA while working full-time at the advertising agency in the city center? B: It's hard to {{BLANK}} work and school, but I study on the train every morning, attend classes online on weekends, and my manager kindly lets me leave early on exam days.",
    "cn": "A：你怎麼能在市中心的廣告公司全職工作的同時，又讀企管碩士？ B：要【兼顧】工作和學業很難，但我每天早上在火車上讀書，週末上線上課程，而且考試那天我的經理會好心讓我提早下班。"
  },
  {
    "word": "rush",
    "pos": "v.",
    "cn_def": "趕；匆忙行事",
    "en_def": "to move or do something very quickly",
    "sentence": "A: The meeting with the bank doesn't start until three o'clock, so should we leave the office right now? B: There's no need to {{BLANK}}, because the bank is only a ten-minute walk from here, so let's finish checking the loan documents carefully first and then leave at around half past two.",
    "cn": "A：和銀行的會議三點才開始，所以我們應該現在就離開辦公室嗎？ B：不需要【趕】，因為銀行從這裡走路只要十分鐘，所以我們先把貸款文件仔細檢查完，大約兩點半再出發。"
  },
  {
    "word": "prioritise",
    "pos": "v.",
    "cn_def": "排定優先順序",
    "en_def": "to decide which things are most important and do them first",
    "sentence": "A: I have to finish the sales report, answer twenty customer emails, and prepare for tomorrow's training session, so where should I start? B: You need to {{BLANK}} your work, so start with the sales report, because the director needs it by noon, and then reply to the customers who have complained about late deliveries.",
    "cn": "A：我得完成銷售報告、回覆二十封顧客郵件，還要準備明天的訓練課程，我應該從哪裡開始？ B：你需要把工作【排定優先順序】，所以先從銷售報告開始，因為主任中午前要，然後再回覆那些抱怨送貨延遲的顧客。"
  },
  {
    "word": "crammed",
    "pos": "adj.",
    "cn_def": "塞滿的；擠滿的",
    "en_def": "too full of people, things or activities",
    "sentence": "A: Why didn't you enjoy the guided tour of Europe that your company gave you as a reward for being the top salesperson? B: The tour was {{BLANK}} with too many activities, so we visited six cities in seven days and spent most of our time on the bus instead of relaxing and enjoying the local food.",
    "cn": "A：公司為了獎勵你成為頂尖業務員而送你的歐洲導覽旅遊，你為什麼玩得不開心？ B：那趟旅遊【塞滿】了太多活動，所以我們七天去了六個城市，大部分時間都在巴士上，而不是放鬆享受當地美食。"
  },
  {
    "word": "nonstop",
    "pos": "adj.",
    "cn_def": "不停的；直達的",
    "en_def": "continuing without stopping or resting",
    "sentence": "A: You look really tired today, so did you have a difficult day at the call center? B: Yes, it was {{BLANK}} work from the moment I arrived, because our internet service went down across the whole city, and hundreds of angry customers called, so I couldn't eat lunch until three o'clock.",
    "cn": "A：你今天看起來真的很累，你在客服中心度過了辛苦的一天嗎？ B：是的，從我一到就是【不停歇的】工作，因為我們的網路服務在全市都斷線了，數百位生氣的顧客打電話來，所以我到三點才能吃午餐。"
  },
  {
    "word": "overloaded",
    "pos": "adj.",
    "cn_def": "超載的；負擔過重的",
    "en_def": "given too much work or too much to carry or handle",
    "sentence": "A: Why did the company's online shopping website crash during the big sale last Friday night? B: The system was {{BLANK}} with too many visitors at the same time, because over two hundred thousand people tried to buy the discounted phones in the first ten minutes, so the technical team is now upgrading the servers.",
    "cn": "A：上週五晚上大特賣時，為什麼公司的網路購物網站當機了？ B：系統因為同時有太多訪客而【超載】，因為前十分鐘就有超過二十萬人想搶購打折手機，所以技術團隊現在正在升級伺服器。"
  },
  {
    "word": "snowed under",
    "pos": "adj.phr.",
    "cn_def": "忙得不可開交的",
    "en_def": "having so much work that you cannot deal with it all",
    "sentence": "A: Can you come to the farewell dinner for Mr. Lin at the Italian restaurant on Thursday evening? B: I'd really like to, but I'm {{BLANK}} with end-of-year reports right now, so I might have to stay in the office until nine, though I'll try to join you for dessert if I can.",
    "cn": "A：你星期四晚上能來義大利餐廳參加林先生的歡送晚宴嗎？ B：我真的很想去，但我現在被年終報告弄得【忙得不可開交】，所以我可能得在辦公室待到九點，不過如果可以的話，我會盡量趕去和你們一起吃甜點。"
  },
  {
    "word": "flat out",
    "pos": "adj.phr.",
    "cn_def": "全力以赴的；忙到極點的",
    "en_def": "working as hard or as fast as possible",
    "sentence": "A: Has the factory been able to produce enough air conditioners for all the stores during this extremely hot summer? B: The workers have been {{BLANK}} for weeks, running the machines day and night, but the demand is still higher than we expected, so we're planning to open a second production line in August.",
    "cn": "A：在這個極度炎熱的夏天，工廠有辦法為所有門市生產足夠的冷氣機嗎？ B：工人們好幾週來一直【全力以赴】，機器日夜運轉，但需求還是比我們預期的高，所以我們打算八月開設第二條生產線。"
  }
];

const MCQS = [
  {
    "q": "All the meeting rooms on the third floor are _____ until noon. Please use the small lounge for your call with the client.",
    "options": [
      "occupied",
      "frantic",
      "demanding",
      "time-consuming"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Many nurses at the city hospital feel _____ and exhausted. The management has promised to hire twenty more staff members next year.",
    "options": [
      "jam-packed",
      "time-consuming",
      "overworked",
      "nonstop"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Since the holiday sale began, our online team has been _____ with customer orders. They have worked until midnight every day.",
    "options": [
      "hectic",
      "swamped",
      "demanding",
      "time-consuming"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Monday mornings at the bank are always _____, with long lines of customers waiting. Things usually calm down after lunch.",
    "options": [
      "overworked",
      "pressed",
      "time-consuming",
      "hectic"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "There was a _____ rush to finish the project before the client arrived. Everyone ran between desks, printing and checking documents.",
    "options": [
      "occupied",
      "frantic",
      "overworked",
      "tight"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The manager made a _____ decision without reading the full report. Now the company must deal with the costly results.",
    "options": [
      "rushed",
      "occupied",
      "packed",
      "overworked"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "I'm a little _____ for time this afternoon, so let's keep the meeting short. We can discuss the details by email tomorrow.",
    "options": [
      "hectic",
      "active",
      "overworked",
      "pressed"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Working as a flight attendant is a _____ job that requires patience and energy. Staff often work long hours across different time zones.",
    "options": [
      "rushed",
      "packed",
      "demanding",
      "occupied"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Checking every invoice by hand is very _____. The new software can complete the same work in just a few minutes.",
    "options": [
      "time-consuming",
      "occupied",
      "frantic",
      "active"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Although Mr. Wu retired last year, he remains _____ in the local business community. He still gives advice to young business owners.",
    "options": [
      "overloaded",
      "jam-packed",
      "rushed",
      "active"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "As a sales representative, Amy is always _____, visiting clients across the city. She rarely spends more than an hour at her desk.",
    "options": [
      "time-consuming",
      "on the go",
      "tight",
      "crammed"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "I'm sorry, but the restaurant is _____ tonight because of a private party. Would you like to book a table for tomorrow evening instead?",
    "options": [
      "demanding",
      "overworked",
      "full",
      "rushed"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The concert hall was _____ with fans who had waited for hours to see the band. Some people had to stand at the back.",
    "options": [
      "demanding",
      "active",
      "time-consuming",
      "packed"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "This weekend's trade show program is _____ with seminars and workshops. Visitors should plan their day carefully before arriving.",
    "options": [
      "jam-packed",
      "rushed",
      "overworked",
      "frantic"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Our budget for the office party is very _____ this year. We may need to choose a cheaper restaurant than last time.",
    "options": [
      "hectic",
      "frantic",
      "tight",
      "occupied"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "After the merger, Peter's _____ increased so much that he worked every weekend. His manager finally agreed to hire an assistant for him.",
    "options": [
      "deadline",
      "workload",
      "schedule",
      "task"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Please check the train _____ before you leave for the conference. Some services have changed because of the holiday.",
    "options": [
      "workload",
      "commitment",
      "schedule",
      "assignment"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The _____ for submitting travel expense forms is the last Friday of each month. Late forms will be processed the following month.",
    "options": [
      "workload",
      "task",
      "commitment",
      "deadline"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Ms. Lee could not accept the new project because of a prior _____. She had already promised to lead a training course in Osaka.",
    "options": [
      "commitment",
      "workload",
      "deadline",
      "task"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Updating the customer database is a boring but important _____. The new intern will complete it by the end of the week.",
    "options": [
      "deadline",
      "task",
      "workload",
      "schedule"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Jason accepted a two-year _____ at the company's office in London. He will move there with his family in September.",
    "options": [
      "workload",
      "deadline",
      "schedule",
      "assignment"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Receptionists must be able to _____ by answering calls and greeting visitors at the same time. Staying calm is also important.",
    "options": [
      "juggle",
      "multitask",
      "rush",
      "prioritise"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Many working parents find it hard to _____ full-time jobs and childcare at the same time. Flexible working hours can help them a lot.",
    "options": [
      "juggle",
      "multitask",
      "rush",
      "prioritise"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Please don't _____ through the safety training video. Every new worker must understand the rules before using the machines.",
    "options": [
      "multitask",
      "juggle",
      "rush",
      "prioritise"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "With so many tasks this week, you need to _____ the most urgent ones. Start with the report that the client is waiting for.",
    "options": [
      "multitask",
      "prioritise",
      "rush",
      "juggle"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Our small storage room is _____ with old files and broken chairs. We plan to clear it out before the new staff arrive.",
    "options": [
      "demanding",
      "rushed",
      "active",
      "crammed"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The airline offers a _____ flight from Taipei to New York every evening. Passengers save time because the plane does not land in Tokyo.",
    "options": [
      "nonstop",
      "demanding",
      "overworked",
      "crammed"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The power system became _____ when every office turned on its air conditioner at once. The whole building lost electricity for an hour.",
    "options": [
      "demanding",
      "active",
      "overloaded",
      "rushed"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "I'm completely _____ with year-end reports right now. Could we move our lunch meeting with the supplier to next week?",
    "options": [
      "time-consuming",
      "snowed under",
      "demanding",
      "active"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The factory has been working _____ to finish the large order from Germany. The machines have not stopped for three days.",
    "options": [
      "occupied",
      "tight",
      "hectic",
      "flat out"
    ],
    "answer": 3,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "occupied": {
    "pos": "adj.",
    "en_def": "busy doing something, or being used by someone",
    "cn_def": "忙碌的；（座位、房間）有人使用的"
  },
  "overworked": {
    "pos": "adj.",
    "en_def": "having too much work to do",
    "cn_def": "工作過度的；過勞的"
  },
  "swamped": {
    "pos": "adj.",
    "en_def": "having so much work that you can hardly deal with it",
    "cn_def": "忙得不可開交的；應接不暇的"
  },
  "loaded": {
    "pos": "adj.",
    "en_def": "carrying or having a large amount of something",
    "cn_def": "裝滿的；堆滿的"
  },
  "stretched": {
    "pos": "adj.",
    "en_def": "having hardly enough time, money or people for what is needed",
    "cn_def": "（人力、資源）吃緊的"
  },
  "hectic": {
    "pos": "adj.",
    "en_def": "very busy and full of activity",
    "cn_def": "忙亂的；繁忙的"
  },
  "frantic": {
    "pos": "adj.",
    "en_def": "done in a hurried and worried way, without control",
    "cn_def": "慌亂的；瘋狂的"
  },
  "rushed": {
    "pos": "adj.",
    "en_def": "done too quickly, or having to hurry",
    "cn_def": "匆忙的；倉促的"
  },
  "pressed": {
    "pos": "adj.",
    "en_def": "not having enough of something, especially time",
    "cn_def": "（時間、金錢）緊迫的；不足的"
  },
  "demanding": {
    "pos": "adj.",
    "en_def": "needing a lot of time, energy or skill",
    "cn_def": "費力的；要求高的"
  },
  "time-consuming": {
    "pos": "adj.",
    "en_def": "taking a lot of time",
    "cn_def": "耗時的；費時的"
  },
  "engaged": {
    "pos": "adj.",
    "en_def": "busy; (of a phone line) being used",
    "cn_def": "忙碌的；（電話）佔線的"
  },
  "active": {
    "pos": "adj.",
    "en_def": "busy doing many things; full of energy",
    "cn_def": "活躍的；積極的"
  },
  "on the go": {
    "pos": "adj.phr.",
    "en_def": "very busy and moving around all the time",
    "cn_def": "忙個不停的"
  },
  "full": {
    "pos": "adj.",
    "en_def": "having no free space or time left",
    "cn_def": "滿的；排滿的"
  },
  "packed": {
    "pos": "adj.",
    "en_def": "very crowded; full of people or things",
    "cn_def": "擠滿的；塞滿的"
  },
  "jam-packed": {
    "pos": "adj.",
    "en_def": "extremely full or crowded",
    "cn_def": "擠得水洩不通的；塞得滿滿的"
  },
  "tight": {
    "pos": "adj.",
    "en_def": "with very little free time or money",
    "cn_def": "緊湊的；拮据的"
  },
  "burdened": {
    "pos": "adj.",
    "en_def": "having a heavy load of work, duties or problems",
    "cn_def": "負擔沉重的"
  },
  "workload": {
    "pos": "n.",
    "en_def": "the amount of work a person has to do",
    "cn_def": "工作量"
  },
  "schedule": {
    "pos": "n.",
    "en_def": "a plan that lists when things will happen",
    "cn_def": "時間表；行程表"
  },
  "deadline": {
    "pos": "n.",
    "en_def": "the latest time by which something must be done",
    "cn_def": "截止期限"
  },
  "commitment": {
    "pos": "n.",
    "en_def": "something you have promised to do, which takes your time",
    "cn_def": "承諾；應盡的責任"
  },
  "task": {
    "pos": "n.",
    "en_def": "a piece of work that must be done",
    "cn_def": "任務；工作"
  },
  "assignment": {
    "pos": "n.",
    "en_def": "a piece of work or job that someone is given to do",
    "cn_def": "（分派的）任務；派任工作"
  },
  "multitask": {
    "pos": "v.",
    "en_def": "to do several things at the same time",
    "cn_def": "同時處理多項工作"
  },
  "juggle": {
    "pos": "v.",
    "en_def": "to try to deal with several jobs or duties at the same time",
    "cn_def": "兼顧；同時應付"
  },
  "rush": {
    "pos": "v.",
    "en_def": "to move or do something very quickly",
    "cn_def": "趕；匆忙行事"
  },
  "prioritise": {
    "pos": "v.",
    "en_def": "to decide which things are most important and do them first",
    "cn_def": "排定優先順序"
  },
  "crammed": {
    "pos": "adj.",
    "en_def": "too full of people, things or activities",
    "cn_def": "塞滿的；擠滿的"
  },
  "nonstop": {
    "pos": "adj.",
    "en_def": "continuing without stopping or resting",
    "cn_def": "不停的；直達的"
  },
  "overloaded": {
    "pos": "adj.",
    "en_def": "given too much work or too much to carry or handle",
    "cn_def": "超載的；負擔過重的"
  },
  "snowed under": {
    "pos": "adj.phr.",
    "en_def": "having so much work that you cannot deal with it all",
    "cn_def": "忙得不可開交的"
  },
  "flat out": {
    "pos": "adj.phr.",
    "en_def": "working as hard or as fast as possible",
    "cn_def": "全力以赴的；忙到極點的"
  }
};

const EXTRA_GLOSSES = {};
