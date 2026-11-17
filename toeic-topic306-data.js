// Topic 306 Quiz Data: Problem 問題
// Source word list: https://www.examword.com/group-topic/problem — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T306 - Problem 問題",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "issue",
    "pos": "n.",
    "cn_def": "問題；議題",
    "en_def": "an important subject or problem that people discuss",
    "sentence": "A: Before we start the weekly meeting this afternoon, is there anything the sales team wants to discuss with the managers? B: Yes, the main {{BLANK}} is the new travel policy, because many staff members feel the hotel budget is too low for big cities like Tokyo.",
    "cn": "A：今天下午每週會議開始前，業務團隊有什麼想和經理們討論的嗎？ B：有，主要的【議題】是新的差旅政策，因為許多員工覺得對東京這樣的大城市來說，住宿預算太低了。"
  },
  {
    "word": "difficulty",
    "pos": "n.",
    "cn_def": "困難",
    "en_def": "the state of being hard to do or understand",
    "sentence": "A: How is the new accounting software working for your department now that everyone has had a week to practice with it? B: Most people like it, but a few older employees are having {{BLANK}} with the reporting tools, so I booked an extra training session for Friday morning.",
    "cn": "A：既然大家已經練習了一週，新的會計軟體在你們部門用得怎麼樣？ B：大多數人都喜歡，但有幾位資深員工在使用報表工具上有【困難】，所以我為週五早上多安排了一堂訓練課。"
  },
  {
    "word": "trouble",
    "pos": "n.",
    "cn_def": "麻煩；困擾",
    "en_def": "problems, worries, or difficulties",
    "sentence": "A: Did you manage to send the shipping documents to our customer in Singapore before the office closed yesterday evening? B: Not quite, because I had some {{BLANK}} with the printer on the third floor, but Kevin helped me fix it and the documents went out this morning.",
    "cn": "A：你昨天傍晚辦公室關門前，有把出貨文件寄給新加坡的客戶嗎？ B：沒有完全來得及，因為三樓的印表機給我出了些【麻煩】，不過凱文幫我修好了，文件今天早上已經寄出。"
  },
  {
    "word": "challenge",
    "pos": "n.",
    "cn_def": "挑戰",
    "en_def": "something new and difficult that tests your ability",
    "sentence": "A: Why did you decide to leave your comfortable job at the bank and join this small online startup last spring? B: I wanted a new {{BLANK}}, and building a customer service team from nothing seemed exciting, even though the hours are long and the salary is a little lower.",
    "cn": "A：你去年春天為什麼決定離開銀行那份舒適的工作，加入這家小型網路新創公司？ B：我想要一個新的【挑戰】，從零開始建立客服團隊感覺很令人興奮，雖然工時很長、薪水也低了一點。"
  },
  {
    "word": "obstacle",
    "pos": "n.",
    "cn_def": "障礙",
    "en_def": "something that blocks you from making progress",
    "sentence": "A: What do you think is stopping our company from opening more branches in southern Taiwan next year? B: The biggest {{BLANK}} is finding enough trained staff, because most experienced workers there already have stable jobs and do not want to move to a new employer.",
    "cn": "A：你認為是什麼阻礙了我們公司明年在南台灣開更多分店？ B：最大的【障礙】是找到足夠受過訓練的員工，因為那裡大多數有經驗的人都已經有穩定的工作，不想換到新雇主那裡。"
  },
  {
    "word": "barrier",
    "pos": "n.",
    "cn_def": "障礙；隔閡",
    "en_def": "something, such as a rule or a language, that keeps people apart or stops them from doing something",
    "sentence": "A: How did the meeting with the Japanese suppliers go, and were you able to agree on the new delivery schedule? B: It went well, although language was a {{BLANK}} at first, so we hired an interpreter for the afternoon and everything became much clearer after that.",
    "cn": "A：和日本供應商的會議進行得如何？你們有談妥新的交貨時程嗎？ B：很順利，雖然一開始語言是一道【隔閡】，所以我們下午請了一位口譯員，之後一切都清楚多了。"
  },
  {
    "word": "conflict",
    "pos": "n.",
    "cn_def": "衝突",
    "en_def": "a serious disagreement between people or groups",
    "sentence": "A: Why are the marketing team and the design team not sitting together at lunch anymore? B: There has been some {{BLANK}} between them since last month, because each team wants control of the new advertising campaign, and the director has not made a final decision yet.",
    "cn": "A：為什麼行銷團隊和設計團隊午餐時不再坐在一起了？ B：從上個月開始他們之間就有些【衝突】，因為兩個團隊都想主導新的廣告活動，而總監還沒有做出最後決定。"
  },
  {
    "word": "crisis",
    "pos": "n.",
    "cn_def": "危機",
    "en_def": "a time of great danger, difficulty, or worry",
    "sentence": "A: Why was the president on the evening news last night talking about our company's products? B: There was a safety {{BLANK}} after several customers reported that our heaters became too hot, so he apologized publicly and promised to replace every unit for free.",
    "cn": "A：為什麼總裁昨晚上了晚間新聞談論我們公司的產品？ B：有幾位顧客反映我們的暖氣機過熱，引發了安全【危機】，所以他公開道歉，並承諾免費更換每一台機器。"
  },
  {
    "word": "dilemma",
    "pos": "n.",
    "cn_def": "兩難；困境",
    "en_def": "a situation in which you must choose between two difficult options",
    "sentence": "A: Have you decided whether to accept the job offer in Shanghai or stay here in Taipei with your family? B: Not yet, it is a real {{BLANK}} for me, because the new position pays much more, but my children would have to change schools in the middle of the year.",
    "cn": "A：你決定好要接受上海的工作機會，還是和家人留在台北了嗎？ B：還沒，這對我來說真是個【兩難】，因為新職位的薪水高很多，但我的孩子就得在學年中途轉學。"
  },
  {
    "word": "complication",
    "pos": "n.",
    "cn_def": "複雜的問題；麻煩",
    "en_def": "something that makes a situation more difficult",
    "sentence": "A: Is the factory still going to finish the order for our customer in Germany by the end of this month? B: There is one {{BLANK}}, because the main supplier of plastic parts has just raised its prices, so we may need to find another company quickly to stay on schedule.",
    "cn": "A：工廠還能在這個月底前完成德國客戶的訂單嗎？ B：有一個【麻煩的狀況】，因為主要的塑膠零件供應商剛漲價，所以我們可能得快點找另一家公司，才能維持進度。"
  },
  {
    "word": "setback",
    "pos": "n.",
    "cn_def": "挫折；阻礙",
    "en_def": "something that delays progress or makes a situation worse",
    "sentence": "A: How is the construction of the new office building downtown going, and will we be able to move in by March? B: We had a small {{BLANK}} last week when heavy rain filled the basement with water, but the builders say they can still finish on time if the weather improves.",
    "cn": "A：市中心新辦公大樓的工程進行得怎麼樣？我們三月前能搬進去嗎？ B：上週大雨讓地下室積水，我們遇到了一點【挫折】，但建商說如果天氣好轉，他們仍然可以準時完工。"
  },
  {
    "word": "risk",
    "pos": "n.",
    "cn_def": "風險",
    "en_def": "the chance that something bad will happen",
    "sentence": "A: Should we invest all of this year's extra profit in the new overseas market that our consultant recommended? B: I think there is too much {{BLANK}} in putting everything into one plan, so let us spend half on the new market and keep the rest for emergencies.",
    "cn": "A：我們應該把今年所有額外的利潤都投資在顧問推薦的新海外市場嗎？ B：我覺得把全部押在一個計畫上【風險】太大，所以我們拿一半投入新市場，其餘的留作緊急備用吧。"
  },
  {
    "word": "fault",
    "pos": "n.",
    "cn_def": "過錯；責任",
    "en_def": "responsibility for a mistake or for something bad that happened",
    "sentence": "A: Why is the customer so angry with our team, and who sent him the wrong invoice last Tuesday afternoon? B: Actually, it was my {{BLANK}}, because I copied the numbers from an old file without checking them, so I will call him today and send a corrected copy.",
    "cn": "A：那位客戶為什麼對我們團隊這麼生氣？上週二下午是誰寄錯發票給他的？ B：其實是我的【錯】，因為我從舊檔案複製數字卻沒有核對，所以我今天會打電話給他，並寄一份更正後的發票。"
  },
  {
    "word": "error",
    "pos": "n.",
    "cn_def": "錯誤",
    "en_def": "a mistake",
    "sentence": "A: Why did the online store show the price of the new laptop as only one hundred dollars this morning? B: There was a computer {{BLANK}} in the pricing system, and several customers ordered before we noticed, so the manager is now deciding whether to honor those orders.",
    "cn": "A：為什麼網路商店今天早上把新筆電的價格顯示成只有一百美元？ B：定價系統出現了電腦【錯誤】，在我們發現之前已經有好幾位顧客下單，所以經理現在正在決定是否要履行那些訂單。"
  },
  {
    "word": "failure",
    "pos": "n.",
    "cn_def": "失敗",
    "en_def": "a lack of success",
    "sentence": "A: Why did the company stop selling the smart watch only six months after it was launched with such a big advertising campaign? B: It was a complete {{BLANK}}, because the battery lasted less than a day and customers kept returning it, so the board decided to stop production and save money.",
    "cn": "A：公司為什麼在智慧手錶以大型廣告活動上市後僅六個月就停賣了？ B：它徹底【失敗】了，因為電池撐不到一天，顧客不斷退貨，所以董事會決定停產以節省開支。"
  },
  {
    "word": "defect",
    "pos": "n.",
    "cn_def": "瑕疵；缺陷",
    "en_def": "a fault or weakness in a product that stops it from working well",
    "sentence": "A: Why are so many boxes of coffee machines waiting by the back door of the warehouse today? B: The quality team found a {{BLANK}} in the power switch of this batch, so we are sending all of them back to the factory before any store receives them.",
    "cn": "A：為什麼今天倉庫後門旁堆了這麼多箱咖啡機？ B：品管團隊發現這批貨的電源開關有【瑕疵】，所以我們要在任何門市收到貨之前，把它們全部退回工廠。"
  },
  {
    "word": "shortage",
    "pos": "n.",
    "cn_def": "短缺；不足",
    "en_def": "a situation when there is not enough of something",
    "sentence": "A: Why has the restaurant downstairs removed fresh salads from its lunch menu for the past two weeks? B: The owner told me there is a {{BLANK}} of vegetables because of the typhoon in the south, so prices have doubled and he cannot buy enough lettuce for customers.",
    "cn": "A：樓下的餐廳為什麼過去兩週把新鮮沙拉從午餐菜單上拿掉了？ B：老闆告訴我，因為南部颱風造成蔬菜【短缺】，價格翻倍，他買不到足夠的萵苣供應客人。"
  },
  {
    "word": "damage",
    "pos": "n.",
    "cn_def": "損害；損壞",
    "en_def": "physical harm that makes something less useful or valuable",
    "sentence": "A: Did the earthquake last night cause any problems at the warehouse near the harbor? B: There was some {{BLANK}} to the shelves and a few boxes of glasses fell and broke, but nobody was hurt, and the insurance company is sending someone to check this afternoon.",
    "cn": "A：昨晚的地震有對港口附近的倉庫造成什麼問題嗎？ B：貨架有些【損壞】，還有幾箱玻璃杯掉下來摔破了，但沒有人受傷，保險公司今天下午會派人來檢查。"
  },
  {
    "word": "harm",
    "pos": "n.",
    "cn_def": "傷害",
    "en_def": "injury or damage to a person or thing",
    "sentence": "A: Is it safe for the cleaning staff to use the new chemical product in the kitchen every day? B: The supplier says it causes no {{BLANK}} to people if they wear gloves and open the windows, but we should still read the safety instructions carefully before we use it.",
    "cn": "A：清潔人員每天在廚房使用新的化學清潔劑安全嗎？ B：供應商說只要戴手套並打開窗戶，就不會對人造成【傷害】，但我們使用前還是應該仔細閱讀安全說明。"
  },
  {
    "word": "complaint",
    "pos": "n.",
    "cn_def": "抱怨；投訴",
    "en_def": "a statement that you are unhappy or not satisfied with something",
    "sentence": "A: Why does the hotel manager want to meet with all the front desk staff before the evening shift starts? B: A guest made a {{BLANK}} about rude service and a long wait at check-in yesterday, so the manager wants to review the rules and improve our customer service.",
    "cn": "A：為什麼飯店經理要在晚班開始前和所有櫃台人員開會？ B：昨天有位房客【投訴】服務態度不好、入住等太久，所以經理想重新檢視規定，改善我們的客戶服務。"
  },
  {
    "word": "concern",
    "pos": "n.",
    "cn_def": "擔憂；關切",
    "en_def": "a feeling of worry about something important",
    "sentence": "A: Why did the parents ask for a meeting with the school principal about the new bus company? B: Their main {{BLANK}} is safety, because the drivers seem to change every week and some children have arrived late, so they want the school to check the company carefully.",
    "cn": "A：家長們為什麼要求和校長開會討論新的校車公司？ B：他們主要的【擔憂】是安全，因為司機似乎每週都在換，而且有些孩子遲到了，所以他們希望學校仔細審查這家公司。"
  },
  {
    "word": "pressure",
    "pos": "n.",
    "cn_def": "壓力",
    "en_def": "stress caused by the things you must do or the demands of other people",
    "sentence": "A: You look really tired today, so are you still working late on the annual report for the board? B: Yes, there is a lot of {{BLANK}} on our team to finish it by Friday, because the directors want to present the numbers to investors at next Monday's meeting.",
    "cn": "A：你今天看起來好累，還在為董事會的年度報告加班嗎？ B：對，我們團隊要在週五前完成，【壓力】很大，因為董事們想在下週一的會議上向投資人報告這些數字。"
  },
  {
    "word": "stress",
    "pos": "n.",
    "cn_def": "壓力；緊張",
    "en_def": "a feeling of worry caused by difficult situations",
    "sentence": "A: How do you stay so calm during the busy holiday season when the store is full of customers every day? B: I take a short walk during my lunch break and go to the gym after work, because exercise helps me reduce {{BLANK}} and sleep better at night.",
    "cn": "A：在店裡每天都擠滿顧客的忙碌假期旺季，你是怎麼保持這麼冷靜的？ B：我午休時會散散步，下班後去健身房，因為運動能幫我減輕【壓力】，晚上也睡得比較好。"
  },
  {
    "word": "burden",
    "pos": "n.",
    "cn_def": "負擔",
    "en_def": "a heavy responsibility, duty, or cost",
    "sentence": "A: Why did the company decide to hire two more assistants for the accounting department this autumn? B: The extra work after the merger became a heavy {{BLANK}} for the three accountants, and they were staying until ten every night, so the manager finally approved new positions.",
    "cn": "A：公司今年秋天為什麼決定為會計部門再請兩位助理？ B：合併後多出來的工作成了三位會計師沉重的【負擔】，他們每晚都待到十點，所以經理終於批准了新職缺。"
  },
  {
    "word": "threat",
    "pos": "n.",
    "cn_def": "威脅",
    "en_def": "something that may cause danger, harm, or loss",
    "sentence": "A: Why is the sales director so worried about the new electronics store that opened across the street last weekend? B: She sees it as a big {{BLANK}} to our business, because it offers lower prices and longer opening hours, and many of our regular customers have already visited it.",
    "cn": "A：業務總監為什麼這麼擔心上週末在對街開幕的新電器行？ B：她認為那對我們的生意是一大【威脅】，因為它價格更低、營業時間更長，而且我們許多老顧客已經去逛過了。"
  },
  {
    "word": "dispute",
    "pos": "n.",
    "cn_def": "爭議；糾紛",
    "en_def": "a serious disagreement, often about money or rules",
    "sentence": "A: Why hasn't the new shopping mall opened yet, even though the building looks finished? B: There is a legal {{BLANK}} between the owner and the construction company about the final payment, so the opening date has been moved to next spring until the lawyers solve it.",
    "cn": "A：新購物中心的建築看起來已經完工了，為什麼還沒開幕？ B：業主和營造公司之間對尾款有法律【糾紛】，所以開幕日期延到明年春天，要等律師解決這件事。"
  },
  {
    "word": "misunderstanding",
    "pos": "n.",
    "cn_def": "誤會；誤解",
    "en_def": "a situation in which someone does not understand something correctly",
    "sentence": "A: Why did the client arrive at our office on Monday when the meeting was planned for Wednesday afternoon? B: It was just a {{BLANK}} about the date in our emails, so I apologized, showed him around the office, and we moved the meeting to that afternoon instead.",
    "cn": "A：會議原本安排在週三下午，為什麼那位客戶週一就來我們辦公室了？ B：那只是我們電子郵件裡對日期的【誤會】，所以我向他道歉，帶他參觀辦公室，然後把會議改到當天下午。"
  },
  {
    "word": "delay",
    "pos": "n.",
    "cn_def": "延誤；延遲",
    "en_def": "a period of time when something happens later than planned",
    "sentence": "A: Why are so many passengers sitting on the floor near gate twelve at the airport this evening? B: There is a three-hour {{BLANK}} because of a storm in Hong Kong, so the airline is giving everyone free meal coupons while they wait for the plane to arrive.",
    "cn": "A：今晚機場十二號登機門附近為什麼有這麼多乘客坐在地上？ B：因為香港有暴風雨，航班【延誤】了三小時，所以航空公司在大家等飛機抵達時發放免費餐券。"
  },
  {
    "word": "cope",
    "pos": "v.",
    "cn_def": "應付；處理",
    "en_def": "to deal successfully with a difficult situation",
    "sentence": "A: How is the new receptionist doing now that the busy conference season has started at the hotel? B: She is learning quickly and can {{BLANK}} with large groups of guests at the same time, so I think she will be ready to work the night shift alone next month.",
    "cn": "A：飯店忙碌的會議旺季開始了，新來的接待員表現如何？ B：她學得很快，能同時【應付】大批房客，所以我想她下個月就能獨自值夜班了。"
  },
  {
    "word": "overcome",
    "pos": "v.",
    "cn_def": "克服；戰勝",
    "en_def": "to succeed in dealing with a problem or difficulty",
    "sentence": "A: How did your small bakery survive after the big supermarket chain opened a store on the same street? B: We worked hard to {{BLANK}} the competition by baking fresh bread every morning, offering friendly service, and delivering cakes to local offices for free.",
    "cn": "A：大型連鎖超市在同一條街開店後，你的小麵包店是怎麼撐下來的？ B：我們努力【克服】競爭，每天早上烤新鮮麵包、提供親切的服務，還免費把蛋糕送到附近的辦公室。"
  },
  {
    "word": "resolve",
    "pos": "v.",
    "cn_def": "解決",
    "en_def": "to find a solution to a problem or disagreement",
    "sentence": "A: The customer from Osaka called three times today about the missing package, so what should I tell him? B: Tell him we will {{BLANK}} the matter by tomorrow, because the delivery company has found the box and will send it by express mail at no extra cost.",
    "cn": "A：那位大阪的客戶今天為了遺失的包裹打了三次電話，我該怎麼跟他說？ B：告訴他我們明天前會【解決】這件事，因為貨運公司已經找到箱子了，會免費用快遞寄出。"
  },
  {
    "word": "tackle",
    "pos": "v.",
    "cn_def": "處理；著手解決",
    "en_def": "to make a serious effort to deal with a difficult problem",
    "sentence": "A: The new manager seems very busy, so what is she going to focus on during her first month in the office? B: She plans to {{BLANK}} the high staff turnover first, because ten employees quit last year, and she wants to understand why before hiring anyone new.",
    "cn": "A：新經理看起來很忙，她上任第一個月打算專注在什麼事情上？ B：她打算先【處理】員工流動率高的問題，因為去年有十名員工離職，她想在招募新人之前先了解原因。"
  },
  {
    "word": "serious",
    "pos": "adj.",
    "cn_def": "嚴重的",
    "en_def": "very bad, worrying, or important",
    "sentence": "A: Was anyone hurt when the delivery van hit the front gate of the factory this morning? B: Luckily it was not a {{BLANK}} accident, because the driver was going slowly, but the gate is broken and the security guards must check every car by hand today.",
    "cn": "A：今天早上送貨車撞上工廠大門時，有人受傷嗎？ B：幸好那不是【嚴重的】事故，因為司機開得很慢，但大門壞了，警衛今天得人工檢查每一輛車。"
  }
];

