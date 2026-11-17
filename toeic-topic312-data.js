// Topic 312 Quiz Data: Project 專案
// Source word list: https://www.examword.com/group-topic/project — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T312 - Project 專案",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "task",
    "pos": "n.",
    "cn_def": "任務；工作",
    "en_def": "a piece of work that must be done",
    "sentence": "A: Since our manager is away at the trade fair in Tokyo this week, who is going to update the customer database before the sales meeting on Friday? B: Kevin offered to take on that {{BLANK}} because he knows the system well, and he said he could finish it by Thursday afternoon if nobody interrupts him.",
    "cn": "A：既然我們經理這週在東京參加貿易展，那誰要在週五的業務會議前更新客戶資料庫？ B：凱文主動接下這項【任務】，因為他很熟悉這個系統，他說如果沒人打擾，週四下午就能完成。"
  },
  {
    "word": "assignment",
    "pos": "n.",
    "cn_def": "指派的工作；任務",
    "en_def": "a job or piece of work given to someone",
    "sentence": "A: Did the director tell you why you are flying to Singapore next month instead of staying here to help with the new office opening? B: Yes, my new {{BLANK}} is to train the local staff there for three weeks, because they will start using our booking software in December.",
    "cn": "A：主任有告訴你為什麼下個月你要飛去新加坡，而不是留在這裡幫忙新辦公室開幕嗎？ B：有，我的新【任務】是在那裡培訓當地員工三週，因為他們十二月就要開始使用我們的訂位軟體。"
  },
  {
    "word": "objective",
    "pos": "n.",
    "cn_def": "目標",
    "en_def": "something you are trying to achieve",
    "sentence": "A: Before we start spending money on the new advertising campaign, can you explain what we actually want to achieve with it this year? B: Our main {{BLANK}} is to increase online sales by fifteen percent among young customers, so most of the ads will appear on social media rather than on television.",
    "cn": "A：在我們開始為新廣告活動花錢之前，你能說明我們今年到底想藉此達成什麼嗎？ B：我們的主要【目標】是讓年輕顧客的網路銷售成長百分之十五，所以大部分廣告會出現在社群媒體上，而不是電視上。"
  },
  {
    "word": "goal",
    "pos": "n.",
    "cn_def": "目標",
    "en_def": "something you hope to achieve in the future",
    "sentence": "A: Why are you taking evening classes in accounting after work when you already have such a busy schedule at the bank? B: My long-term {{BLANK}} is to become a branch manager within five years, and my supervisor told me that a stronger understanding of finance would really help my chances.",
    "cn": "A：你在銀行的行程已經那麼忙了，為什麼下班後還要上會計夜間課程？ B：我的長期【目標】是在五年內成為分行經理，而我的主管告訴我，更深入了解財務會大大提高我的機會。"
  },
  {
    "word": "target",
    "pos": "n.",
    "cn_def": "目標（數字）；指標",
    "en_def": "a level or result that you aim to reach",
    "sentence": "A: How did the sales department do in the third quarter, and will they get the bonus that management promised them in July? B: They sold more than twelve thousand units, which was well above their {{BLANK}} of ten thousand, so everyone on the team will receive an extra payment next month.",
    "cn": "A：業務部第三季表現如何？他們會拿到管理階層七月時承諾的獎金嗎？ B：他們賣出超過一萬兩千台，遠高於一萬台的【目標】，所以團隊每個人下個月都會拿到額外獎金。"
  },
  {
    "word": "plan",
    "pos": "v.",
    "cn_def": "計劃；規劃",
    "en_def": "to decide in detail what you will do",
    "sentence": "A: The company picnic is only three weeks away, and we still haven't booked a park or ordered any food, have we? B: No, so let's meet tomorrow morning to {{BLANK}} everything carefully, including the transportation, the games for the children, and a backup location in case it rains.",
    "cn": "A：公司野餐只剩三週了，我們還沒預訂公園，也還沒訂任何食物，對吧？ B：對，所以我們明天早上碰面，仔細【規劃】所有事情，包括交通、孩子們的遊戲，以及下雨時的備用地點。"
  },
  {
    "word": "proposal",
    "pos": "n.",
    "cn_def": "提案；建議書",
    "en_def": "a plan or idea that is formally suggested",
    "sentence": "A: Have you heard whether the city council accepted our company's offer to build the new sports center near the train station? B: Not yet, but they said they will review our {{BLANK}} together with three others next Monday, and they will announce the winning design by the end of the month.",
    "cn": "A：你有聽說市議會是否接受我們公司在火車站附近興建新運動中心的方案嗎？ B：還沒，但他們說下週一會把我們的【提案】和另外三份一起審查，並在月底前公布獲選的設計。"
  },
  {
    "word": "budget",
    "pos": "n.",
    "cn_def": "預算",
    "en_def": "the amount of money available to spend",
    "sentence": "A: Can we afford to hire a famous singer for the hotel's anniversary dinner, or should we look for a local band instead? B: I'm afraid we should choose the local band, because our {{BLANK}} for the whole event is only five thousand dollars, and the decorations and food will already cost most of it.",
    "cn": "A：我們請得起知名歌手來飯店的週年晚宴嗎，還是應該改找本地樂團？ B：恐怕我們應該選本地樂團，因為整場活動的【預算】只有五千美元，而裝飾和餐點就已經會花掉大部分了。"
  },
  {
    "word": "schedule",
    "pos": "v.",
    "cn_def": "安排時間；排定",
    "en_def": "to arrange for something to happen at a certain time",
    "sentence": "A: The engineers from Germany are arriving on Wednesday, so when would be the best time for them to visit our factory? B: Let's {{BLANK}} the tour for Thursday morning, because the production line will be running at full speed then, and they can join us for lunch in the staff cafeteria afterward.",
    "cn": "A：德國的工程師週三抵達，那他們什麼時候來參觀我們工廠最好？ B：我們把參觀【安排】在週四早上吧，因為那時生產線會全速運作，之後他們還可以和我們一起在員工餐廳吃午餐。"
  },
  {
    "word": "deadline",
    "pos": "n.",
    "cn_def": "截止期限",
    "en_def": "the latest time by which something must be done",
    "sentence": "A: Why is everyone in the marketing department still working at nine o'clock at night when they usually go home at six? B: The client wants the final version of the brochure by eight tomorrow morning, and if we miss the {{BLANK}}, they might give the next contract to another agency.",
    "cn": "A：行銷部的人平常六點就回家，為什麼晚上九點大家都還在工作？ B：客戶要求明天早上八點前拿到手冊的最終版，如果我們錯過【截止期限】，他們可能會把下一份合約交給別家公司。"
  },
  {
    "word": "milestone",
    "pos": "n.",
    "cn_def": "里程碑；重要階段",
    "en_def": "an important stage in the development of something",
    "sentence": "A: Why did the boss order pizza and cake for the whole software department this afternoon? Is it someone's birthday? B: No, we finally finished testing the first version of the mobile app, which is an important {{BLANK}}, and now we can start preparing for the official launch in spring.",
    "cn": "A：老闆今天下午為什麼幫整個軟體部門訂披薩和蛋糕？是有人生日嗎？ B：不是，我們終於完成了手機應用程式第一版的測試，這是一個重要的【里程碑】，現在我們可以開始準備春天的正式上市了。"
  },
  {
    "word": "team",
    "pos": "n.",
    "cn_def": "團隊",
    "en_def": "a group of people who work together",
    "sentence": "A: How are you going to finish redesigning the whole website in only two months when you are the only designer here? B: The manager agreed to give me a small {{BLANK}} of three people, including a programmer and a writer, so we can divide the work and finish on time.",
    "cn": "A：這裡只有你一個設計師，你要怎麼在短短兩個月內完成整個網站的改版？ B：經理同意給我一個三人的小【團隊】，包括一位程式設計師和一位文案，所以我們可以分工並準時完成。"
  },
  {
    "word": "leader",
    "pos": "n.",
    "cn_def": "領導者；負責人",
    "en_def": "a person who guides or is in charge of a group",
    "sentence": "A: Who should I contact if I have questions about the new delivery system while the regional manager is on vacation? B: You can call Ms. Chen, because she is the {{BLANK}} of the group that built the system, and she knows how to solve almost every problem with it.",
    "cn": "A：區域經理休假期間，如果我對新的配送系統有疑問，應該聯絡誰？ B：你可以打給陳小姐，因為她是建立這套系統的小組【負責人】，幾乎每個問題她都知道怎麼解決。"
  },
  {
    "word": "collaborate",
    "pos": "v.",
    "cn_def": "合作",
    "en_def": "to work together with someone",
    "sentence": "A: Is it true that our company is going to work with that famous Japanese electronics firm on a new line of kitchen products? B: Yes, our two companies will {{BLANK}} on the design for the next eighteen months, and the first rice cookers should appear in stores across Asia by next winter.",
    "cn": "A：我們公司真的要和那家知名的日本電子公司一起推出新的廚房產品系列嗎？ B：是的，我們兩家公司未來十八個月將在設計上【合作】，第一批電子鍋預計明年冬天會出現在亞洲各地的商店。"
  },
  {
    "word": "coordinate",
    "pos": "v.",
    "cn_def": "協調",
    "en_def": "to organize people or activities so they work well together",
    "sentence": "A: There will be guests from four different countries at the conference, so who is going to make sure their flights, hotels, and meetings all fit together? B: Linda will {{BLANK}} all the travel arrangements, because she speaks three languages and has organized several international events for our company before.",
    "cn": "A：會議會有來自四個不同國家的來賓，那誰要確保他們的航班、飯店和會議都能銜接？ B：琳達會【協調】所有的差旅安排，因為她會說三種語言，而且之前已經為公司籌辦過好幾場國際活動。"
  },
  {
    "word": "manage",
    "pos": "v.",
    "cn_def": "管理",
    "en_def": "to be in charge of and control something",
    "sentence": "A: Now that Mr. Lopez has retired, who is going to take care of the new restaurant that we are opening downtown in March? B: The owners have asked Sophie to {{BLANK}} it, because she has worked in the kitchen and at the front desk, and the staff already trust her a lot.",
    "cn": "A：既然羅培茲先生退休了，那三月要在市中心開的新餐廳由誰負責？ B：老闆們請蘇菲來【管理】，因為她在廚房和櫃檯都待過，員工們也已經很信任她。"
  },
  {
    "word": "supervise",
    "pos": "v.",
    "cn_def": "監督；督導",
    "en_def": "to watch over people or work to make sure it is done correctly",
    "sentence": "A: Why does a senior engineer have to stay at the construction site every day while the new office building is being built? B: Someone needs to {{BLANK}} the workers closely, because the walls must be completed exactly according to the safety rules, and any mistake could be very expensive later.",
    "cn": "A：新辦公大樓興建期間，為什麼每天都要有一位資深工程師待在工地？ B：需要有人密切【監督】工人，因為牆面必須完全依照安全規範完成，任何錯誤日後都可能代價很高。"
  },
  {
    "word": "implement",
    "pos": "v.",
    "cn_def": "實施；執行",
    "en_def": "to start using a plan or system",
    "sentence": "A: The committee finally approved the new recycling rules last week, so when will employees have to start following them in the office? B: We will {{BLANK}} the changes on the first of next month, and before that, every department will receive new bins and a short guide explaining what goes where.",
    "cn": "A：委員會上週終於通過了新的回收規定，那員工什麼時候要開始在辦公室遵守？ B：我們會在下個月一號【實施】這些變更，在那之前，每個部門都會收到新的回收桶和一份說明分類方式的簡短指南。"
  },
  {
    "word": "execute",
    "pos": "v.",
    "cn_def": "執行",
    "en_def": "to carry out a plan or task",
    "sentence": "A: The new marketing strategy looks great on paper, but do you think our small staff can really carry it out before the holiday season? B: I think we can {{BLANK}} it successfully if we hire two part-time assistants, because most of the work involves posting online and answering customer messages.",
    "cn": "A：新的行銷策略紙上看起來很棒，但你覺得我們人手這麼少，真的能在假期旺季前完成嗎？ B：我想如果我們請兩位兼職助理，就能成功【執行】，因為大部分工作是在網路上發文和回覆顧客訊息。"
  },
  {
    "word": "research",
    "pos": "n.",
    "cn_def": "研究；調查",
    "en_def": "careful study to find new facts",
    "sentence": "A: Before we open a coffee shop near the university, shouldn't we find out what students actually like to drink and how much they spend? B: Yes, we have already hired a company to do some {{BLANK}}, and they will interview about five hundred students and send us the results in three weeks.",
    "cn": "A：在大學附近開咖啡店之前，我們不是應該先了解學生實際喜歡喝什麼、花多少錢嗎？ B：是的，我們已經請了一家公司做【調查】，他們會訪問大約五百名學生，三週後把結果寄給我們。"
  },
  {
    "word": "analysis",
    "pos": "n.",
    "cn_def": "分析",
    "en_def": "a careful study of something in order to understand it",
    "sentence": "A: Why did the sales of our winter jackets fall so much this year, even though we lowered the prices in November? B: According to the {{BLANK}} that the finance department prepared, the weather was much warmer than usual, and many customers bought lighter coats from our competitors instead.",
    "cn": "A：為什麼我們的冬季外套今年銷量下滑這麼多，即使我們十一月已經降價了？ B：根據財務部準備的【分析】，今年天氣比平常暖和許多，很多顧客改向競爭對手購買較輕薄的外套。"
  },
  {
    "word": "design",
    "pos": "n.",
    "cn_def": "設計",
    "en_def": "the way something is planned and made to look or work",
    "sentence": "A: Have the customers said anything about the new coffee machine that we started selling at the beginning of the month? B: Most of them love its simple {{BLANK}} and the bright colors, but a few people complained that the water tank is too small for a busy office.",
    "cn": "A：顧客對我們月初開始販售的新咖啡機有說什麼嗎？ B：大多數人喜歡它簡約的【設計】和鮮豔的顏色，但有幾個人抱怨水箱對忙碌的辦公室來說太小了。"
  },
  {
    "word": "development",
    "pos": "n.",
    "cn_def": "開發；發展",
    "en_def": "the process of creating or growing something new",
    "sentence": "A: How long will it take before our company can start selling the new electric scooter that the engineers have been talking about? B: It is still in {{BLANK}}, so the engineers need about another year to test the battery and improve the brakes before it is ready for customers.",
    "cn": "A：工程師們一直在談論的新電動滑板車，我們公司還要多久才能開始販售？ B：它還在【開發】中，所以工程師們還需要大約一年來測試電池和改良煞車，才能交到顧客手上。"
  },
  {
    "word": "progress",
    "pos": "n.",
    "cn_def": "進度；進展",
    "en_def": "movement toward finishing or improving something",
    "sentence": "A: How is the renovation of the hotel lobby going, since the director is worried because the first wedding party is booked for next month? B: Tell her we are making good {{BLANK}}, since the new floor is already finished and the painters will complete the walls by Friday.",
    "cn": "A：飯店大廳的整修進行得如何？主任很擔心，因為第一場婚宴已經預訂在下個月。 B：告訴她我們的【進度】很順利，新地板已經完成，油漆工週五前就會把牆面完成。"
  },
  {
    "word": "review",
    "pos": "n.",
    "cn_def": "審查；檢討",
    "en_def": "a careful look at something in order to judge it",
    "sentence": "A: Why did the manager ask all of us to stay after the meeting on Friday, even though most people wanted to leave early for the weekend? B: She wanted to hold a quick {{BLANK}} of last month's work, so that we could talk about what went well and what we should change next time.",
    "cn": "A：為什麼經理要我們週五會議後全部留下來，雖然大多數人想早點下班過週末？ B：她想快速做個上個月工作的【檢討】，讓我們可以談談哪些做得好、下次應該改進什麼。"
  },
  {
    "word": "feedback",
    "pos": "n.",
    "cn_def": "回饋；意見",
    "en_def": "comments about how good or useful something is",
    "sentence": "A: We changed the layout of the online store last week, so how do we know whether customers find it easier to use now? B: We have sent a short survey to five hundred shoppers, and their {{BLANK}} will tell us which parts are clear and which parts still confuse people.",
    "cn": "A：我們上週改了網路商店的版面，那我們怎麼知道顧客現在是否覺得比較好用？ B：我們已經寄了一份簡短問卷給五百位購物者，他們的【意見回饋】會告訴我們哪些部分清楚、哪些部分仍讓人困惑。"
  },
  {
    "word": "risk",
    "pos": "n.",
    "cn_def": "風險",
    "en_def": "the chance that something bad will happen",
    "sentence": "A: Should we pay extra to send the medical equipment to Brazil by air, or is it fine to ship it by sea as usual? B: Shipping by sea is cheaper, but there is a high {{BLANK}} that it will arrive late because of the storms this season, and the hospital needs it before December.",
    "cn": "A：我們應該多付錢把醫療設備空運到巴西，還是像平常一樣海運就好？ B：海運比較便宜，但這個季節因為暴風雨，晚到的【風險】很高，而醫院在十二月前就需要這批設備。"
  },
  {
    "word": "challenge",
    "pos": "n.",
    "cn_def": "挑戰",
    "en_def": "something difficult that tests your ability",
    "sentence": "A: How do you feel about moving to the Bangkok office to open our first branch in Thailand next year? B: It will be a real {{BLANK}}, because I don't speak Thai and I have never hired staff before, but I'm excited to learn and grow in the new position.",
    "cn": "A：明年調到曼谷辦公室、開設我們在泰國的第一家分公司，你覺得怎麼樣？ B：這會是很大的【挑戰】，因為我不會說泰語，也從沒招募過員工，但我很期待在新職位上學習和成長。"
  },
  {
    "word": "solution",
    "pos": "n.",
    "cn_def": "解決辦法",
    "en_def": "a way to solve a problem",
    "sentence": "A: Our customers keep complaining that they wait too long on the phone when they call the help center during lunchtime, so what can we do? B: One possible {{BLANK}} is to let staff take lunch at different times, so that at least four people are always available to answer calls.",
    "cn": "A：顧客一直抱怨午餐時間打給服務中心要等太久，我們能怎麼辦？ B：一個可行的【解決辦法】是讓員工錯開午餐時間，這樣隨時至少有四個人可以接電話。"
  },
  {
    "word": "outcome",
    "pos": "n.",
    "cn_def": "結果",
    "en_def": "the final result of an activity",
    "sentence": "A: Did you hear what happened at yesterday's meeting between our lawyers and the supplier about the damaged shipment? B: Yes, the {{BLANK}} was better than we expected, because the supplier agreed to replace all the broken items for free and give us a discount on our next order.",
    "cn": "A：你有聽說昨天我們的律師和供應商針對受損貨物開會的情況嗎？ B：有，【結果】比我們預期的好，因為供應商同意免費更換所有損壞的物品，並在我們下一筆訂單給予折扣。"
  },
  {
    "word": "report",
    "pos": "n.",
    "cn_def": "報告",
    "en_def": "a written document that gives information about something",
    "sentence": "A: The board members want to see how much money we spent on the new training program, so what should I prepare for Monday? B: Please write a short {{BLANK}} that shows all the costs, the number of employees who attended, and their test results before and after the course.",
    "cn": "A：董事會成員想看看我們在新訓練計畫上花了多少錢，我星期一前應該準備什麼？ B：請寫一份簡短的【報告】，列出所有費用、參加的員工人數，以及他們上課前後的測驗成績。"
  },
  {
    "word": "deliverable",
    "pos": "n.",
    "cn_def": "交付成果；應交付項目",
    "en_def": "a product or result that must be given to a client by a set time",
    "sentence": "A: Can you tell me exactly what the client will receive from us at the end of each stage of the website project? B: Each {{BLANK}} is listed in the contract, such as the homepage design in May and the finished online shopping system in July, so I'll email them a copy today.",
    "cn": "A：你能告訴我在網站專案的每個階段結束時，客戶會從我們這裡確切收到什麼嗎？ B：每項【交付成果】都列在合約裡，例如五月的首頁設計和七月完成的網路購物系統，所以我今天會寄一份副本給他們。"
  },
  {
    "word": "efficient",
    "pos": "adj.",
    "cn_def": "有效率的",
    "en_def": "working well without wasting time or money",
    "sentence": "A: Why did the warehouse decide to buy those expensive new scanners when the old ones were still working? B: The new scanners are much more {{BLANK}}, because workers can check a whole box of goods in seconds, so orders leave the building faster and we save money on overtime.",
    "cn": "A：舊的掃描器還能用，為什麼倉庫決定買那些昂貴的新掃描器？ B：新的掃描器【有效率】多了，因為工人幾秒鐘就能檢查完一整箱貨物，所以訂單出貨更快，我們也省下加班費。"
  },
  {
    "word": "successful",
    "pos": "adj.",
    "cn_def": "成功的",
    "en_def": "achieving the result you wanted",
    "sentence": "A: How did the new restaurant do during its first weekend, and were there enough waiters to serve all the guests? B: It was very {{BLANK}}, because almost every table was full on both nights, and the extra staff we hired helped everything run smoothly even when the kitchen got busy.",
    "cn": "A：新餐廳第一個週末表現如何？服務生夠不夠招呼所有客人？ B：非常【成功】，兩個晚上幾乎每桌都客滿，而我們加請的人手讓一切運作順暢，即使廚房很忙也沒問題。"
  }
];

