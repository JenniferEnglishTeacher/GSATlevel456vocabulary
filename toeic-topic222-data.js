// Topic 222 Quiz Data: List 清單
// Source word list: https://www.examword.com/group-topic/list — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T222 - List 清單",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "extra",
    "pos": "adj.",
    "cn_def": "額外的；多餘的",
    "en_def": "more than the usual or expected amount",
    "sentence": "A: The client just asked for thirty more brochures for tomorrow's trade fair, so do we have enough paper left in the supply room downstairs? B: Yes, I ordered some {{BLANK}} boxes last week because I expected a busy month, so we can print everything this afternoon without any problem.",
    "cn": "A：客戶剛剛要求為明天的商展多準備三十份手冊，樓下的儲藏室還有足夠的紙嗎？ B：有，我上週多訂了幾箱【額外的】紙，因為我預期這個月會很忙，所以今天下午我們就能順利印完所有東西。"
  },
  {
    "word": "budget",
    "pos": "n.",
    "cn_def": "預算",
    "en_def": "a plan of how much money can be spent",
    "sentence": "A: Our team wants to hold the annual training workshop at a hotel downtown this year, but do you think the finance department will approve the plan? B: Probably not, because the {{BLANK}} for staff events was cut by twenty percent, so we should look for a cheaper meeting room near the office.",
    "cn": "A：我們團隊今年想在市中心的飯店舉辦年度培訓工作坊，你覺得財務部會核准這個計畫嗎？ B：大概不會，因為員工活動的【預算】被削減了百分之二十，所以我們應該在辦公室附近找一間比較便宜的會議室。"
  },
  {
    "word": "essential",
    "pos": "adj.",
    "cn_def": "必要的；不可或缺的",
    "en_def": "completely necessary; extremely important",
    "sentence": "A: I'm packing for the business trip to Singapore next week, and I'm not sure what I really need to bring for the three-day conference. B: Your passport and laptop are {{BLANK}}, but you can leave the heavy books at home because the organizers will give everyone printed notes at the registration desk.",
    "cn": "A：我正在為下週去新加坡的出差打包，不確定這次三天的研討會真正需要帶什麼。 B：護照和筆電是【必要的】，但那些很重的書可以留在家裡，因為主辦單位會在報到處發給每個人紙本講義。"
  },
  {
    "word": "unnecessary",
    "pos": "adj.",
    "cn_def": "不必要的",
    "en_def": "not needed",
    "sentence": "A: Should I print a copy of the sales report for every person who is coming to the meeting this afternoon, or is that too much paper? B: That would be {{BLANK}}, because everyone already received the file by email this morning, and we can simply show the charts on the big screen in the conference room.",
    "cn": "A：今天下午來開會的每個人，我都應該印一份銷售報告嗎？還是那樣太浪費紙？ B：那是【不必要的】，因為大家今天早上都已經收到電子郵件的檔案了，我們只要在會議室的大螢幕上顯示圖表就好。"
  },
  {
    "word": "minor",
    "pos": "adj.",
    "cn_def": "次要的；輕微的",
    "en_def": "small and not very important",
    "sentence": "A: I heard there was a problem with the new software system yesterday, so will we need to stop working while the technicians fix it? B: No, it was only a {{BLANK}} error in the printing function, and the IT team says they can repair it during lunch without affecting anyone's work.",
    "cn": "A：我聽說昨天新的軟體系統出了問題，技術人員修理的時候我們需要停工嗎？ B：不用，那只是列印功能的一個【小的】錯誤，資訊團隊說他們可以在午餐時間修好，不會影響任何人的工作。"
  },
  {
    "word": "groceries",
    "pos": "n.",
    "cn_def": "食品雜貨",
    "en_def": "food and other things bought at a supermarket",
    "sentence": "A: Since you're driving past the supermarket on your way home from the office tonight, could you stop and pick up a few things for dinner? B: Sure, just send me a short list, and I'll buy the {{BLANK}} after my last meeting, but I might be a little late because the store is usually crowded at six.",
    "cn": "A：既然你今晚下班回家會開車經過超市，可以順便停下來買一些晚餐要用的東西嗎？ B：當然，傳一張簡短的清單給我，我開完最後一場會就去買【食品雜貨】，不過可能會晚一點，因為那家店六點通常很擠。"
  },
  {
    "word": "divide",
    "pos": "v.",
    "cn_def": "分開；劃分",
    "en_def": "to separate something into parts or groups",
    "sentence": "A: We have twelve new interns starting on Monday, and I'm worried that one supervisor won't be able to train all of them properly. B: Let's {{BLANK}} them into three small groups, so each department manager can look after four interns and show them how our daily tasks work.",
    "cn": "A：週一有十二位新實習生要報到，我擔心一位主管沒辦法好好訓練他們全部。 B：我們把他們【分成】三個小組，這樣每位部門經理可以照顧四位實習生，並教他們我們的日常工作如何進行。"
  },
  {
    "word": "evaluate",
    "pos": "v.",
    "cn_def": "評估；評價",
    "en_def": "to study something carefully and judge how good it is",
    "sentence": "A: We received five different offers from suppliers for the new office chairs, but they all look quite similar on paper, so how should we choose? B: We should {{BLANK}} each offer carefully by comparing the price, the delivery time, and the warranty, and then we can present the best option to the manager on Friday.",
    "cn": "A：我們收到五家供應商對新辦公椅的不同報價，但書面上看起來都很相似，該怎麼選呢？ B：我們應該比較價格、交貨時間和保固，仔細【評估】每一份報價，然後在週五把最好的選項提交給經理。"
  },
  {
    "word": "wise",
    "pos": "adj.",
    "cn_def": "明智的",
    "en_def": "showing good judgment",
    "sentence": "A: My manager offered me a promotion in the Tokyo branch, but I would have to move there next month and leave my family behind for a while. B: It might be {{BLANK}} to talk with your family first and ask the company for more time, because a big decision like this shouldn't be made in a hurry.",
    "cn": "A：我的經理提供我東京分公司的升遷機會，但我下個月就必須搬過去，暫時離開家人。 B：先和家人談談，並請公司多給你一些時間，可能是【明智的】，因為像這樣的重大決定不應該匆忙做出。"
  },
  {
    "word": "accurate",
    "pos": "adj.",
    "cn_def": "準確的；精確的",
    "en_def": "correct and without mistakes",
    "sentence": "A: The customer complained that the numbers on her monthly bill were wrong, so could you check the account before I call her back this afternoon? B: I've already looked at it, and the total is {{BLANK}}, but she forgot that the late fee from last month was added to this bill, so I'll explain that to her.",
    "cn": "A：那位客戶抱怨她的月帳單上的數字有誤，我今天下午回電給她之前，你可以先查一下帳戶嗎？ B：我已經查過了，總金額是【準確的】，但她忘了上個月的滯納金加在這期帳單裡，所以我會向她解釋。"
  },
  {
    "word": "statistic",
    "pos": "n.",
    "cn_def": "統計數據",
    "en_def": "a number that shows a fact about something",
    "sentence": "A: The marketing director wants one strong number to put on the first slide of tomorrow's presentation to the new investors, so what do you suggest? B: The most impressive {{BLANK}} is that our online sales doubled in just six months, so let's show that in large letters with a simple chart beside it.",
    "cn": "A：行銷總監想在明天向新投資人簡報的第一張投影片上放一個有力的數字，你有什麼建議？ B：最令人印象深刻的【統計數據】是我們的網路銷售在短短六個月內翻倍，所以我們用大字呈現這一點，旁邊再附一張簡單的圖表。"
  },
  {
    "word": "effort",
    "pos": "n.",
    "cn_def": "努力；費力",
    "en_def": "hard work done to achieve something",
    "sentence": "A: How did your team finish the huge order for the hotel chain two days early when everyone thought it would be late? B: It took a lot of {{BLANK}}, because several workers stayed late every evening and the drivers made extra trips on the weekend to deliver everything on time.",
    "cn": "A：當大家都認為會延誤時，你們團隊怎麼提早兩天完成連鎖飯店的大訂單？ B：那花了很多【努力】，因為好幾位員工每晚都留下來加班，司機們週末也多跑了好幾趟，準時把所有東西送到。"
  },
  {
    "word": "wastage",
    "pos": "n.",
    "cn_def": "浪費；耗損",
    "en_def": "the amount of something that is wasted",
    "sentence": "A: The restaurant manager says we are throwing away too much food at the end of every night, so how can we change that? B: To reduce {{BLANK}}, we could order smaller amounts of fresh vegetables each morning and give the leftover bread to the shelter down the street before closing.",
    "cn": "A：餐廳經理說我們每晚打烊時丟掉太多食物，要怎麼改善呢？ B：為了減少【浪費】，我們可以每天早上訂少一點新鮮蔬菜，並在打烊前把剩下的麵包送到街尾的收容所。"
  },
  {
    "word": "handle",
    "pos": "v.",
    "cn_def": "處理；應付",
    "en_def": "to deal with a problem, task or situation",
    "sentence": "A: The phone has been ringing all morning with customers asking about the delayed shipment, and I really don't know what to tell them. B: Don't worry, I'll {{BLANK}} the calls for the next hour while you contact the shipping company and find out when the goods will finally arrive.",
    "cn": "A：整個早上電話響個不停，客戶都在問延誤的貨物，我真的不知道該怎麼回答他們。 B：別擔心，接下來一小時我來【處理】這些電話，你去聯絡貨運公司，查清楚貨物到底什麼時候會到。"
  },
  {
    "word": "obsessed",
    "pos": "adj.",
    "cn_def": "著迷的；過分在意的",
    "en_def": "thinking about something too much all the time",
    "sentence": "A: Why does our new designer keep changing the color of the company logo even though the client already said it looked perfect last week? B: She's a bit {{BLANK}} with small details, which is usually helpful, but this time I think we should tell her that the deadline is more important.",
    "cn": "A：為什麼我們的新設計師一直在改公司標誌的顏色，客戶上週明明已經說看起來很完美了？ B：她對小細節有點【著迷】，這通常是好事，但這次我想我們應該告訴她，截止期限比較重要。"
  },
  {
    "word": "overspend",
    "pos": "v.",
    "cn_def": "超支；花錢過多",
    "en_def": "to spend more money than you planned or can afford",
    "sentence": "A: The department spent almost all of its money for the year by September, so what are we going to do about the holiday party in December? B: We'll have to keep it simple this time, and next year we need to make sure we don't {{BLANK}} on travel and expensive dinners with clients early in the year.",
    "cn": "A：部門到九月時就幾乎花光了整年的經費，那十二月的節日派對該怎麼辦？ B：這次只能辦得簡單一點，明年我們必須確保年初不要在差旅和與客戶的昂貴晚餐上【超支】。"
  },
  {
    "word": "impulse",
    "pos": "n.",
    "cn_def": "衝動",
    "en_def": "a sudden wish to do something without thinking",
    "sentence": "A: Why did you buy that expensive coffee machine for the break room when we already had one that worked perfectly well? B: I saw it on sale at the electronics store during lunch and bought it on {{BLANK}}, but now I realize I should have asked the office manager first.",
    "cn": "A：休息室明明已經有一台運作良好的咖啡機，你為什麼又買了那台很貴的？ B：我午餐時在電器行看到它在特價，一時【衝動】就買了，但現在我才發覺應該先問過辦公室經理。"
  },
  {
    "word": "temptation",
    "pos": "n.",
    "cn_def": "誘惑",
    "en_def": "a strong wish to do or have something you should not",
    "sentence": "A: Do you ever find it difficult to stay healthy when there are free snacks and cakes in the office kitchen almost every afternoon? B: Yes, the {{BLANK}} is very strong around three o'clock when I'm tired, so I bring fruit from home and keep it on my desk instead.",
    "cn": "A：辦公室廚房幾乎每天下午都有免費零食和蛋糕，你會不會覺得很難保持健康？ B：會啊，下午三點左右我累的時候，那種【誘惑】非常強烈，所以我改從家裡帶水果放在桌上。"
  },
  {
    "word": "discipline",
    "pos": "n.",
    "cn_def": "自律；紀律",
    "en_def": "the ability to control yourself and keep doing what you should",
    "sentence": "A: How do you manage to finish your online accounting course while working full-time at the bank and taking care of two children? B: It takes a lot of {{BLANK}}, because I study for one hour every night after the kids go to bed, even when I feel tired or want to watch TV.",
    "cn": "A：你在銀行全職工作，又要照顧兩個孩子，是怎麼完成線上會計課程的？ B：那需要很強的【自律】，因為我每晚等孩子睡了之後都讀書一小時，即使覺得累或想看電視也一樣。"
  },
  {
    "word": "basic",
    "pos": "adj.",
    "cn_def": "基本的；基礎的",
    "en_def": "simple and at the first or most important level",
    "sentence": "A: The new receptionist starts tomorrow, but she has never used our booking system before, so how much training does she need? B: She only needs some {{BLANK}} computer skills, because the system is easy to learn, and I'll spend the first morning showing her how to make and change reservations.",
    "cn": "A：新的接待員明天開始上班，但她從來沒用過我們的訂位系統，她需要多少訓練？ B：她只需要一些【基本的】電腦技能，因為這個系統很好學，第一天上午我會教她如何新增和更改訂位。"
  },
  {
    "word": "splurge",
    "pos": "v.",
    "cn_def": "揮霍；大肆花錢",
    "en_def": "to spend a lot of money on something you enjoy",
    "sentence": "A: You've been saving money carefully for months, so what are you going to do with your year-end bonus from the company? B: I'm going to pay off my credit card first, but I also plan to {{BLANK}} on a nice dinner with my family at that new French restaurant downtown.",
    "cn": "A：你好幾個月來都很小心地存錢，那公司的年終獎金你打算怎麼用？ B：我會先繳清信用卡，但也打算【揮霍】一下，帶家人去市中心那家新開的法國餐廳吃頓大餐。"
  },
  {
    "word": "thriftily",
    "pos": "adv.",
    "cn_def": "節儉地",
    "en_def": "in a careful way that does not waste money",
    "sentence": "A: How did your small company survive last year when so many other shops in the neighborhood had to close because of rising rent? B: We lived very {{BLANK}}, buying used furniture, sharing an office with another business, and cutting every cost that did not help us serve our customers.",
    "cn": "A：去年附近很多店家因為房租上漲而倒閉，你們小公司是怎麼撐過來的？ B：我們過得非常【節儉】，買二手家具、和另一家公司共用辦公室，並刪減所有對服務客戶沒有幫助的開支。"
  },
  {
    "word": "hustle",
    "pos": "n.",
    "cn_def": "忙碌；喧囂",
    "en_def": "busy and noisy activity",
    "sentence": "A: Do you enjoy working at the downtown branch now that you've moved there from the small office in the suburbs? B: It's exciting, but the {{BLANK}} of the city center can be tiring, with crowded trains every morning and customers coming in nonstop until the bank closes.",
    "cn": "A：你從郊區的小辦公室調到市中心分行之後，喜歡在那裡工作嗎？ B：很刺激，但市中心的【忙碌喧囂】可能讓人很累，每天早上電車都很擠，客戶也一直不停地進來直到銀行關門。"
  },
  {
    "word": "bustle",
    "pos": "n.",
    "cn_def": "熙攘；忙亂",
    "en_def": "busy, noisy movement of many people",
    "sentence": "A: Why did the company decide to open its new café in the old train station instead of a quiet street near the park? B: The manager loves the constant {{BLANK}} of travelers rushing to catch their trains, because it means hundreds of hungry customers will pass the café every single hour.",
    "cn": "A：為什麼公司決定把新咖啡館開在舊火車站，而不是公園附近的安靜街道？ B：經理喜歡旅客趕火車時那種持續的【熙攘】，因為那代表每小時都有數百位飢餓的顧客經過咖啡館。"
  },
  {
    "word": "dumb",
    "pos": "adj.",
    "cn_def": "愚蠢的",
    "en_def": "stupid; not showing good thinking",
    "sentence": "A: I feel embarrassed about asking the IT department how to connect my laptop to the projector again, because they showed me last week. B: That's not a {{BLANK}} question at all, since the new system is confusing, and many people in our office have asked the same thing more than once.",
    "cn": "A：我又要問資訊部門怎麼把筆電接到投影機，覺得很不好意思，因為他們上週才教過我。 B：那根本不是個【愚蠢的】問題，因為新系統很複雜，我們辦公室很多人都問過同樣的事不只一次。"
  },
  {
    "word": "organize",
    "pos": "v.",
    "cn_def": "整理；組織；籌辦",
    "en_def": "to arrange things in a neat or planned way",
    "sentence": "A: The storage room is so messy that nobody can find the extra printer ink or the boxes of envelopes when we need them. B: Let's {{BLANK}} everything this Friday afternoon by putting labels on the shelves, so each item has its own place and new staff can find things easily.",
    "cn": "A：儲藏室亂到我們需要時沒人找得到多的印表機墨水或成盒的信封。 B：我們這週五下午來【整理】所有東西，在架子上貼標籤，讓每樣物品都有固定的位置，新員工也能輕鬆找到。"
  },
  {
    "word": "rush",
    "pos": "v.",
    "cn_def": "匆忙；趕",
    "en_def": "to do something too quickly",
    "sentence": "A: The report is due at five o'clock, and I still have three pages left to write, so should I just finish it as quickly as possible? B: Don't {{BLANK}}, because the director will notice any mistakes, and I'm sure she'll give you one more day if you explain the problem with the missing data.",
    "cn": "A：報告五點要交，我還有三頁沒寫，我是不是應該盡快趕完就好？ B：不要【匆忙行事】，因為主任會注意到任何錯誤，如果你說明資料缺漏的問題，我相信她會多給你一天。"
  },
  {
    "word": "bothersome",
    "pos": "adj.",
    "cn_def": "煩人的；惱人的",
    "en_def": "annoying and causing small problems",
    "sentence": "A: Are you still getting those phone calls from the company that wants to sell you new office printers every morning? B: Yes, they're really {{BLANK}}, because they always call when I'm in a meeting, so I've asked the receptionist to tell them politely that we're not interested.",
    "cn": "A：那家想賣你新辦公室印表機的公司還是每天早上打電話給你嗎？ B：對，真的很【煩人】，因為他們總是在我開會時打來，所以我已經請接待員禮貌地告訴他們我們沒有興趣。"
  },
  {
    "word": "clutter",
    "pos": "n.",
    "cn_def": "雜亂的東西",
    "en_def": "a lot of things lying around in an untidy way",
    "sentence": "A: Why does the manager want everyone to clean their desks before the visitors from head office arrive on Thursday morning? B: She thinks all the {{BLANK}} of old papers, empty cups, and broken pens makes the office look unprofessional, and she wants to make a good impression on the directors.",
    "cn": "A：為什麼經理要大家在總公司的訪客週四早上到之前清理桌面？ B：她認為那些舊文件、空杯子和壞掉的筆堆成的【雜亂物品】讓辦公室看起來很不專業，她想給主管們留下好印象。"
  },
  {
    "word": "handy",
    "pos": "adj.",
    "cn_def": "方便的；有用的",
    "en_def": "useful and easy to use",
    "sentence": "A: Do you really need to carry that small tool kit in your bag every time you visit a customer's office? B: Yes, it's very {{BLANK}}, because I often have to fix loose cables or open a printer cover, and it saves me from calling a technician for small jobs.",
    "cn": "A：你每次拜訪客戶辦公室，真的都需要在包包裡帶那套小工具組嗎？ B：需要，它非常【方便】，因為我常常要修理鬆脫的線路或打開印表機蓋，這讓我不必為了小事叫技術人員。"
  }
];

