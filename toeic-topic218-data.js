// Topic 218 Quiz Data: Letter 信件
// Source word list: https://www.examword.com/group-topic/letter — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T218 - Letter 信件",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "mail",
    "pos": "v.",
    "cn_def": "郵寄",
    "en_def": "to send a letter or package by post",
    "sentence": "A: Our new catalog is finally printed, so how should we get copies to our regular customers before the holiday sale starts next week? B: Let's {{BLANK}} the catalogs to everyone on our customer list tomorrow morning, because many older clients still prefer reading paper copies at home instead of checking their inbox.",
    "cn": "A：我們的新型錄終於印好了，那我們該怎麼在下週假期特賣開始前把型錄送到老客戶手上？ B：我們明天早上把型錄【郵寄】給客戶名單上的每個人吧，因為很多年長的客戶仍然比較喜歡在家看紙本，而不是查看收件匣。"
  },
  {
    "word": "post",
    "pos": "v.",
    "cn_def": "郵寄；寄出",
    "en_def": "to send a letter or package by mail",
    "sentence": "A: The signed contracts need to reach our head office in London by Thursday, so should I send them by courier or by regular mail? B: Regular service is fine if you {{BLANK}} them today before five o'clock, because letters usually arrive within two working days and it costs much less than a courier.",
    "cn": "A：簽好的合約必須在週四前送到我們倫敦的總公司，我應該用快遞還是一般郵件寄送？ B：如果你今天五點前把它們【寄出】，一般郵件就可以了，因為信件通常兩個工作天內就會送達，而且比快遞便宜很多。"
  },
  {
    "word": "envelope",
    "pos": "n.",
    "cn_def": "信封",
    "en_def": "a paper cover that you put a letter in",
    "sentence": "A: I've printed all the thank-you letters for our sponsors, but what should I do before we take them to the front desk this afternoon? B: Please put each letter in an {{BLANK}}, write the sponsor's name and address clearly on the front, and check that the company logo is facing up neatly.",
    "cn": "A：我已經把給贊助商的感謝信全部印好了，但今天下午拿到櫃檯之前我應該做什麼？ B：請把每封信放進一個【信封】，在正面清楚寫上贊助商的名字和地址，並確認公司標誌整齊地朝上。"
  },
  {
    "word": "stamp",
    "pos": "n.",
    "cn_def": "郵票",
    "en_def": "a small paper you stick on a letter to pay for sending it",
    "sentence": "A: I wrote a birthday card for my grandmother in Canada, but the clerk at the counter said I couldn't send it yet, so what's wrong? B: You forgot to put a {{BLANK}} on the corner, and international mail needs the correct postage, so buy one at the window near the entrance before it closes.",
    "cn": "A：我寫了一張生日卡給在加拿大的奶奶，但櫃檯的職員說我還不能寄，哪裡出了問題？ B：你忘了在角落貼【郵票】，國際郵件需要正確的郵資，所以趁入口附近的窗口關門前去買一張吧。"
  },
  {
    "word": "address",
    "pos": "n.",
    "cn_def": "地址",
    "en_def": "the details of the place where someone lives or works, used for sending mail",
    "sentence": "A: Why did the package of sample products we sent to our client in Kaohsiung come back to our office this morning? B: The {{BLANK}} on the label was wrong because someone typed the old office location, so please update the customer database and send it again with express delivery today.",
    "cn": "A：為什麼我們寄給高雄客戶的樣品包裹今天早上被退回辦公室？ B：標籤上的【地址】錯了，因為有人打成了舊的辦公室位置，所以請更新客戶資料庫，今天再用快遞重新寄一次。"
  },
  {
    "word": "sender",
    "pos": "n.",
    "cn_def": "寄件人",
    "en_def": "the person who sends a letter or package",
    "sentence": "A: This letter arrived without any name inside, and it says our service was terrible, so how can we answer the customer? B: Look at the top left corner of the envelope, because the {{BLANK}} usually writes a return address there, and then we can contact them and apologize properly.",
    "cn": "A：這封信寄來時裡面沒有任何名字，內容說我們的服務很糟，我們要怎麼回覆這位顧客？ B：看看信封的左上角，因為【寄件人】通常會在那裡寫回郵地址，然後我們就可以聯絡對方並好好道歉。"
  },
  {
    "word": "recipient",
    "pos": "n.",
    "cn_def": "收件人",
    "en_def": "the person who receives a letter or package",
    "sentence": "A: The courier is asking who should sign for the important legal documents when they arrive at the head office tomorrow morning. B: The {{BLANK}} must be Ms. Chen from the legal department, so please tell him to deliver the package directly to her desk and get her signature.",
    "cn": "A：快遞員在問，這些重要的法律文件明天早上送到總公司時應該由誰簽收。 B：【收件人】必須是法務部的陳小姐，所以請告訴他直接把包裹送到她的辦公桌並取得她的簽名。"
  },
  {
    "word": "deliver",
    "pos": "v.",
    "cn_def": "遞送；投遞",
    "en_def": "to take letters or goods to a person or place",
    "sentence": "A: Our customers keep asking when the new printers will arrive, because they want to start using them before the busy season begins next month. B: The shipping company promised to {{BLANK}} all the boxes to our warehouse by Wednesday afternoon, so we can send them out to customers on Thursday.",
    "cn": "A：我們的客戶一直問新印表機什麼時候會到，因為他們想在下個月旺季開始前就開始使用。 B：貨運公司答應週三下午前把所有箱子【送達】我們的倉庫，所以我們週四就能寄給客戶。"
  },
  {
    "word": "postal",
    "pos": "adj.",
    "cn_def": "郵政的",
    "en_def": "connected with the system of sending letters and packages",
    "sentence": "A: I want to send these application forms to the government office in Taichung, but what's the cheapest way to do it this week? B: Use the regular {{BLANK}} service instead of a private courier, because it costs only a few dollars and the forms will still arrive in two or three days.",
    "cn": "A：我想把這些申請表寄到台中的政府機關，這週最便宜的寄法是什麼？ B：用一般的【郵政】服務，不要用私人快遞，因為只要花幾塊錢，表格兩三天內還是會送到。"
  },
  {
    "word": "correspondence",
    "pos": "n.",
    "cn_def": "通信；往來書信",
    "en_def": "letters or emails sent between people",
    "sentence": "A: Our new assistant is starting on Monday, so which tasks should she handle first while she learns about our customers and products? B: She can manage the daily {{BLANK}} with overseas suppliers, which means reading their letters and emails carefully, answering simple questions, and passing difficult ones to the purchasing manager.",
    "cn": "A：我們的新助理週一開始上班，在她了解客戶和產品的期間，應該先負責哪些工作？ B：她可以處理每天和海外供應商的【往來書信】，也就是仔細閱讀他們的信件和電子郵件、回答簡單的問題，並把困難的問題轉給採購經理。"
  },
  {
    "word": "handwriting",
    "pos": "n.",
    "cn_def": "筆跡；字跡",
    "en_def": "the way a person writes by hand",
    "sentence": "A: I found this note on my desk about tomorrow's meeting with the bank, but there's no name on it, so who left it? B: I think it was Kevin, because I recognize his {{BLANK}}, which is very small and neat, and he was the last person to leave the office yesterday.",
    "cn": "A：我在桌上發現一張關於明天和銀行開會的便條，但上面沒有名字，是誰留的？ B：我想是凱文，因為我認得他的【字跡】，又小又工整，而且他昨天是最後一個離開辦公室的人。"
  },
  {
    "word": "signature",
    "pos": "n.",
    "cn_def": "簽名",
    "en_def": "your name written in your own special way",
    "sentence": "A: The finance department sent back my travel expense form this morning, so what did I do wrong when I filled it out? B: The form is missing your manager's {{BLANK}} at the bottom of the second page, and they can't pay you until she approves and signs it.",
    "cn": "A：財務部今天早上把我的差旅費用表退回來了，我填寫時哪裡做錯了？ B：表格第二頁底部少了你主管的【簽名】，在她核准並簽名之前，他們沒辦法付款給你。"
  },
  {
    "word": "greeting",
    "pos": "n.",
    "cn_def": "問候；問候語",
    "en_def": "polite words you say or write when you first meet or contact someone",
    "sentence": "A: I'm writing to a new client in Japan for the first time, so how should I start the letter to make a good impression? B: Begin with a polite {{BLANK}} such as wishing them good health, then introduce yourself and our company briefly before you explain why you are contacting them.",
    "cn": "A：我第一次寫信給一位日本的新客戶，該怎麼開頭才能留下好印象？ B：先用禮貌的【問候語】開頭，例如祝對方身體健康，然後簡短介紹你自己和我們公司，再說明你聯絡他們的原因。"
  },
  {
    "word": "salutation",
    "pos": "n.",
    "cn_def": "（書信開頭的）稱呼語",
    "en_def": "the words at the start of a letter, such as \"Dear Sir\"",
    "sentence": "A: I don't know the name of the hiring manager at the company I'm applying to, so how should I begin my cover letter? B: Use a general {{BLANK}} like \"Dear Hiring Manager\" at the top, because it sounds polite and professional, and then mention the job title in your first sentence.",
    "cn": "A：我不知道我應徵的公司招聘經理叫什麼名字，求職信該怎麼開頭？ B：在最上面用一般的【稱呼語】，例如「親愛的招聘經理」，因為聽起來有禮貌又專業，然後在第一句提到職位名稱。"
  },
  {
    "word": "closing",
    "pos": "n.",
    "cn_def": "（書信的）結尾敬語",
    "en_def": "the polite words at the end of a letter or email",
    "sentence": "A: I've finished the main part of my email to the customer who complained about the late delivery, but how should I end it? B: Add a friendly {{BLANK}} that thanks her for her patience and promises better service in the future, and then write your full name and job title underneath.",
    "cn": "A：給那位抱怨送貨延遲的顧客的電子郵件，我已經寫完主要內容了，但該怎麼結尾？ B：加上一段友善的【結尾語】，感謝她的耐心並承諾未來提供更好的服務，然後在下面寫上你的全名和職稱。"
  },
  {
    "word": "sincerely",
    "pos": "adv.",
    "cn_def": "真誠地；（信尾）謹啟",
    "en_def": "used before your name at the end of a formal letter",
    "sentence": "A: How should I sign off this formal letter to the bank manager who approved our loan for the new factory last week? B: Write \"Yours {{BLANK}}\" at the end, because it is a standard and polite way to finish a business letter, and then add your signature and full name below it.",
    "cn": "A：這封寫給上週核准我們新工廠貸款的銀行經理的正式信件，我該怎麼署名結尾？ B：在結尾寫「Yours【sincerely】（謹啟）」，因為這是結束商業書信標準又禮貌的方式，然後在下面加上你的簽名和全名。"
  },
  {
    "word": "regards",
    "pos": "n.",
    "cn_def": "問候；致意",
    "en_def": "good wishes, often written at the end of an email",
    "sentence": "A: My email to our supplier in Germany seems too formal at the end, so what can I write instead of a long, serious closing? B: Simply write \"Best {{BLANK}}\" before your name, because it is friendly but still professional, and most business partners use it in their everyday emails.",
    "cn": "A：我寫給德國供應商的電子郵件結尾似乎太正式了，我可以寫什麼來取代又長又嚴肅的結尾？ B：只要在名字前寫「Best【regards】（祝好）」就好，因為它友善又不失專業，大多數商業夥伴在日常電子郵件中都這樣用。"
  },
  {
    "word": "formal",
    "pos": "adj.",
    "cn_def": "正式的",
    "en_def": "serious and polite, suitable for official or business situations",
    "sentence": "A: I need to write to the city government about the noise from the construction site next to our office, so how should it sound? B: Keep the letter {{BLANK}} and polite, avoid slang and jokes, and explain the problem clearly with dates and times, because officials take serious letters more carefully.",
    "cn": "A：我需要寫信給市政府，反映我們辦公室旁邊工地的噪音問題，語氣應該怎麼樣？ B：信要保持【正式】而有禮貌，避免俚語和玩笑，並清楚說明問題的日期和時間，因為官員會更認真看待嚴肅的信件。"
  },
  {
    "word": "informal",
    "pos": "adj.",
    "cn_def": "非正式的",
    "en_def": "relaxed and friendly, not official",
    "sentence": "A: I'm sending a note to my coworkers to invite them to a small farewell lunch for Linda on Friday, so should it sound serious? B: No, an {{BLANK}} message is fine, because they are your friends at work, so you can use a relaxed tone, first names, and even a smiley face.",
    "cn": "A：我要寄一張便條給同事，邀請他們週五參加琳達的小型歡送午餐，語氣應該嚴肅嗎？ B：不用，【非正式的】訊息就可以了，因為他們是你在公司的朋友，你可以用輕鬆的語氣、直呼名字，甚至加個笑臉。"
  },
  {
    "word": "draft",
    "pos": "v.",
    "cn_def": "草擬；起草",
    "en_def": "to write the first version of a letter or document",
    "sentence": "A: The manager wants a letter to all our customers explaining the new price changes, but she needs to approve it before we send anything. B: I'll {{BLANK}} the letter this morning and email it to her before lunch, so she has time to make changes and we can mail it tomorrow.",
    "cn": "A：經理想要一封寄給所有客戶、說明新價格調整的信，但在寄出任何東西前她需要先核准。 B：我今天早上會【草擬】這封信，午餐前用電子郵件寄給她，這樣她有時間修改，我們明天就能寄出。"
  },
  {
    "word": "revise",
    "pos": "v.",
    "cn_def": "修改；修訂",
    "en_def": "to change a piece of writing to make it better or correct",
    "sentence": "A: The manager read my proposal letter to the hotel and said some parts were confusing, so what should I do before sending it? B: You should {{BLANK}} the second paragraph to make the prices and dates clearer, and then ask a colleague to read it once more before you send it out.",
    "cn": "A：經理看了我寫給飯店的提案信，說有些部分讓人困惑，寄出前我該怎麼做？ B：你應該【修改】第二段，讓價格和日期更清楚，然後在寄出前請一位同事再讀一次。"
  },
  {
    "word": "compose",
    "pos": "v.",
    "cn_def": "撰寫；寫",
    "en_def": "to write a letter, email or message carefully",
    "sentence": "A: We need to tell all our clients that our office is moving to a new building next month, so who should write the announcement? B: Let's ask Tina to {{BLANK}} the message, because she writes clearly and politely, and she already knows the new location, opening hours, and phone numbers.",
    "cn": "A：我們需要通知所有客戶，辦公室下個月要搬到新大樓，應該由誰來寫這份公告？ B：我們請蒂娜來【撰寫】這則訊息吧，因為她寫得清楚又有禮貌，而且她已經知道新地點、營業時間和電話號碼。"
  },
  {
    "word": "edit",
    "pos": "v.",
    "cn_def": "編輯；修訂",
    "en_def": "to correct and improve a piece of writing",
    "sentence": "A: My letter of application is almost ready, but I'm worried there are spelling mistakes and some sentences are too long, so can you help? B: Sure, I'll {{BLANK}} it for you after lunch, correcting the grammar and cutting unnecessary words, so the hiring manager can read it quickly and easily.",
    "cn": "A：我的求職信快完成了，但我擔心有拼字錯誤，而且有些句子太長，你可以幫忙嗎？ B：當然，我午餐後幫你【編修】，修正文法並刪掉不必要的字，讓招聘經理可以快速又輕鬆地閱讀。"
  },
  {
    "word": "reply",
    "pos": "v.",
    "cn_def": "回覆",
    "en_def": "to answer a letter, email or message",
    "sentence": "A: A customer emailed us yesterday afternoon asking about the delivery date of her order, but nobody has answered her yet. B: Please {{BLANK}} to her before noon today and apologize for the delay, because she is one of our biggest clients and we don't want her to feel ignored.",
    "cn": "A：有位顧客昨天下午寄電子郵件來詢問她訂單的送貨日期，但到現在還沒人回答她。 B：請在今天中午前【回覆】她並為延誤道歉，因為她是我們最大的客戶之一，我們不想讓她覺得被忽視。"
  },
  {
    "word": "response",
    "pos": "n.",
    "cn_def": "回應；答覆",
    "en_def": "an answer to a letter, question or request",
    "sentence": "A: We mailed the job offer to the candidate two weeks ago, but we still haven't heard anything from her, so what should we do? B: Let's call her this afternoon, because we need her {{BLANK}} by Friday, and if she says no, we must contact the second candidate quickly.",
    "cn": "A：我們兩週前把錄取通知寄給那位應徵者，但到現在還沒收到她的任何消息，該怎麼辦？ B：我們今天下午打電話給她吧，因為我們需要她在週五前給【答覆】，如果她拒絕，我們必須盡快聯絡第二位人選。"
  },
  {
    "word": "attachment",
    "pos": "n.",
    "cn_def": "附件",
    "en_def": "a file that is sent together with an email",
    "sentence": "A: I opened your email about the new office rules, but I can't find the document you mentioned, so did you forget to include it? B: Sorry, I forgot to add the {{BLANK}}, so I will send the email again right now with the file, and please check your inbox in a few minutes.",
    "cn": "A：我打開了你那封關於辦公室新規定的電子郵件，但找不到你提到的文件，你是不是忘了附上？ B：抱歉，我忘了加【附件】，我現在馬上連同檔案重新寄一次，請幾分鐘後查看你的收件匣。"
  },
  {
    "word": "message",
    "pos": "n.",
    "cn_def": "訊息；留言",
    "en_def": "a short piece of information that you send or leave for someone",
    "sentence": "A: The sales director called while you were in the meeting with the bank, and she sounded quite worried about the shipment to Singapore. B: Thanks, did she leave a {{BLANK}} with her phone number, because I want to call her back before she leaves the office at six o'clock?",
    "cn": "A：你和銀行開會時業務總監打電話來，她聽起來很擔心送往新加坡的貨。 B：謝謝，她有留下附電話號碼的【留言】嗎？因為我想在她六點離開辦公室前回電給她。"
  },
  {
    "word": "note",
    "pos": "n.",
    "cn_def": "便條；短箋",
    "en_def": "a short, informal written message",
    "sentence": "A: I won't be in the office tomorrow because of a dentist appointment, so how can I tell the cleaning staff not to move the boxes on my desk? B: Just write a short {{BLANK}} and tape it to the top box, explaining that the documents inside are important and should stay exactly where they are.",
    "cn": "A：我明天要看牙醫不會進辦公室，要怎麼告訴清潔人員不要移動我桌上的箱子？ B：只要寫一張簡短的【便條】貼在最上面的箱子上，說明裡面的文件很重要，必須原封不動地留在原處。"
  },
  {
    "word": "invitation",
    "pos": "n.",
    "cn_def": "邀請；邀請函",
    "en_def": "a written or spoken request asking someone to come to an event",
    "sentence": "A: Our company is holding a dinner party to celebrate its twentieth anniversary, so how should we ask our most important clients to come? B: Let's send each of them a printed {{BLANK}} with the date, time, and location of the dinner, and ask them to reply by the end of the month.",
    "cn": "A：我們公司要舉辦晚宴慶祝二十週年，該怎麼請最重要的客戶來參加？ B：我們寄給每位客戶一張印好的【邀請函】，寫上晚宴的日期、時間和地點，並請他們在月底前回覆。"
  },
  {
    "word": "complaint",
    "pos": "n.",
    "cn_def": "投訴；抱怨",
    "en_def": "a statement that something is wrong or not good enough",
    "sentence": "A: Why does the hotel manager look so upset this morning, and why is she meeting with the restaurant staff in her office? B: A guest wrote a long {{BLANK}} about the cold food and slow service at dinner last night, and the manager wants to solve the problem before he checks out.",
    "cn": "A：飯店經理今天早上為什麼看起來這麼不高興，又為什麼在她辦公室和餐廳員工開會？ B：一位房客針對昨晚晚餐的冷菜和緩慢服務寫了一封很長的【投訴】，經理想在他退房前解決這個問題。"
  },
  {
    "word": "application",
    "pos": "n.",
    "cn_def": "申請；申請書",
    "en_def": "a formal written request for a job or place",
    "sentence": "A: I saw an advertisement for a marketing assistant position at a travel company, but how do I apply for it this week? B: Send your {{BLANK}} with a cover letter and your résumé to the human resources department by email before Friday, and make sure you mention your experience in tourism.",
    "cn": "A：我看到一家旅行社徵行銷助理的廣告，這週要怎麼應徵？ B：週五前用電子郵件把你的【申請書】連同求職信和履歷寄給人資部，而且一定要提到你在觀光業的經驗。"
  },
  {
    "word": "recommendation",
    "pos": "n.",
    "cn_def": "推薦；推薦信",
    "en_def": "a statement that someone is good for a job or a place",
    "sentence": "A: I'm applying for a manager position at a large bank, and they want a letter from someone who knows my work well. B: Ask your former supervisor to write a {{BLANK}} for you, because she watched you lead the team for three years and can describe your skills and achievements clearly.",
    "cn": "A：我正在應徵一家大型銀行的經理職位，他們要一封熟悉我工作表現的人寫的信。 B：請你以前的主管幫你寫一封【推薦信】，因為她看著你帶領團隊三年，能清楚描述你的能力和成就。"
  },
  {
    "word": "notification",
    "pos": "n.",
    "cn_def": "通知",
    "en_def": "a message that tells you about something",
    "sentence": "A: How will I know when the package from our supplier in Korea arrives at the reception desk downstairs? B: The front desk system will send you an email {{BLANK}} as soon as the courier drops it off, so you can go down and collect it before the office closes.",
    "cn": "A：我要怎麼知道我們韓國供應商的包裹已經送到樓下的接待櫃檯？ B：快遞員一放下包裹，櫃檯系統就會寄給你一封電子郵件【通知】，這樣你就可以在辦公室關門前下樓去拿。"
  },
  {
    "word": "alphabet",
    "pos": "n.",
    "cn_def": "字母表",
    "en_def": "all the letters of a language in a fixed order",
    "sentence": "A: We have hundreds of customer letters in these boxes, and the manager wants them organized before the audit next week, so how should we sort them? B: Arrange the files according to the {{BLANK}}, using each customer's last name, so anyone in the department can find a letter quickly when they need it.",
    "cn": "A：這些箱子裡有好幾百封客戶信件，經理希望在下週稽核前整理好，我們該怎麼分類？ B：依照客戶的姓氏按【字母表】順序排列檔案，這樣部門裡任何人需要時都能很快找到信件。"
  }
];

