// Topic 441 Quiz Data: Week 星期
// Source word list: https://www.examword.com/group-topic/week — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T441 - Week 星期",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "weekday",
    "pos": "n.",
    "cn_def": "平日；工作日",
    "en_def": "any day from Monday to Friday",
    "sentence": "A: Is the new branch office open on Saturdays too, or should our clients only plan to visit when most people are working? B: It is only open on a {{BLANK}}, from nine in the morning until six in the evening, because the building's security staff and receptionists do not work on Saturdays or Sundays.",
    "cn": "A：新的分公司星期六也營業嗎？還是我們的客戶只能在大多數人上班的時候來訪？ B：它只在【平日】營業，從早上九點到晚上六點，因為大樓的保全人員和接待人員星期六和星期日不上班。"
  },
  {
    "word": "weekend",
    "pos": "n.",
    "cn_def": "週末",
    "en_def": "Saturday and Sunday, when many people do not work",
    "sentence": "A: Our sales team has been working late every night to finish the quarterly report, so do you think the manager will let us rest soon? B: Yes, she promised that nobody needs to come into the office this {{BLANK}}, so we can finally spend Saturday and Sunday with our families.",
    "cn": "A：我們的業務團隊每天晚上都加班趕季報，你覺得經理很快就會讓我們休息嗎？ B：會的，她答應這個【週末】沒有人需要進辦公室，所以我們終於可以和家人一起度過星期六和星期日了。"
  },
  {
    "word": "Monday",
    "pos": "n.",
    "cn_def": "星期一",
    "en_def": "the day after Sunday and before Tuesday",
    "sentence": "A: When will the new accounting software be installed on all of the computers in our department, since the old system keeps crashing? B: The technicians will set it up on Sunday night, so everything should be working properly when we arrive at the office first thing on {{BLANK}} morning.",
    "cn": "A：新的會計軟體什麼時候會安裝到我們部門的所有電腦上？舊系統一直當機。 B：技術人員會在星期日晚上安裝，所以當我們【星期一】一早到辦公室時，一切應該都能正常運作了。"
  },
  {
    "word": "Tuesday",
    "pos": "n.",
    "cn_def": "星期二",
    "en_def": "the day after Monday and before Wednesday",
    "sentence": "A: The client from Osaka wants to meet with us early next week, but I am busy with interviews all day Monday, so which day works for you? B: How about {{BLANK}} afternoon, the day after your interviews, when the large conference room on the third floor is still available?",
    "cn": "A：大阪的客戶想在下週初和我們開會，但我星期一整天都忙著面試，你哪一天方便？ B：【星期二】下午怎麼樣？就是你面試後的隔天，那時三樓的大會議室還有空。"
  },
  {
    "word": "Wednesday",
    "pos": "n.",
    "cn_def": "星期三",
    "en_def": "the day in the middle of the working week, after Tuesday",
    "sentence": "A: Why is the cafeteria on the ground floor always so crowded in the middle of the week, even though the food is the same every day? B: Because on {{BLANK}} the kitchen offers a half-price lunch special, and many employees from the neighboring buildings come over to enjoy the discount.",
    "cn": "A：為什麼一樓的員工餐廳在週間中間總是那麼擁擠，明明每天的食物都一樣？ B：因為【星期三】廚房會推出半價午餐特餐，很多附近大樓的員工都會過來享受這個折扣。"
  },
  {
    "word": "Thursday",
    "pos": "n.",
    "cn_def": "星期四",
    "en_def": "the day after Wednesday and before Friday",
    "sentence": "A: The printing company said our new product brochures would arrive before the trade show on Friday, but have you heard anything from them yet? B: Yes, they called this morning and promised to deliver all two thousand copies on {{BLANK}}, just one day before the show opens.",
    "cn": "A：印刷公司說我們的新產品型錄會在星期五的商展前送到，你有收到他們的消息了嗎？ B：有，他們今天早上打電話來，保證會在【星期四】送來全部兩千份，就在展覽開幕的前一天。"
  },
  {
    "word": "Friday",
    "pos": "n.",
    "cn_def": "星期五",
    "en_def": "the last working day of the week, before Saturday",
    "sentence": "A: Our team always seems more relaxed and cheerful at the end of the week, so is there a special reason for the good mood today? B: Every {{BLANK}} the company provides free pizza for lunch, and we are allowed to leave the office an hour early before the weekend starts.",
    "cn": "A：我們團隊在每週結束時似乎總是比較輕鬆愉快，今天心情這麼好有什麼特別原因嗎？ B：每個【星期五】公司都會提供免費的披薩當午餐，而且在週末開始前我們可以提早一小時下班。"
  },
  {
    "word": "Saturday",
    "pos": "n.",
    "cn_def": "星期六",
    "en_def": "the day after Friday and before Sunday",
    "sentence": "A: The shopping mall is planning a big opening event for its new electronics store, so when do the organizers expect the largest crowds? B: They chose {{BLANK}}, the first day of the weekend, because most families are free from work and school and usually go shopping together then.",
    "cn": "A：購物中心正在為新開幕的電子產品店籌備盛大的開幕活動，主辦單位預計哪一天人潮最多？ B：他們選了【星期六】，也就是週末的第一天，因為大多數家庭不用上班上學，通常會在那時一起去購物。"
  },
  {
    "word": "Sunday",
    "pos": "n.",
    "cn_def": "星期日",
    "en_def": "the day after Saturday and before Monday",
    "sentence": "A: Is the bank near our hotel open every day of the week, because I need to exchange some money before our flight leaves on the weekend? B: It opens on Saturday morning, but it is closed all day on {{BLANK}}, so you should go there tomorrow before noon to be safe.",
    "cn": "A：我們飯店附近的銀行每天都營業嗎？因為我需要在週末搭機前換一些錢。 B：它星期六早上有營業，但【星期日】整天都休息，所以為了保險起見，你應該明天中午前去。"
  },
  {
    "word": "weekly",
    "pos": "adj.",
    "cn_def": "每週的",
    "en_def": "happening once every week",
    "sentence": "A: How does the manager keep track of what everyone in the marketing department is doing, since we all work on so many different projects? B: She holds a {{BLANK}} meeting every Monday morning, where each person explains what they finished last week and what they plan to do next.",
    "cn": "A：經理是怎麼掌握行銷部每個人在做什麼的？我們每個人都在做很多不同的專案。 B：她每個星期一早上都會召開【每週】會議，每個人都要說明上週完成了什麼以及接下來打算做什麼。"
  },
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "時間表；行程",
    "en_def": "a plan that lists the times when things will happen",
    "sentence": "A: Several passengers are complaining at the front desk because the airport shuttle bus did not come at eight o'clock as they expected, so what happened? B: The bus company changed its {{BLANK}} last week, and now the shuttle leaves every forty-five minutes instead of every half hour, but nobody updated the sign.",
    "cn": "A：好幾位乘客在櫃檯抱怨，因為機場接駁車沒有像他們預期的在八點來，發生了什麼事？ B：巴士公司上週更改了【時間表】，現在接駁車每四十五分鐘發一班，而不是每半小時一班，但沒有人更新告示牌。"
  },
  {
    "word": "routine",
    "pos": "n.",
    "cn_def": "例行公事；慣例",
    "en_def": "the usual order in which you do things every day",
    "sentence": "A: You always seem so calm and organized in the morning, even when the office is busy, so how do you manage to stay so relaxed? B: My {{BLANK}} never changes: I arrive at eight, check my emails, make a cup of coffee, and write a short list of the most important tasks.",
    "cn": "A：即使辦公室很忙，你早上總是看起來那麼冷靜有條理，你是怎麼保持這麼放鬆的？ B：我的【例行公事】從來不變：八點到公司、查看電子郵件、泡一杯咖啡，然後寫一張最重要工作的簡短清單。"
  },
  {
    "word": "busy",
    "pos": "adj.",
    "cn_def": "忙碌的",
    "en_def": "having a lot of things to do",
    "sentence": "A: I tried to call the travel agency several times this afternoon to change our hotel reservation, but nobody answered, so is something wrong? B: Their staff are extremely {{BLANK}} this month because of the holiday season, so it might be easier to send them an email and wait for a reply.",
    "cn": "A：我今天下午打了好幾次電話給旅行社想更改飯店訂房，但都沒有人接，是出了什麼問題嗎？ B：因為假期旺季，他們的員工這個月非常【忙碌】，所以寄電子郵件給他們然後等回覆可能比較容易。"
  },
  {
    "word": "free",
    "pos": "adj.",
    "cn_def": "有空的",
    "en_def": "not busy; having no work or plans at a certain time",
    "sentence": "A: The director wants to discuss the new budget with our team before the end of the week, but everyone's calendar is so full, so when can we meet? B: I checked everybody's online calendar, and we are all {{BLANK}} on Thursday afternoon between two and four, so let's book the meeting room then.",
    "cn": "A：主管想在本週結束前和我們團隊討論新預算，但大家的行事曆都排得很滿，我們什麼時候可以開會？ B：我查看了每個人的線上行事曆，我們星期四下午兩點到四點都【有空】，那我們就預約那個時段的會議室吧。"
  },
  {
    "word": "plan",
    "pos": "v.",
    "cn_def": "計畫；打算",
    "en_def": "to decide what you are going to do and how you will do it",
    "sentence": "A: The company's tenth anniversary is coming up next month, and the president wants a special celebration for all the employees and their families. B: We should {{BLANK}} the event carefully, so let's form a small committee to choose a location, order the food, and send out the invitations soon.",
    "cn": "A：公司十週年紀念日下個月就要到了，總裁希望為所有員工和他們的家人辦一場特別的慶祝活動。 B：我們應該仔細【計畫】這個活動，所以我們成立一個小委員會來挑選地點、訂餐點，並盡快寄出邀請函吧。"
  },
  {
    "word": "organize",
    "pos": "v.",
    "cn_def": "組織；安排；整理",
    "en_def": "to arrange things or events in a clear, sensible way",
    "sentence": "A: The storage room is so messy that I spent twenty minutes looking for a box of printer paper this morning, so can we do something about it? B: Let's ask the new assistant to {{BLANK}} all the supplies on the shelves by type and put clear labels on every box.",
    "cn": "A：儲藏室亂到我今天早上花了二十分鐘找一箱印表機用紙，我們能想點辦法嗎？ B：我們請新來的助理把所有用品按種類【整理】到架子上，並在每個箱子上貼清楚的標籤吧。"
  },
  {
    "word": "prepare",
    "pos": "v.",
    "cn_def": "準備",
    "en_def": "to make something or someone ready",
    "sentence": "A: The investors from Singapore are visiting our factory on Wednesday, and they want to see how our production line works, so what should we do? B: We need to {{BLANK}} a short presentation and a guided tour, and we should make sure the factory floor is clean and safe before they arrive.",
    "cn": "A：新加坡的投資人星期三要來參觀我們的工廠，他們想看看我們的生產線如何運作，我們該怎麼做？ B：我們需要【準備】一場簡短的簡報和導覽，並且在他們到達前確保工廠廠區乾淨又安全。"
  },
  {
    "word": "deadline",
    "pos": "n.",
    "cn_def": "截止期限",
    "en_def": "the latest time by which something must be finished",
    "sentence": "A: Why is everyone in the design department staying so late tonight, even though they usually leave the office at six o'clock? B: The {{BLANK}} for the new advertising campaign is tomorrow at noon, and the client will cancel the contract if the designs are not delivered on time.",
    "cn": "A：為什麼設計部今晚每個人都留到這麼晚，他們通常六點就下班了？ B：新廣告活動的【截止期限】是明天中午，如果設計稿沒有準時交出，客戶就會取消合約。"
  },
  {
    "word": "task",
    "pos": "n.",
    "cn_def": "任務；工作",
    "en_def": "a piece of work that you have to do",
    "sentence": "A: I just started working here on Monday, and I am not sure what I should do first this morning, so could you give me some advice? B: Your first {{BLANK}} is to enter the customer orders from last week into the database, and after that you can help Jenny answer the phones.",
    "cn": "A：我星期一才開始在這裡工作，不太確定今天早上應該先做什麼，你可以給我一些建議嗎？ B：你的第一項【任務】是把上週的客戶訂單輸入資料庫，之後你可以幫珍妮接電話。"
  },
  {
    "word": "meeting",
    "pos": "n.",
    "cn_def": "會議",
    "en_def": "an event when people come together to discuss something",
    "sentence": "A: Do you know why the conference room on the fifth floor is locked and all the managers seem to be inside with the door closed? B: They are having an important {{BLANK}} with the lawyers to discuss the new contract, so they asked not to be disturbed until lunchtime.",
    "cn": "A：你知道為什麼五樓的會議室鎖著，而且所有經理似乎都在裡面關著門嗎？ B：他們正在和律師開一場重要的【會議】討論新合約，所以他們要求午餐時間前不要被打擾。"
  },
  {
    "word": "appointment",
    "pos": "n.",
    "cn_def": "約會；預約",
    "en_def": "an arranged time to meet someone, often for business or health",
    "sentence": "A: Can you join us for the sales training session on Friday afternoon, because the trainer is excellent and the topic is very useful? B: I'm sorry, but I have an {{BLANK}} with my dentist at three o'clock, and it was very difficult to get a time slot this month.",
    "cn": "A：你星期五下午可以參加我們的銷售培訓課程嗎？講師非常優秀，主題也很實用。 B：很抱歉，我三點和牙醫有【預約】，這個月要排到時段非常困難。"
  },
  {
    "word": "holiday",
    "pos": "n.",
    "cn_def": "假日；節日",
    "en_def": "a day when most people do not work, often a special day",
    "sentence": "A: Why is the post office across the street closed today, even though it is a normal Wednesday and the weather is good? B: Today is a national {{BLANK}}, so all government offices, banks, and schools are closed, but most shops and restaurants are still open for business.",
    "cn": "A：為什麼對街的郵局今天沒開？明明是普通的星期三，天氣也很好。 B：今天是國定【假日】，所以所有政府機關、銀行和學校都休息，但大多數商店和餐廳仍照常營業。"
  },
  {
    "word": "rest",
    "pos": "v.",
    "cn_def": "休息",
    "en_def": "to stop working or moving so that you can relax and feel better",
    "sentence": "A: You have been working on that difficult spreadsheet for four hours without a break, so don't you feel tired and stiff? B: You're right, my eyes really hurt now, so I will {{BLANK}} for fifteen minutes in the lounge and have some tea before I continue.",
    "cn": "A：你已經連續四小時沒休息地處理那個困難的試算表了，不覺得累又僵硬嗎？ B：你說得對，我現在眼睛真的很痛，所以我要在休息室【休息】十五分鐘、喝點茶再繼續。"
  },
  {
    "word": "relax",
    "pos": "v.",
    "cn_def": "放鬆",
    "en_def": "to become calm and stop worrying or working",
    "sentence": "A: The big project finally ended yesterday, and the client said they were very satisfied with the results, so what are you going to do this evening? B: I am going to {{BLANK}} at home, watch a movie, and go to bed early, because I have hardly slept at all for the past two weeks.",
    "cn": "A：大型專案昨天終於結束了，客戶說他們對成果非常滿意，你今晚打算做什麼？ B：我要在家【放鬆】一下、看部電影，然後早點睡，因為過去兩週我幾乎都沒睡。"
  },
  {
    "word": "exercise",
    "pos": "v.",
    "cn_def": "運動",
    "en_def": "to move your body to stay healthy and strong",
    "sentence": "A: You look much healthier and more energetic these days, so did you change your diet or start a new hobby? B: I joined the gym across from our office, and now I {{BLANK}} there for forty minutes every day during lunch, which really helps me stay focused in the afternoon.",
    "cn": "A：你最近看起來健康多了也更有活力，你是改變了飲食還是開始了新的嗜好？ B：我加入了公司對面的健身房，現在每天午餐時間都在那裡【運動】四十分鐘，這真的幫助我下午保持專注。"
  },
  {
    "word": "study",
    "pos": "v.",
    "cn_def": "學習；讀書",
    "en_def": "to spend time learning about a subject",
    "sentence": "A: I heard you are taking an evening class at the community college, so how do you find time for it with such a busy job? B: I {{BLANK}} accounting for two hours every Tuesday and Thursday night, because I want to get a professional certificate and apply for a promotion next year.",
    "cn": "A：我聽說你在社區大學上夜間課程，工作這麼忙，你怎麼找得出時間？ B：我每週二和週四晚上【學習】會計兩小時，因為我想取得專業證照，明年申請升遷。"
  },
  {
    "word": "review",
    "pos": "v.",
    "cn_def": "審查；檢討；複習",
    "en_def": "to look at something again carefully to check it",
    "sentence": "A: The contract with the new supplier is almost ready, but are you sure we can send it to them this afternoon without any problems? B: First, our legal department needs to {{BLANK}} every page carefully, because last year a small mistake in a contract cost the company a lot of money.",
    "cn": "A：和新供應商的合約差不多準備好了，但你確定我們今天下午可以毫無問題地寄給他們嗎？ B：首先，我們的法務部需要仔細【審查】每一頁，因為去年合約中的一個小錯誤讓公司損失了很多錢。"
  },
  {
    "word": "start",
    "pos": "v.",
    "cn_def": "開始",
    "en_def": "to begin doing something",
    "sentence": "A: The new employees are arriving tomorrow morning, and they seem a little nervous about their first day, so what time should they come? B: Training will {{BLANK}} at nine o'clock sharp in Room 204, so please tell them to come fifteen minutes early to pick up their name badges and laptops.",
    "cn": "A：新進員工明天早上就要報到了，他們對第一天似乎有點緊張，他們應該幾點來？ B：培訓會在204室九點整準時【開始】，所以請告訴他們提早十五分鐘來領取名牌和筆電。"
  },
  {
    "word": "finish",
    "pos": "v.",
    "cn_def": "完成；結束",
    "en_def": "to complete something or reach the end of it",
    "sentence": "A: The manager needs the sales figures for her presentation to the board of directors tomorrow, so how long will the report take? B: I need about two more hours to check the numbers and add the charts, so I should {{BLANK}} it before six o'clock this evening.",
    "cn": "A：經理明天向董事會簡報需要銷售數據，那份報告還要多久？ B：我大約還需要兩小時核對數字並加上圖表，所以應該可以在今晚六點前【完成】。"
  },
  {
    "word": "early",
    "pos": "adv.",
    "cn_def": "提早；早",
    "en_def": "before the usual or expected time",
    "sentence": "A: The traffic on the highway is usually terrible on Monday mornings, so how do you always manage to get to the office before everyone else? B: I leave home very {{BLANK}}, at around six-thirty, so the roads are still quiet and I can have breakfast at the café downstairs.",
    "cn": "A：星期一早上高速公路的交通通常很糟，你怎麼總是能比所有人都先到辦公室？ B：我很【早】就出門，大約六點半，所以路上還很安靜，我還能在樓下的咖啡廳吃早餐。"
  },
  {
    "word": "late",
    "pos": "adv.",
    "cn_def": "晚；遲",
    "en_def": "after the usual or expected time",
    "sentence": "A: Why did the department head look so unhappy during this morning's meeting, even though our sales numbers were good? B: Three people arrived twenty minutes {{BLANK}} because of the heavy rain, so the meeting started much later than planned and some important topics were not discussed.",
    "cn": "A：為什麼部門主管在今天早上的會議上看起來那麼不高興？我們的銷售數字明明很好。 B：因為大雨，有三個人【遲】到了二十分鐘，所以會議比預定晚很多才開始，一些重要的議題也沒有討論到。"
  },
  {
    "word": "soon",
    "pos": "adv.",
    "cn_def": "很快；不久",
    "en_def": "in a short time from now",
    "sentence": "A: The customer has called three times today asking about the missing package, and she is getting quite angry, so what should I tell her? B: Please tell her that the delivery company has found the box and it will arrive very {{BLANK}}, probably by tomorrow afternoon at the latest.",
    "cn": "A：那位客戶今天已經打了三次電話詢問遺失的包裹，她越來越生氣，我該怎麼跟她說？ B：請告訴她貨運公司已經找到箱子了，它【很快】就會送到，最晚大概明天下午。"
  },
  {
    "word": "ahead",
    "pos": "adv.",
    "cn_def": "提前；預先",
    "en_def": "before; in advance or in front",
    "sentence": "A: The restaurant near the convention center is always full during the trade fair, so how can we be sure to get a table for our clients? B: We should call and book a table two days {{BLANK}}, and we can also ask for a quiet corner so that we can talk about business.",
    "cn": "A：會展中心附近的餐廳在商展期間總是客滿，我們要怎麼確保能為客戶訂到位子？ B：我們應該【提前】兩天打電話訂位，也可以要求安靜的角落座位，這樣我們才能談生意。"
  },
  {
    "word": "next",
    "pos": "adj.",
    "cn_def": "下一個的",
    "en_def": "coming right after this one",
    "sentence": "A: I missed the train to the airport by only two minutes, and my flight to Hong Kong leaves in less than two hours, so what can I do? B: Don't worry, the {{BLANK}} train leaves in ten minutes from Platform 3, and it takes only thirty minutes to get to the airport.",
    "cn": "A：我只差兩分鐘就錯過了往機場的火車，而我飛香港的班機不到兩小時就要起飛，我該怎麼辦？ B：別擔心，【下一班】火車十分鐘後從第三月台出發，到機場只要三十分鐘。"
  },
  {
    "word": "last",
    "pos": "adj.",
    "cn_def": "上一個的；最近的",
    "en_def": "the one before this one; most recent",
    "sentence": "A: The sales results this month are much better than we expected, so do you know why customers are suddenly buying so many of our products? B: Our new television commercial started showing {{BLANK}} month, and since then the number of online orders has almost doubled, especially among young customers.",
    "cn": "A：這個月的銷售成績比我們預期的好很多，你知道為什麼顧客突然買了這麼多我們的產品嗎？ B：我們的新電視廣告從【上】個月開始播放，從那時起網路訂單數量幾乎翻倍，尤其是年輕顧客。"
  }
];

