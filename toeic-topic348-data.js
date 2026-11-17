// Topic 348 Quiz Data: Service 服務
// Source word list: https://www.examword.com/group-topic/service — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T348 - Service 服務",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "customer",
    "pos": "n.",
    "cn_def": "顧客；客戶",
    "en_def": "a person who buys goods or services from a shop or company",
    "sentence": "A: Why did the store manager ask everyone to stay a little longer after closing time last night? B: A {{BLANK}} left a long review online about our slow checkout lines, so she wanted us to discuss ways to make people wait less during busy weekends.",
    "cn": "A：為什麼店經理昨晚要大家在打烊後多留一會兒？ B：一位【顧客】在網路上針對我們結帳排隊太慢留了長篇評論，所以她想讓我們討論如何在忙碌的週末減少大家等待的時間。"
  },
  {
    "word": "client",
    "pos": "n.",
    "cn_def": "客戶；委託人",
    "en_def": "a person or company that pays for professional services",
    "sentence": "A: Are you free to have lunch with the design team on Thursday, or is your calendar already full that week? B: I'm afraid I can't join you, because an important {{BLANK}} from Singapore is flying in to review our marketing plan, and I have to meet her at the airport.",
    "cn": "A：你週四有空和設計團隊吃午餐嗎，還是那週你的行程已經排滿了？ B：恐怕我不能參加，因為一位來自新加坡的重要【客戶】要飛來審查我們的行銷計畫，我得去機場接她。"
  },
  {
    "word": "staff",
    "pos": "n.",
    "cn_def": "員工（總稱）；職員",
    "en_def": "all the people who work for an organization",
    "sentence": "A: How is the new hotel near the train station managing now that the holiday season has started and every room is booked? B: They hired twenty extra {{BLANK}} members last month, so the front desk and the restaurant can handle the crowds without making guests wait too long.",
    "cn": "A：既然假期旺季已經開始而且每間房都訂滿了，火車站附近那家新飯店現在應付得如何？ B：他們上個月多雇用了二十名【員工】，所以櫃台和餐廳都能應付人潮，不會讓客人等太久。"
  },
  {
    "word": "employee",
    "pos": "n.",
    "cn_def": "員工；受僱者",
    "en_def": "a person who is paid to work for a company",
    "sentence": "A: Who is that young man sitting at the desk next to the copy machine, and why is he reading so many thick folders? B: He is a new {{BLANK}} in the accounting department, and he started on Monday, so he is studying our company rules before he begins working with real clients.",
    "cn": "A：坐在影印機旁邊那張桌子的年輕人是誰，他為什麼在看那麼多厚厚的資料夾？ B：他是會計部門的新【員工】，週一才開始上班，所以他在開始接觸真正的客戶之前正在研讀公司的規定。"
  },
  {
    "word": "manager",
    "pos": "n.",
    "cn_def": "經理；主管",
    "en_def": "a person who is in charge of a team, store, or department",
    "sentence": "A: Who should I talk to if I want to change my working hours next month because my daughter is starting a new school? B: You should speak to the {{BLANK}} of our department, because she makes the weekly schedule and can usually find someone to switch shifts with you.",
    "cn": "A：如果我下個月想因為女兒要上新學校而更改工作時間，我應該找誰談？ B：你應該跟我們部門的【經理】談，因為她負責排每週的班表，通常能找到人跟你換班。"
  },
  {
    "word": "assistant",
    "pos": "n.",
    "cn_def": "助理；助手",
    "en_def": "a person who helps someone else with their work",
    "sentence": "A: How does Ms. Chen manage to answer so many emails and still attend all those meetings with overseas partners every week? B: Her {{BLANK}} reads every message first, books her flights and hotel rooms, and only passes on the urgent questions that really need her personal answer.",
    "cn": "A：陳小姐每週怎麼能回覆那麼多電子郵件，還能參加所有與海外夥伴的會議？ B：她的【助理】會先閱讀每一則訊息、幫她預訂機票和飯店房間，只把真正需要她親自回答的緊急問題轉給她。"
  },
  {
    "word": "support",
    "pos": "n.",
    "cn_def": "支援；協助",
    "en_def": "help or advice given to customers or users",
    "sentence": "A: My laptop keeps shutting down while I'm uploading large files to the shared drive, and I have a presentation tomorrow morning. B: You should call technical {{BLANK}} right away, because the IT team works until nine tonight and can usually fix that kind of problem over the phone.",
    "cn": "A：我的筆電在上傳大型檔案到共用雲端時一直關機，而我明天早上還有一場簡報。 B：你應該馬上打電話給技術【支援】，因為資訊部門今晚工作到九點，通常可以透過電話解決那類問題。"
  },
  {
    "word": "maintenance",
    "pos": "n.",
    "cn_def": "維修保養；維護",
    "en_def": "the work of keeping buildings or machines in good condition",
    "sentence": "A: Why are the elevators in our office building closed on Saturday morning, and how will the cleaners get to the top floor? B: The building company is doing its regular {{BLANK}} that day to check the cables and motors, so everyone has to use the stairs until noon.",
    "cn": "A：為什麼我們辦公大樓的電梯週六早上要關閉，清潔人員要怎麼上頂樓？ B：大樓公司那天要做定期【維修保養】，檢查纜線和馬達，所以大家在中午之前都得走樓梯。"
  },
  {
    "word": "delivery",
    "pos": "n.",
    "cn_def": "送貨；遞送",
    "en_def": "the act of bringing goods or letters to a place",
    "sentence": "A: Did the new office chairs we ordered from the furniture store arrive yesterday afternoon as they promised on the phone? B: Not yet, because the truck broke down on the highway, so the store moved our {{BLANK}} to Friday morning and offered us a small discount for the trouble.",
    "cn": "A：我們向家具店訂的新辦公椅有像他們電話中承諾的昨天下午送到嗎？ B：還沒有，因為卡車在高速公路上拋錨了，所以店家把我們的【送貨】改到週五早上，還給我們一點折扣作為補償。"
  },
  {
    "word": "repair",
    "pos": "v.",
    "cn_def": "修理；修復",
    "en_def": "to fix something that is broken or damaged",
    "sentence": "A: The air conditioner in the meeting room is making a loud noise again, and our clients are coming at two o'clock. B: I already called the technician this morning, and he promised to come over before lunch to {{BLANK}} it, so the room should be quiet and cool by then.",
    "cn": "A：會議室的冷氣又發出很大的噪音，而我們的客戶兩點就要來了。 B：我今天早上已經打電話給技師，他答應午餐前過來【修理】它，所以到時候房間應該會安靜又涼爽。"
  },
  {
    "word": "appointment",
    "pos": "n.",
    "cn_def": "預約；約會",
    "en_def": "an arranged time to meet someone, often a professional",
    "sentence": "A: Can you join our team dinner on Wednesday evening to celebrate the end of the big project we finished last week? B: I'd love to, but I have a dental {{BLANK}} at six thirty, so I might arrive about an hour late if that's all right with everyone.",
    "cn": "A：你週三晚上能來參加團隊晚餐，慶祝我們上週完成的大型專案嗎？ B：我很想去，但我六點半有一個牙醫【預約】，所以如果大家不介意的話，我可能會晚大約一小時到。"
  },
  {
    "word": "reservation",
    "pos": "n.",
    "cn_def": "預訂；訂位",
    "en_def": "an arrangement to keep a table, room, or seat for someone",
    "sentence": "A: Have you booked a place for the farewell lunch for Mr. Lin, since about fifteen people from our department want to come? B: Yes, I made a {{BLANK}} at the Italian restaurant across the street for twelve thirty, and they will give us a private room near the garden.",
    "cn": "A：既然我們部門大約有十五個人想參加，你有幫林先生的歡送午宴訂好地方嗎？ B：有，我在對街的義大利餐廳做了十二點半的【訂位】，他們會給我們一間靠近花園的包廂。"
  },
  {
    "word": "feedback",
    "pos": "n.",
    "cn_def": "意見回饋",
    "en_def": "comments about how good or useful something is",
    "sentence": "A: How do you know whether the new online ordering system is easy enough for our older shoppers to use? B: We sent a short survey to two hundred people last week and asked for their {{BLANK}}, and most of them said the buttons were clear but the text was too small.",
    "cn": "A：你怎麼知道新的線上訂購系統對我們年長的購物者來說夠不夠容易使用？ B：我們上週寄了一份簡短的問卷給兩百個人，請他們提供【意見回饋】，大部分人說按鈕很清楚，但字太小了。"
  },
  {
    "word": "complaint",
    "pos": "n.",
    "cn_def": "投訴；抱怨",
    "en_def": "a statement that you are unhappy about something",
    "sentence": "A: Why does the hotel manager look so worried this morning, and why is she talking to the kitchen staff? B: A guest made a {{BLANK}} last night about cold soup and a forty-minute wait for room service, so she wants to find out what went wrong.",
    "cn": "A：飯店經理今天早上為什麼看起來那麼擔心，她為什麼在跟廚房員工談話？ B：一位客人昨晚提出【投訴】，說湯是冷的，而且客房送餐等了四十分鐘，所以她想查出哪裡出了問題。"
  },
  {
    "word": "guarantee",
    "pos": "n.",
    "cn_def": "保證；擔保",
    "en_def": "a firm promise that something will be done or will happen",
    "sentence": "A: Are you sure the printing company will finish our brochures before the trade show opens next Monday morning? B: They gave us a written {{BLANK}} that everything will be ready by Friday, and if they are late, we won't have to pay for the job at all.",
    "cn": "A：你確定印刷公司能在下週一早上商展開幕前印好我們的小冊子嗎？ B：他們給了我們書面【保證】，說一切會在週五前準備好，如果他們延誤，我們完全不用付這筆費用。"
  },
  {
    "word": "warranty",
    "pos": "n.",
    "cn_def": "保固；保修單",
    "en_def": "a written promise to repair or replace a product if it breaks",
    "sentence": "A: The screen on the new projector we bought in March has suddenly stopped working, and we have a big meeting next week. B: Don't worry, it is still under {{BLANK}} for two years, so the shop will repair it or give us a new one without charging anything.",
    "cn": "A：我們三月買的新投影機螢幕突然壞了，而我們下週有一場大型會議。 B：別擔心，它還在兩年的【保固】期內，所以店家會免費修理或換一台新的給我們。"
  },
  {
    "word": "serve",
    "pos": "v.",
    "cn_def": "供應（餐點）；為…服務",
    "en_def": "to give people food or drinks, or to help customers",
    "sentence": "A: What time does the hotel restaurant start breakfast, because our tour group has to leave for the airport very early tomorrow? B: Usually the kitchen opens at seven, but for groups with early flights they can {{BLANK}} a simple breakfast in the lobby from five thirty.",
    "cn": "A：飯店餐廳幾點開始供應早餐？因為我們的旅行團明天很早就要出發去機場。 B：通常廚房七點開，但對於搭早班機的團體，他們可以從五點半開始在大廳【供應】簡單的早餐。"
  },
  {
    "word": "assist",
    "pos": "v.",
    "cn_def": "協助；幫助",
    "en_def": "to help someone do something",
    "sentence": "A: The new trainee looks confused about how to use the cash register, and the store is getting busier every minute. B: Could you please {{BLANK}} her for the next hour, since you have worked here the longest and know all the shortcuts on the machine?",
    "cn": "A：新來的實習生看起來不太懂怎麼使用收銀機，而店裡每分鐘都越來越忙。 B：你能在接下來一小時【協助】她嗎？因為你在這裡工作最久，也知道機器上所有的快捷操作。"
  },
  {
    "word": "provide",
    "pos": "v.",
    "cn_def": "提供",
    "en_def": "to give someone something they need",
    "sentence": "A: Will the conference center have enough chairs and microphones for all two hundred guests who signed up for the seminar? B: Yes, the center will {{BLANK}} all the equipment we need, including a projector and free drinking water, so we only have to bring our laptops.",
    "cn": "A：會議中心會有足夠的椅子和麥克風給報名研討會的兩百位來賓嗎？ B：會，會議中心會【提供】我們需要的所有設備，包括投影機和免費飲用水，所以我們只需要帶筆電就好。"
  },
  {
    "word": "deliver",
    "pos": "v.",
    "cn_def": "遞送；運送",
    "en_def": "to take goods or letters to a person or place",
    "sentence": "A: Can the bakery send the birthday cake to our office before the party starts at three o'clock on Friday afternoon? B: Yes, they said they would {{BLANK}} it at around two, and they will also bring candles and plates, so we don't need to buy anything else.",
    "cn": "A：麵包店可以在週五下午三點派對開始前把生日蛋糕送到我們辦公室嗎？ B：可以，他們說大約兩點會【送達】，而且還會帶蠟燭和盤子來，所以我們不需要再買其他東西。"
  },
  {
    "word": "respond",
    "pos": "v.",
    "cn_def": "回應；回覆",
    "en_def": "to answer or react to something",
    "sentence": "A: How quickly does our team usually answer the questions that people send through the website's contact form? B: Our goal is to {{BLANK}} within twenty-four hours, but on busy holidays it can take two days, so we are planning to hire more part-time workers.",
    "cn": "A：我們團隊通常多快回答大家透過網站聯絡表單送來的問題？ B：我們的目標是在二十四小時內【回覆】，但在忙碌的假期可能要兩天，所以我們正計畫多雇一些兼職人員。"
  },
  {
    "word": "improve",
    "pos": "v.",
    "cn_def": "改善；改進",
    "en_def": "to make something better",
    "sentence": "A: Why are all the cashiers taking a training course this weekend instead of working their usual shifts at the store? B: Our head office wants to {{BLANK}} the way we greet shoppers, because last month's survey showed that many people felt the staff were not very friendly.",
    "cn": "A：為什麼所有收銀員這個週末都要上訓練課程，而不是在店裡上他們平常的班？ B：總公司想【改善】我們招呼購物者的方式，因為上個月的調查顯示很多人覺得員工不太友善。"
  },
  {
    "word": "professional",
    "pos": "adj.",
    "cn_def": "專業的",
    "en_def": "showing the skill, training, and good behavior expected in a job",
    "sentence": "A: What did you think of the cleaning company we hired to wash the office windows and carpets last weekend? B: They were very {{BLANK}}, because they arrived on time, wore clean uniforms, protected our computers with plastic sheets, and finished the whole floor in four hours.",
    "cn": "A：你覺得上週末我們請來清洗辦公室窗戶和地毯的清潔公司如何？ B：他們非常【專業】，因為他們準時抵達、穿著乾淨的制服、用塑膠布保護我們的電腦，並在四小時內完成整層樓。"
  },
  {
    "word": "efficient",
    "pos": "adj.",
    "cn_def": "有效率的",
    "en_def": "working well without wasting time or money",
    "sentence": "A: How did the new check-in system at the airport change things for travelers during the busy summer holiday? B: It is much more {{BLANK}} than the old one, because passengers can scan their passports themselves, so the lines are shorter and fewer people miss their flights.",
    "cn": "A：機場的新報到系統在忙碌的暑假期間對旅客帶來了什麼改變？ B：它比舊系統【有效率】得多，因為乘客可以自己掃描護照，所以隊伍比較短，錯過班機的人也變少了。"
  },
  {
    "word": "friendly",
    "pos": "adj.",
    "cn_def": "友善的",
    "en_def": "kind and pleasant to other people",
    "sentence": "A: Why do you always buy your coffee at that small café near the bus stop instead of the big chain store downstairs? B: The people who work there are so {{BLANK}}, because they remember my name and my usual order, and they always ask how my day is going.",
    "cn": "A：你為什麼總是在公車站附近那家小咖啡館買咖啡，而不是樓下的大型連鎖店？ B：在那裡工作的人非常【友善】，因為他們記得我的名字和我常點的東西，而且總是問我今天過得如何。"
  },
  {
    "word": "helpful",
    "pos": "adj.",
    "cn_def": "有幫助的；樂於助人的",
    "en_def": "useful, or willing to help",
    "sentence": "A: Did the woman at the information desk tell you which train goes to the exhibition center and where to buy tickets? B: Yes, she was very {{BLANK}}, because she printed a map for me, wrote down the platform number, and even showed me a cheaper ticket for weekend travelers.",
    "cn": "A：服務台的那位女士有告訴你哪班火車去展覽中心以及在哪裡買票嗎？ B：有，她非常【樂於助人】，因為她幫我印了一張地圖、寫下月台號碼，甚至還告訴我一種給週末旅客的較便宜車票。"
  },
  {
    "word": "reliable",
    "pos": "adj.",
    "cn_def": "可靠的",
    "en_def": "able to be trusted to work well or do what is expected",
    "sentence": "A: Why did our company choose that small shipping firm instead of the bigger one that offered lower prices last year? B: The small firm has been very {{BLANK}} for many years, because our packages always arrive on the correct day and nothing has ever been damaged on the way.",
    "cn": "A：為什麼我們公司選了那家小型貨運公司，而不是去年報價更低的大公司？ B：那家小公司多年來一直很【可靠】，因為我們的包裹總是在正確的日子送達，而且運送途中從來沒有損壞過。"
  },
  {
    "word": "available",
    "pos": "adj.",
    "cn_def": "有空的；可取得的",
    "en_def": "free to be used, bought, or to talk to",
    "sentence": "A: I'd like to book the large meeting room for a training session with the new sales team next Tuesday afternoon. B: I'm sorry, but it is not {{BLANK}} then, because the directors are using it all afternoon, so would the smaller room on the fifth floor be all right?",
    "cn": "A：我想預約大會議室，下週二下午要為新業務團隊舉辦訓練課程。 B：很抱歉，那時候它【無法使用】，因為董事們整個下午都要用，所以五樓的小會議室可以嗎？"
  },
  {
    "word": "promptly",
    "pos": "adv.",
    "cn_def": "迅速地；準時地",
    "en_def": "quickly and without delay",
    "sentence": "A: What happened when you told the airline that your suitcase didn't arrive with your flight from Tokyo last night? B: They acted very {{BLANK}}, because a staff member found the bag within an hour and a driver brought it to my hotel before I went to bed.",
    "cn": "A：昨晚你告訴航空公司你的行李箱沒有跟著從東京的班機一起抵達時，發生了什麼事？ B：他們處理得非常【迅速】，因為一位員工在一小時內就找到行李，一位司機在我睡覺前就把它送到我的飯店。"
  },
  {
    "word": "politely",
    "pos": "adv.",
    "cn_def": "有禮貌地",
    "en_def": "in a way that shows good manners and respect",
    "sentence": "A: How should I answer when a shopper becomes angry because the item he wants is sold out again? B: You should listen calmly, apologize {{BLANK}}, and then offer to order it for him or suggest a similar product, so he leaves the store feeling respected.",
    "cn": "A：當購物者因為想要的商品又賣完而生氣時，我應該怎麼回應？ B：你應該冷靜地傾聽、【有禮貌地】道歉，然後主動幫他訂貨或推薦類似的商品，讓他離開店裡時感到被尊重。"
  },
  {
    "word": "carefully",
    "pos": "adv.",
    "cn_def": "小心地；仔細地",
    "en_def": "with a lot of attention so that you avoid mistakes or damage",
    "sentence": "A: What should I do with these glass vases before the delivery driver comes to collect them this afternoon? B: Please wrap each one {{BLANK}} in bubble paper and put them in the strong boxes, because last time two of them broke on the way to the customer.",
    "cn": "A：在送貨司機今天下午來取這些玻璃花瓶之前，我應該怎麼處理它們？ B：請把每一個都【小心地】用氣泡紙包好，放進堅固的箱子裡，因為上次有兩個在送往顧客的途中破了。"
  },
  {
    "word": "public",
    "pos": "adj.",
    "cn_def": "公共的；公眾的",
    "en_def": "for everyone in a community to use",
    "sentence": "A: Is it easy to get to the new branch office from the main train station, or should we rent cars for the visitors? B: It's very easy, because {{BLANK}} buses stop right in front of the building every ten minutes, and the ride only takes about fifteen minutes.",
    "cn": "A：從主要火車站到新的分公司方便嗎，還是我們應該幫訪客租車？ B：非常方便，因為【公共】巴士每十分鐘就會在大樓正前方停靠，車程只要大約十五分鐘。"
  },
  {
    "word": "essential",
    "pos": "adj.",
    "cn_def": "必要的；不可或缺的",
    "en_def": "completely necessary; very important",
    "sentence": "A: Do I really need to finish the online safety course before I start working in the warehouse next Monday? B: Yes, it is {{BLANK}} for every new worker, because you will drive forklifts and lift heavy boxes, and the company cannot let anyone start without the certificate.",
    "cn": "A：我下週一開始在倉庫工作之前，真的需要完成線上安全課程嗎？ B：是的，這對每位新員工都是【必要的】，因為你會駕駛堆高機並搬運重箱子，公司不能讓沒有證書的人開始工作。"
  }
];

