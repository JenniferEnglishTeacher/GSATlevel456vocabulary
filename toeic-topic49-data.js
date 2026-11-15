// Topic 49 Quiz Data: Change 改變
// Source word list: https://www.examword.com/group-topic/change — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T49 - Change 改變",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "routine",
    "pos": "n.",
    "cn_def": "例行公事；慣例",
    "en_def": "the usual order in which you do things every day",
    "sentence": "A: Since the company moved our start time from nine to eight o'clock last month, how have you managed to get your children ready for school every morning? B: It was difficult at first, but we created a new morning {{BLANK}} where everyone packs their bags the night before and eats breakfast together at seven.",
    "cn": "A：自從公司上個月把上班時間從九點改到八點，你每天早上是怎麼讓孩子準備好上學的？ B：一開始很困難，但我們建立了一套新的早晨【例行程序】，每個人前一晚就把書包整理好，七點一起吃早餐。"
  },
  {
    "word": "habit",
    "pos": "n.",
    "cn_def": "習慣",
    "en_def": "something you do often, almost without thinking",
    "sentence": "A: I noticed you stopped buying coffee from the shop downstairs every afternoon, so did the doctor tell you to cut down on caffeine? B: No, I just wanted to save money for my trip to Japan, so I replaced that expensive {{BLANK}} with drinking tea that I bring from home in a bottle.",
    "cn": "A：我注意到你不再每天下午到樓下店裡買咖啡了，是醫生叫你少喝咖啡因嗎？ B：不是，我只是想為日本之旅存錢，所以我把那個昂貴的【習慣】換成喝我用瓶子從家裡帶來的茶。"
  },
  {
    "word": "challenging",
    "pos": "adj.",
    "cn_def": "具挑戰性的",
    "en_def": "difficult in a way that tests your ability",
    "sentence": "A: How do you feel about moving from the sales team to the new project management position that the director offered you last week? B: I think the job will be quite {{BLANK}} because I have to lead twelve people and manage a tight budget, but I am excited to learn new skills and grow.",
    "cn": "A：你對於從業務團隊轉到主任上週提供給你的新專案管理職位感覺如何？ B：我覺得這份工作會相當【具挑戰性】，因為我必須帶領十二個人並管理緊縮的預算，但我很期待學習新技能並成長。"
  },
  {
    "word": "afraid",
    "pos": "adj.",
    "cn_def": "害怕的；擔心的",
    "en_def": "feeling fear or worry about something",
    "sentence": "A: Why didn't Tom say anything during the meeting when the manager asked for opinions about the new working schedule? B: He told me later that he was {{BLANK}} that his ideas would sound silly, because he only joined the company two weeks ago and does not know everyone yet.",
    "cn": "A：經理在會議中詢問大家對新工作時間表的意見時，湯姆為什麼什麼都沒說？ B：他後來告訴我，他【害怕】自己的想法聽起來很蠢，因為他兩週前才進公司，還不認識每個人。"
  },
  {
    "word": "resist",
    "pos": "v.",
    "cn_def": "抗拒；抵抗",
    "en_def": "to refuse to accept something or try to stop it",
    "sentence": "A: Several older workers in the warehouse are unhappy about the new scanning system, so what is the best way to help them accept it? B: People often {{BLANK}} changes when they do not understand the reasons, so let's hold a short training session and show them how the system will save them time.",
    "cn": "A：倉庫裡好幾位年長員工對新的掃描系統不滿，幫助他們接受它最好的方法是什麼？ B：人們不了解原因時常常會【抗拒】改變，所以我們來辦一場簡短的訓練課程，讓他們看看這套系統如何幫他們節省時間。"
  },
  {
    "word": "frequently",
    "pos": "adv.",
    "cn_def": "頻繁地；經常",
    "en_def": "often; many times",
    "sentence": "A: Do you know why the printer on the third floor keeps breaking down, even though the technician repaired it last month? B: The marketing team uses it very {{BLANK}} to print large posters and brochures, so I think we should buy a stronger machine instead of fixing this old one again.",
    "cn": "A：你知道為什麼三樓的印表機一直故障嗎？明明技術人員上個月才修好。 B：行銷團隊非常【頻繁地】用它來印大型海報和手冊，所以我認為我們應該買一台更耐用的機器，而不是再修這台舊的。"
  },
  {
    "word": "permanent",
    "pos": "adj.",
    "cn_def": "永久的；長期的",
    "en_def": "lasting for a long time or forever",
    "sentence": "A: You have been working at the front desk as a temporary staff member for six months, so has the hotel offered you a contract yet? B: Yes, the manager called me yesterday and said they want to give me a {{BLANK}} position starting in January, with health insurance and paid holidays.",
    "cn": "A：你在櫃檯當臨時員工已經六個月了，飯店給你合約了嗎？ B：有，經理昨天打電話給我，說他們想從一月開始給我一個【長期正式的】職位，有健康保險和帶薪假。"
  },
  {
    "word": "promotion",
    "pos": "n.",
    "cn_def": "升職；晉升",
    "en_def": "a move to a higher job or rank",
    "sentence": "A: Congratulations, I heard you will be the new head of the customer service department next month, so how did you hear the news? B: Thank you, my boss invited me to lunch on Friday and told me about the {{BLANK}}, and she also said my salary will increase by fifteen percent.",
    "cn": "A：恭喜，我聽說你下個月要成為客服部門的新主管，你是怎麼得知消息的？ B：謝謝，我老闆週五請我吃午餐，告訴我【升職】的事，她還說我的薪水會增加百分之十五。"
  },
  {
    "word": "adapt",
    "pos": "v.",
    "cn_def": "適應",
    "en_def": "to change your behavior to fit a new situation",
    "sentence": "A: The company is moving our office from Taipei to Kaohsiung next spring, so are you worried about living in a new city? B: A little, but I have moved several times before, and I usually {{BLANK}} quickly to new places by joining local clubs and exploring the neighborhood on weekends.",
    "cn": "A：公司明年春天要把辦公室從台北搬到高雄，你擔心住在新城市嗎？ B：有一點，但我以前搬過好幾次家，我通常會參加當地社團、週末探索街坊，很快就【適應】新的地方。"
  },
  {
    "word": "develop",
    "pos": "v.",
    "cn_def": "開發；發展",
    "en_def": "to create something new or make it better over time",
    "sentence": "A: Our online shop is getting more orders from customers in Japan and Korea, so what should the IT team focus on this year? B: I think they should {{BLANK}} a mobile app in Japanese and Korean, because most of these customers shop on their phones during their train rides to work.",
    "cn": "A：我們的網路商店接到越來越多日本和韓國顧客的訂單，IT團隊今年應該把重點放在哪裡？ B：我認為他們應該【開發】一個日文和韓文的手機應用程式，因為這些顧客大多在搭火車上班時用手機購物。"
  },
  {
    "word": "decade",
    "pos": "n.",
    "cn_def": "十年",
    "en_def": "a period of ten years",
    "sentence": "A: The town looks so different from the photos in the lobby, so how long has this hotel been here? B: It opened in the 1980s, and during the last {{BLANK}} the area has changed a lot, with new shopping malls, office towers, and a subway station built right across the street.",
    "cn": "A：這個小鎮和大廳裡的照片看起來差好多，這間飯店在這裡多久了？ B：它在1980年代開幕，在過去【十年】裡，這一帶改變了很多，蓋了新的購物中心、辦公大樓，對街還蓋了一座地鐵站。"
  },
  {
    "word": "metamorphosis",
    "pos": "n.",
    "cn_def": "蛻變；徹底轉變",
    "en_def": "a complete change into something very different",
    "sentence": "A: I visited your restaurant again last night, and I could hardly believe it was the same place after the renovation, so who designed the new interior? B: A young designer from Tainan planned the whole {{BLANK}}, turning our dark old dining room into a bright, modern space with plants, large windows, and an open kitchen.",
    "cn": "A：我昨晚又去了你的餐廳，裝修後我幾乎不敢相信是同一個地方，新的室內是誰設計的？ B：一位台南的年輕設計師規劃了整個【蛻變】，把我們陰暗的老用餐區變成一個有植物、大窗戶和開放式廚房的明亮現代空間。"
  },
  {
    "word": "secure",
    "pos": "v.",
    "cn_def": "獲得；爭取到",
    "en_def": "to get something important after a lot of effort",
    "sentence": "A: The factory almost closed last year because of falling orders, so how did it manage to stay open and keep all its workers? B: The new sales director worked very hard to {{BLANK}} a three-year contract with a large car company, which brought in enough money to buy new machines.",
    "cn": "A：去年工廠因為訂單下滑差點關門，它是怎麼撐下去並保住所有員工的？ B：新的業務總監非常努力地【爭取到】一份與大型汽車公司簽的三年合約，帶進了足夠的錢買新機器。"
  },
  {
    "word": "incumbent",
    "pos": "n.",
    "cn_def": "現任者",
    "en_def": "the person who holds an official position now",
    "sentence": "A: Do you think the city will finally build the new bike lanes after the mayor election next month? B: It depends on who wins, because the {{BLANK}} has promised to finish the project, but the other candidate says the money should go to repairing old roads and public schools instead.",
    "cn": "A：你認為下個月市長選舉後，市政府終於會蓋新的自行車道嗎？ B：要看誰贏，因為【現任者】承諾要完成這個計畫，但另一位候選人說這筆錢應該改用來修舊道路和公立學校。"
  },
  {
    "word": "improve",
    "pos": "v.",
    "cn_def": "改善；提升",
    "en_def": "to make something better",
    "sentence": "A: Our customers have complained that the website is slow and confusing, so what are we going to do about it this quarter? B: We have hired an outside company to {{BLANK}} the design, and they promise that people will be able to find products and pay in less than two minutes.",
    "cn": "A：顧客抱怨網站又慢又難用，這一季我們打算怎麼處理？ B：我們請了一家外部公司來【改善】設計，他們保證大家能在兩分鐘內找到產品並付款。"
  },
  {
    "word": "lazy",
    "pos": "adj.",
    "cn_def": "懶惰的",
    "en_def": "not wanting to work or make an effort",
    "sentence": "A: Why did the manager decide to change the cleaning company that looks after our office building? B: Some of the old staff were quite {{BLANK}} and often left the kitchen dirty and the trash bins full, so many employees complained, and the manager found a more reliable company last week.",
    "cn": "A：經理為什麼決定更換負責我們辦公大樓的清潔公司？ B：之前有些員工相當【懶惰】，常常讓廚房髒亂、垃圾桶滿出來，所以很多員工抱怨，經理上週就找了一家更可靠的公司。"
  },
  {
    "word": "awkward",
    "pos": "adj.",
    "cn_def": "尷尬的；不自在的",
    "en_def": "uncomfortable or embarrassing",
    "sentence": "A: How was your first day at the new branch after you transferred from the head office? B: It felt a little {{BLANK}} in the morning because nobody knew my name and I sat alone at lunch, but in the afternoon my team leader introduced me to everyone, and things became much easier.",
    "cn": "A：你從總公司調到新分店後的第一天怎麼樣？ B：早上感覺有點【尷尬】，因為沒人知道我的名字，午餐時我一個人坐，但下午組長把我介紹給大家，事情就輕鬆多了。"
  },
  {
    "word": "struggle",
    "pos": "v.",
    "cn_def": "努力掙扎；奮鬥",
    "en_def": "to try very hard to do something difficult",
    "sentence": "A: Many small bookstores in this neighborhood have closed in the past few years, so how is your shop doing? B: We still {{BLANK}} to pay the rent some months because more people buy books online, but we have started holding reading events and selling coffee, which brings in new customers.",
    "cn": "A：這一帶很多小書店在過去幾年關門了，你的店經營得如何？ B：有些月份我們還是【很吃力地】付房租，因為越來越多人在網路上買書，但我們開始舉辦讀書活動和賣咖啡，吸引了新顧客。"
  },
  {
    "word": "boost",
    "pos": "v.",
    "cn_def": "提升；促進",
    "en_def": "to increase or improve something",
    "sentence": "A: Sales of our winter jackets have been lower than expected this year, so what can we do before the season ends? B: The marketing team suggests a weekend discount and a social media contest, which should {{BLANK}} sales quickly and help us clear the stock before the spring collection arrives.",
    "cn": "A：我們的冬季外套今年銷售比預期差，在季節結束前我們能做什麼？ B：行銷團隊建議週末打折和社群媒體比賽，應該能迅速【提升】銷售量，幫我們在春季新品到貨前清掉庫存。"
  },
  {
    "word": "recognize",
    "pos": "v.",
    "cn_def": "認出；辨認",
    "en_def": "to know someone or something because you have seen it before",
    "sentence": "A: You have not been back to your hometown for fifteen years, so did it still look the same when you visited last weekend? B: Not at all, I could hardly {{BLANK}} the main street because the old market was replaced by a shopping center and most of the small shops had new names.",
    "cn": "A：你已經十五年沒回家鄉了，上週末回去時還是一樣嗎？ B：完全不一樣，我幾乎無法【認出】大街，因為舊市場被購物中心取代，大多數小店也都換了新名字。"
  },
  {
    "word": "catch",
    "pos": "v.",
    "cn_def": "趕上；搭上",
    "en_def": "to get on a bus, train, or plane in time",
    "sentence": "A: Since the bus company changed its timetable last week, how have you been getting to the office on time? B: I now leave home twenty minutes earlier to {{BLANK}} the 7:15 bus, because the next one does not come until 7:50, and that would make me late for the morning meeting.",
    "cn": "A：自從公車公司上週更改時刻表後，你都怎麼準時到公司？ B：我現在提早二十分鐘出門去【趕上】7點15分的公車，因為下一班要到7點50分才來，那會讓我晨會遲到。"
  },
  {
    "word": "positive",
    "pos": "adj.",
    "cn_def": "積極的；正面的",
    "en_def": "hopeful and confident; showing approval",
    "sentence": "A: How did the staff react when the CEO announced that everyone could work from home two days a week? B: Most people were very {{BLANK}} about it, because they will save time on commuting, but a few team leaders worried that it might be harder to hold meetings and share ideas.",
    "cn": "A：執行長宣布每個人每週可以在家工作兩天時，員工的反應如何？ B：大多數人對此非常【正面】，因為能節省通勤時間，但有幾位組長擔心開會和交流想法可能會變得比較困難。"
  },
  {
    "word": "inevitable",
    "pos": "adj.",
    "cn_def": "不可避免的",
    "en_def": "certain to happen and impossible to stop",
    "sentence": "A: Do you think the bank will close more of its small branches now that so many customers use the mobile app? B: I am afraid it is {{BLANK}}, because fewer people visit the branches each year, and the company says it needs to cut costs and invest more money in online services.",
    "cn": "A：既然這麼多顧客使用手機應用程式，你認為銀行會關閉更多小分行嗎？ B：恐怕這是【無可避免的】，因為每年去分行的人越來越少，而公司說需要削減成本，把更多錢投入線上服務。"
  },
  {
    "word": "transformation",
    "pos": "n.",
    "cn_def": "轉變；轉型",
    "en_def": "a complete change in form or character",
    "sentence": "A: The old textile factory near the river has been empty for years, so what is the city planning to do with it? B: The city has hired an architect to lead its {{BLANK}} into a cultural center with art studios, a small theater, and a market where local farmers can sell vegetables on weekends.",
    "cn": "A：河邊那間舊紡織廠已經空了好幾年，市政府打算怎麼處理？ B：市政府聘請了一位建築師主導它的【轉型】，把它變成一個有藝術工作室、小劇場和週末讓當地農民賣菜的市集的文化中心。"
  },
  {
    "word": "favorable",
    "pos": "adj.",
    "cn_def": "有利的；良好的",
    "en_def": "good and likely to help something succeed",
    "sentence": "A: The weather has been terrible this month, so do you think the outdoor company sports day can still happen on Saturday? B: The forecast looks {{BLANK}} for the weekend, with sunny skies and light wind, so we will go ahead with the plan, but we will also book the gym in case it rains.",
    "cn": "A：這個月天氣很糟，你覺得公司戶外運動會週六還能舉行嗎？ B：週末的天氣預報看起來很【有利】，晴天又微風，所以我們會照計畫進行，但也會預訂體育館以防下雨。"
  },
  {
    "word": "frustrating",
    "pos": "adj.",
    "cn_def": "令人沮喪的",
    "en_def": "making you feel annoyed because you cannot do what you want",
    "sentence": "A: You look tired today, so did something happen with the new accounting software that the company installed on Monday? B: Yes, it has been really {{BLANK}} because the program keeps freezing whenever I try to save a report, and I had to type the same numbers three times this morning.",
    "cn": "A：你今天看起來很累，週一公司安裝的新會計軟體出了什麼事嗎？ B：對，真的很【令人沮喪】，因為每次我要儲存報表程式就當掉，我今天早上同樣的數字打了三次。"
  },
  {
    "word": "transitional",
    "pos": "adj.",
    "cn_def": "過渡的",
    "en_def": "relating to a change from one state to another",
    "sentence": "A: The new manager starts in March, but our current manager leaves at the end of January, so who will lead the team in February? B: During this {{BLANK}} period, the senior supervisor will take care of daily decisions, and both managers will also hold a video call every week to share important information.",
    "cn": "A：新經理三月上任，但現任經理一月底就離職，那二月誰來帶領團隊？ B：在這段【過渡】期間，資深主管會處理日常決策，兩位經理也會每週開一次視訊會議交接重要資訊。"
  },
  {
    "word": "inquisitive",
    "pos": "adj.",
    "cn_def": "好奇的；愛發問的",
    "en_def": "wanting to learn and asking many questions",
    "sentence": "A: The new intern asks so many questions about every department, so do you think it bothers the other staff members? B: Not at all, most people like how {{BLANK}} she is, because her questions show that she really wants to learn how the company works, and some of them even helped us find problems.",
    "cn": "A：新來的實習生對每個部門都問好多問題，你覺得會打擾到其他員工嗎？ B：一點也不，大多數人都喜歡她這麼【好奇好問】，因為她的問題顯示她真的想了解公司如何運作，有些問題甚至幫我們發現了問題。"
  },
  {
    "word": "fascinating",
    "pos": "adj.",
    "cn_def": "極有趣的；引人入勝的",
    "en_def": "extremely interesting",
    "sentence": "A: How was the conference in Singapore that you attended last week with the research team? B: It was really {{BLANK}}, especially a talk about how robots are changing hospitals, and I took so many notes that I want to share them with everyone at our team meeting on Thursday afternoon.",
    "cn": "A：你上週和研究團隊去參加的新加坡會議怎麼樣？ B：真的非常【引人入勝】，尤其是一場關於機器人如何改變醫院的演講，我做了好多筆記，想在星期四下午的團隊會議上跟大家分享。"
  },
  {
    "word": "inspiring",
    "pos": "adj.",
    "cn_def": "鼓舞人心的",
    "en_def": "making people feel excited and want to do something good",
    "sentence": "A: Why did so many employees sign up for the volunteer program after the company's annual meeting? B: The guest speaker gave a very {{BLANK}} talk about how she changed her life by helping children in poor villages, and many people said they wanted to do something meaningful too.",
    "cn": "A：公司年會後，為什麼這麼多員工報名志工計畫？ B：特別來賓發表了一場非常【鼓舞人心】的演講，講她如何透過幫助貧困村莊的孩子改變自己的人生，很多人說他們也想做些有意義的事。"
  },
  {
    "word": "regrettable",
    "pos": "adj.",
    "cn_def": "令人遺憾的",
    "en_def": "that you feel sorry about; unfortunate",
    "sentence": "A: The online store sent hundreds of customers the wrong items during the holiday sale, so what did the company say about the problem? B: The CEO called the mistake very {{BLANK}} and promised that every customer will receive a full refund, free shipping, and a discount code for their next order.",
    "cn": "A：網路商店在假期特賣期間寄錯了幾百位顧客的商品，公司對這個問題怎麼說？ B：執行長稱這個錯誤非常【令人遺憾】，並承諾每位顧客都會獲得全額退款、免運費和下次訂購的折扣碼。"
  }
];