const MCQS = [
  {
    "q": "The museum is very crowded on Saturdays and Sundays. If you want a quiet visit, it is better to go on a _____.",
    "options": [
      "weekday",
      "routine",
      "weekend",
      "deadline"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Most of our staff do not work on Saturday or Sunday. The office is closed every _____ except during the busy season.",
    "options": [
      "routine",
      "weekend",
      "weekday",
      "meeting"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The office was closed on Sunday for the holiday. Staff will return to work the next day, on _____ morning.",
    "options": [
      "Thursday",
      "Friday",
      "Monday",
      "Saturday"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The training course begins on Monday and lasts two days. It will end on _____ afternoon at five o'clock.",
    "options": [
      "Sunday",
      "Friday",
      "Saturday",
      "Tuesday"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The supplier visits us every Tuesday. This week, however, he is sick, so he will come one day later, on _____.",
    "options": [
      "Monday",
      "Wednesday",
      "Sunday",
      "Saturday"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The trade show opens on Friday. Our booth must be ready the day before, so the workers will set it up on _____.",
    "options": [
      "Thursday",
      "Saturday",
      "Tuesday",
      "Monday"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "We work Monday through Friday. On the last working day, _____, employees may wear casual clothes to the office.",
    "options": [
      "Monday",
      "Wednesday",
      "Tuesday",
      "Friday"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The store is open six days a week. It closes only on Sunday, so the last shopping day of each week is _____.",
    "options": [
      "Monday",
      "Thursday",
      "Saturday",
      "Wednesday"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The team leader sends a short report to the director every Friday. This _____ update helps everyone follow the project.",
    "options": [
      "weekly",
      "early",
      "busy",
      "free"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The train company has changed its _____ for the holiday season. Several morning trains will now leave thirty minutes later.",
    "options": [
      "task",
      "holiday",
      "schedule",
      "meeting"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Checking emails and returning calls is part of my daily _____. I always do these things before nine o'clock.",
    "options": [
      "appointment",
      "routine",
      "deadline",
      "weekend"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The customer service line is very _____ on Monday mornings. Callers often have to wait more than ten minutes.",
    "options": [
      "free",
      "weekly",
      "next",
      "busy"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "I have no meetings on Thursday afternoon. If you are also _____ then, we can discuss the new budget.",
    "options": [
      "free",
      "busy",
      "late",
      "last"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The managers need to _____ next year's sales events carefully. They will choose dates and locations at Friday's meeting.",
    "options": [
      "rest",
      "relax",
      "finish",
      "plan"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Ms. Chen will _____ the annual company picnic this year. She has already booked a park and ordered the food.",
    "options": [
      "rest",
      "relax",
      "organize",
      "exercise"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Before the job interview, you should _____ answers to common questions. This will help you feel more confident.",
    "options": [
      "rest",
      "prepare",
      "relax",
      "start"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The _____ for submitting travel expense forms is the last day of each month. Late forms will not be accepted.",
    "options": [
      "holiday",
      "weekday",
      "routine",
      "deadline"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "All department heads must attend the _____ in Room 301 at ten o'clock. The president will announce the new policy.",
    "options": [
      "meeting",
      "task",
      "routine",
      "deadline"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "I have an _____ with my doctor at four o'clock tomorrow. I will need to leave the office a little early.",
    "options": [
      "schedule",
      "appointment",
      "routine",
      "deadline"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The banks will be closed on Monday because it is a national _____. They will open again on Tuesday morning.",
    "options": [
      "task",
      "routine",
      "holiday",
      "meeting"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "After working twelve hours, the drivers must stop and _____. The law says they need at least eight hours off.",
    "options": [
      "rest",
      "prepare",
      "organize",
      "review"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The new lounge gives employees a quiet place to _____ during breaks. It has comfortable sofas and free coffee.",
    "options": [
      "review",
      "organize",
      "prepare",
      "relax"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Doctors say office workers should _____ at least thirty minutes a day. Walking during lunch is a good way to start.",
    "options": [
      "review",
      "exercise",
      "organize",
      "prepare"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Many employees _____ English in the evening after work. The company pays half the cost of the classes.",
    "options": [
      "rest",
      "relax",
      "study",
      "finish"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Please _____ the contract carefully before you sign it. Check every number and date to make sure they are correct.",
    "options": [
      "relax",
      "rest",
      "exercise",
      "review"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The concert will _____ at seven-thirty sharp. Guests who arrive after that time will have to wait outside.",
    "options": [
      "rest",
      "start",
      "relax",
      "exercise"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Please come to the airport two hours _____ for international flights. The security lines are often very long.",
    "options": [
      "early",
      "late",
      "soon",
      "last"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The flight from Tokyo arrived two hours _____ because of the storm. Several passengers missed their connecting flights.",
    "options": [
      "early",
      "ahead",
      "late",
      "soon"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Hotels downtown fill up quickly during the festival. You should book your room at least a month _____.",
    "options": [
      "late",
      "soon",
      "last",
      "ahead"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "This week's training was cancelled because the trainer was sick. It will take place _____ week instead.",
    "options": [
      "next",
      "weekly",
      "busy",
      "free"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "weekday": {
    "pos": "n.",
    "en_def": "any day from Monday to Friday",
    "cn_def": "平日；工作日"
  },
  "weekend": {
    "pos": "n.",
    "en_def": "Saturday and Sunday, when many people do not work",
    "cn_def": "週末"
  },
  "monday": {
    "pos": "n.",
    "en_def": "the day after Sunday and before Tuesday",
    "cn_def": "星期一"
  },
  "tuesday": {
    "pos": "n.",
    "en_def": "the day after Monday and before Wednesday",
    "cn_def": "星期二"
  },
  "wednesday": {
    "pos": "n.",
    "en_def": "the day in the middle of the working week, after Tuesday",
    "cn_def": "星期三"
  },
  "thursday": {
    "pos": "n.",
    "en_def": "the day after Wednesday and before Friday",
    "cn_def": "星期四"
  },
  "friday": {
    "pos": "n.",
    "en_def": "the last working day of the week, before Saturday",
    "cn_def": "星期五"
  },
  "saturday": {
    "pos": "n.",
    "en_def": "the day after Friday and before Sunday",
    "cn_def": "星期六"
  },
  "sunday": {
    "pos": "n.",
    "en_def": "the day after Saturday and before Monday",
    "cn_def": "星期日"
  },
  "weekly": {
    "pos": "adj.",
    "en_def": "happening once every week",
    "cn_def": "每週的"
  },
  "schedule": {
    "pos": "n.",
    "en_def": "a plan that lists the times when things will happen",
    "cn_def": "時間表；行程"
  },
  "routine": {
    "pos": "n.",
    "en_def": "the usual order in which you do things every day",
    "cn_def": "例行公事；慣例"
  },
  "busy": {
    "pos": "adj.",
    "en_def": "having a lot of things to do",
    "cn_def": "忙碌的"
  },
  "free": {
    "pos": "adj.",
    "en_def": "not busy; having no work or plans at a certain time",
    "cn_def": "有空的"
  },
  "plan": {
    "pos": "v.",
    "en_def": "to decide what you are going to do and how you will do it",
    "cn_def": "計畫；打算"
  },
  "organize": {
    "pos": "v.",
    "en_def": "to arrange things or events in a clear, sensible way",
    "cn_def": "組織；安排；整理"
  },
  "prepare": {
    "pos": "v.",
    "en_def": "to make something or someone ready",
    "cn_def": "準備"
  },
  "deadline": {
    "pos": "n.",
    "en_def": "the latest time by which something must be finished",
    "cn_def": "截止期限"
  },
  "task": {
    "pos": "n.",
    "en_def": "a piece of work that you have to do",
    "cn_def": "任務；工作"
  },
  "meeting": {
    "pos": "n.",
    "en_def": "an event when people come together to discuss something",
    "cn_def": "會議"
  },
  "appointment": {
    "pos": "n.",
    "en_def": "an arranged time to meet someone, often for business or health",
    "cn_def": "約會；預約"
  },
  "holiday": {
    "pos": "n.",
    "en_def": "a day when most people do not work, often a special day",
    "cn_def": "假日；節日"
  },
  "rest": {
    "pos": "v.",
    "en_def": "to stop working or moving so that you can relax and feel better",
    "cn_def": "休息"
  },
  "relax": {
    "pos": "v.",
    "en_def": "to become calm and stop worrying or working",
    "cn_def": "放鬆"
  },
  "exercise": {
    "pos": "v.",
    "en_def": "to move your body to stay healthy and strong",
    "cn_def": "運動"
  },
  "study": {
    "pos": "v.",
    "en_def": "to spend time learning about a subject",
    "cn_def": "學習；讀書"
  },
  "review": {
    "pos": "v.",
    "en_def": "to look at something again carefully to check it",
    "cn_def": "審查；檢討；複習"
  },
  "start": {
    "pos": "v.",
    "en_def": "to begin doing something",
    "cn_def": "開始"
  },
  "finish": {
    "pos": "v.",
    "en_def": "to complete something or reach the end of it",
    "cn_def": "完成；結束"
  },
  "early": {
    "pos": "adv.",
    "en_def": "before the usual or expected time",
    "cn_def": "提早；早"
  },
  "late": {
    "pos": "adv.",
    "en_def": "after the usual or expected time",
    "cn_def": "晚；遲"
  },
  "soon": {
    "pos": "adv.",
    "en_def": "in a short time from now",
    "cn_def": "很快；不久"
  },
  "ahead": {
    "pos": "adv.",
    "en_def": "before; in advance or in front",
    "cn_def": "提前；預先"
  },
  "next": {
    "pos": "adj.",
    "en_def": "coming right after this one",
    "cn_def": "下一個的"
  },
  "last": {
    "pos": "adj.",
    "en_def": "the one before this one; most recent",
    "cn_def": "上一個的；最近的"
  }
};

const EXTRA_GLOSSES = {};
