// Topic 189 Quiz Data: Information 資訊
// Source word list: https://www.examword.com/group-topic/information — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T189 - Information 資訊",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "data",
    "pos": "n.",
    "cn_def": "資料；數據",
    "en_def": "facts or numbers collected for study or use",
    "sentence": "A: Why did the marketing team cancel this afternoon's meeting with the new clients from Osaka? B: The research company sent us the wrong customer {{BLANK}} last night, so we need two more days to check the sales numbers carefully before we can present our plan to them.",
    "cn": "A：為什麼行銷團隊取消了今天下午和大阪新客戶的會議？ B：研究公司昨晚寄給我們錯誤的客戶【資料】，所以我們需要再兩天仔細核對銷售數字，才能向他們提出我們的計畫。"
  },
  {
    "word": "detail",
    "pos": "n.",
    "cn_def": "細節",
    "en_def": "a small fact or piece of information",
    "sentence": "A: The hotel manager called again about the company dinner next Friday, but I'm not sure what she needs from us now. B: She wants to know every {{BLANK}} of the menu, including how many guests don't eat meat, so please send her the final list before lunch today.",
    "cn": "A：飯店經理又打電話來問下週五公司晚宴的事，但我不確定她現在需要我們提供什麼。 B：她想知道菜單的每一個【細節】，包括有多少位賓客不吃肉，所以請在今天午餐前把最終名單寄給她。"
  },
  {
    "word": "fact",
    "pos": "n.",
    "cn_def": "事實",
    "en_def": "something that is known to be true",
    "sentence": "A: Our boss said the new delivery service is cheaper, but are you sure that it will really save the company money this year? B: Yes, it's a {{BLANK}} that their prices are twenty percent lower than our current supplier, and I compared both contracts line by line this morning.",
    "cn": "A：老闆說新的快遞服務比較便宜，但你確定今年真的能幫公司省錢嗎？ B：是的，他們的價格比我們現在的供應商低百分之二十，這是【事實】，而且我今天早上已經逐行比較過兩份合約了。"
  },
  {
    "word": "knowledge",
    "pos": "n.",
    "cn_def": "知識；了解",
    "en_def": "information and understanding that you get from learning or experience",
    "sentence": "A: Do you think Linda is the right person to train the new staff members at our Taichung branch next month? B: Definitely, because she has worked in customer service for ten years, and her {{BLANK}} of our products is better than anyone else's in the whole department.",
    "cn": "A：你認為琳達適合下個月在我們台中分公司訓練新進員工嗎？ B：當然，因為她在客服部門工作了十年，而且她對我們產品的【了解】比整個部門任何人都好。"
  },
  {
    "word": "evidence",
    "pos": "n.",
    "cn_def": "證據",
    "en_def": "facts or things that show something is true",
    "sentence": "A: The customer says the package arrived broken, but our warehouse team insists it was packed carefully. What should we do? B: Let's ask her to send photos as {{BLANK}} of the damage, and then we can decide whether to give her a refund or a replacement.",
    "cn": "A：顧客說包裹送到時是壞的，但我們的倉庫團隊堅持包裝得很仔細。我們該怎麼辦？ B：我們請她寄照片作為損壞的【證據】，然後再決定要給她退款還是換貨。"
  },
  {
    "word": "report",
    "pos": "n.",
    "cn_def": "報告",
    "en_def": "a written or spoken description of a situation or results",
    "sentence": "A: Have you finished checking the sales numbers for the third quarter that the director asked about yesterday? B: Almost, I just need to add two charts and a short conclusion, and then I'll send the complete {{BLANK}} to her before the board meeting starts at three.",
    "cn": "A：主任昨天問的第三季銷售數字，你核對完了嗎？ B：快好了，我只需要再加兩張圖表和簡短的結論，然後會在三點董事會開始前把完整的【報告】寄給她。"
  },
  {
    "word": "record",
    "pos": "n.",
    "cn_def": "紀錄",
    "en_def": "written information about past events, kept so it can be checked later",
    "sentence": "A: A customer called to complain that she paid her bill twice last month, but she can't find her receipt. B: Don't worry, our accounting system keeps a {{BLANK}} of every payment, so I'll look up her account number and check the dates right away.",
    "cn": "A：一位顧客打電話來抱怨她上個月付了兩次帳單，但她找不到收據。 B：別擔心，我們的會計系統保存了每一筆付款的【紀錄】，所以我馬上查她的帳號並核對日期。"
  },
  {
    "word": "file",
    "pos": "n.",
    "cn_def": "檔案",
    "en_def": "a set of information stored on a computer under one name",
    "sentence": "A: I can't open the presentation you emailed me this morning, and the client meeting starts in less than an hour. B: Sorry about that, the {{BLANK}} was probably too large for the email system, so I'll save it to our shared drive and send you the link now.",
    "cn": "A：我打不開你今天早上寄給我的簡報，而客戶會議不到一個小時就要開始了。 B：抱歉，那個【檔案】可能太大，電子郵件系統無法處理，所以我現在把它存到共用雲端硬碟，再把連結傳給你。"
  },
  {
    "word": "document",
    "pos": "n.",
    "cn_def": "文件",
    "en_def": "an official paper that gives information or proof",
    "sentence": "A: What do I need to bring to the bank tomorrow when I open the new business account for our company? B: You should bring your passport, the company registration certificate, and any other official {{BLANK}} that shows you are allowed to sign for the business.",
    "cn": "A：明天我去銀行為公司開新的企業帳戶時，需要帶什麼？ B：你應該帶護照、公司登記證，以及任何其他能證明你有權代表公司簽名的正式【文件】。"
  },
  {
    "word": "source",
    "pos": "n.",
    "cn_def": "來源；消息來源",
    "en_def": "a person, book or place that gives you information",
    "sentence": "A: Where did you find the information about our competitor's new product, which you mentioned in this morning's sales meeting? B: A {{BLANK}} inside the industry told me about it at last week's trade fair, but we should still wait for an official announcement before we change our plans.",
    "cn": "A：你在今天早上業務會議中提到的競爭對手新產品資訊，是從哪裡得知的？ B：一位業界的【消息來源】在上週的貿易展告訴我的，但在改變計畫之前，我們還是應該等正式公告。"
  },
  {
    "word": "reference",
    "pos": "n.",
    "cn_def": "參考",
    "en_def": "the act of looking at something for information",
    "sentence": "A: The new sales assistants keep asking me the same questions about prices and discounts every single day. B: Why don't we make a short printed guide for their {{BLANK}}, so they can check the prices quickly by themselves when customers ask questions at the counter?",
    "cn": "A：新來的銷售助理每天都一直問我同樣關於價格和折扣的問題。 B：我們何不做一本簡短的印刷手冊供他們【參考】，這樣顧客在櫃檯發問時，他們就能自己快速查價格？"
  },
  {
    "word": "statistics",
    "pos": "n.",
    "cn_def": "統計數字",
    "en_def": "numbers that show facts about a large group",
    "sentence": "A: How do we know that more young people are shopping at our stores this year than they did last year? B: The latest {{BLANK}} from our membership program show that customers under thirty now make up forty percent of all sales, compared with only twenty-five percent before.",
    "cn": "A：我們怎麼知道今年來我們店購物的年輕人比去年多？ B：會員計畫最新的【統計數字】顯示，三十歲以下的顧客現在占所有銷售額的百分之四十，而以前只有百分之二十五。"
  },
  {
    "word": "figure",
    "pos": "n.",
    "cn_def": "數字；數據",
    "en_def": "a number, especially an official one",
    "sentence": "A: Did the finance team finally send the numbers for last month's online sales to the manager? B: Yes, and the final {{BLANK}} was much higher than we expected, so the manager wants to give everyone in the online team a small bonus at the end of the year.",
    "cn": "A：財務團隊終於把上個月的線上銷售數字寄給經理了嗎？ B：寄了，而且最終【數字】比我們預期的高很多，所以經理想在年底給線上團隊每個人一筆小獎金。"
  },
  {
    "word": "content",
    "pos": "n.",
    "cn_def": "內容",
    "en_def": "the information, words, pictures or videos in something such as a website",
    "sentence": "A: Our company website gets lots of visitors, but very few of them stay for more than a minute. Why? B: I think the {{BLANK}} is too boring and old, so we should add short videos, customer stories, and useful tips that people actually want to read.",
    "cn": "A：我們公司的網站有很多訪客，但很少人停留超過一分鐘。為什麼？ B：我覺得【內容】太無聊又太舊了，所以我們應該加入短片、顧客故事以及大家真正想看的實用小技巧。"
  },
  {
    "word": "message",
    "pos": "n.",
    "cn_def": "訊息；留言",
    "en_def": "a piece of written or spoken information that you send or leave for someone",
    "sentence": "A: Mr. Chen from the shipping company called while you were at lunch, and he sounded quite worried about something. B: Thanks for telling me. Did he leave a {{BLANK}} for me, or should I call him back as soon as I finish checking these delivery orders?",
    "cn": "A：你去吃午餐時，貨運公司的陳先生打電話來，他聽起來對某件事很擔心。 B：謝謝你告訴我。他有給我【留言】嗎？還是我檢查完這些送貨單後就馬上回電給他？"
  },
  {
    "word": "signal",
    "pos": "n.",
    "cn_def": "訊號",
    "en_def": "radio waves that carry sound or pictures to a phone or TV",
    "sentence": "A: Why do you keep walking to the window every time you talk on the phone with our clients? B: The mobile phone {{BLANK}} in this meeting room is really weak, so the calls often drop, and I have to stand near the window to hear people clearly.",
    "cn": "A：為什麼你每次和客戶講電話時都一直走到窗邊？ B：這間會議室的手機【訊號】真的很弱，所以電話常常斷線，我必須站在窗邊才能聽清楚對方說話。"
  },
  {
    "word": "feedback",
    "pos": "n.",
    "cn_def": "意見回饋",
    "en_def": "opinions about how good or bad something is",
    "sentence": "A: How did the customers like the new menu that our restaurant started serving last weekend? B: We got a lot of positive {{BLANK}} on our website, but several people said the portions were too small, so the chef is planning to make a few changes.",
    "cn": "A：顧客喜歡我們餐廳上週末開始供應的新菜單嗎？ B：我們在網站上收到很多正面的【意見回饋】，但有幾個人說份量太少，所以主廚打算做一些調整。"
  },
  {
    "word": "update",
    "pos": "n.",
    "cn_def": "最新消息；最新進度",
    "en_def": "the newest information about something",
    "sentence": "A: The shipment of laptops for our new office was supposed to arrive this morning, but nothing has come yet. B: I called the delivery company an hour ago, and they promised to send us an {{BLANK}} on the truck's location by email before the end of the day.",
    "cn": "A：要送到新辦公室的那批筆電原本今天早上應該到，但到現在什麼都沒來。 B：我一個小時前打電話給貨運公司，他們答應今天下班前會用電子郵件寄給我們卡車位置的【最新消息】。"
  },
  {
    "word": "briefing",
    "pos": "n.",
    "cn_def": "簡報會；簡要說明",
    "en_def": "a meeting where people are given information or instructions",
    "sentence": "A: What time do the sales staff need to arrive at the convention center on the first morning of the trade show? B: Please tell them to come by eight, because there is a short {{BLANK}} with the manager about prices, sample products, and important customers before the doors open at nine.",
    "cn": "A：展覽第一天早上，業務人員需要幾點到會議中心？ B：請告訴他們八點前到，因為九點開門前，經理會舉行一場關於價格、樣品和重要客戶的簡短【簡報會】。"
  },
  {
    "word": "announcement",
    "pos": "n.",
    "cn_def": "公告；宣布",
    "en_def": "an official public statement about something",
    "sentence": "A: Why is everyone in the office talking about the company's plans for next year this morning? B: The president made an {{BLANK}} at the staff meeting that we will open two new branches in Japan, and some of us may get a chance to work overseas.",
    "cn": "A：為什麼今天早上辦公室裡每個人都在談論公司明年的計畫？ B：總裁在員工大會上【宣布】我們將在日本開兩家新分公司，而且我們之中有些人可能有機會到海外工作。"
  },
  {
    "word": "instruction",
    "pos": "n.",
    "cn_def": "指示；說明",
    "en_def": "information that tells you how to do something",
    "sentence": "A: I tried to set up the new printer in the meeting room by myself, but it still won't connect to my computer. B: Did you follow every {{BLANK}} in the user's guide carefully, especially the part about installing the software before you plug in the cable?",
    "cn": "A：我試著自己安裝會議室的新印表機，但它還是連不上我的電腦。 B：你有仔細遵照使用手冊裡的每一項【說明】嗎？特別是插上電線之前要先安裝軟體的那部分？"
  },
  {
    "word": "guideline",
    "pos": "n.",
    "cn_def": "準則；指導原則",
    "en_def": "a rule or piece of advice about how to do something",
    "sentence": "A: Can I post photos from our office party on my personal social media account this weekend? B: You should check the company's new {{BLANK}} about social media first, because it says employees must ask their coworkers before sharing any pictures that show their faces online.",
    "cn": "A：我這個週末可以把辦公室派對的照片貼到我的個人社群帳號嗎？ B：你應該先看看公司新的社群媒體【準則】，因為上面說員工在網路上分享任何拍到同事臉的照片之前，必須先徵求他們同意。"
  },
  {
    "word": "description",
    "pos": "n.",
    "cn_def": "描述；說明",
    "en_def": "words that tell what something or someone is like",
    "sentence": "A: Why are so many customers returning the blue jackets that we started selling on our website last month? B: The product {{BLANK}} said they were waterproof, but they actually aren't, so we need to change the wording and offer refunds to the unhappy buyers.",
    "cn": "A：為什麼有那麼多顧客退回我們上個月開始在網站上販售的藍色夾克？ B：商品【說明】寫著它們是防水的，但實際上並不是，所以我們需要修改文字，並退款給不滿意的買家。"
  },
  {
    "word": "summary",
    "pos": "n.",
    "cn_def": "摘要",
    "en_def": "a short statement of the main points",
    "sentence": "A: I missed the planning meeting yesterday because my flight from Singapore was delayed for five hours. B: No problem, I wrote a short {{BLANK}} of the main points and decisions, so I'll email it to you now, and you can call me if you have any questions.",
    "cn": "A：我錯過了昨天的企劃會議，因為我從新加坡出發的班機延誤了五個小時。 B：沒問題，我寫了一份重點和決議的簡短【摘要】，現在就用電子郵件寄給你，有任何問題可以打電話給我。"
  },
  {
    "word": "overview",
    "pos": "n.",
    "cn_def": "概要；概述",
    "en_def": "a short general description of something",
    "sentence": "A: What will happen on the first day of the training program for the new employees next Monday morning? B: The HR manager will give a general {{BLANK}} of the company's history, departments, and main products before the new staff members meet their team leaders after lunch.",
    "cn": "A：下週一早上新進員工訓練課程的第一天會進行什麼？ B：人資經理會先介紹公司歷史、各部門和主要產品的整體【概要】，午餐後新進員工再去和他們的組長見面。"
  },
  {
    "word": "clarify",
    "pos": "v.",
    "cn_def": "澄清；說明清楚",
    "en_def": "to make something easier to understand",
    "sentence": "A: Some of our customers seem confused about the new return rules that we put on the website last week. B: Then let's send them an email to {{BLANK}} the main points, especially how many days they have to return items and whether they need the original receipt.",
    "cn": "A：我們有些顧客似乎對上週放在網站上的新退貨規定感到困惑。 B：那我們寄封電子郵件給他們，【說明清楚】重點，特別是他們有幾天可以退貨，以及是否需要原始收據。"
  },
  {
    "word": "inform",
    "pos": "v.",
    "cn_def": "通知；告知",
    "en_def": "to tell someone about something officially",
    "sentence": "A: The training session for the new accounting software has been moved from Tuesday to Thursday afternoon. B: Okay, I'll {{BLANK}} everyone in the finance department by email right away, so nobody comes to the meeting room on the wrong day and wastes their time.",
    "cn": "A：新會計軟體的訓練課程已經從星期二改到星期四下午了。 B：好，我馬上用電子郵件【通知】財務部的每個人，這樣就不會有人在錯的日子到會議室浪費時間。"
  },
  {
    "word": "notify",
    "pos": "v.",
    "cn_def": "通知",
    "en_def": "to tell someone about something, usually in a formal way",
    "sentence": "A: What should I do if a hotel guest leaves a bag or a phone in their room after checking out? B: First, put the item in the lost-and-found box at the front desk, and then {{BLANK}} the guest by phone or email so they can decide how to get it back.",
    "cn": "A：如果飯店房客退房後把包包或手機留在房間裡，我該怎麼做？ B：首先，把物品放進櫃檯的失物招領箱，然後用電話或電子郵件【通知】房客，讓他們決定要怎麼取回。"
  },
  {
    "word": "reveal",
    "pos": "v.",
    "cn_def": "揭露；公布",
    "en_def": "to show or tell something that was secret or unknown",
    "sentence": "A: When will the company tell the public about the new smartphone that the design team has been working on all year? B: The CEO plans to {{BLANK}} the new model at a big press event in Taipei next month, so we must keep everything secret until then.",
    "cn": "A：公司什麼時候會向大眾公開設計團隊忙了一整年的新智慧型手機？ B：執行長計畫下個月在台北的大型記者會上【公布】新機型，所以在那之前我們必須把一切保密。"
  },
  {
    "word": "disclose",
    "pos": "v.",
    "cn_def": "公開；透露",
    "en_def": "to make information known to the public, especially information that was private",
    "sentence": "A: A reporter called and asked how much money we paid for the new factory in Vietnam last spring. B: Please tell her politely that we cannot {{BLANK}} the price, because the contract says both companies must keep the details private for at least two years.",
    "cn": "A：一位記者打電話來，問我們去年春天在越南買新工廠付了多少錢。 B：請禮貌地告訴她，我們不能【透露】價格，因為合約規定兩家公司必須對細節保密至少兩年。"
  },
  {
    "word": "communicate",
    "pos": "v.",
    "cn_def": "溝通",
    "en_def": "to share ideas, information or feelings with other people",
    "sentence": "A: Our team members work in three different countries, so it's really hard to share ideas and solve problems quickly. B: Maybe we should use a group chat app, so everyone can {{BLANK}} more easily, and we can also hold a short video meeting every Monday morning.",
    "cn": "A：我們的團隊成員在三個不同的國家工作，所以要快速分享想法和解決問題真的很困難。 B：也許我們應該使用群組聊天應用程式，讓每個人能更方便地【溝通】，我們也可以每週一早上開個簡短的視訊會議。"
  },
  {
    "word": "informative",
    "pos": "adj.",
    "cn_def": "資訊豐富的；有益的",
    "en_def": "giving a lot of useful information",
    "sentence": "A: Was the seminar about online marketing worth the money that the company paid for our tickets last Saturday? B: Yes, it was very {{BLANK}}, because the speakers shared many useful tips about social media advertising that we can use for our new product launch next month.",
    "cn": "A：上週六那場網路行銷研討會值得公司幫我們付的票錢嗎？ B：值得，內容非常【豐富有益】，因為講者分享了許多社群媒體廣告的實用技巧，我們下個月的新產品發表就能用上。"
  },
  {
    "word": "accurate",
    "pos": "adj.",
    "cn_def": "準確的",
    "en_def": "correct and without mistakes",
    "sentence": "A: Why does the manager want us to count all the products in the warehouse again this weekend? B: The numbers in our computer system aren't {{BLANK}}, because some boxes were sent to the wrong store last month, and we need correct numbers before we order more goods.",
    "cn": "A：為什麼經理要我們這個週末再把倉庫裡所有的產品清點一次？ B：我們電腦系統裡的數字不【準確】，因為上個月有些箱子被送錯分店，我們在訂購更多貨品之前需要正確的數字。"
  },
  {
    "word": "reliable",
    "pos": "adj.",
    "cn_def": "可靠的",
    "en_def": "able to be trusted to do something well",
    "sentence": "A: We need a new company to deliver our products to stores in southern Taiwan. Do you have any suggestions? B: I recommend Fast Line Logistics, because they are very {{BLANK}}, their trucks always arrive on time, and their prices are reasonable for small businesses like ours.",
    "cn": "A：我們需要一家新公司把產品送到南台灣的門市。你有什麼建議嗎？ B：我推薦快線物流，因為他們非常【可靠】，卡車總是準時抵達，而且價格對我們這種小公司來說很合理。"
  },
  {
    "word": "confidential",
    "pos": "adj.",
    "cn_def": "機密的",
    "en_def": "meant to be kept secret",
    "sentence": "A: Can I take these salary documents home tonight, so I can finish checking them before tomorrow's meeting? B: I'm afraid not, because that information is strictly {{BLANK}}, and company rules say it must stay in the office and be locked in the cabinet every evening.",
    "cn": "A：我今晚可以把這些薪資文件帶回家，好在明天會議前檢查完嗎？ B：恐怕不行，因為那些資訊是嚴格【機密】，公司規定它們必須留在辦公室，而且每天晚上要鎖在櫃子裡。"
  }
];

