// Topic 244 Quiz Data: Money 金錢
// Source word list: https://www.examword.com/group-topic/money — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T244 - Money 金錢",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "cash",
    "pos": "n.",
    "cn_def": "現金",
    "en_def": "money in coins and paper notes",
    "sentence": "A: Does the new café near our office accept credit cards, or should I stop at the bank before we take the interns out for lunch on Friday? B: They only take {{BLANK}} at the moment because their card machine is broken, so you should get some money from the ATM in the lobby before we leave.",
    "cn": "A：我們辦公室附近那家新咖啡廳收信用卡嗎？還是我週五帶實習生去吃午餐前應該先去一趟銀行？ B：他們目前只收【現金】，因為刷卡機壞了，所以我們出發前你最好先去大廳的提款機領點錢。"
  },
  {
    "word": "currency",
    "pos": "n.",
    "cn_def": "貨幣",
    "en_def": "the type of money a country uses",
    "sentence": "A: I'm flying to Tokyo next week to meet our Japanese suppliers, so should I exchange my money here or wait until I arrive at the airport in Japan? B: You will usually get a better rate if you buy the local {{BLANK}} at a bank in the city before you leave, because airport exchange counters often charge higher fees.",
    "cn": "A：我下週要飛東京和日本供應商開會，我應該在這裡換錢，還是等抵達日本機場再換？ B：如果你出發前在市區的銀行買當地【貨幣】，通常匯率會比較好，因為機場的兌換櫃檯常常收取較高的手續費。"
  },
  {
    "word": "income",
    "pos": "n.",
    "cn_def": "收入",
    "en_def": "money that you get from work or other sources",
    "sentence": "A: Why did the bank ask for so many documents when you applied for the apartment loan last month, and did they explain what they needed? B: They wanted proof of my monthly {{BLANK}}, such as pay slips and tax forms, because they need to make sure I can pay back the money every month without any problems.",
    "cn": "A：你上個月申請房屋貸款時，銀行為什麼要那麼多文件？他們有說明需要什麼嗎？ B：他們要我每月【收入】的證明，像是薪資單和稅單，因為他們需要確定我每個月都能順利還款。"
  },
  {
    "word": "salary",
    "pos": "n.",
    "cn_def": "薪水；薪資",
    "en_def": "the fixed money an employee is paid every month or year",
    "sentence": "A: Are you going to accept the job offer from the marketing firm downtown, even though it means a much longer commute every day? B: Yes, I think so, because they are offering a higher {{BLANK}} than my current company, and they also give employees extra vacation days and a yearly bonus.",
    "cn": "A：即使每天通勤時間會長很多，你還是會接受市中心那家行銷公司的工作邀約嗎？ B：會，我想會的，因為他們提供的【薪水】比我現在的公司高，而且還給員工額外的假期和年終獎金。"
  },
  {
    "word": "wage",
    "pos": "n.",
    "cn_def": "工資",
    "en_def": "money paid for work, usually by the hour or week",
    "sentence": "A: How much do the part-time workers at the new supermarket earn, and do they get paid more for working on weekends and holidays? B: They earn an hourly {{BLANK}} that is a little above the legal minimum, and the store manager pays them fifty percent more when they work on public holidays.",
    "cn": "A：新超市的兼職員工賺多少錢？他們週末和假日上班會拿比較多嗎？ B：他們領的是略高於法定最低標準的時薪【工資】，而且國定假日上班時店經理會多付他們百分之五十。"
  },
  {
    "word": "profit",
    "pos": "n.",
    "cn_def": "利潤；獲利",
    "en_def": "money you earn after paying all costs",
    "sentence": "A: Was the new coffee shop chain successful in its first year, or did the owners have trouble covering the high rent in the city center? B: It did very well, and it actually made a {{BLANK}} of almost two million dollars because so many office workers bought drinks there every morning before work.",
    "cn": "A：那家新的咖啡連鎖店第一年經營成功嗎？還是老闆們付不起市中心的高額租金？ B：經營得很好，事實上賺了將近兩百萬元的【利潤】，因為很多上班族每天早上上班前都在那裡買飲料。"
  },
  {
    "word": "loss",
    "pos": "n.",
    "cn_def": "虧損；損失",
    "en_def": "money lost when costs are higher than income",
    "sentence": "A: Why did the electronics company close three of its stores in the shopping mall last month, even though they were very busy during the holidays? B: The company reported a large {{BLANK}} for the year because the rent and staff costs were much higher than the money it earned from sales.",
    "cn": "A：那家電子公司上個月為什麼關閉購物中心裡的三家店，即使假期期間生意很好？ B：公司公布了今年的巨額【虧損】，因為租金和人事成本遠高於銷售所賺的錢。"
  },
  {
    "word": "expense",
    "pos": "n.",
    "cn_def": "費用；開銷",
    "en_def": "money spent on something",
    "sentence": "A: Can I ask the company to pay for my taxi from the airport to the hotel when I go to the trade show in Singapore next month? B: Yes, travel is a business {{BLANK}}, so just keep all your receipts and send them to the accounting department within two weeks after you return to the office.",
    "cn": "A：下個月我去新加坡參加商展時，可以請公司支付我從機場到飯店的計程車費嗎？ B：可以，差旅是業務【費用】，所以只要保留所有收據，並在回辦公室後兩週內交給會計部就好。"
  },
  {
    "word": "budget",
    "pos": "n.",
    "cn_def": "預算",
    "en_def": "a plan of how much money can be spent",
    "sentence": "A: Can we hire a famous singer to perform at the company's anniversary party, or would that be too expensive for this year's event? B: I'm afraid our {{BLANK}} for the party is only twenty thousand dollars, so we will have to choose a local band and spend most of the money on food and drinks.",
    "cn": "A：我們可以請知名歌手在公司週年派對上表演嗎？還是那對今年的活動來說太貴了？ B：恐怕我們派對的【預算】只有兩萬元，所以只能找本地樂團，把大部分的錢花在餐點和飲料上。"
  },
  {
    "word": "savings",
    "pos": "n.",
    "cn_def": "儲蓄；積蓄",
    "en_def": "money that you have kept and not spent",
    "sentence": "A: How are you going to pay for the master's degree program in London, since you're planning to quit your job before the course starts? B: I've been putting money aside for five years, so I will use my {{BLANK}} to pay the school fees and live on a small student loan.",
    "cn": "A：既然你打算在課程開始前辭職，那你要怎麼支付倫敦的碩士學位課程？ B：我已經存錢五年了，所以我會用我的【積蓄】來付學費，再靠一小筆學生貸款生活。"
  },
  {
    "word": "deposit",
    "pos": "n.",
    "cn_def": "押金；訂金",
    "en_def": "money paid first to hold something, often returned later",
    "sentence": "A: What do I need to do if I want to rent the meeting room at the hotel for our training workshop in December? B: You need to pay a {{BLANK}} of two hundred dollars to reserve the room, and the hotel will return it after the event if nothing in the room is damaged.",
    "cn": "A：如果我想租飯店的會議室舉辦我們十二月的培訓工作坊，需要做什麼？ B：你需要付兩百元的【押金】來預訂會議室，活動結束後若室內沒有任何損壞，飯店就會退還。"
  },
  {
    "word": "withdraw",
    "pos": "v.",
    "cn_def": "提領；提款",
    "en_def": "to take money out of a bank account",
    "sentence": "A: Where can I get some money for the taxi, since the driver told me that he doesn't accept credit cards or mobile payments? B: There is a bank machine next to the convenience store across the street, so you can {{BLANK}} some cash there before we get in the car and go to the airport.",
    "cn": "A：司機說他不收信用卡或行動支付，我要去哪裡弄點錢付計程車費？ B：對街便利商店旁有台提款機，所以我們上車去機場前，你可以先在那裡【提領】一些現金。"
  },
  {
    "word": "transfer",
    "pos": "v.",
    "cn_def": "轉帳；轉移",
    "en_def": "to move money from one account to another",
    "sentence": "A: How should I pay the overseas supplier for the new office furniture, since they are asking for the money before they ship it? B: The easiest way is to {{BLANK}} the payment directly from our company account to their bank account online, and then email them a copy of the receipt.",
    "cn": "A：海外供應商要求出貨前先付款，我該怎麼付新辦公家具的款項？ B：最簡單的方法是線上直接把款項從我們公司的帳戶【轉帳】到他們的銀行帳戶，然後把收據副本用電子郵件寄給他們。"
  },
  {
    "word": "investment",
    "pos": "n.",
    "cn_def": "投資",
    "en_def": "money put into something to get more money later",
    "sentence": "A: Why did the factory spend so much money on new robots last year, even though sales were slower than the managers had expected? B: The owners believe it is a smart long-term {{BLANK}}, because the robots will make production faster and help the company save money on labor for many years.",
    "cn": "A：即使去年銷售比經理們預期的慢，工廠為什麼還花那麼多錢買新機器人？ B：老闆們認為這是一項明智的長期【投資】，因為機器人會讓生產更快，並幫公司在未來多年節省人力成本。"
  },
  {
    "word": "interest",
    "pos": "n.",
    "cn_def": "利息",
    "en_def": "extra money paid for borrowing or saving money",
    "sentence": "A: Should I keep my bonus in my regular bank account, or is there a better place to put the money for a few years? B: You could open a fixed deposit account, because it pays a higher rate of {{BLANK}}, so your money will grow a little faster than in a normal account.",
    "cn": "A：我應該把獎金放在一般銀行帳戶裡，還是有更好的地方可以把錢存個幾年？ B：你可以開一個定期存款帳戶，因為它支付較高的【利息】，所以你的錢會比放在一般帳戶成長得快一點。"
  },
  {
    "word": "loan",
    "pos": "n.",
    "cn_def": "貸款；借款",
    "en_def": "money that you borrow and must pay back",
    "sentence": "A: How did the young couple manage to open their own bakery downtown so quickly after they graduated from cooking school? B: They borrowed money from a bank by taking out a small business {{BLANK}}, and they have to pay it back in monthly payments over the next ten years.",
    "cn": "A：那對年輕夫妻從烹飪學校畢業後，怎麼這麼快就在市中心開了自己的麵包店？ B：他們向銀行申請了一筆小型企業【貸款】，接下來十年必須按月分期償還。"
  },
  {
    "word": "debt",
    "pos": "n.",
    "cn_def": "債務；欠款",
    "en_def": "money that you owe to someone",
    "sentence": "A: Why does Mark always bring his lunch from home and refuse to join us when we go out for dinner after work on Fridays? B: He is trying to pay off his credit card {{BLANK}} as quickly as possible, so he is saving every dollar until he no longer owes the bank any money.",
    "cn": "A：為什麼馬克總是從家裡帶午餐，而且週五下班後我們出去吃晚餐時都拒絕參加？ B：他正努力盡快還清信用卡【債務】，所以他省下每一塊錢，直到不再欠銀行任何錢為止。"
  },
  {
    "word": "credit",
    "pos": "n.",
    "cn_def": "信用；賒帳",
    "en_def": "a way of buying something now and paying for it later",
    "sentence": "A: Can I pay for the hotel room and the conference tickets at the same time, or do I have to pay for them separately at the front desk? B: You can pay for everything together with your {{BLANK}} card, and the receptionist will give you one receipt that you can show to your accountant later.",
    "cn": "A：我可以同時支付飯店房間和會議門票嗎？還是必須在櫃檯分開付款？ B：你可以用你的【信用】卡一次付清所有費用，接待員會給你一張收據，之後可以拿給你的會計看。"
  },
  {
    "word": "debit",
    "pos": "n.",
    "cn_def": "簽帳；借記",
    "en_def": "money taken directly out of a bank account",
    "sentence": "A: I don't like using credit cards because I'm afraid of spending too much, so what is another way to pay at stores without carrying cash? B: You can use a {{BLANK}} card, because the money is taken directly from your bank account, so you can only spend what you actually have.",
    "cn": "A：我不喜歡用信用卡，因為怕花太多，有什麼其他方式可以在店裡付款又不用帶現金？ B：你可以用【簽帳】金融卡，因為錢會直接從你的銀行帳戶扣除，所以你只能花你實際擁有的錢。"
  },
  {
    "word": "purchase",
    "pos": "n.",
    "cn_def": "購買；購物",
    "en_def": "the act of buying something",
    "sentence": "A: Can customers return the wireless headphones if they don't like the sound quality after using them at home for a few days? B: Yes, they can return them within thirty days of {{BLANK}}, as long as they bring the original receipt and all the parts in the box.",
    "cn": "A：如果顧客在家用了幾天後不喜歡無線耳機的音質，可以退貨嗎？ B：可以，只要在【購買】後三十天內帶著原始收據和盒內所有零件，就可以退貨。"
  },
  {
    "word": "spend",
    "pos": "v.",
    "cn_def": "花費；花（錢）",
    "en_def": "to use money to pay for things",
    "sentence": "A: How much did the marketing team use on the online advertising campaign for the new sports shoes last quarter? B: They decided to {{BLANK}} about fifty thousand dollars on social media ads, and the results were excellent because online orders doubled in only two months.",
    "cn": "A：行銷團隊上一季在新款運動鞋的線上廣告活動用了多少錢？ B：他們決定在社群媒體廣告上【花費】大約五萬元，結果非常好，因為線上訂單在短短兩個月內就翻倍了。"
  },
  {
    "word": "save",
    "pos": "v.",
    "cn_def": "存（錢）；節省",
    "en_def": "to keep money so you can use it later",
    "sentence": "A: Why are you taking the bus to work now instead of driving your car like you did for the last five years? B: I want to {{BLANK}} money for a trip to Europe next summer, and the bus is much cheaper than paying for gas and parking downtown every day.",
    "cn": "A：你為什麼現在搭公車上班，而不是像過去五年那樣開車？ B：我想為明年夏天的歐洲之旅【存】錢，而且搭公車比每天付油錢和市中心的停車費便宜多了。"
  },
  {
    "word": "afford",
    "pos": "v.",
    "cn_def": "負擔得起；買得起",
    "en_def": "to have enough money to pay for something",
    "sentence": "A: Is the small design company going to move into the new office tower next to the train station when its lease ends? B: No, the owner said they can't {{BLANK}} the high rent there yet, so they will stay in their current building for at least two more years.",
    "cn": "A：那家小型設計公司租約到期後，會搬進火車站旁的新辦公大樓嗎？ B：不會，老闆說他們目前還無法【負擔】那裡的高額租金，所以至少還會在現在的大樓再待兩年。"
  },
  {
    "word": "cost",
    "pos": "n.",
    "cn_def": "成本；費用",
    "en_def": "the amount of money needed to buy or make something",
    "sentence": "A: Why did the restaurant raise the prices on its lunch menu so suddenly at the beginning of this month? B: The {{BLANK}} of vegetables, meat, and cooking oil has gone up a lot this year, so the owner had no choice but to charge customers a little more.",
    "cn": "A：那家餐廳為什麼這個月初突然調漲午餐菜單的價格？ B：今年蔬菜、肉類和食用油的【成本】上漲很多，所以老闆別無選擇，只好向顧客多收一點錢。"
  },
  {
    "word": "price",
    "pos": "n.",
    "cn_def": "價格",
    "en_def": "the amount of money you must pay to buy something",
    "sentence": "A: Did you buy the new laptop for the sales team at the electronics store, or did you decide to order it online? B: I ordered it online because the {{BLANK}} on the website was about one hundred dollars lower, and they also offered free delivery to our office within two days.",
    "cn": "A：你是在電器行幫業務團隊買新筆電，還是決定上網訂？ B：我在網路上訂的，因為網站上的【價格】低了大約一百元，而且他們還提供兩天內免費送到我們辦公室。"
  },
  {
    "word": "cheap",
    "pos": "adj.",
    "cn_def": "便宜的",
    "en_def": "costing little money",
    "sentence": "A: Where should we book rooms for the twenty interns who are coming to the training program in the city next month? B: Let's find a clean but {{BLANK}} hotel near the subway, because our budget is limited and the interns will only use the rooms for sleeping anyway.",
    "cn": "A：下個月要來市區參加培訓計畫的二十位實習生，我們該幫他們訂哪裡的房間？ B：我們找一間靠近地鐵、乾淨又【便宜】的飯店吧，因為我們預算有限，而且實習生反正只會用房間睡覺。"
  },
  {
    "word": "expensive",
    "pos": "adj.",
    "cn_def": "昂貴的",
    "en_def": "costing a lot of money",
    "sentence": "A: Why didn't the manager choose the restaurant with the beautiful view of the harbor for the team's year-end dinner this time? B: The food there is very {{BLANK}}, and with forty people coming, the bill would have been far more than the amount the company gave us for the event.",
    "cn": "A：這次經理為什麼沒有選那家可以欣賞港口美景的餐廳辦團隊尾牙？ B：那裡的餐點很【昂貴】，有四十個人要去，帳單會遠超過公司給我們辦活動的金額。"
  },
  {
    "word": "wealth",
    "pos": "n.",
    "cn_def": "財富",
    "en_def": "a large amount of money or property",
    "sentence": "A: Why does the old businessman who owns the shipping company give so much money to local schools and hospitals every year? B: He built up great {{BLANK}} over forty years of hard work, and now he wants to use his money to help the community where he grew up.",
    "cn": "A：那位擁有航運公司的老商人為什麼每年都捐那麼多錢給當地學校和醫院？ B：他四十年來努力工作累積了大量【財富】，現在他想用他的錢幫助他成長的社區。"
  },
  {
    "word": "fortune",
    "pos": "n.",
    "cn_def": "一大筆錢；財富",
    "en_def": "a very large amount of money",
    "sentence": "A: Did you hear that our former colleague started his own online shopping business after he left the company three years ago? B: Yes, and he has made a {{BLANK}} because his website became very popular during the pandemic, so now he owns two houses and a sports car.",
    "cn": "A：你有聽說我們的前同事三年前離職後自己開了網路購物事業嗎？ B：有，而且他已經賺了【一大筆錢】，因為他的網站在疫情期間變得非常受歡迎，所以他現在擁有兩棟房子和一輛跑車。"
  },
  {
    "word": "financial",
    "pos": "adj.",
    "cn_def": "財務的；金融的",
    "en_def": "connected with money",
    "sentence": "A: Why did the company hire an outside expert to review its accounts before the meeting with the investors next week? B: The directors want to be sure that all the {{BLANK}} reports are correct, because the investors will check the numbers carefully before they decide to give us more money.",
    "cn": "A：公司為什麼在下週和投資人開會前，聘請外部專家審查帳目？ B：董事們想確定所有的【財務】報告都正確無誤，因為投資人在決定是否給我們更多資金之前，會仔細檢查數字。"
  },
  {
    "word": "economic",
    "pos": "adj.",
    "cn_def": "經濟的",
    "en_def": "connected with the economy of a country or area",
    "sentence": "A: Why are so many companies in the city cutting jobs and canceling their plans to open new branches this year? B: The country is facing serious {{BLANK}} problems, such as high prices and slow growth, so many businesses are trying to reduce their costs and wait for better times.",
    "cn": "A：為什麼今年市內有那麼多公司裁員，並取消開設新分公司的計畫？ B：國家正面臨嚴重的【經濟】問題，例如物價高漲和成長緩慢，所以許多企業都在努力降低成本，等待景氣好轉。"
  },
  {
    "word": "generous",
    "pos": "adj.",
    "cn_def": "慷慨的；大方的",
    "en_def": "happy to give money or help to others",
    "sentence": "A: Did the staff enjoy the end-of-year party, and were they happy with the gifts that the company gave out at the end of the evening? B: Everyone was delighted, because the boss was very {{BLANK}} this year and gave each employee a bonus of one month's pay plus a shopping voucher.",
    "cn": "A：員工們喜歡年終派對嗎？他們對公司在晚會結束時發的禮物滿意嗎？ B：大家都很開心，因為老闆今年非常【慷慨】，給每位員工一個月薪水的獎金外加一張購物禮券。"
  },
  {
    "word": "thrifty",
    "pos": "adj.",
    "cn_def": "節儉的",
    "en_def": "careful not to waste money",
    "sentence": "A: How was your grandmother able to buy her own house, even though she worked as a cleaner and earned very little money? B: She was very {{BLANK}} all her life, so she cooked at home, repaired her own clothes, and put a small amount into the bank every single week.",
    "cn": "A：雖然你祖母當清潔工、賺的錢很少，她是怎麼買得起自己的房子的？ B：她一輩子都非常【節儉】，所以她在家煮飯、自己縫補衣服，而且每個星期都存一點錢到銀行。"
  },
  {
    "word": "rich",
    "pos": "adj.",
    "cn_def": "富有的",
    "en_def": "having a lot of money",
    "sentence": "A: Who is the man in the expensive suit talking to our CEO near the entrance of the conference hall? B: He is a very {{BLANK}} investor from Hong Kong who owns several hotels, and our CEO hopes he will put money into our new travel app.",
    "cn": "A：在會議廳入口附近和我們執行長說話、穿著昂貴西裝的那位男士是誰？ B：他是來自香港非常【富有】的投資人，擁有好幾間飯店，我們執行長希望他投資我們的新旅遊應用程式。"
  },
  {
    "word": "poor",
    "pos": "adj.",
    "cn_def": "貧窮的",
    "en_def": "having very little money",
    "sentence": "A: Why is the company donating laptops and paying for internet service at the elementary school in the village this year? B: Many families in that area are very {{BLANK}} and can't buy computers for their children, so the company wants to help the students learn online like other kids.",
    "cn": "A：公司今年為什麼要捐筆電給那個村莊的小學，還幫他們付網路費？ B：那個地區許多家庭都非常【貧窮】，買不起電腦給孩子，所以公司想幫助學生像其他孩子一樣上網學習。"
  }
];

