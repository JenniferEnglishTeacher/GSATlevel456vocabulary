// Topic 447 Quiz Data: Workplace 職場
// Source word list: https://www.examword.com/group-topic/workplace — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T447 - Workplace 職場",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "office",
    "pos": "n.",
    "cn_def": "辦公室",
    "en_def": "a room or building where people do business or desk work",
    "sentence": "A: Have you decided where the new accounting staff will sit when they start next Monday, since the third floor is already crowded? B: Yes, we are moving them into the empty {{BLANK}} next to the conference room, and the IT team will set up their computers and phones on Friday afternoon.",
    "cn": "A：你決定好下週一新的會計人員要坐在哪裡了嗎？因為三樓已經很擁擠了。 B：決定了，我們會把他們搬到會議室旁邊那間空的【辦公室】，資訊團隊會在週五下午幫他們安裝電腦和電話。"
  },
  {
    "word": "company",
    "pos": "n.",
    "cn_def": "公司",
    "en_def": "a business that sells goods or services",
    "sentence": "A: Why did you decide to leave the bank after working there for almost ten years, when your position was so stable? B: A small software {{BLANK}} in Hsinchu offered me a chance to lead a new team, and I wanted to try something more creative before I got too comfortable.",
    "cn": "A：你在銀行工作將近十年，職位又那麼穩定，為什麼決定離開？ B：新竹一家小型軟體【公司】給我帶領新團隊的機會，我想在變得太安逸之前嘗試更有創意的事情。"
  },
  {
    "word": "employee",
    "pos": "n.",
    "cn_def": "員工；雇員",
    "en_def": "a person who is paid to work for a company or person",
    "sentence": "A: How many people does the hotel need to hire before the busy summer season begins in June? B: We need at least five more full-time staff, and every new {{BLANK}} must finish two days of customer service training before working at the front desk alone.",
    "cn": "A：在六月忙碌的夏季旺季開始前，飯店需要雇用多少人？ B：我們至少還需要五名全職人員，而且每位新【員工】在單獨於櫃台工作之前，都必須完成兩天的客服訓練。"
  },
  {
    "word": "employer",
    "pos": "n.",
    "cn_def": "雇主",
    "en_def": "a person or company that pays people to work for them",
    "sentence": "A: Did you ask the human resources department whether you can work from home two days a week after the baby arrives? B: Yes, and luckily my {{BLANK}} is very understanding, so they agreed as long as I come to the office for the weekly sales meeting every Tuesday.",
    "cn": "A：你有問人資部門，寶寶出生後你能不能每週在家工作兩天嗎？ B：有，幸好我的【雇主】非常體諒，所以只要我每週二到辦公室參加每週業務會議，他們就同意了。"
  },
  {
    "word": "colleague",
    "pos": "n.",
    "cn_def": "同事",
    "en_def": "a person you work with",
    "sentence": "A: Who is going to answer my customers' emails while I am at the trade show in Germany next week? B: Don't worry, I already asked Linda, a {{BLANK}} from the marketing department, and she said she would check your inbox every morning and reply to anything urgent.",
    "cn": "A：下週我去德國參加貿易展的時候，誰會回覆我客戶的電子郵件？ B：別擔心，我已經問過行銷部的【同事】琳達，她說她每天早上會查看你的收件匣，並回覆任何緊急的郵件。"
  },
  {
    "word": "coworker",
    "pos": "n.",
    "cn_def": "同事；同僚",
    "en_def": "a person who works at the same place as you",
    "sentence": "A: You look tired today; did something happen at the restaurant last night after I went home early? B: One {{BLANK}} called in sick at the last minute, so I had to cook and wash dishes by myself until midnight while the dining room was still full of guests.",
    "cn": "A：你今天看起來很累，昨晚我提早回家後餐廳發生了什麼事嗎？ B：有一位【同事】在最後一刻請病假，所以我只好一個人煮菜和洗碗到半夜，而那時用餐區還坐滿了客人。"
  },
  {
    "word": "manager",
    "pos": "n.",
    "cn_def": "經理",
    "en_def": "a person who is in charge of a business, department or team",
    "sentence": "A: Who should I talk to about the broken air conditioner in the store, since it is getting really hot in here? B: You should speak to the {{BLANK}}, Peter Chen, because he is responsible for repairs, and he can call the technician to come this afternoon.",
    "cn": "A：店裡的冷氣壞了，這裡越來越熱，我應該跟誰說？ B：你應該跟【經理】陳彼得說，因為他負責維修，他可以打電話請技師今天下午過來。"
  },
  {
    "word": "supervisor",
    "pos": "n.",
    "cn_def": "主管；監督者",
    "en_def": "a person who watches and directs workers",
    "sentence": "A: What should I do if a customer asks for a refund but has lost the receipt for the item? B: In that case, you should not decide by yourself; call your {{BLANK}} on the phone at the counter, and she will check the computer records before approving the refund.",
    "cn": "A：如果有顧客要求退款，但遺失了商品收據，我該怎麼辦？ B：那種情況下你不要自己決定，用櫃台的電話打給你的【主管】，她會先檢查電腦紀錄再核准退款。"
  },
  {
    "word": "team",
    "pos": "n.",
    "cn_def": "團隊",
    "en_def": "a group of people who work together",
    "sentence": "A: How did your department manage to finish the new product design two weeks earlier than planned? B: Everyone on the {{BLANK}} shared ideas openly in daily meetings and helped each other with difficult problems, so nobody felt alone and we solved problems much faster.",
    "cn": "A：你們部門是怎麼比預定提早兩週完成新產品設計的？ B：【團隊】裡的每個人都在每天的會議中坦率地分享想法，並互相幫忙解決困難的問題，所以沒有人覺得孤單，我們解決問題的速度也快多了。"
  },
  {
    "word": "meeting",
    "pos": "n.",
    "cn_def": "會議",
    "en_def": "an event where people come together to discuss something",
    "sentence": "A: Can we talk about the new budget this afternoon, or are you too busy with the visitors from Japan? B: I'm sorry, but I have a long {{BLANK}} with the Japanese clients from two to five, so could we discuss it tomorrow morning over coffee instead?",
    "cn": "A：我們今天下午可以談談新預算嗎？還是你忙著接待日本來的訪客？ B：很抱歉，我兩點到五點要和日本客戶開一場很長的【會議】，所以我們可以改成明天早上邊喝咖啡邊討論嗎？"
  },
  {
    "word": "task",
    "pos": "n.",
    "cn_def": "任務；工作",
    "en_def": "a piece of work that someone has to do",
    "sentence": "A: What is the first thing new interns usually do when they arrive at the publishing company? B: Their first {{BLANK}} is to read our style guide carefully and then check a short article for spelling mistakes, so we can see how careful they are with details.",
    "cn": "A：新實習生到出版公司時，通常第一件事是做什麼？ B：他們的第一項【任務】是仔細閱讀我們的寫作風格手冊，然後檢查一篇短文的拼字錯誤，這樣我們就能看出他們對細節有多細心。"
  },
  {
    "word": "project",
    "pos": "n.",
    "cn_def": "專案；計畫",
    "en_def": "a planned piece of work with a clear goal",
    "sentence": "A: Why have you been staying at the office so late every night for the last month? B: I'm in charge of a big {{BLANK}} to open three new branches in southern Taiwan, and the deadline for choosing the locations and hiring local staff is the end of this month.",
    "cn": "A：為什麼過去一個月你每天晚上都在辦公室待到那麼晚？ B：我負責一個在南台灣開設三家新分店的大型【專案】，而選定地點和招募當地員工的截止日期就在這個月底。"
  },
  {
    "word": "deadline",
    "pos": "n.",
    "cn_def": "截止期限",
    "en_def": "the latest time by which something must be finished",
    "sentence": "A: Do you think we can still send the sales report to the head office on time, even though the printer is broken? B: Yes, the {{BLANK}} is not until Friday at noon, so we have enough time to fix the printer or simply email the file to them instead.",
    "cn": "A：雖然印表機壞了，你覺得我們還能準時把銷售報告送到總公司嗎？ B：可以，【截止期限】要到週五中午，所以我們有足夠的時間修好印表機，或者乾脆用電子郵件把檔案寄給他們。"
  },
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "時間表；行程",
    "en_def": "a plan that lists when things will happen",
    "sentence": "A: Is there any free time for me to meet the director this week to talk about my vacation plans? B: Let me check her {{BLANK}} on the computer; she is traveling on Wednesday and Thursday, but she has an hour open on Friday morning at ten.",
    "cn": "A：這週有沒有空檔讓我和主任談談我的休假計畫？ B：讓我在電腦上查一下她的【行程】；她週三和週四要出差，但週五早上十點有一個小時的空檔。"
  },
  {
    "word": "training",
    "pos": "n.",
    "cn_def": "訓練；培訓",
    "en_def": "the process of teaching people the skills for a job",
    "sentence": "A: Why are so many staff members missing from the sales floor this morning? B: They are attending a safety {{BLANK}} session in the warehouse, where an expert is showing them how to use the new machines and what to do if there is a fire.",
    "cn": "A：為什麼今天早上賣場少了這麼多員工？ B：他們正在倉庫參加安全【訓練】課程，有一位專家在教他們如何使用新機器，以及發生火災時該怎麼做。"
  },
  {
    "word": "promotion",
    "pos": "n.",
    "cn_def": "升遷；晉升",
    "en_def": "a move to a higher position at work",
    "sentence": "A: Congratulations! I heard the news this morning; are you really moving to the Singapore office next month? B: Thanks! I got a {{BLANK}} to regional sales director, so I will be responsible for five countries, but I'm a little nervous about leaving my family and friends.",
    "cn": "A：恭喜！我今天早上聽到消息了，你下個月真的要調到新加坡辦公室嗎？ B：謝謝！我獲得【升遷】成為區域業務總監，所以我將負責五個國家，但要離開家人和朋友，我有點緊張。"
  },
  {
    "word": "salary",
    "pos": "n.",
    "cn_def": "薪水",
    "en_def": "the money a worker is paid regularly, usually every month",
    "sentence": "A: Why did you turn down the job offer from that big electronics company in Taipei? B: The work sounded interesting, but the {{BLANK}} was lower than what I earn now, and I would also have to spend nearly two hours a day commuting by train.",
    "cn": "A：你為什麼拒絕了台北那家大型電子公司的工作邀約？ B：那份工作聽起來很有趣，但【薪水】比我現在賺的還低，而且我每天還得花將近兩個小時搭火車通勤。"
  },
  {
    "word": "career",
    "pos": "n.",
    "cn_def": "職業生涯；事業",
    "en_def": "the series of jobs a person has during their working life",
    "sentence": "A: What advice would you give a young graduate who wants to work in international trade? B: Learn a second foreign language and take any chance to travel for business, because those experiences will help your {{BLANK}} grow faster than simply staying at the same desk for years.",
    "cn": "A：對於想從事國際貿易的年輕畢業生，你會給什麼建議？ B：學第二外語，並把握任何出差的機會，因為比起多年坐在同一張辦公桌前，這些經驗會讓你的【職業生涯】發展得更快。"
  },
  {
    "word": "workload",
    "pos": "n.",
    "cn_def": "工作量",
    "en_def": "the amount of work a person has to do",
    "sentence": "A: You have been working until ten every night; why don't you ask the manager for some help? B: I did, and she agreed to hire a part-time assistant next month to reduce my {{BLANK}}, since I'm handling both the customer orders and the monthly reports right now.",
    "cn": "A：你每天晚上都工作到十點，為什麼不請經理幫忙？ B：我問過了，她同意下個月聘一位兼職助理來減輕我的【工作量】，因為我現在同時要處理客戶訂單和每月報告。"
  },
  {
    "word": "cooperate",
    "pos": "v.",
    "cn_def": "合作",
    "en_def": "to work together with others for a shared goal",
    "sentence": "A: How will the sales and design departments finish the new catalog before the trade fair in March? B: The two departments will have to {{BLANK}} closely, so the designers will meet the sales staff every Monday to check which products and prices should appear on each page.",
    "cn": "A：業務部和設計部要怎麼在三月的貿易展之前完成新型錄？ B：這兩個部門必須密切【合作】，所以設計師每週一會和業務人員開會，確認每一頁應該放哪些產品和價格。"
  },
  {
    "word": "communicate",
    "pos": "v.",
    "cn_def": "溝通；傳達",
    "en_def": "to share information or ideas with others",
    "sentence": "A: Our team members work in three different cities, so how can we avoid misunderstandings about the project? B: We should {{BLANK}} through a shared online chat group every day and hold a short video call each Friday, so everyone knows what the others are doing.",
    "cn": "A：我們的團隊成員在三個不同的城市工作，要怎麼避免對專案產生誤解？ B：我們應該每天透過共用的線上聊天群組【溝通】，並且每週五開一次簡短的視訊會議，這樣每個人都知道其他人在做什麼。"
  },
  {
    "word": "manage",
    "pos": "v.",
    "cn_def": "管理；經營",
    "en_def": "to be in charge of and control people or a business",
    "sentence": "A: Who will be in charge of the new coffee shop in the train station when it opens in December? B: Amy will {{BLANK}} it, since she has five years of experience running a busy café and knows how to train new staff and control costs.",
    "cn": "A：十二月火車站新開的咖啡店開幕後，誰會負責？ B：艾咪會【管理】那家店，因為她有五年經營忙碌咖啡館的經驗，也知道如何訓練新員工和控制成本。"
  },
  {
    "word": "complete",
    "pos": "v.",
    "cn_def": "完成",
    "en_def": "to finish doing something",
    "sentence": "A: When can the workers start painting the walls of the new meeting room upstairs? B: First, the electricians need to {{BLANK}} the wiring for the lights and the projector, which should take about two days, and then the painters can come in on Thursday.",
    "cn": "A：工人什麼時候可以開始粉刷樓上新會議室的牆壁？ B：首先電工需要【完成】電燈和投影機的配線，大約要兩天，然後油漆工週四就可以進場。"
  },
  {
    "word": "improve",
    "pos": "v.",
    "cn_def": "改善；改進",
    "en_def": "to make something better",
    "sentence": "A: Customers have been complaining that they wait too long on the phone; what are we going to do about it? B: We plan to hire two more operators and add an online chat service, which should {{BLANK}} our response time and make customers much happier with our support.",
    "cn": "A：顧客一直抱怨在電話上等太久，我們打算怎麼處理？ B：我們打算再雇用兩名接線員並增加線上客服，這應該能【改善】我們的回應時間，也讓顧客對我們的服務滿意得多。"
  },
  {
    "word": "professional",
    "pos": "adj.",
    "cn_def": "專業的",
    "en_def": "showing the skills and manner expected at work",
    "sentence": "A: What did the clients think of the presentation that our new marketing assistant gave yesterday? B: They were very impressed, because she was well prepared, answered every difficult question calmly, and looked very {{BLANK}} in her dark suit, even though it was her first time.",
    "cn": "A：客戶對我們新來的行銷助理昨天做的簡報有什麼看法？ B：他們印象非常深刻，因為她準備充分，冷靜地回答每個困難的問題，而且穿著深色套裝看起來非常【專業】，雖然那是她第一次簡報。"
  },
  {
    "word": "efficient",
    "pos": "adj.",
    "cn_def": "有效率的",
    "en_def": "working well without wasting time or energy",
    "sentence": "A: Why did the factory decide to replace all the old packing machines this year? B: The new machines are much more {{BLANK}}, so they can pack twice as many boxes per hour while using less electricity, which will save the company a lot of money.",
    "cn": "A：工廠為什麼決定今年更換所有舊的包裝機？ B：新機器【有效率】得多，每小時可以包裝兩倍數量的箱子，用電量卻更少，這將為公司省下很多錢。"
  },
  {
    "word": "productive",
    "pos": "adj.",
    "cn_def": "有生產力的；有成效的",
    "en_def": "doing or achieving a lot",
    "sentence": "A: How was the planning session with the overseas partners yesterday afternoon? B: It was very {{BLANK}}; in just two hours we agreed on the prices, chose the shipping company, and set a clear timeline for the first delivery to our warehouse in early April.",
    "cn": "A：昨天下午和海外合作夥伴的規劃會議如何？ B：非常【有成效】；短短兩個小時內，我們就談妥了價格、選定了貨運公司，並為四月初運到我們倉庫的第一批貨訂下明確的時程。"
  },
  {
    "word": "busy",
    "pos": "adj.",
    "cn_def": "忙碌的",
    "en_def": "having a lot to do",
    "sentence": "A: Could you help me check these invoices before I send them to the customer this afternoon? B: I'm sorry, I'm really {{BLANK}} right now because I have to prepare the slides for tomorrow's board meeting, but Kevin might have time to help you after lunch.",
    "cn": "A：在我今天下午把這些發票寄給客戶之前，你可以幫我檢查一下嗎？ B：抱歉，我現在真的很【忙】，因為我得準備明天董事會會議的投影片，不過凱文午餐後可能有時間幫你。"
  },
  {
    "word": "organized",
    "pos": "adj.",
    "cn_def": "有條理的；有組織的",
    "en_def": "arranged in a neat, planned way; good at planning",
    "sentence": "A: How does your assistant manage to find every document so quickly when the director asks for it? B: She is extremely {{BLANK}}; she labels every folder by date and client name and keeps a list on her computer showing where each file is stored.",
    "cn": "A：主任要文件的時候，你的助理怎麼總能那麼快找到每份文件？ B：她非常【有條理】；她會按日期和客戶名稱標示每個資料夾，並在電腦裡保存一份清單，列出每個檔案存放的位置。"
  },
  {
    "word": "carefully",
    "pos": "adv.",
    "cn_def": "仔細地；小心地",
    "en_def": "with close attention to avoid mistakes",
    "sentence": "A: Is there anything special I should know before signing the rental contract for the new warehouse? B: Read every page {{BLANK}}, especially the part about repair costs and early cancellation, because some landlords hide extra fees in the small print at the end.",
    "cn": "A：在簽新倉庫的租約之前，有什麼特別需要注意的嗎？ B：每一頁都要【仔細地】閱讀，尤其是關於維修費用和提前解約的部分，因為有些房東會把額外費用藏在最後的小字裡。"
  },
  {
    "word": "quickly",
    "pos": "adv.",
    "cn_def": "迅速地；很快地",
    "en_def": "fast; in a short time",
    "sentence": "A: What happened when the computer system stopped working during the busy lunch hour at the restaurant? B: Our manager reacted {{BLANK}} and asked the staff to write orders on paper, so the kitchen kept cooking and most customers didn't even notice the problem.",
    "cn": "A：餐廳在忙碌的午餐時段電腦系統當機時，發生了什麼事？ B：我們經理【迅速地】反應，請員工改用紙筆寫點單，所以廚房持續出餐，大部分客人甚至沒有察覺到問題。"
  },
  {
    "word": "regularly",
    "pos": "adv.",
    "cn_def": "定期地；經常",
    "en_def": "often, at the same times each day, week, etc.",
    "sentence": "A: How do you make sure the machines in the factory don't break down in the middle of production? B: Our technicians check and clean them {{BLANK}}, every Monday and Thursday morning, and they replace worn parts before they cause serious and expensive problems.",
    "cn": "A：你們怎麼確保工廠的機器不會在生產途中故障？ B：我們的技師每週一和週四早上都會【定期地】檢查和清潔機器，並在磨損的零件造成嚴重又昂貴的問題之前更換它們。"
  },
  {
    "word": "successfully",
    "pos": "adv.",
    "cn_def": "成功地",
    "en_def": "in a way that achieves the planned result",
    "sentence": "A: Did the company finally move all its staff and equipment into the new building over the weekend? B: Yes, we {{BLANK}} moved everything by Sunday evening, and thanks to the movers and the IT department, everyone could start working normally on Monday morning.",
    "cn": "A：公司週末終於把所有員工和設備都搬進新大樓了嗎？ B：是的，我們在週日晚上前【成功地】搬完了所有東西，多虧了搬家工人和資訊部門，大家週一早上都能正常開始工作。"
  }
];

