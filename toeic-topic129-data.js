// Topic 129 Quiz Data: Expensive 昂貴
// Source word list: https://www.examword.com/group-topic/expensive — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T129 - Expensive 昂貴",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "costly",
    "pos": "adj.",
    "cn_def": "昂貴的；代價高的",
    "en_def": "costing a lot of money; causing loss or damage",
    "sentence": "A: Why did the manager decide to cancel the plan to move our main office downtown next spring? B: She found that the move would be too {{BLANK}} for us this year, because the rent is much higher there and we would also need new furniture and computers for every department.",
    "cn": "A：經理為什麼決定取消明年春天把總公司搬到市中心的計畫？ B：她發現今年搬遷對我們來說太【昂貴】了，因為那裡的租金高得多，而且我們還需要為每個部門添購新家具和電腦。"
  },
  {
    "word": "pricey",
    "pos": "adj.",
    "cn_def": "昂貴的（口語）",
    "en_def": "(informal) expensive",
    "sentence": "A: Have you tried the new Italian restaurant across the street from our office, and would it be good for the team lunch on Friday? B: The food is excellent and the service is friendly, but it is a little {{BLANK}}, so we should probably ask the manager whether the company will pay for it.",
    "cn": "A：你試過我們辦公室對面那家新開的義大利餐廳嗎？它適合星期五的團隊午餐嗎？ B：那裡的食物很棒，服務也很親切，但有點【貴】，所以我們大概應該問問經理公司會不會出錢。"
  },
  {
    "word": "luxurious",
    "pos": "adj.",
    "cn_def": "豪華的；奢侈的",
    "en_def": "very comfortable and expensive",
    "sentence": "A: How was the hotel that the travel agency booked for you during the sales conference in Singapore last week? B: It was very {{BLANK}}, with a huge bed, a marble bathroom, and a swimming pool on the roof, so I felt completely relaxed after the long meetings every day.",
    "cn": "A：上週你在新加坡參加業務會議期間，旅行社幫你訂的飯店怎麼樣？ B：那裡非常【豪華】，有超大的床、大理石浴室，屋頂還有游泳池，所以每天開完冗長的會議後我都覺得非常放鬆。"
  },
  {
    "word": "premium",
    "pos": "adj.",
    "cn_def": "高級的；優質的",
    "en_def": "of very high quality and more expensive than others",
    "sentence": "A: Why are we paying more for this coffee than the brand we used to buy for the office kitchen? B: The supplier only sells {{BLANK}} beans that are grown in the mountains and roasted carefully, and most of our staff said in the survey that they prefer the richer taste.",
    "cn": "A：為什麼我們買這種咖啡要比以前買給辦公室茶水間的牌子付更多錢？ B：這家供應商只賣在山區種植、經過細心烘焙的【高級】咖啡豆，而且大部分員工在問卷調查中都說他們比較喜歡這種更濃郁的味道。"
  },
  {
    "word": "high-priced",
    "pos": "adj.",
    "cn_def": "高價的；昂貴的",
    "en_def": "having a high price",
    "sentence": "A: Is the company planning to hire an outside consultant to help us with the new marketing strategy this year? B: The board thought about hiring a {{BLANK}} consultant from a famous firm in New York, but they decided our own team has enough experience to do the job well.",
    "cn": "A：公司今年打算聘請外部顧問來協助我們制定新的行銷策略嗎？ B：董事會曾考慮聘請紐約一家知名公司的【高價】顧問，但他們認為我們自己的團隊有足夠的經驗把工作做好。"
  },
  {
    "word": "overpriced",
    "pos": "adj.",
    "cn_def": "定價過高的；太貴的",
    "en_def": "costing more than it is really worth",
    "sentence": "A: Did you buy the new printer from the electronics store near the train station that you mentioned at the meeting? B: No, I compared prices online and found that the store's model was seriously {{BLANK}}, so I ordered the same printer from another website and saved almost a hundred dollars.",
    "cn": "A：你有在開會時提到的火車站附近那家電器行買新的印表機嗎？ B：沒有，我在網路上比價後發現那家店的機型【定價過高】得離譜，所以我在另一個網站訂了同一台印表機，省了將近一百美元。"
  },
  {
    "word": "exorbitant",
    "pos": "adj.",
    "cn_def": "（價格）過高的；離譜的",
    "en_def": "much too high in price",
    "sentence": "A: Why did the new tenants decide not to renew their lease for the shop on the ground floor of our building? B: The landlord asked for an {{BLANK}} increase in rent, almost double the old amount, so they found a cheaper space in another part of the city instead.",
    "cn": "A：為什麼新房客決定不續租我們大樓一樓的店面？ B：房東要求【過高的】漲租幅度，幾乎是原本金額的兩倍，所以他們改在城裡其他地方找到了更便宜的店面。"
  },
  {
    "word": "valuable",
    "pos": "adj.",
    "cn_def": "貴重的；寶貴的",
    "en_def": "worth a lot of money or very useful",
    "sentence": "A: Should we keep these old customer records in the storage room, or can we throw them away before we move to the new office? B: Please keep them, because they contain {{BLANK}} information about our long-term clients, and the sales team often uses it to plan special offers and follow-up calls.",
    "cn": "A：我們應該把這些舊的客戶資料留在儲藏室，還是可以在搬到新辦公室前把它們丟掉？ B：請保留下來，因為它們含有關於長期客戶的【寶貴】資訊，業務團隊經常用它來規劃特別優惠和後續追蹤電話。"
  },
  {
    "word": "exclusive",
    "pos": "adj.",
    "cn_def": "獨有的；專屬的；高級的",
    "en_def": "only for a few special people; expensive and not open to everyone",
    "sentence": "A: Why can't everyone attend the product launch party at the hotel next Thursday evening? B: It is an {{BLANK}} event for our top fifty customers and a few reporters, so only staff from the sales department will be invited to welcome the guests and answer their questions.",
    "cn": "A：為什麼不是每個人都可以參加下週四晚上在飯店舉行的產品發表派對？ B：那是只為我們前五十名大客戶和幾位記者舉辦的【專屬】活動，所以只有業務部的員工會受邀去接待賓客並回答他們的問題。"
  },
  {
    "word": "fancy",
    "pos": "adj.",
    "cn_def": "高檔的；花俏的",
    "en_def": "expensive and stylish, often with lots of decoration",
    "sentence": "A: Where should we take the visiting clients from Japan for dinner after the factory tour tomorrow? B: Let's not choose anywhere too {{BLANK}}, because they told me they would prefer a simple local restaurant where they can try traditional dishes and talk comfortably about the new contract.",
    "cn": "A：明天參觀工廠後，我們該帶來訪的日本客戶去哪裡吃晚餐？ B：我們別選太【高檔】的地方，因為他們告訴我比較喜歡簡單的在地餐廳，可以品嚐傳統菜餚，也能輕鬆地談新合約。"
  },
  {
    "word": "deluxe",
    "pos": "adj.",
    "cn_def": "豪華的；高級的",
    "en_def": "of very high quality and more comfortable than usual",
    "sentence": "A: Which room did you book for the CEO when she visits our branch office in Tokyo next month? B: I reserved a {{BLANK}} room on the top floor with a city view and a private desk, because she will need a quiet space to prepare for several important meetings.",
    "cn": "A：執行長下個月來東京分公司時，你幫她訂了哪種房間？ B：我訂了頂樓一間可看市景、附私人書桌的【豪華】客房，因為她需要一個安靜的空間來準備幾場重要的會議。"
  },
  {
    "word": "upscale",
    "pos": "adj.",
    "cn_def": "高檔的；高級的",
    "en_def": "designed for rich people; expensive and high-class",
    "sentence": "A: Why did the company choose such an expensive area for our new clothing store instead of the shopping mall near the station? B: Our target customers are wealthy professionals, so the marketing director believes an {{BLANK}} neighborhood with fine restaurants and art galleries will attract more of the right buyers.",
    "cn": "A：為什麼公司為新服飾店選了那麼貴的地段，而不是車站附近的購物中心？ B：我們的目標客群是富裕的專業人士，所以行銷總監認為一個有高級餐廳和藝廊的【高檔】社區能吸引更多合適的買家。"
  },
  {
    "word": "lavish",
    "pos": "adj.",
    "cn_def": "奢華的；鋪張的",
    "en_def": "very large, expensive, or generous",
    "sentence": "A: Did the company spend a lot of money on the annual dinner party for employees this year? B: Not really, the managers decided against a {{BLANK}} party at a five-star hotel and used the money for staff bonuses instead, which most people in the office were very happy about.",
    "cn": "A：公司今年在員工年度晚宴上花了很多錢嗎？ B：其實沒有，主管們決定不在五星級飯店辦【奢華的】派對，而是把錢拿來發員工獎金，辦公室大部分的人對此都很開心。"
  },
  {
    "word": "splurge",
    "pos": "v.",
    "cn_def": "揮霍；大手筆花錢",
    "en_def": "to spend a lot of money on something you enjoy",
    "sentence": "A: What are you going to do with the bonus you received after the team finished the big project early? B: I usually save most of my money, but this time I'm going to {{BLANK}} on a new laptop and a weekend trip to the beach with my family.",
    "cn": "A：團隊提早完成大型專案後，你打算怎麼運用拿到的獎金？ B：我通常會把大部分的錢存起來，但這次我要【揮霍一下】，買一台新筆電，並和家人去海邊度個週末。"
  },
  {
    "word": "afford",
    "pos": "v.",
    "cn_def": "負擔得起；買得起",
    "en_def": "to have enough money to pay for something",
    "sentence": "A: Is our department going to buy the new design software that the graphic team asked for last month? B: Unfortunately, we can't {{BLANK}} it this quarter because sales were lower than expected, but the manager promised to look at the budget again in January.",
    "cn": "A：我們部門會買平面設計團隊上個月要求的新設計軟體嗎？ B：很遺憾，因為銷售額低於預期，我們這一季【負擔】不起，但經理承諾會在一月重新檢視預算。"
  },
  {
    "word": "budget",
    "pos": "n.",
    "cn_def": "預算",
    "en_def": "the amount of money you have to spend on something",
    "sentence": "A: How much money can we spend on decorations and food for the grand opening of the new branch next month? B: The finance department has given us a {{BLANK}} of five thousand dollars, so we need to compare prices from several suppliers before we place any orders.",
    "cn": "A：下個月新分店盛大開幕時，我們可以花多少錢在裝飾和食物上？ B：財務部給了我們五千美元的【預算】，所以在下任何訂單之前，我們需要先比較幾家供應商的價格。"
  },
  {
    "word": "expense",
    "pos": "n.",
    "cn_def": "費用；開銷",
    "en_def": "money spent on something",
    "sentence": "A: Can I get my money back for the taxi I took to the airport when I went to the trade show in Taipei? B: Yes, just fill out the {{BLANK}} report on the company website, attach the receipt, and send it to the accounting team before the end of the month.",
    "cn": "A：我去台北參加貿易展時搭計程車去機場的錢可以報銷嗎？ B：可以，只要在公司網站上填寫【費用】報告，附上收據，並在月底前寄給會計團隊就好。"
  },
  {
    "word": "investment",
    "pos": "n.",
    "cn_def": "投資",
    "en_def": "money or time spent to get a future benefit",
    "sentence": "A: Why did the company spend so much money on training courses for new employees this year? B: The president sees it as a long-term {{BLANK}}, because well-trained workers make fewer mistakes, serve customers better, and usually stay with the company for many more years.",
    "cn": "A：為什麼公司今年在新進員工的訓練課程上花了這麼多錢？ B：總裁把它視為一項長期【投資】，因為受過良好訓練的員工犯錯較少、更能服務顧客，而且通常會在公司待得更久。"
  },
  {
    "word": "fee",
    "pos": "n.",
    "cn_def": "費用；（服務）費",
    "en_def": "money you pay for a service or to join something",
    "sentence": "A: How much does it cost to join the business networking club that meets downtown every Wednesday morning? B: There is a yearly membership {{BLANK}} of two hundred dollars, which includes breakfast at every meeting and free entry to their large conference in the autumn.",
    "cn": "A：參加每週三早上在市中心聚會的商務交流俱樂部要花多少錢？ B：每年的會員【費】是兩百美元，包括每次聚會的早餐，以及免費參加他們秋季的大型研討會。"
  },
  {
    "word": "charge",
    "pos": "n.",
    "cn_def": "收費；費用",
    "en_def": "the amount of money you must pay for something",
    "sentence": "A: Why is the total on this hotel bill higher than the room price we agreed on when we booked online? B: There is an extra {{BLANK}} for the late checkout and the room service you ordered last night, but I can ask the front desk to explain each item.",
    "cn": "A：為什麼這張飯店帳單的總額比我們上網預訂時談好的房價還高？ B：因為晚退房和你昨晚點的客房服務有額外【費用】，不過我可以請櫃檯說明每一個項目。"
  },
  {
    "word": "rate",
    "pos": "n.",
    "cn_def": "費率；價格",
    "en_def": "a fixed amount of money charged for something",
    "sentence": "A: Which hotel should we recommend to the guests coming to our sales conference in December? B: The Grand Plaza has offered a special group {{BLANK}} of ninety dollars a night for our guests, which is much lower than the normal price, and it is only five minutes from the venue.",
    "cn": "A：我們應該推薦哪家飯店給十二月來參加業務研討會的客人？ B：Grand Plaza 為我們的客人提供每晚九十美元的團體優惠【費率】，比平常的價格低很多，而且距離會場只要五分鐘。"
  },
  {
    "word": "price",
    "pos": "n.",
    "cn_def": "價格",
    "en_def": "the amount of money you must pay to buy something",
    "sentence": "A: Have you decided which supplier we should use for the new office chairs that the staff have been asking for? B: I chose the company in Taichung, because their {{BLANK}} is lower than the others and they offer free delivery and a five-year guarantee on every chair.",
    "cn": "A：你決定好員工一直要求的新辦公椅要用哪家供應商了嗎？ B：我選了台中那家公司，因為他們的【價格】比其他家低，而且每張椅子都提供免費運送和五年保固。"
  },
  {
    "word": "dearly",
    "pos": "adv.",
    "cn_def": "代價高昂地；慘重地",
    "en_def": "at a high cost; in a way that causes great loss",
    "sentence": "A: Why is the manager so careful about checking every contract before anyone signs it these days? B: Last year the company paid {{BLANK}} for a small mistake in a contract with a supplier, losing thousands of dollars, so now she reads every page herself before signing.",
    "cn": "A：為什麼經理最近在任何人簽約前都這麼仔細地檢查每一份合約？ B：去年公司因為和供應商合約中的一個小錯誤付出了【慘痛的】代價，損失了好幾千美元，所以現在她簽名前都會親自看過每一頁。"
  },
  {
    "word": "economically",
    "pos": "adv.",
    "cn_def": "經濟地；節約地",
    "en_def": "in a way that uses little money",
    "sentence": "A: How can our small team run the new online advertising campaign without spending too much money? B: We can do it more {{BLANK}} by using social media instead of television, sharing videos made by our own staff, and checking the results every week to avoid wasting money.",
    "cn": "A：我們的小團隊要怎麼在不花太多錢的情況下推動新的線上廣告活動？ B：我們可以改用社群媒體而不是電視、分享員工自己拍的影片，並每週檢查成效以避免浪費，這樣就能更【經濟地】進行。"
  },
  {
    "word": "reasonable",
    "pos": "adj.",
    "cn_def": "（價格）合理的；公道的",
    "en_def": "fair and not too expensive",
    "sentence": "A: Do you think the price the printing company quoted for our new brochures is fair? B: Yes, it seems quite {{BLANK}}, because they will print five thousand color copies on good paper and deliver them to our office by Friday, which is faster than most other companies.",
    "cn": "A：你覺得印刷公司為我們新的宣傳手冊開的報價公道嗎？ B：是的，看起來相當【合理】，因為他們會用好紙印五千份彩色本，而且星期五前送到我們辦公室，比大多數其他公司都快。"
  },
  {
    "word": "affordable",
    "pos": "adj.",
    "cn_def": "負擔得起的；平價的",
    "en_def": "cheap enough for most people to buy",
    "sentence": "A: Why are so many young employees moving to the small town outside the city these days? B: Housing there is much more {{BLANK}} than downtown, and the new train line makes it easy to travel to work in about forty minutes, so they can save money every month.",
    "cn": "A：為什麼最近有這麼多年輕員工搬到城外的小鎮？ B：那裡的房子比市中心【便宜實惠】得多，而且新的鐵路線讓通勤上班只要大約四十分鐘，所以他們每個月都能省錢。"
  },
  {
    "word": "cheap",
    "pos": "adj.",
    "cn_def": "便宜的；廉價的",
    "en_def": "low in price; costing little money",
    "sentence": "A: Should we order the paper for the office printers from the new online shop that our neighbor recommended? B: Their paper is very {{BLANK}}, but last time it was so thin that it kept getting stuck in the machines, so I think we should stay with our usual supplier.",
    "cn": "A：我們該向鄰居推薦的那家新網路商店訂辦公室印表機用的紙嗎？ B：他們的紙非常【便宜】，但上次紙太薄，一直卡在機器裡，所以我覺得我們應該繼續用平常的供應商。"
  },
  {
    "word": "discount",
    "pos": "n.",
    "cn_def": "折扣",
    "en_def": "an amount taken off the usual price",
    "sentence": "A: Is there any way we can lower the cost of the new laptops for the sales team this year? B: If we order more than fifty computers at once, the supplier will give us a fifteen percent {{BLANK}}, and they will also set up the software for free.",
    "cn": "A：今年有什麼辦法能降低業務團隊新筆電的成本嗎？ B：如果我們一次訂購五十台以上的電腦，供應商會給我們百分之十五的【折扣】，而且還會免費幫我們安裝軟體。"
  },
  {
    "word": "bargain",
    "pos": "n.",
    "cn_def": "便宜貨；划算的交易",
    "en_def": "something bought for less than its usual price",
    "sentence": "A: Where did you find such a nice leather bag for your business trips, and how much did it cost? B: I bought it at the department store last weekend for only forty dollars instead of the usual hundred and twenty, so it was a real {{BLANK}}, and the quality is excellent.",
    "cn": "A：你在哪裡找到這麼好看、適合出差用的皮包？花了多少錢？ B：我上週末在百貨公司只花了四十美元買到，原價是一百二十美元，所以真的很【划算】，而且品質非常好。"
  },
  {
    "word": "sale",
    "pos": "n.",
    "cn_def": "特賣；拍賣",
    "en_def": "a time when a shop sells things at lower prices",
    "sentence": "A: When is the best time to buy new furniture for the reception area of our office? B: The furniture store on Main Street is having a big {{BLANK}} next weekend, with up to forty percent off sofas and tables, so we should visit on Saturday morning before everything is gone.",
    "cn": "A：什麼時候是為辦公室接待區添購新家具的最佳時機？ B：大街上那家家具店下週末有大型【特賣】，沙發和桌子最多打六折，所以我們應該在星期六早上東西被搶光前過去。"
  },
  {
    "word": "worthwhile",
    "pos": "adj.",
    "cn_def": "值得的；有價值的",
    "en_def": "useful or important enough to spend time or money on",
    "sentence": "A: Do you think the two-day leadership workshop that you attended in Kaohsiung was useful for your job? B: Yes, it was very {{BLANK}}, because I learned practical ways to manage meetings and give feedback, and I have already used some of the ideas with my own team this week.",
    "cn": "A：你覺得你在高雄參加的兩天領導力工作坊對你的工作有幫助嗎？ B：是的，非常【值得】，因為我學到了主持會議和給予回饋的實用方法，而且這週已經在自己的團隊用上了一些點子。"
  },
  {
    "word": "extravagant",
    "pos": "adj.",
    "cn_def": "奢侈的；鋪張浪費的",
    "en_def": "spending or costing much more money than is sensible",
    "sentence": "A: Why did the board of directors criticize the marketing manager at the meeting yesterday afternoon? B: They felt his plan to rent a private island for the product launch was too {{BLANK}}, especially when the company is trying to cut costs and many departments have smaller budgets this year.",
    "cn": "A：為什麼董事會昨天下午在會議上批評行銷經理？ B：他們覺得他租私人島嶼來辦產品發表會的計畫太【鋪張浪費】了，尤其公司正努力削減成本，而且今年許多部門的預算都變少了。"
  },
  {
    "word": "frugal",
    "pos": "adj.",
    "cn_def": "節儉的；節約的",
    "en_def": "careful to spend only a little money",
    "sentence": "A: How did your small company manage to survive during the difficult years when sales were so low? B: We were very {{BLANK}}, so we rented a smaller office, bought used equipment, and asked everyone to save electricity, which helped us keep all of our employees until business improved.",
    "cn": "A：在銷售額很低的那幾年艱困時期，你們這家小公司是怎麼撐下來的？ B：我們非常【節儉】，租了較小的辦公室、買二手設備，並請大家節約用電，這幫助我們在生意好轉前留住了所有員工。"
  },
  {
    "word": "financially",
    "pos": "adv.",
    "cn_def": "財務上；經濟上",
    "en_def": "relating to money",
    "sentence": "A: Is the small bakery that opened next to our office last year doing well? B: The owner told me the business is now {{BLANK}} stable, because many office workers buy breakfast there every morning and several companies order cakes for their meetings and parties.",
    "cn": "A：去年在我們辦公室隔壁開的那家小麵包店經營得好嗎？ B：老闆告訴我生意現在【財務上】很穩定，因為許多上班族每天早上都在那裡買早餐，還有好幾家公司訂蛋糕來開會和辦派對。"
  }
];

