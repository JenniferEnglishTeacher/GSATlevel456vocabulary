// Topic 302 Quiz Data: Price 價格
// Source word list: https://www.examword.com/group-topic/price — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T302 - Price 價格",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "cost",
    "pos": "n.",
    "cn_def": "成本；費用",
    "en_def": "the amount of money needed to buy or do something",
    "sentence": "A: Why did the finance team ask every department to cut back on business travel for the rest of this year? B: The {{BLANK}} of flights and hotels has gone up sharply since spring, so the manager wants us to hold more online meetings and save money for new equipment.",
    "cn": "A：為什麼財務部要求每個部門在今年剩下的時間裡減少出差？ B：自從春天以來，機票和飯店的【費用】大幅上漲，所以經理希望我們多開線上會議，把錢省下來買新設備。"
  },
  {
    "word": "value",
    "pos": "n.",
    "cn_def": "價值",
    "en_def": "how much something is worth or how useful it is",
    "sentence": "A: Do you think we should buy the more expensive printer for the office, or is the cheaper model good enough for us? B: The expensive one gives better {{BLANK}} for money, because it uses less ink and rarely breaks down, so in the long run it will actually save the company money.",
    "cn": "A：你覺得我們辦公室應該買比較貴的印表機，還是便宜的型號就夠用了？ B：貴的那台比較物有所【值】，因為它比較省墨水，也很少故障，所以長遠來看其實能幫公司省錢。"
  },
  {
    "word": "expensive",
    "pos": "adj.",
    "cn_def": "昂貴的",
    "en_def": "costing a lot of money",
    "sentence": "A: Why didn't the marketing team hold this year's year-end party at the famous hotel downtown like they did last time? B: The hotel has become too {{BLANK}} for our small budget, so we booked a cozy restaurant near the office instead, and everyone can still enjoy a nice dinner together.",
    "cn": "A：為什麼行銷團隊今年的尾牙沒有像上次一樣辦在市中心那家有名的飯店？ B：那家飯店對我們有限的預算來說變得太【昂貴】了，所以我們改訂了公司附近一家溫馨的餐廳，大家還是可以一起享用一頓美好的晚餐。"
  },
  {
    "word": "cheap",
    "pos": "adj.",
    "cn_def": "便宜的",
    "en_def": "costing little money",
    "sentence": "A: Where did you find such nice folding chairs for the outdoor training event next weekend, and did they cost a lot? B: I found them at a warehouse store near the airport, and they were surprisingly {{BLANK}}, so I bought twenty and still had money left over for drinks and snacks.",
    "cn": "A：你在哪裡找到這麼好的折疊椅給下週末的戶外訓練活動用？很貴嗎？ B：我在機場附近的一家倉儲賣場找到的，而且出奇地【便宜】，所以我買了二十張，還剩下錢可以買飲料和點心。"
  },
  {
    "word": "affordable",
    "pos": "adj.",
    "cn_def": "負擔得起的；平價的",
    "en_def": "not too expensive; most people can pay for it",
    "sentence": "A: Have you found a new apartment close to the office yet, now that your landlord is planning to sell the building? B: Not yet, because most places near the train station are far too pricey, but my colleague told me about an {{BLANK}} one in a quiet neighborhood just two stops away.",
    "cn": "A：既然你的房東打算把大樓賣掉，你找到離公司近的新公寓了嗎？ B：還沒，因為火車站附近的房子大多太貴了，不過我同事跟我說，只要再過兩站的安靜社區裡有一間【負擔得起的】公寓。"
  },
  {
    "word": "reasonable",
    "pos": "adj.",
    "cn_def": "合理的；公道的",
    "en_def": "fair and not too high",
    "sentence": "A: How much did the repair shop charge you for fixing the company van after the small accident in the parking lot last week? B: The price was quite {{BLANK}}, only about half of what the other garage quoted, and they even finished the work a day earlier than they had promised.",
    "cn": "A：上週公司的廂型車在停車場發生小擦撞後，修車廠修理收了你多少錢？ B：價格相當【合理】，大約只有另一家修車廠報價的一半，而且他們甚至比原本承諾的提早一天完工。"
  },
  {
    "word": "discount",
    "pos": "n.",
    "cn_def": "折扣",
    "en_def": "an amount taken off the usual price",
    "sentence": "A: Is there any way we can lower the price of these office supplies, since we order from your company every single month? B: Yes, regular customers who place orders of more than five hundred dollars receive a ten percent {{BLANK}}, and we also deliver for free within the city.",
    "cn": "A：既然我們每個月都向貴公司訂購，這些辦公用品的價格有沒有辦法再便宜一點？ B：有的，訂購金額超過五百元的老客戶可以享有九折【折扣】，而且我們在市區內也免費送貨。"
  },
  {
    "word": "sale",
    "pos": "n.",
    "cn_def": "特價；拍賣",
    "en_def": "a time when a store sells things at lower prices",
    "sentence": "A: Why is the electronics store at the mall so crowded today, even though it is only Tuesday morning? B: They are having a big holiday {{BLANK}} this week, and many laptops and tablets are thirty percent cheaper, so lots of office workers came during their break to buy new devices.",
    "cn": "A：為什麼購物中心裡的電器行今天這麼擠，明明才星期二早上？ B：他們這週舉辦盛大的節日【特賣】，很多筆電和平板都便宜了三成，所以很多上班族趁休息時間來買新設備。"
  },
  {
    "word": "bargain",
    "pos": "n.",
    "cn_def": "便宜貨；划算的東西",
    "en_def": "something bought for less than its usual price",
    "sentence": "A: Did you really pay only two hundred dollars for that leather office chair you brought to work this morning? B: Yes, it was a real {{BLANK}}, because the furniture shop was closing down and selling everything at half price, so I picked up a matching desk lamp too.",
    "cn": "A：你今天早上帶來公司的那張皮革辦公椅真的只花了兩百元嗎？ B：對啊，真的很【划算】，因為那家家具店要結束營業，所有東西都半價出售，所以我還順便買了一盞搭配的檯燈。"
  },
  {
    "word": "deal",
    "pos": "n.",
    "cn_def": "交易；協議",
    "en_def": "a business agreement, often with a good price",
    "sentence": "A: Why does the sales director look so happy today, and why did she buy coffee for the whole team? B: She finally signed a big {{BLANK}} with a hotel chain in Singapore after three months of meetings, so our company will supply all their towels and bedsheets next year.",
    "cn": "A：為什麼業務總監今天看起來這麼開心，還請整個團隊喝咖啡？ B：經過三個月的會議，她終於和新加坡一家連鎖飯店簽下一筆大【交易】，所以我們公司明年會供應他們所有的毛巾和床單。"
  },
  {
    "word": "offer",
    "pos": "v.",
    "cn_def": "提供；給予",
    "en_def": "to say you will give or sell something to someone",
    "sentence": "A: How did the small bakery across the street manage to attract so many new customers in just one month? B: They decided to {{BLANK}} free coffee to anyone who buys two pastries before nine o'clock, so office workers on their way to work started stopping by every morning.",
    "cn": "A：對街那家小麵包店是怎麼在短短一個月內吸引這麼多新客人的？ B：他們決定九點前買兩個糕點的人就【提供】免費咖啡，所以上班途中的上班族每天早上都開始順道進去。"
  },
  {
    "word": "charge",
    "pos": "v.",
    "cn_def": "收費；索價",
    "en_def": "to ask someone to pay a certain amount of money",
    "sentence": "A: Will the hotel ask us to pay extra if our team uses the meeting room for an additional two hours tomorrow afternoon? B: According to the receptionist, they {{BLANK}} fifty dollars per hour after the first four hours, so I think we should finish the workshop on time if possible.",
    "cn": "A：如果我們團隊明天下午多用兩個小時的會議室，飯店會要我們額外付錢嗎？ B：根據櫃檯人員的說法，前四個小時之後每小時【收費】五十元，所以我覺得我們盡可能準時結束研習比較好。"
  },
  {
    "word": "fee",
    "pos": "n.",
    "cn_def": "費用；服務費",
    "en_def": "money paid for a service",
    "sentence": "A: How much does it cost to join the professional training course that the human resources department recommended to us? B: The registration {{BLANK}} is three hundred dollars, but the company will pay for it if you finish all the classes and pass the final test in December.",
    "cn": "A：參加人資部門推薦給我們的那個專業培訓課程要花多少錢？ B：報名【費】是三百元，不過如果你上完所有課程並通過十二月的期末測驗，公司會幫你出這筆錢。"
  },
  {
    "word": "fare",
    "pos": "n.",
    "cn_def": "車資；票價",
    "en_def": "money paid to travel on a bus, train, plane, or taxi",
    "sentence": "A: Do you know how much it will cost to take the high-speed train from Taipei to Kaohsiung for the client meeting on Friday? B: The one-way {{BLANK}} is about fifteen hundred dollars, but if we book the tickets online three days early, we can save a little money.",
    "cn": "A：你知道星期五去開客戶會議，從台北搭高鐵到高雄要花多少錢嗎？ B：單程【票價】大約一千五百元，不過如果我們提前三天上網訂票，就可以省一點錢。"
  },
  {
    "word": "rent",
    "pos": "n.",
    "cn_def": "租金",
    "en_def": "money paid regularly to use a house, room, or office",
    "sentence": "A: Why is our company moving out of this downtown building when the location is so convenient for customers? B: The landlord has raised the monthly {{BLANK}} by twenty percent, so the manager found a bigger office in a new business park that costs much less.",
    "cn": "A：這棟市中心大樓的位置對客戶來說這麼方便，為什麼我們公司要搬走？ B：房東把每個月的【租金】調漲了兩成，所以經理在一個新的商業園區找到一間更大、而且便宜很多的辦公室。"
  },
  {
    "word": "rate",
    "pos": "n.",
    "cn_def": "費率；價格",
    "en_def": "a fixed price paid for each unit of something, such as an hour",
    "sentence": "A: How much does the translation agency usually ask for when they translate our product manuals into Japanese? B: Their standard {{BLANK}} is ten cents per word, but they give us a lower price because we have worked with them for many years and always pay quickly.",
    "cn": "A：翻譯社幫我們把產品手冊翻成日文時通常收多少錢？ B：他們的標準【費率】是每個字十分錢，不過因為我們跟他們合作很多年，而且總是很快付款，所以他們給我們比較低的價格。"
  },
  {
    "word": "tax",
    "pos": "n.",
    "cn_def": "稅；稅金",
    "en_def": "money that people and businesses must pay to the government",
    "sentence": "A: Why is the final price on this receipt higher than the price shown on the shelf in the store? B: The shelf price does not include the five percent sales {{BLANK}}, which the store adds at the cash register, so customers often feel a little surprised when they pay.",
    "cn": "A：為什麼這張收據上的最終價格比店裡貨架上標示的價格高？ B：貨架上的價格不包含百分之五的營業【稅】，店家會在收銀台結帳時加上去，所以顧客付錢時常常會有點驚訝。"
  },
  {
    "word": "budget",
    "pos": "n.",
    "cn_def": "預算",
    "en_def": "the amount of money that is available to spend",
    "sentence": "A: Can we hire a famous designer to create a new logo and website for our company's tenth anniversary? B: I'm afraid our marketing {{BLANK}} for this year is very limited, so we should ask a local design student instead and spend the rest of the money on advertising.",
    "cn": "A：我們可以請一位知名設計師為公司十週年設計新的標誌和網站嗎？ B：恐怕我們今年的行銷【預算】非常有限，所以我們應該改找當地的設計系學生，把剩下的錢花在廣告上。"
  },
  {
    "word": "profit",
    "pos": "n.",
    "cn_def": "利潤；獲利",
    "en_def": "money earned after paying all costs",
    "sentence": "A: Why did the company give every employee a bonus this year, even though the economy has been so slow? B: Our online store made a large {{BLANK}} during the summer, because our new water bottles became very popular, so the boss wanted to thank everyone for their hard work.",
    "cn": "A：為什麼景氣這麼差，公司今年還發給每位員工獎金？ B：我們的網路商店在夏天賺了一大筆【利潤】，因為我們的新水壺非常受歡迎，所以老闆想感謝大家的辛勞。"
  },
  {
    "word": "loss",
    "pos": "n.",
    "cn_def": "虧損；損失",
    "en_def": "money lost when costs are higher than income",
    "sentence": "A: Why did the restaurant chain decide to close its branch near the train station after only one year? B: That branch suffered a heavy {{BLANK}} every month because the rent was so high and fewer customers came after the new shopping mall opened across the road.",
    "cn": "A：為什麼那家連鎖餐廳才開一年就決定關掉火車站附近的分店？ B：那家分店每個月都嚴重【虧損】，因為租金太高，而且對面新的購物中心開幕後，來的客人變少了。"
  },
  {
    "word": "increase",
    "pos": "v.",
    "cn_def": "增加；提高",
    "en_def": "to become or make larger in amount or number",
    "sentence": "A: Are the coffee shops in this area going to change their prices because of the rising cost of milk and coffee beans? B: Yes, most of them plan to {{BLANK}} the price of a latte by about ten dollars next month, so many office workers may start bringing coffee from home.",
    "cn": "A：這一帶的咖啡店會因為牛奶和咖啡豆成本上漲而調整價格嗎？ B：會，大部分店家打算下個月把拿鐵的價格【提高】大約十元，所以很多上班族可能會開始從家裡帶咖啡。"
  },
  {
    "word": "decrease",
    "pos": "v.",
    "cn_def": "減少；降低",
    "en_def": "to become or make smaller in amount or number",
    "sentence": "A: Why have fewer tourists been visiting the hotel this autumn, even though the weather has been so pleasant? B: Hotel bookings usually {{BLANK}} after the summer holidays end, so the manager is planning special weekend packages to attract families and business travelers again.",
    "cn": "A：為什麼今年秋天天氣這麼宜人，來飯店的遊客卻變少了？ B：暑假結束後飯店的訂房通常會【減少】，所以經理正在規劃特別的週末套裝行程，再次吸引家庭和商務旅客。"
  },
  {
    "word": "raise",
    "pos": "v.",
    "cn_def": "提高；調漲",
    "en_def": "to make something higher, such as a price or salary",
    "sentence": "A: Why are so many customers complaining at the front desk of the gym this morning? B: The gym decided to {{BLANK}} its monthly membership price by twenty percent without giving members any warning, so many people are upset and some want to cancel.",
    "cn": "A：為什麼今天早上有這麼多顧客在健身房櫃檯抱怨？ B：健身房事先沒有通知會員，就決定把月費【調漲】兩成，所以很多人很不高興，有些人還想退會。"
  },
  {
    "word": "reduce",
    "pos": "v.",
    "cn_def": "減少；降低",
    "en_def": "to make something smaller or less",
    "sentence": "A: What can our office do to lower its electricity bill, which was much higher than usual last summer? B: We can {{BLANK}} our energy use by turning off computers at night and setting the air conditioner to twenty-six degrees, and the building manager says that will save a lot.",
    "cn": "A：去年夏天辦公室的電費比平常高很多，我們可以怎麼做來降低電費？ B：我們可以晚上關掉電腦、把冷氣設定在二十六度來【減少】用電，大樓管理員說這樣可以省很多。"
  },
  {
    "word": "worth",
    "pos": "adj.",
    "cn_def": "值得的；值……錢的",
    "en_def": "having a value of a certain amount; good enough to pay for",
    "sentence": "A: Should we spend extra money on the premium software package, or is the basic version enough for our small team? B: I think the premium version is {{BLANK}} the extra money, because it has better security and customer support, which we really need when we work with clients overseas.",
    "cn": "A：我們應該多花錢買進階版軟體，還是基本版對我們這個小團隊就夠了？ B：我覺得進階版【值得】多花這些錢，因為它的資安和客服都比較好，我們和海外客戶合作時真的很需要。"
  },
  {
    "word": "overpriced",
    "pos": "adj.",
    "cn_def": "定價過高的；太貴的",
    "en_def": "costing more than it should",
    "sentence": "A: Why didn't you buy lunch at the new café in the lobby of our building today? B: Everything on their menu is {{BLANK}}, and a simple sandwich costs almost three hundred dollars, so I walked to the noodle shop around the corner where the food is cheaper and tastier.",
    "cn": "A：你今天為什麼沒有在我們大樓大廳那家新咖啡館買午餐？ B：他們菜單上的東西全都【定價過高】，一個簡單的三明治就要將近三百元，所以我走到轉角那家麵店，那裡的東西比較便宜也比較好吃。"
  },
  {
    "word": "underpriced",
    "pos": "adj.",
    "cn_def": "定價過低的",
    "en_def": "sold for less than it is really worth",
    "sentence": "A: Why did all the tickets for the business conference sell out in less than an hour this year? B: Many people thought the tickets were {{BLANK}}, because they included lunch, a printed guidebook, and talks from famous speakers, so everyone rushed to buy them on the first day.",
    "cn": "A：為什麼今年商務研討會的票不到一個小時就賣光了？ B：很多人覺得票價【定得太低】，因為票裡包含午餐、一本印刷手冊和知名講者的演講，所以大家第一天就搶著買。"
  },
  {
    "word": "competitive",
    "pos": "adj.",
    "cn_def": "有競爭力的",
    "en_def": "as good as or cheaper than others in the market",
    "sentence": "A: How did your small printing company win the contract with the city government when so many bigger companies applied? B: We offered very {{BLANK}} prices and promised to deliver all the posters within three days, so the officials chose us over the larger and more famous companies.",
    "cn": "A：這麼多大公司去投標，你們這家小印刷公司是怎麼拿到市政府合約的？ B：我們提出非常【有競爭力的】價格，並承諾三天內交出所有海報，所以官員選擇了我們，而不是那些規模更大、更有名的公司。"
  },
  {
    "word": "estimate",
    "pos": "n.",
    "cn_def": "估價；估計",
    "en_def": "a guess of how much something will cost",
    "sentence": "A: Before we decide to repaint the whole office, can you find out how much the work will cost us? B: I already called two painting companies this morning, and they will each send me a written {{BLANK}} by Friday, so we can compare the prices and choose the better one.",
    "cn": "A：在我們決定重新粉刷整間辦公室之前，你可以查一下這項工程要花多少錢嗎？ B：我今天早上已經打電話給兩家油漆公司，他們都會在星期五前寄給我書面【估價】，這樣我們就可以比較價格，選比較好的那一家。"
  },
  {
    "word": "quotation",
    "pos": "n.",
    "cn_def": "報價；報價單",
    "en_def": "a written statement of how much goods or a job will cost",
    "sentence": "A: Has the furniture supplier sent us the price list for the new desks and chairs for the second floor yet? B: Yes, their {{BLANK}} arrived by email this morning, and it includes free delivery and installation, so I will show it to the manager after lunch today.",
    "cn": "A：家具供應商把二樓新桌椅的價目表寄給我們了嗎？ B：寄了，他們的【報價單】今天早上用電子郵件寄來，裡面包含免費運送和安裝，所以我今天午餐後會拿給經理看。"
  },
  {
    "word": "refund",
    "pos": "n.",
    "cn_def": "退款",
    "en_def": "money paid back to a customer",
    "sentence": "A: What happened when you returned the broken coffee machine to the electronics store yesterday afternoon? B: The manager apologized and gave me a full {{BLANK}} right away, and she also offered me a coupon for my next purchase because I had waited so long at the counter.",
    "cn": "A：你昨天下午把壞掉的咖啡機拿回電器行退貨，結果怎麼樣？ B：店長向我道歉，馬上給了我全額【退款】，而且因為我在櫃檯等了很久，她還給我一張下次購物用的優惠券。"
  },
  {
    "word": "deposit",
    "pos": "n.",
    "cn_def": "訂金；押金",
    "en_def": "money paid first to hold or rent something",
    "sentence": "A: Do we need to pay anything now to reserve the banquet room for our company's year-end party in December? B: Yes, the restaurant asks for a {{BLANK}} of five thousand dollars to hold the date, and we can pay the rest of the bill on the night of the party.",
    "cn": "A：我們現在需要先付錢，才能預訂公司十二月尾牙的宴會廳嗎？ B：需要，餐廳要求先付五千元【訂金】保留日期，剩下的費用可以在派對當晚再付。"
  },
  {
    "word": "installment",
    "pos": "n.",
    "cn_def": "分期付款（的一期）",
    "en_def": "one of several payments made over a period of time",
    "sentence": "A: How are you going to pay for the new laptop, since it costs more than a whole month of your salary? B: The store lets me pay the first {{BLANK}} of three thousand dollars now and the rest over the next eleven months without any extra interest, which makes it much easier for me.",
    "cn": "A：這台新筆電比你一整個月的薪水還貴，你打算怎麼付錢？ B：店家讓我現在先付第一期三千元的【分期款】，剩下的在接下來十一個月付清，而且不用額外利息，這樣對我來說輕鬆多了。"
  },
  {
    "word": "inflation",
    "pos": "n.",
    "cn_def": "通貨膨脹",
    "en_def": "a general rise in prices over time",
    "sentence": "A: Why do our grocery bills seem so much higher this year, even though we are buying the same things as before? B: High {{BLANK}} has pushed up the prices of food, gas, and electricity across the country, so the same amount of money buys much less than it did last year.",
    "cn": "A：為什麼我們今年買的東西跟以前一樣，菜錢卻好像高了很多？ B：嚴重的【通貨膨脹】推高了全國的食物、油價和電費，所以同樣的錢能買到的東西比去年少很多。"
  }
];

