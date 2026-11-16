// Topic 245 Quiz Data: Morning 早晨
// Source word list: https://www.examword.com/group-topic/morning — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T245 - Morning 早晨",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "dawn",
    "pos": "n.",
    "cn_def": "黎明；拂曉",
    "en_def": "the time early in the morning when light first appears",
    "sentence": "A: Why did the delivery team leave the warehouse so early today, when their first stop is only twenty minutes away from the office? B: The manager wanted them to load the trucks at {{BLANK}}, before the heat became too strong, because several boxes contain fresh food that could spoil quickly in the afternoon sun.",
    "cn": "A：為什麼送貨團隊今天這麼早就離開倉庫，他們的第一站離辦公室只有二十分鐘路程而已？ B：經理希望他們在【黎明】時裝車，趁天氣還沒變得太熱，因為有幾箱裝的是新鮮食物，在下午的陽光下很快就會壞掉。"
  },
  {
    "word": "sunrise",
    "pos": "n.",
    "cn_def": "日出",
    "en_def": "the time when the sun first appears in the morning",
    "sentence": "A: The hotel brochure says guests can join a special tour on the rooftop terrace, but what time does it actually start, and is breakfast included in the price? B: It starts just before {{BLANK}}, around five thirty, so guests can watch the sky turn orange over the harbor while enjoying a light breakfast that is included.",
    "cn": "A：飯店手冊上說住客可以參加屋頂露台的特別導覽，但實際上幾點開始？價格有包含早餐嗎？ B：在【日出】前開始，大約五點半，讓住客一邊享用含在費用內的簡單早餐，一邊看著港口上空的天色變成橘色。"
  },
  {
    "word": "daybreak",
    "pos": "n.",
    "cn_def": "破曉；黎明",
    "en_def": "the time in the morning when daylight first appears",
    "sentence": "A: Are the farmers who supply our restaurant still able to deliver vegetables on Monday mornings, even though the new highway construction has closed several roads? B: Yes, they have agreed to start driving at {{BLANK}} and use a smaller country road, so the vegetables should arrive before our kitchen staff begin preparing lunch.",
    "cn": "A：供應我們餐廳的農夫們，在新高速公路施工封閉了好幾條道路的情況下，週一早上還能送蔬菜來嗎？ B：可以，他們已經同意在【破曉】時就出發並改走一條較小的鄉間道路，所以蔬菜應該會在廚房員工開始準備午餐前送到。"
  },
  {
    "word": "early",
    "pos": "adj.",
    "cn_def": "早的；提早的",
    "en_def": "happening near the beginning of the day or before the usual time",
    "sentence": "A: Should I book the morning flight to Singapore or the evening one for next week's sales conference with our new partners? B: I would choose the {{BLANK}} flight, because you will arrive before lunch, have time to check into the hotel, and still be able to review your presentation slides calmly before the welcome dinner.",
    "cn": "A：下週要和新合作夥伴開業務會議，我應該訂飛往新加坡的早上班機還是晚上班機？ B：我會選【早】班的航班，因為你會在午餐前抵達，有時間辦理飯店入住，而且在歡迎晚宴前還能從容地複習簡報投影片。"
  },
  {
    "word": "bright",
    "pos": "adj.",
    "cn_def": "明亮的",
    "en_def": "full of light; shining strongly",
    "sentence": "A: The new office on the tenth floor has much larger windows than our old one, but do you think the light will bother people who work on computers all day? B: It is very {{BLANK}} in the morning when the sun comes in from the east, so the company is installing blinds that staff can adjust whenever they need less glare.",
    "cn": "A：十樓的新辦公室窗戶比我們舊的大得多，但你覺得光線會不會打擾整天用電腦工作的人？ B：早上太陽從東邊照進來時非常【明亮】，所以公司正在安裝員工需要減少眩光時就能調整的百葉窗。"
  },
  {
    "word": "fresh",
    "pos": "adj.",
    "cn_def": "新鮮的",
    "en_def": "recently made or picked; not old",
    "sentence": "A: Why do so many customers line up outside the small bakery across from the train station every weekday morning before work? B: The owner bakes everything herself at four o'clock, so the bread is still warm and {{BLANK}} when commuters stop by on their way to the office, and her prices are reasonable too.",
    "cn": "A：為什麼每個平日早上上班前，都有那麼多顧客在火車站對面的小麵包店外排隊？ B：老闆凌晨四點就親手烘焙所有東西，所以通勤族上班途中順道過去時，麵包還是溫熱又【新鮮】的，而且她的價格也很合理。"
  },
  {
    "word": "peaceful",
    "pos": "adj.",
    "cn_def": "寧靜的；平靜的",
    "en_def": "calm and quiet, without noise or trouble",
    "sentence": "A: How do you manage to write all those detailed monthly reports without getting distracted by phone calls and questions from your coworkers? B: I come in an hour before everyone else, because the office is completely {{BLANK}} then, and I can finish most of my writing before the phones start ringing at nine.",
    "cn": "A：你怎麼能寫完那些詳細的月報，而不被電話和同事的問題分心？ B：我比其他人早一個小時進公司，因為那時辦公室非常【寧靜】，我可以在九點電話開始響之前完成大部分的寫作。"
  },
  {
    "word": "quiet",
    "pos": "adj.",
    "cn_def": "安靜的；清閒的",
    "en_def": "with little noise or activity",
    "sentence": "A: Is there a good time to visit the main branch of the bank if I need to open a business account and ask several questions about loans? B: Try going on a weekday right after it opens at nine, because it is usually {{BLANK}} then, and a staff member will have enough time to explain everything clearly.",
    "cn": "A：如果我要開立企業帳戶並詢問幾個貸款問題，什麼時候去銀行總行比較好？ B：試試平日九點一開門就去，因為那時通常很【安靜】，行員會有足夠的時間把一切解釋清楚。"
  },
  {
    "word": "cool",
    "pos": "adj.",
    "cn_def": "涼爽的",
    "en_def": "a little cold in a pleasant way",
    "sentence": "A: The outdoor company sports day is scheduled for next Saturday, but aren't you worried that many employees will feel tired in the summer heat? B: That's why we moved the races to seven in the morning, when the air is still {{BLANK}}, and we will finish all activities before the temperature rises around noon.",
    "cn": "A：公司戶外運動會排在下週六，但你不擔心很多員工會在夏天的高溫下感到疲累嗎？ B：所以我們把賽跑移到早上七點，那時空氣還很【涼爽】，而且我們會在中午氣溫升高前結束所有活動。"
  },
  {
    "word": "routine",
    "pos": "n.",
    "cn_def": "例行公事；慣例",
    "en_def": "the usual things you do in the same order every day",
    "sentence": "A: You always seem so calm and organized when you arrive at the office, even on days when we have important client meetings scheduled. B: I follow the same morning {{BLANK}} every day: I wake up at six, check my calendar over breakfast, and take the early train, so nothing surprises me before work.",
    "cn": "A：你到辦公室時總是看起來很冷靜又有條理，即使是排了重要客戶會議的日子也一樣。 B：我每天都遵循同樣的晨間【例行公事】：六點起床、吃早餐時查看行事曆、搭早班火車，所以上班前沒有什麼事會讓我措手不及。"
  },
  {
    "word": "alarm",
    "pos": "n.",
    "cn_def": "鬧鐘；警報器",
    "en_def": "a clock or device that makes a sound to wake you up",
    "sentence": "A: Why did you miss the start of the training session this morning, when you are usually the first person to arrive at the office? B: The power went out in my apartment building last night, so my {{BLANK}} did not go off, and I woke up forty minutes later than usual.",
    "cn": "A：你平常總是第一個到辦公室，今天早上為什麼錯過了培訓課程的開頭？ B：昨晚我住的公寓大樓停電，所以我的【鬧鐘】沒響，我比平常晚了四十分鐘才醒來。"
  },
  {
    "word": "wake",
    "pos": "v.",
    "cn_def": "醒來；叫醒",
    "en_def": "to stop sleeping, or to make someone stop sleeping",
    "sentence": "A: The hotel guest in room 512 has asked the front desk for help because he has a very important meeting downtown tomorrow morning. B: I will arrange a phone call to {{BLANK}} him up at six fifteen, and I will also ask the restaurant to prepare a breakfast box he can take in the taxi.",
    "cn": "A：512號房的房客請櫃台幫忙，因為他明天早上在市中心有一場非常重要的會議。 B：我會安排在六點十五分打電話【叫醒】他，也會請餐廳準備一份他可以在計程車上吃的早餐盒。"
  },
  {
    "word": "rise",
    "pos": "v.",
    "cn_def": "升起；上升",
    "en_def": "to move up; (of the sun) to appear in the sky",
    "sentence": "A: Our team is planning a photo shoot for the new hiking boots on the mountain, but what time do the photographers need to be ready? B: They should be at the top by five forty, because the sun will {{BLANK}} soon after that, and the soft morning light will make the product look beautiful.",
    "cn": "A：我們團隊計畫在山上為新款登山靴拍照，但攝影師需要幾點準備好？ B：他們應該在五點四十分前抵達山頂，因為太陽不久後就會【升起】，柔和的晨光會讓產品看起來很漂亮。"
  },
  {
    "word": "stretch",
    "pos": "v.",
    "cn_def": "伸展；舒展",
    "en_def": "to make your arms, legs, or body as long as possible to relax your muscles",
    "sentence": "A: My back always hurts after the long drive to work, and I feel stiff during the first meeting of the day. What do you suggest? B: Before you start working, take five minutes to {{BLANK}} your arms, shoulders, and legs next to your desk, and you will feel much more comfortable and alert.",
    "cn": "A：開長途車上班後我的背總是很痛，一天的第一場會議時都覺得身體僵硬。你有什麼建議？ B：開始工作前，花五分鐘在辦公桌旁【伸展】你的手臂、肩膀和腿，你就會覺得舒服得多、也更有精神。"
  },
  {
    "word": "yawn",
    "pos": "v.",
    "cn_def": "打哈欠",
    "en_def": "to open your mouth wide and breathe in because you are tired or bored",
    "sentence": "A: Did the new interns seem interested during the long safety presentation that started at eight o'clock this morning in the conference room? B: Not really, several of them began to {{BLANK}} after twenty minutes because they had arrived very early, so next time we should add a short break and some coffee.",
    "cn": "A：今天早上八點在會議室開始的冗長安全簡報中，新來的實習生看起來有興趣嗎？ B：不太有，二十分鐘後有好幾個人開始【打哈欠】，因為他們很早就到了，所以下次我們應該加入短暫的休息時間並提供一些咖啡。"
  },
  {
    "word": "breakfast",
    "pos": "n.",
    "cn_def": "早餐",
    "en_def": "the first meal of the day",
    "sentence": "A: Does the conference package for our sales team include meals, or should each person pay for food separately and send the receipts to accounting? B: The package includes a buffet {{BLANK}} in the hotel restaurant from six thirty to nine every morning, but lunch and dinner must be paid for separately and claimed later.",
    "cn": "A：我們業務團隊的會議套裝有含餐嗎？還是每個人都應該各自付餐費，再把收據交給會計部？ B：套裝包含每天早上六點半到九點在飯店餐廳的自助【早餐】，但午餐和晚餐必須另外付費，之後再申請報銷。"
  },
  {
    "word": "coffee",
    "pos": "n.",
    "cn_def": "咖啡",
    "en_def": "a hot brown drink made from roasted beans",
    "sentence": "A: Should we order anything for the guests who are coming to the eight o'clock board meeting tomorrow, since some of them are flying in overnight? B: Yes, please order a large pot of hot {{BLANK}} and some pastries from the café downstairs, because many of them will be tired and will need something to stay alert.",
    "cn": "A：明天要來參加八點董事會的客人，有些是搭夜班飛機來的，我們要幫他們訂點東西嗎？ B：要，請向樓下的咖啡館訂一大壺熱【咖啡】和一些糕點，因為他們很多人會很累，需要一些東西來保持清醒。"
  },
  {
    "word": "tea",
    "pos": "n.",
    "cn_def": "茶",
    "en_def": "a hot drink made by pouring water onto dried leaves",
    "sentence": "A: I noticed that you stopped drinking coffee at your desk in the morning, so is there a reason you changed your habit recently? B: My doctor said too much caffeine was making me nervous during meetings, so now I drink a cup of green {{BLANK}}, which still wakes me up but feels much gentler.",
    "cn": "A：我注意到你早上不在辦公桌喝咖啡了，最近改變習慣有什麼原因嗎？ B：我的醫生說太多咖啡因讓我在開會時很緊張，所以我現在改喝一杯綠【茶】，它一樣能讓我清醒，但感覺溫和得多。"
  },
  {
    "word": "jog",
    "pos": "v.",
    "cn_def": "慢跑",
    "en_def": "to run slowly and steadily for exercise",
    "sentence": "A: How do you stay so healthy when you work such long hours in the finance department and often stay late to finish reports? B: I {{BLANK}} around the park near my apartment for thirty minutes every morning before work, and it gives me enough energy to handle a busy day.",
    "cn": "A：你在財務部工作時間那麼長，又常常加班完成報告，你是怎麼保持這麼健康的？ B：我每天早上上班前在公寓附近的公園【慢跑】三十分鐘，這讓我有足夠的精力應付忙碌的一天。"
  },
  {
    "word": "exercise",
    "pos": "n.",
    "cn_def": "運動；鍛鍊",
    "en_def": "physical activity that keeps your body healthy",
    "sentence": "A: The company has opened a small gym on the first floor, but do you think employees will really use it during the busy workweek? B: I think many will, especially in the morning, because getting some {{BLANK}} before work helps people feel less stressed, and the gym opens at six thirty.",
    "cn": "A：公司在一樓開了一間小健身房，但你覺得員工在忙碌的工作週真的會使用嗎？ B：我想很多人會，尤其是在早上，因為上班前做些【運動】能幫助大家減輕壓力，而且健身房六點半就開了。"
  },
  {
    "word": "commute",
    "pos": "v.",
    "cn_def": "通勤",
    "en_def": "to travel regularly between home and work",
    "sentence": "A: Now that the company has moved its headquarters to the suburbs, how long does it take you to get to the office each morning? B: I {{BLANK}} by train and bus for about an hour now, which is longer than before, but I use the time to read emails and plan my day.",
    "cn": "A：既然公司已經把總部搬到郊區，你每天早上到辦公室要花多久時間？ B：我現在搭火車和公車【通勤】大約一個小時，比以前久，但我利用這段時間讀電子郵件並規劃我的一天。"
  },
  {
    "word": "traffic",
    "pos": "n.",
    "cn_def": "交通；車流",
    "en_def": "the cars, buses, and other vehicles on a road",
    "sentence": "A: Why are we leaving the hotel at seven when the meeting with the client does not start until nine thirty this morning? B: The {{BLANK}} into the city center is terrible during rush hour, and last week it took our driver almost two hours to travel only fifteen kilometers.",
    "cn": "A：今天早上和客戶的會議九點半才開始，為什麼我們七點就要離開飯店？ B：尖峰時段進入市中心的【交通】非常糟糕，上週我們的司機只開十五公里就花了將近兩個小時。"
  },
  {
    "word": "rush",
    "pos": "n.",
    "cn_def": "尖峰時段；匆忙",
    "en_def": "a busy time when many people are hurrying",
    "sentence": "A: Why does the coffee shop near the subway station hire three extra workers between seven and nine on weekday mornings? B: That is when the morning {{BLANK}} happens, and hundreds of office workers stop by for drinks and sandwiches before work, so the owner needs more staff to serve everyone quickly.",
    "cn": "A：為什麼地鐵站附近的咖啡店在平日早上七點到九點之間要多雇三名員工？ B：那是早上的【尖峰人潮】時段，數百名上班族會在上班前順道買飲料和三明治，所以老闆需要更多員工快速服務每個人。"
  },
  {
    "word": "prepare",
    "pos": "v.",
    "cn_def": "準備",
    "en_def": "to make something ready",
    "sentence": "A: The marketing director wants to see the new product slides at nine tomorrow morning, but the designer has not sent the final images yet. B: Then I will come in at seven to {{BLANK}} the presentation as soon as the images arrive, so everything will be ready before the director's meeting begins.",
    "cn": "A：行銷總監明天早上九點要看新產品的投影片，但設計師還沒寄出最終的圖片。 B：那我七點就進公司，等圖片一到就【準備】簡報，這樣總監的會議開始前一切都會就緒。"
  },
  {
    "word": "plan",
    "pos": "v.",
    "cn_def": "計畫；規劃",
    "en_def": "to decide what you will do and how you will do it",
    "sentence": "A: You always seem to finish your tasks on time, even during the busiest weeks of the quarter, so do you have a special method? B: I spend the first fifteen minutes of every morning deciding how to {{BLANK}} my day, writing down the three most important jobs and the times I will work on them.",
    "cn": "A：即使在一季中最忙的幾週，你似乎總能準時完成任務，你有特別的方法嗎？ B：我每天早上花前十五分鐘決定如何【規劃】我的一天，寫下三件最重要的工作以及我要處理它們的時間。"
  },
  {
    "word": "productive",
    "pos": "adj.",
    "cn_def": "有生產力的；有效率的",
    "en_def": "getting a lot of useful work done",
    "sentence": "A: Why did the manager move our weekly team meeting from Monday morning to Monday afternoon starting next month? B: She noticed that most people are more {{BLANK}} in the morning, when they have fresh energy, so she wants us to use those hours for important work instead of long discussions.",
    "cn": "A：為什麼經理從下個月起把每週的團隊會議從週一早上改到週一下午？ B：她注意到大多數人早上精力充沛時比較有【生產力】，所以她希望我們把那幾個小時用在重要工作上，而不是冗長的討論。"
  },
  {
    "word": "energetic",
    "pos": "adj.",
    "cn_def": "精力充沛的",
    "en_def": "full of energy and very active",
    "sentence": "A: The new receptionist greets every visitor with a big smile, even at seven thirty in the morning, so how does she do it? B: She told me she goes to bed early and walks to work, so she always feels {{BLANK}} and ready to help guests as soon as the lobby doors open.",
    "cn": "A：新來的櫃台人員即使在早上七點半也會帶著燦爛的笑容迎接每位訪客，她是怎麼做到的？ B：她告訴我她早睡而且走路上班，所以她總是覺得【精力充沛】，大廳門一開就準備好協助客人。"
  },
  {
    "word": "refreshed",
    "pos": "adj.",
    "cn_def": "恢復精神的；神清氣爽的",
    "en_def": "feeling rested and full of energy again",
    "sentence": "A: You looked exhausted after the long business trip to Tokyo last week, but today you seem like a completely different person. B: I finally slept for nine hours last night, took a warm shower this morning, and now I feel {{BLANK}} and ready to deal with all the emails waiting for me.",
    "cn": "A：上週去東京長途出差後你看起來筋疲力盡，但今天你看起來像完全變了個人。 B：我昨晚終於睡了九個小時，今天早上沖了個熱水澡，現在覺得【神清氣爽】，準備好處理所有等著我的電子郵件了。"
  },
  {
    "word": "sunlight",
    "pos": "n.",
    "cn_def": "陽光；日光",
    "en_def": "the light that comes from the sun",
    "sentence": "A: Why did the office manager decide to move the plants from the meeting room to the area near the east windows? B: The plants were not growing well in the dark meeting room, and the east side gets plenty of morning {{BLANK}}, which should help them stay healthy and green.",
    "cn": "A：為什麼辦公室經理決定把植物從會議室搬到東邊窗戶附近？ B：植物在昏暗的會議室裡長得不好，而東側早上有充足的【陽光】，應該能幫助它們保持健康翠綠。"
  },
  {
    "word": "shadow",
    "pos": "n.",
    "cn_def": "影子；陰影",
    "en_def": "a dark shape made when something blocks the light",
    "sentence": "A: The photographer wants to take pictures of our new building for the company website, but why does she insist on coming at eight in the morning? B: At that time, the tall tower across the street does not cast a {{BLANK}} on our entrance, so the front of the building looks bright and clear in photos.",
    "cn": "A：攝影師要為公司網站拍攝我們的新大樓，但她為什麼堅持早上八點來？ B：那個時間對街的高塔不會在我們的入口投下【陰影】，所以大樓正面在照片中看起來明亮清楚。"
  },
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "行程表；時間表",
    "en_def": "a plan that lists times when things will happen",
    "sentence": "A: Could you tell me what the visiting clients will be doing tomorrow morning before they meet the CEO for lunch at noon? B: According to the {{BLANK}} I sent you yesterday, they will tour the factory at nine, attend a product demonstration at ten thirty, and then take a short break.",
    "cn": "A：你能告訴我來訪的客戶明天早上在中午和執行長共進午餐之前要做什麼嗎？ B：根據我昨天寄給你的【行程表】，他們九點參觀工廠，十點半參加產品示範，然後短暫休息。"
  },
  {
    "word": "focus",
    "pos": "v.",
    "cn_def": "專注；集中",
    "en_def": "to give all your attention to one thing",
    "sentence": "A: Why do you always turn off your email notifications during the first two hours of the working day, even when the office is busy? B: Those are the hours when I can {{BLANK}} best on difficult tasks like writing contracts, so I check my messages only after ten o'clock.",
    "cn": "A：為什麼即使辦公室很忙，你總是在上班的前兩個小時關掉電子郵件通知？ B：那幾個小時是我最能【專注】處理撰寫合約這類困難工作的時候，所以我十點以後才查看訊息。"
  },
  {
    "word": "optimistic",
    "pos": "adj.",
    "cn_def": "樂觀的",
    "en_def": "expecting good things to happen",
    "sentence": "A: How did the sales manager react this morning when she saw the first-quarter numbers, which were lower than everyone expected? B: She was still {{BLANK}}, explaining that two large orders will arrive next month, and she encouraged the team to keep calling new customers with confidence.",
    "cn": "A：今天早上業務經理看到比大家預期還低的第一季數字時，有什麼反應？ B：她仍然很【樂觀】，解釋說下個月會有兩筆大訂單進來，並鼓勵團隊繼續有信心地打電話給新客戶。"
  },
  {
    "word": "habit",
    "pos": "n.",
    "cn_def": "習慣",
    "en_def": "something you do often and regularly, often without thinking",
    "sentence": "A: I heard that you finished an online business course while working full time, so how did you find enough time to study every week? B: I made it a {{BLANK}} to study for forty minutes every morning before breakfast, and after a few weeks it felt as natural as brushing my teeth.",
    "cn": "A：我聽說你在全職工作的同時完成了一門線上商業課程，你是怎麼每週找到足夠時間讀書的？ B：我養成每天早上早餐前讀書四十分鐘的【習慣】，幾週後這件事就像刷牙一樣自然。"
  },
  {
    "word": "greeting",
    "pos": "n.",
    "cn_def": "問候；招呼",
    "en_def": "something friendly you say or do when you meet someone",
    "sentence": "A: What should the new employees at the front desk say when customers walk into the hotel lobby early in the day? B: They should offer a warm {{BLANK}} such as \"Good morning, welcome to the Grand Plaza,\" smile, and then ask politely how they can help each guest.",
    "cn": "A：當客人一早走進飯店大廳時，櫃台的新員工應該說什麼？ B：他們應該給予溫暖的【問候】，例如「早安，歡迎光臨大廣場飯店」，面帶微笑，然後禮貌地詢問能如何協助每位客人。"
  }
];

