// Topic 434 Quiz Data: Wallet 錢包
// Source word list: https://www.examword.com/group-topic/wallet — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T434 - Wallet 錢包",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "cash",
    "pos": "n.",
    "cn_def": "現金",
    "en_def": "money in coins and paper notes",
    "sentence": "A: The new café near our office doesn't accept credit cards yet, so how are you going to buy lunch for the whole team today? B: I stopped at the bank machine on my way to work this morning and took out enough {{BLANK}} to cover everyone's sandwiches and drinks.",
    "cn": "A：我們辦公室附近那家新咖啡店還不接受信用卡，那你今天要怎麼幫整個團隊買午餐？ B：我今天早上上班途中在提款機停了一下，領了足夠的【現金】來支付每個人的三明治和飲料。"
  },
  {
    "word": "money",
    "pos": "n.",
    "cn_def": "錢；金錢",
    "en_def": "coins and paper notes used to buy things",
    "sentence": "A: Our department wants to send three people to the trade show in Singapore next month, but do you think the manager will approve the trip? B: She probably will, because the sales team brought in a lot of new clients last year, so the company has extra {{BLANK}} for travel this year.",
    "cn": "A：我們部門想在下個月派三個人去新加坡參加商展，但你覺得經理會批准這趟出差嗎？ B：她大概會，因為業務團隊去年帶進了很多新客戶，所以公司今年有額外的【錢】可以用在差旅上。"
  },
  {
    "word": "coin",
    "pos": "n.",
    "cn_def": "硬幣",
    "en_def": "a small round piece of metal money",
    "sentence": "A: The parking machine outside the hotel won't take my card, and I need to leave the car there for another hour while I meet the client. B: Don't worry, I have one large {{BLANK}} left in my bag from this morning, and it should be enough to pay for one more hour of parking.",
    "cn": "A：飯店外面的停車繳費機不收我的卡，而我跟客戶開會時需要把車再停在那裡一個小時。 B：別擔心，我包包裡還剩一枚今天早上留下的大面額【硬幣】，應該足夠再付一小時的停車費。"
  },
  {
    "word": "bill",
    "pos": "n.",
    "cn_def": "紙鈔；帳單",
    "en_def": "a piece of paper money",
    "sentence": "A: The taxi driver says he can't give change for anything bigger than a small note, and I only have large ones from the airport exchange. B: Let me check my wallet, because I think I have a ten-dollar {{BLANK}} that I got back from the coffee shop this morning.",
    "cn": "A：計程車司機說面額太大的鈔票他找不開，而我只有在機場換來的大鈔。 B：讓我看看我的皮夾，我想我有一張今天早上咖啡店找給我的十元【紙鈔】。"
  },
  {
    "word": "card",
    "pos": "n.",
    "cn_def": "卡片",
    "en_def": "a small flat piece of plastic used to pay, enter a building, or show who you are",
    "sentence": "A: I came to the office early this morning to finish the report, but the front door wouldn't open and the guard wasn't at his desk. B: You probably need a new key {{BLANK}}, because the building manager changed the security system last weekend and all the old ones stopped working.",
    "cn": "A：我今天早上提早到辦公室想完成報告，但大門打不開，警衛也不在座位上。 B：你大概需要一張新的門禁【卡】，因為大樓管理員上週末更換了保全系統，所有舊卡都失效了。"
  },
  {
    "word": "credit card",
    "pos": "n.phr.",
    "cn_def": "信用卡",
    "en_def": "a plastic card that lets you buy things now and pay the bank later",
    "sentence": "A: The hotel in Tokyo asked for a deposit before they will confirm our booking for the sales conference, so how should we send it? B: The easiest way is to give them the company {{BLANK}} number over the phone, and the finance department will check the charge at the end of the month.",
    "cn": "A：東京的飯店要求先付訂金才會確認我們業務會議的訂房，我們該怎麼付？ B：最簡單的方法是透過電話把公司【信用卡】號碼給他們，財務部會在月底核對這筆款項。"
  },
  {
    "word": "debit card",
    "pos": "n.phr.",
    "cn_def": "簽帳金融卡",
    "en_def": "a card that takes money straight from your bank account when you pay",
    "sentence": "A: I want to stop spending more than I earn every month, but I always use my credit card when I shop online for clothes and gadgets. B: Try using your {{BLANK}} instead, because the money leaves your bank account right away, so you can't spend more than you really have.",
    "cn": "A：我想停止每個月花得比賺得多，但我上網買衣服和小電器時總是用信用卡。 B：試著改用你的【簽帳金融卡】，因為錢會立刻從你的銀行帳戶扣除，所以你不可能花超過你實際擁有的錢。"
  },
  {
    "word": "id",
    "pos": "n.",
    "cn_def": "身分證件",
    "en_def": "a card or document that shows who you are (ID)",
    "sentence": "A: The security guard at the reception desk won't let me into the meeting room on the tenth floor, even though the client invited me. B: All visitors have to show a photo {{BLANK}} such as a passport or driver's license, and then the guard will give you a visitor pass.",
    "cn": "A：接待櫃台的警衛不讓我進十樓的會議室，即使是客戶邀請我的。 B：所有訪客都必須出示附照片的【身分證件】，例如護照或駕照，然後警衛才會給你訪客證。"
  },
  {
    "word": "license",
    "pos": "n.",
    "cn_def": "執照；駕照",
    "en_def": "an official document that gives you permission to do something, such as drive",
    "sentence": "A: The car rental company at the airport is asking for some documents before they give me the keys, but I'm not sure what they need. B: They will want to see your driver's {{BLANK}} and a credit card, and they might also ask for your flight details and the hotel address.",
    "cn": "A：機場的租車公司在給我鑰匙之前要求一些文件，但我不確定他們需要什麼。 B：他們會想看你的駕駛【執照】和一張信用卡，可能也會問你的航班資料和飯店地址。"
  },
  {
    "word": "receipt",
    "pos": "n.",
    "cn_def": "收據",
    "en_def": "a piece of paper that shows you have paid for something",
    "sentence": "A: Accounting says they can't pay me back for the taxi I took to the client's office last Tuesday, and I don't understand why. B: They need the original {{BLANK}} from the driver as proof of the cost, so check your wallet and your jacket pockets before you throw anything away.",
    "cn": "A：會計部說他們不能給我報銷上週二去客戶辦公室搭的計程車費，我不懂為什麼。 B：他們需要司機開的【收據】正本作為費用證明，所以在丟掉任何東西之前，先檢查你的皮夾和外套口袋。"
  },
  {
    "word": "photo",
    "pos": "n.",
    "cn_def": "照片",
    "en_def": "a picture taken with a camera",
    "sentence": "A: Why do you always carry that old picture of your family in your wallet when you have hundreds of pictures on your phone? B: My phone battery often dies on long business trips, but this small {{BLANK}} of my kids at the beach always makes me smile when I miss them.",
    "cn": "A：你手機裡有上百張照片，為什麼還總是在皮夾裡放那張家人的舊相片？ B：長途出差時我的手機常常沒電，但這張孩子們在海邊的小【照片】總能在我想念他們時讓我微笑。"
  },
  {
    "word": "pocket",
    "pos": "n.",
    "cn_def": "口袋",
    "en_def": "a small bag sewn into clothes for keeping things",
    "sentence": "A: I've looked everywhere in the office for my wallet, and I'm worried that someone took it from my desk during lunch. B: Before you call security, check the back {{BLANK}} of your jeans, because I saw you put something there when you paid for the coffee.",
    "cn": "A：我在辦公室到處找我的皮夾，我擔心午餐時間有人從我桌上拿走了。 B：在你打電話給保全之前，先檢查一下你牛仔褲的後【口袋】，因為我看到你付咖啡錢時把東西放進去了。"
  },
  {
    "word": "purse",
    "pos": "n.",
    "cn_def": "錢包；女用小包",
    "en_def": "a small bag for money, often used by women",
    "sentence": "A: My sister wants to buy a birthday gift for her manager, but she has no idea what a busy businesswoman would like. B: She could choose a small leather {{BLANK}} with space for coins, cards and keys, because it is useful, it looks smart, and it fits in any handbag.",
    "cn": "A：我姊姊想買生日禮物送給她的經理，但她不知道一位忙碌的女性主管會喜歡什麼。 B：她可以選一個有空間放硬幣、卡片和鑰匙的小皮革【錢包】，因為它很實用、看起來很體面，而且放得進任何手提包。"
  },
  {
    "word": "leather",
    "pos": "n.",
    "cn_def": "皮革",
    "en_def": "material made from animal skin, used for shoes, bags and wallets",
    "sentence": "A: Our online shop sold out of those brown wallets in just two days, so what should we tell the factory when we place the next order? B: Ask them to use the same soft {{BLANK}} as before, because many customers wrote reviews saying the material feels strong and looks better after a few months.",
    "cn": "A：我們網路商店的那些咖啡色皮夾兩天就賣完了，下次下訂單時我們該跟工廠說什麼？ B：請他們使用和之前一樣的柔軟【皮革】，因為很多顧客在評論中說這種材質很耐用，而且用了幾個月後看起來更好看。"
  },
  {
    "word": "fold",
    "pos": "v.",
    "cn_def": "摺疊",
    "en_def": "to bend paper or cloth so that one part lies on top of another",
    "sentence": "A: The conference handouts are too big for the envelopes, and the guests will arrive in less than an hour, so what can we do? B: Let's {{BLANK}} each page in half very carefully, and then the papers will fit inside the envelopes without making the room look messy.",
    "cn": "A：會議講義對信封來說太大了，客人不到一小時就要到了，我們該怎麼辦？ B：我們把每一頁都小心地【摺】成一半，這樣紙就能放進信封裡，也不會讓會場看起來很凌亂。"
  },
  {
    "word": "open",
    "pos": "v.",
    "cn_def": "打開；開張",
    "en_def": "to move something so that it is no longer closed; to start business",
    "sentence": "A: The store manager said the new branch would start selling shoes and bags this weekend, but there's still a lot of work to do. B: That's true, but they plan to {{BLANK}} the doors to customers on Saturday morning, so the staff are staying late every night to finish setting up.",
    "cn": "A：店經理說新分店這週末就會開始賣鞋子和包包，但還有很多工作要做。 B：沒錯，但他們打算在星期六早上對顧客【開】門，所以員工每晚都留到很晚把布置完成。"
  },
  {
    "word": "close",
    "pos": "v.",
    "cn_def": "關閉；關上",
    "en_def": "to shut something",
    "sentence": "A: I've finished checking all the orders for today, and everyone else has already gone home, so is there anything else I should do? B: Please {{BLANK}} all the windows in the meeting room and turn off the lights, because the cleaners won't come until tomorrow morning and it may rain tonight.",
    "cn": "A：我已經核對完今天所有的訂單，其他人也都回家了，還有什麼我該做的嗎？ B：請把會議室所有的窗戶【關】上並關燈，因為清潔人員明天早上才會來，而且今晚可能會下雨。"
  },
  {
    "word": "carry",
    "pos": "v.",
    "cn_def": "攜帶",
    "en_def": "to hold something and take it with you",
    "sentence": "A: I'm flying to Bangkok next week to visit our new supplier, and I'm not sure how much cash I should take with me. B: It's better to {{BLANK}} only a small amount of money and use your company card for most things, because large amounts of cash are easy to lose while traveling.",
    "cn": "A：我下週要飛到曼谷拜訪我們的新供應商，我不確定該帶多少現金。 B：最好只【攜帶】少量的錢，大部分花費用公司卡支付，因為大量現金在旅行時很容易遺失。"
  },
  {
    "word": "lose",
    "pos": "v.",
    "cn_def": "遺失；弄丟",
    "en_def": "to be unable to find something",
    "sentence": "A: Why does the new manager keep reminding everyone to put their visitor passes back in the box at the front desk every evening? B: People often {{BLANK}} them on the train or leave them at restaurants, and each replacement pass costs the company about twenty dollars.",
    "cn": "A：為什麼新經理一直提醒大家每天晚上要把訪客證放回櫃台的盒子裡？ B：大家常常在火車上把它們【弄丟】，或是忘在餐廳裡，而每補發一張證件就要花公司大約二十美元。"
  },
  {
    "word": "find",
    "pos": "v.",
    "cn_def": "找到",
    "en_def": "to discover something you were looking for",
    "sentence": "A: I dropped my wallet somewhere between the parking lot and the elevator this morning, and it has all my cards and my driver's license in it. B: Go and ask the security office on the first floor, because the cleaners often {{BLANK}} lost items in the building and take them there.",
    "cn": "A：我今天早上在停車場和電梯之間的某處掉了皮夾，裡面有我所有的卡片和駕照。 B：去一樓的保全室問問看，因為清潔人員常常在大樓裡【找到】遺失物品，並把它們送到那裡。"
  },
  {
    "word": "safe",
    "pos": "adj.",
    "cn_def": "安全的",
    "en_def": "not in danger of being lost, stolen or hurt",
    "sentence": "A: I'm going to the night market with some visitors from our London office, and they're worried about thieves in the crowd. B: Tell them to keep their wallets in a front pocket or a zipped bag, and their money will stay {{BLANK}} even when the streets are very busy.",
    "cn": "A：我要帶倫敦辦公室來的幾位訪客去夜市，他們擔心人群中有小偷。 B：告訴他們把皮夾放在前面口袋或有拉鍊的包包裡，即使街上很擁擠，他們的錢也會很【安全】。"
  },
  {
    "word": "valuable",
    "pos": "adj.",
    "cn_def": "貴重的；有價值的",
    "en_def": "worth a lot of money or very important",
    "sentence": "A: The hotel receptionist asked if I wanted to use the small box in my room, but I'm only staying for two nights for the conference. B: You should still use it for your passport and anything else that is {{BLANK}}, because the cleaning staff go in and out of the rooms every day.",
    "cn": "A：飯店櫃台人員問我要不要使用房間裡的小保險箱，但我只是為了開會住兩晚。 B：你還是應該用它來放護照和其他任何【貴重的】東西，因為清潔人員每天都會進出房間。"
  },
  {
    "word": "empty",
    "pos": "adj.",
    "cn_def": "空的",
    "en_def": "with nothing inside",
    "sentence": "A: Why did you come back to the office so quickly instead of having lunch at that new restaurant with the sales team? B: When I got to the restaurant and tried to pay, my wallet was completely {{BLANK}}, because I had spent all my cash at the bookstore yesterday.",
    "cn": "A：你為什麼這麼快就回辦公室，而不是跟業務團隊在那家新餐廳吃午餐？ B：我到了餐廳要付錢時，發現皮夾完全是【空的】，因為我昨天在書店把現金都花光了。"
  },
  {
    "word": "full",
    "pos": "adj.",
    "cn_def": "滿的；充滿的",
    "en_def": "containing as much or as many as possible",
    "sentence": "A: Your wallet looks so heavy and fat, and it is falling out of your bag again, so what do you keep in there? B: It's {{BLANK}} of old receipts from business trips, because I keep forgetting to give them to the accounting department at the end of each month.",
    "cn": "A：你的皮夾看起來又重又鼓，又要從包包裡掉出來了，你到底在裡面放了什麼？ B：裡面【塞滿】了出差時的舊收據，因為我每個月底都忘記把它們交給會計部。"
  },
  {
    "word": "thin",
    "pos": "adj.",
    "cn_def": "薄的",
    "en_def": "not thick; narrow from one side to the other",
    "sentence": "A: I'm looking for a gift for my boss, who always wears a suit and doesn't like carrying a big bag to meetings. B: You could buy him a {{BLANK}} wallet that holds just a few cards and notes, because it will fit easily into the inside pocket of his jacket.",
    "cn": "A：我在找送給老闆的禮物，他總是穿西裝，而且不喜歡帶大包包去開會。 B：你可以買一個只放得下幾張卡片和鈔票的【薄】皮夾給他，因為它可以輕鬆放進他西裝外套的內袋。"
  },
  {
    "word": "thick",
    "pos": "adj.",
    "cn_def": "厚的",
    "en_def": "having a large distance between two sides",
    "sentence": "A: The client asked for a printed copy of the whole contract, but the file has more than three hundred pages with all the charts. B: Then it will be a very {{BLANK}} document, so please put it in a strong folder and send it by courier instead of by regular mail.",
    "cn": "A：客戶要求整份合約的紙本，但連同所有圖表這份文件超過三百頁。 B：那它會是一份非常【厚】的文件，所以請把它放進堅固的文件夾，用快遞寄送而不是一般郵件。"
  },
  {
    "word": "inside",
    "pos": "adv.",
    "cn_def": "在裡面；進去",
    "en_def": "into or in a room, building or container",
    "sentence": "A: I think I left my wallet in the meeting room on the fifth floor, but the door is locked and the meeting has already started. B: Wait until the break at three o'clock, and then you can go {{BLANK}} quietly and look under the chairs before the next session begins.",
    "cn": "A：我想我把皮夾忘在五樓的會議室了，但門鎖著，會議也已經開始了。 B：等到三點休息時間，你就可以安靜地走【進去】，在下一場開始前看看椅子底下。"
  },
  {
    "word": "outside",
    "pos": "adv.",
    "cn_def": "在外面；到外面",
    "en_def": "not in a building; out into the open air",
    "sentence": "A: The office is very crowded today because of the training session, so where can I take this important phone call from our supplier? B: You could go {{BLANK}} and sit on the bench near the fountain, because it is quiet there and the weather is nice this afternoon.",
    "cn": "A：今天因為訓練課程辦公室非常擁擠，我可以在哪裡接供應商這通重要的電話？ B：你可以到【外面】去坐在噴水池旁邊的長椅上，因為那裡很安靜，而且今天下午天氣很好。"
  },
  {
    "word": "protect",
    "pos": "v.",
    "cn_def": "保護",
    "en_def": "to keep someone or something safe from harm or damage",
    "sentence": "A: Our customers keep asking whether the new wallets can stop thieves from reading their bank cards with a small machine. B: Yes, there is a special metal layer inside each one that will {{BLANK}} the cards, so we should explain that clearly on the product page.",
    "cn": "A：我們的顧客一直問新款皮夾能不能防止小偷用小型機器讀取他們的銀行卡。 B：可以，每個皮夾裡都有一層特殊的金屬層可以【保護】卡片，所以我們應該在商品頁面上清楚說明這一點。"
  },
  {
    "word": "belongings",
    "pos": "n.",
    "cn_def": "隨身物品；財物",
    "en_def": "the things that a person owns, especially things they carry",
    "sentence": "A: The airline announced that our flight to Seoul will be delayed by two hours, so should I leave my bag here while I get some coffee? B: No, please take all your {{BLANK}} with you, because the airport staff may remove any bag that is left alone, even for a few minutes.",
    "cn": "A：航空公司宣布我們飛往首爾的班機將延誤兩小時，我去買咖啡時可以把包包留在這裡嗎？ B：不行，請帶著你所有的【隨身物品】，因為機場人員可能會移走任何無人看管的包包，即使只有幾分鐘。"
  },
  {
    "word": "spend",
    "pos": "v.",
    "cn_def": "花費",
    "en_def": "to use money to buy things",
    "sentence": "A: The marketing team wants to hold a big party for the product launch, but our budget for this quarter is quite small. B: I agree that we shouldn't {{BLANK}} too much on food and decorations, so maybe we could have a simple event in the office instead of renting a hotel ballroom.",
    "cn": "A：行銷團隊想為產品發表會辦一場盛大的派對，但我們這一季的預算相當少。 B：我同意我們不應該在食物和裝飾上【花】太多錢，所以也許我們可以在辦公室辦個簡單的活動，而不是租飯店宴會廳。"
  },
  {
    "word": "save",
    "pos": "v.",
    "cn_def": "儲蓄；存錢",
    "en_def": "to keep money so that you can use it later",
    "sentence": "A: My colleague wants to take a long trip to Europe next summer, but she says plane tickets and hotels are very expensive. B: She should {{BLANK}} a little from every paycheck and put it in a separate bank account, so she will have enough by next June without any stress.",
    "cn": "A：我同事明年夏天想去歐洲長途旅行，但她說機票和飯店都很貴。 B：她應該每次領薪水時都【存】一點錢，放進另一個銀行帳戶，這樣到明年六月她就能輕鬆存夠錢了。"
  },
  {
    "word": "pay",
    "pos": "v.",
    "cn_def": "付款；支付",
    "en_def": "to give money for something you buy or for work done",
    "sentence": "A: The restaurant where we had dinner with the clients only takes cash, and I don't think I have enough with me tonight. B: Don't worry, I'll {{BLANK}} for everything now, and you can give me your half tomorrow after you visit the bank near our office.",
    "cn": "A：我們和客戶吃晚餐的那家餐廳只收現金，我想我今晚身上的錢不夠。 B：別擔心，我現在先【付】全部的錢，你明天去我們辦公室附近的銀行之後再把你那一半給我就好。"
  },
  {
    "word": "organize",
    "pos": "v.",
    "cn_def": "整理；安排",
    "en_def": "to arrange things in a neat and useful way",
    "sentence": "A: Every time I need my business card at a meeting, I have to search through a pile of receipts and old tickets in my wallet. B: You should take ten minutes this weekend to {{BLANK}} everything, keeping only the important cards and throwing away the papers you don't need anymore.",
    "cn": "A：每次在會議上需要名片時，我都得在皮夾裡一堆收據和舊票根中翻找。 B：你這週末應該花十分鐘把所有東西【整理】一下，只留下重要的卡片，丟掉不再需要的紙張。"
  }
];

