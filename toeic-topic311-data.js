// Topic 311 Quiz Data: Program 計畫節目
// Source word list: https://www.examword.com/group-topic/program — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T311 - Program 計畫節目",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "programme",
    "pos": "n.",
    "cn_def": "計畫；節目；課程",
    "en_def": "a planned series of activities or events (British spelling)",
    "sentence": "A: I heard the London office is starting a new training scheme for graduates next spring, but do you know how long it lasts and who can apply? B: Yes, the {{BLANK}} runs for six months, and any staff member with less than two years of experience can join if their manager agrees.",
    "cn": "A：我聽說倫敦辦公室明年春天要為畢業生推出新的培訓方案，你知道它為期多久、誰可以申請嗎？ B：知道，這個【計畫】為期六個月，任何資歷未滿兩年的員工只要主管同意都可以參加。"
  },
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "時間表；行程表",
    "en_def": "a plan that lists the times when things will happen",
    "sentence": "A: Could you tell me when the factory tour starts tomorrow, because I need to book a taxi from the hotel and I don't want to arrive late? B: According to the {{BLANK}} that the visitor center sent us, the tour begins at nine thirty, so leaving at nine should be enough.",
    "cn": "A：你能告訴我明天的工廠參觀幾點開始嗎？因為我需要從飯店預約計程車，不想遲到。 B：根據遊客中心寄給我們的【時間表】，參觀九點半開始，所以九點出發應該就夠了。"
  },
  {
    "word": "agenda",
    "pos": "n.",
    "cn_def": "議程",
    "en_def": "a list of topics to discuss at a meeting",
    "sentence": "A: Before the board meeting on Thursday afternoon, should I send everyone a list of the topics we plan to discuss, so they can prepare their reports? B: Yes, please email the {{BLANK}} by Tuesday, and put the budget review first because the finance director has to leave early.",
    "cn": "A：在週四下午的董事會之前，我要不要把我們打算討論的主題清單寄給大家，讓他們準備報告？ B：要，請在週二前把【議程】寄出，並把預算審查放在第一項，因為財務長必須提早離開。"
  },
  {
    "word": "curriculum",
    "pos": "n.",
    "cn_def": "課程（總稱）",
    "en_def": "all the subjects taught in a school or training course",
    "sentence": "A: Our new employees keep saying the training center teaches too much theory, so what changes is the education team planning for next year? B: They are redesigning the whole {{BLANK}} so that it includes more customer service practice, online safety lessons, and real case studies from our stores.",
    "cn": "A：我們的新進員工一直說培訓中心教太多理論，那教育團隊明年打算做什麼改變？ B：他們正在重新設計整個【課程】，加入更多客戶服務練習、網路安全課程，以及我們門市的真實案例研究。"
  },
  {
    "word": "course",
    "pos": "n.",
    "cn_def": "課程",
    "en_def": "a series of lessons on a subject",
    "sentence": "A: I want to improve my spreadsheet skills because my new position involves a lot of sales data, but I only have free time on weekday evenings. B: The community college offers an online {{BLANK}} that meets every Tuesday night for eight weeks, and the company will pay half the fee.",
    "cn": "A：我想加強試算表技能，因為我的新職位要處理大量銷售數據，但我只有平日晚上有空。 B：社區大學開設了一門線上【課程】，連續八週每週二晚上上課，而且公司會負擔一半的費用。"
  },
  {
    "word": "module",
    "pos": "n.",
    "cn_def": "單元；模組",
    "en_def": "one separate part of a course or system",
    "sentence": "A: How far have you gotten in the online safety training that the human resources department asked us to finish before the end of the month? B: I've completed three parts already, and tonight I'll do the final {{BLANK}}, which covers fire exits and first aid, then take the short test.",
    "cn": "A：人資部要求我們在月底前完成的線上安全訓練，你做到哪裡了？ B：我已經完成三個部分，今晚會做最後一個【單元】，內容是逃生出口和急救，然後參加簡短的測驗。"
  },
  {
    "word": "session",
    "pos": "n.",
    "cn_def": "（一節）課程；會議時段",
    "en_def": "a period of time used for one activity, such as a class or meeting",
    "sentence": "A: The new accounting software looks quite difficult, so will someone from the supplier show us how to use it before we start next week? B: Yes, their trainer will run a two-hour {{BLANK}} in the main meeting room on Friday morning, and coffee and snacks will be provided.",
    "cn": "A：新的會計軟體看起來很難，下週開始使用之前，供應商會派人教我們怎麼用嗎？ B：會，他們的講師週五早上會在主會議室進行一場兩小時的【課程】，還會提供咖啡和點心。"
  },
  {
    "word": "workshop",
    "pos": "n.",
    "cn_def": "工作坊；研習會",
    "en_def": "a meeting where people learn by doing activities together",
    "sentence": "A: Our sales team often has trouble handling angry customers on the phone, so is there any practical training we could join this quarter? B: The marketing association is holding a one-day {{BLANK}} next month where participants practice difficult calls in small groups and get advice from experienced managers.",
    "cn": "A：我們的業務團隊在電話中常常不知道如何應付生氣的客戶，這一季有什麼實用的訓練可以參加嗎？ B：行銷協會下個月要舉辦一天的【工作坊】，學員會分小組練習困難的電話，並得到資深經理的建議。"
  },
  {
    "word": "seminar",
    "pos": "n.",
    "cn_def": "研討會；講座",
    "en_def": "a meeting where an expert talks and a group discusses a subject",
    "sentence": "A: Are you going to the talk about new tax rules for small businesses that the bank is organizing at the hotel downtown on Wednesday? B: Yes, I already signed up for the {{BLANK}}, because the speaker is a well-known accountant and there will be time for questions afterward.",
    "cn": "A：週三銀行在市中心飯店舉辦的小型企業新稅法講座，你會去嗎？ B：會，我已經報名參加這場【研討會】了，因為講者是知名會計師，而且會後還有提問時間。"
  },
  {
    "word": "conference",
    "pos": "n.",
    "cn_def": "會議；大會",
    "en_def": "a large formal meeting where people discuss a topic for one or more days",
    "sentence": "A: Why is the hotel so busy this week, and why are there so many people wearing name badges in the lobby? B: There's a three-day international {{BLANK}} on renewable energy, and about two thousand engineers and business leaders from over forty countries are attending it.",
    "cn": "A：為什麼飯店這週這麼忙，大廳裡還有那麼多人戴著名牌？ B：這裡正在舉行一場為期三天的再生能源國際【會議】，大約有來自四十多個國家的兩千名工程師和企業領袖參加。"
  },
  {
    "word": "event",
    "pos": "n.",
    "cn_def": "活動",
    "en_def": "something planned that happens, such as a party or meeting",
    "sentence": "A: The company is celebrating its twentieth anniversary next month, so who is in charge of booking the venue, the food, and the music? B: Sarah from the marketing team is managing the whole {{BLANK}}, and she has already reserved a large hall near the river for about three hundred guests.",
    "cn": "A：公司下個月要慶祝二十週年，誰負責預訂場地、餐點和音樂？ B：行銷團隊的莎拉負責整場【活動】，她已經在河邊預訂了一個可容納約三百位賓客的大廳。"
  },
  {
    "word": "project",
    "pos": "n.",
    "cn_def": "專案；計畫",
    "en_def": "a planned piece of work with a clear goal",
    "sentence": "A: You've been staying in the office late every night this week, so what exactly are you working on with the design team? B: We're finishing a big {{BLANK}} for a hotel chain that wants a new website and mobile app, and the deadline is next Monday morning.",
    "cn": "A：你這週每天晚上都在辦公室待到很晚，你和設計團隊到底在做什麼？ B：我們正在完成一個大型【專案】，客戶是一家想要新網站和手機應用程式的連鎖飯店，截止日期是下週一早上。"
  },
  {
    "word": "initiative",
    "pos": "n.",
    "cn_def": "新措施；倡議",
    "en_def": "a new plan or action to solve a problem or reach a goal",
    "sentence": "A: I noticed recycling bins on every floor and posters about saving electricity, so is the company trying to become more environmentally friendly? B: Yes, it's part of a new green {{BLANK}} started by the CEO, and every department must reduce its paper and energy use by twenty percent this year.",
    "cn": "A：我注意到每層樓都有回收桶，還有節約用電的海報，公司是想變得更環保嗎？ B：是的，這是執行長發起的一項新的環保【措施】，今年每個部門都必須把紙張和能源用量減少百分之二十。"
  },
  {
    "word": "campaign",
    "pos": "n.",
    "cn_def": "宣傳活動",
    "en_def": "a planned series of actions to reach a goal, such as selling a product",
    "sentence": "A: Sales of our new sports drink were quite low last quarter, so how is the marketing department planning to attract more young customers? B: They're starting a social media {{BLANK}} next week with short videos featuring famous athletes, and it will run for three months across several platforms.",
    "cn": "A：我們新運動飲料上一季的銷量很低，行銷部打算怎麼吸引更多年輕客戶？ B：他們下週要展開一項社群媒體【宣傳活動】，用知名運動員主演的短影片，在多個平台上進行三個月。"
  },
  {
    "word": "plan",
    "pos": "n.",
    "cn_def": "計畫",
    "en_def": "an idea or arrangement for doing something in the future",
    "sentence": "A: The client wants us to open three new branches in the south by next year, so how are we going to manage that with such a small team? B: The manager has a detailed {{BLANK}} that includes hiring twenty local staff, renting offices in each city, and opening one branch every four months.",
    "cn": "A：客戶希望我們明年之前在南部開三家新分店，我們這麼小的團隊要怎麼做到？ B：經理有一份詳細的【計畫】，包括聘請二十名當地員工、在每個城市租辦公室，以及每四個月開一家分店。"
  },
  {
    "word": "outline",
    "pos": "n.",
    "cn_def": "大綱；概要",
    "en_def": "a short description of the main points of something",
    "sentence": "A: The director wants to see my ideas for the new training program before Friday, but I haven't finished writing the full proposal yet. B: Then just send her a one-page {{BLANK}} with the main goals, the budget, and the timeline, and you can add the details next week.",
    "cn": "A：主管想在週五前看到我對新培訓計畫的想法，但我還沒寫完完整的提案。 B：那就先寄給她一頁的【大綱】，寫出主要目標、預算和時程，細節下週再補充。"
  },
  {
    "word": "implement",
    "pos": "v.",
    "cn_def": "實施；執行",
    "en_def": "to start using a plan or system",
    "sentence": "A: The board finally approved the new flexible working policy yesterday, but when will employees actually be able to work from home two days a week? B: Human resources needs about a month to {{BLANK}} the policy, because they must update contracts, train managers, and set up new computer systems first.",
    "cn": "A：董事會昨天終於通過新的彈性工作政策，但員工什麼時候才能真正每週在家工作兩天？ B：人資部大約需要一個月來【實施】這項政策，因為他們必須先更新合約、培訓主管，並建置新的電腦系統。"
  },
  {
    "word": "organize",
    "pos": "v.",
    "cn_def": "籌辦；組織",
    "en_def": "to plan and arrange an activity",
    "sentence": "A: Our team worked really hard to finish the project early, so do you think we should do something special to thank everyone this month? B: Great idea, let's {{BLANK}} a dinner at that Italian restaurant near the station next Friday, and I'll ask the manager if the company can pay.",
    "cn": "A：我們團隊非常努力提早完成了專案，你覺得這個月我們應該做些特別的事來感謝大家嗎？ B：好主意，我們下週五在車站附近那家義大利餐廳【籌辦】一場晚餐吧，我會問經理公司能不能出錢。"
  },
  {
    "word": "coordinate",
    "pos": "v.",
    "cn_def": "協調",
    "en_def": "to make different people or groups work well together",
    "sentence": "A: The marketing, sales, and design teams all want to change the product launch schedule, and now nobody knows the correct dates. B: Someone needs to {{BLANK}} the three departments, so I'll set up a weekly meeting where their leaders can agree on one timeline together.",
    "cn": "A：行銷、業務和設計團隊都想更改產品上市時程，現在沒人知道正確日期了。 B：需要有人【協調】這三個部門，所以我會安排每週一次的會議，讓各部門主管一起商定統一的時程。"
  },
  {
    "word": "register",
    "pos": "v.",
    "cn_def": "登記；報名",
    "en_def": "to put your name on an official list, for example for a class or event",
    "sentence": "A: I'd like to attend the free business English classes that the city library is offering this autumn, but what do I need to do first? B: You have to {{BLANK}} on the library's website before the end of this week, because each class only has twenty seats and they fill up quickly.",
    "cn": "A：我想參加市立圖書館今年秋天開設的免費商用英文課，我需要先做什麼？ B：你必須在這週結束前到圖書館網站【報名】，因為每班只有二十個名額，很快就會額滿。"
  },
  {
    "word": "enroll",
    "pos": "v.",
    "cn_def": "註冊；入學",
    "en_def": "to officially join a school, course, or program",
    "sentence": "A: My manager says I need a marketing certificate if I want a promotion next year, but I'm worried I won't have time to study while working full-time. B: Many people {{BLANK}} in the university's part-time evening program, which takes ten months and lets you attend most lectures online.",
    "cn": "A：我主管說如果我明年想升遷就需要行銷證照，但我擔心全職工作時沒時間念書。 B：很多人會【註冊】大學的兼職夜間課程，為期十個月，而且大部分課程都可以在線上上。"
  },
  {
    "word": "participate",
    "pos": "v.",
    "cn_def": "參加；參與",
    "en_def": "to take part in an activity",
    "sentence": "A: The company is organizing a charity run along the river next Saturday to raise money for the children's hospital, so are you joining us? B: I'd love to {{BLANK}}, but I hurt my knee last month, so maybe I can help at the water station instead of running.",
    "cn": "A：公司下週六要沿著河邊舉辦慈善路跑，為兒童醫院募款，你要和我們一起參加嗎？ B：我很想【參加】，但我上個月膝蓋受傷了，所以也許我可以在補水站幫忙，而不是跑步。"
  },
  {
    "word": "monitor",
    "pos": "v.",
    "cn_def": "監控；監測",
    "en_def": "to watch and check something over a period of time",
    "sentence": "A: Since we changed suppliers last month, a few customers have complained about broken parts, so what should our quality team do now? B: They should {{BLANK}} every shipment closely for the next three months, and record any damage so we can discuss the problem with the supplier.",
    "cn": "A：自從上個月我們換了供應商，有幾位客戶抱怨零件損壞，我們的品管團隊現在該怎麼做？ B：他們應該在接下來三個月密切【監控】每一批貨，並記錄任何損壞，以便我們和供應商討論這個問題。"
  },
  {
    "word": "evaluate",
    "pos": "v.",
    "cn_def": "評估",
    "en_def": "to judge how good or useful something is",
    "sentence": "A: We've been using the new online booking system at our hotels for six months now, but nobody knows if it's really saving us money. B: Let's hire an outside consultant to {{BLANK}} the system carefully, comparing costs, guest reviews, and staff working hours before and after we started using it.",
    "cn": "A：我們飯店使用新的線上訂房系統已經六個月了，但沒人知道它是否真的幫我們省錢。 B：我們請一位外部顧問來仔細【評估】這個系統吧，比較開始使用前後的成本、房客評價和員工工時。"
  },
  {
    "word": "launch",
    "pos": "v.",
    "cn_def": "推出；發起",
    "en_def": "to start selling a new product or begin a new activity",
    "sentence": "A: Everyone in the design department seems very excited today, so is there some good news about the new smartphone we've been developing? B: Yes, the company will officially {{BLANK}} the phone at a big press event in Tokyo next month, and stores will start selling it the following week.",
    "cn": "A：設計部的大家今天看起來都很興奮，我們一直在研發的新手機有什麼好消息嗎？ B：有，公司下個月將在東京的大型記者會上正式【推出】這款手機，下一週商店就會開始販售。"
  },
  {
    "word": "host",
    "pos": "v.",
    "cn_def": "主辦；主持",
    "en_def": "to organize an event and invite people to it",
    "sentence": "A: Which city will be holding next year's regional sales meeting, since all the branch managers will have to travel there in March? B: Our Taipei office will {{BLANK}} the meeting this time, so we need to book hotel rooms, a conference hall, and buses from the airport very soon.",
    "cn": "A：明年的區域業務會議在哪個城市舉行？因為所有分店經理三月都得去那裡。 B：這次由我們台北辦公室【主辦】這場會議，所以我們得盡快預訂飯店房間、會議廳和機場接駁巴士。"
  },
  {
    "word": "broadcast",
    "pos": "v.",
    "cn_def": "播出；廣播",
    "en_def": "to send out a program on TV, radio, or the internet",
    "sentence": "A: Many of our overseas staff can't fly here for the CEO's annual speech next week, so how will they be able to watch it? B: The IT team will {{BLANK}} the speech live on our company website, and they'll also record it so people in different time zones can watch later.",
    "cn": "A：我們很多海外員工下週無法飛來聽執行長的年度演講，他們要怎麼觀看？ B：資訊團隊會在公司網站上現場【播出】演講，也會錄影，讓不同時區的人之後可以觀看。"
  },
  {
    "word": "software",
    "pos": "n.",
    "cn_def": "軟體",
    "en_def": "the programs used by a computer",
    "sentence": "A: The accounting team says their computers keep freezing when they try to create monthly reports, so do we need to buy new machines? B: Not yet, I think the problem is the old {{BLANK}} they're using, so let's install the latest version first and see if the reports run faster.",
    "cn": "A：會計團隊說他們製作月報時電腦一直當機，我們需要買新電腦嗎？ B：還不用，我認為問題出在他們用的舊【軟體】，我們先安裝最新版本，看看報表會不會跑得比較快。"
  },
  {
    "word": "application",
    "pos": "n.",
    "cn_def": "應用程式",
    "en_def": "a computer program made for a particular job, especially on a phone",
    "sentence": "A: Customers keep calling our restaurant to ask about table bookings, and the staff are too busy to answer every call during dinner time. B: We should develop a mobile {{BLANK}} so customers can reserve tables, check the menu, and order takeaway food directly from their phones.",
    "cn": "A：客人一直打電話到我們餐廳詢問訂位，晚餐時段員工太忙，沒辦法接每通電話。 B：我們應該開發一個手機【應用程式】，讓客人可以直接用手機訂位、查看菜單和點外帶餐點。"
  },
  {
    "word": "code",
    "pos": "n.",
    "cn_def": "程式碼",
    "en_def": "instructions written for a computer program",
    "sentence": "A: Our online shop keeps showing an error message when customers try to pay by credit card, so do you know what's causing the problem? B: One of the programmers found a mistake in the {{BLANK}} that was added during last week's update, and she's fixing it right now.",
    "cn": "A：客人用信用卡付款時，我們的網路商店一直出現錯誤訊息，你知道是什麼原因造成的嗎？ B：其中一位程式設計師在上週更新時加入的【程式碼】中發現了一個錯誤，她現在正在修正。"
  },
  {
    "word": "developer",
    "pos": "n.",
    "cn_def": "開發人員",
    "en_def": "a person or company that creates computer programs",
    "sentence": "A: We want to build our own app for booking hotel rooms, but nobody in our company knows how to create one, so what should we do? B: Let's hire an experienced software {{BLANK}} on a six-month contract, and our marketing team can tell them exactly which features customers need.",
    "cn": "A：我們想自己做一個訂房應用程式，但公司裡沒人知道怎麼做，我們該怎麼辦？ B：我們用六個月的合約聘請一位有經驗的軟體【開發人員】吧，我們的行銷團隊可以明確告訴對方客戶需要哪些功能。"
  },
  {
    "word": "feature",
    "pos": "n.",
    "cn_def": "特色；功能",
    "en_def": "an important or useful part of a product",
    "sentence": "A: Why have so many customers bought the new coffee machine this month, even though it's more expensive than the older models? B: Its most popular {{BLANK}} is a timer, so people can set it at night and wake up to fresh, hot coffee without pressing any buttons.",
    "cn": "A：為什麼這個月有這麼多客人買新款咖啡機，即使它比舊款還貴？ B：它最受歡迎的【功能】是定時器，人們晚上設定好，早上醒來不用按任何按鈕就有新鮮熱咖啡。"
  },
  {
    "word": "update",
    "pos": "v.",
    "cn_def": "更新",
    "en_def": "to add new information or make something more modern",
    "sentence": "A: A customer told me that our website still shows last year's prices and the old phone number, so who is responsible for fixing that? B: The web team will {{BLANK}} the pages this afternoon, and they'll also add the new store address and the holiday opening hours.",
    "cn": "A：有位客人告訴我，我們的網站還顯示去年的價格和舊電話號碼，誰負責修正？ B：網站團隊今天下午會【更新】這些頁面，也會加上新門市地址和假日營業時間。"
  },
  {
    "word": "interactive",
    "pos": "adj.",
    "cn_def": "互動的",
    "en_def": "allowing people to take an active part, often by using a computer or screen",
    "sentence": "A: Last year many visitors to our booth at the trade fair walked past quickly without stopping, so how can we attract more attention this time? B: Let's set up an {{BLANK}} touch screen where people can design their own product and win a small prize after playing a short game.",
    "cn": "A：去年貿易展上很多參觀者都快速走過我們的攤位而沒有停下來，這次我們要怎麼吸引更多注意？ B：我們來設置一個【互動式】觸控螢幕，讓人們設計自己的產品，玩完簡短的遊戲後還能贏得小獎品。"
  }
];

