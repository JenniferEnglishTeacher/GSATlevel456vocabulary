// Topic 99 Quiz Data: Decision 決定
// Source word list: https://www.examword.com/group-topic/decision — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T99 - Decision 決定",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "choice",
    "pos": "n.",
    "cn_def": "選擇",
    "en_def": "the act of picking one thing from several",
    "sentence": "A: Why did the marketing team pick the small hotel by the lake for next month's training retreat instead of the big resort downtown? B: It was an easy {{BLANK}}, because the hotel offered a quiet meeting room, free parking and lower prices, and most staff wanted to get away from the busy city for a few days.",
    "cn": "A：行銷團隊為什麼選擇湖邊的小旅館作為下個月培訓營的地點，而不是市中心的大型度假村？ B：這是個很容易的【選擇】，因為那家旅館提供安靜的會議室、免費停車和較低的價格，而且大多數員工都想離開繁忙的城市幾天。"
  },
  {
    "word": "option",
    "pos": "n.",
    "cn_def": "選項；可選擇的事物",
    "en_def": "one of the things you can choose",
    "sentence": "A: The client in Osaka still hasn't received the replacement parts, so what can we do before their factory line stops on Friday? B: The fastest {{BLANK}} is to send the parts by air freight today; it costs more than shipping by sea, but they will arrive by Wednesday morning.",
    "cn": "A：大阪的客戶還沒收到替換零件，在他們的工廠生產線週五停工之前我們能做什麼？ B：最快的【選項】是今天用空運寄出零件；雖然比海運貴，但週三早上就能送達。"
  },
  {
    "word": "selection",
    "pos": "n.",
    "cn_def": "可供挑選的品項；選擇",
    "en_def": "a group of things that you can choose from",
    "sentence": "A: Have you decided where to take the visiting buyers from Germany for dinner after the trade show on Thursday evening? B: Yes, I booked the seafood restaurant near the harbor, because it has a wide {{BLANK}} of local dishes and a private room where we can talk about the contract quietly.",
    "cn": "A：你決定好週四晚上商展結束後，要帶來訪的德國買家去哪裡吃晚餐了嗎？ B：決定了，我訂了港口附近的海鮮餐廳，因為那裡的在地菜餚【選擇】很多，還有一間包廂讓我們可以安靜地討論合約。"
  },
  {
    "word": "judgment",
    "pos": "n.",
    "cn_def": "判斷；判斷力",
    "en_def": "the ability to make good decisions; an opinion",
    "sentence": "A: Should we accept the supplier's offer of a lower price if we sign a five-year contract with them today? B: I trust your {{BLANK}} on this, since you have worked with them for many years, but please check their delivery record carefully before you make the final call.",
    "cn": "A：如果我們今天和供應商簽五年合約，他們願意降價，我們應該接受嗎？ B：這件事我相信你的【判斷】，因為你和他們合作很多年了，但在做最後決定前，請仔細檢查他們的交貨紀錄。"
  },
  {
    "word": "conclusion",
    "pos": "n.",
    "cn_def": "結論",
    "en_def": "a decision you make after thinking about the facts",
    "sentence": "A: What did the research team say after they studied the customer survey results for almost three weeks? B: They came to the {{BLANK}} that young customers care more about fast delivery than low prices, so they suggest that we open a second warehouse in the north next year.",
    "cn": "A：研究團隊花了將近三週研究顧客調查結果後，他們怎麼說？ B：他們得出的【結論】是年輕顧客比起低價更在乎快速到貨，所以他們建議我們明年在北部開設第二座倉庫。"
  },
  {
    "word": "resolution",
    "pos": "n.",
    "cn_def": "解決；解決方案",
    "en_def": "a solution to a problem or an argument",
    "sentence": "A: Did the two department heads finally agree on how to share the meeting rooms on the third floor? B: Yes, after a long and tense discussion yesterday afternoon, they reached a {{BLANK}}: sales will use the rooms in the morning and the design team will use them after lunch.",
    "cn": "A：兩位部門主管對於如何共用三樓會議室，最後達成共識了嗎？ B：有，昨天下午經過漫長又緊張的討論後，他們達成了【解決方案】：業務部早上使用會議室，設計團隊則在午餐後使用。"
  },
  {
    "word": "plan",
    "pos": "n.",
    "cn_def": "計畫",
    "en_def": "an idea of what you will do and how you will do it",
    "sentence": "A: The office is moving to the new building next month, so how will we keep serving customers during the move? B: Our manager has a clear {{BLANK}}: half of the team will work from home each week, while the others pack boxes and answer phone calls at the old office.",
    "cn": "A：辦公室下個月要搬到新大樓，搬家期間我們要怎麼繼續服務客戶？ B：我們經理有一個清楚的【計畫】：每週一半的團隊在家工作，另一半則在舊辦公室打包箱子並接聽電話。"
  },
  {
    "word": "strategy",
    "pos": "n.",
    "cn_def": "策略",
    "en_def": "a careful plan for reaching a goal",
    "sentence": "A: Sales of our sports drinks dropped by twenty percent last year, so what is the new marketing director going to change? B: Her {{BLANK}} is to stop paying for TV ads and spend the money on online videos with young athletes, because most of our customers are under thirty.",
    "cn": "A：我們的運動飲料去年銷量下滑了百分之二十，新的行銷總監打算改變什麼？ B：她的【策略】是停止投放電視廣告，把錢花在與年輕運動員合作的網路影片上，因為我們大部分的顧客都不到三十歲。"
  },
  {
    "word": "policy",
    "pos": "n.",
    "cn_def": "政策；規定",
    "en_def": "a set of official rules of a company or government",
    "sentence": "A: Can I bring my dog to the office on Fridays, like the employees do at the design company next door? B: I'm afraid not, because our company {{BLANK}} does not allow pets in the building, since some workers have allergies and we often have important clients visiting.",
    "cn": "A：我可以像隔壁設計公司的員工那樣，週五帶我的狗來辦公室嗎？ B：恐怕不行，因為我們公司的【政策】不允許寵物進入大樓，有些員工會過敏，而且我們常有重要客戶來訪。"
  },
  {
    "word": "decide",
    "pos": "v.",
    "cn_def": "決定",
    "en_def": "to make a choice after thinking",
    "sentence": "A: Why is the hiring manager still interviewing people for the accountant position after three weeks of meetings? B: She needs to {{BLANK}} between two excellent candidates, one with more experience and one who speaks Japanese, and the director wants her answer by Monday at the latest.",
    "cn": "A：面試了三週，為什麼招聘經理還在面試會計職位的應徵者？ B：她必須在兩位優秀的候選人之間做【決定】，一位經驗比較豐富，另一位會說日文，而總監最晚週一就要她的答覆。"
  },
  {
    "word": "choose",
    "pos": "v.",
    "cn_def": "選擇；挑選",
    "en_def": "to pick one thing or person from a group",
    "sentence": "A: The company is giving each employee a free gift for the tenth anniversary, so what are the options this year? B: You can {{BLANK}} a pair of wireless headphones, a coffee machine or a shopping voucher, but you must fill out the online form before the end of this month.",
    "cn": "A：公司在十週年時要送每位員工一份免費禮物，今年有哪些選項？ B：你可以【選擇】一副無線耳機、一台咖啡機或一張購物禮券，但必須在這個月底前填好線上表格。"
  },
  {
    "word": "select",
    "pos": "v.",
    "cn_def": "挑選；選出",
    "en_def": "to choose carefully from a group",
    "sentence": "A: How will the committee decide which staff members get to attend the leadership course in Singapore next spring? B: They will {{BLANK}} five people based on their sales results and their managers' reports, and the company will pay for their flights, hotel rooms and meals.",
    "cn": "A：委員會要如何決定哪些員工可以參加明年春天在新加坡的領導力課程？ B：他們會根據業績和主管的報告【挑選】五個人，公司會支付他們的機票、飯店房間和餐費。"
  },
  {
    "word": "determine",
    "pos": "v.",
    "cn_def": "確定；查明",
    "en_def": "to find out the facts about something",
    "sentence": "A: Why did the airline cancel the flight to Taipei this afternoon even though the weather looks fine now? B: The engineers found a problem with one engine, and they need a few hours to {{BLANK}} what caused it before the plane can safely carry passengers again.",
    "cn": "A：現在天氣看起來還不錯，航空公司為什麼取消今天下午飛往台北的班機？ B：工程師發現其中一具引擎有問題，他們需要幾個小時來【查明】原因，飛機才能再次安全載客。"
  },
  {
    "word": "resolve",
    "pos": "v.",
    "cn_def": "解決",
    "en_def": "to find a way to end a problem",
    "sentence": "A: Why has the IT team been working so late every night this week while the rest of us go home at six? B: They are trying to {{BLANK}} a serious problem with the online payment system, because many customers cannot finish their orders and the company is losing money every hour.",
    "cn": "A：為什麼這週我們其他人六點就下班，資訊團隊卻每晚都工作到很晚？ B：他們正在努力【解決】線上付款系統的一個嚴重問題，因為很多顧客無法完成訂單，公司每小時都在虧錢。"
  },
  {
    "word": "weigh",
    "pos": "v.",
    "cn_def": "權衡；考慮",
    "en_def": "to think carefully about the good and bad points",
    "sentence": "A: Are you going to accept the job offer from the bank in Hong Kong, or will you stay with our company? B: I haven't answered yet, because I need to {{BLANK}} the higher salary against the long working hours and the cost of moving my whole family to another city.",
    "cn": "A：你要接受香港那家銀行的工作邀約，還是會留在我們公司？ B：我還沒回覆，因為我需要【權衡】較高的薪水和長時間工作，以及全家搬到另一個城市的費用。"
  },
  {
    "word": "consider",
    "pos": "v.",
    "cn_def": "考慮",
    "en_def": "to think about something before deciding",
    "sentence": "A: The printer in the sales office breaks down almost every week, so should we just call the repair company again? B: I think we should {{BLANK}} buying a new one instead, because the repairs have already cost us more than a new machine, and the staff waste a lot of time waiting.",
    "cn": "A：業務辦公室的印表機幾乎每週都故障，我們應該再打電話給維修公司嗎？ B：我覺得我們應該【考慮】改買一台新的，因為維修費已經比一台新機器還貴，而且員工浪費很多時間在等待。"
  },
  {
    "word": "evaluate",
    "pos": "v.",
    "cn_def": "評估；評價",
    "en_def": "to judge how good or useful something is",
    "sentence": "A: How does the hotel know whether the new front desk staff are doing a good job with guests? B: Every three months, the manager will {{BLANK}} their work by reading online reviews, watching how they handle check-ins and asking guests to fill out a short survey at checkout.",
    "cn": "A：飯店怎麼知道新的櫃台人員對待客人是否表現良好？ B：每三個月，經理會透過閱讀網路評論、觀察他們如何處理入住手續，以及請客人在退房時填寫簡短問卷，來【評估】他們的工作。"
  },
  {
    "word": "assess",
    "pos": "v.",
    "cn_def": "評估；估算",
    "en_def": "to study something to judge its amount or value",
    "sentence": "A: The storm last night broke several windows at our warehouse, so when can we start moving the goods back inside? B: The insurance company is sending an expert this morning to {{BLANK}} the damage, and we can start cleaning only after she takes photos and writes her report.",
    "cn": "A：昨晚的暴風雨打破了倉庫好幾扇窗戶，我們什麼時候可以開始把貨物搬回裡面？ B：保險公司今天早上會派一位專家來【評估】損害，等她拍照並寫好報告後，我們才能開始清理。"
  },
  {
    "word": "deliberate",
    "pos": "v.",
    "cn_def": "仔細考慮；商議",
    "en_def": "to think about or discuss something carefully before deciding",
    "sentence": "A: Why haven't we heard anything from the city council about our plan to build a parking lot behind the store? B: The council members will {{BLANK}} for at least two more weeks, because many local residents are worried about traffic and noise, and they want to hear every opinion first.",
    "cn": "A：關於我們打算在店後方蓋停車場的計畫，為什麼市議會到現在都還沒有任何消息？ B：議員們至少還要再【商議】兩週，因為很多當地居民擔心交通和噪音問題，他們想先聽取每一種意見。"
  },
  {
    "word": "hesitate",
    "pos": "v.",
    "cn_def": "猶豫；遲疑",
    "en_def": "to wait a moment before doing something because you are not sure",
    "sentence": "A: I'm new here and I still don't understand how to use the booking system for the meeting rooms on this floor. B: Please don't {{BLANK}} to ask me or anyone on the team for help, because we all had the same trouble during our first week, and we're happy to show you.",
    "cn": "A：我是新來的，還不太懂怎麼使用這層樓會議室的預約系統。 B：請不要【猶豫】，儘管向我或團隊任何人求助，因為我們第一週都遇過同樣的困難，很樂意教你。"
  },
  {
    "word": "doubt",
    "pos": "n.",
    "cn_def": "懷疑；疑慮",
    "en_def": "a feeling of not being sure about something",
    "sentence": "A: Do you think the new shopping mall will really open on time in December, as the developer promised in the newspaper? B: I have some {{BLANK}} about it, because when I drove past yesterday, the workers were still building the roof, and the parking area wasn't finished at all.",
    "cn": "A：你覺得新的購物中心真的會像開發商在報紙上承諾的那樣，在十二月準時開幕嗎？ B：我對此有些【懷疑】，因為我昨天開車經過時，工人還在蓋屋頂，停車場也完全還沒完工。"
  },
  {
    "word": "uncertain",
    "pos": "adj.",
    "cn_def": "不確定的",
    "en_def": "not sure; not yet decided",
    "sentence": "A: Has the director said whether the company will open the new branch in Vietnam next year? B: Not yet; the future of the project is still {{BLANK}}, because the cost of land has gone up quickly and the board wants to see the new sales numbers before it agrees.",
    "cn": "A：總監有說公司明年是否會在越南開新分公司嗎？ B：還沒有，這個專案的未來仍然【不確定】，因為土地成本上漲得很快，董事會想先看新的銷售數字再同意。"
  },
  {
    "word": "confident",
    "pos": "adj.",
    "cn_def": "有信心的",
    "en_def": "sure that something will happen or that you can do it",
    "sentence": "A: How do you feel about giving the presentation to the investors from London tomorrow morning? B: I feel quite {{BLANK}} now, because I practiced it three times with my team this week, and our sales results for the last quarter are the best in the company's history.",
    "cn": "A：明天早上要向倫敦來的投資人做簡報，你感覺如何？ B：我現在覺得相當【有信心】，因為我這週和團隊練習了三次，而且我們上一季的業績是公司史上最好的。"
  },
  {
    "word": "firm",
    "pos": "adj.",
    "cn_def": "堅定的；堅決的",
    "en_def": "strong and not likely to change",
    "sentence": "A: The customer keeps asking for a bigger discount, so should we lower the price again to keep his business? B: No, we need to be {{BLANK}} this time, because we already gave him fifteen percent off, and other buyers will expect the same deal if we agree again.",
    "cn": "A：那位客戶一直要求更大的折扣，我們應該再降價來留住他的生意嗎？ B：不，這次我們必須【堅定】，因為我們已經給他打了八五折，如果再答應，其他買家也會期待同樣的優惠。"
  },
  {
    "word": "final",
    "pos": "adj.",
    "cn_def": "最後的；最終的",
    "en_def": "last; not able to be changed",
    "sentence": "A: Can I still change the colors on the new product packaging, or is it too late now? B: I'm sorry, but the design you sent on Tuesday was the {{BLANK}} version, and the factory has already started printing fifty thousand boxes for the summer sales season.",
    "cn": "A：我還可以修改新產品包裝的顏色嗎？還是現在已經太遲了？ B：很抱歉，你週二寄來的設計就是【最終】版本，工廠已經開始為夏季銷售旺季印製五萬個盒子了。"
  },
  {
    "word": "careful",
    "pos": "adj.",
    "cn_def": "小心的；謹慎的",
    "en_def": "giving a lot of attention to avoid mistakes",
    "sentence": "A: The new contract with the shipping company is almost forty pages long, so can I just sign it this afternoon? B: Please be {{BLANK}} and read every page first, because last year we signed a contract too quickly and later found out that we had to pay extra fees for weekend deliveries.",
    "cn": "A：和貨運公司的新合約將近四十頁，我可以今天下午直接簽嗎？ B：請【小心】，先把每一頁都看過，因為去年我們太快簽約，後來才發現週末送貨必須額外付費。"
  },
  {
    "word": "wise",
    "pos": "adj.",
    "cn_def": "明智的",
    "en_def": "showing good sense and good judgment",
    "sentence": "A: Do you think I should ask my manager for a raise this week, right after the company announced that profits fell? B: It might not be {{BLANK}} to ask now; it would be better to wait until the end of the year, when everyone's performance is reviewed and the budget is clearer.",
    "cn": "A：公司才剛宣布獲利下滑，你覺得我這週應該向經理要求加薪嗎？ B：現在提出可能不太【明智】；最好等到年底大家的績效評估完、預算也比較明確的時候再說。"
  },
  {
    "word": "logical",
    "pos": "adj.",
    "cn_def": "合理的；合乎邏輯的",
    "en_def": "sensible and based on clear reasons",
    "sentence": "A: Why did the company move its call center from the city center to the small town near the airport? B: It was a {{BLANK}} step, because the rent there is much cheaper, many young people in the town need jobs, and our managers can easily fly in from head office.",
    "cn": "A：公司為什麼把客服中心從市中心搬到機場附近的小鎮？ B：這是很【合理】的一步，因為那裡的租金便宜得多，鎮上很多年輕人需要工作，而且我們的主管可以很方便地從總公司搭機過來。"
  },
  {
    "word": "practical",
    "pos": "adj.",
    "cn_def": "實用的；實際的",
    "en_def": "useful and suitable for real situations",
    "sentence": "A: The architect wants to put glass walls in every meeting room of our new office, so what do you think of her design? B: It looks beautiful, but it isn't very {{BLANK}}, because the rooms will get too hot in summer, and people won't have any privacy during interviews or salary talks.",
    "cn": "A：建築師想在新辦公室的每間會議室都裝玻璃牆，你覺得她的設計怎麼樣？ B：看起來很漂亮，但不太【實用】，因為夏天會議室會太熱，而且面試或談薪水時大家都沒有隱私。"
  },
  {
    "word": "consequence",
    "pos": "n.",
    "cn_def": "後果；結果",
    "en_def": "a result of something, often a bad one",
    "sentence": "A: What happened after the restaurant forgot to check the temperature of its fridges during the long holiday weekend? B: As a {{BLANK}}, it had to throw away almost all of its fresh meat and fish, and it stayed closed for two days until new food arrived from the supplier.",
    "cn": "A：那家餐廳在連假期間忘了檢查冰箱溫度，後來發生了什麼事？ B：【結果】它幾乎得把所有生鮮肉類和魚都丟掉，而且關店兩天，直到供應商送來新的食材。"
  },
  {
    "word": "outcome",
    "pos": "n.",
    "cn_def": "結果；成果",
    "en_def": "the final result of an event or process",
    "sentence": "A: How did the negotiations with the Korean electronics company go after three long days of meetings in Seoul? B: The {{BLANK}} was better than we expected, because they agreed to buy our software for all of their factories and to sign a contract for at least four years.",
    "cn": "A：在首爾開了漫長的三天會議後，與那家韓國電子公司的談判結果如何？ B：【結果】比我們預期的好，因為他們同意為旗下所有工廠購買我們的軟體，並簽下至少四年的合約。"
  },
  {
    "word": "factor",
    "pos": "n.",
    "cn_def": "因素",
    "en_def": "one of the things that affects a result or decision",
    "sentence": "A: Why did you choose the apartment near the train station, even though it is smaller and older than the one by the river? B: The most important {{BLANK}} for me was the short commute, because I start work at seven every morning and I don't want to spend two hours in traffic.",
    "cn": "A：靠河邊那間公寓比較新也比較大，你為什麼還是選擇車站附近的那間？ B：對我來說最重要的【因素】是通勤時間短，因為我每天早上七點就要上班，不想在路上塞兩個小時。"
  },
  {
    "word": "priority",
    "pos": "n.",
    "cn_def": "優先事項；首要之務",
    "en_def": "something that is more important than other things",
    "sentence": "A: There are so many tasks on my list this week, so which one should I work on first? B: Your top {{BLANK}} is the price report for the client meeting on Thursday; the training slides and the team schedule can wait until next week if you don't have enough time.",
    "cn": "A：我這週清單上的工作好多，我應該先做哪一項？ B：你的首要【優先事項】是週四客戶會議要用的價格報告；如果時間不夠，培訓投影片和團隊排班表可以等到下週再做。"
  },
  {
    "word": "compromise",
    "pos": "n.",
    "cn_def": "妥協；折衷辦法",
    "en_def": "an agreement in which each side gives up part of what it wants",
    "sentence": "A: The sales team wanted a bigger budget for travel, and the finance team wanted to cut costs, so what did the director decide? B: She found a {{BLANK}}: the sales staff can travel to meet important clients, but they must take economy flights and stay in cheaper hotels.",
    "cn": "A：業務團隊想要更多差旅預算，財務團隊卻想削減成本，總監最後怎麼決定？ B：她找到了一個【折衷辦法】：業務人員可以出差拜訪重要客戶，但必須搭經濟艙並住比較便宜的飯店。"
  }
];

