// Topic 211 Quiz Data: Late 遲到；延遲
// Source word list: https://www.examword.com/group-topic/late — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T211 - Late 遲到；延遲",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "tardy",
    "pos": "adj.",
    "cn_def": "遲到的；遲緩的",
    "en_def": "late; not arriving on time",
    "sentence": "A: Why did the manager send an email to all the warehouse staff this morning about arriving at work on time? B: Several workers have been {{BLANK}} three times this month, so she reminded everyone that the morning shift starts at seven and that repeated lateness may affect their reviews.",
    "cn": "A：經理今天早上為什麼寄電子郵件給所有倉庫員工，提醒大家準時上班？ B：這個月有幾位員工已經【遲到】三次了，所以她提醒大家早班七點開始，而且一再遲到可能會影響他們的考核。"
  },
  {
    "word": "overdue",
    "pos": "adj.",
    "cn_def": "逾期的；過期未付的",
    "en_def": "not paid, returned or done by the expected time",
    "sentence": "A: Is there a reason the accounting department keeps calling our office about the payment for the new printers we ordered in March? B: Yes, the invoice is now two weeks {{BLANK}}, so they want us to pay it before Friday or they will add a late fee to our account.",
    "cn": "A：會計部一直打電話到我們辦公室，詢問三月訂購的新印表機的付款，有什麼原因嗎？ B：有，那張發票現在已經【逾期】兩週了，所以他們希望我們在星期五前付款，否則會在我們的帳戶加收滯納金。"
  },
  {
    "word": "delayed",
    "pos": "adj.",
    "cn_def": "延誤的；延遲的",
    "en_def": "happening later than planned",
    "sentence": "A: Should I still go to the airport at noon to pick up the sales director who is flying in from Tokyo today? B: No, her flight has been {{BLANK}} by about three hours because of a storm, so you can leave the office after lunch and still arrive in plenty of time.",
    "cn": "A：今天業務總監從東京飛過來，我還要中午去機場接她嗎？ B：不用，她的班機因為暴風雨【延誤】了大約三個小時，所以你可以吃完午餐再離開辦公室，時間還是很充裕。"
  },
  {
    "word": "postpone",
    "pos": "v.",
    "cn_def": "延後；延期",
    "en_def": "to move an event to a later time",
    "sentence": "A: Are we still holding the quarterly sales meeting in the main conference room tomorrow afternoon as planned? B: Unfortunately, we have to {{BLANK}} it until next Tuesday, because the regional manager is sick and several team members are still visiting clients in the south.",
    "cn": "A：我們明天下午還是照原定計畫在大會議室開季度業務會議嗎？ B：很遺憾，我們必須把它【延後】到下週二，因為區域經理生病了，而且有幾位組員還在南部拜訪客戶。"
  },
  {
    "word": "procrastinate",
    "pos": "v.",
    "cn_def": "拖延；耽擱",
    "en_def": "to keep delaying something you should do",
    "sentence": "A: How did you manage to finish the annual budget report two days early when everyone else was still working on theirs? B: I made a simple schedule at the start of the month, and I tried not to {{BLANK}}, so I completed a small part of the report every single morning.",
    "cn": "A：其他人都還在趕報告，你是怎麼提早兩天完成年度預算報告的？ B：我在月初就訂了一個簡單的時間表，並且盡量不【拖延】，所以每天早上都完成報告的一小部分。"
  },
  {
    "word": "belated",
    "pos": "adj.",
    "cn_def": "遲來的；誤期的",
    "en_def": "coming or happening later than it should",
    "sentence": "A: Did anyone remember that it was Linda's birthday last Friday while she was away at the trade show in Singapore? B: We all forgot, so this morning the team bought her a cake and a card and held a small {{BLANK}} celebration in the staff lounge before work.",
    "cn": "A：上週五琳達去新加坡參加商展時，有人記得那天是她的生日嗎？ B：我們都忘了，所以今天早上團隊買了蛋糕和卡片，在上班前於員工休息室為她辦了一個小小的【遲來的】慶祝會。"
  },
  {
    "word": "delay",
    "pos": "n.",
    "cn_def": "延誤；耽擱",
    "en_def": "a time when something happens later than planned",
    "sentence": "A: Why are the passengers in the waiting area so upset, and why are they all looking at the departure board? B: There is a long {{BLANK}} on the morning train to the city because of a signal problem, and many of them will be late for important meetings at work.",
    "cn": "A：候車區的乘客為什麼這麼不高興，而且大家都盯著發車看板？ B：因為號誌故障，早上開往市區的列車大幅【延誤】，很多人上班重要的會議都會遲到。"
  },
  {
    "word": "lateness",
    "pos": "n.",
    "cn_def": "遲到；延遲",
    "en_def": "the fact of arriving or happening late",
    "sentence": "A: Why does the new hotel receptionist look so worried after his meeting with the human resources manager this afternoon? B: He has arrived after eight o'clock several times this week, and she warned him that his {{BLANK}} is causing problems for the night staff, who cannot go home until he comes.",
    "cn": "A：新來的飯店櫃檯人員今天下午和人資經理開完會後，為什麼看起來這麼擔心？ B：他這週好幾次八點以後才到，經理警告他，他的【遲到】給夜班員工造成困擾，因為他們要等他來才能下班。"
  },
  {
    "word": "behind",
    "pos": "prep.",
    "cn_def": "落後於；晚於",
    "en_def": "later than planned or slower than others",
    "sentence": "A: Will the construction company be able to open the new shopping center in December as they promised the city? B: I doubt it, because heavy rain stopped the work for almost a month, and now the whole project is about six weeks {{BLANK}} schedule.",
    "cn": "A：建設公司能如他們向市府承諾的那樣在十二月開放新購物中心嗎？ B：我很懷疑，因為大雨讓工程停了將近一個月，現在整個計畫大約【落後】進度六週。"
  },
  {
    "word": "last-minute",
    "pos": "adj.",
    "cn_def": "最後一刻的；臨時的",
    "en_def": "done or happening just before it is too late",
    "sentence": "A: Why is the conference room full of boxes, and why is everyone still working so hard at seven in the evening? B: The client made some {{BLANK}} changes to the product samples before tomorrow's presentation, so the whole design team has to stay late and prepare new displays.",
    "cn": "A：會議室為什麼堆滿了箱子，而且大家晚上七點還在拚命工作？ B：客戶在明天簡報前對產品樣品做了一些【最後一刻的】修改，所以整個設計團隊必須留下來準備新的展示品。"
  },
  {
    "word": "deadline",
    "pos": "n.",
    "cn_def": "截止期限",
    "en_def": "the latest time by which something must be done",
    "sentence": "A: Do you think we can take a few extra days to check the numbers in the proposal before sending it to the bank? B: I'm afraid not, because the {{BLANK}} for loan applications is this Friday at noon, and the bank will not accept any forms that arrive after that.",
    "cn": "A：你覺得我們可以多花幾天檢查提案裡的數字，再寄給銀行嗎？ B：恐怕不行，因為貸款申請的【截止期限】是這週五中午，之後送到的表格銀行一概不收。"
  },
  {
    "word": "urgency",
    "pos": "n.",
    "cn_def": "緊迫；急迫",
    "en_def": "the need to act quickly",
    "sentence": "A: Why did the factory manager call an emergency meeting with all the supervisors right after lunch today? B: A large order from our biggest customer must be shipped by Monday, and she wanted everyone to understand the {{BLANK}} of the situation and work extra hours this weekend.",
    "cn": "A：工廠經理今天午餐後為什麼立刻召集所有主管開緊急會議？ B：我們最大客戶的一筆大訂單必須在星期一前出貨，她希望大家了解情況的【緊迫性】，並在這個週末加班。"
  },
  {
    "word": "rush",
    "pos": "n.",
    "cn_def": "匆忙；尖峰（時段）",
    "en_def": "a time when many people hurry or travel at once",
    "sentence": "A: Should we leave the office now if we want to get to the airport in time for the six o'clock flight to Hong Kong? B: Yes, let's go right away, because the evening {{BLANK}} hour starts soon, and the highway is usually full of cars from five until seven.",
    "cn": "A：如果想趕上六點飛香港的班機，我們現在該離開辦公室嗎？ B：對，馬上走吧，因為傍晚的【尖峰】時段快開始了，五點到七點高速公路通常塞滿了車。"
  },
  {
    "word": "linger",
    "pos": "v.",
    "cn_def": "逗留；徘徊",
    "en_def": "to stay somewhere longer than usual",
    "sentence": "A: Why are the cleaning staff unable to start their work in the restaurant even though it closed thirty minutes ago? B: A large group of customers still wants to {{BLANK}} over coffee and dessert, and the manager does not want to ask them to leave because they are regular guests.",
    "cn": "A：餐廳三十分鐘前就打烊了，清潔人員為什麼還不能開始工作？ B：一大群客人還想喝咖啡吃甜點【逗留】一會兒，經理不想請他們離開，因為他們是常客。"
  },
  {
    "word": "drag",
    "pos": "v.",
    "cn_def": "拖延；拖得很長",
    "en_def": "to go on for too long in a boring way",
    "sentence": "A: How was the training session for the new accounting software that you attended yesterday afternoon? B: It started well, but the trainer answered too many questions about small details, so the last two hours seemed to {{BLANK}} on and many people were checking their phones.",
    "cn": "A：你昨天下午參加的新會計軟體訓練課程怎麼樣？ B：一開始還不錯，可是講師回答太多細節問題，所以最後兩個小時似乎【拖得很長】，很多人都在看手機。"
  },
  {
    "word": "lag",
    "pos": "n.",
    "cn_def": "時間差；延遲",
    "en_def": "a period of time between two connected events",
    "sentence": "A: Why can't customers receive their furniture on the same day they buy it at our main store downtown? B: There is usually a {{BLANK}} of about two weeks between the time an order is placed and the time the factory finishes making the sofas and tables.",
    "cn": "A：顧客在市中心總店買家具，為什麼不能當天就拿到？ B：從下訂單到工廠做好沙發和桌子，通常會有大約兩週的【時間差】。"
  },
  {
    "word": "tardiness",
    "pos": "n.",
    "cn_def": "遲到；拖拉",
    "en_def": "the habit or fact of being late",
    "sentence": "A: Is it true that the school sent a letter to parents about students arriving after the first bell this semester? B: Yes, {{BLANK}} has become a serious problem, so the principal asked families to make sure their children leave home earlier and reach class before eight.",
    "cn": "A：學校這學期真的寄信給家長，談學生在第一次鐘響後才到校的事嗎？ B：是的，【遲到】已經變成嚴重的問題，所以校長請家長確保孩子早點出門，八點前進教室。"
  },
  {
    "word": "defer",
    "pos": "v.",
    "cn_def": "延期；推遲",
    "en_def": "to delay something until a later time",
    "sentence": "A: Can I really wait until next year to pay the fee for the online marketing course that starts this month? B: Yes, the school allows new students to {{BLANK}} payment for six months if they fill out a simple form and show a letter from their employer.",
    "cn": "A：本月開課的網路行銷課程，我真的可以等到明年再付學費嗎？ B：可以，只要新生填一份簡單的表格並出示雇主的信函，學校允許【延後】付款六個月。"
  },
  {
    "word": "adjourn",
    "pos": "v.",
    "cn_def": "休會；延期",
    "en_def": "to stop a meeting and continue it later",
    "sentence": "A: Is the board meeting going to continue after lunch, or can I go back to my office and answer my emails? B: The chairman decided to {{BLANK}} the meeting until tomorrow morning because the lawyers still need more time to review the details of the new contract.",
    "cn": "A：董事會午餐後還要繼續開嗎？還是我可以回辦公室回覆電子郵件？ B：董事長決定把會議【休會】到明天早上，因為律師還需要更多時間審閱新合約的細節。"
  },
  {
    "word": "slow",
    "pos": "adj.",
    "cn_def": "慢的；緩慢的",
    "en_def": "not fast; taking a long time",
    "sentence": "A: Why is it taking so long to download the files from the client's website this afternoon? B: The internet connection in our building has been very {{BLANK}} since the storm last night, so the IT department is checking the cables and asked us to be patient for a few hours.",
    "cn": "A：今天下午從客戶網站下載檔案為什麼要這麼久？ B：自從昨晚暴風雨後，我們大樓的網路連線就非常【慢】，資訊部正在檢查線路，請大家耐心等候幾個小時。"
  },
  {
    "word": "sluggish",
    "pos": "adj.",
    "cn_def": "低迷的；遲緩的",
    "en_def": "moving or working more slowly than normal",
    "sentence": "A: Are sales at the new shoe store in the shopping mall improving now that the holiday season has started? B: Not really, business has been {{BLANK}} for three months because fewer people are shopping in person, so the owner is planning a big discount event next weekend.",
    "cn": "A：假期購物季開始了，購物中心新鞋店的業績有改善嗎？ B：沒有，生意已經【低迷】三個月了，因為親自逛街購物的人變少，所以老闆計畫下週末辦大型折扣活動。"
  },
  {
    "word": "behindhand",
    "pos": "adj.",
    "cn_def": "拖欠的；落後的",
    "en_def": "late in paying or doing something",
    "sentence": "A: Why does the landlord keep sending messages to the small café on the first floor of our office building? B: The owners have been {{BLANK}} with their rent for two months because business was poor during the summer, and the landlord wants the money by the end of the week.",
    "cn": "A：房東為什麼一直傳訊息給我們辦公大樓一樓的小咖啡廳？ B：因為夏天生意不好，老闆已經【拖欠】兩個月的房租了，房東希望週末前拿到錢。"
  },
  {
    "word": "expired",
    "pos": "adj.",
    "cn_def": "過期的；失效的",
    "en_def": "no longer valid because the time limit has passed",
    "sentence": "A: Why couldn't the new sales assistant travel with us to the trade fair in Seoul last week? B: When she checked her documents the night before the trip, she found that her passport was {{BLANK}}, and there was not enough time to get a new one.",
    "cn": "A：新來的業務助理上週為什麼不能和我們一起去首爾參加商展？ B：她在出發前一晚檢查證件時，發現她的護照已經【過期】了，來不及辦新的。"
  },
  {
    "word": "midnight",
    "pos": "n.",
    "cn_def": "午夜；半夜十二點",
    "en_def": "twelve o'clock at night",
    "sentence": "A: How late did the marketing team have to work yesterday to finish the slides for this morning's presentation to the investors? B: They stayed at the office until {{BLANK}}, and then the manager paid for taxis so everyone could get home safely because the trains had already stopped running.",
    "cn": "A：行銷團隊昨天為了完成今天早上給投資人的簡報投影片，工作到多晚？ B：他們在辦公室待到【午夜】，之後經理出錢讓大家搭計程車安全回家，因為火車已經停駛了。"
  },
  {
    "word": "nightfall",
    "pos": "n.",
    "cn_def": "黃昏；天黑",
    "en_def": "the time in the evening when it becomes dark",
    "sentence": "A: Should the delivery drivers still go to the farms in the mountains this afternoon, even though it is already three o'clock? B: Yes, but tell them to come back before {{BLANK}}, because the roads up there are narrow and dark, and there are no street lights along the way.",
    "cn": "A：已經三點了，送貨司機今天下午還要去山上的農場嗎？ B：要，但告訴他們【天黑】前要回來，因為山上的路又窄又暗，沿途也沒有路燈。"
  },
  {
    "word": "twilight",
    "pos": "n.",
    "cn_def": "黃昏；暮色",
    "en_def": "the soft light just after the sun goes down",
    "sentence": "A: What time would be best for the photographer to take pictures of the new hotel for our travel brochure? B: He suggested shooting at {{BLANK}}, when the sky is turning purple and the lights in the rooms and garden are on, because the building will look warm and inviting.",
    "cn": "A：攝影師幫我們的旅遊手冊拍新飯店的照片，什麼時間最好？ B：他建議在【黃昏】時拍，那時天空轉成紫色，客房和花園的燈都亮了，建築物看起來會溫暖又吸引人。"
  },
  {
    "word": "latecomer",
    "pos": "n.",
    "cn_def": "遲到者；後來者",
    "en_def": "a person who arrives after something has started",
    "sentence": "A: The seminar on online advertising is about to begin, but what should we do about people who arrive after it starts? B: Please ask any {{BLANK}} to wait quietly at the back door until the first video ends, and then guide them to the empty seats near the exit.",
    "cn": "A：網路廣告研討會快開始了，開始後才到的人我們該怎麼處理？ B：請任何【遲到者】在後門安靜等候，等第一段影片結束後，再帶他們到出口附近的空位。"
  },
  {
    "word": "final",
    "pos": "adj.",
    "cn_def": "最後的；最終的",
    "en_def": "last; coming at the end",
    "sentence": "A: Are you sure the hotel will still give us the group discount if we change the number of guests next week? B: Yes, but the sales manager said Friday is the {{BLANK}} day to make changes, so we must send her the complete list of names before the weekend.",
    "cn": "A：如果下週更改住客人數，你確定飯店還會給我們團體折扣嗎？ B：會，但業務經理說星期五是可以修改的【最後】一天，所以我們必須在週末前把完整名單寄給她。"
  },
  {
    "word": "eventual",
    "pos": "adj.",
    "cn_def": "最終的；後來的",
    "en_def": "happening at the end of a long process",
    "sentence": "A: Why is the company spending so much money on training the junior staff in the overseas branch this year? B: The managers believe that the {{BLANK}} result will be better customer service and higher sales, even though it may take two or three years to see clear improvements.",
    "cn": "A：公司今年為什麼花那麼多錢培訓海外分公司的初階員工？ B：經理們相信【最終的】結果會是更好的客戶服務和更高的業績，即使可能要兩三年才看得到明顯進步。"
  },
  {
    "word": "recently",
    "pos": "adv.",
    "cn_def": "最近；近來",
    "en_def": "not long ago",
    "sentence": "A: Have you noticed that the coffee machine in the staff kitchen is making much better coffee these days? B: Yes, the office manager {{BLANK}} replaced the old machine with a new one from Italy, and she also started buying fresh beans from a local café near the station.",
    "cn": "A：你有沒有注意到員工茶水間的咖啡機最近煮的咖啡好喝多了？ B：有，辦公室經理【最近】把舊機器換成義大利的新機器，她還開始向車站附近的咖啡館買新鮮咖啡豆。"
  },
  {
    "word": "belatedly",
    "pos": "adv.",
    "cn_def": "遲遲地；事後才",
    "en_def": "later than should have happened",
    "sentence": "A: Did the airline ever explain why our luggage did not arrive with us when we landed in Bangkok for the conference? B: They {{BLANK}} admitted that the bags had been put on the wrong plane, but the apology came three days later, after we had already bought new clothes.",
    "cn": "A：我們飛到曼谷開會時行李沒一起到，航空公司後來有解釋原因嗎？ B：他們【事後才】承認行李被放上錯的飛機，但道歉是三天後才來的，那時我們已經買了新衣服。"
  },
  {
    "word": "stall",
    "pos": "v.",
    "cn_def": "停滯；拖延",
    "en_def": "to stop making progress",
    "sentence": "A: Why did the bank decide not to sign the agreement with the software company yesterday as everyone expected? B: The talks began to {{BLANK}} when the two sides could not agree on the price, so the lawyers will meet again next month to look for a solution.",
    "cn": "A：銀行昨天為什麼沒有像大家預期的那樣和軟體公司簽約？ B：雙方無法就價格達成共識，談判開始【停滯】，所以律師們下個月會再碰面尋找解決方法。"
  },
  {
    "word": "hold-up",
    "pos": "n.",
    "cn_def": "耽擱；阻礙",
    "en_def": "a delay that stops something from moving on",
    "sentence": "A: Why is the line at the customs office moving so slowly this morning when there are only a few trucks waiting? B: There is a {{BLANK}} because the computer system stopped working at nine, and the officers must check every shipping document by hand until it is fixed.",
    "cn": "A：今天早上海關只有幾輛卡車在等，隊伍為什麼移動得這麼慢？ B：因為電腦系統九點當機，造成【耽擱】，修好之前海關人員必須用人工檢查每份貨運文件。"
  },
  {
    "word": "setback",
    "pos": "n.",
    "cn_def": "挫折；阻礙",
    "en_def": "a problem that stops progress or makes things worse",
    "sentence": "A: How is the plan to open a second restaurant downtown going, since you found a good location last month? B: We had a small {{BLANK}} when the city refused our building permit, but our architect is changing the design, and we hope to get approval by spring.",
    "cn": "A：你們上個月找到好地點後，在市中心開第二家餐廳的計畫進行得如何？ B：市府駁回我們的建築許可時，我們遇到了一個小小的【挫折】，不過建築師正在修改設計，希望春天前能獲得核准。"
  }
];