const MCQS = [
  {
    "q": "The train to the airport left exactly on _____ this morning. Passengers were happy because last week it was nearly an hour late.",
    "options": [
      "schedule",
      "agenda",
      "feature",
      "campaign"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The budget review is the first item on the _____ for Monday's board meeting. Please bring last quarter's sales figures with you.",
    "options": [
      "software",
      "developer",
      "agenda",
      "campaign"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The school added business English to its _____ this year. Students now study it twice a week along with math and science.",
    "options": [
      "developer",
      "curriculum",
      "application",
      "campaign"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Our receptionist is taking an evening _____ in Japanese at the local college. She hopes to help more tourists who visit the hotel.",
    "options": [
      "agenda",
      "feature",
      "developer",
      "course"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The trainer will hold a question-and-answer _____ after the presentation. Staff can ask anything about the new payroll system then.",
    "options": [
      "developer",
      "curriculum",
      "session",
      "feature"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The design team attended a hands-on _____ on packaging last Friday. Everyone practiced making sample boxes with new eco-friendly materials.",
    "options": [
      "workshop",
      "agenda",
      "developer",
      "application"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "More than five hundred doctors will attend the medical _____ in Kaohsiung next week. Most hotels near the exhibition center are already fully booked.",
    "options": [
      "software",
      "curriculum",
      "feature",
      "conference"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Tickets for the company's charity _____ sold out within two days. All the money will go to a local children's hospital.",
    "options": [
      "software",
      "event",
      "curriculum",
      "developer"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The construction _____ is behind schedule because of heavy rain. The new shopping mall will probably open two months later than planned.",
    "options": [
      "project",
      "agenda",
      "feature",
      "curriculum"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The mayor announced a new _____ to reduce traffic in the city center. Residents who ride bicycles to work will receive monthly rewards.",
    "options": [
      "software",
      "developer",
      "initiative",
      "curriculum"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The advertising _____ for our new shampoo will appear on television and social media. It is aimed mainly at customers in their twenties.",
    "options": [
      "curriculum",
      "campaign",
      "developer",
      "agenda"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The two founders wrote a detailed business _____ before asking the bank for a loan. It explained their costs, customers, and expected profits.",
    "options": [
      "feature",
      "developer",
      "session",
      "plan"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Please send me a brief _____ of your report before Wednesday. I only need the main points, not every detail.",
    "options": [
      "developer",
      "conference",
      "outline",
      "software"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The factory will _____ new safety rules starting next month. All workers must wear helmets and gloves in the production area.",
    "options": [
      "implement",
      "participate",
      "enroll",
      "broadcast"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Our office manager will _____ a farewell party for Tom, who is retiring next week. She has already booked a room at a nearby restaurant.",
    "options": [
      "enroll",
      "participate",
      "broadcast",
      "organize"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "As team leader, Amy must _____ the work of designers, writers, and engineers. She makes sure everyone finishes their tasks on time.",
    "options": [
      "enroll",
      "coordinate",
      "broadcast",
      "participate"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Visitors must _____ at the front desk before entering the building. They will receive a name badge and a parking ticket.",
    "options": [
      "register",
      "implement",
      "broadcast",
      "evaluate"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Employees who want to _____ in the company's leadership course should apply by Friday. Only fifteen places are available this year.",
    "options": [
      "monitor",
      "broadcast",
      "enroll",
      "implement"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "All staff are encouraged to _____ in the annual health check. It is free and takes less than an hour.",
    "options": [
      "monitor",
      "participate",
      "launch",
      "coordinate"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Nurses _____ the patients' heart rates every hour during the night. Any sudden change is reported to the doctor immediately.",
    "options": [
      "register",
      "launch",
      "host",
      "monitor"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Managers will _____ each employee's performance at the end of the year. The results will help decide who receives a bonus.",
    "options": [
      "broadcast",
      "enroll",
      "evaluate",
      "register"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The car maker plans to _____ its first electric truck next spring. Several delivery companies have already placed large orders.",
    "options": [
      "launch",
      "enroll",
      "participate",
      "register"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Singapore will _____ next year's Asian trade fair at its new convention center. Thousands of business visitors are expected to attend.",
    "options": [
      "enroll",
      "monitor",
      "update",
      "host"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The radio station will _____ the CEO's interview live tomorrow at noon. Listeners can call in with questions during the program.",
    "options": [
      "enroll",
      "broadcast",
      "participate",
      "coordinate"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Our accountants use special _____ to prepare tax reports for clients quickly. The program calculates every figure automatically.",
    "options": [
      "software",
      "agenda",
      "curriculum",
      "campaign"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Customers can now order coffee through our mobile _____ before they arrive. Their drinks will be ready at the counter in minutes.",
    "options": [
      "agenda",
      "seminar",
      "application",
      "curriculum"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The game company is hiring an experienced _____ to write code for its new app. Applicants must have at least three years of experience.",
    "options": [
      "agenda",
      "developer",
      "curriculum",
      "seminar"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The most useful _____ of this printer is that it can scan documents directly to email. Office workers say it saves them a lot of time.",
    "options": [
      "agenda",
      "seminar",
      "curriculum",
      "feature"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Please _____ your contact details in the system if you move to a new address. Otherwise, important letters may be sent to the wrong place.",
    "options": [
      "broadcast",
      "participate",
      "update",
      "enroll"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The museum's new _____ display lets children touch the screen and answer questions about dinosaurs. It has become very popular with families.",
    "options": [
      "interactive",
      "fragile",
      "reluctant",
      "absent"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "programme": {
    "pos": "n.",
    "en_def": "a planned series of activities or events (British spelling)",
    "cn_def": "計畫；節目；課程"
  },
  "schedule": {
    "pos": "n.",
    "en_def": "a plan that lists the times when things will happen",
    "cn_def": "時間表；行程表"
  },
  "agenda": {
    "pos": "n.",
    "en_def": "a list of topics to discuss at a meeting",
    "cn_def": "議程"
  },
  "curriculum": {
    "pos": "n.",
    "en_def": "all the subjects taught in a school or training course",
    "cn_def": "課程（總稱）"
  },
  "course": {
    "pos": "n.",
    "en_def": "a series of lessons on a subject",
    "cn_def": "課程"
  },
  "module": {
    "pos": "n.",
    "en_def": "one separate part of a course or system",
    "cn_def": "單元；模組"
  },
  "session": {
    "pos": "n.",
    "en_def": "a period of time used for one activity, such as a class or meeting",
    "cn_def": "（一節）課程；會議時段"
  },
  "workshop": {
    "pos": "n.",
    "en_def": "a meeting where people learn by doing activities together",
    "cn_def": "工作坊；研習會"
  },
  "seminar": {
    "pos": "n.",
    "en_def": "a meeting where an expert talks and a group discusses a subject",
    "cn_def": "研討會；講座"
  },
  "conference": {
    "pos": "n.",
    "en_def": "a large formal meeting where people discuss a topic for one or more days",
    "cn_def": "會議；大會"
  },
  "event": {
    "pos": "n.",
    "en_def": "something planned that happens, such as a party or meeting",
    "cn_def": "活動"
  },
  "project": {
    "pos": "n.",
    "en_def": "a planned piece of work with a clear goal",
    "cn_def": "專案；計畫"
  },
  "initiative": {
    "pos": "n.",
    "en_def": "a new plan or action to solve a problem or reach a goal",
    "cn_def": "新措施；倡議"
  },
  "campaign": {
    "pos": "n.",
    "en_def": "a planned series of actions to reach a goal, such as selling a product",
    "cn_def": "宣傳活動"
  },
  "plan": {
    "pos": "n.",
    "en_def": "an idea or arrangement for doing something in the future",
    "cn_def": "計畫"
  },
  "outline": {
    "pos": "n.",
    "en_def": "a short description of the main points of something",
    "cn_def": "大綱；概要"
  },
  "implement": {
    "pos": "v.",
    "en_def": "to start using a plan or system",
    "cn_def": "實施；執行"
  },
  "organize": {
    "pos": "v.",
    "en_def": "to plan and arrange an activity",
    "cn_def": "籌辦；組織"
  },
  "coordinate": {
    "pos": "v.",
    "en_def": "to make different people or groups work well together",
    "cn_def": "協調"
  },
  "register": {
    "pos": "v.",
    "en_def": "to put your name on an official list, for example for a class or event",
    "cn_def": "登記；報名"
  },
  "enroll": {
    "pos": "v.",
    "en_def": "to officially join a school, course, or program",
    "cn_def": "註冊；入學"
  },
  "participate": {
    "pos": "v.",
    "en_def": "to take part in an activity",
    "cn_def": "參加；參與"
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
  "launch": {
    "pos": "v.",
    "en_def": "to start selling a new product or begin a new activity",
    "cn_def": "推出；發起"
  },
  "host": {
    "pos": "v.",
    "en_def": "to organize an event and invite people to it",
    "cn_def": "主辦；主持"
  },
  "broadcast": {
    "pos": "v.",
    "en_def": "to send out a program on TV, radio, or the internet",
    "cn_def": "播出；廣播"
  },
  "software": {
    "pos": "n.",
    "en_def": "the programs used by a computer",
    "cn_def": "軟體"
  },
  "application": {
    "pos": "n.",
    "en_def": "a computer program made for a particular job, especially on a phone",
    "cn_def": "應用程式"
  },
  "code": {
    "pos": "n.",
    "en_def": "instructions written for a computer program",
    "cn_def": "程式碼"
  },
  "developer": {
    "pos": "n.",
    "en_def": "a person or company that creates computer programs",
    "cn_def": "開發人員"
  },
  "feature": {
    "pos": "n.",
    "en_def": "an important or useful part of a product",
    "cn_def": "特色；功能"
  },
  "update": {
    "pos": "v.",
    "en_def": "to add new information or make something more modern",
    "cn_def": "更新"
  },
  "interactive": {
    "pos": "adj.",
    "en_def": "allowing people to take an active part, often by using a computer or screen",
    "cn_def": "互動的"
  }
};

const EXTRA_GLOSSES = {};
