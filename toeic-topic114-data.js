// Topic 114 Quiz Data: E-mail 電子郵件
// Source word list: https://www.examword.com/group-topic/e-mail — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T114 - E-mail 電子郵件",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "inbox",
    "pos": "n.",
    "cn_def": "收件匣",
    "en_def": "the folder where new e-mails arrive",
    "sentence": "A: Did you see the message from the hotel about our booking for the sales conference next month in Kaohsiung? B: Not yet, because my {{BLANK}} is full of over two hundred unread e-mails after the holiday, so I will search for it after lunch and forward it to you.",
    "cn": "A：你有看到飯店寄來關於我們下個月在高雄業務研討會訂房的訊息嗎？ B：還沒，因為假期過後我的【收件匣】裡塞滿了兩百多封未讀郵件，所以我午餐後會找找看，再轉寄給你。"
  },
  {
    "word": "outbox",
    "pos": "n.",
    "cn_def": "寄件匣",
    "en_def": "the folder that holds e-mails waiting to be sent",
    "sentence": "A: Why hasn't the client received the price list I e-mailed him this morning, even though I clicked the button twice before the meeting? B: I think your laptop lost its internet connection, so the message is probably still stuck in your {{BLANK}}, waiting until you connect to the office network again.",
    "cn": "A：為什麼客戶還沒收到我今天早上寄給他的價目表？我開會前明明按了兩次按鈕。 B：我想你的筆電斷線了，所以那封信大概還卡在你的【寄件匣】裡，要等你重新連上公司網路才會寄出。"
  },
  {
    "word": "sent",
    "pos": "adj.",
    "cn_def": "已寄出的；寄件備份的",
    "en_def": "already mailed out (used for e-mails you have mailed)",
    "sentence": "A: The customer says she never got our refund confirmation, but I am sure our team e-mailed it to her last Friday afternoon. B: Please check the {{BLANK}} folder on the shared account, and if you find the message there, forward a copy to her with the original date clearly shown.",
    "cn": "A：那位顧客說她從沒收到我們的退款確認信，但我確定我們團隊上週五下午寄給她了。 B：請查看共用帳號裡的【寄件備份】資料夾，如果找到那封信，就把副本轉寄給她，並清楚顯示原本的日期。"
  },
  {
    "word": "draft",
    "pos": "n.",
    "cn_def": "草稿",
    "en_def": "an e-mail that is written but not mailed yet",
    "sentence": "A: Could you look at my e-mail to the new supplier before I send it, because I am worried that the tone sounds too strong? B: Sure, save it as a {{BLANK}} and share it with me, and I will read it carefully and suggest a few polite changes before the meeting at three.",
    "cn": "A：在我寄出給新供應商的電子郵件之前，你可以幫我看一下嗎？我擔心語氣聽起來太強硬。 B：沒問題，把它存成【草稿】並分享給我，我會在三點開會前仔細閱讀，並建議幾處比較禮貌的修改。"
  },
  {
    "word": "attachment",
    "pos": "n.",
    "cn_def": "附件",
    "en_def": "a file that is mailed together with an e-mail",
    "sentence": "A: I received your e-mail about the new training schedule, but I can't find the timetable you mentioned anywhere in the message. B: Sorry, I forgot to add the {{BLANK}} because I was in a hurry to catch my train, so I will send the PDF file again as soon as I get to the office.",
    "cn": "A：我收到你關於新訓練時程的電子郵件了，但我在信裡找不到你提到的時間表。 B：抱歉，我急著趕火車，忘了加上【附件】，所以我一到辦公室就會重新寄出那份PDF檔。"
  },
  {
    "word": "cc",
    "pos": "v.",
    "cn_def": "以副本寄送",
    "en_def": "to send a copy of an e-mail to another person",
    "sentence": "A: Should I tell my manager that I am changing the delivery date for the Lin Trading order, or is that not necessary? B: Yes, please {{BLANK}} her on your e-mail to the customer, so she can see the new date and won't be surprised if the client calls her about it.",
    "cn": "A：我要更改林氏貿易訂單的交貨日期，需要告訴經理嗎？還是不必？ B：要，請在寄給客戶的郵件中【以副本寄送】給她，這樣她就能看到新日期，如果客戶打電話問她，她也不會感到意外。"
  },
  {
    "word": "bcc",
    "pos": "v.",
    "cn_def": "以密件副本寄送",
    "en_def": "to send a copy of an e-mail secretly, so others cannot see the address",
    "sentence": "A: I need to e-mail the event details to all two hundred guests, but I don't want them to see each other's addresses for privacy reasons. B: Then put your own address in the To line and {{BLANK}} all the guests, so each person receives the message without seeing the full list.",
    "cn": "A：我需要把活動細節寄給全部兩百位賓客，但基於隱私考量，我不想讓他們看到彼此的地址。 B：那就把你自己的地址放在收件人欄，並用【密件副本】寄給所有賓客，這樣每個人都能收到信件，卻看不到完整名單。"
  },
  {
    "word": "subject",
    "pos": "n.",
    "cn_def": "主旨",
    "en_def": "the short title of an e-mail that tells what it is about",
    "sentence": "A: Why didn't the finance team answer my request for the travel budget, even though I sent it to them two days ago? B: They get hundreds of messages every day, so you should write a clear {{BLANK}} line like 'Urgent: Travel Budget for May' to help them notice it quickly.",
    "cn": "A：為什麼財務部沒有回覆我的差旅預算申請？我兩天前就寄給他們了。 B：他們每天收到上百封信，所以你應該寫一個清楚的【主旨】，例如「緊急：五月差旅預算」，幫助他們快速注意到。"
  },
  {
    "word": "signature",
    "pos": "n.",
    "cn_def": "簽名檔",
    "en_def": "the name and contact details added at the end of every e-mail",
    "sentence": "A: Our marketing department moved to the fifth floor last week, so what should I do about the old office address that customers still see? B: Update the {{BLANK}} at the bottom of your e-mails with the new address and phone number, so customers can contact you without any confusion.",
    "cn": "A：我們行銷部上週搬到五樓了，客戶還看到舊的辦公室地址，我該怎麼辦？ B：更新你郵件底部的【簽名檔】，換上新地址和電話號碼，這樣客戶就能順利聯絡你而不會混淆。"
  },
  {
    "word": "reply",
    "pos": "v.",
    "cn_def": "回覆",
    "en_def": "to answer an e-mail or message",
    "sentence": "A: The hotel in Tainan asked whether we need a projector and extra chairs for our training workshop next Tuesday morning. B: Please {{BLANK}} to them before five o'clock today and say we need both, because they have to prepare the meeting room the day before.",
    "cn": "A：台南的飯店問我們下週二上午的培訓研習是否需要投影機和額外椅子。 B：請在今天五點前【回覆】他們，說兩樣都需要，因為他們必須在前一天準備好會議室。"
  },
  {
    "word": "forward",
    "pos": "v.",
    "cn_def": "轉寄",
    "en_def": "to send an e-mail you received to another person",
    "sentence": "A: I just got a message from a customer who wants a discount on fifty office chairs, but I am not sure I can approve that. B: You should {{BLANK}} it to Mr. Chen in the sales department, since he handles large orders and can decide on special prices for regular clients.",
    "cn": "A：我剛收到一位顧客的信，他想買五十張辦公椅並要求折扣，但我不確定能不能核准。 B：你應該把它【轉寄】給業務部的陳先生，因為他負責大宗訂單，能決定給老客戶的特別價格。"
  },
  {
    "word": "compose",
    "pos": "v.",
    "cn_def": "撰寫",
    "en_def": "to write an e-mail or message",
    "sentence": "A: How long did it take you to finish the message to the investors about the delay in opening our new store downtown? B: It took me almost an hour to {{BLANK}} it, because I wanted to explain the problem honestly while still sounding positive about the opening next month.",
    "cn": "A：你寫那封給投資人、說明市中心新店延後開幕的信，花了多久時間？ B：我花了將近一小時來【撰寫】它，因為我想誠實說明問題，同時對下個月的開幕仍保持正面的語氣。"
  },
  {
    "word": "send",
    "pos": "v.",
    "cn_def": "寄送；發送",
    "en_def": "to make a message or letter go to someone",
    "sentence": "A: When do you think the customers will get the invitation to our product launch party at the convention center next month? B: I will {{BLANK}} it this afternoon after my manager checks the date and the map, so they should have it in their inboxes by tonight.",
    "cn": "A：你覺得客戶什麼時候會收到我們下個月在會展中心舉辦的產品發表派對邀請函？ B：等經理確認日期和地圖後，我今天下午就會【寄出】，所以他們今晚前應該就會在收件匣裡看到。"
  },
  {
    "word": "receive",
    "pos": "v.",
    "cn_def": "收到",
    "en_def": "to get something that someone mails or gives you",
    "sentence": "A: Has the accounting team said anything about the invoice from the printing company for the brochures we ordered last month? B: Yes, they told me they didn't {{BLANK}} it until this morning, so the payment will be a few days late, and they have already apologized to the printer.",
    "cn": "A：會計部有提到印刷公司寄來的、我們上個月訂購的手冊發票嗎？ B：有，他們說直到今天早上才【收到】，所以付款會晚幾天，他們已經向印刷廠道歉了。"
  },
  {
    "word": "delete",
    "pos": "v.",
    "cn_def": "刪除",
    "en_def": "to remove something from a computer",
    "sentence": "A: My computer keeps telling me that my e-mail storage is almost full, and now I can't get any new messages from clients. B: You should {{BLANK}} old messages with large files, like photos and videos, and then empty the trash folder so you have enough space again.",
    "cn": "A：我的電腦一直提醒我電子郵件儲存空間快滿了，現在我收不到客戶的任何新郵件。 B：你應該【刪除】附有大檔案的舊郵件，像是照片和影片，然後清空垃圾桶資料夾，這樣就會再有足夠的空間。"
  },
  {
    "word": "archive",
    "pos": "v.",
    "cn_def": "封存；歸檔",
    "en_def": "to store old e-mails in a safe place so you can find them later",
    "sentence": "A: Should I keep all the e-mails about last year's contract with the shipping company, even though the project is already finished? B: Yes, please {{BLANK}} them in a separate folder instead of deleting them, because the lawyers may need to check the details if there is a problem later.",
    "cn": "A：去年和貨運公司的合約相關郵件，雖然專案已經結束了，我還要全部保留嗎？ B：要，請把它們【封存】到另一個資料夾而不是刪除，因為如果日後出了問題，律師可能需要查看細節。"
  },
  {
    "word": "spam",
    "pos": "n.",
    "cn_def": "垃圾郵件",
    "en_def": "unwanted e-mails, usually advertisements, mailed to many people",
    "sentence": "A: I applied for the marketing job at a big hotel two weeks ago, but I still haven't heard anything from their human resources office. B: Check your {{BLANK}} folder, because messages from new companies sometimes end up there by mistake, and you might have missed an interview invitation.",
    "cn": "A：我兩週前應徵了一家大飯店的行銷職缺，但到現在還沒收到人資部門的任何消息。 B：查看一下你的【垃圾郵件】資料夾，因為新公司寄來的信有時會被誤放在那裡，你可能錯過了面試邀請。"
  },
  {
    "word": "filter",
    "pos": "v.",
    "cn_def": "過濾",
    "en_def": "to sort or block messages automatically",
    "sentence": "A: I get so many advertisements every day that I often miss important messages from my team members and our customers. B: You can set up rules to {{BLANK}} your e-mail, so messages from the office go into one folder and the advertisements are moved away automatically.",
    "cn": "A：我每天收到太多廣告，常常錯過組員和客戶寄來的重要郵件。 B：你可以設定規則來【過濾】電子郵件，讓辦公室寄來的信進入同一個資料夾，廣告則自動被移走。"
  },
  {
    "word": "thread",
    "pos": "n.",
    "cn_def": "郵件串；討論串",
    "en_def": "a series of e-mails that answer each other on one topic",
    "sentence": "A: I just joined the project team, so how can I find out what everyone has already decided about the new website design? B: Read the whole e-mail {{BLANK}} about the website from the beginning, because it shows every message and decision in order since the first meeting in March.",
    "cn": "A：我剛加入專案小組，要怎麼知道大家對新網站設計已經做了哪些決定？ B：從頭閱讀整個關於網站的【郵件串】，因為它依序列出從三月第一次會議以來的每封信和每個決定。"
  },
  {
    "word": "newsletter",
    "pos": "n.",
    "cn_def": "電子報；通訊",
    "en_def": "a regular report with news mailed to members or customers",
    "sentence": "A: How do you usually tell our customers about new products, special discounts, and changes to the store opening hours? B: We send a monthly {{BLANK}} by e-mail to everyone who signs up on our website, and it usually brings many visitors to the store the following weekend.",
    "cn": "A：你們通常怎麼告訴顧客新產品、特別折扣和營業時間的變動？ B：我們每月會用電子郵件寄送【電子報】給所有在網站上註冊的人，而且通常在接下來的週末帶來許多來店顧客。"
  },
  {
    "word": "notification",
    "pos": "n.",
    "cn_def": "通知",
    "en_def": "a message that tells you something has happened",
    "sentence": "A: How did you know so quickly that the client had changed the meeting time, when you were driving to the airport? B: My phone showed a {{BLANK}} as soon as her e-mail arrived, so my coworker in the passenger seat read it to me and called our assistant to update the schedule.",
    "cn": "A：你開車去機場的路上，怎麼那麼快就知道客戶改了開會時間？ B：她的信一到，我的手機就跳出【通知】，所以坐在副駕駛座的同事唸給我聽，並打電話請助理更新行程。"
  },
  {
    "word": "account",
    "pos": "n.",
    "cn_def": "帳號；帳戶",
    "en_def": "a personal record that lets you use an e-mail or online service",
    "sentence": "A: I am starting my new job at the bank on Monday, so how will I get messages from my manager and the team? B: The IT department will create an e-mail {{BLANK}} for you on your first morning, and they will give you a temporary password to sign in.",
    "cn": "A：我週一要開始在銀行的新工作，我要怎麼收到經理和團隊的訊息？ B：資訊部門會在你第一天早上幫你建立一個電子郵件【帳號】，並給你一組臨時密碼登入。"
  },
  {
    "word": "password",
    "pos": "n.",
    "cn_def": "密碼",
    "en_def": "a secret word you type to enter a computer system",
    "sentence": "A: I tried to sign in to my work e-mail this morning, but the system keeps saying that my information is wrong. B: You probably need to change your {{BLANK}}, because the company asks every employee to choose a new one every ninety days for security reasons.",
    "cn": "A：我今天早上試著登入工作信箱，但系統一直說我的資料錯誤。 B：你大概需要更改【密碼】，因為公司基於安全考量，要求每位員工每九十天換一個新的。"
  },
  {
    "word": "login",
    "pos": "n.",
    "cn_def": "登入帳號；登入資訊",
    "en_def": "the name and details you use to enter a computer system",
    "sentence": "A: The new intern can't open the company e-mail system, and she needs to send the meeting notes to the director before noon. B: Ask the IT office to give her a {{BLANK}} today, and in the meantime she can save the notes on a USB drive and bring them to me.",
    "cn": "A：新來的實習生打不開公司的電子郵件系統，而她必須在中午前把會議記錄寄給主管。 B：請資訊室今天給她一組【登入帳號】，在那之前她可以先把記錄存在隨身碟裡拿給我。"
  },
  {
    "word": "logout",
    "pos": "n.",
    "cn_def": "登出",
    "en_def": "the act of leaving a computer system",
    "sentence": "A: Why does the e-mail system keep closing while I am in the middle of writing a long report to the head office? B: There is an automatic {{BLANK}} after fifteen minutes without any activity, so save your work often and type something every few minutes to stay connected.",
    "cn": "A：為什麼我寫給總公司的長篇報告寫到一半，電子郵件系統就一直關閉？ B：系統在十五分鐘沒有任何動作後會自動【登出】，所以要經常存檔，並每隔幾分鐘輸入點東西以保持連線。"
  },
  {
    "word": "server",
    "pos": "n.",
    "cn_def": "伺服器",
    "en_def": "a main computer that stores and sends e-mails for many users",
    "sentence": "A: Why can't anyone in the office send or receive e-mails this morning, even though the internet seems to be working fine? B: The company's e-mail {{BLANK}} is being repaired by the technicians, and they said everything should be back to normal before our meeting with the clients at eleven.",
    "cn": "A：為什麼今天早上辦公室裡沒人能收發電子郵件？網路明明看起來正常。 B：公司的電子郵件【伺服器】正由技術人員維修中，他們說在我們十一點和客戶開會前應該就會恢復正常。"
  },
  {
    "word": "provider",
    "pos": "n.",
    "cn_def": "供應商；服務業者",
    "en_def": "a company that offers a service such as e-mail or internet",
    "sentence": "A: Our small company keeps having problems with lost messages and slow service, so what do you think we should do about it? B: I think we should switch to a bigger e-mail {{BLANK}} that offers more storage, better security, and customer support twenty-four hours a day, even if it costs more.",
    "cn": "A：我們小公司一直有郵件遺失和服務緩慢的問題，你覺得該怎麼辦？ B：我認為我們應該換一家較大的電子郵件服務【供應商】，提供更多儲存空間、更好的安全性和全天候客服，即使費用較高也值得。"
  },
  {
    "word": "client",
    "pos": "n.",
    "cn_def": "用戶端程式",
    "en_def": "a computer program used to read and write e-mails",
    "sentence": "A: Which program should I install on my new laptop so I can read my work messages even when I am not connected to the internet? B: The company recommends a desktop e-mail {{BLANK}} because it saves copies of your messages, so you can read them on the plane during business trips.",
    "cn": "A：我的新筆電該安裝哪個程式，才能在沒連網時也能讀工作郵件？ B：公司推薦使用桌面版電子郵件【用戶端程式】，因為它會儲存郵件副本，讓你出差時在飛機上也能閱讀。"
  },
  {
    "word": "mailbox",
    "pos": "n.",
    "cn_def": "信箱",
    "en_def": "the storage space where your e-mails are kept",
    "sentence": "A: Why did my message to the human resources manager come back with an error, even though I typed her address correctly? B: Her {{BLANK}} is full because she has been on vacation for two weeks, so she can't get any new e-mails until she clears some space.",
    "cn": "A：為什麼我寄給人資經理的信被退回並顯示錯誤？我明明把她的地址打對了。 B：她的【信箱】滿了，因為她已經休假兩週，在她清出空間之前收不到任何新郵件。"
  },
  {
    "word": "delivery",
    "pos": "n.",
    "cn_def": "送達；投遞",
    "en_def": "the act of a message reaching the person it was meant for",
    "sentence": "A: How can I be sure that the manager in Tokyo actually got the contract I e-mailed to him late last night? B: You can ask for a {{BLANK}} receipt when you send important messages, so the system tells you the exact time the e-mail reached his mailbox.",
    "cn": "A：我要怎麼確定東京的經理真的收到我昨晚寄給他的合約？ B：寄重要郵件時你可以要求【送達】回條，系統就會告訴你那封信抵達他信箱的確切時間。"
  },
  {
    "word": "bounce",
    "pos": "v.",
    "cn_def": "（郵件）被退回",
    "en_def": "(of an e-mail) to come back because it cannot be delivered",
    "sentence": "A: I sent the price list to the new customer three times, but each time I got an error message a few minutes later. B: Your e-mails will {{BLANK}} if the address has a spelling mistake, so call the customer and check the exact address before you try again.",
    "cn": "A：我把價目表寄給新客戶三次，但每次幾分鐘後都收到錯誤訊息。 B：如果地址拼錯，你的郵件就會被【退回】，所以打電話給客戶確認正確地址後再試一次。"
  },
  {
    "word": "encrypt",
    "pos": "v.",
    "cn_def": "加密",
    "en_def": "to change information into a secret code so others cannot read it",
    "sentence": "A: I need to send the employees' salary information to the accountant, but I'm worried that someone else could read it. B: You should {{BLANK}} the message before sending it, so only the accountant can open it with a special code, and the information stays safe from hackers.",
    "cn": "A：我需要把員工的薪資資料寄給會計師，但我擔心別人可能會看到。 B：你應該在寄出前將郵件【加密】，這樣只有會計師能用特殊密碼打開，資料就不會被駭客竊取。"
  },
  {
    "word": "unsubscribe",
    "pos": "v.",
    "cn_def": "取消訂閱",
    "en_def": "to stop getting e-mails from a company or list",
    "sentence": "A: I keep getting advertising e-mails from an online clothing store that I bought a jacket from once, two years ago. B: Scroll to the bottom of one of their messages and click the link to {{BLANK}}, and then you should stop receiving their advertisements within a few days.",
    "cn": "A：我兩年前在一家網路服飾店買過一件夾克，之後就一直收到他們的廣告信。 B：捲動到他們其中一封信的最下方，點擊連結來【取消訂閱】，幾天內你應該就不會再收到他們的廣告了。"
  },
  {
    "word": "auto-reply",
    "pos": "n.",
    "cn_def": "自動回覆",
    "en_def": "an answer that is mailed automatically when you are away",
    "sentence": "A: I'm going on a business trip to Singapore next week, and I won't be able to check my e-mails very often. B: Then set up an {{BLANK}} before you leave, so people know you are away and can contact your assistant for urgent matters while you are traveling.",
    "cn": "A：我下週要去新加坡出差，沒辦法常常查看電子郵件。 B：那出發前先設定【自動回覆】，讓大家知道你不在，緊急事情可以在你出差期間聯絡你的助理。"
  }
];

