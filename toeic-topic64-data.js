// Topic 64 Quiz Data: Colleague 同事
// Source word list: https://www.examword.com/group-topic/colleague — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T64 - Colleague 同事",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "colleague",
    "pos": "n.",
    "cn_def": "同事",
    "en_def": "a person you work with in the same company or profession",
    "sentence": "A: I heard you are leaving early on Friday afternoon to catch a flight to Tokyo, so who will answer your clients' calls while you are away? B: I asked a {{BLANK}} from the marketing department to cover for me, and she already knows most of my customers because we worked on several accounts together last year.",
    "cn": "A：我聽說你週五下午要提早離開去搭飛往東京的班機，你不在的時候誰來接你客戶的電話？ B：我請了行銷部的一位【同事】幫我代班，她已經認識我大部分的客戶，因為我們去年一起負責過好幾個客戶帳戶。"
  },
  {
    "word": "coworker",
    "pos": "n.",
    "cn_def": "同事、同僚",
    "en_def": "a person who works with you at the same place",
    "sentence": "A: You look much happier at the office these days, so did something change after you moved to the new branch downtown? B: Yes, my new {{BLANK}} at the next desk showed me how to use the booking system on my first day, and now we often eat lunch together near the station.",
    "cn": "A：你最近在辦公室看起來開心多了，搬到市中心的新分店後有什麼改變嗎？ B：有啊，坐我隔壁的新【同事】在我第一天就教我怎麼用訂位系統，現在我們常常一起在車站附近吃午餐。"
  },
  {
    "word": "teammate",
    "pos": "n.",
    "cn_def": "隊友、團隊夥伴",
    "en_def": "a person who is on the same team as you",
    "sentence": "A: The sales competition between the branches ends next Monday, so how is your group doing compared with the other offices? B: We are in second place right now, but my {{BLANK}} Kevin just signed a big contract with a hotel chain this morning, so we may finally move into first place.",
    "cn": "A：各分店之間的業績競賽下週一結束，你們這組和其他辦公室比起來表現如何？ B：我們目前排第二，但我的【隊友】凱文今天早上剛和一家連鎖飯店簽下一份大合約，所以我們也許終於能衝上第一名。"
  },
  {
    "word": "associate",
    "pos": "n.",
    "cn_def": "夥伴、合夥人、同事",
    "en_def": "a person you work or do business with",
    "sentence": "A: Our law firm needs someone to meet the client from Singapore at the airport tomorrow, but I have to be in court all day, so can you help? B: I will send my business {{BLANK}}, Ms. Huang, because she has handled this client's contracts before and speaks both English and Mandarin very well.",
    "cn": "A：我們事務所明天需要有人去機場接來自新加坡的客戶，但我整天都要出庭，你能幫忙嗎？ B：我會派我的事業【夥伴】黃小姐去，因為她以前處理過這位客戶的合約，而且英語和中文都說得很好。"
  },
  {
    "word": "staff",
    "pos": "n.",
    "cn_def": "全體員工、職員",
    "en_def": "all the people who work for an organization",
    "sentence": "A: The hotel is going to be completely full during the international trade fair next week, so do we have enough people to work at the front desk? B: Not really, so the manager has hired five extra {{BLANK}} members for the busy period, and they will start training with us this Thursday morning.",
    "cn": "A：下週國際貿易展期間飯店會完全客滿，我們有足夠的人手在櫃台工作嗎？ B：其實不太夠，所以經理為忙碌期間多聘了五名【工作人員】，他們這週四早上就會開始跟我們一起受訓。"
  },
  {
    "word": "employee",
    "pos": "n.",
    "cn_def": "員工、雇員",
    "en_def": "a person who is paid to work for a company",
    "sentence": "A: The new factory near Taichung is opening in March, so how many people will the company need to hire before then? B: The plan is to hire about two hundred, and every new {{BLANK}} will receive two weeks of safety training before they are allowed to operate any of the machines on the production line.",
    "cn": "A：台中附近的新工廠三月就要開幕了，公司在那之前需要雇用多少人？ B：計畫是雇用大約兩百人，每位新【員工】在被允許操作生產線上的任何機器之前，都會接受兩週的安全訓練。"
  },
  {
    "word": "manager",
    "pos": "n.",
    "cn_def": "經理、主管",
    "en_def": "a person who controls or runs a department or business",
    "sentence": "A: A customer just called to complain that her order arrived damaged for the second time this month, and she wants to speak to someone in charge. B: Please put her through to the store {{BLANK}}, because only he can approve a full refund and offer her free delivery on her next purchase.",
    "cn": "A：一位顧客剛打來抱怨她的訂單這個月第二次送到時已經損壞，她想跟負責人說話。 B：請把電話轉給店【經理】，因為只有他能核准全額退款，並提供她下次購物免運費。"
  },
  {
    "word": "supervisor",
    "pos": "n.",
    "cn_def": "主管、督導",
    "en_def": "a person who watches and directs workers",
    "sentence": "A: I made a mistake on the delivery schedule yesterday, and now two trucks are going to arrive at the warehouse at the same time, so what should I do? B: Tell your {{BLANK}} right away, because she can change the loading times and ask the night shift workers to help unload the extra boxes.",
    "cn": "A：我昨天把送貨時程表弄錯了，現在兩輛卡車會同時抵達倉庫，我該怎麼辦？ B：馬上告訴你的【主管】，因為她可以更改裝貨時間，並請夜班工人幫忙卸下多出來的箱子。"
  },
  {
    "word": "partner",
    "pos": "n.",
    "cn_def": "合夥人、夥伴",
    "en_def": "a person who owns or runs a business with another person",
    "sentence": "A: Your new bakery has become very popular in the neighborhood, so how did you manage to open it so quickly after leaving your office job? B: My old university classmate became my {{BLANK}}, and she paid half of the rent and equipment costs while I focused on creating the recipes and training the staff.",
    "cn": "A：你的新麵包店在附近變得很受歡迎，你離開辦公室工作後怎麼能這麼快就開店？ B：我的大學老同學成了我的【合夥人】，她負擔了一半的租金和設備費用，而我專心研發食譜和訓練員工。"
  },
  {
    "word": "professional",
    "pos": "n.",
    "cn_def": "專業人士",
    "en_def": "a person who is trained and skilled in a job",
    "sentence": "A: The pipes in the office kitchen are leaking again, and water is spreading across the floor, so should we try to fix them ourselves this afternoon? B: No, it is better to call a trained {{BLANK}} who has the right tools, because if we make the problem worse, the repair will cost much more.",
    "cn": "A：辦公室茶水間的水管又漏水了，水正蔓延到整個地板上，我們今天下午要不要自己試著修理？ B：不，最好打電話找一位有合適工具、受過訓練的【專業人士】，因為如果我們把問題弄得更糟，修理費會貴很多。"
  },
  {
    "word": "team",
    "pos": "n.",
    "cn_def": "團隊",
    "en_def": "a group of people who work together",
    "sentence": "A: The client wants the new website finished by the end of the month, which is much sooner than we expected, so can one designer do it alone? B: No, it is too much work for one person, so I am putting together a small {{BLANK}} of three designers and two programmers to share the job.",
    "cn": "A：客戶希望新網站在月底前完成，比我們預期的早很多，一個設計師能獨自完成嗎？ B：不行，對一個人來說工作量太大了，所以我要組一個由三位設計師和兩位程式設計師組成的小【團隊】來分擔工作。"
  },
  {
    "word": "workplace",
    "pos": "n.",
    "cn_def": "工作場所、職場",
    "en_def": "the place where people work",
    "sentence": "A: Many of our younger staff members say they feel tired and stressed by the end of the week, so what can the company do to help them? B: We should make the {{BLANK}} more comfortable by adding plants, quiet rooms and better lighting, and we could also let people work from home on Fridays.",
    "cn": "A：我們許多年輕員工說他們到週末時感到疲累又有壓力，公司能做些什麼來幫助他們？ B：我們應該增加植物、安靜室和更好的照明，讓【工作場所】更舒適，也可以讓大家週五在家工作。"
  },
  {
    "word": "cooperate",
    "pos": "v.",
    "cn_def": "合作、配合",
    "en_def": "to work together with others to reach a goal",
    "sentence": "A: The two departments have been arguing about the budget for weeks, and now the product launch is in danger of being delayed, so what should we do? B: The director called a meeting this morning and told both sides that they must {{BLANK}} with each other if they want the launch to happen on time.",
    "cn": "A：兩個部門為了預算已經爭執好幾週，現在產品發表可能會延後，我們該怎麼辦？ B：主任今天早上召開會議，告訴雙方如果想讓發表會準時舉行，就必須彼此【合作】。"
  },
  {
    "word": "collaborate",
    "pos": "v.",
    "cn_def": "合作、協作",
    "en_def": "to work together with someone to create or produce something",
    "sentence": "A: Our company wants to design a new line of sports shoes for young runners, but we do not have much experience with that market, right? B: That is true, so we plan to {{BLANK}} with a famous local athlete and a design school in Taipei to create shoes that teenagers will really want to buy.",
    "cn": "A：我們公司想為年輕跑者設計一系列新的運動鞋，但我們對那個市場沒有太多經驗，對吧？ B：沒錯，所以我們打算與一位知名的本地運動員和台北一所設計學校【協作】，打造青少年真正想買的鞋子。"
  },
  {
    "word": "communicate",
    "pos": "v.",
    "cn_def": "溝通、傳達",
    "en_def": "to share information or ideas with other people",
    "sentence": "A: Since half of our department started working from home three days a week, people often miss important updates, so how can we fix this? B: We should {{BLANK}} more clearly by sending a short email summary every morning and holding a fifteen-minute video call before lunch on Mondays and Thursdays.",
    "cn": "A：自從我們部門有一半的人開始每週在家工作三天，大家常常錯過重要的最新消息，我們要怎麼解決？ B：我們應該更清楚地【溝通】，每天早上寄一份簡短的電子郵件摘要，並在週一和週四午餐前舉行十五分鐘的視訊會議。"
  },
  {
    "word": "support",
    "pos": "v.",
    "cn_def": "支持、支援",
    "en_def": "to help and encourage someone",
    "sentence": "A: I am worried about giving my first presentation to the board of directors next Tuesday, because my English is still not very fluent. B: Don't worry, the whole department will {{BLANK}} you, and I can help you practice your speech during our lunch breaks every day this week.",
    "cn": "A：我很擔心下週二第一次向董事會做簡報，因為我的英文還不是很流利。 B：別擔心，整個部門都會【支持】你，而且這週每天午休時間我都可以幫你練習你的演講。"
  },
  {
    "word": "respect",
    "pos": "v.",
    "cn_def": "尊重、敬重",
    "en_def": "to admire someone and treat them well",
    "sentence": "A: The new team leader is much younger than most of the engineers in our group, so do you think they will listen to her instructions? B: I think they will, because people quickly learn to {{BLANK}} someone who works hard, listens carefully and always explains her decisions in a calm and fair way.",
    "cn": "A：新的組長比我們組裡大部分工程師都年輕得多，你覺得他們會聽她的指示嗎？ B：我想會的，因為人們很快就會【尊重】一個努力工作、仔細傾聽，而且總是冷靜公平地解釋自己決定的人。"
  },
  {
    "word": "assist",
    "pos": "v.",
    "cn_def": "協助、幫助",
    "en_def": "to help someone do something",
    "sentence": "A: The conference room needs to be ready for sixty guests by nine o'clock tomorrow, but I still have to print all the name tags and handouts. B: I will ask two interns to {{BLANK}} you with setting up the chairs, the projector and the coffee table, so you can focus on the printing.",
    "cn": "A：會議室明天九點前要準備好接待六十位來賓，但我還得印出所有的名牌和講義。 B：我會請兩位實習生【協助】你擺放椅子、投影機和咖啡桌，這樣你就能專心印東西了。"
  },
  {
    "word": "reliable",
    "pos": "adj.",
    "cn_def": "可靠的",
    "en_def": "able to be trusted to do something well",
    "sentence": "A: We need someone to collect the payments from our stores every evening and take the money to the bank, so who would you recommend? B: I would choose Mr. Chen, because he is very {{BLANK}}; in ten years he has never been late, and he always checks every receipt twice before he leaves.",
    "cn": "A：我們需要有人每天傍晚向各店收款，再把錢送到銀行，你會推薦誰？ B：我會選陳先生，因為他非常【可靠】；十年來他從沒遲到過，而且離開前總是把每張收據檢查兩次。"
  },
  {
    "word": "supportive",
    "pos": "adj.",
    "cn_def": "支持的、給予鼓勵的",
    "en_def": "giving help and encouragement to others",
    "sentence": "A: How did you feel during your first month at the accounting firm, since you had never worked in an office before? B: It was easier than I expected, because my coworkers were very {{BLANK}}, and they always answered my questions patiently and invited me to join them for lunch.",
    "cn": "A：你在會計事務所的第一個月感覺如何？畢竟你以前從沒在辦公室工作過。 B：比我預期的輕鬆，因為我的同事們都非常【支持、照顧人】，總是耐心回答我的問題，還邀請我一起吃午餐。"
  },
  {
    "word": "helpful",
    "pos": "adj.",
    "cn_def": "有幫助的",
    "en_def": "useful, or willing to help",
    "sentence": "A: I need to find out how to change the shipping address on a customer's order, but the instructions in the computer system are really confusing. B: The video guide that the IT department made last month is very {{BLANK}}, because it shows every step slowly and clearly in less than five minutes.",
    "cn": "A：我需要知道怎麼更改顧客訂單上的寄送地址，但電腦系統裡的說明真的很令人困惑。 B：資訊部上個月做的影片教學非常【有幫助】，因為它在五分鐘內就把每個步驟慢慢且清楚地示範出來。"
  },
  {
    "word": "experienced",
    "pos": "adj.",
    "cn_def": "有經驗的、經驗豐富的",
    "en_def": "having knowledge or skill from doing something for a long time",
    "sentence": "A: The new branch in Kaohsiung is losing money, and the staff there seem to have no clear plan, so what does head office want to do? B: They are sending an {{BLANK}} manager who has run three successful stores before, and she will stay there for six months to train the local team.",
    "cn": "A：高雄的新分店在虧錢，那邊的員工似乎沒有明確的計畫，總公司打算怎麼做？ B：他們要派一位以前經營過三家成功門市、【經驗豐富的】經理，她會在那裡待六個月來訓練當地團隊。"
  },
  {
    "word": "skilled",
    "pos": "adj.",
    "cn_def": "熟練的、有技術的",
    "en_def": "having the ability and training to do something well",
    "sentence": "A: The furniture factory has received a large order of handmade tables from a hotel in Japan, but the deadline is very tight, isn't it? B: Yes, so we are hiring several {{BLANK}} workers who can cut and shape wood quickly and accurately without wasting too much expensive material.",
    "cn": "A：家具工廠接到日本一家飯店的大量手工桌子訂單，但期限很緊，不是嗎？ B：是的，所以我們正在雇用幾位能夠快速準確地切割和塑形木材、又不會浪費太多昂貴材料的【熟練】工人。"
  },
  {
    "word": "friendly",
    "pos": "adj.",
    "cn_def": "友善的",
    "en_def": "kind and pleasant to other people",
    "sentence": "A: What do our hotel guests usually say about their stay when they write reviews on the booking website after they check out? B: Most of them say the rooms are a little small, but the front desk staff are very {{BLANK}} and always greet them with a warm smile and useful tips about the city.",
    "cn": "A：我們飯店的房客退房後在訂房網站寫評論時，通常怎麼評價他們的住宿？ B：他們大多說房間有點小，但櫃台人員非常【友善】，總是帶著溫暖的笑容迎接他們，還提供實用的城市旅遊建議。"
  },
  {
    "word": "efficient",
    "pos": "adj.",
    "cn_def": "有效率的",
    "en_def": "working well without wasting time or money",
    "sentence": "A: Last year it took our office almost a week to process each customer's insurance claim, so why is it so much faster now? B: We started using new software that is far more {{BLANK}}, so most claims are checked and approved within two days without any extra paperwork.",
    "cn": "A：去年我們辦公室處理每位客戶的保險理賠幾乎要花一週，為什麼現在快這麼多？ B：我們開始使用一套更【有效率】的新軟體，所以大部分理賠在兩天內就能審核並通過，不需要額外的文書作業。"
  },
  {
    "word": "dedicated",
    "pos": "adj.",
    "cn_def": "盡心盡力的、專注投入的",
    "en_def": "working hard and caring a lot about something",
    "sentence": "A: Why did the company choose Ms. Lin as Employee of the Year, since there are so many hard-working people in the sales department? B: She is extremely {{BLANK}} to her customers; she often stays late to solve their problems and even visited a sick client in the hospital last winter.",
    "cn": "A：銷售部有那麼多努力工作的人，公司為什麼選林小姐為年度最佳員工？ B：她對客戶極為【盡心盡力】；她常常加班到很晚幫他們解決問題，去年冬天甚至去醫院探望一位生病的客戶。"
  },
  {
    "word": "trustworthy",
    "pos": "adj.",
    "cn_def": "值得信賴的",
    "en_def": "able to be trusted; honest",
    "sentence": "A: We need someone to manage the key to the safe where we keep the company's important documents and cash, so who should we choose? B: Mrs. Wang has worked here for fifteen years and has never broken a rule, so I think she is the most {{BLANK}} person in the whole office.",
    "cn": "A：我們需要有人管理存放公司重要文件和現金的保險箱鑰匙，該選誰呢？ B：王太太在這裡工作了十五年，從沒違反過任何規定，所以我認為她是整個辦公室最【值得信賴】的人。"
  },
  {
    "word": "busy",
    "pos": "adj.",
    "cn_def": "忙碌的",
    "en_def": "having a lot of things to do",
    "sentence": "A: Could we get together this week to talk about the new advertising plan for the summer sale, maybe on Wednesday afternoon? B: I am sorry, but I will be very {{BLANK}} until Thursday because I have to visit three clients and finish the monthly sales report, so how about Friday morning instead?",
    "cn": "A：我們這週可以見個面討論夏季特賣的新廣告計畫嗎？也許週三下午？ B：抱歉，我到週四前都會非常【忙碌】，因為我要拜訪三位客戶並完成每月銷售報告，改成週五早上如何？"
  },
  {
    "word": "meeting",
    "pos": "n.",
    "cn_def": "會議",
    "en_def": "an event where people come together to discuss something",
    "sentence": "A: Everyone in the marketing department seems to be in a hurry this morning, so is something important happening today? B: Yes, there is a {{BLANK}} with our biggest client at ten o'clock, and we need to show them the new advertising plan, the budget and the results of last month's survey.",
    "cn": "A：今天早上行銷部每個人看起來都很匆忙，今天有什麼重要的事嗎？ B：是的，十點要和我們最大的客戶開【會議】，我們需要向他們展示新的廣告計畫、預算以及上個月的調查結果。"
  },
  {
    "word": "project",
    "pos": "n.",
    "cn_def": "專案、計畫",
    "en_def": "a planned piece of work with a clear goal",
    "sentence": "A: You have been working late every night this month, so what are you and the engineers busy with? B: We are working on a big {{BLANK}} to build a new solar power system for a shopping mall in Tainan, and the first stage must be finished before the end of December.",
    "cn": "A：你這個月每晚都工作到很晚，你和工程師們在忙什麼？ B：我們正在進行一項大型【專案】，要為台南一家購物中心建造新的太陽能發電系統，第一階段必須在十二月底前完成。"
  },
  {
    "word": "task",
    "pos": "n.",
    "cn_def": "任務、工作",
    "en_def": "a piece of work that must be done",
    "sentence": "A: Now that you are the new office assistant, what will you have to do first every morning when you arrive at work? B: My first {{BLANK}} is to check the email inbox and answer customer questions, and after that I need to order office supplies and update the meeting calendar.",
    "cn": "A：既然你是新的辦公室助理，你每天早上到公司首先要做什麼？ B：我的第一項【任務】是檢查電子郵件收件匣並回覆顧客的問題，之後我需要訂購辦公用品並更新會議行事曆。"
  },
  {
    "word": "feedback",
    "pos": "n.",
    "cn_def": "回饋、意見",
    "en_def": "comments about how good or bad something is",
    "sentence": "A: We tested the new mobile app with fifty customers last week, so what did they think about the design and the payment process? B: Most of the {{BLANK}} was positive, but several users said the buttons were too small, so the designers are making them bigger before the official launch next month.",
    "cn": "A：我們上週讓五十位顧客試用了新的手機應用程式，他們對設計和付款流程有什麼看法？ B：大部分的【意見回饋】都是正面的，但有幾位使用者說按鈕太小，所以設計師正在下個月正式上線前把它們改大。"
  },
  {
    "word": "network",
    "pos": "n.",
    "cn_def": "人脈網絡",
    "en_def": "a group of people who know and help each other",
    "sentence": "A: You found your new job at the bank so quickly after you moved back to Taipei, so how did you do it? B: I have built a strong {{BLANK}} of contacts by going to business events and staying in touch with former colleagues, and one of them told me about the opening.",
    "cn": "A：你搬回台北後這麼快就在銀行找到新工作，你是怎麼辦到的？ B：我透過參加商務活動並和以前的同事保持聯絡，建立了強大的人脈【網絡】，其中一位告訴了我這個職缺。"
  }
];

