// Topic 307 Quiz Data: Process 過程
// Source word list: https://www.examword.com/group-topic/process — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T307 - Process 過程",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "procedure",
    "pos": "n.",
    "cn_def": "程序；手續",
    "en_def": "an official or accepted way of doing something",
    "sentence": "A: I lost my company laptop on the train last night, and it has all of our client files on it, so what should I do first? B: Don't panic; follow the standard security {{BLANK}} by reporting the loss to the IT department immediately, and then they will lock your account and change your passwords.",
    "cn": "A：我昨晚在火車上弄丟了公司的筆電，裡面有我們所有客戶的檔案，我應該先做什麼？ B：別慌；遵守標準的安全【程序】，立刻向資訊部門通報遺失，然後他們會鎖定你的帳號並更改你的密碼。"
  },
  {
    "word": "step",
    "pos": "n.",
    "cn_def": "步驟",
    "en_def": "one action in a series of actions",
    "sentence": "A: I've never set up an online store before, and I'm worried it will take weeks before we can start selling our handmade bags, so where do I begin? B: The first {{BLANK}} is choosing a simple website platform, and after that you can upload photos, add prices, and test the payment page with a friend.",
    "cn": "A：我從來沒有架設過網路商店，我擔心要過好幾週我們才能開始賣手工包包，我該從哪裡開始？ B：第一個【步驟】是選一個簡單的網站平台，之後你可以上傳照片、加上價格，並和朋友一起測試付款頁面。"
  },
  {
    "word": "stage",
    "pos": "n.",
    "cn_def": "階段",
    "en_def": "a particular point or period in a process",
    "sentence": "A: Has the design team finished the new office layout yet, or are they still talking to the builders about the cost of the meeting rooms? B: They are only at an early {{BLANK}} of planning right now, so the final drawings probably won't be ready until the end of next month.",
    "cn": "A：設計團隊已經完成新辦公室的配置了嗎？還是他們還在和施工單位討論會議室的費用？ B：他們現在還只在規劃的早期【階段】，所以最終的圖面大概要到下個月底才會好。"
  },
  {
    "word": "phase",
    "pos": "n.",
    "cn_def": "時期；階段",
    "en_def": "one part of a longer project or change",
    "sentence": "A: When will the employees on the third floor move into the new building across the street, since everyone keeps asking me about it? B: The move will happen in two parts, and the first {{BLANK}} starts next Monday with the sales department, while the other teams will follow in March.",
    "cn": "A：三樓的員工什麼時候會搬進對街的新大樓？大家一直在問我這件事。 B：搬遷會分成兩部分進行，第一【期】下週一從業務部開始，其他團隊則會在三月跟進。"
  },
  {
    "word": "method",
    "pos": "n.",
    "cn_def": "方法；方式",
    "en_def": "a particular way of doing something",
    "sentence": "A: Our customers keep complaining that it takes too long to pay at the front desk, especially during the busy lunch hour, so what can we change? B: We should offer a faster payment {{BLANK}}, such as mobile phone payment, because it lets people pay in a few seconds without waiting for cash or change.",
    "cn": "A：我們的顧客一直抱怨在櫃台付款要花太久時間，尤其是在忙碌的午餐時段，我們可以改變什麼？ B：我們應該提供更快速的付款【方式】，例如手機支付，因為它讓人們幾秒鐘就能付款，不必等著拿現金或找零。"
  },
  {
    "word": "approach",
    "pos": "n.",
    "cn_def": "方法；處理方式",
    "en_def": "a way of dealing with a situation or problem",
    "sentence": "A: The new manager seems very different from the old one, and I noticed she asks the staff for ideas in every single meeting, doesn't she? B: Yes, she has a friendly and open {{BLANK}} to leadership, so people feel comfortable sharing their opinions, and the team has already solved several old problems.",
    "cn": "A：新經理看起來和以前的經理很不一樣，我注意到她每次開會都會詢問員工的想法，對吧？ B：對，她的領導【方式】友善又開放，所以大家能自在地分享意見，團隊也已經解決了好幾個老問題。"
  },
  {
    "word": "technique",
    "pos": "n.",
    "cn_def": "技巧",
    "en_def": "a special skill or way of doing something",
    "sentence": "A: How did you manage to stay so calm during that difficult phone call with the angry customer this morning, when I would have been very nervous? B: I learned a simple breathing {{BLANK}} at a training workshop last year, and it helps me relax and listen carefully before I answer anyone who is upset.",
    "cn": "A：今天早上和那位生氣的顧客通那通棘手的電話時，你是怎麼保持這麼冷靜的？換作是我一定很緊張。 B：我去年在一場培訓工作坊學到一個簡單的呼吸【技巧】，它幫助我放鬆，在回應任何不高興的人之前先仔細聆聽。"
  },
  {
    "word": "strategy",
    "pos": "n.",
    "cn_def": "策略",
    "en_def": "a careful plan to reach a goal",
    "sentence": "A: Sales of our coffee machines dropped last quarter because a cheaper brand opened a shop in the same mall, so what are we going to do about it? B: The marketing team is creating a new {{BLANK}} that focuses on our better quality, longer warranty, and free cleaning service to win customers back.",
    "cn": "A：上一季我們的咖啡機銷量下滑，因為一個更便宜的品牌在同一間購物中心開了店，我們要怎麼因應？ B：行銷團隊正在制定新的【策略】，主打我們更好的品質、更長的保固和免費清潔服務，把顧客贏回來。"
  },
  {
    "word": "system",
    "pos": "n.",
    "cn_def": "系統",
    "en_def": "a set of connected parts or methods that work together",
    "sentence": "A: Why did it take so long to find the order details for that customer who called this afternoon asking about her missing package? B: Our computer {{BLANK}} was very slow because the technicians were installing an update, so I had to search through the paper records in the filing cabinet instead.",
    "cn": "A：今天下午那位打電話來詢問遺失包裹的顧客，為什麼找她的訂單資料要花那麼久？ B：因為技術人員正在安裝更新，我們的電腦【系統】非常慢，所以我只好改去檔案櫃翻紙本紀錄。"
  },
  {
    "word": "routine",
    "pos": "n.",
    "cn_def": "例行公事；慣例",
    "en_def": "the usual order in which you do things every day",
    "sentence": "A: You always seem so organized when you arrive at the office, even on busy Monday mornings when everyone else is rushing around, so what's your secret? B: I have a simple morning {{BLANK}}: I check my emails over breakfast, plan my three main tasks on the train, and arrive fifteen minutes early.",
    "cn": "A：你每次到辦公室時看起來都很有條理，即使在大家都手忙腳亂的週一早上也一樣，你的秘訣是什麼？ B：我有一套簡單的早晨【例行公事】：吃早餐時查看電子郵件，在火車上規劃三項主要工作，然後提早十五分鐘到。"
  },
  {
    "word": "cycle",
    "pos": "n.",
    "cn_def": "週期；循環",
    "en_def": "a series of events that happen again and again in the same order",
    "sentence": "A: Why does the accounting department always look so stressed at the end of every month, while they seem quite relaxed in the middle weeks? B: Their billing {{BLANK}} closes on the last working day, so they must check hundreds of invoices and send them to clients before the deadline arrives.",
    "cn": "A：為什麼會計部每到月底總是看起來壓力很大，而月中那幾週卻顯得相當輕鬆？ B：他們的帳單【週期】在最後一個工作日結束，所以他們必須在截止期限前核對數百張發票並寄給客戶。"
  },
  {
    "word": "sequence",
    "pos": "n.",
    "cn_def": "順序",
    "en_def": "the order in which things happen or are arranged",
    "sentence": "A: The presentation slides you sent me look great, but the information about prices comes before the product introduction, which feels a little strange to me, doesn't it? B: You're right, so I will change the {{BLANK}} of the slides tonight, putting the product features first and the prices near the end.",
    "cn": "A：你寄給我的簡報投影片看起來很棒，但價格資訊放在產品介紹之前，我覺得有點奇怪，不是嗎？ B：你說得對，所以我今晚會調整投影片的【順序】，把產品特色放在前面，價格放在接近結尾的地方。"
  },
  {
    "word": "progress",
    "pos": "n.",
    "cn_def": "進展",
    "en_def": "movement toward finishing or improving something",
    "sentence": "A: The director wants an update on the new hotel construction before the board meeting tomorrow, so can you tell me how things are going at the site? B: The builders are making good {{BLANK}}, and even though it rained for three days last week, they finished the roof and started on the windows.",
    "cn": "A：董事想在明天的董事會之前了解新飯店工程的最新情況，你可以告訴我工地的狀況嗎？ B：施工人員的【進展】很順利，雖然上週下了三天雨，他們還是完成了屋頂並開始裝窗戶。"
  },
  {
    "word": "development",
    "pos": "n.",
    "cn_def": "開發；發展",
    "en_def": "the process of creating or growing something new",
    "sentence": "A: How long will it take before customers can actually download the new travel app that the company announced at the trade show in June? B: The app is still in {{BLANK}}, and the programmers need about four more months to fix the bugs, add the map feature, and test everything carefully.",
    "cn": "A：公司在六月商展上宣布的新旅遊應用程式，還要多久顧客才能真正下載？ B：這個應用程式還在【開發】中，程式設計師大約還需要四個月來修正錯誤、加入地圖功能，並仔細測試所有東西。"
  },
  {
    "word": "transition",
    "pos": "n.",
    "cn_def": "過渡；轉變",
    "en_def": "a change from one state or system to another",
    "sentence": "A: I heard our team will start using the new accounting software next month, but many of us still don't know how to use it, right? B: Yes, so the manager has planned a two-week {{BLANK}} period with daily training sessions, and we can keep using the old program until everyone feels confident.",
    "cn": "A：我聽說我們團隊下個月要開始使用新的會計軟體，但我們很多人還不知道怎麼用，對吧？ B：對，所以經理安排了為期兩週的【過渡】期，每天都有培訓課程，在大家都有把握之前，我們可以繼續使用舊程式。"
  },
  {
    "word": "transformation",
    "pos": "n.",
    "cn_def": "徹底改變；轉型",
    "en_def": "a complete change in the appearance or character of something",
    "sentence": "A: Have you seen the old shopping street downtown recently, since I remember it was so dirty and quiet a few years ago? B: Yes, it has gone through a complete {{BLANK}}, with new cafés, bright lights, clean sidewalks, and small shops that attract lots of young visitors every weekend.",
    "cn": "A：你最近有看到市中心那條老商店街嗎？我記得幾年前那裡又髒又冷清。 B：有，它經歷了徹底的【改變】，有新的咖啡館、明亮的燈光、乾淨的人行道，還有每個週末吸引許多年輕遊客的小店。"
  },
  {
    "word": "evolution",
    "pos": "n.",
    "cn_def": "演變；進化",
    "en_def": "slow, gradual change and development over time",
    "sentence": "A: Why does your company's online training course start with a long section about old telephones and typewriters, when the topic is modern office technology? B: The trainers want to show the {{BLANK}} of office tools over the past fifty years, so new staff understand why we work the way we do today.",
    "cn": "A：你們公司的線上培訓課程主題是現代辦公科技，為什麼一開始有一大段在講舊電話和打字機？ B：講師想呈現過去五十年來辦公工具的【演變】，讓新員工了解我們今天為什麼用這種方式工作。"
  },
  {
    "word": "advance",
    "pos": "v.",
    "cn_def": "前進；進步；晉升",
    "en_def": "to move forward or make progress",
    "sentence": "A: Do you think Kevin will stay in the customer service department for a long time, or is he hoping to get a different job someday? B: He works hard and takes evening classes in management, because he wants to {{BLANK}} in his career and become a team leader within two or three years.",
    "cn": "A：你覺得凱文會在客服部待很久嗎？還是他希望有一天換個不同的工作？ B：他工作很努力，還去上管理學的夜間課程，因為他想在職涯中【晉升】，並在兩三年內成為小組長。"
  },
  {
    "word": "proceed",
    "pos": "v.",
    "cn_def": "繼續進行",
    "en_def": "to continue doing something that has already started",
    "sentence": "A: The fire alarm stopped ringing and the building manager said it was only a test, so should we go back to the meeting room now? B: Yes, let's return and {{BLANK}} with the budget discussion, because we still need to decide on the travel costs before lunch.",
    "cn": "A：火災警報停了，大樓管理員說那只是測試，我們現在應該回會議室嗎？ B：對，我們回去【繼續進行】預算討論吧，因為我們還得在午餐前決定差旅費用。"
  },
  {
    "word": "implement",
    "pos": "v.",
    "cn_def": "實施；執行",
    "en_def": "to start using a plan or system",
    "sentence": "A: The staff survey showed that many employees want to work from home one day a week, so what has the management team decided? B: They have agreed to {{BLANK}} the new flexible working policy starting in January, but each department must make sure enough people stay in the office every day.",
    "cn": "A：員工調查顯示許多員工希望每週能在家工作一天，管理團隊做了什麼決定？ B：他們同意從一月開始【實施】新的彈性工作政策，但每個部門都必須確保每天有足夠的人留在辦公室。"
  },
  {
    "word": "execute",
    "pos": "v.",
    "cn_def": "執行",
    "en_def": "to carry out a plan or order",
    "sentence": "A: The client wants the entire event planned within only three weeks, including the hotel, catering, and transportation for two hundred guests, so is that possible? B: It's a tight schedule, but our team has done this before, so if we divide the tasks clearly, we can {{BLANK}} the plan without any serious problems.",
    "cn": "A：客戶希望在短短三週內規劃好整個活動，包括兩百位賓客的飯店、餐飲和交通，這有可能嗎？ B：時程很緊，但我們團隊以前做過，所以只要把工作分配清楚，我們就能毫無大問題地【執行】這個計畫。"
  },
  {
    "word": "conduct",
    "pos": "v.",
    "cn_def": "進行；實施",
    "en_def": "to organize and do an activity",
    "sentence": "A: How does the company decide which new snacks to sell in the convenience stores next season, since there are so many choices? B: The research team will {{BLANK}} a survey of about a thousand shoppers next month, asking them which flavors they like and how much they are willing to pay.",
    "cn": "A：選擇這麼多，公司要怎麼決定下一季在便利商店販售哪些新零食？ B：研究團隊下個月會對大約一千名購物者【進行】調查，詢問他們喜歡哪些口味以及願意付多少錢。"
  },
  {
    "word": "process",
    "pos": "n.",
    "cn_def": "過程；流程",
    "en_def": "a series of actions done to achieve a result",
    "sentence": "A: Why did it take almost two months for the company to hire a new assistant, when we needed someone to help us so urgently? B: The hiring {{BLANK}} includes three interviews, a skills test, and reference checks, so it always takes a long time to finish, even when we are very busy.",
    "cn": "A：我們這麼急需有人幫忙，為什麼公司花了將近兩個月才聘到新助理？ B：招聘【流程】包括三次面試、一項技能測驗和推薦人查核，所以總是要花很長時間才能完成，即使我們非常忙也一樣。"
  },
  {
    "word": "refine",
    "pos": "v.",
    "cn_def": "改善；使精煉",
    "en_def": "to improve something by making small changes",
    "sentence": "A: The client liked our first design for their new logo, but they said the colors were a little too bright for a bank, didn't they? B: Yes, so the designers will {{BLANK}} the logo this week by choosing softer colors and making the letters slightly thinner before we show it to them again.",
    "cn": "A：客戶喜歡我們為他們新標誌做的第一版設計，但他們說對一家銀行來說顏色有點太鮮豔了，對吧？ B：對，所以設計師這週會【改善】標誌，選用較柔和的顏色並把字體稍微變細，然後再拿給他們看。"
  },
  {
    "word": "adjust",
    "pos": "v.",
    "cn_def": "調整",
    "en_def": "to change something slightly to make it better",
    "sentence": "A: The new office chairs are comfortable, but mine feels too low for my desk, and my back hurts after sitting for a few hours, so what can I do? B: You can {{BLANK}} the height by pulling the small handle under the seat, and the facilities team can also give you a cushion if needed.",
    "cn": "A：新的辦公椅很舒服，但我的椅子對我的桌子來說感覺太低了，坐幾個小時後背就會痛，我該怎麼辦？ B：你可以拉座椅下方的小把手來【調整】高度，如果需要，總務團隊也可以給你一個坐墊。"
  },
  {
    "word": "coordinate",
    "pos": "v.",
    "cn_def": "協調",
    "en_def": "to organize people or activities so they work well together",
    "sentence": "A: Who is in charge of organizing the company's annual sports day, since there are so many departments and activities involved this year? B: Linda from human resources will {{BLANK}} all the events, working closely with the team leaders to make sure the games, food, and buses are ready on time.",
    "cn": "A：今年牽涉到這麼多部門和活動，誰負責籌辦公司的年度運動會？ B：人資部的琳達會【協調】所有活動，和各組長密切合作，確保比賽、食物和巴士都能準時準備好。"
  },
  {
    "word": "monitor",
    "pos": "v.",
    "cn_def": "監控；監測",
    "en_def": "to watch and check something over a period of time",
    "sentence": "A: Why does the factory manager walk around the production floor every two hours, even though there are cameras and computers everywhere? B: He likes to {{BLANK}} the machines himself, because he can sometimes hear strange noises or see small problems that the computer system doesn't notice right away.",
    "cn": "A：工廠到處都有攝影機和電腦，為什麼廠長還每兩小時就在生產區巡視一次？ B：他喜歡親自【監控】機器，因為他有時能聽到奇怪的聲音，或看到電腦系統沒有立刻發現的小問題。"
  },
  {
    "word": "evaluate",
    "pos": "v.",
    "cn_def": "評估",
    "en_def": "to judge how good or useful something is",
    "sentence": "A: The new training program for sales staff ended last Friday, so how will the managers know if it really helped the employees? B: They will {{BLANK}} the results by comparing each person's sales numbers before and after the training, and they will also ask the staff to fill out a short questionnaire.",
    "cn": "A：業務人員的新培訓課程上週五結束了，經理們要怎麼知道它是否真的對員工有幫助？ B：他們會比較每個人培訓前後的業績數字來【評估】成果，也會請員工填寫一份簡短的問卷。"
  },
  {
    "word": "analyze",
    "pos": "v.",
    "cn_def": "分析",
    "en_def": "to study something carefully to understand it",
    "sentence": "A: We received over five hundred customer comments about our new online shop last month, so what should we do with all that information? B: Let's ask the data team to {{BLANK}} the comments carefully, so we can find the most common complaints and decide which problems we should fix first.",
    "cn": "A：上個月我們收到五百多則關於新網路商店的顧客意見，我們該怎麼處理這些資訊？ B：我們請數據團隊仔細【分析】這些意見，這樣就能找出最常見的抱怨，並決定應該優先解決哪些問題。"
  },
  {
    "word": "ongoing",
    "pos": "adj.",
    "cn_def": "進行中的；持續的",
    "en_def": "continuing; still happening",
    "sentence": "A: Is the problem with the elevator in the main building fixed yet, because I had to use the stairs to the eighth floor again this morning? B: Not yet, unfortunately; it's an {{BLANK}} issue, and the repair company is still waiting for a special part from overseas, which should arrive next week.",
    "cn": "A：主大樓電梯的問題修好了嗎？我今天早上又得爬樓梯到八樓。 B：很遺憾，還沒有；這是個【持續中的】問題，維修公司還在等一個從國外寄來的特殊零件，應該下週會到。"
  },
  {
    "word": "gradual",
    "pos": "adj.",
    "cn_def": "逐漸的",
    "en_def": "happening slowly over a long time",
    "sentence": "A: Have the new safety rules in the warehouse made any difference since they were introduced at the beginning of the year? B: Yes, there has been a {{BLANK}} improvement, and although it didn't happen overnight, the number of accidents has fallen a little every month since January.",
    "cn": "A：倉庫的新安全規定從年初實施以來有帶來任何改變嗎？ B：有，情況有【逐漸的】改善，雖然不是一夜之間發生的，但從一月以來意外事故的數量每個月都減少了一些。"
  },
  {
    "word": "systematic",
    "pos": "adj.",
    "cn_def": "有系統的",
    "en_def": "done in a careful, organized way",
    "sentence": "A: How did the IT team finally find the cause of the network problem that kept stopping our printers all week? B: They used a {{BLANK}} method, checking every cable, computer, and printer one by one, until they discovered a broken switch hidden behind the copy machine.",
    "cn": "A：資訊團隊最後是怎麼找出讓我們的印表機整個星期一直停擺的網路問題原因？ B：他們用了【有系統的】方法，逐一檢查每條線路、每台電腦和印表機，直到發現一台藏在影印機後面的故障交換器。"
  },
  {
    "word": "complex",
    "pos": "adj.",
    "cn_def": "複雜的",
    "en_def": "having many connected parts; difficult to understand",
    "sentence": "A: Why does the new tax form for small businesses take so many hours to finish, even for experienced accountants like you? B: The rules are very {{BLANK}} this year, with many new sections about online sales and overseas customers, so I have to read the instructions very carefully.",
    "cn": "A：為什麼小型企業的新報稅表要花這麼多小時才能填完，連你這樣有經驗的會計師也是？ B：今年的規定非常【複雜】，有很多關於網路銷售和海外客戶的新項目，所以我必須非常仔細地閱讀說明。"
  },
  {
    "word": "efficient",
    "pos": "adj.",
    "cn_def": "有效率的",
    "en_def": "working well without wasting time or money",
    "sentence": "A: Our delivery costs went up again last month, and the drivers say they spend hours stuck in traffic every day, so what can we do? B: We need a more {{BLANK}} delivery plan, so let's use the new map software to find shorter routes and avoid the busiest roads during rush hour.",
    "cn": "A：我們上個月的運送成本又上升了，司機們說他們每天都要塞車好幾個小時，我們能怎麼做？ B：我們需要更【有效率的】配送計畫，所以我們用新的地圖軟體找更短的路線，並在尖峰時段避開最繁忙的道路。"
  }
];

