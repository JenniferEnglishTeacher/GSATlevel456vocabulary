// Topic 366 Quiz Data: Speed 速度
// Source word list: https://www.examword.com/group-topic/speed — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T366 - Speed 速度",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "pace",
    "pos": "n.",
    "cn_def": "步調；速度",
    "en_def": "the speed at which someone walks, works or moves",
    "sentence": "A: Our new team members look tired after only two weeks, so do you think we are giving them too many tasks during their training period? B: Maybe we are, so let's allow them to learn at a slower {{BLANK}} for the next month and check how they feel before we add any new projects.",
    "cn": "A：新進團隊成員才兩週就看起來很累，你覺得我們在訓練期間給他們太多工作了嗎？ B：也許是，所以接下來一個月讓他們以較慢的【步調】學習，在增加新專案之前先了解他們的感受。"
  },
  {
    "word": "velocity",
    "pos": "n.",
    "cn_def": "速度；速率",
    "en_def": "the speed of something moving in one direction",
    "sentence": "A: Why did the engineers stop testing the new delivery drone this afternoon, when the weather looked so clear and calm? B: The sensors showed that the wind {{BLANK}} near the hills was much higher than expected, so they decided to wait until tomorrow morning to protect the expensive equipment.",
    "cn": "A：今天下午天氣看起來那麼晴朗平靜，為什麼工程師們停止測試新的送貨無人機？ B：感測器顯示山丘附近的風【速】比預期高很多，所以他們決定等到明天早上再測，以保護這些昂貴的設備。"
  },
  {
    "word": "rate",
    "pos": "n.",
    "cn_def": "速率；比率",
    "en_def": "how fast something happens or how many times it happens",
    "sentence": "A: Has the new packing machine in the warehouse made a real difference since we installed it at the beginning of last month? B: Yes, it has, because it now packs boxes at a {{BLANK}} of about three hundred per hour, which is almost twice what our workers could manage by hand.",
    "cn": "A：自從我們上個月初在倉庫安裝新的包裝機以來，它真的帶來改變了嗎？ B：有的，因為它現在以每小時大約三百箱的【速率】包裝，幾乎是我們員工手工包裝的兩倍。"
  },
  {
    "word": "acceleration",
    "pos": "n.",
    "cn_def": "加速；加速度",
    "en_def": "the act of getting faster",
    "sentence": "A: The customers who tested our new electric delivery van last weekend seemed very happy, but what did they like most about it? B: Most of them mentioned its smooth {{BLANK}} from a full stop, which makes it much easier to join busy traffic when drivers leave a loading area.",
    "cn": "A：上週末試駕我們新電動送貨車的顧客看起來很滿意，他們最喜歡它哪一點？ B：大多數人提到它從完全靜止起步時的平順【加速】，讓駕駛離開裝卸區時更容易匯入繁忙車流。"
  },
  {
    "word": "rapid",
    "pos": "adj.",
    "cn_def": "快速的；迅速的",
    "en_def": "happening very quickly or in a short time",
    "sentence": "A: Why is the company hiring so many new staff members for the customer service department this year, when it hired almost nobody last year? B: Because there has been {{BLANK}} growth in our online orders since the new website opened, and the current team simply cannot answer all the calls and emails.",
    "cn": "A：去年公司幾乎沒有雇人，為什麼今年要為客服部門招募這麼多新員工？ B：因為自從新網站上線後，我們的線上訂單【快速】成長，目前的團隊根本無法回覆所有的電話和電子郵件。"
  },
  {
    "word": "quick",
    "pos": "adj.",
    "cn_def": "快的；迅速的",
    "en_def": "done in a short time",
    "sentence": "A: Before the board meeting begins at ten, could you take a {{BLANK}} look at my sales report and tell me if any of the numbers seem wrong? B: Sure, I have about fifteen minutes free right now, so send it to me by email and I will check the charts and the totals.",
    "cn": "A：十點董事會開始之前，你可以【很快】看一下我的銷售報告，告訴我有沒有哪些數字看起來不對嗎？ B：當然，我現在大約有十五分鐘空檔，用電子郵件寄給我，我會檢查圖表和總數。"
  },
  {
    "word": "fast",
    "pos": "adj.",
    "cn_def": "快的；快速的",
    "en_def": "moving or happening at high speed",
    "sentence": "A: Which courier company should we use to send these important contracts to our partners in Singapore before the end of the week? B: I suggest the one on Main Street, because it offers a very {{BLANK}} delivery service, and our documents usually arrive within two days at a reasonable price.",
    "cn": "A：我們應該用哪家快遞公司，才能在週末前把這些重要合約寄給新加坡的合作夥伴？ B：我建議用大街上的那家，因為他們提供非常【快速】的配送服務，我們的文件通常兩天內就會送達，價格也合理。"
  },
  {
    "word": "swift",
    "pos": "adj.",
    "cn_def": "迅速的；立即的",
    "en_def": "happening quickly and without delay",
    "sentence": "A: What did the manager do after several customers complained online that the new coffee machines in our cafés were leaking water? B: She took {{BLANK}} action and asked the supplier to replace every machine within three days, so the problem was solved before it could hurt our reputation.",
    "cn": "A：好幾位顧客在網路上抱怨我們咖啡館的新咖啡機漏水之後，經理做了什麼？ B：她採取了【迅速的】行動，要求供應商在三天內更換每一台機器，所以問題在影響我們的聲譽之前就解決了。"
  },
  {
    "word": "speedy",
    "pos": "adj.",
    "cn_def": "快速的；迅速的",
    "en_def": "quick; happening without delay",
    "sentence": "A: I heard that Tom from the accounting department hurt his leg while playing basketball on Saturday, so should we send him something from the team? B: Yes, let's buy some fruit and a card that wishes him a {{BLANK}} recovery, and we can all sign it during the lunch break today.",
    "cn": "A：我聽說會計部的湯姆星期六打籃球時傷了腳，我們團隊要不要送他點東西？ B：好啊，我們買些水果和一張祝他【早日】康復的卡片，大家可以在今天午休時一起簽名。"
  },
  {
    "word": "brisk",
    "pos": "adj.",
    "cn_def": "輕快的；（生意）興隆的",
    "en_def": "quick and full of energy; (of business) busy",
    "sentence": "A: How were sales at the new umbrella stand near the train station during that week of heavy rain in early June? B: The stand did {{BLANK}} business every single morning, because commuters forgot their umbrellas at home and were happy to buy one on their way to the office.",
    "cn": "A：六月初那一週下大雨的時候，火車站附近新的雨傘攤銷售如何？ B：那個攤位每天早上生意都很【興隆】，因為通勤族把雨傘忘在家裡，很樂意在上班途中買一把。"
  },
  {
    "word": "hurried",
    "pos": "adj.",
    "cn_def": "匆忙的；倉促的",
    "en_def": "done quickly because there is not enough time",
    "sentence": "A: You look really tired this afternoon, so did you have time to eat properly before the meeting with the new clients? B: Not really, I only had a {{BLANK}} lunch at my desk while I was printing the handouts, so I'm going to get a snack from the café now.",
    "cn": "A：你今天下午看起來很累，在和新客戶開會前，你有時間好好吃飯嗎？ B：沒有，我一邊列印講義一邊在座位上【匆匆】吃了午餐，所以我現在要去咖啡館買點點心。"
  },
  {
    "word": "hasty",
    "pos": "adj.",
    "cn_def": "草率的；倉促的",
    "en_def": "done too quickly, without enough thought",
    "sentence": "A: The supplier has offered us a big discount if we sign the three-year contract today, so should I tell them we accept the offer right away? B: Please don't make a {{BLANK}} decision, because we still need to compare their prices with two other companies and ask our lawyer to read the terms first.",
    "cn": "A：供應商說如果我們今天簽三年合約就給大折扣，我應該馬上告訴他們我們接受嗎？ B：請不要做【草率的】決定，因為我們還需要把他們的價格和另外兩家公司比較，並先請律師看過條款。"
  },
  {
    "word": "instant",
    "pos": "adj.",
    "cn_def": "立即的；即溶的",
    "en_def": "happening at once; (of food or drinks) very quick to prepare",
    "sentence": "A: How did customers react to the new mobile app that our design team launched at the beginning of the holiday season? B: It was an {{BLANK}} success, because more than fifty thousand people downloaded it in the first week, and many of them used it to order gifts for their families.",
    "cn": "A：我們設計團隊在假期季節初推出的新手機應用程式，顧客反應如何？ B：它【一推出就】大獲成功，因為第一週就有超過五萬人下載，其中很多人用它為家人訂購禮物。"
  },
  {
    "word": "immediate",
    "pos": "adj.",
    "cn_def": "立即的；即刻的",
    "en_def": "happening now, without waiting",
    "sentence": "A: The air conditioner in the main server room stopped working an hour ago, so can we wait until Monday to call the repair company? B: No, this problem needs {{BLANK}} attention, because the computers will get too hot over the weekend, and we could lose important customer data if they shut down.",
    "cn": "A：主機房的冷氣一小時前壞了，我們可以等到星期一再打電話給維修公司嗎？ B：不行，這個問題需要【立即】處理，因為電腦週末會過熱，如果它們當機，我們可能會失去重要的客戶資料。"
  },
  {
    "word": "slow",
    "pos": "adj.",
    "cn_def": "慢的；緩慢的",
    "en_def": "not fast; taking a long time",
    "sentence": "A: Why did it take you almost two hours to send the presentation files to the clients in Tokyo yesterday evening? B: The hotel where I was staying had a very {{BLANK}} internet connection, so the large video files kept stopping halfway, and I had to upload them again and again.",
    "cn": "A：昨晚你為什麼花了將近兩小時才把簡報檔案寄給東京的客戶？ B：我住的飯店網路連線非常【慢】，所以大型影片檔一直傳到一半就停住，我只好一次又一次重新上傳。"
  },
  {
    "word": "sluggish",
    "pos": "adj.",
    "cn_def": "緩慢的；低迷的",
    "en_def": "moving or working more slowly than usual",
    "sentence": "A: Why does the sales director want to change our advertising plan for the second half of the year so suddenly? B: Because sales of our winter jackets have been {{BLANK}} since October, as the weather has stayed warm, so she wants to promote our light rain jackets and sports shoes instead.",
    "cn": "A：為什麼業務總監突然想改變我們下半年的廣告計畫？ B：因為從十月起我們冬季外套的銷售一直很【低迷】，天氣始終溫暖，所以她想改為推廣我們的輕便雨衣和運動鞋。"
  },
  {
    "word": "steady",
    "pos": "adj.",
    "cn_def": "穩定的；平穩的",
    "en_def": "developing at an even, regular rate",
    "sentence": "A: Are you worried about the company's future now that two of our biggest competitors have opened new stores in this area? B: Not really, because we have seen a {{BLANK}} increase in profits over the past five years, and our loyal customers keep coming back for our excellent service.",
    "cn": "A：既然我們兩個最大的競爭對手都在這一區開了新店，你擔心公司的未來嗎？ B：不太擔心，因為過去五年我們的利潤【穩定】增加，忠實顧客也因為我們優質的服務一再回來。"
  },
  {
    "word": "gradual",
    "pos": "adj.",
    "cn_def": "逐漸的；逐步的",
    "en_def": "happening slowly over a long time",
    "sentence": "A: Should we move all our staff to the new office building at once, or would it be better to do it in several smaller steps? B: I think a {{BLANK}} change is better, so let's move one department each week, which gives the IT team enough time to set up all the computers properly.",
    "cn": "A：我們應該讓全體員工一次搬進新辦公大樓，還是分成幾個小步驟比較好？ B：我認為【逐步的】改變比較好，所以我們每週搬一個部門，讓資訊團隊有足夠時間把所有電腦設定好。"
  },
  {
    "word": "prompt",
    "pos": "adj.",
    "cn_def": "迅速的；及時的",
    "en_def": "done quickly and without delay",
    "sentence": "A: What should I write at the end of my email to the hotel when I ask about booking rooms for our sales conference? B: You can thank them for their help and say that you would appreciate a {{BLANK}} reply, because we must confirm the meeting place with our managers by Friday.",
    "cn": "A：我寫信給飯店詢問為業務研討會訂房時，信的結尾應該寫什麼？ B：你可以感謝他們的協助，並說希望能得到【迅速的】回覆，因為我們必須在星期五前向經理們確認會議地點。"
  },
  {
    "word": "rush",
    "pos": "v.",
    "cn_def": "匆忙；趕緊；急送",
    "en_def": "to move or do something very quickly",
    "sentence": "A: Why did Mr. Chen leave the meeting so early this afternoon without saying goodbye to anyone in the room? B: He got a phone call saying that his flight to Hong Kong had been moved two hours earlier, so he had to {{BLANK}} to the airport in a taxi.",
    "cn": "A：陳先生今天下午為什麼那麼早離開會議，也沒跟會議室裡的任何人道別？ B：他接到電話說他飛往香港的班機提前了兩小時，所以他必須搭計程車【趕去】機場。"
  },
  {
    "word": "hurry",
    "pos": "v.",
    "cn_def": "趕快；匆忙",
    "en_def": "to move or act quickly",
    "sentence": "A: The last train back to the city leaves at nine thirty, but the dinner with our clients is still going on, so what should we do? B: We should thank them politely and {{BLANK}} to the station now, because the next train is not until tomorrow morning and the hotels here are full.",
    "cn": "A：回市區的末班火車九點半開，但和客戶的晚餐還在進行，我們該怎麼辦？ B：我們應該禮貌地向他們道謝，現在就【趕】去車站，因為下一班車要到明天早上，而這裡的飯店都客滿了。"
  },
  {
    "word": "dash",
    "pos": "v.",
    "cn_def": "猛衝；急奔",
    "en_def": "to go somewhere very quickly",
    "sentence": "A: Where did Lisa go just now, and why did she leave her coat and her laptop on the desk? B: She realized she had left her car lights on in the parking lot, so she had to {{BLANK}} outside before the battery died, but she said she would be back in five minutes.",
    "cn": "A：麗莎剛剛去哪裡了？她為什麼把外套和筆電留在桌上？ B：她發現自己把停車場裡的車燈開著沒關，所以必須在電池沒電前【衝】出去，不過她說五分鐘內就回來。"
  },
  {
    "word": "sprint",
    "pos": "v.",
    "cn_def": "衝刺；全速奔跑",
    "en_def": "to run very fast for a short distance",
    "sentence": "A: Did you manage to catch the airport bus this morning, or did you have to take a taxi to get to the meeting in time? B: I saw the bus at the corner just as it was leaving, so I had to {{BLANK}} the last hundred meters with my suitcase, and the driver kindly waited for me.",
    "cn": "A：你今天早上有趕上機場巴士嗎？還是必須搭計程車才能準時到達會議？ B：我看到巴士在轉角正要開走，所以只好拖著行李箱全速【衝刺】最後一百公尺，司機很好心地等了我。"
  },
  {
    "word": "race",
    "pos": "v.",
    "cn_def": "比賽；急忙做",
    "en_def": "to compete in speed; to do something very quickly",
    "sentence": "A: Why is the whole design team staying in the office so late every night this week, even though they usually leave at six? B: They are trying to {{BLANK}} against time to finish the new catalog, because the printing company needs the final files by Friday morning for the holiday sale.",
    "cn": "A：為什麼整個設計團隊這週每晚都留在辦公室那麼晚，他們平常六點就下班了？ B：他們正在和時間【賽跑】，要完成新的型錄，因為印刷公司星期五早上前就需要最終檔案，好趕上假期特賣。"
  },
  {
    "word": "accelerate",
    "pos": "v.",
    "cn_def": "加速；加快",
    "en_def": "to make something happen faster; to go faster",
    "sentence": "A: The new robots in our factory are very expensive, so why did the board decide to buy ten of them this year? B: They believe the robots will {{BLANK}} the production process, so we can fill large overseas orders sooner and reduce the number of late shipments that make customers unhappy.",
    "cn": "A：我們工廠的新機器人非常昂貴，董事會為什麼決定今年買十台？ B：他們相信這些機器人會【加快】生產流程，讓我們能更快完成大量海外訂單，減少讓顧客不滿的延遲出貨。"
  },
  {
    "word": "delay",
    "pos": "v.",
    "cn_def": "延誤；延後",
    "en_def": "to make something late; to put something off until later",
    "sentence": "A: The factory in Vietnam has told us that the new parts will arrive three weeks late because of a shortage of materials, so what should we do? B: We will probably have to {{BLANK}} the launch of the new model until March and send our customers an email explaining the reason.",
    "cn": "A：越南工廠通知我們，由於材料短缺，新零件會晚三週到，我們該怎麼辦？ B：我們可能必須把新車款的上市【延後】到三月，並寄電子郵件向顧客說明原因。"
  },
  {
    "word": "interval",
    "pos": "n.",
    "cn_def": "間隔；間歇",
    "en_def": "a period of time between two events",
    "sentence": "A: How often do the shuttle buses run between the hotel and the convention center during the three days of the trade show? B: There is an {{BLANK}} of only ten minutes between buses from seven in the morning until eight at night, so you will never have to wait long, even when the exhibition halls are very crowded.",
    "cn": "A：商展三天期間，飯店和會展中心之間的接駁車多久一班？ B：從早上七點到晚上八點，每班車之間只【間隔】十分鐘，所以即使展覽館非常擁擠，你也不必等很久。"
  },
  {
    "word": "tempo",
    "pos": "n.",
    "cn_def": "節奏；步調",
    "en_def": "the speed of music or of an activity",
    "sentence": "A: The music in our new television commercial sounds a little boring, so what changes would you like the studio to make before Friday? B: Please ask them to increase the {{BLANK}} of the song a little, because a livelier beat will match the exciting images of young people playing sports outdoors.",
    "cn": "A：我們新電視廣告裡的音樂聽起來有點無聊，你希望錄音室在星期五前做哪些修改？ B：請他們把歌曲的【節奏】稍微加快，因為更活潑的拍子才能搭配年輕人在戶外運動的精彩畫面。"
  },
  {
    "word": "momentary",
    "pos": "adj.",
    "cn_def": "短暫的；片刻的",
    "en_def": "lasting for a very short time",
    "sentence": "A: Was there a problem with the electricity in the building this morning, because my computer screen suddenly went black for a second? B: Yes, there was a {{BLANK}} power cut at about ten o'clock while the workers were repairing the elevator, but everything came back on almost at once.",
    "cn": "A：今天早上大樓的電力有問題嗎？我的電腦螢幕突然黑了一秒鐘。 B：對，大約十點工人在修電梯時發生了【短暫的】停電，不過所有東西幾乎馬上就恢復了。"
  },
  {
    "word": "overnight",
    "pos": "adv.",
    "cn_def": "一夜之間；整夜",
    "en_def": "during the night; very suddenly",
    "sentence": "A: How did that small bakery near our office become so popular that people now wait in line for an hour every morning? B: A famous food blogger posted a video about its pineapple cakes, and the shop became famous almost {{BLANK}}, so the owner had to hire five new workers last month.",
    "cn": "A：我們辦公室附近那家小麵包店怎麼會變得那麼受歡迎，現在每天早上大家都要排隊一小時？ B：一位知名美食部落客發布了介紹它鳳梨酥的影片，這家店幾乎【一夜之間】爆紅，所以老闆上個月必須多請五名員工。"
  },
  {
    "word": "instantly",
    "pos": "adv.",
    "cn_def": "立即地；馬上",
    "en_def": "immediately; at once",
    "sentence": "A: Is it difficult to use the new online payment system, or will our customers need special training before they can pay their bills? B: It is very simple, because the money is sent {{BLANK}} after customers scan the code with their phones, and they receive a receipt by text message right away.",
    "cn": "A：新的線上付款系統難用嗎？顧客需要特別訓練才能付帳單嗎？ B：非常簡單，顧客用手機掃描條碼後，款項就會【立即】送出，他們也會馬上收到簡訊收據。"
  },
  {
    "word": "rapidly",
    "pos": "adv.",
    "cn_def": "迅速地；快速地",
    "en_def": "very quickly",
    "sentence": "A: Why is the city building so many new apartment buildings and schools in the area around the new science park? B: The population there is growing {{BLANK}}, because several technology companies have moved in and thousands of young engineers and their families need homes nearby.",
    "cn": "A：為什麼市政府要在新科學園區周邊興建這麼多新公寓大樓和學校？ B：那裡的人口正在【迅速】成長，因為好幾家科技公司已經進駐，數千名年輕工程師和他們的家人需要住在附近。"
  },
  {
    "word": "quickly",
    "pos": "adv.",
    "cn_def": "快速地；迅速地",
    "en_def": "fast; in a short time",
    "sentence": "A: What is the most important thing our new customer service staff should remember when they start answering calls next Monday? B: They must respond {{BLANK}} to every complaint and stay polite, because unhappy customers often write bad online reviews if they have to wait too long for help.",
    "cn": "A：我們新的客服人員下星期一開始接電話時，最需要記住的是什麼？ B：他們必須【快速】回應每一則投訴並保持禮貌，因為不滿意的顧客如果等太久才得到協助，常常會在網路上寫負評。"
  },
  {
    "word": "swiftly",
    "pos": "adv.",
    "cn_def": "迅速地；敏捷地",
    "en_def": "quickly and smoothly",
    "sentence": "A: How did the hotel staff handle the situation when the fire alarm went off during the international conference last night? B: They moved {{BLANK}} and calmly, guiding more than three hundred guests out of the building in less than ten minutes, and luckily it turned out to be a false alarm.",
    "cn": "A：昨晚國際會議進行時火災警報響起，飯店員工是怎麼處理的？ B：他們【迅速】而冷靜地行動，在不到十分鐘內引導三百多位賓客離開大樓，幸好最後證實是誤報。"
  }
];

