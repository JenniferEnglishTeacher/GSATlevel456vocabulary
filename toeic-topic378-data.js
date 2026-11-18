// Topic 378 Quiz Data: Struggle 奮鬥
// Source word list: https://www.examword.com/group-topic/struggle — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T378 - Struggle 奮鬥",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "difficulty",
    "pos": "n.",
    "cn_def": "困難；難處",
    "en_def": "a problem or something that is hard to do",
    "sentence": "A: Why did the marketing team need two extra weeks to finish the new brochure for our overseas customers in Japan and Korea? B: They had some {{BLANK}} with the translation, because the agency they hired made many mistakes, so the designer had to wait until a new translator checked every page carefully.",
    "cn": "A：為什麼行銷團隊需要多花兩週，才能完成給日本和韓國海外客戶的新手冊？ B：他們在翻譯上遇到了一些【困難】，因為他們雇用的翻譯社犯了很多錯誤，所以設計師必須等新的譯者仔細檢查每一頁。"
  },
  {
    "word": "challenge",
    "pos": "n.",
    "cn_def": "挑戰",
    "en_def": "something new and difficult that tests your ability",
    "sentence": "A: How do you feel about moving to the Singapore office next month and managing a sales team that you have never worked with before? B: I think it will be a big {{BLANK}} for me, because the market there is very different, but I am excited to learn new skills and meet new clients.",
    "cn": "A：你對下個月調到新加坡辦公室，並管理一個你從來沒合作過的業務團隊有什麼感覺？ B：我覺得這對我來說會是很大的【挑戰】，因為那裡的市場非常不一樣，但我很期待學習新技能並認識新客戶。"
  },
  {
    "word": "obstacle",
    "pos": "n.",
    "cn_def": "障礙；阻礙",
    "en_def": "something that blocks you or makes progress difficult",
    "sentence": "A: What is stopping us from opening the new branch downtown before the end of this year, since we already found a good location near the station? B: The biggest {{BLANK}} is the building permit, because the city office is still reviewing our plans, and we cannot start construction until they approve them.",
    "cn": "A：既然我們已經在車站附近找到不錯的地點，是什麼阻止我們在今年底前開設市中心的新分店？ B：最大的【障礙】是建築許可，因為市政府還在審查我們的計畫，在他們批准之前我們無法開始施工。"
  },
  {
    "word": "barrier",
    "pos": "n.",
    "cn_def": "障礙；隔閡",
    "en_def": "something that stops people from communicating or doing something",
    "sentence": "A: Why do our new staff members from overseas sometimes feel left out during the weekly meetings, even though everyone in the department is friendly to them? B: Language is still a {{BLANK}} for some of them, so we are going to offer free Chinese lessons after work and share the meeting notes in English as well.",
    "cn": "A：為什麼我們從海外來的新員工在每週會議時有時會覺得被冷落，雖然部門裡每個人都對他們很友善？ B：語言對他們之中一些人來說仍是一道【障礙】，所以我們打算下班後提供免費中文課，並且也用英文分享會議紀錄。"
  },
  {
    "word": "hardship",
    "pos": "n.",
    "cn_def": "艱難；困苦",
    "en_def": "a difficult situation in life, often because of a lack of money",
    "sentence": "A: Why did the company decide to give all the factory workers an extra bonus this winter, even though sales were lower than last year? B: The manager knew that many families were facing {{BLANK}} because prices for food and rent had gone up so much, and she wanted to thank the workers for their loyalty.",
    "cn": "A：為什麼公司決定今年冬天發給所有工廠員工一筆額外獎金，即使銷售額比去年低？ B：經理知道許多家庭因為食物和房租價格大幅上漲而面臨【困苦】，她也想感謝員工們的忠誠。"
  },
  {
    "word": "setback",
    "pos": "n.",
    "cn_def": "挫折；阻礙",
    "en_def": "a problem that delays progress or makes things worse",
    "sentence": "A: Is the software update for our online booking system still going to be ready for customers by the first week of next month? B: Unfortunately, we had a {{BLANK}} yesterday when the main server crashed during testing, so the engineers need about ten more days to fix the problem and run the tests again.",
    "cn": "A：我們線上訂位系統的軟體更新，仍然能在下個月第一週為客戶準備好嗎？ B：很遺憾，昨天主伺服器在測試時當機，我們遭遇了【挫折】，所以工程師需要大約再十天來修好問題並重新測試。"
  },
  {
    "word": "failure",
    "pos": "n.",
    "cn_def": "失敗；故障",
    "en_def": "a lack of success; a time when something stops working",
    "sentence": "A: Why were all the flights from the airport delayed for almost three hours this morning, and when did the passengers finally get on their planes? B: There was a power {{BLANK}} in the control tower at around six o'clock, so no planes could take off until the technicians repaired the system just before nine.",
    "cn": "A：為什麼今天早上機場所有航班都延誤了將近三小時，乘客最後是什麼時候登機的？ B：大約六點時塔台發生電力【故障】，所以在技術人員快九點修好系統之前，沒有飛機能起飛。"
  },
  {
    "word": "fail",
    "pos": "v.",
    "cn_def": "失敗；未能",
    "en_def": "to not succeed in doing something",
    "sentence": "A: Should we still send the product samples to the client by regular mail, or is there a faster way to get them there before Friday? B: Please use the express service this time, because if we {{BLANK}} to deliver the samples before their board meeting, we might lose the contract to our competitor.",
    "cn": "A：我們還要用一般郵件把產品樣品寄給客戶嗎？還是有更快的方式在星期五前送到？ B：這次請用快遞服務，因為如果我們【未能】在他們的董事會議前送達樣品，我們可能會把合約輸給競爭對手。"
  },
  {
    "word": "effort",
    "pos": "n.",
    "cn_def": "努力",
    "en_def": "hard work that you do to achieve something",
    "sentence": "A: How did the small team in the customer service department manage to answer so many complaints after the delivery problems last week? B: Everyone worked late and made a great {{BLANK}} to call each customer personally, and the director was so pleased that she bought dinner for the whole team on Friday night.",
    "cn": "A：上週配送出問題後，客服部門的小團隊是如何處理那麼多投訴的？ B：每個人都加班到很晚，並付出很大的【努力】親自打電話給每位客戶，主管非常滿意，星期五晚上請整個團隊吃晚餐。"
  },
  {
    "word": "persevere",
    "pos": "v.",
    "cn_def": "堅持不懈",
    "en_def": "to keep trying even when something is difficult",
    "sentence": "A: Did your sister finally pass the accounting exam this year, after failing it twice and studying every night while working full-time at the bank? B: Yes, she did, and she told me she decided to {{BLANK}} because she really wanted the promotion, so she joined a study group and practiced old exam questions every weekend.",
    "cn": "A：你姊姊今年終於通過會計考試了嗎？她之前沒考過兩次，而且一邊在銀行全職上班一邊每晚讀書。 B：有，她通過了，她告訴我她決定【堅持不懈】，因為她非常想升職，所以她參加了讀書會，每個週末都練習考古題。"
  },
  {
    "word": "perseverance",
    "pos": "n.",
    "cn_def": "毅力；不屈不撓",
    "en_def": "the quality of continuing to try even when things are difficult",
    "sentence": "A: What do you think helped Mr. Lin build his small bakery into a chain of twenty shops across the country in only ten years? B: I believe it was his {{BLANK}}, because he kept improving his recipes and opening new shops even after the first two locations lost money and almost closed.",
    "cn": "A：你認為是什麼幫助林先生在短短十年內把他的小麵包店發展成全國二十家分店的連鎖店？ B：我認為是他的【毅力】，因為即使前兩家店賠錢而且差點倒閉，他仍不斷改良食譜並開設新店。"
  },
  {
    "word": "endure",
    "pos": "v.",
    "cn_def": "忍受；忍耐",
    "en_def": "to suffer something difficult or unpleasant for a long time",
    "sentence": "A: How was the business trip to the trade fair in Dubai, and did you manage to meet all the buyers on your list? B: It was useful, but we had to {{BLANK}} very hot weather and long lines at every booth, so by the end of the third day the whole team was really tired.",
    "cn": "A：去杜拜參加貿易展的出差怎麼樣？你有見到名單上所有的買家嗎？ B：很有收穫，但我們必須【忍受】非常炎熱的天氣和每個攤位前的長長人龍，所以到第三天結束時整個團隊都非常累。"
  },
  {
    "word": "survive",
    "pos": "v.",
    "cn_def": "存活；挺過",
    "en_def": "to continue to live or exist after a difficult time",
    "sentence": "A: How did that small family restaurant on the corner stay open during the long road repairs, when most of the other shops nearby had to close? B: The owners managed to {{BLANK}} by starting a delivery service and selling lunch boxes to office workers in the business park across the river.",
    "cn": "A：街角那家小家庭餐廳在長期道路整修期間是怎麼繼續營業的？附近大多數其他店家都不得不關門。 B：老闆們靠著開始外送服務，並賣便當給河對岸商業園區的上班族，才得以【挺過】難關。"
  },
  {
    "word": "survival",
    "pos": "n.",
    "cn_def": "生存；存活",
    "en_def": "the state of continuing to live or exist",
    "sentence": "A: Why is the board so worried about the new online stores that sell the same furniture at much lower prices than our showrooms? B: Our {{BLANK}} depends on keeping our customers, so we need to offer better service, faster delivery, and special discounts before we lose more of the market to them.",
    "cn": "A：為什麼董事會這麼擔心那些以遠低於我們展示間的價格販售同樣家具的新網路商店？ B：我們的【生存】取決於留住客戶，所以我們必須在被他們搶走更多市場之前，提供更好的服務、更快的配送和特別折扣。"
  },
  {
    "word": "resist",
    "pos": "v.",
    "cn_def": "抗拒；抵抗",
    "en_def": "to try to stop something or refuse to accept it",
    "sentence": "A: Are the older employees in the accounting department happy about using the new computer system that the IT team installed last month? B: Some of them still {{BLANK}} the change because they are used to the old way, so the manager has arranged extra training sessions to help them feel more confident.",
    "cn": "A：會計部門的資深員工對使用資訊團隊上個月安裝的新電腦系統感到滿意嗎？ B：他們之中有些人仍【抗拒】這項改變，因為他們習慣舊的方式，所以經理安排了額外的訓練課程，幫助他們更有自信。"
  },
  {
    "word": "resistance",
    "pos": "n.",
    "cn_def": "抗拒；反對",
    "en_def": "a refusal to accept something new or different",
    "sentence": "A: Why did the company decide to delay the plan to move everyone to the new office building outside the city until next spring? B: There was strong {{BLANK}} from staff who live downtown, because their travel time would double, so the managers want to discuss transportation options with them first.",
    "cn": "A：為什麼公司決定把所有人搬到市郊新辦公大樓的計畫延到明年春天？ B：住在市中心的員工強烈【反對】，因為他們的通勤時間會加倍，所以經理們想先跟他們討論交通方案。"
  },
  {
    "word": "compete",
    "pos": "v.",
    "cn_def": "競爭",
    "en_def": "to try to be more successful than others",
    "sentence": "A: Why are we lowering the prices of our printers and offering free ink for a year to every new customer starting this month? B: We have to {{BLANK}} with two large companies that opened stores in our area recently, and our sales dropped by almost fifteen percent during the last quarter.",
    "cn": "A：為什麼我們從這個月開始降低印表機價格，並且送每位新客戶一年免費墨水？ B：我們必須和最近在本區開店的兩家大公司【競爭】，而且我們的銷售額在上一季下降了將近百分之十五。"
  },
  {
    "word": "competition",
    "pos": "n.",
    "cn_def": "競爭；比賽",
    "en_def": "a situation in which people or companies try to be more successful than others",
    "sentence": "A: Why is it so hard to find a good apartment near the technology park, even though new buildings are going up every month? B: The {{BLANK}} is very strong because thousands of engineers want to live close to work, so landlords can raise the rent and choose their tenants carefully.",
    "cn": "A：為什麼在科技園區附近很難找到好公寓，即使每個月都有新大樓在蓋？ B：【競爭】非常激烈，因為成千上萬的工程師都想住在公司附近，所以房東可以調漲租金並且謹慎挑選房客。"
  },
  {
    "word": "conquer",
    "pos": "v.",
    "cn_def": "征服；克服",
    "en_def": "to succeed in controlling or beating something difficult",
    "sentence": "A: How did the new sales representative become so comfortable giving presentations, when she was so nervous during her first month at the company? B: She worked hard to {{BLANK}} her fear of public speaking by joining a speaking club and practicing in front of her colleagues every Thursday afternoon.",
    "cn": "A：新來的業務代表是怎麼變得那麼自在地做簡報的？她剛進公司第一個月時非常緊張。 B：她參加演講社，並每週四下午在同事面前練習，努力【克服】她對公開演講的恐懼。"
  },
  {
    "word": "overcome",
    "pos": "v.",
    "cn_def": "克服",
    "en_def": "to succeed in dealing with a problem or difficulty",
    "sentence": "A: Did the project team find a way to finish the bridge on schedule after the heavy rain flooded the construction site last month? B: Yes, they managed to {{BLANK}} the problem by adding a night shift and renting extra pumps, so the bridge will still open to traffic in early December as planned.",
    "cn": "A：上個月大雨淹沒工地之後，專案團隊有找到辦法如期完成這座橋嗎？ B：有，他們增加夜班並租用額外的抽水機，成功【克服】了這個問題，所以這座橋仍會按計畫在十二月初通車。"
  },
  {
    "word": "persistence",
    "pos": "n.",
    "cn_def": "堅持；鍥而不捨",
    "en_def": "the act of continuing to do something even when it is hard",
    "sentence": "A: How did you finally get that big hotel chain to sign a contract with our cleaning company after they refused us last year? B: It took a lot of {{BLANK}}, because I called their purchasing manager every month, sent updated price lists, and invited her to visit two hotels we already serve.",
    "cn": "A：去年那家大型連鎖飯店拒絕我們之後，你最後是怎麼讓他們跟我們清潔公司簽約的？ B：這靠的是極大的【堅持】，因為我每個月都打電話給他們的採購經理、寄送更新的價目表，並邀請她參觀兩家我們已經在服務的飯店。"
  },
  {
    "word": "persistent",
    "pos": "adj.",
    "cn_def": "持續的；堅持不懈的",
    "en_def": "continuing for a long time; not giving up",
    "sentence": "A: Have the technicians found out why the copy machine on the third floor keeps making that loud noise and stopping in the middle of jobs? B: Not yet, because the problem is very {{BLANK}}, and even after they replaced two parts on Monday, it started again this morning, so they will order a new machine.",
    "cn": "A：技術人員找出三樓影印機為什麼一直發出很大的噪音並在印到一半時停下來了嗎？ B：還沒，因為這個問題一直【持續】，即使他們週一換了兩個零件，今天早上又開始了，所以他們會訂一台新機器。"
  },
  {
    "word": "determination",
    "pos": "n.",
    "cn_def": "決心",
    "en_def": "a strong decision to do something even if it is difficult",
    "sentence": "A: How did the young engineer manage to finish her master's degree while working full-time and taking care of her two small children? B: She had great {{BLANK}}, so she studied early every morning before work, took online classes on weekends, and asked her parents to help with the children during exams.",
    "cn": "A：那位年輕工程師是怎麼一邊全職工作、照顧兩個小孩，一邊完成碩士學位的？ B：她有很大的【決心】，所以她每天上班前一大早讀書、週末上網路課程，並在考試期間請父母幫忙照顧孩子。"
  },
  {
    "word": "determined",
    "pos": "adj.",
    "cn_def": "堅決的；下定決心的",
    "en_def": "having a strong wish to do something and not letting anything stop you",
    "sentence": "A: Is the new customer service manager really going to reduce the number of complaints by half before the end of this year? B: She seems very {{BLANK}}, because she has already hired three more staff, changed the return policy, and started reading every single complaint herself at her desk each morning.",
    "cn": "A：新的客服經理真的會在今年年底前把投訴數量減半嗎？ B：她看起來非常【堅決】，因為她已經多雇了三名員工、改了退貨政策，而且每天早上在辦公桌前親自閱讀每一則投訴。"
  },
  {
    "word": "ambition",
    "pos": "n.",
    "cn_def": "抱負；志向",
    "en_def": "a strong wish to achieve something",
    "sentence": "A: Why did Kevin leave his comfortable job at the bank and join a small start-up company that sells eco-friendly packaging? B: His {{BLANK}} is to run his own business one day, so he wanted to learn how a new company grows, even though the salary is lower and the hours are longer.",
    "cn": "A：Kevin為什麼離開銀行安穩的工作，加入一家販售環保包裝的小新創公司？ B：他的【抱負】是有一天經營自己的事業，所以他想學習新公司是如何成長的，即使薪水較低、工時較長。"
  },
  {
    "word": "ambitious",
    "pos": "adj.",
    "cn_def": "有雄心的；遠大的",
    "en_def": "having a strong wish to succeed; (of a plan) needing a lot of effort",
    "sentence": "A: Do you think our team can really double the number of online customers in just six months, as the director said at the meeting? B: It is a very {{BLANK}} plan, but if we improve the website, run more advertisements, and offer free shipping, I believe we have a good chance of reaching the goal.",
    "cn": "A：你覺得我們團隊真的能像主管在會議上說的，在短短六個月內把線上客戶數量加倍嗎？ B：這是一個非常【遠大】的計畫，但如果我們改善網站、投放更多廣告並提供免運，我相信我們很有機會達成目標。"
  },
  {
    "word": "battle",
    "pos": "n.",
    "cn_def": "奮戰；抗爭",
    "en_def": "a long fight or struggle against something",
    "sentence": "A: Why has the small coffee shop near our office changed its name and stopped selling its famous honey cake? B: It lost a long legal {{BLANK}} against a large chain that said the old name was too similar to theirs, so the owner had to change everything, including the menu.",
    "cn": "A：為什麼我們辦公室附近那家小咖啡店改了名字，還停賣它有名的蜂蜜蛋糕？ B：它輸掉了一場對抗大型連鎖店的漫長法律【抗爭】，對方說舊名字跟他們的太像了，所以老闆只好改掉一切，包括菜單。"
  },
  {
    "word": "pressure",
    "pos": "n.",
    "cn_def": "壓力",
    "en_def": "a feeling of stress because of the things you must do",
    "sentence": "A: Why does Jenny look so tired lately, and is she still working on the annual report for the shareholders' meeting next week? B: She is under a lot of {{BLANK}} because the report is due on Monday, and her manager also asked her to prepare the presentation slides for the meeting at the same time.",
    "cn": "A：Jenny最近為什麼看起來那麼累？她還在準備下週股東會的年度報告嗎？ B：她承受很大的【壓力】，因為報告星期一就要交，而她的經理還同時要她準備會議的簡報投影片。"
  },
  {
    "word": "cope",
    "pos": "v.",
    "cn_def": "應付；處理",
    "en_def": "to deal successfully with a difficult situation",
    "sentence": "A: How is the front desk team going to handle all the guests during the international conference, when the hotel will be completely full for four days? B: The manager hired five temporary staff to help us {{BLANK}} with the extra work, and she also set up a separate check-in counter for conference visitors in the lobby.",
    "cn": "A：在國際研討會期間，飯店整整四天都會客滿，櫃檯團隊要怎麼應付所有客人？ B：經理雇了五名臨時員工幫我們【應付】額外的工作，她也在大廳為會議來賓設置了一個獨立的報到櫃檯。"
  },
  {
    "word": "tough",
    "pos": "adj.",
    "cn_def": "艱難的；棘手的",
    "en_def": "difficult to do or deal with",
    "sentence": "A: How was your first week as the new team leader, and did everyone in the department welcome you to the position? B: It was a {{BLANK}} week, because two people called in sick, a big order arrived late, and I had to explain the delay to an angry client, but my team supported me a lot.",
    "cn": "A：你擔任新組長的第一週怎麼樣？部門裡每個人都歡迎你接任這個職位嗎？ B：那是【艱難】的一週，因為有兩個人請病假、一筆大訂單晚到，而且我必須向一位生氣的客戶解釋延誤，不過我的團隊很支持我。"
  },
  {
    "word": "grit",
    "pos": "n.",
    "cn_def": "毅力；勇氣",
    "en_def": "courage and strength of mind to keep going when things are hard",
    "sentence": "A: What qualities is the hiring manager looking for in the new trainees who will work at the busy construction sites in the mountains? B: She wants people with {{BLANK}}, because the work is hard and the weather is often cold and wet, so only workers who refuse to give up will succeed there.",
    "cn": "A：招聘經理在尋找什麼特質的新受訓人員，他們將在山區忙碌的工地工作？ B：她想要有【毅力】的人，因為工作很辛苦，天氣經常又冷又濕，所以只有不輕言放棄的工人才能在那裡成功。"
  }
];