const MCQS = [
  {
    "q": "The board will discuss the parking _____ at Friday's meeting. Many employees have complained that there are not enough spaces near the building.",
    "options": [
      "issue",
      "failure",
      "defect",
      "setback"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Learning a new software system in only one week is a real _____ for our team. However, everyone is working hard and helping each other.",
    "options": [
      "complaint",
      "challenge",
      "defect",
      "dispute"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "High rent is the main _____ to opening a second café downtown. The owner is now looking for a cheaper location in the suburbs.",
    "options": [
      "complaint",
      "error",
      "obstacle",
      "dispute"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Many foreign workers say that language is a _____ to making friends at work. The company now offers free Chinese lessons every Tuesday.",
    "options": [
      "defect",
      "crisis",
      "complaint",
      "barrier"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The manager tries to avoid _____ between team members by setting clear roles. Everyone knows exactly which tasks they are responsible for.",
    "options": [
      "defect",
      "conflict",
      "shortage",
      "failure"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The airline faced a financial _____ when fuel prices rose sharply last year. It had to cancel several routes and reduce its staff.",
    "options": [
      "crisis",
      "defect",
      "complaint",
      "fault"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Ms. Lin faced a difficult _____ when two good companies offered her jobs on the same day. She finally chose the one closer to home.",
    "options": [
      "defect",
      "shortage",
      "damage",
      "dilemma"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The project was going well until an unexpected _____ arose with the building permit. The city asked for new safety documents before work continued.",
    "options": [
      "shortage",
      "harm",
      "complication",
      "stress"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Losing our biggest client was a major _____ for the sales team this quarter. However, the director believes we can recover by summer.",
    "options": [
      "setback",
      "defect",
      "harm",
      "shortage"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Opening a store in a new country always involves some _____. The company studied the local market carefully before making its decision.",
    "options": [
      "fault",
      "defect",
      "risk",
      "complaint"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The shipping company admitted that the broken items were its _____. It offered to replace them and pay for the extra delivery.",
    "options": [
      "risk",
      "fault",
      "threat",
      "concern"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Please check the invoice carefully before sending it to the client. Last month a small _____ in the total caused a long payment delay.",
    "options": [
      "threat",
      "barrier",
      "burden",
      "error"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The new product was a complete _____ because it was too expensive for most customers. The company stopped selling it after three months.",
    "options": [
      "barrier",
      "concern",
      "failure",
      "pressure"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Every phone is tested before it leaves the factory. If a worker finds a _____ in the screen, the phone is sent back for repair.",
    "options": [
      "defect",
      "dilemma",
      "conflict",
      "burden"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The hospital is facing a serious _____ of nurses this winter. It is offering higher salaries and free housing to attract new staff.",
    "options": [
      "defect",
      "fault",
      "error",
      "shortage"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The storm caused serious _____ to the roof of our warehouse. Repairs will take about two weeks and cost thousands of dollars.",
    "options": [
      "complaint",
      "damage",
      "dilemma",
      "concern"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "If you are unhappy with our service, please fill out a _____ form at the front desk. A manager will contact you within two days.",
    "options": [
      "complaint",
      "crisis",
      "defect",
      "setback"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Several investors expressed _____ about the company's rising costs at the annual meeting. The CEO promised to cut spending next year.",
    "options": [
      "defect",
      "shortage",
      "setback",
      "concern"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Sales staff often work under a lot of _____ at the end of the year. They must reach their targets before December thirty-first.",
    "options": [
      "defect",
      "pressure",
      "dispute",
      "complication"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Taking short breaks during the day can help employees reduce _____. Many companies now offer quiet rooms where workers can relax.",
    "options": [
      "defect",
      "dispute",
      "stress",
      "fault"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Rising rent has become a heavy _____ for many small shop owners. Some of them are moving their businesses online to save money.",
    "options": [
      "defect",
      "dilemma",
      "misunderstanding",
      "burden"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Online shopping is a growing _____ to traditional bookstores. Many of them now hold reading events to attract customers back to their shops.",
    "options": [
      "threat",
      "fault",
      "complaint",
      "error"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The two companies finally settled their contract _____ after six months of talks. Both sides agreed to share the extra costs equally.",
    "options": [
      "shortage",
      "defect",
      "dispute",
      "stress"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The client and the designer had a _____ about the color of the new logo. After a short phone call, they quickly agreed on blue.",
    "options": [
      "shortage",
      "misunderstanding",
      "defect",
      "failure"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Because of heavy snow, there will be a two-hour _____ for all morning flights. Passengers should check the airport website for updates.",
    "options": [
      "delay",
      "defect",
      "complaint",
      "burden"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The new assistant can _____ with a heavy workload very well. She always finishes her tasks on time, even during busy weeks.",
    "options": [
      "resolve",
      "tackle",
      "cope",
      "overcome"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "With hard work and good training, our team was able to _____ many difficulties last year. As a result, sales increased by twenty percent.",
    "options": [
      "cope",
      "threaten",
      "delay",
      "overcome"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Our customer service team tries to _____ every complaint within twenty-four hours. Customers receive an email once the problem is fixed.",
    "options": [
      "cope",
      "resolve",
      "delay",
      "damage"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The city government plans to _____ traffic problems downtown by building a new subway line. Construction will begin early next spring.",
    "options": [
      "tackle",
      "cope",
      "harm",
      "complain"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "The safety inspector found no _____ problems at the factory during his visit. He only asked the workers to clean the storage area.",
    "options": [
      "patient",
      "generous",
      "punctual",
      "serious"
    ],
    "answer": 3,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "issue": {
    "pos": "n.",
    "en_def": "an important subject or problem that people discuss",
    "cn_def": "問題；議題"
  },
  "difficulty": {
    "pos": "n.",
    "en_def": "the state of being hard to do or understand",
    "cn_def": "困難"
  },
  "trouble": {
    "pos": "n.",
    "en_def": "problems, worries, or difficulties",
    "cn_def": "麻煩；困擾"
  },
  "challenge": {
    "pos": "n.",
    "en_def": "something new and difficult that tests your ability",
    "cn_def": "挑戰"
  },
  "obstacle": {
    "pos": "n.",
    "en_def": "something that blocks you from making progress",
    "cn_def": "障礙"
  },
  "barrier": {
    "pos": "n.",
    "en_def": "something, such as a rule or a language, that keeps people apart or stops them from doing something",
    "cn_def": "障礙；隔閡"
  },
  "conflict": {
    "pos": "n.",
    "en_def": "a serious disagreement between people or groups",
    "cn_def": "衝突"
  },
  "crisis": {
    "pos": "n.",
    "en_def": "a time of great danger, difficulty, or worry",
    "cn_def": "危機"
  },
  "dilemma": {
    "pos": "n.",
    "en_def": "a situation in which you must choose between two difficult options",
    "cn_def": "兩難；困境"
  },
  "complication": {
    "pos": "n.",
    "en_def": "something that makes a situation more difficult",
    "cn_def": "複雜的問題；麻煩"
  },
  "setback": {
    "pos": "n.",
    "en_def": "something that delays progress or makes a situation worse",
    "cn_def": "挫折；阻礙"
  },
  "risk": {
    "pos": "n.",
    "en_def": "the chance that something bad will happen",
    "cn_def": "風險"
  },
  "fault": {
    "pos": "n.",
    "en_def": "responsibility for a mistake or for something bad that happened",
    "cn_def": "過錯；責任"
  },
  "error": {
    "pos": "n.",
    "en_def": "a mistake",
    "cn_def": "錯誤"
  },
  "failure": {
    "pos": "n.",
    "en_def": "a lack of success",
    "cn_def": "失敗"
  },
  "defect": {
    "pos": "n.",
    "en_def": "a fault or weakness in a product that stops it from working well",
    "cn_def": "瑕疵；缺陷"
  },
  "shortage": {
    "pos": "n.",
    "en_def": "a situation when there is not enough of something",
    "cn_def": "短缺；不足"
  },
  "damage": {
    "pos": "n.",
    "en_def": "physical harm that makes something less useful or valuable",
    "cn_def": "損害；損壞"
  },
  "harm": {
    "pos": "n.",
    "en_def": "injury or damage to a person or thing",
    "cn_def": "傷害"
  },
  "complaint": {
    "pos": "n.",
    "en_def": "a statement that you are unhappy or not satisfied with something",
    "cn_def": "抱怨；投訴"
  },
  "concern": {
    "pos": "n.",
    "en_def": "a feeling of worry about something important",
    "cn_def": "擔憂；關切"
  },
  "pressure": {
    "pos": "n.",
    "en_def": "stress caused by the things you must do or the demands of other people",
    "cn_def": "壓力"
  },
  "stress": {
    "pos": "n.",
    "en_def": "a feeling of worry caused by difficult situations",
    "cn_def": "壓力；緊張"
  },
  "burden": {
    "pos": "n.",
    "en_def": "a heavy responsibility, duty, or cost",
    "cn_def": "負擔"
  },
  "threat": {
    "pos": "n.",
    "en_def": "something that may cause danger, harm, or loss",
    "cn_def": "威脅"
  },
  "dispute": {
    "pos": "n.",
    "en_def": "a serious disagreement, often about money or rules",
    "cn_def": "爭議；糾紛"
  },
  "misunderstanding": {
    "pos": "n.",
    "en_def": "a situation in which someone does not understand something correctly",
    "cn_def": "誤會；誤解"
  },
  "delay": {
    "pos": "n.",
    "en_def": "a period of time when something happens later than planned",
    "cn_def": "延誤；延遲"
  },
  "cope": {
    "pos": "v.",
    "en_def": "to deal successfully with a difficult situation",
    "cn_def": "應付；處理"
  },
  "overcome": {
    "pos": "v.",
    "en_def": "to succeed in dealing with a problem or difficulty",
    "cn_def": "克服；戰勝"
  },
  "resolve": {
    "pos": "v.",
    "en_def": "to find a solution to a problem or disagreement",
    "cn_def": "解決"
  },
  "tackle": {
    "pos": "v.",
    "en_def": "to make a serious effort to deal with a difficult problem",
    "cn_def": "處理；著手解決"
  },
  "serious": {
    "pos": "adj.",
    "en_def": "very bad, worrying, or important",
    "cn_def": "嚴重的"
  }
};

const EXTRA_GLOSSES = {};
