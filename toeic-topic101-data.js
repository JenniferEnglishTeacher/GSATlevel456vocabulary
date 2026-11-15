// Topic 101 Quiz Data: Dependent 依賴
// Source word list: https://www.examword.com/group-topic/dependent — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T101 - Dependent 依賴",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "reliance",
    "pos": "n.",
    "cn_def": "依賴；信賴",
    "en_def": "the state of needing someone or something",
    "sentence": "A: Why is the board so worried about the new supplier in Vietnam, even though their prices are lower than everyone else's? B: Our {{BLANK}} on a single factory for all our parts is risky, because if they close for a week, our whole production line in Taichung will stop.",
    "cn": "A：為什麼董事會這麼擔心越南的新供應商，即使他們的價格比其他人都低？ B：我們所有零件都【依賴】單一工廠，風險很高，因為如果他們停工一週，我們在台中的整條生產線就會停擺。"
  },
  {
    "word": "rely",
    "pos": "v.",
    "cn_def": "依靠；信賴",
    "en_def": "to trust or need someone or something",
    "sentence": "A: Who should I ask to check the sales figures before I send the quarterly report to the head office tomorrow morning? B: You can {{BLANK}} on Kevin in accounting, because he always finds small mistakes that other people miss, and he never complains about extra work.",
    "cn": "A：明天早上把季報寄給總公司之前，我該請誰檢查銷售數字？ B：你可以【依靠】會計部的凱文，因為他總能找出別人漏掉的小錯誤，而且他從不抱怨額外的工作。"
  },
  {
    "word": "dependency",
    "pos": "n.",
    "cn_def": "依賴（性）；依存關係",
    "en_def": "a need for something in order to work or exist",
    "sentence": "A: Why did the IT manager say that the new booking system might cause problems for the hotel next month? B: It has a {{BLANK}} on an old payment program that will stop receiving updates soon, so we must replace that program before the busy holiday season begins.",
    "cn": "A：為什麼資訊經理說新的訂房系統下個月可能會給飯店帶來問題？ B：它對一套很快就不再更新的舊付款程式有【依存關係】，所以我們必須在忙碌的假期旺季開始之前替換掉那套程式。"
  },
  {
    "word": "depend",
    "pos": "v.",
    "cn_def": "取決於；依賴",
    "en_def": "to be decided by something; to need someone or something",
    "sentence": "A: Will the company picnic still take place at the riverside park on Saturday, or should I cancel the bus I booked for the staff? B: It will {{BLANK}} on the weather, so let's check the forecast on Friday afternoon and make a final decision before everyone leaves the office.",
    "cn": "A：公司野餐週六還會在河濱公園舉行嗎？還是我應該取消為員工預訂的巴士？ B：那要【取決於】天氣，所以我們週五下午查一下天氣預報，在大家下班前做最後決定。"
  },
  {
    "word": "reliant",
    "pos": "adj.",
    "cn_def": "依賴的",
    "en_def": "needing someone or something in order to succeed",
    "sentence": "A: Why is the restaurant owner trying so hard to attract more local customers this year? B: The business has been too {{BLANK}} on foreign tourists, and when fewer visitors came last winter, sales dropped by half, so she wants a more stable group of regular diners.",
    "cn": "A：為什麼餐廳老闆今年這麼努力想吸引更多本地顧客？ B：這家店過去太【依賴】外國觀光客，去年冬天遊客變少時，營業額掉了一半，所以她想要一群更穩定的常客。"
  },
  {
    "word": "interdependent",
    "pos": "adj.",
    "cn_def": "相互依存的",
    "en_def": "needing each other in order to work well",
    "sentence": "A: Why can't the marketing team simply launch the campaign without waiting for the product designers to finish? B: The two departments are completely {{BLANK}}, because the ads need the final package design, and the designers need our customer research to choose the right colors.",
    "cn": "A：為什麼行銷團隊不能直接推出活動，而不用等產品設計師完成？ B：這兩個部門是完全【相互依存】的，因為廣告需要最終的包裝設計，而設計師需要我們的顧客研究來選擇合適的顏色。"
  },
  {
    "word": "codependent",
    "pos": "adj.",
    "cn_def": "過度互相依賴的",
    "en_def": "needing each other too much in an unhealthy way",
    "sentence": "A: Why did the consultant suggest that the two sales managers should stop working as a pair next quarter? B: She said their working relationship had become {{BLANK}}, because neither of them would make any decision alone, and the rest of the team was waiting days for simple answers.",
    "cn": "A：為什麼顧問建議那兩位業務經理下一季不要再搭檔工作？ B：她說他們的工作關係已經變得【過度互相依賴】，因為兩人都不肯獨自做任何決定，團隊其他人要等好幾天才能得到簡單的答覆。"
  },
  {
    "word": "contingent",
    "pos": "adj.",
    "cn_def": "視…而定的；取決於…的",
    "en_def": "depending on something else happening first",
    "sentence": "A: Has the bank finally approved the loan for our new warehouse near the port, or are we still waiting for their answer? B: The loan is {{BLANK}} on a successful safety inspection of the building, so we cannot sign the contract until the inspector visits next Thursday.",
    "cn": "A：銀行終於核准我們港口附近新倉庫的貸款了嗎？還是我們還在等他們的答覆？ B：這筆貸款【取決於】大樓能否通過安全檢查，所以在檢查員下週四來之前，我們不能簽約。"
  },
  {
    "word": "conditional",
    "pos": "adj.",
    "cn_def": "有條件的",
    "en_def": "happening only if certain things are done first",
    "sentence": "A: Did the candidate from Singapore accept our job offer for the new project manager position last Friday? B: Her acceptance is {{BLANK}}, because she will only join us if we let her work from home two days a week and pay for her moving costs.",
    "cn": "A：那位來自新加坡的應徵者上週五接受我們新專案經理職位的錄取了嗎？ B：她的接受是【有條件的】，因為只有我們讓她每週在家工作兩天並支付她的搬家費用，她才會加入。"
  },
  {
    "word": "needy",
    "pos": "adj.",
    "cn_def": "貧困的；需要幫助的",
    "en_def": "poor and needing help",
    "sentence": "A: What is the company going to do with all the office furniture and laptops left over after the move? B: We plan to give them to a charity that helps {{BLANK}} families in the neighborhood, so children can use the laptops for their schoolwork at home.",
    "cn": "A：搬遷後剩下的辦公家具和筆電，公司打算怎麼處理？ B：我們計畫把它們捐給一家幫助附近【貧困】家庭的慈善機構，讓孩子們可以在家用筆電做功課。"
  },
  {
    "word": "vulnerable",
    "pos": "adj.",
    "cn_def": "易受傷害的；脆弱的",
    "en_def": "easily hurt or attacked",
    "sentence": "A: Why does the IT department want every employee to change their passwords again this month? B: Some of our older computers are {{BLANK}} to a new type of online attack, and if hackers get in, they could steal customer data and damage our reputation.",
    "cn": "A：為什麼資訊部這個月又要每位員工更改密碼？ B：我們有些較舊的電腦很【容易受到】一種新型網路攻擊，如果駭客入侵，他們可能會竊取顧客資料並損害我們的聲譽。"
  },
  {
    "word": "supported",
    "pos": "adj.",
    "cn_def": "受支援的；有支持的",
    "en_def": "helped or kept working by someone or something",
    "sentence": "A: Can I still use my old tablet to open the new sales app that the company introduced last week? B: Unfortunately, that model is no longer {{BLANK}}, so the app will not install on it, and you should ask the IT desk for a newer device.",
    "cn": "A：我還能用舊平板開啟公司上週推出的新銷售應用程式嗎？ B：很遺憾，那個型號已經不再【受支援】，所以應用程式無法安裝，你應該向資訊服務台申請一台較新的裝置。"
  },
  {
    "word": "subsidy",
    "pos": "n.",
    "cn_def": "補助金",
    "en_def": "money from the government to help pay for something",
    "sentence": "A: How can a small bakery like ours afford those expensive new energy-saving ovens this year? B: The city government offers a {{BLANK}} to small businesses that reduce their electricity use, so it will pay about forty percent of the cost if we apply before June.",
    "cn": "A：像我們這樣的小麵包店，今年怎麼負擔得起那些昂貴的新節能烤箱？ B：市政府提供【補助金】給減少用電的小型企業，所以如果我們在六月前申請，它會支付約百分之四十的費用。"
  },
  {
    "word": "assistance",
    "pos": "n.",
    "cn_def": "協助；幫助",
    "en_def": "help",
    "sentence": "A: What should I do if a passenger at the gate needs a wheelchair but our ground staff are all busy with boarding? B: Call the airport service desk and request {{BLANK}}, and they will send someone within ten minutes to help the passenger reach the plane safely.",
    "cn": "A：如果登機門有旅客需要輪椅，但我們的地勤人員都在忙登機，我該怎麼辦？ B：打電話給機場服務台請求【協助】，他們會在十分鐘內派人來幫助旅客安全登機。"
  },
  {
    "word": "maintenance",
    "pos": "n.",
    "cn_def": "維修；保養",
    "en_def": "work done to keep something in good condition",
    "sentence": "A: Why are the elevators in the east wing closed all day, and when will they be working again? B: The building manager scheduled regular {{BLANK}} for this morning, and the technicians said they need to replace some parts, so the elevators should reopen by five o'clock.",
    "cn": "A：為什麼東側大樓的電梯整天關閉？什麼時候會恢復運作？ B：大樓管理員安排今天早上進行定期【維修保養】，技術人員說需要更換一些零件，所以電梯應該在五點前重新開放。"
  },
  {
    "word": "sustenance",
    "pos": "n.",
    "cn_def": "食物；糧食；營養",
    "en_def": "food and drink needed to stay alive",
    "sentence": "A: Why did the volunteers bring so many boxes of rice, canned food, and bottled water to the village after the flood? B: Many families lost their crops and kitchens in the storm, so they needed basic {{BLANK}} until the roads opened and the local markets could start selling food again.",
    "cn": "A：為什麼志工在水災後帶了這麼多箱米、罐頭和瓶裝水到村子裡？ B：許多家庭在暴風雨中失去了農作物和廚房，所以在道路通車、當地市場重新開始賣食物之前，他們需要基本的【糧食】。"
  },
  {
    "word": "caretaker",
    "pos": "n.",
    "cn_def": "管理員；照顧者",
    "en_def": "a person who looks after a building or another person",
    "sentence": "A: Who should I contact if the heating in the community center stops working during the weekend workshop? B: Call the {{BLANK}}, Mr. Lin, because he lives in the small house next to the building, and he has keys to every room and the boiler.",
    "cn": "A：如果週末工作坊期間社區中心的暖氣壞了，我該聯絡誰？ B：打給【管理員】林先生，因為他住在大樓旁的小房子裡，而且他有每個房間和鍋爐的鑰匙。"
  },
  {
    "word": "guardian",
    "pos": "n.",
    "cn_def": "監護人；守護者",
    "en_def": "a person who is legally responsible for a child",
    "sentence": "A: Can the high school student who applied for our summer internship sign the contract by himself? B: No, because he is only seventeen, a parent or legal {{BLANK}} must also sign the form before he can start working in our office in July.",
    "cn": "A：申請我們暑期實習的那位高中生可以自己簽合約嗎？ B：不行，因為他只有十七歲，他的父母或法定【監護人】也必須在表格上簽名，他才能七月開始在我們辦公室工作。"
  },
  {
    "word": "beneficiary",
    "pos": "n.",
    "cn_def": "受益人",
    "en_def": "a person who receives money or help from something",
    "sentence": "A: Why does the insurance company need me to fill out this extra page before my new policy starts? B: You must name a {{BLANK}}, the person who will receive the money if something happens to you, and most people choose their husband, wife, or children.",
    "cn": "A：為什麼保險公司要我在新保單生效前填寫這額外的一頁？ B：你必須指定一位【受益人】，也就是萬一你發生什麼事時會收到這筆錢的人，大多數人會選擇丈夫、妻子或子女。"
  },
  {
    "word": "client",
    "pos": "n.",
    "cn_def": "客戶；委託人",
    "en_def": "a person or company that pays for a service",
    "sentence": "A: Why do you have to leave the office so early this afternoon when we still have a lot of work to finish? B: I'm meeting an important {{BLANK}} from Tokyo at the airport, and then I'll take her to dinner to discuss next year's advertising contract.",
    "cn": "A：我們還有很多工作要完成，你今天下午為什麼要這麼早離開辦公室？ B：我要去機場接一位來自東京的重要【客戶】，然後帶她去吃晚餐，討論明年的廣告合約。"
  },
  {
    "word": "attachment",
    "pos": "n.",
    "cn_def": "依戀；附件",
    "en_def": "a strong feeling of love for someone or something",
    "sentence": "A: Why doesn't the manager want to move the team to the bright new building across the street? B: He has a strong {{BLANK}} to the old office, because he started the company there twenty years ago, and every room reminds him of the early days.",
    "cn": "A：為什麼經理不想把團隊搬到對街明亮的新大樓？ B：他對舊辦公室有很深的【依戀】，因為二十年前他在那裡創立公司，每個房間都讓他想起創業初期的日子。"
  },
  {
    "word": "autonomy",
    "pos": "n.",
    "cn_def": "自主權；自治",
    "en_def": "the freedom to make your own decisions",
    "sentence": "A: Why do so many young engineers want to join the small design studio instead of the big electronics company? B: The studio gives its staff more {{BLANK}}, so they can choose their own projects and working hours, while the big company makes every decision at the top.",
    "cn": "A：為什麼這麼多年輕工程師想加入那家小型設計工作室，而不是大型電子公司？ B：工作室給員工更多【自主權】，他們可以選擇自己的專案和工作時間，而大公司的每個決定都由高層做出。"
  },
  {
    "word": "independence",
    "pos": "n.",
    "cn_def": "獨立；自主",
    "en_def": "the freedom to live or act without help from others",
    "sentence": "A: Why did your sister decide to rent her own apartment downtown even though the rent is so expensive? B: After she got her first full-time job at the bank, she wanted more {{BLANK}}, so she could cook, travel, and plan her life without asking our parents first.",
    "cn": "A：你姊姊為什麼決定在市中心自己租公寓，即使房租那麼貴？ B：她在銀行找到第一份全職工作後，想要更多【獨立】，這樣她就可以不必先問爸媽，自己做飯、旅行和規劃生活。"
  },
  {
    "word": "obligation",
    "pos": "n.",
    "cn_def": "義務；責任",
    "en_def": "something you must do because of a law, rule, or promise",
    "sentence": "A: Do I really have to stay at the company for two more years after it paid for my master's degree? B: Yes, you signed an agreement, so you have an {{BLANK}} to work here until 2028, or you must pay back the full cost of the course.",
    "cn": "A：公司幫我付了碩士學費之後，我真的必須再留在公司兩年嗎？ B：是的，你簽了協議，所以你有【義務】在這裡工作到2028年，否則你必須償還全部課程費用。"
  },
  {
    "word": "responsibility",
    "pos": "n.",
    "cn_def": "責任；職責",
    "en_def": "a duty to deal with or take care of something",
    "sentence": "A: Who will handle customer complaints while the service manager is on vacation in Europe next month? B: Linda will take {{BLANK}} for answering all complaints, and she will report any serious problems directly to the general manager every Friday afternoon by email.",
    "cn": "A：服務經理下個月去歐洲度假期間，誰會處理顧客投訴？ B：琳達會負起回覆所有投訴的【責任】，並在每週五下午用電子郵件直接向總經理報告任何嚴重問題。"
  },
  {
    "word": "backing",
    "pos": "n.",
    "cn_def": "支持；資助",
    "en_def": "support, especially money or approval",
    "sentence": "A: How did such a small start-up manage to open three new shops in Taipei in only one year? B: They got strong financial {{BLANK}} from a large investment company, which gave them enough money to rent good locations and hire experienced staff.",
    "cn": "A：這麼小的新創公司怎麼能在短短一年內在台北開三家新店？ B：他們得到一家大型投資公司強力的資金【支持】，給了他們足夠的錢租下好地點並雇用有經驗的員工。"
  },
  {
    "word": "provision",
    "pos": "n.",
    "cn_def": "提供；條款",
    "en_def": "the act of supplying something; a rule in a contract or law",
    "sentence": "A: Does our new office lease say anything about who pays if the air conditioning breaks down in summer? B: Yes, there is a {{BLANK}} in section six which says that the landlord must repair all major equipment within three working days at his own cost.",
    "cn": "A：我們新的辦公室租約有提到夏天冷氣壞了由誰付錢嗎？ B：有，第六節有一項【條款】寫明房東必須在三個工作天內自費修理所有主要設備。"
  },
  {
    "word": "security",
    "pos": "n.",
    "cn_def": "保障；安全",
    "en_def": "protection from danger or loss; a feeling of being safe",
    "sentence": "A: Why did you leave a well-paid job at the start-up to work for the government tax office? B: The start-up paid more, but I wanted job {{BLANK}}, because my wife and I just bought a house and we cannot risk losing my income next year.",
    "cn": "A：你為什麼離開新創公司的高薪工作，去政府稅務局上班？ B：新創公司薪水比較高，但我想要工作【保障】，因為我和太太剛買了房子，我們不能冒明年失去收入的風險。"
  },
  {
    "word": "fallback",
    "pos": "n.",
    "cn_def": "備案；退路",
    "en_def": "a plan or choice you can use if the first one fails",
    "sentence": "A: What will we do if the hotel cancels our conference room booking at the last minute again? B: We have a {{BLANK}}, because the university near the station agreed to rent us a lecture hall, so the event can still go ahead on the same day.",
    "cn": "A：如果飯店又在最後一刻取消我們的會議室預訂，我們該怎麼辦？ B：我們有【備案】，因為車站附近的大學同意租給我們一間演講廳，所以活動仍然可以在同一天舉行。"
  },
  {
    "word": "dependence",
    "pos": "n.",
    "cn_def": "依賴",
    "en_def": "the state of needing something or someone",
    "sentence": "A: Why is the government spending so much money on solar and wind farms along the west coast? B: It wants to reduce the country's {{BLANK}} on imported oil and gas, because prices change so quickly, and a sudden increase can hurt factories and families.",
    "cn": "A：為什麼政府在西海岸的太陽能和風力發電場上花這麼多錢？ B：政府想減少國家對進口石油和天然氣的【依賴】，因為價格變動太快，突然上漲會傷害工廠和家庭。"
  }
];