const MCQS = [
  {
    "q": "The bakery gives a free cookie to every _____ who spends more than 300 dollars. The offer lasts until the end of May.",
    "options": [
      "customer",
      "warranty",
      "delivery",
      "maintenance"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our law firm will meet the new _____ on Monday morning. She wants advice about opening a branch office in Japan.",
    "options": [
      "warranty",
      "reservation",
      "client",
      "maintenance"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "All hotel _____ must wear their name badges while on duty. Guests often want to know who served them.",
    "options": [
      "warranty",
      "staff",
      "feedback",
      "delivery"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Each _____ receives fifteen days of paid vacation per year. Unused days can be carried over to the next year.",
    "options": [
      "warranty",
      "maintenance",
      "reservation",
      "employee"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Please ask the store _____ to approve any refund over 2,000 dollars. Cashiers cannot handle large refunds alone.",
    "options": [
      "warranty",
      "maintenance",
      "manager",
      "feedback"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Our customer _____ line is open twenty-four hours a day. Callers can also use the online chat service.",
    "options": [
      "support",
      "complaint",
      "appointment",
      "guarantee"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The swimming pool will be closed for _____ next week. Members may use the gym during that time.",
    "options": [
      "customer",
      "appointment",
      "client",
      "maintenance"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "All online orders over 1,000 dollars qualify for free _____. Items usually arrive within three business days.",
    "options": [
      "complaint",
      "delivery",
      "manager",
      "employee"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The technician will _____ the broken photocopier tomorrow morning. Until then, please use the printer on the second floor.",
    "options": [
      "repair",
      "respond",
      "serve",
      "assist"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The dental clinic called to confirm your _____ for Thursday afternoon. Please arrive ten minutes early to fill out the forms.",
    "options": [
      "warranty",
      "feedback",
      "appointment",
      "delivery"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "We made a _____ for a table of eight at the hotel restaurant. Please arrive by seven to keep the table.",
    "options": [
      "complaint",
      "reservation",
      "warranty",
      "maintenance"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The hotel asks guests to leave _____ before checking out. Their comments help the staff improve the service.",
    "options": [
      "maintenance",
      "warranty",
      "delivery",
      "feedback"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The airline received a _____ about rude behavior at the check-in counter. A manager is now looking into the matter.",
    "options": [
      "warranty",
      "reservation",
      "complaint",
      "maintenance"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The company offers a thirty-day money-back _____ on all its kitchen products. Unhappy buyers can return items for a full refund.",
    "options": [
      "guarantee",
      "appointment",
      "complaint",
      "reservation"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The washing machine comes with a five-year _____. Any broken parts will be replaced free of charge.",
    "options": [
      "appointment",
      "feedback",
      "reservation",
      "warranty"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The restaurant will _____ lunch from eleven thirty until two. Dinner begins again at five thirty.",
    "options": [
      "repair",
      "serve",
      "respond",
      "assist"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Volunteers will _____ visitors with registration at the main entrance. Please look for people wearing yellow shirts.",
    "options": [
      "assist",
      "deliver",
      "repair",
      "improve"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The hotel will _____ free shuttle buses to the convention center. They leave every thirty minutes from the lobby.",
    "options": [
      "respond",
      "repair",
      "provide",
      "assist"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The courier promised to _____ the documents by noon. The contract must be signed before the afternoon meeting.",
    "options": [
      "respond",
      "deliver",
      "serve",
      "improve"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Please _____ to this invitation by Friday. We need to know the number of guests before ordering the food.",
    "options": [
      "deliver",
      "provide",
      "repair",
      "respond"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The new software should _____ the speed of our checkout process. Customers will spend less time waiting in line.",
    "options": [
      "respond",
      "assist",
      "improve",
      "serve"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The interior designer gave us very _____ advice about the new office layout. Her suggestions saved us both space and money.",
    "options": [
      "professional",
      "available",
      "public",
      "friendly"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The new sorting machine is far more _____ than the old one. It handles twice as many parcels per hour.",
    "options": [
      "friendly",
      "polite",
      "public",
      "efficient"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The receptionist greeted every visitor with a warm and _____ smile. Many guests praised her in their reviews.",
    "options": [
      "efficient",
      "friendly",
      "essential",
      "available"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The tour guide's tips about local restaurants were extremely _____. We found great food at very reasonable prices.",
    "options": [
      "helpful",
      "public",
      "available",
      "essential"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "We need a _____ supplier who always delivers on time. Late shipments have cost us several important orders.",
    "options": [
      "friendly",
      "public",
      "reliable",
      "available"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The new smartphone model will be _____ in stores from next Friday. Customers can also order it online.",
    "options": [
      "helpful",
      "available",
      "professional",
      "friendly"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The plumber arrived _____ at nine o'clock as promised. He fixed the leaking pipe in less than an hour.",
    "options": [
      "politely",
      "carefully",
      "publicly",
      "promptly"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The waiter _____ asked the guests to lower their voices. Other diners were trying to enjoy a quiet meal.",
    "options": [
      "promptly",
      "carefully",
      "politely",
      "efficiently"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "A valid passport is _____ for all international travelers. Without one, you cannot board the plane.",
    "options": [
      "essential",
      "friendly",
      "helpful",
      "polite"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "customer": {
    "pos": "n.",
    "en_def": "a person who buys goods or services from a shop or company",
    "cn_def": "顧客；客戶"
  },
  "client": {
    "pos": "n.",
    "en_def": "a person or company that pays for professional services",
    "cn_def": "客戶；委託人"
  },
  "staff": {
    "pos": "n.",
    "en_def": "all the people who work for an organization",
    "cn_def": "員工（總稱）；職員"
  },
  "employee": {
    "pos": "n.",
    "en_def": "a person who is paid to work for a company",
    "cn_def": "員工；受僱者"
  },
  "manager": {
    "pos": "n.",
    "en_def": "a person who is in charge of a team, store, or department",
    "cn_def": "經理；主管"
  },
  "assistant": {
    "pos": "n.",
    "en_def": "a person who helps someone else with their work",
    "cn_def": "助理；助手"
  },
  "support": {
    "pos": "n.",
    "en_def": "help or advice given to customers or users",
    "cn_def": "支援；協助"
  },
  "maintenance": {
    "pos": "n.",
    "en_def": "the work of keeping buildings or machines in good condition",
    "cn_def": "維修保養；維護"
  },
  "delivery": {
    "pos": "n.",
    "en_def": "the act of bringing goods or letters to a place",
    "cn_def": "送貨；遞送"
  },
  "repair": {
    "pos": "v.",
    "en_def": "to fix something that is broken or damaged",
    "cn_def": "修理；修復"
  },
  "appointment": {
    "pos": "n.",
    "en_def": "an arranged time to meet someone, often a professional",
    "cn_def": "預約；約會"
  },
  "reservation": {
    "pos": "n.",
    "en_def": "an arrangement to keep a table, room, or seat for someone",
    "cn_def": "預訂；訂位"
  },
  "feedback": {
    "pos": "n.",
    "en_def": "comments about how good or useful something is",
    "cn_def": "意見回饋"
  },
  "complaint": {
    "pos": "n.",
    "en_def": "a statement that you are unhappy about something",
    "cn_def": "投訴；抱怨"
  },
  "guarantee": {
    "pos": "n.",
    "en_def": "a firm promise that something will be done or will happen",
    "cn_def": "保證；擔保"
  },
  "warranty": {
    "pos": "n.",
    "en_def": "a written promise to repair or replace a product if it breaks",
    "cn_def": "保固；保修單"
  },
  "serve": {
    "pos": "v.",
    "en_def": "to give people food or drinks, or to help customers",
    "cn_def": "供應（餐點）；為…服務"
  },
  "assist": {
    "pos": "v.",
    "en_def": "to help someone do something",
    "cn_def": "協助；幫助"
  },
  "provide": {
    "pos": "v.",
    "en_def": "to give someone something they need",
    "cn_def": "提供"
  },
  "deliver": {
    "pos": "v.",
    "en_def": "to take goods or letters to a person or place",
    "cn_def": "遞送；運送"
  },
  "respond": {
    "pos": "v.",
    "en_def": "to answer or react to something",
    "cn_def": "回應；回覆"
  },
  "improve": {
    "pos": "v.",
    "en_def": "to make something better",
    "cn_def": "改善；改進"
  },
  "professional": {
    "pos": "adj.",
    "en_def": "showing the skill, training, and good behavior expected in a job",
    "cn_def": "專業的"
  },
  "efficient": {
    "pos": "adj.",
    "en_def": "working well without wasting time or money",
    "cn_def": "有效率的"
  },
  "friendly": {
    "pos": "adj.",
    "en_def": "kind and pleasant to other people",
    "cn_def": "友善的"
  },
  "helpful": {
    "pos": "adj.",
    "en_def": "useful, or willing to help",
    "cn_def": "有幫助的；樂於助人的"
  },
  "reliable": {
    "pos": "adj.",
    "en_def": "able to be trusted to work well or do what is expected",
    "cn_def": "可靠的"
  },
  "available": {
    "pos": "adj.",
    "en_def": "free to be used, bought, or to talk to",
    "cn_def": "有空的；可取得的"
  },
  "promptly": {
    "pos": "adv.",
    "en_def": "quickly and without delay",
    "cn_def": "迅速地；準時地"
  },
  "politely": {
    "pos": "adv.",
    "en_def": "in a way that shows good manners and respect",
    "cn_def": "有禮貌地"
  },
  "carefully": {
    "pos": "adv.",
    "en_def": "with a lot of attention so that you avoid mistakes or damage",
    "cn_def": "小心地；仔細地"
  },
  "public": {
    "pos": "adj.",
    "en_def": "for everyone in a community to use",
    "cn_def": "公共的；公眾的"
  },
  "essential": {
    "pos": "adj.",
    "en_def": "completely necessary; very important",
    "cn_def": "必要的；不可或缺的"
  }
};

const EXTRA_GLOSSES = {};
