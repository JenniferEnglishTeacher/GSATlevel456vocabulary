// Topic 214 Quiz Data: Lazy Person 懶惰的人
// Source word list: https://www.examword.com/group-topic/lazy-person — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T214 - Lazy Person 懶惰的人",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "idle",
    "pos": "adj.",
    "cn_def": "閒置的；無所事事的",
    "en_def": "not working or not being used",
    "sentence": "A: Why are three of the new printing machines in the back room switched off when we have so many orders waiting for the holiday season? B: They have been {{BLANK}} since Monday because the technician is still waiting for spare parts from the supplier in Osaka, so we are sending some jobs to another shop.",
    "cn": "A：我們有那麼多節慶訂單在等，為什麼後面房間裡有三台新印刷機是關著的？ B：因為技術人員還在等大阪供應商寄來的零件，那些機器從星期一起就一直【閒置】，所以我們把一些工作轉給另一家店。"
  },
  {
    "word": "slothful",
    "pos": "adj.",
    "cn_def": "懶散的；怠惰的",
    "en_def": "very lazy and slow to act",
    "sentence": "A: Why did the hotel manager decide to replace the cleaning company that had worked here for almost five years? B: Guests kept complaining that the staff were {{BLANK}} and spent more time chatting in the hallway than cleaning rooms, so the manager finally chose a team with better reviews.",
    "cn": "A：飯店經理為什麼決定撤換已經在這裡做了將近五年的清潔公司？ B：房客一直抱怨那些員工很【懶散】，在走廊聊天的時間比打掃房間還多，所以經理最後選了一個評價比較好的團隊。"
  },
  {
    "word": "indolent",
    "pos": "adj.",
    "cn_def": "懶惰的；好逸惡勞的",
    "en_def": "not wanting to work or make any effort",
    "sentence": "A: Did the new owner of the café explain why he fired the assistant manager after only two months on the job? B: He said she was {{BLANK}} and expected the junior staff to do all the ordering, cleaning and scheduling while she sat in the office drinking coffee and checking her phone.",
    "cn": "A：咖啡館的新老闆有沒有解釋，為什麼副理才做了兩個月就被他開除了？ B：他說她很【懶惰】，要資淺員工負責所有的訂貨、清潔和排班，自己卻坐在辦公室喝咖啡、滑手機。"
  },
  {
    "word": "inactive",
    "pos": "adj.",
    "cn_def": "不活躍的；未使用的",
    "en_def": "not doing anything; not moving or being used",
    "sentence": "A: Why does the gym want to call all the members who joined last spring but have not visited since the summer? B: Many of those accounts have been {{BLANK}} for months, so the sales team hopes a free personal training session will encourage people to start exercising again before winter.",
    "cn": "A：健身房為什麼要打電話給所有去年春天加入、但從夏天起就沒來過的會員？ B：很多帳戶已經好幾個月【沒有活動】了，所以業務團隊希望用一次免費的個人訓練課，鼓勵大家在冬天前重新開始運動。"
  },
  {
    "word": "lethargic",
    "pos": "adj.",
    "cn_def": "無精打采的；倦怠的",
    "en_def": "feeling tired and without energy",
    "sentence": "A: Have you noticed that everyone in the sales meeting looked half asleep after the big lunch the company provided today? B: Yes, heavy food always makes people {{BLANK}} in the afternoon, so next month I will ask the caterer for lighter salads and schedule the meeting before lunch instead.",
    "cn": "A：你有沒有注意到，今天公司提供豐盛午餐之後，業務會議裡每個人看起來都半睡半醒？ B：有啊，油膩的食物總是讓人下午【無精打采】，所以下個月我會請外燴改成清淡的沙拉，並把會議改到午餐前。"
  },
  {
    "word": "unmotivated",
    "pos": "adj.",
    "cn_def": "缺乏動力的",
    "en_def": "having no interest in working hard",
    "sentence": "A: Why do you think so many interns in the marketing department stopped coming up with new ideas during the second month? B: They felt {{BLANK}} because nobody gave them real projects or feedback, so the director has promised to assign each intern a mentor and a small campaign of their own.",
    "cn": "A：你覺得行銷部門有那麼多實習生在第二個月就不再提出新點子，原因是什麼？ B：因為沒人給他們真正的專案或回饋，他們覺得【缺乏動力】，所以主任已經承諾為每位實習生安排一位導師和一個自己負責的小型宣傳活動。"
  },
  {
    "word": "apathetic",
    "pos": "adj.",
    "cn_def": "冷漠的；漠不關心的",
    "en_def": "showing no interest or feeling about something",
    "sentence": "A: How many staff members filled out the online survey about the new parking rules and the changes to the cafeteria menu? B: Only about ten percent replied, which shows that most people are {{BLANK}} about these issues, so the committee will hold a short meeting in each department to collect opinions in person.",
    "cn": "A：有多少員工填寫了關於新停車規定和餐廳菜單更動的線上問卷？ B：只有大約百分之十回覆，這顯示大部分人對這些議題【漠不關心】，所以委員會將在每個部門開個簡短會議，當面蒐集意見。"
  },
  {
    "word": "careless",
    "pos": "adj.",
    "cn_def": "粗心的；草率的",
    "en_def": "not paying enough attention, so mistakes happen",
    "sentence": "A: Why did the client send back the whole shipment of brochures we printed for their trade show in Singapore last week? B: Someone was {{BLANK}} when checking the final file, so the company's phone number was printed incorrectly on every page, and now we have to reprint them for free by Thursday.",
    "cn": "A：客戶為什麼把我們上週為他們新加坡商展印的整批手冊全部退回來？ B：有人在檢查最終檔案時很【粗心】，所以每一頁上的公司電話號碼都印錯了，現在我們必須在星期四前免費重印。"
  },
  {
    "word": "reluctant",
    "pos": "adj.",
    "cn_def": "不情願的；勉強的",
    "en_def": "not wanting to do something",
    "sentence": "A: Has the finance manager agreed to let the design team buy the new software licenses they asked for in their proposal? B: He is {{BLANK}} to spend more money before the end of the quarter, so he asked them to show how the program will save time and reduce printing costs next year.",
    "cn": "A：財務經理同意讓設計團隊購買他們在提案中申請的新軟體授權了嗎？ B：他在季末前【不太願意】再花錢，所以要求他們說明這個程式明年將如何節省時間並降低印刷成本。"
  },
  {
    "word": "procrastinate",
    "pos": "v.",
    "cn_def": "拖延",
    "en_def": "to delay doing something you should do",
    "sentence": "A: Why is the accounting department working late every night this week when the tax report has been on the schedule for months? B: Several people tend to {{BLANK}} until the last moment, so the manager now wants everyone to finish small parts of big reports every Friday and share their progress online.",
    "cn": "A：稅務報告幾個月前就排進時程了，為什麼會計部這週每天晚上都在加班？ B：有好幾個人習慣【拖延】到最後一刻，所以經理現在要求每個人每週五完成大型報告的一小部分，並在線上分享進度。"
  },
  {
    "word": "loaf",
    "pos": "v.",
    "cn_def": "閒晃；遊手好閒",
    "en_def": "to spend time doing nothing when you should be working",
    "sentence": "A: What did the supervisor say when she found two warehouse workers sitting on boxes behind the loading dock during their shift? B: She told them they could not {{BLANK}} around while trucks were waiting to be unloaded, and she warned that the next time it happened she would report them to human resources.",
    "cn": "A：主管發現兩名倉庫工人在值班時間坐在卸貨區後面的箱子上，她說了什麼？ B：她告訴他們，卡車還在等卸貨時不可以在那裡【閒晃】，並警告下次再發生就要把他們呈報給人資部。"
  },
  {
    "word": "dawdle",
    "pos": "v.",
    "cn_def": "磨蹭；拖拖拉拉",
    "en_def": "to move or do something too slowly",
    "sentence": "A: Should we stop at the gift shop near the station before we take the train to the client's head office this morning? B: We really can't {{BLANK}} today because the meeting starts at nine thirty and the trains are often crowded, so let's buy the gift on our way back to the hotel.",
    "cn": "A：今天早上搭火車去客戶總公司之前，我們要不要先到車站附近的禮品店逛一下？ B：今天真的不能【磨蹭】，因為會議九點半開始，火車又常常很擠，我們回飯店的路上再買禮物吧。"
  },
  {
    "word": "slack",
    "pos": "v.",
    "cn_def": "懈怠；偷懶",
    "en_def": "to work less hard than you should",
    "sentence": "A: Now that the busy holiday season is over, can the store staff relax a little and take longer breaks during the afternoon? B: They can take turns resting, but nobody should {{BLANK}} off completely, because the regional manager will visit next week to check the shelves, the stockroom and our customer service.",
    "cn": "A：忙碌的假期旺季結束了，店員下午可以稍微放鬆、休息久一點嗎？ B：他們可以輪流休息，但誰都不能完全【懈怠】，因為區域經理下週要來檢查貨架、倉庫和我們的客戶服務。"
  },
  {
    "word": "neglect",
    "pos": "v.",
    "cn_def": "忽略；疏於照顧",
    "en_def": "to not give enough care or attention to something",
    "sentence": "A: Why did the old office building downtown need such expensive repairs before the new tenants could move in last month? B: The previous owner chose to {{BLANK}} the roof and the heating system for years, so water damaged several floors and the pipes had to be replaced before anyone could work there safely.",
    "cn": "A：市中心那棟舊辦公大樓為什麼在新租戶上個月搬進去前需要那麼昂貴的修繕？ B：前任屋主多年來【疏於維護】屋頂和暖氣系統，所以好幾層樓都遭到水損，必須先更換管線才能讓人安全地在那裡工作。"
  },
  {
    "word": "slacker",
    "pos": "n.",
    "cn_def": "偷懶的人；懶鬼",
    "en_def": "a person who avoids work",
    "sentence": "A: Why did the project leader decide to give everyone on the team a separate task list with clear deadlines this time? B: Last quarter one {{BLANK}} let the others do most of the research and still took credit in front of the director, so she wants each person's work to be visible.",
    "cn": "A：專案負責人這次為什麼決定給團隊每個人一份有明確期限的個別任務清單？ B：上一季有個【偷懶的人】讓其他人做了大部分的研究，卻還在主任面前邀功，所以她希望每個人的工作都能被看見。"
  },
  {
    "word": "idler",
    "pos": "n.",
    "cn_def": "遊手好閒的人",
    "en_def": "a person who spends time doing nothing useful",
    "sentence": "A: What did the owner of the bakery think of the young man who applied for the weekend cashier position yesterday afternoon? B: At first she thought he was an {{BLANK}} because he had no job for a year, but he explained that he had been caring for his grandmother and was now ready to work.",
    "cn": "A：麵包店老闆對昨天下午來應徵週末收銀員的那位年輕人有什麼看法？ B：她起初以為他是個【遊手好閒的人】，因為他已經一年沒工作，但他解釋說他一直在照顧祖母，現在已經準備好工作了。"
  },
  {
    "word": "couch potato",
    "pos": "n.phr.",
    "cn_def": "整天窩在沙發看電視的人",
    "en_def": "a person who watches a lot of TV and does little exercise",
    "sentence": "A: Why did you sign up for the company's walking challenge when you used to say you hated any kind of exercise? B: My doctor warned me that I had become a {{BLANK}} after work, so now I walk with my colleagues at lunch and try to reach ten thousand steps every day.",
    "cn": "A：你以前總說討厭任何運動，為什麼會報名公司的健走挑戰？ B：醫生警告我下班後已經變成【整天窩在沙發上看電視的人】，所以現在我午餐時和同事一起散步，努力每天走到一萬步。"
  },
  {
    "word": "shirker",
    "pos": "n.",
    "cn_def": "逃避工作的人",
    "en_def": "a person who avoids work or duties",
    "sentence": "A: Why did the factory manager start checking the cleaning schedule himself every evening before the night shift arrives? B: He found out that one {{BLANK}} kept leaving early and asking others to sign his name, so now each worker must scan a card when finishing their area.",
    "cn": "A：工廠經理為什麼開始每天晚上在夜班到來前親自檢查清潔排程？ B：他發現有個【逃避工作的人】一直提早離開，還請別人幫他簽名，所以現在每位工人完成負責區域時都必須刷卡。"
  },
  {
    "word": "loafer",
    "pos": "n.",
    "cn_def": "懶漢；遊手好閒者",
    "en_def": "a lazy person who avoids work",
    "sentence": "A: Did the new restaurant owner keep all the waiters who worked for the previous management when she took over the business? B: She kept most of them, but she let one {{BLANK}} go because he spent his shifts sitting at the bar watching football instead of serving customers or clearing tables.",
    "cn": "A：新的餐廳老闆接手時，有沒有留下前任經營者的所有服務生？ B：她留下了大部分，但讓一個【懶漢】走了，因為他值班時都坐在吧台看足球，而不是招呼客人或清理桌子。"
  },
  {
    "word": "dreamer",
    "pos": "n.",
    "cn_def": "空想家；愛做夢的人",
    "en_def": "a person whose ideas and plans are not practical",
    "sentence": "A: What does the investor think about the young engineer who wants to open a chain of robot-run coffee shops next year? B: She called him a {{BLANK}} at first, but after seeing his detailed budget and the working prototype, she agreed to discuss a small investment at next week's meeting.",
    "cn": "A：投資人對那位想在明年開設機器人咖啡連鎖店的年輕工程師有什麼看法？ B：她一開始叫他【空想家】，但看了他詳細的預算和可運作的原型後，她同意在下週的會議中討論一筆小額投資。"
  },
  {
    "word": "slow",
    "pos": "adj.",
    "cn_def": "緩慢的",
    "en_def": "not fast; taking a long time",
    "sentence": "A: Why are customers complaining about our online store when the prices and the product photos are better than last year? B: The website is very {{BLANK}} during the evening because thousands of people visit at the same time, so the IT team plans to upgrade the server before the holiday sale begins.",
    "cn": "A：我們網路商店的價格和商品照片都比去年好，為什麼顧客還在抱怨？ B：因為晚上有好幾千人同時造訪，網站變得非常【慢】，所以資訊團隊打算在節慶特賣開始前升級伺服器。"
  },
  {
    "word": "unproductive",
    "pos": "adj.",
    "cn_def": "沒有成效的；生產力低的",
    "en_def": "not producing good results",
    "sentence": "A: Why did the department head cancel the long weekly meeting that we have held every Monday morning for three years? B: She felt it had become {{BLANK}} because people just repeated their reports, so now everyone sends a short written update and we meet only when there is a real decision to make.",
    "cn": "A：部門主管為什麼取消了我們三年來每週一早上都開的冗長例會？ B：她覺得這個會議變得【沒有成效】，因為大家只是重複報告，所以現在每個人寄一份簡短的書面進度，只有需要真正做決定時才開會。"
  },
  {
    "word": "inefficient",
    "pos": "adj.",
    "cn_def": "效率低的",
    "en_def": "wasting time, money or energy",
    "sentence": "A: Why is the hospital replacing the paper forms that patients fill out at the front desk with a new tablet system? B: The old process was {{BLANK}} because nurses had to type every form into the computer again, so the tablets will save time and reduce mistakes in patient records.",
    "cn": "A：醫院為什麼要把病患在櫃檯填寫的紙本表格換成新的平板系統？ B：舊流程【效率很低】，因為護理師必須把每張表格再輸入電腦一次，所以平板能節省時間，並減少病歷中的錯誤。"
  },
  {
    "word": "passive",
    "pos": "adj.",
    "cn_def": "被動的；消極的",
    "en_def": "accepting what happens without trying to act or change it",
    "sentence": "A: What advice did the career coach give you about the job interview at the bank next Wednesday afternoon? B: She said I was too {{BLANK}} in the practice interview and only answered questions, so this time I should ask about the team, share examples of my work and show real interest.",
    "cn": "A：職涯教練對你下週三下午在銀行的工作面試給了什麼建議？ B：她說我在模擬面試中太【被動】，只會回答問題，所以這次我應該詢問有關團隊的事、分享工作實例，並表現出真正的興趣。"
  },
  {
    "word": "listless",
    "pos": "adj.",
    "cn_def": "無精打采的；倦怠的",
    "en_def": "having no energy or interest",
    "sentence": "A: Is Martin feeling all right, because he has hardly said a word in the planning meeting and keeps staring out the window? B: He seems {{BLANK}} today since his flight from Toronto was delayed overnight, so I told him to go home early and rest before the client presentation tomorrow.",
    "cn": "A：馬丁還好嗎？他在企劃會議上幾乎一句話也沒說，一直盯著窗外。 B：他今天看起來【無精打采】，因為他從多倫多的班機延誤了一整晚，所以我叫他早點回家休息，準備明天的客戶簡報。"
  },
  {
    "word": "sleepy",
    "pos": "adj.",
    "cn_def": "想睡的；睏的",
    "en_def": "tired and ready to sleep",
    "sentence": "A: Why did the bus company add a rule that drivers must take a twenty-minute break after every two hours on the road? B: Studies showed that drivers often get {{BLANK}} on long night trips, which increases the risk of accidents, so the new rule protects both passengers and staff.",
    "cn": "A：客運公司為什麼新增規定，司機每開兩小時就必須休息二十分鐘？ B：研究顯示司機在長途夜車中常會變得【想睡】，這會增加事故風險，所以新規定能同時保護乘客和員工。"
  },
  {
    "word": "tired",
    "pos": "adj.",
    "cn_def": "疲倦的；累的",
    "en_def": "needing rest",
    "sentence": "A: Should we continue working on the budget tonight or finish the rest of the numbers early tomorrow morning? B: Everyone is {{BLANK}} after the twelve-hour shift, and people make mistakes with figures when they are exhausted, so let's go home now and start again at eight with fresh coffee.",
    "cn": "A：我們今晚要繼續做預算，還是明天一早再把剩下的數字做完？ B：大家輪了十二小時的班都很【累】，人在筋疲力盡時處理數字容易出錯，所以我們現在回家，明早八點帶著現煮咖啡再開始吧。"
  },
  {
    "word": "unenergetic",
    "pos": "adj.",
    "cn_def": "缺乏活力的",
    "en_def": "lacking energy or enthusiasm",
    "sentence": "A: What did the audience think of the speaker who opened the conference this morning in the main hall? B: Many people said his talk was {{BLANK}} because he read every slide in a quiet voice and never looked up, so several guests left early to get coffee in the lobby.",
    "cn": "A：聽眾對今天早上在主廳為研討會開場的講者有什麼看法？ B：很多人說他的演講【缺乏活力】，因為他用很小的聲音念每一張投影片，從不抬頭，所以有好幾位來賓提早離開，到大廳喝咖啡。"
  },
  {
    "word": "laid-back",
    "pos": "adj.",
    "cn_def": "悠閒的；輕鬆隨意的",
    "en_def": "relaxed and calm; not worried",
    "sentence": "A: How is the atmosphere at the small design studio you joined last month compared to the big advertising firm? B: It is much more {{BLANK}} because people wear jeans, choose their own hours and chat over lunch, but everyone still works hard and meets every client deadline.",
    "cn": "A：你上個月加入的那間小型設計工作室，氣氛跟大型廣告公司比起來如何？ B：那裡【輕鬆悠閒】多了，大家穿牛仔褲、自己選擇工作時間、午餐時聊天，但每個人仍然很認真，也都趕上每個客戶的期限。"
  },
  {
    "word": "easygoing",
    "pos": "adj.",
    "cn_def": "隨和的；脾氣好的",
    "en_def": "relaxed and not easily upset",
    "sentence": "A: What is the new team leader like, since we will be working closely with her on the hotel renovation project? B: She is very {{BLANK}} and listens to everyone's ideas, but she also expects clear updates every Friday, so we should keep our reports short and on time.",
    "cn": "A：新的團隊主管是個怎麼樣的人？我們會在飯店翻修專案上和她密切合作。 B：她很【隨和】，會聽取每個人的想法，但她也期望每週五都有清楚的進度報告，所以我們的報告要簡短而且準時。"
  },
  {
    "word": "sluggish",
    "pos": "adj.",
    "cn_def": "遲緩的；低迷的",
    "en_def": "moving or working more slowly than usual",
    "sentence": "A: Why did the store manager decide to offer a twenty percent discount on all winter coats this week? B: Sales have been {{BLANK}} because the weather is still warm, so she hopes the discount will attract shoppers before the new spring collection arrives next month.",
    "cn": "A：店經理為什麼決定這週所有冬季外套打八折？ B：因為天氣還很暖和，銷售一直【低迷】，所以她希望折扣能在下個月春季新品到貨前吸引購物者。"
  },
  {
    "word": "laggard",
    "pos": "n.",
    "cn_def": "落後者",
    "en_def": "a person or company that is slower than others",
    "sentence": "A: Why is our company finally investing in online ordering when most competitors started doing it years ago? B: The board realized we had become a {{BLANK}} in the industry, and younger customers were choosing other suppliers, so we must catch up quickly or lose more business.",
    "cn": "A：大部分競爭對手好幾年前就開始做線上訂購，為什麼我們公司現在才終於投資？ B：董事會意識到我們已經成了業界的【落後者】，年輕客戶都選擇其他供應商，所以我們必須迅速追上，否則會流失更多生意。"
  },
  {
    "word": "underachiever",
    "pos": "n.",
    "cn_def": "表現低於實力的人",
    "en_def": "a person who does less well than they could",
    "sentence": "A: Why did the manager give Kevin such a challenging project when his results last year were only average? B: She believes he is an {{BLANK}} who has strong skills but gets bored easily, so she hopes a bigger responsibility and a clear goal will help him show what he can do.",
    "cn": "A：凱文去年的成績只是普通，經理為什麼還給他這麼有挑戰性的專案？ B：她認為他是個【表現低於實力的人】，能力很強但很容易覺得無聊，所以她希望更大的責任和明確的目標能幫助他發揮實力。"
  },
  {
    "word": "unambitious",
    "pos": "adj.",
    "cn_def": "沒有企圖心的",
    "en_def": "not wanting to be successful or to improve",
    "sentence": "A: Why did the investors reject the company's five-year growth plan at the meeting on Tuesday afternoon? B: They felt the plan was too {{BLANK}} because it only aimed for two percent growth each year, so they asked the managers to suggest new markets and bigger sales targets.",
    "cn": "A：投資人為什麼在星期二下午的會議上否決了公司的五年成長計畫？ B：他們覺得這個計畫太【缺乏企圖心】，因為每年只以成長百分之二為目標，所以他們要求經理們提出新市場和更高的銷售目標。"
  }
];