const MCQS = [
  {
    "q": "Many new employees have _____ understanding the expense system at first. The finance team will hold a short workshop on Friday afternoon.",
    "options": [
      "difficulty",
      "ambition",
      "survival",
      "competition"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Launching three products in one month will be a real _____ for our small design team. However, the director believes we can succeed with careful planning.",
    "options": [
      "survival",
      "resistance",
      "challenge",
      "perseverance"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The high cost of shipping remains the main _____ to expanding our online sales overseas. The board will discuss possible solutions next Tuesday.",
    "options": [
      "ambition",
      "obstacle",
      "effort",
      "survival"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Our new translation app helps travelers break down the language _____ when they talk with local shop owners. It now supports twenty languages.",
    "options": [
      "setback",
      "battle",
      "pressure",
      "barrier"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Many farmers in the region suffered financial _____ after the long drought destroyed their crops. The government has promised to provide low-interest loans.",
    "options": [
      "ambition",
      "grit",
      "hardship",
      "competition"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The factory fire was a serious _____ for the company's expansion plans. Production will not return to normal until early next year.",
    "options": [
      "setback",
      "perseverance",
      "ambition",
      "determination"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The meeting was cancelled because of a power _____ in the main building. All employees were asked to work from home that afternoon.",
    "options": [
      "effort",
      "ambition",
      "grit",
      "failure"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "If the supplier continues to _____ to meet our deadlines, we will look for a new partner. The contract will be reviewed in March.",
    "options": [
      "endure",
      "fail",
      "conquer",
      "resist"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The manager thanked the team for the extra _____ they made to finish the project early. Everyone will receive a bonus this month.",
    "options": [
      "effort",
      "failure",
      "survival",
      "competition"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Although the first two experiments failed, the research team decided to _____ with the project. Their hard work finally paid off last month.",
    "options": [
      "fail",
      "resist",
      "persevere",
      "conquer"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Linda's _____ in learning Japanese helped her win the job in Tokyo. She studied every evening after work for three years.",
    "options": [
      "resistance",
      "perseverance",
      "failure",
      "survival"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Passengers had to _____ a four-hour delay at the airport because of the snowstorm. The airline later offered them free meal vouchers.",
    "options": [
      "compete",
      "conquer",
      "fail",
      "endure"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Small bookstores must find new ways to _____ as more people buy books online. Some now host cafés and reading events.",
    "options": [
      "conquer",
      "resist",
      "survive",
      "fail"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Lower prices are essential for the _____ of the company in such a difficult market. The CEO will announce new discounts next week.",
    "options": [
      "survival",
      "ambition",
      "perseverance",
      "determination"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "It is hard to _____ the delicious pastries in the break room every morning. Several staff members have asked for healthier snacks instead.",
    "options": [
      "endure",
      "survive",
      "conquer",
      "resist"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The plan to close the downtown branch met with strong _____ from local customers. Management has agreed to keep it open for now.",
    "options": [
      "ambition",
      "resistance",
      "perseverance",
      "survival"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Our company must lower its prices to _____ with the new online retailers. Otherwise, we will continue to lose customers every month.",
    "options": [
      "compete",
      "endure",
      "conquer",
      "persevere"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "There is fierce _____ among airlines for passengers on the Taipei–Tokyo route. Ticket prices have dropped sharply this year.",
    "options": [
      "survival",
      "perseverance",
      "competition",
      "failure"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The young CEO hopes to _____ the Asian market within the next five years. She has already opened offices in Seoul and Bangkok.",
    "options": [
      "endure",
      "conquer",
      "resist",
      "fail"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "With support from her mentor, Amy was able to _____ her fear of speaking in front of large groups. She now leads the monthly sales meeting.",
    "options": [
      "compete",
      "fail",
      "survive",
      "overcome"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The IT department is still trying to fix a _____ problem with the office Wi-Fi. It has been disconnecting several times a day for weeks.",
    "options": [
      "ambitious",
      "determined",
      "persistent",
      "generous"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The athlete's strong _____ to win helped her recover quickly from her injury. She returned to competition only two months later.",
    "options": [
      "determination",
      "failure",
      "survival",
      "resistance"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The new manager is _____ to reduce costs by ten percent this year. She has already cancelled several unnecessary contracts.",
    "options": [
      "persistent",
      "tough",
      "generous",
      "determined"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Her lifelong _____ is to open a small hotel by the beach. She has been saving money for that goal for ten years.",
    "options": [
      "failure",
      "ambition",
      "resistance",
      "survival"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The city has announced a very _____ plan to build fifty new parks by 2030. Residents hope it will improve air quality.",
    "options": [
      "ambitious",
      "persistent",
      "generous",
      "determined"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The two technology firms have been fighting a long legal _____ over the patent. A final decision is expected in December.",
    "options": [
      "barrier",
      "failure",
      "battle",
      "hardship"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Many workers feel under great _____ during the end-of-year busy season. The company now offers free yoga classes on Fridays.",
    "options": [
      "ambition",
      "pressure",
      "resistance",
      "competition"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The restaurant hired more servers to help _____ with the large holiday crowds. Customers no longer have to wait so long for a table.",
    "options": [
      "compete",
      "resist",
      "conquer",
      "cope"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Choosing between the two excellent candidates was a _____ decision for the hiring committee. In the end, they offered the job to Ben.",
    "options": [
      "persistent",
      "ambitious",
      "tough",
      "determined"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Running a marathon in such hot weather requires real _____ and careful preparation. Only half of the runners finished the race.",
    "options": [
      "grit",
      "failure",
      "setback",
      "barrier"
    ],
    "answer": 0,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "difficulty": {
    "pos": "n.",
    "en_def": "a problem or something that is hard to do",
    "cn_def": "困難；難處"
  },
  "challenge": {
    "pos": "n.",
    "en_def": "something new and difficult that tests your ability",
    "cn_def": "挑戰"
  },
  "obstacle": {
    "pos": "n.",
    "en_def": "something that blocks you or makes progress difficult",
    "cn_def": "障礙；阻礙"
  },
  "barrier": {
    "pos": "n.",
    "en_def": "something that stops people from communicating or doing something",
    "cn_def": "障礙；隔閡"
  },
  "hardship": {
    "pos": "n.",
    "en_def": "a difficult situation in life, often because of a lack of money",
    "cn_def": "艱難；困苦"
  },
  "setback": {
    "pos": "n.",
    "en_def": "a problem that delays progress or makes things worse",
    "cn_def": "挫折；阻礙"
  },
  "failure": {
    "pos": "n.",
    "en_def": "a lack of success; a time when something stops working",
    "cn_def": "失敗；故障"
  },
  "fail": {
    "pos": "v.",
    "en_def": "to not succeed in doing something",
    "cn_def": "失敗；未能"
  },
  "effort": {
    "pos": "n.",
    "en_def": "hard work that you do to achieve something",
    "cn_def": "努力"
  },
  "persevere": {
    "pos": "v.",
    "en_def": "to keep trying even when something is difficult",
    "cn_def": "堅持不懈"
  },
  "perseverance": {
    "pos": "n.",
    "en_def": "the quality of continuing to try even when things are difficult",
    "cn_def": "毅力；不屈不撓"
  },
  "endure": {
    "pos": "v.",
    "en_def": "to suffer something difficult or unpleasant for a long time",
    "cn_def": "忍受；忍耐"
  },
  "survive": {
    "pos": "v.",
    "en_def": "to continue to live or exist after a difficult time",
    "cn_def": "存活；挺過"
  },
  "survival": {
    "pos": "n.",
    "en_def": "the state of continuing to live or exist",
    "cn_def": "生存；存活"
  },
  "resist": {
    "pos": "v.",
    "en_def": "to try to stop something or refuse to accept it",
    "cn_def": "抗拒；抵抗"
  },
  "resistance": {
    "pos": "n.",
    "en_def": "a refusal to accept something new or different",
    "cn_def": "抗拒；反對"
  },
  "compete": {
    "pos": "v.",
    "en_def": "to try to be more successful than others",
    "cn_def": "競爭"
  },
  "competition": {
    "pos": "n.",
    "en_def": "a situation in which people or companies try to be more successful than others",
    "cn_def": "競爭；比賽"
  },
  "conquer": {
    "pos": "v.",
    "en_def": "to succeed in controlling or beating something difficult",
    "cn_def": "征服；克服"
  },
  "overcome": {
    "pos": "v.",
    "en_def": "to succeed in dealing with a problem or difficulty",
    "cn_def": "克服"
  },
  "persistence": {
    "pos": "n.",
    "en_def": "the act of continuing to do something even when it is hard",
    "cn_def": "堅持；鍥而不捨"
  },
  "persistent": {
    "pos": "adj.",
    "en_def": "continuing for a long time; not giving up",
    "cn_def": "持續的；堅持不懈的"
  },
  "determination": {
    "pos": "n.",
    "en_def": "a strong decision to do something even if it is difficult",
    "cn_def": "決心"
  },
  "determined": {
    "pos": "adj.",
    "en_def": "having a strong wish to do something and not letting anything stop you",
    "cn_def": "堅決的；下定決心的"
  },
  "ambition": {
    "pos": "n.",
    "en_def": "a strong wish to achieve something",
    "cn_def": "抱負；志向"
  },
  "ambitious": {
    "pos": "adj.",
    "en_def": "having a strong wish to succeed; (of a plan) needing a lot of effort",
    "cn_def": "有雄心的；遠大的"
  },
  "battle": {
    "pos": "n.",
    "en_def": "a long fight or struggle against something",
    "cn_def": "奮戰；抗爭"
  },
  "pressure": {
    "pos": "n.",
    "en_def": "a feeling of stress because of the things you must do",
    "cn_def": "壓力"
  },
  "cope": {
    "pos": "v.",
    "en_def": "to deal successfully with a difficult situation",
    "cn_def": "應付；處理"
  },
  "tough": {
    "pos": "adj.",
    "en_def": "difficult to do or deal with",
    "cn_def": "艱難的；棘手的"
  },
  "grit": {
    "pos": "n.",
    "en_def": "courage and strength of mind to keep going when things are hard",
    "cn_def": "毅力；勇氣"
  }
};

const EXTRA_GLOSSES = {};