const MCQS = [
  {
    "q": "Jenny follows the same morning _____ every day before work. She checks her email, reviews her schedule, and then calls her biggest clients.",
    "options": [
      "decade",
      "metamorphosis",
      "incumbent",
      "routine"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Mr. Lee has a _____ of arriving at the office thirty minutes early. He says the quiet time helps him plan his day.",
    "options": [
      "decade",
      "transformation",
      "habit",
      "promotion"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Opening a second store in a new city will be _____ for our small team. We will need more staff and a bigger budget.",
    "options": [
      "inquisitive",
      "challenging",
      "lazy",
      "transitional"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Many employees are _____ to speak up in large meetings. The manager now collects ideas through an anonymous online form instead.",
    "options": [
      "afraid",
      "favorable",
      "fascinating",
      "permanent"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Some managers _____ new technology because they are comfortable with the old way of working. Training can help them feel more confident.",
    "options": [
      "boost",
      "secure",
      "resist",
      "catch"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "After two years of short-term contracts, Ms. Chen was finally offered a _____ job. She will now receive full benefits and paid leave.",
    "options": [
      "awkward",
      "lazy",
      "inquisitive",
      "permanent"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Kevin received a _____ to regional manager after his team doubled its sales. He will move into his new office next Monday.",
    "options": [
      "routine",
      "promotion",
      "habit",
      "decade"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "New employees usually need a few weeks to _____ to the company's systems. Their supervisors meet with them weekly during this time.",
    "options": [
      "adapt",
      "secure",
      "boost",
      "recognize"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Our research team plans to _____ a lighter version of the laptop next year. It will be designed for students and frequent travelers.",
    "options": [
      "catch",
      "struggle",
      "resist",
      "develop"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The company has grown quickly over the past _____. It started with five workers in 2016 and now employs over three hundred people.",
    "options": [
      "incumbent",
      "decade",
      "routine",
      "habit"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The old train station went through a complete _____ last year. It is now a modern shopping mall with restaurants and a cinema.",
    "options": [
      "habit",
      "promotion",
      "metamorphosis",
      "incumbent"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The sales team worked late every night to _____ the government contract. The deal is worth five million dollars over three years.",
    "options": [
      "secure",
      "adapt",
      "catch",
      "struggle"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The _____ won the election easily and will serve a second term as mayor. Voters liked her plans for public transportation.",
    "options": [
      "decade",
      "routine",
      "incumbent",
      "habit"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The hotel plans to _____ its service by training front desk staff. Guests complained about long waiting times during check-in.",
    "options": [
      "improve",
      "resist",
      "struggle",
      "catch"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The supervisor warned that _____ workers who often arrive late will lose their bonuses. Everyone is expected to finish their tasks on time.",
    "options": [
      "fascinating",
      "favorable",
      "inevitable",
      "lazy"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "There was a long, _____ silence after the director announced the budget cuts. Nobody in the room knew what to say at first.",
    "options": [
      "inquisitive",
      "awkward",
      "favorable",
      "permanent"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Many small farms _____ to survive when the price of fuel goes up. The government has offered them low-interest loans this year.",
    "options": [
      "struggle",
      "secure",
      "boost",
      "recognize"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The new advertising campaign helped _____ online sales by thirty percent. The marketing director will present the results on Friday.",
    "options": [
      "recognize",
      "adapt",
      "resist",
      "boost"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "I did not _____ my old classmate at the conference because he had grown a beard. We laughed about it later over coffee.",
    "options": [
      "secure",
      "develop",
      "recognize",
      "boost"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Please leave the office by five o'clock if you want to _____ the last train to Hsinchu. The next one does not leave until nine.",
    "options": [
      "develop",
      "catch",
      "boost",
      "improve"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Customer reviews of the new phone have been mostly _____. Many buyers praised its long battery life and clear camera.",
    "options": [
      "awkward",
      "lazy",
      "transitional",
      "positive"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "With rising costs, a small price increase seems _____ this year. The company will explain the reasons to customers in an email.",
    "options": [
      "inevitable",
      "inquisitive",
      "fascinating",
      "lazy"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The bank's digital _____ allows customers to open accounts online in ten minutes. Most branches now focus on giving financial advice.",
    "options": [
      "habit",
      "transformation",
      "incumbent",
      "decade"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The bank offered us a loan on very _____ terms, with low interest and no fees. We plan to use the money to expand.",
    "options": [
      "frustrating",
      "inquisitive",
      "favorable",
      "lazy"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Waiting on hold for forty minutes to speak to customer service was very _____. I finally sent an email to complain instead.",
    "options": [
      "favorable",
      "permanent",
      "inspiring",
      "frustrating"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The company will hire temporary staff during the _____ period after the merger. Things should return to normal by next summer.",
    "options": [
      "transitional",
      "afraid",
      "inquisitive",
      "lazy"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Children are naturally _____ and love asking questions about how things work. The science museum offers hands-on activities for young visitors.",
    "options": [
      "permanent",
      "inevitable",
      "inquisitive",
      "regrettable"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The documentary about deep-sea animals was absolutely _____. I watched it twice and learned many things I never knew before.",
    "options": [
      "afraid",
      "fascinating",
      "transitional",
      "lazy"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The founder's speech about starting her business at sixty was truly _____. Many young employees said it motivated them to follow their dreams.",
    "options": [
      "lazy",
      "permanent",
      "afraid",
      "inspiring"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The airline said the long delay was _____ and apologized to all passengers. Each traveler received a meal voucher and a free drink.",
    "options": [
      "inquisitive",
      "fascinating",
      "regrettable",
      "lazy"
    ],
    "answer": 2,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "routine": {
    "pos": "n.",
    "en_def": "the usual order in which you do things every day",
    "cn_def": "例行公事；慣例"
  },
  "habit": {
    "pos": "n.",
    "en_def": "something you do often, almost without thinking",
    "cn_def": "習慣"
  },
  "challenging": {
    "pos": "adj.",
    "en_def": "difficult in a way that tests your ability",
    "cn_def": "具挑戰性的"
  },
  "afraid": {
    "pos": "adj.",
    "en_def": "feeling fear or worry about something",
    "cn_def": "害怕的；擔心的"
  },
  "resist": {
    "pos": "v.",
    "en_def": "to refuse to accept something or try to stop it",
    "cn_def": "抗拒；抵抗"
  },
  "frequently": {
    "pos": "adv.",
    "en_def": "often; many times",
    "cn_def": "頻繁地；經常"
  },
  "permanent": {
    "pos": "adj.",
    "en_def": "lasting for a long time or forever",
    "cn_def": "永久的；長期的"
  },
  "promotion": {
    "pos": "n.",
    "en_def": "a move to a higher job or rank",
    "cn_def": "升職；晉升"
  },
  "adapt": {
    "pos": "v.",
    "en_def": "to change your behavior to fit a new situation",
    "cn_def": "適應"
  },
  "develop": {
    "pos": "v.",
    "en_def": "to create something new or make it better over time",
    "cn_def": "開發；發展"
  },
  "decade": {
    "pos": "n.",
    "en_def": "a period of ten years",
    "cn_def": "十年"
  },
  "metamorphosis": {
    "pos": "n.",
    "en_def": "a complete change into something very different",
    "cn_def": "蛻變；徹底轉變"
  },
  "secure": {
    "pos": "v.",
    "en_def": "to get something important after a lot of effort",
    "cn_def": "獲得；爭取到"
  },
  "incumbent": {
    "pos": "n.",
    "en_def": "the person who holds an official position now",
    "cn_def": "現任者"
  },
  "improve": {
    "pos": "v.",
    "en_def": "to make something better",
    "cn_def": "改善；提升"
  },
  "lazy": {
    "pos": "adj.",
    "en_def": "not wanting to work or make an effort",
    "cn_def": "懶惰的"
  },
  "awkward": {
    "pos": "adj.",
    "en_def": "uncomfortable or embarrassing",
    "cn_def": "尷尬的；不自在的"
  },
  "struggle": {
    "pos": "v.",
    "en_def": "to try very hard to do something difficult",
    "cn_def": "努力掙扎；奮鬥"
  },
  "boost": {
    "pos": "v.",
    "en_def": "to increase or improve something",
    "cn_def": "提升；促進"
  },
  "recognize": {
    "pos": "v.",
    "en_def": "to know someone or something because you have seen it before",
    "cn_def": "認出；辨認"
  },
  "catch": {
    "pos": "v.",
    "en_def": "to get on a bus, train, or plane in time",
    "cn_def": "趕上；搭上"
  },
  "positive": {
    "pos": "adj.",
    "en_def": "hopeful and confident; showing approval",
    "cn_def": "積極的；正面的"
  },
  "inevitable": {
    "pos": "adj.",
    "en_def": "certain to happen and impossible to stop",
    "cn_def": "不可避免的"
  },
  "transformation": {
    "pos": "n.",
    "en_def": "a complete change in form or character",
    "cn_def": "轉變；轉型"
  },
  "favorable": {
    "pos": "adj.",
    "en_def": "good and likely to help something succeed",
    "cn_def": "有利的；良好的"
  },
  "frustrating": {
    "pos": "adj.",
    "en_def": "making you feel annoyed because you cannot do what you want",
    "cn_def": "令人沮喪的"
  },
  "transitional": {
    "pos": "adj.",
    "en_def": "relating to a change from one state to another",
    "cn_def": "過渡的"
  },
  "inquisitive": {
    "pos": "adj.",
    "en_def": "wanting to learn and asking many questions",
    "cn_def": "好奇的；愛發問的"
  },
  "fascinating": {
    "pos": "adj.",
    "en_def": "extremely interesting",
    "cn_def": "極有趣的；引人入勝的"
  },
  "inspiring": {
    "pos": "adj.",
    "en_def": "making people feel excited and want to do something good",
    "cn_def": "鼓舞人心的"
  },
  "regrettable": {
    "pos": "adj.",
    "en_def": "that you feel sorry about; unfortunate",
    "cn_def": "令人遺憾的"
  }
};

const EXTRA_GLOSSES = {};
