// Topic 16 Quiz Data: App 應用程式
// Source word list: https://www.examword.com/group-topic/app — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T16 - App 應用程式",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "app",
    "pos": "n.",
    "cn_def": "應用程式；App",
    "en_def": "a program you use on a phone or computer",
    "sentence": "A: I keep forgetting which meeting rooms are free, and the front desk is always busy when I call, so is there an easier way to book one? B: Yes, the company has a new {{BLANK}} on our phones, so you can check which rooms are open and reserve one in a few seconds before you leave your desk.",
    "cn": "A：我老是忘記哪些會議室有空，而且我打電話時櫃台總是很忙，有沒有比較簡單的預約方法？ B：有，公司在我們的手機上推出了一個新的【應用程式】，你離開座位前只要幾秒鐘就能查看哪些會議室有空並預約。"
  },
  {
    "word": "application",
    "pos": "n.",
    "cn_def": "應用軟體；應用程式",
    "en_def": "a computer program designed for a particular job",
    "sentence": "A: Our accounting team spends hours every week typing sales numbers into spreadsheets by hand, and they often make small mistakes, so what can we do about it? B: The IT manager suggested a new software {{BLANK}} that collects the numbers from every store automatically, which should save time and reduce errors before the monthly report is due.",
    "cn": "A：我們的會計團隊每週都花好幾個小時手動把銷售數字輸入試算表，而且常常出小錯，我們能怎麼辦？ B：資訊部經理建議用一套新的【應用軟體】，它能自動收集每家門市的數字，這應該能在月報截止前節省時間並減少錯誤。"
  },
  {
    "word": "app store",
    "pos": "n.phr.",
    "cn_def": "應用程式商店",
    "en_def": "an online shop where you get programs for your phone",
    "sentence": "A: Our customers keep asking where they can get our new shopping program for their phones, and the marketing team hasn't sent out any instructions yet, so what should I tell them? B: Tell them to open the {{BLANK}} on their phone and type our company name, and they can get it for free in less than a minute.",
    "cn": "A：顧客一直問哪裡可以取得我們新的手機購物程式，行銷團隊還沒發出任何說明，我該怎麼告訴他們？ B：請他們打開手機上的【應用程式商店】，輸入我們的公司名稱，不到一分鐘就能免費取得。"
  },
  {
    "word": "download",
    "pos": "v.",
    "cn_def": "下載",
    "en_def": "to copy files or programs from the internet to your device",
    "sentence": "A: I'm flying to Tokyo for the trade show tomorrow, and I heard the internet on the plane is very slow and expensive, so how can I read the reports during the flight? B: You should {{BLANK}} all the files onto your laptop tonight while you're still at the office, so you can open them later without any connection.",
    "cn": "A：我明天要飛去東京參加商展，我聽說飛機上的網路很慢又很貴，飛行途中我要怎麼看報告？ B：你應該今晚還在辦公室時就把所有檔案【下載】到筆電裡，這樣之後沒有網路也能打開。"
  },
  {
    "word": "install",
    "pos": "v.",
    "cn_def": "安裝",
    "en_def": "to put a program on a computer or phone so it is ready to use",
    "sentence": "A: The new security program that the head office sent us last week still isn't working on my computer, and I have a client meeting in an hour, so can you help me? B: Of course, I'll come to your desk and {{BLANK}} it for you now, but you'll need to restart your computer afterward, which takes about five minutes.",
    "cn": "A：總公司上週寄給我們的新安全程式在我的電腦上還是不能用，而我一小時後要和客戶開會，你能幫我嗎？ B：當然，我現在就到你座位幫你【安裝】，不過之後你需要重新開機，大概要五分鐘。"
  },
  {
    "word": "update",
    "pos": "v.",
    "cn_def": "更新",
    "en_def": "to add the newest information to something",
    "sentence": "A: Customers have been complaining that our online menu still shows last month's prices, and some of them were surprised when they paid more at the counter, so who's responsible for that? B: That's my job, actually, and I'm sorry because I forgot to {{BLANK}} the menu after the price change, but I'll fix it this afternoon.",
    "cn": "A：顧客一直抱怨我們的線上菜單還是顯示上個月的價格，有些人在櫃台付了比較多錢時很驚訝，這是誰負責的？ B：其實那是我的工作，很抱歉我在價格調整後忘了【更新】菜單，我今天下午會修正。"
  },
  {
    "word": "interface",
    "pos": "n.",
    "cn_def": "介面；操作介面",
    "en_def": "the screens and buttons that let a person use a program",
    "sentence": "A: The older employees in the warehouse said the new inventory system is too difficult, and some of them still write everything on paper instead, so what's the main problem? B: Most of them told me the {{BLANK}} is confusing because the buttons are tiny and the menus are hidden, so we're asking the designers to make the screens simpler.",
    "cn": "A：倉庫裡年紀較大的員工說新的庫存系統太難用，有些人甚至還是全部寫在紙上，主要的問題是什麼？ B：他們大部分告訴我【介面】很令人困惑，因為按鈕很小、選單又藏起來，所以我們正請設計師把畫面做得更簡單。"
  },
  {
    "word": "feature",
    "pos": "n.",
    "cn_def": "功能；特色",
    "en_def": "an important or interesting part of a product",
    "sentence": "A: Why did the sales team choose this new phone for all the staff when it's more expensive than the one we used before? B: They liked one special {{BLANK}} that turns spoken words into written notes during meetings, so salespeople can listen to clients carefully instead of writing everything down by hand.",
    "cn": "A：這款新手機比我們以前用的貴，為什麼業務團隊還幫所有員工選它？ B：他們喜歡其中一項特別的【功能】，可以在會議中把口說內容轉成文字筆記，這樣業務員就能專心聽客戶說話，而不用全部手寫下來。"
  },
  {
    "word": "functionality",
    "pos": "n.",
    "cn_def": "功能性；功能",
    "en_def": "the range of things a program or machine can do",
    "sentence": "A: The free version of the design program looks almost the same as the expensive one, so why does the art department want us to pay for the full package this year? B: The free version has limited {{BLANK}}, which means designers can't share files with clients or work on large projects together, so it slows the whole team down.",
    "cn": "A：這套設計程式的免費版看起來跟昂貴的版本幾乎一樣，為什麼美術部今年要我們付費買完整版？ B：免費版的【功能】有限，也就是說設計師不能和客戶分享檔案，也不能一起做大型專案，所以會拖慢整個團隊。"
  },
  {
    "word": "user",
    "pos": "n.",
    "cn_def": "使用者；用戶",
    "en_def": "a person who uses a product or service",
    "sentence": "A: Before we spend more money on advertising the new booking website, shouldn't we find out whether people actually enjoy it? B: Good idea, so let's send a short survey to every {{BLANK}} who booked a hotel room through it last month, and we can ask them what they liked and what confused them.",
    "cn": "A：在我們花更多錢宣傳新的訂房網站之前，不是應該先了解大家是否真的喜歡它嗎？ B：好主意，那我們寄一份簡短的問卷給上個月透過網站訂飯店房間的每一位【使用者】，問問他們喜歡什麼、哪裡讓他們感到困惑。"
  },
  {
    "word": "account",
    "pos": "n.",
    "cn_def": "帳號；帳戶",
    "en_def": "a personal record that lets you use a website or service",
    "sentence": "A: I'd like to see my order history and change my delivery address on your website, but the page keeps asking me for a password, so what should I do? B: First you need to create an {{BLANK}} with your email address and a password, and after that you can manage all your orders and addresses in one place.",
    "cn": "A：我想在你們的網站上查看訂單紀錄並更改送貨地址，但頁面一直要我輸入密碼，我該怎麼辦？ B：你需要先用電子郵件地址和密碼建立一個【帳號】，之後就能在同一個地方管理所有訂單和地址。"
  },
  {
    "word": "login",
    "pos": "n.",
    "cn_def": "登入帳號；登入",
    "en_def": "the name and password you use to enter a system",
    "sentence": "A: I'm starting at the Taipei branch on Monday, and I'll need to check the team schedule and my email from my first morning, so what do I need from the office? B: The IT department will give you a {{BLANK}} and a temporary password on your first day, and you should change the password as soon as you sign in.",
    "cn": "A：我週一要開始在台北分公司上班，第一天早上就需要查看團隊行程和電子郵件，我需要辦公室提供什麼？ B：資訊部會在你上班第一天給你【登入帳號】和臨時密碼，你一登入就應該馬上更改密碼。"
  },
  {
    "word": "subscribe",
    "pos": "v.",
    "cn_def": "訂閱",
    "en_def": "to sign up to get something regularly, often by paying",
    "sentence": "A: I really enjoy the business news podcast that you recommended, but I keep forgetting to check when a new episode comes out, so is there an easier way? B: You can {{BLANK}} to the program on your phone, and then every new episode will appear automatically each Monday morning, so you can listen on your way to work.",
    "cn": "A：我很喜歡你推薦的商業新聞播客，但我老是忘記看新的一集什麼時候出來，有更簡單的方法嗎？ B：你可以在手機上【訂閱】這個節目，之後每週一早上新的一集就會自動出現，你就能在上班途中收聽。"
  },
  {
    "word": "subscription",
    "pos": "n.",
    "cn_def": "訂閱；訂閱費",
    "en_def": "money you pay regularly to receive a product or service",
    "sentence": "A: Why are we paying the music company every single month, when nobody in the office remembers signing any long contract with them? B: That's for the background music in our shops, and the {{BLANK}} costs thirty dollars a month, but we can cancel it any time if we find a cheaper service.",
    "cn": "A：為什麼我們每個月都要付錢給那家音樂公司？辦公室裡沒有人記得和他們簽過什麼長期合約啊。 B：那是我們店裡的背景音樂，這項【訂閱】每月三十美元，但如果找到更便宜的服務，我們隨時可以取消。"
  },
  {
    "word": "free",
    "pos": "adj.",
    "cn_def": "免費的",
    "en_def": "costing no money",
    "sentence": "A: Our small café can't afford expensive advertising this year, so how can we let more people in the neighborhood know about our new breakfast menu? B: We could post photos on social media, which is completely {{BLANK}}, and ask our regular customers to share them with their friends, so it won't cost us anything at all.",
    "cn": "A：我們的小咖啡館今年負擔不起昂貴的廣告，要怎麼讓附近更多人知道我們的新早餐菜單？ B：我們可以在社群媒體上貼照片，那是完全【免費的】，再請常客分享給朋友，這樣一毛錢都不用花。"
  },
  {
    "word": "paid",
    "pos": "adj.",
    "cn_def": "付費的",
    "en_def": "that you must pay money to use",
    "sentence": "A: Is it true that the language-learning program the company offers has two versions, and why do the managers in our department all use the more expensive one? B: Yes, the {{BLANK}} version has no advertisements and lets you practice speaking with a teacher online, so the company covers the cost for managers who travel abroad.",
    "cn": "A：公司提供的語言學習程式真的有兩種版本嗎？為什麼我們部門的經理們都用比較貴的那個？ B：是的，【付費】版沒有廣告，還能和老師線上練習口說，所以公司幫要出國的經理們支付費用。"
  },
  {
    "word": "in-app purchase",
    "pos": "n.phr.",
    "cn_def": "應用程式內購買；內購",
    "en_def": "something you buy inside a program after you download it",
    "sentence": "A: My son played a game on my work phone during the weekend, and now my credit card bill shows a strange charge of fifty dollars, so what do you think happened? B: He probably made an {{BLANK}}, like buying extra coins inside the game, so you should turn on a password for payments to stop it from happening again.",
    "cn": "A：我兒子週末用我的公務手機玩遊戲，現在我的信用卡帳單上出現一筆奇怪的五十美元費用，你覺得發生了什麼事？ B：他可能做了一筆【應用程式內購買】，例如在遊戲裡買額外的金幣，所以你應該開啟付款密碼，避免再次發生。"
  },
  {
    "word": "rating",
    "pos": "n.",
    "cn_def": "評分；評等",
    "en_def": "a score that shows how good something is",
    "sentence": "A: Our new delivery service has been running for three months now, so how do customers feel about it compared with the other companies in the city? B: It has an average {{BLANK}} of four and a half stars out of five, which is higher than our competitors, although some people said the drivers sometimes arrive late.",
    "cn": "A：我們新的外送服務已經營運三個月了，跟市內其他公司相比，顧客覺得如何？ B：它的平均【評分】是五顆星中的四顆半，比我們的競爭對手高，不過有些人說司機有時候會遲到。"
  },
  {
    "word": "review",
    "pos": "n.",
    "cn_def": "評論；評價",
    "en_def": "a written opinion about how good a product or service is",
    "sentence": "A: Before we choose a caterer for the company's annual dinner, how can we know which one actually serves good food and arrives on time? B: Let's read what other customers wrote online, because one bad {{BLANK}} might be unfair, but if many people complain about cold dishes, we should pick a different company.",
    "cn": "A：在替公司年度晚宴挑選外燴業者前，我們要怎麼知道哪一家真的餐點好吃又準時抵達？ B：我們來看看其他顧客在網路上寫了什麼，因為一則負面的【評論】可能不公平，但如果很多人抱怨菜是冷的，我們就該換一家公司。"
  },
  {
    "word": "category",
    "pos": "n.",
    "cn_def": "類別；種類",
    "en_def": "a group of things that are similar in some way",
    "sentence": "A: Our online shop sells hundreds of office products now, and customers say they can't find what they need quickly, so how can we make the website easier to use? B: We could put every item into a clear {{BLANK}}, such as paper, furniture, or printers, so shoppers can click on one group and see only the products they want.",
    "cn": "A：我們的網路商店現在賣好幾百種辦公用品，顧客說他們沒辦法快速找到需要的東西，我們要怎麼讓網站更好用？ B：我們可以把每件商品放進清楚的【類別】，例如紙類、家具或印表機，讓購物者點一個分類就只看到想要的商品。"
  },
  {
    "word": "developer",
    "pos": "n.",
    "cn_def": "開發人員；開發商",
    "en_def": "a person or company that creates computer programs",
    "sentence": "A: The hotel wants a new mobile program that lets guests check in and open their room doors with their phones, so who's going to build it for us? B: We've hired a software {{BLANK}} from a company in Hsinchu, and she'll meet our managers next week to discuss the design, the budget, and the schedule.",
    "cn": "A：飯店想要一個新的手機程式，讓房客能用手機辦理入住並打開房門，誰要幫我們做？ B：我們請了一位新竹公司的軟體【開發人員】，她下週會和我們的經理們見面，討論設計、預算和時程。"
  },
  {
    "word": "bug",
    "pos": "n.",
    "cn_def": "程式錯誤；漏洞",
    "en_def": "a mistake in a computer program that stops it working correctly",
    "sentence": "A: Several customers called this morning to say they were charged twice when they paid for their tickets online, so do we know what caused the problem? B: The technical team found a {{BLANK}} in the payment system that sent each order two times, and they're fixing it now and will return the extra money by Friday.",
    "cn": "A：今天早上有好幾位顧客打電話來說，他們在線上購票時被重複扣款，我們知道問題的原因嗎？ B：技術團隊在付款系統裡發現一個【程式錯誤】，會把每筆訂單送出兩次，他們正在修正，並會在週五前退還多收的錢。"
  },
  {
    "word": "crash",
    "pos": "v.",
    "cn_def": "當機；故障",
    "en_def": "(of a computer or program) to suddenly stop working",
    "sentence": "A: Why didn't you send me the sales presentation last night as you promised, when I needed to review it before this morning's meeting with the clients? B: I'm really sorry, but my laptop started to {{BLANK}} every time I opened the file, so I had to ask the IT team to repair it this morning.",
    "cn": "A：你為什麼沒有照答應的昨晚把業務簡報寄給我？我需要在今天早上和客戶開會前先看過。 B：真的很抱歉，但我的筆電每次打開那個檔案就【當機】，所以我今天早上只好請資訊團隊修理。"
  },
  {
    "word": "stable",
    "pos": "adj.",
    "cn_def": "穩定的",
    "en_def": "working well and not likely to fail or change suddenly",
    "sentence": "A: Our online store had serious problems during the holiday sale last year, so are you confident the website will work well when thousands of shoppers visit at the same time? B: Yes, we moved to a stronger server in the summer, and the system has been very {{BLANK}} since then, without a single breakdown in four months.",
    "cn": "A：我們的網路商店去年假期特賣時出了嚴重的問題，你有把握網站在幾千名購物者同時上線時能正常運作嗎？ B：有，我們夏天換了一台更強的伺服器，從那以後系統一直很【穩定】，四個月來沒有故障過一次。"
  },
  {
    "word": "compatible",
    "pos": "adj.",
    "cn_def": "相容的",
    "en_def": "able to work together with another machine or system",
    "sentence": "A: I just bought a new tablet for my business trips, but will I be able to use our company's sales software on it while I'm visiting clients in Japan? B: You should check with the IT team first, because the program is only {{BLANK}} with certain systems, and some older tablets can't run it at all.",
    "cn": "A：我剛為出差買了一台新平板，在日本拜訪客戶時能在上面使用公司的業務軟體嗎？ B：你應該先跟資訊團隊確認，因為那個程式只和特定系統【相容】，有些較舊的平板完全無法執行。"
  },
  {
    "word": "privacy",
    "pos": "n.",
    "cn_def": "隱私",
    "en_def": "the right to keep your personal information secret",
    "sentence": "A: Some customers are worried about giving us their phone numbers and home addresses when they join our membership program, so what should our staff tell them? B: Explain that we protect their {{BLANK}} carefully, and we never sell personal information to other companies, so their details are only used for deliveries and special offers.",
    "cn": "A：有些顧客在加入我們的會員計畫時，擔心要提供電話號碼和住家地址，我們的員工該怎麼跟他們說？ B：向他們說明我們會謹慎保護他們的【隱私】，而且絕不會把個人資料賣給其他公司，他們的資料只會用於送貨和特別優惠。"
  },
  {
    "word": "permission",
    "pos": "n.",
    "cn_def": "權限；許可",
    "en_def": "the right to do something that someone allows you to have",
    "sentence": "A: When I opened the new expense program on my phone, it asked whether it could use my camera, so is it safe to say yes? B: Yes, you should give it {{BLANK}}, because the program needs the camera to take photos of your receipts, and then it sends them straight to the accounting department.",
    "cn": "A：我在手機上打開新的報帳程式時，它問我能不能使用相機，答應安全嗎？ B：安全，你應該給它【權限】，因為程式需要用相機拍你的收據，然後直接傳給會計部。"
  },
  {
    "word": "notification",
    "pos": "n.",
    "cn_def": "通知",
    "en_def": "a short message on a phone or computer that tells you about something new",
    "sentence": "A: I missed the urgent meeting about the client's complaint yesterday because nobody told me it had moved to two o'clock, so how can I avoid that next time? B: Turn on the calendar alerts on your phone, and you'll get a {{BLANK}} every time a meeting is changed or canceled, even when you're away from your desk.",
    "cn": "A：昨天我錯過了關於客戶投訴的緊急會議，因為沒有人告訴我會議改到兩點，下次要怎麼避免？ B：打開手機上的行事曆提醒，這樣每次會議變更或取消時，就算你不在座位上也會收到【通知】。"
  },
  {
    "word": "launch",
    "pos": "v.",
    "cn_def": "推出；發表",
    "en_def": "to make a new product available to the public for the first time",
    "sentence": "A: The marketing team has been working on the new ordering program for almost a year, so when will customers finally be able to use it? B: We plan to {{BLANK}} it at the trade show in March, and we'll offer a ten percent discount to everyone who places an order with it during the first week.",
    "cn": "A：行銷團隊已經為新的訂購程式努力了將近一年，顧客到底什麼時候才能使用？ B：我們打算在三月的商展上【推出】它，並在第一週給所有用它下單的人九折優惠。"
  },
  {
    "word": "browse",
    "pos": "v.",
    "cn_def": "瀏覽",
    "en_def": "to look at things casually, especially on the internet",
    "sentence": "A: I don't know what to buy for my manager's farewell gift, and I don't have time to visit the department store after work this week, so do you have any suggestions? B: You could {{BLANK}} a few online gift shops during your lunch break, because many of them have useful ideas and can deliver to the office by Friday.",
    "cn": "A：我不知道該買什麼當經理的歡送禮物，而且這週下班後也沒時間去百貨公司，你有什麼建議嗎？ B：你可以在午休時【瀏覽】幾家網路禮品店，因為很多家都有不錯的點子，而且能在週五前送到辦公室。"
  },
  {
    "word": "search",
    "pos": "v.",
    "cn_def": "搜尋；查找",
    "en_def": "to look carefully for something, often by typing words into a computer",
    "sentence": "A: The customer called again about the missing order, but I can't find her name anywhere in this long list of deliveries, so what should I do? B: Don't read the whole list line by line, but {{BLANK}} the database for her order number instead, which will show you the delivery details in a few seconds.",
    "cn": "A：那位顧客又打電話來詢問遺失的訂單，但我在這份很長的送貨清單裡怎麼都找不到她的名字，我該怎麼辦？ B：別一行一行看整份清單，改用她的訂單編號【搜尋】資料庫，幾秒鐘就會顯示送貨細節。"
  },
  {
    "word": "optimize",
    "pos": "v.",
    "cn_def": "最佳化；優化",
    "en_def": "to make something work as well or as quickly as possible",
    "sentence": "A: Our website takes almost ten seconds to open on mobile phones, and the sales manager thinks many shoppers leave before they see any products, so what can we do? B: The developers can {{BLANK}} the photos and the code so the pages load faster, which should keep more visitors on the site and increase our sales.",
    "cn": "A：我們的網站在手機上要將近十秒才打開，業務經理認為很多購物者還沒看到商品就離開了，我們能怎麼做？ B：開發人員可以【優化】照片和程式碼讓網頁載入更快，這應該能留住更多訪客並提高我們的銷售額。"
  },
  {
    "word": "securely",
    "pos": "adv.",
    "cn_def": "安全地",
    "en_def": "in a safe way that protects something from being stolen or seen",
    "sentence": "A: I need to send the new employees' salary details to the accountant at our Kaohsiung office today, so can I just attach the file to a normal email? B: No, please upload it {{BLANK}} through the company's protected file system, because personal information like that must never be sent in an ordinary message.",
    "cn": "A：我今天需要把新進員工的薪資資料寄給高雄辦公室的會計師，我可以直接把檔案附在一般的電子郵件裡嗎？ B：不行，請透過公司受保護的檔案系統【安全地】上傳，因為那類個人資料絕不能用一般訊息寄送。"
  }
];