const MCQS = [
  {
    "q": "Employees who are _____ more than three times a month will receive a written warning. Please plan your morning commute carefully.",
    "options": [
      "tardy",
      "sluggish",
      "eventual",
      "final"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The library sends an email reminder when a book is _____. Members must pay a small fee for each extra day.",
    "options": [
      "belated",
      "eventual",
      "overdue",
      "sluggish"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Because of the typhoon warning, the organizers decided to _____ the outdoor concert until next Saturday. Tickets will still be valid.",
    "options": [
      "linger",
      "postpone",
      "procrastinate",
      "drag"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Students who _____ often end up writing their reports the night before they are due. Starting early reduces stress.",
    "options": [
      "adjourn",
      "stall",
      "defer",
      "procrastinate"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Please accept my _____ congratulations on your promotion. I was traveling overseas when the announcement was made last month.",
    "options": [
      "sluggish",
      "tardy",
      "belated",
      "expired"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "We apologize for the _____ in shipping your order. A problem at the factory has slowed down production this week.",
    "options": [
      "delay",
      "deadline",
      "nightfall",
      "midnight"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Heavy rain stopped work on the bridge for two weeks. The project is now a month _____ schedule.",
    "options": [
      "beyond",
      "beneath",
      "toward",
      "behind"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The airline offers cheap _____ deals on seats that have not been sold. Travelers with flexible plans can save a lot.",
    "options": [
      "behindhand",
      "last-minute",
      "belated",
      "tardy"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "All applications must be received by the _____ of March 31. Late forms will not be considered by the hiring committee.",
    "options": [
      "deadline",
      "setback",
      "twilight",
      "lateness"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The manager spoke with a sense of _____ about the falling sales. She asked every team to submit new ideas by Friday.",
    "options": [
      "tardiness",
      "lateness",
      "urgency",
      "twilight"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Taxis are hard to find during the evening _____ hour. Many office workers take the subway home instead.",
    "options": [
      "lag",
      "rush",
      "drag",
      "stall"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Visitors often _____ in the museum's garden café after their tour. The quiet view of the lake makes them stay longer.",
    "options": [
      "adjourn",
      "postpone",
      "defer",
      "linger"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Without a clear agenda, meetings can _____ on for hours. Our team leader now sends a list of topics in advance.",
    "options": [
      "lag",
      "stall",
      "drag",
      "rush"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Our company continues to _____ behind competitors in online sales. The new website should help us catch up next year.",
    "options": [
      "lag",
      "adjourn",
      "defer",
      "postpone"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The school has a strict policy on _____. Students who arrive after the bell must sign in at the main office.",
    "options": [
      "urgency",
      "twilight",
      "nightfall",
      "tardiness"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The bank agreed to _____ the first loan payment until the new store opens. This gave the owner time to build sales.",
    "options": [
      "linger",
      "defer",
      "procrastinate",
      "lag"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The judge decided to _____ the hearing until Monday morning. Both lawyers needed more time to prepare their arguments.",
    "options": [
      "adjourn",
      "linger",
      "lag",
      "procrastinate"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Economists say the national economy remains _____ despite lower interest rates this year. Consumers are still careful about spending their money.",
    "options": [
      "belated",
      "overdue",
      "sluggish",
      "expired"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The tenant was _____ with his rent for three months. The landlord finally sent him a formal letter.",
    "options": [
      "eventual",
      "behindhand",
      "final",
      "last-minute"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "You cannot board an international flight with an _____ passport. Please check the date on your documents before booking.",
    "options": [
      "belated",
      "sluggish",
      "tardy",
      "expired"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The store will stay open until _____ on Christmas Eve. Shoppers can buy their last gifts late into the night.",
    "options": [
      "deadline",
      "setback",
      "midnight",
      "hold-up"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Hikers are strongly advised to leave the mountain trail before _____. The rocky path becomes dangerous in the dark.",
    "options": [
      "nightfall",
      "deadline",
      "urgency",
      "setback"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The theater does not allow any _____ to enter during the first act. They must wait in the lobby until the break.",
    "options": [
      "deadline",
      "setback",
      "hold-up",
      "latecomer"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "This is the _____ call for passengers on Flight 208 to Osaka. Please proceed to Gate 12 immediately.",
    "options": [
      "eventual",
      "final",
      "belated",
      "tardy"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The company hopes the _____ result of the merger will be lower costs. Some job cuts are expected in the short term.",
    "options": [
      "eventual",
      "tardy",
      "overdue",
      "behindhand"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The hotel has _____ renovated all of its guest rooms. Guests can now enjoy larger bathrooms and faster Wi-Fi.",
    "options": [
      "belatedly",
      "hardly",
      "recently",
      "barely"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The airline only _____ admitted its mistake, three weeks after the flight was cancelled. Many angry passengers had already posted complaints online.",
    "options": [
      "seldom",
      "belatedly",
      "accurately",
      "nearly"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Negotiations began to _____ when neither side would lower its price. The two companies will meet again in May.",
    "options": [
      "linger",
      "adjourn",
      "procrastinate",
      "stall"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "There was a _____ at the border because of a computer failure. Some trucks waited for six hours before crossing.",
    "options": [
      "twilight",
      "latecomer",
      "hold-up",
      "midnight"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Losing the main supplier was a serious _____ for the small bakery. However, the owner quickly found a new source of flour.",
    "options": [
      "setback",
      "twilight",
      "latecomer",
      "nightfall"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "tardy": {
    "pos": "adj.",
    "en_def": "late; not arriving on time",
    "cn_def": "遲到的；遲緩的"
  },
  "overdue": {
    "pos": "adj.",
    "en_def": "not paid, returned or done by the expected time",
    "cn_def": "逾期的；過期未付的"
  },
  "delayed": {
    "pos": "adj.",
    "en_def": "happening later than planned",
    "cn_def": "延誤的；延遲的"
  },
  "postpone": {
    "pos": "v.",
    "en_def": "to move an event to a later time",
    "cn_def": "延後；延期"
  },
  "procrastinate": {
    "pos": "v.",
    "en_def": "to keep delaying something you should do",
    "cn_def": "拖延；耽擱"
  },
  "belated": {
    "pos": "adj.",
    "en_def": "coming or happening later than it should",
    "cn_def": "遲來的；誤期的"
  },
  "delay": {
    "pos": "n.",
    "en_def": "a time when something happens later than planned",
    "cn_def": "延誤；耽擱"
  },
  "lateness": {
    "pos": "n.",
    "en_def": "the fact of arriving or happening late",
    "cn_def": "遲到；延遲"
  },
  "behind": {
    "pos": "prep.",
    "en_def": "later than planned or slower than others",
    "cn_def": "落後於；晚於"
  },
  "last-minute": {
    "pos": "adj.",
    "en_def": "done or happening just before it is too late",
    "cn_def": "最後一刻的；臨時的"
  },
  "deadline": {
    "pos": "n.",
    "en_def": "the latest time by which something must be done",
    "cn_def": "截止期限"
  },
  "urgency": {
    "pos": "n.",
    "en_def": "the need to act quickly",
    "cn_def": "緊迫；急迫"
  },
  "rush": {
    "pos": "n.",
    "en_def": "a time when many people hurry or travel at once",
    "cn_def": "匆忙；尖峰（時段）"
  },
  "linger": {
    "pos": "v.",
    "en_def": "to stay somewhere longer than usual",
    "cn_def": "逗留；徘徊"
  },
  "drag": {
    "pos": "v.",
    "en_def": "to go on for too long in a boring way",
    "cn_def": "拖延；拖得很長"
  },
  "lag": {
    "pos": "n.",
    "en_def": "a period of time between two connected events",
    "cn_def": "時間差；延遲"
  },
  "tardiness": {
    "pos": "n.",
    "en_def": "the habit or fact of being late",
    "cn_def": "遲到；拖拉"
  },
  "defer": {
    "pos": "v.",
    "en_def": "to delay something until a later time",
    "cn_def": "延期；推遲"
  },
  "adjourn": {
    "pos": "v.",
    "en_def": "to stop a meeting and continue it later",
    "cn_def": "休會；延期"
  },
  "slow": {
    "pos": "adj.",
    "en_def": "not fast; taking a long time",
    "cn_def": "慢的；緩慢的"
  },
  "sluggish": {
    "pos": "adj.",
    "en_def": "moving or working more slowly than normal",
    "cn_def": "低迷的；遲緩的"
  },
  "behindhand": {
    "pos": "adj.",
    "en_def": "late in paying or doing something",
    "cn_def": "拖欠的；落後的"
  },
  "expired": {
    "pos": "adj.",
    "en_def": "no longer valid because the time limit has passed",
    "cn_def": "過期的；失效的"
  },
  "midnight": {
    "pos": "n.",
    "en_def": "twelve o'clock at night",
    "cn_def": "午夜；半夜十二點"
  },
  "nightfall": {
    "pos": "n.",
    "en_def": "the time in the evening when it becomes dark",
    "cn_def": "黃昏；天黑"
  },
  "twilight": {
    "pos": "n.",
    "en_def": "the soft light just after the sun goes down",
    "cn_def": "黃昏；暮色"
  },
  "latecomer": {
    "pos": "n.",
    "en_def": "a person who arrives after something has started",
    "cn_def": "遲到者；後來者"
  },
  "final": {
    "pos": "adj.",
    "en_def": "last; coming at the end",
    "cn_def": "最後的；最終的"
  },
  "eventual": {
    "pos": "adj.",
    "en_def": "happening at the end of a long process",
    "cn_def": "最終的；後來的"
  },
  "recently": {
    "pos": "adv.",
    "en_def": "not long ago",
    "cn_def": "最近；近來"
  },
  "belatedly": {
    "pos": "adv.",
    "en_def": "later than should have happened",
    "cn_def": "遲遲地；事後才"
  },
  "stall": {
    "pos": "v.",
    "en_def": "to stop making progress",
    "cn_def": "停滯；拖延"
  },
  "hold-up": {
    "pos": "n.",
    "en_def": "a delay that stops something from moving on",
    "cn_def": "耽擱；阻礙"
  },
  "setback": {
    "pos": "n.",
    "en_def": "a problem that stops progress or makes things worse",
    "cn_def": "挫折；阻礙"
  }
};

const EXTRA_GLOSSES = {};
