// Topic 418 Quiz Data: Trust 信任
// Source word list: https://www.examword.com/group-topic/trust — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T418 - Trust 信任",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "believe",
    "pos": "v.",
    "cn_def": "相信",
    "en_def": "to think that something is true",
    "sentence": "A: Our new supplier says the shipment will arrive before Friday, but they missed the last two deadlines, so should we plan a backup order just in case? B: I {{BLANK}} them this time because their manager called me personally, explained the problem at the port, and sent the tracking number this morning.",
    "cn": "A：我們的新供應商說貨會在星期五前送到，但他們錯過了前兩次的期限，所以我們是否該準備一份備用訂單以防萬一？ B：這次我【相信】他們，因為他們的經理親自打電話給我，解釋了港口的問題，而且今天早上寄來了追蹤號碼。"
  },
  {
    "word": "confidence",
    "pos": "n.",
    "cn_def": "信心；信任",
    "en_def": "the feeling that you can trust someone or something",
    "sentence": "A: Why did the board decide to give the marketing team a bigger budget next year, even though sales were a little slow in the spring? B: The team showed great results in the autumn campaign, so the directors have full {{BLANK}} in their plans and want them to expand into Asia.",
    "cn": "A：為什麼董事會決定明年給行銷團隊更多預算，即使春季的銷售有點慢？ B：這個團隊在秋季活動中表現出色，所以董事們對他們的計畫有十足的【信心】，並希望他們擴展到亞洲市場。"
  },
  {
    "word": "rely",
    "pos": "v.",
    "cn_def": "依賴；信賴",
    "en_def": "to need and trust someone or something",
    "sentence": "A: Since our office assistant is on vacation for two weeks, who will handle the meeting schedules and the visitor badges at the front desk? B: We can {{BLANK}} on Kevin from the sales department, because he did the same job last summer and never made a single mistake.",
    "cn": "A：既然我們的辦公室助理要休假兩週，誰來處理會議行程和前台的訪客證？ B：我們可以【依靠】業務部的凱文，因為他去年夏天做過同樣的工作，而且從沒出過一次錯。"
  },
  {
    "word": "depend",
    "pos": "v.",
    "cn_def": "依靠；取決於",
    "en_def": "to need someone or something for help or support",
    "sentence": "A: Why is the factory so worried about the new trade rules that the government announced last week, when most of our customers are local? B: We {{BLANK}} on one company overseas for almost all of our raw materials, so any delay at the border could stop our production line.",
    "cn": "A：為什麼工廠那麼擔心政府上週宣布的新貿易規定，明明我們大部分客戶都是本地的？ B：我們幾乎所有的原料都【依靠】一家海外公司，所以邊境的任何延誤都可能讓我們的生產線停擺。"
  },
  {
    "word": "faith",
    "pos": "n.",
    "cn_def": "信任；信念",
    "en_def": "strong trust in someone or something",
    "sentence": "A: The project is three weeks behind schedule, and the client keeps sending angry emails, so are you going to replace the team leader? B: No, I still have {{BLANK}} in her ability, because she has solved bigger problems before and the delays were caused by the weather, not by her.",
    "cn": "A：這個專案落後進度三週，客戶一直寄來憤怒的電子郵件，所以你要換掉團隊主管嗎？ B：不，我仍然對她的能力有【信心】，因為她以前解決過更大的問題，而且延誤是天氣造成的，不是她的錯。"
  },
  {
    "word": "honesty",
    "pos": "n.",
    "cn_def": "誠實",
    "en_def": "the quality of telling the truth",
    "sentence": "A: Why did you hire the second candidate instead of the first one, who had more experience and a degree from a famous university? B: During the interview she admitted a mistake from her last job and explained what she learned, and I really value that kind of {{BLANK}} in an employee.",
    "cn": "A：你為什麼錄取第二位應徵者而不是第一位？第一位經驗更多，還有名校的學位。 B：面試時她坦承了上一份工作犯過的錯誤，並說明她學到了什麼，我非常重視員工有這樣的【誠實】。"
  },
  {
    "word": "truth",
    "pos": "n.",
    "cn_def": "真相；事實",
    "en_def": "the real facts about something",
    "sentence": "A: Customers on social media are saying our new phone battery can catch fire, and the news reporters keep calling the office for a comment. B: We should tell them the {{BLANK}} right away, explain the results of our safety tests, and offer a free check at every store to calm people down.",
    "cn": "A：社群媒體上的顧客說我們新手機的電池會起火，新聞記者一直打電話到辦公室要求回應。 B：我們應該馬上告訴他們【真相】，說明我們安全測試的結果，並在每家門市提供免費檢查來安撫大家。"
  },
  {
    "word": "loyalty",
    "pos": "n.",
    "cn_def": "忠誠",
    "en_def": "the quality of staying faithful to a person, group or brand",
    "sentence": "A: Why does the coffee chain give a free drink after every ten purchases, when it already has the busiest shops in the city center? B: The free drinks build customer {{BLANK}}, so people keep coming back instead of trying the new cafés that open on the same street every month.",
    "cn": "A：為什麼這家連鎖咖啡店每買十杯就送一杯，明明它在市中心已經有最熱門的店面了？ B：免費飲料能建立顧客【忠誠度】，讓人們持續回來，而不是去試每個月在同一條街上新開的咖啡館。"
  },
  {
    "word": "promise",
    "pos": "n.",
    "cn_def": "承諾",
    "en_def": "a statement that you will surely do something",
    "sentence": "A: The client is upset because the designs were supposed to be ready yesterday, and now she wants to talk to the manager directly. B: I made a {{BLANK}} to send everything by noon today, so I will finish the last two pages now and call her as soon as they are ready.",
    "cn": "A：客戶很不高興，因為設計稿昨天就該完成，現在她想直接跟經理談。 B：我做了【承諾】今天中午前把所有東西寄出，所以我現在就完成最後兩頁，一好就打電話給她。"
  },
  {
    "word": "keep",
    "pos": "v.",
    "cn_def": "遵守；保持",
    "en_def": "to do what you said you would do; to continue to have something",
    "sentence": "A: The new hotel manager told the staff that every guest complaint will get an answer within one hour, but can we really do that on busy weekends? B: If we want guests to trust us, we have to {{BLANK}} our word, so I will add two more people to the front desk on Saturdays.",
    "cn": "A：新的飯店經理告訴員工，每一則客訴都會在一小時內得到回覆，但我們在忙碌的週末真的做得到嗎？ B：如果我們想讓客人信任我們，就必須【遵守】我們的承諾，所以我會在週六多安排兩個人到櫃檯。"
  },
  {
    "word": "respect",
    "pos": "n.",
    "cn_def": "尊重；敬重",
    "en_def": "a feeling of admiring someone for their good qualities",
    "sentence": "A: Why do the younger engineers always ask Mr. Lin for advice, even though he is not their direct supervisor? B: He has worked here for twenty years, he listens carefully, and he never blames anyone in public, so he has earned the {{BLANK}} of everyone in the department.",
    "cn": "A：為什麼年輕工程師總是向林先生請教，即使他不是他們的直屬主管？ B：他在這裡工作了二十年，總是仔細傾聽，而且從不公開責怪任何人，所以他贏得了部門裡每個人的【尊敬】。"
  },
  {
    "word": "support",
    "pos": "n.",
    "cn_def": "支持；支援",
    "en_def": "help and encouragement",
    "sentence": "A: How did the small bakery survive last winter, when the road in front of the shop was closed for repairs for almost three months? B: The neighbors showed amazing {{BLANK}}, ordering cakes online, telling their friends, and even helping the owner carry boxes from the next street every morning.",
    "cn": "A：去年冬天店門前的道路封閉維修了將近三個月，這家小麵包店是怎麼撐過來的？ B：鄰居們展現了驚人的【支持】，在網路上訂蛋糕、告訴朋友，甚至每天早上幫老闆從隔壁街搬箱子。"
  },
  {
    "word": "share",
    "pos": "v.",
    "cn_def": "分享",
    "en_def": "to tell others about something or let them use it too",
    "sentence": "A: The new interns seem nervous about asking questions, and some of them are making the same mistakes with the sales reports every week. B: Let's ask a few senior staff to {{BLANK}} their own early experiences at Friday's lunch meeting, so the interns understand that everyone struggles at first.",
    "cn": "A：新來的實習生似乎不敢發問，有些人每週在銷售報告上犯同樣的錯。 B：我們請幾位資深員工在星期五的午餐會議上【分享】他們早期的經驗，讓實習生了解每個人一開始都會遇到困難。"
  },
  {
    "word": "secret",
    "pos": "n.",
    "cn_def": "秘密",
    "en_def": "something that is kept hidden from other people",
    "sentence": "A: Have you heard anything about the new product that the design team has been working on in the locked room on the third floor? B: Not really, because the launch is a {{BLANK}} until the press event next month, and everyone on that team had to sign a special agreement.",
    "cn": "A：你有聽說設計團隊在三樓那間上鎖房間裡研發的新產品嗎？ B：沒有，因為在下個月的記者會之前，這次上市是個【秘密】，而且那個團隊的每個人都必須簽一份特別協議。"
  },
  {
    "word": "safe",
    "pos": "adj.",
    "cn_def": "安全的",
    "en_def": "protected from danger or harm",
    "sentence": "A: I have to leave some important contracts and a laptop in the office over the holiday, but I'm a little worried about thieves. B: Don't worry, they will be completely {{BLANK}} in the manager's locked cabinet, and the building also has security guards and cameras working twenty-four hours a day.",
    "cn": "A：假期期間我得把一些重要合約和一台筆電留在辦公室，但我有點擔心小偷。 B：別擔心，放在經理上鎖的櫃子裡會非常【安全】，而且大樓還有保全和全天候運作的監視器。"
  },
  {
    "word": "secure",
    "pos": "adj.",
    "cn_def": "安全的；牢靠的",
    "en_def": "protected so that it cannot be stolen or attacked",
    "sentence": "A: Several customers called today to ask whether it is risky to pay for their orders on our new website with a credit card. B: Please tell them the payment page is fully {{BLANK}}, because our IT team added new protection last month and no personal information is stored on our servers.",
    "cn": "A：今天有好幾位顧客打電話來問，在我們的新網站上用信用卡付款是否有風險。 B：請告訴他們付款頁面是完全【安全】的，因為我們的資訊團隊上個月加了新的防護措施，而且我們的伺服器不會儲存任何個人資料。"
  },
  {
    "word": "honest",
    "pos": "adj.",
    "cn_def": "誠實的",
    "en_def": "always telling the truth",
    "sentence": "A: The car repair shop near our office told me my brakes were fine and that I didn't need to pay for any new parts. B: That mechanic is very {{BLANK}}, which is why our company uses him for all twelve delivery vans, even though another garage offered us a cheaper price last year.",
    "cn": "A：我們辦公室附近的修車廠告訴我煞車沒問題，不需要花錢換任何新零件。 B：那位技師非常【誠實】，所以即使去年另一家修車廠開出更便宜的價格，我們公司的十二輛送貨車還是都交給他修。"
  },
  {
    "word": "reliable",
    "pos": "adj.",
    "cn_def": "可靠的",
    "en_def": "able to be trusted to work well or do what is expected",
    "sentence": "A: Which delivery company should we choose for the important documents that must reach the bank in Tokyo before Monday morning? B: I suggest the one we used last spring, because they are fast and {{BLANK}}, and they send a text message to both the sender and receiver at every step.",
    "cn": "A：那些必須在星期一早上前送到東京銀行的重要文件，我們應該選哪家快遞公司？ B：我建議用我們去年春天用過的那家，因為他們又快又【可靠】，而且每個步驟都會傳簡訊給寄件人和收件人。"
  },
  {
    "word": "dependable",
    "pos": "adj.",
    "cn_def": "可信賴的",
    "en_def": "able to be trusted to do what is needed",
    "sentence": "A: Why did you choose Jason to open the store every morning, when some of the other staff members have worked here longer than he has? B: He is the most {{BLANK}} person on the team, because he has never been late in two years and always remembers to check the alarm and the fridges.",
    "cn": "A：為什麼你選傑森每天早上開店，明明有些員工在這裡工作得比他久？ B：他是團隊中最【可信賴】的人，因為兩年來他從未遲到，而且總是記得檢查警報器和冰箱。"
  },
  {
    "word": "faithful",
    "pos": "adj.",
    "cn_def": "忠實的",
    "en_def": "staying loyal to someone or something for a long time",
    "sentence": "A: The owner of the bookstore says she will close the shop if sales drop again this year, so how has she stayed open so long? B: She has a group of {{BLANK}} customers who have visited every week for more than ten years and always buy books as gifts for their families.",
    "cn": "A：書店老闆說如果今年銷量再下滑她就要關店，那她是怎麼撐這麼久的？ B：她有一群【忠實】的顧客，十多年來每週都來光顧，而且總是買書送給家人當禮物。"
  },
  {
    "word": "truthful",
    "pos": "adj.",
    "cn_def": "誠實的；真實的",
    "en_def": "telling the truth; honest",
    "sentence": "A: The company is asking all employees to fill out a survey about their managers, but some people are afraid to say anything negative. B: The survey has no names on it, so please encourage your team to be {{BLANK}}, because the results will help us improve training and solve real problems.",
    "cn": "A：公司要求所有員工填寫一份關於主管的問卷，但有些人不敢說任何負面的話。 B：問卷是匿名的，所以請鼓勵你的團隊【誠實】作答，因為結果會幫助我們改善訓練並解決真正的問題。"
  },
  {
    "word": "believable",
    "pos": "adj.",
    "cn_def": "可信的",
    "en_def": "easy to accept as true",
    "sentence": "A: What did the sales manager think about the new advertisement that shows our cleaning spray removing every stain in only two seconds? B: She thought it looked too perfect and was not {{BLANK}}, so she asked the agency to film real customers using the product in their own kitchens instead.",
    "cn": "A：業務經理對那支顯示我們的清潔噴霧兩秒內就去除所有污漬的新廣告有什麼看法？ B：她覺得看起來太完美了，不太【可信】，所以她請廣告公司改拍真實顧客在自家廚房使用產品的畫面。"
  },
  {
    "word": "betray",
    "pos": "v.",
    "cn_def": "背叛；出賣",
    "en_def": "to hurt someone who trusts you, for example by telling their secrets",
    "sentence": "A: Why was the senior engineer fired so quickly last week, when everyone said he was one of the most talented people in the company? B: He sold our product designs to a competitor, and the director said that anyone who would {{BLANK}} the company like that could never work here again.",
    "cn": "A：為什麼那位資深工程師上週那麼快就被開除，明明大家都說他是公司最有才華的人之一？ B：他把我們的產品設計賣給了競爭對手，主管說任何會那樣【背叛】公司的人都不能再在這裡工作。"
  },
  {
    "word": "doubt",
    "pos": "n.",
    "cn_def": "懷疑；疑慮",
    "en_def": "a feeling of not being sure that something is true",
    "sentence": "A: Are you sure the new software will be ready for the training session with the branch managers on Thursday afternoon? B: There is no {{BLANK}} about it, because the developers finished testing last night, and I already installed it on all twenty computers in the training room.",
    "cn": "A：你確定新軟體能在星期四下午與分店經理的訓練課程前準備好嗎？ B：這一點毫無【疑問】，因為開發人員昨晚就完成測試了，而且我已經把它安裝在訓練教室的全部二十台電腦上。"
  },
  {
    "word": "suspicious",
    "pos": "adj.",
    "cn_def": "可疑的；懷疑的",
    "en_def": "making you feel that something is wrong or dishonest",
    "sentence": "A: I just got an email that says my bank account will be closed unless I click a link and enter my password today. B: That sounds very {{BLANK}}, so don't click anything, forward the message to our IT department, and call the bank using the number on the back of your card.",
    "cn": "A：我剛收到一封電子郵件，說除非我今天點連結並輸入密碼，否則我的銀行帳戶會被關閉。 B：這聽起來非常【可疑】，所以什麼都別點，把訊息轉寄給我們的資訊部門，並用你卡片背面的號碼打電話給銀行。"
  },
  {
    "word": "prove",
    "pos": "v.",
    "cn_def": "證明",
    "en_def": "to show that something is true",
    "sentence": "A: The customer says she never received the package, and she wants a full refund plus a discount on her next order. B: Our driver took a photo at her front door, so we can {{BLANK}} that the box arrived, but let's still offer her a small coupon to keep her happy.",
    "cn": "A：顧客說她從未收到包裹，她要求全額退款，還要下次訂單打折。 B：我們的司機在她家門口拍了照，所以我們可以【證明】箱子已送達，但還是給她一張小額折價券讓她開心吧。"
  },
  {
    "word": "trustworthy",
    "pos": "adj.",
    "cn_def": "值得信賴的",
    "en_def": "able to be trusted",
    "sentence": "A: We need someone to collect cash from all five stores every evening and take it to the bank before it closes. B: Let's give the job to Maria, because she is {{BLANK}}, careful with numbers, and has handled the money at the main branch for three years without any problems.",
    "cn": "A：我們需要有人每天傍晚從五家店收取現金，並在銀行關門前送過去。 B：把這份工作交給瑪莉亞吧，因為她【值得信賴】、對數字很細心，而且在總店管錢三年都沒出過任何問題。"
  },
  {
    "word": "bond",
    "pos": "n.",
    "cn_def": "聯繫；情誼",
    "en_def": "a close connection between people",
    "sentence": "A: Why does the company pay for a weekend trip to the mountains every year, when it could just give everyone a bonus instead? B: Spending time together outside the office creates a strong {{BLANK}} between team members, so they communicate better and help each other more during busy projects.",
    "cn": "A：為什麼公司每年都出錢辦一次山上週末旅遊，而不是直接發獎金給大家？ B：在辦公室外一起相處能在團隊成員之間建立深厚的【情誼】，讓他們在忙碌的專案期間溝通更好、更互相幫忙。"
  },
  {
    "word": "relationship",
    "pos": "n.",
    "cn_def": "關係",
    "en_def": "the way people or groups are connected and behave toward each other",
    "sentence": "A: How did our small company win the contract with the hotel group, when two much bigger firms also sent proposals? B: Our sales director has had a good working {{BLANK}} with their purchasing manager for many years, and we always deliver on time, so they felt comfortable choosing us.",
    "cn": "A：我們這家小公司是怎麼贏得飯店集團的合約的？明明還有兩家大得多的公司也提出了企劃。 B：我們的業務總監多年來與他們的採購經理有良好的工作【關係】，而且我們總是準時交貨，所以他們很放心選擇我們。"
  },
  {
    "word": "assure",
    "pos": "v.",
    "cn_def": "向…保證；使放心",
    "en_def": "to tell someone that something is true so that they stop worrying",
    "sentence": "A: The investors are worried that the factory fire will delay our new product, and several of them have called me this morning. B: Please {{BLANK}} them that the damage was small, nobody was hurt, and the production line will be running again by next Monday.",
    "cn": "A：投資人擔心工廠火災會延誤我們的新產品，今天早上已經有好幾位打電話給我。 B：請【向他們保證】損失很小、沒有人受傷，而且生產線下週一前就會恢復運作。"
  },
  {
    "word": "commitment",
    "pos": "n.",
    "cn_def": "承諾；投入",
    "en_def": "a promise or strong decision to do something",
    "sentence": "A: Why did the city choose our company to build the new public library, when our price was not the lowest one? B: We made a clear {{BLANK}} to use local workers and recycled materials, and the city council believed that would help the community and protect the environment.",
    "cn": "A：為什麼市政府選我們公司蓋新的公共圖書館，明明我們的價格不是最低的？ B：我們明確【承諾】會雇用當地工人並使用回收材料，市議會認為這將有助於社區並保護環境。"
  },
  {
    "word": "integrity",
    "pos": "n.",
    "cn_def": "正直；誠信",
    "en_def": "the quality of being honest and having strong moral rules",
    "sentence": "A: Why did the accountant refuse to change the numbers in the report, even when the regional manager asked him to do it twice? B: He is a man of great {{BLANK}}, and he explained that hiding the losses from the shareholders would be wrong and could get the whole company into serious trouble.",
    "cn": "A：為什麼那位會計師拒絕修改報告中的數字，即使區域經理要求了他兩次？ B：他是個非常【正直】的人，他解釋說向股東隱瞞虧損是錯的，而且可能讓整間公司陷入嚴重的麻煩。"
  }
];