const MCQS = [
  {
    "q": "The small market near the station does not accept cards. Customers must pay in _____ or use a mobile payment app.",
    "options": [
      "cash",
      "debt",
      "loan",
      "wealth"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Before the trip to Seoul, Ann Lin exchanged dollars for the local _____. The bank charged her a small fee for the service.",
    "options": [
      "income",
      "profit",
      "currency",
      "budget"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Applicants must show proof of a stable _____ before signing the lease. Pay slips from the last three months are usually accepted.",
    "options": [
      "expense",
      "income",
      "purchase",
      "loss"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The new sales manager will receive an annual _____ of eighty thousand dollars. She will also get a yearly bonus based on results.",
    "options": [
      "deposit",
      "debt",
      "cost",
      "salary"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The city has raised the minimum _____ for all workers this year. Restaurant owners say they will need to increase menu prices.",
    "options": [
      "wage",
      "fortune",
      "wealth",
      "savings"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The bookstore finally made a _____ in its third year of business. The owners plan to use the extra money to open a café.",
    "options": [
      "budget",
      "currency",
      "profit",
      "debit"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The airline reported a huge _____ after fuel prices rose sharply. It plans to cut several routes to reduce spending next year.",
    "options": [
      "wage",
      "loss",
      "salary",
      "savings"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Hotel bills and taxi fares count as a business _____. Please submit all receipts to the accounting office by Friday.",
    "options": [
      "fortune",
      "wealth",
      "interest",
      "expense"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The design team must finish the project within its _____. The client will not pay any extra money for additional changes.",
    "options": [
      "budget",
      "currency",
      "wage",
      "profit"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Tom used most of his _____ to start a small coffee shop. He had been putting money in the bank for ten years.",
    "options": [
      "expenses",
      "losses",
      "savings",
      "prices"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Guests must pay a fifty-dollar _____ when they rent a bicycle. The money is returned when the bike comes back undamaged.",
    "options": [
      "salary",
      "deposit",
      "wage",
      "wealth"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Customers can _____ up to one thousand dollars a day from this machine. Larger amounts require a visit to the bank counter.",
    "options": [
      "afford",
      "owe",
      "earn",
      "withdraw"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "You can _____ money between your accounts using the bank's mobile app. The service is free and takes only a few seconds.",
    "options": [
      "transfer",
      "afford",
      "cost",
      "withdraw"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Buying new software was a smart _____ for the small firm. It saved the staff many hours of work every week.",
    "options": [
      "debt",
      "loss",
      "investment",
      "wage"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The bank charges five percent _____ on this type of loan. Borrowers must also pay a small fee when they sign the contract.",
    "options": [
      "income",
      "interest",
      "profit",
      "savings"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The company took out a bank _____ to build a new warehouse. It will repay the money over the next fifteen years.",
    "options": [
      "income",
      "wage",
      "salary",
      "loan"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "After losing several big clients, the firm fell deeply into _____. It had to sell one of its buildings to pay back the banks.",
    "options": [
      "debt",
      "wealth",
      "profit",
      "budget"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Most hotels ask guests for a _____ card number when they make a reservation. This protects the hotel if guests do not arrive.",
    "options": [
      "wage",
      "fortune",
      "credit",
      "wealth"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Every _____ over fifty dollars comes with free shipping this month. The offer is available only to members of our online store.",
    "options": [
      "wage",
      "purchase",
      "debt",
      "salary"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Many families _____ more money on gifts and food in December. Stores usually hire extra staff to handle the busy holiday season.",
    "options": [
      "withdraw",
      "transfer",
      "afford",
      "spend"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Ben brings his lunch to work every day to _____ money. He hopes to buy a new car by the end of next year.",
    "options": [
      "save",
      "cost",
      "afford",
      "owe"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The young couple cannot _____ to buy a house in the city center. They are looking for an apartment in the suburbs instead.",
    "options": [
      "spend",
      "withdraw",
      "afford",
      "deposit"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The total _____ of the repairs will be about three thousand dollars. The landlord has agreed to pay for half of it.",
    "options": [
      "wealth",
      "cost",
      "income",
      "wage"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The _____ of this jacket has been reduced by thirty percent. The sale ends this Sunday, so customers should hurry.",
    "options": [
      "wage",
      "salary",
      "income",
      "price"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The flights were surprisingly _____ because we booked them six months early. We used the money we saved for nicer hotels.",
    "options": [
      "cheap",
      "economic",
      "generous",
      "thrifty"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The restaurant on the top floor is very _____. A dinner for two can easily cost more than three hundred dollars.",
    "options": [
      "thrifty",
      "poor",
      "expensive",
      "financial"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The company hired an accountant to prepare its yearly _____ report. Investors will read it carefully before the annual meeting.",
    "options": [
      "generous",
      "financial",
      "thrifty",
      "cheap"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Rising fuel prices have slowed _____ growth across the region. Many small businesses are delaying plans to hire new staff.",
    "options": [
      "generous",
      "thrifty",
      "cheap",
      "economic"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The founder made a _____ donation of one million dollars to the local hospital. The money will be used to buy new equipment.",
    "options": [
      "generous",
      "thrifty",
      "cheap",
      "poor"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "My grandfather was a very _____ man who never wasted anything. He repaired old furniture instead of buying new pieces.",
    "options": [
      "financial",
      "expensive",
      "thrifty",
      "economic"
    ],
    "answer": 2,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "cash": {
    "pos": "n.",
    "en_def": "money in coins and paper notes",
    "cn_def": "現金"
  },
  "currency": {
    "pos": "n.",
    "en_def": "the type of money a country uses",
    "cn_def": "貨幣"
  },
  "income": {
    "pos": "n.",
    "en_def": "money that you get from work or other sources",
    "cn_def": "收入"
  },
  "salary": {
    "pos": "n.",
    "en_def": "the fixed money an employee is paid every month or year",
    "cn_def": "薪水；薪資"
  },
  "wage": {
    "pos": "n.",
    "en_def": "money paid for work, usually by the hour or week",
    "cn_def": "工資"
  },
  "profit": {
    "pos": "n.",
    "en_def": "money you earn after paying all costs",
    "cn_def": "利潤；獲利"
  },
  "loss": {
    "pos": "n.",
    "en_def": "money lost when costs are higher than income",
    "cn_def": "虧損；損失"
  },
  "expense": {
    "pos": "n.",
    "en_def": "money spent on something",
    "cn_def": "費用；開銷"
  },
  "budget": {
    "pos": "n.",
    "en_def": "a plan of how much money can be spent",
    "cn_def": "預算"
  },
  "savings": {
    "pos": "n.",
    "en_def": "money that you have kept and not spent",
    "cn_def": "儲蓄；積蓄"
  },
  "deposit": {
    "pos": "n.",
    "en_def": "money paid first to hold something, often returned later",
    "cn_def": "押金；訂金"
  },
  "withdraw": {
    "pos": "v.",
    "en_def": "to take money out of a bank account",
    "cn_def": "提領；提款"
  },
  "transfer": {
    "pos": "v.",
    "en_def": "to move money from one account to another",
    "cn_def": "轉帳；轉移"
  },
  "investment": {
    "pos": "n.",
    "en_def": "money put into something to get more money later",
    "cn_def": "投資"
  },
  "interest": {
    "pos": "n.",
    "en_def": "extra money paid for borrowing or saving money",
    "cn_def": "利息"
  },
  "loan": {
    "pos": "n.",
    "en_def": "money that you borrow and must pay back",
    "cn_def": "貸款；借款"
  },
  "debt": {
    "pos": "n.",
    "en_def": "money that you owe to someone",
    "cn_def": "債務；欠款"
  },
  "credit": {
    "pos": "n.",
    "en_def": "a way of buying something now and paying for it later",
    "cn_def": "信用；賒帳"
  },
  "debit": {
    "pos": "n.",
    "en_def": "money taken directly out of a bank account",
    "cn_def": "簽帳；借記"
  },
  "purchase": {
    "pos": "n.",
    "en_def": "the act of buying something",
    "cn_def": "購買；購物"
  },
  "spend": {
    "pos": "v.",
    "en_def": "to use money to pay for things",
    "cn_def": "花費；花（錢）"
  },
  "save": {
    "pos": "v.",
    "en_def": "to keep money so you can use it later",
    "cn_def": "存（錢）；節省"
  },
  "afford": {
    "pos": "v.",
    "en_def": "to have enough money to pay for something",
    "cn_def": "負擔得起；買得起"
  },
  "cost": {
    "pos": "n.",
    "en_def": "the amount of money needed to buy or make something",
    "cn_def": "成本；費用"
  },
  "price": {
    "pos": "n.",
    "en_def": "the amount of money you must pay to buy something",
    "cn_def": "價格"
  },
  "cheap": {
    "pos": "adj.",
    "en_def": "costing little money",
    "cn_def": "便宜的"
  },
  "expensive": {
    "pos": "adj.",
    "en_def": "costing a lot of money",
    "cn_def": "昂貴的"
  },
  "wealth": {
    "pos": "n.",
    "en_def": "a large amount of money or property",
    "cn_def": "財富"
  },
  "fortune": {
    "pos": "n.",
    "en_def": "a very large amount of money",
    "cn_def": "一大筆錢；財富"
  },
  "financial": {
    "pos": "adj.",
    "en_def": "connected with money",
    "cn_def": "財務的；金融的"
  },
  "economic": {
    "pos": "adj.",
    "en_def": "connected with the economy of a country or area",
    "cn_def": "經濟的"
  },
  "generous": {
    "pos": "adj.",
    "en_def": "happy to give money or help to others",
    "cn_def": "慷慨的；大方的"
  },
  "thrifty": {
    "pos": "adj.",
    "en_def": "careful not to waste money",
    "cn_def": "節儉的"
  },
  "rich": {
    "pos": "adj.",
    "en_def": "having a lot of money",
    "cn_def": "富有的"
  },
  "poor": {
    "pos": "adj.",
    "en_def": "having very little money",
    "cn_def": "貧窮的"
  }
};

const EXTRA_GLOSSES = {};