const MCQS = [
  {
    "q": "The bank released a new _____ last month. Customers can now check their balance and pay bills on their phones.",
    "options": [
      "bug",
      "category",
      "privacy",
      "app"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The accounting department uses a special _____ to prepare invoices. The program sends them to clients automatically every month.",
    "options": [
      "rating",
      "privacy",
      "application",
      "login"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Our new game is now available in the _____. Players can find it there by typing the company name.",
    "options": [
      "interface",
      "app store",
      "notification",
      "review"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Please _____ the meeting agenda before the trip. The hotel's internet connection is often slow in the evening.",
    "options": [
      "download",
      "crash",
      "subscribe",
      "launch"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "A technician will visit tomorrow to _____ the new accounting software. All staff should save their work before noon.",
    "options": [
      "browse",
      "subscribe",
      "crash",
      "install"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Please _____ your contact details in the system. Several clients said they could not reach you at your old number.",
    "options": [
      "crash",
      "update",
      "browse",
      "launch"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The new booking system has a simple _____. Even first-time customers can choose a seat with only two clicks.",
    "options": [
      "interface",
      "bug",
      "privacy",
      "subscription"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The most popular _____ of this phone is its camera. It takes clear photos even in very dark rooms.",
    "options": [
      "developer",
      "permission",
      "feature",
      "login"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The upgrade added more _____ to the program. Users can now create reports, share files, and hold video calls.",
    "options": [
      "functionality",
      "bug",
      "developer",
      "login"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Each _____ must create a strong password. The system will lock the profile after three failed attempts.",
    "options": [
      "category",
      "rating",
      "bug",
      "user"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Customers must sign up for a free _____ to track their orders. Registration takes only two minutes and requires an email address.",
    "options": [
      "bug",
      "account",
      "category",
      "developer"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Please do not share your _____ with anyone. The IT team will never ask for your password by email.",
    "options": [
      "rating",
      "category",
      "login",
      "interface"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Thousands of readers _____ to our monthly newsletter. It offers practical tips on marketing and saving money.",
    "options": [
      "install",
      "crash",
      "optimize",
      "subscribe"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "My magazine _____ ends in December. I need to renew it soon if I want to keep receiving copies.",
    "options": [
      "notification",
      "interface",
      "subscription",
      "developer"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Entry to the trade show is _____ for all visitors. However, guests must register online before the event begins.",
    "options": [
      "paid",
      "free",
      "stable",
      "compatible"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Our _____ members can watch every video without ads. Basic members, who pay nothing, see short commercials.",
    "options": [
      "paid",
      "free",
      "stable",
      "compatible"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The game itself costs nothing to download. However, each _____, such as extra lives or levels, can cost up to five dollars.",
    "options": [
      "interface",
      "in-app purchase",
      "notification",
      "category"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The hotel received a low _____ from guests last year. Since then, the managers have renovated every room.",
    "options": [
      "rating",
      "permission",
      "login",
      "functionality"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Ms. Lin wrote a positive _____ of the restaurant online. She praised the friendly staff and the quick service.",
    "options": [
      "category",
      "bug",
      "review",
      "login"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Our products are sorted by _____ on the website. Shoppers can easily find office chairs, desks, or lamps.",
    "options": [
      "privacy",
      "notification",
      "login",
      "category"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The software _____ promised to fix the problem by Friday. Her team is already testing a new version.",
    "options": [
      "interface",
      "developer",
      "privacy",
      "category"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "A small _____ in the program caused the wrong prices to appear. The technical team corrected it within an hour.",
    "options": [
      "bug",
      "privacy",
      "subscription",
      "permission"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Save your work often because the old computers sometimes _____. Several staff members lost important files last week.",
    "options": [
      "subscribe",
      "install",
      "browse",
      "crash"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The factory needs a _____ power supply to run its machines. Even a short blackout can stop production for hours.",
    "options": [
      "free",
      "paid",
      "stable",
      "compatible"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "This printer is _____ with most laptops. You can connect it without installing any extra programs.",
    "options": [
      "free",
      "compatible",
      "paid",
      "stable"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "To protect patient _____, the clinic keeps all medical records in a locked room. Only doctors may open the files.",
    "options": [
      "bug",
      "category",
      "rating",
      "privacy"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Visitors need _____ from the security office to enter the laboratory. They must also wear a badge at all times.",
    "options": [
      "permission",
      "bug",
      "category",
      "developer"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "You will receive a _____ on your phone when your package arrives. Then you can pick it up at the front desk.",
    "options": [
      "category",
      "developer",
      "notification",
      "interface"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The company plans to _____ its new line of smartwatches in June. Advertisements will appear in major cities next month.",
    "options": [
      "crash",
      "browse",
      "subscribe",
      "launch"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Many shoppers like to _____ online stores during their lunch break. They often save items and buy them later at home.",
    "options": [
      "crash",
      "browse",
      "install",
      "subscribe"
    ],
    "answer": 1,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "app": {
    "pos": "n.",
    "en_def": "a program you use on a phone or computer",
    "cn_def": "應用程式；App"
  },
  "application": {
    "pos": "n.",
    "en_def": "a computer program designed for a particular job",
    "cn_def": "應用軟體；應用程式"
  },
  "app store": {
    "pos": "n.phr.",
    "en_def": "an online shop where you get programs for your phone",
    "cn_def": "應用程式商店"
  },
  "download": {
    "pos": "v.",
    "en_def": "to copy files or programs from the internet to your device",
    "cn_def": "下載"
  },
  "install": {
    "pos": "v.",
    "en_def": "to put a program on a computer or phone so it is ready to use",
    "cn_def": "安裝"
  },
  "update": {
    "pos": "v.",
    "en_def": "to add the newest information to something",
    "cn_def": "更新"
  },
  "interface": {
    "pos": "n.",
    "en_def": "the screens and buttons that let a person use a program",
    "cn_def": "介面；操作介面"
  },
  "feature": {
    "pos": "n.",
    "en_def": "an important or interesting part of a product",
    "cn_def": "功能；特色"
  },
  "functionality": {
    "pos": "n.",
    "en_def": "the range of things a program or machine can do",
    "cn_def": "功能性；功能"
  },
  "user": {
    "pos": "n.",
    "en_def": "a person who uses a product or service",
    "cn_def": "使用者；用戶"
  },
  "account": {
    "pos": "n.",
    "en_def": "a personal record that lets you use a website or service",
    "cn_def": "帳號；帳戶"
  },
  "login": {
    "pos": "n.",
    "en_def": "the name and password you use to enter a system",
    "cn_def": "登入帳號；登入"
  },
  "subscribe": {
    "pos": "v.",
    "en_def": "to sign up to get something regularly, often by paying",
    "cn_def": "訂閱"
  },
  "subscription": {
    "pos": "n.",
    "en_def": "money you pay regularly to receive a product or service",
    "cn_def": "訂閱；訂閱費"
  },
  "free": {
    "pos": "adj.",
    "en_def": "costing no money",
    "cn_def": "免費的"
  },
  "paid": {
    "pos": "adj.",
    "en_def": "that you must pay money to use",
    "cn_def": "付費的"
  },
  "in-app purchase": {
    "pos": "n.phr.",
    "en_def": "something you buy inside a program after you download it",
    "cn_def": "應用程式內購買；內購"
  },
  "rating": {
    "pos": "n.",
    "en_def": "a score that shows how good something is",
    "cn_def": "評分；評等"
  },
  "review": {
    "pos": "n.",
    "en_def": "a written opinion about how good a product or service is",
    "cn_def": "評論；評價"
  },
  "category": {
    "pos": "n.",
    "en_def": "a group of things that are similar in some way",
    "cn_def": "類別；種類"
  },
  "developer": {
    "pos": "n.",
    "en_def": "a person or company that creates computer programs",
    "cn_def": "開發人員；開發商"
  },
  "bug": {
    "pos": "n.",
    "en_def": "a mistake in a computer program that stops it working correctly",
    "cn_def": "程式錯誤；漏洞"
  },
  "crash": {
    "pos": "v.",
    "en_def": "(of a computer or program) to suddenly stop working",
    "cn_def": "當機；故障"
  },
  "stable": {
    "pos": "adj.",
    "en_def": "working well and not likely to fail or change suddenly",
    "cn_def": "穩定的"
  },
  "compatible": {
    "pos": "adj.",
    "en_def": "able to work together with another machine or system",
    "cn_def": "相容的"
  },
  "privacy": {
    "pos": "n.",
    "en_def": "the right to keep your personal information secret",
    "cn_def": "隱私"
  },
  "permission": {
    "pos": "n.",
    "en_def": "the right to do something that someone allows you to have",
    "cn_def": "權限；許可"
  },
  "notification": {
    "pos": "n.",
    "en_def": "a short message on a phone or computer that tells you about something new",
    "cn_def": "通知"
  },
  "launch": {
    "pos": "v.",
    "en_def": "to make a new product available to the public for the first time",
    "cn_def": "推出；發表"
  },
  "browse": {
    "pos": "v.",
    "en_def": "to look at things casually, especially on the internet",
    "cn_def": "瀏覽"
  },
  "search": {
    "pos": "v.",
    "en_def": "to look carefully for something, often by typing words into a computer",
    "cn_def": "搜尋；查找"
  },
  "optimize": {
    "pos": "v.",
    "en_def": "to make something work as well or as quickly as possible",
    "cn_def": "最佳化；優化"
  },
  "securely": {
    "pos": "adv.",
    "en_def": "in a safe way that protects something from being stolen or seen",
    "cn_def": "安全地"
  }
};

const EXTRA_GLOSSES = {};