const MCQS = [
  {
    "q": "Two of the delivery vans have been sitting _____ in the garage since March. The manager plans to sell them to reduce costs.",
    "options": [
      "idle",
      "punctual",
      "generous",
      "curious"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The bank will close any savings account that remains _____ for more than two years. Customers will receive a letter before this happens.",
    "options": [
      "reluctant",
      "careless",
      "inactive",
      "sleepy"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "After the long flight from New York, Linda Chen felt _____ and could not focus. She took a short nap before the evening dinner.",
    "options": [
      "inefficient",
      "lethargic",
      "unambitious",
      "careless"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Staff who never receive praise or feedback often become _____ over time. The company now holds monthly reviews to recognize good work.",
    "options": [
      "fragile",
      "crowded",
      "accurate",
      "unmotivated"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Young voters were largely _____ about the local election, and few went to the polls. Candidates are now using social media to reach them.",
    "options": [
      "punctual",
      "wealthy",
      "apathetic",
      "accurate"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The report contained several _____ mistakes, such as wrong dates and misspelled names. Please check your work carefully before submitting it.",
    "options": [
      "careless",
      "unambitious",
      "laid-back",
      "sleepy"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Many customers are _____ to share their credit card details on unfamiliar websites. A secure payment page can help build their trust.",
    "options": [
      "inactive",
      "sluggish",
      "idle",
      "reluctant"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Employees who _____ on large projects often end up working late before the deadline. Breaking tasks into smaller steps can prevent this.",
    "options": [
      "neglect",
      "procrastinate",
      "apologize",
      "register"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Some workers like to _____ around the break room when the supervisor is away. Security cameras were installed to discourage this behavior.",
    "options": [
      "loaf",
      "invest",
      "promote",
      "require"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Please don't _____ on your way back from lunch today. The client meeting starts at one o'clock sharp in the main conference room.",
    "options": [
      "neglect",
      "procrastinate",
      "dawdle",
      "schedule"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Even after the big order was shipped, the team did not _____ off. They immediately began preparing for the next trade show.",
    "options": [
      "neglect",
      "slack",
      "apply",
      "deliver"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Busy managers sometimes _____ their own health while focusing on company goals. Regular exercise and enough sleep are important for everyone.",
    "options": [
      "dawdle",
      "procrastinate",
      "loaf",
      "neglect"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Nobody wants to work with a _____ who lets others do all the hard work. Clear task lists help keep everyone responsible.",
    "options": [
      "customer",
      "supplier",
      "slacker",
      "landlord"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "After retiring, my uncle became a _____ who watched television all day. Now he joins a walking group every morning in the park.",
    "options": [
      "couch potato",
      "laggard",
      "underachiever",
      "dreamer"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The supervisor called him a _____ because he always avoided extra duties on busy days. Other workers had to cover his tasks.",
    "options": [
      "dreamer",
      "underachiever",
      "laggard",
      "shirker"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The café owner fired the lazy _____ who sat at the counter instead of serving customers. A new waiter starts on Monday.",
    "options": [
      "inventor",
      "loafer",
      "accountant",
      "investor"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Critics called the young inventor a _____ when he first described his flying car. Today his company sells electric aircraft around the world.",
    "options": [
      "dreamer",
      "shirker",
      "laggard",
      "couch potato"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The internet connection in the hotel was so _____ that I could not download the files. I had to work at a café nearby.",
    "options": [
      "passive",
      "reluctant",
      "slow",
      "apathetic"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The two-hour meeting was completely _____ because nobody had prepared any data. The manager asked everyone to come ready next time.",
    "options": [
      "reluctant",
      "unproductive",
      "sleepy",
      "easygoing"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The old heating system is _____ and uses far too much electricity. Replacing it will lower the building's energy bills every winter.",
    "options": [
      "apathetic",
      "reluctant",
      "easygoing",
      "inefficient"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "In price negotiations, a _____ approach rarely gets the best deal. Successful buyers ask questions and make clear counteroffers to suppliers.",
    "options": [
      "sleepy",
      "tired",
      "passive",
      "wealthy"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The patient seemed weak and _____ after several days without proper meals. The nurse encouraged him to eat a small breakfast.",
    "options": [
      "listless",
      "inefficient",
      "unambitious",
      "laid-back"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Some cold medicines can make you feel _____, so do not drive after taking them. Read the label carefully before use.",
    "options": [
      "unambitious",
      "inefficient",
      "unproductive",
      "sleepy"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "After working three night shifts in a row, the nurses were extremely _____. The hospital hired extra staff to give them more rest.",
    "options": [
      "unambitious",
      "tired",
      "generous",
      "expensive"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The beach resort offers a _____ atmosphere where guests can relax by the pool all day. Many families return every summer.",
    "options": [
      "laid-back",
      "inefficient",
      "careless",
      "reluctant"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Our new manager is _____ and rarely gets upset when plans change. Staff feel comfortable sharing new ideas with her.",
    "options": [
      "inefficient",
      "careless",
      "easygoing",
      "unproductive"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Sales of winter clothing remained _____ because of the unusually warm weather. Retailers lowered prices to attract more shoppers.",
    "options": [
      "apathetic",
      "sluggish",
      "easygoing",
      "reluctant"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Once a leader in mobile phones, the company is now a _____ in the market. It is investing heavily to catch up with competitors.",
    "options": [
      "couch potato",
      "dreamer",
      "shirker",
      "laggard"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Teachers described Mark as a bright _____ because his grades were low despite his intelligence. A mentor later helped him reach his potential.",
    "options": [
      "inventor",
      "supplier",
      "underachiever",
      "landlord"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The board rejected the sales plan as too _____ because it aimed for only one percent growth. They asked for higher targets.",
    "options": [
      "unambitious",
      "sleepy",
      "listless",
      "punctual"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "idle": {
    "pos": "adj.",
    "en_def": "not working or not being used",
    "cn_def": "閒置的；無所事事的"
  },
  "slothful": {
    "pos": "adj.",
    "en_def": "very lazy and slow to act",
    "cn_def": "懶散的；怠惰的"
  },
  "indolent": {
    "pos": "adj.",
    "en_def": "not wanting to work or make any effort",
    "cn_def": "懶惰的；好逸惡勞的"
  },
  "inactive": {
    "pos": "adj.",
    "en_def": "not doing anything; not moving or being used",
    "cn_def": "不活躍的；未使用的"
  },
  "lethargic": {
    "pos": "adj.",
    "en_def": "feeling tired and without energy",
    "cn_def": "無精打采的；倦怠的"
  },
  "unmotivated": {
    "pos": "adj.",
    "en_def": "having no interest in working hard",
    "cn_def": "缺乏動力的"
  },
  "apathetic": {
    "pos": "adj.",
    "en_def": "showing no interest or feeling about something",
    "cn_def": "冷漠的；漠不關心的"
  },
  "careless": {
    "pos": "adj.",
    "en_def": "not paying enough attention, so mistakes happen",
    "cn_def": "粗心的；草率的"
  },
  "reluctant": {
    "pos": "adj.",
    "en_def": "not wanting to do something",
    "cn_def": "不情願的；勉強的"
  },
  "procrastinate": {
    "pos": "v.",
    "en_def": "to delay doing something you should do",
    "cn_def": "拖延"
  },
  "loaf": {
    "pos": "v.",
    "en_def": "to spend time doing nothing when you should be working",
    "cn_def": "閒晃；遊手好閒"
  },
  "dawdle": {
    "pos": "v.",
    "en_def": "to move or do something too slowly",
    "cn_def": "磨蹭；拖拖拉拉"
  },
  "slack": {
    "pos": "v.",
    "en_def": "to work less hard than you should",
    "cn_def": "懈怠；偷懶"
  },
  "neglect": {
    "pos": "v.",
    "en_def": "to not give enough care or attention to something",
    "cn_def": "忽略；疏於照顧"
  },
  "slacker": {
    "pos": "n.",
    "en_def": "a person who avoids work",
    "cn_def": "偷懶的人；懶鬼"
  },
  "idler": {
    "pos": "n.",
    "en_def": "a person who spends time doing nothing useful",
    "cn_def": "遊手好閒的人"
  },
  "couch potato": {
    "pos": "n.phr.",
    "en_def": "a person who watches a lot of TV and does little exercise",
    "cn_def": "整天窩在沙發看電視的人"
  },
  "shirker": {
    "pos": "n.",
    "en_def": "a person who avoids work or duties",
    "cn_def": "逃避工作的人"
  },
  "loafer": {
    "pos": "n.",
    "en_def": "a lazy person who avoids work",
    "cn_def": "懶漢；遊手好閒者"
  },
  "dreamer": {
    "pos": "n.",
    "en_def": "a person whose ideas and plans are not practical",
    "cn_def": "空想家；愛做夢的人"
  },
  "slow": {
    "pos": "adj.",
    "en_def": "not fast; taking a long time",
    "cn_def": "緩慢的"
  },
  "unproductive": {
    "pos": "adj.",
    "en_def": "not producing good results",
    "cn_def": "沒有成效的；生產力低的"
  },
  "inefficient": {
    "pos": "adj.",
    "en_def": "wasting time, money or energy",
    "cn_def": "效率低的"
  },
  "passive": {
    "pos": "adj.",
    "en_def": "accepting what happens without trying to act or change it",
    "cn_def": "被動的；消極的"
  },
  "listless": {
    "pos": "adj.",
    "en_def": "having no energy or interest",
    "cn_def": "無精打采的；倦怠的"
  },
  "sleepy": {
    "pos": "adj.",
    "en_def": "tired and ready to sleep",
    "cn_def": "想睡的；睏的"
  },
  "tired": {
    "pos": "adj.",
    "en_def": "needing rest",
    "cn_def": "疲倦的；累的"
  },
  "unenergetic": {
    "pos": "adj.",
    "en_def": "lacking energy or enthusiasm",
    "cn_def": "缺乏活力的"
  },
  "laid-back": {
    "pos": "adj.",
    "en_def": "relaxed and calm; not worried",
    "cn_def": "悠閒的；輕鬆隨意的"
  },
  "easygoing": {
    "pos": "adj.",
    "en_def": "relaxed and not easily upset",
    "cn_def": "隨和的；脾氣好的"
  },
  "sluggish": {
    "pos": "adj.",
    "en_def": "moving or working more slowly than usual",
    "cn_def": "遲緩的；低迷的"
  },
  "laggard": {
    "pos": "n.",
    "en_def": "a person or company that is slower than others",
    "cn_def": "落後者"
  },
  "underachiever": {
    "pos": "n.",
    "en_def": "a person who does less well than they could",
    "cn_def": "表現低於實力的人"
  },
  "unambitious": {
    "pos": "adj.",
    "en_def": "not wanting to be successful or to improve",
    "cn_def": "沒有企圖心的"
  }
};

const EXTRA_GLOSSES = {};
