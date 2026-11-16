// Topic 155 Quiz Data: Get Up Early 早起
// Source word list: https://www.examword.com/group-topic/get-up-early — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T155 - Get Up Early 早起",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "early",
    "pos": "adj.",
    "cn_def": "早的；初期的",
    "en_def": "happening near the beginning of the day or a period",
    "sentence": "A: Why did you book the six-thirty train to the head office when the meeting doesn't start until ten o'clock? B: I prefer an {{BLANK}} start on meeting days, because the trains are less crowded and I can review the sales figures quietly in the café before everyone arrives.",
    "cn": "A：會議十點才開始，你為什麼訂了六點半往總公司的火車？ B：開會的日子我喜歡【早一點】出發，因為火車比較不擁擠，我還能在大家到達之前，先在咖啡館安靜地檢查銷售數字。"
  },
  {
    "word": "dawn",
    "pos": "n.",
    "cn_def": "黎明；拂曉",
    "en_def": "the time when daylight first appears in the morning",
    "sentence": "A: The photographer wants to take pictures of the new hotel building for our brochure, but when is the best time to do it? B: She plans to arrive at {{BLANK}}, because the soft light at that time makes the glass walls look warm and the streets are still empty of cars.",
    "cn": "A：攝影師想替我們的手冊拍新飯店大樓的照片，什麼時候拍最好？ B：她打算在【黎明】時抵達，因為那時柔和的光線會讓玻璃牆看起來很溫暖，而且街上還沒有車子。"
  },
  {
    "word": "sunrise",
    "pos": "n.",
    "cn_def": "日出",
    "en_def": "the time when the sun first appears in the sky",
    "sentence": "A: Our company is planning a team-building trip to the mountains next month, so what activity do you think the staff would enjoy most? B: I think a short walk up to the lookout point to watch the {{BLANK}} together would be great, and then we could all share a hot breakfast at the lodge.",
    "cn": "A：公司下個月要辦一趟到山上的團隊建立旅行，你覺得員工最喜歡什麼活動？ B：我覺得一起短程步行到觀景台看【日出】會很棒，之後大家可以在山屋一起吃熱騰騰的早餐。"
  },
  {
    "word": "morning",
    "pos": "n.",
    "cn_def": "早上；上午",
    "en_def": "the early part of the day, from when the sun rises until noon",
    "sentence": "A: When would be a good time to call the supplier in Singapore about the late shipment of printer paper and ink? B: Try calling them first thing tomorrow {{BLANK}}, because their office opens at eight and the manager usually answers phone calls before her daily meetings begin.",
    "cn": "A：什麼時候打電話給新加坡的供應商詢問印表機紙和墨水延遲出貨的事比較好？ B：明天【早上】一上班就打給他們吧，因為他們的辦公室八點開門，而經理通常會在每日會議開始前接電話。"
  },
  {
    "word": "wake",
    "pos": "v.",
    "cn_def": "醒來；叫醒",
    "en_def": "to stop sleeping",
    "sentence": "A: How do you manage to get to the gym before work when you live so far away from the city center? B: I {{BLANK}} up at five without an alarm clock now, because after a few weeks my body got used to the new schedule and I actually feel more relaxed all day.",
    "cn": "A：你住得離市中心那麼遠，怎麼還能在上班前去健身房？ B：我現在不用鬧鐘五點就會【醒來】，因為幾個星期後我的身體就習慣了新的作息，而且我整天其實都覺得比較放鬆。"
  },
  {
    "word": "awaken",
    "pos": "v.",
    "cn_def": "喚醒；醒來",
    "en_def": "to wake up, or to make someone stop sleeping (formal)",
    "sentence": "A: Is the hotel near the airport a good choice for our visitors, or will the noise from the planes keep them up all night? B: The rooms have thick windows, so guests are not likely to {{BLANK}} because of the planes, and the hotel also offers a free shuttle bus to the terminal.",
    "cn": "A：機場附近的那家飯店適合我們的訪客嗎？還是飛機的噪音會讓他們整晚睡不著？ B：房間有很厚的窗戶，所以客人不太可能因為飛機而被【吵醒】，而且飯店還提供到航廈的免費接駁車。"
  },
  {
    "word": "rise",
    "pos": "v.",
    "cn_def": "起床；升起",
    "en_def": "to get out of bed after sleeping",
    "sentence": "A: How has your life changed since you started working at the bakery downtown last spring? B: The biggest change is that I have to {{BLANK}} at four o'clock every day, because the bread must be baked and placed in the window before the first customers come in at seven.",
    "cn": "A：自從你去年春天開始在市區麵包店工作，你的生活有什麼改變？ B：最大的改變是我每天必須四點就【起床】，因為麵包必須在七點第一批客人進來之前烤好並擺上櫥窗。"
  },
  {
    "word": "alarm",
    "pos": "n.",
    "cn_def": "鬧鐘；警報",
    "en_def": "a clock or sound that wakes you up at a set time",
    "sentence": "A: Why were you almost late for the important client presentation this morning, when you are usually the first person in the office? B: My phone battery died during the night, so the {{BLANK}} didn't go off, and luckily my neighbor knocked on my door when he was leaving for work.",
    "cn": "A：你平常總是第一個到辦公室，為什麼今天早上重要的客戶簡報差點遲到？ B：我的手機電池半夜沒電了，所以【鬧鐘】沒響，幸好我的鄰居出門上班時來敲了我的門。"
  },
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "時間表；行程",
    "en_def": "a plan that lists the times when things will happen",
    "sentence": "A: Do you think we can fit a training session for the new staff into next week, since everyone seems so busy? B: Let me check the {{BLANK}} first, but I believe Tuesday morning is open, because the monthly sales meeting was moved to Thursday afternoon.",
    "cn": "A：大家好像都很忙，你覺得下週能排進一場新進員工訓練嗎？ B：我先查一下【行程表】，不過我相信星期二早上有空，因為每月的業務會議已經改到星期四下午了。"
  },
  {
    "word": "routine",
    "pos": "n.",
    "cn_def": "例行公事；慣例",
    "en_def": "the usual things you do and the order you do them in",
    "sentence": "A: How do you always stay so calm and organized, even on days when there are many problems in the warehouse? B: I follow the same {{BLANK}} every day: I arrive early, read my emails, check the stock list, and then talk to the team before any trucks arrive.",
    "cn": "A：即使倉庫問題很多的日子，你怎麼總能保持冷靜又有條理？ B：我每天都遵循相同的【例行程序】：提早到、讀電子郵件、檢查庫存清單，然後在卡車到達前先和團隊談話。"
  },
  {
    "word": "habit",
    "pos": "n.",
    "cn_def": "習慣",
    "en_def": "something you do often and regularly, often without thinking",
    "sentence": "A: Your sales reports are always finished before the deadline, so what is your secret for staying ahead of your work? B: I made it a {{BLANK}} to write for thirty minutes before anyone else comes in, because the office is quiet then and I can think clearly without phone calls.",
    "cn": "A：你的業務報告總是在截止日前完成，你保持工作超前的秘訣是什麼？ B：我養成了在別人進來之前先寫三十分鐘的【習慣】，因為那時辦公室很安靜，沒有電話打擾，我可以清楚地思考。"
  },
  {
    "word": "discipline",
    "pos": "n.",
    "cn_def": "自律；紀律",
    "en_def": "the ability to control yourself and do what you should do",
    "sentence": "A: Our new marketing assistant studies for an MBA at night and still arrives at work early every day, so how does she do it? B: She has a lot of {{BLANK}}, because she goes to bed at ten, never skips her study hours, and turns off her phone when she needs to focus.",
    "cn": "A：我們新來的行銷助理晚上在讀企管碩士，每天還是很早到公司，她是怎麼做到的？ B：她非常【自律】，因為她十點就上床、從不跳過讀書時間，而且需要專心時就會關掉手機。"
  },
  {
    "word": "refresh",
    "pos": "v.",
    "cn_def": "使恢復精神；使清新",
    "en_def": "to make someone feel less tired and more full of energy",
    "sentence": "A: You look much happier than you did yesterday, so did something good happen at the meeting with the new client? B: Not really, but I took a short walk in the park before work today, and the cool air helped {{BLANK}} my mind after a long week of late nights.",
    "cn": "A：你看起來比昨天開心多了，和新客戶的會議有什麼好消息嗎？ B：其實沒有，不過我今天上班前在公園短暫散步了一下，涼爽的空氣幫助我在熬夜了一整週之後【恢復】精神。"
  },
  {
    "word": "energetic",
    "pos": "adj.",
    "cn_def": "精力充沛的",
    "en_def": "having a lot of energy and being very active",
    "sentence": "A: Why do you think the morning shift workers at the factory are so much faster than the night shift workers? B: Most of them have had a good night's sleep and a healthy breakfast, so they feel {{BLANK}} and can work carefully on the production line for many hours.",
    "cn": "A：你覺得為什麼工廠早班的工人比夜班的工人快那麼多？ B：他們大多睡了一夜好覺，也吃了健康的早餐，所以感覺【精力充沛】，可以在生產線上仔細工作好幾個小時。"
  },
  {
    "word": "alert",
    "pos": "adj.",
    "cn_def": "警覺的；機敏的",
    "en_def": "able to think quickly and notice things",
    "sentence": "A: The safety manager says all forklift drivers must sleep at least seven hours before a shift, but why is that rule so important? B: Drivers who are tired can easily make mistakes, so staying {{BLANK}} helps them notice people walking nearby and prevents serious accidents in the busy warehouse.",
    "cn": "A：安全經理說所有堆高機司機在上班前至少要睡七小時，為什麼這條規定這麼重要？ B：疲倦的司機很容易出錯，所以保持【警覺】能幫助他們注意到附近走動的人，避免在繁忙的倉庫裡發生嚴重的意外。"
  },
  {
    "word": "productive",
    "pos": "adj.",
    "cn_def": "有生產力的；有成效的",
    "en_def": "doing or achieving a lot of useful work",
    "sentence": "A: Why did the design team decide to start work at seven o'clock instead of nine o'clock last month? B: They found that they were most {{BLANK}} in the first hours of the day, because there were fewer emails and meetings, so they finished their projects much faster.",
    "cn": "A：設計團隊上個月為什麼決定從九點改成七點開始工作？ B：他們發現自己在一天中的最初幾個小時最【有效率】，因為電子郵件和會議比較少，所以他們完成專案的速度快多了。"
  },
  {
    "word": "quiet",
    "pos": "adj.",
    "cn_def": "安靜的",
    "en_def": "making very little noise",
    "sentence": "A: Where can I prepare for my job interview tomorrow, since my apartment is next to a noisy construction site? B: The public library on Main Street opens at seven, and the study rooms on the third floor are very {{BLANK}}, so you can practice your answers without anyone disturbing you.",
    "cn": "A：我的公寓旁邊是吵鬧的工地，明天的工作面試我可以去哪裡準備？ B：大街上的公立圖書館七點開門，三樓的自習室非常【安靜】，所以你可以練習回答而不會有人打擾。"
  },
  {
    "word": "peaceful",
    "pos": "adj.",
    "cn_def": "平靜的；寧靜的",
    "en_def": "calm and quiet, without worry or trouble",
    "sentence": "A: Why do you always arrive at the office an hour before your team, even though you don't need to? B: The building feels so {{BLANK}} before everyone comes in, with no ringing phones or loud talking, so I can drink my tea and plan my day calmly.",
    "cn": "A：你明明不需要，為什麼總是比團隊早一小時到辦公室？ B：在大家進來之前，大樓感覺非常【寧靜】，沒有電話鈴聲也沒有大聲交談，所以我可以喝杯茶，冷靜地規劃一天。"
  },
  {
    "word": "fresh",
    "pos": "adj.",
    "cn_def": "清新的；精神飽滿的",
    "en_def": "feeling rested and full of energy; clean and cool",
    "sentence": "A: Should we hold the budget meeting at the end of the day, after everyone has finished their regular tasks? B: I'd rather hold it at nine, because people come in feeling {{BLANK}} after a night's rest, and they make better decisions about difficult money matters when they aren't tired.",
    "cn": "A：我們要不要在一天結束、大家都做完日常工作後再開預算會議？ B：我寧願九點開，因為大家休息了一晚後進來時都【精神飽滿】，不累的時候對困難的財務問題會做出更好的決定。"
  },
  {
    "word": "exercise",
    "pos": "n.",
    "cn_def": "運動",
    "en_def": "physical activity that you do to stay healthy",
    "sentence": "A: The company is offering a free membership at the gym across the street, but do you think many employees will use it? B: I think so, because many people want to get some {{BLANK}} before work, and the gym opens at six with showers and lockers for office workers.",
    "cn": "A：公司提供對街健身房的免費會員，但你覺得會有很多員工使用嗎？ B：我想會，因為很多人想在上班前做點【運動】，而且健身房六點就開門，還有給上班族用的淋浴間和置物櫃。"
  },
  {
    "word": "jog",
    "pos": "v.",
    "cn_def": "慢跑",
    "en_def": "to run slowly and steadily for exercise",
    "sentence": "A: You look very fit these days, so have you joined a sports club or hired a personal trainer? B: No, I just {{BLANK}} along the river for twenty minutes every morning before I take the bus to the office, and it costs nothing at all.",
    "cn": "A：你最近看起來身材很好，是加入了運動俱樂部還是請了私人教練？ B：沒有，我只是每天早上搭公車上班前沿著河邊【慢跑】二十分鐘，而且完全不用花錢。"
  },
  {
    "word": "stretch",
    "pos": "v.",
    "cn_def": "伸展",
    "en_def": "to make your arms, legs or body as long as possible to loosen muscles",
    "sentence": "A: My back always hurts after sitting at my desk for eight hours, so do you have any advice for me? B: Try to {{BLANK}} for five minutes as soon as you get out of bed, and also stand up and walk around the office once every hour during the day.",
    "cn": "A：我在辦公桌前坐八小時後背總是會痛，你有什麼建議嗎？ B：試著一起床就【伸展】五分鐘，白天也每隔一小時站起來在辦公室裡走一走。"
  },
  {
    "word": "meditate",
    "pos": "v.",
    "cn_def": "冥想；靜坐",
    "en_def": "to sit quietly and calm your mind for a period of time",
    "sentence": "A: How do you stay so calm when customers complain to you on the phone all day long? B: I {{BLANK}} for ten minutes every morning before I leave home, sitting quietly and breathing slowly, so I start the day calm and don't get upset easily.",
    "cn": "A：客人整天在電話裡向你抱怨，你怎麼還能保持那麼冷靜？ B：我每天早上出門前會【冥想】十分鐘，安靜地坐著、慢慢呼吸，所以我一天的開始很平靜，不容易生氣。"
  },
  {
    "word": "breakfast",
    "pos": "n.",
    "cn_def": "早餐",
    "en_def": "the first meal of the day",
    "sentence": "A: The hotel says the conference guests can eat in the restaurant before the first session, but what time will it open? B: {{BLANK}} is served from six-thirty to nine-thirty in the main dining room, so the guests will have enough time to eat before the speeches start at ten.",
    "cn": "A：飯店說會議賓客可以在第一場會議前在餐廳用餐，但是幾點開始？ B：【早餐】在主餐廳從六點半供應到九點半，所以賓客在十點演講開始前有足夠的時間吃東西。"
  },
  {
    "word": "coffee",
    "pos": "n.",
    "cn_def": "咖啡",
    "en_def": "a hot drink made from roasted beans",
    "sentence": "A: The office kitchen is always crowded at eight-thirty, so should we buy a second machine for the staff? B: That's a good idea, because almost everyone wants a cup of {{BLANK}} as soon as they arrive, and the line often makes people late for the morning meeting.",
    "cn": "A：辦公室的茶水間八點半總是很擁擠，我們要不要替員工再買一台機器？ B：好主意，因為幾乎每個人一到公司就想喝杯【咖啡】，而排隊常常讓大家晨會遲到。"
  },
  {
    "word": "focus",
    "pos": "v.",
    "cn_def": "專注；集中",
    "en_def": "to give all your attention to one thing",
    "sentence": "A: Why does the editor always come to the office at six-thirty, two hours before the rest of the team? B: She says she can {{BLANK}} on long reports much better when the office is empty, because nobody stops by her desk to ask questions or chat about the weekend.",
    "cn": "A：為什麼編輯總是六點半就到辦公室，比團隊其他人早兩小時？ B：她說辦公室沒人時，她比較能【專心】處理冗長的報告，因為沒有人會來她桌邊問問題或聊週末的事。"
  },
  {
    "word": "plan",
    "pos": "v.",
    "cn_def": "計畫；規劃",
    "en_def": "to decide what you will do and how you will do it",
    "sentence": "A: You always seem to know exactly what to do when you arrive at work, so how do you organize everything? B: I {{BLANK}} my whole day on the train, writing down my meetings, phone calls and tasks in my notebook, so I never waste time wondering what comes next.",
    "cn": "A：你到公司時似乎總是很清楚要做什麼，你是怎麼安排一切的？ B：我在火車上【規劃】一整天，把會議、電話和任務寫在筆記本裡，所以我從不浪費時間去想接下來要做什麼。"
  },
  {
    "word": "prepare",
    "pos": "v.",
    "cn_def": "準備",
    "en_def": "to make something or someone ready",
    "sentence": "A: How do you get your two children to school and still arrive at the office by eight-thirty every morning? B: I {{BLANK}} their lunches and lay out their clothes the night before, so in the morning we only need to eat breakfast quickly and walk to the bus stop.",
    "cn": "A：你每天早上怎麼能送兩個孩子上學，還在八點半前到辦公室？ B：我前一晚就【準備】好他們的午餐並把衣服擺好，所以早上我們只需要快速吃早餐，然後走到公車站。"
  },
  {
    "word": "commute",
    "pos": "n.",
    "cn_def": "通勤",
    "en_def": "the trip you make to work and back every day",
    "sentence": "A: Why did you decide to leave home at six o'clock instead of seven-thirty, even though your office opens at nine? B: My {{BLANK}} takes only forty minutes if I leave early, but when I leave later, the heavy traffic on the highway makes it take nearly two hours.",
    "cn": "A：你的辦公室九點才開，為什麼你決定六點而不是七點半出門？ B：如果早點出門，我的【通勤】只要四十分鐘，但晚一點出門的話，高速公路上的車潮會讓它花上將近兩小時。"
  },
  {
    "word": "deadline",
    "pos": "n.",
    "cn_def": "截止期限",
    "en_def": "the time or date by which something must be finished",
    "sentence": "A: Why did the whole accounting team come in at six this morning, when they usually start work at nine? B: The {{BLANK}} for the annual tax report is noon today, and they still had to check hundreds of receipts before the manager could sign and send it.",
    "cn": "A：整個會計團隊平常九點才上班，為什麼今天早上六點就來了？ B：年度稅務報告的【截止期限】是今天中午，而他們在經理簽名寄出之前還得核對好幾百張收據。"
  },
  {
    "word": "sleepy",
    "pos": "adj.",
    "cn_def": "想睡的；睏的",
    "en_def": "tired and wanting to sleep",
    "sentence": "A: Why do you never drink coffee after lunch, when most people in our department drink three cups a day? B: Coffee in the afternoon keeps me awake at night, and then I feel {{BLANK}} and slow during the next morning's meetings, so I only have one cup at breakfast.",
    "cn": "A：我們部門大部分的人一天喝三杯咖啡，為什麼你午餐後從不喝？ B：下午喝咖啡會讓我晚上睡不著，然後隔天早上開會時我就會覺得【昏昏欲睡】又遲鈍，所以我只在早餐時喝一杯。"
  },
  {
    "word": "rested",
    "pos": "adj.",
    "cn_def": "休息充足的",
    "en_def": "not tired because you have slept or relaxed",
    "sentence": "A: You were so tired last week, but today you look completely different, so what changed? B: I went to bed at ten every night this week instead of watching movies until midnight, so I feel well {{BLANK}} and can finally concentrate on my work again.",
    "cn": "A：你上週那麼累，今天卻看起來完全不一樣，發生了什麼改變？ B：這週我每晚十點就上床，而不是看電影到半夜，所以我覺得【休息】得很充足，終於又能專心工作了。"
  },
  {
    "word": "consistent",
    "pos": "adj.",
    "cn_def": "一致的；始終如一的",
    "en_def": "always behaving or happening in the same way",
    "sentence": "A: I've tried to get up at six many times, but I always give up after a few days, so what am I doing wrong? B: You need to be {{BLANK}}, which means going to bed and getting up at the same time every day, even on weekends and holidays.",
    "cn": "A：我試過很多次六點起床，但總是幾天後就放棄了，我哪裡做錯了？ B：你需要【持之以恆】，也就是每天在同一時間上床和起床，即使週末和假日也一樣。"
  },
  {
    "word": "motivation",
    "pos": "n.",
    "cn_def": "動機；動力",
    "en_def": "the reason or desire that makes you want to do something",
    "sentence": "A: What gave you the {{BLANK}} to start getting up an hour earlier, since you used to hate mornings so much? B: I wanted to finish my online course in project management before my performance review, and the only free time I had was before work.",
    "cn": "A：你以前那麼討厭早上，是什麼給了你【動力】開始提早一小時起床？ B：我想在績效考核前完成線上的專案管理課程，而我唯一的空閒時間就是在上班之前。"
  },
  {
    "word": "balance",
    "pos": "n.",
    "cn_def": "平衡",
    "en_def": "a healthy situation in which different parts of your life get the right amount of time",
    "sentence": "A: Why does our company let staff start at seven and leave at four, instead of keeping the usual nine-to-six hours? B: Management wants employees to have a better {{BLANK}} between work and family, so people can spend more evening time with their children and still finish their tasks.",
    "cn": "A：為什麼公司讓員工七點上班四點下班，而不是維持一般的九點到六點？ B：管理層希望員工在工作和家庭之間有更好的【平衡】，這樣大家晚上可以花更多時間陪孩子，還能完成工作。"
  },
  {
    "word": "lifestyle",
    "pos": "n.",
    "cn_def": "生活方式",
    "en_def": "the way a person lives, including habits and activities",
    "sentence": "A: Our health insurance company is offering lower prices to employees who sleep well and exercise, so are you going to join the program? B: Definitely, because I've already changed my {{BLANK}} this year by going to bed earlier, eating healthier food, and walking to work every day.",
    "cn": "A：我們的健康保險公司對睡眠充足又運動的員工提供較低的保費，你要參加這個方案嗎？ B：當然，因為我今年已經改變了【生活方式】，更早上床、吃更健康的食物，並且每天走路上班。"
  }
];

