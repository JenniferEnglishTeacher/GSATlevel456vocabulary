// Topic 181 Quiz Data: Hurry 匆忙
// Source word list: https://www.examword.com/group-topic/hurry — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T181 - Hurry 匆忙",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "urgent",
    "pos": "adj.",
    "cn_def": "緊急的",
    "en_def": "needing attention or action right away",
    "sentence": "A: Why did the IT manager call everyone into the meeting room before lunch, even though we already had a team meeting this morning? B: The company website stopped working an hour ago and customers cannot place orders, so it is an {{BLANK}} problem that we have to fix before the afternoon sales event begins.",
    "cn": "A：為什麼資訊部經理在午餐前把大家叫進會議室，即使我們今天早上已經開過團隊會議了？ B：公司網站一小時前停擺，客戶無法下訂單，所以這是個【緊急的】問題，我們必須在下午的促銷活動開始前修好。"
  },
  {
    "word": "rush",
    "pos": "v.",
    "cn_def": "衝；趕緊去",
    "en_def": "to move or do something very quickly",
    "sentence": "A: Why did Kevin leave the office so suddenly without saying goodbye to anyone after the client meeting ended? B: His daughter's school called to say she felt sick, so he had to {{BLANK}} to the train station and pick her up before the school office closed at four o'clock.",
    "cn": "A：客戶會議結束後，Kevin為什麼沒跟任何人道別就突然離開辦公室？ B：他女兒的學校打電話來說她身體不舒服，所以他必須【趕】到火車站，在學校辦公室四點關門前去接她。"
  },
  {
    "word": "terrible",
    "pos": "adj.",
    "cn_def": "糟糕的；可怕的",
    "en_def": "very bad or unpleasant",
    "sentence": "A: How was your business trip to Singapore last week, and did you manage to meet all of the new suppliers? B: The meetings went well, but the weather was {{BLANK}} because it rained heavily every afternoon, and my flight home was delayed for six hours, so I arrived back exhausted.",
    "cn": "A：你上週去新加坡的出差怎麼樣？有見到所有新的供應商嗎？ B：會議進行得很順利，但天氣【糟透了】，因為每天下午都下大雨，而且我回程的班機延誤了六個小時，所以回到家時已經筋疲力盡。"
  },
  {
    "word": "loss",
    "pos": "n.",
    "cn_def": "損失",
    "en_def": "the fact of losing money, time, or something valuable",
    "sentence": "A: Why does the finance director look so worried after reading the sales report for the third quarter this year? B: Because the new store downtown opened late and sold far fewer products than expected, the company suffered a large {{BLANK}} of about two million dollars, and the board wants an explanation by Friday.",
    "cn": "A：財務總監看完今年第三季的銷售報告後，為什麼看起來這麼擔心？ B：因為市中心的新店開幕延遲，賣出的產品又比預期少很多，公司遭受了大約兩百萬美元的巨大【損失】，董事會要求在週五前提出解釋。"
  },
  {
    "word": "immediately",
    "pos": "adv.",
    "cn_def": "立刻",
    "en_def": "at once; without waiting",
    "sentence": "A: The printer on the third floor is making a strange noise and smoke is coming out of the back, so what should I do? B: Please turn it off and unplug it {{BLANK}}, then tell everyone nearby to step away while I call the building manager and the repair company to come and check it.",
    "cn": "A：三樓的印表機發出奇怪的聲音，背面還冒出煙，我該怎麼辦？ B：請【立刻】關掉並拔掉插頭，然後叫附近的人都退開，我會打電話請大樓管理員和維修公司來檢查。"
  },
  {
    "word": "guilty",
    "pos": "adj.",
    "cn_def": "內疚的",
    "en_def": "feeling bad because you did something wrong",
    "sentence": "A: Why did you stay late at the office last night when your shift ended at five o'clock as usual? B: I felt {{BLANK}} because I had left early on Monday and my teammates had to finish the client presentation without me, so I wanted to help them prepare the slides for tomorrow's meeting.",
    "cn": "A：你的班跟平常一樣五點就結束了，為什麼昨晚還留在辦公室到很晚？ B：我覺得很【內疚】，因為我週一提早離開，隊友們只好在沒有我的情況下完成客戶簡報，所以我想幫他們準備明天會議的投影片。"
  },
  {
    "word": "deadline",
    "pos": "n.",
    "cn_def": "截止期限",
    "en_def": "the latest time by which something must be finished",
    "sentence": "A: Do you think we can take a short break this afternoon and go to the café across the street for coffee? B: I'm sorry, but the {{BLANK}} for the annual budget report is five o'clock today, and our manager needs every department's numbers before she can send the final version to head office.",
    "cn": "A：你覺得我們今天下午可以休息一下，去對街的咖啡廳喝杯咖啡嗎？ B：抱歉，年度預算報告的【截止期限】是今天五點，我們經理需要拿到每個部門的數字，才能把最終版本寄給總公司。"
  },
  {
    "word": "put something off",
    "pos": "v.phr.",
    "cn_def": "拖延（某事）；延後",
    "en_def": "to delay doing something until a later time",
    "sentence": "A: Why are you starting the tax forms now when they are not due until the end of next month? B: Last year I waited until the final week and made many mistakes, so I learned that it is a bad idea to {{BLANK}} just because it seems boring or difficult at first.",
    "cn": "A：稅務表格要到下個月底才到期，你為什麼現在就開始填？ B：去年我等到最後一週才做，犯了很多錯，所以我學到只因為一開始看起來無聊或困難就【把事情往後拖】是個壞主意。"
  },
  {
    "word": "efficiency",
    "pos": "n.",
    "cn_def": "效率",
    "en_def": "the ability to work well without wasting time or money",
    "sentence": "A: Why did the factory manager decide to buy new packing machines when the old ones still work? B: The new machines can pack twice as many boxes per hour, so they will improve the {{BLANK}} of the whole production line and help us deliver orders to customers much faster during the busy season.",
    "cn": "A：舊的包裝機還能用，工廠經理為什麼決定買新的？ B：新機器每小時可以包裝兩倍數量的箱子，所以能提升整條生產線的【效率】，幫助我們在旺季更快把訂單送到客戶手中。"
  },
  {
    "word": "prioritize",
    "pos": "v.",
    "cn_def": "優先處理",
    "en_def": "to decide which tasks are most important and do them first",
    "sentence": "A: I have ten emails to answer, two reports to write, and a meeting at three, so where should I start? B: You should {{BLANK}} the report for the Tokyo client because it is due at noon, and then reply to the emails during the afternoon after the meeting has finished.",
    "cn": "A：我有十封電子郵件要回、兩份報告要寫，三點還有個會議，我該從哪裡開始？ B：你應該【優先處理】給東京客戶的報告，因為中午就要交，然後在下午會議結束後再回覆郵件。"
  },
  {
    "word": "time limit",
    "pos": "n.phr.",
    "cn_def": "時間限制",
    "en_def": "the amount of time allowed to do something",
    "sentence": "A: How long will each candidate have to give the sales presentation during tomorrow's job interviews at the main office? B: There is a strict {{BLANK}} of fifteen minutes for each person, so the candidates must plan their talks well and leave a few minutes at the end for questions from the managers.",
    "cn": "A：明天在總部的工作面試中，每位應徵者做業務簡報的時間有多長？ B：每個人有十五分鐘的嚴格【時間限制】，所以應徵者必須好好規劃講稿，並在最後留幾分鐘回答經理們的提問。"
  },
  {
    "word": "arrange",
    "pos": "v.",
    "cn_def": "安排",
    "en_def": "to plan or organize something",
    "sentence": "A: The clients from Germany are arriving on Thursday morning, but has anybody booked their transportation from the airport yet? B: Don't worry, I will {{BLANK}} a car to pick them up at the arrival gate and take them directly to their hotel, so they can rest before the dinner meeting.",
    "cn": "A：德國客戶週四早上抵達，但有人幫他們預訂從機場出發的交通了嗎？ B：別擔心，我會【安排】一輛車到入境大門接他們，直接送他們到飯店，好讓他們在晚餐會議前休息一下。"
  },
  {
    "word": "purpose",
    "pos": "n.",
    "cn_def": "目的",
    "en_def": "the reason why something is done",
    "sentence": "A: Why does the human resources department want every employee to attend the workshop next Wednesday afternoon? B: The main {{BLANK}} of the workshop is to teach staff how to manage their time better, because many people have been working late and still missing important deadlines this year.",
    "cn": "A：人資部門為什麼要每位員工參加下週三下午的工作坊？ B：這個工作坊的主要【目的】是教員工如何更好地管理時間，因為今年很多人都工作到很晚，卻仍然錯過重要的截止期限。"
  },
  {
    "word": "overestimate",
    "pos": "v.",
    "cn_def": "高估",
    "en_def": "to think something is bigger, better, or easier than it really is",
    "sentence": "A: Why did the marketing team need two extra weeks to finish the new product brochure for the trade show? B: They tend to {{BLANK}} how quickly they can work, so they promised it in one week, but the photos and translations took much longer than anyone had expected.",
    "cn": "A：行銷團隊為什麼需要多兩週才能完成商展用的新產品手冊？ B：他們往往會【高估】自己工作的速度，所以承諾一週完成，但照片和翻譯花的時間比大家預期的久得多。"
  },
  {
    "word": "unconsciously",
    "pos": "adv.",
    "cn_def": "無意識地",
    "en_def": "without knowing or noticing",
    "sentence": "A: Have you noticed that our sales director keeps tapping his pen on the table during every long meeting with the board? B: Yes, I think he does it {{BLANK}} when he is nervous or in a hurry, so he probably has no idea that the sound bothers the other people sitting around him.",
    "cn": "A：你有沒有注意到我們的業務總監在每次跟董事會開長會時，都一直用筆敲桌子？ B：有啊，我想他在緊張或趕時間時會【無意識地】這麼做，所以他大概不知道這個聲音會打擾坐在他周圍的人。"
  },
  {
    "word": "unforgettable",
    "pos": "adj.",
    "cn_def": "難忘的",
    "en_def": "so special that you will always remember it",
    "sentence": "A: How was the company trip to Japan that the sales department won as a reward for reaching its goals? B: It was {{BLANK}} because we saw Mount Fuji on a clear day, ate amazing food in Kyoto, and spent our last evening relaxing in a traditional hot spring hotel together.",
    "cn": "A：業務部因達成目標而贏得的日本員工旅遊怎麼樣？ B：真是【難忘】，因為我們在晴朗的日子看到富士山，在京都吃到很棒的美食，最後一晚還一起在傳統溫泉旅館放鬆。"
  },
  {
    "word": "rectify",
    "pos": "v.",
    "cn_def": "糾正；修正",
    "en_def": "to correct something that is wrong",
    "sentence": "A: A customer just called to say that we charged her twice for the same order last week, so what should I tell her? B: Apologize first, and then promise that we will {{BLANK}} the mistake today by returning the extra payment to her credit card before the end of the business day.",
    "cn": "A：有位客戶剛打電話來說，我們上週同一筆訂單向她收了兩次錢，我該怎麼跟她說？ B：先道歉，然後保證我們今天會在下班前把多收的款項退回她的信用卡，【糾正】這個錯誤。"
  },
  {
    "word": "trifling",
    "pos": "adj.",
    "cn_def": "微不足道的；瑣碎的",
    "en_def": "small and not important",
    "sentence": "A: Should I report the small scratch on the side of the company car to the office manager after I return it? B: It seems like a {{BLANK}} matter, but you should still mention it, because the rental company might charge us later if nobody writes it down when the car comes back.",
    "cn": "A：我還車之後，應該向辦公室經理報告公司車側面的小刮痕嗎？ B：這看起來是件【微不足道的】小事，但你還是應該提一下，因為如果車子還回來時沒人記錄，租車公司之後可能會向我們收費。"
  },
  {
    "word": "stick",
    "pos": "v.",
    "cn_def": "堅持；遵守",
    "en_def": "to continue with a plan or decision and not change it",
    "sentence": "A: The client wants to add three new features to the website, but can we still finish it by the end of this month? B: Only if we {{BLANK}} to the original plan and save the new features for the second version, because there is simply not enough time or staff to do everything now.",
    "cn": "A：客戶想在網站上增加三個新功能，我們還能在這個月底前完成嗎？ B：只有我們【堅持】原本的計畫，把新功能留到第二版才行，因為現在根本沒有足夠的時間或人手做完所有事情。"
  },
  {
    "word": "catch",
    "pos": "v.",
    "cn_def": "趕上（車、飛機等）",
    "en_def": "to get on a bus, train, or plane in time",
    "sentence": "A: Why are you packing up your things so early when the office doesn't close for another hour? B: I need to {{BLANK}} the six o'clock train to Taichung for a client dinner tonight, and if I leave any later, the traffic to the station will be too heavy.",
    "cn": "A：辦公室還要一小時才關，你為什麼這麼早就在收東西？ B：我得【趕上】六點往台中的火車，今晚要和客戶吃晚餐，如果我再晚一點出發，往車站的路上交通會太塞。"
  },
  {
    "word": "miss",
    "pos": "v.",
    "cn_def": "錯過",
    "en_def": "to be too late for a bus, train, plane, or event",
    "sentence": "A: Why did Ms. Chen join the video conference from the airport instead of from the meeting room this morning? B: Her taxi got stuck in heavy traffic, and if you arrive at the gate even five minutes late, you will {{BLANK}} your flight, which is exactly what happened, so she is waiting for the next one at noon.",
    "cn": "A：陳小姐今天早上為什麼是從機場而不是會議室參加視訊會議？ B：她的計程車遇到嚴重塞車，而只要晚五分鐘到登機門，就會【錯過】班機，這正是她遇到的情況，所以她正在等中午的下一班。"
  },
  {
    "word": "take time",
    "pos": "v.phr.",
    "cn_def": "需要時間；花時間",
    "en_def": "to need a long period of time",
    "sentence": "A: Our new assistant made several mistakes in the sales database this week, so should we look for someone with more experience? B: Learning a new system and all our company rules will {{BLANK}}, so let's give her a few more weeks of training before we make any decisions about her position.",
    "cn": "A：我們的新助理這週在銷售資料庫裡犯了好幾個錯，我們該找更有經驗的人嗎？ B：學習新系統和公司所有規定都【需要時間】，所以在決定她的職位之前，我們再給她幾週的訓練吧。"
  },
  {
    "word": "preparations",
    "pos": "n.",
    "cn_def": "準備工作",
    "en_def": "things you do to get ready for an event",
    "sentence": "A: The international trade fair starts in only three days, so is our booth ready for all the visitors yet? B: Most of the {{BLANK}} are finished, but we are still waiting for the printed posters and product samples, which the delivery company promised to bring to the exhibition hall tomorrow morning.",
    "cn": "A：國際貿易展只剩三天就開始了，我們的攤位準備好迎接所有訪客了嗎？ B：大部分的【準備工作】都完成了，但我們還在等印好的海報和產品樣品，貨運公司答應明天早上送到展覽館。"
  },
  {
    "word": "careful",
    "pos": "adj.",
    "cn_def": "小心的；仔細的",
    "en_def": "giving attention to avoid mistakes or danger",
    "sentence": "A: I need to send the price list to all of our overseas customers before lunch, so can you give me any advice? B: Be {{BLANK}} when you check the numbers, because even when you are in a hurry, one small mistake in the price could cost the company a lot of money and trust.",
    "cn": "A：我需要在午餐前把價目表寄給所有海外客戶，你能給我一些建議嗎？ B：檢查數字時要【小心】，因為就算你在趕時間，價格上一個小錯誤都可能讓公司損失很多錢和信任。"
  },
  {
    "word": "considerate",
    "pos": "adj.",
    "cn_def": "體貼的",
    "en_def": "thinking about other people's feelings and needs",
    "sentence": "A: Why is everyone in the office so happy to work with the new team leader who joined us last month? B: She is very {{BLANK}}, because she always asks how we are doing, gives us extra time when our children are sick, and never sends work emails late at night or on weekends.",
    "cn": "A：辦公室裡的大家為什麼都這麼喜歡和上個月加入的新組長共事？ B：她非常【體貼】，因為她總是關心我們的近況，在孩子生病時多給我們時間，也從不在深夜或週末寄工作郵件。"
  },
  {
    "word": "logical",
    "pos": "adj.",
    "cn_def": "合乎邏輯的；合理的",
    "en_def": "reasonable and sensible, based on clear thinking",
    "sentence": "A: Do you think the manager will agree with our plan to move the warehouse closer to the port next year? B: I think so, because it is the most {{BLANK}} choice: shipping costs will fall, deliveries will be faster, and the rent near the port is actually lower than what we pay now.",
    "cn": "A：你覺得經理會同意我們明年把倉庫搬到靠近港口的計畫嗎？ B：我想會，因為這是最【合乎邏輯的】選擇：運費會下降、送貨會更快，而且港口附近的租金其實比我們現在付的還低。"
  },
  {
    "word": "preoccupied",
    "pos": "adj.",
    "cn_def": "心事重重的；全神貫注的",
    "en_def": "thinking about something so much that you do not notice other things",
    "sentence": "A: Why didn't Tom answer when I said good morning to him in the elevator a few minutes ago? B: He is {{BLANK}} with the big presentation to the bank this afternoon, so he probably didn't even hear you, and I'm sure he will apologize once the meeting is over.",
    "cn": "A：幾分鐘前我在電梯裡跟Tom說早安，他為什麼沒回應？ B：他正【全神貫注於】今天下午要對銀行做的大型簡報，所以他大概根本沒聽到你，我相信會議一結束他就會道歉。"
  },
  {
    "word": "stressed",
    "pos": "adj.",
    "cn_def": "有壓力的；緊張的",
    "en_def": "worried and nervous because of too much work or pressure",
    "sentence": "A: You look tired today, so is everything all right with the new project that you are managing for the hospital? B: I feel quite {{BLANK}} because the client changed the design twice this week, and we still have to finish everything before the hospital opens its new wing next month.",
    "cn": "A：你今天看起來很累，你負責的那個醫院新專案一切都還好嗎？ B：我覺得很【有壓力】，因為客戶這週改了兩次設計，而我們還得在醫院下個月新大樓啟用前完成所有工作。"
  },
  {
    "word": "acceptable",
    "pos": "adj.",
    "cn_def": "可接受的",
    "en_def": "good enough to be allowed or agreed to",
    "sentence": "A: The supplier says it cannot deliver the chairs by Monday, but it can send them by Wednesday, so is that okay? B: Wednesday is {{BLANK}} as long as the chairs arrive before noon, because the new office opens on Thursday and the workers need the afternoon to set everything up.",
    "cn": "A：供應商說週一前無法交貨椅子，但週三可以送到，這樣可以嗎？ B：只要椅子在中午前送到，週三是【可接受的】，因為新辦公室週四開幕，工人需要整個下午來佈置。"
  },
  {
    "word": "perspective",
    "pos": "n.",
    "cn_def": "觀點；看法",
    "en_def": "a way of thinking about something",
    "sentence": "A: Why did you invite a customer to speak at our product design meeting this morning instead of only our engineers? B: We wanted to hear a different {{BLANK}}, because engineers often focus on technical details, while customers can tell us what is actually easy or difficult to use at home.",
    "cn": "A：你今天早上為什麼邀請一位顧客到產品設計會議上發言，而不是只找我們的工程師？ B：我們想聽聽不同的【觀點】，因為工程師常常專注在技術細節上，而顧客能告訴我們在家裡實際使用時哪些容易、哪些困難。"
  },
  {
    "word": "insure",
    "pos": "v.",
    "cn_def": "為…投保",
    "en_def": "to buy insurance so you get money if something is lost or damaged",
    "sentence": "A: We are shipping the new laboratory equipment from Germany next month, so is there anything else we need to do? B: We should {{BLANK}} the whole shipment before it leaves the factory, because the machines are very expensive, and the company would lose a lot of money if anything were damaged at sea.",
    "cn": "A：我們下個月要從德國運送新的實驗室設備，還有什麼需要做的嗎？ B：我們應該在整批貨離開工廠前為它【投保】，因為這些機器非常昂貴，如果在海上有任何損壞，公司會損失很多錢。"
  },
  {
    "word": "previously",
    "pos": "adv.",
    "cn_def": "先前；以前",
    "en_def": "before now; earlier",
    "sentence": "A: Does the new marketing manager have any experience with the Asian market, or will she need extra training? B: She {{BLANK}} worked for a large cosmetics company in Seoul for five years, so she already understands what customers in this region want and how to reach them online.",
    "cn": "A：新的行銷經理有亞洲市場的經驗嗎？還是她需要額外訓練？ B：她【先前】在首爾一家大型化妝品公司工作了五年，所以她已經了解這個地區的顧客想要什麼，以及如何在網路上接觸他們。"
  },
  {
    "word": "well-organized",
    "pos": "adj.",
    "cn_def": "井然有序的；組織良好的",
    "en_def": "planned and arranged in a clear, sensible way",
    "sentence": "A: How was the annual sales conference in Kaohsiung that you attended last weekend with the rest of the team? B: It was very {{BLANK}}, because every session started on time, the speakers had clear handouts, and the staff helped us find our rooms quickly when we arrived at the hotel.",
    "cn": "A：你上週末和團隊一起參加的高雄年度業務大會怎麼樣？ B：非常【井然有序】，因為每場會議都準時開始，講者都有清楚的講義，而且我們抵達飯店時工作人員很快就幫我們找到房間。"
  },
  {
    "word": "orderly",
    "pos": "adj.",
    "cn_def": "有秩序的；整齊的",
    "en_def": "arranged or done in a neat, calm way",
    "sentence": "A: There will be more than five hundred guests at the product launch, so how can we stop the entrance from getting crowded? B: We will put up signs and ask staff to guide guests into lines, so that everyone can enter the hall in an {{BLANK}} way without pushing or waiting too long.",
    "cn": "A：產品發表會將有超過五百位來賓，我們要怎麼避免入口擁擠？ B：我們會設置指示牌，並請工作人員引導來賓排隊，讓大家能以【有秩序的】方式進入會場，不會推擠或等太久。"
  },
  {
    "word": "deny",
    "pos": "v.",
    "cn_def": "否認",
    "en_def": "to say that something is not true",
    "sentence": "A: A local newspaper reported that our company is planning to close the factory in Tainan, so is that true? B: The CEO will {{BLANK}} the report at this afternoon's press conference, because the factory is actually expanding and will hire about one hundred new workers next spring.",
    "cn": "A：一家地方報紙報導我們公司打算關閉台南的工廠，這是真的嗎？ B：執行長會在今天下午的記者會上【否認】這則報導，因為工廠其實正在擴廠，明年春天還會招募大約一百名新員工。"
  },
  {
    "word": "relief",
    "pos": "n.",
    "cn_def": "寬慰；鬆一口氣",
    "en_def": "a happy feeling when something bad or worrying ends",
    "sentence": "A: How did the team react when the client finally signed the contract after three months of difficult negotiations? B: It was a huge {{BLANK}} for everyone, because we had worked so many late nights on the proposal, and our manager even took the whole team out for dinner to celebrate.",
    "cn": "A：經過三個月艱難的談判，客戶終於簽約時，團隊有什麼反應？ B：對大家來說真是大大【鬆了一口氣】，因為我們為了這份提案熬了很多夜，經理甚至帶全隊去吃晚餐慶祝。"
  }
];