const MCQS = [
  {
    "q": "All visitors must sign in at the front desk before entering the laboratory. This safety _____ protects both the staff and our guests.",
    "options": [
      "procedure",
      "progress",
      "sequence",
      "evolution"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Submitting the application form is only the first _____. Afterward, candidates will be invited to attend an interview with the hiring manager.",
    "options": [
      "cycle",
      "step",
      "routine",
      "evolution"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The new shopping mall is still in the planning _____. Construction is not expected to begin until next spring at the earliest.",
    "options": [
      "routine",
      "sequence",
      "stage",
      "technique"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The renovation will be completed in three parts. The first _____ involves replacing the old windows on the ground floor.",
    "options": [
      "method",
      "routine",
      "strategy",
      "phase"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Our competitors have lowered their prices sharply this quarter. We need a new marketing _____ to keep our customers loyal.",
    "options": [
      "sequence",
      "strategy",
      "phase",
      "cycle"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The hotel installed a new online booking _____ last month. Guests can now reserve rooms in less than two minutes.",
    "options": [
      "system",
      "routine",
      "stage",
      "transition"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Mr. Lee follows the same morning _____ every day. He arrives at seven, checks his emails, and then meets his team.",
    "options": [
      "transition",
      "evolution",
      "phase",
      "routine"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Customers receive their bills at the end of each monthly billing _____. Payments are due within fifteen days after that date.",
    "options": [
      "technique",
      "transition",
      "cycle",
      "approach"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Please file the invoices in numerical _____. That way, the auditors can find each document quickly during their visit.",
    "options": [
      "sequence",
      "progress",
      "technique",
      "stage"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The project manager was pleased with the team's _____. The new website is already half finished, two weeks ahead of schedule.",
    "options": [
      "cycle",
      "procedure",
      "progress",
      "transition"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The company spends millions each year on research and _____. As a result, it releases several innovative products every year.",
    "options": [
      "sequence",
      "development",
      "routine",
      "stage"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The move to the new accounting software went smoothly. The IT department made the _____ easy by offering daily training sessions.",
    "options": [
      "cycle",
      "technique",
      "method",
      "transition"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Employees who complete the leadership course have a better chance to _____ in their careers. Many become managers within two years.",
    "options": [
      "refine",
      "monitor",
      "advance",
      "analyze"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Passengers on Flight 208 should now _____ to Gate 12. Boarding will begin in approximately ten minutes, so please have tickets ready.",
    "options": [
      "proceed",
      "implement",
      "evaluate",
      "refine"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The board approved the new recycling policy yesterday. The facilities manager will _____ it in all offices starting next month.",
    "options": [
      "analyze",
      "advance",
      "proceed",
      "implement"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The marketing team spent weeks preparing the product launch. Now they must _____ the plan perfectly on launch day to impress the client.",
    "options": [
      "proceed",
      "execute",
      "advance",
      "evaluate"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The human resources department will _____ a survey of all employees next week. The results will help improve working conditions.",
    "options": [
      "conduct",
      "proceed",
      "advance",
      "adjust"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Applying for a business visa can be a long _____. Applicants should submit all documents at least two months before traveling.",
    "options": [
      "technique",
      "strategy",
      "sequence",
      "process"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The first draft of the report was good but too long. Please _____ it by removing unnecessary details before Friday's meeting.",
    "options": [
      "conduct",
      "refine",
      "proceed",
      "advance"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "If the meeting room feels too cold, you can _____ the temperature using the control panel. It is located next to the door.",
    "options": [
      "conduct",
      "execute",
      "adjust",
      "analyze"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Ms. Park will _____ the schedules of all three departments. This will ensure that the training sessions do not overlap.",
    "options": [
      "proceed",
      "advance",
      "conduct",
      "coordinate"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Security guards _____ the cameras around the clock. Any unusual activity in the parking lot is reported to the police immediately.",
    "options": [
      "monitor",
      "execute",
      "implement",
      "proceed"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Managers will _____ each employee's performance at the end of the year. Those with excellent results will receive a bonus.",
    "options": [
      "proceed",
      "implement",
      "evaluate",
      "advance"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The research team will _____ the sales data from the past five years. They hope to identify trends in customer behavior.",
    "options": [
      "proceed",
      "analyze",
      "execute",
      "advance"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Negotiations with the supplier are still _____. Both sides hope to reach an agreement on prices by the end of the month.",
    "options": [
      "systematic",
      "efficient",
      "gradual",
      "ongoing"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "There has been a _____ increase in online sales over the past year. Each month, the numbers have risen only slightly.",
    "options": [
      "complex",
      "systematic",
      "gradual",
      "efficient"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The auditors took a _____ approach to reviewing the accounts. They checked every file in order, one department at a time.",
    "options": [
      "systematic",
      "gradual",
      "ongoing",
      "complex"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "The new tax regulations are very _____. Many small business owners have hired accountants to help them understand the rules.",
    "options": [
      "gradual",
      "complex",
      "efficient",
      "ongoing"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The new delivery software is very _____. It helps drivers save time and fuel by choosing the shortest routes every day.",
    "options": [
      "gradual",
      "complex",
      "ongoing",
      "efficient"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "The trainer demonstrated a new sales _____ during the workshop. It teaches staff how to ask customers better questions.",
    "options": [
      "cycle",
      "phase",
      "technique",
      "transition"
    ],
    "answer": 2,
    "vocabIndex": 6
  }
];

const LOOKUP = {
  "procedure": {
    "pos": "n.",
    "en_def": "an official or accepted way of doing something",
    "cn_def": "程序；手續"
  },
  "step": {
    "pos": "n.",
    "en_def": "one action in a series of actions",
    "cn_def": "步驟"
  },
  "stage": {
    "pos": "n.",
    "en_def": "a particular point or period in a process",
    "cn_def": "階段"
  },
  "phase": {
    "pos": "n.",
    "en_def": "one part of a longer project or change",
    "cn_def": "時期；階段"
  },
  "method": {
    "pos": "n.",
    "en_def": "a particular way of doing something",
    "cn_def": "方法；方式"
  },
  "approach": {
    "pos": "n.",
    "en_def": "a way of dealing with a situation or problem",
    "cn_def": "方法；處理方式"
  },
  "technique": {
    "pos": "n.",
    "en_def": "a special skill or way of doing something",
    "cn_def": "技巧"
  },
  "strategy": {
    "pos": "n.",
    "en_def": "a careful plan to reach a goal",
    "cn_def": "策略"
  },
  "system": {
    "pos": "n.",
    "en_def": "a set of connected parts or methods that work together",
    "cn_def": "系統"
  },
  "routine": {
    "pos": "n.",
    "en_def": "the usual order in which you do things every day",
    "cn_def": "例行公事；慣例"
  },
  "cycle": {
    "pos": "n.",
    "en_def": "a series of events that happen again and again in the same order",
    "cn_def": "週期；循環"
  },
  "sequence": {
    "pos": "n.",
    "en_def": "the order in which things happen or are arranged",
    "cn_def": "順序"
  },
  "progress": {
    "pos": "n.",
    "en_def": "movement toward finishing or improving something",
    "cn_def": "進展"
  },
  "development": {
    "pos": "n.",
    "en_def": "the process of creating or growing something new",
    "cn_def": "開發；發展"
  },
  "transition": {
    "pos": "n.",
    "en_def": "a change from one state or system to another",
    "cn_def": "過渡；轉變"
  },
  "transformation": {
    "pos": "n.",
    "en_def": "a complete change in the appearance or character of something",
    "cn_def": "徹底改變；轉型"
  },
  "evolution": {
    "pos": "n.",
    "en_def": "slow, gradual change and development over time",
    "cn_def": "演變；進化"
  },
  "advance": {
    "pos": "v.",
    "en_def": "to move forward or make progress",
    "cn_def": "前進；進步；晉升"
  },
  "proceed": {
    "pos": "v.",
    "en_def": "to continue doing something that has already started",
    "cn_def": "繼續進行"
  },
  "implement": {
    "pos": "v.",
    "en_def": "to start using a plan or system",
    "cn_def": "實施；執行"
  },
  "execute": {
    "pos": "v.",
    "en_def": "to carry out a plan or order",
    "cn_def": "執行"
  },
  "conduct": {
    "pos": "v.",
    "en_def": "to organize and do an activity",
    "cn_def": "進行；實施"
  },
  "process": {
    "pos": "n.",
    "en_def": "a series of actions done to achieve a result",
    "cn_def": "過程；流程"
  },
  "refine": {
    "pos": "v.",
    "en_def": "to improve something by making small changes",
    "cn_def": "改善；使精煉"
  },
  "adjust": {
    "pos": "v.",
    "en_def": "to change something slightly to make it better",
    "cn_def": "調整"
  },
  "coordinate": {
    "pos": "v.",
    "en_def": "to organize people or activities so they work well together",
    "cn_def": "協調"
  },
  "monitor": {
    "pos": "v.",
    "en_def": "to watch and check something over a period of time",
    "cn_def": "監控；監測"
  },
  "evaluate": {
    "pos": "v.",
    "en_def": "to judge how good or useful something is",
    "cn_def": "評估"
  },
  "analyze": {
    "pos": "v.",
    "en_def": "to study something carefully to understand it",
    "cn_def": "分析"
  },
  "ongoing": {
    "pos": "adj.",
    "en_def": "continuing; still happening",
    "cn_def": "進行中的；持續的"
  },
  "gradual": {
    "pos": "adj.",
    "en_def": "happening slowly over a long time",
    "cn_def": "逐漸的"
  },
  "systematic": {
    "pos": "adj.",
    "en_def": "done in a careful, organized way",
    "cn_def": "有系統的"
  },
  "complex": {
    "pos": "adj.",
    "en_def": "having many connected parts; difficult to understand",
    "cn_def": "複雜的"
  },
  "efficient": {
    "pos": "adj.",
    "en_def": "working well without wasting time or money",
    "cn_def": "有效率的"
  }
};

const EXTRA_GLOSSES = {};