const MCQS = [
  {
    "q": "I shared the taxi to the airport with a _____ from the accounting department. We have worked in the same office for six years.",
    "options": [
      "workplace",
      "feedback",
      "colleague",
      "project"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Our basketball _____ scored the winning point in the company tournament on Saturday. Everyone in our department cheered loudly for him.",
    "options": [
      "workplace",
      "teammate",
      "feedback",
      "network"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "All _____ must wear their ID cards while they are inside the building. Visitors should sign in at the front desk.",
    "options": [
      "staff",
      "project",
      "feedback",
      "network"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Each new _____ receives a laptop and a parking card on the first day. The human resources office prepares them in advance.",
    "options": [
      "meeting",
      "workplace",
      "feedback",
      "employee"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The restaurant _____ decided to close early because of the typhoon warning. She sent all the waiters home before six o'clock.",
    "options": [
      "project",
      "task",
      "manager",
      "network"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Please ask your _____ to sign this form before you take your vacation days. Without a signature, we cannot approve your request.",
    "options": [
      "workplace",
      "supervisor",
      "feedback",
      "project"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "After ten years as an employee, Mr. Lee became a _____ in the law firm. Now he owns part of the business.",
    "options": [
      "meeting",
      "task",
      "feedback",
      "partner"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "If your computer keeps shutting down, you should take it to a _____ for repair. Trying to fix it yourself could cause more damage.",
    "options": [
      "professional",
      "workplace",
      "meeting",
      "task"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Our sales _____ has six members, and each person covers a different area of the city. We meet every Monday morning.",
    "options": [
      "task",
      "feedback",
      "workplace",
      "team"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The company wants to create a safe _____ for everyone, so it checks all the machines every month. Accidents have dropped by half.",
    "options": [
      "workplace",
      "partner",
      "feedback",
      "manager"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The two shipping companies agreed to _____ during the holiday season. They will share trucks to deliver packages faster.",
    "options": [
      "respect",
      "support",
      "cooperate",
      "communicate"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Staff in the Tokyo and Taipei offices _____ mainly by email and video calls. They rarely meet in person.",
    "options": [
      "respect",
      "communicate",
      "assist",
      "support"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Many local businesses _____ the city marathon by giving money and free water. Their names are printed on the runners' shirts.",
    "options": [
      "communicate",
      "cooperate",
      "respect",
      "support"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Good managers always _____ their employees' opinions, even when they disagree with them. This makes workers feel valued and safe.",
    "options": [
      "communicate",
      "cooperate",
      "respect",
      "assist"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Our staff will be happy to _____ you with any questions about your hotel booking. Please call the front desk anytime.",
    "options": [
      "respect",
      "assist",
      "communicate",
      "cooperate"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "We switched to a more _____ delivery company because the old one often lost packages. Our customers are much happier now.",
    "options": [
      "reliable",
      "busy",
      "supportive",
      "friendly"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "My family was very _____ when I decided to quit my job and start my own business. They even lent me money.",
    "options": [
      "efficient",
      "skilled",
      "experienced",
      "supportive"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The map at the station entrance was very _____ for tourists. It showed all the exits and nearby hotels.",
    "options": [
      "helpful",
      "dedicated",
      "busy",
      "trustworthy"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "We are looking for an _____ chef who has worked in hotel kitchens for at least five years. Please send your resume by Friday.",
    "options": [
      "busy",
      "friendly",
      "experienced",
      "supportive"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The factory needs more _____ workers who can operate the new machines safely. Training will be provided for two weeks.",
    "options": [
      "busy",
      "skilled",
      "trustworthy",
      "supportive"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The waiter was so _____ and polite that we left him a big tip. He even recommended some good local dishes.",
    "options": [
      "busy",
      "trustworthy",
      "friendly",
      "dedicated"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The new printer is much more _____ than the old one. It prints twice as fast and uses less electricity.",
    "options": [
      "friendly",
      "supportive",
      "dedicated",
      "efficient"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Ms. Chen is a _____ nurse who has given her whole life to caring for patients. She has never missed a day of work.",
    "options": [
      "experienced",
      "dedicated",
      "efficient",
      "busy"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Banks only hire _____ people to handle large amounts of cash. Every new teller must pass a background check.",
    "options": [
      "trustworthy",
      "busy",
      "friendly",
      "supportive"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The restaurant is always _____ at lunchtime, so you should arrive before noon. Otherwise, you may wait thirty minutes for a table.",
    "options": [
      "trustworthy",
      "busy",
      "skilled",
      "supportive"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The monthly sales _____ has been moved to Thursday afternoon. Please bring your reports to Conference Room B.",
    "options": [
      "partner",
      "network",
      "meeting",
      "professional"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The new bridge _____ will cost about two billion dollars. Construction is expected to take three years.",
    "options": [
      "employee",
      "feedback",
      "colleague",
      "project"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Cleaning the storage room is not a pleasant _____, but someone has to do it. Let's take turns every Friday.",
    "options": [
      "task",
      "network",
      "supervisor",
      "workplace"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The teacher gave us detailed _____ on our presentations. She said our slides were clear but our voices were too quiet.",
    "options": [
      "workplace",
      "partner",
      "network",
      "feedback"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Social media helps small business owners build a _____ of customers and suppliers. Many orders now come from online contacts.",
    "options": [
      "task",
      "network",
      "meeting",
      "supervisor"
    ],
    "answer": 1,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "colleague": {
    "pos": "n.",
    "en_def": "a person you work with in the same company or profession",
    "cn_def": "同事"
  },
  "coworker": {
    "pos": "n.",
    "en_def": "a person who works with you at the same place",
    "cn_def": "同事、同僚"
  },
  "teammate": {
    "pos": "n.",
    "en_def": "a person who is on the same team as you",
    "cn_def": "隊友、團隊夥伴"
  },
  "associate": {
    "pos": "n.",
    "en_def": "a person you work or do business with",
    "cn_def": "夥伴、合夥人、同事"
  },
  "staff": {
    "pos": "n.",
    "en_def": "all the people who work for an organization",
    "cn_def": "全體員工、職員"
  },
  "employee": {
    "pos": "n.",
    "en_def": "a person who is paid to work for a company",
    "cn_def": "員工、雇員"
  },
  "manager": {
    "pos": "n.",
    "en_def": "a person who controls or runs a department or business",
    "cn_def": "經理、主管"
  },
  "supervisor": {
    "pos": "n.",
    "en_def": "a person who watches and directs workers",
    "cn_def": "主管、督導"
  },
  "partner": {
    "pos": "n.",
    "en_def": "a person who owns or runs a business with another person",
    "cn_def": "合夥人、夥伴"
  },
  "professional": {
    "pos": "n.",
    "en_def": "a person who is trained and skilled in a job",
    "cn_def": "專業人士"
  },
  "team": {
    "pos": "n.",
    "en_def": "a group of people who work together",
    "cn_def": "團隊"
  },
  "workplace": {
    "pos": "n.",
    "en_def": "the place where people work",
    "cn_def": "工作場所、職場"
  },
  "cooperate": {
    "pos": "v.",
    "en_def": "to work together with others to reach a goal",
    "cn_def": "合作、配合"
  },
  "collaborate": {
    "pos": "v.",
    "en_def": "to work together with someone to create or produce something",
    "cn_def": "合作、協作"
  },
  "communicate": {
    "pos": "v.",
    "en_def": "to share information or ideas with other people",
    "cn_def": "溝通、傳達"
  },
  "support": {
    "pos": "v.",
    "en_def": "to help and encourage someone",
    "cn_def": "支持、支援"
  },
  "respect": {
    "pos": "v.",
    "en_def": "to admire someone and treat them well",
    "cn_def": "尊重、敬重"
  },
  "assist": {
    "pos": "v.",
    "en_def": "to help someone do something",
    "cn_def": "協助、幫助"
  },
  "reliable": {
    "pos": "adj.",
    "en_def": "able to be trusted to do something well",
    "cn_def": "可靠的"
  },
  "supportive": {
    "pos": "adj.",
    "en_def": "giving help and encouragement to others",
    "cn_def": "支持的、給予鼓勵的"
  },
  "helpful": {
    "pos": "adj.",
    "en_def": "useful, or willing to help",
    "cn_def": "有幫助的"
  },
  "experienced": {
    "pos": "adj.",
    "en_def": "having knowledge or skill from doing something for a long time",
    "cn_def": "有經驗的、經驗豐富的"
  },
  "skilled": {
    "pos": "adj.",
    "en_def": "having the ability and training to do something well",
    "cn_def": "熟練的、有技術的"
  },
  "friendly": {
    "pos": "adj.",
    "en_def": "kind and pleasant to other people",
    "cn_def": "友善的"
  },
  "efficient": {
    "pos": "adj.",
    "en_def": "working well without wasting time or money",
    "cn_def": "有效率的"
  },
  "dedicated": {
    "pos": "adj.",
    "en_def": "working hard and caring a lot about something",
    "cn_def": "盡心盡力的、專注投入的"
  },
  "trustworthy": {
    "pos": "adj.",
    "en_def": "able to be trusted; honest",
    "cn_def": "值得信賴的"
  },
  "busy": {
    "pos": "adj.",
    "en_def": "having a lot of things to do",
    "cn_def": "忙碌的"
  },
  "meeting": {
    "pos": "n.",
    "en_def": "an event where people come together to discuss something",
    "cn_def": "會議"
  },
  "project": {
    "pos": "n.",
    "en_def": "a planned piece of work with a clear goal",
    "cn_def": "專案、計畫"
  },
  "task": {
    "pos": "n.",
    "en_def": "a piece of work that must be done",
    "cn_def": "任務、工作"
  },
  "feedback": {
    "pos": "n.",
    "en_def": "comments about how good or bad something is",
    "cn_def": "回饋、意見"
  },
  "network": {
    "pos": "n.",
    "en_def": "a group of people who know and help each other",
    "cn_def": "人脈網絡"
  }
};

const EXTRA_GLOSSES = {};