const MCQS = [
  {
    "q": "The airline wants to cut its _____ on one aircraft maker. It plans to buy planes from two different companies next year.",
    "options": [
      "reliance",
      "guardian",
      "sustenance",
      "caretaker"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The software update failed because of a missing _____. The program needs another file before it can run properly.",
    "options": [
      "autonomy",
      "guardian",
      "subsidy",
      "dependency"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Farmers can receive a government _____ for installing water-saving systems. The money covers half of the equipment cost.",
    "options": [
      "obligation",
      "attachment",
      "subsidy",
      "caretaker"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "If you have trouble logging in, please contact the help desk for _____. A technician is available until 9 p.m.",
    "options": [
      "autonomy",
      "assistance",
      "sustenance",
      "beneficiary"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The factory will close on Sunday for _____. Workers will clean and check all the machines.",
    "options": [
      "maintenance",
      "dependence",
      "guardian",
      "client"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The hikers carried enough _____ for three days. Their bags were full of nuts, dried fruit, and water.",
    "options": [
      "autonomy",
      "obligation",
      "sustenance",
      "beneficiary"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The school _____ unlocks the gates every morning at six. He also fixes broken lights and windows.",
    "options": [
      "beneficiary",
      "client",
      "subsidy",
      "caretaker"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Students under eighteen must bring a letter signed by a parent or _____. Without it, they cannot join the overseas trip.",
    "options": [
      "client",
      "guardian",
      "beneficiary",
      "autonomy"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Mr. Chen named his daughter as the _____ of his life insurance policy. She will receive the full payment.",
    "options": [
      "beneficiary",
      "guardian",
      "caretaker",
      "client"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Our law firm's biggest _____ is a shipping company in Kaohsiung. We handle all of its contracts.",
    "options": [
      "subsidy",
      "provision",
      "client",
      "fallback"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Many employees feel a deep _____ to the old factory where they started their careers. Some cried when it closed.",
    "options": [
      "autonomy",
      "subsidy",
      "maintenance",
      "attachment"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The branch managers have full _____ over hiring decisions. They do not need approval from head office.",
    "options": [
      "attachment",
      "autonomy",
      "sustenance",
      "beneficiary"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "After years of working for others, Maria opened her own café. She enjoys the _____ of being her own boss.",
    "options": [
      "dependence",
      "provision",
      "independence",
      "maintenance"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Under the contract, the supplier has an _____ to deliver all goods by March. Late deliveries will result in a fine.",
    "options": [
      "attachment",
      "autonomy",
      "sustenance",
      "obligation"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Each team leader has _____ for the safety of his or her workers. Accidents must be reported immediately.",
    "options": [
      "subsidy",
      "responsibility",
      "attachment",
      "client"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The project received the full _____ of the board of directors. Construction will start early next month.",
    "options": [
      "backing",
      "guardian",
      "sustenance",
      "dependency"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The new law includes a _____ for paid parental leave. Workers can take up to six months off.",
    "options": [
      "caretaker",
      "beneficiary",
      "provision",
      "autonomy"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The bank uses fingerprint scans to improve _____. Only staff members can enter the vault room.",
    "options": [
      "attachment",
      "beneficiary",
      "obligation",
      "security"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "If the main server fails, the backup server in Tainan is our _____. It can take over within minutes.",
    "options": [
      "fallback",
      "client",
      "guardian",
      "subsidy"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The town's _____ on tourism became clear during the pandemic. Many shops closed when visitors stopped coming.",
    "options": [
      "autonomy",
      "dependence",
      "sustenance",
      "caretaker"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The island is heavily _____ on imported food. Ships bring most of its rice and vegetables.",
    "options": [
      "needy",
      "codependent",
      "supported",
      "reliant"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The world's economies are highly _____. A problem in one country can quickly affect many others.",
    "options": [
      "needy",
      "interdependent",
      "supported",
      "conditional"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The counselor said the two business partners had become _____. Neither could make a decision without the other.",
    "options": [
      "codependent",
      "needy",
      "contingent",
      "supported"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The bonus payment is _____ on reaching the sales target. If the team fails, nobody will receive it.",
    "options": [
      "needy",
      "vulnerable",
      "contingent",
      "codependent"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The bank gave us a _____ approval for the loan. We must still provide our latest tax records.",
    "options": [
      "needy",
      "vulnerable",
      "reliant",
      "conditional"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The supermarket donates unsold bread to _____ families every evening. Volunteers deliver it to their homes.",
    "options": [
      "interdependent",
      "needy",
      "contingent",
      "supported"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Old wooden houses are especially _____ to fire. Owners should install smoke alarms in every room and hallway.",
    "options": [
      "vulnerable",
      "needy",
      "supported",
      "reliant"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "This printer model is no longer _____ by the manufacturer. Spare parts and repairs are not available.",
    "options": [
      "needy",
      "codependent",
      "supported",
      "interdependent"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Electric scooter buyers can get a _____ from the city. It reduces the price by about five thousand dollars.",
    "options": [
      "guardian",
      "subsidy",
      "attachment",
      "caretaker"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Without the _____ of a major bank, the shopping mall project would have failed. Investors trusted the bank's name.",
    "options": [
      "client",
      "sustenance",
      "backing",
      "autonomy"
    ],
    "answer": 2,
    "vocabIndex": 25
  }
];

const LOOKUP = {
  "reliance": {
    "pos": "n.",
    "en_def": "the state of needing someone or something",
    "cn_def": "依賴；信賴"
  },
  "rely": {
    "pos": "v.",
    "en_def": "to trust or need someone or something",
    "cn_def": "依靠；信賴"
  },
  "dependency": {
    "pos": "n.",
    "en_def": "a need for something in order to work or exist",
    "cn_def": "依賴（性）；依存關係"
  },
  "depend": {
    "pos": "v.",
    "en_def": "to be decided by something; to need someone or something",
    "cn_def": "取決於；依賴"
  },
  "reliant": {
    "pos": "adj.",
    "en_def": "needing someone or something in order to succeed",
    "cn_def": "依賴的"
  },
  "interdependent": {
    "pos": "adj.",
    "en_def": "needing each other in order to work well",
    "cn_def": "相互依存的"
  },
  "codependent": {
    "pos": "adj.",
    "en_def": "needing each other too much in an unhealthy way",
    "cn_def": "過度互相依賴的"
  },
  "contingent": {
    "pos": "adj.",
    "en_def": "depending on something else happening first",
    "cn_def": "視…而定的；取決於…的"
  },
  "conditional": {
    "pos": "adj.",
    "en_def": "happening only if certain things are done first",
    "cn_def": "有條件的"
  },
  "needy": {
    "pos": "adj.",
    "en_def": "poor and needing help",
    "cn_def": "貧困的；需要幫助的"
  },
  "vulnerable": {
    "pos": "adj.",
    "en_def": "easily hurt or attacked",
    "cn_def": "易受傷害的；脆弱的"
  },
  "supported": {
    "pos": "adj.",
    "en_def": "helped or kept working by someone or something",
    "cn_def": "受支援的；有支持的"
  },
  "subsidy": {
    "pos": "n.",
    "en_def": "money from the government to help pay for something",
    "cn_def": "補助金"
  },
  "assistance": {
    "pos": "n.",
    "en_def": "help",
    "cn_def": "協助；幫助"
  },
  "maintenance": {
    "pos": "n.",
    "en_def": "work done to keep something in good condition",
    "cn_def": "維修；保養"
  },
  "sustenance": {
    "pos": "n.",
    "en_def": "food and drink needed to stay alive",
    "cn_def": "食物；糧食；營養"
  },
  "caretaker": {
    "pos": "n.",
    "en_def": "a person who looks after a building or another person",
    "cn_def": "管理員；照顧者"
  },
  "guardian": {
    "pos": "n.",
    "en_def": "a person who is legally responsible for a child",
    "cn_def": "監護人；守護者"
  },
  "beneficiary": {
    "pos": "n.",
    "en_def": "a person who receives money or help from something",
    "cn_def": "受益人"
  },
  "client": {
    "pos": "n.",
    "en_def": "a person or company that pays for a service",
    "cn_def": "客戶；委託人"
  },
  "attachment": {
    "pos": "n.",
    "en_def": "a strong feeling of love for someone or something",
    "cn_def": "依戀；附件"
  },
  "autonomy": {
    "pos": "n.",
    "en_def": "the freedom to make your own decisions",
    "cn_def": "自主權；自治"
  },
  "independence": {
    "pos": "n.",
    "en_def": "the freedom to live or act without help from others",
    "cn_def": "獨立；自主"
  },
  "obligation": {
    "pos": "n.",
    "en_def": "something you must do because of a law, rule, or promise",
    "cn_def": "義務；責任"
  },
  "responsibility": {
    "pos": "n.",
    "en_def": "a duty to deal with or take care of something",
    "cn_def": "責任；職責"
  },
  "backing": {
    "pos": "n.",
    "en_def": "support, especially money or approval",
    "cn_def": "支持；資助"
  },
  "provision": {
    "pos": "n.",
    "en_def": "the act of supplying something; a rule in a contract or law",
    "cn_def": "提供；條款"
  },
  "security": {
    "pos": "n.",
    "en_def": "protection from danger or loss; a feeling of being safe",
    "cn_def": "保障；安全"
  },
  "fallback": {
    "pos": "n.",
    "en_def": "a plan or choice you can use if the first one fails",
    "cn_def": "備案；退路"
  },
  "dependence": {
    "pos": "n.",
    "en_def": "the state of needing something or someone",
    "cn_def": "依賴"
  }
};

const EXTRA_GLOSSES = {};
