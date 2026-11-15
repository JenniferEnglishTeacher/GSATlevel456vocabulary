// Topic 35 Quiz Data: Borrow 借用
// Source word list: https://www.examword.com/group-topic/borrow — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T35 - Borrow 借用",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "avid",
    "pos": "adj.",
    "cn_def": "熱衷的；熱心的",
    "en_def": "very keen and interested in something",
    "sentence": "A: Why does the library want to invite Mr. Chen to speak at next month's reading event, even though he is not a famous author or a teacher? B: He is an {{BLANK}} reader who borrows about ten books every week, so the staff believe his stories and advice will encourage more local families to visit.",
    "cn": "A：為什麼圖書館想邀請陳先生在下個月的閱讀活動上演講，即使他不是知名作家也不是老師？ B：他是一位【熱衷的】讀者，每週借大約十本書，所以館員相信他的故事和建議會鼓勵更多當地家庭來館。"
  },
  {
    "word": "recommend",
    "pos": "v.",
    "cn_def": "推薦；建議",
    "en_def": "to say that someone or something is good or that someone should do something",
    "sentence": "A: I need to borrow a projector for the sales presentation on Friday, but our department's one is broken, so do you know where I can get another one quickly? B: I would {{BLANK}} asking the IT office on the third floor, because they usually lend equipment to staff for a few days without any charge.",
    "cn": "A：我週五的業務簡報需要借一台投影機，但我們部門的那台壞了，你知道我可以去哪裡很快借到另一台嗎？ B：我會【建議】你去問三樓的資訊部辦公室，因為他們通常會免費把設備借給員工使用幾天。"
  },
  {
    "word": "awkward",
    "pos": "adj.",
    "cn_def": "尷尬的；令人不自在的",
    "en_def": "making you feel uncomfortable or embarrassed",
    "sentence": "A: Why didn't you ask your manager if you could borrow her laptop while yours was being repaired at the service center last week? B: It felt a little {{BLANK}} to ask her, because she had just lent me her car the week before, so I used an old computer in the meeting room instead.",
    "cn": "A：上週你的筆電在維修中心修理時，你為什麼不問經理能不能借她的筆電？ B：向她開口讓我覺得有點【尷尬】，因為她前一週才剛借我車，所以我改用了會議室裡的一台舊電腦。"
  },
  {
    "word": "seldom",
    "pos": "adv.",
    "cn_def": "很少；不常",
    "en_def": "not often; rarely",
    "sentence": "A: Do you think we should buy our own ladder for the shop, or should we keep borrowing one from the hardware store next door whenever we need it? B: Let's keep borrowing, because we {{BLANK}} need a ladder more than twice a year, and a new one would take up too much space in our small storage room.",
    "cn": "A：你覺得我們應該替店裡買一把自己的梯子，還是每次需要時繼續向隔壁五金行借？ B：繼續借吧，因為我們一年【很少】需要用到梯子超過兩次，而且買新的會占用我們小儲藏室太多空間。"
  },
  {
    "word": "innumerable",
    "pos": "adj.",
    "cn_def": "數不清的；無數的",
    "en_def": "too many to be counted",
    "sentence": "A: Why is the public library planning to move its old newspapers and magazines into a digital system next year? B: Because there are {{BLANK}} paper copies in the basement, and the staff spend hours finding the right one whenever a visitor wants to borrow an article for research.",
    "cn": "A：公立圖書館為什麼打算明年把舊報紙和雜誌移到數位系統？ B：因為地下室裡有【數不清的】紙本，每當有訪客想借閱某篇文章做研究時，館員都要花好幾個小時才找得到。"
  },
  {
    "word": "make ends meet",
    "pos": "v.phr.",
    "cn_def": "維持收支平衡；勉強維持生計",
    "en_def": "to have just enough money to pay for the things you need",
    "sentence": "A: Why did the young designer decide to borrow money from his parents instead of applying for a bank loan last month? B: His rent went up sharply in January, and he could barely {{BLANK}} with his small salary, so his parents offered him a loan without any interest until he finds a better job.",
    "cn": "A：那位年輕設計師上個月為什麼決定向父母借錢，而不是去申請銀行貸款？ B：他的房租在一月大幅上漲，靠著微薄的薪水他幾乎無法【維持收支平衡】，所以他父母提供他無息借款，直到他找到更好的工作。"
  },
  {
    "word": "wear and tear",
    "pos": "n.phr.",
    "cn_def": "（正常使用造成的）磨損；耗損",
    "en_def": "damage that happens to things through normal use over time",
    "sentence": "A: The customer returned the camera that she rented from us for two weeks, so do we need to charge her extra for the small scratches on the lens cover? B: No, those marks are just normal {{BLANK}}, and our rental agreement clearly says that customers only pay for serious damage or missing parts.",
    "cn": "A：那位客戶歸還了她向我們租了兩週的相機，我們需要因為鏡頭蓋上的小刮痕向她額外收費嗎？ B：不用，那些痕跡只是正常的【磨損】，而且我們的租賃合約寫得很清楚，客戶只需為嚴重損壞或遺失零件付費。"
  },
  {
    "word": "on time",
    "pos": "phr.",
    "cn_def": "準時",
    "en_def": "at the correct time; not late",
    "sentence": "A: Will the bank give us a lower interest rate if we ask for a second loan to open another branch of our restaurant next spring? B: There is a good chance, because we have made every monthly payment {{BLANK}} for the last three years, and the bank manager said they value reliable customers like us.",
    "cn": "A：如果我們申請第二筆貸款，在明年春天開餐廳的另一家分店，銀行會給我們較低的利率嗎？ B：很有可能，因為過去三年我們每一期月付款都【準時】繳納，而且銀行經理說他們很重視像我們這樣可靠的客戶。"
  },
  {
    "word": "fragile",
    "pos": "adj.",
    "cn_def": "易碎的；脆弱的",
    "en_def": "easily broken or damaged",
    "sentence": "A: Can I borrow the glass display stands from your shop for our product launch at the hotel this weekend? B: Sure, but please pack them carefully in the boxes with plenty of paper, because they are very {{BLANK}} and could break easily if the delivery van hits a bump on the way.",
    "cn": "A：這週末我們在飯店舉辦產品發表會，我可以向你的店借那些玻璃展示架嗎？ B：當然可以，但請用大量紙張仔細把它們裝進箱子裡，因為它們非常【易碎】，如果貨車在途中顛簸，很容易就會破掉。"
  },
  {
    "word": "persist",
    "pos": "v.",
    "cn_def": "持續；持續存在",
    "en_def": "to continue to exist or happen for a long time",
    "sentence": "A: What should I do about the printer that we borrowed from the head office, since it keeps showing an error message even though I have restarted it several times this morning? B: If the problems {{BLANK}} after lunch, please call the technician, because we must print two hundred brochures for the trade fair by tomorrow morning.",
    "cn": "A：我們向總公司借來的印表機一直出現錯誤訊息，雖然我今天早上已經重新啟動好幾次了，我該怎麼辦？ B：如果午餐後問題【持續存在】，請打電話給技術人員，因為我們明天早上前必須印好兩百份商展用的手冊。"
  },
  {
    "word": "compromise",
    "pos": "n.",
    "cn_def": "妥協；折衷",
    "en_def": "an agreement in which each side accepts less than it wanted",
    "sentence": "A: Did you and the landlord finally agree on how much rent you have to pay while the office building is being repaired? B: Yes, we reached a {{BLANK}} yesterday afternoon, so we will pay only half the normal rent for three months, and he will lend us some extra desks for the temporary rooms.",
    "cn": "A：大樓整修期間你們要付多少租金，你和房東終於談好了嗎？ B：是的，我們昨天下午達成了【妥協】，所以這三個月我們只付一半的正常租金，而且他還會借我們一些額外的桌子放在臨時辦公室。"
  },
  {
    "word": "write off",
    "pos": "v.phr.",
    "cn_def": "註銷（債務）；勾銷",
    "en_def": "to decide that a debt will never be paid and remove it from the accounts",
    "sentence": "A: What did the finance department decide about the money that a small customer borrowed from us two years ago and never paid back? B: Since the customer's company has closed and nobody can contact the owner, the director agreed to {{BLANK}} the debt and remove it from this year's accounts.",
    "cn": "A：關於一位小客戶兩年前向我們借了卻一直沒還的錢，財務部決定怎麼處理？ B：由於那位客戶的公司已經倒閉，也沒有人聯絡得上老闆，主管同意把這筆債務【註銷】，並從今年的帳目中移除。"
  },
  {
    "word": "assume",
    "pos": "v.",
    "cn_def": "以為；假定；猜想",
    "en_def": "to think something is true without being sure",
    "sentence": "A: Why didn't Ms. Lin bring back the meeting room keys that she borrowed from the reception desk yesterday afternoon? B: I {{BLANK}} that she simply forgot about them, because she left for the airport in a hurry, so I'll send her a text message and ask her to drop them off tomorrow morning.",
    "cn": "A：林小姐為什麼沒有把她昨天下午向櫃檯借的會議室鑰匙還回來？ B：我【猜想】她只是忘了，因為她匆忙趕去機場，所以我會傳簡訊給她，請她明天早上把鑰匙送回來。"
  },
  {
    "word": "reasonable",
    "pos": "adj.",
    "cn_def": "合理的；價格公道的",
    "en_def": "fair and not too expensive or too much",
    "sentence": "A: Is the interest rate on the small business loan from the local bank too high for our new bakery, or should we accept their offer? B: I think the rate is quite {{BLANK}} compared with the other banks that we visited, and the payment plan gives us five years to pay back the full amount.",
    "cn": "A：當地銀行提供的小型企業貸款利率對我們新開的麵包店來說會太高嗎？還是我們應該接受他們的條件？ B：和我們拜訪過的其他銀行相比，我覺得這個利率相當【合理】，而且還款計畫給我們五年時間償還全部金額。"
  },
  {
    "word": "tiny",
    "pos": "adj.",
    "cn_def": "極小的；很小的",
    "en_def": "very small",
    "sentence": "A: Can you lend me your storage room for a few days, because I need somewhere to keep the extra chairs for the company party? B: I'm sorry, but my storage room is really {{BLANK}}, and it is already full of boxes, so maybe you should ask the building manager whether the basement is free.",
    "cn": "A：你可以把你的儲藏室借我幾天嗎？因為我需要地方放公司派對多出來的椅子。 B：抱歉，我的儲藏室真的很【小】，而且已經堆滿箱子了，也許你應該問問大樓管理員地下室是否有空。"
  },
  {
    "word": "let go",
    "pos": "v.phr.",
    "cn_def": "放手；放開",
    "en_def": "to stop holding or keeping something (often with \"of\")",
    "sentence": "A: Why did your brother finally agree to lend his old car to his cousin, since he loved it so much and never allowed anyone else to drive it? B: He realized that he hardly ever drove it anymore, so he decided to {{BLANK}} of it for a while, and his cousin can now use it for her new job in the city.",
    "cn": "A：你哥哥那麼愛他的舊車，從不讓別人開，為什麼最後同意把它借給他的表妹？ B：他發現自己幾乎不再開那台車了，所以決定暫時【放手】，現在他表妹可以開它去城裡上新工作。"
  },
  {
    "word": "give in",
    "pos": "v.phr.",
    "cn_def": "讓步；屈服",
    "en_def": "to finally agree to something after first refusing",
    "sentence": "A: Did the store manager agree to lend the customer a free phone while her broken one was being repaired? B: At first he said no, but the customer complained for twenty minutes in front of other shoppers, so he finally decided to {{BLANK}} and offered her an older model for one week.",
    "cn": "A：店經理有同意在顧客壞掉的手機維修期間借她一支免費手機嗎？ B：一開始他拒絕了，但那位顧客在其他購物者面前抱怨了二十分鐘，所以他最後決定【讓步】，借她一支舊型號手機使用一週。"
  },
  {
    "word": "frustrating",
    "pos": "adj.",
    "cn_def": "令人沮喪的；令人洩氣的",
    "en_def": "making you feel annoyed because you cannot do what you want",
    "sentence": "A: How was your experience applying for a student loan at the bank downtown last week? B: It was really {{BLANK}}, because I waited in line for two hours, and then the clerk told me that I had to fill out the same forms again on the bank's website.",
    "cn": "A：你上週在市區那家銀行申請學生貸款的經驗如何？ B：真的很【令人沮喪】，因為我排隊等了兩個小時，然後行員告訴我必須在銀行網站上重新填一次同樣的表格。"
  },
  {
    "word": "upset",
    "pos": "adj.",
    "cn_def": "不高興的；心煩的",
    "en_def": "unhappy and worried or angry",
    "sentence": "A: Why does Mr. Wang look so unhappy this morning, and why isn't he talking to anyone in the design team? B: He is {{BLANK}} because someone borrowed his expensive drawing tablet without asking, and when it came back yesterday, the screen had a long crack across the middle.",
    "cn": "A：王先生今天早上為什麼看起來這麼不開心，而且都不跟設計團隊的任何人說話？ B：他很【不高興】，因為有人沒問過他就借走了他昂貴的繪圖板，昨天還回來時，螢幕中間多了一道長長的裂痕。"
  },
  {
    "word": "repay",
    "pos": "v.",
    "cn_def": "償還；還（錢）",
    "en_def": "to pay back money that you borrowed",
    "sentence": "A: How long will it take our company to pay off the loan that we used to buy the new delivery trucks last year? B: If sales keep growing like this, we should be able to {{BLANK}} the full amount by next summer, which is almost two years earlier than the bank expected.",
    "cn": "A：我們公司去年用來買新貨車的那筆貸款，要多久才能還清？ B：如果銷售持續這樣成長，我們應該能在明年夏天前【償還】全部金額，比銀行預期的提早了將近兩年。"
  },
  {
    "word": "give back",
    "pos": "v.phr.",
    "cn_def": "歸還；還給",
    "en_def": "to return something to the person who owns it",
    "sentence": "A: Have you finished using the tools that you borrowed from the maintenance department for the shelves in the new meeting room? B: Almost, I just need to fix the last shelf, and then I'll {{BLANK}} the drill and the ladder before the department closes at five o'clock this afternoon.",
    "cn": "A：你向維修部借來裝新會議室架子的工具用完了嗎？ B：快好了，我只要再裝好最後一個架子，然後我會在維修部今天下午五點下班前把電鑽和梯子【歸還】。"
  }
];