const MCQS = [
  {
    "q": "The client needs the revised contract by noon today. Please treat this request as _____ and send it before lunch.",
    "options": [
      "considerate",
      "urgent",
      "logical",
      "unforgettable"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Passengers do not need to _____ to the gate. The airline has announced that the flight will be delayed by two hours.",
    "options": [
      "rush",
      "deny",
      "arrange",
      "insure"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The hotel received many complaints about its _____ service last month. Guests waited over an hour for room service and found dirty towels.",
    "options": [
      "orderly",
      "terrible",
      "logical",
      "considerate"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The airline reported a large _____ this year because fuel prices rose sharply. It plans to cut several routes to save money.",
    "options": [
      "relief",
      "purpose",
      "perspective",
      "loss"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "All staff must leave the building _____ when the fire alarm sounds. Do not stop to collect bags or turn off computers.",
    "options": [
      "previously",
      "immediately",
      "unconsciously",
      "rarely"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Sarah felt _____ about missing her colleague's farewell party. She sent him a card and a small gift the next day to apologize.",
    "options": [
      "logical",
      "orderly",
      "guilty",
      "urgent"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The _____ for submitting travel expense claims is the fifth of each month. Late claims will be processed the following month.",
    "options": [
      "relief",
      "loss",
      "perspective",
      "deadline"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The new software has greatly improved the _____ of our accounting team. Tasks that took three days now take only one afternoon.",
    "options": [
      "relief",
      "loss",
      "efficiency",
      "deadline"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "During the busy season, staff should _____ orders from long-term customers. Smaller requests can be handled once those are shipped.",
    "options": [
      "deny",
      "prioritize",
      "overestimate",
      "rectify"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Could you _____ a meeting room for twelve people on Friday afternoon? The visitors from Osaka will need a projector as well.",
    "options": [
      "arrange",
      "deny",
      "rectify",
      "miss"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The _____ of this survey is to learn how customers feel about our new delivery service. All answers will remain private.",
    "options": [
      "loss",
      "relief",
      "deadline",
      "purpose"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Many new business owners _____ how much they will sell in the first year. As a result, they often run out of cash quickly.",
    "options": [
      "rectify",
      "insure",
      "overestimate",
      "deny"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The guests described the harbor dinner cruise as _____. Many of them said it was the best evening of their entire trip.",
    "options": [
      "unforgettable",
      "guilty",
      "stressed",
      "urgent"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The bank promised to _____ the error in my account statement within three business days. A manager also called to apologize.",
    "options": [
      "overestimate",
      "rush",
      "rectify",
      "catch"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "To finish the renovation on time, we must _____ to the original schedule. Any changes will add both cost and delays.",
    "options": [
      "stick",
      "rush",
      "catch",
      "deny"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "If you leave the office now, you can still _____ the last bus to the airport. It departs from the main station at 9:40.",
    "options": [
      "miss",
      "stick",
      "catch",
      "deny"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Please arrive at the conference center early tomorrow. If you come late, you will _____ the opening speech by the CEO.",
    "options": [
      "catch",
      "rush",
      "arrange",
      "miss"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Please be _____ when you carry the glass display cases into the showroom. They are very expensive and break easily.",
    "options": [
      "guilty",
      "careful",
      "urgent",
      "terrible"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Our manager is very _____ toward new employees. She always takes time to answer their questions and explain company rules.",
    "options": [
      "considerate",
      "terrible",
      "preoccupied",
      "logical"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Hiring more staff before the holiday season is a _____ decision. Order volume always doubles in December.",
    "options": [
      "guilty",
      "stressed",
      "terrible",
      "logical"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Daniel seemed _____ during lunch and barely spoke to anyone. He was worried about the budget meeting scheduled for that afternoon.",
    "options": [
      "considerate",
      "orderly",
      "preoccupied",
      "acceptable"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Employees often feel _____ when they have too many deadlines at once. The company now offers free yoga classes to help them relax.",
    "options": [
      "orderly",
      "stressed",
      "logical",
      "acceptable"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "A delivery time of five working days is _____ for most of our customers. However, some business clients may request faster shipping.",
    "options": [
      "acceptable",
      "guilty",
      "preoccupied",
      "stressed"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Traveling abroad for work gave Jason a new _____ on how other cultures do business. He now shares these ideas with his team.",
    "options": [
      "loss",
      "deadline",
      "efficiency",
      "perspective"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The training workshop was _____, with clear materials and short breaks every hour. Participants said they learned a lot in one day.",
    "options": [
      "guilty",
      "well-organized",
      "preoccupied",
      "stressed"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The museum staff asked visitors to leave the building in a calm and _____ manner. Nobody pushed, and everyone was outside within ten minutes.",
    "options": [
      "guilty",
      "terrible",
      "orderly",
      "preoccupied"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The company spokesperson would neither confirm nor _____ the rumors about the merger. More details will be shared next week.",
    "options": [
      "rectify",
      "insure",
      "arrange",
      "deny"
    ],
    "answer": 3,
    "vocabIndex": 34
  },
  {
    "q": "It was a great _____ to hear that nobody was hurt in the warehouse fire. The damage to the building was also quite small.",
    "options": [
      "relief",
      "loss",
      "purpose",
      "deadline"
    ],
    "answer": 0,
    "vocabIndex": 35
  },
  {
    "q": "Final _____ for the grand opening of the new store are almost complete. The shelves are full, and the staff uniforms have arrived.",
    "options": [
      "purposes",
      "losses",
      "preparations",
      "deadlines"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The shipping company advised us to _____ the artwork before sending it overseas. A full policy costs only two percent of its value.",
    "options": [
      "deny",
      "insure",
      "miss",
      "rush"
    ],
    "answer": 1,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "urgent": {
    "pos": "adj.",
    "en_def": "needing attention or action right away",
    "cn_def": "緊急的"
  },
  "rush": {
    "pos": "v.",
    "en_def": "to move or do something very quickly",
    "cn_def": "衝；趕緊去"
  },
  "terrible": {
    "pos": "adj.",
    "en_def": "very bad or unpleasant",
    "cn_def": "糟糕的；可怕的"
  },
  "loss": {
    "pos": "n.",
    "en_def": "the fact of losing money, time, or something valuable",
    "cn_def": "損失"
  },
  "immediately": {
    "pos": "adv.",
    "en_def": "at once; without waiting",
    "cn_def": "立刻"
  },
  "guilty": {
    "pos": "adj.",
    "en_def": "feeling bad because you did something wrong",
    "cn_def": "內疚的"
  },
  "deadline": {
    "pos": "n.",
    "en_def": "the latest time by which something must be finished",
    "cn_def": "截止期限"
  },
  "put something off": {
    "pos": "v.phr.",
    "en_def": "to delay doing something until a later time",
    "cn_def": "拖延（某事）；延後"
  },
  "efficiency": {
    "pos": "n.",
    "en_def": "the ability to work well without wasting time or money",
    "cn_def": "效率"
  },
  "prioritize": {
    "pos": "v.",
    "en_def": "to decide which tasks are most important and do them first",
    "cn_def": "優先處理"
  },
  "time limit": {
    "pos": "n.phr.",
    "en_def": "the amount of time allowed to do something",
    "cn_def": "時間限制"
  },
  "arrange": {
    "pos": "v.",
    "en_def": "to plan or organize something",
    "cn_def": "安排"
  },
  "purpose": {
    "pos": "n.",
    "en_def": "the reason why something is done",
    "cn_def": "目的"
  },
  "overestimate": {
    "pos": "v.",
    "en_def": "to think something is bigger, better, or easier than it really is",
    "cn_def": "高估"
  },
  "unconsciously": {
    "pos": "adv.",
    "en_def": "without knowing or noticing",
    "cn_def": "無意識地"
  },
  "unforgettable": {
    "pos": "adj.",
    "en_def": "so special that you will always remember it",
    "cn_def": "難忘的"
  },
  "rectify": {
    "pos": "v.",
    "en_def": "to correct something that is wrong",
    "cn_def": "糾正；修正"
  },
  "trifling": {
    "pos": "adj.",
    "en_def": "small and not important",
    "cn_def": "微不足道的；瑣碎的"
  },
  "stick": {
    "pos": "v.",
    "en_def": "to continue with a plan or decision and not change it",
    "cn_def": "堅持；遵守"
  },
  "catch": {
    "pos": "v.",
    "en_def": "to get on a bus, train, or plane in time",
    "cn_def": "趕上（車、飛機等）"
  },
  "miss": {
    "pos": "v.",
    "en_def": "to be too late for a bus, train, plane, or event",
    "cn_def": "錯過"
  },
  "take time": {
    "pos": "v.phr.",
    "en_def": "to need a long period of time",
    "cn_def": "需要時間；花時間"
  },
  "preparations": {
    "pos": "n.",
    "en_def": "things you do to get ready for an event",
    "cn_def": "準備工作"
  },
  "careful": {
    "pos": "adj.",
    "en_def": "giving attention to avoid mistakes or danger",
    "cn_def": "小心的；仔細的"
  },
  "considerate": {
    "pos": "adj.",
    "en_def": "thinking about other people's feelings and needs",
    "cn_def": "體貼的"
  },
  "logical": {
    "pos": "adj.",
    "en_def": "reasonable and sensible, based on clear thinking",
    "cn_def": "合乎邏輯的；合理的"
  },
  "preoccupied": {
    "pos": "adj.",
    "en_def": "thinking about something so much that you do not notice other things",
    "cn_def": "心事重重的；全神貫注的"
  },
  "stressed": {
    "pos": "adj.",
    "en_def": "worried and nervous because of too much work or pressure",
    "cn_def": "有壓力的；緊張的"
  },
  "acceptable": {
    "pos": "adj.",
    "en_def": "good enough to be allowed or agreed to",
    "cn_def": "可接受的"
  },
  "perspective": {
    "pos": "n.",
    "en_def": "a way of thinking about something",
    "cn_def": "觀點；看法"
  },
  "insure": {
    "pos": "v.",
    "en_def": "to buy insurance so you get money if something is lost or damaged",
    "cn_def": "為…投保"
  },
  "previously": {
    "pos": "adv.",
    "en_def": "before now; earlier",
    "cn_def": "先前；以前"
  },
  "well-organized": {
    "pos": "adj.",
    "en_def": "planned and arranged in a clear, sensible way",
    "cn_def": "井然有序的；組織良好的"
  },
  "orderly": {
    "pos": "adj.",
    "en_def": "arranged or done in a neat, calm way",
    "cn_def": "有秩序的；整齊的"
  },
  "deny": {
    "pos": "v.",
    "en_def": "to say that something is not true",
    "cn_def": "否認"
  },
  "relief": {
    "pos": "n.",
    "en_def": "a happy feeling when something bad or worrying ends",
    "cn_def": "寬慰；鬆一口氣"
  }
};

const EXTRA_GLOSSES = {};
