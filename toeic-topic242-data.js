// Topic 242 Quiz Data: Misbehavior 不當行為
// Source word list: https://www.examword.com/group-topic/misbehavior — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T242 - Misbehavior 不當行為",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "disobedience",
    "pos": "n.",
    "cn_def": "不服從；違抗",
    "en_def": "refusal to follow rules or orders",
    "sentence": "A: Why did the security guard at the factory lose his job last week after working there for almost ten years? B: The manager said his repeated {{BLANK}} was the main reason, because he kept ignoring the safety rules and refused to wear his helmet even after several meetings with the supervisor.",
    "cn": "A：為什麼工廠的那位警衛在那裡工作了將近十年，卻在上週丟了工作？ B：經理說他一再的【不服從】是主要原因，因為他一直無視安全規定，即使和主管開了好幾次會，仍然拒絕戴安全帽。"
  },
  {
    "word": "rudeness",
    "pos": "n.",
    "cn_def": "無禮；粗魯",
    "en_def": "behavior that is not polite",
    "sentence": "A: Why did the restaurant owner decide to give that customer a free dessert and a long apology yesterday evening? B: One of the new waiters showed real {{BLANK}} when the customer asked about the bill, so the owner wanted to make things right and keep the family coming back.",
    "cn": "A：為什麼餐廳老闆昨天傍晚決定送那位客人一份免費甜點，還向他道歉了好久？ B：其中一位新來的服務生在客人詢問帳單時表現得相當【無禮】，所以老闆想彌補，好讓那家人以後還會再來。"
  },
  {
    "word": "disrespect",
    "pos": "n.",
    "cn_def": "不尊重；無禮",
    "en_def": "a lack of respect for someone or something",
    "sentence": "A: Why are so many employees upset about the new manager in the marketing department this month? B: He often checks his phone and interrupts people during meetings, and many staff members see this as a sign of {{BLANK}} toward their hard work and the ideas they share.",
    "cn": "A：為什麼這個月有這麼多員工對行銷部的新經理感到不滿？ B：他開會時常看手機又打斷別人說話，許多員工認為這是對他們的努力和所分享想法的【不尊重】。"
  },
  {
    "word": "rebellion",
    "pos": "n.",
    "cn_def": "反抗；叛逆",
    "en_def": "strong action against people in power or against rules",
    "sentence": "A: Why did the young engineers refuse to follow the new dress code that the head office announced last Monday? B: Their quiet {{BLANK}} started because nobody asked for their opinions, and they felt that wearing suits in a hot workshop was uncomfortable and completely unnecessary for their daily tasks.",
    "cn": "A：為什麼年輕工程師們拒絕遵守總公司上週一公布的新服裝規定？ B：他們無聲的【反抗】是因為沒有人詢問他們的意見，而且他們覺得在悶熱的工作坊裡穿西裝既不舒服，對日常工作也完全沒必要。"
  },
  {
    "word": "defiance",
    "pos": "n.",
    "cn_def": "公然違抗；蔑視",
    "en_def": "open refusal to obey someone",
    "sentence": "A: What happened when the shop owner told the teenagers to stop skateboarding in front of the store entrance? B: In open {{BLANK}}, they kept riding up and down the sidewalk and laughing, so the owner finally had to call the building's security office to ask for some help.",
    "cn": "A：店主叫那些青少年不要在店門口玩滑板時，發生了什麼事？ B：他們【公然違抗】，繼續在人行道上來回滑行還大笑，所以店主最後只好打電話給大樓的保全室請求協助。"
  },
  {
    "word": "naughty",
    "pos": "adj.",
    "cn_def": "頑皮的；淘氣的",
    "en_def": "behaving badly, usually about children",
    "sentence": "A: Why is the hotel receptionist offering free coloring books to families when they check in this weekend? B: Last month some {{BLANK}} children ran through the lobby and knocked over a vase, so the manager hopes that giving them something fun to do will keep them calm and busy.",
    "cn": "A：為什麼這個週末飯店櫃檯人員在家庭入住時送他們免費的著色本？ B：上個月有幾個【頑皮的】小孩在大廳裡奔跑，撞倒了一個花瓶，所以經理希望給他們一些有趣的事做，讓他們保持安靜、有事可忙。"
  },
  {
    "word": "disruptive",
    "pos": "adj.",
    "cn_def": "擾亂秩序的；破壞性的",
    "en_def": "causing trouble that stops something from going on normally",
    "sentence": "A: Why did the training coordinator ask that participant to leave the workshop before lunch today? B: He was very {{BLANK}}, talking loudly on his phone and arguing with the speaker, so the other participants could not concentrate on the important lessons about customer service.",
    "cn": "A：今天為什麼培訓協調員在午餐前請那位學員離開研習會？ B：他非常【擾亂秩序】，大聲講電話又跟講者爭論，讓其他學員無法專心學習關於客戶服務的重要課程。"
  },
  {
    "word": "aggressive",
    "pos": "adj.",
    "cn_def": "有攻擊性的；挑釁的",
    "en_def": "angry and ready to fight or argue",
    "sentence": "A: Why did the airline staff call the airport police to the departure gate this afternoon? B: A passenger became {{BLANK}} after hearing that his flight was delayed, shouting at the agents and pushing a counter, so they needed help to keep everyone at the gate safe.",
    "cn": "A：今天下午為什麼航空公司人員把機場警察叫到登機門？ B：一位乘客聽到班機延誤後變得很【有攻擊性】，對地勤人員大吼並推櫃台，所以他們需要協助以確保登機門的每個人都安全。"
  },
  {
    "word": "impolite",
    "pos": "adj.",
    "cn_def": "不禮貌的",
    "en_def": "not polite; rude",
    "sentence": "A: Should I answer this text message from my client while we are having dinner with the new business partners tonight? B: I think it would be {{BLANK}} to look at your phone during the meal, so wait until dessert is finished and then step outside to reply quickly.",
    "cn": "A：今晚我們和新的商業夥伴共進晚餐時，我該回覆客戶傳來的這則簡訊嗎？ B：我覺得用餐時看手機會很【不禮貌】，所以等吃完甜點再走到外面快速回覆吧。"
  },
  {
    "word": "irresponsible",
    "pos": "adj.",
    "cn_def": "不負責任的",
    "en_def": "not caring enough about your duties or the results of your actions",
    "sentence": "A: Why is the project manager so angry with the new intern from the accounting department this morning? B: The intern left the office early yesterday without saving the client's files or telling anyone, which was very {{BLANK}} because the whole team lost several hours of important work.",
    "cn": "A：為什麼專案經理今天早上對會計部新來的實習生這麼生氣？ B：那位實習生昨天沒有儲存客戶的檔案也沒告訴任何人就提早下班，這非常【不負責任】，因為整個團隊因此損失了好幾個小時的重要工作成果。"
  },
  {
    "word": "reckless",
    "pos": "adj.",
    "cn_def": "魯莽的；不顧後果的",
    "en_def": "not caring about danger",
    "sentence": "A: Why did the delivery company suddenly take that driver off the morning schedule for the rest of the month? B: Several customers reported his {{BLANK}} driving, saying he went far too fast through school zones and ignored red lights while trying to finish his routes early.",
    "cn": "A：為什麼快遞公司突然把那位司機從本月剩下的早班表中撤下？ B：好幾位顧客投訴他【魯莽】駕駛，說他為了提早跑完路線，在學區開得太快又闖紅燈。"
  },
  {
    "word": "troublemaker",
    "pos": "n.",
    "cn_def": "惹麻煩的人；搗蛋鬼",
    "en_def": "a person who often causes problems",
    "sentence": "A: Why did the club manager refuse to let that man into the dance hall again on Friday night? B: Everyone knows he is a {{BLANK}} who starts arguments with other guests after a few drinks, so the staff decided it was safer to keep him out of the building.",
    "cn": "A：為什麼俱樂部經理週五晚上又拒絕讓那個男人進舞廳？ B：大家都知道他是個【愛惹麻煩的人】，喝了幾杯就會和其他客人起爭執，所以員工決定不讓他進大樓比較安全。"
  },
  {
    "word": "tantrum",
    "pos": "n.",
    "cn_def": "發脾氣；耍性子",
    "en_def": "a sudden show of anger, often by a child",
    "sentence": "A: Why did that little boy start crying and kicking his feet in the middle of the supermarket checkout line? B: He threw a {{BLANK}} because his mother would not buy him the chocolate bar next to the cashier, and the other shoppers waited patiently until she calmed him down.",
    "cn": "A：為什麼那個小男孩在超市結帳隊伍中間開始大哭又亂踢腳？ B：他在【發脾氣】，因為他媽媽不肯買收銀台旁的巧克力棒給他，其他顧客耐心地等到她把他安撫下來。"
  },
  {
    "word": "bully",
    "pos": "v.",
    "cn_def": "霸凌；欺負",
    "en_def": "to hurt or frighten a weaker person again and again",
    "sentence": "A: Why did the human resources department hold a special meeting with all the team leaders yesterday afternoon? B: Some new employees said that a senior worker likes to {{BLANK}} them by shouting and giving them the worst jobs, so the company wants leaders to stop this behavior immediately.",
    "cn": "A：為什麼人資部門昨天下午和所有組長開了特別會議？ B：有些新員工說一位資深員工喜歡用大吼和派給他們最差的工作來【欺負】他們，所以公司希望組長們立刻制止這種行為。"
  },
  {
    "word": "bullying",
    "pos": "n.",
    "cn_def": "霸凌（行為）",
    "en_def": "behavior that hurts or frightens weaker people",
    "sentence": "A: What is the main topic of the online training course that every staff member must finish by next Friday? B: It explains how to recognize and report workplace {{BLANK}}, such as insulting comments or leaving people out of meetings, so that everyone can feel safe and respected at work.",
    "cn": "A：每位員工下週五前必須完成的線上培訓課程，主題是什麼？ B：課程說明如何辨識和舉報職場【霸凌】，例如侮辱性的言論或把人排除在會議之外，讓每個人都能在工作中感到安全並受到尊重。"
  },
  {
    "word": "cheat",
    "pos": "v.",
    "cn_def": "作弊；欺騙",
    "en_def": "to act dishonestly to win or get an advantage",
    "sentence": "A: Why did the language school cancel the results of the English test that some employees took last weekend? B: The examiner discovered that a few people tried to {{BLANK}} by using their phones to search for answers, so everyone has to take the exam again next month.",
    "cn": "A：為什麼語言學校取消了一些員工上週末參加的英語測驗成績？ B：監考官發現有幾個人想用手機查答案來【作弊】，所以每個人下個月都必須重考。"
  },
  {
    "word": "lie",
    "pos": "v.",
    "cn_def": "說謊",
    "en_def": "to say something that you know is not true",
    "sentence": "A: Why did the store manager decide to fire the new cashier after only two weeks on the job? B: She chose to {{BLANK}} about the missing money from the register, but the security cameras clearly showed what happened, so the manager could no longer trust her.",
    "cn": "A：為什麼店經理在新收銀員只上班兩週後就決定開除她？ B：她選擇針對收銀機短少的錢【說謊】，但監視器清楚拍下了經過，所以經理再也無法信任她。"
  },
  {
    "word": "steal",
    "pos": "v.",
    "cn_def": "偷竊",
    "en_def": "to take something that belongs to someone else",
    "sentence": "A: Why did the electronics shop put extra cameras and alarms near the front door last week? B: Some people tried to {{BLANK}} expensive headphones by hiding them in their bags, so the owner wanted better security to protect the products and his small business.",
    "cn": "A：為什麼那家電子產品店上週在前門附近加裝了更多攝影機和警報器？ B：有些人試圖把昂貴的耳機藏在包包裡【偷走】，所以老闆想加強保全來保護商品和他的小生意。"
  },
  {
    "word": "vandalism",
    "pos": "n.",
    "cn_def": "蓄意破壞公物",
    "en_def": "damage to property done on purpose",
    "sentence": "A: Why are the cleaning staff working so hard on the walls of the subway station this morning? B: Someone painted rude words all over the new posters last night, and the city wants to remove the {{BLANK}} before thousands of commuters arrive for the morning rush hour.",
    "cn": "A：為什麼清潔人員今天早上在捷運站的牆上這麼賣力地清理？ B：昨晚有人在新海報上到處塗寫粗話，市政府想在數千名通勤者早上尖峰時段到達前清除這些【蓄意破壞公物】的痕跡。"
  },
  {
    "word": "rule-breaking",
    "pos": "n.",
    "cn_def": "違規",
    "en_def": "the act of not obeying rules",
    "sentence": "A: Why did the gym manager put new signs on every machine and near the locker rooms this week? B: There has been a lot of {{BLANK}} lately, such as members bringing in guests without paying and leaving weights on the floor, so the signs clearly remind everyone of the policies.",
    "cn": "A：為什麼健身房經理這週在每台器材和更衣室附近貼了新告示？ B：最近有很多【違規】行為，例如會員沒付費就帶朋友進來、把啞鈴留在地上，所以這些告示清楚提醒大家遵守規定。"
  },
  {
    "word": "discipline",
    "pos": "n.",
    "cn_def": "紀律",
    "en_def": "control of behavior by using rules",
    "sentence": "A: How does the new restaurant manager keep the busy kitchen running so smoothly during the dinner rush? B: She believes strict {{BLANK}} is important, so every cook must arrive on time, follow the recipes exactly, and keep the work area clean even when many orders come in.",
    "cn": "A：新任餐廳經理如何讓忙碌的廚房在晚餐尖峰時段運作得如此順暢？ B：她認為嚴格的【紀律】很重要，所以每位廚師都必須準時到班、完全照食譜做菜，即使訂單湧入也要保持工作區乾淨。"
  },
  {
    "word": "punishment",
    "pos": "n.",
    "cn_def": "懲罰",
    "en_def": "something done to a person because they did something wrong",
    "sentence": "A: What will happen to the employees who shared private customer information on social media last month? B: The company is still deciding on their {{BLANK}}, but they will probably lose their bonuses and receive a written note in their files about the serious mistake they made.",
    "cn": "A：上個月在社群媒體上分享客戶隱私資料的員工會怎麼樣？ B：公司還在決定對他們的【懲罰】，不過他們可能會失去獎金，並且在檔案中留下關於這次嚴重錯誤的書面紀錄。"
  },
  {
    "word": "detention",
    "pos": "n.",
    "cn_def": "課後留校（處罰）",
    "en_def": "a punishment in which a student must stay at school after classes",
    "sentence": "A: Why couldn't your son come to the company family picnic with us yesterday afternoon? B: His teacher gave him {{BLANK}} for talking during an exam, so he had to stay at school for an extra hour and finish his homework in the classroom.",
    "cn": "A：昨天下午你兒子為什麼不能跟我們一起參加公司的家庭野餐？ B：他考試時講話，老師罰他【課後留校】，所以他必須在學校多留一個小時，在教室裡寫完作業。"
  },
  {
    "word": "warning",
    "pos": "n.",
    "cn_def": "警告",
    "en_def": "a statement telling someone that something bad may happen if they continue",
    "sentence": "A: Did the supervisor fire the worker who came to the warehouse late three times this week? B: No, she gave him a final {{BLANK}} and explained that if he is late again next month, he will lose his position and the company will hire someone else.",
    "cn": "A：主管有開除這週在倉庫遲到三次的那位員工嗎？ B：沒有，她給了他最後【警告】，並說明如果他下個月再遲到，就會失去職位，公司會另外找人。"
  },
  {
    "word": "complaint",
    "pos": "n.",
    "cn_def": "投訴；抱怨",
    "en_def": "a statement that something is wrong or not good enough",
    "sentence": "A: Why did the hotel manager visit room 512 personally with a basket of fruit this morning? B: The guest made a {{BLANK}} about the noisy party in the next room last night, so the manager wanted to say sorry and offer him a free breakfast.",
    "cn": "A：為什麼飯店經理今天早上親自帶著一籃水果去512號房？ B：那位客人昨晚針對隔壁房間吵鬧的派對提出了【投訴】，所以經理想向他道歉並提供免費早餐。"
  },
  {
    "word": "apology",
    "pos": "n.",
    "cn_def": "道歉",
    "en_def": "something you say or write to show you are sorry",
    "sentence": "A: What did the company do after the delivery driver shouted at a customer in front of her house? B: The director sent the customer a written {{BLANK}} along with a gift card, and the driver had to attend a training session on how to treat people politely.",
    "cn": "A：送貨司機在一位顧客家門口對她大吼後，公司做了什麼？ B：主任寄給那位顧客一封書面【道歉】信和一張禮物卡，那位司機也必須參加如何禮貌待人的培訓課程。"
  },
  {
    "word": "regretful",
    "pos": "adj.",
    "cn_def": "後悔的；遺憾的",
    "en_def": "feeling sorry about something you did",
    "sentence": "A: How did the young salesman react when he realized he had been rude to his biggest client on the phone? B: He felt very {{BLANK}} about his behavior, so he called the client back immediately, said he was sorry, and promised to stay calm during their future conversations.",
    "cn": "A：那位年輕業務員發現自己在電話中對最大客戶很無禮時，有什麼反應？ B：他對自己的行為感到非常【後悔】，所以立刻回電給那位客戶，說他很抱歉，並保證以後談話時會保持冷靜。"
  },
  {
    "word": "remorse",
    "pos": "n.",
    "cn_def": "懊悔；自責",
    "en_def": "a strong feeling of being sorry for doing something wrong",
    "sentence": "A: Why did the judge give the young man who damaged the shop window a lighter sentence than expected? B: He showed real {{BLANK}} in court, paid for the new glass with his own savings, and offered to work at the shop for free on weekends.",
    "cn": "A：為什麼法官給那位打破店家窗戶的年輕人比預期更輕的判決？ B：他在法庭上表現出真誠的【懊悔】，用自己的積蓄支付了新玻璃的費用，還主動提出週末免費在店裡幫忙。"
  },
  {
    "word": "corrective",
    "pos": "adj.",
    "cn_def": "矯正的；改正的",
    "en_def": "done to fix a problem or mistake",
    "sentence": "A: What will the factory do now that the inspectors found several workers ignoring the safety rules? B: The managers will take {{BLANK}} action right away, including extra training sessions and daily checks, so that everyone follows the rules and nobody gets hurt on the production line.",
    "cn": "A：既然檢查員發現好幾位工人無視安全規定，工廠現在要怎麼做？ B：經理們會立刻採取【矯正】措施，包括額外的培訓課程和每日檢查，讓每個人都遵守規定，生產線上也不會有人受傷。"
  },
  {
    "word": "guidance",
    "pos": "n.",
    "cn_def": "指導；輔導",
    "en_def": "help and advice about what to do",
    "sentence": "A: What does the company do when a new employee keeps arriving late and missing important meetings? B: Instead of punishing them at once, a senior manager gives them {{BLANK}} on how to plan their time, and they meet every week to talk about their progress.",
    "cn": "A：新員工一直遲到又錯過重要會議時，公司會怎麼做？ B：公司不會馬上懲罰他們，而是由一位資深經理【指導】他們如何規劃時間，並且每週見面討論他們的進展。"
  },
  {
    "word": "respectful",
    "pos": "adj.",
    "cn_def": "尊重人的；恭敬的",
    "en_def": "showing respect for other people",
    "sentence": "A: What kind of behavior does the hotel expect from its front desk staff when guests become upset? B: Staff must stay calm and {{BLANK}} at all times, listen carefully to the guest's problem, and then offer a clear solution, even if the guest is shouting or being unfair.",
    "cn": "A：當客人不高興時，飯店期望櫃台人員有什麼樣的表現？ B：員工必須隨時保持冷靜和【尊重】，仔細聆聽客人的問題，然後提出明確的解決辦法，即使客人在大吼或不講理也一樣。"
  },
  {
    "word": "obedient",
    "pos": "adj.",
    "cn_def": "順從的；聽話的",
    "en_def": "willing to do what you are told",
    "sentence": "A: Why are so many families in our neighborhood taking their dogs to that training center on weekends? B: The trainers there are excellent, and after just a few lessons, most pets become calm and {{BLANK}}, so they no longer bark at visitors or pull hard on their leashes.",
    "cn": "A：為什麼我們社區有這麼多家庭週末帶狗去那間訓練中心？ B：那裡的訓練師非常優秀，只要上幾堂課，大部分寵物就會變得冷靜又【聽話】，不再對訪客吠叫或用力拉扯牽繩。"
  },
  {
    "word": "self-control",
    "pos": "n.",
    "cn_def": "自制力",
    "en_def": "the ability to control your feelings and actions",
    "sentence": "A: How did the customer service agent manage to stay so calm when that angry caller kept insulting her? B: She has excellent {{BLANK}}, so instead of shouting back, she took a deep breath, spoke slowly, and helped him solve the billing problem in about ten minutes.",
    "cn": "A：那位生氣的來電者一直辱罵客服人員時，她是如何保持這麼冷靜的？ B：她有極佳的【自制力】，所以她沒有吼回去，而是深呼吸、慢慢說話，大約十分鐘就幫他解決了帳單問題。"
  },
  {
    "word": "manners",
    "pos": "n.",
    "cn_def": "禮貌；禮儀",
    "en_def": "polite ways of behaving with other people",
    "sentence": "A: Why did the restaurant owner praise the young waiter in front of the whole staff during the meeting? B: Several customers wrote that he had excellent {{BLANK}}, always greeting them with a smile, pulling out chairs for older guests, and thanking everyone as they left.",
    "cn": "A：為什麼餐廳老闆在會議上當著全體員工的面稱讚那位年輕服務生？ B：好幾位顧客寫說他非常有【禮貌】，總是面帶微笑迎接他們、為年長客人拉椅子，並在每個人離開時向他們道謝。"
  }
];