const MCQS = [
  {
    "q": "Our new trainees feel nervous about the software. The manager says they can learn it at their own _____ during the first month.",
    "options": [
      "pace",
      "interval",
      "velocity",
      "acceleration"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The weather station measures wind _____ every hour. Flights may be canceled if the readings become too high this afternoon.",
    "options": [
      "pace",
      "tempo",
      "velocity",
      "interval"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The new printer produces pages at a _____ of forty per minute. It will save our office a lot of waiting time.",
    "options": [
      "interval",
      "rate",
      "acceleration",
      "delay"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Test drivers praised the new electric van for its smooth _____. It reaches highway speed in only a few seconds.",
    "options": [
      "interval",
      "tempo",
      "rate",
      "acceleration"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The company has enjoyed _____ growth since it opened its online store. It now plans to hire twenty more workers.",
    "options": [
      "momentary",
      "hasty",
      "rapid",
      "hurried"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Could you take a _____ look at this contract before lunch? I need to send it to the client by two o'clock.",
    "options": [
      "quick",
      "gradual",
      "steady",
      "sluggish"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Customers choose our courier company because of its _____ delivery service. Most packages arrive within twenty-four hours.",
    "options": [
      "slow",
      "sluggish",
      "gradual",
      "fast"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "After the product recall was announced, the manager took _____ action. She contacted every store within one hour.",
    "options": [
      "gradual",
      "swift",
      "sluggish",
      "momentary"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The ice cream shop did _____ business during the summer festival. It sold out of most flavors by noon each day.",
    "options": [
      "brisk",
      "gradual",
      "momentary",
      "hasty"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Please don't make a _____ decision about the job offer. Take the weekend to think carefully about the salary and benefits.",
    "options": [
      "steady",
      "gradual",
      "hasty",
      "brisk"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The hotel offers free _____ coffee and tea in every room. Guests can also order fresh drinks from room service.",
    "options": [
      "gradual",
      "instant",
      "steady",
      "brisk"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The broken water pipe on the third floor requires _____ attention. Please call the repair company before it damages the ceiling.",
    "options": [
      "gradual",
      "sluggish",
      "steady",
      "immediate"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Many guests complained about the _____ internet connection in the hotel. Management promised to install a better system next month.",
    "options": [
      "brisk",
      "swift",
      "slow",
      "prompt"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Sales of winter coats have been _____ this year because of the warm weather. The store will offer discounts to attract buyers.",
    "options": [
      "sluggish",
      "brisk",
      "prompt",
      "swift"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The company has seen a _____ increase in profits over the last five years. Investors are pleased with its stable performance.",
    "options": [
      "hasty",
      "hurried",
      "momentary",
      "steady"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The office will make a _____ change to the new computer system. One department will switch over each month until June.",
    "options": [
      "hasty",
      "gradual",
      "brisk",
      "momentary"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Thank you for your _____ reply to our inquiry. We are happy to confirm the hotel booking for next Tuesday.",
    "options": [
      "prompt",
      "sluggish",
      "gradual",
      "momentary"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "A patient suddenly fell ill in the waiting room. The nurse had to _____ him to the hospital in an ambulance.",
    "options": [
      "delay",
      "accelerate",
      "rush",
      "sprint"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "We need to _____ up, or we will miss the start of the presentation. The doors will close at nine o'clock sharp.",
    "options": [
      "delay",
      "hurry",
      "accelerate",
      "sprint"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Lisa forgot her umbrella at the café across the street. She had to _____ back to get it before the heavy rain started.",
    "options": [
      "delay",
      "accelerate",
      "attend",
      "dash"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The runner had to _____ the last hundred meters to win. The crowd cheered loudly as she crossed the finish line.",
    "options": [
      "delay",
      "accelerate",
      "sprint",
      "hurry"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The engineers are trying to _____ against time to fix the system. The online store must reopen before the holiday sale begins.",
    "options": [
      "race",
      "delay",
      "accelerate",
      "dash"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The new software will help us _____ the hiring process. We hope to fill all open positions within two weeks.",
    "options": [
      "delay",
      "sprint",
      "dash",
      "accelerate"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Bad weather forced the airline to _____ the flight by three hours. Passengers received free meal coupons while they waited.",
    "options": [
      "accelerate",
      "delay",
      "sprint",
      "dash"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "There is a short _____ of fifteen minutes between the two parts of the concert. Drinks will be sold in the lobby.",
    "options": [
      "interval",
      "velocity",
      "acceleration",
      "rate"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The conductor asked the orchestra to play the piece at a faster _____. The audience clapped along with the lively music.",
    "options": [
      "interval",
      "acceleration",
      "tempo",
      "ticket"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The small bakery became famous almost _____ after a food blogger shared its cakes online. Now people wait in line every morning.",
    "options": [
      "rapidly",
      "overnight",
      "swiftly",
      "recently"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The new payment app is easy to use. Money is transferred _____ when customers scan the code, so they never wait.",
    "options": [
      "overnight",
      "gradually",
      "rarely",
      "instantly"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The population of the city is growing _____ because of the new science park. More schools and hospitals will be built soon.",
    "options": [
      "instantly",
      "overnight",
      "rapidly",
      "rarely"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "Our staff must respond _____ to customer complaints. Unhappy customers often write bad reviews if they wait too long.",
    "options": [
      "quickly",
      "overnight",
      "rarely",
      "gradually"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "pace": {
    "pos": "n.",
    "en_def": "the speed at which someone walks, works or moves",
    "cn_def": "步調；速度"
  },
  "velocity": {
    "pos": "n.",
    "en_def": "the speed of something moving in one direction",
    "cn_def": "速度；速率"
  },
  "rate": {
    "pos": "n.",
    "en_def": "how fast something happens or how many times it happens",
    "cn_def": "速率；比率"
  },
  "acceleration": {
    "pos": "n.",
    "en_def": "the act of getting faster",
    "cn_def": "加速；加速度"
  },
  "rapid": {
    "pos": "adj.",
    "en_def": "happening very quickly or in a short time",
    "cn_def": "快速的；迅速的"
  },
  "quick": {
    "pos": "adj.",
    "en_def": "done in a short time",
    "cn_def": "快的；迅速的"
  },
  "fast": {
    "pos": "adj.",
    "en_def": "moving or happening at high speed",
    "cn_def": "快的；快速的"
  },
  "swift": {
    "pos": "adj.",
    "en_def": "happening quickly and without delay",
    "cn_def": "迅速的；立即的"
  },
  "speedy": {
    "pos": "adj.",
    "en_def": "quick; happening without delay",
    "cn_def": "快速的；迅速的"
  },
  "brisk": {
    "pos": "adj.",
    "en_def": "quick and full of energy; (of business) busy",
    "cn_def": "輕快的；（生意）興隆的"
  },
  "hurried": {
    "pos": "adj.",
    "en_def": "done quickly because there is not enough time",
    "cn_def": "匆忙的；倉促的"
  },
  "hasty": {
    "pos": "adj.",
    "en_def": "done too quickly, without enough thought",
    "cn_def": "草率的；倉促的"
  },
  "instant": {
    "pos": "adj.",
    "en_def": "happening at once; (of food or drinks) very quick to prepare",
    "cn_def": "立即的；即溶的"
  },
  "immediate": {
    "pos": "adj.",
    "en_def": "happening now, without waiting",
    "cn_def": "立即的；即刻的"
  },
  "slow": {
    "pos": "adj.",
    "en_def": "not fast; taking a long time",
    "cn_def": "慢的；緩慢的"
  },
  "sluggish": {
    "pos": "adj.",
    "en_def": "moving or working more slowly than usual",
    "cn_def": "緩慢的；低迷的"
  },
  "steady": {
    "pos": "adj.",
    "en_def": "developing at an even, regular rate",
    "cn_def": "穩定的；平穩的"
  },
  "gradual": {
    "pos": "adj.",
    "en_def": "happening slowly over a long time",
    "cn_def": "逐漸的；逐步的"
  },
  "prompt": {
    "pos": "adj.",
    "en_def": "done quickly and without delay",
    "cn_def": "迅速的；及時的"
  },
  "rush": {
    "pos": "v.",
    "en_def": "to move or do something very quickly",
    "cn_def": "匆忙；趕緊；急送"
  },
  "hurry": {
    "pos": "v.",
    "en_def": "to move or act quickly",
    "cn_def": "趕快；匆忙"
  },
  "dash": {
    "pos": "v.",
    "en_def": "to go somewhere very quickly",
    "cn_def": "猛衝；急奔"
  },
  "sprint": {
    "pos": "v.",
    "en_def": "to run very fast for a short distance",
    "cn_def": "衝刺；全速奔跑"
  },
  "race": {
    "pos": "v.",
    "en_def": "to compete in speed; to do something very quickly",
    "cn_def": "比賽；急忙做"
  },
  "accelerate": {
    "pos": "v.",
    "en_def": "to make something happen faster; to go faster",
    "cn_def": "加速；加快"
  },
  "delay": {
    "pos": "v.",
    "en_def": "to make something late; to put something off until later",
    "cn_def": "延誤；延後"
  },
  "interval": {
    "pos": "n.",
    "en_def": "a period of time between two events",
    "cn_def": "間隔；間歇"
  },
  "tempo": {
    "pos": "n.",
    "en_def": "the speed of music or of an activity",
    "cn_def": "節奏；步調"
  },
  "momentary": {
    "pos": "adj.",
    "en_def": "lasting for a very short time",
    "cn_def": "短暫的；片刻的"
  },
  "overnight": {
    "pos": "adv.",
    "en_def": "during the night; very suddenly",
    "cn_def": "一夜之間；整夜"
  },
  "instantly": {
    "pos": "adv.",
    "en_def": "immediately; at once",
    "cn_def": "立即地；馬上"
  },
  "rapidly": {
    "pos": "adv.",
    "en_def": "very quickly",
    "cn_def": "迅速地；快速地"
  },
  "quickly": {
    "pos": "adv.",
    "en_def": "fast; in a short time",
    "cn_def": "快速地；迅速地"
  },
  "swiftly": {
    "pos": "adv.",
    "en_def": "quickly and smoothly",
    "cn_def": "迅速地；敏捷地"
  }
};

const EXTRA_GLOSSES = {};