const MCQS = [
  {
    "q": "Kevin was given the _____ of updating the customer database. He finished it two days earlier than expected.",
    "options": [
      "task",
      "budget",
      "deadline",
      "risk"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Peter accepted an overseas _____ in Vietnam for six months. He will train new staff at the Hanoi factory.",
    "options": [
      "budget",
      "outcome",
      "assignment",
      "feedback"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The main _____ of the campaign is to attract younger customers. All of our ads will therefore appear on social media.",
    "options": [
      "deadline",
      "objective",
      "risk",
      "report"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Our sales department exceeded its monthly _____ by twenty percent. Every member will receive a bonus in their next paycheck.",
    "options": [
      "proposal",
      "solution",
      "leader",
      "target"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The engineering firm submitted a detailed _____ for the new bridge. The city council will vote on it next Tuesday.",
    "options": [
      "outcome",
      "progress",
      "proposal",
      "milestone"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "We cannot hire more staff this year because our _____ is very limited. We must find cheaper ways to finish the work.",
    "options": [
      "budget",
      "milestone",
      "feedback",
      "leader"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The report must reach the client by noon on Friday. If we miss the _____, we may lose the contract.",
    "options": [
      "analysis",
      "design",
      "team",
      "deadline"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Finishing the first test version was an important _____ for the app. Everyone celebrated with pizza in the meeting room.",
    "options": [
      "budget",
      "milestone",
      "proposal",
      "research"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The manager put together a small _____ of four experts. They will work together to redesign the company website.",
    "options": [
      "team",
      "budget",
      "risk",
      "outcome"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "As the _____ of the research group, Helen makes the final decisions. Everyone reports to her every Monday morning.",
    "options": [
      "deliverable",
      "solution",
      "leader",
      "milestone"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Our designers will _____ with a Japanese firm on the new product line. The two companies will share their ideas and costs.",
    "options": [
      "supervise",
      "collaborate",
      "execute",
      "implement"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The event planner must _____ the caterers, the musicians, and the decorators. She makes sure they all work together smoothly.",
    "options": [
      "collaborate",
      "implement",
      "execute",
      "coordinate"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "After the owner retired, his daughter began to _____ the family hotel. She now handles the staff, money, and bookings.",
    "options": [
      "collaborate",
      "implement",
      "manage",
      "execute"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "A senior nurse will _____ the new staff during their first month. She will watch them closely and correct any mistakes.",
    "options": [
      "supervise",
      "collaborate",
      "implement",
      "execute"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The company will _____ the new recycling policy next month. All departments will receive new bins before then.",
    "options": [
      "collaborate",
      "supervise",
      "coordinate",
      "implement"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "We hired two extra assistants to help us _____ the strategy quickly. Without them, the plan could not be carried out on time.",
    "options": [
      "collaborate",
      "execute",
      "supervise",
      "coordinate"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Before opening the café, we did some market _____ among local students. We learned that most of them prefer iced tea.",
    "options": [
      "research",
      "risk",
      "target",
      "deliverable"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "According to a careful _____ of last year's sales data, winter products sold poorly. The warm weather was the main reason.",
    "options": [
      "proposal",
      "team",
      "analysis",
      "deadline"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The architect showed us her _____ for the new library. It includes large windows and a beautiful rooftop garden.",
    "options": [
      "budget",
      "design",
      "deadline",
      "feedback"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The electric scooter is still in _____, so it will not reach stores this year. Engineers are still testing the battery.",
    "options": [
      "risk",
      "feedback",
      "outcome",
      "development"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The builders are making good _____ on the hotel lobby. The new floor is already finished, and the walls are nearly painted.",
    "options": [
      "outcome",
      "risk",
      "progress",
      "budget"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "We asked shoppers to complete a survey about our new website. Their _____ helped us fix several confusing pages.",
    "options": [
      "feedback",
      "milestone",
      "budget",
      "deadline"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Shipping by sea is cheaper, but there is a high _____ of delay during the storm season. We decided to send the goods by air.",
    "options": [
      "target",
      "budget",
      "solution",
      "risk"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Opening a branch in a new country is a big _____ for a small company. It requires much time, money, and patience.",
    "options": [
      "deliverable",
      "challenge",
      "feedback",
      "report"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Customers waited too long on the phone at lunchtime. The best _____ was to let staff take their breaks at different times.",
    "options": [
      "solution",
      "deadline",
      "milestone",
      "budget"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Both sides were happy with the _____ of the negotiation. The supplier agreed to replace the damaged goods for free.",
    "options": [
      "deadline",
      "team",
      "outcome",
      "research"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Please write a short _____ about the training costs for the board. Include the number of employees who attended.",
    "options": [
      "team",
      "report",
      "risk",
      "milestone"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The first _____ in the contract is the homepage design. The client expects to receive it by the end of May.",
    "options": [
      "risk",
      "leader",
      "challenge",
      "deliverable"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The new scanners are much more _____ than the old ones. Workers can now check a whole box of goods in seconds.",
    "options": [
      "careless",
      "fragile",
      "efficient",
      "gloomy"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The product launch was very _____, and sales were twice as high as expected. The manager thanked everyone for their hard work.",
    "options": [
      "successful",
      "careless",
      "nervous",
      "fragile"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "task": {
    "pos": "n.",
    "en_def": "a piece of work that must be done",
    "cn_def": "任務；工作"
  },
  "assignment": {
    "pos": "n.",
    "en_def": "a job or piece of work given to someone",
    "cn_def": "指派的工作；任務"
  },
  "objective": {
    "pos": "n.",
    "en_def": "something you are trying to achieve",
    "cn_def": "目標"
  },
  "goal": {
    "pos": "n.",
    "en_def": "something you hope to achieve in the future",
    "cn_def": "目標"
  },
  "target": {
    "pos": "n.",
    "en_def": "a level or result that you aim to reach",
    "cn_def": "目標（數字）；指標"
  },
  "plan": {
    "pos": "v.",
    "en_def": "to decide in detail what you will do",
    "cn_def": "計劃；規劃"
  },
  "proposal": {
    "pos": "n.",
    "en_def": "a plan or idea that is formally suggested",
    "cn_def": "提案；建議書"
  },
  "budget": {
    "pos": "n.",
    "en_def": "the amount of money available to spend",
    "cn_def": "預算"
  },
  "schedule": {
    "pos": "v.",
    "en_def": "to arrange for something to happen at a certain time",
    "cn_def": "安排時間；排定"
  },
  "deadline": {
    "pos": "n.",
    "en_def": "the latest time by which something must be done",
    "cn_def": "截止期限"
  },
  "milestone": {
    "pos": "n.",
    "en_def": "an important stage in the development of something",
    "cn_def": "里程碑；重要階段"
  },
  "team": {
    "pos": "n.",
    "en_def": "a group of people who work together",
    "cn_def": "團隊"
  },
  "leader": {
    "pos": "n.",
    "en_def": "a person who guides or is in charge of a group",
    "cn_def": "領導者；負責人"
  },
  "collaborate": {
    "pos": "v.",
    "en_def": "to work together with someone",
    "cn_def": "合作"
  },
  "coordinate": {
    "pos": "v.",
    "en_def": "to organize people or activities so they work well together",
    "cn_def": "協調"
  },
  "manage": {
    "pos": "v.",
    "en_def": "to be in charge of and control something",
    "cn_def": "管理"
  },
  "supervise": {
    "pos": "v.",
    "en_def": "to watch over people or work to make sure it is done correctly",
    "cn_def": "監督；督導"
  },
  "implement": {
    "pos": "v.",
    "en_def": "to start using a plan or system",
    "cn_def": "實施；執行"
  },
  "execute": {
    "pos": "v.",
    "en_def": "to carry out a plan or task",
    "cn_def": "執行"
  },
  "research": {
    "pos": "n.",
    "en_def": "careful study to find new facts",
    "cn_def": "研究；調查"
  },
  "analysis": {
    "pos": "n.",
    "en_def": "a careful study of something in order to understand it",
    "cn_def": "分析"
  },
  "design": {
    "pos": "n.",
    "en_def": "the way something is planned and made to look or work",
    "cn_def": "設計"
  },
  "development": {
    "pos": "n.",
    "en_def": "the process of creating or growing something new",
    "cn_def": "開發；發展"
  },
  "progress": {
    "pos": "n.",
    "en_def": "movement toward finishing or improving something",
    "cn_def": "進度；進展"
  },
  "review": {
    "pos": "n.",
    "en_def": "a careful look at something in order to judge it",
    "cn_def": "審查；檢討"
  },
  "feedback": {
    "pos": "n.",
    "en_def": "comments about how good or useful something is",
    "cn_def": "回饋；意見"
  },
  "risk": {
    "pos": "n.",
    "en_def": "the chance that something bad will happen",
    "cn_def": "風險"
  },
  "challenge": {
    "pos": "n.",
    "en_def": "something difficult that tests your ability",
    "cn_def": "挑戰"
  },
  "solution": {
    "pos": "n.",
    "en_def": "a way to solve a problem",
    "cn_def": "解決辦法"
  },
  "outcome": {
    "pos": "n.",
    "en_def": "the final result of an activity",
    "cn_def": "結果"
  },
  "report": {
    "pos": "n.",
    "en_def": "a written document that gives information about something",
    "cn_def": "報告"
  },
  "deliverable": {
    "pos": "n.",
    "en_def": "a product or result that must be given to a client by a set time",
    "cn_def": "交付成果；應交付項目"
  },
  "efficient": {
    "pos": "adj.",
    "en_def": "working well without wasting time or money",
    "cn_def": "有效率的"
  },
  "successful": {
    "pos": "adj.",
    "en_def": "achieving the result you wanted",
    "cn_def": "成功的"
  }
};

const EXTRA_GLOSSES = {};
