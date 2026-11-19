// Topic 421 Quiz Data: Typing 打字
// Source word list: https://www.examword.com/group-topic/typing — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T421 - Typing 打字",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "keyboard",
    "pos": "n.",
    "cn_def": "鍵盤",
    "en_def": "the set of keys you press to type on a computer",
    "sentence": "A: Why did you arrive at the office so early this morning when your meeting with the sales team doesn't start until ten o'clock? B: My old {{BLANK}} stopped working yesterday afternoon, so I wanted to set up the new one from the supply room before the clients send their orders.",
    "cn": "A：你的業務團隊會議十點才開始，為什麼你今天早上這麼早就到辦公室？ B：我的舊【鍵盤】昨天下午壞了，所以我想在客戶寄訂單來之前，先把備品室拿來的新鍵盤裝好。"
  },
  {
    "word": "key",
    "pos": "n.",
    "cn_def": "按鍵",
    "en_def": "one of the buttons on a keyboard",
    "sentence": "A: I keep typing the wrong numbers on this sales report, and my manager wants it finished before lunch, so can you help me figure out what is going on? B: The number seven {{BLANK}} on your laptop is stuck, so press it harder or use the number pad on the right side instead.",
    "cn": "A：我一直在這份銷售報告上打錯數字，經理要我午餐前完成，你能幫我看看是怎麼回事嗎？ B：你筆電上的數字七【按鍵】卡住了，所以要用力一點按，或者改用右邊的數字鍵盤。"
  },
  {
    "word": "character",
    "pos": "n.",
    "cn_def": "字元；字符",
    "en_def": "a single letter, number, or symbol",
    "sentence": "A: The online form for the conference keeps rejecting my company description, even though I checked the spelling twice and the internet connection seems fine today. B: Every {{BLANK}} counts in that box, including spaces and commas, and the limit is two hundred, so you will need to shorten your description before the registration deadline tonight.",
    "cn": "A：會議的線上報名表一直拒絕我的公司簡介，雖然我拼字檢查了兩次，今天網路連線看起來也正常。 B：那個欄位裡每一個【字元】都會被計算，包括空格和逗號，上限是兩百個，所以你需要在今晚報名截止前縮短你的簡介。"
  },
  {
    "word": "letter",
    "pos": "n.",
    "cn_def": "字母",
    "en_def": "one of the signs such as A, B, or C used in writing",
    "sentence": "A: Why does the system say my password is too weak when I already used my birthday and my daughter's name together? B: Our IT department now requires at least one capital {{BLANK}}, one number, and one symbol, so add those and try logging in again before your shift starts.",
    "cn": "A：我已經把我的生日和女兒的名字組合在一起了，為什麼系統還說我的密碼太弱？ B：我們資訊部門現在要求至少一個大寫【字母】、一個數字和一個符號，所以在你上班前加上這些再試著登入一次。"
  },
  {
    "word": "word",
    "pos": "n.",
    "cn_def": "字；單字",
    "en_def": "a single unit of language that has meaning",
    "sentence": "A: How long should the product description for our new coffee machine be, because the marketing team wants it on the website by Friday? B: Please make sure each {{BLANK}} is simple and clear, and keep the whole text short enough for customers to read on their phones while they are waiting in line.",
    "cn": "A：我們新咖啡機的產品介紹應該寫多長？行銷團隊希望週五前放上網站。 B：請確保每一個【字】都簡單清楚，並且讓整篇文字短到顧客排隊時能用手機讀完。"
  },
  {
    "word": "sentence",
    "pos": "n.",
    "cn_def": "句子",
    "en_def": "a group of words that expresses a complete thought",
    "sentence": "A: Could you look at my email to the hotel before I send it, because I am worried that it sounds a little rude? B: It is mostly polite, but the first {{BLANK}} is too long and confusing, so split it into two parts and add a friendly greeting at the beginning.",
    "cn": "A：在我寄出給飯店的電子郵件之前，你能幫我看一下嗎？我擔心聽起來有點沒禮貌。 B：大部分都很有禮貌，但第一個【句子】太長又令人困惑，所以把它拆成兩部分，並在開頭加上友善的問候。"
  },
  {
    "word": "paragraph",
    "pos": "n.",
    "cn_def": "段落",
    "en_def": "a part of a piece of writing that starts on a new line and is about one idea",
    "sentence": "A: The annual report looks great, but the director said the section about our new branch in Kaohsiung is hard to follow. B: I agree, so let's add a short {{BLANK}} that explains the opening date, the number of staff, and the sales goals for next year.",
    "cn": "A：年度報告看起來很棒，但主任說關於我們高雄新分店的部分很難理解。 B：我同意，所以我們加一段簡短的【段落】，說明開幕日期、員工人數和明年的銷售目標。"
  },
  {
    "word": "document",
    "pos": "n.",
    "cn_def": "文件",
    "en_def": "a piece of written work, often saved on a computer",
    "sentence": "A: Where did you put the contract for the new supplier, because the lawyer is coming this afternoon and needs to read it carefully? B: I typed the whole {{BLANK}} last night and saved it in the shared folder, so you can open it and print a copy for her.",
    "cn": "A：你把新供應商的合約放在哪裡？律師今天下午要來，需要仔細閱讀。 B：我昨晚把整份【文件】打好並存在共用資料夾裡，所以你可以打開並印一份給她。"
  },
  {
    "word": "screen",
    "pos": "n.",
    "cn_def": "螢幕",
    "en_def": "the flat surface of a computer or TV where you see pictures and words",
    "sentence": "A: Why are you sitting so close to your computer today, and are you having trouble reading the sales figures that the manager sent? B: The {{BLANK}} on my laptop is very dark after the update, so I cannot see the small numbers unless I lean forward.",
    "cn": "A：你今天為什麼坐得離電腦那麼近？是看不清楚經理寄來的銷售數字嗎？ B：更新之後我筆電的【螢幕】變得很暗，所以除非我往前靠，否則看不到那些小數字。"
  },
  {
    "word": "cursor",
    "pos": "n.",
    "cn_def": "游標",
    "en_def": "the small moving line or arrow on a screen that shows where you are typing",
    "sentence": "A: I am trying to add the client's phone number to this form, but whatever I type appears in the wrong box, so what am I doing wrong? B: You need to click inside the right box first so that the {{BLANK}} moves there, and then your typing will appear in the place you want.",
    "cn": "A：我想在這份表單加上客戶的電話號碼，但不管我打什麼都出現在錯的欄位，我做錯了什麼？ B：你必須先點進正確的欄位，讓【游標】移到那裡，這樣你打的字才會出現在你想要的位置。"
  },
  {
    "word": "space",
    "pos": "n.",
    "cn_def": "空格；空白",
    "en_def": "an empty place between words or letters",
    "sentence": "A: The delivery company says our address labels look strange, and some packages came back to the warehouse last week. B: There is no {{BLANK}} between the street name and the building number, so the computer reads them as one long word and the drivers get confused.",
    "cn": "A：貨運公司說我們的地址標籤看起來很奇怪，而且上週有些包裹被退回倉庫。 B：街道名稱和門牌號碼之間沒有【空格】，所以電腦把它們讀成一個很長的字，司機就搞混了。"
  },
  {
    "word": "spacebar",
    "pos": "n.",
    "cn_def": "空白鍵",
    "en_def": "the long key at the bottom of a keyboard that makes a space",
    "sentence": "A: Why does your keyboard make such a loud noise every time you finish a word, and is it bothering the people sitting near you? B: The {{BLANK}} on this old keyboard is broken and clicks loudly, so I have already asked the office manager to order a new one for me.",
    "cn": "A：為什麼你每打完一個字鍵盤就發出很大的聲音？會吵到坐你附近的人嗎？ B：這個舊鍵盤的【空白鍵】壞了，按下去會很大聲，所以我已經請辦公室經理幫我訂一個新的。"
  },
  {
    "word": "enter",
    "pos": "v.",
    "cn_def": "輸入",
    "en_def": "to type information into a computer",
    "sentence": "A: How do I add the new customers from yesterday's trade show to our sales system before the meeting on Monday? B: Just {{BLANK}} their names, phone numbers, and email addresses in the blue form, and the system will send each person a welcome message automatically.",
    "cn": "A：我要怎麼在週一開會前把昨天商展的新客戶加進銷售系統？ B：只要在藍色表單裡【輸入】他們的姓名、電話號碼和電子郵件地址，系統就會自動寄歡迎訊息給每個人。"
  },
  {
    "word": "delete",
    "pos": "v.",
    "cn_def": "刪除",
    "en_def": "to remove words or files from a computer",
    "sentence": "A: My inbox is so full that I cannot receive any new messages from clients, so what should I do before the important order arrives? B: You should {{BLANK}} the old newsletters and advertisements that you never read, and then move the important emails into separate folders.",
    "cn": "A：我的收件匣滿到無法再收到客戶的新訊息，在重要訂單寄來前我該怎麼辦？ B：你應該【刪除】那些你從來沒讀過的舊電子報和廣告，然後把重要郵件移到不同的資料夾。"
  },
  {
    "word": "erase",
    "pos": "v.",
    "cn_def": "擦掉；清除",
    "en_def": "to remove writing or recorded information completely",
    "sentence": "A: Someone wrote the wrong meeting time on the whiteboard in the training room, and now the new employees are confused. B: I will {{BLANK}} it right away and write ten-thirty instead, and then I will send everyone a short message so they arrive on time.",
    "cn": "A：有人在訓練教室的白板上寫錯了會議時間，現在新員工都很困惑。 B：我馬上把它【擦掉】，改寫成十點半，然後我會傳一則簡短訊息給大家，讓他們準時到。"
  },
  {
    "word": "edit",
    "pos": "v.",
    "cn_def": "編輯；修改",
    "en_def": "to change and improve a piece of writing",
    "sentence": "A: The newsletter for our customers is almost ready, but I am not sure if the dates and prices in the second section are right. B: Send it to me before lunch, and I will {{BLANK}} it carefully, fix any mistakes, and return it to you before the designer starts working on it.",
    "cn": "A：給客戶的電子報快完成了，但我不確定第二部分的日期和價格是否正確。 B：午餐前寄給我，我會仔細【編輯】，修正錯誤，並在設計師開始處理前還給你。"
  },
  {
    "word": "correct",
    "pos": "v.",
    "cn_def": "改正；更正",
    "en_def": "to make something right by fixing mistakes",
    "sentence": "A: The price list we sent to the restaurant last week shows the wrong cost for our olive oil, and the owner is upset. B: Let's {{BLANK}} the mistake today, send the restaurant a new list with an apology, and offer the owner a small discount on the next order.",
    "cn": "A：我們上週寄給餐廳的價目表上橄欖油價格錯了，老闆很不高興。 B：我們今天就【更正】這個錯誤，寄一份新的價目表和道歉信給餐廳，並在下次訂單給老闆一點小折扣。"
  },
  {
    "word": "mistake",
    "pos": "n.",
    "cn_def": "錯誤",
    "en_def": "something that is done wrongly",
    "sentence": "A: Why did the bank call our office this morning, and is there a problem with the payment to the furniture supplier? B: I made a typing {{BLANK}} in the account number yesterday, so the money was sent back, and I need to fill out the form again.",
    "cn": "A：銀行今天早上為什麼打電話來辦公室？付給家具供應商的款項有問題嗎？ B：我昨天在帳號上打字出了【錯】，所以錢被退回了，我需要重新填寫表格。"
  },
  {
    "word": "error",
    "pos": "n.",
    "cn_def": "錯誤；差錯",
    "en_def": "a mistake, especially in a computer system or document",
    "sentence": "A: I tried to send the monthly sales report to the head office, but the system would not accept the file, so what happened? B: There was an {{BLANK}} in the date format, because the system needs the year first, so change it and upload the report again.",
    "cn": "A：我想把月銷售報告寄到總公司，但系統不接受檔案，發生了什麼事？ B：日期格式有【錯誤】，因為系統需要年份放在最前面，所以改過來再重新上傳報告。"
  },
  {
    "word": "speed",
    "pos": "n.",
    "cn_def": "速度",
    "en_def": "how fast something moves or happens",
    "sentence": "A: The job advertisement for the receptionist position says that applicants must take a typing test, so what exactly do they check? B: They check your typing {{BLANK}}, and you need to type at least forty words per minute without many mistakes to pass the test.",
    "cn": "A：接待員職缺的徵才廣告說應徵者必須參加打字測驗，他們到底檢查什麼？ B：他們會檢查你的打字【速度】，你必須每分鐘至少打四十個字，而且錯誤不能太多才能通過測驗。"
  },
  {
    "word": "accurate",
    "pos": "adj.",
    "cn_def": "準確的；精確的",
    "en_def": "correct and without mistakes",
    "sentence": "A: Our accountant said the numbers in the invoice I typed yesterday were different from the numbers in the original order. B: You need to be more {{BLANK}} when you type prices, so please check each number twice before you send any invoice to a customer.",
    "cn": "A：我們的會計說我昨天打的發票上的數字跟原始訂單上的不一樣。 B：你打價格時需要更【精確】，所以在寄任何發票給客戶之前，請每個數字檢查兩次。"
  },
  {
    "word": "fast",
    "pos": "adj.",
    "cn_def": "快的",
    "en_def": "able to move or do something quickly",
    "sentence": "A: Who should we ask to take notes during the meeting with the Japanese buyers tomorrow, since they will be talking a lot? B: Ask Amy, because she is a very {{BLANK}} typist, and she can write down almost everything people say without asking them to repeat it.",
    "cn": "A：明天和日本買家開會時，我們應該請誰做筆記？他們會講很多話。 B：請Amy，因為她打字非常【快】，幾乎可以把大家說的每句話都打下來，不用請他們重複。"
  },
  {
    "word": "slow",
    "pos": "adj.",
    "cn_def": "慢的",
    "en_def": "not quick; taking a long time",
    "sentence": "A: Why are you still working on the shipping list when everyone else has already gone home for the weekend? B: My computer has been very {{BLANK}} all afternoon, so every page takes a long time to open, and I could not finish typing the list on time.",
    "cn": "A：大家都已經回家過週末了，你為什麼還在弄出貨清單？ B：我的電腦整個下午都很【慢】，每一頁都要很久才能打開，所以我沒辦法準時打完清單。"
  },
  {
    "word": "practice",
    "pos": "v.",
    "cn_def": "練習",
    "en_def": "to do something again and again to get better at it",
    "sentence": "A: I want to apply for the assistant job at the law firm, but I am worried because my typing is not very good yet. B: You should {{BLANK}} for thirty minutes every evening with a free typing website, and in a few weeks you will be much faster and more confident.",
    "cn": "A：我想應徵律師事務所的助理工作，但我很擔心，因為我打字還不太好。 B：你應該每天晚上用免費的打字網站【練習】三十分鐘，幾個星期後你就會快很多，也更有自信。"
  },
  {
    "word": "train",
    "pos": "v.",
    "cn_def": "訓練；培訓",
    "en_def": "to teach someone the skills for a job",
    "sentence": "A: The new receptionists start next Monday, but none of them have used our booking system before, so what is the plan? B: Our supervisor will {{BLANK}} them for two days, showing them how to type guest details quickly and how to check room availability.",
    "cn": "A：新的接待員下週一開始上班，但他們都沒用過我們的訂房系統，計畫是什麼？ B：我們的主管會【訓練】他們兩天，教他們如何快速輸入客人資料以及如何查詢空房。"
  },
  {
    "word": "touch typing",
    "pos": "n.phr.",
    "cn_def": "盲打",
    "en_def": "typing without looking at the keys",
    "sentence": "A: How can you type so quickly without ever looking down at the keyboard, even when you are talking on the phone? B: I learned {{BLANK}} in a short course at college, so my fingers remember where every key is, and my eyes can stay on the screen.",
    "cn": "A：你怎麼能打字打那麼快卻從來不看鍵盤，甚至在講電話時也一樣？ B：我在大學上過一個短期課程學會了【盲打】，所以我的手指記得每個鍵在哪裡，眼睛可以一直看著螢幕。"
  },
  {
    "word": "copy",
    "pos": "v.",
    "cn_def": "複製",
    "en_def": "to make the same text appear in another place",
    "sentence": "A: The customer's address is very long and full of numbers, and I am afraid I will type it wrong on the delivery form. B: Just {{BLANK}} it from her email and paste it into the form, which is much faster and safer than typing it again by yourself.",
    "cn": "A：這位客戶的地址很長又有很多數字，我怕我在送貨單上打錯。 B：直接從她的電子郵件【複製】，再貼到表單上，這比自己重打快多了也安全多了。"
  },
  {
    "word": "format",
    "pos": "v.",
    "cn_def": "編排格式；排版",
    "en_def": "to arrange the design and layout of a document",
    "sentence": "A: The report looks messy because every page uses different fonts and sizes, and the director wants to read it this afternoon. B: I will {{BLANK}} the whole report with the company template so that all the headings, fonts, and page numbers look the same.",
    "cn": "A：這份報告看起來很亂，因為每一頁的字型和大小都不一樣，而主任今天下午就要看。 B：我會用公司範本把整份報告【排版】，讓所有標題、字型和頁碼看起來都一致。"
  },
  {
    "word": "save",
    "pos": "v.",
    "cn_def": "儲存",
    "en_def": "to keep a computer file so you do not lose it",
    "sentence": "A: The power went off for a few minutes during the storm, and now I cannot find the proposal I was typing all morning. B: That is why you should {{BLANK}} your work every ten minutes, but let's check the recovery folder because the program may have kept a copy.",
    "cn": "A：暴風雨時停電了幾分鐘，現在我找不到我整個早上在打的提案。 B：這就是為什麼你應該每十分鐘【儲存】一次，不過我們先查看復原資料夾，因為程式可能保留了一份副本。"
  },
  {
    "word": "print",
    "pos": "v.",
    "cn_def": "列印",
    "en_def": "to produce a paper copy of a document from a computer",
    "sentence": "A: The visitors from the bank are arriving at two o'clock, and each of them will need the meeting agenda in their hands. B: I will {{BLANK}} ten copies of the agenda right now and put them on the table in the conference room before they get here.",
    "cn": "A：銀行的訪客兩點會到，他們每個人都需要手上拿著會議議程。 B：我現在就【列印】十份議程，在他們到之前放在會議室的桌上。"
  },
  {
    "word": "upload",
    "pos": "v.",
    "cn_def": "上傳",
    "en_def": "to send a file from your computer to the internet",
    "sentence": "A: The hiring manager asked me to send my résumé, but the email keeps bouncing back because the file is too large. B: You can {{BLANK}} it directly to the company's job website instead, and the system will send you a message when the manager receives it.",
    "cn": "A：招募經理要我寄履歷，但因為檔案太大，郵件一直被退回。 B：你可以改成直接把它【上傳】到公司的徵才網站，經理收到時系統會傳訊息通知你。"
  },
  {
    "word": "download",
    "pos": "v.",
    "cn_def": "下載",
    "en_def": "to move a file from the internet to your computer",
    "sentence": "A: Where can I find the new expense form, because I need to fill it out and hand it in to the accountant before Friday? B: You can {{BLANK}} it from the staff website, type your travel costs into the boxes, and then send it to her by email.",
    "cn": "A：我在哪裡可以找到新的報帳表？我需要在週五前填好交給會計。 B：你可以從員工網站【下載】，把你的差旅費用打進欄位裡，然後用電子郵件寄給她。"
  },
  {
    "word": "quickly",
    "pos": "adv.",
    "cn_def": "快速地",
    "en_def": "in a fast way",
    "sentence": "A: The client wants a written summary of today's meeting before she flies back to Singapore this evening, so how can we manage? B: I took notes during the meeting, so I can type them up {{BLANK}} and send her a clear summary within an hour.",
    "cn": "A：客戶希望在她今晚飛回新加坡之前收到今天會議的書面摘要，我們要怎麼辦？ B：我開會時有做筆記，所以我可以【快速地】把它們打出來，一小時內寄給她一份清楚的摘要。"
  },
  {
    "word": "carefully",
    "pos": "adv.",
    "cn_def": "仔細地；小心地",
    "en_def": "with great attention to avoid mistakes",
    "sentence": "A: This contract has many numbers and dates, and if there is a single mistake, our company might lose a lot of money. B: Then type it {{BLANK}}, read it again slowly when you finish, and ask the lawyer to check it before anyone signs it.",
    "cn": "A：這份合約有很多數字和日期，如果有任何一個錯誤，我們公司可能會損失很多錢。 B：那就【仔細地】打，打完後再慢慢讀一遍，並在任何人簽名前請律師檢查。"
  }
];

