// Topic 69 Quiz Data: Company 公司
// Source word list: https://www.examword.com/group-topic/company — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T69 - Company 公司",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "innovator",
    "pos": "n.",
    "cn_def": "創新者；革新者",
    "en_def": "a person who introduces new ideas, methods or products",
    "sentence": "A: Why did the board choose Ms. Lin to lead the new research department instead of hiring someone from outside the company? B: She is a true {{BLANK}} who designed our best-selling smart lamp, and the directors believe she can bring fresh ideas to every product we develop next year.",
    "cn": "A：董事會為什麼選林小姐來帶領新的研發部門，而不是從公司外部聘請人？ B：她是一位真正的【創新者】，設計了我們最暢銷的智慧檯燈，董事們相信她能為我們明年開發的每項產品帶來新點子。"
  },
  {
    "word": "disruptor",
    "pos": "n.",
    "cn_def": "顛覆者；破壞式創新者",
    "en_def": "a company or person that changes an industry with a completely new way of doing things",
    "sentence": "A: Why are the big taxi companies in the city so worried about the new ride-sharing app that launched last spring? B: The app has become a real {{BLANK}} in the transport market, because customers can book cheaper rides in seconds, and many drivers have already left their old employers to join it.",
    "cn": "A：為什麼市內的大型計程車公司這麼擔心去年春天推出的新共乘應用程式？ B：這個應用程式已經成為交通市場上真正的【顛覆者】，因為顧客可以在幾秒內預訂更便宜的車程，而且許多司機已經離開原本的雇主加入它。"
  },
  {
    "word": "entrepreneur",
    "pos": "n.",
    "cn_def": "企業家；創業者",
    "en_def": "a person who starts and runs their own business",
    "sentence": "A: How did your cousin manage to open three coffee shops in Taipei before she turned thirty? B: She is a hard-working {{BLANK}} who saved money for years, borrowed a small loan from the bank, and spent every weekend learning about marketing, rent and hiring staff before opening her first shop.",
    "cn": "A：你表姊是怎麼在三十歲之前就在台北開了三家咖啡店的？ B：她是一位勤奮的【創業者】，存了好幾年的錢，向銀行借了一筆小額貸款，並在開第一家店之前每個週末都在學習行銷、租金和聘僱員工的知識。"
  },
  {
    "word": "entrepreneurship",
    "pos": "n.",
    "cn_def": "創業精神；創業",
    "en_def": "the skills and activity of starting and running new businesses",
    "sentence": "A: Why is the university inviting so many business owners to give talks on campus this semester? B: The school wants to encourage {{BLANK}} among its students, so local company founders will explain how they found investors, dealt with failure and turned simple ideas into profitable businesses.",
    "cn": "A：為什麼大學這學期邀請這麼多企業主到校園演講？ B：學校想要在學生之間鼓勵【創業精神】，所以當地的公司創辦人會說明他們如何找到投資者、面對失敗，以及把簡單的點子變成能獲利的事業。"
  },
  {
    "word": "start-up",
    "pos": "n.",
    "cn_def": "新創公司",
    "en_def": "a new, small company, often in technology",
    "sentence": "A: Why did Kevin leave his well-paid job at the bank after working there for almost ten years? B: He joined a small {{BLANK}} that is developing an online payment app, and although the salary is lower, he gets shares in the company and the chance to learn something new every day.",
    "cn": "A：凱文在銀行工作了將近十年，為什麼要離開那份高薪工作？ B：他加入了一家正在開發線上支付應用程式的小型【新創公司】，雖然薪水比較低，但他能獲得公司股份，而且每天都有機會學到新東西。"
  },
  {
    "word": "founder",
    "pos": "n.",
    "cn_def": "創辦人",
    "en_def": "a person who starts a company or organization",
    "sentence": "A: Who is going to give the opening speech at the company's twentieth anniversary dinner next Friday evening? B: The {{BLANK}} of the company, Mr. Chen, will fly back from Singapore to tell the story of how he started the business in a tiny garage with only two employees.",
    "cn": "A：下週五晚上公司二十週年晚宴上，誰要致開幕詞？ B：公司的【創辦人】陳先生會從新加坡飛回來，講述他如何只帶著兩名員工在一間小車庫裡創業的故事。"
  },
  {
    "word": "manpower",
    "pos": "n.",
    "cn_def": "人力",
    "en_def": "the number of workers available to do a job",
    "sentence": "A: Can the factory finish the large order for the hotel chain before the end of next month? B: I'm afraid we don't have enough {{BLANK}} right now, because several workers are on holiday, so we will need to hire temporary staff or ask the customer for an extra two weeks.",
    "cn": "A：工廠能在下個月底之前完成連鎖飯店的大訂單嗎？ B：恐怕我們現在沒有足夠的【人力】，因為有好幾位員工在休假，所以我們需要聘請臨時員工，或者請客戶多給兩週時間。"
  },
  {
    "word": "mentor",
    "pos": "n.",
    "cn_def": "導師；指導者",
    "en_def": "an experienced person who advises and helps someone with less experience",
    "sentence": "A: How are the new trainees in the sales department settling in during their first month with us? B: Each of them has a {{BLANK}} from the senior team who meets them every week, answers their questions about clients and gives them helpful advice on how to reach their monthly targets.",
    "cn": "A：業務部的新進受訓人員在第一個月適應得如何？ B：他們每個人都有一位來自資深團隊的【導師】，每週和他們見面，回答他們關於客戶的問題，並針對如何達成每月目標給予實用的建議。"
  },
  {
    "word": "net worth",
    "pos": "n.phr.",
    "cn_def": "淨資產；身價",
    "en_def": "the total value of what a person or company owns, minus what they owe",
    "sentence": "A: Why was the owner of that small electronics firm suddenly in all the business newspapers this week? B: After his company went public on Monday, his {{BLANK}} rose to over two billion dollars, which made him one of the richest people in the country almost overnight.",
    "cn": "A：那家小型電子公司的老闆這週為什麼突然登上所有的商業報紙？ B：他的公司週一上市之後，他的【淨資產】增加到超過二十億美元，幾乎一夜之間讓他成為全國最富有的人之一。"
  },
  {
    "word": "perk",
    "pos": "n.",
    "cn_def": "額外福利",
    "en_def": "an extra benefit you get from your job in addition to your pay",
    "sentence": "A: Why do so many young designers want to work for that software company even though its salaries are not the highest? B: One popular {{BLANK}} is free lunch every day in the staff cafeteria, and employees can also work from home on Fridays and use the gym downstairs for free.",
    "cn": "A：為什麼那麼多年輕設計師想在那家軟體公司工作，即使它的薪水不是最高的？ B：一項很受歡迎的【額外福利】是每天在員工餐廳免費供應午餐，員工週五也可以在家工作，還能免費使用樓下的健身房。"
  },
  {
    "word": "stake",
    "pos": "n.",
    "cn_def": "股份；投資額",
    "en_def": "a share in a business or its profits",
    "sentence": "A: Why are the directors of the Japanese car maker visiting our factory in Kaohsiung next Thursday morning? B: They are planning to buy a twenty percent {{BLANK}} in our company, so they want to see the production lines and meet the managers before they sign the final agreement.",
    "cn": "A：那家日本汽車製造商的董事們為什麼下週四早上要參觀我們在高雄的工廠？ B：他們打算買下我們公司百分之二十的【股份】，所以想在簽署最終協議前看看生產線並和經理們見面。"
  },
  {
    "word": "motivate",
    "pos": "v.",
    "cn_def": "激勵；促使",
    "en_def": "to make someone want to work hard or do something",
    "sentence": "A: Sales have been slow for three months, so what is the new manager going to do about the team's low energy? B: She plans to {{BLANK}} everyone by offering a weekend trip to the top seller each month, and she will also share positive comments from customers at every Monday meeting.",
    "cn": "A：銷售已經疲軟三個月了，新經理打算怎麼處理團隊士氣低落的問題？ B：她打算每月提供週末旅遊給業績最好的人來【激勵】大家，她也會在每週一的會議上分享顧客的正面評價。"
  },
  {
    "word": "savvy",
    "pos": "adj.",
    "cn_def": "精明的；在行的",
    "en_def": "having practical knowledge and good judgment about something",
    "sentence": "A: Why did the marketing director hire such a young assistant to manage the company's online advertising? B: He is very {{BLANK}} about social media, so he knows which videos customers will share, and last month his short ads brought in twice as many orders as our television commercials.",
    "cn": "A：行銷總監為什麼聘請這麼年輕的助理來管理公司的線上廣告？ B：他對社群媒體非常【在行】，所以知道顧客會分享哪些影片，上個月他的短廣告帶來的訂單是我們電視廣告的兩倍。"
  },
  {
    "word": "contravene",
    "pos": "v.",
    "cn_def": "違反；觸犯",
    "en_def": "to break a law or rule",
    "sentence": "A: Why did the city government order the new restaurant on Park Road to close for a whole week? B: Inspectors found that the kitchen and the fire exits {{BLANK}} several local safety rules, so the owners must fix every problem and pass another check before they can serve customers again.",
    "cn": "A：市政府為什麼下令公園路上那家新餐廳停業整整一週？ B：檢查人員發現廚房和逃生出口【違反】了好幾條地方安全規定，所以業主必須修正每個問題並通過另一次檢查，才能再次營業接待顧客。"
  },
  {
    "word": "scale something up",
    "pos": "v.phr.",
    "cn_def": "擴大（某事物的）規模",
    "en_def": "to make something larger in size or amount",
    "sentence": "A: Our new plant-based snacks sold out in all twenty test stores, so when will we start selling them nationwide? B: Before we {{BLANK}}, we need a bigger factory and more suppliers, so the plan is to increase production step by step and reach every supermarket by next summer.",
    "cn": "A：我們新的植物性零食在二十家試賣店都賣光了，什麼時候開始全國販售？ B：在我們【擴大規模】之前，需要更大的工廠和更多供應商，所以計畫是逐步增加產量，在明年夏天前進入每一家超市。"
  },
  {
    "word": "wilfully",
    "pos": "adv.",
    "cn_def": "故意地；蓄意地",
    "en_def": "deliberately, while knowing that it is wrong",
    "sentence": "A: Why did the company fire the warehouse supervisor so suddenly last Friday afternoon? B: An investigation showed that he had {{BLANK}} ignored the safety rules for months to save time, even though two workers were injured and his manager had warned him several times in writing.",
    "cn": "A：公司上週五下午為什麼這麼突然開除倉庫主管？ B：調查顯示他好幾個月來為了節省時間而【故意】忽視安全規定，即使有兩名員工受傷，而且他的經理也曾多次以書面警告他。"
  },
  {
    "word": "rapidly",
    "pos": "adv.",
    "cn_def": "迅速地",
    "en_def": "very quickly",
    "sentence": "A: Why does the online shop need to rent a second warehouse in Taoyuan so soon after moving into the first one? B: Orders are growing {{BLANK}} because of our new mobile app, and we are now shipping three times more boxes every day than we did at the beginning of the year.",
    "cn": "A：那家網路商店才剛搬進第一間倉庫不久，為什麼就需要在桃園租第二間倉庫？ B：因為我們新的手機應用程式，訂單正【迅速地】成長，我們現在每天出貨的箱數是年初的三倍。"
  },
  {
    "word": "corporation",
    "pos": "n.",
    "cn_def": "大公司；企業",
    "en_def": "a large company or group of companies",
    "sentence": "A: Is it true that you are leaving the small design studio to work somewhere much bigger next year? B: Yes, I accepted an offer from a large {{BLANK}} with offices in twelve countries, so I will have more chances to travel, although I will probably miss the friendly atmosphere at the studio.",
    "cn": "A：聽說你明年要離開那家小設計工作室，到規模大很多的地方工作，是真的嗎？ B：是的，我接受了一家在十二個國家設有辦公室的大【企業】的工作邀約，所以會有更多出差機會，不過我大概會想念工作室友善的氣氛。"
  },
  {
    "word": "multinational",
    "pos": "adj.",
    "cn_def": "跨國的",
    "en_def": "operating in several countries",
    "sentence": "A: Why does the company need so many staff who can speak English, Japanese and Vietnamese? B: We have become a {{BLANK}} company with factories in three countries, so our managers must communicate with suppliers, customers and colleagues abroad every day, often during long video meetings.",
    "cn": "A：公司為什麼需要那麼多會說英文、日文和越南文的員工？ B：我們已經成為一家在三個國家設有工廠的【跨國】公司，所以經理們每天都必須和國外的供應商、客戶及同事溝通，常常要開很長的視訊會議。"
  },
  {
    "word": "subsidiary",
    "pos": "n.",
    "cn_def": "子公司",
    "en_def": "a company that is owned and controlled by a larger company",
    "sentence": "A: Who will be in charge of the new office in Ho Chi Minh City when it opens in March? B: It will be run as a {{BLANK}} of our Taipei head office, so the local manager will make daily decisions, but the budget and major plans still need approval from our board.",
    "cn": "A：三月胡志明市的新辦公室開幕後，由誰負責？ B：它會以台北總公司的【子公司】形式營運，所以當地經理會做日常決策，但預算和重大計畫仍需經過我們董事會的核准。"
  },
  {
    "word": "consultancy",
    "pos": "n.",
    "cn_def": "顧問公司",
    "en_def": "a company that gives expert advice to other businesses",
    "sentence": "A: How did the hospital find ways to reduce patients' waiting times so quickly this year? B: They hired a {{BLANK}} that specializes in healthcare, and its experts spent two months studying the reception area before suggesting a new booking system that cut the average wait by half.",
    "cn": "A：醫院今年是怎麼這麼快就找到縮短病患候診時間的方法？ B：他們聘請了一家專門從事醫療保健的【顧問公司】，該公司的專家花了兩個月研究掛號區，然後建議了一套新的預約系統，把平均等候時間減少一半。"
  },
  {
    "word": "venture",
    "pos": "n.",
    "cn_def": "（有風險的）新事業；投資事業",
    "en_def": "a new business activity that involves risk",
    "sentence": "A: Why did the two hotel owners decide to work together after competing with each other for years? B: They started a joint {{BLANK}} to build a luxury resort by the lake, because neither of them had enough money to pay for such a large and risky project alone.",
    "cn": "A：那兩位飯店老闆競爭了好幾年，為什麼決定合作？ B：他們展開了一項合資【事業】，要在湖邊興建豪華度假村，因為他們兩人都沒有足夠的錢獨自負擔這麼大型又有風險的計畫。"
  },
  {
    "word": "global",
    "pos": "adj.",
    "cn_def": "全球的",
    "en_def": "relating to the whole world",
    "sentence": "A: Why have the prices of our laptops gone up so much since the beginning of the summer? B: There is a {{BLANK}} shortage of computer chips, so factories in many countries are waiting for parts, and we have had to pay our suppliers much more to keep our production running.",
    "cn": "A：從夏天一開始，我們筆電的價格為什麼漲這麼多？ B：電腦晶片出現【全球性的】短缺，所以許多國家的工廠都在等零件，我們必須付給供應商更多錢才能維持生產。"
  },
  {
    "word": "takeover",
    "pos": "n.",
    "cn_def": "收購；接管",
    "en_def": "the act of getting control of a company by buying most of its shares",
    "sentence": "A: Why are so many employees at the bookstore chain worried about their jobs this month? B: A large online retailer has announced a {{BLANK}} of the company, and staff are afraid that the new owners will close some stores and move most of the business online.",
    "cn": "A：這個月連鎖書店的許多員工為什麼都在擔心自己的工作？ B：一家大型網路零售商宣布了對該公司的【收購】，員工擔心新老闆會關閉一些門市，並把大部分業務移到線上。"
  },
  {
    "word": "convert",
    "pos": "v.",
    "cn_def": "轉換；改建",
    "en_def": "to change something into a different form or use",
    "sentence": "A: What is the company going to do with the empty storage rooms on the fifth floor of our building? B: The managers have decided to {{BLANK}} them into a quiet lounge and two small meeting rooms, because staff often complain that there is nowhere to relax or make private phone calls.",
    "cn": "A：公司打算怎麼處理我們大樓五樓那些空著的儲藏室？ B：經理們決定把它們【改建】成一間安靜的休息室和兩間小會議室，因為員工常抱怨沒有地方可以放鬆或打私人電話。"
  },
  {
    "word": "admittedly",
    "pos": "adv.",
    "cn_def": "誠然；不可否認地",
    "en_def": "used when you agree that something is true, although it does not help your argument",
    "sentence": "A: Do you think we should still choose the supplier from Tainan, even though its prices are higher? B: {{BLANK}}, their products cost about ten percent more than the others, but they always deliver on time and their quality is excellent, so I believe they are worth the extra money.",
    "cn": "A：即使台南那家供應商價格比較高，你認為我們還是應該選它嗎？ B：【不可否認地】，他們的產品比其他家貴大約百分之十，但他們總是準時交貨，品質也非常好，所以我相信多花的錢是值得的。"
  },
  {
    "word": "commercially",
    "pos": "adv.",
    "cn_def": "商業上；在商業方面",
    "en_def": "in a way that is related to business and making money",
    "sentence": "A: Why did the company stop making the electric bicycle that won a design award two years ago? B: It was very popular with critics but was never {{BLANK}} successful, because it cost too much to produce, and most customers chose cheaper models from other brands instead.",
    "cn": "A：公司為什麼停產兩年前得過設計獎的那款電動腳踏車？ B：它很受評論家歡迎，但在【商業上】從未成功，因為生產成本太高，大部分顧客反而選擇其他品牌較便宜的車款。"
  },
  {
    "word": "welfare",
    "pos": "n.",
    "cn_def": "福利；福祉",
    "en_def": "the health, happiness and safety of a person or group",
    "sentence": "A: Why has the factory started offering free health checks and a counseling service for its workers? B: The new owners care a lot about employee {{BLANK}}, and they believe that staff who feel healthy and supported will stay longer, make fewer mistakes and work more efficiently.",
    "cn": "A：工廠為什麼開始為員工提供免費健康檢查和諮商服務？ B：新老闆非常重視員工【福利】，他們相信感到健康並受到支持的員工會待得更久、犯更少錯，工作也更有效率。"
  },
  {
    "word": "donate",
    "pos": "v.",
    "cn_def": "捐贈；捐款",
    "en_def": "to give money or goods to help a person or organization",
    "sentence": "A: What is the company planning to do for the local community during the holiday season this year? B: We will {{BLANK}} one percent of our December sales to a children's hospital, and many employees have also volunteered to collect toys and books for young patients.",
    "cn": "A：公司今年假期期間打算為當地社區做什麼？ B：我們會把十二月銷售額的百分之一【捐贈】給一家兒童醫院，許多員工也自願為年幼的病童收集玩具和書籍。"
  },
  {
    "word": "forbidden",
    "pos": "adj.",
    "cn_def": "被禁止的",
    "en_def": "not allowed",
    "sentence": "A: Can visitors take photos of the new production line when they tour the factory next week? B: No, photography is {{BLANK}} inside the building because our machines use secret technology, so guests must leave their phones at the reception desk before the tour begins.",
    "cn": "A：下週訪客參觀工廠時可以拍攝新的生產線嗎？ B：不行，大樓內【禁止】拍照，因為我們的機器使用機密技術，所以來賓必須在參觀開始前把手機寄放在接待櫃台。"
  },
  {
    "word": "bonus",
    "pos": "n.",
    "cn_def": "獎金；紅利",
    "en_def": "extra money added to your pay, usually as a reward",
    "sentence": "A: Why does everyone in the sales department look so cheerful this morning? B: The manager announced that every member of the team will receive a year-end {{BLANK}} equal to two months' salary, because we beat our sales target by thirty percent this year.",
    "cn": "A：業務部的每個人今天早上為什麼看起來這麼開心？ B：經理宣布團隊每位成員都會獲得相當於兩個月薪水的年終【獎金】，因為我們今年超越銷售目標百分之三十。"
  },
  {
    "word": "strategy",
    "pos": "n.",
    "cn_def": "策略；戰略",
    "en_def": "a plan for achieving a goal over a long period",
    "sentence": "A: Our sales in Europe dropped again last quarter, so what will the directors discuss at tomorrow's meeting? B: They will present a new marketing {{BLANK}} that focuses on online advertising and partnerships with local shops, and they hope it will win back young customers within a year.",
    "cn": "A：我們上一季在歐洲的銷售又下滑了，董事們明天的會議會討論什麼？ B：他們會提出一項新的行銷【策略】，重點放在線上廣告和與當地商店的合作，希望能在一年內贏回年輕顧客。"
  }
];

