// Topic 347 Quiz Data: Send Messages 傳送訊息
// Source word list: https://www.examword.com/group-topic/send-messages — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T347 - Send Messages 傳送訊息",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "text",
    "pos": "v.",
    "cn_def": "傳簡訊",
    "en_def": "to send a short written message by mobile phone",
    "sentence": "A: The client meeting moved to three o'clock, but Mr. Lin is still driving back from the airport and probably can't check his email. What should we do? B: Please {{BLANK}} him a short message on his phone right now, since he usually reads those at red lights and replies within a few minutes.",
    "cn": "A：客戶會議改到三點，但林先生還在從機場開車回來，可能沒辦法查看電子郵件。我們該怎麼辦？ B：請現在就【傳簡訊】給他，因為他通常會在紅燈時看手機訊息，而且幾分鐘內就會回覆。"
  },
  {
    "word": "email",
    "pos": "n.",
    "cn_def": "電子郵件",
    "en_def": "a message sent from one computer or phone to another over the internet",
    "sentence": "A: Did the marketing team ever send the final version of the brochure to the printing company before the office closed yesterday? B: Yes, Kevin sent an {{BLANK}} with the design files at six o'clock, and the printer has already written back to say the copies will be ready by Friday morning.",
    "cn": "A：行銷團隊昨天在辦公室關門前，有沒有把手冊的最終版本寄給印刷公司？ B：有，凱文六點時寄了一封附有設計檔的【電子郵件】，印刷廠也已經回信說，印刷品會在星期五早上準備好。"
  },
  {
    "word": "letter",
    "pos": "n.",
    "cn_def": "信件；信函",
    "en_def": "a written message put in an envelope and sent by post",
    "sentence": "A: The new hotel in Kaohsiung wants us to hold our annual sales conference there next spring, but how did they contact us? B: Their manager mailed a formal {{BLANK}} to our head office last week, explaining the meeting rooms, room prices, and a special discount for groups of more than fifty people.",
    "cn": "A：高雄那家新飯店希望我們明年春天在那裡舉辦年度業務會議，他們是怎麼聯絡我們的？ B：他們的經理上週寄了一封正式的【信件】到我們總公司，說明了會議室、房價，以及五十人以上團體的特別折扣。"
  },
  {
    "word": "chat",
    "pos": "n.",
    "cn_def": "聊天；線上對話",
    "en_def": "a short, informal conversation, often by typing messages online",
    "sentence": "A: I need to ask the IT department a quick question about my password, but I don't want to interrupt their meeting by phoning them. B: Just open the {{BLANK}} window on the company website and type your question there; a technician usually answers within a few minutes, even during busy afternoons.",
    "cn": "A：我需要問資訊部門一個關於密碼的簡單問題，但我不想打電話打擾他們開會。 B：只要打開公司網站上的【聊天】視窗，在那裡輸入你的問題；即使是在忙碌的下午，技術人員通常也會在幾分鐘內回答。"
  },
  {
    "word": "notification",
    "pos": "n.",
    "cn_def": "通知",
    "en_def": "a message that tells you something has happened",
    "sentence": "A: How did you know so quickly that the shipment from our supplier in Japan had finally arrived at the warehouse this morning? B: The tracking app sent a {{BLANK}} to my phone as soon as the driver scanned the boxes, so I immediately told the sales team they could start taking orders again.",
    "cn": "A：你怎麼這麼快就知道我們日本供應商的貨今天早上終於到倉庫了？ B：司機一掃描箱子，追蹤應用程式就傳了一則【通知】到我的手機，所以我立刻告訴業務團隊他們可以再開始接單了。"
  },
  {
    "word": "alert",
    "pos": "n.",
    "cn_def": "警示；警報",
    "en_def": "a warning message about a danger or problem",
    "sentence": "A: Why did everyone in the finance department suddenly stop working and look at their screens a few minutes ago? B: The bank sent an {{BLANK}} about a suspicious payment from one of our company accounts, so the manager asked everyone to check today's transactions before anything else is approved.",
    "cn": "A：為什麼幾分鐘前財務部的每個人突然停下工作盯著螢幕看？ B：銀行針對我們公司其中一個帳戶的可疑付款發出了【警示】，所以經理要求大家在核准任何其他事項前，先檢查今天的交易。"
  },
  {
    "word": "attachment",
    "pos": "n.",
    "cn_def": "附件",
    "en_def": "a file that is sent together with an email",
    "sentence": "A: I read your message about the new office layout, but I couldn't find the floor plan you said you had included. Did you forget something? B: Sorry, I must have forgotten to add the {{BLANK}} before I pressed send, so I'll forward the file to you again right after this meeting.",
    "cn": "A：我看了你關於新辦公室配置的訊息，但找不到你說你附上的平面圖。你是不是忘了什麼？ B：抱歉，我一定是在按下傳送前忘了加上【附件】，開完會後我會馬上再把檔案轉寄給你。"
  },
  {
    "word": "inbox",
    "pos": "n.",
    "cn_def": "收件匣",
    "en_def": "the place where new emails or messages arrive",
    "sentence": "A: You look really tired this morning. Did something go wrong while you were on vacation in Thailand last week? B: Not really, but my {{BLANK}} was full of more than three hundred unread messages when I returned, so I've been sorting through them since seven o'clock without a break.",
    "cn": "A：你今天早上看起來真的很累。你上週在泰國度假時出了什麼事嗎？ B：其實沒有，但我回來時我的【收件匣】裡塞滿了三百多封未讀訊息，所以我從七點開始就一直在整理，完全沒休息。"
  },
  {
    "word": "outbox",
    "pos": "n.",
    "cn_def": "寄件匣",
    "en_def": "the place where messages wait before they are sent",
    "sentence": "A: I wrote the reply to the customer's complaint an hour ago, but she says she still hasn't received anything from us. What happened? B: The internet connection was down for a while, so your message is probably still sitting in the {{BLANK}}; try clicking the send button again now that the network is working.",
    "cn": "A：我一個小時前就寫好了對那位客戶投訴的回覆，但她說她還沒收到我們的任何東西。發生了什麼事？ B：網路斷線了一陣子，所以你的訊息可能還停在【寄件匣】裡；既然網路現在恢復了，再按一次傳送鍵試試看。"
  },
  {
    "word": "contact",
    "pos": "n.",
    "cn_def": "聯絡人",
    "en_def": "a person you can call or write to, especially for business",
    "sentence": "A: The new supplier in Vietnam sounds promising, but who should I speak to there if there is a problem with our first order? B: Ms. Tran is our main {{BLANK}} at the factory; her phone number and email address are on the business card I left on your desk this morning.",
    "cn": "A：越南那家新供應商聽起來很有潛力，但如果我們的第一筆訂單出問題，我該找那邊的誰？ B：陳小姐是我們在工廠的主要【聯絡人】；她的電話號碼和電子郵件地址都在我今天早上放在你桌上的名片上。"
  },
  {
    "word": "recipient",
    "pos": "n.",
    "cn_def": "收件人；接收者",
    "en_def": "a person who receives something, such as a message",
    "sentence": "A: Before you send the announcement about the holiday schedule, can you check that it is going to the right people this time? B: Sure, I removed the old client addresses, so now every {{BLANK}} on the list is a current employee, and nobody outside the company will see our internal plans.",
    "cn": "A：在你寄出假期時間表的公告前，可以確認這次是寄給正確的人嗎？ B：當然，我刪除了舊的客戶地址，所以現在名單上的每一位【收件人】都是現職員工，公司以外的人不會看到我們的內部計畫。"
  },
  {
    "word": "sender",
    "pos": "n.",
    "cn_def": "寄件人；發送者",
    "en_def": "a person who sends a message or letter",
    "sentence": "A: I just got a strange message saying I won a free trip to Paris, and it asks for my bank account number. Should I answer it? B: Definitely not; the {{BLANK}} is using a fake company name, so delete it and report it to the IT department so they can warn the other staff.",
    "cn": "A：我剛收到一則奇怪的訊息，說我贏得了免費的巴黎之旅，還要求我提供銀行帳號。我應該回覆嗎？ B：絕對不要；【寄件人】用的是假公司名稱，所以把它刪掉並向資訊部門檢舉，讓他們可以提醒其他員工。"
  },
  {
    "word": "reply",
    "pos": "v.",
    "cn_def": "回覆；回答",
    "en_def": "to answer a message, letter or question",
    "sentence": "A: The customer from Singapore asked three questions about delivery times and prices yesterday afternoon. Has anyone in our team answered her yet? B: Not yet, but I will {{BLANK}} to her before lunch, as soon as the warehouse manager confirms how many boxes we can ship next week.",
    "cn": "A：那位新加坡客戶昨天下午問了三個關於交貨時間和價格的問題。我們團隊有人回答她了嗎？ B：還沒，但只要倉庫經理確認下週我們能出貨多少箱，我會在午餐前【回覆】她。"
  },
  {
    "word": "forward",
    "pos": "v.",
    "cn_def": "轉寄；轉發",
    "en_def": "to send a message you received on to another person",
    "sentence": "A: Mr. Chen from the legal department needs to see the contract the client sent us this morning, but he wasn't included in the original message. B: No problem, I'll {{BLANK}} the whole message to him right away, so he can read the contract and the client's comments before the meeting at two.",
    "cn": "A：法務部的陳先生需要看客戶今天早上寄給我們的合約，但他不在原本的收件名單裡。 B：沒問題，我會馬上把整封訊息【轉寄】給他，讓他能在兩點的會議前看到合約和客戶的意見。"
  },
  {
    "word": "attach",
    "pos": "v.",
    "cn_def": "附加；附上",
    "en_def": "to add a file to an email or message",
    "sentence": "A: The hiring manager asked all applicants to send their applications by Friday. Is it enough to just write about my work experience in the message? B: No, you should also {{BLANK}} your résumé and a copy of your certificate as files, because the company wants to keep them in its records.",
    "cn": "A：招募經理要求所有應徵者在星期五前寄出申請。我在訊息中只寫我的工作經驗就夠了嗎？ B：不夠，你還應該把履歷和證書影本以檔案【附加】上去，因為公司想把它們存檔。"
  },
  {
    "word": "deliver",
    "pos": "v.",
    "cn_def": "傳送；遞送；送達",
    "en_def": "to take or send something to the right person or place",
    "sentence": "A: Our office network has been very slow all morning, and several important messages to overseas clients seem to be missing. What is going on? B: The server failed to {{BLANK}} them because of a technical problem, but the IT team fixed it ten minutes ago, so please send them again.",
    "cn": "A：我們辦公室的網路整個早上都很慢，好幾封寄給海外客戶的重要訊息似乎不見了。到底怎麼了？ B：由於技術問題，伺服器沒能把它們【送達】，但資訊團隊十分鐘前已經修好了，所以請再寄一次。"
  },
  {
    "word": "receive",
    "pos": "v.",
    "cn_def": "收到；接收",
    "en_def": "to get something that someone sends to you",
    "sentence": "A: I sent the updated price list to all our regular customers last night, but I'm not sure whether it actually reached them. B: Most customers usually {{BLANK}} our messages within minutes, but I'll call the larger ones this morning to make sure they have the correct prices before the new month starts on Monday.",
    "cn": "A：我昨晚把更新後的價目表寄給所有老客戶了，但我不確定是否真的寄到了。 B：大多數客戶通常在幾分鐘內就會【收到】我們的訊息，但我今天早上會打電話給幾位大客戶，確保他們在週一新月份開始前拿到正確的價格。"
  },
  {
    "word": "communicate",
    "pos": "v.",
    "cn_def": "溝通；聯繫",
    "en_def": "to share information or ideas with other people",
    "sentence": "A: Our team members work in Taipei, Tokyo, and London, so how do you manage to share news and plans with everyone at the same time? B: We {{BLANK}} mainly through a group messaging app, and we also hold a short online meeting every Monday so nobody misses important updates.",
    "cn": "A：我們的團隊成員分別在台北、東京和倫敦工作，你們是怎麼做到同時跟每個人分享消息和計畫的？ B：我們主要透過群組通訊應用程式【溝通】，每週一也會開一個簡短的線上會議，讓大家不會錯過重要的最新消息。"
  },
  {
    "word": "type",
    "pos": "v.",
    "cn_def": "打字；輸入",
    "en_def": "to write words using a keyboard",
    "sentence": "A: The customer on the phone is giving me a long list of product codes, and I'm worried I'll make a mistake if I just write them on paper. B: Then {{BLANK}} them directly into the order form on your computer while she speaks, and read the numbers back to her before you finish the call.",
    "cn": "A：電話上的客戶正在給我一長串產品代碼，我擔心如果只寫在紙上會出錯。 B：那就在她說的時候直接把它們【打字】輸入到電腦上的訂購表單裡，並在結束通話前把號碼唸給她確認。"
  },
  {
    "word": "call",
    "pos": "v.",
    "cn_def": "打電話給",
    "en_def": "to telephone someone",
    "sentence": "A: The delivery company says our package will arrive this afternoon, but nobody will be at the front desk after three o'clock. What should we do? B: Please {{BLANK}} the driver on his mobile phone and ask him to leave the box with the security guard in the lobby instead.",
    "cn": "A：快遞公司說我們的包裹今天下午會到，但三點以後櫃台沒有人。我們該怎麼辦？ B：請【打電話】到司機的手機，請他改把箱子交給大廳的保全人員。"
  },
  {
    "word": "video call",
    "pos": "n.phr.",
    "cn_def": "視訊通話",
    "en_def": "a phone or internet call in which people can see each other",
    "sentence": "A: The designers in Seoul want to show us the new product packaging, but none of us has time to fly there this month. B: Let's set up a {{BLANK}} for tomorrow morning, so they can hold the samples up to the camera and we can discuss the colors face to face.",
    "cn": "A：首爾的設計師想給我們看新產品包裝，但我們這個月都沒時間飛過去。 B：我們安排明天早上進行【視訊通話】吧，這樣他們可以把樣品拿到鏡頭前，我們也能面對面討論顏色。"
  },
  {
    "word": "instant",
    "pos": "adj.",
    "cn_def": "即時的；立即的",
    "en_def": "happening immediately, with no waiting",
    "sentence": "A: Why did our company stop using email for small questions between departments and switch to the new messaging system? B: The new system offers {{BLANK}} communication, so staff can get answers in seconds instead of waiting hours, and projects move forward much faster than before.",
    "cn": "A：為什麼我們公司不再用電子郵件處理部門間的小問題，而改用新的通訊系統？ B：新系統提供【即時的】溝通，員工幾秒內就能得到答案，不用等好幾個小時，專案也比以前推進得快多了。"
  },
  {
    "word": "private",
    "pos": "adj.",
    "cn_def": "私人的；私下的",
    "en_def": "only for one person or a small group, not for everyone",
    "sentence": "A: I want to talk to my manager about my salary and my plans for next year, but I don't want the whole team to see our conversation. B: Then send her a {{BLANK}} message instead of writing in the group chat, and ask her if you can meet in her office later.",
    "cn": "A：我想跟經理談談我的薪水和明年的計畫，但不想讓整個團隊看到我們的對話。 B：那就傳一則【私人】訊息給她，而不是寫在群組聊天裡，並問她晚點能不能在她辦公室見面。"
  },
  {
    "word": "secure",
    "pos": "adj.",
    "cn_def": "安全的；受保護的",
    "en_def": "safe and protected from danger or theft",
    "sentence": "A: Our clients often send us copies of their passports and bank details. Is it safe to receive these documents through ordinary email? B: Not really, so we now ask clients to upload them through a {{BLANK}} online system that protects the files with passwords and strong encryption.",
    "cn": "A：我們的客戶常寄護照影本和銀行資料給我們。用一般電子郵件接收這些文件安全嗎？ B：不太安全，所以我們現在請客戶透過一個【安全的】線上系統上傳，這個系統會用密碼和高強度加密保護檔案。"
  },
  {
    "word": "urgent",
    "pos": "adj.",
    "cn_def": "緊急的；急迫的",
    "en_def": "very important and needing action immediately",
    "sentence": "A: I'm about to leave for the airport, and my phone will be off during the flight to Singapore. How can the team reach me? B: If there is anything {{BLANK}}, we'll text your assistant, and she can contact the hotel so you get the message as soon as you land.",
    "cn": "A：我正要去機場，飛往新加坡的途中手機會關機。團隊要怎麼聯絡我？ B：如果有任何【緊急的】事情，我們會傳簡訊給你的助理，她可以聯絡飯店，讓你一落地就收到訊息。"
  },
  {
    "word": "quickly",
    "pos": "adv.",
    "cn_def": "迅速地；很快地",
    "en_def": "fast; in a short time",
    "sentence": "A: The customer said she was very happy with how our team handled her complaint about the broken printer last week. What did we do right? B: We answered her message very {{BLANK}}, within ten minutes, and sent a technician to her office the same afternoon to replace the damaged parts.",
    "cn": "A：那位客戶說她對我們團隊上週處理她印表機故障投訴的方式非常滿意。我們做對了什麼？ B：我們很【迅速地】回覆了她的訊息，十分鐘內就回了，並在當天下午派技術人員到她辦公室更換損壞的零件。"
  },
  {
    "word": "directly",
    "pos": "adv.",
    "cn_def": "直接地",
    "en_def": "without going through another person or place",
    "sentence": "A: I've sent three messages to the general customer service address, but nobody has answered my question about the missing invoice. B: You can write {{BLANK}} to Ms. Wu in accounting instead; she handles all invoices and usually replies the same day, even when the office is busy.",
    "cn": "A：我已經寄了三封訊息到一般客服信箱，但沒人回答我關於遺失發票的問題。 B：你可以改為【直接】寫信給會計部的吳小姐；她負責所有發票，即使辦公室很忙，通常當天就會回覆。"
  },
  {
    "word": "online",
    "pos": "adj.",
    "cn_def": "在線的；連上網路的",
    "en_def": "connected to the internet",
    "sentence": "A: My laptop can't connect to the hotel's network, and I need to send the sales report to head office before the meeting starts. B: Use my phone as a hotspot for a few minutes; once you are {{BLANK}} again, you can upload the report and still have time for coffee.",
    "cn": "A：我的筆電連不上飯店的網路，而我需要在會議開始前把業務報告寄給總公司。 B：用我的手機當熱點幾分鐘吧；等你再次【連上線】，就可以上傳報告，還有時間喝杯咖啡。"
  },
  {
    "word": "offline",
    "pos": "adj.",
    "cn_def": "離線的",
    "en_def": "not connected to the internet",
    "sentence": "A: I tried to send Mr. Huang the schedule for tomorrow's factory visit, but my message shows only one gray tick. Is something wrong? B: He's probably {{BLANK}} because he is on a long flight from Frankfurt, so he'll get your message after his plane lands tonight.",
    "cn": "A：我試著把明天參觀工廠的行程傳給黃先生，但我的訊息只顯示一個灰色勾勾。是出了什麼問題嗎？ B：他可能是【離線】狀態，因為他正在從法蘭克福搭長途班機，所以今晚飛機降落後他就會收到你的訊息。"
  },
  {
    "word": "automatically",
    "pos": "adv.",
    "cn_def": "自動地",
    "en_def": "by itself, without a person doing it",
    "sentence": "A: I'll be away at a training course for the whole of next week, but I'm worried that customers will think I'm ignoring their emails. B: Set up an out-of-office message so the system {{BLANK}} tells them you are away and gives them your colleague's phone number for urgent questions.",
    "cn": "A：我下週整週都要去參加訓練課程，但我擔心客戶會以為我不理他們的電子郵件。 B：設定一個不在辦公室的訊息，這樣系統就會【自動地】告訴他們你不在，並提供你同事的電話號碼以處理緊急問題。"
  },
  {
    "word": "confirm",
    "pos": "v.",
    "cn_def": "確認",
    "en_def": "to say or show that something is true or definite",
    "sentence": "A: The restaurant has reserved a private room for twenty guests for our team dinner on Friday evening. Is there anything else we need to do? B: Yes, they asked us to {{BLANK}} the booking by text message before noon tomorrow, or they may give the room to another group.",
    "cn": "A：餐廳已經為我們週五晚上的團隊晚餐保留了一間可容納二十位客人的包廂。我們還需要做什麼嗎？ B：需要，他們要求我們在明天中午前用簡訊【確認】預約，否則他們可能會把包廂給另一組客人。"
  },
  {
    "word": "block",
    "pos": "v.",
    "cn_def": "封鎖；阻擋",
    "en_def": "to stop someone from sending you messages or calling you",
    "sentence": "A: An unknown company keeps sending me advertisements for cheap watches every day, and it fills my inbox with useless messages. B: You can {{BLANK}} that address in your email settings, so their messages will stop appearing, and you won't waste time deleting them every morning.",
    "cn": "A：一家不明公司每天都寄便宜手錶的廣告給我，讓我的收件匣塞滿了無用的訊息。 B：你可以在電子郵件設定中【封鎖】那個地址，這樣他們的訊息就不會再出現，你也不用每天早上浪費時間刪除它們。"
  },
  {
    "word": "subscribe",
    "pos": "v.",
    "cn_def": "訂閱",
    "en_def": "to sign up to receive something regularly, such as a newsletter",
    "sentence": "A: How do you always know about new trade rules and price changes in the electronics industry before everyone else in the office? B: I {{BLANK}} to a weekly newsletter from an industry association, and it arrives in my email every Monday morning with all the latest news.",
    "cn": "A：你怎麼總是比辦公室其他人更早知道電子業的新貿易規定和價格變動？ B：我【訂閱】了一個產業協會的每週電子報，它每週一早上都會寄到我的電子郵件，裡面有所有最新消息。"
  }
];

