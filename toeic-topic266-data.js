// Topic 266 Quiz Data: Organise 組織安排
// Source word list: https://www.examword.com/group-topic/organise — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T266 - Organise 組織安排",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "arrange",
    "pos": "v.",
    "cn_def": "安排；籌備",
    "en_def": "to plan or organize something so it happens",
    "sentence": "A: Our clients from Singapore are arriving next Tuesday, and they want to visit the new factory in Taoyuan as well as meet the design team. B: Don't worry, I will {{BLANK}} a car to pick them up at the airport and book a quiet meeting room for the whole afternoon.",
    "cn": "A：我們新加坡的客戶下週二會到，他們想參觀桃園的新工廠，也想和設計團隊見面。 B：別擔心，我會【安排】一輛車到機場接他們，並預訂一間安靜的會議室給整個下午使用。"
  },
  {
    "word": "plan",
    "pos": "n.",
    "cn_def": "計畫；方案",
    "en_def": "an idea of what you will do and how you will do it",
    "sentence": "A: The sales team needs to increase revenue by fifteen percent this year, but nobody seems sure where to start or which markets to focus on. B: Our manager is writing a detailed business {{BLANK}} this week, and she will share it with everyone at Friday's meeting so we all understand our goals.",
    "cn": "A：業務團隊今年需要把營收提高百分之十五，但似乎沒有人確定該從哪裡開始，或該專注於哪些市場。 B：我們經理這週正在撰寫一份詳細的營運【計畫】，她會在週五的會議上和大家分享，讓我們都了解自己的目標。"
  },
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "時間表；進度",
    "en_def": "a list of times when things are planned to happen",
    "sentence": "A: Can we still finish the new website before the product launch next month, or should we tell the marketing department about a possible delay? B: We are a little behind {{BLANK}} because two designers were sick last week, but if we work some overtime, we should be ready on time.",
    "cn": "A：我們還能在下個月產品上市前完成新網站嗎？還是應該告訴行銷部可能會延誤？ B：因為上週有兩位設計師生病，我們有點落後【進度】，但如果加一些班，應該能準時完成。"
  },
  {
    "word": "timetable",
    "pos": "n.",
    "cn_def": "時刻表；課表",
    "en_def": "a list showing when buses, trains or classes happen",
    "sentence": "A: I need to get to the branch office in Hsinchu by ten tomorrow morning, but I'm not sure how often the trains run from Taipei Main Station. B: You can check the train {{BLANK}} on the railway website, and I think there is a fast train that leaves around eight o'clock.",
    "cn": "A：我明天早上十點前要到新竹分公司，但我不確定從台北車站出發的火車多久一班。 B：你可以在鐵路網站上查看火車【時刻表】，我記得大約八點有一班快車出發。"
  },
  {
    "word": "coordinate",
    "pos": "v.",
    "cn_def": "協調",
    "en_def": "to make different people or groups work well together",
    "sentence": "A: Three different departments are involved in next month's trade show, so who is going to make sure everyone knows what to do and when? B: Linda from the events team will {{BLANK}} the work of all three groups, and she will send a shared calendar to everyone by Wednesday afternoon.",
    "cn": "A：下個月的商展有三個不同部門參與，誰會確保每個人知道要做什麼、什麼時候做？ B：活動團隊的琳達會【協調】三個小組的工作，她會在週三下午前把共享行事曆寄給每個人。"
  },
  {
    "word": "sort",
    "pos": "v.",
    "cn_def": "分類；整理",
    "en_def": "to put things into groups or in order",
    "sentence": "A: The mailroom received hundreds of letters and packages after the long holiday weekend, and many of them are for different floors of the building. B: Could you help the new assistant {{BLANK}} them by department this morning so that each team gets its mail before lunch?",
    "cn": "A：長週末假期後，收發室收到了好幾百封信件和包裹，其中很多是要送到大樓不同樓層的。 B：你今天早上能幫新助理把它們按部門【分類】，讓每個團隊在午餐前拿到郵件嗎？"
  },
  {
    "word": "categorise",
    "pos": "v.",
    "cn_def": "把……分類；歸類",
    "en_def": "to put things into groups of the same type",
    "sentence": "A: Our online customer survey collected more than two thousand comments, and the managers want a clear summary of the main complaints by next Monday. B: I'm going to {{BLANK}} the comments into groups such as delivery, price, and product quality, and then I'll count how many fall into each group.",
    "cn": "A：我們的線上顧客問卷收集了兩千多則意見，經理們希望下週一前拿到主要抱怨的清楚摘要。 B：我打算把這些意見【歸類】成運送、價格和產品品質等類別，然後計算每一類有多少則。"
  },
  {
    "word": "classify",
    "pos": "v.",
    "cn_def": "把……分級；分類",
    "en_def": "to officially put something into a group or level",
    "sentence": "A: Why does the security team want to look at every document before we send the project report to our partners overseas? B: They need to {{BLANK}} each file as public or confidential, because some of the information about our new technology must stay inside the company for legal reasons.",
    "cn": "A：為什麼保全團隊要在我們把專案報告寄給海外合作夥伴前檢查每份文件？ B：他們需要把每個檔案【分級】為公開或機密，因為基於法律原因，有些關於我們新技術的資訊必須留在公司內部。"
  },
  {
    "word": "prioritise",
    "pos": "v.",
    "cn_def": "優先處理；排定優先順序",
    "en_def": "to decide which things are most important and do them first",
    "sentence": "A: I have five reports, two client calls, and a training session this week, and I really don't know how I'm going to finish everything on time. B: Try to {{BLANK}} the tasks that have the closest deadlines, and ask your supervisor whether the training can be moved to next week.",
    "cn": "A：我這週有五份報告、兩通客戶電話和一場培訓課程，真不知道要怎麼準時完成所有事情。 B：試著【優先處理】截止日期最近的任務，並問問你的主管培訓能不能改到下週。"
  },
  {
    "word": "delegate",
    "pos": "v.",
    "cn_def": "委派；授權",
    "en_def": "to give part of your work to someone else",
    "sentence": "A: You look exhausted, and you have been staying at the office until nine every night since the new project started last month. B: I know, so starting tomorrow I want to {{BLANK}} some of the smaller jobs to my two assistants, which will give me more time to focus on the budget.",
    "cn": "A：你看起來累壞了，自從上個月新專案開始後，你每晚都待在辦公室到九點。 B：我知道，所以從明天開始，我想把一些較小的工作【委派】給我的兩位助理，這樣我就有更多時間專注在預算上。"
  },
  {
    "word": "allocate",
    "pos": "v.",
    "cn_def": "分配；撥出",
    "en_def": "to give money, time or things for a particular use",
    "sentence": "A: The company has given our department an extra fifty thousand dollars this year, so how should we spend the money? B: The directors decided to {{BLANK}} most of it to staff training, and the rest will be used to replace the old computers in the accounting office.",
    "cn": "A：公司今年多給我們部門五萬元，那我們該怎麼使用這筆錢？ B：董事們決定把大部分【分配】給員工培訓，剩下的將用來汰換會計辦公室的舊電腦。"
  },
  {
    "word": "prepare",
    "pos": "v.",
    "cn_def": "準備",
    "en_def": "to get something ready",
    "sentence": "A: The board members are visiting our office on Thursday morning, and they want to hear about our sales results for the last quarter. B: Then we should {{BLANK}} a short presentation with clear charts tonight, and we can practice it together tomorrow afternoon before the visitors arrive.",
    "cn": "A：董事會成員週四早上要來我們辦公室，他們想聽上一季的銷售成果。 B：那我們今晚應該【準備】一份附有清楚圖表的簡短簡報，明天下午在訪客到來前可以一起練習。"
  },
  {
    "word": "outline",
    "pos": "n.",
    "cn_def": "大綱；概要",
    "en_def": "a short list of the main points of something",
    "sentence": "A: The editor wants my article about the new shopping mall by next Friday, but I haven't started writing it yet and I'm feeling a little worried. B: Why don't you first make a simple {{BLANK}} of the main points, send it to her for comments, and then write the full article over the weekend?",
    "cn": "A：編輯要我在下週五前交出關於新購物中心的文章，但我還沒開始寫，有點擔心。 B：你何不先把重點做成一份簡單的【大綱】，寄給她提供意見，再利用週末寫完整篇文章？"
  },
  {
    "word": "structure",
    "pos": "n.",
    "cn_def": "結構；架構",
    "en_def": "the way the parts of something are organized",
    "sentence": "A: Since the two companies merged last spring, many employees seem confused about who they should report to and who makes the final decisions. B: Human resources is going to explain the new management {{BLANK}} at next week's meeting and give everyone a chart showing each department and its leader.",
    "cn": "A：自從兩家公司去年春天合併後，很多員工似乎搞不清楚該向誰報告、由誰做最後決定。 B：人資部將在下週的會議上說明新的管理【架構】，並給每個人一張列出各部門及其主管的圖表。"
  },
  {
    "word": "systematic",
    "pos": "adj.",
    "cn_def": "有系統的；有條理的",
    "en_def": "done carefully, step by step, following a fixed plan",
    "sentence": "A: How did the new office manager find all the missing invoices so quickly when nobody else could find them for weeks? B: She used a very {{BLANK}} approach, checking every drawer and computer folder one by one and writing down exactly where each document was kept.",
    "cn": "A：新的辦公室經理是怎麼這麼快就找到所有遺失的發票的？其他人找了好幾週都找不到。 B：她用了一種非常【有系統的】方法，一個一個檢查每個抽屜和電腦資料夾，並把每份文件存放的確切位置記下來。"
  },
  {
    "word": "efficient",
    "pos": "adj.",
    "cn_def": "有效率的；高效能的",
    "en_def": "working well without wasting time, money or energy",
    "sentence": "A: Why did the factory decide to buy new packing machines when the old ones were still working well enough? B: The new machines are much more {{BLANK}}, so they use less electricity and can pack twice as many boxes per hour with fewer workers on each shift.",
    "cn": "A：舊的包裝機明明還能用，工廠為什麼決定買新的？ B：新機器【有效率】得多，用電更少，每小時能包裝兩倍數量的箱子，而且每班需要的工人更少。"
  },
  {
    "word": "strategy",
    "pos": "n.",
    "cn_def": "策略；戰略",
    "en_def": "a careful plan for reaching a goal",
    "sentence": "A: Our competitor has just opened three new stores in Taichung, and our sales in that area dropped by ten percent last month. B: The marketing director is meeting with the regional managers tomorrow to discuss a new {{BLANK}} for winning those customers back, including special discounts and better online advertising.",
    "cn": "A：我們的競爭對手剛在台中開了三家新店，上個月我們在該地區的銷售下降了百分之十。 B：行銷總監明天要和區域經理開會，討論贏回那些顧客的新【策略】，包括特別折扣和更好的線上廣告。"
  },
  {
    "word": "agenda",
    "pos": "n.",
    "cn_def": "議程",
    "en_def": "a list of things to talk about at a meeting",
    "sentence": "A: Do you know what topics we are going to discuss at the department meeting this afternoon, because I want to bring the right documents? B: The secretary sent the {{BLANK}} by email this morning, and the first item is the budget for next year, followed by the new holiday policy.",
    "cn": "A：你知道今天下午部門會議要討論哪些主題嗎？我想帶對的文件。 B：秘書今天早上用電子郵件寄出了【議程】，第一項是明年的預算，接著是新的休假政策。"
  },
  {
    "word": "checklist",
    "pos": "n.",
    "cn_def": "檢查清單；核對表",
    "en_def": "a list of things you must do or check",
    "sentence": "A: This is my first time setting up the conference room for an important client visit, and I'm afraid I'll forget something. B: Just follow the {{BLANK}} on the wall next to the door, which reminds you to test the projector, prepare bottles of water, and print copies of the contract.",
    "cn": "A：這是我第一次為重要客戶來訪布置會議室，我怕會忘記什麼。 B：只要照著門邊牆上的【檢查清單】做就好，上面會提醒你測試投影機、準備瓶裝水，以及列印合約副本。"
  },
  {
    "word": "arrangement",
    "pos": "n.",
    "cn_def": "安排；協議",
    "en_def": "a plan or agreement made for something to happen",
    "sentence": "A: Since the main office will be closed for repairs next week, where are the accounting staff going to work for those five days? B: We have made an {{BLANK}} with the hotel across the street to rent two of its meeting rooms, so everyone can continue working there until the repairs are finished.",
    "cn": "A：既然總辦公室下週要關閉整修，會計人員那五天要在哪裡工作？ B：我們已經和對街的飯店做好【安排】，租用它的兩間會議室，讓大家可以在那裡繼續工作直到整修完成。"
  },
  {
    "word": "framework",
    "pos": "n.",
    "cn_def": "架構；框架",
    "en_def": "a set of rules or ideas that you use as a base",
    "sentence": "A: Each branch office seems to train new employees in a completely different way, and the results are not very consistent across the country. B: That's why head office is creating a common training {{BLANK}} that every branch must follow, although local managers can still add their own examples and activities.",
    "cn": "A：每家分公司訓練新員工的方式似乎都完全不同，全國的成效不太一致。 B：這就是為什麼總公司正在建立一套每家分公司都必須遵循的共同培訓【架構】，不過地區主管仍可加入自己的例子和活動。"
  },
  {
    "word": "method",
    "pos": "n.",
    "cn_def": "方法；方式",
    "en_def": "a way of doing something",
    "sentence": "A: Our customers keep complaining that it takes too long to pay at the counter, especially during the busy lunch hour on weekdays. B: We are going to introduce a faster payment {{BLANK}}, so people can simply scan a code with their phones instead of waiting for the cashier to count change.",
    "cn": "A：顧客一直抱怨在櫃檯付款太花時間，尤其是平日忙碌的午餐時段。 B：我們將推出更快的付款【方式】，讓大家只要用手機掃描條碼就好，不必等收銀員找零。"
  },
  {
    "word": "sequence",
    "pos": "n.",
    "cn_def": "順序；次序",
    "en_def": "the order in which things happen or are done",
    "sentence": "A: The new workers on the assembly line keep making mistakes, and several machines stopped working yesterday because of them. B: The supervisor will show them the correct {{BLANK}} of steps again this morning, because if you start a machine before closing the safety cover, it shuts down automatically.",
    "cn": "A：裝配線上的新工人一直出錯，昨天有幾台機器因此停止運作。 B：主管今天早上會再次示範正確的步驟【順序】給他們看，因為如果你在關上安全蓋之前啟動機器，它就會自動停機。"
  },
  {
    "word": "file",
    "pos": "v.",
    "cn_def": "把……歸檔；提交",
    "en_def": "to put a document in its correct place; to officially send in a form",
    "sentence": "A: What should I do with all these signed contracts from our new suppliers now that the manager has finished checking them? B: Please {{BLANK}} them in the gray cabinet next to the printer, in alphabetical order by company name, so the accounting staff can find them easily later.",
    "cn": "A：經理已經檢查完新供應商簽好的合約了，我該怎麼處理這些合約？ B：請把它們依公司名稱的字母順序【歸檔】在印表機旁的灰色櫃子裡，讓會計人員之後可以輕鬆找到。"
  },
  {
    "word": "label",
    "pos": "n.",
    "cn_def": "標籤",
    "en_def": "a small piece of paper on something that gives information about it",
    "sentence": "A: When the boxes of office supplies arrived this morning, nobody could tell which ones belonged to the marketing department on the fifth floor. B: Next time, ask the supplier to put a clear {{BLANK}} on each box showing the department name, the floor number, and the order date.",
    "cn": "A：今天早上辦公用品的箱子送到時，沒人分得出哪些是五樓行銷部的。 B：下次請供應商在每個箱子上貼清楚的【標籤】，寫上部門名稱、樓層和訂購日期。"
  },
  {
    "word": "compile",
    "pos": "v.",
    "cn_def": "彙整；編纂",
    "en_def": "to collect information and put it together in a list or report",
    "sentence": "A: The director wants to know how many customers complained about late deliveries in each city during the past six months. B: I'll ask the customer service team to {{BLANK}} a list from their records, and I can turn the numbers into a simple chart before her meeting on Thursday.",
    "cn": "A：主管想知道過去六個月每個城市有多少顧客抱怨延遲送貨。 B：我會請客服團隊根據他們的紀錄【彙整】一份清單，而且我可以在她週四開會前把數字做成簡單的圖表。"
  },
  {
    "word": "assemble",
    "pos": "v.",
    "cn_def": "組裝；集合",
    "en_def": "to put the parts of something together",
    "sentence": "A: The new desks and bookshelves for the training room were delivered this morning, but they are still in flat boxes in the hallway. B: Two workers from the furniture company will come back after lunch to {{BLANK}} them, and they said the job should take about three hours.",
    "cn": "A：培訓教室的新書桌和書架今天早上送到了，但它們還裝在走廊上的扁平箱子裡。 B：家具公司的兩名工人午餐後會回來【組裝】，他們說這項工作大約需要三小時。"
  },
  {
    "word": "manage",
    "pos": "v.",
    "cn_def": "管理；經營",
    "en_def": "to be in charge of people or a business",
    "sentence": "A: Mr Chen is retiring at the end of this month, so who will take over his responsibilities at the Kaohsiung branch? B: Ms Wu has been chosen to {{BLANK}} the branch from next month, and she has already worked there for eight years, so she knows all the staff very well.",
    "cn": "A：陳先生這個月底要退休了，誰會接手他在高雄分公司的職責？ B：吳小姐被選為從下個月起【管理】分公司，她已經在那裡工作八年了，所以她非常了解所有員工。"
  },
  {
    "word": "monitor",
    "pos": "v.",
    "cn_def": "監控；監測",
    "en_def": "to watch or check something carefully over time",
    "sentence": "A: Why are there new cameras and sensors on every production line in the factory, and are they there to watch the workers? B: No, they are there to {{BLANK}} the temperature and speed of the machines, so engineers can fix small problems before they become serious and stop production.",
    "cn": "A：為什麼工廠每條生產線上都有新的攝影機和感應器？是用來監視工人的嗎？ B：不是，它們是用來【監控】機器的溫度和速度，讓工程師能在小問題變嚴重、導致停產之前把它修好。"
  },
  {
    "word": "revise",
    "pos": "v.",
    "cn_def": "修改；修訂",
    "en_def": "to change something to make it better or more correct",
    "sentence": "A: The client read our proposal yesterday and said she likes the design, but she thinks the price is too high for her small company. B: Then we should {{BLANK}} the budget section tonight, remove a few of the extra services, and send her the new version early tomorrow morning.",
    "cn": "A：客戶昨天看了我們的提案，她說喜歡這個設計，但認為價格對她的小公司來說太高了。 B：那我們今晚應該【修改】預算部分，刪掉幾項額外服務，明天一早把新版本寄給她。"
  },
  {
    "word": "streamline",
    "pos": "v.",
    "cn_def": "簡化；使更有效率",
    "en_def": "to make a process simpler and faster",
    "sentence": "A: It currently takes new employees almost two weeks to get a computer, an email account, and an office key after they join the company. B: The IT and HR departments are working together to {{BLANK}} the process, so in future everything will be ready on the first morning of work.",
    "cn": "A：目前新員工入職後要將近兩週才能拿到電腦、電子郵件帳號和辦公室鑰匙。 B：資訊部和人資部正一起合作【簡化】這個流程，以後所有東西在第一天上班早上就會準備好。"
  },
  {
    "word": "log",
    "pos": "v.",
    "cn_def": "登記；記錄",
    "en_def": "to write down information as an official record",
    "sentence": "A: The accounting department says it can't pay me for the extra hours I worked on the weekend project last month. B: You need to {{BLANK}} your overtime hours in the company system every Friday, and then your supervisor has to approve them before payday at the end of the month.",
    "cn": "A：會計部說無法支付我上個月週末專案加班的時數。 B：你必須每週五在公司系統裡【登記】你的加班時數，然後主管要在月底發薪日前核准。"
  },
  {
    "word": "deadline",
    "pos": "n.",
    "cn_def": "截止期限",
    "en_def": "the time or day by which something must be done",
    "sentence": "A: Is it still possible to submit my application for the overseas training program, or am I too late now? B: The {{BLANK}} is five o'clock this Friday afternoon, so you still have three days, but remember to attach a letter of recommendation from your manager.",
    "cn": "A：我現在還能申請海外培訓計畫嗎？還是已經太遲了？ B：【截止期限】是這週五下午五點，所以你還有三天，但記得附上你經理的推薦信。"
  },
  {
    "word": "workflow",
    "pos": "n.",
    "cn_def": "工作流程",
    "en_def": "the order of steps in which work is done",
    "sentence": "A: Since we started using the new project software, our designers and writers seem to be finishing their tasks much faster than before. B: Yes, the software has improved our {{BLANK}} because everyone can see who is working on each task, so files no longer sit in someone's inbox for days.",
    "cn": "A：自從我們開始使用新的專案軟體後，我們的設計師和撰稿人似乎比以前更快完成任務。 B：是的，這套軟體改善了我們的【工作流程】，因為每個人都能看到誰在負責每項任務，所以檔案不會再在某人的收件匣裡擱置好幾天。"
  }
];