const MCQS = [
  {
    "q": "The hotel charges an _____ fee for guests who check out after noon. Please inform the front desk if you need more time.",
    "options": [
      "extra",
      "essential",
      "accurate",
      "obsessed"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The marketing team must stay within its _____ for the trade show. Any additional spending needs approval from the finance director.",
    "options": [
      "effort",
      "impulse",
      "budget",
      "clutter"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Good communication skills are _____ for anyone who works at the customer service desk. Applicants will be tested during the interview.",
    "options": [
      "dumb",
      "essential",
      "bothersome",
      "obsessed"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "To save time, please avoid _____ details in your weekly reports. The manager only wants the main results and next steps.",
    "options": [
      "accurate",
      "handy",
      "wise",
      "unnecessary"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The factory reported only a _____ delay this week, caused by a late delivery of parts. Production returned to normal by Wednesday.",
    "options": [
      "wise",
      "minor",
      "dumb",
      "handy"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Many employees order their _____ online during lunch breaks. The supermarket then delivers the food to their homes in the evening.",
    "options": [
      "groceries",
      "statistic",
      "wastage",
      "discipline"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The supervisor decided to _____ the large project into smaller tasks. Each team member is now responsible for one part.",
    "options": [
      "splurge",
      "overspend",
      "rush",
      "divide"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Every six months, managers _____ the performance of their staff. The results help the company decide on promotions and pay raises.",
    "options": [
      "divide",
      "splurge",
      "evaluate",
      "rush"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Booking flights early is a _____ decision during the busy holiday season. Prices often rise sharply in the final two weeks.",
    "options": [
      "wise",
      "bothersome",
      "obsessed",
      "dumb"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Please make sure all figures in the invoice are _____ before sending it. Mistakes could delay payment from the client.",
    "options": [
      "obsessed",
      "extra",
      "accurate",
      "handy"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The report includes one surprising _____ about our customers: sixty percent now shop on their phones. The sales team was very interested.",
    "options": [
      "temptation",
      "statistic",
      "clutter",
      "impulse"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The office move was completed on time thanks to the _____ of the whole staff. The director thanked everyone at Monday's meeting.",
    "options": [
      "budget",
      "wastage",
      "impulse",
      "effort"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The restaurant introduced smaller portions to cut food _____. As a result, it saved money and threw away less every night.",
    "options": [
      "discipline",
      "wastage",
      "statistic",
      "effort"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Our assistant manager will _____ all customer complaints while the director is away. Please forward any difficult emails to her.",
    "options": [
      "handle",
      "divide",
      "splurge",
      "overspend"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Some employees become _____ with checking their email, even on weekends. Experts suggest turning off notifications after work hours.",
    "options": [
      "accurate",
      "essential",
      "unnecessary",
      "obsessed"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Families often _____ during the holiday season and then struggle to pay their bills. Making a shopping list can help prevent this.",
    "options": [
      "evaluate",
      "organize",
      "overspend",
      "divide"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Stores place small items near the checkout to encourage _____ buying. Customers often add candy or magazines without planning to.",
    "options": [
      "impulse",
      "budget",
      "effort",
      "clutter"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Working from home brings the _____ to watch TV instead of working. Setting a clear schedule helps employees stay focused.",
    "options": [
      "statistic",
      "wastage",
      "temptation",
      "budget"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Saving part of every paycheck requires great _____ and patience. Our adviser recommends an automatic monthly transfer to a savings account.",
    "options": [
      "clutter",
      "discipline",
      "wastage",
      "temptation"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "All new employees receive _____ safety training on their first day. More advanced courses are offered later for machine operators.",
    "options": [
      "dumb",
      "bothersome",
      "obsessed",
      "basic"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "After finishing the difficult project, the team decided to _____ on a dinner at an expensive restaurant. The company paid half the bill.",
    "options": [
      "divide",
      "splurge",
      "evaluate",
      "handle"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The small business survived the difficult year by spending _____ and avoiding loans. Its owner now teaches others how to manage money.",
    "options": [
      "thriftily",
      "rudely",
      "nervously",
      "loudly"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Many workers enjoy the _____ and bustle of the city during the day. On weekends, however, they prefer quiet trips to the countryside.",
    "options": [
      "clutter",
      "impulse",
      "budget",
      "hustle"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The hotel lobby was full of noise and _____ as two tour groups arrived together. The staff worked quickly to check everyone in.",
    "options": [
      "wastage",
      "discipline",
      "bustle",
      "statistic"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Forgetting to save the file before the computer shut down was a _____ mistake. Now the assistant must type the whole report again.",
    "options": [
      "dumb",
      "wise",
      "essential",
      "accurate"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The events team will _____ a farewell party for the retiring director next Friday. All staff members are invited to attend.",
    "options": [
      "divide",
      "overspend",
      "organize",
      "evaluate"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Please don't _____ through the safety checklist before starting the machines. Missing a single step could cause a serious accident.",
    "options": [
      "splurge",
      "rush",
      "divide",
      "handle"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The constant noise from the construction site next door is very _____ for our staff. Management has asked the builders to start later.",
    "options": [
      "accurate",
      "essential",
      "wise",
      "bothersome"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Please remove the _____ from your desk before the cleaners arrive tonight. Old papers should go in the recycling bins by the door.",
    "options": [
      "budget",
      "clutter",
      "statistic",
      "temptation"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "This small travel adapter is very _____ when you visit offices overseas. It fits most power outlets in Asia and Europe.",
    "options": [
      "handy",
      "obsessed",
      "dumb",
      "minor"
    ],
    "answer": 0,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "extra": {
    "pos": "adj.",
    "en_def": "more than the usual or expected amount",
    "cn_def": "額外的；多餘的"
  },
  "budget": {
    "pos": "n.",
    "en_def": "a plan of how much money can be spent",
    "cn_def": "預算"
  },
  "essential": {
    "pos": "adj.",
    "en_def": "completely necessary; extremely important",
    "cn_def": "必要的；不可或缺的"
  },
  "unnecessary": {
    "pos": "adj.",
    "en_def": "not needed",
    "cn_def": "不必要的"
  },
  "minor": {
    "pos": "adj.",
    "en_def": "small and not very important",
    "cn_def": "次要的；輕微的"
  },
  "groceries": {
    "pos": "n.",
    "en_def": "food and other things bought at a supermarket",
    "cn_def": "食品雜貨"
  },
  "divide": {
    "pos": "v.",
    "en_def": "to separate something into parts or groups",
    "cn_def": "分開；劃分"
  },
  "evaluate": {
    "pos": "v.",
    "en_def": "to study something carefully and judge how good it is",
    "cn_def": "評估；評價"
  },
  "wise": {
    "pos": "adj.",
    "en_def": "showing good judgment",
    "cn_def": "明智的"
  },
  "accurate": {
    "pos": "adj.",
    "en_def": "correct and without mistakes",
    "cn_def": "準確的；精確的"
  },
  "statistic": {
    "pos": "n.",
    "en_def": "a number that shows a fact about something",
    "cn_def": "統計數據"
  },
  "effort": {
    "pos": "n.",
    "en_def": "hard work done to achieve something",
    "cn_def": "努力；費力"
  },
  "wastage": {
    "pos": "n.",
    "en_def": "the amount of something that is wasted",
    "cn_def": "浪費；耗損"
  },
  "handle": {
    "pos": "v.",
    "en_def": "to deal with a problem, task or situation",
    "cn_def": "處理；應付"
  },
  "obsessed": {
    "pos": "adj.",
    "en_def": "thinking about something too much all the time",
    "cn_def": "著迷的；過分在意的"
  },
  "overspend": {
    "pos": "v.",
    "en_def": "to spend more money than you planned or can afford",
    "cn_def": "超支；花錢過多"
  },
  "impulse": {
    "pos": "n.",
    "en_def": "a sudden wish to do something without thinking",
    "cn_def": "衝動"
  },
  "temptation": {
    "pos": "n.",
    "en_def": "a strong wish to do or have something you should not",
    "cn_def": "誘惑"
  },
  "discipline": {
    "pos": "n.",
    "en_def": "the ability to control yourself and keep doing what you should",
    "cn_def": "自律；紀律"
  },
  "basic": {
    "pos": "adj.",
    "en_def": "simple and at the first or most important level",
    "cn_def": "基本的；基礎的"
  },
  "splurge": {
    "pos": "v.",
    "en_def": "to spend a lot of money on something you enjoy",
    "cn_def": "揮霍；大肆花錢"
  },
  "thriftily": {
    "pos": "adv.",
    "en_def": "in a careful way that does not waste money",
    "cn_def": "節儉地"
  },
  "hustle": {
    "pos": "n.",
    "en_def": "busy and noisy activity",
    "cn_def": "忙碌；喧囂"
  },
  "bustle": {
    "pos": "n.",
    "en_def": "busy, noisy movement of many people",
    "cn_def": "熙攘；忙亂"
  },
  "dumb": {
    "pos": "adj.",
    "en_def": "stupid; not showing good thinking",
    "cn_def": "愚蠢的"
  },
  "organize": {
    "pos": "v.",
    "en_def": "to arrange things in a neat or planned way",
    "cn_def": "整理；組織；籌辦"
  },
  "rush": {
    "pos": "v.",
    "en_def": "to do something too quickly",
    "cn_def": "匆忙；趕"
  },
  "bothersome": {
    "pos": "adj.",
    "en_def": "annoying and causing small problems",
    "cn_def": "煩人的；惱人的"
  },
  "clutter": {
    "pos": "n.",
    "en_def": "a lot of things lying around in an untidy way",
    "cn_def": "雜亂的東西"
  },
  "handy": {
    "pos": "adj.",
    "en_def": "useful and easy to use",
    "cn_def": "方便的；有用的"
  }
};

const EXTRA_GLOSSES = {};
