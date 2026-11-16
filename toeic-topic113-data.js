// Topic 113 Quiz Data: E-books 電子書
// Source word list: https://www.examword.com/group-topic/e-books — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T113 - E-books 電子書",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "e-book",
    "pos": "n.",
    "cn_def": "電子書",
    "en_def": "an electronic version of a book that you read on a screen",
    "sentence": "A: Our training team wants every new employee to read the customer service handbook before their first week, but printing two hundred copies seems expensive and slow. B: Why don't we turn the handbook into an {{BLANK}} and email it to everyone, so they can read it on their phones during the commute?",
    "cn": "A：我們的訓練團隊希望每位新進員工在第一週前讀完客服手冊，但印兩百本似乎又貴又慢。 B：我們何不把手冊做成【電子書】，再用電子郵件寄給大家，讓他們能在通勤時用手機閱讀？"
  },
  {
    "word": "e-reader",
    "pos": "n.",
    "cn_def": "電子閱讀器",
    "en_def": "a small device used for reading e-books",
    "sentence": "A: I'm flying to Singapore for the trade fair next week, and I'd like to bring some novels, but my suitcase is already full of product samples and brochures. B: You should take an {{BLANK}} instead, because it's light, the battery lasts for weeks, and it can hold hundreds of books in one small device.",
    "cn": "A：我下週要飛新加坡參加商展，想帶幾本小說，但我的行李箱已經塞滿了產品樣品和型錄。 B：你應該改帶一台【電子閱讀器】，因為它很輕，電池可以撐好幾週，而且一台小小的裝置就能裝下好幾百本書。"
  },
  {
    "word": "digital",
    "pos": "adj.",
    "cn_def": "數位的",
    "en_def": "stored or sent as computer data",
    "sentence": "A: The accounting department keeps losing paper receipts, and the auditors are coming next month to check every expense from last year. B: Let's ask everyone to scan their receipts and keep {{BLANK}} copies in the shared folder, so nothing gets lost and the auditors can find each file quickly.",
    "cn": "A：會計部門一直弄丟紙本收據，而稽核人員下個月就要來檢查去年的每一筆開支。 B：我們請大家把收據掃描起來，並把【數位】副本存在共用資料夾裡，這樣就不會遺失，稽核人員也能很快找到每個檔案。"
  },
  {
    "word": "electronic",
    "pos": "adj.",
    "cn_def": "電子的",
    "en_def": "using electricity and computer technology",
    "sentence": "A: Do customers still need to sign the paper order form at the front desk, or has the process changed since the new system was installed last month? B: They can now sign an {{BLANK}} form on the tablet at the counter, which saves paper and lets our sales staff process orders much faster.",
    "cn": "A：客人還需要在櫃台簽紙本訂購單嗎？還是自從上個月裝了新系統後流程就改了？ B：他們現在可以在櫃台的平板上簽【電子】表單，這樣既省紙，也讓我們的銷售人員處理訂單快得多。"
  },
  {
    "word": "format",
    "pos": "n.",
    "cn_def": "格式",
    "en_def": "the way a file is arranged or saved",
    "sentence": "A: The client says she can't open the sales report we sent this morning, and she needs it for her board meeting at three o'clock. B: I probably saved it in the wrong {{BLANK}}, so I'll convert it right away and send her a version that works on any computer or phone.",
    "cn": "A：客戶說她打不開我們今天早上寄的銷售報告，而她三點的董事會議需要用到。 B：我大概存成了錯誤的【格式】，所以我會馬上轉檔，寄給她一個任何電腦或手機都能開的版本。"
  },
  {
    "word": "EPUB",
    "pos": "n.",
    "cn_def": "EPUB電子書格式",
    "en_def": "a common e-book file type that fits its text to any screen size",
    "sentence": "A: The marketing team finished writing our travel guide, but which file type should we choose so readers can enjoy it on both tablets and small phone screens? B: I'd recommend {{BLANK}}, because the text adjusts automatically to any screen size, and most online bookstores and reading apps accept it.",
    "cn": "A：行銷團隊寫完了我們的旅遊指南，但我們該選哪種檔案類型，讓讀者在平板和小小的手機螢幕上都能閱讀？ B：我建議用【EPUB格式】，因為文字會自動配合任何螢幕大小調整，而且大部分線上書店和閱讀應用程式都接受。"
  },
  {
    "word": "PDF",
    "pos": "n.",
    "cn_def": "PDF檔",
    "en_def": "a file type that keeps a document's layout the same on any device",
    "sentence": "A: Should I send the signed contract to the supplier as a Word file, or is there a better way to make sure nobody can change the layout? B: Please save it as a {{BLANK}} before you attach it, because the pages will look exactly the same on every computer and it's harder to edit.",
    "cn": "A：我該把簽好的合約用Word檔寄給供應商嗎？還是有更好的方法能確保沒人能改動版面？ B：請在附加之前先存成【PDF檔】，因為頁面在每台電腦上看起來都會一模一樣，而且比較難被修改。"
  },
  {
    "word": "MOBI",
    "pos": "n.",
    "cn_def": "MOBI電子書格式（Kindle舊格式）",
    "en_def": "an older e-book file type used mainly on Kindle devices",
    "sentence": "A: Some of our older customers say the cookbook they bought from our website won't open on their Kindle devices, so what should we do? B: Let's offer a {{BLANK}} version as well, since many older Kindles were designed for that file type, and we can email it to them free of charge.",
    "cn": "A：一些老顧客說，他們從我們網站買的食譜在他們的Kindle裝置上打不開，我們該怎麼辦？ B：我們也提供【MOBI格式】的版本吧，因為很多舊型Kindle就是為那種檔案類型設計的，而且我們可以免費用電子郵件寄給他們。"
  },
  {
    "word": "download",
    "pos": "v.",
    "cn_def": "下載",
    "en_def": "to copy a file from the internet to your device",
    "sentence": "A: The sales conference starts tomorrow morning, and I'm worried the hotel Wi-Fi will be too slow to open the presentation slides. B: You should {{BLANK}} all the files to your laptop tonight, so you can show them without an internet connection, even if the hotel network goes down.",
    "cn": "A：業務研討會明天早上開始，我擔心飯店的無線網路太慢，打不開簡報投影片。 B：你應該今晚就把所有檔案【下載】到筆電裡，這樣即使飯店網路斷線，你不用連網也能展示。"
  },
  {
    "word": "upload",
    "pos": "v.",
    "cn_def": "上傳",
    "en_def": "to send a file from your device to a website or server",
    "sentence": "A: The photographer finished taking pictures of our new product line yesterday, but how will the design team in Tokyo get the files in time? B: She'll {{BLANK}} them to the company cloud folder this afternoon, and the designers can start working on the catalog as soon as they arrive tomorrow.",
    "cn": "A：攝影師昨天拍完了我們新產品系列的照片，但東京的設計團隊要怎麼及時拿到檔案？ B：她今天下午會把照片【上傳】到公司的雲端資料夾，設計師們明天一到就能開始製作型錄。"
  },
  {
    "word": "library",
    "pos": "n.",
    "cn_def": "圖書館；（數位）書庫",
    "en_def": "a collection of books that people can borrow or read",
    "sentence": "A: Is it true that employees can borrow business books for free, or do we have to buy them ourselves for the leadership course? B: The company has an online {{BLANK}} with over five hundred titles, so you just log in with your staff number and borrow whatever you need for two weeks.",
    "cn": "A：員工真的可以免費借商業書籍嗎？還是領導力課程用的書得自己買？ B：公司有一個超過五百本書的線上【圖書館】，你只要用員工編號登入，就可以借任何需要的書兩週。"
  },
  {
    "word": "annotation",
    "pos": "n.",
    "cn_def": "註解；批註",
    "en_def": "a short note added to a text to explain or comment on it",
    "sentence": "A: Did the lawyer have any comments on the new rental agreement before we send it back to the landlord on Friday? B: Yes, she added an {{BLANK}} next to the paragraph about repairs, explaining that we should ask the landlord to pay for any damage caused by old pipes.",
    "cn": "A：在我們星期五把新租約寄回給房東之前，律師有什麼意見嗎？ B：有，她在關於維修的那一段旁邊加了一則【註解】，說明我們應該要求房東負擔老舊水管造成的任何損壞。"
  },
  {
    "word": "font",
    "pos": "n.",
    "cn_def": "字型",
    "en_def": "the style and size of printed letters",
    "sentence": "A: Several older readers have complained that our monthly newsletter is hard to read, especially the small print at the bottom of each page. B: Let's choose a larger and clearer {{BLANK}} for the next issue, and we can also add more space between the lines so everything looks less crowded.",
    "cn": "A：好幾位年長讀者抱怨我們的月刊電子報很難閱讀，尤其是每頁底部的小字。 B：下一期我們就選一個更大、更清楚的【字型】，也可以加大行距，讓整體看起來不那麼擁擠。"
  },
  {
    "word": "screen",
    "pos": "n.",
    "cn_def": "螢幕",
    "en_def": "the flat surface of a device that shows pictures or words",
    "sentence": "A: Why are you holding your phone so close to your face while you read the meeting agenda that the manager sent this morning? B: I dropped it on the train yesterday, so the {{BLANK}} is cracked, and I can hardly see the words until I get it repaired at the store.",
    "cn": "A：你看經理今天早上寄來的會議議程時，為什麼把手機拿得離臉那麼近？ B：我昨天在火車上把它摔了，所以【螢幕】裂了，在拿去店裡修好之前我幾乎看不清楚字。"
  },
  {
    "word": "brightness",
    "pos": "n.",
    "cn_def": "亮度",
    "en_def": "how much light something gives off",
    "sentence": "A: My eyes feel tired after reading reports on my tablet for three hours, and I still have two more files to review before tomorrow's meeting. B: Try lowering the {{BLANK}} of the display and taking a short break every half hour, because a very strong light can make your eyes hurt.",
    "cn": "A：我在平板上看了三個小時的報告，眼睛好累，而明天開會前我還有兩個檔案要審閱。 B：試著調低顯示器的【亮度】，並且每半小時休息一下，因為太強的光線會讓眼睛不舒服。"
  },
  {
    "word": "battery",
    "pos": "n.",
    "cn_def": "電池",
    "en_def": "the part that stores power for a device",
    "sentence": "A: Can I borrow your charger before the client meeting starts, because my laptop has only five percent power left and the presentation is on it? B: Sure, but the {{BLANK}} takes almost an hour to fill completely, so plug it in now and start with the printed handouts first.",
    "cn": "A：客戶會議開始前可以借一下你的充電器嗎？我的筆電只剩百分之五的電，而簡報就存在裡面。 B：當然可以，但【電池】要將近一小時才能充滿，所以現在就插上電，先從紙本講義開始講。"
  },
  {
    "word": "storage",
    "pos": "n.",
    "cn_def": "儲存空間",
    "en_def": "space for keeping files on a device or computer",
    "sentence": "A: The new tablets we ordered for the sales team can't save all the product videos, and the staff keep getting warning messages. B: They only have thirty-two gigabytes of {{BLANK}}, so we should either buy memory cards or keep the large videos in the company's online folder instead.",
    "cn": "A：我們幫業務團隊訂的新平板存不下所有產品影片，員工一直收到警告訊息。 B：它們只有32GB的【儲存空間】，所以我們要嘛買記憶卡，要嘛把大型影片改存在公司的線上資料夾。"
  },
  {
    "word": "cloud",
    "pos": "n.",
    "cn_def": "雲端",
    "en_def": "online servers where you can keep and share files",
    "sentence": "A: What happens to all my work files if my laptop is stolen during the business trip, because I haven't made a copy of anything yet? B: Don't worry, the IT team set up automatic backups last month, so every document is saved in the {{BLANK}} and you can open it from any device.",
    "cn": "A：如果我的筆電在出差時被偷了，我所有的工作檔案會怎麼樣？我還沒有備份任何東西。 B：別擔心，資訊團隊上個月設定了自動備份，所以每份文件都存在【雲端】，你從任何裝置都能打開。"
  },
  {
    "word": "sync",
    "pos": "v.",
    "cn_def": "同步",
    "en_def": "to make the same data appear on two or more devices",
    "sentence": "A: I added the client's new phone number on my office computer this morning, but it's not showing on my phone, and I need to call her now. B: You probably need to {{BLANK}} your devices first, so tap the update button in the contacts app and wait a few seconds for the information to appear.",
    "cn": "A：我今天早上在辦公室電腦上加了客戶的新電話號碼，但手機上沒有顯示，而我現在就需要打給她。 B：你可能得先把裝置【同步】，所以在聯絡人應用程式裡點一下更新按鈕，等幾秒鐘資料就會出現。"
  },
  {
    "word": "reader",
    "pos": "n.",
    "cn_def": "讀者",
    "en_def": "a person who reads",
    "sentence": "A: Why did the publishing company decide to print a second edition of the travel guide so soon after the first one came out? B: Almost every {{BLANK}} who bought the first edition left a positive review online, so the store ran out of copies in just three weeks.",
    "cn": "A：為什麼出版公司在旅遊指南第一版出版後這麼快就決定印第二版？ B：幾乎每位買了第一版的【讀者】都在網路上留下好評，所以書店短短三週就賣光了。"
  },
  {
    "word": "interface",
    "pos": "n.",
    "cn_def": "介面",
    "en_def": "the screen design that lets a person use a program",
    "sentence": "A: Our customers keep calling the help desk because they can't find the payment button in the new shopping app we launched last week. B: The design team is already making the {{BLANK}} simpler, with bigger buttons and clearer menus, so users should find everything easily after next week's update.",
    "cn": "A：我們的顧客一直打電話到服務台，因為他們在我們上週推出的新購物應用程式裡找不到付款按鈕。 B：設計團隊已經在簡化【介面】，加大按鈕並讓選單更清楚，所以下週更新後使用者應該就能輕鬆找到所有功能。"
  },
  {
    "word": "portable",
    "pos": "adj.",
    "cn_def": "輕便的；可攜帶的",
    "en_def": "light and easy to carry",
    "sentence": "A: I need a projector for my sales presentations at different client offices next month, but the one in our meeting room is far too heavy. B: The supply office has a small {{BLANK}} model that fits in a laptop bag, so you can easily carry it on the train and set it up anywhere.",
    "cn": "A：我下個月要到不同的客戶辦公室做業務簡報，需要一台投影機，但我們會議室那台太重了。 B：庫房有一台小型【可攜式】機種，放得進筆電包，所以你可以輕鬆帶上火車，到哪裡都能架設。"
  },
  {
    "word": "accessible",
    "pos": "adj.",
    "cn_def": "可取得的；容易使用的",
    "en_def": "easy to reach, get, or use",
    "sentence": "A: How can we make sure that staff in our overseas branches can read the safety training materials, even when they work night shifts? B: We'll put everything online so the materials are {{BLANK}} twenty-four hours a day, and employees can study whenever it's convenient for them.",
    "cn": "A：我們要怎麼確保海外分公司的員工，即使上夜班也能閱讀安全訓練教材？ B：我們會把所有內容放上網，讓教材一天二十四小時都【可以取得】，員工可以在自己方便的時候學習。"
  },
  {
    "word": "interactive",
    "pos": "adj.",
    "cn_def": "互動式的",
    "en_def": "allowing users to take part and get a response",
    "sentence": "A: Last year's training videos were boring, and many new employees stopped watching them after just ten minutes, so what should we change this time? B: Let's make the course more {{BLANK}}, with short quizzes, clickable charts, and small games, so trainees stay involved and remember the information better.",
    "cn": "A：去年的訓練影片很無聊，許多新進員工看了十分鐘就不看了，這次我們該做什麼改變？ B：我們讓課程更【互動】一點，加入簡短小測驗、可點選的圖表和小遊戲，讓受訓者保持參與並記得更牢。"
  },
  {
    "word": "searchable",
    "pos": "adj.",
    "cn_def": "可搜尋的",
    "en_def": "able to be searched by a computer",
    "sentence": "A: The old customer contracts are stored as photos, so I spend hours looking through them whenever a client asks about a specific payment term. B: The new software will turn every page into {{BLANK}} text, so you can type a keyword and find the right paragraph in seconds.",
    "cn": "A：舊的客戶合約都是以照片存檔，所以每當客戶詢問某個付款條件時，我都要花好幾個小時翻找。 B：新軟體會把每一頁轉成【可搜尋的】文字，你只要輸入關鍵字，幾秒鐘就能找到正確的段落。"
  },
  {
    "word": "subscription",
    "pos": "n.",
    "cn_def": "訂閱",
    "en_def": "a regular payment to receive a product or service",
    "sentence": "A: Do we really need to buy each business magazine separately for the staff lounge, or is there a cheaper option that our budget can cover? B: We could pay for a yearly {{BLANK}} to a digital reading service, which gives everyone unlimited access to hundreds of magazines for a fixed monthly cost.",
    "cn": "A：我們真的需要為員工休息室分別購買每一本商業雜誌嗎？還是有我們預算負擔得起的更便宜選擇？ B：我們可以付費【訂閱】一年的數位閱讀服務，以固定的月費讓大家無限閱讀數百種雜誌。"
  },
  {
    "word": "copyright",
    "pos": "n.",
    "cn_def": "版權；著作權",
    "en_def": "the legal right to control copies of a book, song, or other work",
    "sentence": "A: Can we copy a few chapters from that popular management book and share them with all the trainees in next week's workshop? B: Not without permission, because the publisher owns the {{BLANK}}, so I'll contact them today and ask how much it would cost to use those chapters legally.",
    "cn": "A：我們可以影印那本熱門管理書籍的幾個章節，在下週的工作坊分給所有受訓者嗎？ B：沒有許可是不行的，因為出版社擁有【版權】，所以我今天會聯絡他們，詢問合法使用那些章節要花多少錢。"
  },
  {
    "word": "publisher",
    "pos": "n.",
    "cn_def": "出版商；出版社",
    "en_def": "a company that prepares, prints, and sells books",
    "sentence": "A: Our sales manager wrote a guide about negotiating with international clients, and she wants to sell it in bookstores across Asia next year. B: She should contact a {{BLANK}} that specializes in business titles, because they can edit, print, and market the book much more effectively than she can alone.",
    "cn": "A：我們的業務經理寫了一本與國際客戶談判的指南，她想明年在亞洲各地的書店販售。 B：她應該聯絡一家專門出版商業書籍的【出版社】，因為他們編輯、印刷和行銷這本書的效果會比她自己一個人好得多。"
  },
  {
    "word": "self-publish",
    "pos": "v.",
    "cn_def": "自行出版；自費出版",
    "en_def": "to publish your own book without a publishing company",
    "sentence": "A: My colleague finished writing a cookbook, but several publishing companies have rejected it, and she's starting to feel disappointed and wants to give up. B: She could {{BLANK}} it online instead, since many writers now sell their books directly on digital platforms and keep a larger share of the profits.",
    "cn": "A：我同事寫完了一本食譜，但好幾家出版公司都拒絕了，她開始感到失望，想要放棄。 B：她可以改在網路上【自行出版】，因為現在很多作家直接在數位平台上賣書，還能保留較多的利潤。"
  },
  {
    "word": "platform",
    "pos": "n.",
    "cn_def": "平台",
    "en_def": "a website or system where services or products are offered",
    "sentence": "A: Where should we sell our new language-learning e-books, because our own website doesn't get many visitors yet and the budget for advertising is small? B: Let's use a popular online {{BLANK}} that already has millions of users, so readers around the world can find and buy our books easily.",
    "cn": "A：我們新的語言學習電子書應該在哪裡賣？因為我們自己的網站訪客還不多，廣告預算也很少。 B：我們就用一個已經有數百萬使用者的熱門線上【平台】，讓世界各地的讀者都能輕鬆找到並購買我們的書。"
  },
  {
    "word": "reader-friendly",
    "pos": "adj.",
    "cn_def": "易於閱讀的",
    "en_def": "easy for readers to read and understand",
    "sentence": "A: The annual report is full of long paragraphs and technical terms, and the shareholders say they can't understand the main points before the meeting. B: Let's make it more {{BLANK}} by adding clear headings, simple charts, and short summaries at the start of each section.",
    "cn": "A：年度報告充滿了冗長的段落和專業術語，股東們說他們在會議前看不懂重點。 B：我們加上清楚的標題、簡單的圖表和每一節開頭的簡短摘要，讓它更【易於閱讀】。"
  },
  {
    "word": "convenient",
    "pos": "adj.",
    "cn_def": "方便的",
    "en_def": "easy and useful, not causing problems",
    "sentence": "A: Is it better for our team to meet in the downtown office or at the airport hotel when the visitors from Germany arrive next Tuesday? B: The airport hotel is more {{BLANK}} for them, because they land at nine o'clock and can walk to the meeting room without taking a taxi.",
    "cn": "A：下週二德國訪客抵達時，我們團隊在市區辦公室還是機場飯店開會比較好？ B：機場飯店對他們比較【方便】，因為他們九點落地，不用搭計程車就能走到會議室。"
  },
  {
    "word": "paperless",
    "pos": "adj.",
    "cn_def": "無紙化的",
    "en_def": "using electronic files instead of paper",
    "sentence": "A: Our office spends a lot of money on printing every month, and the cabinets are completely full of old invoices and reports. B: Management plans to create a {{BLANK}} office by next year, so all invoices and reports will be stored and signed electronically instead.",
    "cn": "A：我們辦公室每個月花很多錢在列印上，而且櫃子都塞滿了舊發票和報告。 B：管理階層計劃在明年前打造【無紙化】辦公室，所以所有發票和報告都會改成電子方式儲存和簽核。"
  },
  {
    "word": "instant",
    "pos": "adj.",
    "cn_def": "即時的；立即的",
    "en_def": "happening immediately",
    "sentence": "A: How long does it take for customers to receive the e-book after they pay on our website, because some say they waited a whole day? B: With the new system, delivery is {{BLANK}}, so the download link appears on the screen right after payment, and a copy is also sent by email.",
    "cn": "A：顧客在我們網站付款後要多久才能收到電子書？有些人說他們等了一整天。 B：有了新系統，交件是【即時的】，付款後下載連結會立刻出現在螢幕上，同時也會用電子郵件寄一份過去。"
  }
];