const MCQS = [
  {
    "q": "The hotel offers a free shuttle service for business guests. The front desk can _____ transportation to the airport if you call one day in advance.",
    "options": [
      "arrange",
      "delegate",
      "monitor",
      "revise"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The construction of the new warehouse is going very well. The builders expect to finish two weeks ahead of _____ despite the rainy weather.",
    "options": [
      "agenda",
      "label",
      "schedule",
      "method"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Ms Lin will _____ the activities of all volunteers at the charity run. Please contact her if you have any questions about your duties.",
    "options": [
      "compile",
      "coordinate",
      "file",
      "log"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Recycling bins are located on every floor of the building. Employees are asked to _____ their waste into paper, plastic, and general rubbish.",
    "options": [
      "delegate",
      "revise",
      "monitor",
      "sort"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The new accounting software saves us a lot of time. It can automatically _____ business expenses as travel, meals, or office supplies.",
    "options": [
      "delegate",
      "assemble",
      "categorise",
      "streamline"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Some of the files contain personal customer data. The legal department will _____ these documents as confidential before they are stored.",
    "options": [
      "classify",
      "allocate",
      "assemble",
      "prepare"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Our team cannot finish every project this quarter. We need to _____ the tasks that bring in the most revenue for the company.",
    "options": [
      "assemble",
      "log",
      "file",
      "prioritise"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "A good manager does not try to do everything alone. She knows how to _____ responsibilities to the right people on her team.",
    "options": [
      "compile",
      "delegate",
      "sort",
      "revise"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The city council has approved next year's budget. It will _____ two million dollars to repairing roads in the downtown area.",
    "options": [
      "allocate",
      "assemble",
      "monitor",
      "file"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Mr Huang is giving a speech at the annual dinner. His assistant is helping him _____ his notes and slides this afternoon.",
    "options": [
      "delegate",
      "allocate",
      "prepare",
      "classify"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The report explains how the company is organized after the merger. It includes a chart of the new management _____ and reporting lines.",
    "options": [
      "deadline",
      "structure",
      "sequence",
      "label"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The auditors checked every receipt from the last three years. Their _____ review found several small errors in the expense reports.",
    "options": [
      "delighted",
      "fragile",
      "anxious",
      "systematic"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The new air conditioners are much more energy _____ than the old ones. As a result, our electricity bill dropped by twenty percent.",
    "options": [
      "systematic",
      "crowded",
      "efficient",
      "sleepy"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Sales of our sports drinks are falling among young people. The marketing team is developing a new _____ to attract university students.",
    "options": [
      "strategy",
      "deadline",
      "label",
      "sequence"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Please read the attached document before tomorrow's board meeting. The first item on the _____ is the plan to open an office in Japan.",
    "options": [
      "label",
      "framework",
      "method",
      "agenda"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Visitors from overseas often need somewhere to stay. The company has made an _____ with a nearby hotel to offer them discounted rooms.",
    "options": [
      "agenda",
      "arrangement",
      "sequence",
      "label"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The new law gives companies a clear legal _____ for handling customer data. All businesses must follow these rules by next January.",
    "options": [
      "framework",
      "sequence",
      "agenda",
      "label"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Customers can now pay by credit card, cash, or mobile phone. Please choose your preferred payment _____ when you place an order online.",
    "options": [
      "structure",
      "agenda",
      "method",
      "sequence"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The safety instructions must be followed in the correct _____. Starting the machine before closing the cover may cause serious injuries.",
    "options": [
      "label",
      "sequence",
      "strategy",
      "deadline"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The tax office has sent us a reminder letter. We must _____ our annual tax return before the end of May.",
    "options": [
      "sort",
      "assemble",
      "monitor",
      "file"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Please check the care _____ inside the jacket before washing it. Some materials can be damaged by hot water.",
    "options": [
      "method",
      "agenda",
      "label",
      "sequence"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The research team spent three months collecting data from customers. They will _____ the results into a final report for the directors.",
    "options": [
      "compile",
      "delegate",
      "prioritise",
      "log"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The bookshelf comes in a flat box with simple instructions. Most customers can _____ it in less than an hour with a screwdriver.",
    "options": [
      "classify",
      "prioritise",
      "allocate",
      "assemble"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Ms Wu has worked at the bank for fifteen years. She now helps _____ a team of thirty employees at the main branch.",
    "options": [
      "sort",
      "manage",
      "log",
      "file"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Nurses in the intensive care unit work around the clock. They closely _____ each patient's heart rate and blood pressure.",
    "options": [
      "monitor",
      "assemble",
      "allocate",
      "delegate"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The client asked for several changes to the contract. Our lawyer will _____ the document and send a new version on Monday.",
    "options": [
      "assemble",
      "sort",
      "revise",
      "allocate"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Customers complained that ordering online took too many steps. The web team plans to _____ the checkout process to save them time.",
    "options": [
      "delegate",
      "streamline",
      "classify",
      "allocate"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Drivers must _____ their working hours in the record book every day. The company checks the records to make sure nobody drives too long.",
    "options": [
      "assemble",
      "delegate",
      "allocate",
      "log"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "All entries for the design competition must be received by Friday. Late entries will not be accepted after the _____ has passed.",
    "options": [
      "framework",
      "label",
      "deadline",
      "structure"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The new software sends each document automatically to the next person who needs it. This has greatly improved the _____ in our office.",
    "options": [
      "workflow",
      "label",
      "agenda",
      "sequence"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "arrange": {
    "pos": "v.",
    "en_def": "to plan or organize something so it happens",
    "cn_def": "安排；籌備"
  },
  "plan": {
    "pos": "n.",
    "en_def": "an idea of what you will do and how you will do it",
    "cn_def": "計畫；方案"
  },
  "schedule": {
    "pos": "n.",
    "en_def": "a list of times when things are planned to happen",
    "cn_def": "時間表；進度"
  },
  "timetable": {
    "pos": "n.",
    "en_def": "a list showing when buses, trains or classes happen",
    "cn_def": "時刻表；課表"
  },
  "coordinate": {
    "pos": "v.",
    "en_def": "to make different people or groups work well together",
    "cn_def": "協調"
  },
  "sort": {
    "pos": "v.",
    "en_def": "to put things into groups or in order",
    "cn_def": "分類；整理"
  },
  "categorise": {
    "pos": "v.",
    "en_def": "to put things into groups of the same type",
    "cn_def": "把……分類；歸類"
  },
  "classify": {
    "pos": "v.",
    "en_def": "to officially put something into a group or level",
    "cn_def": "把……分級；分類"
  },
  "prioritise": {
    "pos": "v.",
    "en_def": "to decide which things are most important and do them first",
    "cn_def": "優先處理；排定優先順序"
  },
  "delegate": {
    "pos": "v.",
    "en_def": "to give part of your work to someone else",
    "cn_def": "委派；授權"
  },
  "allocate": {
    "pos": "v.",
    "en_def": "to give money, time or things for a particular use",
    "cn_def": "分配；撥出"
  },
  "prepare": {
    "pos": "v.",
    "en_def": "to get something ready",
    "cn_def": "準備"
  },
  "outline": {
    "pos": "n.",
    "en_def": "a short list of the main points of something",
    "cn_def": "大綱；概要"
  },
  "structure": {
    "pos": "n.",
    "en_def": "the way the parts of something are organized",
    "cn_def": "結構；架構"
  },
  "systematic": {
    "pos": "adj.",
    "en_def": "done carefully, step by step, following a fixed plan",
    "cn_def": "有系統的；有條理的"
  },
  "efficient": {
    "pos": "adj.",
    "en_def": "working well without wasting time, money or energy",
    "cn_def": "有效率的；高效能的"
  },
  "strategy": {
    "pos": "n.",
    "en_def": "a careful plan for reaching a goal",
    "cn_def": "策略；戰略"
  },
  "agenda": {
    "pos": "n.",
    "en_def": "a list of things to talk about at a meeting",
    "cn_def": "議程"
  },
  "checklist": {
    "pos": "n.",
    "en_def": "a list of things you must do or check",
    "cn_def": "檢查清單；核對表"
  },
  "arrangement": {
    "pos": "n.",
    "en_def": "a plan or agreement made for something to happen",
    "cn_def": "安排；協議"
  },
  "framework": {
    "pos": "n.",
    "en_def": "a set of rules or ideas that you use as a base",
    "cn_def": "架構；框架"
  },
  "method": {
    "pos": "n.",
    "en_def": "a way of doing something",
    "cn_def": "方法；方式"
  },
  "sequence": {
    "pos": "n.",
    "en_def": "the order in which things happen or are done",
    "cn_def": "順序；次序"
  },
  "file": {
    "pos": "v.",
    "en_def": "to put a document in its correct place; to officially send in a form",
    "cn_def": "把……歸檔；提交"
  },
  "label": {
    "pos": "n.",
    "en_def": "a small piece of paper on something that gives information about it",
    "cn_def": "標籤"
  },
  "compile": {
    "pos": "v.",
    "en_def": "to collect information and put it together in a list or report",
    "cn_def": "彙整；編纂"
  },
  "assemble": {
    "pos": "v.",
    "en_def": "to put the parts of something together",
    "cn_def": "組裝；集合"
  },
  "manage": {
    "pos": "v.",
    "en_def": "to be in charge of people or a business",
    "cn_def": "管理；經營"
  },
  "monitor": {
    "pos": "v.",
    "en_def": "to watch or check something carefully over time",
    "cn_def": "監控；監測"
  },
  "revise": {
    "pos": "v.",
    "en_def": "to change something to make it better or more correct",
    "cn_def": "修改；修訂"
  },
  "streamline": {
    "pos": "v.",
    "en_def": "to make a process simpler and faster",
    "cn_def": "簡化；使更有效率"
  },
  "log": {
    "pos": "v.",
    "en_def": "to write down information as an official record",
    "cn_def": "登記；記錄"
  },
  "deadline": {
    "pos": "n.",
    "en_def": "the time or day by which something must be done",
    "cn_def": "截止期限"
  },
  "workflow": {
    "pos": "n.",
    "en_def": "the order of steps in which work is done",
    "cn_def": "工作流程"
  }
};

const EXTRA_GLOSSES = {};
