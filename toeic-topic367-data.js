// Topic 367 Quiz Data: Spending 消費
// Source word list: https://www.examword.com/group-topic/spending — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T367 - Spending 消費",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "expense",
    "pos": "n.",
    "cn_def": "費用；開支",
    "en_def": "money that you spend on something, often for work",
    "sentence": "A: Do I need to keep the taxi receipts from my business trip to Osaka last week, or can I just tell the accounting department how much I spent? B: Please keep every receipt, because the company will only pay back a travel {{BLANK}} if you attach the original paper receipt to the online form before the end of the month.",
    "cn": "A：我需要保留上週去大阪出差的計程車收據嗎？還是直接告訴會計部門我花了多少錢就可以？ B：請保留每一張收據，因為公司只有在你月底前把原始紙本收據附在線上表格時，才會退還差旅【費用】。"
  },
  {
    "word": "expenditure",
    "pos": "n.",
    "cn_def": "支出；開銷",
    "en_def": "the total amount of money spent by a person, company, or government",
    "sentence": "A: Why did the board of directors look so worried during this morning's meeting about the new factory in Vietnam? B: The report showed that our total {{BLANK}} on building materials and equipment was much higher than planned, so the directors want every department to reduce costs before the next quarter begins.",
    "cn": "A：為什麼董事會在今天早上關於越南新工廠的會議上看起來那麼擔心？ B：報告顯示我們在建材和設備上的總【支出】遠高於計畫，所以董事們希望每個部門在下一季開始前降低成本。"
  },
  {
    "word": "cost",
    "pos": "n.",
    "cn_def": "成本；費用",
    "en_def": "the amount of money needed to buy, make, or do something",
    "sentence": "A: Have you decided which printing company we should use for the brochures for next month's trade show in Taipei? B: Yes, I chose the smaller company near our office, because the total {{BLANK}} of printing two thousand copies there is lower, and they promised to deliver everything three days before the event.",
    "cn": "A：你決定好下個月台北商展的宣傳冊要找哪家印刷公司了嗎？ B：決定了，我選了我們辦公室附近那家比較小的公司，因為在那裡印兩千份的總【成本】比較低，而且他們保證會在活動前三天把所有東西送到。"
  },
  {
    "word": "budget",
    "pos": "n.",
    "cn_def": "預算",
    "en_def": "a plan of how much money can be spent",
    "sentence": "A: Can we invite a famous speaker to open our annual sales conference this year, since many employees asked for someone more exciting? B: I'd love to, but our {{BLANK}} for the event is very limited this year, so we will probably ask one of our own senior managers to give the opening speech instead.",
    "cn": "A：既然很多員工希望來點更精彩的，今年我們可以邀請一位知名講者來為年度業務大會開場嗎？ B：我很想，但今年這個活動的【預算】非常有限，所以我們可能會改請一位自己公司的資深經理來致開場詞。"
  },
  {
    "word": "afford",
    "pos": "v.",
    "cn_def": "負擔得起；買得起",
    "en_def": "to have enough money to pay for something",
    "sentence": "A: Is the marketing team going to move into the bigger office on the tenth floor after the new staff members join in January? B: Not yet, because the manager says we can't {{BLANK}} the higher monthly rent until our sales improve, so we will share the current space for at least another six months.",
    "cn": "A：一月新員工加入後，行銷團隊會搬到十樓比較大的辦公室嗎？ B：還不會，因為經理說在業績改善之前，我們【負擔】不起更高的月租，所以我們至少還要再共用目前的空間六個月。"
  },
  {
    "word": "purchase",
    "pos": "v.",
    "cn_def": "購買",
    "en_def": "to buy something, especially in a formal way",
    "sentence": "A: Where should I go if I want to get new office chairs for the five people who are joining our design team next week? B: You need to fill out a request form first, and then the office manager will {{BLANK}} the chairs from our usual supplier, who normally delivers within three working days.",
    "cn": "A：如果我想為下週加入設計團隊的五個人添購新的辦公椅，我該怎麼做？ B：你需要先填一張申請表，然後辦公室經理會向我們固定的供應商【購買】椅子，他們通常三個工作天內就會送到。"
  },
  {
    "word": "buy",
    "pos": "v.",
    "cn_def": "買；購買",
    "en_def": "to get something by paying money for it",
    "sentence": "A: Are you going to the electronics store at lunch today, or are you planning to order the new laptop online this weekend? B: I'm going to the store, because I want to try the keyboard before I {{BLANK}} it, and the salesperson there said I could get a free carrying case with it.",
    "cn": "A：你今天午餐時間要去電子產品店嗎？還是打算這個週末在網路上訂新的筆電？ B：我要去店裡，因為我想在【買】之前先試試鍵盤，而且那裡的店員說我可以獲贈一個免費的電腦包。"
  },
  {
    "word": "pay",
    "pos": "v.",
    "cn_def": "付款；支付",
    "en_def": "to give money for something you buy or for work done",
    "sentence": "A: Excuse me, the waiter just brought our bill, but I don't see a machine for credit cards at our table. Where can I use my card? B: You can {{BLANK}} at the front counter near the door, and if you show your hotel room key there, they will give you a ten percent discount.",
    "cn": "A：不好意思，服務生剛送來帳單，但我們桌上沒有刷卡機。我可以在哪裡刷卡？ B：你可以在門口附近的櫃台【付款】，如果你在那裡出示飯店房卡，他們會給你九折優惠。"
  },
  {
    "word": "invest",
    "pos": "v.",
    "cn_def": "投資",
    "en_def": "to put money into something to get more money or benefits later",
    "sentence": "A: What is the company planning to do with the extra profit we made from the successful product launch in the spring? B: The directors have decided to {{BLANK}} most of it in new software and staff training, because they believe these improvements will help us grow faster over the next few years.",
    "cn": "A：公司打算怎麼運用春季產品成功上市所賺的額外利潤？ B：董事們決定把大部分的錢【投資】在新軟體和員工訓練上，因為他們相信這些改善能幫助我們在未來幾年成長得更快。"
  },
  {
    "word": "save",
    "pos": "v.",
    "cn_def": "存（錢）；節省",
    "en_def": "to keep money so that you can use it later",
    "sentence": "A: Why do you bring lunch from home every day instead of eating at the restaurants near the office with the rest of the team? B: I'm trying to {{BLANK}} money for a trip to Japan with my family next summer, and cooking at home costs much less than eating out five days a week.",
    "cn": "A：為什麼你每天都從家裡帶午餐，而不跟團隊其他人去辦公室附近的餐廳吃？ B：我正在努力【存】錢，打算明年夏天跟家人去日本旅行，而在家煮飯比一週五天都外食便宜多了。"
  },
  {
    "word": "waste",
    "pos": "v.",
    "cn_def": "浪費",
    "en_def": "to use more of something than you need, or use it badly",
    "sentence": "A: Should we print a copy of the full report for everyone who is coming to the meeting on Thursday afternoon? B: No, let's not {{BLANK}} paper on a document that is over eighty pages long, so I'll send the file by email and show the main charts on the screen during the meeting instead.",
    "cn": "A：我們要為每位參加週四下午會議的人印一份完整報告嗎？ B：不要，我們別為一份超過八十頁的文件【浪費】紙張，所以我會用電子郵件寄送檔案，並在會議中把主要圖表投影在螢幕上。"
  },
  {
    "word": "splurge",
    "pos": "v.",
    "cn_def": "揮霍；花大錢",
    "en_def": "to spend a lot of money on something special",
    "sentence": "A: You usually bring a simple lunch to work, so why are you taking the whole team to that fancy Italian restaurant downtown today? B: We finally won the big contract we worked on for months, so I decided to {{BLANK}} on a nice meal to thank everyone for their hard work and long hours.",
    "cn": "A：你平常都帶簡單的午餐上班，為什麼今天要請整個團隊去市中心那家高級義大利餐廳？ B：我們終於拿下努力了好幾個月的大合約，所以我決定【揮霍】一下請大家吃頓好的，感謝每個人的辛勤工作和長時間加班。"
  },
  {
    "word": "donate",
    "pos": "v.",
    "cn_def": "捐贈；捐款",
    "en_def": "to give money or things to help people or a group",
    "sentence": "A: What are we going to do with the old computers after the IT department installs the new ones in our office next week? B: The company plans to {{BLANK}} them to a local elementary school, because they still work well and the students need more computers for their online classes.",
    "cn": "A：資訊部下週在辦公室裝好新電腦後，舊電腦要怎麼處理？ B：公司打算把它們【捐贈】給當地一所國小，因為它們還很好用，而且學生需要更多電腦來上線上課程。"
  },
  {
    "word": "lend",
    "pos": "v.",
    "cn_def": "借出；借給",
    "en_def": "to give something to someone for a short time",
    "sentence": "A: I left my wallet at home this morning, and I need to get a train ticket to visit our client in Hsinchu this afternoon. B: Don't worry, I can {{BLANK}} you five hundred dollars right now, and you can give it back to me tomorrow when you come to the office.",
    "cn": "A：我今天早上把錢包忘在家裡了，可是今天下午要搭火車去新竹拜訪客戶，需要買車票。 B：別擔心，我現在可以【借】你五百元，你明天來辦公室時再還我就好。"
  },
  {
    "word": "borrow",
    "pos": "v.",
    "cn_def": "借入；借用",
    "en_def": "to take and use something that you will give back later",
    "sentence": "A: My laptop suddenly stopped working just before my presentation to the new clients, and the repair shop can't fix it until Friday. B: You can {{BLANK}} one from the IT department for a few days, but you'll need to sign a form and return it in good condition by next Monday.",
    "cn": "A：我的筆電在要向新客戶簡報前突然壞了，而修理店要到週五才能修好。 B：你可以向資訊部【借】一台用幾天，但你需要簽一張表格，並在下週一前完好歸還。"
  },
  {
    "word": "owe",
    "pos": "v.",
    "cn_def": "欠（錢）",
    "en_def": "to need to pay back money to someone",
    "sentence": "A: Why does the supplier keep calling our accounting office, and why do they sound so upset every time they ask for the manager? B: We still {{BLANK}} them about twenty thousand dollars for last month's delivery, and the payment is already two weeks late because of a mistake in our system.",
    "cn": "A：為什麼供應商一直打電話到我們的會計室，而且每次找經理時聽起來都那麼不高興？ B：我們還【欠】他們上個月那批貨大約兩萬元，而且因為我們系統出錯，款項已經延遲兩週了。"
  },
  {
    "word": "charge",
    "pos": "v.",
    "cn_def": "收費；索價",
    "en_def": "to ask someone to pay a certain amount of money",
    "sentence": "A: I'm thinking of staying at the hotel near the convention center during the trade fair. Is the parking there free for guests? B: No, I stayed there last year, and they {{BLANK}} about three hundred dollars a night for parking, so taking the subway from a cheaper hotel might be a better idea.",
    "cn": "A：我在考慮商展期間住會展中心附近的飯店，那裡房客停車免費嗎？ B：不是，我去年住過那裡，他們停車一晚【收費】大約三百元，所以從比較便宜的飯店搭捷運過去可能比較好。"
  },
  {
    "word": "fee",
    "pos": "n.",
    "cn_def": "費用；手續費",
    "en_def": "money you pay for a service or to join something",
    "sentence": "A: I'd like to sign up for the business English course that starts in March. How much does it cost, and what does the price include? B: The {{BLANK}} is eight thousand dollars for twelve weeks, and it includes all the books, online practice tests, and one private lesson with the teacher each month.",
    "cn": "A：我想報名三月開始的商用英文課程。要多少錢？價格包含哪些東西？ B：十二週的【費用】是八千元，包含所有書籍、線上模擬測驗，以及每個月一次和老師的一對一課程。"
  },
  {
    "word": "fare",
    "pos": "n.",
    "cn_def": "車資；票價",
    "en_def": "the money you pay to travel by bus, train, plane, or taxi",
    "sentence": "A: How much money should I bring for the bus to the airport tomorrow morning, and can I pay the driver in cash? B: The {{BLANK}} is about one hundred and forty dollars each way, but drivers prefer travel cards, so I suggest adding some money to your card at the station tonight.",
    "cn": "A：明天早上搭公車去機場要帶多少錢？可以用現金付給司機嗎？ B：單程【車資】大約一百四十元，但司機比較喜歡乘客用交通卡，所以我建議你今晚先在車站幫卡片加值。"
  },
  {
    "word": "rent",
    "pos": "n.",
    "cn_def": "租金；房租",
    "en_def": "money you pay regularly to use a house, room, or office",
    "sentence": "A: Have you found an apartment near the new office yet, or are you still traveling for over an hour every morning? B: I found a small one just ten minutes away on foot, and the {{BLANK}} is a little high, but I'll save a lot of time and money on transportation every week.",
    "cn": "A：你在新辦公室附近找到公寓了嗎？還是每天早上還要通勤一個多小時？ B：我找到一間走路只要十分鐘的小公寓，【房租】有點高，但每週可以省下很多交通的時間和金錢。"
  },
  {
    "word": "bill",
    "pos": "n.",
    "cn_def": "帳單",
    "en_def": "a paper that shows how much money you must pay",
    "sentence": "A: Why is the electricity cost for our office so much higher this month than it was in the spring? B: The air conditioners have been running all day because of the hot weather, so the {{BLANK}} went up by almost forty percent, and the manager wants us to turn them off after six.",
    "cn": "A：為什麼這個月辦公室的電費比春天時高出那麼多？ B：因為天氣炎熱，冷氣整天都開著，所以【帳單】金額漲了將近百分之四十，經理希望我們六點後把冷氣關掉。"
  },
  {
    "word": "income",
    "pos": "n.",
    "cn_def": "收入",
    "en_def": "money that you get from work or other sources",
    "sentence": "A: Why did you decide to start teaching online English classes on the weekends, even though your full-time job keeps you very busy? B: I wanted some extra {{BLANK}} to help pay for my daughter's university fees, and teaching from home on Saturday mornings fits well with my regular work schedule.",
    "cn": "A：你的全職工作已經讓你很忙了，為什麼還決定週末開線上英文課？ B：我想要一些額外【收入】來幫忙支付我女兒的大學學費，而且週六早上在家教課跟我平常的工作時間很配合。"
  },
  {
    "word": "salary",
    "pos": "n.",
    "cn_def": "薪水；薪資",
    "en_def": "the money a worker gets regularly for a job",
    "sentence": "A: Are you going to accept the job offer from the bank in Taichung, or will you stay at our company for another year? B: I'm going to accept it, because the {{BLANK}} is about twenty percent higher than what I earn now, and they also offer more vacation days and better training.",
    "cn": "A：你要接受台中那家銀行的工作邀約嗎？還是會在我們公司再待一年？ B：我要接受，因為那份【薪水】比我現在賺的高大約百分之二十，而且他們還提供更多休假天數和更好的培訓。"
  },
  {
    "word": "allowance",
    "pos": "n.",
    "cn_def": "津貼；零用錢",
    "en_def": "an amount of money given regularly for a special purpose",
    "sentence": "A: Will the company give me any extra money for meals and taxis while I'm working at the Singapore office for three weeks? B: Yes, every employee on an overseas trip receives a daily {{BLANK}} of fifty US dollars, and you can ask the accounting department to put it into your bank account before you leave.",
    "cn": "A：我在新加坡辦公室工作三週期間，公司會給我額外的餐費和計程車費嗎？ B：會，每位出國出差的員工每天都會領到五十美元的【津貼】，你可以在出發前請會計部把錢匯到你的銀行帳戶。"
  },
  {
    "word": "financial",
    "pos": "adj.",
    "cn_def": "財務的；金融的",
    "en_def": "about money and how it is managed",
    "sentence": "A: Why has the company hired an outside expert to look at our accounts before the end of this year? B: The directors want a clear picture of our {{BLANK}} situation before they decide whether to open a new branch in Kaohsiung, so the expert will check our profits, debts, and cash flow.",
    "cn": "A：為什麼公司在今年年底前請了外部專家來檢查我們的帳目？ B：董事們想在決定是否於高雄開設新分公司之前，清楚了解我們的【財務】狀況，所以專家會檢查我們的利潤、債務和現金流。"
  },
  {
    "word": "economic",
    "pos": "adj.",
    "cn_def": "經濟的",
    "en_def": "about the economy of a country or area",
    "sentence": "A: Why are so many companies in the area waiting before they hire new workers or open new stores this year? B: Many business owners are worried about slow {{BLANK}} growth in the region, so they want to see whether customers start spending more before they take any big risks.",
    "cn": "A：為什麼這一帶有那麼多公司今年在雇用新員工或開新店之前都在觀望？ B：許多企業主擔心這個地區的【經濟】成長緩慢，所以他們想先看看顧客是否開始增加消費，再決定要不要冒大風險。"
  },
  {
    "word": "costly",
    "pos": "adj.",
    "cn_def": "昂貴的；代價高的",
    "en_def": "costing a lot of money, or causing a lot of loss",
    "sentence": "A: Why did the manager decide to check every machine on the production line so carefully before the new orders arrive next month? B: Last year one machine broke down in the busiest season, and the repair was very {{BLANK}}, so she wants to find small problems early before they become big ones.",
    "cn": "A：為什麼經理決定在下個月新訂單到來前，這麼仔細地檢查生產線上的每台機器？ B：去年有一台機器在最忙的旺季故障，修理費非常【昂貴】，所以她想及早發現小問題，以免變成大問題。"
  },
  {
    "word": "expensive",
    "pos": "adj.",
    "cn_def": "昂貴的；貴的",
    "en_def": "costing a lot of money",
    "sentence": "A: Why didn't you book the hotel right next to the conference center for our team's trip to Tokyo in December? B: Because it was much too {{BLANK}} for our travel budget, so I chose a clean, comfortable hotel two subway stops away that costs about half the price per night.",
    "cn": "A：為什麼你沒有為我們團隊十二月的東京之行訂會議中心旁邊的那家飯店？ B：因為那家對我們的差旅預算來說太【貴】了，所以我選了一家距離兩站捷運、乾淨又舒適的飯店，每晚價格大約只要一半。"
  },
  {
    "word": "cheap",
    "pos": "adj.",
    "cn_def": "便宜的",
    "en_def": "costing little money",
    "sentence": "A: Did you find any good deals on flights to Bangkok for the sales meeting at the end of next month? B: Yes, I found a really {{BLANK}} ticket on a budget airline, but it doesn't include any checked bags, so we'll need to bring only small suitcases and pack very carefully.",
    "cn": "A：你有找到下個月底去曼谷開業務會議的划算機票嗎？ B：有，我在一家廉價航空找到一張非常【便宜】的機票，但不含任何托運行李，所以我們只能帶小行李箱，而且要很仔細地打包。"
  },
  {
    "word": "affordable",
    "pos": "adj.",
    "cn_def": "負擔得起的；價格實惠的",
    "en_def": "not too expensive; cheap enough for most people",
    "sentence": "A: What kind of new phone plan are you going to recommend to the staff who travel to other cities for work every week? B: I'm going to suggest one with lots of mobile data and free calls, because it is quite {{BLANK}} at only six hundred dollars a month for each employee.",
    "cn": "A：你打算向每週到其他城市出差的員工推薦哪種新的手機方案？ B：我打算建議一個有大量行動數據和免費通話的方案，因為每位員工每月只要六百元，相當【實惠】。"
  },
  {
    "word": "lavish",
    "pos": "adj.",
    "cn_def": "奢華的；豐盛的",
    "en_def": "very rich, large, or expensive",
    "sentence": "A: How was the company's anniversary party at the five-star hotel last Friday night? I'm sorry I missed it because I was sick. B: It was a {{BLANK}} event with a live band, a huge dinner buffet, and expensive gifts for every guest, so many people said it was the best party the company has ever had.",
    "cn": "A：上週五晚上在五星級飯店舉辦的公司週年派對怎麼樣？很抱歉我生病沒能參加。 B：那是一場【奢華】的活動，有現場樂團、豐盛的晚餐自助餐，每位來賓還有昂貴的禮物，所以很多人說那是公司有史以來最棒的派對。"
  },
  {
    "word": "frugal",
    "pos": "adj.",
    "cn_def": "節儉的",
    "en_def": "careful to spend only a little money",
    "sentence": "A: How did your small company survive the difficult year when sales dropped and several big customers stopped ordering from you? B: We were very {{BLANK}} during that time, so we cut unnecessary costs, used free software, and worked from home to avoid paying for a large office downtown.",
    "cn": "A：在業績下滑、好幾個大客戶停止下單的那段艱困時期，你的小公司是怎麼撐過來的？ B：那段期間我們非常【節儉】，所以我們刪減了不必要的開支、使用免費軟體，並在家工作，以免要支付市中心大辦公室的費用。"
  },
  {
    "word": "extravagant",
    "pos": "adj.",
    "cn_def": "鋪張浪費的；奢侈的",
    "en_def": "spending much more money than is necessary or sensible",
    "sentence": "A: Why did the finance manager reject the plan to hold our yearly sales meeting at a luxury resort in Bali? B: She said it would be too {{BLANK}} to fly all fifty people overseas and pay for five nights at the resort when we could hold the same meeting at a hotel in Taipei.",
    "cn": "A：為什麼財務經理否決了在峇里島豪華度假村舉辦年度業務會議的計畫？ B：她說讓五十個人全部飛出國，並支付度假村五晚的費用太【鋪張浪費】了，因為我們在台北的飯店也可以開同樣的會議。"
  }
];

