// Topic 216 Quiz Data: Left 左邊；離開；剩下
// Source word list: https://www.examword.com/group-topic/left — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T216 - Left 左邊；離開；剩下",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "leave",
    "pos": "v.",
    "cn_def": "離開",
    "en_def": "to go away from a place",
    "sentence": "A: What time do you usually {{BLANK}} the office on Fridays, and do you think it would be possible to join our team dinner at the Italian restaurant downtown this week? B: I normally finish around five thirty, but this Friday I have to stay a little later because the monthly sales report is due on Monday morning.",
    "cn": "A：你星期五通常幾點【離開】辦公室？你覺得這週能來參加我們在市中心義大利餐廳的團隊聚餐嗎？ B：我通常五點半左右下班，但這週五我得多留一會兒，因為月銷售報告星期一早上就要交。"
  },
  {
    "word": "depart",
    "pos": "v.",
    "cn_def": "出發；離開",
    "en_def": "to leave a place to start a trip",
    "sentence": "A: Could you check the schedule and tell me when the airport shuttle bus is going to {{BLANK}} from the hotel lobby tomorrow morning? B: According to the front desk, the first one leaves at six fifteen, so we should wake up early, finish breakfast quickly, and bring our luggage downstairs before six.",
    "cn": "A：你可以查一下時刻表，告訴我明天早上機場接駁巴士幾點從飯店大廳【出發】嗎？ B：根據櫃台的說法，第一班六點十五分開，所以我們應該早點起床、快點吃完早餐，並在六點前把行李拿下樓。"
  },
  {
    "word": "exit",
    "pos": "n.",
    "cn_def": "出口",
    "en_def": "a door or way out of a building or place",
    "sentence": "A: Excuse me, I'm attending the trade fair for the first time, and I can't find my way out of this huge hall; where is the nearest {{BLANK}}? B: Walk straight past the food court and the information booth, then turn right at the coffee stand, and you will see the green sign above the glass doors.",
    "cn": "A：不好意思，我第一次來參加這個商展，在這個大展廳裡找不到出去的路，最近的【出口】在哪裡？ B：直走經過美食區和服務台，然後在咖啡攤右轉，你就會看到玻璃門上方的綠色標誌。"
  },
  {
    "word": "abandon",
    "pos": "v.",
    "cn_def": "放棄；拋棄",
    "en_def": "to stop doing or planning something completely; to leave something forever",
    "sentence": "A: Why did the board decide to {{BLANK}} the plan to open a new branch in the city center after spending so much time on it? B: The rent there rose by almost forty percent last year, and our research showed that most of our customers now prefer shopping online, so the project no longer made financial sense.",
    "cn": "A：董事會花了那麼多時間，為什麼決定【放棄】在市中心開新分店的計畫？ B：那裡的租金去年漲了將近百分之四十，而且我們的調查顯示大部分顧客現在比較喜歡網購，所以這個計畫在財務上已經不合理了。"
  },
  {
    "word": "quit",
    "pos": "v.",
    "cn_def": "辭職；停止",
    "en_def": "to stop doing something, especially to leave a job",
    "sentence": "A: I heard that Jason is planning to {{BLANK}} his job at the bank next month; do you know what he wants to do after that? B: Yes, he told me he has saved enough money to open a small bakery near his hometown, because he has always loved baking bread and cakes for his friends and family.",
    "cn": "A：我聽說Jason打算下個月【辭掉】銀行的工作，你知道他之後想做什麼嗎？ B：知道，他告訴我他已經存夠錢，要在家鄉附近開一家小麵包店，因為他一直很喜歡為朋友和家人烤麵包和蛋糕。"
  },
  {
    "word": "resign",
    "pos": "v.",
    "cn_def": "辭職",
    "en_def": "to officially leave your job or position",
    "sentence": "A: Did you hear the news that the marketing director has decided to {{BLANK}} at the end of this quarter after working here for twelve years? B: Yes, she sent an email to the whole department this morning, explaining that she wants to spend more time with her family and will help train the new manager before she goes.",
    "cn": "A：你聽說行銷總監在這裡工作十二年後，決定在本季結束時【辭職】的消息了嗎？ B：聽說了，她今天早上寄了一封電子郵件給整個部門，說明她想多花時間陪家人，並會在離開前協助培訓新經理。"
  },
  {
    "word": "withdraw",
    "pos": "v.",
    "cn_def": "提領；撤回",
    "en_def": "to take money out of a bank account; to pull back or out",
    "sentence": "A: Is there an ATM near the conference center where I can {{BLANK}} some cash before we take a taxi to the client's office this afternoon? B: There's one inside the convenience store across the street, but it charges a small fee for foreign cards, so you might prefer the bank machine next to the subway station.",
    "cn": "A：會議中心附近有沒有提款機，讓我在今天下午搭計程車去客戶辦公室之前【提領】一些現金？ B：對街的便利商店裡有一台，但外國卡要收一點手續費，所以你可能會比較想用地鐵站旁邊的銀行提款機。"
  },
  {
    "word": "vacate",
    "pos": "v.",
    "cn_def": "騰出；搬出",
    "en_def": "to leave a room or building so that others can use it",
    "sentence": "A: When do the guests in Room 508 have to {{BLANK}} their room, because a large tour group is arriving early this afternoon and we need it cleaned? B: Check-out time is eleven o'clock, but I will call them now and politely remind them, and then I'll ask the housekeeping staff to prepare the room immediately afterward.",
    "cn": "A：508號房的客人什麼時候要【退出】房間？因為今天下午有一個大型旅行團會提早抵達，我們需要把房間打掃好。 B：退房時間是十一點，但我現在就打電話禮貌地提醒他們，然後請房務人員馬上把房間準備好。"
  },
  {
    "word": "gone",
    "pos": "adj.",
    "cn_def": "不見了的；用完的",
    "en_def": "no longer there; used up",
    "sentence": "A: Did you find the box of printer paper that was delivered to the reception desk yesterday afternoon, because I need to print the contracts for our meeting? B: Unfortunately, it was already {{BLANK}} when I arrived this morning, so I think someone from the accounting department took it to their floor without telling anyone.",
    "cn": "A：你有找到昨天下午送到接待櫃台的那箱影印紙嗎？我需要印會議要用的合約。 B：很遺憾，我今天早上到的時候它已經【不見了】，所以我想是會計部的人沒告訴任何人就拿到他們樓層去了。"
  },
  {
    "word": "remaining",
    "pos": "adj.",
    "cn_def": "剩下的",
    "en_def": "still left after the others have gone or been used",
    "sentence": "A: How many tickets are still available for the company's annual charity concert next Saturday, and should we start selling them to the public now? B: We have sold most of them to employees, and the twenty {{BLANK}} seats are in the back row, so I think we can post them on our website this afternoon.",
    "cn": "A：公司下週六年度慈善音樂會還有多少票？我們現在應該開始對外販售嗎？ B：大部分已經賣給員工了，【剩下的】二十個座位在最後一排，所以我想今天下午可以把它們放到我們的網站上。"
  },
  {
    "word": "leftover",
    "pos": "adj.",
    "cn_def": "剩下的；吃剩的",
    "en_def": "not used or eaten after the rest has been used",
    "sentence": "A: There's so much food from the client lunch in the meeting room; what should we do with all of it before the cleaners come at six? B: Let's put the sandwiches in the fridge in the staff kitchen and send an email telling everyone that any {{BLANK}} food is free to take home tonight.",
    "cn": "A：會議室裡有好多客戶午餐會剩下來的食物，在清潔人員六點來之前我們該怎麼處理？ B：我們把三明治放進員工廚房的冰箱，然後寄封電子郵件告訴大家，今晚任何【吃剩的】食物都可以免費帶回家。"
  },
  {
    "word": "remainder",
    "pos": "n.",
    "cn_def": "剩餘部分",
    "en_def": "the part of something that is still left",
    "sentence": "A: The workers finished painting the first two floors of the new office building this week, but what about the rest of the work? B: They plan to complete the {{BLANK}} of the project by the end of next month, as long as the weather stays dry and the paint supplier delivers the materials on time.",
    "cn": "A：工人們這週把新辦公大樓的前兩層樓漆好了，那其他的工作呢？ B：只要天氣保持乾燥、油漆供應商準時交貨，他們打算在下個月底前完成工程的【剩餘部分】。"
  },
  {
    "word": "balance",
    "pos": "n.",
    "cn_def": "餘額；尾款",
    "en_def": "the amount of money still owed or still in an account",
    "sentence": "A: I paid a deposit for the hotel conference room last month, but how much do I still owe before the event next Tuesday? B: Let me check our records for you; the {{BLANK}} is eight hundred dollars, and you can pay it by credit card or bank transfer any time before Friday afternoon.",
    "cn": "A：我上個月付了飯店會議室的訂金，但在下週二活動之前我還欠多少錢？ B：我幫您查一下紀錄；【尾款】是八百美元，您可以在週五下午之前隨時用信用卡或銀行轉帳支付。"
  },
  {
    "word": "surplus",
    "pos": "n.",
    "cn_def": "過剩；盈餘",
    "en_def": "an amount that is more than what is needed",
    "sentence": "A: Why is the warehouse so full of winter jackets when spring is only a few weeks away, and what are we going to do with them? B: The factory produced far more than we ordered, so we have a large {{BLANK}}, and the manager plans to sell the extra jackets at a discount to outlet stores.",
    "cn": "A：再過幾週就是春天了，為什麼倉庫裡還堆滿冬季外套？我們要拿它們怎麼辦？ B：工廠生產的數量比我們訂的多很多，所以我們有大量的【過剩】庫存，經理打算把多出來的外套打折賣給暢貨中心。"
  },
  {
    "word": "residue",
    "pos": "n.",
    "cn_def": "殘留物",
    "en_def": "a small amount of a substance that stays after the rest is gone",
    "sentence": "A: The new coffee machine in the break room is making the coffee taste bitter, and I noticed a strange smell this morning; do you know why? B: The cleaning staff told me there is a brown {{BLANK}} inside the water tank, so we need to wash it carefully with special liquid before anyone uses it again.",
    "cn": "A：休息室的新咖啡機煮出來的咖啡很苦，而且我今天早上還聞到怪味，你知道為什麼嗎？ B：清潔人員告訴我水箱裡有咖啡色的【殘留物】，所以在任何人再使用之前，我們需要用特殊清潔液仔細清洗。"
  },
  {
    "word": "trace",
    "pos": "n.",
    "cn_def": "痕跡；蹤跡",
    "en_def": "a very small sign or amount showing that something was there",
    "sentence": "A: The security guard said someone entered the storage room last night, but did the police find any evidence of what happened there? B: They searched the room for two hours, but they couldn't find a single {{BLANK}} of the missing laptops, so they will review the camera footage from the parking lot tomorrow.",
    "cn": "A：警衛說昨晚有人進了儲藏室，警方有找到任何能說明當時發生什麼事的證據嗎？ B：他們搜查了兩個小時，卻找不到失蹤筆電的任何【蹤跡】，所以明天他們會檢查停車場的監視器畫面。"
  },
  {
    "word": "stay",
    "pos": "v.",
    "cn_def": "停留；留下",
    "en_def": "to continue to be in a place for a period of time",
    "sentence": "A: How long are you planning to {{BLANK}} in Tokyo for the electronics trade show, and have you already booked a hotel near the exhibition center? B: I'll be there for five nights, from Monday to Saturday, and my assistant reserved a room at a business hotel that is only a ten-minute walk from the main entrance.",
    "cn": "A：你打算為了電子展在東京【停留】多久？已經訂好展覽中心附近的飯店了嗎？ B：我會在那裡待五晚，從星期一到星期六，我的助理在一間商務飯店訂了房間，走路到主入口只要十分鐘。"
  },
  {
    "word": "remain",
    "pos": "v.",
    "cn_def": "保持；留在",
    "en_def": "to continue to be in the same place or state",
    "sentence": "A: The storm is getting stronger outside, so should all the employees go home now, or is it safer to wait here for a while? B: The building manager advised everyone to {{BLANK}} inside the office until the heavy rain stops, because several roads near the river have already been closed by the city government.",
    "cn": "A：外面的暴風雨越來越強，所有員工應該現在回家，還是在這裡等一下比較安全？ B：大樓管理員建議大家在大雨停止前【留在】辦公室裡，因為河邊有好幾條道路已經被市政府封閉了。"
  },
  {
    "word": "linger",
    "pos": "v.",
    "cn_def": "逗留；徘徊",
    "en_def": "to stay somewhere longer than necessary, often slowly",
    "sentence": "A: The museum closes at five, but I saw several visitors still walking around the gift shop at ten past five; is that normal? B: Yes, some people like to {{BLANK}} after the exhibition ends to buy postcards and souvenirs, so the guards usually wait about fifteen minutes before they politely ask everyone to leave.",
    "cn": "A：博物館五點關門，但我在五點十分還看到好幾位參觀者在禮品店裡走來走去，這正常嗎？ B：正常，有些人喜歡在展覽結束後【逗留】一下買明信片和紀念品，所以警衛通常會等大約十五分鐘，才禮貌地請大家離開。"
  },
  {
    "word": "persist",
    "pos": "v.",
    "cn_def": "持續；存留",
    "en_def": "to continue to exist or happen for a long time",
    "sentence": "A: The website has been loading very slowly since last night, and many customers are complaining that they can't finish their orders; what should we do? B: Please restart the main server first, and if the problems {{BLANK}} for more than an hour after that, call the technical support company and ask them to send an engineer today.",
    "cn": "A：網站從昨晚開始就跑得很慢，很多顧客抱怨無法完成訂單，我們該怎麼辦？ B：請先重新啟動主伺服器，如果之後問題【持續】超過一個小時，就打電話給技術支援公司，請他們今天派工程師過來。"
  },
  {
    "word": "southpaw",
    "pos": "n.",
    "cn_def": "左撇子（尤指拳擊手或投手）",
    "en_def": "a left-handed person, especially a boxer or baseball pitcher",
    "sentence": "A: Why did the coach of our company baseball team ask Kevin to pitch in tomorrow's game against the bank's team? B: Kevin is a {{BLANK}}, and the coach believes their batters will have trouble hitting balls thrown with the left hand, since they rarely practice against pitchers like him.",
    "cn": "A：為什麼我們公司棒球隊的教練要Kevin在明天對銀行隊的比賽中投球？ B：Kevin是個【左投手】，教練認為對方的打者很難打到用左手投出的球，因為他們很少練習對付像他這樣的投手。"
  },
  {
    "word": "lefthanded",
    "pos": "adj.",
    "cn_def": "慣用左手的；左撇子的",
    "en_def": "using the left hand more easily than the right hand",
    "sentence": "A: We're ordering new desks and computer mice for the design team next week; is there anything special I should know before I place the order? B: Yes, two of our designers are {{BLANK}}, so please order a couple of mice made for the left hand, and ask whether the desks can have drawers on either side.",
    "cn": "A：我們下週要為設計團隊訂購新桌子和電腦滑鼠，在下訂單之前有什麼特別需要知道的嗎？ B：有，我們有兩位設計師是【左撇子】，所以請訂幾個左手用的滑鼠，並問問桌子的抽屜能不能裝在任一邊。"
  },
  {
    "word": "leftward",
    "pos": "adv.",
    "cn_def": "向左",
    "en_def": "towards the left",
    "sentence": "A: The picture from the projector in the meeting room keeps going off the edge of the screen, so how do I put the image back in the center? B: Press the small arrow button on the remote control that moves the picture {{BLANK}}, and keep holding it for a few seconds until the image fits the screen properly.",
    "cn": "A：會議室投影機的畫面一直超出螢幕邊緣，我要怎麼把影像移回中間？ B：按遙控器上那個能把畫面【向左】移動的小箭頭按鈕，按住幾秒鐘，直到影像剛好符合螢幕為止。"
  },
  {
    "word": "leftmost",
    "pos": "adj.",
    "cn_def": "最左邊的",
    "en_def": "furthest to the left",
    "sentence": "A: Which checkout counter should I use if I only have a few items and want to pay quickly before my lunch break is over? B: Go to the {{BLANK}} counter near the entrance, because it's the express lane for customers with fewer than ten items, and there are usually only one or two people waiting there.",
    "cn": "A：如果我只有幾樣東西，想在午休結束前快點結帳，我應該去哪個結帳櫃台？ B：去入口附近【最左邊的】櫃台，因為那是給少於十件商品顧客的快速結帳道，通常只有一兩個人在排隊。"
  },
  {
    "word": "port",
    "pos": "n.",
    "cn_def": "左舷",
    "en_def": "the left side of a ship or aircraft when you face forward",
    "sentence": "A: The captain just announced something about the cruise ship's lifeboats, but I couldn't hear clearly because of the wind; what did he say? B: He said passengers in cabins on the {{BLANK}} side should go to the lifeboat stations on the left side of Deck Five for this afternoon's safety drill.",
    "cn": "A：船長剛剛廣播了關於郵輪救生艇的事，但風太大我聽不清楚，他說了什麼？ B：他說住在【左舷】那一側艙房的乘客，今天下午安全演習時要到五號甲板左側的救生艇集合站。"
  },
  {
    "word": "sinister",
    "pos": "adj.",
    "cn_def": "邪惡的；陰險的",
    "en_def": "seeming evil or dangerous",
    "sentence": "A: Did you watch the new mystery movie that everyone in the office has been talking about since it opened last weekend? B: Yes, I saw it with my sister on Saturday night, and the actor who plays the {{BLANK}} businessman was so frightening that I couldn't sleep well afterward, but the story was really exciting.",
    "cn": "A：你看了上週末上映後全辦公室都在討論的那部新推理電影嗎？ B：看了，我星期六晚上和姊姊一起去看的，演那個【陰險的】商人的演員太嚇人了，害我之後都睡不好，不過故事真的很精彩。"
  },
  {
    "word": "west",
    "pos": "n.",
    "cn_def": "西方；西邊",
    "en_def": "the direction where the sun goes down",
    "sentence": "A: Our new warehouse is outside the city, so which highway exit should the delivery drivers take to get there quickly from the airport? B: They should drive toward the {{BLANK}} on Highway 3 for about twenty kilometers, take Exit 15, and then follow the signs for the industrial park until they see our blue building.",
    "cn": "A：我們的新倉庫在市區外，送貨司機從機場出發要走哪個高速公路出口才能快點到？ B：他們應該沿著三號高速公路往【西】開大約二十公里，從十五號出口下去，然後跟著工業區的指標走，直到看見我們的藍色建築。"
  },
  {
    "word": "westward",
    "pos": "adv.",
    "cn_def": "向西",
    "en_def": "towards the west",
    "sentence": "A: Will the typhoon affect our flights to Hong Kong tomorrow, since several of our sales staff need to attend the conference there? B: The weather report says the storm is moving {{BLANK}} toward the mainland at about twenty kilometers per hour, so flights may be delayed in the morning but should be normal by the evening.",
    "cn": "A：颱風會影響我們明天飛香港的班機嗎？我們有好幾位業務人員要去那裡參加會議。 B：氣象報告說暴風正以每小時約二十公里的速度【向西】朝大陸移動，所以早上的班機可能會延誤，但到傍晚應該就正常了。"
  },
  {
    "word": "progressive",
    "pos": "adj.",
    "cn_def": "進步的；先進的",
    "en_def": "supporting new ideas and changes",
    "sentence": "A: Why do so many young engineers want to work for that software company, even though the salary is lower than at other firms? B: The company has very {{BLANK}} policies, such as flexible working hours, paid parental leave, and remote work options, so employees feel they can balance their careers and family lives.",
    "cn": "A：為什麼這麼多年輕工程師想去那家軟體公司上班，即使薪水比其他公司低？ B：那家公司的政策非常【進步】，例如彈性工時、帶薪育嬰假和遠距工作選項，所以員工覺得他們可以兼顧事業和家庭生活。"
  },
  {
    "word": "leftist",
    "pos": "n.",
    "cn_def": "左派人士",
    "en_def": "a person who supports left-wing political ideas",
    "sentence": "A: The newspaper interview with the new mayor was interesting, but why did the reporter keep asking about her political background? B: She was known as a {{BLANK}} when she was a university student, and many readers want to know whether her views on taxes and public services have changed since then.",
    "cn": "A：報紙對新市長的專訪很有意思，但記者為什麼一直問她的政治背景？ B：她讀大學時是有名的【左派人士】，很多讀者想知道她對稅收和公共服務的看法從那時候到現在有沒有改變。"
  },
  {
    "word": "leftwing",
    "pos": "adj.",
    "cn_def": "左派的；左翼的",
    "en_def": "supporting political ideas such as more public services and equality",
    "sentence": "A: I'm preparing a report on the coming election for our overseas clients; can you explain the main differences between the two largest parties? B: The {{BLANK}} party wants higher taxes on large companies to pay for public housing and healthcare, while the other party promises lower taxes and fewer rules for businesses.",
    "cn": "A：我正在為海外客戶準備一份關於即將到來的選舉的報告，你能解釋兩大黨的主要差異嗎？ B：【左翼】政黨希望對大企業加稅，用來支付社會住宅和醫療照護，而另一個政黨則承諾減稅並減少對企業的規範。"
  },
  {
    "word": "unused",
    "pos": "adj.",
    "cn_def": "未使用的",
    "en_def": "not used",
    "sentence": "A: We have a lot of {{BLANK}} office supplies in the storage room, including notebooks, pens, and old printer cartridges; should we throw them away? B: No, let's donate them to the elementary school near the station, because the teachers there said they need more materials for their students this semester.",
    "cn": "A：儲藏室裡有很多【沒用過的】辦公用品，包括筆記本、筆和舊的印表機墨水匣，我們應該丟掉嗎？ B：不要，我們把它們捐給車站附近的小學吧，因為那裡的老師說他們這學期需要更多學生用的材料。"
  },
  {
    "word": "vacant",
    "pos": "adj.",
    "cn_def": "空的；空缺的",
    "en_def": "empty; not being used or filled by anyone",
    "sentence": "A: The HR manager mentioned that there's a {{BLANK}} position in the accounting department; do you know if they are hiring from inside the company? B: Yes, they want to fill it with a current employee first, so you should send your résumé to the department head before the deadline next Friday.",
    "cn": "A：人資經理提到會計部有一個【空缺的】職位，你知道他們會從公司內部招募嗎？ B：知道，他們想先由現有員工來補，所以你應該在下週五截止日前把履歷寄給部門主管。"
  }
];

