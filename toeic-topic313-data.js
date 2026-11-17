// Topic 313 Quiz Data: Promise 承諾
// Source word list: https://www.examword.com/group-topic/promise — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T313 - Promise 承諾",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "pledge",
    "pos": "v.",
    "cn_def": "承諾給予；保證",
    "en_def": "to make a serious, formal promise to give or do something",
    "sentence": "A: Has the new software company decided how it will support the city's charity run next month, since the organizers are still looking for sponsors? B: Yes, the board voted yesterday to {{BLANK}} five thousand dollars to the event, and several employees have also agreed to volunteer at the water stations on race day.",
    "cn": "A：那家新的軟體公司決定好要如何支持下個月的城市慈善路跑了嗎？主辦單位還在找贊助商。 B：決定了，董事會昨天投票通過要【承諾捐出】五千美元給這個活動，而且好幾位員工也同意在比賽當天到補水站當志工。"
  },
  {
    "word": "vow",
    "pos": "v.",
    "cn_def": "發誓；立誓",
    "en_def": "to make a very serious promise to yourself or others",
    "sentence": "A: After the shipping mistake last quarter cost us our biggest client, what did the new operations director say at the staff meeting this morning? B: She openly admitted that the department had failed, and she stood up to {{BLANK}} in front of everyone that she would personally check every order until our delivery record improves.",
    "cn": "A：上一季的出貨錯誤讓我們失去了最大的客戶，新的營運總監今天早上在員工會議上說了什麼？ B：她公開承認部門的失誤，並站起來當著大家的面【發誓】，在我們的交貨紀錄改善之前，她會親自檢查每一筆訂單。"
  },
  {
    "word": "guarantee",
    "pos": "v.",
    "cn_def": "保證",
    "en_def": "to promise that something will happen or be true",
    "sentence": "A: Our customers keep asking whether the new washing machines will arrive before the holiday sale, so what should I tell them on the phone? B: Tell them the warehouse can {{BLANK}} delivery within three working days, and if anything goes wrong, we will give them a full refund without any extra questions.",
    "cn": "A：我們的顧客一直問新洗衣機會不會在假期特賣之前送到，我在電話裡該怎麼跟他們說？ B：告訴他們倉庫可以【保證】在三個工作天內送達，如果有任何問題，我們會直接全額退款，不會多問。"
  },
  {
    "word": "assure",
    "pos": "v.",
    "cn_def": "向…保證；使確信",
    "en_def": "to tell someone confidently that something is true so they do not worry",
    "sentence": "A: The client from Osaka seemed really worried about the budget during the video call, didn't she? B: Yes, so after the meeting I sent her a long email to {{BLANK}} her that the final price will not change, even if the cost of materials goes up next spring.",
    "cn": "A：大阪那位客戶在視訊會議時看起來真的很擔心預算，對吧？ B：對，所以會後我寄了一封長長的電子郵件，向她【保證】即使明年春天材料成本上漲，最終價格也不會改變。"
  },
  {
    "word": "assurance",
    "pos": "n.",
    "cn_def": "保證；擔保",
    "en_def": "a promise that makes someone feel less worried",
    "sentence": "A: Why did the bank finally approve the loan for our new bakery after rejecting it twice last year? B: The owner of the building gave the loan officer a written {{BLANK}} that our rent would stay the same for five years, which made our business plan look much safer.",
    "cn": "A：去年拒絕了兩次之後，銀行為什麼最後批准了我們新麵包店的貸款？ B：大樓的房東給了貸款專員一份書面【保證】，表示我們的租金五年內都不會調漲，這讓我們的營運計畫看起來安全多了。"
  },
  {
    "word": "commitment",
    "pos": "n.",
    "cn_def": "承諾；投入",
    "en_def": "a promise to give your time, effort, or support to something",
    "sentence": "A: How did our small design studio manage to win the contract with the hotel group, when so many larger agencies were competing for it? B: Their managers told us they were impressed by our long-term {{BLANK}} to quality, because we have never missed a deadline in ten years.",
    "cn": "A：這麼多大型公司都在搶，我們這間小設計工作室是怎麼拿下那個飯店集團的合約的？ B：他們的經理告訴我們，他們很欣賞我們對品質的長期【承諾】，因為我們十年來從未錯過任何截止日期。"
  },
  {
    "word": "commit",
    "pos": "v.",
    "cn_def": "承諾；投入",
    "en_def": "to promise to give your time, money, or effort to something",
    "sentence": "A: Are you sure you can join the planning committee for the trade fair, since you already have so many customer visits this month? B: I talked to my supervisor, and I can {{BLANK}} two afternoons a week to the fair, as long as someone else covers my phone calls.",
    "cn": "A：你確定你能加入貿易展的籌備委員會嗎？你這個月已經有那麼多客戶要拜訪了。 B：我跟主管談過了，只要有人幫我接電話，我每週可以【投入】兩個下午在展覽上。"
  },
  {
    "word": "swear",
    "pos": "v.",
    "cn_def": "發誓；宣誓",
    "en_def": "to promise very seriously that something is true or that you will do something",
    "sentence": "A: Somebody told our competitor about the new product before the launch, so how will the director find out who did it? B: She is talking to everyone on the team one by one, and each person has to {{BLANK}} that they did not share any secret information outside the office.",
    "cn": "A：有人在發表會之前把新產品的消息告訴了我們的競爭對手，總監要怎麼查出是誰做的？ B：她正在一個一個找團隊成員談話，每個人都必須【發誓】自己沒有把任何機密資訊洩漏到公司外面。"
  },
  {
    "word": "oath",
    "pos": "n.",
    "cn_def": "誓言；宣誓",
    "en_def": "a formal promise, often made in public or in court",
    "sentence": "A: Why did the new city mayor have to stand in front of the crowd with her hand raised during yesterday's ceremony at the town hall? B: It is a tradition here, so she took an {{BLANK}} to serve the people honestly before she could officially start her four-year term.",
    "cn": "A：昨天市政廳的典禮上，新市長為什麼要舉著手站在群眾面前？ B：這是這裡的傳統，她必須先【宣誓】會誠實為民服務，才能正式開始她四年的任期。"
  },
  {
    "word": "contract",
    "pos": "n.",
    "cn_def": "合約；契約",
    "en_def": "a written legal agreement between people or companies",
    "sentence": "A: Have the lawyers from the supplier finished reviewing the agreement for next year's coffee bean orders yet? B: Yes, they asked for two small changes about payment dates, and if our finance team accepts them, both sides will sign the {{BLANK}} on Friday afternoon.",
    "cn": "A：供應商的律師審完明年咖啡豆訂單的協議了嗎？ B：審完了，他們要求修改兩個關於付款日期的小地方，如果我們的財務團隊接受，雙方就會在星期五下午簽署【合約】。"
  },
  {
    "word": "obligation",
    "pos": "n.",
    "cn_def": "義務；責任",
    "en_def": "something you must do because of a law, rule, or promise",
    "sentence": "A: Do we really have to give the customer a refund, even though she used the coffee machine for almost two months before complaining? B: Unfortunately yes, because under our warranty policy we have a legal {{BLANK}} to repair or replace any machine that stops working within one year.",
    "cn": "A：那位顧客用了那台咖啡機將近兩個月才來抱怨，我們真的必須退款給她嗎？ B：很遺憾，是的，因為根據我們的保固政策，對於一年內故障的機器，我們有修理或更換的法律【義務】。"
  },
  {
    "word": "duty",
    "pos": "n.",
    "cn_def": "職責；責任",
    "en_def": "something that is part of your job or that you must do",
    "sentence": "A: The new receptionist looks a little confused this morning, so has anyone explained what she should do when visitors arrive? B: I showed her yesterday that her main {{BLANK}} is to greet every guest, check their name on the list, and give them a visitor card before they go upstairs.",
    "cn": "A：新來的接待員今天早上看起來有點困惑，有人跟她解釋訪客來時該做什麼嗎？ B：我昨天跟她說明過，她的主要【職責】是接待每位訪客、核對名單上的名字，並在他們上樓前發給他們訪客證。"
  },
  {
    "word": "faithful",
    "pos": "adj.",
    "cn_def": "忠實的；忠誠的",
    "en_def": "staying loyal and keeping your promises over a long time",
    "sentence": "A: Why does the owner of that small noodle shop always give Mr. Lin a free drink whenever he comes in for lunch? B: Because he has been a {{BLANK}} customer for over twenty years, and he even helped the owner find new staff when the shop almost closed.",
    "cn": "A：為什麼那家小麵店的老闆每次林先生來吃午餐，都會送他一杯免費飲料？ B：因為他已經當了二十多年的【忠實】顧客，甚至在麵店差點倒閉時還幫老闆找到新員工。"
  },
  {
    "word": "loyal",
    "pos": "adj.",
    "cn_def": "忠誠的；忠實的",
    "en_def": "always supporting a person, company, or idea",
    "sentence": "A: Our coffee chain is losing customers to the new café across the street, so what can we do to stop them from leaving? B: Let's start a points card that gives people a free drink after ten visits, because rewards usually keep shoppers {{BLANK}} even when prices are higher.",
    "cn": "A：我們的咖啡連鎖店的客人一直流向對街新開的咖啡館，我們該怎麼做才能留住他們？ B：我們來推出集點卡，來店十次就送一杯免費飲料，因為即使價格比較高，獎勵通常也能讓顧客保持【忠誠】。"
  },
  {
    "word": "trust",
    "pos": "v.",
    "cn_def": "信任；相信",
    "en_def": "to believe that someone is honest and will not harm you",
    "sentence": "A: Why did the company choose Daniel to handle the cash at the front desk during the busy holiday season? B: He has worked here for six years without a single mistake, so the managers fully {{BLANK}} him with money and with important customer information.",
    "cn": "A：公司為什麼選丹尼爾在忙碌的假期期間負責櫃檯的現金？ B：他在這裡工作六年從沒出過任何差錯，所以經理們完全【信任】他處理金錢和重要的客戶資料。"
  },
  {
    "word": "reliable",
    "pos": "adj.",
    "cn_def": "可靠的",
    "en_def": "able to be depended on to do what you expect",
    "sentence": "A: The printer in the marketing department broke down again right before the client presentation this morning, didn't it? B: Yes, so the office manager has finally agreed to buy a more {{BLANK}} model, even though it costs twice as much as the old one.",
    "cn": "A：行銷部的印表機今天早上在客戶簡報前又故障了，對吧？ B：對，所以辦公室經理終於同意買一台更【可靠】的機型，雖然價格是舊機的兩倍。"
  },
  {
    "word": "honest",
    "pos": "adj.",
    "cn_def": "誠實的；坦白的",
    "en_def": "telling the truth and not cheating",
    "sentence": "A: The customer wants to know why her order is two weeks late, so should I just say the factory had a small problem? B: No, it is better to be completely {{BLANK}} with her and explain that we ran out of materials, then offer her a discount on her next purchase.",
    "cn": "A：那位顧客想知道她的訂單為什麼遲了兩週，我是不是就說工廠出了點小問題就好？ B：不，最好對她完全【誠實】，解釋我們的材料用完了，然後提供她下次購物的折扣。"
  },
  {
    "word": "sincere",
    "pos": "adj.",
    "cn_def": "真誠的；誠摯的",
    "en_def": "truly meant, not pretended",
    "sentence": "A: The hotel guest was really angry about the noise from the wedding party last night, so how did the manager calm him down? B: She wrote him a {{BLANK}} apology letter by hand, gave him a free night for his next visit, and moved him to a quieter room on the top floor.",
    "cn": "A：那位飯店房客對昨晚婚宴的噪音非常生氣，經理是怎麼讓他平靜下來的？ B：她親手寫了一封【真誠的】道歉信給他，送他下次入住的免費一晚，並幫他換到頂樓比較安靜的房間。"
  },
  {
    "word": "bind",
    "pos": "v.",
    "cn_def": "約束；使受（法律）約束",
    "en_def": "to force someone to keep an agreement by law or by a promise",
    "sentence": "A: If we sign this agreement with the cleaning company today, can we still change to a cheaper service later in the year? B: Not easily, because the terms {{BLANK}} us to stay with them for at least twelve months, and we would have to pay a large fee to leave early.",
    "cn": "A：如果我們今天和清潔公司簽這份協議，今年稍後還能換成比較便宜的服務嗎？ B：不容易，因為條款【約束】我們至少要跟他們合作十二個月，提早解約的話要付一大筆費用。"
  },
  {
    "word": "undertake",
    "pos": "v.",
    "cn_def": "承擔；從事",
    "en_def": "to agree to be responsible for a job or task and start it",
    "sentence": "A: The old factory building needs a new roof, new windows, and new wiring, so who is going to manage all of that work? B: A local construction firm has agreed to {{BLANK}} the whole renovation, and they promised to finish everything before the rainy season starts in May.",
    "cn": "A：舊工廠大樓需要新屋頂、新窗戶和新的電線，誰要負責管理所有這些工程？ B：一家當地的營造公司已同意【承擔】整個翻修工程，並答應在五月雨季開始前完成所有工作。"
  },
  {
    "word": "reassure",
    "pos": "v.",
    "cn_def": "使安心；安慰",
    "en_def": "to make someone feel less worried",
    "sentence": "A: Many of the factory workers are nervous after hearing rumors that the company might close the plant next year. B: The director will visit the plant on Monday to {{BLANK}} them that there are no plans to close it, and she will also answer their questions in person.",
    "cn": "A：很多工廠員工聽到公司明年可能關廠的謠言後都很緊張。 B：總監星期一會到工廠【讓他們安心】，告訴他們沒有關廠的計畫，她也會親自回答大家的問題。"
  },
  {
    "word": "keep",
    "pos": "v.",
    "cn_def": "遵守；信守",
    "en_def": "to do what you said you would do, as in keeping a promise",
    "sentence": "A: Our supplier said the new parts would arrive before Friday, but do you think they will actually deliver on time this time? B: I think so, because their sales manager has always managed to {{BLANK}} her word with us, even during last year's shipping crisis.",
    "cn": "A：我們的供應商說新零件會在星期五前送到，你覺得他們這次真的會準時交貨嗎？ B：我想會，因為他們的業務經理對我們一向都能【信守】承諾，連去年的運輸危機期間也一樣。"
  },
  {
    "word": "break",
    "pos": "v.",
    "cn_def": "違背（承諾）；打破",
    "en_def": "to fail to do what you promised",
    "sentence": "A: Why is the customer still so upset with our delivery company, when the package finally arrived this morning? B: Our driver told her it would come before her party last night, and she believes no company should ever {{BLANK}} a promise to a customer like that, so now she wants a full refund of the shipping fee.",
    "cn": "A：包裹今天早上終於送到了，為什麼那位顧客對我們的貨運公司還這麼不滿？ B：我們的司機跟她說昨晚派對前就會送到，她認為任何公司都不應該這樣【違背】對顧客的承諾，所以現在她要求全額退還運費。"
  },
  {
    "word": "fulfill",
    "pos": "v.",
    "cn_def": "履行；實現；完成",
    "en_def": "to do what you promised or what is required",
    "sentence": "A: The factory received twice as many orders as usual this month, so can we really finish all of them before the end of December? B: We hired twenty temporary workers and added a night shift, so I am confident we can {{BLANK}} every order on time and keep our biggest customers happy.",
    "cn": "A：工廠這個月接到的訂單是平常的兩倍，我們真的能在十二月底前全部完成嗎？ B：我們雇了二十名臨時工並增加了夜班，所以我有信心能準時【履行】每一筆訂單，讓我們最大的客戶滿意。"
  },
  {
    "word": "expectation",
    "pos": "n.",
    "cn_def": "期望；預期",
    "en_def": "a belief that something will happen or should happen",
    "sentence": "A: Why did the new restaurant get so many bad online reviews in its first week, even though the food was actually quite good? B: Their advertisements promised a luxury experience, so guests arrived with a very high {{BLANK}}, and the slow service and small dining room disappointed most of them.",
    "cn": "A：那家新餐廳開幕第一週為什麼得到這麼多負評？食物其實還不錯啊。 B：他們的廣告保證有奢華的體驗，所以客人來時抱著非常高的【期望】，結果緩慢的服務和狹小的用餐空間讓大多數人失望。"
  },
  {
    "word": "hope",
    "pos": "n.",
    "cn_def": "希望",
    "en_def": "a feeling that something good may happen",
    "sentence": "A: The small bookstore downtown has been losing money for three years, so why doesn't the owner just close it? B: A large café chain has offered to share the space with her, which has given her new {{BLANK}} that the shop can become profitable again by next summer.",
    "cn": "A：市中心那家小書店已經虧損三年了，老闆為什麼不乾脆把它收掉？ B：一家大型連鎖咖啡店提議跟她共用空間，這讓她燃起新的【希望】，相信書店明年夏天前就能再度獲利。"
  },
  {
    "word": "dedication",
    "pos": "n.",
    "cn_def": "奉獻；投入",
    "en_def": "hard work and strong support for a task, goal, or group of people",
    "sentence": "A: Why did Ms. Wang receive the employee of the year award at the company dinner last night? B: Her {{BLANK}} to our customers is amazing, because she often stays late to answer their emails and she even visited a client in hospital during her vacation.",
    "cn": "A：王小姐為什麼在昨晚的公司晚宴上獲得年度最佳員工獎？ B：她對客戶的【奉獻】令人驚嘆，她常常加班回覆客戶的電子郵件，甚至在休假期間還去醫院探望一位客戶。"
  },
  {
    "word": "guarantor",
    "pos": "n.",
    "cn_def": "保證人",
    "en_def": "a person who promises to pay if another person cannot",
    "sentence": "A: The landlord says I cannot rent the apartment near the office because I have only been working here for two months. B: You could ask your parents or a close relative to act as your {{BLANK}}, since then they would pay the rent if you ever failed to pay it yourself.",
    "cn": "A：房東說我才在這裡工作兩個月，所以不能租公司附近那間公寓。 B：你可以請你的父母或近親當你的【保證人】，這樣如果你哪天付不出房租，他們就會替你付。"
  },
  {
    "word": "credible",
    "pos": "adj.",
    "cn_def": "可信的；可靠的",
    "en_def": "able to be believed or trusted",
    "sentence": "A: Should we include the sales figures from that free website in our report for the board meeting next week? B: I would not use them, because the site never explains where its data comes from, so let's find a more {{BLANK}} source, such as the government's official trade statistics.",
    "cn": "A：我們下週董事會議的報告要放那個免費網站上的銷售數據嗎？ B：我不會用，因為那個網站從來不說明資料來源，我們還是找一個更【可信的】來源吧，例如政府的官方貿易統計。"
  }
];

