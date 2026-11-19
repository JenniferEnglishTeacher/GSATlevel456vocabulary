// Topic 440 Quiz Data: Website 網站
// Source word list: https://www.examword.com/group-topic/website — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T440 - Website 網站",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "webpage",
    "pos": "n.",
    "cn_def": "網頁",
    "en_def": "a single page on a website",
    "sentence": "A: Where can our new suppliers find the full list of delivery rules and the dates when the warehouse is closed for holidays? B: I put everything on one {{BLANK}} of our company site last week, so they only need to open it, read the rules carefully, and call me if anything is unclear.",
    "cn": "A：我們的新供應商可以在哪裡找到完整的送貨規則清單，以及倉庫因假日關閉的日期？ B：我上週把所有資料都放在公司網站的一個【網頁】上，所以他們只要打開它、仔細閱讀規則，如果有不清楚的地方再打電話給我就可以了。"
  },
  {
    "word": "homepage",
    "pos": "n.",
    "cn_def": "首頁",
    "en_def": "the main first page of a website",
    "sentence": "A: Customers keep telling the help desk that they cannot find our holiday sale, even though it started three days ago, so what should we change? B: Let's put a large banner about the sale right on the {{BLANK}}, because that is the first thing people see when they open our site.",
    "cn": "A：顧客一直告訴服務台說他們找不到我們的假日特賣，雖然特賣三天前就開始了，所以我們該改什麼？ B：我們把特賣的大橫幅直接放在【首頁】上吧，因為那是人們打開我們網站時第一眼看到的東西。"
  },
  {
    "word": "internet",
    "pos": "n.",
    "cn_def": "網際網路；網路",
    "en_def": "the worldwide system that connects computers",
    "sentence": "A: Why did the video meeting with the Tokyo office stop suddenly in the middle of the sales report this afternoon? B: The {{BLANK}} in our building went down for about twenty minutes because workers were repairing the cables downstairs, so nobody could connect to anything until they finished.",
    "cn": "A：為什麼今天下午和東京辦公室的視訊會議在銷售報告進行到一半時突然中斷了？ B：我們大樓的【網路】斷了大約二十分鐘，因為工人在樓下修理線路，所以在他們修好之前，大家都沒辦法連線。"
  },
  {
    "word": "online",
    "pos": "adj.",
    "cn_def": "線上的；網路上的",
    "en_def": "using or available on the internet",
    "sentence": "A: Is it still necessary for new staff to fill out the paper form at the front desk when they need to book a meeting room? B: Not anymore, because we started using an {{BLANK}} booking system last month, so they can reserve a room from their own computer in less than a minute.",
    "cn": "A：新員工需要預約會議室時，還必須在前台填寫紙本表格嗎？ B：不用了，因為我們上個月開始使用【線上】預約系統，所以他們可以在自己的電腦上用不到一分鐘就預約好房間。"
  },
  {
    "word": "browser",
    "pos": "n.",
    "cn_def": "瀏覽器",
    "en_def": "a program used to look at websites",
    "sentence": "A: The sales team says the new order form looks strange and some buttons are missing when they open it on their laptops, so what is going on? B: They are probably using an old {{BLANK}} that the form does not support, so I will ask the IT staff to install the latest version for everyone today.",
    "cn": "A：業務團隊說，他們在筆電上打開新的訂單表格時，畫面看起來很奇怪，而且有些按鈕不見了，到底怎麼回事？ B：他們可能用的是表格不支援的舊版【瀏覽器】，所以我今天會請資訊人員幫大家安裝最新版本。"
  },
  {
    "word": "search",
    "pos": "v.",
    "cn_def": "搜尋",
    "en_def": "to look for information, especially on a computer",
    "sentence": "A: I need the contract we signed with the printing company two years ago, but I have no idea which folder it is in. B: Just type the company's name into the box at the top of the shared drive and {{BLANK}} for it, because the system can look through thousands of files in a few seconds.",
    "cn": "A：我需要兩年前和印刷公司簽的合約，但我完全不知道它在哪個資料夾裡。 B：只要在共用硬碟上方的框框裡輸入那家公司的名字，然後【搜尋】它就行了，因為系統幾秒鐘內就能查遍上千個檔案。"
  },
  {
    "word": "search engine",
    "pos": "n.phr.",
    "cn_def": "搜尋引擎",
    "en_def": "a website that helps you find other websites",
    "sentence": "A: Our new bakery has a nice website, but almost nobody visits it, so how can we get more people in the neighborhood to find us? B: We should improve the words on each page so that our shop appears near the top when people use a {{BLANK}} to look for fresh bread nearby.",
    "cn": "A：我們新開的麵包店有個不錯的網站，但幾乎沒人造訪，我們要怎麼讓更多附近的人找到我們？ B：我們應該改善每一頁上的文字，這樣當人們用【搜尋引擎】找附近的新鮮麵包時，我們的店就會出現在前面。"
  },
  {
    "word": "link",
    "pos": "n.",
    "cn_def": "連結",
    "en_def": "words or a picture you click to go to another page",
    "sentence": "A: How will the hotel guests find the survey about their stay, since most of them leave very early and never stop at the front desk? B: We will send each guest a thank-you email with a {{BLANK}} to the survey, so they can click it on their phones and answer the questions in two minutes.",
    "cn": "A：飯店房客要怎麼找到關於住宿體驗的問卷？因為他們大多很早就離開，從不在櫃台停留。 B：我們會寄給每位房客一封感謝信，附上問卷的【連結】，這樣他們就能在手機上點開，兩分鐘內回答完問題。"
  },
  {
    "word": "URL",
    "pos": "n.",
    "cn_def": "網址",
    "en_def": "the address of a website",
    "sentence": "A: I want to tell the customers at tomorrow's trade fair about our new product page, but the address is very long and hard to remember. B: Let's print a short {{BLANK}} and a QR code on the brochures, so visitors can type it quickly or scan it with their phones while they are at our booth.",
    "cn": "A：我想在明天的商展上告訴顧客我們的新產品頁面，但那個地址很長又很難記。 B：我們在手冊上印一個簡短的【網址】和QR碼吧，這樣訪客在我們攤位時就能很快地輸入或用手機掃描。"
  },
  {
    "word": "domain",
    "pos": "n.",
    "cn_def": "網域名稱",
    "en_def": "the name of a website, such as company.com",
    "sentence": "A: Now that our travel agency has a new name, will customers still be able to reach our website by typing the old address they remember? B: Yes, because we are keeping the old {{BLANK}} for one more year, and it will send everyone automatically to the new site until people get used to the change.",
    "cn": "A：既然我們的旅行社改了新名字，顧客輸入他們記得的舊地址，還能連到我們的網站嗎？ B：可以，因為我們會把舊的【網域名稱】再保留一年，在大家習慣這個改變之前，它會自動把所有人導向新網站。"
  },
  {
    "word": "visit",
    "pos": "v.",
    "cn_def": "造訪；瀏覽",
    "en_def": "to go to a website or place to look at it",
    "sentence": "A: How do you know that the new advertisement on social media is really bringing more customers to our online shop? B: The report shows that about three thousand people {{BLANK}} our site every day now, which is almost twice as many as last month, and many of them buy something.",
    "cn": "A：你怎麼知道社群媒體上的新廣告真的為我們的網路商店帶來了更多顧客？ B：報告顯示現在每天大約有三千人【造訪】我們的網站，幾乎是上個月的兩倍，而且其中很多人都有買東西。"
  },
  {
    "word": "user",
    "pos": "n.",
    "cn_def": "使用者",
    "en_def": "a person who uses a website, product, or service",
    "sentence": "A: Why does the manager want us to make the buttons on the app bigger and the instructions shorter before the launch next month? B: Every {{BLANK}} we tested last week was older than sixty, and many of them said the small letters were hard to read on a phone screen.",
    "cn": "A：為什麼經理要我們在下個月上線前把應用程式的按鈕變大、說明變短？ B：我們上週測試的每一位【使用者】都超過六十歲，其中很多人說手機螢幕上的小字很難閱讀。"
  },
  {
    "word": "account",
    "pos": "n.",
    "cn_def": "帳戶；帳號",
    "en_def": "a personal record you use to sign in to a website",
    "sentence": "A: I would like to see all the orders I placed with your company this year, but I cannot find them anywhere on the site. B: First you need to create an {{BLANK}} with your email address, and after you sign in, you will see a list of every past order and its delivery date.",
    "cn": "A：我想查看今年在貴公司下的所有訂單，但我在網站上哪裡都找不到。 B：您需要先用電子郵件地址建立一個【帳戶】，登入之後，就會看到每一筆過去訂單和它的送貨日期。"
  },
  {
    "word": "login",
    "pos": "n.",
    "cn_def": "登入帳號；登入資料",
    "en_def": "the name and details you use to enter a computer system",
    "sentence": "A: The new intern starts working in the accounting department tomorrow morning, so what does she need before she can use the company computers? B: I will ask the IT team to set up a {{BLANK}} for her today, and they will give her a temporary password that she must change after the first day.",
    "cn": "A：新實習生明天早上開始在會計部上班，她能使用公司電腦之前需要什麼？ B：我今天會請資訊團隊幫她設定一個【登入帳號】，他們會給她一組臨時密碼，她必須在第一天之後更改。"
  },
  {
    "word": "password",
    "pos": "n.",
    "cn_def": "密碼",
    "en_def": "a secret word you need to enter a system",
    "sentence": "A: Why did the security team send everyone an email this morning asking us to sign in again and answer some questions? B: Someone tried to break into our system last night, so they want each employee to choose a new and stronger {{BLANK}} with numbers and symbols that nobody can guess easily.",
    "cn": "A：為什麼資安團隊今天早上寄信給大家，要我們重新登入並回答一些問題？ B：昨晚有人試圖入侵我們的系統，所以他們希望每位員工選一組新的、更強的【密碼】，包含數字和符號，讓別人不容易猜到。"
  },
  {
    "word": "download",
    "pos": "v.",
    "cn_def": "下載",
    "en_def": "to copy a file from the internet to your computer",
    "sentence": "A: Where can I find the slides from yesterday's training session on customer service, because I missed the second half of it? B: The trainer put them on the company website, so you can {{BLANK}} the file to your laptop and read it at home tonight, even without a network connection.",
    "cn": "A：我可以在哪裡找到昨天客服訓練課程的投影片？因為我錯過了後半段。 B：講師把它們放在公司網站上了，所以你可以把檔案【下載】到筆電上，今晚在家閱讀，即使沒有網路連線也可以。"
  },
  {
    "word": "upload",
    "pos": "v.",
    "cn_def": "上傳",
    "en_def": "to send a file from your computer to a website",
    "sentence": "A: How should I send you the photos of the damaged boxes that arrived at the warehouse this morning, since they are too large for email? B: Please {{BLANK}} them to the shared folder on our team site, and I will show them to the shipping company during our call this afternoon.",
    "cn": "A：今天早上送到倉庫的那些損壞箱子的照片，我該怎麼傳給你？因為檔案太大，沒辦法用電子郵件寄。 B：請把它們【上傳】到我們團隊網站的共用資料夾，我會在今天下午的通話中拿給貨運公司看。"
  },
  {
    "word": "content",
    "pos": "n.",
    "cn_def": "內容",
    "en_def": "the information, words, and pictures on a website",
    "sentence": "A: Our website looks modern and attractive, so why do customers leave after only a few seconds instead of reading about our services? B: The {{BLANK}} is the real problem, because the pages have too much difficult language and not enough useful facts about prices, opening hours, and delivery.",
    "cn": "A：我們的網站看起來既現代又吸引人，為什麼顧客只停留幾秒鐘就離開，而不去閱讀我們的服務介紹？ B：真正的問題在於【內容】，因為頁面上有太多艱澀的用語，卻沒有足夠關於價格、營業時間和送貨的實用資訊。"
  },
  {
    "word": "article",
    "pos": "n.",
    "cn_def": "文章",
    "en_def": "a piece of writing in a newspaper, magazine, or website",
    "sentence": "A: Have you seen the business magazine that wrote about our new recycling program for old phones and laptops? B: Yes, the {{BLANK}} appeared on their website yesterday, and since then our phone has been ringing all morning with companies that want to join the program.",
    "cn": "A：你看到那本報導我們舊手機和筆電新回收計畫的商業雜誌了嗎？ B：看到了，那篇【文章】昨天刊登在他們的網站上，從那之後，我們的電話整個早上響個不停，都是想加入這個計畫的公司打來的。"
  },
  {
    "word": "image",
    "pos": "n.",
    "cn_def": "圖片；影像",
    "en_def": "a picture",
    "sentence": "A: The product photos on our website look dark and blurry, so customers cannot see the details of the new handbags very clearly. B: Let's hire a professional photographer next week, and each {{BLANK}} will be bright and sharp enough to show the leather, the colors, and the small metal parts.",
    "cn": "A：我們網站上的產品照片看起來又暗又模糊，所以顧客看不太清楚新款手提包的細節。 B：我們下週請一位專業攝影師吧，這樣每張【圖片】都會夠明亮、夠清晰，可以呈現皮革、顏色和小小的金屬配件。"
  },
  {
    "word": "video",
    "pos": "n.",
    "cn_def": "影片",
    "en_def": "a recording of moving pictures",
    "sentence": "A: Many customers call us because they do not understand how to put together the new office desk, so what can we do to help them? B: We could make a short {{BLANK}} that shows every step clearly and put it on our website, so they can watch it while they are building the desk.",
    "cn": "A：很多顧客打電話來，因為他們不知道怎麼組裝新款辦公桌，我們能做些什麼幫助他們？ B：我們可以製作一支短【影片】，清楚地示範每個步驟並放在網站上，這樣他們就能一邊組裝桌子一邊觀看。"
  },
  {
    "word": "comment",
    "pos": "n.",
    "cn_def": "評論；留言",
    "en_def": "a written opinion about something",
    "sentence": "A: How do you know that the customers are happy with the new delivery service we started in the city center last month? B: Almost every {{BLANK}} under our latest post says that the packages arrived faster than expected, and several people even thanked the drivers for being so polite.",
    "cn": "A：你怎麼知道顧客對我們上個月在市中心推出的新送貨服務很滿意？ B：我們最新貼文下方幾乎每一則【留言】都說包裹比預期更快送達，還有好幾個人甚至感謝司機那麼有禮貌。"
  },
  {
    "word": "share",
    "pos": "v.",
    "cn_def": "分享",
    "en_def": "to let other people see something you have posted",
    "sentence": "A: What is the best way to tell more people about the charity run that our company is organizing next month in the park? B: Ask all the employees to {{BLANK}} the event page with their friends on social media, because personal posts usually reach many more people than paid advertisements.",
    "cn": "A：要讓更多人知道我們公司下個月在公園舉辦的慈善路跑，最好的方法是什麼？ B：請所有員工在社群媒體上和朋友【分享】活動頁面，因為個人貼文通常比付費廣告能觸及更多人。"
  },
  {
    "word": "subscribe",
    "pos": "v.",
    "cn_def": "訂閱",
    "en_def": "to sign up to receive something regularly",
    "sentence": "A: How can our regular customers find out about special discounts before the general public sees them in the stores? B: They can {{BLANK}} to our monthly newsletter on the website, and then they will receive an email with private offers a few days before every sale starts.",
    "cn": "A：我們的老顧客要怎麼在一般大眾在店裡看到之前，先得知特別折扣？ B：他們可以在網站上【訂閱】我們的每月電子報，這樣每次特賣開始前幾天，他們就會收到一封附有專屬優惠的電子郵件。"
  },
  {
    "word": "update",
    "pos": "v.",
    "cn_def": "更新",
    "en_def": "to add the newest information to something",
    "sentence": "A: A customer just complained that the prices on our website are different from the prices printed in our new catalog. B: I am sorry about that, because I forgot to {{BLANK}} the price list online after the meeting on Monday, but I will fix it before lunch today.",
    "cn": "A：有位顧客剛剛抱怨我們網站上的價格和新目錄上印的價格不一樣。 B：很抱歉，因為我週一開會後忘了【更新】網路上的價目表，但我今天午餐前會把它改好。"
  },
  {
    "word": "design",
    "pos": "n.",
    "cn_def": "設計",
    "en_def": "the way something is planned and made to look",
    "sentence": "A: What did the customers say about our website during the survey that the marketing team did last month? B: Most of them liked the clean {{BLANK}} with its soft colors and large pictures, but some people said it was difficult to find the contact information.",
    "cn": "A：行銷團隊上個月做的調查中，顧客對我們的網站怎麼說？ B：他們大多數人喜歡那種簡潔的【設計】，有柔和的色彩和大張的圖片，但有些人說很難找到聯絡資訊。"
  },
  {
    "word": "layout",
    "pos": "n.",
    "cn_def": "版面配置",
    "en_def": "the way things are arranged on a page",
    "sentence": "A: Why do people complain that our online order form is confusing, when it only asks for their name, address, and payment details? B: The {{BLANK}} is the problem, because the boxes are placed in strange positions all over the page, so customers do not know which one to fill in first.",
    "cn": "A：我們的線上訂購表只要求填姓名、地址和付款資料，為什麼大家還抱怨它很難懂？ B：問題出在【版面配置】，因為那些欄位被放在頁面上各種奇怪的位置，所以顧客不知道要先填哪一個。"
  },
  {
    "word": "menu",
    "pos": "n.",
    "cn_def": "選單",
    "en_def": "a list of choices on a website or computer screen",
    "sentence": "A: I am trying to find the page about job openings on the hotel's website, but I only see photos of the rooms and restaurant. B: Click the small {{BLANK}} at the top right corner of the screen, and you will see a list of choices, including one called careers.",
    "cn": "A：我想在這家飯店的網站上找職缺的頁面，但我只看到客房和餐廳的照片。 B：點一下螢幕右上角的小【選單】，你就會看到一串選項，其中有一個叫做職涯。"
  },
  {
    "word": "navigation",
    "pos": "n.",
    "cn_def": "導覽；瀏覽方式",
    "en_def": "the way people move around a website",
    "sentence": "A: Why did the website designer say that we need to rebuild the whole site instead of only changing the colors? B: She said the {{BLANK}} is too confusing, because visitors must click five or six times to reach the product pages, and many of them give up before they find anything.",
    "cn": "A：為什麼網站設計師說我們需要重建整個網站，而不是只改變顏色？ B：她說【導覽方式】太令人困惑，因為訪客必須點擊五、六次才能到達產品頁面，很多人在找到任何東西之前就放棄了。"
  },
  {
    "word": "fast",
    "pos": "adj.",
    "cn_def": "快速的",
    "en_def": "quick",
    "sentence": "A: Our customers often complain that our website takes too long to open, so what did the technician suggest yesterday? B: He said that if we make the photos smaller and move to a better server, the pages will become very {{BLANK}}, and visitors will not have to wait at all.",
    "cn": "A：我們的顧客常常抱怨我們的網站開啟時間太久，昨天技術人員建議了什麼？ B：他說如果我們把照片縮小並改用更好的伺服器，頁面就會變得非常【快速】，訪客完全不用等待。"
  },
  {
    "word": "slow",
    "pos": "adj.",
    "cn_def": "緩慢的",
    "en_def": "taking a long time",
    "sentence": "A: Why are so many staff members working from the coffee shop downstairs instead of at their own desks this week? B: The office network has been very {{BLANK}} since the storm damaged some equipment on the roof, and it takes several minutes to send even a small file.",
    "cn": "A：為什麼這週有那麼多員工在樓下的咖啡店工作，而不是在自己的座位上？ B：自從暴風雨損壞了屋頂上的一些設備，辦公室的網路就一直非常【緩慢】，連傳送一個小檔案都要好幾分鐘。"
  },
  {
    "word": "secure",
    "pos": "adj.",
    "cn_def": "安全的",
    "en_def": "safe and protected from danger or crime",
    "sentence": "A: Some older customers are worried about typing their credit card numbers on our website because they have heard stories about online crime. B: We should explain on the payment page that our system is completely {{BLANK}}, and that all personal details are protected by the latest technology from a trusted company.",
    "cn": "A：有些年長的顧客擔心在我們網站上輸入信用卡號碼，因為他們聽過網路犯罪的故事。 B：我們應該在付款頁面上說明我們的系統是完全【安全的】，而且所有個人資料都受到一家可信賴公司最新技術的保護。"
  },
  {
    "word": "popular",
    "pos": "adj.",
    "cn_def": "受歡迎的",
    "en_def": "liked by many people",
    "sentence": "A: Which section of our travel website do visitors spend the most time on, according to the report from the marketing department? B: The page with cheap weekend trips is the most {{BLANK}} part of the site, so we are planning to add more short holidays to nearby islands next month.",
    "cn": "A：根據行銷部的報告，訪客在我們旅遊網站的哪個區塊停留最久？ B：便宜週末旅遊的那個頁面是網站上最【受歡迎的】部分，所以我們計劃下個月增加更多前往鄰近島嶼的短程假期。"
  },
  {
    "word": "information",
    "pos": "n.",
    "cn_def": "資訊；資料",
    "en_def": "facts or details about something",
    "sentence": "A: A tourist called the front desk to ask about the bus to the airport, the ticket price, and how often it leaves. B: Please tell her that all the {{BLANK}} she needs is on our hotel's website under the transportation section, and she can also ask the concierge in the lobby.",
    "cn": "A：一位觀光客打電話到櫃台詢問去機場的巴士、票價以及多久發一班車。 B：請告訴她，她需要的所有【資訊】都在我們飯店網站的交通區塊，她也可以詢問大廳的禮賓人員。"
  }
];