const MCQS = [
  {
    "q": "Ms. Park is an _____ cyclist who rides to work every day. She often lends her spare bike to new colleagues.",
    "options": [
      "awkward",
      "avid",
      "upset",
      "tiny"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The librarian can _____ several good books on marketing. Just tell her which topics you are interested in this month.",
    "options": [
      "recommend",
      "repay",
      "persist",
      "assume"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The new manager felt _____ when he had to borrow a pen from the intern. He had forgotten his own at home again.",
    "options": [
      "reasonable",
      "innumerable",
      "avid",
      "awkward"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Our team _____ borrows equipment from other departments. We usually have everything we need in our own storage room.",
    "options": [
      "avid",
      "tiny",
      "seldom",
      "on time"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The bank has received _____ complaints about its new online loan system. Customers say the website crashes almost every day.",
    "options": [
      "tiny",
      "innumerable",
      "fragile",
      "awkward"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Many part-time workers borrow small amounts of money to _____. Rising rent and food prices make life very difficult for them.",
    "options": [
      "write off",
      "let go",
      "make ends meet",
      "give back"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The rental contract says that customers are not charged for normal _____. However, they must pay for any serious damage to the furniture.",
    "options": [
      "wear and tear",
      "seldom",
      "on time",
      "compromise"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Please return all library books _____ to avoid late fees. The library charges ten dollars for each day a book is late.",
    "options": [
      "tiny",
      "avid",
      "seldom",
      "on time"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "These antique vases are very _____, so the museum will not lend them to other galleries. They could easily break during shipping.",
    "options": [
      "frustrating",
      "reasonable",
      "fragile",
      "avid"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "If the delays _____ for another week, the factory will rent extra trucks. Customers are already waiting too long for their orders.",
    "options": [
      "assume",
      "recommend",
      "repay",
      "persist"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "After two hours of discussion, the two companies reached a _____ on the price. Each side agreed to accept a little less than it wanted.",
    "options": [
      "seldom",
      "compromise",
      "on time",
      "wear and tear"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The bank decided to _____ the small loan because the borrower's company had closed. The amount was too small to take to court.",
    "options": [
      "write off",
      "give in",
      "make ends meet",
      "let go"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Don't _____ that the meeting room is free just because the door is open. Always check the online booking system first.",
    "options": [
      "repay",
      "persist",
      "assume",
      "recommend"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The hotel offers meeting rooms at a very _____ price for small companies. It also lends projectors to guests for free.",
    "options": [
      "fragile",
      "reasonable",
      "awkward",
      "upset"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The new office is so _____ that only three desks fit inside. We will have to borrow space from the company next door.",
    "options": [
      "tiny",
      "frustrating",
      "avid",
      "upset"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The director found it hard to _____ of his old company car. He had driven it to meetings for more than ten years.",
    "options": [
      "make ends meet",
      "give back",
      "write off",
      "let go"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The union refused to _____ to the company's demands during the long talks. In the end, both sides signed a new agreement.",
    "options": [
      "give back",
      "write off",
      "give in",
      "let go"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The long wait at the customer service desk was very _____ for the visitors. Many of them left before speaking to anyone.",
    "options": [
      "avid",
      "frustrating",
      "tiny",
      "innumerable"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The client was _____ when the borrowed samples arrived damaged. Our sales manager called her to apologize and sent new ones.",
    "options": [
      "upset",
      "reasonable",
      "innumerable",
      "avid"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Borrowers must _____ the loan in twelve monthly payments. The first payment is due thirty days after the money is received.",
    "options": [
      "persist",
      "recommend",
      "assume",
      "repay"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Please _____ your ID card to the security office on your last day of work. New employees will use it next month.",
    "options": [
      "let go",
      "give back",
      "make ends meet",
      "give in"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Our new marketing director is an _____ traveler who has visited forty countries. She often shares travel tips with the team.",
    "options": [
      "fragile",
      "upset",
      "avid",
      "frustrating"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "We strongly _____ booking a table in advance during the holiday season. The restaurant is often full by six o'clock.",
    "options": [
      "assume",
      "persist",
      "repay",
      "recommend"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Please label the box _____ before sending it to the branch office. It contains glass bottles for the product display.",
    "options": [
      "fragile",
      "innumerable",
      "tiny",
      "avid"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The airport train left exactly _____ this morning. Passengers who arrived even one minute late had to wait for the next one.",
    "options": [
      "reasonable",
      "upset",
      "seldom",
      "on time"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The city plans to _____ the government loan by selling part of the old harbor land. The plan was announced at Monday's meeting.",
    "options": [
      "repay",
      "persist",
      "recommend",
      "assume"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Customers think the late fee is _____ because it is only fifty cents a day. Most people return their books before it adds up.",
    "options": [
      "awkward",
      "reasonable",
      "avid",
      "fragile"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Many shoppers _____ that bigger stores always have lower prices. In fact, small local shops are sometimes cheaper.",
    "options": [
      "persist",
      "repay",
      "assume",
      "write off"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The customer asked the shop to _____ her deposit after she canceled the order. The manager returned the money within two days.",
    "options": [
      "give back",
      "let go",
      "give in",
      "make ends meet"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The staff were _____ to hear that the company picnic had been canceled. Many of them had already bought food and drinks.",
    "options": [
      "avid",
      "innumerable",
      "tiny",
      "upset"
    ],
    "answer": 3,
    "vocabIndex": 18
  }
];

const LOOKUP = {
  "avid": {
    "pos": "adj.",
    "en_def": "very keen and interested in something",
    "cn_def": "熱衷的；熱心的"
  },
  "recommend": {
    "pos": "v.",
    "en_def": "to say that someone or something is good or that someone should do something",
    "cn_def": "推薦；建議"
  },
  "awkward": {
    "pos": "adj.",
    "en_def": "making you feel uncomfortable or embarrassed",
    "cn_def": "尷尬的；令人不自在的"
  },
  "seldom": {
    "pos": "adv.",
    "en_def": "not often; rarely",
    "cn_def": "很少；不常"
  },
  "innumerable": {
    "pos": "adj.",
    "en_def": "too many to be counted",
    "cn_def": "數不清的；無數的"
  },
  "make ends meet": {
    "pos": "v.phr.",
    "en_def": "to have just enough money to pay for the things you need",
    "cn_def": "維持收支平衡；勉強維持生計"
  },
  "wear and tear": {
    "pos": "n.phr.",
    "en_def": "damage that happens to things through normal use over time",
    "cn_def": "（正常使用造成的）磨損；耗損"
  },
  "on time": {
    "pos": "phr.",
    "en_def": "at the correct time; not late",
    "cn_def": "準時"
  },
  "fragile": {
    "pos": "adj.",
    "en_def": "easily broken or damaged",
    "cn_def": "易碎的；脆弱的"
  },
  "persist": {
    "pos": "v.",
    "en_def": "to continue to exist or happen for a long time",
    "cn_def": "持續；持續存在"
  },
  "compromise": {
    "pos": "n.",
    "en_def": "an agreement in which each side accepts less than it wanted",
    "cn_def": "妥協；折衷"
  },
  "write off": {
    "pos": "v.phr.",
    "en_def": "to decide that a debt will never be paid and remove it from the accounts",
    "cn_def": "註銷（債務）；勾銷"
  },
  "assume": {
    "pos": "v.",
    "en_def": "to think something is true without being sure",
    "cn_def": "以為；假定；猜想"
  },
  "reasonable": {
    "pos": "adj.",
    "en_def": "fair and not too expensive or too much",
    "cn_def": "合理的；價格公道的"
  },
  "tiny": {
    "pos": "adj.",
    "en_def": "very small",
    "cn_def": "極小的；很小的"
  },
  "let go": {
    "pos": "v.phr.",
    "en_def": "to stop holding or keeping something (often with \"of\")",
    "cn_def": "放手；放開"
  },
  "give in": {
    "pos": "v.phr.",
    "en_def": "to finally agree to something after first refusing",
    "cn_def": "讓步；屈服"
  },
  "frustrating": {
    "pos": "adj.",
    "en_def": "making you feel annoyed because you cannot do what you want",
    "cn_def": "令人沮喪的；令人洩氣的"
  },
  "upset": {
    "pos": "adj.",
    "en_def": "unhappy and worried or angry",
    "cn_def": "不高興的；心煩的"
  },
  "repay": {
    "pos": "v.",
    "en_def": "to pay back money that you borrowed",
    "cn_def": "償還；還（錢）"
  },
  "give back": {
    "pos": "v.phr.",
    "en_def": "to return something to the person who owns it",
    "cn_def": "歸還；還給"
  }
};

const EXTRA_GLOSSES = {};
