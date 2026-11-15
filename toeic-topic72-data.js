// Topic 72 Quiz Data: Complaint Letter 投訴信
// Source word list: https://www.examword.com/group-topic/complaint-letter — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T72 - Complaint Letter 投訴信",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "dissatisfied",
    "pos": "adj.",
    "cn_def": "不滿意的",
    "en_def": "not happy with something",
    "sentence": "A: Why did the hotel manager call a meeting with all the front desk staff early this morning before the guests came down for breakfast? B: Several guests wrote online reviews saying they were {{BLANK}} with the slow check-in last weekend, so she wants everyone to learn the new computer system before the holiday rush.",
    "cn": "A：飯店經理為什麼今天一大早、在房客下樓吃早餐前，就召集所有櫃檯人員開會？ B：好幾位房客在網路上留下評論，說他們對上週末緩慢的入住手續感到【不滿意】，所以她希望大家在假期旺季前學會新的電腦系統。"
  },
  {
    "word": "issue",
    "pos": "n.",
    "cn_def": "問題；議題",
    "en_def": "a problem that people need to deal with",
    "sentence": "A: Have you heard back from the software company about the problem with our online booking page that keeps crashing? B: Yes, their technician called this morning and said the {{BLANK}} was caused by an old update, and he promised to fix it before our busy weekend sale begins on Friday.",
    "cn": "A：你有收到軟體公司的回覆嗎？關於我們線上訂位頁面一直當機的問題。 B：有，他們的技術人員今天早上打電話來，說這個【問題】是一次舊的更新造成的，並承諾會在星期五週末大特賣開始前修好。"
  },
  {
    "word": "problem",
    "pos": "n.",
    "cn_def": "問題",
    "en_def": "something that is wrong and needs to be fixed",
    "sentence": "A: Why are so many customers calling the help desk today instead of using the mobile app to pay their bills? B: There is a {{BLANK}} with the payment page, so people cannot finish their transactions, and our IT team has been working on it since eight o'clock this morning.",
    "cn": "A：為什麼今天這麼多顧客打電話到服務台，而不是用手機應用程式繳費？ B：付款頁面出了【問題】，所以大家無法完成交易，我們的資訊團隊從今天早上八點就一直在處理。"
  },
  {
    "word": "defective",
    "pos": "adj.",
    "cn_def": "有瑕疵的；有缺陷的",
    "en_def": "not made correctly; not working properly",
    "sentence": "A: Why did the electronics store take all the new coffee machines off the shelves just two days after they arrived? B: The manufacturer discovered that some of the heating parts were {{BLANK}} and could get too hot, so every store was told to send the machines back for safety checks.",
    "cn": "A：電器行為什麼在新咖啡機到貨才兩天，就把它們全部下架？ B：製造商發現部分加熱零件有【瑕疵】，可能會過熱，所以每家店都被要求把機器送回去做安全檢查。"
  },
  {
    "word": "damage",
    "pos": "v.",
    "cn_def": "損壞；損害",
    "en_def": "to harm or break something",
    "sentence": "A: Why does the moving company want us to pack all the computers in special boxes before Saturday? B: They said the trucks often shake on the mountain roads to the new office, and the heavy movement could {{BLANK}} the screens, so the extra protection will save us money on repairs.",
    "cn": "A：搬家公司為什麼要我們在星期六前把所有電腦裝進特殊的箱子裡？ B：他們說卡車在通往新辦公室的山路上常常晃動，劇烈的震動可能會【損壞】螢幕，所以多一層保護能幫我們省下維修費。"
  },
  {
    "word": "damaged",
    "pos": "adj.",
    "cn_def": "受損的；損壞的",
    "en_def": "harmed or broken",
    "sentence": "A: Why is the receptionist taking photos of the boxes that just arrived from our supplier in Vietnam? B: Two of the boxes look {{BLANK}} on the corners, and some of the glass cups inside might be broken, so she needs pictures to send to the supplier along with our complaint.",
    "cn": "A：接待員為什麼在拍剛從越南供應商送來的箱子？ B：其中兩個箱子的邊角看起來【受損】了，裡面有些玻璃杯可能破了，所以她需要照片，連同我們的投訴一起寄給供應商。"
  },
  {
    "word": "delay",
    "pos": "n.",
    "cn_def": "延誤；耽擱",
    "en_def": "a time when something happens later than planned",
    "sentence": "A: Why did the manager send an email to all the customers who ordered the new office chairs last month? B: There was a long {{BLANK}} at the port because of a storm, so the chairs will arrive two weeks later than planned, and she wanted to explain it before people started calling.",
    "cn": "A：經理為什麼寄電子郵件給上個月訂購新辦公椅的所有顧客？ B：港口因為暴風雨出現長時間【延誤】，所以椅子會比原定時間晚兩週到貨，她想在大家開始打電話來之前先說明。"
  },
  {
    "word": "late",
    "pos": "adj.",
    "cn_def": "遲的；晚的",
    "en_def": "arriving or happening after the expected time",
    "sentence": "A: Why does the customer at the counter look so angry, and why does he keep showing everyone his phone? B: His furniture order was supposed to arrive last Monday, but the truck came four days {{BLANK}}, and he had to take another day off work to wait at home for the drivers.",
    "cn": "A：櫃檯那位顧客為什麼看起來這麼生氣，還一直給大家看他的手機？ B：他訂的家具原本上週一就該送到，但貨車【晚】了四天才來，他還得再請一天假在家等司機。"
  },
  {
    "word": "incorrect",
    "pos": "adj.",
    "cn_def": "不正確的；錯誤的",
    "en_def": "not right; wrong",
    "sentence": "A: Why did the accounting department send the monthly bill back to the cleaning company this afternoon? B: The bill showed the wrong number of hours, and the total was {{BLANK}} by almost three hundred dollars, so they asked the company to check its records and send a new one.",
    "cn": "A：會計部門今天下午為什麼把月帳單退回給清潔公司？ B：帳單上的時數錯了，總金額【不正確】，差了將近三百美元，所以他們請公司核對紀錄並重寄一份。"
  },
  {
    "word": "error",
    "pos": "n.",
    "cn_def": "錯誤",
    "en_def": "a mistake",
    "sentence": "A: Why did hundreds of customers receive two copies of the same bill from the phone company this month? B: A computer {{BLANK}} in the billing system sent every message twice, and the company has already posted an apology on its website and promised that no one will pay extra.",
    "cn": "A：為什麼這個月有好幾百位顧客收到電信公司寄來兩份相同的帳單？ B：帳務系統的電腦【錯誤】讓每封訊息都寄了兩次，公司已經在網站上公告道歉，並承諾不會有人多付錢。"
  },
  {
    "word": "poor service",
    "pos": "n.phr.",
    "cn_def": "服務差；服務不佳",
    "en_def": "service that is slow, rude or of low quality",
    "sentence": "A: Why did the company decide to stop holding its annual dinner at that famous hotel downtown this year? B: Last year the waiters were rude, the food came out cold, and many guests complained about the {{BLANK}}, so the planning team chose a smaller restaurant with much better reviews.",
    "cn": "A：公司今年為什麼決定不再在市中心那家知名飯店舉辦年度晚宴？ B：去年服務生很沒禮貌，餐點上桌時都是冷的，許多賓客抱怨【服務很差】，所以籌備小組選了一家評價好得多的小餐廳。"
  },
  {
    "word": "customer service",
    "pos": "n.phr.",
    "cn_def": "客戶服務；客服",
    "en_def": "the part of a company that helps customers with questions and problems",
    "sentence": "A: My new laptop keeps turning off by itself, and I bought it only last week, so what should I do now? B: You should call the store's {{BLANK}} number on the back of your receipt, because they usually offer free checks and can tell you whether you need to return it.",
    "cn": "A：我的新筆電一直自己關機，而且上週才買的，我現在該怎麼辦？ B：你應該打收據背面那家店的【客服】電話，因為他們通常提供免費檢測，也能告訴你是否需要退貨。"
  },
  {
    "word": "refund",
    "pos": "n.",
    "cn_def": "退款",
    "en_def": "money that is paid back to you",
    "sentence": "A: Did the airline do anything for you after it cancelled your flight to Tokyo at the last minute? B: Yes, after I filled out a form online, they gave me a full {{BLANK}} for the ticket, and they also paid for my hotel room near the airport that night.",
    "cn": "A：航空公司在最後一刻取消你飛東京的班機後，有為你做些什麼嗎？ B：有，我在網路上填完表格後，他們全額【退款】機票錢，還支付我那晚機場附近的飯店房間費用。"
  },
  {
    "word": "replace",
    "pos": "v.",
    "cn_def": "更換；替換",
    "en_def": "to put a new thing in the place of an old or broken one",
    "sentence": "A: The printer in the sales office has broken down three times this month, so what are we going to do about it? B: The office manager has decided to {{BLANK}} it with a faster model next week, because paying for repairs again and again costs more than buying a new one.",
    "cn": "A：業務辦公室的印表機這個月已經壞了三次，我們打算怎麼處理？ B：辦公室經理決定下週把它【換成】速度更快的機型，因為一再付維修費比買新的還貴。"
  },
  {
    "word": "replacement",
    "pos": "n.",
    "cn_def": "替換品；更換",
    "en_def": "a new thing that takes the place of an old or broken one",
    "sentence": "A: What happened when you told the online shop that the blender you received had a broken glass jar? B: They said sorry and sent me a {{BLANK}} by express mail the next day, and they told me I could keep the broken one because returning it would be too much trouble.",
    "cn": "A：你告訴網路商店收到的果汁機玻璃杯破了之後，結果怎樣？ B：他們道了歉，隔天就用快遞寄來一台【替換品】，還說壞掉那台我可以留著，因為寄回去太麻煩了。"
  },
  {
    "word": "repair",
    "pos": "v.",
    "cn_def": "修理；修復",
    "en_def": "to fix something that is broken",
    "sentence": "A: Why are there workers on the roof of the office building, and why is part of the parking lot closed today? B: The heavy rain last week caused a leak above the meeting room, so the building owner hired a team to {{BLANK}} the roof before the next storm arrives.",
    "cn": "A：辦公大樓屋頂上為什麼有工人，而且今天部分停車場也封閉了？ B：上週的大雨讓會議室上方漏水，所以大樓業主請了一組人在下一場暴風雨來之前【修理】屋頂。"
  },
  {
    "word": "compensation",
    "pos": "n.",
    "cn_def": "賠償；補償",
    "en_def": "money paid to someone because of a loss or problem",
    "sentence": "A: Did the travel agency do anything after your tour group waited at the airport for six hours with no bus? B: After many of us wrote letters, the agency offered each traveler two hundred dollars as {{BLANK}} and a free day trip on our next holiday with them.",
    "cn": "A：你們旅行團在機場等了六個小時都沒有巴士，旅行社後來有做什麼嗎？ B：在我們很多人寫信之後，旅行社給每位旅客兩百美元作為【賠償】，並在下次跟他們出遊時免費招待一日遊。"
  },
  {
    "word": "solution",
    "pos": "n.",
    "cn_def": "解決辦法",
    "en_def": "a way to solve a problem",
    "sentence": "A: Our customers keep complaining that they wait too long on the phone, so has the team found any way to help? B: Yes, the best {{BLANK}} we found is to add an online chat service, so simple questions can be answered quickly while staff on the phones handle the harder problems.",
    "cn": "A：顧客一直抱怨電話等太久，團隊有找到任何改善方法嗎？ B：有，我們找到最好的【解決辦法】是增加線上聊天服務，這樣簡單的問題能很快回覆，電話客服人員則處理較困難的問題。"
  },
  {
    "word": "resolve",
    "pos": "v.",
    "cn_def": "解決",
    "en_def": "to find an answer to a problem or end a disagreement",
    "sentence": "A: How long does your team usually need to deal with a customer's complaint after it comes in by email? B: Our goal is to {{BLANK}} most complaints within forty-eight hours, but if a case needs a visit from a technician, it can take up to a week to finish.",
    "cn": "A：顧客的投訴透過電子郵件進來後，你們團隊通常需要多久處理？ B：我們的目標是在四十八小時內【解決】大部分的投訴，但如果需要技術人員到府，可能要花一週才能完成。"
  },
  {
    "word": "request",
    "pos": "n.",
    "cn_def": "要求；請求",
    "en_def": "the act of politely asking for something",
    "sentence": "A: Why did the hotel move the businessman in room 512 to a different floor this afternoon? B: He made a {{BLANK}} for a quieter room because of the construction noise next door, and since he stays with us every month, the manager wanted to keep him happy.",
    "cn": "A：飯店今天下午為什麼把512號房的商務客換到別的樓層？ B：因為隔壁施工噪音，他提出換到較安靜房間的【要求】，而且他每個月都住我們這裡，經理想讓他滿意。"
  },
  {
    "word": "regret",
    "pos": "v.",
    "cn_def": "遺憾；後悔",
    "en_def": "to feel sorry about something",
    "sentence": "A: How did the furniture company answer the angry letter you sent about the broken table they delivered? B: The manager wrote that they {{BLANK}} the trouble it caused us, and she promised that a new table would be delivered by Friday along with a gift card for our next purchase.",
    "cn": "A：家具公司怎麼回覆你寄去抱怨他們送來的桌子壞掉的那封信？ B：經理寫說他們對造成我們的困擾深感【遺憾】，並承諾星期五前會送來一張新桌子，還附上下次購物可用的禮物卡。"
  },
  {
    "word": "disappointed",
    "pos": "adj.",
    "cn_def": "失望的",
    "en_def": "sad because something was not as good as you hoped",
    "sentence": "A: How did the guests feel about the resort after the long trip to the island last weekend? B: Many of them were {{BLANK}} because the swimming pool was closed for cleaning and the sea view rooms they booked were not ready, so the manager offered them free dinners.",
    "cn": "A：上週末長途跋涉到島上後，賓客們對度假村感覺如何？ B：很多人都很【失望】，因為游泳池關閉清潔，而他們訂的海景房也還沒準備好，所以經理請他們免費吃晚餐。"
  },
  {
    "word": "unsatisfactory",
    "pos": "adj.",
    "cn_def": "不令人滿意的；不夠好的",
    "en_def": "not good enough",
    "sentence": "A: Why did the company decide not to sign a new contract with the cleaning service this year? B: The quality of their work was {{BLANK}} for several months, with dirty floors and empty soap bottles in the restrooms, so the office manager found a more reliable team.",
    "cn": "A：公司今年為什麼決定不和清潔公司續約？ B：他們好幾個月的工作品質都【不令人滿意】，地板髒、廁所的洗手乳瓶也是空的，所以辦公室經理找了更可靠的團隊。"
  },
  {
    "word": "inconvenience",
    "pos": "n.",
    "cn_def": "不便；麻煩",
    "en_def": "trouble or difficulty that makes things less easy",
    "sentence": "A: Why is the elevator closed today, and what should visitors who can't use the stairs do? B: It is being checked for safety until four o'clock, and the building manager has put up a sign to say sorry for the {{BLANK}} and to tell visitors to use the service elevator at the back.",
    "cn": "A：電梯今天為什麼停用？無法走樓梯的訪客該怎麼辦？ B：電梯在做安全檢查到四點，大樓管理員貼了告示，為造成的【不便】致歉，並請訪客使用後面的貨梯。"
  },
  {
    "word": "apology",
    "pos": "n.",
    "cn_def": "道歉",
    "en_def": "words that say you are sorry",
    "sentence": "A: Did the restaurant do anything after the waiter dropped a bowl of soup on your new suit last night? B: The manager came to our table right away, gave me a sincere {{BLANK}}, paid for the dry cleaning, and also took the cost of our whole dinner off the bill.",
    "cn": "A：昨晚服務生把一碗湯打翻在你的新西裝上，餐廳有做什麼嗎？ B：經理馬上來到我們桌邊，誠懇地向我【道歉】，支付了乾洗費，還把我們整頓晚餐的費用從帳單上扣掉。"
  },
  {
    "word": "apologize",
    "pos": "v.",
    "cn_def": "道歉",
    "en_def": "to say that you are sorry",
    "sentence": "A: What should I say to the customer whose package was sent to the wrong address twice this month? B: First, you should {{BLANK}} for our mistake and listen to her carefully, and then offer her free shipping on her next purchase, because we really don't want to lose a loyal customer.",
    "cn": "A：這位顧客的包裹這個月兩度被送錯地址，我該怎麼跟她說？ B：首先，你應該為我們的錯誤【道歉】並仔細聆聽她說的話，然後提供她下次購物免運費，因為我們真的不想失去一位忠實顧客。"
  },
  {
    "word": "contact",
    "pos": "v.",
    "cn_def": "聯絡",
    "en_def": "to call, write to or email someone",
    "sentence": "A: I've been waiting for the online store to send my office supplies for almost two weeks now, so what should I do? B: You should {{BLANK}} them by email and include your receipt number, because they usually answer within one working day and can check where the package is.",
    "cn": "A：我等網路商店寄辦公用品已經快兩週了，我該怎麼辦？ B：你應該寫電子郵件【聯絡】他們並附上收據編號，因為他們通常一個工作天內會回覆，也能查詢包裹在哪裡。"
  },
  {
    "word": "respond",
    "pos": "v.",
    "cn_def": "回覆；回應",
    "en_def": "to answer or reply",
    "sentence": "A: How quickly does our company expect the support team to answer complaints that come in through the website? B: The rule is that staff must {{BLANK}} to every message within twenty-four hours, even on weekends, because customers become angrier when they feel that nobody is listening to them.",
    "cn": "A：公司希望支援團隊多快回覆網站上收到的投訴？ B：規定是員工必須在二十四小時內【回覆】每一則訊息，即使是週末也一樣，因為顧客覺得沒人理會時會更生氣。"
  },
  {
    "word": "prompt",
    "pos": "adj.",
    "cn_def": "迅速的；及時的",
    "en_def": "done quickly, without waiting",
    "sentence": "A: Why did that customer write such a nice review about our repair center on the website last night? B: She was happy with our {{BLANK}} reply, because her washing machine broke on Sunday morning and our technician fixed it in her home before dinner the same day.",
    "cn": "A：那位顧客昨晚為什麼在網站上給我們維修中心那麼好的評論？ B：她很滿意我們【迅速】的回應，因為她的洗衣機星期天早上壞了，我們的技術人員當天晚餐前就到她家修好了。"
  },
  {
    "word": "immediately",
    "pos": "adv.",
    "cn_def": "立刻；馬上",
    "en_def": "at once; right now",
    "sentence": "A: What happened when the guest in room 304 called the front desk to say that the water in his bathroom was leaking onto the floor? B: The manager sent a plumber {{BLANK}}, and she also moved the guest to a bigger room with a city view so that he could get some sleep.",
    "cn": "A：304號房的房客打電話到櫃檯說浴室的水漏到地板上，結果怎樣？ B：經理【立刻】派了水電工過去，還把房客換到一間有市景的較大房間，讓他能好好睡覺。"
  },
  {
    "word": "investigate",
    "pos": "v.",
    "cn_def": "調查",
    "en_def": "to try to find out the facts about something",
    "sentence": "A: Several customers say they were charged twice for the same meal at our downtown branch, so what is the head office doing about it? B: They have asked the finance team to {{BLANK}} the payment records from last month, and anyone who paid too much will get their money back.",
    "cn": "A：好幾位顧客說他們在我們市中心分店同一餐被扣款兩次，總公司打算怎麼處理？ B：他們已經請財務團隊【調查】上個月的付款紀錄，任何多付錢的人都會拿回退款。"
  },
  {
    "word": "clarify",
    "pos": "v.",
    "cn_def": "釐清；澄清",
    "en_def": "to make something clearer or easier to understand",
    "sentence": "A: Why did the sales manager call the customer again after she had already answered his long email this morning? B: Some parts of his message were confusing, so she wanted to {{BLANK}} exactly which items were missing from the box before sending the new ones by express delivery.",
    "cn": "A：業務經理今天早上已經回覆那位顧客的長篇郵件了，為什麼又打電話給他？ B：他的訊息有些部分讓人困惑，所以她想在用快遞寄出新品前，【釐清】箱子裡到底少了哪些品項。"
  },
  {
    "word": "evidence",
    "pos": "n.",
    "cn_def": "證據；證明",
    "en_def": "facts or things that show something is true",
    "sentence": "A: The insurance company says it needs more information before it pays for our broken shop window, so what should we send them? B: We should give them some {{BLANK}}, such as the photos from the security camera and the police report, to show that the window was broken during the storm.",
    "cn": "A：保險公司說在理賠我們店破掉的櫥窗之前需要更多資料，我們該寄什麼給他們？ B：我們應該提供一些【證據】，例如監視器的照片和報案紀錄，證明窗戶是在暴風雨期間破掉的。"
  },
  {
    "word": "receipt",
    "pos": "n.",
    "cn_def": "收據",
    "en_def": "a piece of paper that shows you have paid for something",
    "sentence": "A: I want to take this jacket back to the department store because the zipper broke after only one week, but what will they ask me for? B: They will want to see your {{BLANK}}, so look for it in your wallet or email, because without it they may only give you store credit.",
    "cn": "A：這件夾克才穿一週拉鍊就壞了，我想拿回百貨公司退，但他們會要求我出示什麼？ B：他們會想看你的【收據】，所以找找你的皮夾或電子郵件，因為沒有它的話，他們可能只會給你購物抵用金。"
  },
  {
    "word": "invoice",
    "pos": "n.",
    "cn_def": "發票；請款單",
    "en_def": "a list of goods or services that shows how much you must pay",
    "sentence": "A: Why hasn't the accounting team paid the printing company for the brochures they made for the trade show? B: The {{BLANK}} they sent us listed five thousand copies, but we only received three thousand, so we asked them to correct it before we make the payment.",
    "cn": "A：會計團隊為什麼還沒付錢給幫我們印商展手冊的印刷公司？ B：他們寄來的【請款單】列了五千份，但我們只收到三千份，所以我們請他們先更正再付款。"
  },
  {
    "word": "order",
    "pos": "n.",
    "cn_def": "訂單；訂購",
    "en_def": "a request to buy goods",
    "sentence": "A: Why does the customer on line two sound so upset, and why does she keep asking for the manager? B: She placed an {{BLANK}} for twenty office desks a month ago, but only ten have arrived, and her new employees start work on Monday with nowhere to sit.",
    "cn": "A：二線的顧客聽起來為什麼這麼不高興，還一直要求找經理？ B：她一個月前下了二十張辦公桌的【訂單】，但只到了十張，而她的新員工星期一就要上班，卻沒有地方坐。"
  },
  {
    "word": "delivery",
    "pos": "n.",
    "cn_def": "送貨；遞送",
    "en_def": "the act of bringing goods to a place",
    "sentence": "A: Why is the restaurant owner so worried about tonight's big wedding party? B: The {{BLANK}} of fresh fish and vegetables did not arrive this morning because the truck broke down on the highway, and she is now calling other suppliers to find enough food for two hundred guests.",
    "cn": "A：餐廳老闆為什麼這麼擔心今晚的大型婚宴？ B：今天早上新鮮魚貨和蔬菜的【送貨】沒有到，因為卡車在高速公路上拋錨了，她現在正打電話給其他供應商，想找到足夠兩百位賓客吃的食材。"
  },
  {
    "word": "shipment",
    "pos": "n.",
    "cn_def": "一批貨；運送的貨物",
    "en_def": "a load of goods that is sent together",
    "sentence": "A: Why did the warehouse staff refuse to sign for the boxes from the paper supplier this morning? B: The whole {{BLANK}} was wet from the rain because the driver left the truck door open, so they took photos and asked the supplier to send new boxes as soon as possible.",
    "cn": "A：倉庫人員今天早上為什麼拒絕簽收紙品供應商送來的箱子？ B：整批【貨】都被雨淋濕了，因為司機沒關卡車門，所以他們拍了照，並要求供應商盡快重新送貨。"
  },
  {
    "word": "policy",
    "pos": "n.",
    "cn_def": "政策；規定",
    "en_def": "a set of rules a company follows",
    "sentence": "A: Can I return these running shoes even though I've already worn them outside a few times? B: According to the store's return {{BLANK}}, you can bring back any shoes within thirty days if they hurt your feet, but you must show your receipt and the original box.",
    "cn": "A：這雙跑鞋我已經穿出去幾次了，還能退貨嗎？ B：根據店家的退貨【政策】，只要鞋子讓你腳痛，三十天內都能退回，但你必須出示收據和原本的鞋盒。"
  },
  {
    "word": "guarantee",
    "pos": "n.",
    "cn_def": "保證",
    "en_def": "a promise that something will be done or will work",
    "sentence": "A: Why did you choose this cleaning company for the office when there are cheaper ones in the neighborhood? B: They offer a money-back {{BLANK}}, so if we are not happy with their work after the first month, we can get all our money back without any questions.",
    "cn": "A：附近有更便宜的清潔公司，你為什麼選這家來打掃辦公室？ B：他們提供退款【保證】，如果第一個月後我們不滿意他們的工作，可以無條件拿回全部的錢。"
  },
  {
    "word": "warranty",
    "pos": "n.",
    "cn_def": "保固；保證書",
    "en_def": "a written promise to repair a product for free for a period of time",
    "sentence": "A: The screen on my office laptop suddenly went black this morning, so do I have to pay for the repair myself? B: No, the computer is still under {{BLANK}} for another six months, so the manufacturer will fix it for free if you bring it to their service center downtown.",
    "cn": "A：我辦公室的筆電螢幕今天早上突然變黑，維修費要我自己付嗎？ B：不用，這台電腦還有六個月的【保固】，只要你拿到市中心的維修中心，製造商會免費修理。"
  },
  {
    "word": "sincerely",
    "pos": "adv.",
    "cn_def": "誠摯地；真誠地",
    "en_def": "in a way that shows you really mean it",
    "sentence": "A: How should I end the letter to the customer whose wedding cake arrived three hours after the party started? B: Tell her that we {{BLANK}} hope she will give us another chance, sign it with your full name and title, and include a gift card for a free cake on her first anniversary.",
    "cn": "A：那位顧客的結婚蛋糕在派對開始三小時後才送到，我寫給她的信該怎麼結尾？ B：告訴她我們【誠摯地】希望她能再給我們一次機會，署上你的全名和職稱，並附上一張她結婚一週年可兌換免費蛋糕的禮物卡。"
  },
  {
    "word": "faithfully",
    "pos": "adv.",
    "cn_def": "謹上（正式書信結尾）；忠實地",
    "en_def": "used in \"Yours faithfully\" to end a formal letter when you don't know the person's name",
    "sentence": "A: I am writing a formal complaint letter to a hotel, but I don't know the manager's name, so how should I finish it? B: When you begin with \"Dear Sir or Madam,\" you should end the letter with \"Yours {{BLANK}},\" and then sign your full name clearly below it.",
    "cn": "A：我正在寫一封給飯店的正式投訴信，但我不知道經理的名字，該怎麼結尾？ B：當你用「敬啟者」開頭時，信的結尾應該寫「【謹上】」，然後在下面清楚簽上你的全名。"
  },
  {
    "word": "concern",
    "pos": "n.",
    "cn_def": "擔憂；關切",
    "en_def": "a feeling of worry about something",
    "sentence": "A: Why did the parents ask for a meeting with the manager of the after-school program last Friday? B: They raised a {{BLANK}} about the old playground equipment, because two children were hurt last month, and they want the program to replace the swings before summer.",
    "cn": "A：家長們上週五為什麼要求和課後班的負責人開會？ B：他們對老舊的遊樂設施提出【擔憂】，因為上個月有兩個孩子受傷，他們希望課後班在夏天前更換鞦韆。"
  },
  {
    "word": "attention",
    "pos": "n.",
    "cn_def": "注意；處理",
    "en_def": "the act of noticing or dealing with something",
    "sentence": "A: I have written to the airline three times about my lost suitcase, but nobody has answered, so what else can I do? B: Try sending your letter for the {{BLANK}} of the customer relations manager, because it will go directly to her desk instead of to the busy general mailbox.",
    "cn": "A：我已經寫信給航空公司三次詢問遺失的行李箱，但都沒人回覆，我還能怎麼做？ B：試著在信上註明「客戶關係經理【親啟】」，這樣信會直接送到她的桌上，而不是進到繁忙的一般信箱。"
  },
  {
    "word": "action",
    "pos": "n.",
    "cn_def": "行動；措施",
    "en_def": "something you do to deal with a problem",
    "sentence": "A: What did the restaurant owner say after the newspaper wrote about the dirty kitchen and the angry diners? B: She promised to take {{BLANK}} right away, so she closed the restaurant for three days, hired a new cleaning team, and trained all the cooks again.",
    "cn": "A：報紙報導了廚房髒亂和顧客生氣的事之後，餐廳老闆怎麼說？ B：她承諾立刻採取【行動】，所以關店三天，請了新的清潔團隊，並重新訓練所有廚師。"
  },
  {
    "word": "situation",
    "pos": "n.",
    "cn_def": "情況；處境",
    "en_def": "what is happening at a particular time",
    "sentence": "A: Why did the manager call an emergency meeting with the customer service staff this afternoon? B: Hundreds of people are angry because their flights were cancelled by the storm, so she wants to explain how the team should handle the {{BLANK}} and which passengers should get hotel rooms first.",
    "cn": "A：經理今天下午為什麼和客服人員召開緊急會議？ B：好幾百人因為班機被暴風雨取消而很生氣，所以她想說明團隊該如何處理這個【情況】，以及哪些乘客應該優先安排飯店房間。"
  },
  {
    "word": "matter",
    "pos": "n.",
    "cn_def": "事情；問題",
    "en_def": "a subject or problem that you deal with",
    "sentence": "A: Thank you for listening to my complaint about the noisy air conditioner in my hotel room, but when will someone fix it? B: I will report this {{BLANK}} to our maintenance team right now, and a technician will come to your room within thirty minutes, or we can move you to another room.",
    "cn": "A：謝謝你聽我抱怨飯店房間的冷氣很吵，但什麼時候會有人來修？ B：我現在就會把這件【事】回報給維修團隊，技術人員會在三十分鐘內到您房間，或者我們也可以幫您換房。"
  }
];

