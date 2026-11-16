// Topic 197 Quiz Data: Internet 網際網路
// Source word list: https://www.examword.com/group-topic/internet — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T197 - Internet 網際網路",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "website",
    "pos": "n.",
    "cn_def": "網站",
    "en_def": "a group of pages on the internet about a company or subject",
    "sentence": "A: Where can new customers find our price list and the opening hours of the downtown store, since the printed brochures ran out last week? B: They can visit our company {{BLANK}}, which the marketing team updated yesterday with the new prices, store hours, and a short map showing how to get there by bus.",
    "cn": "A：既然印刷的小冊子上週已經發完了，新客戶要在哪裡找到我們的價目表和市中心門市的營業時間？ B：他們可以瀏覽我們公司的【網站】，行銷團隊昨天已經更新了新價格、營業時間，以及一張說明如何搭公車前往的簡單地圖。"
  },
  {
    "word": "browser",
    "pos": "n.",
    "cn_def": "瀏覽器",
    "en_def": "a program used to look at pages on the internet",
    "sentence": "A: The online booking form keeps freezing on my laptop every time I try to reserve the meeting room for Friday afternoon, so what should I do? B: Try opening it in a different {{BLANK}}, because the IT department said the old version you are using no longer works well with our new system.",
    "cn": "A：每次我想預約週五下午的會議室時，線上預約表單在我的筆電上就一直當機，我該怎麼辦？ B：試著用另一個【瀏覽器】打開，因為資訊部門說你正在用的舊版本跟我們的新系統已經不太相容了。"
  },
  {
    "word": "online",
    "pos": "adv.",
    "cn_def": "在線上；透過網路",
    "en_def": "on or through the internet",
    "sentence": "A: Do I need to visit the bank in person to pay the invoice from our new supplier before the end of the month? B: No, you can pay it {{BLANK}} in about five minutes, and the system will send a receipt to your email so you can show it to the accounting department later.",
    "cn": "A：我需要親自去銀行，在月底前支付新供應商的發票嗎？ B：不用，你可以大約五分鐘內【在線上】付款，系統會寄一份收據到你的電子郵件，讓你之後可以拿給會計部門看。"
  },
  {
    "word": "offline",
    "pos": "adj.",
    "cn_def": "離線的",
    "en_def": "not connected to the internet",
    "sentence": "A: Why can't the sales staff in the branch office check the new orders this morning, even though their computers are turned on? B: The main system has been {{BLANK}} since eight o'clock because the technicians are installing an update, but they promised everything would be working again before lunch.",
    "cn": "A：為什麼分公司的業務人員今天早上無法查看新訂單，即使他們的電腦都開著？ B：主系統從八點起就一直處於【離線】狀態，因為技術人員正在安裝更新，不過他們保證午餐前一切就會恢復正常。"
  },
  {
    "word": "download",
    "pos": "v.",
    "cn_def": "下載",
    "en_def": "to copy a file from the internet onto your computer or phone",
    "sentence": "A: I'm flying to Singapore tomorrow for the trade show, and I'm worried that there won't be any internet on the plane, so how can I review the slides? B: You should {{BLANK}} the presentation onto your tablet tonight, so you can practice your speech during the flight without needing a connection.",
    "cn": "A：我明天要飛去新加坡參加貿易展，我擔心飛機上沒有網路，那我要怎麼複習投影片？ B：你應該今晚就把簡報【下載】到平板電腦上，這樣你在飛行途中不需要連線也能練習演講。"
  },
  {
    "word": "upload",
    "pos": "v.",
    "cn_def": "上傳",
    "en_def": "to send a file from your computer to the internet",
    "sentence": "A: The manager in Tokyo needs to see the photos from yesterday's product launch before her meeting this afternoon, but the files are too large to email. B: Then please {{BLANK}} them to the shared folder right now, and send her a short message so she knows where to find them.",
    "cn": "A：東京的經理今天下午開會前需要看昨天產品發表會的照片，但檔案太大無法用電子郵件寄送。 B：那請現在就把它們【上傳】到共用資料夾，並傳個簡短訊息給她，讓她知道去哪裡找。"
  },
  {
    "word": "stream",
    "pos": "v.",
    "cn_def": "串流播放；直播",
    "en_def": "to send or watch video or sound over the internet as it happens",
    "sentence": "A: Many of our overseas employees can't travel to the head office for the CEO's speech next Monday, so how can they still watch it? B: We plan to {{BLANK}} the whole event live on the company website, and anyone who misses it can watch the recording later in the week.",
    "cn": "A：我們許多海外員工下週一無法到總公司聽執行長的演講，那他們要怎麼觀看？ B：我們打算在公司網站上【直播】整場活動，錯過的人也可以在這週稍晚觀看錄影。"
  },
  {
    "word": "wifi",
    "pos": "n.",
    "cn_def": "無線網路",
    "en_def": "a way of connecting to the internet without wires",
    "sentence": "A: Excuse me, I'm waiting for my interview with the hiring manager, and I need to check an important email from my current employer, so is there any internet I can use? B: Yes, our free guest {{BLANK}} is available in the lobby, and the password is printed on the card next to the reception desk.",
    "cn": "A：不好意思，我正在等招聘經理的面試，我需要查看現任雇主寄來的一封重要電子郵件，請問有網路可以用嗎？ B：有的，大廳提供免費的訪客【無線網路】，密碼就印在接待櫃檯旁邊的卡片上。"
  },
  {
    "word": "network",
    "pos": "n.",
    "cn_def": "網路；網絡",
    "en_def": "a group of computers that are connected to each other",
    "sentence": "A: Why are all the printers on the third floor showing an error message, even though they have plenty of paper and ink? B: The office {{BLANK}} went down after the storm last night, so none of the computers can send documents to them until the technician fixes the cables.",
    "cn": "A：為什麼三樓所有的印表機都顯示錯誤訊息，即使它們的紙和墨水都很充足？ B：辦公室【網路】在昨晚的暴風雨後就斷線了，所以在技術人員修好線路之前，沒有一台電腦能把文件傳送給它們。"
  },
  {
    "word": "server",
    "pos": "n.",
    "cn_def": "伺服器",
    "en_def": "a powerful computer that stores information and sends it to other computers",
    "sentence": "A: Our online store was very slow during the holiday sale, and many customers complained that they couldn't finish paying for their orders. B: That's because our {{BLANK}} couldn't handle so many visitors at once, so the IT manager has decided to buy a more powerful one before the next big promotion.",
    "cn": "A：我們的網路商店在假期特賣期間非常慢，很多顧客抱怨無法完成訂單付款。 B：那是因為我們的【伺服器】無法同時應付這麼多訪客，所以資訊經理決定在下一次大型促銷前買一台更強大的。"
  },
  {
    "word": "client",
    "pos": "n.",
    "cn_def": "用戶端；客戶端",
    "en_def": "a computer program that connects to a server to get information, such as an email program",
    "sentence": "A: I can read my work emails on the website, but they don't appear in the mail program on my new laptop, so what is wrong? B: You probably haven't set up the email {{BLANK}} with the correct server address yet, so let me show you the settings that the IT team sent us last week.",
    "cn": "A：我可以在網站上看我的工作郵件，但它們沒有出現在我新筆電的郵件程式裡，是哪裡出問題了？ B：你可能還沒用正確的伺服器位址設定電子郵件【用戶端】，我來給你看資訊團隊上週寄給我們的設定。"
  },
  {
    "word": "cloud",
    "pos": "n.",
    "cn_def": "雲端",
    "en_def": "online storage on servers that you can use from anywhere",
    "sentence": "A: My laptop was stolen at the airport yesterday, and I'm afraid I've lost all the sales reports I was working on for the regional meeting. B: Don't worry too much, because the company saves all our files in the {{BLANK}} automatically, so you can open them again from any computer once you log in.",
    "cn": "A：我的筆電昨天在機場被偷了，我擔心我為區域會議準備的所有銷售報告都不見了。 B：別太擔心，因為公司會自動把我們所有的檔案儲存在【雲端】，所以你只要登入，就能從任何一台電腦再次打開它們。"
  },
  {
    "word": "cyberspace",
    "pos": "n.",
    "cn_def": "網路空間",
    "en_def": "the online world of computer networks",
    "sentence": "A: Our new product video was shared thousands of times over the weekend, but some people posted angry comments about the price, so should we reply? B: Yes, but carefully, because once something is said in {{BLANK}}, it can spread around the world in minutes and is almost impossible to remove.",
    "cn": "A：我們的新產品影片在週末被分享了好幾千次，但有些人留下對價格不滿的評論，我們應該回覆嗎？ B：應該，但要小心，因為一旦在【網路空間】說了什麼，它就可能在幾分鐘內傳遍全世界，幾乎不可能刪除。"
  },
  {
    "word": "social media",
    "pos": "n.phr.",
    "cn_def": "社群媒體",
    "en_def": "websites and apps where people share messages, photos and videos",
    "sentence": "A: How did so many young customers hear about the opening of our new coffee shop near the university, since we didn't put any ads in the newspaper? B: Our marketing assistant posted photos of the drinks and the cozy seating area on {{BLANK}}, and students quickly shared them with their friends.",
    "cn": "A：既然我們沒有在報紙上登任何廣告，那麼這麼多年輕顧客是怎麼得知我們在大學附近新咖啡店開幕的？ B：我們的行銷助理在【社群媒體】上發布了飲料和舒適座位區的照片，學生們很快就分享給他們的朋友。"
  },
  {
    "word": "platform",
    "pos": "n.",
    "cn_def": "平台",
    "en_def": "a website or service people use to do something online, such as selling goods",
    "sentence": "A: We want to sell our handmade bags to customers in other countries, but we don't have the money to build our own online shop yet. B: Then we could start on a popular shopping {{BLANK}} that already has millions of users, and it will also handle the payments and shipping labels for us.",
    "cn": "A：我們想把手工包賣給其他國家的顧客，但我們還沒有錢架設自己的網路商店。 B：那我們可以先在一個已經擁有數百萬用戶的熱門購物【平台】上開始，它也會幫我們處理付款和運送標籤。"
  },
  {
    "word": "search engine",
    "pos": "n.phr.",
    "cn_def": "搜尋引擎",
    "en_def": "a website that helps you find information on the internet",
    "sentence": "A: When people look for office furniture in our city, our company appears on the fifth page of results, so very few of them ever find us. B: We should hire an expert to improve how our website appears on the main {{BLANK}}, so that we show up on the first page instead.",
    "cn": "A：當人們在我們城市找辦公家具時，我們公司出現在搜尋結果第五頁，所以很少人找得到我們。 B：我們應該請專家改善我們的網站在主要【搜尋引擎】上的呈現方式，讓我們改為出現在第一頁。"
  },
  {
    "word": "keyword",
    "pos": "n.",
    "cn_def": "關鍵字",
    "en_def": "an important word you type to find information",
    "sentence": "A: I've been looking through the company's old customer files for an hour, but I still can't find the contract with the supplier from Osaka. B: Try typing the {{BLANK}} \"Osaka\" into the box at the top of the folder, and the system will show you every document that contains that name.",
    "cn": "A：我已經翻公司的舊客戶檔案一個小時了，但還是找不到和大阪供應商簽的合約。 B：試著在資料夾上方的框格輸入【關鍵字】「大阪」，系統就會顯示所有包含那個名稱的文件。"
  },
  {
    "word": "link",
    "pos": "n.",
    "cn_def": "連結",
    "en_def": "a word or picture on a web page that takes you to another page when you click it",
    "sentence": "A: How will the new employees sign up for the online safety training course that starts next Wednesday morning? B: I'll send everyone an email with a {{BLANK}} to the registration page, and they just need to click it, enter their staff number, and choose a time.",
    "cn": "A：新員工要怎麼報名下週三早上開始的線上安全訓練課程？ B：我會寄給每個人一封附有報名頁面【連結】的電子郵件，他們只要點擊它、輸入員工編號並選擇時段就好。"
  },
  {
    "word": "homepage",
    "pos": "n.",
    "cn_def": "首頁",
    "en_def": "the main page of a website",
    "sentence": "A: Our customers keep calling to ask whether the store will be closed during the national holiday next week, and the receptionist is getting very busy. B: Let's put a clear notice about the holiday hours at the top of our {{BLANK}}, so visitors will see it as soon as they open the website.",
    "cn": "A：顧客一直打電話來問店裡下週國定假日是否休息，櫃檯人員變得非常忙碌。 B：我們在【首頁】最上方放一則清楚的假日營業時間公告吧，這樣訪客一打開網站就會看到。"
  },
  {
    "word": "account",
    "pos": "n.",
    "cn_def": "帳號；帳戶",
    "en_def": "a personal record that lets you use a website or service",
    "sentence": "A: I'd like to track the delivery of the printer paper I ordered from your website last Tuesday, but I can't find the order number anywhere. B: If you log in to your {{BLANK}} and click on 'My Orders,' you'll see the order number, the delivery date, and the name of the shipping company.",
    "cn": "A：我想追蹤上週二在你們網站訂購的印表機紙張的配送進度，但到處都找不到訂單編號。 B：如果你登入你的【帳號】並點選「我的訂單」，就會看到訂單編號、送達日期和貨運公司的名稱。"
  },
  {
    "word": "password",
    "pos": "n.",
    "cn_def": "密碼",
    "en_def": "a secret word you use to enter a computer system or website",
    "sentence": "A: I've been away on vacation for two weeks, and now the computer won't let me into the sales system, no matter how many times I try. B: The company asks everyone to change their {{BLANK}} every month for safety reasons, so you'll need to call the help desk to get a new one.",
    "cn": "A：我休假兩週回來，現在不管試幾次，電腦都不讓我進入銷售系統。 B：公司基於安全考量要求每個人每個月都要更改【密碼】，所以你需要打電話給服務台取得一個新的。"
  },
  {
    "word": "username",
    "pos": "n.",
    "cn_def": "使用者名稱",
    "en_def": "the name you use to log in to a computer system or website",
    "sentence": "A: I'm trying to sign in to the training website for new staff, but it keeps telling me that my details are wrong even though I typed carefully. B: Your {{BLANK}} is probably your employee number, not your email address, so check the welcome letter from Human Resources and try again.",
    "cn": "A：我想登入新進員工的訓練網站，但即使我很小心地輸入，它還是一直說我的資料錯誤。 B：你的【使用者名稱】可能是你的員工編號，而不是電子郵件地址，所以看一下人資部的歡迎信再試一次。"
  },
  {
    "word": "privacy",
    "pos": "n.",
    "cn_def": "隱私",
    "en_def": "the right to keep your personal information secret",
    "sentence": "A: Some customers are worried about giving us their phone numbers and home addresses when they join our new membership program at the supermarket. B: We should explain clearly that we protect their {{BLANK}} and will never sell their personal information to other companies, and we can print this promise on the application form.",
    "cn": "A：有些顧客擔心在加入我們超市新的會員計畫時，要給我們他們的電話號碼和住址。 B：我們應該清楚說明我們會保護他們的【隱私】，絕不會把他們的個人資料賣給其他公司，我們也可以把這個承諾印在申請表上。"
  },
  {
    "word": "security",
    "pos": "n.",
    "cn_def": "安全；資安",
    "en_def": "protection against danger, crime or attacks",
    "sentence": "A: Why did the bank ask me to enter a code from my phone after I typed my password into its website this morning? B: It's an extra {{BLANK}} step to protect your money, because criminals sometimes steal passwords, and the code proves that the person logging in is really you.",
    "cn": "A：為什麼今天早上我在銀行網站輸入密碼後，它還要求我輸入手機上的驗證碼？ B：那是額外的【安全】步驟，用來保護你的錢，因為罪犯有時會偷取密碼，而這個驗證碼能證明登入的人真的是你。"
  },
  {
    "word": "virus",
    "pos": "n.",
    "cn_def": "電腦病毒",
    "en_def": "a program that secretly enters a computer and damages files",
    "sentence": "A: My computer suddenly became very slow after I opened an attachment from someone I didn't know, and now strange windows keep appearing on the screen. B: It sounds like you've got a {{BLANK}}, so turn off the internet right away and call the IT department before it spreads to other computers in the office.",
    "cn": "A：我打開一個陌生人寄來的附件後，電腦突然變得很慢，現在螢幕上一直跳出奇怪的視窗。 B：聽起來你中了【病毒】，所以馬上關掉網路並打電話給資訊部門，以免它擴散到辦公室裡的其他電腦。"
  },
  {
    "word": "spam",
    "pos": "n.",
    "cn_def": "垃圾郵件",
    "en_def": "unwanted emails sent to many people, usually to sell something",
    "sentence": "A: Every morning my inbox is full of messages about cheap watches and free prizes, and it takes me twenty minutes to find the emails from real customers. B: You can turn on the {{BLANK}} filter in your settings, and it will move those advertising messages into a separate folder automatically.",
    "cn": "A：每天早上我的收件匣都塞滿關於便宜手錶和免費獎品的訊息，我要花二十分鐘才能找到真正客戶寄來的郵件。 B：你可以在設定中開啟【垃圾郵件】過濾功能，它會自動把那些廣告訊息移到另一個資料夾。"
  },
  {
    "word": "firewall",
    "pos": "n.",
    "cn_def": "防火牆",
    "en_def": "a system that stops dangerous or unwanted access to a computer network",
    "sentence": "A: I'm trying to open a website for my research report, but a message says the page is blocked by the company, so what does that mean? B: Our {{BLANK}} stops staff from visiting websites that might be dangerous, but if you really need that page for work, the IT team can check it and unblock it.",
    "cn": "A：我想為我的研究報告打開一個網站，但訊息顯示該網頁被公司封鎖了，這是什麼意思？ B：我們的【防火牆】會阻止員工瀏覽可能有危險的網站，不過如果你工作上真的需要那個網頁，資訊團隊可以檢查後幫你解除封鎖。"
  },
  {
    "word": "bandwidth",
    "pos": "n.",
    "cn_def": "頻寬",
    "en_def": "the amount of data an internet connection can carry in a certain time",
    "sentence": "A: Every afternoon our video meetings with the factory in Vietnam keep freezing, and sometimes we can't hear what the engineers are saying at all. B: That's when many staff are uploading large files at the same time, so we don't have enough {{BLANK}}, and the manager is planning to upgrade our internet package.",
    "cn": "A：每天下午我們和越南工廠的視訊會議都一直卡住，有時候完全聽不到工程師在說什麼。 B：那是因為很多員工在同一時間上傳大型檔案，所以我們的【頻寬】不足，經理正計劃升級我們的網路方案。"
  },
  {
    "word": "latency",
    "pos": "n.",
    "cn_def": "延遲",
    "en_def": "the delay between sending data and its arrival",
    "sentence": "A: During yesterday's online meeting with our partners in Brazil, there was a short pause every time someone spoke, so people kept interrupting each other. B: The high {{BLANK}} was caused by the long distance and a weak connection, so next time we should use the meeting room with the faster cable line.",
    "cn": "A：在昨天和巴西合作夥伴的線上會議中，每次有人說話時都會短暫停頓，所以大家一直打斷彼此。 B：高【延遲】是由遙遠距離和連線不穩所造成的，所以下次我們應該使用有較快有線網路的會議室。"
  },
  {
    "word": "forum",
    "pos": "n.",
    "cn_def": "論壇",
    "en_def": "a website where people discuss a subject by posting messages",
    "sentence": "A: I'm having trouble using the new accounting software, and the user guide doesn't explain how to create a monthly sales chart. B: Have you tried asking on the company's user {{BLANK}}, where thousands of customers share tips and answer each other's questions about common problems every day?",
    "cn": "A：我在使用新的會計軟體時遇到困難，使用手冊也沒有說明如何製作每月銷售圖表。 B：你試過到該公司的用戶【論壇】上發問嗎？那裡每天有成千上萬的顧客分享訣竅，並互相回答常見問題。"
  },
  {
    "word": "blog",
    "pos": "n.",
    "cn_def": "部落格",
    "en_def": "a website where someone regularly writes about their experiences or opinions",
    "sentence": "A: How can our small travel agency show customers that our staff really know the best places to visit in Japan and Korea? B: We could start a {{BLANK}} where our tour guides write about their favorite restaurants, hotels, and hidden spots, and then we can add a new article every week.",
    "cn": "A：我們這間小旅行社要怎麼向顧客展現我們的員工真的很了解日本和韓國最值得去的地方？ B：我們可以開一個【部落格】，讓我們的導遊寫他們最喜歡的餐廳、飯店和私房景點，然後每週新增一篇文章。"
  },
  {
    "word": "podcast",
    "pos": "n.",
    "cn_def": "播客；Podcast節目",
    "en_def": "a recorded audio program that you can listen to on the internet",
    "sentence": "A: I spend almost an hour on the train every morning, and I'd like to use that time to learn more about marketing and leadership. B: You should listen to a business {{BLANK}}, because many experts talk about their experiences in short episodes, and you can download them to your phone before you leave home.",
    "cn": "A：我每天早上要在火車上花將近一小時，我想利用這段時間多學一些行銷和領導的知識。 B：你應該聽商業【播客節目】，因為很多專家會在短短的單集中分享他們的經驗，你可以在出門前下載到手機上。"
  },
  {
    "word": "ecommerce",
    "pos": "n.",
    "cn_def": "電子商務",
    "en_def": "buying and selling goods on the internet",
    "sentence": "A: Our sales in the shopping mall have dropped by twenty percent this year, while more and more people seem to buy everything with their phones. B: That's why the board wants to invest in {{BLANK}}, so customers can order our shoes from home and have them delivered to their door within two days.",
    "cn": "A：我們今年在購物中心的銷售額下滑了百分之二十，而越來越多人似乎都用手機購買所有東西。 B：這就是為什麼董事會想投資【電子商務】，讓顧客可以在家訂購我們的鞋子，並在兩天內送到家門口。"
  },
  {
    "word": "digital",
    "pos": "adj.",
    "cn_def": "數位的",
    "en_def": "using computers or the internet; not on paper",
    "sentence": "A: The accounting department still keeps thousands of paper receipts in boxes, and it takes hours to find an old one when the tax office asks for it. B: The new manager plans to scan everything and create {{BLANK}} copies, so staff can find any receipt in seconds by typing the date or the amount.",
    "cn": "A：會計部門仍然把成千上萬張紙本收據放在箱子裡，當稅務局要求時，找一張舊收據要花好幾個小時。 B：新經理打算把所有東西都掃描並建立【數位】副本，讓員工只要輸入日期或金額就能在幾秒內找到任何收據。"
  }
];

