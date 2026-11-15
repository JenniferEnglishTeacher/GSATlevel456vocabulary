// Topic 73 Quiz Data: Computer 電腦
// Source word list: https://www.examword.com/group-topic/computer — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T73 - Computer 電腦",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "hardware",
    "pos": "n.",
    "cn_def": "硬體",
    "en_def": "the physical parts of a computer, such as the screen and keyboard",
    "sentence": "A: Why can't the design team start using the new video editing program that the company bought last month? B: The program needs much more power than our old laptops have, so we are waiting for new {{BLANK}}, such as faster computers and bigger monitors, which should arrive next Tuesday.",
    "cn": "A：為什麼設計團隊還不能開始使用公司上個月買的新影片剪輯軟體？ B：那個軟體需要的效能比我們的舊筆電高很多，所以我們在等新的【硬體】，例如更快的電腦和更大的螢幕，應該下週二會送到。"
  },
  {
    "word": "software",
    "pos": "n.",
    "cn_def": "軟體",
    "en_def": "programs that tell a computer what to do",
    "sentence": "A: How are the accountants going to handle the extra work now that two of them have left the company? B: The manager has bought new accounting {{BLANK}} that can prepare reports and send invoices by itself, so the remaining staff will save several hours of work every week.",
    "cn": "A：既然有兩位會計離職了，剩下的會計要怎麼處理多出來的工作？ B：經理買了新的會計【軟體】，可以自動準備報表和寄送發票，所以留下來的員工每週能省下好幾個小時的工作。"
  },
  {
    "word": "program",
    "pos": "n.",
    "cn_def": "程式",
    "en_def": "a set of instructions that makes a computer do a task",
    "sentence": "A: Why is Kevin still sitting at his desk so late when everyone else from the IT team went home hours ago? B: He is writing a small computer {{BLANK}} that will check our stock levels every night and email a list of low items to the warehouse manager before the morning shift begins.",
    "cn": "A：IT團隊其他人幾個小時前就回家了，為什麼凱文這麼晚還坐在桌前？ B：他正在寫一個小型電腦【程式】，每晚會檢查我們的庫存量，並在早班開始前把缺貨品項清單寄給倉庫經理。"
  },
  {
    "word": "application",
    "pos": "n.",
    "cn_def": "應用程式",
    "en_def": "a program made for one particular job, especially on a phone",
    "sentence": "A: Is there an easier way for our sales staff to record their travel costs while they are visiting clients in other cities? B: Yes, the finance department has just introduced a mobile {{BLANK}}, so staff can take a photo of each receipt with their phone and send it for approval right away.",
    "cn": "A：我們的業務員在其他城市拜訪客戶時，有沒有更簡單的方式記錄差旅費用？ B：有，財務部剛推出一款手機【應用程式】，員工可以用手機拍下每張收據，並立刻送出申請核准。"
  },
  {
    "word": "system",
    "pos": "n.",
    "cn_def": "系統",
    "en_def": "a group of computer programs and equipment that work together",
    "sentence": "A: Why did it take so long to check in at the hotel last night when there were only a few guests in the lobby? B: The booking {{BLANK}} stopped working for almost an hour, so the receptionists had to write every guest's details by hand and call the manager to confirm the room numbers.",
    "cn": "A：昨晚大廳只有幾位客人，為什麼辦理入住還花了那麼久？ B：訂房【系統】停擺了將近一小時，所以櫃檯人員必須手寫每位客人的資料，還要打電話給經理確認房號。"
  },
  {
    "word": "processor",
    "pos": "n.",
    "cn_def": "處理器",
    "en_def": "the main part of a computer that carries out instructions",
    "sentence": "A: Why does the marketing team want to replace their laptops when they are only two years old? B: They now edit large video files every day, and the {{BLANK}} in their current machines is too slow, so each video takes hours to finish and they often miss deadlines.",
    "cn": "A：行銷團隊的筆電才用兩年，為什麼想要換掉？ B：他們現在每天都要剪輯大型影片檔，而現有電腦的【處理器】太慢，所以每支影片都要花好幾個小時才完成，他們常常趕不上截止期限。"
  },
  {
    "word": "memory",
    "pos": "n.",
    "cn_def": "記憶體",
    "en_def": "the part of a computer that holds information while it is working",
    "sentence": "A: Why does my computer freeze every time I open the sales spreadsheet and join a video call at the same time? B: Your laptop only has a small amount of {{BLANK}}, so it cannot run several large programs together; I will order an upgrade for you, and it should be ready by Friday.",
    "cn": "A：為什麼我每次同時打開銷售試算表和加入視訊會議時，電腦就會當機？ B：你的筆電只有很小的【記憶體】，所以無法同時執行好幾個大型程式；我會幫你訂購升級，星期五前應該就會弄好。"
  },
  {
    "word": "storage",
    "pos": "n.",
    "cn_def": "儲存（空間）",
    "en_def": "space for keeping computer data",
    "sentence": "A: Where should we keep all the photos and videos from the company's annual trade show so that everyone can find them later? B: Let's put them in the cloud {{BLANK}} account that the IT department set up last year, because it has plenty of space and staff in every branch can access it.",
    "cn": "A：公司年度商展的所有照片和影片要存在哪裡，大家以後才找得到？ B：我們放到IT部門去年設立的雲端【儲存】帳號吧，因為空間很充足，而且每家分公司的員工都能存取。"
  },
  {
    "word": "file",
    "pos": "n.",
    "cn_def": "檔案",
    "en_def": "a set of information stored on a computer under one name",
    "sentence": "A: Could you send me the latest version of the price list before my meeting with the new client this afternoon? B: Sure, I'll attach the {{BLANK}} to an email right now, but please check the prices on page two carefully, because the supplier changed some of them yesterday morning.",
    "cn": "A：今天下午我和新客戶開會前，你可以把最新版的價目表寄給我嗎？ B：當然，我現在就把【檔案】附在電子郵件裡寄給你，不過請仔細確認第二頁的價格，因為供應商昨天早上改了一些。"
  },
  {
    "word": "folder",
    "pos": "n.",
    "cn_def": "資料夾",
    "en_def": "a place on a computer where you keep files together",
    "sentence": "A: I can't find the training documents for the new employees who are starting next Monday; where did you put them? B: They are all in a shared {{BLANK}} called \"New Staff\" on the company drive, and I have already given the department managers permission to open and edit them.",
    "cn": "A：我找不到下週一要報到的新員工訓練文件，你放在哪裡？ B：全部都在公司雲端硬碟上一個叫「新進員工」的共用【資料夾】裡，我已經授權各部門主管開啟和編輯了。"
  },
  {
    "word": "keyboard",
    "pos": "n.",
    "cn_def": "鍵盤",
    "en_def": "the set of keys you press to type on a computer",
    "sentence": "A: Why did you ask the office manager for new equipment when your computer is working perfectly well? B: Some of the letters on my {{BLANK}} have worn off after years of typing reports, and the space bar often sticks, so I make a lot of spelling mistakes in my emails.",
    "cn": "A：你的電腦運作得很正常，為什麼還向辦公室經理申請新設備？ B：打了好幾年報告，我的【鍵盤】上有些字母已經磨掉了，空白鍵也常卡住，所以我寫電子郵件時常打錯字。"
  },
  {
    "word": "mouse",
    "pos": "n.",
    "cn_def": "滑鼠",
    "en_def": "a small device you move by hand to control the cursor on a screen",
    "sentence": "A: Do you need anything else for your home office now that you are working from home three days a week? B: A new {{BLANK}} would be helpful, because my old one doesn't move the cursor smoothly, and it takes me a long time to select and drag items when I design presentation slides.",
    "cn": "A：既然你現在每週有三天在家工作，你的居家辦公室還需要什麼嗎？ B：一個新的【滑鼠】會很有幫助，因為我的舊滑鼠游標移動不順，我設計簡報投影片時要花很久才能選取和拖曳物件。"
  },
  {
    "word": "screen",
    "pos": "n.",
    "cn_def": "螢幕",
    "en_def": "the flat surface of a computer or phone where you see pictures and words",
    "sentence": "A: Why are you sitting so close to your laptop when you are just reading a simple report? B: The {{BLANK}} is very small, and the letters are hard to see in this bright room, so I'm going to ask the IT department for a larger monitor before I start working on the budget.",
    "cn": "A：你只是在讀一份簡單的報告，為什麼坐得離筆電這麼近？ B：【螢幕】很小，在這麼亮的房間裡字很難看清楚，所以我開始做預算之前，要先向IT部門要一台比較大的顯示器。"
  },
  {
    "word": "monitor",
    "pos": "n.",
    "cn_def": "顯示器；螢幕",
    "en_def": "a separate screen that shows information from a computer",
    "sentence": "A: How can I work faster when I have to compare two long contracts and write a summary for my manager every day? B: You should ask for a second {{BLANK}}, so you can open one contract on each side of your desk and type your notes without switching between windows all the time.",
    "cn": "A：我每天都要比對兩份很長的合約並幫主管寫摘要，要怎麼做才能更快？ B：你應該申請第二台【顯示器】，這樣你可以在桌子兩邊各開一份合約，不用一直切換視窗就能打筆記。"
  },
  {
    "word": "network",
    "pos": "n.",
    "cn_def": "網路；網絡",
    "en_def": "a group of computers that are connected so they can share information",
    "sentence": "A: Why couldn't anyone in the office print documents or open shared files this morning? B: The company's computer {{BLANK}} went down after a storm damaged some cables near the building, so none of our machines could connect to each other until the technicians fixed it at noon.",
    "cn": "A：為什麼今天早上辦公室裡沒有人能列印文件或打開共用檔案？ B：暴風雨損壞了大樓附近的一些電纜，公司的電腦【網路】因此中斷，所以在技術人員中午修好之前，我們所有的電腦都無法互相連線。"
  },
  {
    "word": "internet",
    "pos": "n.",
    "cn_def": "網際網路；網路",
    "en_def": "the worldwide system that connects computers so people can share information",
    "sentence": "A: Is it a good idea to hold the training workshop at the hotel near the airport next month? B: The rooms are comfortable, but the {{BLANK}} connection there is very slow, so our trainers won't be able to show online videos or let participants join from other offices.",
    "cn": "A：下個月在機場附近的飯店舉辦培訓工作坊是好主意嗎？ B：那裡的房間很舒適，但【網路】連線很慢，所以我們的講師無法播放線上影片，也不能讓學員從其他辦公室遠端參加。"
  },
  {
    "word": "browser",
    "pos": "n.",
    "cn_def": "瀏覽器",
    "en_def": "a program used to look at websites",
    "sentence": "A: Why can't I open the new booking website that the travel agency sent us for the sales trip? B: You are still using a very old web {{BLANK}} that doesn't support the site, so please download the latest version of Chrome or Edge and then try the link again.",
    "cn": "A：為什麼我打不開旅行社寄給我們、為出差準備的新訂位網站？ B：你還在用很舊的網頁【瀏覽器】，它不支援這個網站，所以請下載最新版的Chrome或Edge，然後再點一次連結。"
  },
  {
    "word": "download",
    "pos": "v.",
    "cn_def": "下載",
    "en_def": "to copy information from the internet to your computer or phone",
    "sentence": "A: How can the new staff read the company handbook before their first day if we don't mail them a printed copy? B: We'll email them a link this afternoon, so they can {{BLANK}} the handbook to their laptop or phone and read it at home over the weekend.",
    "cn": "A：如果我們不寄紙本給新進員工，他們要怎麼在第一天上班前讀到員工手冊？ B：我們今天下午會寄連結給他們，這樣他們就能把手冊【下載】到筆電或手機上，週末在家閱讀。"
  },
  {
    "word": "upload",
    "pos": "v.",
    "cn_def": "上傳",
    "en_def": "to send information from your computer to the internet",
    "sentence": "A: How should the designers send their final drawings to the client in Tokyo, since the files are too large for email? B: They should {{BLANK}} the drawings to the project website before six o'clock tonight, and then the client's team can review them first thing tomorrow morning in Japan.",
    "cn": "A：設計師的最終設計圖檔案太大，無法用電子郵件寄送，要怎麼交給東京的客戶？ B：他們應該在今晚六點前把設計圖【上傳】到專案網站，這樣客戶團隊明天早上一上班就能在日本審閱。"
  },
  {
    "word": "install",
    "pos": "v.",
    "cn_def": "安裝",
    "en_def": "to put a program or piece of equipment in place so it is ready to use",
    "sentence": "A: When will the new security cameras in the parking garage be ready to use? B: The technicians will {{BLANK}} them this weekend while the building is closed, and after they test the recording equipment on Monday, the guards will be able to watch the garage from the front desk.",
    "cn": "A：停車場的新監視器什麼時候可以使用？ B：技術人員會在本週末大樓關閉時【安裝】，週一測試錄影設備之後，警衛就能從櫃檯監看停車場。"
  },
  {
    "word": "update",
    "pos": "v.",
    "cn_def": "更新",
    "en_def": "to add the newest information or make something more modern",
    "sentence": "A: The address on our website still shows our old office, and several customers went there by mistake yesterday; who can fix it? B: I'll ask Tina from the web team to {{BLANK}} the contact page this morning, and she can also add a map that shows how to get here from the station.",
    "cn": "A：我們網站上的地址還是舊辦公室的，昨天有好幾位顧客走錯地方，誰能修正？ B：我今天早上會請網站團隊的蒂娜【更新】聯絡頁面，她也可以加一張從車站到這裡的地圖。"
  },
  {
    "word": "save",
    "pos": "v.",
    "cn_def": "儲存；存檔",
    "en_def": "to store work on a computer so you do not lose it",
    "sentence": "A: What happened to the sales report that you spent the whole afternoon writing yesterday? B: The power went off suddenly at five o'clock, and I had forgotten to {{BLANK}} my work, so I lost almost everything and had to start again early this morning before my manager arrived.",
    "cn": "A：你昨天花了整個下午寫的銷售報告怎麼了？ B：五點時突然停電，而我忘了【存檔】，所以幾乎全部都不見了，今天一大早只好在主管到之前重新開始。"
  },
  {
    "word": "delete",
    "pos": "v.",
    "cn_def": "刪除",
    "en_def": "to remove something from a computer",
    "sentence": "A: Why is the shared drive so full that nobody in the department can add new documents this week? B: People have kept old photos and copies of the same reports for years, so the manager has asked everyone to {{BLANK}} any files they no longer need before Friday.",
    "cn": "A：為什麼共用硬碟滿到這週部門裡沒人能新增文件？ B：大家多年來一直保留舊照片和同樣報告的副本，所以經理要求每個人在星期五前【刪除】不再需要的檔案。"
  },
  {
    "word": "digital",
    "pos": "adj.",
    "cn_def": "數位的",
    "en_def": "using computer technology instead of paper",
    "sentence": "A: Are we still going to print the restaurant's new menu on paper, like we did last year? B: No, we are switching to a {{BLANK}} menu that customers can read on their phones by scanning a code on the table, which saves printing costs and lets us change prices easily.",
    "cn": "A：我們還要像去年一樣把餐廳的新菜單印在紙上嗎？ B：不，我們要改用【數位】菜單，客人掃描桌上的條碼就能在手機上閱讀，這樣可以省下印刷費，也能輕鬆更改價格。"
  },
  {
    "word": "online",
    "pos": "adj.",
    "cn_def": "線上的；網路上的",
    "en_def": "connected to or available through the internet",
    "sentence": "A: Why have the bookstore's sales improved so much this year even though fewer people are visiting the shop? B: The owner opened an {{BLANK}} store last spring, so customers can now order books from home at any time, and many of them also choose next-day delivery.",
    "cn": "A：為什麼今年書店的來客變少，銷售額卻大幅提升？ B：老闆去年春天開了一家【線上】商店，現在顧客隨時都能在家訂書，而且很多人還選擇隔日到貨。"
  },
  {
    "word": "wireless",
    "pos": "adj.",
    "cn_def": "無線的",
    "en_def": "working without cables or wires",
    "sentence": "A: Why are there no more cables lying on the floor of the meeting room since the renovation last month? B: The company replaced the old equipment with {{BLANK}} speakers, keyboards and projectors, so everything now connects through the air, and people no longer trip over wires during presentations.",
    "cn": "A：自從上個月整修後，會議室地板上為什麼再也沒有電線了？ B：公司把舊設備換成了【無線】喇叭、鍵盤和投影機，現在所有設備都不用接線就能連接，大家在簡報時不會再被電線絆倒。"
  },
  {
    "word": "virtual",
    "pos": "adj.",
    "cn_def": "虛擬的；線上的",
    "en_def": "done or seen on a computer instead of in person",
    "sentence": "A: Will the managers from our overseas branches fly to Taipei for the planning meeting in December? B: No, travel costs are too high this year, so we will hold a {{BLANK}} meeting instead, and everyone will join by video from their own offices in Singapore, Seoul and Sydney.",
    "cn": "A：海外分公司的經理們會飛來台北參加十二月的規劃會議嗎？ B：不會，今年差旅費太高了，所以我們會改開【虛擬】會議，大家從新加坡、首爾和雪梨各自的辦公室用視訊參加。"
  },
  {
    "word": "automatic",
    "pos": "adj.",
    "cn_def": "自動的",
    "en_def": "working by itself without a person controlling it",
    "sentence": "A: Do I need to remember to back up my work files every evening before I leave the office? B: No, the IT department set up an {{BLANK}} backup last month, so the system copies all your documents to the server at midnight without anyone having to press a button.",
    "cn": "A：我每天傍晚離開辦公室前，需要記得備份工作檔案嗎？ B：不用，IT部門上個月設定了【自動】備份，系統每天午夜會把你所有的文件複製到伺服器，不需要任何人按按鈕。"
  },
  {
    "word": "secure",
    "pos": "adj.",
    "cn_def": "安全的",
    "en_def": "safe and protected from danger or attack",
    "sentence": "A: Is it safe for our staff to check their work email on the free Wi-Fi at the airport or in coffee shops? B: Not really, because public networks are often not very {{BLANK}}, so please always turn on the company's VPN first to protect customer information from hackers.",
    "cn": "A：我們的員工在機場或咖啡店用免費Wi-Fi查看公司郵件安全嗎？ B：不太安全，因為公共網路通常不太【安全】，所以請一定先開啟公司的VPN，保護客戶資料不被駭客竊取。"
  },
  {
    "word": "quickly",
    "pos": "adv.",
    "cn_def": "快速地；迅速地",
    "en_def": "fast; in a short time",
    "sentence": "A: How did you finish entering all the customer orders before the deadline when the office was so busy yesterday? B: I used the new shortcut keys that the trainer showed us, which helped me type much more {{BLANK}}, and I finished the whole list an hour before the warehouse closed.",
    "cn": "A：昨天辦公室那麼忙，你是怎麼在截止前輸入完所有顧客訂單的？ B：我用了講師教我們的新快捷鍵，讓我能更【快速地】打字，在倉庫關門前一小時就完成了整份清單。"
  },
  {
    "word": "efficiently",
    "pos": "adv.",
    "cn_def": "有效率地",
    "en_def": "in a way that uses time and energy well",
    "sentence": "A: Why did the manager decide to buy new scanners for the reception desk this year? B: The old machines kept jamming, and the new ones can scan fifty pages a minute, so the receptionists can work more {{BLANK}} and spend more time helping visitors instead of fixing paper problems.",
    "cn": "A：經理今年為什麼決定為接待櫃檯買新的掃描器？ B：舊機器一直卡紙，新機器每分鐘能掃描五十頁，所以接待人員能更【有效率地】工作，花更多時間協助訪客，而不是處理卡紙問題。"
  },
  {
    "word": "remotely",
    "pos": "adv.",
    "cn_def": "遠端地；遠距地",
    "en_def": "from a distance, not in the same place",
    "sentence": "A: How did the technician fix my computer problem yesterday when he was working from home because of the typhoon? B: He connected to your laptop {{BLANK}} through a special program, so he could control your screen from his house and repair the settings without coming into the office.",
    "cn": "A：昨天因為颱風技術人員在家工作，他是怎麼修好我的電腦問題的？ B：他透過一個特殊程式【遠端】連上你的筆電，所以能從家裡控制你的螢幕並修正設定，不用進辦公室。"
  },
  {
    "word": "regularly",
    "pos": "adv.",
    "cn_def": "定期地；經常地",
    "en_def": "often, at the same times each day, week, month, etc.",
    "sentence": "A: What can our team do to protect the company's data after the attack on our competitor's computers last month? B: Everyone should change their passwords {{BLANK}}, about every three months, and the IT staff will also check the system every Friday to find any weak points before hackers do.",
    "cn": "A：上個月競爭對手的電腦遭到攻擊後，我們團隊可以做什麼來保護公司資料？ B：每個人都應該【定期】更換密碼，大約每三個月一次，IT人員每週五也會檢查系統，在駭客之前找出任何弱點。"
  }
];