const MCQS = [
  {
    "q": "The factory found that the brakes on several bicycles were _____. All of those bicycles were recalled before they reached the stores.",
    "options": [
      "prompt",
      "defective",
      "disappointed",
      "dissatisfied"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The concert was cancelled because of the typhoon. Everyone who bought a ticket will receive a full _____ within ten days.",
    "options": [
      "evidence",
      "policy",
      "concern",
      "refund"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The bank received several reports of strange charges on customer accounts. Its security team will _____ the cause this week.",
    "options": [
      "apologize",
      "respond",
      "investigate",
      "regret"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The address on the shipping label was _____. As a result, the package was sent to a town two hundred kilometers away.",
    "options": [
      "incorrect",
      "prompt",
      "disappointed",
      "defective"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The dishwasher is still under _____ until next March. The manufacturer will repair it at no cost to the owner.",
    "options": [
      "apology",
      "warranty",
      "receipt",
      "request"
    ],
    "answer": 1,
    "vocabIndex": 40
  },
  {
    "q": "The bus company wants to _____ to passengers for the long delays last weekend. It will offer them free rides next month.",
    "options": [
      "apologize",
      "investigate",
      "clarify",
      "damage"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Passengers whose flights are cancelled may receive _____. The amount depends on the length of the flight and the reason for the cancellation.",
    "options": [
      "invoice",
      "attention",
      "situation",
      "compensation"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The new coffee machine stopped working after one day. The store sent a _____ the next morning at no extra charge.",
    "options": [
      "evidence",
      "concern",
      "replacement",
      "situation"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Heavy snow caused a three-hour _____ at the airport. Many business travelers missed their meetings in Seoul that afternoon.",
    "options": [
      "receipt",
      "policy",
      "solution",
      "delay"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Our staff always try to _____ to customer emails within one working day. Quick answers help us keep our customers happy.",
    "options": [
      "investigate",
      "respond",
      "replace",
      "repair"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The tourists were _____ when they saw that the museum was closed for repairs. They had traveled for three hours to visit it.",
    "options": [
      "disappointed",
      "defective",
      "incorrect",
      "damaged"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Please keep your _____ after you pay. You will need it if you want to return or exchange the item later.",
    "options": [
      "concern",
      "delay",
      "receipt",
      "situation"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The two departments held a meeting to _____ their disagreement about the budget. They finally reached an agreement after two hours.",
    "options": [
      "apologize",
      "respond",
      "contact",
      "resolve"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Several boxes were _____ during the storm because water came through the warehouse roof. The goods inside them could not be sold.",
    "options": [
      "damaged",
      "disappointed",
      "dissatisfied",
      "prompt"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The supplier sent us an _____ for the office furniture. We must pay the full amount within thirty days.",
    "options": [
      "attention",
      "evidence",
      "invoice",
      "action"
    ],
    "answer": 2,
    "vocabIndex": 34
  },
  {
    "q": "The company has changed its rules. According to the new travel _____, employees must book flights at least two weeks before a business trip.",
    "options": [
      "matter",
      "policy",
      "error",
      "refund"
    ],
    "answer": 1,
    "vocabIndex": 38
  },
  {
    "q": "The customer's email was not clear about which size she wanted. The sales assistant called her to _____ the details.",
    "options": [
      "regret",
      "damage",
      "clarify",
      "apologize"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "Thank you for your _____ reply to my letter. I received your answer only one hour after I sent my complaint.",
    "options": [
      "prompt",
      "defective",
      "damaged",
      "incorrect"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The latest _____ of laptops arrived at the warehouse this morning. Workers are checking every box for damage before signing for it.",
    "options": [
      "apology",
      "inconvenience",
      "attention",
      "shipment"
    ],
    "answer": 3,
    "vocabIndex": 37
  },
  {
    "q": "The insurance company asked for _____ of the damage. The shop owner sent photos and a report from the repair company.",
    "options": [
      "apology",
      "evidence",
      "policy",
      "inconvenience"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "If you have any questions about your order, please _____ our sales team. They are available from nine to six on weekdays.",
    "options": [
      "respond",
      "apologize",
      "contact",
      "resolve"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The hotel will close its swimming pool for cleaning on Monday. We apologize for any _____ this may cause our guests.",
    "options": [
      "receipt",
      "inconvenience",
      "evidence",
      "shipment"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The restaurant made a mistake with my lunch _____. I asked for chicken soup, but they brought me a beef burger.",
    "options": [
      "order",
      "warranty",
      "guarantee",
      "evidence"
    ],
    "answer": 0,
    "vocabIndex": 35
  },
  {
    "q": "We _____ to inform you that the product you ordered is no longer available. We will refund your payment within five days.",
    "options": [
      "investigate",
      "clarify",
      "replace",
      "regret"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Many shoppers were _____ with the long lines at the checkout counters. The store has now hired more cashiers for weekends.",
    "options": [
      "dissatisfied",
      "defective",
      "damaged",
      "prompt"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The company offers a thirty-day money-back _____. Customers who are not happy can return the product for a full refund.",
    "options": [
      "shipment",
      "delivery",
      "situation",
      "guarantee"
    ],
    "answer": 3,
    "vocabIndex": 39
  },
  {
    "q": "The landlord promised to _____ the broken heater before winter. Until then, the tenants are using small electric heaters in each room.",
    "options": [
      "respond",
      "repair",
      "apologize",
      "regret"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The office was too noisy for the staff to concentrate. The manager's _____ was to create several quiet rooms on the third floor.",
    "options": [
      "receipt",
      "invoice",
      "solution",
      "warranty"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "A typing _____ in the advertisement showed the wrong price for the television. The store had to sell several sets at a loss.",
    "options": [
      "error",
      "shipment",
      "guarantee",
      "warranty"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The inspector said the safety conditions in the factory were _____. The owner must make several changes before the next visit.",
    "options": [
      "prompt",
      "disappointed",
      "unsatisfactory",
      "late"
    ],
    "answer": 2,
    "vocabIndex": 22
  }
];

const LOOKUP = {
  "dissatisfied": {
    "pos": "adj.",
    "en_def": "not happy with something",
    "cn_def": "不滿意的"
  },
  "issue": {
    "pos": "n.",
    "en_def": "a problem that people need to deal with",
    "cn_def": "問題；議題"
  },
  "problem": {
    "pos": "n.",
    "en_def": "something that is wrong and needs to be fixed",
    "cn_def": "問題"
  },
  "defective": {
    "pos": "adj.",
    "en_def": "not made correctly; not working properly",
    "cn_def": "有瑕疵的；有缺陷的"
  },
  "damage": {
    "pos": "v.",
    "en_def": "to harm or break something",
    "cn_def": "損壞；損害"
  },
  "damaged": {
    "pos": "adj.",
    "en_def": "harmed or broken",
    "cn_def": "受損的；損壞的"
  },
  "delay": {
    "pos": "n.",
    "en_def": "a time when something happens later than planned",
    "cn_def": "延誤；耽擱"
  },
  "late": {
    "pos": "adj.",
    "en_def": "arriving or happening after the expected time",
    "cn_def": "遲的；晚的"
  },
  "incorrect": {
    "pos": "adj.",
    "en_def": "not right; wrong",
    "cn_def": "不正確的；錯誤的"
  },
  "error": {
    "pos": "n.",
    "en_def": "a mistake",
    "cn_def": "錯誤"
  },
  "poor service": {
    "pos": "n.phr.",
    "en_def": "service that is slow, rude or of low quality",
    "cn_def": "服務差；服務不佳"
  },
  "customer service": {
    "pos": "n.phr.",
    "en_def": "the part of a company that helps customers with questions and problems",
    "cn_def": "客戶服務；客服"
  },
  "refund": {
    "pos": "n.",
    "en_def": "money that is paid back to you",
    "cn_def": "退款"
  },
  "replace": {
    "pos": "v.",
    "en_def": "to put a new thing in the place of an old or broken one",
    "cn_def": "更換；替換"
  },
  "replacement": {
    "pos": "n.",
    "en_def": "a new thing that takes the place of an old or broken one",
    "cn_def": "替換品；更換"
  },
  "repair": {
    "pos": "v.",
    "en_def": "to fix something that is broken",
    "cn_def": "修理；修復"
  },
  "compensation": {
    "pos": "n.",
    "en_def": "money paid to someone because of a loss or problem",
    "cn_def": "賠償；補償"
  },
  "solution": {
    "pos": "n.",
    "en_def": "a way to solve a problem",
    "cn_def": "解決辦法"
  },
  "resolve": {
    "pos": "v.",
    "en_def": "to find an answer to a problem or end a disagreement",
    "cn_def": "解決"
  },
  "request": {
    "pos": "n.",
    "en_def": "the act of politely asking for something",
    "cn_def": "要求；請求"
  },
  "regret": {
    "pos": "v.",
    "en_def": "to feel sorry about something",
    "cn_def": "遺憾；後悔"
  },
  "disappointed": {
    "pos": "adj.",
    "en_def": "sad because something was not as good as you hoped",
    "cn_def": "失望的"
  },
  "unsatisfactory": {
    "pos": "adj.",
    "en_def": "not good enough",
    "cn_def": "不令人滿意的；不夠好的"
  },
  "inconvenience": {
    "pos": "n.",
    "en_def": "trouble or difficulty that makes things less easy",
    "cn_def": "不便；麻煩"
  },
  "apology": {
    "pos": "n.",
    "en_def": "words that say you are sorry",
    "cn_def": "道歉"
  },
  "apologize": {
    "pos": "v.",
    "en_def": "to say that you are sorry",
    "cn_def": "道歉"
  },
  "contact": {
    "pos": "v.",
    "en_def": "to call, write to or email someone",
    "cn_def": "聯絡"
  },
  "respond": {
    "pos": "v.",
    "en_def": "to answer or reply",
    "cn_def": "回覆；回應"
  },
  "prompt": {
    "pos": "adj.",
    "en_def": "done quickly, without waiting",
    "cn_def": "迅速的；及時的"
  },
  "immediately": {
    "pos": "adv.",
    "en_def": "at once; right now",
    "cn_def": "立刻；馬上"
  },
  "investigate": {
    "pos": "v.",
    "en_def": "to try to find out the facts about something",
    "cn_def": "調查"
  },
  "clarify": {
    "pos": "v.",
    "en_def": "to make something clearer or easier to understand",
    "cn_def": "釐清；澄清"
  },
  "evidence": {
    "pos": "n.",
    "en_def": "facts or things that show something is true",
    "cn_def": "證據；證明"
  },
  "receipt": {
    "pos": "n.",
    "en_def": "a piece of paper that shows you have paid for something",
    "cn_def": "收據"
  },
  "invoice": {
    "pos": "n.",
    "en_def": "a list of goods or services that shows how much you must pay",
    "cn_def": "發票；請款單"
  },
  "order": {
    "pos": "n.",
    "en_def": "a request to buy goods",
    "cn_def": "訂單；訂購"
  },
  "delivery": {
    "pos": "n.",
    "en_def": "the act of bringing goods to a place",
    "cn_def": "送貨；遞送"
  },
  "shipment": {
    "pos": "n.",
    "en_def": "a load of goods that is sent together",
    "cn_def": "一批貨；運送的貨物"
  },
  "policy": {
    "pos": "n.",
    "en_def": "a set of rules a company follows",
    "cn_def": "政策；規定"
  },
  "guarantee": {
    "pos": "n.",
    "en_def": "a promise that something will be done or will work",
    "cn_def": "保證"
  },
  "warranty": {
    "pos": "n.",
    "en_def": "a written promise to repair a product for free for a period of time",
    "cn_def": "保固；保證書"
  },
  "sincerely": {
    "pos": "adv.",
    "en_def": "in a way that shows you really mean it",
    "cn_def": "誠摯地；真誠地"
  },
  "faithfully": {
    "pos": "adv.",
    "en_def": "used in \"Yours faithfully\" to end a formal letter when you don't know the person's name",
    "cn_def": "謹上（正式書信結尾）；忠實地"
  },
  "concern": {
    "pos": "n.",
    "en_def": "a feeling of worry about something",
    "cn_def": "擔憂；關切"
  },
  "attention": {
    "pos": "n.",
    "en_def": "the act of noticing or dealing with something",
    "cn_def": "注意；處理"
  },
  "action": {
    "pos": "n.",
    "en_def": "something you do to deal with a problem",
    "cn_def": "行動；措施"
  },
  "situation": {
    "pos": "n.",
    "en_def": "what is happening at a particular time",
    "cn_def": "情況；處境"
  },
  "matter": {
    "pos": "n.",
    "en_def": "a subject or problem that you deal with",
    "cn_def": "事情；問題"
  }
};

const EXTRA_GLOSSES = {};