const MCQS = [
  {
    "q": "Replacing the old roof turned out to be a _____ repair for the hotel. The owners had to delay other renovations until next year.",
    "options": [
      "costly",
      "frugal",
      "cheap",
      "exclusive"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The resort offers _____ suites with private pools and ocean views. Guests can also enjoy free spa treatments during their stay.",
    "options": [
      "frugal",
      "worthwhile",
      "luxurious",
      "reasonable"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Customers who pay for the _____ membership receive faster delivery and special offers. The basic plan does not include these extra services.",
    "options": [
      "frugal",
      "premium",
      "cheap",
      "overpriced"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Many customers complained that the hotel's minibar snacks were _____. A small bottle of water cost five times more than in the shop downstairs.",
    "options": [
      "frugal",
      "valuable",
      "affordable",
      "overpriced"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The airline was criticized for charging _____ fees for changing tickets. Some passengers paid more than the original fare just to switch dates.",
    "options": [
      "frugal",
      "exorbitant",
      "reasonable",
      "affordable"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Please store all _____ items, such as jewelry and passports, in the room safe. The hotel is not responsible for lost property.",
    "options": [
      "valuable",
      "frugal",
      "overpriced",
      "affordable"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Members of our loyalty program get _____ access to the new collection. Other customers can buy the items one week later.",
    "options": [
      "frugal",
      "cheap",
      "overpriced",
      "exclusive"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The new shopping center will include several _____ boutiques and fine restaurants. Developers hope to attract wealthy shoppers from across the city.",
    "options": [
      "frugal",
      "cheap",
      "upscale",
      "affordable"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The company held a _____ banquet to celebrate its fiftieth anniversary. Guests enjoyed fine wine, live music, and seven courses of food.",
    "options": [
      "lavish",
      "frugal",
      "cheap",
      "reasonable"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "After saving carefully for months, Amy Lin decided to _____ on a first-class ticket. She wanted to arrive in Paris rested before the conference.",
    "options": [
      "afford",
      "borrow",
      "splurge",
      "charge"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Small businesses often cannot _____ to hire a full-time accountant. Many of them use online software to manage their finances instead.",
    "options": [
      "splurge",
      "afford",
      "charge",
      "spend"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The marketing team must stay within its _____ for the trade show. Any extra spending needs approval from the finance director.",
    "options": [
      "discount",
      "bargain",
      "fee",
      "budget"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Please submit your _____ report with all receipts after each business trip. The accounting team will repay you within two weeks.",
    "options": [
      "sale",
      "expense",
      "bargain",
      "discount"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Buying energy-saving machines is a smart long-term _____. The factory expects to recover the cost through lower electricity bills within three years.",
    "options": [
      "investment",
      "discount",
      "fee",
      "sale"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Visitors must pay an entrance _____ of ten dollars at the museum gate. Children under six may enter for free.",
    "options": [
      "bargain",
      "investment",
      "rate",
      "fee"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Delivery is free for orders over fifty dollars. Smaller orders will have a shipping _____ of five dollars added at checkout.",
    "options": [
      "bargain",
      "budget",
      "charge",
      "investment"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The bank offers a low interest _____ for customers who open a business account this month. The offer ends on December 31.",
    "options": [
      "rate",
      "bargain",
      "sale",
      "expense"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The store lowered the _____ of its winter coats by thirty percent. Shoppers lined up early to buy them before they sold out.",
    "options": [
      "fee",
      "budget",
      "price",
      "investment"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The company paid _____ for ignoring customer complaints about the product. Sales dropped sharply, and two major stores stopped ordering from it.",
    "options": [
      "economically",
      "dearly",
      "softly",
      "rarely"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "To save money, the restaurant now uses its ingredients more _____. Leftover vegetables are made into soups for the next day's lunch menu.",
    "options": [
      "dearly",
      "financially",
      "loudly",
      "economically"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The hotel near the convention center offers clean rooms at a _____ price. Many visitors choose it because it fits their travel budgets.",
    "options": [
      "lavish",
      "reasonable",
      "frugal",
      "exorbitant"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The city plans to build more _____ housing for young workers. Rents in the new apartments will be lower than the market average.",
    "options": [
      "affordable",
      "exorbitant",
      "lavish",
      "upscale"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The airline sells _____ tickets but charges extra for bags and seats. Some passengers end up paying more than they expected.",
    "options": [
      "lavish",
      "valuable",
      "exclusive",
      "cheap"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Students can receive a twenty percent _____ on all software by showing a valid ID. The offer is available at all our stores.",
    "options": [
      "fee",
      "budget",
      "discount",
      "expense"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "At only fifteen dollars, these wireless headphones are a real _____. Similar models from other brands usually sell for over fifty dollars.",
    "options": [
      "bargain",
      "expense",
      "fee",
      "budget"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The department store is holding a clearance _____ this weekend. Most summer clothing will be sold at half price.",
    "options": [
      "fee",
      "budget",
      "sale",
      "rate"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Although the training course was expensive, most staff found it _____. They learned skills that helped them serve customers more effectively.",
    "options": [
      "frugal",
      "worthwhile",
      "lavish",
      "exorbitant"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The manager rejected the _____ plan to fly all staff to Hawaii for the holiday party. She suggested a dinner at a local restaurant instead.",
    "options": [
      "frugal",
      "reasonable",
      "affordable",
      "extravagant"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Living a _____ life helped Kevin Chen save enough money to start his own business. He cooked at home and rarely bought new clothes.",
    "options": [
      "lavish",
      "frugal",
      "extravagant",
      "luxurious"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The new owners promised to support the struggling factory _____ until it becomes profitable again. They will invest two million dollars next year.",
    "options": [
      "financially",
      "dearly",
      "softly",
      "rarely"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "costly": {
    "pos": "adj.",
    "en_def": "costing a lot of money; causing loss or damage",
    "cn_def": "昂貴的；代價高的"
  },
  "pricey": {
    "pos": "adj.",
    "en_def": "(informal) expensive",
    "cn_def": "昂貴的（口語）"
  },
  "luxurious": {
    "pos": "adj.",
    "en_def": "very comfortable and expensive",
    "cn_def": "豪華的；奢侈的"
  },
  "premium": {
    "pos": "adj.",
    "en_def": "of very high quality and more expensive than others",
    "cn_def": "高級的；優質的"
  },
  "high-priced": {
    "pos": "adj.",
    "en_def": "having a high price",
    "cn_def": "高價的；昂貴的"
  },
  "overpriced": {
    "pos": "adj.",
    "en_def": "costing more than it is really worth",
    "cn_def": "定價過高的；太貴的"
  },
  "exorbitant": {
    "pos": "adj.",
    "en_def": "much too high in price",
    "cn_def": "（價格）過高的；離譜的"
  },
  "valuable": {
    "pos": "adj.",
    "en_def": "worth a lot of money or very useful",
    "cn_def": "貴重的；寶貴的"
  },
  "exclusive": {
    "pos": "adj.",
    "en_def": "only for a few special people; expensive and not open to everyone",
    "cn_def": "獨有的；專屬的；高級的"
  },
  "fancy": {
    "pos": "adj.",
    "en_def": "expensive and stylish, often with lots of decoration",
    "cn_def": "高檔的；花俏的"
  },
  "deluxe": {
    "pos": "adj.",
    "en_def": "of very high quality and more comfortable than usual",
    "cn_def": "豪華的；高級的"
  },
  "upscale": {
    "pos": "adj.",
    "en_def": "designed for rich people; expensive and high-class",
    "cn_def": "高檔的；高級的"
  },
  "lavish": {
    "pos": "adj.",
    "en_def": "very large, expensive, or generous",
    "cn_def": "奢華的；鋪張的"
  },
  "splurge": {
    "pos": "v.",
    "en_def": "to spend a lot of money on something you enjoy",
    "cn_def": "揮霍；大手筆花錢"
  },
  "afford": {
    "pos": "v.",
    "en_def": "to have enough money to pay for something",
    "cn_def": "負擔得起；買得起"
  },
  "budget": {
    "pos": "n.",
    "en_def": "the amount of money you have to spend on something",
    "cn_def": "預算"
  },
  "expense": {
    "pos": "n.",
    "en_def": "money spent on something",
    "cn_def": "費用；開銷"
  },
  "investment": {
    "pos": "n.",
    "en_def": "money or time spent to get a future benefit",
    "cn_def": "投資"
  },
  "fee": {
    "pos": "n.",
    "en_def": "money you pay for a service or to join something",
    "cn_def": "費用；（服務）費"
  },
  "charge": {
    "pos": "n.",
    "en_def": "the amount of money you must pay for something",
    "cn_def": "收費；費用"
  },
  "rate": {
    "pos": "n.",
    "en_def": "a fixed amount of money charged for something",
    "cn_def": "費率；價格"
  },
  "price": {
    "pos": "n.",
    "en_def": "the amount of money you must pay to buy something",
    "cn_def": "價格"
  },
  "dearly": {
    "pos": "adv.",
    "en_def": "at a high cost; in a way that causes great loss",
    "cn_def": "代價高昂地；慘重地"
  },
  "economically": {
    "pos": "adv.",
    "en_def": "in a way that uses little money",
    "cn_def": "經濟地；節約地"
  },
  "reasonable": {
    "pos": "adj.",
    "en_def": "fair and not too expensive",
    "cn_def": "（價格）合理的；公道的"
  },
  "affordable": {
    "pos": "adj.",
    "en_def": "cheap enough for most people to buy",
    "cn_def": "負擔得起的；平價的"
  },
  "cheap": {
    "pos": "adj.",
    "en_def": "low in price; costing little money",
    "cn_def": "便宜的；廉價的"
  },
  "discount": {
    "pos": "n.",
    "en_def": "an amount taken off the usual price",
    "cn_def": "折扣"
  },
  "bargain": {
    "pos": "n.",
    "en_def": "something bought for less than its usual price",
    "cn_def": "便宜貨；划算的交易"
  },
  "sale": {
    "pos": "n.",
    "en_def": "a time when a shop sells things at lower prices",
    "cn_def": "特賣；拍賣"
  },
  "worthwhile": {
    "pos": "adj.",
    "en_def": "useful or important enough to spend time or money on",
    "cn_def": "值得的；有價值的"
  },
  "extravagant": {
    "pos": "adj.",
    "en_def": "spending or costing much more money than is sensible",
    "cn_def": "奢侈的；鋪張浪費的"
  },
  "frugal": {
    "pos": "adj.",
    "en_def": "careful to spend only a little money",
    "cn_def": "節儉的；節約的"
  },
  "financially": {
    "pos": "adv.",
    "en_def": "relating to money",
    "cn_def": "財務上；經濟上"
  }
};

const EXTRA_GLOSSES = {};