const MCQS = [
  {
    "q": "Our team created a separate _____ for the spring conference. It lists the speakers, the schedule, and the hotel address.",
    "options": [
      "webpage",
      "password",
      "browser",
      "comment"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Visitors see our latest news as soon as they open the site. It is displayed in large letters on the _____.",
    "options": [
      "password",
      "login",
      "homepage",
      "domain"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The hotel offers free wireless _____ in every guest room. Guests only need the code printed on their room key card.",
    "options": [
      "navigation",
      "internet",
      "layout",
      "content"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The sweaters are sold only in our _____ shop. Customers cannot buy them in any of our stores downtown.",
    "options": [
      "slow",
      "secure",
      "popular",
      "online"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "This website works best in the latest version of your web _____. Older versions may not show some pictures correctly.",
    "options": [
      "domain",
      "browser",
      "menu",
      "article"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "You can _____ for any book in the library by typing its title. The system will show you which shelf it is on.",
    "options": [
      "search",
      "upload",
      "subscribe",
      "share"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Most customers found our shop by typing 'flowers' into a _____. That is why we want to appear on the first page of results.",
    "options": [
      "password",
      "layout",
      "search engine",
      "comment"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Please click the _____ at the bottom of this email to confirm your order. It will take you directly to our payment page.",
    "options": [
      "domain",
      "layout",
      "navigation",
      "link"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Type the full _____ into the address bar at the top of the screen. Then press enter to open the company's job page.",
    "options": [
      "URL",
      "comment",
      "article",
      "design"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Our company paid to register the _____ name for another five years. Without it, customers would not find our website.",
    "options": [
      "menu",
      "domain",
      "layout",
      "comment"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The app was updated so that every new _____ receives a short tutorial. It explains how to set up a profile and post photos.",
    "options": [
      "article",
      "domain",
      "password",
      "user"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "To track your package, please sign in to your customer _____. All your past orders are listed there with tracking numbers.",
    "options": [
      "article",
      "image",
      "account",
      "domain"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "New staff will receive their _____ details from the IT department on Monday. They should keep their username and password private.",
    "options": [
      "login",
      "video",
      "menu",
      "comment"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "For your safety, your _____ should contain at least eight characters. Please include numbers and symbols and change it every three months.",
    "options": [
      "homepage",
      "menu",
      "video",
      "password"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Customers can _____ the user manual as a PDF file from our support page. They can then print it or save it on their computers.",
    "options": [
      "upload",
      "download",
      "subscribe",
      "visit"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Applicants must _____ their résumés to our recruitment website before the end of the month. Paper applications sent by mail will not be accepted.",
    "options": [
      "download",
      "search",
      "upload",
      "subscribe"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The marketing team writes fresh _____ for the blog every week. Recent posts include travel tips and interviews with our staff.",
    "options": [
      "domain",
      "browser",
      "login",
      "content"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The local newspaper published a long _____ about our new factory last Sunday. It described how the project will create two hundred jobs.",
    "options": [
      "article",
      "domain",
      "browser",
      "password"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The trainer showed a short _____ that explained how to use the new cash register. Everyone watched it twice before practicing.",
    "options": [
      "password",
      "domain",
      "video",
      "layout"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Thank you for reading our blog post about saving energy at work. Please leave a _____ below and tell us your own ideas.",
    "options": [
      "domain",
      "comment",
      "browser",
      "login"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "If you enjoyed this recipe, please _____ it with your friends and family. Just click the button under the photo to post it on social media.",
    "options": [
      "share",
      "download",
      "search",
      "subscribe"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Readers who _____ to our weekly newsletter will receive a free e-book. The offer is available only until the end of June.",
    "options": [
      "upload",
      "share",
      "download",
      "subscribe"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The IT department will _____ the software on all office computers tonight. Please save your work and shut down your computer before leaving.",
    "options": [
      "subscribe",
      "visit",
      "update",
      "search"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The new website has a simple _____ with soft colors and large photos. Customers say it looks much more modern than before.",
    "options": [
      "login",
      "design",
      "password",
      "domain"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The magazine changed the _____ of its pages so that each photo sits next to its story. Readers now find the articles easier to follow.",
    "options": [
      "password",
      "browser",
      "login",
      "layout"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "To change the language of the app, open the _____ in the top corner. Then choose Settings and select your language.",
    "options": [
      "menu",
      "article",
      "comment",
      "password"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Simple _____ helps visitors move from one page to another quickly. Our new site needs only two clicks to reach any product.",
    "options": [
      "password",
      "navigation",
      "comment",
      "article"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The new server makes our website very _____. Most pages now open in less than one second, even during busy hours.",
    "options": [
      "slow",
      "secure",
      "fast",
      "popular"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Our payment system is completely _____, so your credit card details are protected. We use the latest technology to stop online criminals.",
    "options": [
      "secure",
      "slow",
      "fast",
      "popular"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "Our cooking videos are very _____ with young viewers. Each one is watched more than a million times in its first week.",
    "options": [
      "secure",
      "slow",
      "online",
      "popular"
    ],
    "answer": 3,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "webpage": {
    "pos": "n.",
    "en_def": "a single page on a website",
    "cn_def": "網頁"
  },
  "homepage": {
    "pos": "n.",
    "en_def": "the main first page of a website",
    "cn_def": "首頁"
  },
  "internet": {
    "pos": "n.",
    "en_def": "the worldwide system that connects computers",
    "cn_def": "網際網路；網路"
  },
  "online": {
    "pos": "adj.",
    "en_def": "using or available on the internet",
    "cn_def": "線上的；網路上的"
  },
  "browser": {
    "pos": "n.",
    "en_def": "a program used to look at websites",
    "cn_def": "瀏覽器"
  },
  "search": {
    "pos": "v.",
    "en_def": "to look for information, especially on a computer",
    "cn_def": "搜尋"
  },
  "search engine": {
    "pos": "n.phr.",
    "en_def": "a website that helps you find other websites",
    "cn_def": "搜尋引擎"
  },
  "link": {
    "pos": "n.",
    "en_def": "words or a picture you click to go to another page",
    "cn_def": "連結"
  },
  "url": {
    "pos": "n.",
    "en_def": "the address of a website",
    "cn_def": "網址"
  },
  "domain": {
    "pos": "n.",
    "en_def": "the name of a website, such as company.com",
    "cn_def": "網域名稱"
  },
  "visit": {
    "pos": "v.",
    "en_def": "to go to a website or place to look at it",
    "cn_def": "造訪；瀏覽"
  },
  "user": {
    "pos": "n.",
    "en_def": "a person who uses a website, product, or service",
    "cn_def": "使用者"
  },
  "account": {
    "pos": "n.",
    "en_def": "a personal record you use to sign in to a website",
    "cn_def": "帳戶；帳號"
  },
  "login": {
    "pos": "n.",
    "en_def": "the name and details you use to enter a computer system",
    "cn_def": "登入帳號；登入資料"
  },
  "password": {
    "pos": "n.",
    "en_def": "a secret word you need to enter a system",
    "cn_def": "密碼"
  },
  "download": {
    "pos": "v.",
    "en_def": "to copy a file from the internet to your computer",
    "cn_def": "下載"
  },
  "upload": {
    "pos": "v.",
    "en_def": "to send a file from your computer to a website",
    "cn_def": "上傳"
  },
  "content": {
    "pos": "n.",
    "en_def": "the information, words, and pictures on a website",
    "cn_def": "內容"
  },
  "article": {
    "pos": "n.",
    "en_def": "a piece of writing in a newspaper, magazine, or website",
    "cn_def": "文章"
  },
  "image": {
    "pos": "n.",
    "en_def": "a picture",
    "cn_def": "圖片；影像"
  },
  "video": {
    "pos": "n.",
    "en_def": "a recording of moving pictures",
    "cn_def": "影片"
  },
  "comment": {
    "pos": "n.",
    "en_def": "a written opinion about something",
    "cn_def": "評論；留言"
  },
  "share": {
    "pos": "v.",
    "en_def": "to let other people see something you have posted",
    "cn_def": "分享"
  },
  "subscribe": {
    "pos": "v.",
    "en_def": "to sign up to receive something regularly",
    "cn_def": "訂閱"
  },
  "update": {
    "pos": "v.",
    "en_def": "to add the newest information to something",
    "cn_def": "更新"
  },
  "design": {
    "pos": "n.",
    "en_def": "the way something is planned and made to look",
    "cn_def": "設計"
  },
  "layout": {
    "pos": "n.",
    "en_def": "the way things are arranged on a page",
    "cn_def": "版面配置"
  },
  "menu": {
    "pos": "n.",
    "en_def": "a list of choices on a website or computer screen",
    "cn_def": "選單"
  },
  "navigation": {
    "pos": "n.",
    "en_def": "the way people move around a website",
    "cn_def": "導覽；瀏覽方式"
  },
  "fast": {
    "pos": "adj.",
    "en_def": "quick",
    "cn_def": "快速的"
  },
  "slow": {
    "pos": "adj.",
    "en_def": "taking a long time",
    "cn_def": "緩慢的"
  },
  "secure": {
    "pos": "adj.",
    "en_def": "safe and protected from danger or crime",
    "cn_def": "安全的"
  },
  "popular": {
    "pos": "adj.",
    "en_def": "liked by many people",
    "cn_def": "受歡迎的"
  },
  "information": {
    "pos": "n.",
    "en_def": "facts or details about something",
    "cn_def": "資訊；資料"
  }
};

const EXTRA_GLOSSES = {};