const MCQS = [
  {
    "q": "The manager is stuck in traffic and cannot read email. Please _____ him the new meeting time so he sees it on his phone.",
    "options": [
      "text",
      "deliver",
      "subscribe",
      "block"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our director sent an _____ to all staff about the new parking rules. It included a map of the reserved spaces behind the building.",
    "options": [
      "inbox",
      "email",
      "sender",
      "outbox"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The bank mailed a printed _____ to every customer explaining the new fees. Many older clients prefer this to messages on their phones.",
    "options": [
      "inbox",
      "recipient",
      "letter",
      "contact"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "If you have a quick question about your order, use the live _____ on our website. An agent will answer you within two minutes.",
    "options": [
      "sender",
      "attachment",
      "recipient",
      "chat"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "You will receive a _____ on your phone when your package leaves the warehouse. You can turn this feature off in the app settings.",
    "options": [
      "notification",
      "recipient",
      "sender",
      "contact"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The weather service issued a storm _____ for the northern coast this afternoon. All outdoor deliveries in that area have been postponed until tomorrow.",
    "options": [
      "inbox",
      "alert",
      "attachment",
      "chat"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The customer could not open the _____ because the file was too large. She asked us to send the photos in a shared folder instead.",
    "options": [
      "recipient",
      "sender",
      "attachment",
      "contact"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "After two weeks away on business, Daniel found over five hundred unread messages in his _____. He spent the whole morning sorting through them.",
    "options": [
      "sender",
      "recipient",
      "letter",
      "inbox"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Linda is our main _____ at the shipping company. Please call her first if any container arrives late at the port.",
    "options": [
      "contact",
      "sender",
      "recipient",
      "alert"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Check every _____ on the mailing list before you send the salary report. Only department heads should see this confidential information.",
    "options": [
      "attachment",
      "recipient",
      "notification",
      "chat"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The message came from an address nobody recognized. Because the _____ asked for passwords, the IT team warned all employees not to reply.",
    "options": [
      "inbox",
      "attachment",
      "sender",
      "chat"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Our policy is to _____ to every customer inquiry within one working day. Fast answers help us keep our clients satisfied and loyal.",
    "options": [
      "forward",
      "attach",
      "subscribe",
      "reply"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The client's message should go to the legal team as well. Could you _____ it to them before the end of the day?",
    "options": [
      "forward",
      "reply",
      "subscribe",
      "communicate"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "When you apply for the position, please _____ a recent photo to your email. Applications without a photo will not be considered.",
    "options": [
      "reply",
      "attach",
      "subscribe",
      "communicate"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The new system can _____ messages to thousands of customers at the same moment. This saves our marketing team many hours every week.",
    "options": [
      "subscribe",
      "reply",
      "deliver",
      "confirm"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Did you _____ the updated price list I sent this morning? Please let me know if anything is missing from it.",
    "options": [
      "reply",
      "subscribe",
      "communicate",
      "receive"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Team members in different countries _____ mainly through a messaging app. They also hold a short video meeting every Monday morning.",
    "options": [
      "communicate",
      "subscribe",
      "attach",
      "deliver"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Please _____ the customer's address carefully into the system. A single wrong letter can send a package to the wrong city.",
    "options": [
      "reply",
      "type",
      "subscribe",
      "communicate"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "If the shipment does not arrive by noon, please _____ the driver on his mobile phone. His number is printed on the delivery form.",
    "options": [
      "reply",
      "subscribe",
      "call",
      "communicate"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Our customers love the new app because it offers _____ answers to simple questions. They no longer wait hours for a reply by email.",
    "options": [
      "private",
      "offline",
      "secure",
      "instant"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Salary details should never be shared in the group chat. Discuss them in a _____ meeting in your manager's office instead.",
    "options": [
      "private",
      "instant",
      "online",
      "offline"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Customers' credit card numbers must be stored on a _____ server. Only two senior staff members have the password to access it.",
    "options": [
      "instant",
      "secure",
      "urgent",
      "offline"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "This order is _____ because the client needs the parts by tomorrow morning. Please ship it by express delivery today.",
    "options": [
      "private",
      "offline",
      "urgent",
      "secure"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The technician responded very _____ to our request for help. He arrived at the office only twenty minutes after we called.",
    "options": [
      "directly",
      "automatically",
      "recently",
      "quickly"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Please send the invoice _____ to the accounting department rather than through your sales representative. This will help us pay you faster.",
    "options": [
      "directly",
      "automatically",
      "recently",
      "nearly"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The team leader was not _____ when we sent the message, so she did not see it. She logged in again an hour later and replied.",
    "options": [
      "urgent",
      "online",
      "instant",
      "private"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The system _____ sends a receipt to customers after every payment. Staff members do not need to do anything themselves.",
    "options": [
      "directly",
      "hardly",
      "automatically",
      "recently"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Please _____ your attendance at the training session by Friday. We need the exact number of people to order lunch.",
    "options": [
      "subscribe",
      "communicate",
      "deliver",
      "confirm"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "If a stranger keeps sending you advertisements, you can _____ the number in your phone settings. Then you will not receive their messages anymore.",
    "options": [
      "block",
      "subscribe",
      "communicate",
      "attach"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "More than two thousand readers _____ to our monthly newsletter about trade rules. It is sent by email on the first Monday of each month.",
    "options": [
      "attach",
      "subscribe",
      "deliver",
      "type"
    ],
    "answer": 1,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "text": {
    "pos": "v.",
    "en_def": "to send a short written message by mobile phone",
    "cn_def": "傳簡訊"
  },
  "email": {
    "pos": "n.",
    "en_def": "a message sent from one computer or phone to another over the internet",
    "cn_def": "電子郵件"
  },
  "letter": {
    "pos": "n.",
    "en_def": "a written message put in an envelope and sent by post",
    "cn_def": "信件；信函"
  },
  "chat": {
    "pos": "n.",
    "en_def": "a short, informal conversation, often by typing messages online",
    "cn_def": "聊天；線上對話"
  },
  "notification": {
    "pos": "n.",
    "en_def": "a message that tells you something has happened",
    "cn_def": "通知"
  },
  "alert": {
    "pos": "n.",
    "en_def": "a warning message about a danger or problem",
    "cn_def": "警示；警報"
  },
  "attachment": {
    "pos": "n.",
    "en_def": "a file that is sent together with an email",
    "cn_def": "附件"
  },
  "inbox": {
    "pos": "n.",
    "en_def": "the place where new emails or messages arrive",
    "cn_def": "收件匣"
  },
  "outbox": {
    "pos": "n.",
    "en_def": "the place where messages wait before they are sent",
    "cn_def": "寄件匣"
  },
  "contact": {
    "pos": "n.",
    "en_def": "a person you can call or write to, especially for business",
    "cn_def": "聯絡人"
  },
  "recipient": {
    "pos": "n.",
    "en_def": "a person who receives something, such as a message",
    "cn_def": "收件人；接收者"
  },
  "sender": {
    "pos": "n.",
    "en_def": "a person who sends a message or letter",
    "cn_def": "寄件人；發送者"
  },
  "reply": {
    "pos": "v.",
    "en_def": "to answer a message, letter or question",
    "cn_def": "回覆；回答"
  },
  "forward": {
    "pos": "v.",
    "en_def": "to send a message you received on to another person",
    "cn_def": "轉寄；轉發"
  },
  "attach": {
    "pos": "v.",
    "en_def": "to add a file to an email or message",
    "cn_def": "附加；附上"
  },
  "deliver": {
    "pos": "v.",
    "en_def": "to take or send something to the right person or place",
    "cn_def": "傳送；遞送；送達"
  },
  "receive": {
    "pos": "v.",
    "en_def": "to get something that someone sends to you",
    "cn_def": "收到；接收"
  },
  "communicate": {
    "pos": "v.",
    "en_def": "to share information or ideas with other people",
    "cn_def": "溝通；聯繫"
  },
  "type": {
    "pos": "v.",
    "en_def": "to write words using a keyboard",
    "cn_def": "打字；輸入"
  },
  "call": {
    "pos": "v.",
    "en_def": "to telephone someone",
    "cn_def": "打電話給"
  },
  "video call": {
    "pos": "n.phr.",
    "en_def": "a phone or internet call in which people can see each other",
    "cn_def": "視訊通話"
  },
  "instant": {
    "pos": "adj.",
    "en_def": "happening immediately, with no waiting",
    "cn_def": "即時的；立即的"
  },
  "private": {
    "pos": "adj.",
    "en_def": "only for one person or a small group, not for everyone",
    "cn_def": "私人的；私下的"
  },
  "secure": {
    "pos": "adj.",
    "en_def": "safe and protected from danger or theft",
    "cn_def": "安全的；受保護的"
  },
  "urgent": {
    "pos": "adj.",
    "en_def": "very important and needing action immediately",
    "cn_def": "緊急的；急迫的"
  },
  "quickly": {
    "pos": "adv.",
    "en_def": "fast; in a short time",
    "cn_def": "迅速地；很快地"
  },
  "directly": {
    "pos": "adv.",
    "en_def": "without going through another person or place",
    "cn_def": "直接地"
  },
  "online": {
    "pos": "adj.",
    "en_def": "connected to the internet",
    "cn_def": "在線的；連上網路的"
  },
  "offline": {
    "pos": "adj.",
    "en_def": "not connected to the internet",
    "cn_def": "離線的"
  },
  "automatically": {
    "pos": "adv.",
    "en_def": "by itself, without a person doing it",
    "cn_def": "自動地"
  },
  "confirm": {
    "pos": "v.",
    "en_def": "to say or show that something is true or definite",
    "cn_def": "確認"
  },
  "block": {
    "pos": "v.",
    "en_def": "to stop someone from sending you messages or calling you",
    "cn_def": "封鎖；阻擋"
  },
  "subscribe": {
    "pos": "v.",
    "en_def": "to sign up to receive something regularly, such as a newsletter",
    "cn_def": "訂閱"
  }
};

const EXTRA_GLOSSES = {};