const MCQS = [
  {
    "q": "The fishing boats left the harbor at _____, when the sky was just starting to get light. They returned before lunch with fresh fish.",
    "options": [
      "dawn",
      "sunset",
      "midnight",
      "evening"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Tour guests who want to watch the _____ over the ocean must meet in the hotel lobby at five o'clock. Coffee will be provided.",
    "options": [
      "schedule",
      "sunrise",
      "routine",
      "habit"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Our manager booked an _____ flight so that she could arrive before the morning meeting. She left her house at four o'clock.",
    "options": [
      "optimistic",
      "energetic",
      "early",
      "productive"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The new lobby has large glass windows facing east. It is very _____ in the morning, so staff rarely need to turn on the lights.",
    "options": [
      "quiet",
      "productive",
      "optimistic",
      "bright"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The hotel restaurant serves _____ orange juice every morning. The fruit is squeezed in the kitchen only a few minutes before breakfast begins.",
    "options": [
      "bright",
      "fresh",
      "peaceful",
      "energetic"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Many guests choose the lakeside rooms because the area is calm and _____ in the early morning. Only the sound of birds can be heard.",
    "options": [
      "productive",
      "optimistic",
      "energetic",
      "peaceful"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Please keep your voice down in the library section of the office. Several staff members need a _____ place to finish their reports.",
    "options": [
      "quiet",
      "early",
      "optimistic",
      "refreshed"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Checking emails and reviewing the day's tasks are part of my morning _____. I do them every day before my first meeting.",
    "options": [
      "greeting",
      "sunlight",
      "routine",
      "traffic"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Mark missed the train because his _____ did not ring this morning. He has now bought a new clock with a backup battery.",
    "options": [
      "alarm",
      "habit",
      "greeting",
      "schedule"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Hotel staff can call your room to _____ you up at any time. Just tell the front desk the night before.",
    "options": [
      "rise",
      "wake",
      "stretch",
      "jog"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Prices for coffee beans are expected to _____ next month because of poor weather in Brazil. Cafés may have to charge more.",
    "options": [
      "wake",
      "stretch",
      "rise",
      "jog"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Office workers should stand up and _____ their arms and backs every hour. This simple action helps prevent pain from sitting too long.",
    "options": [
      "commute",
      "prepare",
      "jog",
      "stretch"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The hotel offers a free buffet _____ from six to ten o'clock. Guests can enjoy eggs, toast, fruit, and hot drinks.",
    "options": [
      "routine",
      "breakfast",
      "sunrise",
      "schedule"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Many employees drink a cup of strong _____ before their first meeting. The caffeine helps them feel more awake and alert.",
    "options": [
      "sunlight",
      "traffic",
      "alarm",
      "coffee"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Several staff members _____ around the park together before work. They run about five kilometers at a slow, steady pace.",
    "options": [
      "jog",
      "commute",
      "wake",
      "prepare"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Doctors recommend that office workers get at least thirty minutes of _____ each day. Walking to work is one easy way to do this.",
    "options": [
      "traffic",
      "greeting",
      "exercise",
      "schedule"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Since the company moved downtown, most employees _____ to work by subway. The trip takes about forty minutes from the suburbs.",
    "options": [
      "commute",
      "stretch",
      "wake",
      "focus"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Heavy _____ on the main highway delayed the delivery trucks this morning. Several customers received their orders two hours late.",
    "options": [
      "sunlight",
      "traffic",
      "habit",
      "greeting"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The café hires extra staff to handle the morning _____ between seven and nine. That is when most office workers buy their drinks.",
    "options": [
      "habit",
      "greeting",
      "rush",
      "sunlight"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The assistant stayed late to _____ the meeting room for tomorrow's visitors. She arranged the chairs and set up the projector.",
    "options": [
      "stretch",
      "jog",
      "commute",
      "prepare"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Good managers _____ their week carefully on Monday morning. They decide which projects need the most time and attention.",
    "options": [
      "jog",
      "plan",
      "stretch",
      "wake"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The team was very _____ this morning and finished all twenty customer reports before lunch. The manager thanked everyone for their hard work.",
    "options": [
      "peaceful",
      "bright",
      "cool",
      "productive"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The fitness instructor is always cheerful and _____, even at six in the morning. Her lively classes are popular with office workers.",
    "options": [
      "energetic",
      "quiet",
      "peaceful",
      "early"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "After a short nap and a cup of tea, the pilot felt _____ and ready to fly again. She had been very tired earlier.",
    "options": [
      "early",
      "bright",
      "refreshed",
      "quiet"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Plants in the office need plenty of _____ to grow well. Please place them near the windows instead of in the dark hallway.",
    "options": [
      "sunlight",
      "traffic",
      "greeting",
      "alarm"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "According to the conference _____, the keynote speech begins at nine o'clock. Lunch will be served in the main hall at noon.",
    "options": [
      "habit",
      "schedule",
      "greeting",
      "sunrise"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Employees can _____ better on detailed work when their phones are switched off. Many people find the early morning best for this.",
    "options": [
      "commute",
      "jog",
      "focus",
      "stretch"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "Although sales were low in the first quarter, the director remains _____ about the rest of the year. She expects new orders soon.",
    "options": [
      "peaceful",
      "early",
      "fresh",
      "optimistic"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "Reading the news over breakfast has become a daily _____ for many commuters. They do it every morning without thinking about it.",
    "options": [
      "alarm",
      "habit",
      "traffic",
      "sunlight"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "The receptionist welcomes every visitor with a friendly _____ and a smile. She always says good morning before asking how she can help.",
    "options": [
      "traffic",
      "alarm",
      "schedule",
      "greeting"
    ],
    "answer": 3,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "dawn": {
    "pos": "n.",
    "en_def": "the time early in the morning when light first appears",
    "cn_def": "黎明；拂曉"
  },
  "sunrise": {
    "pos": "n.",
    "en_def": "the time when the sun first appears in the morning",
    "cn_def": "日出"
  },
  "daybreak": {
    "pos": "n.",
    "en_def": "the time in the morning when daylight first appears",
    "cn_def": "破曉；黎明"
  },
  "early": {
    "pos": "adj.",
    "en_def": "happening near the beginning of the day or before the usual time",
    "cn_def": "早的；提早的"
  },
  "bright": {
    "pos": "adj.",
    "en_def": "full of light; shining strongly",
    "cn_def": "明亮的"
  },
  "fresh": {
    "pos": "adj.",
    "en_def": "recently made or picked; not old",
    "cn_def": "新鮮的"
  },
  "peaceful": {
    "pos": "adj.",
    "en_def": "calm and quiet, without noise or trouble",
    "cn_def": "寧靜的；平靜的"
  },
  "quiet": {
    "pos": "adj.",
    "en_def": "with little noise or activity",
    "cn_def": "安靜的；清閒的"
  },
  "cool": {
    "pos": "adj.",
    "en_def": "a little cold in a pleasant way",
    "cn_def": "涼爽的"
  },
  "routine": {
    "pos": "n.",
    "en_def": "the usual things you do in the same order every day",
    "cn_def": "例行公事；慣例"
  },
  "alarm": {
    "pos": "n.",
    "en_def": "a clock or device that makes a sound to wake you up",
    "cn_def": "鬧鐘；警報器"
  },
  "wake": {
    "pos": "v.",
    "en_def": "to stop sleeping, or to make someone stop sleeping",
    "cn_def": "醒來；叫醒"
  },
  "rise": {
    "pos": "v.",
    "en_def": "to move up; (of the sun) to appear in the sky",
    "cn_def": "升起；上升"
  },
  "stretch": {
    "pos": "v.",
    "en_def": "to make your arms, legs, or body as long as possible to relax your muscles",
    "cn_def": "伸展；舒展"
  },
  "yawn": {
    "pos": "v.",
    "en_def": "to open your mouth wide and breathe in because you are tired or bored",
    "cn_def": "打哈欠"
  },
  "breakfast": {
    "pos": "n.",
    "en_def": "the first meal of the day",
    "cn_def": "早餐"
  },
  "coffee": {
    "pos": "n.",
    "en_def": "a hot brown drink made from roasted beans",
    "cn_def": "咖啡"
  },
  "tea": {
    "pos": "n.",
    "en_def": "a hot drink made by pouring water onto dried leaves",
    "cn_def": "茶"
  },
  "jog": {
    "pos": "v.",
    "en_def": "to run slowly and steadily for exercise",
    "cn_def": "慢跑"
  },
  "exercise": {
    "pos": "n.",
    "en_def": "physical activity that keeps your body healthy",
    "cn_def": "運動；鍛鍊"
  },
  "commute": {
    "pos": "v.",
    "en_def": "to travel regularly between home and work",
    "cn_def": "通勤"
  },
  "traffic": {
    "pos": "n.",
    "en_def": "the cars, buses, and other vehicles on a road",
    "cn_def": "交通；車流"
  },
  "rush": {
    "pos": "n.",
    "en_def": "a busy time when many people are hurrying",
    "cn_def": "尖峰時段；匆忙"
  },
  "prepare": {
    "pos": "v.",
    "en_def": "to make something ready",
    "cn_def": "準備"
  },
  "plan": {
    "pos": "v.",
    "en_def": "to decide what you will do and how you will do it",
    "cn_def": "計畫；規劃"
  },
  "productive": {
    "pos": "adj.",
    "en_def": "getting a lot of useful work done",
    "cn_def": "有生產力的；有效率的"
  },
  "energetic": {
    "pos": "adj.",
    "en_def": "full of energy and very active",
    "cn_def": "精力充沛的"
  },
  "refreshed": {
    "pos": "adj.",
    "en_def": "feeling rested and full of energy again",
    "cn_def": "恢復精神的；神清氣爽的"
  },
  "sunlight": {
    "pos": "n.",
    "en_def": "the light that comes from the sun",
    "cn_def": "陽光；日光"
  },
  "shadow": {
    "pos": "n.",
    "en_def": "a dark shape made when something blocks the light",
    "cn_def": "影子；陰影"
  },
  "schedule": {
    "pos": "n.",
    "en_def": "a plan that lists times when things will happen",
    "cn_def": "行程表；時間表"
  },
  "focus": {
    "pos": "v.",
    "en_def": "to give all your attention to one thing",
    "cn_def": "專注；集中"
  },
  "optimistic": {
    "pos": "adj.",
    "en_def": "expecting good things to happen",
    "cn_def": "樂觀的"
  },
  "habit": {
    "pos": "n.",
    "en_def": "something you do often and regularly, often without thinking",
    "cn_def": "習慣"
  },
  "greeting": {
    "pos": "n.",
    "en_def": "something friendly you say or do when you meet someone",
    "cn_def": "問候；招呼"
  }
};

const EXTRA_GLOSSES = {};
