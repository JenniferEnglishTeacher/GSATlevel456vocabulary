// Topic 305 Quiz Data: Prize 獎項
// Source word list: https://www.examword.com/group-topic/prize — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T305 - Prize 獎項",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "award",
    "pos": "n.",
    "cn_def": "獎；獎項",
    "en_def": "a prize given to someone for doing something well",
    "sentence": "A: Why is everyone in the marketing department so excited this morning, and why did the director order cake for the whole office? B: Our team won an {{BLANK}} for the best online advertising campaign of the year, so the director wants to thank everyone who worked late nights on the project.",
    "cn": "A：為什麼行銷部門今天早上大家都這麼興奮，而且主管為什麼替整個辦公室訂了蛋糕？ B：我們團隊因為年度最佳線上廣告活動贏得了一個【獎項】，所以主管想要感謝每一位為這個專案熬夜工作的人。"
  },
  {
    "word": "trophy",
    "pos": "n.",
    "cn_def": "獎盃",
    "en_def": "a cup or other object given to the winner of a competition",
    "sentence": "A: Where should we put the shiny gold {{BLANK}} that our sales team brought back from the regional competition last weekend? B: Let's place it in the glass cabinet next to the reception desk, so that every visitor and new employee can see it as soon as they walk into the building.",
    "cn": "A：我們業務團隊上週末從區域比賽帶回來的那座閃亮金色【獎盃】，應該放在哪裡？ B：我們把它放在接待櫃檯旁邊的玻璃櫃裡吧，這樣每位訪客和新員工一走進大樓就能看到。"
  },
  {
    "word": "medal",
    "pos": "n.",
    "cn_def": "獎牌；勳章",
    "en_def": "a flat piece of metal given as a prize or honor",
    "sentence": "A: Did you hear that Kevin from the accounting department ran in the city marathon on Sunday morning despite the heavy rain? B: Yes, and he finished in third place in his age group, so he received a bronze {{BLANK}} and proudly showed it to everyone during lunch today.",
    "cn": "A：你有聽說會計部的凱文星期天早上冒著大雨參加了城市馬拉松嗎？ B：有啊，他在他的年齡組得到第三名，所以拿到了一面銅【牌】，今天午餐時還很驕傲地拿給大家看。"
  },
  {
    "word": "reward",
    "pos": "n.",
    "cn_def": "獎勵；報酬",
    "en_def": "something given to thank someone for good work or help",
    "sentence": "A: Why did the manager give the customer service team two extra days off at the end of this month? B: It is a {{BLANK}} for their hard work during the holiday season, when they answered hundreds of calls every day and still received excellent comments from customers.",
    "cn": "A：經理為什麼在這個月底多給客服團隊兩天假？ B：這是對他們在假期旺季辛勤工作的【獎勵】，那段期間他們每天接聽數百通電話，仍然得到顧客極好的評價。"
  },
  {
    "word": "honor",
    "pos": "n.",
    "cn_def": "榮譽；榮幸",
    "en_def": "something that makes you feel proud and respected",
    "sentence": "A: How did you feel when the company president asked you to give the welcome speech at the annual dinner in front of all the guests? B: It was a great {{BLANK}} for me, although I was very nervous, because I had only joined the company two years ago and had never spoken to such a large audience.",
    "cn": "A：公司總裁請你在年度晚宴上當著所有賓客的面致歡迎詞時，你有什麼感覺？ B：雖然我很緊張，但對我來說那是莫大的【榮幸】，因為我兩年前才加入公司，從來沒有對這麼多觀眾說過話。"
  },
  {
    "word": "recognition",
    "pos": "n.",
    "cn_def": "表彰；肯定",
    "en_def": "praise or thanks given to someone for what they have done",
    "sentence": "A: Why does Linda look so happy today, even though she has been working on the difficult budget report all week? B: The general manager mentioned her name at the morning meeting and thanked her for saving the company money, and she has wanted that kind of {{BLANK}} for a long time.",
    "cn": "A：琳達整個星期都在處理那份困難的預算報告，為什麼她今天看起來這麼開心？ B：總經理在晨會上提到她的名字，並感謝她替公司省下一筆錢，她渴望這種【肯定】已經很久了。"
  },
  {
    "word": "champion",
    "pos": "n.",
    "cn_def": "冠軍",
    "en_def": "the person or team that wins a competition",
    "sentence": "A: Have you heard who won the company table tennis tournament that was held in the staff gym last Friday evening? B: Believe it or not, the new intern from the design department beat everyone, so she is now the {{BLANK}} and will represent our office in the city competition next month.",
    "cn": "A：你聽說上週五晚上在員工健身房舉行的公司桌球比賽是誰贏了嗎？ B：信不信由你，設計部的新實習生打敗了所有人，所以她現在是【冠軍】，下個月將代表我們辦公室參加全市比賽。"
  },
  {
    "word": "winner",
    "pos": "n.",
    "cn_def": "得獎者；獲勝者",
    "en_def": "a person who wins a prize, game, or competition",
    "sentence": "A: When will the hotel announce the results of the customer survey prize draw that guests entered during the summer? B: The manager plans to call the lucky {{BLANK}} on Monday morning, and that person will receive a free weekend stay with breakfast and dinner for two people.",
    "cn": "A：飯店什麼時候會公布房客在夏天參加的顧客問卷抽獎結果？ B：經理打算星期一早上打電話給那位幸運的【得獎者】，那個人將獲得兩人份含早餐和晚餐的免費週末住宿。"
  },
  {
    "word": "victory",
    "pos": "n.",
    "cn_def": "勝利",
    "en_def": "success in a game, fight, or competition",
    "sentence": "A: Why were the lawyers in our office cheering so loudly when they came back from the courthouse this afternoon? B: They won the long case against the large construction company, and it was an important {{BLANK}} because many small businesses in the city had been waiting for that decision.",
    "cn": "A：我們事務所的律師今天下午從法院回來時，為什麼歡呼得那麼大聲？ B：他們打贏了對抗那家大型建設公司的長期官司，這是一場重要的【勝利】，因為市內許多小企業一直在等待那個判決。"
  },
  {
    "word": "achievement",
    "pos": "n.",
    "cn_def": "成就",
    "en_def": "something good that you succeed in doing",
    "sentence": "A: Is it true that the factory in Tainan worked for twelve months without a single accident, even with all the new machines? B: Yes, it is a remarkable {{BLANK}} for the whole safety team, and the head office is going to give every worker there a special bonus and a thank-you letter.",
    "cn": "A：台南的工廠即使有那麼多新機器，仍然十二個月沒有發生任何一起事故，這是真的嗎？ B：是的，這是整個安全團隊非凡的【成就】，總公司將會給那裡的每位員工一筆特別獎金和一封感謝信。"
  },
  {
    "word": "accomplishment",
    "pos": "n.",
    "cn_def": "成就；完成的事",
    "en_def": "something you finish successfully, usually with hard work",
    "sentence": "A: What do you think is your biggest {{BLANK}} since you became the manager of the customer service center three years ago? B: I think the best thing was training a new team that now answers emails within one day, and our customers have noticed the difference and complained much less.",
    "cn": "A：自從你三年前成為客服中心經理以來，你認為你最大的【成就】是什麼？ B：我認為最棒的是訓練出一支新團隊，現在能在一天內回覆電子郵件，顧客也注意到這個差異，抱怨少多了。"
  },
  {
    "word": "distinction",
    "pos": "n.",
    "cn_def": "優異；殊榮",
    "en_def": "a special honor for being excellent",
    "sentence": "A: Why did the bank decide to hire Jason so quickly, even though many other people applied for the same position? B: He graduated with {{BLANK}} from a top business school, and during the interview he explained very clearly how he would help the bank attract younger customers.",
    "cn": "A：即使很多人應徵同一個職位，銀行為什麼這麼快就決定錄用傑森？ B：他以【優異成績】從一所頂尖商學院畢業，而且在面試中非常清楚地說明他會如何幫助銀行吸引年輕顧客。"
  },
  {
    "word": "scholarship",
    "pos": "n.",
    "cn_def": "獎學金",
    "en_def": "money given to a student to help pay for study",
    "sentence": "A: How is your daughter going to pay for her studies in London next year, since the school fees there are so expensive? B: Fortunately, she won a {{BLANK}} from a large technology company because of her excellent grades, so most of her costs will be covered for two years.",
    "cn": "A：既然倫敦的學費那麼貴，你女兒明年要怎麼支付在那裡的學業費用？ B：幸好她因為成績優異，獲得了一家大型科技公司的【獎學金】，所以兩年內大部分的費用都會有著落。"
  },
  {
    "word": "grant",
    "pos": "n.",
    "cn_def": "補助金；撥款",
    "en_def": "money given by a government or group for a special purpose",
    "sentence": "A: How will the small bakery on Main Street pay for its new energy-saving ovens and the repairs to its old kitchen? B: The owner received a {{BLANK}} from the city government that supports local businesses, so she does not need to borrow money from the bank this year.",
    "cn": "A：大街上的那家小麵包店要怎麼支付新的節能烤箱和舊廚房的修繕費用？ B：老闆獲得了市政府支持在地企業的【補助金】，所以她今年不需要向銀行借錢。"
  },
  {
    "word": "bonus",
    "pos": "n.",
    "cn_def": "獎金；紅利",
    "en_def": "extra money added to your pay as a reward",
    "sentence": "A: Why are so many of the salespeople planning trips abroad for the Lunar New Year holiday this year? B: The company had its best year ever, so every salesperson received a year-end {{BLANK}} equal to three months' salary, and many of them decided to spend it on travel.",
    "cn": "A：為什麼今年有這麼多業務員打算在農曆新年假期出國旅行？ B：公司今年業績創歷史新高，所以每位業務員都拿到相當於三個月薪水的年終【獎金】，很多人決定把它花在旅遊上。"
  },
  {
    "word": "incentive",
    "pos": "n.",
    "cn_def": "激勵；誘因",
    "en_def": "something that encourages people to do something",
    "sentence": "A: What can we do to get more of our customers to fill out the online survey after they buy something from our website? B: We could offer a small {{BLANK}}, such as a ten percent discount on their next order, because people are more willing to help when they get something in return.",
    "cn": "A：我們能做什麼讓更多顧客在網站上購物後填寫線上問卷？ B：我們可以提供一個小【誘因】，像是下次訂單打九折，因為人們有所回報時會比較願意幫忙。"
  },
  {
    "word": "contest",
    "pos": "n.",
    "cn_def": "比賽；競賽",
    "en_def": "a competition to find out who is the best at something",
    "sentence": "A: Are you going to enter the photo {{BLANK}} that the travel magazine is holding for pictures taken in Taiwan this summer? B: Yes, I took some beautiful pictures of the mountains in Hualien during my vacation, and the first prize is a free flight to Japan, so I really want to try.",
    "cn": "A：你要參加旅遊雜誌今年夏天為在台灣拍攝的照片所舉辦的攝影【比賽】嗎？ B：要啊，我假期時在花蓮拍了一些很美的山景照片，而且頭獎是飛日本的免費機票，所以我真的很想試試。"
  },
  {
    "word": "competition",
    "pos": "n.",
    "cn_def": "競賽；競爭",
    "en_def": "an event in which people try to win; also the act of trying to be better than others",
    "sentence": "A: Why has the design team been staying so late at the office every night for the past two weeks? B: They are preparing for an international {{BLANK}} for packaging design, and they want to finish their ideas before the deadline on Friday so the judges in Paris can review them.",
    "cn": "A：為什麼設計團隊過去兩週每天晚上都在辦公室待到那麼晚？ B：他們正在準備一場國際包裝設計【競賽】，想在星期五截止日前完成作品，讓巴黎的評審可以審查。"
  },
  {
    "word": "ceremony",
    "pos": "n.",
    "cn_def": "典禮；儀式",
    "en_def": "a formal public event for a special occasion",
    "sentence": "A: What time should the guests arrive at the hotel ballroom for the company's annual awards evening next Saturday? B: The {{BLANK}} will begin at seven o'clock, but we should ask everyone to come at half past six so they can find their seats and have a drink first.",
    "cn": "A：下週六公司年度頒獎晚會，賓客應該幾點到飯店宴會廳？ B：【典禮】將在七點開始，但我們應該請大家六點半到，這樣他們可以先找到座位並喝點東西。"
  },
  {
    "word": "nominate",
    "pos": "v.",
    "cn_def": "提名",
    "en_def": "to officially suggest someone for a prize or job",
    "sentence": "A: Who do you think we should {{BLANK}} for the employee of the year prize, since the deadline for names is tomorrow afternoon? B: I would choose Grace from the warehouse, because she trained all the new staff, fixed the shipping delays, and never complained about working on weekends.",
    "cn": "A：既然提交名單的截止時間是明天下午，你覺得我們應該【提名】誰角逐年度最佳員工獎？ B：我會選倉庫的葛蕾絲，因為她訓練了所有新員工、解決了出貨延誤的問題，而且從不抱怨週末加班。"
  },
  {
    "word": "finalist",
    "pos": "n.",
    "cn_def": "決賽入圍者",
    "en_def": "one of the last few people or teams left in a competition",
    "sentence": "A: Did our new mobile app do well in the national business technology contest that ended last week in Taipei? B: It did not win first place, but it was chosen as a {{BLANK}} out of more than two hundred entries, so many investors have already contacted us for meetings.",
    "cn": "A：我們的新手機應用程式在上週於台北結束的全國商業科技競賽中表現好嗎？ B：它沒有得到第一名，但在兩百多件參賽作品中被選為【決賽入圍者】，所以已經有很多投資人跟我們聯絡要開會。"
  },
  {
    "word": "prestigious",
    "pos": "adj.",
    "cn_def": "有聲望的；享有盛譽的",
    "en_def": "very respected and admired",
    "sentence": "A: Why is the hotel manager so excited about the letter that arrived from the international travel association this morning? B: Our hotel has been chosen for a {{BLANK}} award that only ten hotels in Asia receive each year, and it will bring us many more guests from overseas.",
    "cn": "A：飯店經理為什麼對今天早上國際旅遊協會寄來的信那麼興奮？ B：我們飯店被選中獲得一個【享有盛譽的】獎項，亞洲每年只有十家飯店能得到，它將為我們帶來更多海外旅客。"
  },
  {
    "word": "valuable",
    "pos": "adj.",
    "cn_def": "有價值的；貴重的",
    "en_def": "worth a lot of money, or very useful",
    "sentence": "A: Should we accept the trip to Okinawa as the top sales prize, or should we ask for the cash instead? B: I think the trip is more {{BLANK}}, because it includes flights, a five-star hotel, and meals for four days, which would cost much more than the money they offered.",
    "cn": "A：我們應該接受沖繩之旅當作業績頭獎，還是要改領現金？ B：我認為那趟旅行更【有價值】，因為它包含機票、五星級飯店和四天的餐點，花費會比他們提供的現金多得多。"
  },
  {
    "word": "grand",
    "pos": "adj.",
    "cn_def": "最大的；盛大的",
    "en_def": "biggest or most important; large and impressive",
    "sentence": "A: What is the {{BLANK}} prize in the shopping mall's anniversary lucky draw that everyone has been talking about this week? B: The person whose ticket is picked first will win a brand-new electric car, and the other lucky shoppers can get gift cards worth up to five thousand dollars.",
    "cn": "A：大家這週都在談論的購物中心週年慶抽獎，【頭獎】是什麼？ B：第一個被抽中的人將贏得一輛全新電動車，其他幸運的顧客則可以得到最高價值五千元的禮券。"
  },
  {
    "word": "runner-up",
    "pos": "n.",
    "cn_def": "亞軍；第二名",
    "en_def": "the person or team that finishes second",
    "sentence": "A: Did your team win the cooking competition that the hotel group organized for all its chefs last month? B: We came very close, but another hotel's chefs scored two more points, so we were the {{BLANK}} and received a silver plate and a nice dinner voucher.",
    "cn": "A：你們團隊有贏得飯店集團上個月為所有廚師舉辦的廚藝比賽嗎？ B：我們非常接近，但另一家飯店的廚師多得了兩分，所以我們是【亞軍】，獲得了一個銀盤和一張很棒的晚餐券。"
  },
  {
    "word": "merit",
    "pos": "n.",
    "cn_def": "優點；功績；表現",
    "en_def": "the quality of being good and deserving praise",
    "sentence": "A: How does the company decide which employees will receive a pay raise at the end of each year? B: Raises are given on {{BLANK}}, so the managers look carefully at each person's results, customer feedback, and teamwork instead of only counting how many years they have worked here.",
    "cn": "A：公司如何決定哪些員工在每年年底能加薪？ B：加薪是依【績效表現】決定的，所以經理會仔細檢視每個人的成果、顧客回饋和團隊合作，而不是只算他們在這裡工作了幾年。"
  },
  {
    "word": "qualify",
    "pos": "v.",
    "cn_def": "有資格；符合資格",
    "en_def": "to reach the standard needed to do or get something",
    "sentence": "A: Can part-time workers in our stores take part in the customer service award that the company started this year? B: Yes, but to {{BLANK}}, they must have worked with us for at least six months and received no serious complaints from customers during that period.",
    "cn": "A：我們店裡的兼職員工可以參加公司今年開始舉辦的顧客服務獎嗎？ B：可以，但要【符合資格】，他們必須在我們這裡工作至少六個月，而且在那段期間沒有收到顧客的嚴重投訴。"
  },
  {
    "word": "claim",
    "pos": "v.",
    "cn_def": "領取；索取",
    "en_def": "to ask for or take something that belongs to you",
    "sentence": "A: Did you see the email saying that I won a free coffee machine in the office supply store's online prize draw? B: That's great news, but make sure you {{BLANK}} it before the end of the month, because the email says unwanted prizes will be given to someone else after that date.",
    "cn": "A：你有看到那封說我在辦公用品店線上抽獎中贏得一台免費咖啡機的電子郵件嗎？ B：真是好消息，但記得在月底前去【領取】，因為郵件上說過了那天，沒人要的獎品就會送給別人。"
  },
  {
    "word": "celebrate",
    "pos": "v.",
    "cn_def": "慶祝",
    "en_def": "to do something enjoyable because of a special event or success",
    "sentence": "A: Our team finally finished the huge software project two weeks before the deadline, so what should we do this Friday? B: Let's {{BLANK}} by having dinner at the new Italian restaurant near the station, and I will ask the director whether the company can pay for the meal.",
    "cn": "A：我們團隊終於比截止日期提早兩週完成這個龐大的軟體專案，這個星期五要做什麼？ B：我們去車站附近新開的義大利餐廳吃晚餐來【慶祝】吧，我會問主管公司能不能出這頓飯錢。"
  },
  {
    "word": "presentation",
    "pos": "n.",
    "cn_def": "頒發；贈送",
    "en_def": "the act of formally giving something, such as a prize, to someone",
    "sentence": "A: Will the mayor be at the hotel in person tonight, or will someone else hand out the prizes to the winners? B: The mayor has promised to come and make the {{BLANK}} of the awards herself, so the reporters from the local newspapers are already waiting in the lobby with their cameras.",
    "cn": "A：市長今晚會親自到飯店嗎，還是會由別人把獎品頒給得獎者？ B：市長承諾會親自出席並【頒發】獎項，所以地方報社的記者已經帶著相機在大廳等候了。"
  },
  {
    "word": "laureate",
    "pos": "n.",
    "cn_def": "（重要獎項的）得主",
    "en_def": "a person who has won a very important prize",
    "sentence": "A: Who is going to give the opening speech at the international science and business conference next month in Kaohsiung? B: The organizers have invited a Nobel {{BLANK}} in economics, and they expect the hall to be full because many students and managers want to hear her ideas.",
    "cn": "A：下個月在高雄舉行的國際科學與商業會議，誰會發表開幕演講？ B：主辦單位邀請了一位諾貝爾經濟學獎【得主】，他們預計會場會坐滿，因為很多學生和經理都想聽聽她的見解。"
  },
  {
    "word": "title",
    "pos": "n.",
    "cn_def": "頭銜；冠軍",
    "en_def": "the position of being the winner of a competition; a name showing rank",
    "sentence": "A: Why are the local newspapers writing so many stories about our city's basketball team this week? B: The team won the national {{BLANK}} for the first time in thirty years, and the sponsors are planning a big parade downtown on Saturday to thank the players and fans.",
    "cn": "A：為什麼本地報紙這週寫了那麼多關於我們城市籃球隊的報導？ B：這支球隊三十年來第一次贏得全國【冠軍頭銜】，贊助商計畫星期六在市中心舉辦盛大遊行來感謝球員和球迷。"
  },
  {
    "word": "glory",
    "pos": "n.",
    "cn_def": "榮耀；光榮",
    "en_def": "great fame, praise, and honor",
    "sentence": "A: Do you think the new manager just wants to take all the {{BLANK}} for the successful product launch last month? B: No, at the meeting she clearly said that the engineers and the sales staff did most of the work, and she asked the director to thank them personally.",
    "cn": "A：你覺得新經理只是想把上個月成功推出產品的所有【榮耀】都攬在自己身上嗎？ B：不是，她在會議上清楚表示大部分工作是工程師和業務人員做的，還請主管親自感謝他們。"
  },
  {
    "word": "recognize",
    "pos": "v.",
    "cn_def": "表揚；認可",
    "en_def": "to officially show that you value someone's work",
    "sentence": "A: How does your company {{BLANK}} employees who stay late to help customers or go beyond their normal duties? B: Every month, the managers choose one person and put that person's photo on the board in the lobby, and the employee also gets a gift card for a nice restaurant.",
    "cn": "A：你們公司如何【表揚】那些留下來加班幫助顧客或超出平常職責的員工？ B：每個月，經理們會選出一個人，把那個人的照片貼在大廳的公告欄上，該員工還會得到一張高級餐廳的禮券。"
  }
];