const MCQS = [
  {
    "q": "Several local businesses have agreed to _____ money to the new children's hospital. Their donations will help pay for modern equipment.",
    "options": [
      "pledge",
      "swear",
      "bind",
      "reassure"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "After losing the union election, the manager did not give up. She decided to publicly _____ to fight even harder for workers' rights next year.",
    "options": [
      "assure",
      "reassure",
      "vow",
      "fulfill"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Our online store can _____ that every order placed before noon will be shipped the same day. This policy has attracted many new customers.",
    "options": [
      "commit",
      "guarantee",
      "bind",
      "keep"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The airline staff tried to _____ passengers that the delay would be short. Unfortunately, the flight left three hours late.",
    "options": [
      "vow",
      "pledge",
      "fulfill",
      "assure"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The manager gave her team her _____ that nobody would lose their job. Everyone felt much calmer after the meeting.",
    "options": [
      "obligation",
      "expectation",
      "assurance",
      "dedication"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The company has made a clear _____ to reduce plastic waste by half. Recycling bins have already been placed on every floor.",
    "options": [
      "commitment",
      "assurance",
      "guarantor",
      "expectation"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Before you agree to lead the project, think carefully. You will need to _____ at least ten hours a week to it.",
    "options": [
      "fulfill",
      "reassure",
      "swear",
      "commit"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "In court, every witness must _____ to tell the truth. Lying after that can lead to serious punishment.",
    "options": [
      "assure",
      "swear",
      "fulfill",
      "reassure"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "New doctors in many countries take an _____ to protect their patients. This tradition is hundreds of years old.",
    "options": [
      "oath",
      "obligation",
      "assurance",
      "expectation"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The builder signed a _____ to finish the new library by June. If he is late, he must pay a fine.",
    "options": [
      "duty",
      "hope",
      "dedication",
      "contract"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Employers have an _____ to provide a safe working environment. Workers should report any dangerous equipment immediately.",
    "options": [
      "assurance",
      "oath",
      "obligation",
      "expectation"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Checking the fire alarms every month is the _____ of the building manager. He records the results in a notebook.",
    "options": [
      "hope",
      "duty",
      "oath",
      "contract"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Our grandmother has been a _____ supporter of the local theater for decades. She has never missed a single new show.",
    "options": [
      "credible",
      "accurate",
      "guilty",
      "faithful"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Staff who feel respected usually stay _____ to their company for many years. They rarely look for jobs elsewhere.",
    "options": [
      "loyal",
      "credible",
      "reliable",
      "sincere"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Customers will only _____ an online shop if their payment details are kept safe. Strong security is therefore essential.",
    "options": [
      "commit",
      "trust",
      "undertake",
      "fulfill"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "We need a _____ delivery service for our fresh flowers. Late deliveries could easily ruin an entire wedding for our clients.",
    "options": [
      "sincere",
      "faithful",
      "reliable",
      "honest"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The cashier returned the lost wallet with all the money still inside. Her _____ behavior greatly impressed the store manager.",
    "options": [
      "honest",
      "credible",
      "tedious",
      "chaotic"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Please accept our _____ apologies for the delay in shipping your order. We will refund your delivery fee today.",
    "options": [
      "credible",
      "sincere",
      "reliable",
      "loyal"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Once you sign this document, it will legally _____ you to its terms. Please read every page carefully before signing.",
    "options": [
      "assure",
      "reassure",
      "trust",
      "bind"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Our team is too small to _____ such a large research project alone. We will need help from another department.",
    "options": [
      "reassure",
      "swear",
      "undertake",
      "trust"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The pilot spoke calmly to _____ the nervous passengers during the storm. Most of them stopped worrying after his announcement.",
    "options": [
      "pledge",
      "reassure",
      "bind",
      "fulfill"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "A good leader always tries to _____ her promises to the team. Otherwise, employees will stop believing what she says.",
    "options": [
      "keep",
      "bind",
      "assure",
      "reassure"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "If you _____ your promise to the client again, we may lose the account. Please deliver the report by Friday.",
    "options": [
      "bind",
      "trust",
      "break",
      "commit"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The new mayor promised to _____ all of her campaign promises within four years. So far, she has built two new parks.",
    "options": [
      "reassure",
      "bind",
      "trust",
      "fulfill"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Sales this year went far beyond our original _____. The board has decided to give every employee a holiday bonus.",
    "options": [
      "expectation",
      "obligation",
      "dedication",
      "assurance"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The new trade agreement has given local farmers fresh _____ for the future. They expect to sell more fruit overseas.",
    "options": [
      "duty",
      "oath",
      "hope",
      "guarantor"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The nurse was praised for her _____ to her patients. She worked extra hours during the flu season without complaining.",
    "options": [
      "expectation",
      "guarantor",
      "oath",
      "dedication"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The bank will not approve the student loan without a _____. Her uncle agreed to sign the papers for her.",
    "options": [
      "duty",
      "guarantor",
      "hope",
      "dedication"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The reporter refused to publish the story without a _____ witness. Nobody else could confirm what had really happened.",
    "options": [
      "faithful",
      "sincere",
      "credible",
      "loyal"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The hotel cannot _____ a sea view for every room during the festival. Guests who want one should book early.",
    "options": [
      "fulfill",
      "guarantee",
      "undertake",
      "reassure"
    ],
    "answer": 1,
    "vocabIndex": 2
  }
];

const LOOKUP = {
  "pledge": {
    "pos": "v.",
    "en_def": "to make a serious, formal promise to give or do something",
    "cn_def": "承諾給予；保證"
  },
  "vow": {
    "pos": "v.",
    "en_def": "to make a very serious promise to yourself or others",
    "cn_def": "發誓；立誓"
  },
  "guarantee": {
    "pos": "v.",
    "en_def": "to promise that something will happen or be true",
    "cn_def": "保證"
  },
  "assure": {
    "pos": "v.",
    "en_def": "to tell someone confidently that something is true so they do not worry",
    "cn_def": "向…保證；使確信"
  },
  "assurance": {
    "pos": "n.",
    "en_def": "a promise that makes someone feel less worried",
    "cn_def": "保證；擔保"
  },
  "commitment": {
    "pos": "n.",
    "en_def": "a promise to give your time, effort, or support to something",
    "cn_def": "承諾；投入"
  },
  "commit": {
    "pos": "v.",
    "en_def": "to promise to give your time, money, or effort to something",
    "cn_def": "承諾；投入"
  },
  "swear": {
    "pos": "v.",
    "en_def": "to promise very seriously that something is true or that you will do something",
    "cn_def": "發誓；宣誓"
  },
  "oath": {
    "pos": "n.",
    "en_def": "a formal promise, often made in public or in court",
    "cn_def": "誓言；宣誓"
  },
  "contract": {
    "pos": "n.",
    "en_def": "a written legal agreement between people or companies",
    "cn_def": "合約；契約"
  },
  "obligation": {
    "pos": "n.",
    "en_def": "something you must do because of a law, rule, or promise",
    "cn_def": "義務；責任"
  },
  "duty": {
    "pos": "n.",
    "en_def": "something that is part of your job or that you must do",
    "cn_def": "職責；責任"
  },
  "faithful": {
    "pos": "adj.",
    "en_def": "staying loyal and keeping your promises over a long time",
    "cn_def": "忠實的；忠誠的"
  },
  "loyal": {
    "pos": "adj.",
    "en_def": "always supporting a person, company, or idea",
    "cn_def": "忠誠的；忠實的"
  },
  "trust": {
    "pos": "v.",
    "en_def": "to believe that someone is honest and will not harm you",
    "cn_def": "信任；相信"
  },
  "reliable": {
    "pos": "adj.",
    "en_def": "able to be depended on to do what you expect",
    "cn_def": "可靠的"
  },
  "honest": {
    "pos": "adj.",
    "en_def": "telling the truth and not cheating",
    "cn_def": "誠實的；坦白的"
  },
  "sincere": {
    "pos": "adj.",
    "en_def": "truly meant, not pretended",
    "cn_def": "真誠的；誠摯的"
  },
  "bind": {
    "pos": "v.",
    "en_def": "to force someone to keep an agreement by law or by a promise",
    "cn_def": "約束；使受（法律）約束"
  },
  "undertake": {
    "pos": "v.",
    "en_def": "to agree to be responsible for a job or task and start it",
    "cn_def": "承擔；從事"
  },
  "reassure": {
    "pos": "v.",
    "en_def": "to make someone feel less worried",
    "cn_def": "使安心；安慰"
  },
  "keep": {
    "pos": "v.",
    "en_def": "to do what you said you would do, as in keeping a promise",
    "cn_def": "遵守；信守"
  },
  "break": {
    "pos": "v.",
    "en_def": "to fail to do what you promised",
    "cn_def": "違背（承諾）；打破"
  },
  "fulfill": {
    "pos": "v.",
    "en_def": "to do what you promised or what is required",
    "cn_def": "履行；實現；完成"
  },
  "expectation": {
    "pos": "n.",
    "en_def": "a belief that something will happen or should happen",
    "cn_def": "期望；預期"
  },
  "hope": {
    "pos": "n.",
    "en_def": "a feeling that something good may happen",
    "cn_def": "希望"
  },
  "dedication": {
    "pos": "n.",
    "en_def": "hard work and strong support for a task, goal, or group of people",
    "cn_def": "奉獻；投入"
  },
  "guarantor": {
    "pos": "n.",
    "en_def": "a person who promises to pay if another person cannot",
    "cn_def": "保證人"
  },
  "credible": {
    "pos": "adj.",
    "en_def": "able to be believed or trusted",
    "cn_def": "可信的；可靠的"
  }
};

const EXTRA_GLOSSES = {};