const MCQS = [
  {
    "q": "Customers can now check our latest prices on the company _____ at any time. The marketing team updates the pages every Friday afternoon.",
    "options": [
      "website",
      "password",
      "virus",
      "bandwidth"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Please close the old _____ and open the report in a newer one. The current version cannot display our updated charts correctly.",
    "options": [
      "keyword",
      "spam",
      "browser",
      "podcast"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Customers no longer need to visit the bank to pay their bills. They can now do it _____ from their phones in a few minutes.",
    "options": [
      "offline",
      "online",
      "upstairs",
      "overseas"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The booking system will be _____ from midnight until early morning for maintenance. Guests cannot make reservations during those hours.",
    "options": [
      "digital",
      "curious",
      "annual",
      "offline"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Before your flight, please _____ the training videos onto your tablet. There is no internet connection available on the plane.",
    "options": [
      "upload",
      "operate",
      "download",
      "borrow"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Please _____ the photos from the trade show to the shared folder today. The design team needs them for the new brochure.",
    "options": [
      "upload",
      "stream",
      "refuse",
      "complain"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The company will _____ the CEO's speech live for employees in overseas offices. Staff who miss it can watch the recording later.",
    "options": [
      "borrow",
      "repair",
      "decline",
      "stream"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The hotel offers free _____ in every room and in the lobby. Guests can find the password on the card beside the bed.",
    "options": [
      "spam",
      "wifi",
      "virus",
      "latency"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "All the computers in the office are connected to one _____. When it went down this morning, nobody could print or share files.",
    "options": [
      "network",
      "keyword",
      "blog",
      "privacy"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Our online store crashed during the holiday sale because the _____ could not handle so many visitors. The IT team will replace it next month.",
    "options": [
      "password",
      "keyword",
      "server",
      "privacy"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "All of our files are saved in the _____, so staff can open them from any device. Nothing was lost when the laptop was stolen.",
    "options": [
      "spam",
      "cloud",
      "firewall",
      "keyword"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The café became popular after customers shared photos of its drinks on _____. Many young people visited after seeing the posts online.",
    "options": [
      "search engine",
      "bandwidth",
      "firewall",
      "social media"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Small businesses can sell their products on a large shopping _____ without building their own website. It also handles payments and shipping.",
    "options": [
      "password",
      "virus",
      "platform",
      "privacy"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Most customers find new restaurants by typing a few words into a _____. Our website should appear on the first page of results.",
    "options": [
      "search engine",
      "firewall",
      "podcast",
      "virus"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "To find the contract quickly, type the supplier's name as a _____ in the box. The system will list every matching document.",
    "options": [
      "server",
      "blog",
      "firewall",
      "keyword"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "I will email everyone a _____ to the registration page. Simply click it and fill in your name and staff number.",
    "options": [
      "virus",
      "link",
      "privacy",
      "bandwidth"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "A notice about the new holiday hours appears at the top of our _____. Visitors will see it as soon as they open the website.",
    "options": [
      "homepage",
      "password",
      "latency",
      "firewall"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "To track your order, log in to your _____ and click on the order history page. The delivery date is shown there.",
    "options": [
      "spam",
      "latency",
      "account",
      "virus"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "For safety reasons, employees must change their _____ every three months. It should contain both letters and numbers.",
    "options": [
      "bandwidth",
      "password",
      "forum",
      "privacy"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The membership form promises that we will protect customers' _____. We never sell their personal information to other companies.",
    "options": [
      "bandwidth",
      "latency",
      "spam",
      "privacy"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The bank added an extra _____ step to its website to stop criminals. Users must now enter a code sent to their phones.",
    "options": [
      "forum",
      "podcast",
      "security",
      "blog"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Do not open attachments from people you do not know. A _____ could damage your files and spread to other computers in the office.",
    "options": [
      "virus",
      "podcast",
      "homepage",
      "keyword"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "My inbox is full of _____ about cheap watches and free prizes. I set up a filter to move those messages away.",
    "options": [
      "bandwidth",
      "privacy",
      "firewall",
      "spam"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The company _____ blocks websites that might be dangerous. If you need a blocked page for work, ask the IT team.",
    "options": [
      "podcast",
      "firewall",
      "blog",
      "keyword"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Video calls keep freezing because many staff upload large files at the same time. We need more _____ to support everyone.",
    "options": [
      "bandwidth",
      "spam",
      "privacy",
      "podcast"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "If you have questions about the software, post them on the user _____. Other customers often answer within an hour.",
    "options": [
      "firewall",
      "password",
      "forum",
      "virus"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Our tour guides write about their favorite restaurants on the company _____. A new article is posted every Monday morning.",
    "options": [
      "password",
      "blog",
      "firewall",
      "latency"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "I listen to a business _____ on the train every morning. Each episode lasts about thirty minutes and features an interview with an expert.",
    "options": [
      "password",
      "firewall",
      "keyword",
      "podcast"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The shoe company is investing heavily in _____ because more customers shop on their phones. Online orders now make up half of its sales.",
    "options": [
      "latency",
      "spam",
      "ecommerce",
      "privacy"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The accounting team is scanning old paper receipts to create _____ copies. Staff will then be able to find any record in seconds.",
    "options": [
      "digital",
      "curious",
      "hungry",
      "polite"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "website": {
    "pos": "n.",
    "en_def": "a group of pages on the internet about a company or subject",
    "cn_def": "網站"
  },
  "browser": {
    "pos": "n.",
    "en_def": "a program used to look at pages on the internet",
    "cn_def": "瀏覽器"
  },
  "online": {
    "pos": "adv.",
    "en_def": "on or through the internet",
    "cn_def": "在線上；透過網路"
  },
  "offline": {
    "pos": "adj.",
    "en_def": "not connected to the internet",
    "cn_def": "離線的"
  },
  "download": {
    "pos": "v.",
    "en_def": "to copy a file from the internet onto your computer or phone",
    "cn_def": "下載"
  },
  "upload": {
    "pos": "v.",
    "en_def": "to send a file from your computer to the internet",
    "cn_def": "上傳"
  },
  "stream": {
    "pos": "v.",
    "en_def": "to send or watch video or sound over the internet as it happens",
    "cn_def": "串流播放；直播"
  },
  "wifi": {
    "pos": "n.",
    "en_def": "a way of connecting to the internet without wires",
    "cn_def": "無線網路"
  },
  "network": {
    "pos": "n.",
    "en_def": "a group of computers that are connected to each other",
    "cn_def": "網路；網絡"
  },
  "server": {
    "pos": "n.",
    "en_def": "a powerful computer that stores information and sends it to other computers",
    "cn_def": "伺服器"
  },
  "client": {
    "pos": "n.",
    "en_def": "a computer program that connects to a server to get information, such as an email program",
    "cn_def": "用戶端；客戶端"
  },
  "cloud": {
    "pos": "n.",
    "en_def": "online storage on servers that you can use from anywhere",
    "cn_def": "雲端"
  },
  "cyberspace": {
    "pos": "n.",
    "en_def": "the online world of computer networks",
    "cn_def": "網路空間"
  },
  "social media": {
    "pos": "n.phr.",
    "en_def": "websites and apps where people share messages, photos and videos",
    "cn_def": "社群媒體"
  },
  "platform": {
    "pos": "n.",
    "en_def": "a website or service people use to do something online, such as selling goods",
    "cn_def": "平台"
  },
  "search engine": {
    "pos": "n.phr.",
    "en_def": "a website that helps you find information on the internet",
    "cn_def": "搜尋引擎"
  },
  "keyword": {
    "pos": "n.",
    "en_def": "an important word you type to find information",
    "cn_def": "關鍵字"
  },
  "link": {
    "pos": "n.",
    "en_def": "a word or picture on a web page that takes you to another page when you click it",
    "cn_def": "連結"
  },
  "homepage": {
    "pos": "n.",
    "en_def": "the main page of a website",
    "cn_def": "首頁"
  },
  "account": {
    "pos": "n.",
    "en_def": "a personal record that lets you use a website or service",
    "cn_def": "帳號；帳戶"
  },
  "password": {
    "pos": "n.",
    "en_def": "a secret word you use to enter a computer system or website",
    "cn_def": "密碼"
  },
  "username": {
    "pos": "n.",
    "en_def": "the name you use to log in to a computer system or website",
    "cn_def": "使用者名稱"
  },
  "privacy": {
    "pos": "n.",
    "en_def": "the right to keep your personal information secret",
    "cn_def": "隱私"
  },
  "security": {
    "pos": "n.",
    "en_def": "protection against danger, crime or attacks",
    "cn_def": "安全；資安"
  },
  "virus": {
    "pos": "n.",
    "en_def": "a program that secretly enters a computer and damages files",
    "cn_def": "電腦病毒"
  },
  "spam": {
    "pos": "n.",
    "en_def": "unwanted emails sent to many people, usually to sell something",
    "cn_def": "垃圾郵件"
  },
  "firewall": {
    "pos": "n.",
    "en_def": "a system that stops dangerous or unwanted access to a computer network",
    "cn_def": "防火牆"
  },
  "bandwidth": {
    "pos": "n.",
    "en_def": "the amount of data an internet connection can carry in a certain time",
    "cn_def": "頻寬"
  },
  "latency": {
    "pos": "n.",
    "en_def": "the delay between sending data and its arrival",
    "cn_def": "延遲"
  },
  "forum": {
    "pos": "n.",
    "en_def": "a website where people discuss a subject by posting messages",
    "cn_def": "論壇"
  },
  "blog": {
    "pos": "n.",
    "en_def": "a website where someone regularly writes about their experiences or opinions",
    "cn_def": "部落格"
  },
  "podcast": {
    "pos": "n.",
    "en_def": "a recorded audio program that you can listen to on the internet",
    "cn_def": "播客；Podcast節目"
  },
  "ecommerce": {
    "pos": "n.",
    "en_def": "buying and selling goods on the internet",
    "cn_def": "電子商務"
  },
  "digital": {
    "pos": "adj.",
    "en_def": "using computers or the internet; not on paper",
    "cn_def": "數位的"
  }
};

const EXTRA_GLOSSES = {};