const MCQS = [
  {
    "q": "The hotel received an _____ from the tourism bureau for its excellent service. The manager proudly hung the certificate in the lobby.",
    "options": [
      "award",
      "trophy",
      "bonus",
      "scholarship"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "After winning the regional sales contest, the team placed the silver _____ in a glass case. Visitors often stop to admire the shiny cup.",
    "options": [
      "scholarship",
      "trophy",
      "grant",
      "incentive"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The firefighter received a gold _____ from the mayor for saving three workers. He wore it on his uniform during the ceremony.",
    "options": [
      "grant",
      "merit",
      "medal",
      "bonus"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The company offered a cash _____ to anyone who could find the missing shipment. A warehouse worker located it within two days.",
    "options": [
      "honor",
      "title",
      "ceremony",
      "reward"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "It is a great _____ to welcome our guests from Japan this evening. We hope you enjoy the dinner and the performance.",
    "options": [
      "incentive",
      "honor",
      "bonus",
      "contest"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Our safety officer finally received _____ for her years of work improving the factory rules. The board thanked her publicly at the annual meeting.",
    "options": [
      "recognition",
      "scholarship",
      "finalist",
      "trophy"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Our top salesperson beat every rival in the national contest this year. She is now the reigning _____ and will defend her place next spring.",
    "options": [
      "ceremony",
      "scholarship",
      "finalist",
      "champion"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The radio station will announce the _____ of the free concert tickets at noon. Listeners who entered must keep their phones on.",
    "options": [
      "merit",
      "glory",
      "winner",
      "incentive"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The small company won a surprising _____ over its larger rival in court. Its share price rose sharply the next morning.",
    "options": [
      "victory",
      "scholarship",
      "ceremony",
      "grant"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Opening fifty stores in only two years is an impressive _____. The founder thanked her staff for their hard work and loyalty.",
    "options": [
      "incentive",
      "ceremony",
      "achievement",
      "contest"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Finishing the new bridge under budget was a major _____ for the engineering team. They had faced many delays caused by bad weather.",
    "options": [
      "incentive",
      "accomplishment",
      "ceremony",
      "scholarship"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The university awards a full _____ each year to one student with excellent grades. It covers tuition and living costs for four years.",
    "options": [
      "trophy",
      "medal",
      "victory",
      "scholarship"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The city government gave the theater a _____ to repair its old roof. The money does not have to be paid back.",
    "options": [
      "grant",
      "merit",
      "victory",
      "title"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Every employee will receive a year-end _____ equal to one month's salary. The payment will be added to their December paycheck.",
    "options": [
      "trophy",
      "bonus",
      "title",
      "finalist"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "To encourage staff to cycle to work, the company offers a monthly _____ of five hundred dollars. Many employees have already bought bicycles.",
    "options": [
      "medal",
      "title",
      "incentive",
      "ceremony"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Customers can enter the _____ by posting a photo of their meal online. The best picture will win a free dinner for two.",
    "options": [
      "merit",
      "scholarship",
      "ceremony",
      "contest"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Prices dropped quickly because of strong _____ between the two mobile phone companies. Customers were happy to pay less for new models.",
    "options": [
      "ceremony",
      "scholarship",
      "competition",
      "trophy"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The opening _____ for the new factory will take place on Friday morning. The mayor will cut the ribbon at ten o'clock.",
    "options": [
      "ceremony",
      "merit",
      "scholarship",
      "incentive"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Staff members may _____ one colleague for the customer service award by Friday. A committee will then choose the final winner.",
    "options": [
      "qualify",
      "nominate",
      "claim",
      "celebrate"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Out of three hundred entries, our design was chosen as a _____ in the national packaging contest. The winner will be announced next week.",
    "options": [
      "ceremony",
      "scholarship",
      "grant",
      "finalist"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Winning such a _____ award has made the small law firm famous across the country. Many new clients have called since the news.",
    "options": [
      "prestigious",
      "careless",
      "temporary",
      "hungry"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Please keep your _____ items, such as jewelry and laptops, in the hotel safe. The hotel is not responsible for lost property.",
    "options": [
      "prestigious",
      "grand",
      "valuable",
      "careless"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The _____ prize in the supermarket's lucky draw is a family trip to Bali. Second place receives a new television.",
    "options": [
      "nervous",
      "gradual",
      "careless",
      "grand"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Our team lost the final match by only one point. As the _____, we received silver medals and a small cash prize.",
    "options": [
      "laureate",
      "runner-up",
      "ceremony",
      "scholarship"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Promotions at this bank are based on _____ rather than years of service. Managers review each employee's results every six months.",
    "options": [
      "merit",
      "ceremony",
      "trophy",
      "finalist"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Customers who spend more than two thousand dollars _____ for free delivery. The offer ends at the end of this month.",
    "options": [
      "nominate",
      "celebrate",
      "claim",
      "qualify"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Winners must _____ their prizes at the customer service desk within thirty days. Unclaimed prizes will be donated to charity.",
    "options": [
      "nominate",
      "claim",
      "qualify",
      "celebrate"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The staff gathered in the meeting room to _____ the company's twentieth anniversary. Cake and drinks were served after the speech.",
    "options": [
      "qualify",
      "nominate",
      "celebrate",
      "claim"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The young chef won the _____ of Best New Cook at the national food festival. Her restaurant is now fully booked for months.",
    "options": [
      "merit",
      "grant",
      "incentive",
      "title"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The airline wants to _____ pilots who have flown for thirty years without an accident. Each will receive a special gold pin.",
    "options": [
      "qualify",
      "claim",
      "recognize",
      "borrow"
    ],
    "answer": 2,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "award": {
    "pos": "n.",
    "en_def": "a prize given to someone for doing something well",
    "cn_def": "獎；獎項"
  },
  "trophy": {
    "pos": "n.",
    "en_def": "a cup or other object given to the winner of a competition",
    "cn_def": "獎盃"
  },
  "medal": {
    "pos": "n.",
    "en_def": "a flat piece of metal given as a prize or honor",
    "cn_def": "獎牌；勳章"
  },
  "reward": {
    "pos": "n.",
    "en_def": "something given to thank someone for good work or help",
    "cn_def": "獎勵；報酬"
  },
  "honor": {
    "pos": "n.",
    "en_def": "something that makes you feel proud and respected",
    "cn_def": "榮譽；榮幸"
  },
  "recognition": {
    "pos": "n.",
    "en_def": "praise or thanks given to someone for what they have done",
    "cn_def": "表彰；肯定"
  },
  "champion": {
    "pos": "n.",
    "en_def": "the person or team that wins a competition",
    "cn_def": "冠軍"
  },
  "winner": {
    "pos": "n.",
    "en_def": "a person who wins a prize, game, or competition",
    "cn_def": "得獎者；獲勝者"
  },
  "victory": {
    "pos": "n.",
    "en_def": "success in a game, fight, or competition",
    "cn_def": "勝利"
  },
  "achievement": {
    "pos": "n.",
    "en_def": "something good that you succeed in doing",
    "cn_def": "成就"
  },
  "accomplishment": {
    "pos": "n.",
    "en_def": "something you finish successfully, usually with hard work",
    "cn_def": "成就；完成的事"
  },
  "distinction": {
    "pos": "n.",
    "en_def": "a special honor for being excellent",
    "cn_def": "優異；殊榮"
  },
  "scholarship": {
    "pos": "n.",
    "en_def": "money given to a student to help pay for study",
    "cn_def": "獎學金"
  },
  "grant": {
    "pos": "n.",
    "en_def": "money given by a government or group for a special purpose",
    "cn_def": "補助金；撥款"
  },
  "bonus": {
    "pos": "n.",
    "en_def": "extra money added to your pay as a reward",
    "cn_def": "獎金；紅利"
  },
  "incentive": {
    "pos": "n.",
    "en_def": "something that encourages people to do something",
    "cn_def": "激勵；誘因"
  },
  "contest": {
    "pos": "n.",
    "en_def": "a competition to find out who is the best at something",
    "cn_def": "比賽；競賽"
  },
  "competition": {
    "pos": "n.",
    "en_def": "an event in which people try to win; also the act of trying to be better than others",
    "cn_def": "競賽；競爭"
  },
  "ceremony": {
    "pos": "n.",
    "en_def": "a formal public event for a special occasion",
    "cn_def": "典禮；儀式"
  },
  "nominate": {
    "pos": "v.",
    "en_def": "to officially suggest someone for a prize or job",
    "cn_def": "提名"
  },
  "finalist": {
    "pos": "n.",
    "en_def": "one of the last few people or teams left in a competition",
    "cn_def": "決賽入圍者"
  },
  "prestigious": {
    "pos": "adj.",
    "en_def": "very respected and admired",
    "cn_def": "有聲望的；享有盛譽的"
  },
  "valuable": {
    "pos": "adj.",
    "en_def": "worth a lot of money, or very useful",
    "cn_def": "有價值的；貴重的"
  },
  "grand": {
    "pos": "adj.",
    "en_def": "biggest or most important; large and impressive",
    "cn_def": "最大的；盛大的"
  },
  "runner-up": {
    "pos": "n.",
    "en_def": "the person or team that finishes second",
    "cn_def": "亞軍；第二名"
  },
  "merit": {
    "pos": "n.",
    "en_def": "the quality of being good and deserving praise",
    "cn_def": "優點；功績；表現"
  },
  "qualify": {
    "pos": "v.",
    "en_def": "to reach the standard needed to do or get something",
    "cn_def": "有資格；符合資格"
  },
  "claim": {
    "pos": "v.",
    "en_def": "to ask for or take something that belongs to you",
    "cn_def": "領取；索取"
  },
  "celebrate": {
    "pos": "v.",
    "en_def": "to do something enjoyable because of a special event or success",
    "cn_def": "慶祝"
  },
  "presentation": {
    "pos": "n.",
    "en_def": "the act of formally giving something, such as a prize, to someone",
    "cn_def": "頒發；贈送"
  },
  "laureate": {
    "pos": "n.",
    "en_def": "a person who has won a very important prize",
    "cn_def": "（重要獎項的）得主"
  },
  "title": {
    "pos": "n.",
    "en_def": "the position of being the winner of a competition; a name showing rank",
    "cn_def": "頭銜；冠軍"
  },
  "glory": {
    "pos": "n.",
    "en_def": "great fame, praise, and honor",
    "cn_def": "榮耀；光榮"
  },
  "recognize": {
    "pos": "v.",
    "en_def": "to officially show that you value someone's work",
    "cn_def": "表揚；認可"
  }
};

const EXTRA_GLOSSES = {};