const MCQS = [
  {
    "q": "Many investors _____ that the merger will increase profits next year. The company's stock price rose sharply after the announcement.",
    "options": [
      "believe",
      "depend",
      "betray",
      "rely"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The strong sales figures have increased consumer _____ in the brand. Shoppers are now willing to pay higher prices for its products.",
    "options": [
      "secret",
      "confidence",
      "truth",
      "integrity"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Small businesses often _____ on word of mouth to attract new customers. Advertising in newspapers can be too expensive for them.",
    "options": [
      "believe",
      "assure",
      "rely",
      "prove"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Whether the outdoor concert goes ahead will _____ on the weather forecast. The organizers will make a final decision on Friday morning.",
    "options": [
      "share",
      "betray",
      "assure",
      "depend"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The employees have lost _____ in the old management team. Many of them have started looking for jobs at other companies.",
    "options": [
      "bond",
      "faith",
      "secret",
      "honesty"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The hotel manager praised the cleaner for her _____ after she returned a guest's lost wallet. The guest also sent her a thank-you card.",
    "options": [
      "doubt",
      "relationship",
      "secret",
      "honesty"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The investigation revealed the _____ about the missing funds. The finance director had moved the money to a private account.",
    "options": [
      "truth",
      "bond",
      "loyalty",
      "commitment"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The airline rewards customer _____ with free upgrades and lounge access. Members who fly more than twenty times a year receive extra benefits.",
    "options": [
      "doubt",
      "truth",
      "loyalty",
      "secret"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The contractor broke his _____ to finish the renovation by June. The office opening has now been delayed until August.",
    "options": [
      "promise",
      "doubt",
      "truth",
      "respect"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Please _____ all receipts from your business trip in one folder. The accounting department needs them to process your expenses.",
    "options": [
      "betray",
      "keep",
      "depend",
      "assure"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Our company treats every customer with _____, no matter how small the order is. This policy has helped us build a good reputation.",
    "options": [
      "doubt",
      "secret",
      "respect",
      "bond"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The new software comes with free technical _____ for the first year. Customers can call the help desk at any time.",
    "options": [
      "truth",
      "loyalty",
      "faith",
      "support"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Employees are not allowed to _____ their passwords with anyone, including coworkers. The IT department checks the system settings every three months.",
    "options": [
      "prove",
      "share",
      "assure",
      "depend"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The recipe for the restaurant's famous sauce is a closely guarded _____. Only the head chef and the owner know all the ingredients.",
    "options": [
      "bond",
      "support",
      "respect",
      "secret"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Workers must wear helmets to stay _____ on the construction site. The supervisor checks everyone's equipment before work begins each morning.",
    "options": [
      "safe",
      "honest",
      "suspicious",
      "faithful"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Customers can shop online knowing that their payment details are _____. The website uses the latest technology to protect personal data.",
    "options": [
      "honest",
      "faithful",
      "secure",
      "believable"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "To improve our service, we need _____ feedback from our customers. Please tell us exactly what you liked and disliked about your stay.",
    "options": [
      "honest",
      "secure",
      "suspicious",
      "safe"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The company replaced its old printers because they were not _____ and broke down almost every week. The new machines have worked perfectly.",
    "options": [
      "honest",
      "reliable",
      "suspicious",
      "faithful"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The café gave a free cake to its most _____ customers to thank them for visiting every week for ten years. They were delighted.",
    "options": [
      "suspicious",
      "secure",
      "faithful",
      "believable"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The witness gave a clear and _____ account of the accident to the insurance company. Her story matched the video from the security camera.",
    "options": [
      "secure",
      "safe",
      "suspicious",
      "believable"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The manager promised that he would never _____ the trust of his team. He always kept their personal problems private.",
    "options": [
      "rely",
      "betray",
      "depend",
      "believe"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "There is no _____ that the new train line will reduce traffic in the city center. Thousands of commuters are expected to use it daily.",
    "options": [
      "faith",
      "loyalty",
      "bond",
      "doubt"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The bank's computer system automatically blocks _____ transactions from foreign countries. Customers then receive a text message asking them to confirm the payment.",
    "options": [
      "suspicious",
      "faithful",
      "honest",
      "trustworthy"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The new employee worked hard to _____ that she could handle the large account. Within six months, she had doubled its sales.",
    "options": [
      "rely",
      "depend",
      "prove",
      "betray"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Online reviews help travelers find _____ tour guides in unfamiliar cities. Most people read at least five reviews before booking a tour.",
    "options": [
      "trustworthy",
      "suspicious",
      "secure",
      "believable"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Sharing meals can build a strong _____ between coworkers. Our office now holds a lunch party every month.",
    "options": [
      "doubt",
      "bond",
      "truth",
      "secret"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Good communication is the key to a successful business _____ with overseas partners. We hold video meetings with them every week.",
    "options": [
      "honesty",
      "doubt",
      "relationship",
      "secret"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "I can _____ you that your order will be shipped by tomorrow. Our warehouse has plenty of stock right now.",
    "options": [
      "rely",
      "depend",
      "share",
      "assure"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The firm has a strong _____ to reducing its carbon emissions by 2030. It has already installed solar panels on all its factories.",
    "options": [
      "doubt",
      "commitment",
      "secret",
      "bond"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The judges chose the company for the award because of its _____ and fair treatment of workers. It has never been involved in any scandals.",
    "options": [
      "doubt",
      "secret",
      "promise",
      "integrity"
    ],
    "answer": 3,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "believe": {
    "pos": "v.",
    "en_def": "to think that something is true",
    "cn_def": "相信"
  },
  "confidence": {
    "pos": "n.",
    "en_def": "the feeling that you can trust someone or something",
    "cn_def": "信心；信任"
  },
  "rely": {
    "pos": "v.",
    "en_def": "to need and trust someone or something",
    "cn_def": "依賴；信賴"
  },
  "depend": {
    "pos": "v.",
    "en_def": "to need someone or something for help or support",
    "cn_def": "依靠；取決於"
  },
  "faith": {
    "pos": "n.",
    "en_def": "strong trust in someone or something",
    "cn_def": "信任；信念"
  },
  "honesty": {
    "pos": "n.",
    "en_def": "the quality of telling the truth",
    "cn_def": "誠實"
  },
  "truth": {
    "pos": "n.",
    "en_def": "the real facts about something",
    "cn_def": "真相；事實"
  },
  "loyalty": {
    "pos": "n.",
    "en_def": "the quality of staying faithful to a person, group or brand",
    "cn_def": "忠誠"
  },
  "promise": {
    "pos": "n.",
    "en_def": "a statement that you will surely do something",
    "cn_def": "承諾"
  },
  "keep": {
    "pos": "v.",
    "en_def": "to do what you said you would do; to continue to have something",
    "cn_def": "遵守；保持"
  },
  "respect": {
    "pos": "n.",
    "en_def": "a feeling of admiring someone for their good qualities",
    "cn_def": "尊重；敬重"
  },
  "support": {
    "pos": "n.",
    "en_def": "help and encouragement",
    "cn_def": "支持；支援"
  },
  "share": {
    "pos": "v.",
    "en_def": "to tell others about something or let them use it too",
    "cn_def": "分享"
  },
  "secret": {
    "pos": "n.",
    "en_def": "something that is kept hidden from other people",
    "cn_def": "秘密"
  },
  "safe": {
    "pos": "adj.",
    "en_def": "protected from danger or harm",
    "cn_def": "安全的"
  },
  "secure": {
    "pos": "adj.",
    "en_def": "protected so that it cannot be stolen or attacked",
    "cn_def": "安全的；牢靠的"
  },
  "honest": {
    "pos": "adj.",
    "en_def": "always telling the truth",
    "cn_def": "誠實的"
  },
  "reliable": {
    "pos": "adj.",
    "en_def": "able to be trusted to work well or do what is expected",
    "cn_def": "可靠的"
  },
  "dependable": {
    "pos": "adj.",
    "en_def": "able to be trusted to do what is needed",
    "cn_def": "可信賴的"
  },
  "faithful": {
    "pos": "adj.",
    "en_def": "staying loyal to someone or something for a long time",
    "cn_def": "忠實的"
  },
  "truthful": {
    "pos": "adj.",
    "en_def": "telling the truth; honest",
    "cn_def": "誠實的；真實的"
  },
  "believable": {
    "pos": "adj.",
    "en_def": "easy to accept as true",
    "cn_def": "可信的"
  },
  "betray": {
    "pos": "v.",
    "en_def": "to hurt someone who trusts you, for example by telling their secrets",
    "cn_def": "背叛；出賣"
  },
  "doubt": {
    "pos": "n.",
    "en_def": "a feeling of not being sure that something is true",
    "cn_def": "懷疑；疑慮"
  },
  "suspicious": {
    "pos": "adj.",
    "en_def": "making you feel that something is wrong or dishonest",
    "cn_def": "可疑的；懷疑的"
  },
  "prove": {
    "pos": "v.",
    "en_def": "to show that something is true",
    "cn_def": "證明"
  },
  "trustworthy": {
    "pos": "adj.",
    "en_def": "able to be trusted",
    "cn_def": "值得信賴的"
  },
  "bond": {
    "pos": "n.",
    "en_def": "a close connection between people",
    "cn_def": "聯繫；情誼"
  },
  "relationship": {
    "pos": "n.",
    "en_def": "the way people or groups are connected and behave toward each other",
    "cn_def": "關係"
  },
  "assure": {
    "pos": "v.",
    "en_def": "to tell someone that something is true so that they stop worrying",
    "cn_def": "向…保證；使放心"
  },
  "commitment": {
    "pos": "n.",
    "en_def": "a promise or strong decision to do something",
    "cn_def": "承諾；投入"
  },
  "integrity": {
    "pos": "n.",
    "en_def": "the quality of being honest and having strong moral rules",
    "cn_def": "正直；誠信"
  }
};

const EXTRA_GLOSSES = {};