const MCQS = [
  {
    "q": "Readers who prefer screens can buy the guide as a digital _____ instead of a paperback. It downloads immediately after payment.",
    "options": [
      "font",
      "publisher",
      "brightness",
      "e-book"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Many commuters now carry a small _____ that holds hundreds of books. The device is lighter than a single paperback novel.",
    "options": [
      "font",
      "e-reader",
      "subscription",
      "copyright"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "All employees must keep _____ copies of their signed contracts on the shared drive. Paper versions should be stored in the locked cabinet.",
    "options": [
      "portable",
      "convenient",
      "digital",
      "instant"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The bank now accepts _____ signatures on all loan documents. Customers no longer need to visit a branch in person.",
    "options": [
      "electronic",
      "portable",
      "paperless",
      "searchable"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The client could not open the report because it was saved in the wrong _____. Please convert it before sending it again.",
    "options": [
      "font",
      "publisher",
      "battery",
      "format"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Please save the final contract as a _____ before you email it. This keeps the layout the same on every device.",
    "options": [
      "cloud",
      "font",
      "PDF",
      "screen"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Guests can _____ the conference app from our website before they arrive. It includes maps, schedules, and speaker information.",
    "options": [
      "upload",
      "download",
      "sync",
      "self-publish"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Photographers must _____ their pictures to the company server by Friday. The design team will start the brochure on Monday.",
    "options": [
      "upload",
      "download",
      "self-publish",
      "sync"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The company's online _____ lets staff borrow business books for two weeks. Over five hundred titles are currently available.",
    "options": [
      "copyright",
      "brightness",
      "library",
      "battery"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The newsletter's _____ is too small for many older readers. The editor will make the letters larger in the next issue.",
    "options": [
      "font",
      "battery",
      "copyright",
      "cloud"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "My phone's _____ cracked when I dropped it on the train. I can hardly read my emails until it is repaired.",
    "options": [
      "font",
      "subscription",
      "copyright",
      "screen"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Lowering the _____ of your tablet display can reduce eye strain. It also helps the battery last longer during flights.",
    "options": [
      "copyright",
      "brightness",
      "publisher",
      "library"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The laptop's _____ lasts about ten hours on a full charge. That is long enough for most international flights.",
    "options": [
      "font",
      "interface",
      "battery",
      "publisher"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "These tablets have only thirty-two gigabytes of _____. Staff should keep large video files in the shared online folder.",
    "options": [
      "brightness",
      "copyright",
      "font",
      "storage"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "All documents are backed up automatically in the _____. You can open them from any device with an internet connection.",
    "options": [
      "font",
      "cloud",
      "publisher",
      "annotation"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Remember to _____ your phone and laptop before the trip. Otherwise, your calendar may show different meeting times.",
    "options": [
      "sync",
      "upload",
      "download",
      "self-publish"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Every _____ who completes the online survey will receive a free e-book. The offer ends on the last day of March.",
    "options": [
      "font",
      "battery",
      "platform",
      "reader"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The app's new _____ has larger buttons and clearer menus. Customers say it is much easier to use than before.",
    "options": [
      "interface",
      "copyright",
      "publisher",
      "battery"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The sales team needs a _____ projector that fits in a laptop bag. They will carry it to client offices by train.",
    "options": [
      "searchable",
      "portable",
      "paperless",
      "reader-friendly"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The training videos are _____ online twenty-four hours a day. Night-shift workers can watch them whenever they have time.",
    "options": [
      "electronic",
      "reader-friendly",
      "accessible",
      "paperless"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The new course includes quizzes, clickable charts, and small games. This _____ design keeps trainees involved and helps them remember information.",
    "options": [
      "interactive",
      "paperless",
      "portable",
      "instant"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "A yearly _____ gives staff unlimited access to hundreds of digital magazines. The cost will come from the training budget.",
    "options": [
      "copyright",
      "interface",
      "annotation",
      "subscription"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "We cannot share those chapters because the publisher owns the _____. Using them without permission could lead to legal problems.",
    "options": [
      "interface",
      "copyright",
      "battery",
      "font"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The _____ agreed to print five thousand copies of the business guide. The books will reach stores across Asia next spring.",
    "options": [
      "reader",
      "font",
      "publisher",
      "cloud"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Our e-books are sold on a popular online _____ with millions of users. Readers around the world can buy them easily.",
    "options": [
      "font",
      "platform",
      "battery",
      "annotation"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The airport hotel is the most _____ location for the visiting managers. They can walk there directly from the arrival hall.",
    "options": [
      "paperless",
      "searchable",
      "convenient",
      "electronic"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "Management wants a completely _____ office by next year. All invoices will be stored and signed electronically instead of printed.",
    "options": [
      "paperless",
      "portable",
      "searchable",
      "instant"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "Customers receive _____ access to the e-book right after payment. The download link appears on the screen within seconds.",
    "options": [
      "portable",
      "paperless",
      "reader-friendly",
      "instant"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "The lawyer added an _____ beside the paragraph about repairs. It explains that the landlord should pay for damage from old pipes.",
    "options": [
      "interface",
      "e-reader",
      "annotation",
      "e-book"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Many new writers choose to _____ their books online instead of waiting for a large company. They also keep more of the profits.",
    "options": [
      "self-publish",
      "sync",
      "download",
      "upload"
    ],
    "answer": 0,
    "vocabIndex": 28
  }
];

const LOOKUP = {
  "e-book": {
    "pos": "n.",
    "en_def": "an electronic version of a book that you read on a screen",
    "cn_def": "電子書"
  },
  "e-reader": {
    "pos": "n.",
    "en_def": "a small device used for reading e-books",
    "cn_def": "電子閱讀器"
  },
  "digital": {
    "pos": "adj.",
    "en_def": "stored or sent as computer data",
    "cn_def": "數位的"
  },
  "electronic": {
    "pos": "adj.",
    "en_def": "using electricity and computer technology",
    "cn_def": "電子的"
  },
  "format": {
    "pos": "n.",
    "en_def": "the way a file is arranged or saved",
    "cn_def": "格式"
  },
  "epub": {
    "pos": "n.",
    "en_def": "a common e-book file type that fits its text to any screen size",
    "cn_def": "EPUB電子書格式"
  },
  "pdf": {
    "pos": "n.",
    "en_def": "a file type that keeps a document's layout the same on any device",
    "cn_def": "PDF檔"
  },
  "mobi": {
    "pos": "n.",
    "en_def": "an older e-book file type used mainly on Kindle devices",
    "cn_def": "MOBI電子書格式（Kindle舊格式）"
  },
  "download": {
    "pos": "v.",
    "en_def": "to copy a file from the internet to your device",
    "cn_def": "下載"
  },
  "upload": {
    "pos": "v.",
    "en_def": "to send a file from your device to a website or server",
    "cn_def": "上傳"
  },
  "library": {
    "pos": "n.",
    "en_def": "a collection of books that people can borrow or read",
    "cn_def": "圖書館；（數位）書庫"
  },
  "annotation": {
    "pos": "n.",
    "en_def": "a short note added to a text to explain or comment on it",
    "cn_def": "註解；批註"
  },
  "font": {
    "pos": "n.",
    "en_def": "the style and size of printed letters",
    "cn_def": "字型"
  },
  "screen": {
    "pos": "n.",
    "en_def": "the flat surface of a device that shows pictures or words",
    "cn_def": "螢幕"
  },
  "brightness": {
    "pos": "n.",
    "en_def": "how much light something gives off",
    "cn_def": "亮度"
  },
  "battery": {
    "pos": "n.",
    "en_def": "the part that stores power for a device",
    "cn_def": "電池"
  },
  "storage": {
    "pos": "n.",
    "en_def": "space for keeping files on a device or computer",
    "cn_def": "儲存空間"
  },
  "cloud": {
    "pos": "n.",
    "en_def": "online servers where you can keep and share files",
    "cn_def": "雲端"
  },
  "sync": {
    "pos": "v.",
    "en_def": "to make the same data appear on two or more devices",
    "cn_def": "同步"
  },
  "reader": {
    "pos": "n.",
    "en_def": "a person who reads",
    "cn_def": "讀者"
  },
  "interface": {
    "pos": "n.",
    "en_def": "the screen design that lets a person use a program",
    "cn_def": "介面"
  },
  "portable": {
    "pos": "adj.",
    "en_def": "light and easy to carry",
    "cn_def": "輕便的；可攜帶的"
  },
  "accessible": {
    "pos": "adj.",
    "en_def": "easy to reach, get, or use",
    "cn_def": "可取得的；容易使用的"
  },
  "interactive": {
    "pos": "adj.",
    "en_def": "allowing users to take part and get a response",
    "cn_def": "互動式的"
  },
  "searchable": {
    "pos": "adj.",
    "en_def": "able to be searched by a computer",
    "cn_def": "可搜尋的"
  },
  "subscription": {
    "pos": "n.",
    "en_def": "a regular payment to receive a product or service",
    "cn_def": "訂閱"
  },
  "copyright": {
    "pos": "n.",
    "en_def": "the legal right to control copies of a book, song, or other work",
    "cn_def": "版權；著作權"
  },
  "publisher": {
    "pos": "n.",
    "en_def": "a company that prepares, prints, and sells books",
    "cn_def": "出版商；出版社"
  },
  "self-publish": {
    "pos": "v.",
    "en_def": "to publish your own book without a publishing company",
    "cn_def": "自行出版；自費出版"
  },
  "platform": {
    "pos": "n.",
    "en_def": "a website or system where services or products are offered",
    "cn_def": "平台"
  },
  "reader-friendly": {
    "pos": "adj.",
    "en_def": "easy for readers to read and understand",
    "cn_def": "易於閱讀的"
  },
  "convenient": {
    "pos": "adj.",
    "en_def": "easy and useful, not causing problems",
    "cn_def": "方便的"
  },
  "paperless": {
    "pos": "adj.",
    "en_def": "using electronic files instead of paper",
    "cn_def": "無紙化的"
  },
  "instant": {
    "pos": "adj.",
    "en_def": "happening immediately",
    "cn_def": "即時的；立即的"
  }
};

const EXTRA_GLOSSES = {};