const MCQS = [
  {
    "q": "Please _____ the signed invoices to the accounting office in Taipei today. They must arrive before the end of the month.",
    "options": [
      "mail",
      "compose",
      "edit",
      "revise"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our receptionist will _____ the contracts to the client this afternoon. They should arrive at her office by Wednesday morning.",
    "options": [
      "draft",
      "edit",
      "post",
      "revise"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The secretary forgot to seal the _____ before dropping it into the mailbox. Luckily, the letter inside did not fall out.",
    "options": [
      "closing",
      "envelope",
      "signature",
      "greeting"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The clerk said the package needed one more _____ because it was too heavy. International postage is based on weight.",
    "options": [
      "recommendation",
      "salutation",
      "attachment",
      "stamp"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Please write the full delivery _____ clearly on the label. Last week, two packages were sent to the wrong building.",
    "options": [
      "greeting",
      "signature",
      "address",
      "complaint"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The letter had no return address on it. The post office could not send it back to the _____.",
    "options": [
      "sender",
      "envelope",
      "attachment",
      "notification"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The courier must get a signature from the _____ of the package. Nobody else is allowed to accept it.",
    "options": [
      "closing",
      "envelope",
      "alphabet",
      "recipient"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The courier company promised to _____ the new office furniture by Thursday. Employees will move into the building next Monday.",
    "options": [
      "edit",
      "deliver",
      "revise",
      "compose"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "All _____ with foreign suppliers must be saved in the shared folder. The manager reviews these letters every Friday.",
    "options": [
      "correspondence",
      "alphabet",
      "handwriting",
      "salutation"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Nobody could read the note on the manager's desk. The _____ was so messy that the words looked like lines.",
    "options": [
      "invitation",
      "greeting",
      "handwriting",
      "recommendation"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The bank will not accept the contract without the director's _____. Please ask her to sign it before noon.",
    "options": [
      "greeting",
      "signature",
      "notification",
      "alphabet"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The hotel sent each guest a card with a warm holiday _____. Many guests said the friendly words made them smile.",
    "options": [
      "application",
      "complaint",
      "attachment",
      "greeting"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The _____ \"Dear Sir or Madam\" is used when you do not know the reader's name. It sounds polite and formal.",
    "options": [
      "notification",
      "correspondence",
      "salutation",
      "attachment"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "End the email with a polite _____ that thanks the reader. Then add your name and job title below it.",
    "options": [
      "closing",
      "alphabet",
      "envelope",
      "stamp"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Letters to government offices should be _____ and polite. Avoid slang, jokes, and very short sentences.",
    "options": [
      "late",
      "postal",
      "informal",
      "formal"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The note inviting coworkers to a birthday lunch can be quite _____. Feel free to use first names and a relaxed tone.",
    "options": [
      "formal",
      "informal",
      "postal",
      "punctual"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Could you _____ a short letter to our customers about the new prices? I will check it before we send it.",
    "options": [
      "draft",
      "post",
      "reply",
      "deliver"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The manager asked me to _____ the report because some numbers were wrong. I corrected them and sent it back this morning.",
    "options": [
      "deliver",
      "mail",
      "revise",
      "post"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "It took Sarah an hour to _____ a polite email to the angry customer. She chose every word very carefully.",
    "options": [
      "mail",
      "compose",
      "post",
      "deliver"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Before the newsletter is printed, an assistant must _____ it for spelling and grammar mistakes. This usually takes about one hour.",
    "options": [
      "mail",
      "post",
      "deliver",
      "edit"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Please _____ to the client's email before the end of the day. She is waiting for an answer about the shipping costs.",
    "options": [
      "mail",
      "deliver",
      "reply",
      "post"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "We sent the survey to two hundred customers last month. So far, the _____ has been very positive.",
    "options": [
      "response",
      "stamp",
      "envelope",
      "salutation"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The price list is included as an _____ in this email. Please open the file and check the new prices.",
    "options": [
      "alphabet",
      "signature",
      "envelope",
      "attachment"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The sales director was out when the client called. The receptionist took a _____ and put it on her desk.",
    "options": [
      "sender",
      "message",
      "closing",
      "salutation"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Ken left a short _____ on the refrigerator to remind everyone about the staff meeting. It said the meeting starts at nine.",
    "options": [
      "note",
      "sender",
      "stamp",
      "salutation"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Every employee received an _____ to the company's year-end party. The event will be held at a hotel downtown.",
    "options": [
      "alphabet",
      "attachment",
      "invitation",
      "envelope"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The restaurant received a _____ about the slow service on Saturday night. The manager apologized and offered the customer a free meal.",
    "options": [
      "stamp",
      "complaint",
      "signature",
      "salutation"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Please submit your _____ for the sales position by Friday. Late forms will not be considered by the hiring team.",
    "options": [
      "greeting",
      "alphabet",
      "envelope",
      "application"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "Jessica asked her former professor for a letter of _____. She needs it for her application to a graduate program.",
    "options": [
      "handwriting",
      "salutation",
      "recommendation",
      "alphabet"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "Customers receive a text _____ when their package is ready for pickup. They must collect it within seven days.",
    "options": [
      "notification",
      "alphabet",
      "salutation",
      "signature"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "mail": {
    "pos": "v.",
    "en_def": "to send a letter or package by post",
    "cn_def": "郵寄"
  },
  "post": {
    "pos": "v.",
    "en_def": "to send a letter or package by mail",
    "cn_def": "郵寄；寄出"
  },
  "envelope": {
    "pos": "n.",
    "en_def": "a paper cover that you put a letter in",
    "cn_def": "信封"
  },
  "stamp": {
    "pos": "n.",
    "en_def": "a small paper you stick on a letter to pay for sending it",
    "cn_def": "郵票"
  },
  "address": {
    "pos": "n.",
    "en_def": "the details of the place where someone lives or works, used for sending mail",
    "cn_def": "地址"
  },
  "sender": {
    "pos": "n.",
    "en_def": "the person who sends a letter or package",
    "cn_def": "寄件人"
  },
  "recipient": {
    "pos": "n.",
    "en_def": "the person who receives a letter or package",
    "cn_def": "收件人"
  },
  "deliver": {
    "pos": "v.",
    "en_def": "to take letters or goods to a person or place",
    "cn_def": "遞送；投遞"
  },
  "postal": {
    "pos": "adj.",
    "en_def": "connected with the system of sending letters and packages",
    "cn_def": "郵政的"
  },
  "correspondence": {
    "pos": "n.",
    "en_def": "letters or emails sent between people",
    "cn_def": "通信；往來書信"
  },
  "handwriting": {
    "pos": "n.",
    "en_def": "the way a person writes by hand",
    "cn_def": "筆跡；字跡"
  },
  "signature": {
    "pos": "n.",
    "en_def": "your name written in your own special way",
    "cn_def": "簽名"
  },
  "greeting": {
    "pos": "n.",
    "en_def": "polite words you say or write when you first meet or contact someone",
    "cn_def": "問候；問候語"
  },
  "salutation": {
    "pos": "n.",
    "en_def": "the words at the start of a letter, such as \"Dear Sir\"",
    "cn_def": "（書信開頭的）稱呼語"
  },
  "closing": {
    "pos": "n.",
    "en_def": "the polite words at the end of a letter or email",
    "cn_def": "（書信的）結尾敬語"
  },
  "sincerely": {
    "pos": "adv.",
    "en_def": "used before your name at the end of a formal letter",
    "cn_def": "真誠地；（信尾）謹啟"
  },
  "regards": {
    "pos": "n.",
    "en_def": "good wishes, often written at the end of an email",
    "cn_def": "問候；致意"
  },
  "formal": {
    "pos": "adj.",
    "en_def": "serious and polite, suitable for official or business situations",
    "cn_def": "正式的"
  },
  "informal": {
    "pos": "adj.",
    "en_def": "relaxed and friendly, not official",
    "cn_def": "非正式的"
  },
  "draft": {
    "pos": "v.",
    "en_def": "to write the first version of a letter or document",
    "cn_def": "草擬；起草"
  },
  "revise": {
    "pos": "v.",
    "en_def": "to change a piece of writing to make it better or correct",
    "cn_def": "修改；修訂"
  },
  "compose": {
    "pos": "v.",
    "en_def": "to write a letter, email or message carefully",
    "cn_def": "撰寫；寫"
  },
  "edit": {
    "pos": "v.",
    "en_def": "to correct and improve a piece of writing",
    "cn_def": "編輯；修訂"
  },
  "reply": {
    "pos": "v.",
    "en_def": "to answer a letter, email or message",
    "cn_def": "回覆"
  },
  "response": {
    "pos": "n.",
    "en_def": "an answer to a letter, question or request",
    "cn_def": "回應；答覆"
  },
  "attachment": {
    "pos": "n.",
    "en_def": "a file that is sent together with an email",
    "cn_def": "附件"
  },
  "message": {
    "pos": "n.",
    "en_def": "a short piece of information that you send or leave for someone",
    "cn_def": "訊息；留言"
  },
  "note": {
    "pos": "n.",
    "en_def": "a short, informal written message",
    "cn_def": "便條；短箋"
  },
  "invitation": {
    "pos": "n.",
    "en_def": "a written or spoken request asking someone to come to an event",
    "cn_def": "邀請；邀請函"
  },
  "complaint": {
    "pos": "n.",
    "en_def": "a statement that something is wrong or not good enough",
    "cn_def": "投訴；抱怨"
  },
  "application": {
    "pos": "n.",
    "en_def": "a formal written request for a job or place",
    "cn_def": "申請；申請書"
  },
  "recommendation": {
    "pos": "n.",
    "en_def": "a statement that someone is good for a job or a place",
    "cn_def": "推薦；推薦信"
  },
  "notification": {
    "pos": "n.",
    "en_def": "a message that tells you about something",
    "cn_def": "通知"
  },
  "alphabet": {
    "pos": "n.",
    "en_def": "all the letters of a language in a fixed order",
    "cn_def": "字母表"
  }
};

const EXTRA_GLOSSES = {};