const MCQS = [
  {
    "q": "Mark spilled coffee on his desk this morning. Several keys on his _____ stopped working, so he borrowed a spare one from the IT office.",
    "options": [
      "keyboard",
      "paragraph",
      "cursor",
      "sentence"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Press the Enter _____ after you type your employee number. The system will then show your work schedule for the coming week.",
    "options": [
      "letter",
      "document",
      "key",
      "speed"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Each new password must contain at least one special _____, such as @ or #. This rule helps protect staff accounts from hackers.",
    "options": [
      "paragraph",
      "character",
      "document",
      "screen"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Please begin every product name with a capital _____ in the new catalog. The designer will copy the names exactly as you type them.",
    "options": [
      "space",
      "speed",
      "mistake",
      "letter"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Do not use a single difficult _____ in the customer notice. Many of our readers are not native speakers of English.",
    "options": [
      "cursor",
      "spacebar",
      "word",
      "speed"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Your email has one very long _____ with no periods at all. Please split it into three shorter ones before sending it.",
    "options": [
      "sentence",
      "keyboard",
      "cursor",
      "speed"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The report has a short opening _____ that explains the project goals. The rest of the pages show the detailed sales data.",
    "options": [
      "cursor",
      "spacebar",
      "speed",
      "paragraph"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Please attach the signed _____ to your email before sending it to the lawyer. She needs the complete file by Thursday afternoon.",
    "options": [
      "cursor",
      "document",
      "spacebar",
      "character"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The meeting room has a large _____ on the wall for presentations. Speakers can connect their laptops to it with one cable.",
    "options": [
      "screen",
      "letter",
      "sentence",
      "speed"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Click where you want to add the new text. The blinking _____ will move there and show where your typing begins.",
    "options": [
      "paragraph",
      "letter",
      "cursor",
      "document"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Always leave one _____ after a comma in our reports. Text without gaps between words is hard for readers to follow.",
    "options": [
      "cursor",
      "space",
      "keyboard",
      "screen"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "New staff must _____ their working hours into the online system every Friday. Late records may delay their monthly salary payment.",
    "options": [
      "delete",
      "print",
      "download",
      "enter"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Please _____ any customer files that are older than ten years. Keeping them breaks the company's new privacy rules.",
    "options": [
      "enter",
      "train",
      "delete",
      "practice"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Before the brochure is printed, the marketing manager will _____ the text. She usually removes extra words and fixes the grammar.",
    "options": [
      "edit",
      "download",
      "enter",
      "upload"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The accountant asked me to _____ two errors in the invoice. The new version must be sent to the client before five today.",
    "options": [
      "download",
      "upload",
      "enter",
      "correct"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Ken made a small _____ when he typed the customer's phone number. As a result, the delivery driver could not contact her.",
    "options": [
      "cursor",
      "mistake",
      "paragraph",
      "keyboard"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The system displayed a strange _____ message this morning. The IT team says the problem will be fixed by noon.",
    "options": [
      "error",
      "letter",
      "keyboard",
      "paragraph"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Applicants must type at a _____ of forty words per minute. The test takes place in the training room on Monday.",
    "options": [
      "space",
      "character",
      "speed",
      "screen"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The figures in this financial report must be completely _____. Investors will use them to decide whether to support the project.",
    "options": [
      "slow",
      "accurate",
      "fast",
      "careless"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Jenny is the most _____ typist in our department. She can finish a ten-page report in less than an hour.",
    "options": [
      "slow",
      "empty",
      "quiet",
      "fast"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "If you _____ typing for twenty minutes every day, your speed will improve. Many free websites offer useful lessons for beginners.",
    "options": [
      "delete",
      "upload",
      "practice",
      "format"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "You can _____ the client's address from her email and paste it into the form. This saves time and prevents typing mistakes.",
    "options": [
      "copy",
      "erase",
      "delete",
      "train"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Please _____ the report using the official company template. All headings should use the same font and size.",
    "options": [
      "download",
      "erase",
      "enter",
      "format"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Remember to _____ your file often while you work on the proposal. If the power goes off, you might lose everything.",
    "options": [
      "erase",
      "save",
      "delete",
      "print"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Could you _____ twenty copies of the agenda before the meeting starts? Each visitor should have one on the table.",
    "options": [
      "print",
      "delete",
      "erase",
      "upload"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "Applicants should _____ their résumés to our website by Friday. We no longer accept paper applications sent by mail.",
    "options": [
      "download",
      "erase",
      "upload",
      "format"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Staff can _____ the new holiday request form from the company website. Fill it out and give it to your manager.",
    "options": [
      "upload",
      "download",
      "erase",
      "enter"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The customer needed the price list _____, so Amy typed it in only ten minutes. She emailed it before the store closed.",
    "options": [
      "carefully",
      "slowly",
      "rarely",
      "quickly"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "Read the contract _____ before you sign it. Even a small typing mistake could cost the company a lot of money.",
    "options": [
      "loudly",
      "rarely",
      "carefully",
      "lately"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The IT department will _____ new employees to use the booking system. The two-day course starts next Tuesday morning.",
    "options": [
      "train",
      "delete",
      "print",
      "erase"
    ],
    "answer": 0,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "keyboard": {
    "pos": "n.",
    "en_def": "the set of keys you press to type on a computer",
    "cn_def": "鍵盤"
  },
  "key": {
    "pos": "n.",
    "en_def": "one of the buttons on a keyboard",
    "cn_def": "按鍵"
  },
  "character": {
    "pos": "n.",
    "en_def": "a single letter, number, or symbol",
    "cn_def": "字元；字符"
  },
  "letter": {
    "pos": "n.",
    "en_def": "one of the signs such as A, B, or C used in writing",
    "cn_def": "字母"
  },
  "word": {
    "pos": "n.",
    "en_def": "a single unit of language that has meaning",
    "cn_def": "字；單字"
  },
  "sentence": {
    "pos": "n.",
    "en_def": "a group of words that expresses a complete thought",
    "cn_def": "句子"
  },
  "paragraph": {
    "pos": "n.",
    "en_def": "a part of a piece of writing that starts on a new line and is about one idea",
    "cn_def": "段落"
  },
  "document": {
    "pos": "n.",
    "en_def": "a piece of written work, often saved on a computer",
    "cn_def": "文件"
  },
  "screen": {
    "pos": "n.",
    "en_def": "the flat surface of a computer or TV where you see pictures and words",
    "cn_def": "螢幕"
  },
  "cursor": {
    "pos": "n.",
    "en_def": "the small moving line or arrow on a screen that shows where you are typing",
    "cn_def": "游標"
  },
  "space": {
    "pos": "n.",
    "en_def": "an empty place between words or letters",
    "cn_def": "空格；空白"
  },
  "spacebar": {
    "pos": "n.",
    "en_def": "the long key at the bottom of a keyboard that makes a space",
    "cn_def": "空白鍵"
  },
  "enter": {
    "pos": "v.",
    "en_def": "to type information into a computer",
    "cn_def": "輸入"
  },
  "delete": {
    "pos": "v.",
    "en_def": "to remove words or files from a computer",
    "cn_def": "刪除"
  },
  "erase": {
    "pos": "v.",
    "en_def": "to remove writing or recorded information completely",
    "cn_def": "擦掉；清除"
  },
  "edit": {
    "pos": "v.",
    "en_def": "to change and improve a piece of writing",
    "cn_def": "編輯；修改"
  },
  "correct": {
    "pos": "v.",
    "en_def": "to make something right by fixing mistakes",
    "cn_def": "改正；更正"
  },
  "mistake": {
    "pos": "n.",
    "en_def": "something that is done wrongly",
    "cn_def": "錯誤"
  },
  "error": {
    "pos": "n.",
    "en_def": "a mistake, especially in a computer system or document",
    "cn_def": "錯誤；差錯"
  },
  "speed": {
    "pos": "n.",
    "en_def": "how fast something moves or happens",
    "cn_def": "速度"
  },
  "accurate": {
    "pos": "adj.",
    "en_def": "correct and without mistakes",
    "cn_def": "準確的；精確的"
  },
  "fast": {
    "pos": "adj.",
    "en_def": "able to move or do something quickly",
    "cn_def": "快的"
  },
  "slow": {
    "pos": "adj.",
    "en_def": "not quick; taking a long time",
    "cn_def": "慢的"
  },
  "practice": {
    "pos": "v.",
    "en_def": "to do something again and again to get better at it",
    "cn_def": "練習"
  },
  "train": {
    "pos": "v.",
    "en_def": "to teach someone the skills for a job",
    "cn_def": "訓練；培訓"
  },
  "touch typing": {
    "pos": "n.phr.",
    "en_def": "typing without looking at the keys",
    "cn_def": "盲打"
  },
  "copy": {
    "pos": "v.",
    "en_def": "to make the same text appear in another place",
    "cn_def": "複製"
  },
  "format": {
    "pos": "v.",
    "en_def": "to arrange the design and layout of a document",
    "cn_def": "編排格式；排版"
  },
  "save": {
    "pos": "v.",
    "en_def": "to keep a computer file so you do not lose it",
    "cn_def": "儲存"
  },
  "print": {
    "pos": "v.",
    "en_def": "to produce a paper copy of a document from a computer",
    "cn_def": "列印"
  },
  "upload": {
    "pos": "v.",
    "en_def": "to send a file from your computer to the internet",
    "cn_def": "上傳"
  },
  "download": {
    "pos": "v.",
    "en_def": "to move a file from the internet to your computer",
    "cn_def": "下載"
  },
  "quickly": {
    "pos": "adv.",
    "en_def": "in a fast way",
    "cn_def": "快速地"
  },
  "carefully": {
    "pos": "adv.",
    "en_def": "with great attention to avoid mistakes",
    "cn_def": "仔細地；小心地"
  }
};

const EXTRA_GLOSSES = {};
