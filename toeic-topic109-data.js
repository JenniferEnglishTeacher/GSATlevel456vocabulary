// Topic 109 Quiz Data: Doing Something Well 做得好
// Source word list: https://www.examword.com/group-topic/doing-something-well — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T109 - Doing Something Well 做得好",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "excel",
    "pos": "v.",
    "cn_def": "擅長；表現優異",
    "en_def": "to be very good at something",
    "sentence": "A: We need someone to lead the presentation for the new client next week, but most of our team feels nervous about speaking in front of large groups. B: Why don't we ask Jenny from marketing, because she tends to {{BLANK}} at public speaking and always explains complex ideas in a clear and friendly way?",
    "cn": "A：下週我們需要有人帶領對新客戶的簡報，但團隊大多數人在一大群人面前講話都會緊張。 B：何不請行銷部的珍妮來呢？因為她向來【擅長】公開演講，總能用清楚又親切的方式解釋複雜的想法。"
  },
  {
    "word": "succeed",
    "pos": "v.",
    "cn_def": "成功",
    "en_def": "to get the result that you wanted",
    "sentence": "A: I heard the small coffee shop on the corner was almost forced to close last year because of high rent and fewer customers. B: That's true, but the owner started selling coffee beans online and offering delivery, so she managed to {{BLANK}} in turning the business around within just six months.",
    "cn": "A：我聽說轉角那家小咖啡店去年因為房租高、客人變少，差點被迫歇業。 B：沒錯，但老闆開始在網路上賣咖啡豆並提供外送，所以她在短短六個月內就【成功】讓生意起死回生。"
  },
  {
    "word": "accomplish",
    "pos": "v.",
    "cn_def": "完成；達成",
    "en_def": "to finish something successfully",
    "sentence": "A: The warehouse team had to pack and ship more than two thousand orders before the holiday weekend, which seemed impossible with only eight workers. B: I know, but they divided the work carefully and took short breaks, so they were able to {{BLANK}} the whole task a day earlier than expected.",
    "cn": "A：倉庫團隊必須在連假週末前包裝並寄出兩千多張訂單，只有八名員工看起來根本不可能。 B：我知道，但他們仔細分工又適時短暫休息，所以比預期提早一天就【完成】了全部任務。"
  },
  {
    "word": "achieve",
    "pos": "v.",
    "cn_def": "達到；實現",
    "en_def": "to reach a goal or result by working hard",
    "sentence": "A: Our department has set a goal of cutting paper use by thirty percent this year, but some people still print every single email they receive. B: If we want to {{BLANK}} that target, we should store all documents online and remind everyone at the weekly meeting about the cost of printing.",
    "cn": "A：我們部門今年設定了減少百分之三十用紙量的目標，但有些人還是會把收到的每一封電子郵件都印出來。 B：如果我們想【達成】那個目標，就應該把所有文件存在線上，並在每週會議上提醒大家列印的成本。"
  },
  {
    "word": "master",
    "pos": "v.",
    "cn_def": "精通；掌握",
    "en_def": "to learn something completely so you can do it very well",
    "sentence": "A: The company is switching to a new accounting program next month, and I'm worried because I'm not very good with computers. B: Don't worry, because the IT department is offering free training sessions every Tuesday, and most people are able to {{BLANK}} the basic functions after a few weeks of practice.",
    "cn": "A：公司下個月要換新的會計軟體，我很擔心，因為我不太會用電腦。 B：別擔心，資訊部門每週二都有免費的訓練課程，大部分人練習幾週後就能【掌握】基本功能。"
  },
  {
    "word": "perform",
    "pos": "v.",
    "cn_def": "表現；執行",
    "en_def": "to do a job or activity, well or badly",
    "sentence": "A: How did the new sales staff do during their first month, and should we keep all of them after the trial period ends? B: Most of them did a great job, but two of them didn't {{BLANK}} as well as we expected, so their manager will give them extra training before making a final decision.",
    "cn": "A：新進業務人員第一個月的表現如何？試用期結束後我們應該全部留下嗎？ B：大部分人都做得很好，但其中兩位的【表現】不如我們預期，所以他們的經理在做最後決定前會再給他們額外訓練。"
  },
  {
    "word": "thrive",
    "pos": "v.",
    "cn_def": "茁壯成長；蓬勃發展",
    "en_def": "to grow, develop or succeed very well",
    "sentence": "A: Do you think our new branch in the city center will do well, even though there are already many restaurants in that area? B: I believe it will {{BLANK}}, because office workers there are always looking for healthy lunch options, and our prices are lower than most of the places nearby.",
    "cn": "A：你覺得我們在市中心的新分店會經營得好嗎？那一區已經有很多餐廳了。 B：我相信它會【蓬勃發展】，因為那裡的上班族一直在找健康的午餐選擇，而且我們的價格比附近大多數店家都便宜。"
  },
  {
    "word": "shine",
    "pos": "v.",
    "cn_def": "表現出色；發光",
    "en_def": "to do something very well and be noticed",
    "sentence": "A: Tom is usually very quiet in team meetings, so I was surprised when the director chose him to give the speech at the product launch. B: He spent weeks preparing, and when he finally stood on the stage, he really began to {{BLANK}}, and the audience loved his funny stories about our customers.",
    "cn": "A：湯姆在團隊會議中通常很安靜，所以主管選他在產品發表會上致詞時我很驚訝。 B：他花了好幾週準備，當他終於站上台時，真的【大放異彩】，觀眾都很喜歡他講的那些關於我們顧客的有趣故事。"
  },
  {
    "word": "flourish",
    "pos": "v.",
    "cn_def": "繁榮；興盛",
    "en_def": "to grow or develop successfully",
    "sentence": "A: Ten years ago this street had only a few old shops, but now it is full of cafés, bookstores and small design studios. B: Yes, after the city built a new subway station nearby, local businesses began to {{BLANK}}, and rents have gone up because so many people want to open stores here.",
    "cn": "A：十年前這條街只有幾家老店，但現在到處都是咖啡廳、書店和小型設計工作室。 B：對，自從市政府在附近蓋了新的捷運站後，當地商家開始【繁榮興盛】，而且因為很多人想在這裡開店，租金也上漲了。"
  },
  {
    "word": "impress",
    "pos": "v.",
    "cn_def": "使印象深刻；使欽佩",
    "en_def": "to make someone admire or respect you",
    "sentence": "A: I have a final interview with the bank's regional manager tomorrow morning, and I really want this job more than anything. B: To {{BLANK}} her, you should research the bank's recent projects, prepare a few smart questions, and arrive at least fifteen minutes early wearing a neat business suit.",
    "cn": "A：我明天早上要和銀行的區域經理進行最後一輪面試，我真的非常想要這份工作。 B：要讓她【留下深刻印象】，你應該研究一下銀行最近的專案、準備幾個聰明的問題，並穿著整齊的套裝至少提早十五分鐘到。"
  },
  {
    "word": "competence",
    "pos": "n.",
    "cn_def": "能力；勝任",
    "en_def": "the ability to do something well enough",
    "sentence": "A: Why does the hospital ask all of its nurses to take a practical test every year, even the ones who have worked there for a long time? B: Medical equipment and rules change quickly, so the hospital needs to check each nurse's {{BLANK}} regularly to make sure patients always receive safe and correct care.",
    "cn": "A：為什麼醫院要求所有護理師每年都要參加實作測驗，連工作很久的人也要？ B：醫療設備和規定變化很快，所以醫院需要定期檢查每位護理師的【能力】，以確保病人總是得到安全又正確的照護。"
  },
  {
    "word": "proficiency",
    "pos": "n.",
    "cn_def": "精通；熟練程度",
    "en_def": "a high level of ability or skill in something",
    "sentence": "A: The job advertisement for the hotel front desk says that applicants need to speak English, but how will the manager know how good my English is? B: You will probably need to show a recent test score or certificate that proves your {{BLANK}}, and the manager may also ask you some questions in English during the interview.",
    "cn": "A：飯店櫃檯的徵人廣告說應徵者需要會說英文，但經理要怎麼知道我的英文程度有多好？ B：你可能需要出示近期的考試成績或證書來證明你的【熟練程度】，而且經理在面試時也可能會用英文問你一些問題。"
  },
  {
    "word": "expertise",
    "pos": "n.",
    "cn_def": "專業知識；專門技能",
    "en_def": "special knowledge or skill in a particular area",
    "sentence": "A: Our company wants to start selling products in Southeast Asia, but none of us know much about the laws and customs in those countries. B: In that case, we should hire a consultant who has real {{BLANK}} in that market, because one costly mistake could damage our reputation before we even open our first store.",
    "cn": "A：我們公司想開始在東南亞銷售產品，但我們沒有人很了解那些國家的法律和習俗。 B：既然這樣，我們應該聘請一位在那個市場具有真正【專業知識】的顧問，因為一個代價高昂的錯誤可能在我們開第一家店之前就損害我們的聲譽。"
  },
  {
    "word": "skill",
    "pos": "n.",
    "cn_def": "技能；技巧",
    "en_def": "an ability to do something well that comes from training or practice",
    "sentence": "A: I have been working as a cashier for two years, and now I would like to apply for a position as an assistant manager at the store. B: That's a good plan, and the most useful {{BLANK}} you can build right now is leadership, so offer to train new staff members and handle customer complaints whenever your supervisor is busy.",
    "cn": "A：我當收銀員已經兩年了，現在想應徵店裡副理的職位。 B：這是個好計畫，而你現在最值得培養的【技能】就是領導力，所以要主動訓練新進員工，並在主管忙碌時處理顧客的抱怨。"
  },
  {
    "word": "talent",
    "pos": "n.",
    "cn_def": "天賦；才能",
    "en_def": "a natural ability to do something well",
    "sentence": "A: Did you know that Kevin from the accounting department designed the poster for our charity concert, even though he has never studied art? B: Yes, I saw it, and everyone was amazed, so I think the marketing team should invite him to help them because he clearly has a natural {{BLANK}} for design.",
    "cn": "A：你知道會計部的凱文設計了我們慈善音樂會的海報嗎？他從來沒學過美術。 B：知道，我看到了，大家都很驚豔，所以我覺得行銷團隊應該邀請他幫忙，因為他顯然在設計方面有與生俱來的【天賦】。"
  },
  {
    "word": "strength",
    "pos": "n.",
    "cn_def": "優點；長處",
    "en_def": "a good quality or ability that makes someone effective",
    "sentence": "A: During my job interview yesterday, the manager asked me about my greatest {{BLANK}}, and I didn't know what to say, so I just talked about being hardworking. B: Next time, give a specific example, such as how you organized a busy event or solved a difficult problem, because examples are much more convincing than general words.",
    "cn": "A：我昨天面試時，經理問我最大的【優點】是什麼，我不知道該說什麼，所以只說了自己很勤奮。 B：下次要舉具體的例子，像是你如何籌辦一場忙碌的活動或解決一個困難的問題，因為例子比空泛的話更有說服力。"
  },
  {
    "word": "excellence",
    "pos": "n.",
    "cn_def": "卓越；優秀",
    "en_def": "the quality of being extremely good",
    "sentence": "A: Why is there a long line of people waiting outside that small noodle shop every day, even though there are cheaper restaurants on the same street? B: The owner has won several awards for {{BLANK}} in cooking, and she still makes fresh noodles by hand every morning, so customers know they will get great food.",
    "cn": "A：為什麼那家小麵店外面每天都大排長龍，即使同一條街上有更便宜的餐廳？ B：老闆曾多次獲得烹飪【卓越】獎，而且她每天早上仍然親手做新鮮的麵條，所以顧客知道一定能吃到很棒的食物。"
  },
  {
    "word": "perfection",
    "pos": "n.",
    "cn_def": "完美",
    "en_def": "the state of being perfect, with no mistakes",
    "sentence": "A: Our designer has changed the company logo eleven times this month, and the printing company is still waiting for the final version. B: I understand that she wants {{BLANK}}, but we have a deadline on Friday, so please tell her that a very good design is enough and we must send the file today.",
    "cn": "A：我們的設計師這個月已經改了公司標誌十一次，印刷公司還在等最終版本。 B：我了解她追求【完美】，但我們星期五就要截止了，所以請告訴她一個很好的設計就夠了，我們今天必須把檔案送出去。"
  },
  {
    "word": "successfully",
    "pos": "adv.",
    "cn_def": "成功地",
    "en_def": "in a way that gets the result you wanted",
    "sentence": "A: Was the IT team able to move all of our customer data to the new system over the weekend, or will there be problems on Monday morning? B: Good news, the data was {{BLANK}} transferred on Sunday night, and the team checked every file twice, so all the sales staff can log in normally today.",
    "cn": "A：資訊團隊週末有辦法把我們所有的客戶資料轉移到新系統嗎？還是星期一早上會出問題？ B：好消息，資料在星期天晚上已經【成功地】轉移完成，團隊也把每個檔案檢查了兩次，所以所有業務人員今天都可以正常登入。"
  },
  {
    "word": "skillfully",
    "pos": "adv.",
    "cn_def": "熟練地；巧妙地",
    "en_def": "in a way that shows great ability",
    "sentence": "A: The customer at table five was shouting about his cold soup, and I was afraid he would leave a terrible review online. B: Luckily, our manager {{BLANK}} handled the situation by apologizing calmly, bringing him a fresh bowl and offering a free dessert, and in the end he left with a smile.",
    "cn": "A：五號桌的客人在大聲抱怨他的湯是冷的，我很怕他會在網路上留下很差的評論。 B：幸好我們的經理【巧妙地】處理了這個狀況，冷靜地道歉、送上一碗新的湯並招待免費甜點，最後他是笑著離開的。"
  },
  {
    "word": "efficiently",
    "pos": "adv.",
    "cn_def": "有效率地",
    "en_def": "in a way that does not waste time, money or energy",
    "sentence": "A: Our office electricity bill has almost doubled since last summer, and the finance manager wants to know why we are spending so much money. B: The old air conditioners don't run {{BLANK}} anymore, so I suggest we replace them with modern models that use less power and still keep the rooms cool.",
    "cn": "A：我們辦公室的電費從去年夏天以來幾乎翻倍，財務經理想知道為什麼我們花這麼多錢。 B：舊的冷氣機已經無法【有效率地】運轉了，所以我建議換成更省電、又能讓房間保持涼爽的新型機種。"
  },
  {
    "word": "effectively",
    "pos": "adv.",
    "cn_def": "有效地",
    "en_def": "in a way that produces the result you want",
    "sentence": "A: Many customers have told us that our online instructions are confusing, and they keep calling the help line with the same simple questions. B: We need to explain the steps more {{BLANK}}, so let's add short videos and clear pictures to the website, which should reduce the number of phone calls.",
    "cn": "A：很多顧客跟我們說線上說明令人困惑，他們一直打客服專線問同樣簡單的問題。 B：我們需要更【有效地】說明步驟，所以在網站上加入簡短的影片和清楚的圖片吧，這樣應該能減少來電數量。"
  },
  {
    "word": "competently",
    "pos": "adv.",
    "cn_def": "稱職地；能幹地",
    "en_def": "in a way that shows enough ability to do something well",
    "sentence": "A: How did the new receptionist manage on her first day when the phones were ringing nonstop and three visitors arrived at the same time? B: She stayed calm and dealt with everything {{BLANK}}, so I think she will become a valuable member of the front office team very quickly.",
    "cn": "A：新來的櫃檯接待員第一天上班時電話響個不停，又同時來了三位訪客，她應付得怎麼樣？ B：她保持冷靜，把所有事情都處理得很【稱職】，所以我覺得她很快就會成為櫃檯團隊中重要的一員。"
  },
  {
    "word": "brilliant",
    "pos": "adj.",
    "cn_def": "傑出的；絕妙的",
    "en_def": "extremely clever or very good",
    "sentence": "A: Our sales were very low last winter, so does anyone have an idea for bringing more customers into the store during the cold months? B: Mia suggested offering free hot chocolate to anyone who buys a coat, and I think it's a {{BLANK}} idea because it's cheap and makes people feel welcome.",
    "cn": "A：我們去年冬天的業績很差，有沒有人有在寒冷月份吸引更多顧客上門的點子？ B：米亞建議買外套就送免費熱可可，我覺得這是個【絕妙的】點子，因為成本低又能讓人覺得受歡迎。"
  },
  {
    "word": "excellent",
    "pos": "adj.",
    "cn_def": "極好的；優秀的",
    "en_def": "extremely good",
    "sentence": "A: I'm planning a dinner for twelve clients from Korea next Thursday, so could you recommend a restaurant that is quiet enough for business conversation? B: The Garden Room near the train station has {{BLANK}} service and private dining areas, and the chef can also prepare dishes for guests who don't eat meat.",
    "cn": "A：下週四我要為十二位韓國客戶安排晚餐，你能推薦一家夠安靜、適合談生意的餐廳嗎？ B：火車站附近的花園廳有【極好的】服務和包廂，主廚也能為不吃肉的客人準備菜色。"
  },
  {
    "word": "outstanding",
    "pos": "adj.",
    "cn_def": "傑出的；出色的",
    "en_def": "much better than others",
    "sentence": "A: Who do you think will receive the employee of the year award at the company party, since so many people worked hard this year? B: My guess is Daniel, because his {{BLANK}} performance helped us win four new contracts, and he also trained all the new staff in the sales department.",
    "cn": "A：你覺得誰會在公司派對上獲得年度最佳員工獎？今年有這麼多人都很努力。 B：我猜是丹尼爾，因為他【傑出的】表現幫我們拿下四份新合約，他還訓練了業務部所有的新進人員。"
  },
  {
    "word": "exceptional",
    "pos": "adj.",
    "cn_def": "優異的；非凡的",
    "en_def": "unusually good; much better than normal",
    "sentence": "A: The hotel received hundreds of positive reviews last month, and many guests mentioned one particular staff member by name. B: That must be Lisa at the front desk, because she provides {{BLANK}} service, remembers every regular guest's name and often solves problems before customers even notice them.",
    "cn": "A：飯店上個月收到幾百則好評，很多房客都指名提到某一位員工。 B：那一定是櫃檯的莉莎，因為她提供【非常優異的】服務，記得每位常客的名字，而且常常在顧客發現之前就把問題解決了。"
  },
  {
    "word": "superb",
    "pos": "adj.",
    "cn_def": "極好的；一流的",
    "en_def": "of very high quality; excellent",
    "sentence": "A: How was the company retreat at the mountain resort last weekend, and would you recommend the place for next year's training camp? B: Absolutely, the food was {{BLANK}}, the meeting rooms had modern equipment, and we could enjoy a beautiful view of the lake during every coffee break.",
    "cn": "A：上週末在山區度假村的公司員工旅遊怎麼樣？你會推薦那裡作為明年訓練營的地點嗎？ B：當然會，那裡的食物【一流】，會議室有現代化設備，而且每次休息喝咖啡時都能欣賞美麗的湖景。"
  },
  {
    "word": "remarkable",
    "pos": "adj.",
    "cn_def": "非凡的；驚人的",
    "en_def": "unusual or special in a way that makes people notice",
    "sentence": "A: I heard that the new manager at our Taichung branch has completely changed the way the office works in just a few months. B: Yes, the results are {{BLANK}}, because sales have gone up by forty percent, staff turnover has dropped, and customers say the service is much faster now.",
    "cn": "A：我聽說我們台中分公司的新經理在短短幾個月內就徹底改變了辦公室的運作方式。 B：是的，成果相當【驚人】，業績成長了百分之四十，員工流動率下降，顧客也說現在的服務快多了。"
  },
  {
    "word": "impressive",
    "pos": "adj.",
    "cn_def": "令人印象深刻的",
    "en_def": "making people admire it because it is very good",
    "sentence": "A: Did you see the presentation that the design team gave to the investors this morning about our new electric scooter? B: Yes, it was very {{BLANK}}, because they showed a working model, explained the costs clearly, and answered every difficult question without looking at their notes.",
    "cn": "A：你有看到設計團隊今天早上向投資人介紹我們新款電動機車的簡報嗎？ B：有，非常【令人印象深刻】，因為他們展示了可運作的模型、清楚說明了成本，而且不看筆記就回答了每個困難的問題。"
  },
  {
    "word": "capable",
    "pos": "adj.",
    "cn_def": "有能力的；能幹的",
    "en_def": "having the ability to do something",
    "sentence": "A: The director will be away on a business trip for three weeks, so who is going to make important decisions about the budget while she is gone? B: She has asked Mr. Chen to take charge, and I think he is fully {{BLANK}} of running the department because he has managed large projects before.",
    "cn": "A：主任要出差三週，她不在的期間誰來做預算方面的重要決定？ B：她請陳先生負責，我認為他完全【有能力】管理這個部門，因為他以前就管理過大型專案。"
  },
  {
    "word": "adept",
    "pos": "adj.",
    "cn_def": "熟練的；擅長的",
    "en_def": "very good at doing something that needs skill",
    "sentence": "A: Our online store gets a lot of angry messages when deliveries are late, and some of the new staff don't know how to reply politely. B: Ask Grace to train them, because she is very {{BLANK}} at calming upset customers and always finds a fair solution that keeps them shopping with us.",
    "cn": "A：每當送貨延遲，我們的網路商店就會收到很多憤怒的訊息，有些新進員工不知道該如何禮貌地回覆。 B：請葛蕾絲來訓練他們，因為她非常【擅長】安撫生氣的顧客，總能找到公平的解決辦法，讓他們繼續在我們這裡購物。"
  },
  {
    "word": "proficient",
    "pos": "adj.",
    "cn_def": "精通的；熟練的",
    "en_def": "able to do something well because of training and practice",
    "sentence": "A: The new position in our Tokyo office involves talking with Japanese suppliers every day, so what kind of person are we looking for? B: The ideal candidate should be {{BLANK}} in both Japanese and English, and should also have some experience with shipping schedules and international contracts.",
    "cn": "A：我們東京辦公室的新職缺每天都要和日本供應商溝通，那我們要找什麼樣的人？ B：理想的人選應該【精通】日文和英文，並且也要有一些處理船運時程和國際合約的經驗。"
  },
  {
    "word": "gifted",
    "pos": "adj.",
    "cn_def": "有天賦的；有才華的",
    "en_def": "having a natural ability to do something very well",
    "sentence": "A: I heard that the young pianist who played at our company's anniversary dinner is only fourteen years old and has already won several international competitions. B: Yes, she is a truly {{BLANK}} musician, and our CEO was so moved by her performance that he offered to sponsor her studies at a music school in Vienna.",
    "cn": "A：我聽說在我們公司週年晚宴上演奏的年輕鋼琴家只有十四歲，卻已經贏過好幾場國際比賽。 B：是的，她是一位真正【有天賦的】音樂家，我們的執行長被她的演出深深感動，主動提出要贊助她到維也納的音樂學校念書。"
  },
  {
    "word": "successful",
    "pos": "adj.",
    "cn_def": "成功的",
    "en_def": "achieving the result that you wanted",
    "sentence": "A: How did the charity sale go last Saturday, and did we raise enough money to buy new computers for the local library? B: It was very {{BLANK}}, because more than three hundred people came, we sold almost everything, and we collected twice as much money as we had planned.",
    "cn": "A：上週六的義賣進行得怎麼樣？我們有籌到足夠的錢為當地圖書館買新電腦嗎？ B：非常【成功】，有三百多人到場，我們幾乎把東西都賣光了，募到的錢是原本計畫的兩倍。"
  },
  {
    "word": "well",
    "pos": "adv.",
    "cn_def": "好地；順利地",
    "en_def": "in a good, skillful or satisfactory way",
    "sentence": "A: How did the meeting with the hospital's purchasing manager go this afternoon, and do you think they will order our new medical beds? B: It went really {{BLANK}}, because she liked our product demonstration, asked about bulk discounts, and wants to visit our factory next week before signing the contract.",
    "cn": "A：今天下午和醫院採購經理的會議進行得怎麼樣？你覺得他們會訂購我們的新款病床嗎？ B：進行得非常【順利】，因為她很喜歡我們的產品示範、詢問了大量購買的折扣，還想在簽約前於下週參觀我們的工廠。"
  }
];