const MCQS = [
  {
    "q": "The research team gathered _____ from more than two thousand online shoppers. The results will help us plan next year's advertising budget.",
    "options": [
      "data",
      "briefing",
      "guideline",
      "announcement"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Please check every _____ of the travel plan before you send it to the client. Even a small mistake with the dates could cause problems.",
    "options": [
      "briefing",
      "detail",
      "signal",
      "evidence"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Our new sales director has a deep _____ of the Asian market. She worked in Tokyo and Seoul for more than ten years.",
    "options": [
      "statistics",
      "summary",
      "knowledge",
      "announcement"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The lawyer asked for clear _____ that the supplier had broken the contract. Without it, the company cannot ask for any money back.",
    "options": [
      "briefing",
      "instruction",
      "overview",
      "evidence"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The accountant must submit the monthly sales _____ to the director by Friday afternoon. It should include charts for each store.",
    "options": [
      "guideline",
      "report",
      "signal",
      "source"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The clinic keeps a careful _____ of every patient's visits and payments. Staff can check this information on the computer at any time.",
    "options": [
      "signal",
      "briefing",
      "guideline",
      "record"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Before the meeting, both managers must sign the legal _____ in front of the lawyer. A copy will be kept in the main office.",
    "options": [
      "document",
      "feedback",
      "overview",
      "signal"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The reporter refused to name the _____ of her story about the factory closing. She promised to protect the person who had spoken to her.",
    "options": [
      "summary",
      "description",
      "source",
      "statistics"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Please keep this price list on your desk for future _____. It will help you answer customer questions quickly and correctly.",
    "options": [
      "evidence",
      "announcement",
      "signal",
      "reference"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "According to the latest government _____, the number of tourists visiting Taiwan rose by fifteen percent. Hotels in Taipei are almost fully booked.",
    "options": [
      "statistics",
      "instruction",
      "feedback",
      "guideline"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Our marketing team creates fresh online _____ every week, such as videos and short articles. This helps attract more visitors to our website.",
    "options": [
      "evidence",
      "content",
      "briefing",
      "signal"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "If I am not at my desk, please leave a _____ with my assistant. I will call you back as soon as possible.",
    "options": [
      "evidence",
      "guideline",
      "message",
      "overview"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The hotel asks every guest to give _____ on its service by filling out a short online survey. Managers read the comments every Monday.",
    "options": [
      "feedback",
      "evidence",
      "statistics",
      "reference"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The project manager will give us a quick _____ on the new office building at today's meeting. Construction is now two weeks behind schedule.",
    "options": [
      "evidence",
      "guideline",
      "update",
      "source"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "All flight attendants must attend a short safety _____ before each flight. The captain explains the weather and any special concerns.",
    "options": [
      "evidence",
      "briefing",
      "source",
      "description"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The airline made an _____ that all evening flights to Tokyo would be canceled because of the typhoon. Passengers quickly lined up at the counter.",
    "options": [
      "evidence",
      "instruction",
      "overview",
      "announcement"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Read each _____ in the manual carefully before you use the new coffee machine. Using it the wrong way may damage the equipment.",
    "options": [
      "statistics",
      "feedback",
      "instruction",
      "source"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "According to the company's new _____, employees may work from home two days a week. Managers must approve each request in advance.",
    "options": [
      "guideline",
      "evidence",
      "signal",
      "statistics"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The job _____ explains the main duties and the skills required for the position. Applicants should read it carefully before they apply.",
    "options": [
      "evidence",
      "signal",
      "briefing",
      "description"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Could you write a brief _____ of the meeting for the employees who were absent today? Please send it by email before five o'clock.",
    "options": [
      "evidence",
      "summary",
      "signal",
      "source"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The manager asked the supplier to _____ a few points in the contract before signing. Some of the payment terms were not clear.",
    "options": [
      "clarify",
      "notify",
      "inform",
      "disclose"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Please _____ the hotel of any changes to your arrival time. The front desk closes at midnight on weekdays.",
    "options": [
      "reveal",
      "clarify",
      "communicate",
      "inform"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The bank will _____ you by text message if anyone uses your card overseas. You can then contact customer service immediately.",
    "options": [
      "reveal",
      "disclose",
      "notify",
      "clarify"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The car company will _____ its new electric model at the auto show next week. Until then, the design remains a secret.",
    "options": [
      "inform",
      "reveal",
      "notify",
      "clarify"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Doctors are not allowed to _____ a patient's personal information to other people without permission. This rule protects everyone's privacy.",
    "options": [
      "inform",
      "notify",
      "disclose",
      "clarify"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Good managers _____ clearly with their team members, so everyone understands the goals. Regular meetings also help avoid misunderstandings.",
    "options": [
      "communicate",
      "disclose",
      "notify",
      "reveal"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The museum tour was very _____, and we learned a lot about the history of the city. I recommend it to all visitors.",
    "options": [
      "confidential",
      "accurate",
      "reliable",
      "informative"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Please make sure the prices on the menu are _____ before we print five hundred copies. Last year we printed several wrong numbers.",
    "options": [
      "confidential",
      "accurate",
      "informative",
      "curious"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "We need a _____ supplier who always delivers on time. Last month, our old supplier was late three times.",
    "options": [
      "reliable",
      "confidential",
      "informative",
      "accurate"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "Salary information is strictly _____, so only managers in the HR department can see it. Please do not share it with anyone.",
    "options": [
      "informative",
      "confidential",
      "accurate",
      "reliable"
    ],
    "answer": 1,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "data": {
    "pos": "n.",
    "en_def": "facts or numbers collected for study or use",
    "cn_def": "資料；數據"
  },
  "detail": {
    "pos": "n.",
    "en_def": "a small fact or piece of information",
    "cn_def": "細節"
  },
  "fact": {
    "pos": "n.",
    "en_def": "something that is known to be true",
    "cn_def": "事實"
  },
  "knowledge": {
    "pos": "n.",
    "en_def": "information and understanding that you get from learning or experience",
    "cn_def": "知識；了解"
  },
  "evidence": {
    "pos": "n.",
    "en_def": "facts or things that show something is true",
    "cn_def": "證據"
  },
  "report": {
    "pos": "n.",
    "en_def": "a written or spoken description of a situation or results",
    "cn_def": "報告"
  },
  "record": {
    "pos": "n.",
    "en_def": "written information about past events, kept so it can be checked later",
    "cn_def": "紀錄"
  },
  "file": {
    "pos": "n.",
    "en_def": "a set of information stored on a computer under one name",
    "cn_def": "檔案"
  },
  "document": {
    "pos": "n.",
    "en_def": "an official paper that gives information or proof",
    "cn_def": "文件"
  },
  "source": {
    "pos": "n.",
    "en_def": "a person, book or place that gives you information",
    "cn_def": "來源；消息來源"
  },
  "reference": {
    "pos": "n.",
    "en_def": "the act of looking at something for information",
    "cn_def": "參考"
  },
  "statistics": {
    "pos": "n.",
    "en_def": "numbers that show facts about a large group",
    "cn_def": "統計數字"
  },
  "figure": {
    "pos": "n.",
    "en_def": "a number, especially an official one",
    "cn_def": "數字；數據"
  },
  "content": {
    "pos": "n.",
    "en_def": "the information, words, pictures or videos in something such as a website",
    "cn_def": "內容"
  },
  "message": {
    "pos": "n.",
    "en_def": "a piece of written or spoken information that you send or leave for someone",
    "cn_def": "訊息；留言"
  },
  "signal": {
    "pos": "n.",
    "en_def": "radio waves that carry sound or pictures to a phone or TV",
    "cn_def": "訊號"
  },
  "feedback": {
    "pos": "n.",
    "en_def": "opinions about how good or bad something is",
    "cn_def": "意見回饋"
  },
  "update": {
    "pos": "n.",
    "en_def": "the newest information about something",
    "cn_def": "最新消息；最新進度"
  },
  "briefing": {
    "pos": "n.",
    "en_def": "a meeting where people are given information or instructions",
    "cn_def": "簡報會；簡要說明"
  },
  "announcement": {
    "pos": "n.",
    "en_def": "an official public statement about something",
    "cn_def": "公告；宣布"
  },
  "instruction": {
    "pos": "n.",
    "en_def": "information that tells you how to do something",
    "cn_def": "指示；說明"
  },
  "guideline": {
    "pos": "n.",
    "en_def": "a rule or piece of advice about how to do something",
    "cn_def": "準則；指導原則"
  },
  "description": {
    "pos": "n.",
    "en_def": "words that tell what something or someone is like",
    "cn_def": "描述；說明"
  },
  "summary": {
    "pos": "n.",
    "en_def": "a short statement of the main points",
    "cn_def": "摘要"
  },
  "overview": {
    "pos": "n.",
    "en_def": "a short general description of something",
    "cn_def": "概要；概述"
  },
  "clarify": {
    "pos": "v.",
    "en_def": "to make something easier to understand",
    "cn_def": "澄清；說明清楚"
  },
  "inform": {
    "pos": "v.",
    "en_def": "to tell someone about something officially",
    "cn_def": "通知；告知"
  },
  "notify": {
    "pos": "v.",
    "en_def": "to tell someone about something, usually in a formal way",
    "cn_def": "通知"
  },
  "reveal": {
    "pos": "v.",
    "en_def": "to show or tell something that was secret or unknown",
    "cn_def": "揭露；公布"
  },
  "disclose": {
    "pos": "v.",
    "en_def": "to make information known to the public, especially information that was private",
    "cn_def": "公開；透露"
  },
  "communicate": {
    "pos": "v.",
    "en_def": "to share ideas, information or feelings with other people",
    "cn_def": "溝通"
  },
  "informative": {
    "pos": "adj.",
    "en_def": "giving a lot of useful information",
    "cn_def": "資訊豐富的；有益的"
  },
  "accurate": {
    "pos": "adj.",
    "en_def": "correct and without mistakes",
    "cn_def": "準確的"
  },
  "reliable": {
    "pos": "adj.",
    "en_def": "able to be trusted to do something well",
    "cn_def": "可靠的"
  },
  "confidential": {
    "pos": "adj.",
    "en_def": "meant to be kept secret",
    "cn_def": "機密的"
  }
};

const EXTRA_GLOSSES = {};
