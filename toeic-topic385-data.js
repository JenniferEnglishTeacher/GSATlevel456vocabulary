// Topic 385 Quiz Data: Suggestion Letter 建議信
// Source word list: https://www.examword.com/group-topic/suggestion-letter — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T385 - Suggestion Letter 建議信",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "advise",
    "pos": "v.",
    "cn_def": "建議；勸告",
    "en_def": "to tell someone what you think they should do",
    "sentence": "A: The new staff handbook is quite long, and I'm not sure which sections I should read first before my orientation on Monday morning. B: I would {{BLANK}} you to start with the safety rules and the leave policy, because the manager usually asks new employees questions about those two parts during the first meeting.",
    "cn": "A：新的員工手冊很長，我不確定在星期一早上的新人說明會之前應該先讀哪些部分。 B：我會【建議】你先看安全規定和請假政策，因為經理通常會在第一次會議中問新進員工這兩部分的問題。"
  },
  {
    "word": "advice",
    "pos": "n.",
    "cn_def": "建議；忠告",
    "en_def": "an opinion about what someone should do",
    "sentence": "A: I'm writing a letter to the head office about the long lines in our cafeteria, but I don't know how formal it should be. B: My {{BLANK}} is to keep it polite and short, describe the problem clearly with a few examples, and then offer one or two realistic changes the company could make next month.",
    "cn": "A：我正在寫信給總公司反映我們員工餐廳排隊太長的問題，但我不知道應該寫得多正式。 B：我的【建議】是保持禮貌和簡短，用幾個例子清楚描述問題，然後提出一兩個公司下個月就能做到的實際改變。"
  },
  {
    "word": "proposal",
    "pos": "n.",
    "cn_def": "提案；建議書",
    "en_def": "a plan or idea that is formally suggested for others to consider",
    "sentence": "A: Did the committee read the letter you sent last week about opening a small recycling center in the parking garage? B: Yes, they discussed my {{BLANK}} at Thursday's meeting, and although they liked it, they asked me to include a cost estimate and a timeline before they make a final decision.",
    "cn": "A：委員會看過你上週寄去、關於在停車場設立小型回收中心的信了嗎？ B：看過了，他們在星期四的會議上討論了我的【提案】，雖然他們很喜歡，但要求我在他們做最後決定之前附上費用估算和時間表。"
  },
  {
    "word": "propose",
    "pos": "v.",
    "cn_def": "提議；提出",
    "en_def": "to formally suggest a plan or idea",
    "sentence": "A: Our customers keep complaining that they can't reach us on weekends, and the phone line is always busy on Monday mornings. B: In my letter to the director, I'm going to {{BLANK}} that we hire two part-time staff to answer calls on Saturdays, which should lower the pressure on everyone at the start of the week.",
    "cn": "A：我們的顧客一直抱怨週末聯絡不到我們，而且星期一早上電話總是占線。 B：在給主任的信中，我打算【提議】我們僱用兩名兼職人員在星期六接聽電話，這應該能減輕大家在一週開始時的壓力。"
  },
  {
    "word": "idea",
    "pos": "n.",
    "cn_def": "主意；想法",
    "en_def": "a thought or suggestion about what to do",
    "sentence": "A: The sales team wants a better way to share information with each other, because emails keep getting lost in people's busy inboxes. B: One {{BLANK}} I mentioned in my letter is a shared online calendar, so everyone can see client meetings, deadlines, and holidays in one place without sending so many messages.",
    "cn": "A：業務團隊想要一個更好的方式彼此分享資訊，因為電子郵件總是在大家塞滿的收件匣裡被淹沒。 B：我在信中提到的一個【主意】是共用的線上行事曆，這樣大家就能在同一個地方看到客戶會議、截止日期和假日，不必傳那麼多訊息。"
  },
  {
    "word": "plan",
    "pos": "n.",
    "cn_def": "計畫；方案",
    "en_def": "a set of steps decided in advance to do something",
    "sentence": "A: The manager agreed that the office is too noisy, but she wants to know exactly how we would fix the problem without spending too much money. B: I've written a simple three-step {{BLANK}} that moves the printers into a separate room, adds a few quiet desks near the windows, and sets clear rules for phone calls.",
    "cn": "A：經理同意辦公室太吵了，但她想確切知道我們要如何在不花太多錢的情況下解決這個問題。 B：我寫了一個簡單的三步驟【計畫】：把印表機移到另一個房間、在窗邊增加幾張安靜的辦公桌，並為講電話訂定清楚的規則。"
  },
  {
    "word": "improvement",
    "pos": "n.",
    "cn_def": "改善；改進",
    "en_def": "a change that makes something better",
    "sentence": "A: Have you noticed any difference since the company started sending customers a short survey after every delivery last spring? B: Yes, there has been a clear {{BLANK}} in our service, because drivers now arrive on time more often and customers say the packages are handled much more carefully than before.",
    "cn": "A：自從公司去年春天開始在每次送貨後寄簡短問卷給顧客，你有注意到什麼不同嗎？ B：有，我們的服務有明顯的【改善】，因為司機現在更常準時抵達，顧客也說包裹的處理比以前小心多了。"
  },
  {
    "word": "improve",
    "pos": "v.",
    "cn_def": "改善；提升",
    "en_def": "to make something better",
    "sentence": "A: Many visitors told us that our website is confusing, and they often call the help desk just to find our opening hours. B: In the letter, I suggested a few simple changes that could {{BLANK}} the home page, such as a larger search box, clearer menus, and our contact details at the top.",
    "cn": "A：很多訪客告訴我們網站很難用，他們常常打電話到服務台只為了查我們的營業時間。 B：我在信中建議了幾個能【改善】首頁的簡單改變，例如更大的搜尋框、更清楚的選單，以及把聯絡資訊放在最上方。"
  },
  {
    "word": "solution",
    "pos": "n.",
    "cn_def": "解決辦法",
    "en_def": "a way of dealing with a problem",
    "sentence": "A: The elevator in our building breaks down almost every week, and staff on the top floors are often late for meetings because of it. B: I wrote to the building manager suggesting a sensible {{BLANK}}: replace the old motor this summer and let employees use the side stairs while the repair work is being done.",
    "cn": "A：我們大樓的電梯幾乎每週都故障，頂樓的員工常因此開會遲到。 B：我寫信給大樓管理員，建議一個合理的【解決辦法】：今年夏天更換舊馬達，維修期間讓員工使用側邊樓梯。"
  },
  {
    "word": "solve",
    "pos": "v.",
    "cn_def": "解決",
    "en_def": "to find a way to deal with a problem",
    "sentence": "A: Customers keep complaining that our parking lot is full by nine o'clock, so many of them simply drive away and shop somewhere else. B: I think we can {{BLANK}} this problem if staff park in the public garage across the street, and the company pays part of the monthly fee for them.",
    "cn": "A：顧客一直抱怨我們的停車場九點就滿了，所以很多人乾脆開走去別的地方購物。 B：我認為如果員工改停對街的公有停車場，並由公司幫他們支付部分月租費，我們就能【解決】這個問題。"
  },
  {
    "word": "benefit",
    "pos": "n.",
    "cn_def": "好處；益處",
    "en_def": "a good result or advantage that something gives",
    "sentence": "A: Why do you think the company should offer free language classes to employees after work on Tuesdays and Thursdays? B: The main {{BLANK}} is that our staff could communicate better with overseas clients, which would help us win more international contracts and make everyone feel more confident in meetings.",
    "cn": "A：你為什麼認為公司應該在星期二和星期四下班後為員工提供免費語言課程？ B：主要的【好處】是我們的員工能和海外客戶溝通得更好，這能幫助我們贏得更多國際合約，也讓大家在會議中更有自信。"
  },
  {
    "word": "helpful",
    "pos": "adj.",
    "cn_def": "有幫助的",
    "en_def": "useful and making things easier",
    "sentence": "A: Did you get any response from the hotel after you sent them that letter about improving their check-in process? B: Yes, the manager wrote back to thank me and said my comments were very {{BLANK}}, because they had not realized how long guests were waiting in the lobby during busy weekends.",
    "cn": "A：你寄信給飯店建議改善入住流程之後，有收到任何回應嗎？ B：有，經理回信感謝我，說我的意見非常【有幫助】，因為他們之前沒發現忙碌的週末房客在大廳要等多久。"
  },
  {
    "word": "useful",
    "pos": "adj.",
    "cn_def": "有用的",
    "en_def": "able to be used for a good purpose",
    "sentence": "A: What did the trainees say about the orientation week when you collected their feedback forms on Friday afternoon? B: Most of them found the computer workshop really {{BLANK}}, but they suggested that next year we should give them the schedule earlier so they can prepare questions before each session.",
    "cn": "A：你星期五下午收回意見表時，受訓人員對新人訓練週有什麼看法？ B：他們大多覺得電腦工作坊非常【有用】，但建議明年我們應該早點給他們課表，好讓他們在每堂課前準備問題。"
  },
  {
    "word": "effective",
    "pos": "adj.",
    "cn_def": "有效的",
    "en_def": "producing the result that you want",
    "sentence": "A: We've tried posters and emails, but people still leave the lights and air conditioners on when they go home at night. B: A more {{BLANK}} method might be to install timers in each office, because they turn everything off automatically and we would not have to depend on people remembering every day.",
    "cn": "A：我們試過海報和電子郵件，但大家晚上回家時還是會把燈和冷氣開著。 B：更【有效的】方法可能是在每間辦公室安裝定時器，因為它們會自動關掉所有設備，我們就不必依賴大家每天記得。"
  },
  {
    "word": "practical",
    "pos": "adj.",
    "cn_def": "實際的；可行的",
    "en_def": "sensible and likely to work in real situations",
    "sentence": "A: Some managers want to build a new gym in the basement, but that would cost a lot and take more than a year. B: A more {{BLANK}} choice would be to give employees a discount at the fitness center down the street, which is cheaper, faster, and still helps people stay healthy.",
    "cn": "A：有些經理想在地下室蓋一間新健身房，但那要花很多錢，而且需要一年以上。 B：更【實際的】選擇是讓員工在街尾的健身中心享有折扣，這樣更便宜、更快，而且仍然能幫助大家保持健康。"
  },
  {
    "word": "reasonable",
    "pos": "adj.",
    "cn_def": "合理的",
    "en_def": "fair and sensible",
    "sentence": "A: Do you think the director will accept your request to let staff work from home one day a week? B: I believe so, because it seems like a {{BLANK}} request, especially since most of our work is done on computers and several other companies in the area already offer this option.",
    "cn": "A：你認為主任會接受你讓員工每週在家工作一天的請求嗎？ B：我想會，因為這似乎是個【合理的】請求，尤其我們大部分的工作都在電腦上完成，而且這一帶已經有好幾家公司提供這個選項。"
  },
  {
    "word": "possible",
    "pos": "adj.",
    "cn_def": "可能的；可行的",
    "en_def": "able to happen or be done",
    "sentence": "A: The customers asked whether we could deliver their orders on Sundays, but our warehouse is closed at weekends. B: I've written to the operations manager to ask if it would be {{BLANK}} to open the warehouse for a few hours on Sunday mornings during the busy holiday season this year.",
    "cn": "A：顧客問我們能不能在星期日送貨，但我們的倉庫週末不開。 B：我已經寫信給營運經理，詢問今年忙碌的假期期間，是否【可能】在星期日早上開放倉庫幾個小時。"
  },
  {
    "word": "consider",
    "pos": "v.",
    "cn_def": "考慮",
    "en_def": "to think carefully about something before deciding",
    "sentence": "A: I sent the board a letter about adding more vegetarian dishes to the cafeteria menu, but I haven't heard anything yet. B: Don't worry; they usually take a few weeks to reply, and the chairperson told me they will {{BLANK}} every suggestion carefully at their next monthly meeting in the conference room.",
    "cn": "A：我寫信給董事會，建議在員工餐廳菜單上增加更多素食，但還沒收到任何消息。 B：別擔心，他們通常要幾週才會回覆，主席告訴我他們會在下次的月會上仔細【考慮】每一項建議。"
  },
  {
    "word": "consideration",
    "pos": "n.",
    "cn_def": "考慮；斟酌",
    "en_def": "careful thought before making a decision",
    "sentence": "A: Do you think the manager will actually read the letter we wrote about changing the shift schedule for the night workers? B: Yes, she promised to give it careful {{BLANK}}, and she will discuss our ideas with the human resources department before she decides on any changes next quarter.",
    "cn": "A：你認為經理真的會看我們寫的那封關於調整夜班人員班表的信嗎？ B：會，她答應會仔細【考慮】，而且她在下一季決定任何改變之前，會和人資部門討論我們的想法。"
  },
  {
    "word": "encourage",
    "pos": "v.",
    "cn_def": "鼓勵",
    "en_def": "to make someone more likely to do something",
    "sentence": "A: Hardly anyone uses the new bicycle racks outside our building, even though many employees live quite close to the office. B: In my letter, I suggested a monthly prize to {{BLANK}} staff to ride to work, because a small reward often helps people change their habits and try something new.",
    "cn": "A：幾乎沒有人使用我們大樓外的新腳踏車架，雖然很多員工住得離辦公室很近。 B：我在信中建議設立每月獎品來【鼓勵】員工騎車上班，因為小小的獎勵常常能幫助人們改變習慣、嘗試新事物。"
  },
  {
    "word": "support",
    "pos": "v.",
    "cn_def": "支持",
    "en_def": "to agree with and help an idea or plan",
    "sentence": "A: Have the other department heads replied to your letter about setting up a quiet room for employees who need a short break? B: Yes, three of them said they fully {{BLANK}} the project, and the finance manager has even offered to find some money in next year's budget for chairs and lamps.",
    "cn": "A：其他部門主管回覆你那封關於為需要短暫休息的員工設置安靜室的信了嗎？ B：回了，其中三位說他們完全【支持】這個計畫，財務經理甚至主動提出要在明年預算中找些錢買椅子和檯燈。"
  },
  {
    "word": "allow",
    "pos": "v.",
    "cn_def": "允許",
    "en_def": "to let someone do something",
    "sentence": "A: Many parents in our department find it hard to arrive by eight thirty because they have to drop their children at school first. B: My letter asks the company to {{BLANK}} flexible starting times between eight and ten, as long as everyone still works the same number of hours each day.",
    "cn": "A：我們部門很多家長覺得很難在八點半前到，因為他們得先送孩子上學。 B：我的信是請公司【允許】八點到十點之間彈性上班，只要每個人每天仍然工作相同的時數。"
  },
  {
    "word": "provide",
    "pos": "v.",
    "cn_def": "提供",
    "en_def": "to give something that people need",
    "sentence": "A: Our visitors often get lost in the building because the signs on each floor are small and hard to read. B: I've asked the reception team to {{BLANK}} printed maps at the front desk, and I also suggested larger signs near the elevators so guests can find meeting rooms more easily.",
    "cn": "A：我們的訪客常在大樓裡迷路，因為每層樓的標示又小又難看清楚。 B：我已經請接待團隊在櫃台【提供】紙本地圖，也建議在電梯附近設置更大的標示，讓客人更容易找到會議室。"
  },
  {
    "word": "create",
    "pos": "v.",
    "cn_def": "創造；建立",
    "en_def": "to make something new",
    "sentence": "A: New employees often feel lonely during their first weeks, because they don't know anyone outside their own team. B: In my letter to human resources, I suggested that we {{BLANK}} a buddy program, where each newcomer is paired with an experienced colleague who can answer questions and show them around.",
    "cn": "A：新進員工在頭幾週常覺得孤單，因為他們除了自己的團隊以外誰都不認識。 B：我在給人資部的信中建議我們【建立】一個夥伴計畫，讓每位新人和一位資深同事配對，由同事回答問題並帶他們熟悉環境。"
  },
  {
    "word": "organize",
    "pos": "v.",
    "cn_def": "整理；組織",
    "en_def": "to arrange things in a clear and ordered way",
    "sentence": "A: The storage room is so messy that it takes us twenty minutes to find paper, ink, or spare cables whenever we need them. B: I wrote a note to the office manager offering to {{BLANK}} the shelves by category this weekend and put clear labels on every box so everyone can find things quickly.",
    "cn": "A：儲藏室亂到每次我們需要紙、墨水或備用線材時，都要花二十分鐘才找得到。 B：我寫了張紙條給辦公室經理，主動提出這個週末依類別【整理】架子，並在每個箱子貼上清楚的標籤，讓大家能很快找到東西。"
  },
  {
    "word": "arrange",
    "pos": "v.",
    "cn_def": "安排",
    "en_def": "to plan and prepare for something to happen",
    "sentence": "A: Several clients said they would like to see our factory before they sign a large order for next year. B: I'm going to suggest in my letter that we {{BLANK}} a guided tour for them next month, including a short presentation, lunch in the staff cafeteria, and a visit to the testing lab.",
    "cn": "A：有幾位客戶說他們想在簽下明年的大訂單之前參觀我們的工廠。 B：我打算在信中建議我們下個月為他們【安排】導覽，包括簡短的簡報、在員工餐廳吃午餐，以及參觀測試實驗室。"
  },
  {
    "word": "introduce",
    "pos": "v.",
    "cn_def": "引進；推出",
    "en_def": "to bring in something new for the first time",
    "sentence": "A: Our paper forms take a long time to process, and some of them get lost between departments every month. B: In my suggestion letter, I recommended that we {{BLANK}} an online request system next year, so staff can submit forms from their computers and track their progress at any time.",
    "cn": "A：我們的紙本表單處理起來很花時間，而且每個月都有一些在部門之間遺失。 B：我在建議信中提議明年【引進】線上申請系統，讓員工能從電腦提交表單，並隨時追蹤進度。"
  },
  {
    "word": "increase",
    "pos": "v.",
    "cn_def": "增加",
    "en_def": "to make something larger in number or amount",
    "sentence": "A: Sales at our downtown store have been falling since the new shopping mall opened across the road last year. B: I've sent the regional manager a few ideas that could {{BLANK}} the number of visitors, such as weekend music events, a loyalty card, and longer opening hours during the holidays.",
    "cn": "A：自從去年對街的新購物中心開幕後，我們市中心分店的業績一直在下滑。 B：我已經寄給區域經理幾個能【增加】來客數的想法，例如週末音樂活動、會員卡，以及假期延長營業時間。"
  },
  {
    "word": "reduce",
    "pos": "v.",
    "cn_def": "減少；降低",
    "en_def": "to make something smaller in size or amount",
    "sentence": "A: Our office uses a huge amount of paper, and the recycling bins are full by Wednesday every single week. B: I wrote to the department heads suggesting we print on both sides and share documents online, which should {{BLANK}} our paper use by almost half within a few months.",
    "cn": "A：我們辦公室用紙量很大，資源回收桶每週到星期三就滿了。 B：我寫信給各部門主管，建議雙面列印並在線上分享文件，這應該能在幾個月內把用紙量【減少】將近一半。"
  },
  {
    "word": "immediately",
    "pos": "adv.",
    "cn_def": "立刻；馬上",
    "en_def": "now, without waiting",
    "sentence": "A: A customer wrote to say that the handrail on our front steps is loose and that an elderly visitor almost fell yesterday afternoon. B: That's dangerous, so I've asked the maintenance team to fix it {{BLANK}} and to put a warning sign there until the repair is finished this morning.",
    "cn": "A：一位顧客來信說我們前門台階的扶手鬆了，昨天下午有位年長的訪客差點跌倒。 B：那很危險，所以我已經請維修團隊【立刻】修理，並在今天早上修好之前在那裡放置警告標示。"
  },
  {
    "word": "gradually",
    "pos": "adv.",
    "cn_def": "逐漸地",
    "en_def": "slowly, over a period of time",
    "sentence": "A: The staff are worried that the new computer system will be too difficult to learn all at once next month. B: That's why my letter suggests bringing it in {{BLANK}}, starting with one department in March and adding the others over the summer, so people have enough time to practice and ask questions.",
    "cn": "A：員工擔心新的電腦系統下個月要一次學會太困難了。 B：所以我的信才建議【逐步】導入，三月先從一個部門開始，夏天再加入其他部門，讓大家有足夠的時間練習和提問。"
  },
  {
    "word": "perhaps",
    "pos": "adv.",
    "cn_def": "或許；也許",
    "en_def": "used to say that something is possible; maybe",
    "sentence": "A: The meeting room is always booked, and our team often has to hold discussions in the noisy hallway near the kitchen. B: I was thinking that {{BLANK}} the company could turn the old storage room into a second small meeting room; it only needs some paint, a table, and a few comfortable chairs.",
    "cn": "A：會議室總是被預約滿，我們團隊常常得在廚房附近吵雜的走廊討論事情。 B：我在想，公司【或許】可以把舊儲藏室改成第二間小會議室，只需要一些油漆、一張桌子和幾張舒服的椅子。"
  },
  {
    "word": "maybe",
    "pos": "adv.",
    "cn_def": "也許；可能",
    "en_def": "possibly; perhaps (less formal)",
    "sentence": "A: Our coworkers keep forgetting to clean the coffee machine, and the kitchen smells terrible by Friday afternoon. B: I wrote a short note to the team suggesting that {{BLANK}} we could take turns, with a different person responsible for cleaning the machine each week, and post the schedule on the fridge.",
    "cn": "A：同事們老是忘記清理咖啡機，到了星期五下午茶水間的味道很難聞。 B：我寫了張簡短的紙條給團隊，建議我們【也許】可以輪流，每週由不同的人負責清理咖啡機，並把值日表貼在冰箱上。"
  },
  {
    "word": "for example",
    "pos": "phr.",
    "cn_def": "例如",
    "en_def": "used to give a case that shows what you mean",
    "sentence": "A: You wrote that the company should do more to protect the environment, but the manager wants to see specific actions. B: That's fine; in the second paragraph I give several, {{BLANK}}, replacing plastic cups with glass ones, turning off computers at night, and encouraging staff to take the bus.",
    "cn": "A：你寫說公司應該多做些保護環境的事，但經理想看到具體的行動。 B：沒問題，我在第二段舉了好幾個，【例如】用玻璃杯取代塑膠杯、晚上關掉電腦，以及鼓勵員工搭公車。"
  },
  {
    "word": "such as",
    "pos": "phr.",
    "cn_def": "像是；例如",
    "en_def": "used before giving examples",
    "sentence": "A: What kinds of activities did you suggest in your letter to make the annual company picnic more enjoyable for families? B: I recommended a few simple games {{BLANK}} a sack race, a treasure hunt, and a tug-of-war, so that children and parents can play together during the afternoon.",
    "cn": "A：你在信中建議了哪些活動，讓公司年度野餐對家庭來說更有趣？ B：我推薦了幾個簡單的遊戲，【像是】布袋賽跑、尋寶遊戲和拔河，讓孩子和家長下午能一起玩。"
  },
  {
    "word": "in addition",
    "pos": "phr.",
    "cn_def": "此外；另外",
    "en_def": "used to add another fact or idea; also",
    "sentence": "A: Besides asking for a longer lunch break, did you include any other requests in your letter to the manager? B: Yes, I asked for a water machine on our floor; {{BLANK}}, I suggested a small first-aid kit in the kitchen, because the nearest one is three floors down.",
    "cn": "A：除了要求延長午休時間，你在給經理的信中還有提出其他請求嗎？ B：有，我要求在我們這層樓設一台飲水機；【此外】，我還建議在茶水間放一個小急救箱，因為最近的一個在三層樓下。"
  },
  {
    "word": "furthermore",
    "pos": "adv.",
    "cn_def": "此外；而且",
    "en_def": "used to add more information that supports a point",
    "sentence": "A: Why do you think moving our team meeting from Monday to Tuesday is a good change? B: On Mondays, many people are still answering weekend emails and aren't ready to discuss projects; {{BLANK}}, several team members often take Monday off, so Tuesday would let more people attend.",
    "cn": "A：你為什麼認為把團隊會議從星期一改到星期二是個好的改變？ B：星期一很多人還在回覆週末的電子郵件，還沒準備好討論專案；【此外】，有幾位組員常在星期一請假，所以星期二能讓更多人出席。"
  },
  {
    "word": "moreover",
    "pos": "adv.",
    "cn_def": "而且；此外",
    "en_def": "used to add another important point",
    "sentence": "A: Why should we switch to the new delivery company you mentioned in your letter to the purchasing department? B: Their prices are about ten percent lower than our current supplier's; {{BLANK}}, they offer free tracking and next-day service, which would help us keep our customers much happier.",
    "cn": "A：我們為什麼要換成你在給採購部的信中提到的那家新貨運公司？ B：他們的價格比我們現在的廠商低大約百分之十；【而且】，他們提供免費追蹤和隔日送達服務，能幫助我們讓顧客更滿意。"
  },
  {
    "word": "finally",
    "pos": "adv.",
    "cn_def": "最後；終於",
    "en_def": "used to introduce the last point; at last",
    "sentence": "A: How did you end the suggestion letter you sent to the hotel about your stay last month? B: First I described the problems with the noisy air conditioner and slow breakfast service, and {{BLANK}}, I thanked the staff for their kindness and said I would stay there again if things improved.",
    "cn": "A：你寄給飯店、關於上個月住宿的建議信是怎麼結尾的？ B：我先描述了冷氣很吵和早餐服務很慢的問題，【最後】感謝員工的親切，並說如果情況改善，我會再去住。"
  },
  {
    "word": "overall",
    "pos": "adv.",
    "cn_def": "整體而言；總的來說",
    "en_def": "when everything is considered; in general",
    "sentence": "A: Did the customers' letters about our new online store contain mostly complaints or mostly praise? B: A few people mentioned slow loading times and a confusing payment page, but {{BLANK}}, the comments were very positive, and many shoppers said they would recommend the site to their friends.",
    "cn": "A：顧客寫來關於我們新網路商店的信，大多是抱怨還是稱讚？ B：有些人提到載入速度慢和付款頁面令人困惑，但【整體而言】，評論非常正面，很多購物者說他們會把網站推薦給朋友。"
  },
  {
    "word": "hope",
    "pos": "v.",
    "cn_def": "希望",
    "en_def": "to want something to happen and think it may happen",
    "sentence": "A: How did you finish the letter you sent to the city council about adding more streetlights near our office? B: I wrote that I {{BLANK}} they will think about the safety of employees who leave work late, and that I would be happy to meet them to discuss the matter further.",
    "cn": "A：你寄給市議會、關於在我們辦公室附近增設路燈的信是怎麼結尾的？ B：我寫說我【希望】他們會考慮晚下班員工的安全，也很樂意和他們見面進一步討論這件事。"
  },
  {
    "word": "appreciate",
    "pos": "v.",
    "cn_def": "感激；感謝",
    "en_def": "to be grateful for something",
    "sentence": "A: The manager answered my letter about the broken air conditioner in less than a day, which really surprised me. B: That's great; you should send her a quick reply to say you {{BLANK}} her fast response, since managers rarely hear thanks when they fix problems for their staff.",
    "cn": "A：經理不到一天就回覆了我那封關於冷氣故障的信，真讓我驚訝。 B：太好了，你應該快點回信說你很【感謝】她迅速的回應，因為經理幫員工解決問題時很少聽到謝謝。"
  },
  {
    "word": "sincerely",
    "pos": "adv.",
    "cn_def": "誠摯地；（書信結尾）敬上",
    "en_def": "used at the end of a formal letter before your name; honestly",
    "sentence": "A: I've finished my suggestion letter to the general manager, but I'm not sure how to end it in a formal way. B: For a formal business letter, you can write 'Yours {{BLANK}},' on a separate line, and then sign your full name and job title underneath it at the bottom of the page.",
    "cn": "A：我寫完給總經理的建議信了，但不確定怎麼用正式的方式結尾。 B：正式的商業書信可以另起一行寫「【謹此】敬上」，然後在頁面底部的下方簽上你的全名和職稱。"
  }
];

