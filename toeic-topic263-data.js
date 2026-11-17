// Topic 263 Quiz Data: Online Shopping 網路購物
// Source word list: https://www.examword.com/group-topic/online-shopping — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T263 - Online Shopping 網路購物",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "e-commerce",
    "pos": "n.",
    "cn_def": "電子商務",
    "en_def": "buying and selling goods on the internet",
    "sentence": "A: Why did our company decide to hire three more programmers and a new marketing manager this spring instead of opening another shop downtown? B: Our sales through {{BLANK}} have grown much faster than sales in our physical stores, so the directors want to invest more money in our website and mobile app.",
    "cn": "A：為什麼我們公司今年春天決定再雇用三名程式設計師和一位新的行銷經理，而不是在市中心再開一家店？ B：我們透過【電子商務】的銷售成長得比實體店面快得多，所以董事們想在網站和手機應用程式上投入更多資金。"
  },
  {
    "word": "online store",
    "pos": "n.phr.",
    "cn_def": "網路商店",
    "en_def": "a shop on the internet where you can buy things",
    "sentence": "A: Since your bakery is so far from the train station, how do customers who live in other cities buy your famous pineapple cakes? B: Last year we opened an {{BLANK}}, so people can now order boxes on our website at any time and receive them at home within two or three days.",
    "cn": "A：既然你的麵包店離火車站那麼遠，住在其他城市的顧客要怎麼買你們有名的鳳梨酥？ B：我們去年開了一家【網路商店】，所以現在大家隨時都可以在我們的網站上訂購禮盒，並在兩三天內收到貨。"
  },
  {
    "word": "shopping cart",
    "pos": "n.phr.",
    "cn_def": "購物車",
    "en_def": "the place on a shopping website where you keep things you want to buy",
    "sentence": "A: I chose a printer, two boxes of paper, and some ink for the office, but I can't find the button to pay for them on this website. B: First click the small icon at the top of the page to open your {{BLANK}}, check that everything is correct, and then press the orange button to continue.",
    "cn": "A：我幫辦公室選了一台印表機、兩箱紙和一些墨水，但我在這個網站上找不到付款的按鈕。 B：先點擊頁面上方的小圖示打開你的【購物車】，確認所有東西都正確，然後按下橘色按鈕繼續。"
  },
  {
    "word": "checkout",
    "pos": "n.",
    "cn_def": "結帳；結帳處",
    "en_def": "the place or step where you pay for what you are buying",
    "sentence": "A: Several customers called this morning to complain that our website kept freezing when they tried to pay for their orders last night. B: Yes, the technical team found a problem on the {{BLANK}} page, and they have already fixed it, so customers should be able to finish their purchases without any trouble now.",
    "cn": "A：今天早上有好幾位顧客打電話來抱怨，說他們昨晚想為訂單付款時，我們的網站一直當機。 B：是的，技術團隊發現【結帳】頁面有問題，他們已經修好了，所以顧客現在應該可以順利完成購買。"
  },
  {
    "word": "payment gateway",
    "pos": "n.phr.",
    "cn_def": "金流服務；支付閘道",
    "en_def": "a service that safely sends card payments from a website to a bank",
    "sentence": "A: Why do we need to pay a small fee to another company every time a customer buys something from our website with a credit card? B: That company runs the {{BLANK}}, which safely sends card information between our website and the banks, so we don't have to build and protect that complicated system ourselves.",
    "cn": "A：為什麼每次顧客在我們網站用信用卡買東西時，我們都要付一小筆費用給另一家公司？ B：那家公司負責營運【支付閘道】，它會在我們的網站和銀行之間安全地傳送卡片資料，所以我們不必自己建立並保護那套複雜的系統。"
  },
  {
    "word": "discount",
    "pos": "n.",
    "cn_def": "折扣",
    "en_def": "an amount taken off the usual price",
    "sentence": "A: The new office chairs on this website look comfortable, but they are much more expensive than the ones we bought last year for the sales team. B: If we order more than twenty chairs at the same time, the company will give us a fifteen percent {{BLANK}}, so the total price would be close to our budget.",
    "cn": "A：這個網站上的新辦公椅看起來很舒服，但比我們去年為業務團隊買的貴多了。 B：如果我們一次訂購超過二十張椅子，那家公司會給我們百分之十五的【折扣】，這樣總價就會接近我們的預算。"
  },
  {
    "word": "promotion",
    "pos": "n.",
    "cn_def": "促銷活動",
    "en_def": "a special offer or activity to help sell a product",
    "sentence": "A: Why are so many people visiting our online shop this week, even though we haven't added any new products since last month? B: The marketing department started a special {{BLANK}} on Monday, so every customer who spends over one thousand dollars gets a free gift and free delivery until Sunday.",
    "cn": "A：為什麼這週有那麼多人造訪我們的網路商店，即使我們從上個月到現在都沒有新增任何商品？ B：行銷部門星期一開始了一項特別的【促銷活動】，所以到星期日為止，每位消費滿一千元的顧客都能獲得一份免費贈品和免運費。"
  },
  {
    "word": "flash sale",
    "pos": "n.phr.",
    "cn_def": "限時搶購",
    "en_def": "a sale with very low prices that lasts only a short time",
    "sentence": "A: How did your team sell all five hundred wireless headphones in less than an hour yesterday afternoon? B: We held a {{BLANK}} from two to three o'clock, when prices were cut by half, and because we sent messages to all our members in advance, many people were waiting online when it started.",
    "cn": "A：你們團隊昨天下午是怎麼在不到一小時內賣光五百副無線耳機的？ B：我們在兩點到三點舉辦了一場【限時搶購】，價格打對折，而且因為我們事先發訊息給所有會員，活動開始時很多人已經在線上等著了。"
  },
  {
    "word": "delivery",
    "pos": "n.",
    "cn_def": "送貨；配送",
    "en_def": "the act of bringing goods to a person or place",
    "sentence": "A: The printer paper we ordered on Monday still hasn't arrived, and we need it for the big report that has to be printed tomorrow morning. B: I just called the store, and they said the {{BLANK}} was delayed because of the typhoon, but the driver promised to bring the boxes to our office before five today.",
    "cn": "A：我們星期一訂的印表機紙還沒送到，而我們明天早上要印的重要報告需要用到它。 B：我剛打電話給店家，他們說因為颱風，【送貨】延誤了，但司機答應今天五點前會把箱子送到我們辦公室。"
  },
  {
    "word": "shipping fee",
    "pos": "n.phr.",
    "cn_def": "運費",
    "en_def": "money you pay to have something sent to you",
    "sentence": "A: The price of this desk lamp looks very cheap, but why is the total amount on the last page almost twice as high as I expected? B: You have to pay a {{BLANK}} because the lamp is coming from a warehouse overseas, but if you spend more than fifty dollars, the store will send it for free.",
    "cn": "A：這盞檯燈的價格看起來很便宜，但為什麼最後一頁的總金額幾乎是我預期的兩倍？ B：因為這盞燈是從海外倉庫寄出的，所以你必須付【運費】，但如果你消費超過五十美元，店家就會免費寄送。"
  },
  {
    "word": "return",
    "pos": "n.",
    "cn_def": "退貨",
    "en_def": "the act of sending something you bought back to the shop",
    "sentence": "A: The jacket I bought online last week is too small, and the color looks quite different from the photo on the website. B: You can make a {{BLANK}} within thirty days if you keep the original box and receipt, so just fill out the form online and take the package to any convenience store.",
    "cn": "A：我上週在網路上買的夾克太小了，而且顏色跟網站上的照片看起來差很多。 B：只要你保留原本的盒子和收據，三十天內都可以辦理【退貨】，所以只要在網路上填好表格，再把包裹拿到任何一家便利商店就可以了。"
  },
  {
    "word": "refund",
    "pos": "n.",
    "cn_def": "退款",
    "en_def": "money that is paid back to you",
    "sentence": "A: I sent the broken coffee machine back to the online shop two weeks ago, but I still haven't received my money. B: Please call their customer service center and give them your order number, because a {{BLANK}} usually takes about five working days after the warehouse checks the returned item.",
    "cn": "A：我兩週前把壞掉的咖啡機寄回那家網路商店，但我到現在還沒收到錢。 B：請打電話給他們的客服中心並提供訂單編號，因為倉庫檢查完退回的商品後，【退款】通常需要大約五個工作天。"
  },
  {
    "word": "exchange",
    "pos": "n.",
    "cn_def": "換貨；交換",
    "en_def": "the act of giving back something you bought and getting a different one",
    "sentence": "A: My manager ordered a pair of black shoes online for the company dinner, but they are one size too big for him. B: He doesn't need to ask for his money back, because the store allows an {{BLANK}} for a different size, and the new pair will arrive in only two days.",
    "cn": "A：我的經理在網路上訂了一雙黑皮鞋要穿去公司聚餐，但對他來說大了一號。 B：他不需要要求退錢，因為那家店允許【換貨】換成不同尺寸，而且新的鞋子只要兩天就會送到。"
  },
  {
    "word": "customer review",
    "pos": "n.phr.",
    "cn_def": "顧客評論",
    "en_def": "a buyer's written opinion about a product or service",
    "sentence": "A: How did you decide which coffee machine to buy for the staff kitchen when there were so many different brands on the website? B: I read every {{BLANK}} carefully, and most buyers said this model was easy to clean and still worked well after two years, so I felt confident choosing it.",
    "cn": "A：網站上有那麼多不同的品牌，你是怎麼決定要為員工廚房買哪一台咖啡機的？ B：我仔細閱讀了每一則【顧客評論】，大部分買家都說這個型號很容易清洗，而且用了兩年還很好用，所以我很放心地選了它。"
  },
  {
    "word": "rating",
    "pos": "n.",
    "cn_def": "評分；評價",
    "en_def": "a score that shows how good something is",
    "sentence": "A: Should we keep ordering our office supplies from that new online shop, or should we go back to the company we used last year? B: Let's stay with the new shop, because it has a five-star {{BLANK}} from thousands of buyers, and its prices and service have been excellent for the past three months.",
    "cn": "A：我們應該繼續向那家新的網路商店訂購辦公用品，還是回到去年合作的那家公司？ B：我們就繼續用新的那家吧，因為它獲得數千名買家給予的五星【評分】，而且過去三個月它的價格和服務都非常好。"
  },
  {
    "word": "secure",
    "pos": "adj.",
    "cn_def": "安全的",
    "en_def": "safe and protected from danger or theft",
    "sentence": "A: My parents are worried about typing their credit card number on websites because they heard stories about stolen information on the news. B: Tell them to look for the small lock symbol next to the web address, which shows the site is {{BLANK}} and that their personal information is protected by strong technology.",
    "cn": "A：我爸媽很擔心在網站上輸入信用卡號碼，因為他們在新聞上聽說了資料被盜的事件。 B：告訴他們要找網址旁邊的小鎖頭符號，那表示這個網站是【安全的】，而且他們的個人資料受到強大技術的保護。"
  },
  {
    "word": "tracking number",
    "pos": "n.phr.",
    "cn_def": "追蹤號碼；貨運單號",
    "en_def": "a number used to find where a package is",
    "sentence": "A: Our client in Singapore wants to know exactly when the product samples we mailed last Thursday will arrive at her office. B: Please send her the {{BLANK}} from the shipping company's email, so she can check the package's location online at any time and plan her meeting schedule.",
    "cn": "A：我們在新加坡的客戶想確切知道我們上週四寄出的產品樣品什麼時候會送到她的辦公室。 B：請把貨運公司電子郵件裡的【追蹤號碼】傳給她，這樣她就可以隨時上網查詢包裹的位置，並安排她的會議時程。"
  },
  {
    "word": "browse",
    "pos": "v.",
    "cn_def": "瀏覽；隨意看看",
    "en_def": "to look at things in a shop or online without a clear plan to buy",
    "sentence": "A: What do you usually do on the train when you travel to work every morning for almost an hour? B: I often {{BLANK}} different shopping websites on my phone to look for new clothes and kitchen products, but I rarely buy anything until I have compared prices at home.",
    "cn": "A：你每天早上搭將近一小時的火車去上班時，通常都做些什麼？ B：我常常用手機【瀏覽】不同的購物網站，找新衣服和廚房用品，但在家比較過價格之前，我很少真的買東西。"
  },
  {
    "word": "wishlist",
    "pos": "n.",
    "cn_def": "願望清單",
    "en_def": "a list of things you would like to buy or get later",
    "sentence": "A: How do you remember all the things you want to buy when the prices go down during the big sales at the end of the year? B: Whenever I find something nice, I save it to my {{BLANK}} on the shopping app, so I get a message when the price drops and can buy it right away.",
    "cn": "A：年底大拍賣降價的時候，你是怎麼記住所有想買的東西的？ B：每次我看到不錯的東西，就會把它存到購物應用程式裡的【願望清單】，這樣價格下降時我就會收到通知，可以馬上買下來。"
  },
  {
    "word": "cart abandonment",
    "pos": "n.phr.",
    "cn_def": "購物車放棄（放入購物車卻未結帳）",
    "en_def": "when shoppers put items in an online cart but leave without paying",
    "sentence": "A: Our report shows that many visitors put products in their carts but then leave the website without paying for anything. B: That kind of {{BLANK}} often happens when shipping costs appear too late, so let's show all the costs earlier and send a friendly reminder email to those customers.",
    "cn": "A：我們的報告顯示，很多訪客把商品放進購物車，卻沒有付款就離開了網站。 B：這種【購物車放棄】的情況常常發生在運費太晚才顯示的時候，所以我們早一點顯示所有費用，並寄一封友善的提醒信給那些顧客吧。"
  },
  {
    "word": "comparison",
    "pos": "n.",
    "cn_def": "比較",
    "en_def": "the act of looking at how two or more things are alike or different",
    "sentence": "A: Before we sign a contract with a new office supply website, shouldn't we check what other companies are offering this year? B: Yes, I have already made a {{BLANK}} of prices, delivery times, and service from four different websites, and I will show you the results at tomorrow's meeting.",
    "cn": "A：在我們和新的辦公用品網站簽約之前，不是應該先看看其他公司今年提供什麼條件嗎？ B：是的，我已經對四個不同網站的價格、送貨時間和服務做了【比較】，明天開會時我會把結果給你看。"
  },
  {
    "word": "convenient",
    "pos": "adj.",
    "cn_def": "方便的；便利的",
    "en_def": "easy to use or suitable for your needs",
    "sentence": "A: Why do you buy almost all your groceries online now instead of going to the supermarket near your apartment on weekends? B: It is much more {{BLANK}} for me, because I work late every day, and the store delivers everything to my door in the evening, so I have more free time on Saturdays.",
    "cn": "A：為什麼你現在幾乎所有的日用品都在網路上買，而不是週末去你公寓附近的超市？ B：這對我來說【方便】多了，因為我每天都工作到很晚，而且店家會在晚上把所有東西送到我家門口，所以我星期六就有更多空閒時間。"
  },
  {
    "word": "variety",
    "pos": "n.",
    "cn_def": "多樣；種類",
    "en_def": "many different kinds of things",
    "sentence": "A: Why do so many young professionals prefer to buy their work clothes on that big shopping website rather than in department stores? B: The website offers a wide {{BLANK}} of styles, colors, and sizes from hundreds of brands, so people can easily find something that fits their taste and budget.",
    "cn": "A：為什麼這麼多年輕上班族比較喜歡在那個大型購物網站買工作服，而不是在百貨公司買？ B：那個網站提供數百個品牌、【種類】繁多的款式、顏色和尺寸，所以大家很容易找到符合自己品味和預算的東西。"
  },
  {
    "word": "platform",
    "pos": "n.",
    "cn_def": "平台",
    "en_def": "a website or service where people can buy, sell, or share things",
    "sentence": "A: Our handmade soap business is growing, but managing our own website takes too much time and costs a lot of money every month. B: Then maybe we should sell our products on a large shopping {{BLANK}} instead, because millions of buyers already visit it every day, and it handles payments and customer service for us.",
    "cn": "A：我們的手工肥皂事業正在成長，但經營自己的網站太花時間，每個月也要花很多錢。 B：那我們或許應該改在大型購物【平台】上販售產品，因為每天已經有數百萬名買家造訪，而且它會幫我們處理付款和客服。"
  },
  {
    "word": "digital wallet",
    "pos": "n.phr.",
    "cn_def": "電子錢包",
    "en_def": "an app on your phone that stores card information for paying",
    "sentence": "A: I left my credit card at home this morning, so how am I going to pay for the training course I want to sign up for online? B: You can use the {{BLANK}} on your phone, because your card information is already saved in it, and you only need to scan your fingerprint to finish the payment.",
    "cn": "A：我今天早上把信用卡忘在家裡了，那我要怎麼支付想在網路上報名的訓練課程費用？ B：你可以用手機裡的【電子錢包】，因為你的卡片資料已經存在裡面了，只要掃描指紋就能完成付款。"
  },
  {
    "word": "coupon",
    "pos": "n.",
    "cn_def": "優惠券；折價券",
    "en_def": "a ticket or code that lets you pay less for something",
    "sentence": "A: The printer ink we need for the office costs almost forty dollars on that website, which is more than our monthly budget allows. B: Don't worry, because I received a {{BLANK}} in an email yesterday, and if you type the code before paying, we will save ten dollars on this order.",
    "cn": "A：辦公室需要的印表機墨水在那個網站上要將近四十美元，超過了我們每個月的預算。 B：別擔心，我昨天在一封電子郵件裡收到一張【優惠券】，如果你在付款前輸入代碼，這筆訂單就能省十美元。"
  },
  {
    "word": "out of stock",
    "pos": "adj.phr.",
    "cn_def": "缺貨的；售完的",
    "en_def": "not available because the shop has sold all of it",
    "sentence": "A: Why hasn't the online shop sent us the twenty laptops we ordered for the new employees who are starting next Monday? B: The model we chose is {{BLANK}} at the moment because it became very popular, so the store suggested a similar model that can be delivered by Friday.",
    "cn": "A：為什麼那家網路商店還沒把我們為下週一報到的新員工訂的二十台筆電寄過來？ B：我們選的型號因為非常熱賣，目前【缺貨】，所以店家建議了一款可以在星期五前送達的類似機型。"
  },
  {
    "word": "pre-order",
    "pos": "v.",
    "cn_def": "預購",
    "en_def": "to order something before it is available to buy",
    "sentence": "A: The new smartphone won't be in stores until next month, but my manager wants to give one to our best salesperson as a prize. B: She can {{BLANK}} it on the company's website today, so the phone will be sent to our office on the first day it becomes available.",
    "cn": "A：那款新手機要到下個月才會在店裡上市，但我的經理想送一支給我們最優秀的業務員當獎品。 B：她今天可以在那家公司的網站上【預購】，這樣手機一開賣的第一天就會寄到我們辦公室。"
  },
  {
    "word": "subscription",
    "pos": "n.",
    "cn_def": "訂閱；訂購",
    "en_def": "money paid regularly to receive a product or service",
    "sentence": "A: How does the coffee company make sure our office never runs out of coffee beans, even when everyone is too busy to order more? B: We pay for a monthly {{BLANK}}, so the company automatically sends us five bags of fresh beans at the beginning of every month, and we can cancel it at any time.",
    "cn": "A：那家咖啡公司是怎麼確保我們辦公室的咖啡豆從來不會用完，即使大家都忙到沒空再訂？ B：我們付費做了每月【訂閱】，所以那家公司每個月初都會自動寄五袋新鮮咖啡豆給我們，而且我們隨時可以取消。"
  },
  {
    "word": "contactless",
    "pos": "adj.",
    "cn_def": "非接觸式的；免接觸的",
    "en_def": "done without touching another person or a machine",
    "sentence": "A: During the busy holiday season, how can the delivery drivers bring packages to so many homes without waiting for people to sign? B: The company offers {{BLANK}} delivery, so drivers simply leave the package at the door, take a photo of it, and send the picture to the customer's phone.",
    "cn": "A：在忙碌的假期期間，送貨司機要怎麼不必等人簽收，就把包裹送到這麼多戶人家？ B：那家公司提供【免接觸】配送，所以司機只要把包裹放在門口、拍張照片，再把照片傳到顧客的手機就好。"
  },
  {
    "word": "consumer",
    "pos": "n.",
    "cn_def": "消費者",
    "en_def": "a person who buys goods or services",
    "sentence": "A: Why does our marketing team spend so much time studying what people buy online and how long they stay on each product page? B: Every {{BLANK}} has different habits and needs, so if we understand them better, we can recommend the right products and make our advertisements more effective.",
    "cn": "A：為什麼我們的行銷團隊花這麼多時間研究大家在網路上買什麼，以及他們在每個商品頁面停留多久？ B：每位【消費者】都有不同的習慣和需求，所以如果我們更了解他們，就能推薦合適的產品，並讓我們的廣告更有效。"
  },
  {
    "word": "impulse buying",
    "pos": "n.phr.",
    "cn_def": "衝動購物",
    "en_def": "buying things suddenly without planning or thinking carefully",
    "sentence": "A: Why did you buy three pairs of expensive running shoes last night when you already have several pairs that are almost new? B: I know it was {{BLANK}}, because the website showed a countdown clock and a big red sale sign, and I paid before I really thought about whether I needed them.",
    "cn": "A：你昨晚為什麼買了三雙昂貴的跑鞋，明明你已經有好幾雙幾乎全新的了？ B：我知道那是【衝動購物】，因為網站上顯示倒數計時器和大大的紅色特價標誌，我還沒真正想清楚是否需要就付款了。"
  },
  {
    "word": "fraud",
    "pos": "n.",
    "cn_def": "詐騙；詐欺",
    "en_def": "the crime of tricking people to get money",
    "sentence": "A: Why did the bank call me this morning and stop my credit card after I tried to buy a new laptop from a website I had never used? B: They probably thought it was {{BLANK}}, because the website was based overseas and the amount was unusually large, so they wanted to make sure someone hadn't stolen your card information.",
    "cn": "A：為什麼我今天早上試著在一個從沒用過的網站買新筆電後，銀行就打電話給我並停用了我的信用卡？ B：他們大概認為那是【詐騙】，因為那個網站設在海外，金額又異常地大，所以他們想確認沒有人盜用你的卡片資料。"
  },
  {
    "word": "inventory",
    "pos": "n.",
    "cn_def": "庫存；存貨",
    "en_def": "all the goods a shop or company has in stock",
    "sentence": "A: How does our website know that there are only three blue backpacks left in the warehouse at this moment? B: Our system updates the {{BLANK}} automatically every time a customer pays for an order, so the website always shows the correct number of items and stops selling products we no longer have.",
    "cn": "A：我們的網站怎麼知道倉庫裡此刻只剩下三個藍色背包？ B：每次顧客為訂單付款時，我們的系統都會自動更新【庫存】，所以網站總是顯示正確的商品數量，並停止販售我們已經沒有的產品。"
  }
];

