// Topic 243 Quiz Data: Mistake 錯誤
// Source word list: https://www.examword.com/group-topic/mistake — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T243 - Mistake 錯誤",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "error",
    "pos": "n.",
    "cn_def": "錯誤；差錯",
    "en_def": "a mistake, especially in numbers or a document",
    "sentence": "A: Why did the accounting team stay so late last night, and is the monthly sales report still going to be ready for the board meeting on Friday? B: They found an {{BLANK}} in the spreadsheet that made our profits look much higher than they really were, so they had to check every number again before sending it.",
    "cn": "A：會計團隊昨晚為什麼留到那麼晚？每月銷售報告還能在星期五的董事會前準備好嗎？ B：他們在試算表中發現了一個【錯誤】，讓我們的利潤看起來比實際高很多，所以他們必須在寄出前重新檢查每一個數字。"
  },
  {
    "word": "fault",
    "pos": "n.",
    "cn_def": "過錯；責任",
    "en_def": "responsibility for something that went wrong",
    "sentence": "A: The customer is very angry that her order arrived two weeks late, but was the delay caused by our warehouse staff or by the delivery company? B: It wasn't our {{BLANK}} this time, because the package left our building on schedule, but the delivery company lost it at their sorting center for several days.",
    "cn": "A：那位顧客很生氣她的訂單晚了兩週才到，但這次延誤是我們倉庫員工造成的，還是快遞公司造成的？ B：這次不是我們的【過錯】，因為包裹按時離開了我們的大樓，但快遞公司在他們的分類中心把它弄丟了好幾天。"
  },
  {
    "word": "blunder",
    "pos": "n.",
    "cn_def": "大錯；嚴重疏失",
    "en_def": "a serious and careless mistake",
    "sentence": "A: I heard the new sales assistant sent the price list for our biggest client to a competitor by accident yesterday afternoon. Is that true? B: Unfortunately, yes, it was a terrible {{BLANK}}, and the sales director spent the whole evening on the phone trying to repair the relationship and protect our future business.",
    "cn": "A：我聽說新來的業務助理昨天下午不小心把我們最大客戶的價目表寄給了競爭對手，是真的嗎？ B：很遺憾，是真的，那是一個可怕的【大錯】，業務總監整個晚上都在打電話，試圖修補關係並保護我們未來的生意。"
  },
  {
    "word": "slip",
    "pos": "n.",
    "cn_def": "小失誤；疏忽",
    "en_def": "a small mistake made without thinking",
    "sentence": "A: Why did the hotel receptionist write the wrong date on our booking confirmation, even though we called twice to check the details last week? B: She said it was just a {{BLANK}} because the front desk was extremely busy with a large tour group, and she quickly sent us a corrected email with an apology.",
    "cn": "A：為什麼飯店櫃檯人員在我們的訂房確認單上寫錯了日期，即使我們上週打了兩次電話確認細節？ B：她說那只是一個【小失誤】，因為當時櫃檯正忙著接待一個大型旅行團，她很快就寄了一封更正後的電子郵件並向我們道歉。"
  },
  {
    "word": "misjudge",
    "pos": "v.",
    "cn_def": "誤判；判斷錯誤",
    "en_def": "to form a wrong opinion or guess about something",
    "sentence": "A: Why did the outdoor concert run out of food and drinks so early on Saturday evening, when the organizers had planned the event for months? B: They seemed to {{BLANK}} how many people would come, since the weather was much nicer than expected, and nearly twice as many visitors showed up after work.",
    "cn": "A：為什麼星期六晚上的戶外音樂會那麼早就把食物和飲料賣光了，主辦單位明明已經規劃了好幾個月？ B：他們似乎【誤判】了會來的人數，因為天氣比預期好得多，下班後出現的遊客幾乎多了一倍。"
  },
  {
    "word": "miscalculate",
    "pos": "v.",
    "cn_def": "算錯；誤算",
    "en_def": "to count or estimate something wrongly",
    "sentence": "A: How did the construction company end up spending so much more money on the new office building than the amount written in the original contract? B: The planning team rushed the estimate, so it was easy to {{BLANK}} the cost of steel and wood, and prices also rose quickly during the summer, which pushed the final budget far over the plan.",
    "cn": "A：為什麼建設公司在新辦公大樓上花的錢比原始合約上寫的金額多那麼多？ B：規劃團隊匆忙做了估價，所以很容易【算錯】鋼材和木材的成本，而且夏天價格也快速上漲，使最終預算遠遠超出了計畫。"
  },
  {
    "word": "misunderstand",
    "pos": "v.",
    "cn_def": "誤解；誤會",
    "en_def": "to understand something in the wrong way",
    "sentence": "A: Why did the two departments both order new laptops for the same group of employees last month, which wasted a lot of the company's money? B: The manager's email about the equipment upgrade was so short that it was easy to {{BLANK}}, because it didn't say clearly which team should place the order, so both departments went ahead and bought them.",
    "cn": "A：為什麼上個月兩個部門都為同一群員工訂購了新筆電，浪費了公司很多錢？ B：經理關於設備升級的電子郵件太簡短了，很容易【誤解】，因為信中沒有清楚說明該由哪個團隊下訂單，所以兩個部門都直接買了。"
  },
  {
    "word": "oversight",
    "pos": "n.",
    "cn_def": "疏忽；失察",
    "en_def": "a mistake caused by not noticing something",
    "sentence": "A: The client says our invoice did not include the ten percent discount that we promised during the meeting in March. How could that happen? B: It was an {{BLANK}} by the billing department, since they used an old template, and I have already asked them to send a new invoice with the correct amount today.",
    "cn": "A：客戶說我們的發票沒有包含三月開會時承諾的百分之十折扣，怎麼會發生這種事？ B：那是帳務部門的【疏忽】，因為他們用了舊的範本，我已經要求他們今天寄出金額正確的新發票。"
  },
  {
    "word": "carelessness",
    "pos": "n.",
    "cn_def": "粗心；不小心",
    "en_def": "not paying enough attention, which causes mistakes",
    "sentence": "A: Why was the expensive new printer in the marketing office broken again this morning, only one week after the technician repaired it? B: The technician said it was simply {{BLANK}}, because someone forced a thick stack of photo paper into the machine without reading the instructions, and now we need to buy a new part.",
    "cn": "A：為什麼行銷辦公室那台昂貴的新印表機今天早上又壞了，技術人員才修好它一個星期而已？ B：技術人員說那純粹是【粗心】造成的，因為有人沒看說明就把一疊厚厚的相片紙硬塞進機器，現在我們需要買一個新零件。"
  },
  {
    "word": "inaccuracy",
    "pos": "n.",
    "cn_def": "不準確；錯誤之處",
    "en_def": "a fact or number that is not correct",
    "sentence": "A: Did the editor approve the article about our company's history for next month's newsletter, or does the writer still need to make changes? B: She found one {{BLANK}} about the year our first store opened, so the writer is checking the old records in the archive room before the newsletter goes to print on Thursday.",
    "cn": "A：編輯核准了下個月電子報裡那篇關於我們公司歷史的文章嗎？還是作者還需要修改？ B：她發現了一處關於我們第一家店開幕年份的【錯誤之處】，所以作者正在檔案室查閱舊紀錄，之後電子報才會在星期四付印。"
  },
  {
    "word": "confusion",
    "pos": "n.",
    "cn_def": "混亂；困惑",
    "en_def": "a state in which people do not understand what is happening",
    "sentence": "A: Why were so many passengers waiting at the wrong gate when the flight to Tokyo was finally ready for boarding yesterday afternoon? B: There was a lot of {{BLANK}} because the airline changed the gate number twice in one hour, and the announcement was hard to hear in the crowded and noisy waiting area.",
    "cn": "A：昨天下午飛往東京的班機終於準備登機時，為什麼那麼多乘客在錯的登機門等候？ B：當時一片【混亂】，因為航空公司在一個小時內改了兩次登機門號碼，而且在擁擠吵雜的候機區很難聽清楚廣播。"
  },
  {
    "word": "incorrect",
    "pos": "adj.",
    "cn_def": "不正確的；錯誤的",
    "en_def": "not right or true",
    "sentence": "A: Why hasn't the online store shipped the new office chairs that we ordered for the meeting room more than a week ago? B: The customer service agent told me that the delivery address in our order was {{BLANK}}, because someone typed the wrong building number, so the package was sent back to their warehouse.",
    "cn": "A：我們一個多星期前為會議室訂購的新辦公椅，為什麼網路商店還沒出貨？ B：客服人員告訴我，我們訂單上的送貨地址是【錯誤的】，因為有人打錯了大樓號碼，所以包裹被退回了他們的倉庫。"
  },
  {
    "word": "wrong",
    "pos": "adj.",
    "cn_def": "錯的；不對的",
    "en_def": "not correct",
    "sentence": "A: You look worried. Did something happen during the client presentation this morning, or did the meeting go well in the end? B: I opened the {{BLANK}} file at the start and showed last year's sales figures instead of this year's numbers, but luckily my manager noticed quickly, and the clients didn't seem to mind.",
    "cn": "A：你看起來很擔心，今天早上向客戶簡報時發生了什麼事嗎？還是會議最後進行得很順利？ B：我一開始打開了【錯的】檔案，展示了去年的銷售數字而不是今年的，但幸好我的主管很快就發現了，而且客戶似乎並不介意。"
  },
  {
    "word": "accidental",
    "pos": "adj.",
    "cn_def": "意外的；偶然的",
    "en_def": "happening by chance, not planned",
    "sentence": "A: Why did the IT department suddenly lock everyone out of the shared folder for the new product launch late yesterday evening? B: They said there was an {{BLANK}} deletion of several important files by a new intern, so they locked the folder while they restored everything from the backup copy saved last week.",
    "cn": "A：為什麼資訊部門昨天傍晚突然讓所有人都無法進入新產品發表的共用資料夾？ B：他們說有一位新實習生【意外】刪除了好幾個重要檔案，所以他們在用上週儲存的備份還原所有資料時鎖住了資料夾。"
  },
  {
    "word": "unintentional",
    "pos": "adj.",
    "cn_def": "無意的；非故意的",
    "en_def": "not done on purpose",
    "sentence": "A: The supplier was upset because our email copied their private prices to other companies. Do you think they will cancel the contract with us? B: I don't think so, because our manager called them right away and explained that the mistake was completely {{BLANK}}, and he promised to protect their information more carefully in the future.",
    "cn": "A：供應商很不高興，因為我們的電子郵件把他們的機密價格副本寄給了其他公司，你覺得他們會取消和我們的合約嗎？ B：我不這麼認為，因為我們經理馬上打電話給他們，解釋那個錯誤完全是【無意的】，並承諾將來會更小心地保護他們的資訊。"
  },
  {
    "word": "careless",
    "pos": "adj.",
    "cn_def": "粗心的；不小心的",
    "en_def": "not paying enough attention, so mistakes happen",
    "sentence": "A: Why does the manager want to check every expense report himself this month instead of letting the assistants review them as usual? B: Last month several assistants were quite {{BLANK}} and approved reports with missing receipts, so the company paid for some trips twice, and now he wants to make sure it doesn't happen again.",
    "cn": "A：為什麼經理這個月要親自檢查每一份費用報告，而不是像往常一樣讓助理們審核？ B：上個月有幾位助理相當【粗心】，核准了缺少收據的報告，結果公司有些出差費用付了兩次，現在他想確保這種事不會再發生。"
  },
  {
    "word": "faulty",
    "pos": "adj.",
    "cn_def": "有缺陷的；故障的",
    "en_def": "not working correctly because of a problem",
    "sentence": "A: Why did the factory stop the production line for three hours this morning, when we have so many orders to finish before the holiday season? B: A {{BLANK}} sensor kept sending wrong signals to the packing machine, so the engineers had to replace it before the workers could safely continue filling the boxes.",
    "cn": "A：為什麼工廠今天早上讓生產線停了三個小時？我們在假期旺季前還有那麼多訂單要完成。 B：一個【故障的】感應器一直傳送錯誤訊號給包裝機，所以工程師必須先更換它，工人才能安全地繼續裝箱。"
  },
  {
    "word": "erroneous",
    "pos": "adj.",
    "cn_def": "錯誤的（正式用語）",
    "en_def": "wrong; based on incorrect information (formal)",
    "sentence": "A: Why did the bank call you this morning? Was there a problem with the money you transferred to our new supplier in Singapore last week? B: They said an {{BLANK}} charge appeared on our business account because their system processed the payment twice, and they promised to return the extra amount within three working days.",
    "cn": "A：銀行今天早上為什麼打電話給你？你上週匯給我們新加坡新供應商的那筆錢有問題嗎？ B：他們說我們的企業帳戶出現了一筆【錯誤的】扣款，因為他們的系統把款項處理了兩次，他們承諾會在三個工作天內退還多扣的金額。"
  },
  {
    "word": "flawed",
    "pos": "adj.",
    "cn_def": "有瑕疵的；有缺陷的",
    "en_def": "having a mistake or weakness",
    "sentence": "A: Why did the managers decide not to use the results of the customer survey that the marketing team finished last month? B: They said the survey was {{BLANK}} because it only asked people who already shop in our stores, so the answers didn't really show what new customers think about our products.",
    "cn": "A：為什麼經理們決定不採用行銷團隊上個月完成的顧客調查結果？ B：他們說那份調查是【有缺陷的】，因為它只詢問了已經在我們店裡購物的人，所以那些答案並不能真正反映新顧客對我們產品的看法。"
  },
  {
    "word": "correct",
    "pos": "v.",
    "cn_def": "改正；更正",
    "en_def": "to make something right",
    "sentence": "A: The brochures for the trade show list the wrong phone number for our Taipei office. Is there enough time to print new ones before Friday? B: There isn't enough time to print them again, so the designer will {{BLANK}} the mistake with small stickers, and the assistants will put them on every brochure this afternoon.",
    "cn": "A：商展用的手冊上印錯了我們台北辦公室的電話號碼，在星期五之前還有時間重印嗎？ B：沒有足夠的時間重印了，所以設計師會用小貼紙【更正】這個錯誤，助理們今天下午會把貼紙貼在每一本手冊上。"
  },
  {
    "word": "rectify",
    "pos": "v.",
    "cn_def": "糾正；修正",
    "en_def": "to put something right (formal)",
    "sentence": "A: Several hotel guests complained that the air conditioning in their rooms was not working during the business conference last weekend. What will the manager do? B: He has promised to {{BLANK}} the problem by hiring a new maintenance company and offering every guest who complained a free night during their next stay.",
    "cn": "A：上週末商務會議期間，好幾位飯店房客抱怨他們房間的冷氣不能用，經理會怎麼處理？ B：他承諾會【糾正】這個問題，方法是聘請一家新的維修公司，並在每位投訴的房客下次入住時提供免費住宿一晚。"
  },
  {
    "word": "amend",
    "pos": "v.",
    "cn_def": "修改；修訂",
    "en_def": "to make small changes to a document or law",
    "sentence": "A: The lawyer says that the contract with our new partner in Japan has a few unclear sentences about the payment dates. Can we still sign it today? B: We should wait until tomorrow, because the lawyer needs time to {{BLANK}} those sections, and both companies must agree to the changes before anyone signs.",
    "cn": "A：律師說我們和日本新合作夥伴的合約中，有幾句關於付款日期的句子不太清楚，我們今天還能簽約嗎？ B：我們應該等到明天，因為律師需要時間【修訂】那些段落，而且雙方公司都必須在任何人簽字之前同意這些修改。"
  },
  {
    "word": "revise",
    "pos": "v.",
    "cn_def": "修訂；修改",
    "en_def": "to change something to make it better or more correct",
    "sentence": "A: Did the director like the marketing plan that you sent her on Monday, or did she ask for any changes before the launch next month? B: She liked most of it, but she asked me to {{BLANK}} the budget section because the online advertising costs are higher this year, so I will send her a new version tomorrow.",
    "cn": "A：總監喜歡你星期一寄給她的行銷計畫嗎？還是她在下個月上市前要求做任何修改？ B：她大部分都喜歡，但她要我【修改】預算的部分，因為今年網路廣告的費用比較高，所以我明天會寄給她新的版本。"
  },
  {
    "word": "clarify",
    "pos": "v.",
    "cn_def": "澄清；說明清楚",
    "en_def": "to make something easier to understand",
    "sentence": "A: Some employees are confused about the new rules for working from home, especially about which days they must come into the office. What should we do? B: The HR manager will send an email this afternoon to {{BLANK}} the policy, and she will also answer questions at the staff meeting on Wednesday morning.",
    "cn": "A：有些員工對新的居家工作規定感到困惑，特別是哪幾天必須進辦公室，我們該怎麼辦？ B：人資經理今天下午會寄一封電子郵件來【說明清楚】這項政策，她也會在星期三早上的員工會議上回答問題。"
  },
  {
    "word": "learn",
    "pos": "v.",
    "cn_def": "學習；學到",
    "en_def": "to get knowledge or skill from experience or study",
    "sentence": "A: You made a big mistake with the shipping schedule last month. Are you worried that the manager won't trust you with important projects anymore? B: A little, but she told me that everyone makes mistakes, and the important thing is to {{BLANK}} from them, so now I check every date twice before I send a schedule to the warehouse.",
    "cn": "A：你上個月在出貨時程上犯了一個大錯，你會擔心經理不再把重要的專案交給你嗎？ B：有一點，但她告訴我每個人都會犯錯，重要的是從中【學習】，所以現在我在把時程表寄給倉庫前都會檢查每個日期兩次。"
  },
  {
    "word": "lesson",
    "pos": "n.",
    "cn_def": "教訓",
    "en_def": "something useful you learn from an experience",
    "sentence": "A: Our team lost the contract because we sent the proposal one day after the deadline. What do you think we should do differently next time? B: The biggest {{BLANK}} for all of us is to start working on proposals much earlier and to set our own deadline at least three days before the client's.",
    "cn": "A：我們的團隊因為比截止日期晚了一天寄出提案而失去了合約，你覺得我們下次應該有什麼不同的做法？ B：對我們所有人來說，最大的【教訓】就是要更早開始準備提案，並把我們自己的截止日期設在客戶期限的至少三天前。"
  },
  {
    "word": "regret",
    "pos": "v.",
    "cn_def": "後悔；遺憾",
    "en_def": "to feel sorry about something you did",
    "sentence": "A: Are you happy that you accepted the job at the larger company downtown, even though you have to spend more time commuting every day? B: Sometimes I {{BLANK}} leaving my old team, because they were so friendly and helpful, but the new position offers better training and much more chance to move up in the company.",
    "cn": "A：你接受市中心那家較大公司的工作，即使每天得花更多時間通勤，你開心嗎？ B：有時候我會【後悔】離開原本的團隊，因為他們非常友善又樂於助人，但新職位提供更好的培訓，而且在公司升遷的機會也多得多。"
  },
  {
    "word": "apologize",
    "pos": "v.",
    "cn_def": "道歉",
    "en_def": "to say you are sorry",
    "sentence": "A: A customer in the restaurant waited almost forty minutes for her lunch, and then the waiter brought her the wrong dish. What did the manager do? B: The manager went to her table to {{BLANK}} in person, and he told her that the meal and dessert were free, so she left the restaurant in a much better mood.",
    "cn": "A：餐廳裡有位顧客等了將近四十分鐘才等到午餐，結果服務生還送錯了餐點，經理怎麼處理？ B：經理親自到她的桌邊【道歉】，並告訴她這頓餐點和甜點都免費，所以她離開餐廳時心情好多了。"
  },
  {
    "word": "forgive",
    "pos": "v.",
    "cn_def": "原諒",
    "en_def": "to stop being angry with someone for a mistake",
    "sentence": "A: I forgot to send the sales figures to our partner in Germany yesterday, and they had to delay their important meeting. Do you think they are still angry? B: I called their director this morning, and she said she would {{BLANK}} us this time, but only if we send all reports on schedule from now on.",
    "cn": "A：我昨天忘了把銷售數字寄給我們在德國的合作夥伴，害他們不得不延後重要的會議，你覺得他們還在生氣嗎？ B：我今天早上打電話給他們的總監，她說這次會【原諒】我們，但前提是我們從現在起要準時寄出所有報告。"
  },
  {
    "word": "acknowledge",
    "pos": "v.",
    "cn_def": "承認；確認",
    "en_def": "to accept or say that something is true",
    "sentence": "A: The customers complained online that our new phone battery runs out too quickly. Has the company said anything about the problem yet? B: Yes, the company decided to {{BLANK}} the problem in a public statement this morning, and it will offer free battery replacements to anyone who bought the phone in the last six months.",
    "cn": "A：顧客在網路上抱怨我們新手機的電池耗電太快，公司對這個問題有任何回應了嗎？ B：有，公司今天早上決定在公開聲明中【承認】這個問題，並將為過去六個月內購買這款手機的任何人提供免費更換電池。"
  },
  {
    "word": "admit",
    "pos": "v.",
    "cn_def": "承認",
    "en_def": "to agree that something bad is true, often unwillingly",
    "sentence": "A: Who sent the email with the wrong meeting time to all the clients yesterday? The sales director wants to know what happened. B: The new assistant had to {{BLANK}} that she sent it, but she explained that she copied the time from an old calendar, and she has already sent a corrected message.",
    "cn": "A：昨天是誰把寫錯會議時間的電子郵件寄給所有客戶的？業務總監想知道發生了什麼事。 B：新來的助理不得不【承認】是她寄的，但她解釋說她是從舊的行事曆上抄的時間，而且她已經寄出了更正後的訊息。"
  },
  {
    "word": "realize",
    "pos": "v.",
    "cn_def": "意識到；發現",
    "en_def": "to suddenly understand or notice something",
    "sentence": "A: Why did you turn around and drive back to the office when you were already halfway to the airport this morning? B: I didn't {{BLANK}} until I was on the highway that I had left my passport in my desk drawer, so I had to go back and get it, and I almost missed my flight to Seoul for the sales conference.",
    "cn": "A：你今天早上都已經開到半路要去機場了，為什麼又掉頭開回辦公室？ B：我一直到上了高速公路才【意識到】我把護照留在辦公桌抽屜裡，所以我必須回去拿，差點就錯過了飛往首爾參加業務會議的班機。"
  },
  {
    "word": "prevent",
    "pos": "v.",
    "cn_def": "預防；防止",
    "en_def": "to stop something from happening",
    "sentence": "A: The accounting department made the same mistake with the travel expense forms three times this year. What is the manager planning to do about it? B: She wants to {{BLANK}} similar problems by introducing a new online system that checks every form automatically, and she will also hold a short training session for the whole team next week.",
    "cn": "A：會計部門今年在差旅費用表上犯了三次同樣的錯誤，經理打算怎麼處理？ B：她想引進一套能自動檢查每張表格的新線上系統，來【預防】類似的問題，下週她也會為整個團隊舉辦一場簡短的培訓課程。"
  },
  {
    "word": "improve",
    "pos": "v.",
    "cn_def": "改善；改進",
    "en_def": "to make something better",
    "sentence": "A: Our customer satisfaction scores dropped last quarter because of several shipping mistakes. How is the operations team going to fix the situation? B: They plan to {{BLANK}} the packing process by adding a barcode check at every station, so workers can find wrong items before the boxes leave the warehouse.",
    "cn": "A：我們上一季的顧客滿意度分數因為幾次出貨錯誤而下降，營運團隊打算怎麼解決這個情況？ B：他們打算在每個工作站加上條碼檢查來【改善】包裝流程，讓員工能在箱子離開倉庫前發現錯誤的品項。"
  }
];