const MCQS = [
  {
    "q": "Maria has always been good with numbers. She continues to _____ at preparing the monthly budget reports for the finance team.",
    "options": [
      "accomplish",
      "impress",
      "excel",
      "master"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The small bakery had failed three times before. This year it finally managed to _____ in winning a contract with a large hotel chain.",
    "options": [
      "succeed",
      "achieve",
      "accomplish",
      "perform"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The team had only two weeks to move the entire office. Surprisingly, they managed to _____ the task without missing a single deadline.",
    "options": [
      "succeed",
      "thrive",
      "excel",
      "accomplish"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The sales department worked overtime throughout the final quarter. As a result, it was able to _____ its target of ten percent growth.",
    "options": [
      "thrive",
      "achieve",
      "succeed",
      "shine"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "New employees are given three months to learn the accounting software. Most of them _____ it within a few weeks with regular practice.",
    "options": [
      "master",
      "excel",
      "thrive",
      "succeed"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The new delivery robots are used in our warehouse every day. They _____ very well, even during the busy holiday season.",
    "options": [
      "accomplish",
      "master",
      "perform",
      "achieve"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Some plants grow poorly in dark offices. Others, like the snake plant, _____ even with very little light and water.",
    "options": [
      "achieve",
      "thrive",
      "master",
      "accomplish"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The candidate brought a portfolio full of her design work to the interview. Her creative ideas managed to _____ everyone on the hiring panel.",
    "options": [
      "achieve",
      "succeed",
      "thrive",
      "impress"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "All drivers must pass a test to prove their basic _____ behind the wheel. Those who fail must take extra lessons.",
    "options": [
      "perfection",
      "competence",
      "excellence",
      "talent"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Applicants must submit a language _____ certificate with their application form. Test scores must be from the last two years.",
    "options": [
      "perfection",
      "talent",
      "strength",
      "proficiency"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Our firm hired an outside consultant with years of _____ in international tax law. Her advice saved the company a large amount of money.",
    "options": [
      "expertise",
      "perfection",
      "talent",
      "strength"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Good communication is the most important _____ for a customer service agent. Agents must listen carefully and explain things clearly.",
    "options": [
      "perfection",
      "excellence",
      "skill",
      "expertise"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The music school offers scholarships to children with natural _____. Many of its former students now play in professional orchestras.",
    "options": [
      "proficiency",
      "competence",
      "expertise",
      "talent"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The hotel received an award for _____ in customer service this year. Guests praised the staff for being friendly and helpful.",
    "options": [
      "talent",
      "excellence",
      "proficiency",
      "competence"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The chef checks every plate before it leaves the kitchen. He insists that each steak be cooked to _____.",
    "options": [
      "excellence",
      "competence",
      "perfection",
      "expertise"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Your password has been _____ changed. Please use the new one the next time you log in to the system.",
    "options": [
      "successfully",
      "skillfully",
      "competently",
      "efficiently"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The new heating system uses less electricity than the old one. It warms the building more _____ and lowers our monthly bills.",
    "options": [
      "successfully",
      "skillfully",
      "efficiently",
      "competently"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Our current computer system no longer works _____ for a company of our size. We plan to replace it early next year.",
    "options": [
      "effectively",
      "skillfully",
      "competently",
      "successfully"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Everyone at the meeting agreed that Kevin's plan was a _____ idea. It could cut the company's shipping costs by half.",
    "options": [
      "excellent",
      "outstanding",
      "impressive",
      "brilliant"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The award is given each year to an _____ employee in every branch. This year's winners will receive a bonus and a trophy.",
    "options": [
      "brilliant",
      "outstanding",
      "superb",
      "remarkable"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The view from the hotel's rooftop restaurant is absolutely _____. Guests often take photos of the sunset over the harbor there.",
    "options": [
      "superb",
      "capable",
      "adept",
      "proficient"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "It is _____ that the small startup grew to two hundred employees in only one year. Investors are now very interested in it.",
    "options": [
      "capable",
      "adept",
      "gifted",
      "remarkable"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The candidate's resume was very _____. She had worked for three major banks and could speak four languages fluently.",
    "options": [
      "capable",
      "impressive",
      "adept",
      "gifted"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Linda Chen is fully _____ of running the department while the director is away. She has managed large teams before.",
    "options": [
      "adept",
      "proficient",
      "capable",
      "gifted"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Our new assistant is very _____ at handling difficult customers on the phone. She always stays calm and polite.",
    "options": [
      "capable",
      "adept",
      "proficient",
      "impressive"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "All applicants must be _____ in Microsoft Excel and other office software. A short computer test will be given during the interview.",
    "options": [
      "capable",
      "gifted",
      "proficient",
      "impressive"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The school runs a special program for _____ children who learn much faster than others. Classes focus on creative problem solving.",
    "options": [
      "gifted",
      "proficient",
      "adept",
      "successful"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "After a _____ trial period of three months, the new system will be used in all branches. Staff feedback has been very positive.",
    "options": [
      "capable",
      "proficient",
      "gifted",
      "successful"
    ],
    "answer": 3,
    "vocabIndex": 34
  },
  {
    "q": "The new manager speaks Spanish very _____. She lived in Madrid for five years before joining our company.",
    "options": [
      "successfully",
      "efficiently",
      "well",
      "skillfully"
    ],
    "answer": 2,
    "vocabIndex": 35
  },
  {
    "q": "Her greatest _____ is her ability to stay calm under pressure. That is why she leads our crisis response team.",
    "options": [
      "strength",
      "proficiency",
      "competence",
      "perfection"
    ],
    "answer": 0,
    "vocabIndex": 15
  }
];

const LOOKUP = {
  "excel": {
    "pos": "v.",
    "en_def": "to be very good at something",
    "cn_def": "擅長；表現優異"
  },
  "succeed": {
    "pos": "v.",
    "en_def": "to get the result that you wanted",
    "cn_def": "成功"
  },
  "accomplish": {
    "pos": "v.",
    "en_def": "to finish something successfully",
    "cn_def": "完成；達成"
  },
  "achieve": {
    "pos": "v.",
    "en_def": "to reach a goal or result by working hard",
    "cn_def": "達到；實現"
  },
  "master": {
    "pos": "v.",
    "en_def": "to learn something completely so you can do it very well",
    "cn_def": "精通；掌握"
  },
  "perform": {
    "pos": "v.",
    "en_def": "to do a job or activity, well or badly",
    "cn_def": "表現；執行"
  },
  "thrive": {
    "pos": "v.",
    "en_def": "to grow, develop or succeed very well",
    "cn_def": "茁壯成長；蓬勃發展"
  },
  "shine": {
    "pos": "v.",
    "en_def": "to do something very well and be noticed",
    "cn_def": "表現出色；發光"
  },
  "flourish": {
    "pos": "v.",
    "en_def": "to grow or develop successfully",
    "cn_def": "繁榮；興盛"
  },
  "impress": {
    "pos": "v.",
    "en_def": "to make someone admire or respect you",
    "cn_def": "使印象深刻；使欽佩"
  },
  "competence": {
    "pos": "n.",
    "en_def": "the ability to do something well enough",
    "cn_def": "能力；勝任"
  },
  "proficiency": {
    "pos": "n.",
    "en_def": "a high level of ability or skill in something",
    "cn_def": "精通；熟練程度"
  },
  "expertise": {
    "pos": "n.",
    "en_def": "special knowledge or skill in a particular area",
    "cn_def": "專業知識；專門技能"
  },
  "skill": {
    "pos": "n.",
    "en_def": "an ability to do something well that comes from training or practice",
    "cn_def": "技能；技巧"
  },
  "talent": {
    "pos": "n.",
    "en_def": "a natural ability to do something well",
    "cn_def": "天賦；才能"
  },
  "strength": {
    "pos": "n.",
    "en_def": "a good quality or ability that makes someone effective",
    "cn_def": "優點；長處"
  },
  "excellence": {
    "pos": "n.",
    "en_def": "the quality of being extremely good",
    "cn_def": "卓越；優秀"
  },
  "perfection": {
    "pos": "n.",
    "en_def": "the state of being perfect, with no mistakes",
    "cn_def": "完美"
  },
  "successfully": {
    "pos": "adv.",
    "en_def": "in a way that gets the result you wanted",
    "cn_def": "成功地"
  },
  "skillfully": {
    "pos": "adv.",
    "en_def": "in a way that shows great ability",
    "cn_def": "熟練地；巧妙地"
  },
  "efficiently": {
    "pos": "adv.",
    "en_def": "in a way that does not waste time, money or energy",
    "cn_def": "有效率地"
  },
  "effectively": {
    "pos": "adv.",
    "en_def": "in a way that produces the result you want",
    "cn_def": "有效地"
  },
  "competently": {
    "pos": "adv.",
    "en_def": "in a way that shows enough ability to do something well",
    "cn_def": "稱職地；能幹地"
  },
  "brilliant": {
    "pos": "adj.",
    "en_def": "extremely clever or very good",
    "cn_def": "傑出的；絕妙的"
  },
  "excellent": {
    "pos": "adj.",
    "en_def": "extremely good",
    "cn_def": "極好的；優秀的"
  },
  "outstanding": {
    "pos": "adj.",
    "en_def": "much better than others",
    "cn_def": "傑出的；出色的"
  },
  "exceptional": {
    "pos": "adj.",
    "en_def": "unusually good; much better than normal",
    "cn_def": "優異的；非凡的"
  },
  "superb": {
    "pos": "adj.",
    "en_def": "of very high quality; excellent",
    "cn_def": "極好的；一流的"
  },
  "remarkable": {
    "pos": "adj.",
    "en_def": "unusual or special in a way that makes people notice",
    "cn_def": "非凡的；驚人的"
  },
  "impressive": {
    "pos": "adj.",
    "en_def": "making people admire it because it is very good",
    "cn_def": "令人印象深刻的"
  },
  "capable": {
    "pos": "adj.",
    "en_def": "having the ability to do something",
    "cn_def": "有能力的；能幹的"
  },
  "adept": {
    "pos": "adj.",
    "en_def": "very good at doing something that needs skill",
    "cn_def": "熟練的；擅長的"
  },
  "proficient": {
    "pos": "adj.",
    "en_def": "able to do something well because of training and practice",
    "cn_def": "精通的；熟練的"
  },
  "gifted": {
    "pos": "adj.",
    "en_def": "having a natural ability to do something very well",
    "cn_def": "有天賦的；有才華的"
  },
  "successful": {
    "pos": "adj.",
    "en_def": "achieving the result that you wanted",
    "cn_def": "成功的"
  },
  "well": {
    "pos": "adv.",
    "en_def": "in a good, skillful or satisfactory way",
    "cn_def": "好地；順利地"
  }
};

const EXTRA_GLOSSES = {};