const MCQS = [
  {
    "q": "The soldier was punished for _____ after ignoring direct orders. His commander reported the incident to headquarters the same day.",
    "options": [
      "disobedience",
      "guidance",
      "apology",
      "remorse"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The hotel received several letters about the _____ of the night receptionist. Guests said he ignored their questions and spoke to them angrily.",
    "options": [
      "discipline",
      "guidance",
      "rudeness",
      "apology"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Arriving late to the client's office without calling is a sign of _____. Our team should always be on time for important meetings.",
    "options": [
      "remorse",
      "disrespect",
      "guidance",
      "detention"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The babysitter said the twins were very _____ this afternoon. They drew on the living room walls and hid their father's car keys.",
    "options": [
      "respectful",
      "corrective",
      "obedient",
      "naughty"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Using mobile phones during the training session is considered _____ behavior. Please switch them off before the instructor begins.",
    "options": [
      "obedient",
      "respectful",
      "disruptive",
      "regretful"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The sales manager told the team not to use _____ selling tactics. Pushing customers too hard often makes them leave without buying anything.",
    "options": [
      "aggressive",
      "obedient",
      "regretful",
      "respectful"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Leaving the office door unlocked overnight was extremely _____. Anyone could have walked in and taken the company's computers.",
    "options": [
      "obedient",
      "respectful",
      "corrective",
      "irresponsible"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The bus driver lost his license for _____ driving on the mountain road. Passengers said he was speeding around every sharp corner.",
    "options": [
      "obedient",
      "reckless",
      "respectful",
      "regretful"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The new worker was known as a _____ at the factory. He often started arguments with coworkers and refused to follow safety instructions.",
    "options": [
      "troublemaker",
      "guidance",
      "apology",
      "detention"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The little girl threw a _____ in the toy store when her father said no. Other shoppers turned around to see what the noise was.",
    "options": [
      "detention",
      "guidance",
      "tantrum",
      "warning"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Senior staff must never _____ new employees by giving them unfair tasks. The company treats such behavior as a serious problem.",
    "options": [
      "steal",
      "bully",
      "lie",
      "forgive"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The school started a new program to stop _____ in classrooms. Students who are hurt or frightened by others can now report it safely.",
    "options": [
      "guidance",
      "remorse",
      "apology",
      "bullying"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Students who _____ on the final exam will receive a zero. The examiner will check every phone before the test begins.",
    "options": [
      "steal",
      "bully",
      "cheat",
      "behave"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Please do not _____ to customers about delivery dates. If a package will be late, tell them the truth and apologize.",
    "options": [
      "lie",
      "steal",
      "bully",
      "cheat"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Someone tried to _____ a laptop from the reception desk yesterday. Security guards stopped the man before he reached the exit.",
    "options": [
      "lie",
      "cheat",
      "bully",
      "steal"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The broken windows and painted walls in the parking garage were clearly acts of _____. The police are now reviewing the security videos.",
    "options": [
      "guidance",
      "vandalism",
      "apology",
      "manners"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The referee said that repeated _____ would lead to a player being sent off the field. Everyone must follow the game's regulations carefully.",
    "options": [
      "rule-breaking",
      "guidance",
      "self-control",
      "manners"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The new coach brought strong _____ to the team. Players now arrive on time and train hard every single morning.",
    "options": [
      "tantrum",
      "vandalism",
      "discipline",
      "rudeness"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The company's _____ for stealing office supplies is immediate dismissal. Employees are reminded of this rule during their first week.",
    "options": [
      "guidance",
      "punishment",
      "apology",
      "manners"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The teacher gave three students _____ for fighting in the hallway. They had to stay after school for an hour on Friday.",
    "options": [
      "manners",
      "remorse",
      "apology",
      "detention"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The supervisor gave Tom a final _____ about his late arrivals. If he is late once more, he will lose his job.",
    "options": [
      "apology",
      "guidance",
      "warning",
      "remorse"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The guest filed a formal _____ about the dirty bathroom in her room. The manager promised to refund half of the room charge.",
    "options": [
      "complaint",
      "discipline",
      "remorse",
      "guidance"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The airline sent every passenger a written _____ for the six-hour delay. Each traveler also received a voucher for a future flight.",
    "options": [
      "tantrum",
      "discipline",
      "detention",
      "apology"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The driver who damaged the fence showed deep _____ for his mistake. He paid for all the repairs and apologized to the owners.",
    "options": [
      "tantrum",
      "remorse",
      "vandalism",
      "detention"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "After the safety inspection failed, the plant manager promised to take _____ action immediately. New training will start next week.",
    "options": [
      "corrective",
      "naughty",
      "obedient",
      "regretful"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "New employees receive _____ from an experienced mentor during their first three months. This helps them learn the company's procedures quickly.",
    "options": [
      "detention",
      "tantrum",
      "guidance",
      "vandalism"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Staff should always be _____ toward guests, even when they are upset. Polite language helps solve problems more quickly.",
    "options": [
      "reckless",
      "respectful",
      "aggressive",
      "disruptive"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "After six weeks of training, the puppy became calm and _____. It now sits and waits whenever its owner gives a command.",
    "options": [
      "reckless",
      "disruptive",
      "aggressive",
      "obedient"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Good customer service agents need strong _____ when callers become angry. They must stay calm and avoid shouting back.",
    "options": [
      "vandalism",
      "tantrum",
      "self-control",
      "detention"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The children showed excellent table _____ at the company dinner. They said please and thank you to every server.",
    "options": [
      "manners",
      "remorse",
      "detention",
      "vandalism"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "disobedience": {
    "pos": "n.",
    "en_def": "refusal to follow rules or orders",
    "cn_def": "不服從；違抗"
  },
  "rudeness": {
    "pos": "n.",
    "en_def": "behavior that is not polite",
    "cn_def": "無禮；粗魯"
  },
  "disrespect": {
    "pos": "n.",
    "en_def": "a lack of respect for someone or something",
    "cn_def": "不尊重；無禮"
  },
  "rebellion": {
    "pos": "n.",
    "en_def": "strong action against people in power or against rules",
    "cn_def": "反抗；叛逆"
  },
  "defiance": {
    "pos": "n.",
    "en_def": "open refusal to obey someone",
    "cn_def": "公然違抗；蔑視"
  },
  "naughty": {
    "pos": "adj.",
    "en_def": "behaving badly, usually about children",
    "cn_def": "頑皮的；淘氣的"
  },
  "disruptive": {
    "pos": "adj.",
    "en_def": "causing trouble that stops something from going on normally",
    "cn_def": "擾亂秩序的；破壞性的"
  },
  "aggressive": {
    "pos": "adj.",
    "en_def": "angry and ready to fight or argue",
    "cn_def": "有攻擊性的；挑釁的"
  },
  "impolite": {
    "pos": "adj.",
    "en_def": "not polite; rude",
    "cn_def": "不禮貌的"
  },
  "irresponsible": {
    "pos": "adj.",
    "en_def": "not caring enough about your duties or the results of your actions",
    "cn_def": "不負責任的"
  },
  "reckless": {
    "pos": "adj.",
    "en_def": "not caring about danger",
    "cn_def": "魯莽的；不顧後果的"
  },
  "troublemaker": {
    "pos": "n.",
    "en_def": "a person who often causes problems",
    "cn_def": "惹麻煩的人；搗蛋鬼"
  },
  "tantrum": {
    "pos": "n.",
    "en_def": "a sudden show of anger, often by a child",
    "cn_def": "發脾氣；耍性子"
  },
  "bully": {
    "pos": "v.",
    "en_def": "to hurt or frighten a weaker person again and again",
    "cn_def": "霸凌；欺負"
  },
  "bullying": {
    "pos": "n.",
    "en_def": "behavior that hurts or frightens weaker people",
    "cn_def": "霸凌（行為）"
  },
  "cheat": {
    "pos": "v.",
    "en_def": "to act dishonestly to win or get an advantage",
    "cn_def": "作弊；欺騙"
  },
  "lie": {
    "pos": "v.",
    "en_def": "to say something that you know is not true",
    "cn_def": "說謊"
  },
  "steal": {
    "pos": "v.",
    "en_def": "to take something that belongs to someone else",
    "cn_def": "偷竊"
  },
  "vandalism": {
    "pos": "n.",
    "en_def": "damage to property done on purpose",
    "cn_def": "蓄意破壞公物"
  },
  "rule-breaking": {
    "pos": "n.",
    "en_def": "the act of not obeying rules",
    "cn_def": "違規"
  },
  "discipline": {
    "pos": "n.",
    "en_def": "control of behavior by using rules",
    "cn_def": "紀律"
  },
  "punishment": {
    "pos": "n.",
    "en_def": "something done to a person because they did something wrong",
    "cn_def": "懲罰"
  },
  "detention": {
    "pos": "n.",
    "en_def": "a punishment in which a student must stay at school after classes",
    "cn_def": "課後留校（處罰）"
  },
  "warning": {
    "pos": "n.",
    "en_def": "a statement telling someone that something bad may happen if they continue",
    "cn_def": "警告"
  },
  "complaint": {
    "pos": "n.",
    "en_def": "a statement that something is wrong or not good enough",
    "cn_def": "投訴；抱怨"
  },
  "apology": {
    "pos": "n.",
    "en_def": "something you say or write to show you are sorry",
    "cn_def": "道歉"
  },
  "regretful": {
    "pos": "adj.",
    "en_def": "feeling sorry about something you did",
    "cn_def": "後悔的；遺憾的"
  },
  "remorse": {
    "pos": "n.",
    "en_def": "a strong feeling of being sorry for doing something wrong",
    "cn_def": "懊悔；自責"
  },
  "corrective": {
    "pos": "adj.",
    "en_def": "done to fix a problem or mistake",
    "cn_def": "矯正的；改正的"
  },
  "guidance": {
    "pos": "n.",
    "en_def": "help and advice about what to do",
    "cn_def": "指導；輔導"
  },
  "respectful": {
    "pos": "adj.",
    "en_def": "showing respect for other people",
    "cn_def": "尊重人的；恭敬的"
  },
  "obedient": {
    "pos": "adj.",
    "en_def": "willing to do what you are told",
    "cn_def": "順從的；聽話的"
  },
  "self-control": {
    "pos": "n.",
    "en_def": "the ability to control your feelings and actions",
    "cn_def": "自制力"
  },
  "manners": {
    "pos": "n.",
    "en_def": "polite ways of behaving with other people",
    "cn_def": "禮貌；禮儀"
  }
};

const EXTRA_GLOSSES = {};