const MCQS = [
  {
    "q": "The printer showed an _____ message on its screen. A technician will come this afternoon to look at the machine.",
    "options": [
      "error",
      "lesson",
      "carelessness",
      "confusion"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The delivery was late because the truck broke down. It was not the driver's _____, so the company did not blame him.",
    "options": [
      "lesson",
      "fault",
      "inaccuracy",
      "confusion"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Sending the confidential report to a competitor was a costly _____. The manager spent days repairing the relationship with the client.",
    "options": [
      "carelessness",
      "confusion",
      "blunder",
      "fault"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Calling the client by the wrong name was just a _____ of the tongue. She laughed and continued the meeting.",
    "options": [
      "fault",
      "lesson",
      "error",
      "slip"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Event planners sometimes _____ the size of the crowd. This year they ordered far too many chairs for the trade fair.",
    "options": [
      "apologize",
      "forgive",
      "misjudge",
      "learn"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The accountant was in a hurry and may _____ the total cost of the order. Please check the numbers again before sending the invoice.",
    "options": [
      "miscalculate",
      "apologize",
      "forgive",
      "regret"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Please write the instructions in simple language. New staff often _____ long and complicated emails from the head office.",
    "options": [
      "apologize",
      "forgive",
      "prevent",
      "misunderstand"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Due to an _____, the invoice did not include the promised discount. We will send a corrected version today.",
    "options": [
      "lesson",
      "oversight",
      "regret",
      "confusion"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The report was full of spelling mistakes. The manager said the problem was caused by _____, not by a lack of skill.",
    "options": [
      "carelessness",
      "lesson",
      "regret",
      "reputation"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The editor found one small _____ in the article about our company history. The year of the first store opening was wrong.",
    "options": [
      "lesson",
      "inaccuracy",
      "regret",
      "carelessness"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The gate number changed twice, which caused great _____ among the passengers. Many people waited in the wrong area.",
    "options": [
      "lesson",
      "oversight",
      "confusion",
      "slip"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Please check your form carefully before submitting it. Applications with _____ information will be returned to the sender.",
    "options": [
      "careless",
      "unintentional",
      "accidental",
      "incorrect"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "I'm sorry, I think you have the _____ number. There is nobody named Peter Chen in this office.",
    "options": [
      "careless",
      "flawed",
      "wrong",
      "unintentional"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The insurance policy covers _____ damage to the company laptops. Employees should report any broken screens to the IT department.",
    "options": [
      "accidental",
      "incorrect",
      "flawed",
      "wrong"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The store will replace any _____ products within thirty days. Customers just need to bring the receipt and the original box.",
    "options": [
      "careless",
      "unintentional",
      "erroneous",
      "faulty"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Don't be so _____ with your keys. You have already lost them twice this month at the office.",
    "options": [
      "faulty",
      "careless",
      "erroneous",
      "accidental"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The designer will use small stickers to _____ the phone number on the brochures. There is no time to print new ones.",
    "options": [
      "correct",
      "apologize",
      "forgive",
      "regret"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The hotel manager promised to _____ the situation immediately. He moved the unhappy guests to larger rooms at no extra cost.",
    "options": [
      "apologize",
      "rectify",
      "forgive",
      "learn"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Both companies must agree before we _____ the contract. The lawyer will send the new version of the payment section tomorrow.",
    "options": [
      "apologize",
      "forgive",
      "amend",
      "regret"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Online advertising costs have increased this year. The director asked us to _____ the marketing budget before the launch.",
    "options": [
      "apologize",
      "forgive",
      "admit",
      "revise"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Many employees are confused about the new travel policy. The HR manager will hold a meeting to _____ the rules.",
    "options": [
      "forgive",
      "apologize",
      "clarify",
      "regret"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Everyone makes mistakes at work. The important thing is to _____ from them and do better next time.",
    "options": [
      "learn",
      "admit",
      "forgive",
      "amend"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Losing the contract taught our team a valuable _____. We now start every proposal at least a week early.",
    "options": [
      "oversight",
      "slip",
      "confusion",
      "lesson"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The airline would like to _____ for the delay. All passengers will receive a meal voucher at the gate.",
    "options": [
      "regret",
      "apologize",
      "admit",
      "clarify"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The client was angry about the late report at first. She agreed to _____ us this time because we have worked together for years.",
    "options": [
      "forgive",
      "apologize",
      "realize",
      "prevent"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Please _____ receipt of this email by replying today. We need to know that the documents arrived safely.",
    "options": [
      "admit",
      "acknowledge",
      "forgive",
      "realize"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The assistant had to _____ that she sent the email with the wrong time. She has already sent a corrected message.",
    "options": [
      "forgive",
      "prevent",
      "admit",
      "amend"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "I didn't _____ how late it was until the cleaners turned off the lights. I quickly saved my file and left the office.",
    "options": [
      "forgive",
      "prevent",
      "amend",
      "realize"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Regular maintenance can help _____ machines from breaking down. The factory checks all its equipment every Monday morning.",
    "options": [
      "improve",
      "forgive",
      "prevent",
      "regret"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The new barcode system will help _____ the accuracy of our shipments. Customers should receive the right items every time.",
    "options": [
      "improve",
      "prevent",
      "forgive",
      "admit"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "error": {
    "pos": "n.",
    "en_def": "a mistake, especially in numbers or a document",
    "cn_def": "錯誤；差錯"
  },
  "fault": {
    "pos": "n.",
    "en_def": "responsibility for something that went wrong",
    "cn_def": "過錯；責任"
  },
  "blunder": {
    "pos": "n.",
    "en_def": "a serious and careless mistake",
    "cn_def": "大錯；嚴重疏失"
  },
  "slip": {
    "pos": "n.",
    "en_def": "a small mistake made without thinking",
    "cn_def": "小失誤；疏忽"
  },
  "misjudge": {
    "pos": "v.",
    "en_def": "to form a wrong opinion or guess about something",
    "cn_def": "誤判；判斷錯誤"
  },
  "miscalculate": {
    "pos": "v.",
    "en_def": "to count or estimate something wrongly",
    "cn_def": "算錯；誤算"
  },
  "misunderstand": {
    "pos": "v.",
    "en_def": "to understand something in the wrong way",
    "cn_def": "誤解；誤會"
  },
  "oversight": {
    "pos": "n.",
    "en_def": "a mistake caused by not noticing something",
    "cn_def": "疏忽；失察"
  },
  "carelessness": {
    "pos": "n.",
    "en_def": "not paying enough attention, which causes mistakes",
    "cn_def": "粗心；不小心"
  },
  "inaccuracy": {
    "pos": "n.",
    "en_def": "a fact or number that is not correct",
    "cn_def": "不準確；錯誤之處"
  },
  "confusion": {
    "pos": "n.",
    "en_def": "a state in which people do not understand what is happening",
    "cn_def": "混亂；困惑"
  },
  "incorrect": {
    "pos": "adj.",
    "en_def": "not right or true",
    "cn_def": "不正確的；錯誤的"
  },
  "wrong": {
    "pos": "adj.",
    "en_def": "not correct",
    "cn_def": "錯的；不對的"
  },
  "accidental": {
    "pos": "adj.",
    "en_def": "happening by chance, not planned",
    "cn_def": "意外的；偶然的"
  },
  "unintentional": {
    "pos": "adj.",
    "en_def": "not done on purpose",
    "cn_def": "無意的；非故意的"
  },
  "careless": {
    "pos": "adj.",
    "en_def": "not paying enough attention, so mistakes happen",
    "cn_def": "粗心的；不小心的"
  },
  "faulty": {
    "pos": "adj.",
    "en_def": "not working correctly because of a problem",
    "cn_def": "有缺陷的；故障的"
  },
  "erroneous": {
    "pos": "adj.",
    "en_def": "wrong; based on incorrect information (formal)",
    "cn_def": "錯誤的（正式用語）"
  },
  "flawed": {
    "pos": "adj.",
    "en_def": "having a mistake or weakness",
    "cn_def": "有瑕疵的；有缺陷的"
  },
  "correct": {
    "pos": "v.",
    "en_def": "to make something right",
    "cn_def": "改正；更正"
  },
  "rectify": {
    "pos": "v.",
    "en_def": "to put something right (formal)",
    "cn_def": "糾正；修正"
  },
  "amend": {
    "pos": "v.",
    "en_def": "to make small changes to a document or law",
    "cn_def": "修改；修訂"
  },
  "revise": {
    "pos": "v.",
    "en_def": "to change something to make it better or more correct",
    "cn_def": "修訂；修改"
  },
  "clarify": {
    "pos": "v.",
    "en_def": "to make something easier to understand",
    "cn_def": "澄清；說明清楚"
  },
  "learn": {
    "pos": "v.",
    "en_def": "to get knowledge or skill from experience or study",
    "cn_def": "學習；學到"
  },
  "lesson": {
    "pos": "n.",
    "en_def": "something useful you learn from an experience",
    "cn_def": "教訓"
  },
  "regret": {
    "pos": "v.",
    "en_def": "to feel sorry about something you did",
    "cn_def": "後悔；遺憾"
  },
  "apologize": {
    "pos": "v.",
    "en_def": "to say you are sorry",
    "cn_def": "道歉"
  },
  "forgive": {
    "pos": "v.",
    "en_def": "to stop being angry with someone for a mistake",
    "cn_def": "原諒"
  },
  "acknowledge": {
    "pos": "v.",
    "en_def": "to accept or say that something is true",
    "cn_def": "承認；確認"
  },
  "admit": {
    "pos": "v.",
    "en_def": "to agree that something bad is true, often unwillingly",
    "cn_def": "承認"
  },
  "realize": {
    "pos": "v.",
    "en_def": "to suddenly understand or notice something",
    "cn_def": "意識到；發現"
  },
  "prevent": {
    "pos": "v.",
    "en_def": "to stop something from happening",
    "cn_def": "預防；防止"
  },
  "improve": {
    "pos": "v.",
    "en_def": "to make something better",
    "cn_def": "改善；改進"
  }
};

const EXTRA_GLOSSES = {};