const MCQS = [
  {
    "q": "Our lawyer reviewed the contract carefully last night. She will _____ us to delay signing until the payment terms are changed.",
    "options": [
      "advise",
      "provide",
      "arrange",
      "reduce"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The marketing team submitted a detailed _____ for the new campaign. The board will vote on it at Friday's meeting.",
    "options": [
      "benefit",
      "proposal",
      "consideration",
      "advice"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The repair team finally found a _____ to the printer problem. They replaced a small part inside the machine last night.",
    "options": [
      "benefit",
      "consideration",
      "solution",
      "advice"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The hotel hired a new chef last spring. Guests say the change has helped _____ the quality of breakfast dramatically.",
    "options": [
      "allow",
      "solve",
      "hope",
      "improve"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Free parking is one important _____ of working at the new branch. Employees no longer pay expensive downtown garage fees.",
    "options": [
      "benefit",
      "solution",
      "proposal",
      "idea"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The staff at the information desk were extremely _____. They gave us maps and answered all our questions about the conference.",
    "options": [
      "possible",
      "helpful",
      "reasonable",
      "practical"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The new safety rules will become _____ on the first day of next month. All factory workers must follow them from that date.",
    "options": [
      "possible",
      "helpful",
      "effective",
      "useful"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The repair shop charges a _____ price for its service. Most customers feel they get good value for their money there.",
    "options": [
      "helpful",
      "practical",
      "useful",
      "reasonable"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Please reply to this email as soon as _____. We need your answer before the order is shipped tomorrow morning.",
    "options": [
      "possible",
      "practical",
      "reasonable",
      "useful"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The manager promised to _____ our request for a longer lunch break. She will give her answer at the end of the month.",
    "options": [
      "provide",
      "consider",
      "reduce",
      "create"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The company offers free fruit in the break room. It wants to _____ employees to make healthier food choices at work.",
    "options": [
      "provide",
      "arrange",
      "encourage",
      "solve"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Most staff members strongly _____ the plan to open a daycare center. Many of them have young children at home.",
    "options": [
      "allow",
      "solve",
      "create",
      "support"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The new policy will _____ employees to work from home on Fridays. However, they must stay available by phone all day.",
    "options": [
      "allow",
      "provide",
      "solve",
      "increase"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The hotel will _____ free shuttle buses to the airport every hour. Guests should wait outside the main entrance.",
    "options": [
      "allow",
      "provide",
      "reduce",
      "solve"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Ms Chen offered to _____ the files in the cabinet by date. Now everyone can find old reports in a few seconds.",
    "options": [
      "increase",
      "reduce",
      "organize",
      "allow"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "My assistant will _____ a meeting with the supplier for next Tuesday. Please let her know which time suits you best.",
    "options": [
      "solve",
      "reduce",
      "allow",
      "arrange"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The bank plans to _____ a new mobile app next spring. Customers will be able to open accounts without visiting a branch.",
    "options": [
      "introduce",
      "solve",
      "reduce",
      "allow"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The factory hired twenty new workers last month. The goal is to _____ production before the busy holiday season begins.",
    "options": [
      "solve",
      "increase",
      "allow",
      "hope"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Turning off lights in empty rooms can _____ the company's electricity bill. It also helps protect the environment.",
    "options": [
      "solve",
      "arrange",
      "reduce",
      "hope"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The fire alarm rang during the training session. All staff were asked to leave the building _____ and gather in the parking lot.",
    "options": [
      "gradually",
      "sincerely",
      "overall",
      "immediately"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The company will raise prices _____ over the next three years. This will give customers time to adjust their budgets.",
    "options": [
      "gradually",
      "immediately",
      "sincerely",
      "finally"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "After three months of discussion, the board _____ approved the new office design. Construction will begin next week.",
    "options": [
      "sincerely",
      "finally",
      "furthermore",
      "overall"
    ],
    "answer": 1,
    "vocabIndex": 38
  },
  {
    "q": "A few guests complained about the slow elevator. _____, however, the hotel received excellent reviews from visitors this year.",
    "options": [
      "immediately",
      "sincerely",
      "overall",
      "gradually"
    ],
    "answer": 2,
    "vocabIndex": 39
  },
  {
    "q": "We truly _____ your quick reply to our questions. Your information helped us finish the report on time.",
    "options": [
      "consider",
      "arrange",
      "reduce",
      "appreciate"
    ],
    "answer": 3,
    "vocabIndex": 41
  },
  {
    "q": "Jenny Park ended her formal letter to the airline with the words 'Yours _____' and her full name. She mailed it the next morning.",
    "options": [
      "sincerely",
      "gradually",
      "immediately",
      "finally"
    ],
    "answer": 0,
    "vocabIndex": 42
  },
  {
    "q": "We _____ that you will enjoy your stay at our hotel. Please contact the front desk if you need anything during your visit.",
    "options": [
      "allow",
      "hope",
      "provide",
      "consider"
    ],
    "answer": 1,
    "vocabIndex": 40
  },
  {
    "q": "Before choosing a supplier, the new manager asked an experienced colleague for _____. He suggested comparing prices from at least three companies.",
    "options": [
      "benefit",
      "solution",
      "advice",
      "improvement"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Whose _____ was it to hold the sales meeting online? It saved everyone a lot of travel time and money.",
    "options": [
      "advice",
      "benefit",
      "improvement",
      "idea"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The city has a five-year _____ to build new bike lanes downtown. Work on the first route will start in April.",
    "options": [
      "plan",
      "advice",
      "benefit",
      "consideration"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The new factory will _____ about three hundred jobs for local residents. Construction is expected to finish next summer.",
    "options": [
      "solve",
      "create",
      "reduce",
      "allow"
    ],
    "answer": 1,
    "vocabIndex": 23
  }
];

const LOOKUP = {
  "advise": {
    "pos": "v.",
    "en_def": "to tell someone what you think they should do",
    "cn_def": "建議；勸告"
  },
  "advice": {
    "pos": "n.",
    "en_def": "an opinion about what someone should do",
    "cn_def": "建議；忠告"
  },
  "proposal": {
    "pos": "n.",
    "en_def": "a plan or idea that is formally suggested for others to consider",
    "cn_def": "提案；建議書"
  },
  "propose": {
    "pos": "v.",
    "en_def": "to formally suggest a plan or idea",
    "cn_def": "提議；提出"
  },
  "idea": {
    "pos": "n.",
    "en_def": "a thought or suggestion about what to do",
    "cn_def": "主意；想法"
  },
  "plan": {
    "pos": "n.",
    "en_def": "a set of steps decided in advance to do something",
    "cn_def": "計畫；方案"
  },
  "improvement": {
    "pos": "n.",
    "en_def": "a change that makes something better",
    "cn_def": "改善；改進"
  },
  "improve": {
    "pos": "v.",
    "en_def": "to make something better",
    "cn_def": "改善；提升"
  },
  "solution": {
    "pos": "n.",
    "en_def": "a way of dealing with a problem",
    "cn_def": "解決辦法"
  },
  "solve": {
    "pos": "v.",
    "en_def": "to find a way to deal with a problem",
    "cn_def": "解決"
  },
  "benefit": {
    "pos": "n.",
    "en_def": "a good result or advantage that something gives",
    "cn_def": "好處；益處"
  },
  "helpful": {
    "pos": "adj.",
    "en_def": "useful and making things easier",
    "cn_def": "有幫助的"
  },
  "useful": {
    "pos": "adj.",
    "en_def": "able to be used for a good purpose",
    "cn_def": "有用的"
  },
  "effective": {
    "pos": "adj.",
    "en_def": "producing the result that you want",
    "cn_def": "有效的"
  },
  "practical": {
    "pos": "adj.",
    "en_def": "sensible and likely to work in real situations",
    "cn_def": "實際的；可行的"
  },
  "reasonable": {
    "pos": "adj.",
    "en_def": "fair and sensible",
    "cn_def": "合理的"
  },
  "possible": {
    "pos": "adj.",
    "en_def": "able to happen or be done",
    "cn_def": "可能的；可行的"
  },
  "consider": {
    "pos": "v.",
    "en_def": "to think carefully about something before deciding",
    "cn_def": "考慮"
  },
  "consideration": {
    "pos": "n.",
    "en_def": "careful thought before making a decision",
    "cn_def": "考慮；斟酌"
  },
  "encourage": {
    "pos": "v.",
    "en_def": "to make someone more likely to do something",
    "cn_def": "鼓勵"
  },
  "support": {
    "pos": "v.",
    "en_def": "to agree with and help an idea or plan",
    "cn_def": "支持"
  },
  "allow": {
    "pos": "v.",
    "en_def": "to let someone do something",
    "cn_def": "允許"
  },
  "provide": {
    "pos": "v.",
    "en_def": "to give something that people need",
    "cn_def": "提供"
  },
  "create": {
    "pos": "v.",
    "en_def": "to make something new",
    "cn_def": "創造；建立"
  },
  "organize": {
    "pos": "v.",
    "en_def": "to arrange things in a clear and ordered way",
    "cn_def": "整理；組織"
  },
  "arrange": {
    "pos": "v.",
    "en_def": "to plan and prepare for something to happen",
    "cn_def": "安排"
  },
  "introduce": {
    "pos": "v.",
    "en_def": "to bring in something new for the first time",
    "cn_def": "引進；推出"
  },
  "increase": {
    "pos": "v.",
    "en_def": "to make something larger in number or amount",
    "cn_def": "增加"
  },
  "reduce": {
    "pos": "v.",
    "en_def": "to make something smaller in size or amount",
    "cn_def": "減少；降低"
  },
  "immediately": {
    "pos": "adv.",
    "en_def": "now, without waiting",
    "cn_def": "立刻；馬上"
  },
  "gradually": {
    "pos": "adv.",
    "en_def": "slowly, over a period of time",
    "cn_def": "逐漸地"
  },
  "perhaps": {
    "pos": "adv.",
    "en_def": "used to say that something is possible; maybe",
    "cn_def": "或許；也許"
  },
  "maybe": {
    "pos": "adv.",
    "en_def": "possibly; perhaps (less formal)",
    "cn_def": "也許；可能"
  },
  "for example": {
    "pos": "phr.",
    "en_def": "used to give a case that shows what you mean",
    "cn_def": "例如"
  },
  "such as": {
    "pos": "phr.",
    "en_def": "used before giving examples",
    "cn_def": "像是；例如"
  },
  "in addition": {
    "pos": "phr.",
    "en_def": "used to add another fact or idea; also",
    "cn_def": "此外；另外"
  },
  "furthermore": {
    "pos": "adv.",
    "en_def": "used to add more information that supports a point",
    "cn_def": "此外；而且"
  },
  "moreover": {
    "pos": "adv.",
    "en_def": "used to add another important point",
    "cn_def": "而且；此外"
  },
  "finally": {
    "pos": "adv.",
    "en_def": "used to introduce the last point; at last",
    "cn_def": "最後；終於"
  },
  "overall": {
    "pos": "adv.",
    "en_def": "when everything is considered; in general",
    "cn_def": "整體而言；總的來說"
  },
  "hope": {
    "pos": "v.",
    "en_def": "to want something to happen and think it may happen",
    "cn_def": "希望"
  },
  "appreciate": {
    "pos": "v.",
    "en_def": "to be grateful for something",
    "cn_def": "感激；感謝"
  },
  "sincerely": {
    "pos": "adv.",
    "en_def": "used at the end of a formal letter before your name; honestly",
    "cn_def": "誠摯地；（書信結尾）敬上"
  }
};

const EXTRA_GLOSSES = {};