const MCQS = [
  {
    "q": "Mr. Wu has created more new products than anyone else in the firm. He is known as the company's leading _____.",
    "options": [
      "innovator",
      "welfare",
      "takeover",
      "manpower"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The streaming service changed how people watch movies at home. Many experts call it the biggest _____ in the entertainment industry.",
    "options": [
      "mentor",
      "disruptor",
      "bonus",
      "subsidiary"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "After leaving her office job, Amy opened her own bakery downtown. She is now a busy _____ with five employees.",
    "options": [
      "welfare",
      "strategy",
      "entrepreneur",
      "takeover"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The government offers low-interest loans to people who want to start businesses. It hopes to encourage _____ in rural areas.",
    "options": [
      "founder",
      "perk",
      "mentor",
      "entrepreneurship"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The small _____ has only eight employees. However, it has already received two million dollars from investors.",
    "options": [
      "welfare",
      "start-up",
      "manpower",
      "perk"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Ms. Huang started the company in 1998 with just two computers. As the _____, she still makes every important decision.",
    "options": [
      "founder",
      "subsidiary",
      "consultancy",
      "takeover"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The warehouse is short of _____ during the holiday season. We will hire twenty temporary workers to pack orders.",
    "options": [
      "innovator",
      "stake",
      "mentor",
      "manpower"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Each new engineer is paired with an experienced _____. This senior colleague gives advice and answers questions during the first year.",
    "options": [
      "takeover",
      "strategy",
      "mentor",
      "welfare"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Free parking is a nice _____ of working at this office. Most employees in the city have to pay for parking.",
    "options": [
      "perk",
      "founder",
      "innovator",
      "takeover"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The investment firm bought a fifteen percent _____ in the airline. It now has two seats on the board.",
    "options": [
      "mentor",
      "founder",
      "stake",
      "innovator"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Hundreds of people work at the _____'s head office in Tokyo. It also owns factories in five different countries.",
    "options": [
      "bonus",
      "corporation",
      "welfare",
      "perk"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The hotel chain set up a _____ to handle its travel business. The new company is fully owned by the parent firm.",
    "options": [
      "bonus",
      "welfare",
      "manpower",
      "subsidiary"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "We hired a small _____ to improve our website. Its experts suggested several changes that increased online sales.",
    "options": [
      "welfare",
      "entrepreneurship",
      "consultancy",
      "manpower"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Opening a restaurant is a risky business _____. Many new restaurants close within their first two years.",
    "options": [
      "venture",
      "mentor",
      "founder",
      "bonus"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The board rejected the _____ offer from its largest competitor. The directors want the company to stay independent.",
    "options": [
      "mentor",
      "innovator",
      "welfare",
      "takeover"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The union is asking for better rest areas and shorter shifts. It says the company must protect worker _____.",
    "options": [
      "founder",
      "welfare",
      "venture",
      "innovator"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Staff who reach their sales targets will receive a cash _____. The extra money will be paid in December.",
    "options": [
      "bonus",
      "founder",
      "consultancy",
      "innovator"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "Our current _____ is to focus on young customers. We will advertise mainly on social media next year.",
    "options": [
      "manpower",
      "welfare",
      "takeover",
      "strategy"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Good managers know how to _____ their staff. Praise and clear goals help employees work harder and stay longer.",
    "options": [
      "contravene",
      "motivate",
      "convert",
      "donate"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Selling the product without a safety label would _____ national law. The company could face a heavy fine.",
    "options": [
      "motivate",
      "donate",
      "contravene",
      "convert"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The company plans to _____ the old factory into modern offices. Work will begin next spring and take six months.",
    "options": [
      "donate",
      "motivate",
      "contravene",
      "convert"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Every year, our firm and its employees _____ thousands of dollars to local charities. They also volunteer at a food bank.",
    "options": [
      "convert",
      "donate",
      "contravene",
      "motivate"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Our new assistant is very _____ with technology. She fixed the printer and set up the video system in minutes.",
    "options": [
      "savvy",
      "forbidden",
      "multinational",
      "global"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Rising oil prices have caused problems for the _____ economy. Shipping costs have increased in almost every country.",
    "options": [
      "savvy",
      "forbidden",
      "global",
      "multinational"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Smoking is strictly _____ anywhere inside the factory. Workers who break this rule may lose their jobs.",
    "options": [
      "savvy",
      "forbidden",
      "global",
      "multinational"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "After the company's shares doubled in value, the founder's _____ rose to over a billion dollars. He is now very rich.",
    "options": [
      "perk",
      "mentor",
      "welfare",
      "net worth"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The driver _____ ignored the warning signs and parked in the loading area. He received a large fine from the city.",
    "options": [
      "rapidly",
      "commercially",
      "wilfully",
      "admittedly"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The number of online shoppers is growing _____. Many stores are now moving their business to the Internet.",
    "options": [
      "rapidly",
      "admittedly",
      "wilfully",
      "commercially"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "_____, the new office is far from the train station. However, the rent is much cheaper than in the city center.",
    "options": [
      "rapidly",
      "admittedly",
      "commercially",
      "wilfully"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The film won several awards from critics. However, it was not _____ successful and earned very little money.",
    "options": [
      "wilfully",
      "rapidly",
      "commercially",
      "admittedly"
    ],
    "answer": 2,
    "vocabIndex": 26
  }
];

const LOOKUP = {
  "innovator": {
    "pos": "n.",
    "en_def": "a person who introduces new ideas, methods or products",
    "cn_def": "創新者；革新者"
  },
  "disruptor": {
    "pos": "n.",
    "en_def": "a company or person that changes an industry with a completely new way of doing things",
    "cn_def": "顛覆者；破壞式創新者"
  },
  "entrepreneur": {
    "pos": "n.",
    "en_def": "a person who starts and runs their own business",
    "cn_def": "企業家；創業者"
  },
  "entrepreneurship": {
    "pos": "n.",
    "en_def": "the skills and activity of starting and running new businesses",
    "cn_def": "創業精神；創業"
  },
  "start-up": {
    "pos": "n.",
    "en_def": "a new, small company, often in technology",
    "cn_def": "新創公司"
  },
  "founder": {
    "pos": "n.",
    "en_def": "a person who starts a company or organization",
    "cn_def": "創辦人"
  },
  "manpower": {
    "pos": "n.",
    "en_def": "the number of workers available to do a job",
    "cn_def": "人力"
  },
  "mentor": {
    "pos": "n.",
    "en_def": "an experienced person who advises and helps someone with less experience",
    "cn_def": "導師；指導者"
  },
  "net worth": {
    "pos": "n.phr.",
    "en_def": "the total value of what a person or company owns, minus what they owe",
    "cn_def": "淨資產；身價"
  },
  "perk": {
    "pos": "n.",
    "en_def": "an extra benefit you get from your job in addition to your pay",
    "cn_def": "額外福利"
  },
  "stake": {
    "pos": "n.",
    "en_def": "a share in a business or its profits",
    "cn_def": "股份；投資額"
  },
  "motivate": {
    "pos": "v.",
    "en_def": "to make someone want to work hard or do something",
    "cn_def": "激勵；促使"
  },
  "savvy": {
    "pos": "adj.",
    "en_def": "having practical knowledge and good judgment about something",
    "cn_def": "精明的；在行的"
  },
  "contravene": {
    "pos": "v.",
    "en_def": "to break a law or rule",
    "cn_def": "違反；觸犯"
  },
  "scale something up": {
    "pos": "v.phr.",
    "en_def": "to make something larger in size or amount",
    "cn_def": "擴大（某事物的）規模"
  },
  "wilfully": {
    "pos": "adv.",
    "en_def": "deliberately, while knowing that it is wrong",
    "cn_def": "故意地；蓄意地"
  },
  "rapidly": {
    "pos": "adv.",
    "en_def": "very quickly",
    "cn_def": "迅速地"
  },
  "corporation": {
    "pos": "n.",
    "en_def": "a large company or group of companies",
    "cn_def": "大公司；企業"
  },
  "multinational": {
    "pos": "adj.",
    "en_def": "operating in several countries",
    "cn_def": "跨國的"
  },
  "subsidiary": {
    "pos": "n.",
    "en_def": "a company that is owned and controlled by a larger company",
    "cn_def": "子公司"
  },
  "consultancy": {
    "pos": "n.",
    "en_def": "a company that gives expert advice to other businesses",
    "cn_def": "顧問公司"
  },
  "venture": {
    "pos": "n.",
    "en_def": "a new business activity that involves risk",
    "cn_def": "（有風險的）新事業；投資事業"
  },
  "global": {
    "pos": "adj.",
    "en_def": "relating to the whole world",
    "cn_def": "全球的"
  },
  "takeover": {
    "pos": "n.",
    "en_def": "the act of getting control of a company by buying most of its shares",
    "cn_def": "收購；接管"
  },
  "convert": {
    "pos": "v.",
    "en_def": "to change something into a different form or use",
    "cn_def": "轉換；改建"
  },
  "admittedly": {
    "pos": "adv.",
    "en_def": "used when you agree that something is true, although it does not help your argument",
    "cn_def": "誠然；不可否認地"
  },
  "commercially": {
    "pos": "adv.",
    "en_def": "in a way that is related to business and making money",
    "cn_def": "商業上；在商業方面"
  },
  "welfare": {
    "pos": "n.",
    "en_def": "the health, happiness and safety of a person or group",
    "cn_def": "福利；福祉"
  },
  "donate": {
    "pos": "v.",
    "en_def": "to give money or goods to help a person or organization",
    "cn_def": "捐贈；捐款"
  },
  "forbidden": {
    "pos": "adj.",
    "en_def": "not allowed",
    "cn_def": "被禁止的"
  },
  "bonus": {
    "pos": "n.",
    "en_def": "extra money added to your pay, usually as a reward",
    "cn_def": "獎金；紅利"
  },
  "strategy": {
    "pos": "n.",
    "en_def": "a plan for achieving a goal over a long period",
    "cn_def": "策略；戰略"
  }
};

const EXTRA_GLOSSES = {};