const MCQS = [
  {
    "q": "Many small shops have closed their physical stores this year. They now earn most of their income through _____ and social media advertising.",
    "options": [
      "inventory",
      "comparison",
      "rating",
      "e-commerce"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The furniture company opened its own _____ last spring. Customers can now order sofas and tables on its website at any hour.",
    "options": [
      "shopping cart",
      "online store",
      "tracking number",
      "flash sale"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Your _____ currently contains five items worth two hundred dollars. Please review them carefully before you continue to the payment page.",
    "options": [
      "shopping cart",
      "tracking number",
      "flash sale",
      "customer review"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Customers often leave the website when the _____ process takes too long. We should reduce the number of steps needed to pay.",
    "options": [
      "variety",
      "checkout",
      "consumer",
      "wishlist"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Employees receive a twenty percent _____ on all products sold in the company's online shop. The offer does not apply to sale items.",
    "options": [
      "discount",
      "consumer",
      "platform",
      "inventory"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The summer _____ will run from July first to July fifteenth. During this period, all customers will receive a free tote bag with every order.",
    "options": [
      "fraud",
      "consumer",
      "promotion",
      "comparison"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The store's two-hour _____ attracted thousands of shoppers yesterday. Most of the discounted televisions were sold within the first twenty minutes.",
    "options": [
      "tracking number",
      "flash sale",
      "digital wallet",
      "customer review"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Orders placed before noon qualify for same-day _____ within the city. Customers outside the city should expect their packages in two days.",
    "options": [
      "delivery",
      "rating",
      "fraud",
      "wishlist"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "A small _____ will be added to orders under thirty dollars. Orders above that amount are sent to customers free of charge.",
    "options": [
      "tracking number",
      "shopping cart",
      "payment gateway",
      "shipping fee"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Our store accepts a _____ within fourteen days of purchase. The item must be unused and still in its original packaging.",
    "options": [
      "rating",
      "return",
      "variety",
      "consumer"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The customer asked for a full _____ because the blender stopped working after one day. The store agreed to send her money back immediately.",
    "options": [
      "refund",
      "coupon",
      "variety",
      "platform"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Customers can make one free _____ per order if the size or color is wrong. After that, a small handling charge applies.",
    "options": [
      "rating",
      "exchange",
      "wishlist",
      "consumer"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Before buying the coffee machine, Lisa read every _____ on the website. Most buyers praised its quiet motor and simple design.",
    "options": [
      "tracking number",
      "shipping fee",
      "flash sale",
      "customer review"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The booking app gave the restaurant a four-star _____ based on thousands of guest comments. Its seafood dishes received the highest praise.",
    "options": [
      "refund",
      "coupon",
      "rating",
      "fraud"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "All payments on our website are fully _____ and protected by modern encryption. Your card details are never stored on our servers.",
    "options": [
      "secure",
      "ordinary",
      "lonely",
      "fragile"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "You can check the location of your package at any time. Simply enter the _____ printed on your shipping receipt.",
    "options": [
      "shopping cart",
      "tracking number",
      "flash sale",
      "customer review"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Many office workers _____ shopping websites during their lunch break. However, most of them do not actually buy anything.",
    "options": [
      "refund",
      "assemble",
      "exchange",
      "browse"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Shoppers can save items they like to their _____ and buy them later. The app sends an alert when any saved item goes on sale.",
    "options": [
      "inventory",
      "fraud",
      "wishlist",
      "rating"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The website lets users make a quick price _____ between similar laptops. This helps them choose the best value for their money.",
    "options": [
      "fraud",
      "subscription",
      "delivery",
      "comparison"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Online grocery shopping is very _____ for busy parents who work long hours. They can order food at night and receive it the next morning.",
    "options": [
      "fragile",
      "elderly",
      "convenient",
      "vacant"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The shop offers a wide _____ of kitchen tools at reasonable prices. Customers can find almost anything they need in one place.",
    "options": [
      "fraud",
      "variety",
      "refund",
      "checkout"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The company sells its handmade bags on a popular shopping _____. The website handles payments and customer service for small sellers.",
    "options": [
      "coupon",
      "refund",
      "platform",
      "rating"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "More shoppers now pay with a _____ on their smartphones. It stores their card details and makes checkout much faster.",
    "options": [
      "digital wallet",
      "shipping fee",
      "flash sale",
      "tracking number"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Enter the _____ code at checkout to save ten percent on your order. The code expires at midnight on Sunday.",
    "options": [
      "consumer",
      "inventory",
      "fraud",
      "coupon"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Fans can _____ the new game console on our website starting today. It will be shipped on the official release date next month.",
    "options": [
      "compile",
      "emit",
      "pre-order",
      "erase"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Our monthly _____ includes four bags of coffee delivered to your office. You can cancel it online at any time.",
    "options": [
      "fraud",
      "subscription",
      "comparison",
      "rating"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Every _____ has the right to clear information about a product's price. Hidden fees can damage a store's reputation quickly.",
    "options": [
      "inventory",
      "platform",
      "consumer",
      "checkout"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Countdown clocks and limited-time offers often lead to _____. Many shoppers later regret items they purchased without careful thought.",
    "options": [
      "impulse buying",
      "cart abandonment",
      "payment gateway",
      "tracking number"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "The bank blocked the card after noticing several unusual overseas purchases. It suspected _____ and contacted the cardholder immediately.",
    "options": [
      "variety",
      "coupon",
      "delivery",
      "fraud"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The warehouse staff count the _____ at the end of every month. This helps the store avoid running out of popular products.",
    "options": [
      "inventory",
      "rating",
      "coupon",
      "wishlist"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "e-commerce": {
    "pos": "n.",
    "en_def": "buying and selling goods on the internet",
    "cn_def": "電子商務"
  },
  "online store": {
    "pos": "n.phr.",
    "en_def": "a shop on the internet where you can buy things",
    "cn_def": "網路商店"
  },
  "shopping cart": {
    "pos": "n.phr.",
    "en_def": "the place on a shopping website where you keep things you want to buy",
    "cn_def": "購物車"
  },
  "checkout": {
    "pos": "n.",
    "en_def": "the place or step where you pay for what you are buying",
    "cn_def": "結帳；結帳處"
  },
  "payment gateway": {
    "pos": "n.phr.",
    "en_def": "a service that safely sends card payments from a website to a bank",
    "cn_def": "金流服務；支付閘道"
  },
  "discount": {
    "pos": "n.",
    "en_def": "an amount taken off the usual price",
    "cn_def": "折扣"
  },
  "promotion": {
    "pos": "n.",
    "en_def": "a special offer or activity to help sell a product",
    "cn_def": "促銷活動"
  },
  "flash sale": {
    "pos": "n.phr.",
    "en_def": "a sale with very low prices that lasts only a short time",
    "cn_def": "限時搶購"
  },
  "delivery": {
    "pos": "n.",
    "en_def": "the act of bringing goods to a person or place",
    "cn_def": "送貨；配送"
  },
  "shipping fee": {
    "pos": "n.phr.",
    "en_def": "money you pay to have something sent to you",
    "cn_def": "運費"
  },
  "return": {
    "pos": "n.",
    "en_def": "the act of sending something you bought back to the shop",
    "cn_def": "退貨"
  },
  "refund": {
    "pos": "n.",
    "en_def": "money that is paid back to you",
    "cn_def": "退款"
  },
  "exchange": {
    "pos": "n.",
    "en_def": "the act of giving back something you bought and getting a different one",
    "cn_def": "換貨；交換"
  },
  "customer review": {
    "pos": "n.phr.",
    "en_def": "a buyer's written opinion about a product or service",
    "cn_def": "顧客評論"
  },
  "rating": {
    "pos": "n.",
    "en_def": "a score that shows how good something is",
    "cn_def": "評分；評價"
  },
  "secure": {
    "pos": "adj.",
    "en_def": "safe and protected from danger or theft",
    "cn_def": "安全的"
  },
  "tracking number": {
    "pos": "n.phr.",
    "en_def": "a number used to find where a package is",
    "cn_def": "追蹤號碼；貨運單號"
  },
  "browse": {
    "pos": "v.",
    "en_def": "to look at things in a shop or online without a clear plan to buy",
    "cn_def": "瀏覽；隨意看看"
  },
  "wishlist": {
    "pos": "n.",
    "en_def": "a list of things you would like to buy or get later",
    "cn_def": "願望清單"
  },
  "cart abandonment": {
    "pos": "n.phr.",
    "en_def": "when shoppers put items in an online cart but leave without paying",
    "cn_def": "購物車放棄（放入購物車卻未結帳）"
  },
  "comparison": {
    "pos": "n.",
    "en_def": "the act of looking at how two or more things are alike or different",
    "cn_def": "比較"
  },
  "convenient": {
    "pos": "adj.",
    "en_def": "easy to use or suitable for your needs",
    "cn_def": "方便的；便利的"
  },
  "variety": {
    "pos": "n.",
    "en_def": "many different kinds of things",
    "cn_def": "多樣；種類"
  },
  "platform": {
    "pos": "n.",
    "en_def": "a website or service where people can buy, sell, or share things",
    "cn_def": "平台"
  },
  "digital wallet": {
    "pos": "n.phr.",
    "en_def": "an app on your phone that stores card information for paying",
    "cn_def": "電子錢包"
  },
  "coupon": {
    "pos": "n.",
    "en_def": "a ticket or code that lets you pay less for something",
    "cn_def": "優惠券；折價券"
  },
  "out of stock": {
    "pos": "adj.phr.",
    "en_def": "not available because the shop has sold all of it",
    "cn_def": "缺貨的；售完的"
  },
  "pre-order": {
    "pos": "v.",
    "en_def": "to order something before it is available to buy",
    "cn_def": "預購"
  },
  "subscription": {
    "pos": "n.",
    "en_def": "money paid regularly to receive a product or service",
    "cn_def": "訂閱；訂購"
  },
  "contactless": {
    "pos": "adj.",
    "en_def": "done without touching another person or a machine",
    "cn_def": "非接觸式的；免接觸的"
  },
  "consumer": {
    "pos": "n.",
    "en_def": "a person who buys goods or services",
    "cn_def": "消費者"
  },
  "impulse buying": {
    "pos": "n.phr.",
    "en_def": "buying things suddenly without planning or thinking carefully",
    "cn_def": "衝動購物"
  },
  "fraud": {
    "pos": "n.",
    "en_def": "the crime of tricking people to get money",
    "cn_def": "詐騙；詐欺"
  },
  "inventory": {
    "pos": "n.",
    "en_def": "all the goods a shop or company has in stock",
    "cn_def": "庫存；存貨"
  }
};

const EXTRA_GLOSSES = {};