const MCQS = [
  {
    "q": "Customers at the new café can build their own sandwiches. They have a _____ of five breads and ten fillings.",
    "options": [
      "choice",
      "priority",
      "factor",
      "consequence"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "If the train is delayed again, we still have another _____. We can rent a car at the station and drive.",
    "options": [
      "judgment",
      "outcome",
      "option",
      "policy"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The bookstore near our office has an excellent _____ of business magazines. I often buy one there during my lunch break.",
    "options": [
      "conclusion",
      "selection",
      "doubt",
      "strategy"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The new manager made a poor _____ when she hired her friend without an interview. Several team members complained to the director.",
    "options": [
      "outcome",
      "consequence",
      "priority",
      "judgment"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "After reading all the customer reviews, the team reached the _____ that the app was too slow. They will fix it next month.",
    "options": [
      "option",
      "factor",
      "conclusion",
      "policy"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Both sides talked for six hours without a break. Finally, they found a peaceful _____ to the long dispute over the land.",
    "options": [
      "resolution",
      "doubt",
      "selection",
      "priority"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Our business _____ shows how we will grow over the next five years. The bank wants to read it before giving us a loan.",
    "options": [
      "doubt",
      "judgment",
      "consequence",
      "plan"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The company's new pricing _____ is to offer lower prices to customers who buy in large amounts. It has already increased sales.",
    "options": [
      "doubt",
      "strategy",
      "outcome",
      "conclusion"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "According to the hotel's _____, guests must check out by eleven o'clock. Late checkout costs an extra twenty dollars.",
    "options": [
      "factor",
      "choice",
      "outcome",
      "policy"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "There is no _____ that Ms. Chen is the best person for the job. She has ten years of experience in sales.",
    "options": [
      "factor",
      "doubt",
      "policy",
      "selection"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Missing the deadline had a serious _____ for the company. The client cancelled the order and chose another supplier.",
    "options": [
      "consequence",
      "selection",
      "priority",
      "policy"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "Everyone in the office is waiting for the _____ of the board meeting. The results will be shared by email at noon.",
    "options": [
      "strategy",
      "option",
      "outcome",
      "factor"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Price is not the only _____ that customers think about. Many also care about fast delivery and good service.",
    "options": [
      "judgment",
      "factor",
      "resolution",
      "compromise"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "Safety is always our first _____ at every construction site. All workers must wear helmets at all times.",
    "options": [
      "doubt",
      "conclusion",
      "selection",
      "priority"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The landlord wanted a higher rent, but we wanted to pay less. In the end, we agreed on a _____ of a five percent increase.",
    "options": [
      "priority",
      "doubt",
      "compromise",
      "factor"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The team could not _____ on a date for the year-end party. Finally, the manager chose the second Friday in December.",
    "options": [
      "decide",
      "hesitate",
      "evaluate",
      "weigh"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Visitors can _____ between a guided tour and a self-guided tour of the factory. Both tours take about one hour.",
    "options": [
      "hesitate",
      "determine",
      "choose",
      "deliberate"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The judges will _____ three winners from more than two hundred designs. Each winner will receive a cash prize.",
    "options": [
      "select",
      "hesitate",
      "weigh",
      "deliberate"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Engineers are still trying to _____ the cause of the power failure. The building will stay closed until they find it.",
    "options": [
      "hesitate",
      "determine",
      "choose",
      "weigh"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Our customer service team works hard to _____ every complaint within two days. Most customers are happy with how quickly we respond.",
    "options": [
      "hesitate",
      "select",
      "weigh",
      "resolve"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Before you accept the offer, you should carefully _____ the risks against the benefits. Moving abroad is a big step.",
    "options": [
      "weigh",
      "hesitate",
      "resolve",
      "select"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "We will _____ your application and contact you within two weeks. Thank you for your interest in our company.",
    "options": [
      "hesitate",
      "determine",
      "decide",
      "consider"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "At the end of the course, students will _____ the teacher by filling out an online form. The results help us improve our training.",
    "options": [
      "hesitate",
      "decide",
      "evaluate",
      "resolve"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "If you have any questions about your order, please do not _____ to call us. Our staff are available twenty-four hours a day.",
    "options": [
      "evaluate",
      "hesitate",
      "determine",
      "select"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The jury will _____ for several hours before reaching a decision. Lawyers expect a result by tomorrow evening.",
    "options": [
      "select",
      "determine",
      "choose",
      "deliberate"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Because of the strong typhoon, it is still _____ whether the flight will leave on time. Please check the airport website for updates.",
    "options": [
      "careful",
      "uncertain",
      "wise",
      "practical"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Ms. Lin is _____ that her team will finish the project before the deadline. They have already completed most of the work.",
    "options": [
      "confident",
      "practical",
      "logical",
      "final"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The _____ day to register for the conference is Friday, March 3. After that date, the price will go up.",
    "options": [
      "careful",
      "firm",
      "final",
      "wise"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "These shoes are not very fashionable, but they are _____ for nurses who stand all day. They are comfortable and easy to clean.",
    "options": [
      "uncertain",
      "practical",
      "final",
      "confident"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Please be _____ when you carry the boxes of glass cups. If you drop one, the whole box may break.",
    "options": [
      "final",
      "logical",
      "uncertain",
      "careful"
    ],
    "answer": 3,
    "vocabIndex": 25
  }
];

const LOOKUP = {
  "choice": {
    "pos": "n.",
    "en_def": "the act of picking one thing from several",
    "cn_def": "選擇"
  },
  "option": {
    "pos": "n.",
    "en_def": "one of the things you can choose",
    "cn_def": "選項；可選擇的事物"
  },
  "selection": {
    "pos": "n.",
    "en_def": "a group of things that you can choose from",
    "cn_def": "可供挑選的品項；選擇"
  },
  "judgment": {
    "pos": "n.",
    "en_def": "the ability to make good decisions; an opinion",
    "cn_def": "判斷；判斷力"
  },
  "conclusion": {
    "pos": "n.",
    "en_def": "a decision you make after thinking about the facts",
    "cn_def": "結論"
  },
  "resolution": {
    "pos": "n.",
    "en_def": "a solution to a problem or an argument",
    "cn_def": "解決；解決方案"
  },
  "plan": {
    "pos": "n.",
    "en_def": "an idea of what you will do and how you will do it",
    "cn_def": "計畫"
  },
  "strategy": {
    "pos": "n.",
    "en_def": "a careful plan for reaching a goal",
    "cn_def": "策略"
  },
  "policy": {
    "pos": "n.",
    "en_def": "a set of official rules of a company or government",
    "cn_def": "政策；規定"
  },
  "decide": {
    "pos": "v.",
    "en_def": "to make a choice after thinking",
    "cn_def": "決定"
  },
  "choose": {
    "pos": "v.",
    "en_def": "to pick one thing or person from a group",
    "cn_def": "選擇；挑選"
  },
  "select": {
    "pos": "v.",
    "en_def": "to choose carefully from a group",
    "cn_def": "挑選；選出"
  },
  "determine": {
    "pos": "v.",
    "en_def": "to find out the facts about something",
    "cn_def": "確定；查明"
  },
  "resolve": {
    "pos": "v.",
    "en_def": "to find a way to end a problem",
    "cn_def": "解決"
  },
  "weigh": {
    "pos": "v.",
    "en_def": "to think carefully about the good and bad points",
    "cn_def": "權衡；考慮"
  },
  "consider": {
    "pos": "v.",
    "en_def": "to think about something before deciding",
    "cn_def": "考慮"
  },
  "evaluate": {
    "pos": "v.",
    "en_def": "to judge how good or useful something is",
    "cn_def": "評估；評價"
  },
  "assess": {
    "pos": "v.",
    "en_def": "to study something to judge its amount or value",
    "cn_def": "評估；估算"
  },
  "deliberate": {
    "pos": "v.",
    "en_def": "to think about or discuss something carefully before deciding",
    "cn_def": "仔細考慮；商議"
  },
  "hesitate": {
    "pos": "v.",
    "en_def": "to wait a moment before doing something because you are not sure",
    "cn_def": "猶豫；遲疑"
  },
  "doubt": {
    "pos": "n.",
    "en_def": "a feeling of not being sure about something",
    "cn_def": "懷疑；疑慮"
  },
  "uncertain": {
    "pos": "adj.",
    "en_def": "not sure; not yet decided",
    "cn_def": "不確定的"
  },
  "confident": {
    "pos": "adj.",
    "en_def": "sure that something will happen or that you can do it",
    "cn_def": "有信心的"
  },
  "firm": {
    "pos": "adj.",
    "en_def": "strong and not likely to change",
    "cn_def": "堅定的；堅決的"
  },
  "final": {
    "pos": "adj.",
    "en_def": "last; not able to be changed",
    "cn_def": "最後的；最終的"
  },
  "careful": {
    "pos": "adj.",
    "en_def": "giving a lot of attention to avoid mistakes",
    "cn_def": "小心的；謹慎的"
  },
  "wise": {
    "pos": "adj.",
    "en_def": "showing good sense and good judgment",
    "cn_def": "明智的"
  },
  "logical": {
    "pos": "adj.",
    "en_def": "sensible and based on clear reasons",
    "cn_def": "合理的；合乎邏輯的"
  },
  "practical": {
    "pos": "adj.",
    "en_def": "useful and suitable for real situations",
    "cn_def": "實用的；實際的"
  },
  "consequence": {
    "pos": "n.",
    "en_def": "a result of something, often a bad one",
    "cn_def": "後果；結果"
  },
  "outcome": {
    "pos": "n.",
    "en_def": "the final result of an event or process",
    "cn_def": "結果；成果"
  },
  "factor": {
    "pos": "n.",
    "en_def": "one of the things that affects a result or decision",
    "cn_def": "因素"
  },
  "priority": {
    "pos": "n.",
    "en_def": "something that is more important than other things",
    "cn_def": "優先事項；首要之務"
  },
  "compromise": {
    "pos": "n.",
    "en_def": "an agreement in which each side gives up part of what it wants",
    "cn_def": "妥協；折衷辦法"
  }
};

const EXTRA_GLOSSES = {};