const MCQS = [
  {
    "q": "Employees must submit their receipts within two weeks. Any travel _____ reported after that date will not be paid back by the company.",
    "options": [
      "expense",
      "income",
      "salary",
      "rent"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The new machines use less electricity than the old ones. As a result, the factory has lowered the _____ of producing each item.",
    "options": [
      "fare",
      "cost",
      "salary",
      "allowance"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The marketing team has already spent most of its money for the year. Any new projects must stay within the remaining _____.",
    "options": [
      "salary",
      "fare",
      "budget",
      "bill"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Small shops often cannot _____ to advertise on television. Instead, they promote their products on social media at a much lower price.",
    "options": [
      "donate",
      "owe",
      "waste",
      "afford"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Customers who _____ two or more items this weekend will receive a free gift. The offer is available in all of our stores.",
    "options": [
      "purchase",
      "borrow",
      "owe",
      "lend"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Guests can _____ for their rooms by credit card or in cash. Please visit the front desk before you check out tomorrow.",
    "options": [
      "lend",
      "pay",
      "owe",
      "save"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The company plans to _____ heavily in new technology next year. The directors believe this will improve productivity in every department.",
    "options": [
      "owe",
      "lend",
      "invest",
      "borrow"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Turning off the lights in empty meeting rooms can help us _____ energy. It is a simple habit that also protects the environment.",
    "options": [
      "waste",
      "owe",
      "lend",
      "save"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Please check the order carefully before printing all the labels. We do not want to _____ time and materials on mistakes.",
    "options": [
      "waste",
      "invest",
      "donate",
      "lend"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "After saving carefully for two years, Mr. Lin decided to _____ on a business-class ticket for his trip. He wanted to arrive feeling rested.",
    "options": [
      "owe",
      "splurge",
      "borrow",
      "lend"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Every December, our staff _____ warm clothes and blankets to a local shelter. Last year we collected more than three hundred items.",
    "options": [
      "borrow",
      "owe",
      "donate",
      "charge"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Could you _____ me your umbrella for a few minutes? I need to walk to the post office, and it is raining heavily.",
    "options": [
      "borrow",
      "owe",
      "pay",
      "lend"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "If you need a projector for your presentation, you can _____ one from the front desk. Please return it before five o'clock.",
    "options": [
      "borrow",
      "lend",
      "owe",
      "donate"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "According to our records, you still _____ us three hundred dollars for the May order. Please send the payment by Friday.",
    "options": [
      "lend",
      "owe",
      "borrow",
      "donate"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The restaurant does not _____ extra for home delivery within five kilometers. Customers who live farther away pay a small fee.",
    "options": [
      "owe",
      "save",
      "charge",
      "lend"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Members of the business club pay an annual _____ of two thousand dollars. This includes free entry to all monthly networking events.",
    "options": [
      "fare",
      "salary",
      "rent",
      "fee"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The bus _____ to the airport has gone up by twenty dollars. Passengers with student cards can still travel at a lower price.",
    "options": [
      "fare",
      "salary",
      "income",
      "allowance"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The landlord has raised the monthly _____ for our office by ten percent. We may need to move to a smaller space next year.",
    "options": [
      "fare",
      "rent",
      "salary",
      "income"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Our phone _____ was much higher than usual this month. The accountant found that we had made many overseas calls.",
    "options": [
      "fare",
      "salary",
      "bill",
      "income"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Many young workers take part-time jobs on weekends. The extra _____ helps them pay for rent and other living costs.",
    "options": [
      "expense",
      "bill",
      "fare",
      "income"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The job advertisement offers a starting _____ of forty thousand dollars a month. Applicants should have at least two years of experience.",
    "options": [
      "salary",
      "fare",
      "bill",
      "expense"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Staff who work overseas receive a housing _____ every month. This money helps them pay for an apartment near the office.",
    "options": [
      "fare",
      "allowance",
      "bill",
      "expense"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The company will publish its yearly _____ report next week. It will show the profits and losses from all of its branches.",
    "options": [
      "frugal",
      "lavish",
      "financial",
      "cheap"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The government expects strong _____ growth this year because exports have increased. Many companies are also hiring new workers.",
    "options": [
      "frugal",
      "lavish",
      "cheap",
      "economic"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The hotel near the train station is clean but rather _____. Most of our staff prefer the cheaper one across the river.",
    "options": [
      "expensive",
      "frugal",
      "affordable",
      "financial"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "These plastic chairs are very _____, but they break easily. We should buy stronger ones even if they cost more.",
    "options": [
      "lavish",
      "cheap",
      "extravagant",
      "financial"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The new apartments are close to the subway and very _____. Young families with average incomes can easily pay the monthly rent.",
    "options": [
      "extravagant",
      "lavish",
      "affordable",
      "economic"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The hotel welcomed the important visitors with a _____ dinner. There were ten courses, fine wine, and live music all evening.",
    "options": [
      "frugal",
      "cheap",
      "financial",
      "lavish"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "Ms. Chen is very _____ with company money. She always compares prices from three suppliers before she places any order.",
    "options": [
      "frugal",
      "lavish",
      "extravagant",
      "financial"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "The new CEO stopped all _____ spending, such as first-class flights and luxury hotels. Every trip must now be approved in advance.",
    "options": [
      "affordable",
      "extravagant",
      "frugal",
      "cheap"
    ],
    "answer": 1,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "expense": {
    "pos": "n.",
    "en_def": "money that you spend on something, often for work",
    "cn_def": "費用；開支"
  },
  "expenditure": {
    "pos": "n.",
    "en_def": "the total amount of money spent by a person, company, or government",
    "cn_def": "支出；開銷"
  },
  "cost": {
    "pos": "n.",
    "en_def": "the amount of money needed to buy, make, or do something",
    "cn_def": "成本；費用"
  },
  "budget": {
    "pos": "n.",
    "en_def": "a plan of how much money can be spent",
    "cn_def": "預算"
  },
  "afford": {
    "pos": "v.",
    "en_def": "to have enough money to pay for something",
    "cn_def": "負擔得起；買得起"
  },
  "purchase": {
    "pos": "v.",
    "en_def": "to buy something, especially in a formal way",
    "cn_def": "購買"
  },
  "buy": {
    "pos": "v.",
    "en_def": "to get something by paying money for it",
    "cn_def": "買；購買"
  },
  "pay": {
    "pos": "v.",
    "en_def": "to give money for something you buy or for work done",
    "cn_def": "付款；支付"
  },
  "invest": {
    "pos": "v.",
    "en_def": "to put money into something to get more money or benefits later",
    "cn_def": "投資"
  },
  "save": {
    "pos": "v.",
    "en_def": "to keep money so that you can use it later",
    "cn_def": "存（錢）；節省"
  },
  "waste": {
    "pos": "v.",
    "en_def": "to use more of something than you need, or use it badly",
    "cn_def": "浪費"
  },
  "splurge": {
    "pos": "v.",
    "en_def": "to spend a lot of money on something special",
    "cn_def": "揮霍；花大錢"
  },
  "donate": {
    "pos": "v.",
    "en_def": "to give money or things to help people or a group",
    "cn_def": "捐贈；捐款"
  },
  "lend": {
    "pos": "v.",
    "en_def": "to give something to someone for a short time",
    "cn_def": "借出；借給"
  },
  "borrow": {
    "pos": "v.",
    "en_def": "to take and use something that you will give back later",
    "cn_def": "借入；借用"
  },
  "owe": {
    "pos": "v.",
    "en_def": "to need to pay back money to someone",
    "cn_def": "欠（錢）"
  },
  "charge": {
    "pos": "v.",
    "en_def": "to ask someone to pay a certain amount of money",
    "cn_def": "收費；索價"
  },
  "fee": {
    "pos": "n.",
    "en_def": "money you pay for a service or to join something",
    "cn_def": "費用；手續費"
  },
  "fare": {
    "pos": "n.",
    "en_def": "the money you pay to travel by bus, train, plane, or taxi",
    "cn_def": "車資；票價"
  },
  "rent": {
    "pos": "n.",
    "en_def": "money you pay regularly to use a house, room, or office",
    "cn_def": "租金；房租"
  },
  "bill": {
    "pos": "n.",
    "en_def": "a paper that shows how much money you must pay",
    "cn_def": "帳單"
  },
  "income": {
    "pos": "n.",
    "en_def": "money that you get from work or other sources",
    "cn_def": "收入"
  },
  "salary": {
    "pos": "n.",
    "en_def": "the money a worker gets regularly for a job",
    "cn_def": "薪水；薪資"
  },
  "allowance": {
    "pos": "n.",
    "en_def": "an amount of money given regularly for a special purpose",
    "cn_def": "津貼；零用錢"
  },
  "financial": {
    "pos": "adj.",
    "en_def": "about money and how it is managed",
    "cn_def": "財務的；金融的"
  },
  "economic": {
    "pos": "adj.",
    "en_def": "about the economy of a country or area",
    "cn_def": "經濟的"
  },
  "costly": {
    "pos": "adj.",
    "en_def": "costing a lot of money, or causing a lot of loss",
    "cn_def": "昂貴的；代價高的"
  },
  "expensive": {
    "pos": "adj.",
    "en_def": "costing a lot of money",
    "cn_def": "昂貴的；貴的"
  },
  "cheap": {
    "pos": "adj.",
    "en_def": "costing little money",
    "cn_def": "便宜的"
  },
  "affordable": {
    "pos": "adj.",
    "en_def": "not too expensive; cheap enough for most people",
    "cn_def": "負擔得起的；價格實惠的"
  },
  "lavish": {
    "pos": "adj.",
    "en_def": "very rich, large, or expensive",
    "cn_def": "奢華的；豐盛的"
  },
  "frugal": {
    "pos": "adj.",
    "en_def": "careful to spend only a little money",
    "cn_def": "節儉的"
  },
  "extravagant": {
    "pos": "adj.",
    "en_def": "spending much more money than is necessary or sensible",
    "cn_def": "鋪張浪費的；奢侈的"
  }
};

const EXTRA_GLOSSES = {};