const MCQS = [
  {
    "q": "Our flight to Singapore departs at nine tomorrow morning. We need to _____ the hotel by six thirty to avoid the traffic.",
    "options": [
      "leave",
      "linger",
      "persist",
      "resign"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The express train to Kaohsiung will _____ from Platform 3 at exactly 10:15. Passengers are asked to board at least five minutes early.",
    "options": [
      "vacate",
      "depart",
      "abandon",
      "withdraw"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "In case of fire, please do not use the elevators. Follow the green signs to the nearest emergency _____ on each floor.",
    "options": [
      "surplus",
      "trace",
      "exit",
      "balance"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Because of rising costs and weak demand, the company decided to _____ its plan to build a second factory. The land will now be sold.",
    "options": [
      "linger",
      "depart",
      "remain",
      "abandon"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "After ten years of working long hours in sales, Peter Lin decided to _____ his job. He now runs a small café near the beach.",
    "options": [
      "quit",
      "linger",
      "persist",
      "depart"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The finance director announced that he will _____ from his position at the end of the year. The board is now searching for a replacement.",
    "options": [
      "linger",
      "resign",
      "persist",
      "vacate"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Customers can _____ up to fifty thousand dollars a day from any of our ATMs. Larger amounts must be requested at the counter.",
    "options": [
      "depart",
      "linger",
      "withdraw",
      "resign"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "All tenants must _____ their offices by March 31 so that the renovation work can begin. Storage boxes will be provided free of charge.",
    "options": [
      "persist",
      "linger",
      "remain",
      "vacate"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "By the time I reached the staff kitchen at noon, all the free sandwiches were _____. Someone had taken the last one ten minutes earlier.",
    "options": [
      "gone",
      "progressive",
      "sinister",
      "leftmost"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "We have sold most of the concert tickets already. The _____ seats are in the back row and cost only fifteen dollars each.",
    "options": [
      "sinister",
      "remaining",
      "progressive",
      "lefthanded"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Please put any _____ food from the lunch meeting in the staff refrigerator. Employees may take it home after five o'clock.",
    "options": [
      "sinister",
      "progressive",
      "leftover",
      "leftmost"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The first half of the payment is due when you sign the contract. The _____ must be paid within thirty days of delivery.",
    "options": [
      "exit",
      "trace",
      "port",
      "remainder"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Your account currently has a _____ of 2,500 dollars. You can check it at any time through our mobile banking app.",
    "options": [
      "balance",
      "exit",
      "port",
      "trace"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The factory produced far more umbrellas than stores ordered this season. The company will sell the _____ to discount outlets next month.",
    "options": [
      "exit",
      "surplus",
      "port",
      "trace"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "After the chemicals are removed, a thin white _____ often stays on the surface of the machines. Workers must wipe it off with a dry cloth.",
    "options": [
      "port",
      "exit",
      "residue",
      "balance"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The police searched the warehouse carefully but found no _____ of the stolen computers. They are now checking the security cameras nearby.",
    "options": [
      "port",
      "balance",
      "surplus",
      "trace"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Guests who wish to _____ an extra night at the hotel should inform the front desk before noon. Rooms are limited during the holiday season.",
    "options": [
      "stay",
      "quit",
      "resign",
      "abandon"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Passengers must _____ seated with their seat belts fastened until the plane stops completely. Please keep your phones in flight mode.",
    "options": [
      "depart",
      "remain",
      "resign",
      "withdraw"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "After the awards dinner ended, many guests chose to _____ in the hotel lobby, chatting with old friends. The staff waited patiently before closing.",
    "options": [
      "resign",
      "withdraw",
      "linger",
      "vacate"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "If the printer problem should _____ after you restart the machine, please call the IT help desk. A technician will come within an hour.",
    "options": [
      "depart",
      "resign",
      "vacate",
      "persist"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Our training room has twenty desks with writing surfaces on the right. Two desks are designed for _____ students who write with the other hand.",
    "options": [
      "lefthanded",
      "sinister",
      "progressive",
      "vacant"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Turn the steering wheel slightly _____ when you back out of the parking space. That way, you will not hit the pillar on your right.",
    "options": [
      "rarely",
      "leftward",
      "loudly",
      "politely"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "In the sales report, the product names are listed in the _____ column. The monthly figures appear in the columns to the right.",
    "options": [
      "sinister",
      "progressive",
      "leftmost",
      "lefthanded"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The cruise ship's lifeboats on the _____ side are painted orange. Those on the right side, or starboard, are painted yellow.",
    "options": [
      "residue",
      "surplus",
      "remainder",
      "port"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The new mystery film tells the story of a _____ businessman who secretly steals money from charities. Critics say the villain is truly frightening.",
    "options": [
      "sinister",
      "unused",
      "vacant",
      "lefthanded"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Our new branch office is located to the _____ of the city, near the coast. The sun sets right behind the building every evening.",
    "options": [
      "residue",
      "west",
      "remainder",
      "surplus"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The storm is moving _____ across the ocean at twenty kilometers per hour. It is expected to reach the coast of the mainland by Friday.",
    "options": [
      "loudly",
      "rarely",
      "westward",
      "kindly"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The company is known for its _____ policies, such as flexible hours and paid parental leave. Many young workers are eager to join it.",
    "options": [
      "sinister",
      "leftmost",
      "gone",
      "progressive"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Employees can carry up to five _____ vacation days into the next year. Any extra days will be lost on December 31.",
    "options": [
      "unused",
      "sinister",
      "leftmost",
      "progressive"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "There is currently a _____ position in the accounting department. Managers hope to fill it with someone from inside the company.",
    "options": [
      "sinister",
      "vacant",
      "lefthanded",
      "leftmost"
    ],
    "answer": 1,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "leave": {
    "pos": "v.",
    "en_def": "to go away from a place",
    "cn_def": "離開"
  },
  "depart": {
    "pos": "v.",
    "en_def": "to leave a place to start a trip",
    "cn_def": "出發；離開"
  },
  "exit": {
    "pos": "n.",
    "en_def": "a door or way out of a building or place",
    "cn_def": "出口"
  },
  "abandon": {
    "pos": "v.",
    "en_def": "to stop doing or planning something completely; to leave something forever",
    "cn_def": "放棄；拋棄"
  },
  "quit": {
    "pos": "v.",
    "en_def": "to stop doing something, especially to leave a job",
    "cn_def": "辭職；停止"
  },
  "resign": {
    "pos": "v.",
    "en_def": "to officially leave your job or position",
    "cn_def": "辭職"
  },
  "withdraw": {
    "pos": "v.",
    "en_def": "to take money out of a bank account; to pull back or out",
    "cn_def": "提領；撤回"
  },
  "vacate": {
    "pos": "v.",
    "en_def": "to leave a room or building so that others can use it",
    "cn_def": "騰出；搬出"
  },
  "gone": {
    "pos": "adj.",
    "en_def": "no longer there; used up",
    "cn_def": "不見了的；用完的"
  },
  "remaining": {
    "pos": "adj.",
    "en_def": "still left after the others have gone or been used",
    "cn_def": "剩下的"
  },
  "leftover": {
    "pos": "adj.",
    "en_def": "not used or eaten after the rest has been used",
    "cn_def": "剩下的；吃剩的"
  },
  "remainder": {
    "pos": "n.",
    "en_def": "the part of something that is still left",
    "cn_def": "剩餘部分"
  },
  "balance": {
    "pos": "n.",
    "en_def": "the amount of money still owed or still in an account",
    "cn_def": "餘額；尾款"
  },
  "surplus": {
    "pos": "n.",
    "en_def": "an amount that is more than what is needed",
    "cn_def": "過剩；盈餘"
  },
  "residue": {
    "pos": "n.",
    "en_def": "a small amount of a substance that stays after the rest is gone",
    "cn_def": "殘留物"
  },
  "trace": {
    "pos": "n.",
    "en_def": "a very small sign or amount showing that something was there",
    "cn_def": "痕跡；蹤跡"
  },
  "stay": {
    "pos": "v.",
    "en_def": "to continue to be in a place for a period of time",
    "cn_def": "停留；留下"
  },
  "remain": {
    "pos": "v.",
    "en_def": "to continue to be in the same place or state",
    "cn_def": "保持；留在"
  },
  "linger": {
    "pos": "v.",
    "en_def": "to stay somewhere longer than necessary, often slowly",
    "cn_def": "逗留；徘徊"
  },
  "persist": {
    "pos": "v.",
    "en_def": "to continue to exist or happen for a long time",
    "cn_def": "持續；存留"
  },
  "southpaw": {
    "pos": "n.",
    "en_def": "a left-handed person, especially a boxer or baseball pitcher",
    "cn_def": "左撇子（尤指拳擊手或投手）"
  },
  "lefthanded": {
    "pos": "adj.",
    "en_def": "using the left hand more easily than the right hand",
    "cn_def": "慣用左手的；左撇子的"
  },
  "leftward": {
    "pos": "adv.",
    "en_def": "towards the left",
    "cn_def": "向左"
  },
  "leftmost": {
    "pos": "adj.",
    "en_def": "furthest to the left",
    "cn_def": "最左邊的"
  },
  "port": {
    "pos": "n.",
    "en_def": "the left side of a ship or aircraft when you face forward",
    "cn_def": "左舷"
  },
  "sinister": {
    "pos": "adj.",
    "en_def": "seeming evil or dangerous",
    "cn_def": "邪惡的；陰險的"
  },
  "west": {
    "pos": "n.",
    "en_def": "the direction where the sun goes down",
    "cn_def": "西方；西邊"
  },
  "westward": {
    "pos": "adv.",
    "en_def": "towards the west",
    "cn_def": "向西"
  },
  "progressive": {
    "pos": "adj.",
    "en_def": "supporting new ideas and changes",
    "cn_def": "進步的；先進的"
  },
  "leftist": {
    "pos": "n.",
    "en_def": "a person who supports left-wing political ideas",
    "cn_def": "左派人士"
  },
  "leftwing": {
    "pos": "adj.",
    "en_def": "supporting political ideas such as more public services and equality",
    "cn_def": "左派的；左翼的"
  },
  "unused": {
    "pos": "adj.",
    "en_def": "not used",
    "cn_def": "未使用的"
  },
  "vacant": {
    "pos": "adj.",
    "en_def": "empty; not being used or filled by anyone",
    "cn_def": "空的；空缺的"
  }
};

const EXTRA_GLOSSES = {};