const MCQS = [
  {
    "q": "The bakery needs workers for the _____ shift. Staff must arrive at five o'clock to prepare bread for the first customers.",
    "options": [
      "early",
      "sleepy",
      "rested",
      "quiet"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The fishing boats left the harbor at _____. They returned before noon with enough fish for the local restaurants.",
    "options": [
      "alarm",
      "dawn",
      "habit",
      "balance"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The resort offers guests a boat trip to watch the _____. The boat leaves the hotel dock at half past five.",
    "options": [
      "deadline",
      "commute",
      "sunrise",
      "routine"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The shipment will be delivered tomorrow _____. Please make sure someone is at the front desk to sign for it.",
    "options": [
      "coffee",
      "exercise",
      "motivation",
      "morning"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Guests who want to _____ up early can ask the front desk for a phone call. This service is free for all rooms.",
    "options": [
      "jog",
      "wake",
      "focus",
      "plan"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The new curtains block light and noise completely. Guests will not _____ until their alarm goes off in the morning.",
    "options": [
      "awaken",
      "prepare",
      "meditate",
      "stretch"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Farm workers usually _____ from bed before the sun comes up. They need to feed the animals before the heat of the day begins.",
    "options": [
      "refresh",
      "focus",
      "prepare",
      "rise"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "I set my _____ for five-thirty tomorrow. The flight to Tokyo leaves at eight, and I must check in early.",
    "options": [
      "balance",
      "habit",
      "alarm",
      "lifestyle"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The tour guide gave everyone a printed _____ of the trip. It shows when the bus will leave each hotel.",
    "options": [
      "schedule",
      "sunrise",
      "dawn",
      "coffee"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Checking safety equipment is part of the daily _____ for every driver. It must be done before the first delivery.",
    "options": [
      "motivation",
      "routine",
      "alarm",
      "breakfast"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Reading the news each morning is a useful _____ for sales staff. It helps them talk with clients about current events.",
    "options": [
      "deadline",
      "sunrise",
      "habit",
      "commute"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Working from home requires a lot of self-_____. Without a manager nearby, employees must organize their own time.",
    "options": [
      "coffee",
      "alarm",
      "dawn",
      "discipline"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "A short break outside can _____ tired employees. Many people return to their desks with new ideas after some fresh air.",
    "options": [
      "meditate",
      "refresh",
      "commute",
      "jog"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The new fitness instructor is young and very _____. Her morning classes are always full of happy, active members.",
    "options": [
      "energetic",
      "sleepy",
      "peaceful",
      "consistent"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Security guards on the night shift must stay _____ at all times. They check every camera screen every fifteen minutes.",
    "options": [
      "sleepy",
      "quiet",
      "rested",
      "alert"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The workshop was very _____ for our team. We finished the new website design in just one afternoon.",
    "options": [
      "sleepy",
      "peaceful",
      "productive",
      "early"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Please keep your voice down in the library. Students need a _____ place to study for their final exams.",
    "options": [
      "quiet",
      "energetic",
      "productive",
      "alert"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The hotel garden is a _____ place to read in the morning. Only the sound of birds can be heard there.",
    "options": [
      "energetic",
      "peaceful",
      "productive",
      "sleepy"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "After a good night's sleep, Ms. Lin felt _____ and ready for the interview. She answered every question with confidence.",
    "options": [
      "sleepy",
      "early",
      "fresh",
      "quiet"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Doctors say that regular _____ can improve your mood. Even a short walk every day makes a big difference.",
    "options": [
      "breakfast",
      "coffee",
      "deadline",
      "exercise"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Many office workers _____ in the park before work. The paths are wide and safe for runners in the morning.",
    "options": [
      "wake",
      "jog",
      "plan",
      "meditate"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Our yoga teacher asked us to _____ our arms above our heads. This helps loosen the muscles after a long sleep.",
    "options": [
      "stretch",
      "refresh",
      "awaken",
      "prepare"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Some employees _____ in the quiet room during lunch. They say that sitting in silence helps reduce stress.",
    "options": [
      "jog",
      "commute",
      "rise",
      "meditate"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The hotel room rate includes a free buffet _____. It is served in the lobby restaurant from six to ten.",
    "options": [
      "exercise",
      "schedule",
      "breakfast",
      "balance"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The café near our office makes excellent _____. Many workers buy a cup on their way to the morning meeting.",
    "options": [
      "coffee",
      "dawn",
      "routine",
      "habit"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Please turn off your phones during the training session. We need everyone to _____ on the safety rules.",
    "options": [
      "stretch",
      "focus",
      "wake",
      "rise"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Our team will _____ next year's marketing budget at Friday's meeting. Please bring your ideas and cost estimates.",
    "options": [
      "jog",
      "awaken",
      "plan",
      "meditate"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Workers spend over two hours on their daily _____. The company is now thinking about letting staff work from home.",
    "options": [
      "alarm",
      "dawn",
      "sunrise",
      "commute"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The report must be sent to the client by Friday. We cannot change the _____ because the client's board meets on Monday.",
    "options": [
      "sunrise",
      "deadline",
      "breakfast",
      "exercise"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Customers like the restaurant because the quality of its food is very _____. Every dish tastes just as good as last time.",
    "options": [
      "consistent",
      "sleepy",
      "rested",
      "alert"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "early": {
    "pos": "adj.",
    "en_def": "happening near the beginning of the day or a period",
    "cn_def": "早的；初期的"
  },
  "dawn": {
    "pos": "n.",
    "en_def": "the time when daylight first appears in the morning",
    "cn_def": "黎明；拂曉"
  },
  "sunrise": {
    "pos": "n.",
    "en_def": "the time when the sun first appears in the sky",
    "cn_def": "日出"
  },
  "morning": {
    "pos": "n.",
    "en_def": "the early part of the day, from when the sun rises until noon",
    "cn_def": "早上；上午"
  },
  "wake": {
    "pos": "v.",
    "en_def": "to stop sleeping",
    "cn_def": "醒來；叫醒"
  },
  "awaken": {
    "pos": "v.",
    "en_def": "to wake up, or to make someone stop sleeping (formal)",
    "cn_def": "喚醒；醒來"
  },
  "rise": {
    "pos": "v.",
    "en_def": "to get out of bed after sleeping",
    "cn_def": "起床；升起"
  },
  "alarm": {
    "pos": "n.",
    "en_def": "a clock or sound that wakes you up at a set time",
    "cn_def": "鬧鐘；警報"
  },
  "schedule": {
    "pos": "n.",
    "en_def": "a plan that lists the times when things will happen",
    "cn_def": "時間表；行程"
  },
  "routine": {
    "pos": "n.",
    "en_def": "the usual things you do and the order you do them in",
    "cn_def": "例行公事；慣例"
  },
  "habit": {
    "pos": "n.",
    "en_def": "something you do often and regularly, often without thinking",
    "cn_def": "習慣"
  },
  "discipline": {
    "pos": "n.",
    "en_def": "the ability to control yourself and do what you should do",
    "cn_def": "自律；紀律"
  },
  "refresh": {
    "pos": "v.",
    "en_def": "to make someone feel less tired and more full of energy",
    "cn_def": "使恢復精神；使清新"
  },
  "energetic": {
    "pos": "adj.",
    "en_def": "having a lot of energy and being very active",
    "cn_def": "精力充沛的"
  },
  "alert": {
    "pos": "adj.",
    "en_def": "able to think quickly and notice things",
    "cn_def": "警覺的；機敏的"
  },
  "productive": {
    "pos": "adj.",
    "en_def": "doing or achieving a lot of useful work",
    "cn_def": "有生產力的；有成效的"
  },
  "quiet": {
    "pos": "adj.",
    "en_def": "making very little noise",
    "cn_def": "安靜的"
  },
  "peaceful": {
    "pos": "adj.",
    "en_def": "calm and quiet, without worry or trouble",
    "cn_def": "平靜的；寧靜的"
  },
  "fresh": {
    "pos": "adj.",
    "en_def": "feeling rested and full of energy; clean and cool",
    "cn_def": "清新的；精神飽滿的"
  },
  "exercise": {
    "pos": "n.",
    "en_def": "physical activity that you do to stay healthy",
    "cn_def": "運動"
  },
  "jog": {
    "pos": "v.",
    "en_def": "to run slowly and steadily for exercise",
    "cn_def": "慢跑"
  },
  "stretch": {
    "pos": "v.",
    "en_def": "to make your arms, legs or body as long as possible to loosen muscles",
    "cn_def": "伸展"
  },
  "meditate": {
    "pos": "v.",
    "en_def": "to sit quietly and calm your mind for a period of time",
    "cn_def": "冥想；靜坐"
  },
  "breakfast": {
    "pos": "n.",
    "en_def": "the first meal of the day",
    "cn_def": "早餐"
  },
  "coffee": {
    "pos": "n.",
    "en_def": "a hot drink made from roasted beans",
    "cn_def": "咖啡"
  },
  "focus": {
    "pos": "v.",
    "en_def": "to give all your attention to one thing",
    "cn_def": "專注；集中"
  },
  "plan": {
    "pos": "v.",
    "en_def": "to decide what you will do and how you will do it",
    "cn_def": "計畫；規劃"
  },
  "prepare": {
    "pos": "v.",
    "en_def": "to make something or someone ready",
    "cn_def": "準備"
  },
  "commute": {
    "pos": "n.",
    "en_def": "the trip you make to work and back every day",
    "cn_def": "通勤"
  },
  "deadline": {
    "pos": "n.",
    "en_def": "the time or date by which something must be finished",
    "cn_def": "截止期限"
  },
  "sleepy": {
    "pos": "adj.",
    "en_def": "tired and wanting to sleep",
    "cn_def": "想睡的；睏的"
  },
  "rested": {
    "pos": "adj.",
    "en_def": "not tired because you have slept or relaxed",
    "cn_def": "休息充足的"
  },
  "consistent": {
    "pos": "adj.",
    "en_def": "always behaving or happening in the same way",
    "cn_def": "一致的；始終如一的"
  },
  "motivation": {
    "pos": "n.",
    "en_def": "the reason or desire that makes you want to do something",
    "cn_def": "動機；動力"
  },
  "balance": {
    "pos": "n.",
    "en_def": "a healthy situation in which different parts of your life get the right amount of time",
    "cn_def": "平衡"
  },
  "lifestyle": {
    "pos": "n.",
    "en_def": "the way a person lives, including habits and activities",
    "cn_def": "生活方式"
  }
};

const EXTRA_GLOSSES = {};