const MCQS = [
  {
    "q": "Our IT budget this year will be spent mostly on _____. We need new laptops, printers and scanners for every department.",
    "options": [
      "hardware",
      "software",
      "browser",
      "folder"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The new design _____ is very easy to learn. Even staff with no training created brochures with it in one afternoon.",
    "options": [
      "keyboard",
      "software",
      "hardware",
      "storage"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Ms. Lee wrote a short computer _____ that sorts customer orders by date. It saves the sales team about two hours every day.",
    "options": [
      "monitor",
      "mouse",
      "program",
      "screen"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Hotel guests can now use our mobile _____ to check in early. They can also order room service directly from their phones.",
    "options": [
      "hardware",
      "keyboard",
      "processor",
      "application"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The new payroll _____ calculates salaries and taxes for all three hundred employees. It also sends each worker a monthly pay slip by email.",
    "options": [
      "mouse",
      "screen",
      "system",
      "folder"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "This laptop has a powerful _____, so it can run several large programs at once. It is ideal for engineers and video editors.",
    "options": [
      "processor",
      "folder",
      "browser",
      "file"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The old computers do not have enough _____ to run the new accounting program. They freeze whenever two people open large reports.",
    "options": [
      "keyboard",
      "mouse",
      "folder",
      "memory"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Our company pays for extra cloud _____ every year. All the photos and videos from past events are kept there safely.",
    "options": [
      "monitor",
      "storage",
      "mouse",
      "keyboard"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Please attach the signed contract as a PDF _____ to your email. The lawyer needs to review it before Thursday.",
    "options": [
      "screen",
      "network",
      "processor",
      "file"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "I created a new _____ for the conference documents on the shared drive. Please put all the speakers' slides inside it.",
    "options": [
      "processor",
      "monitor",
      "folder",
      "mouse"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The reception desk ordered a new _____ because several keys no longer work. Typing visitors' names has become very slow.",
    "options": [
      "browser",
      "keyboard",
      "storage",
      "memory"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Click the right button of your _____ to open the menu. Then choose \"Print\" and select the printer on the second floor.",
    "options": [
      "mouse",
      "program",
      "network",
      "storage"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The tablet's _____ cracked when it fell off the counter. Customers can no longer see the menu or touch the order buttons.",
    "options": [
      "software",
      "screen",
      "internet",
      "network"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Each designer will receive a large second _____ next week. Having two displays will make comparing drawings much easier.",
    "options": [
      "software",
      "internet",
      "system",
      "monitor"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The hotel's wireless _____ is available in every room and the lobby. Guests can connect with the password on their key card.",
    "options": [
      "network",
      "folder",
      "processor",
      "memory"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "If the page does not load correctly, try clearing your web _____ history. You can also open the site in a different one.",
    "options": [
      "hardware",
      "keyboard",
      "browser",
      "processor"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Customers can _____ the user manual from our website. It is free and available in English, Chinese and Japanese.",
    "options": [
      "download",
      "delete",
      "upload",
      "install"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Please _____ your travel receipts to the finance website by Friday. Paper copies will no longer be accepted after this month.",
    "options": [
      "delete",
      "download",
      "upload",
      "install"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "A technician will _____ the new printer on the third floor tomorrow morning. It should be ready to use by lunchtime.",
    "options": [
      "delete",
      "install",
      "upload",
      "download"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "We need to _____ our price list because the cost of materials rose in March. The new prices start on May first.",
    "options": [
      "download",
      "delete",
      "upload",
      "update"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Remember to _____ your document often while you are working. The building's power sometimes goes off during summer storms.",
    "options": [
      "upload",
      "delete",
      "save",
      "install"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Please _____ any customer data that you no longer need. Keeping old personal information can break the new privacy law.",
    "options": [
      "install",
      "update",
      "save",
      "delete"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The museum now offers a _____ guide that visitors can use on their own phones. Printed maps are still available at the entrance.",
    "options": [
      "digital",
      "secure",
      "automatic",
      "wireless"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Most of our customers now book tables through our _____ reservation page. Phone bookings have dropped by half this year.",
    "options": [
      "wireless",
      "online",
      "secure",
      "automatic"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The café offers free _____ Internet to all customers. Please ask the staff at the counter for today's password.",
    "options": [
      "digital",
      "virtual",
      "automatic",
      "wireless"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Because of the typhoon, this week's job interviews will be _____. Candidates will join by video call from their homes.",
    "options": [
      "wireless",
      "virtual",
      "automatic",
      "secure"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The office lights are _____ and turn off when nobody is in the room. This has cut our electricity bill by twenty percent.",
    "options": [
      "virtual",
      "digital",
      "automatic",
      "online"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Customers will only shop on our site if they feel it is _____. That is why we protect every payment with strong encryption.",
    "options": [
      "secure",
      "wireless",
      "automatic",
      "digital"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The support team replied to my question very _____. I got an answer only five minutes after I sent my email.",
    "options": [
      "regularly",
      "quickly",
      "remotely",
      "efficiently"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The technician repaired my laptop _____ from his home across town. He simply connected to it through a special program.",
    "options": [
      "remotely",
      "regularly",
      "quickly",
      "efficiently"
    ],
    "answer": 0,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "hardware": {
    "pos": "n.",
    "en_def": "the physical parts of a computer, such as the screen and keyboard",
    "cn_def": "硬體"
  },
  "software": {
    "pos": "n.",
    "en_def": "programs that tell a computer what to do",
    "cn_def": "軟體"
  },
  "program": {
    "pos": "n.",
    "en_def": "a set of instructions that makes a computer do a task",
    "cn_def": "程式"
  },
  "application": {
    "pos": "n.",
    "en_def": "a program made for one particular job, especially on a phone",
    "cn_def": "應用程式"
  },
  "system": {
    "pos": "n.",
    "en_def": "a group of computer programs and equipment that work together",
    "cn_def": "系統"
  },
  "processor": {
    "pos": "n.",
    "en_def": "the main part of a computer that carries out instructions",
    "cn_def": "處理器"
  },
  "memory": {
    "pos": "n.",
    "en_def": "the part of a computer that holds information while it is working",
    "cn_def": "記憶體"
  },
  "storage": {
    "pos": "n.",
    "en_def": "space for keeping computer data",
    "cn_def": "儲存（空間）"
  },
  "file": {
    "pos": "n.",
    "en_def": "a set of information stored on a computer under one name",
    "cn_def": "檔案"
  },
  "folder": {
    "pos": "n.",
    "en_def": "a place on a computer where you keep files together",
    "cn_def": "資料夾"
  },
  "keyboard": {
    "pos": "n.",
    "en_def": "the set of keys you press to type on a computer",
    "cn_def": "鍵盤"
  },
  "mouse": {
    "pos": "n.",
    "en_def": "a small device you move by hand to control the cursor on a screen",
    "cn_def": "滑鼠"
  },
  "screen": {
    "pos": "n.",
    "en_def": "the flat surface of a computer or phone where you see pictures and words",
    "cn_def": "螢幕"
  },
  "monitor": {
    "pos": "n.",
    "en_def": "a separate screen that shows information from a computer",
    "cn_def": "顯示器；螢幕"
  },
  "network": {
    "pos": "n.",
    "en_def": "a group of computers that are connected so they can share information",
    "cn_def": "網路；網絡"
  },
  "internet": {
    "pos": "n.",
    "en_def": "the worldwide system that connects computers so people can share information",
    "cn_def": "網際網路；網路"
  },
  "browser": {
    "pos": "n.",
    "en_def": "a program used to look at websites",
    "cn_def": "瀏覽器"
  },
  "download": {
    "pos": "v.",
    "en_def": "to copy information from the internet to your computer or phone",
    "cn_def": "下載"
  },
  "upload": {
    "pos": "v.",
    "en_def": "to send information from your computer to the internet",
    "cn_def": "上傳"
  },
  "install": {
    "pos": "v.",
    "en_def": "to put a program or piece of equipment in place so it is ready to use",
    "cn_def": "安裝"
  },
  "update": {
    "pos": "v.",
    "en_def": "to add the newest information or make something more modern",
    "cn_def": "更新"
  },
  "save": {
    "pos": "v.",
    "en_def": "to store work on a computer so you do not lose it",
    "cn_def": "儲存；存檔"
  },
  "delete": {
    "pos": "v.",
    "en_def": "to remove something from a computer",
    "cn_def": "刪除"
  },
  "digital": {
    "pos": "adj.",
    "en_def": "using computer technology instead of paper",
    "cn_def": "數位的"
  },
  "online": {
    "pos": "adj.",
    "en_def": "connected to or available through the internet",
    "cn_def": "線上的；網路上的"
  },
  "wireless": {
    "pos": "adj.",
    "en_def": "working without cables or wires",
    "cn_def": "無線的"
  },
  "virtual": {
    "pos": "adj.",
    "en_def": "done or seen on a computer instead of in person",
    "cn_def": "虛擬的；線上的"
  },
  "automatic": {
    "pos": "adj.",
    "en_def": "working by itself without a person controlling it",
    "cn_def": "自動的"
  },
  "secure": {
    "pos": "adj.",
    "en_def": "safe and protected from danger or attack",
    "cn_def": "安全的"
  },
  "quickly": {
    "pos": "adv.",
    "en_def": "fast; in a short time",
    "cn_def": "快速地；迅速地"
  },
  "efficiently": {
    "pos": "adv.",
    "en_def": "in a way that uses time and energy well",
    "cn_def": "有效率地"
  },
  "remotely": {
    "pos": "adv.",
    "en_def": "from a distance, not in the same place",
    "cn_def": "遠端地；遠距地"
  },
  "regularly": {
    "pos": "adv.",
    "en_def": "often, at the same times each day, week, month, etc.",
    "cn_def": "定期地；經常地"
  }
};

const EXTRA_GLOSSES = {};