const MCQS = [
  {
    "q": "Our sales team moved to a larger _____ on the fifth floor. The new space has a kitchen and a quiet room for calls.",
    "options": [
      "office",
      "salary",
      "deadline",
      "promotion"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Helen started her own trading _____ after ten years at a bank. It now employs more than fifty people in three cities.",
    "options": [
      "workload",
      "schedule",
      "company",
      "training"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Each new _____ receives a staff badge on the first day. The badge is needed to enter the building and the parking area.",
    "options": [
      "deadline",
      "employee",
      "project",
      "salary"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The factory is the largest _____ in the small town. Almost half of the local residents work there in different departments.",
    "options": [
      "meeting",
      "deadline",
      "workload",
      "employer"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Jenny asked a _____ from the finance department to review her budget plan. He found two small mistakes in the tax figures.",
    "options": [
      "schedule",
      "deadline",
      "colleague",
      "salary"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "My _____ at the next desk always shares snacks with me. We often eat lunch together and talk about our weekend plans.",
    "options": [
      "coworker",
      "project",
      "training",
      "workload"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The store _____ decided to stay open until ten during the holiday season. She also hired three extra cashiers for weekends.",
    "options": [
      "salary",
      "deadline",
      "task",
      "manager"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Factory workers must report any injury to their _____ immediately. He will then fill out an accident form and call the nurse.",
    "options": [
      "schedule",
      "supervisor",
      "promotion",
      "office"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The marketing _____ includes six people with different skills. They work together closely to create advertisements for our new products.",
    "options": [
      "team",
      "salary",
      "deadline",
      "career"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The monthly sales _____ will be held in Conference Room B at nine. Please bring your latest figures and any questions.",
    "options": [
      "salary",
      "career",
      "meeting",
      "workload"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Checking the inventory every Friday is an important _____ for the warehouse staff. It helps us order new stock on time.",
    "options": [
      "employer",
      "task",
      "salary",
      "company"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The construction _____ to build the new library will take two years. The city has already approved a budget of fifty million dollars.",
    "options": [
      "colleague",
      "salary",
      "supervisor",
      "project"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The _____ for submitting travel expense forms is the last day of each month. Late forms will be paid the following month.",
    "options": [
      "employer",
      "career",
      "deadline",
      "team"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The training _____ has changed because the speaker's flight was delayed. The workshop will now start at two instead of ten.",
    "options": [
      "schedule",
      "salary",
      "colleague",
      "employer"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "All drivers must complete a two-day safety _____ before using the new delivery trucks. The course covers loading and emergency braking.",
    "options": [
      "salary",
      "employer",
      "career",
      "training"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "After five years of excellent work, Daniel received a _____ to senior engineer. His new role includes leading a team of eight.",
    "options": [
      "deadline",
      "promotion",
      "workload",
      "schedule"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The company raised every worker's _____ by three percent this year. The extra money will appear in the January paycheck.",
    "options": [
      "salary",
      "schedule",
      "project",
      "office"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Anna began her _____ as a hotel receptionist twenty years ago. Today she runs five hotels across Asia.",
    "options": [
      "deadline",
      "workload",
      "career",
      "meeting"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "During the holiday season, the shipping department has a very heavy _____. Many staff members work overtime to handle all the orders.",
    "options": [
      "employer",
      "workload",
      "colleague",
      "office"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The two rival airlines agreed to _____ on a shared loyalty program. Passengers will earn points on flights operated by either company.",
    "options": [
      "complete",
      "improve",
      "manage",
      "cooperate"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Hotel staff must be able to _____ clearly with guests from many countries. Speaking English well is required for this job.",
    "options": [
      "complete",
      "manage",
      "communicate",
      "improve"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Rita was hired to _____ our new branch in Kaohsiung. She will be responsible for twenty staff members and the monthly budget.",
    "options": [
      "manage",
      "communicate",
      "cooperate",
      "complete"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Please _____ the online form before your interview on Monday. Make sure every section is filled in, including your work history.",
    "options": [
      "cooperate",
      "communicate",
      "manage",
      "complete"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The restaurant changed its suppliers to _____ the quality of its food. Since then, online reviews have become much more positive.",
    "options": [
      "cooperate",
      "improve",
      "communicate",
      "complete"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "All sales staff are expected to wear _____ clothing when meeting clients. Jeans and sports shoes are not allowed in the showroom.",
    "options": [
      "professional",
      "busy",
      "productive",
      "efficient"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Switching to online invoices made our billing process much more _____. Payments now arrive within days instead of several weeks.",
    "options": [
      "busy",
      "professional",
      "efficient",
      "productive"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The planning session was very _____, and the team agreed on a budget and a supplier. Everyone left with clear tasks.",
    "options": [
      "nervous",
      "productive",
      "curious",
      "expensive"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The phone lines are always _____ on Monday mornings. Customers are advised to send an email if they cannot get through.",
    "options": [
      "professional",
      "efficient",
      "organized",
      "busy"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The conference was well _____, and every session started on time. Guests praised the clear signs and the helpful volunteers.",
    "options": [
      "professional",
      "productive",
      "organized",
      "busy"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Please read the safety instructions _____ before using the cutting machine. Even small mistakes can cause serious injuries.",
    "options": [
      "carefully",
      "successfully",
      "rarely",
      "recently"
    ],
    "answer": 0,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "office": {
    "pos": "n.",
    "en_def": "a room or building where people do business or desk work",
    "cn_def": "辦公室"
  },
  "company": {
    "pos": "n.",
    "en_def": "a business that sells goods or services",
    "cn_def": "公司"
  },
  "employee": {
    "pos": "n.",
    "en_def": "a person who is paid to work for a company or person",
    "cn_def": "員工；雇員"
  },
  "employer": {
    "pos": "n.",
    "en_def": "a person or company that pays people to work for them",
    "cn_def": "雇主"
  },
  "colleague": {
    "pos": "n.",
    "en_def": "a person you work with",
    "cn_def": "同事"
  },
  "coworker": {
    "pos": "n.",
    "en_def": "a person who works at the same place as you",
    "cn_def": "同事；同僚"
  },
  "manager": {
    "pos": "n.",
    "en_def": "a person who is in charge of a business, department or team",
    "cn_def": "經理"
  },
  "supervisor": {
    "pos": "n.",
    "en_def": "a person who watches and directs workers",
    "cn_def": "主管；監督者"
  },
  "team": {
    "pos": "n.",
    "en_def": "a group of people who work together",
    "cn_def": "團隊"
  },
  "meeting": {
    "pos": "n.",
    "en_def": "an event where people come together to discuss something",
    "cn_def": "會議"
  },
  "task": {
    "pos": "n.",
    "en_def": "a piece of work that someone has to do",
    "cn_def": "任務；工作"
  },
  "project": {
    "pos": "n.",
    "en_def": "a planned piece of work with a clear goal",
    "cn_def": "專案；計畫"
  },
  "deadline": {
    "pos": "n.",
    "en_def": "the latest time by which something must be finished",
    "cn_def": "截止期限"
  },
  "schedule": {
    "pos": "n.",
    "en_def": "a plan that lists when things will happen",
    "cn_def": "時間表；行程"
  },
  "training": {
    "pos": "n.",
    "en_def": "the process of teaching people the skills for a job",
    "cn_def": "訓練；培訓"
  },
  "promotion": {
    "pos": "n.",
    "en_def": "a move to a higher position at work",
    "cn_def": "升遷；晉升"
  },
  "salary": {
    "pos": "n.",
    "en_def": "the money a worker is paid regularly, usually every month",
    "cn_def": "薪水"
  },
  "career": {
    "pos": "n.",
    "en_def": "the series of jobs a person has during their working life",
    "cn_def": "職業生涯；事業"
  },
  "workload": {
    "pos": "n.",
    "en_def": "the amount of work a person has to do",
    "cn_def": "工作量"
  },
  "cooperate": {
    "pos": "v.",
    "en_def": "to work together with others for a shared goal",
    "cn_def": "合作"
  },
  "communicate": {
    "pos": "v.",
    "en_def": "to share information or ideas with others",
    "cn_def": "溝通；傳達"
  },
  "manage": {
    "pos": "v.",
    "en_def": "to be in charge of and control people or a business",
    "cn_def": "管理；經營"
  },
  "complete": {
    "pos": "v.",
    "en_def": "to finish doing something",
    "cn_def": "完成"
  },
  "improve": {
    "pos": "v.",
    "en_def": "to make something better",
    "cn_def": "改善；改進"
  },
  "professional": {
    "pos": "adj.",
    "en_def": "showing the skills and manner expected at work",
    "cn_def": "專業的"
  },
  "efficient": {
    "pos": "adj.",
    "en_def": "working well without wasting time or energy",
    "cn_def": "有效率的"
  },
  "productive": {
    "pos": "adj.",
    "en_def": "doing or achieving a lot",
    "cn_def": "有生產力的；有成效的"
  },
  "busy": {
    "pos": "adj.",
    "en_def": "having a lot to do",
    "cn_def": "忙碌的"
  },
  "organized": {
    "pos": "adj.",
    "en_def": "arranged in a neat, planned way; good at planning",
    "cn_def": "有條理的；有組織的"
  },
  "carefully": {
    "pos": "adv.",
    "en_def": "with close attention to avoid mistakes",
    "cn_def": "仔細地；小心地"
  },
  "quickly": {
    "pos": "adv.",
    "en_def": "fast; in a short time",
    "cn_def": "迅速地；很快地"
  },
  "regularly": {
    "pos": "adv.",
    "en_def": "often, at the same times each day, week, etc.",
    "cn_def": "定期地；經常"
  },
  "successfully": {
    "pos": "adv.",
    "en_def": "in a way that achieves the planned result",
    "cn_def": "成功地"
  }
};

const EXTRA_GLOSSES = {};