const MCQS = [
  {
    "q": "The small bakery near the station does not accept cards. Customers must pay in _____ at the counter.",
    "options": [
      "cash",
      "receipt",
      "license",
      "leather"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The company wants to reduce travel costs this year. Managers are asked to save _____ by holding more online meetings.",
    "options": [
      "leather",
      "money",
      "pocket",
      "license"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The vending machine in the lobby only accepts exact change. Please insert one _____ to get a bottle of water.",
    "options": [
      "purse",
      "leather",
      "coin",
      "pocket"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The cashier could not give change for a large note. The customer finally paid with a five-dollar _____ instead.",
    "options": [
      "purse",
      "pocket",
      "leather",
      "bill"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Employees must swipe their key _____ at the entrance. Without it, the security door will not open for anyone.",
    "options": [
      "card",
      "coin",
      "purse",
      "receipt"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The hotel requires a _____ to hold the room reservation. The charge will only appear if the guest does not arrive.",
    "options": [
      "receipt",
      "credit card",
      "pocket",
      "leather"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Unlike a credit card, a _____ takes money directly from your bank account. This helps many people avoid spending more than they have.",
    "options": [
      "receipt",
      "license",
      "debit card",
      "purse"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "All visitors must show a valid photo _____ at the front desk. The receptionist will then print a temporary pass.",
    "options": [
      "coin",
      "purse",
      "leather",
      "id"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "New delivery drivers must have a valid driver's _____. The company also checks their driving record before hiring them.",
    "options": [
      "license",
      "receipt",
      "coin",
      "pocket"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Please keep the original _____ for every taxi ride. The accounting department will not repay costs without proof of payment.",
    "options": [
      "leather",
      "receipt",
      "pocket",
      "license"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Tourists should keep their wallets in a front _____ of their jeans. Thieves on crowded trains often target open backpacks.",
    "options": [
      "receipt",
      "coin",
      "pocket",
      "license"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "She took a few coins out of her small leather _____. Then she paid the driver and stepped out of the taxi.",
    "options": [
      "receipt",
      "license",
      "coin",
      "purse"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Our wallets are made from genuine _____ and last for many years. Each one is cut and sewn by hand in Italy.",
    "options": [
      "leather",
      "receipt",
      "coin",
      "license"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Please _____ the letter neatly before putting it in the envelope. A clean, flat letter looks more professional to clients.",
    "options": [
      "lose",
      "fold",
      "spend",
      "pay"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The new branch will _____ its doors to customers next Monday. The manager expects a large crowd on the first day.",
    "options": [
      "fold",
      "lose",
      "open",
      "spend"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The bank will _____ at three o'clock on Friday afternoon. Customers should finish their business before then.",
    "options": [
      "carry",
      "fold",
      "find",
      "close"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Travelers are advised not to _____ large amounts of cash. Using a card is safer when visiting busy cities.",
    "options": [
      "carry",
      "close",
      "open",
      "fold"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Many travelers _____ their wallets on crowded buses and trains. Keeping them in a zipped bag reduces this risk.",
    "options": [
      "pay",
      "lose",
      "close",
      "spend"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The cleaner was able to _____ the missing wallet under a desk. She returned it to the owner that afternoon.",
    "options": [
      "lose",
      "spend",
      "find",
      "pay"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Hotel guests can use the box in their room to keep passports _____. The code can be changed at any time.",
    "options": [
      "empty",
      "thin",
      "full",
      "safe"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Please do not leave _____ items such as laptops in your car. Break-ins happen often in this parking lot.",
    "options": [
      "valuable",
      "empty",
      "thin",
      "full"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "After paying for dinner and the taxi, his wallet was completely _____. He had to borrow money from a colleague for the train.",
    "options": [
      "valuable",
      "empty",
      "full",
      "thin"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Her wallet was so _____ of old receipts that it would not close. She finally threw most of them away.",
    "options": [
      "empty",
      "thin",
      "full",
      "safe"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "This _____ wallet holds only four cards and a few bills. It fits easily into the front pocket of a suit.",
    "options": [
      "empty",
      "valuable",
      "full",
      "thin"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The special lining helps _____ your bank cards from electronic theft. It blocks signals from card-reading machines.",
    "options": [
      "protect",
      "spend",
      "organize",
      "lose"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Passengers should take all their personal _____ when they leave the plane. Items left behind are sent to the lost and found office.",
    "options": [
      "leather",
      "belongings",
      "license",
      "receipt"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The team should not _____ more than five hundred dollars on the party. Any extra costs must be approved by the manager.",
    "options": [
      "protect",
      "fold",
      "spend",
      "find"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Many employees _____ part of their salary every month. They plan to use the money for a family trip next year.",
    "options": [
      "lose",
      "fold",
      "close",
      "save"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Customers can _____ for their meals by cash or card. A service charge of ten percent is added to every bill.",
    "options": [
      "pay",
      "save",
      "carry",
      "fold"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "Take a few minutes to _____ your wallet every week. Throw away old receipts and keep your cards in order.",
    "options": [
      "lose",
      "organize",
      "spend",
      "pay"
    ],
    "answer": 1,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "cash": {
    "pos": "n.",
    "en_def": "money in coins and paper notes",
    "cn_def": "現金"
  },
  "money": {
    "pos": "n.",
    "en_def": "coins and paper notes used to buy things",
    "cn_def": "錢；金錢"
  },
  "coin": {
    "pos": "n.",
    "en_def": "a small round piece of metal money",
    "cn_def": "硬幣"
  },
  "bill": {
    "pos": "n.",
    "en_def": "a piece of paper money",
    "cn_def": "紙鈔；帳單"
  },
  "card": {
    "pos": "n.",
    "en_def": "a small flat piece of plastic used to pay, enter a building, or show who you are",
    "cn_def": "卡片"
  },
  "credit card": {
    "pos": "n.phr.",
    "en_def": "a plastic card that lets you buy things now and pay the bank later",
    "cn_def": "信用卡"
  },
  "debit card": {
    "pos": "n.phr.",
    "en_def": "a card that takes money straight from your bank account when you pay",
    "cn_def": "簽帳金融卡"
  },
  "id": {
    "pos": "n.",
    "en_def": "a card or document that shows who you are (ID)",
    "cn_def": "身分證件"
  },
  "license": {
    "pos": "n.",
    "en_def": "an official document that gives you permission to do something, such as drive",
    "cn_def": "執照；駕照"
  },
  "receipt": {
    "pos": "n.",
    "en_def": "a piece of paper that shows you have paid for something",
    "cn_def": "收據"
  },
  "photo": {
    "pos": "n.",
    "en_def": "a picture taken with a camera",
    "cn_def": "照片"
  },
  "pocket": {
    "pos": "n.",
    "en_def": "a small bag sewn into clothes for keeping things",
    "cn_def": "口袋"
  },
  "purse": {
    "pos": "n.",
    "en_def": "a small bag for money, often used by women",
    "cn_def": "錢包；女用小包"
  },
  "leather": {
    "pos": "n.",
    "en_def": "material made from animal skin, used for shoes, bags and wallets",
    "cn_def": "皮革"
  },
  "fold": {
    "pos": "v.",
    "en_def": "to bend paper or cloth so that one part lies on top of another",
    "cn_def": "摺疊"
  },
  "open": {
    "pos": "v.",
    "en_def": "to move something so that it is no longer closed; to start business",
    "cn_def": "打開；開張"
  },
  "close": {
    "pos": "v.",
    "en_def": "to shut something",
    "cn_def": "關閉；關上"
  },
  "carry": {
    "pos": "v.",
    "en_def": "to hold something and take it with you",
    "cn_def": "攜帶"
  },
  "lose": {
    "pos": "v.",
    "en_def": "to be unable to find something",
    "cn_def": "遺失；弄丟"
  },
  "find": {
    "pos": "v.",
    "en_def": "to discover something you were looking for",
    "cn_def": "找到"
  },
  "safe": {
    "pos": "adj.",
    "en_def": "not in danger of being lost, stolen or hurt",
    "cn_def": "安全的"
  },
  "valuable": {
    "pos": "adj.",
    "en_def": "worth a lot of money or very important",
    "cn_def": "貴重的；有價值的"
  },
  "empty": {
    "pos": "adj.",
    "en_def": "with nothing inside",
    "cn_def": "空的"
  },
  "full": {
    "pos": "adj.",
    "en_def": "containing as much or as many as possible",
    "cn_def": "滿的；充滿的"
  },
  "thin": {
    "pos": "adj.",
    "en_def": "not thick; narrow from one side to the other",
    "cn_def": "薄的"
  },
  "thick": {
    "pos": "adj.",
    "en_def": "having a large distance between two sides",
    "cn_def": "厚的"
  },
  "inside": {
    "pos": "adv.",
    "en_def": "into or in a room, building or container",
    "cn_def": "在裡面；進去"
  },
  "outside": {
    "pos": "adv.",
    "en_def": "not in a building; out into the open air",
    "cn_def": "在外面；到外面"
  },
  "protect": {
    "pos": "v.",
    "en_def": "to keep someone or something safe from harm or damage",
    "cn_def": "保護"
  },
  "belongings": {
    "pos": "n.",
    "en_def": "the things that a person owns, especially things they carry",
    "cn_def": "隨身物品；財物"
  },
  "spend": {
    "pos": "v.",
    "en_def": "to use money to buy things",
    "cn_def": "花費"
  },
  "save": {
    "pos": "v.",
    "en_def": "to keep money so that you can use it later",
    "cn_def": "儲蓄；存錢"
  },
  "pay": {
    "pos": "v.",
    "en_def": "to give money for something you buy or for work done",
    "cn_def": "付款；支付"
  },
  "organize": {
    "pos": "v.",
    "en_def": "to arrange things in a neat and useful way",
    "cn_def": "整理；安排"
  }
};

const EXTRA_GLOSSES = {};