const MCQS = [
  {
    "q": "The _____ of shipping goods overseas has doubled this year. Our manager wants to find a cheaper delivery company before the next order.",
    "options": [
      "cost",
      "profit",
      "deposit",
      "refund"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "This used car has lost much of its _____ since last year. The dealer will only pay us half of what we paid originally.",
    "options": [
      "budget",
      "fee",
      "value",
      "tax"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The downtown hotel is too _____ for our team's business trip. We will stay at a smaller hotel near the train station instead.",
    "options": [
      "affordable",
      "expensive",
      "competitive",
      "reasonable"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "These plastic folders are very _____, so we bought five hundred of them. They cost only two dollars each at the warehouse store.",
    "options": [
      "overpriced",
      "expensive",
      "competitive",
      "cheap"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The city plans to build more _____ apartments for young workers. Rents will be kept low so that people can live near their offices.",
    "options": [
      "overpriced",
      "expensive",
      "affordable",
      "competitive"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The mechanic charged us a very _____ price for the repair. It was much lower than we had expected for such a big job.",
    "options": [
      "reasonable",
      "expensive",
      "overpriced",
      "underpriced"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Members of our loyalty program receive a fifteen percent _____ on all purchases. Just show your membership card at the cash register.",
    "options": [
      "tax",
      "fee",
      "loss",
      "discount"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Only fifty dollars for this wool coat is a real _____. The same coat usually sells for two hundred dollars in other stores.",
    "options": [
      "loss",
      "bargain",
      "budget",
      "deposit"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Many department stores _____ free gift wrapping during the holiday season. Customers only need to ask at the service counter after they pay.",
    "options": [
      "offer",
      "charge",
      "raise",
      "reduce"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Most airlines now _____ passengers extra for checking a second suitcase. Please read the baggage rules carefully before you go to the airport.",
    "options": [
      "offer",
      "reduce",
      "charge",
      "increase"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "There is a small booking _____ if you reserve your tickets by phone. Booking online is free and only takes a few minutes.",
    "options": [
      "profit",
      "fee",
      "value",
      "inflation"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The bus _____ from the airport to downtown is only three dollars. You can pay with cash or a transportation card when you get on.",
    "options": [
      "rent",
      "profit",
      "quotation",
      "fare"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Our office _____ is due on the first day of every month. The landlord charges a late fee if we pay after the fifth.",
    "options": [
      "fare",
      "profit",
      "rent",
      "inflation"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The hotel offers a special weekend _____ of ninety dollars per night. This price includes breakfast and free parking for all guests.",
    "options": [
      "rate",
      "loss",
      "tax",
      "refund"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The government will raise the _____ on cigarettes next year. Officials hope the higher prices will encourage more people to stop smoking.",
    "options": [
      "discount",
      "refund",
      "deposit",
      "tax"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The project is already two thousand dollars over _____. The manager has asked everyone to stop buying new supplies until next month.",
    "options": [
      "profit",
      "budget",
      "value",
      "rate"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The company made a record _____ last quarter thanks to strong online sales. Each employee will receive a bonus at the end of the year.",
    "options": [
      "profit",
      "loss",
      "tax",
      "deposit"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The factory reported a heavy _____ after a fire stopped production for two months. It will need a bank loan to continue operating.",
    "options": [
      "profit",
      "discount",
      "loss",
      "bargain"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The airline plans to _____ ticket prices next month because fuel has become more expensive. Travelers should book their summer flights soon.",
    "options": [
      "reduce",
      "increase",
      "decrease",
      "offer"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Sales of hot drinks usually _____ during the summer months. Many coffee shops add iced drinks to their menus to attract customers.",
    "options": [
      "charge",
      "offer",
      "raise",
      "decrease"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The landlord has decided to _____ the rent by ten percent. Several tenants are now looking for cheaper apartments in the area.",
    "options": [
      "reduce",
      "offer",
      "raise",
      "charge"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Installing solar panels helped the factory _____ its electricity bills by almost half. The owner plans to add more panels next year.",
    "options": [
      "reduce",
      "raise",
      "increase",
      "charge"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Many tourists complain that the souvenirs at the airport are _____. A small keychain costs three times more than in the city.",
    "options": [
      "affordable",
      "reasonable",
      "cheap",
      "overpriced"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "To win more customers, the new supermarket keeps its prices _____ with nearby stores. It also offers free delivery for large orders.",
    "options": [
      "overpriced",
      "competitive",
      "expensive",
      "underpriced"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The contractor gave us a rough _____ of the repair costs. The final bill may be slightly higher if more problems are found.",
    "options": [
      "estimate",
      "refund",
      "rent",
      "discount"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Please send us a written _____ for two hundred office chairs. We need to compare prices from three suppliers before Friday.",
    "options": [
      "inflation",
      "loss",
      "quotation",
      "profit"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "If the product arrives damaged, you can return it within thirty days. We will give you a full _____ or a replacement.",
    "options": [
      "tax",
      "refund",
      "loss",
      "rent"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Guests must pay a _____ of two hundred dollars when they check in. The money is returned when they leave if nothing is damaged.",
    "options": [
      "profit",
      "fare",
      "loss",
      "deposit"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "You can pay the first _____ of the loan next month. After that, the same amount is due on the tenth of every month.",
    "options": [
      "inflation",
      "profit",
      "installment",
      "bargain"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Rising _____ means that our salaries buy less every year. Many workers are asking for pay raises to keep up with higher prices.",
    "options": [
      "inflation",
      "discount",
      "refund",
      "bargain"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "cost": {
    "pos": "n.",
    "en_def": "the amount of money needed to buy or do something",
    "cn_def": "成本；費用"
  },
  "value": {
    "pos": "n.",
    "en_def": "how much something is worth or how useful it is",
    "cn_def": "價值"
  },
  "expensive": {
    "pos": "adj.",
    "en_def": "costing a lot of money",
    "cn_def": "昂貴的"
  },
  "cheap": {
    "pos": "adj.",
    "en_def": "costing little money",
    "cn_def": "便宜的"
  },
  "affordable": {
    "pos": "adj.",
    "en_def": "not too expensive; most people can pay for it",
    "cn_def": "負擔得起的；平價的"
  },
  "reasonable": {
    "pos": "adj.",
    "en_def": "fair and not too high",
    "cn_def": "合理的；公道的"
  },
  "discount": {
    "pos": "n.",
    "en_def": "an amount taken off the usual price",
    "cn_def": "折扣"
  },
  "sale": {
    "pos": "n.",
    "en_def": "a time when a store sells things at lower prices",
    "cn_def": "特價；拍賣"
  },
  "bargain": {
    "pos": "n.",
    "en_def": "something bought for less than its usual price",
    "cn_def": "便宜貨；划算的東西"
  },
  "deal": {
    "pos": "n.",
    "en_def": "a business agreement, often with a good price",
    "cn_def": "交易；協議"
  },
  "offer": {
    "pos": "v.",
    "en_def": "to say you will give or sell something to someone",
    "cn_def": "提供；給予"
  },
  "charge": {
    "pos": "v.",
    "en_def": "to ask someone to pay a certain amount of money",
    "cn_def": "收費；索價"
  },
  "fee": {
    "pos": "n.",
    "en_def": "money paid for a service",
    "cn_def": "費用；服務費"
  },
  "fare": {
    "pos": "n.",
    "en_def": "money paid to travel on a bus, train, plane, or taxi",
    "cn_def": "車資；票價"
  },
  "rent": {
    "pos": "n.",
    "en_def": "money paid regularly to use a house, room, or office",
    "cn_def": "租金"
  },
  "rate": {
    "pos": "n.",
    "en_def": "a fixed price paid for each unit of something, such as an hour",
    "cn_def": "費率；價格"
  },
  "tax": {
    "pos": "n.",
    "en_def": "money that people and businesses must pay to the government",
    "cn_def": "稅；稅金"
  },
  "budget": {
    "pos": "n.",
    "en_def": "the amount of money that is available to spend",
    "cn_def": "預算"
  },
  "profit": {
    "pos": "n.",
    "en_def": "money earned after paying all costs",
    "cn_def": "利潤；獲利"
  },
  "loss": {
    "pos": "n.",
    "en_def": "money lost when costs are higher than income",
    "cn_def": "虧損；損失"
  },
  "increase": {
    "pos": "v.",
    "en_def": "to become or make larger in amount or number",
    "cn_def": "增加；提高"
  },
  "decrease": {
    "pos": "v.",
    "en_def": "to become or make smaller in amount or number",
    "cn_def": "減少；降低"
  },
  "raise": {
    "pos": "v.",
    "en_def": "to make something higher, such as a price or salary",
    "cn_def": "提高；調漲"
  },
  "reduce": {
    "pos": "v.",
    "en_def": "to make something smaller or less",
    "cn_def": "減少；降低"
  },
  "worth": {
    "pos": "adj.",
    "en_def": "having a value of a certain amount; good enough to pay for",
    "cn_def": "值得的；值……錢的"
  },
  "overpriced": {
    "pos": "adj.",
    "en_def": "costing more than it should",
    "cn_def": "定價過高的；太貴的"
  },
  "underpriced": {
    "pos": "adj.",
    "en_def": "sold for less than it is really worth",
    "cn_def": "定價過低的"
  },
  "competitive": {
    "pos": "adj.",
    "en_def": "as good as or cheaper than others in the market",
    "cn_def": "有競爭力的"
  },
  "estimate": {
    "pos": "n.",
    "en_def": "a guess of how much something will cost",
    "cn_def": "估價；估計"
  },
  "quotation": {
    "pos": "n.",
    "en_def": "a written statement of how much goods or a job will cost",
    "cn_def": "報價；報價單"
  },
  "refund": {
    "pos": "n.",
    "en_def": "money paid back to a customer",
    "cn_def": "退款"
  },
  "deposit": {
    "pos": "n.",
    "en_def": "money paid first to hold or rent something",
    "cn_def": "訂金；押金"
  },
  "installment": {
    "pos": "n.",
    "en_def": "one of several payments made over a period of time",
    "cn_def": "分期付款（的一期）"
  },
  "inflation": {
    "pos": "n.",
    "en_def": "a general rise in prices over time",
    "cn_def": "通貨膨脹"
  }
};

const EXTRA_GLOSSES = {};