const MCQS = [
  {
    "q": "I was away from the office for three days. When I came back, my _____ had over two hundred unread messages.",
    "options": [
      "inbox",
      "signature",
      "password",
      "subject"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The manager has not finished the proposal e-mail yet. She saved it as a _____ and will complete it tomorrow.",
    "options": [
      "delivery",
      "server",
      "draft",
      "notification"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Please open the _____ to see the full sales report. The file includes charts for each region and quarter.",
    "options": [
      "subject",
      "attachment",
      "account",
      "provider"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Your message had no _____ line, so the director almost deleted it. Always write a short title that explains the topic.",
    "options": [
      "delivery",
      "server",
      "mailbox",
      "subject"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "All employees must use the new company _____ in their e-mails. It shows the logo, the job title, and the office phone number.",
    "options": [
      "password",
      "thread",
      "signature",
      "spam"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Customers expect us to answer quickly. Please _____ to every complaint within twenty-four hours of receiving it.",
    "options": [
      "reply",
      "archive",
      "encrypt",
      "filter"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "I am not the right person to answer this question. I will _____ your e-mail to the shipping manager right away.",
    "options": [
      "compose",
      "unsubscribe",
      "bounce",
      "forward"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Before you _____ a message to an important client, plan your main points. A clear and polite e-mail makes a good impression.",
    "options": [
      "bounce",
      "compose",
      "archive",
      "filter"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The invitations are ready to go. Please _____ them to all the guests by Friday so they can reply in time.",
    "options": [
      "send",
      "delete",
      "encrypt",
      "bounce"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Did you _____ my e-mail about the training session? I sent it yesterday afternoon with the room number.",
    "options": [
      "compose",
      "unsubscribe",
      "receive",
      "bounce"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Your storage is almost full. Please _____ old messages that you no longer need to free up space.",
    "options": [
      "forward",
      "delete",
      "reply",
      "compose"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Do not delete the project e-mails when the work is done. Instead, _____ them in a folder for future reference.",
    "options": [
      "bounce",
      "reply",
      "unsubscribe",
      "archive"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Our security software blocks most _____ before it reaches your inbox. Do not open strange advertisements from unknown senders.",
    "options": [
      "delivery",
      "signature",
      "spam",
      "login"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Too many advertising e-mails arrive every day. You can _____ them automatically into a separate folder by creating simple rules.",
    "options": [
      "filter",
      "compose",
      "reply",
      "encrypt"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Please read the whole e-mail _____ before the meeting. It contains every reply about the budget since last month.",
    "options": [
      "password",
      "signature",
      "login",
      "thread"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The hotel sends a monthly _____ to its members. It includes special room prices, new restaurant menus, and upcoming events.",
    "options": [
      "password",
      "newsletter",
      "server",
      "login"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "My phone shows a _____ every time a new message arrives. I turned the sound off during the meeting.",
    "options": [
      "notification",
      "subject",
      "signature",
      "provider"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "New employees receive a company e-mail _____ on their first day. The IT team also explains how to sign in safely.",
    "options": [
      "thread",
      "spam",
      "account",
      "delivery"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "For security reasons, please change your _____ every three months. Never share it with anyone, even your coworkers.",
    "options": [
      "inbox",
      "password",
      "attachment",
      "newsletter"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The new intern cannot open the e-mail system yet. The IT department will give her a _____ and a temporary password this afternoon.",
    "options": [
      "newsletter",
      "thread",
      "signature",
      "login"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "No one could send e-mails this morning because the mail _____ was down. Technicians fixed the problem before noon.",
    "options": [
      "signature",
      "attachment",
      "server",
      "subject"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Our company plans to change its e-mail service _____ next year. The new company offers more storage at a lower price.",
    "options": [
      "provider",
      "notification",
      "attachment",
      "draft"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The manager's _____ is full because she has been on vacation. Your message will not reach her until she clears space.",
    "options": [
      "signature",
      "password",
      "subject",
      "mailbox"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The system confirmed the _____ of your e-mail at 9:15 this morning. The client should have the contract now.",
    "options": [
      "password",
      "delivery",
      "spam",
      "signature"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Check the address carefully before you send it. E-mails _____ back when there is a spelling mistake in the address.",
    "options": [
      "bounce",
      "forward",
      "compose",
      "receive"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "Files with customer bank details must be protected. Always _____ them before sending so that hackers cannot read the information.",
    "options": [
      "forward",
      "reply",
      "encrypt",
      "cc"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "If you no longer want our weekly offers, you can _____ at any time. Just click the link at the bottom of the e-mail.",
    "options": [
      "compose",
      "unsubscribe",
      "encrypt",
      "archive"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "I will be at a trade fair in Berlin all next week. I will set up an _____ to tell people when I return.",
    "options": [
      "attachment",
      "inbox",
      "newsletter",
      "auto-reply"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "The customer wants her manager to see our answer too. Please _____ him on the e-mail when you reply.",
    "options": [
      "delete",
      "filter",
      "cc",
      "receive"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "To protect the guests' privacy, please hide their e-mail addresses. You should _____ everyone instead of listing all the names in the To line.",
    "options": [
      "bcc",
      "receive",
      "archive",
      "delete"
    ],
    "answer": 0,
    "vocabIndex": 6
  }
];

const LOOKUP = {
  "inbox": {
    "pos": "n.",
    "en_def": "the folder where new e-mails arrive",
    "cn_def": "收件匣"
  },
  "outbox": {
    "pos": "n.",
    "en_def": "the folder that holds e-mails waiting to be sent",
    "cn_def": "寄件匣"
  },
  "sent": {
    "pos": "adj.",
    "en_def": "already mailed out (used for e-mails you have mailed)",
    "cn_def": "已寄出的；寄件備份的"
  },
  "draft": {
    "pos": "n.",
    "en_def": "an e-mail that is written but not mailed yet",
    "cn_def": "草稿"
  },
  "attachment": {
    "pos": "n.",
    "en_def": "a file that is mailed together with an e-mail",
    "cn_def": "附件"
  },
  "cc": {
    "pos": "v.",
    "en_def": "to send a copy of an e-mail to another person",
    "cn_def": "以副本寄送"
  },
  "bcc": {
    "pos": "v.",
    "en_def": "to send a copy of an e-mail secretly, so others cannot see the address",
    "cn_def": "以密件副本寄送"
  },
  "subject": {
    "pos": "n.",
    "en_def": "the short title of an e-mail that tells what it is about",
    "cn_def": "主旨"
  },
  "signature": {
    "pos": "n.",
    "en_def": "the name and contact details added at the end of every e-mail",
    "cn_def": "簽名檔"
  },
  "reply": {
    "pos": "v.",
    "en_def": "to answer an e-mail or message",
    "cn_def": "回覆"
  },
  "forward": {
    "pos": "v.",
    "en_def": "to send an e-mail you received to another person",
    "cn_def": "轉寄"
  },
  "compose": {
    "pos": "v.",
    "en_def": "to write an e-mail or message",
    "cn_def": "撰寫"
  },
  "send": {
    "pos": "v.",
    "en_def": "to make a message or letter go to someone",
    "cn_def": "寄送；發送"
  },
  "receive": {
    "pos": "v.",
    "en_def": "to get something that someone mails or gives you",
    "cn_def": "收到"
  },
  "delete": {
    "pos": "v.",
    "en_def": "to remove something from a computer",
    "cn_def": "刪除"
  },
  "archive": {
    "pos": "v.",
    "en_def": "to store old e-mails in a safe place so you can find them later",
    "cn_def": "封存；歸檔"
  },
  "spam": {
    "pos": "n.",
    "en_def": "unwanted e-mails, usually advertisements, mailed to many people",
    "cn_def": "垃圾郵件"
  },
  "filter": {
    "pos": "v.",
    "en_def": "to sort or block messages automatically",
    "cn_def": "過濾"
  },
  "thread": {
    "pos": "n.",
    "en_def": "a series of e-mails that answer each other on one topic",
    "cn_def": "郵件串；討論串"
  },
  "newsletter": {
    "pos": "n.",
    "en_def": "a regular report with news mailed to members or customers",
    "cn_def": "電子報；通訊"
  },
  "notification": {
    "pos": "n.",
    "en_def": "a message that tells you something has happened",
    "cn_def": "通知"
  },
  "account": {
    "pos": "n.",
    "en_def": "a personal record that lets you use an e-mail or online service",
    "cn_def": "帳號；帳戶"
  },
  "password": {
    "pos": "n.",
    "en_def": "a secret word you type to enter a computer system",
    "cn_def": "密碼"
  },
  "login": {
    "pos": "n.",
    "en_def": "the name and details you use to enter a computer system",
    "cn_def": "登入帳號；登入資訊"
  },
  "logout": {
    "pos": "n.",
    "en_def": "the act of leaving a computer system",
    "cn_def": "登出"
  },
  "server": {
    "pos": "n.",
    "en_def": "a main computer that stores and sends e-mails for many users",
    "cn_def": "伺服器"
  },
  "provider": {
    "pos": "n.",
    "en_def": "a company that offers a service such as e-mail or internet",
    "cn_def": "供應商；服務業者"
  },
  "client": {
    "pos": "n.",
    "en_def": "a computer program used to read and write e-mails",
    "cn_def": "用戶端程式"
  },
  "mailbox": {
    "pos": "n.",
    "en_def": "the storage space where your e-mails are kept",
    "cn_def": "信箱"
  },
  "delivery": {
    "pos": "n.",
    "en_def": "the act of a message reaching the person it was meant for",
    "cn_def": "送達；投遞"
  },
  "bounce": {
    "pos": "v.",
    "en_def": "(of an e-mail) to come back because it cannot be delivered",
    "cn_def": "（郵件）被退回"
  },
  "encrypt": {
    "pos": "v.",
    "en_def": "to change information into a secret code so others cannot read it",
    "cn_def": "加密"
  },
  "unsubscribe": {
    "pos": "v.",
    "en_def": "to stop getting e-mails from a company or list",
    "cn_def": "取消訂閱"
  },
  "auto-reply": {
    "pos": "n.",
    "en_def": "an answer that is mailed automatically when you are away",
    "cn_def": "自動回覆"
  }
};

const EXTRA_GLOSSES = {};
