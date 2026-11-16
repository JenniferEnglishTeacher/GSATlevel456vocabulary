// Topic 127 Quiz Data: Exercise 運動
// Source word list: https://www.examword.com/group-topic/exercise — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T127 - Exercise 運動",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "workout",
    "pos": "n.",
    "cn_def": "健身鍛鍊；運動",
    "en_def": "a session of physical exercise",
    "sentence": "A: You look really tired today, so did you stay late at the office again to finish the quarterly sales report for the director? B: No, I finished it yesterday, but I joined a new class at the gym after work and the {{BLANK}} was much harder than I expected, so my legs still hurt this morning.",
    "cn": "A：你今天看起來很累，是不是又在辦公室待到很晚，把要給主管的季度銷售報告做完？ B：不是，我昨天就做完了，但我下班後在健身房參加了一個新課程，那次【健身鍛鍊】比我預期的難得多，所以我的腿到今天早上還在痛。"
  },
  {
    "word": "train",
    "pos": "v.",
    "cn_def": "訓練；鍛鍊",
    "en_def": "to practice a sport or skill to get ready for something",
    "sentence": "A: I heard that several people from the marketing department are going to run in the city marathon next month, and are you one of them? B: Yes, I am, and I {{BLANK}} three evenings a week with a coach near my apartment because I want to finish the race in under four hours.",
    "cn": "A：我聽說行銷部有好幾個人下個月要參加城市馬拉松，你是其中之一嗎？ B：是的，我有參加，而且我每週有三個晚上在我公寓附近跟著教練【訓練】，因為我想在四小時內跑完全程。"
  },
  {
    "word": "fitness",
    "pos": "n.",
    "cn_def": "健康；體能",
    "en_def": "the condition of being physically strong and healthy",
    "sentence": "A: Why did the company decide to open a small gym on the third floor instead of using the space for another meeting room? B: The managers believe that better {{BLANK}} will help employees feel less stressed, take fewer sick days, and stay focused during long afternoons at their desks.",
    "cn": "A：公司為什麼決定在三樓開一間小型健身房，而不是把那個空間拿來當另一間會議室？ B：主管們相信更好的【體能】能幫助員工減輕壓力、減少請病假的天數，並在辦公桌前漫長的下午保持專注。"
  },
  {
    "word": "strength",
    "pos": "n.",
    "cn_def": "力氣；體力",
    "en_def": "the physical power to lift or move heavy things",
    "sentence": "A: Do you think the new warehouse staff will be able to move all of these heavy boxes onto the delivery truck before the driver leaves at noon? B: I hope so, because they have a lot of {{BLANK}}, but we should still use the machine for the largest boxes so nobody gets hurt.",
    "cn": "A：你覺得新來的倉庫員工能在司機中午出發前，把這些很重的箱子全部搬上送貨卡車嗎？ B：希望可以，因為他們很有【力氣】，不過最大的箱子我們還是應該用機器搬，這樣才不會有人受傷。"
  },
  {
    "word": "endurance",
    "pos": "n.",
    "cn_def": "耐力",
    "en_def": "the ability to keep doing something hard for a long time",
    "sentence": "A: How did you manage to hike all the way to the top of the mountain during the company retreat while most of us stopped halfway to rest? B: I have been swimming every morning for a year, so my {{BLANK}} is much better now, and I did not feel tired until we reached the top.",
    "cn": "A：公司員工旅遊時，我們大多數人爬到一半就停下來休息，你是怎麼一路爬到山頂的？ B：我已經每天早上游泳游了一年，所以我的【耐力】現在好多了，一直到我們抵達山頂我都沒覺得累。"
  },
  {
    "word": "flexibility",
    "pos": "n.",
    "cn_def": "柔軟度",
    "en_def": "the ability to bend your body easily",
    "sentence": "A: Why does the physical therapist at the clinic want you to do yoga twice a week after you finish work at the office? B: She says sitting at my desk for nine hours a day has reduced my {{BLANK}}, so my back and shoulders feel stiff and I often get pain when I bend down.",
    "cn": "A：為什麼診所的物理治療師要你在辦公室下班後每週做兩次瑜伽？ B：她說我每天坐在辦公桌前九個小時，降低了我的【柔軟度】，所以我的背和肩膀感覺很僵硬，彎腰時也常常會痛。"
  },
  {
    "word": "stretch",
    "pos": "v.",
    "cn_def": "伸展",
    "en_def": "to make your arms, legs or body longer to relax your muscles",
    "sentence": "A: My neck and shoulders always feel tight by the end of the day, and I am not sure what I should do about it at work. B: Every hour, you should stand up, {{BLANK}} your arms above your head for a minute, and take a short break from your computer screen to rest your eyes.",
    "cn": "A：我的脖子和肩膀到下班時總是很緊繃，我不確定上班時該怎麼辦。 B：你應該每小時站起來一次，把手臂舉過頭頂【伸展】一分鐘，並暫時離開電腦螢幕休息一下，讓眼睛放鬆。"
  },
  {
    "word": "warm-up",
    "pos": "n.",
    "cn_def": "暖身運動",
    "en_def": "gentle exercise you do before harder exercise",
    "sentence": "A: Should we start the company soccer game right away, since everyone is already here and the field is only booked until six o'clock? B: Let's do a short {{BLANK}} first, because several players came straight from the office and could easily pull a muscle if they start running too fast.",
    "cn": "A：既然大家都到了，而且球場只預約到六點，我們要不要馬上開始公司的足球比賽？ B：我們先做個簡短的【暖身運動】吧，因為有幾位球員是直接從辦公室過來的，如果一開始就跑太快，很容易拉傷肌肉。"
  },
  {
    "word": "cool-down",
    "pos": "n.",
    "cn_def": "緩和運動",
    "en_def": "slow, easy exercise you do after hard exercise to help your body relax",
    "sentence": "A: After the spinning class at the fitness center last night, my legs felt so heavy that I could hardly walk up the stairs to my apartment. B: Did you skip the {{BLANK}} at the end of the class? The instructor says ten minutes of slow pedaling and stretching really helps your muscles recover.",
    "cn": "A：昨晚在健身中心上完飛輪課後，我的腿重到幾乎爬不上樓梯回公寓。 B：你是不是跳過了課程最後的【緩和運動】？教練說十分鐘的慢速踩踏和伸展真的很有助於肌肉恢復。"
  },
  {
    "word": "jog",
    "pos": "v.",
    "cn_def": "慢跑",
    "en_def": "to run slowly and steadily for exercise",
    "sentence": "A: Since our hotel is right next to the river, do you want to do something active before the sales conference starts tomorrow morning? B: Sure, let's meet in the lobby at six and {{BLANK}} along the river path for about thirty minutes, then we can have breakfast together before the first session.",
    "cn": "A：既然我們的飯店就在河邊，明天早上業務會議開始前，你想不想做點運動？ B：好啊，我們六點在大廳碰面，然後沿著河邊步道【慢跑】大約三十分鐘，接著可以在第一場會議前一起吃早餐。"
  },
  {
    "word": "run",
    "pos": "v.",
    "cn_def": "跑步",
    "en_def": "to move very quickly on your feet",
    "sentence": "A: How do you stay so fit when you work such long hours at the bank and also have two young children at home? B: I {{BLANK}} to the office three days a week instead of taking the bus, so I get my exercise and save money on transportation at the same time.",
    "cn": "A：你在銀行工作時間那麼長，家裡又有兩個小孩，你是怎麼保持這麼好的身材？ B：我每週有三天【跑步】去辦公室，而不是搭公車，這樣既能運動，又能同時省下交通費。"
  },
  {
    "word": "walk",
    "pos": "v.",
    "cn_def": "走路；步行",
    "en_def": "to move on foot at a normal speed",
    "sentence": "A: The doctor at my annual health check said I need to move more, but I really don't have time to go to the gym after work. B: Why not {{BLANK}} to the train station every morning instead of driving? It only takes twenty minutes, and you can listen to podcasts on the way.",
    "cn": "A：年度健康檢查的醫生說我需要多活動，但我下班後真的沒時間去健身房。 B：何不每天早上【走路】去火車站，而不是開車呢？只要二十分鐘，而且你還可以在路上聽播客。"
  },
  {
    "word": "cycle",
    "pos": "v.",
    "cn_def": "騎自行車",
    "en_def": "to ride a bicycle",
    "sentence": "A: The parking fees near our new office building are really expensive, so how are you planning to get to work every day? B: I've decided to {{BLANK}} to work along the new bike lane, which is cheaper than driving, good for my health, and only takes about twenty-five minutes.",
    "cn": "A：我們新辦公大樓附近的停車費真的很貴，你打算每天怎麼去上班？ B：我決定沿著新的自行車道【騎自行車】上班，這比開車便宜，對健康也有好處，而且只要大約二十五分鐘。"
  },
  {
    "word": "swim",
    "pos": "v.",
    "cn_def": "游泳",
    "en_def": "to move through water using your arms and legs",
    "sentence": "A: The hotel we booked for the sales training has a large indoor pool on the top floor, but are you going to use it? B: Yes, I plan to {{BLANK}} for half an hour every morning before the workshop begins, because it helps me wake up and feel relaxed before a long day.",
    "cn": "A：我們為業務訓練預訂的飯店頂樓有一座大型室內游泳池，你會去用嗎？ B：會啊，我打算每天早上在研習開始前【游泳】半小時，因為這能幫助我清醒，並在漫長的一天之前感到放鬆。"
  },
  {
    "word": "lift",
    "pos": "v.",
    "cn_def": "舉起；抬起",
    "en_def": "to raise something heavy, such as weights or boxes",
    "sentence": "A: Why did your manager tell you to ask for help when the new printers arrive at the office later this afternoon? B: She knows I hurt my back last month, and the doctor told me not to {{BLANK}} anything heavier than ten kilograms until my next appointment in two weeks.",
    "cn": "A：為什麼你的主管叫你今天下午新印表機送到辦公室時要找人幫忙？ B：她知道我上個月傷到背，而醫生告訴我，在兩週後的下次回診之前，不要【舉起】任何超過十公斤的東西。"
  },
  {
    "word": "aerobic",
    "pos": "adj.",
    "cn_def": "有氧的",
    "en_def": "describing exercise that makes your heart and lungs work harder, like running or dancing",
    "sentence": "A: The fitness center near our office offers many different classes, so which one would you recommend for a beginner like me? B: I would start with a simple {{BLANK}} dance class on Tuesday evenings, because it raises your heart rate, burns calories, and the music makes the hour go by quickly.",
    "cn": "A：我們辦公室附近的健身中心有很多不同的課程，你會推薦哪一種給像我這樣的初學者？ B：我會從週二晚上簡單的【有氧】舞蹈課開始，因為它能提高心率、燃燒卡路里，而且音樂讓那一小時過得很快。"
  },
  {
    "word": "vigorous",
    "pos": "adj.",
    "cn_def": "劇烈的；激烈的",
    "en_def": "very active, strong and full of energy",
    "sentence": "A: My doctor said I should get more exercise, but should I start with long runs every day to lose weight more quickly? B: Not yet, because {{BLANK}} exercise can be dangerous if your body isn't ready, so begin with gentle walks and slowly increase the time and speed over several weeks.",
    "cn": "A：醫生說我應該多運動，但我要不要一開始就每天長跑，好讓體重減得更快？ B：先不要，因為如果你的身體還沒準備好，【劇烈的】運動可能會很危險，所以先從輕鬆的散步開始，然後在幾週內慢慢增加時間和速度。"
  },
  {
    "word": "moderate",
    "pos": "adj.",
    "cn_def": "適度的；中等的",
    "en_def": "not too much and not too little; medium",
    "sentence": "A: How much exercise do you think our older employees should do each week if they want to join the new company health program? B: The program's nurse suggests about thirty minutes of {{BLANK}} activity five days a week, such as brisk walking or light cycling, which is safe for most people.",
    "cn": "A：如果年紀較大的員工想參加公司新的健康計畫，你覺得他們每週應該做多少運動？ B：計畫的護理師建議每週五天、每次大約三十分鐘的【適度】活動，例如快走或輕鬆騎腳踏車，這對大多數人來說都很安全。"
  },
  {
    "word": "active",
    "pos": "adj.",
    "cn_def": "活躍的；好動的",
    "en_def": "moving around and doing things a lot",
    "sentence": "A: Since you started working from home last year, do you find it harder to stay healthy without the daily trip to the office? B: Yes, so I try to stay {{BLANK}} by taking the stairs, playing tennis with my neighbors on weekends, and walking my dog twice a day around the park.",
    "cn": "A：自從你去年開始在家工作後，少了每天通勤去辦公室，你會覺得比較難保持健康嗎？ B：會，所以我盡量保持【活躍】，像是走樓梯、週末跟鄰居打網球，還有每天帶狗繞公園散步兩次。"
  },
  {
    "word": "sedentary",
    "pos": "adj.",
    "cn_def": "久坐的",
    "en_def": "involving a lot of sitting and little movement",
    "sentence": "A: Why is the human resources department buying standing desks for everyone in the accounting team this month? B: Accountants have a very {{BLANK}} job, sitting in front of computers for most of the day, and the company hopes the new desks will reduce back pain and help people move more.",
    "cn": "A：人資部門為什麼這個月要幫會計團隊每個人購買站立式辦公桌？ B：會計師的工作非常【久坐】，一天大部分時間都坐在電腦前，公司希望新的辦公桌能減少背痛，並幫助大家多活動。"
  },
  {
    "word": "trainer",
    "pos": "n.",
    "cn_def": "教練",
    "en_def": "a person who teaches people how to exercise",
    "sentence": "A: You've lost a lot of weight since the summer, so did you follow a special diet or join a sports team after work? B: Neither, actually; I hired a personal {{BLANK}} at the gym near my office, and she designed a program that fits my busy schedule and keeps me motivated.",
    "cn": "A：你從夏天以來瘦了很多，你是有遵循特別的飲食，還是下班後參加了運動隊？ B：其實都不是；我在辦公室附近的健身房請了一位私人【教練】，她設計了一套符合我忙碌行程的計畫，讓我保持動力。"
  },
  {
    "word": "gym",
    "pos": "n.",
    "cn_def": "健身房",
    "en_def": "a room or building with equipment for exercise",
    "sentence": "A: Is it true that the company is offering a discount on memberships for employees who want to exercise after work? B: Yes, the {{BLANK}} across the street from our building gives us thirty percent off, and it stays open until eleven at night, so even people who work late can go.",
    "cn": "A：公司真的有提供會員優惠給想在下班後運動的員工嗎？ B：是的，我們大樓對面的【健身房】給我們打七折，而且營業到晚上十一點，所以就算是加班的人也可以去。"
  },
  {
    "word": "routine",
    "pos": "n.",
    "cn_def": "例行公事；固定習慣",
    "en_def": "the usual set of things you do regularly",
    "sentence": "A: How do you find time to exercise when you travel so often for business meetings in different cities? B: I keep a simple {{BLANK}} of push-ups, sit-ups, and stretching that I can do in any hotel room in twenty minutes, so I never have to skip a day.",
    "cn": "A：你經常到不同城市出差開會，是怎麼找出時間運動的？ B：我維持一套簡單的伏地挺身、仰臥起坐和伸展的【固定習慣】，在任何飯店房間二十分鐘就能做完，所以我從不需要停一天。"
  },
  {
    "word": "balance",
    "pos": "n.",
    "cn_def": "平衡",
    "en_def": "the ability to stay steady without falling",
    "sentence": "A: Why does the yoga teacher at the community center ask everyone to stand on one leg at the start of every class? B: She says it improves your {{BLANK}} and helps prevent falls as you get older, which is why many retired people from our company now attend her lessons.",
    "cn": "A：社區中心的瑜伽老師為什麼每堂課一開始都要大家單腳站立？ B：她說這能改善你的【平衡】，並幫助你在年紀漸長時預防跌倒，這也是為什麼我們公司許多退休人員現在都去上她的課。"
  },
  {
    "word": "posture",
    "pos": "n.",
    "cn_def": "姿勢",
    "en_def": "the way you hold your body when you sit or stand",
    "sentence": "A: I have had terrible back pain since I started working on the new design project, and I don't understand why. B: You often lean forward toward your laptop for hours, so your {{BLANK}} is poor; try raising the screen and sitting up straight with both feet on the floor.",
    "cn": "A：自從我開始做新的設計專案後，背就痛得很厲害，我不明白為什麼。 B：你常常好幾個小時身體前傾靠向筆電，所以你的【姿勢】很差；試著把螢幕架高，坐直並讓雙腳平放在地上。"
  },
  {
    "word": "heartbeat",
    "pos": "n.",
    "cn_def": "心跳",
    "en_def": "the regular movement or sound of your heart",
    "sentence": "A: Why are so many people in our department wearing those new smart watches that the company gave out last week? B: The watches check your {{BLANK}} while you exercise and send a warning if it gets too fast, so people feel safer when they jog or play sports after work.",
    "cn": "A：為什麼我們部門這麼多人都戴著公司上週發的新智慧手錶？ B：這些手錶會在你運動時監測你的【心跳】，太快時還會發出警告，所以大家下班後慢跑或運動時會覺得比較安全。"
  },
  {
    "word": "sweat",
    "pos": "v.",
    "cn_def": "流汗",
    "en_def": "to produce liquid through your skin when you are hot or working hard",
    "sentence": "A: Why do you always bring an extra shirt to the office on the days when you ride your bike to work? B: The road from my apartment has two steep hills, and I {{BLANK}} a lot on the way, so I change clothes before my first meeting with clients.",
    "cn": "A：為什麼你騎腳踏車上班的那幾天總是多帶一件襯衫到辦公室？ B：我公寓出來的路上有兩個陡坡，我在路上會【流汗】流很多，所以在跟客戶第一場會議之前我會換衣服。"
  },
  {
    "word": "breathe",
    "pos": "v.",
    "cn_def": "呼吸",
    "en_def": "to take air into your body and let it out",
    "sentence": "A: I always feel so nervous before I give a presentation to the board of directors, and my voice starts to shake. B: Before you walk into the meeting room, stand still, {{BLANK}} slowly and deeply for one minute, and you will feel much calmer and more confident when you begin.",
    "cn": "A：每次要向董事會做簡報前我都非常緊張，聲音還會開始發抖。 B：在你走進會議室之前，先站好，緩慢而深沉地【呼吸】一分鐘，你開始報告時就會覺得冷靜許多，也更有自信。"
  },
  {
    "word": "recover",
    "pos": "v.",
    "cn_def": "恢復；康復",
    "en_def": "to become healthy or strong again after an illness, injury or hard exercise",
    "sentence": "A: Is Daniel coming back to work on Monday, or will he need more time off after hurting his knee in the company soccer game? B: The doctor said it will take about three weeks for him to {{BLANK}} fully, so he will work from home until he can walk without pain.",
    "cn": "A：Daniel星期一會回來上班嗎？還是他在公司足球賽傷到膝蓋後需要更多休假？ B：醫生說他大約需要三週才能完全【康復】，所以在他能不痛地走路之前，他會在家工作。"
  },
  {
    "word": "muscle",
    "pos": "n.",
    "cn_def": "肌肉",
    "en_def": "a part of the body that tightens and relaxes to make you move",
    "sentence": "A: You were walking strangely when you came into the office this morning, so did something happen on your way to work? B: I pulled a {{BLANK}} in my leg while I was playing basketball with my coworkers last night, so the nurse told me to rest and put ice on it.",
    "cn": "A：你今天早上進辦公室時走路怪怪的，上班途中發生了什麼事嗎？ B：我昨晚跟同事打籃球時拉傷了腿部的【肌肉】，所以護理師叫我休息並冰敷。"
  },
  {
    "word": "calorie",
    "pos": "n.",
    "cn_def": "卡路里；熱量",
    "en_def": "a unit that measures the energy in food",
    "sentence": "A: The new cafeteria menu shows a number next to every meal, but what does that number actually mean for the staff? B: It shows the total amount of energy in each dish, so if you want to lose weight, you can count every {{BLANK}} you eat at lunch and choose lighter meals more easily.",
    "cn": "A：新的員工餐廳菜單在每道餐點旁邊都標了一個數字，那個數字對員工來說到底代表什麼？ B：它顯示每道菜的總熱量，所以如果你想減重，就可以計算午餐吃下的每一【卡路里】，更輕鬆地選擇比較清淡的餐點。"
  },
  {
    "word": "healthy",
    "pos": "adj.",
    "cn_def": "健康的",
    "en_def": "physically strong and not sick",
    "sentence": "A: Why does the company give every employee free fruit in the break room and pay for a yearly medical check-up? B: The managers know that {{BLANK}} workers take fewer sick days and have more energy, so these small costs actually save the company money over time.",
    "cn": "A：為什麼公司在休息室提供每位員工免費水果，還支付每年的健康檢查費用？ B：主管們知道【健康的】員工請病假的天數比較少，精力也比較充沛，所以這些小小的花費長期下來其實能幫公司省錢。"
  },
  {
    "word": "energetic",
    "pos": "adj.",
    "cn_def": "精力充沛的",
    "en_def": "having a lot of energy and being very active",
    "sentence": "A: How do you feel since you started going swimming before work three times a week with your neighbor? B: I feel much more {{BLANK}} during the day, and I no longer need two cups of coffee after lunch to stay awake in long afternoon meetings with clients.",
    "cn": "A：自從你開始每週三次在上班前跟鄰居去游泳後，感覺怎麼樣？ B：我白天覺得【精力充沛】多了，在下午跟客戶的長時間會議裡，也不再需要午餐後喝兩杯咖啡來保持清醒。"
  },
  {
    "word": "regularly",
    "pos": "adv.",
    "cn_def": "規律地；定期地",
    "en_def": "often, at the same times each day or week",
    "sentence": "A: My new doctor told me that short exercise once a month is not enough, but I don't understand why that matters. B: Your body only gets stronger if you exercise {{BLANK}}, so it is better to walk for thirty minutes every day than to run for three hours once a month.",
    "cn": "A：我的新醫生說一個月運動一次短時間是不夠的，但我不懂為什麼那很重要。 B：你的身體只有在你【規律地】運動時才會變得更強壯，所以每天走路三十分鐘，比一個月跑一次三小時還要好。"
  },
  {
    "word": "physically",
    "pos": "adv.",
    "cn_def": "身體上；體力上",
    "en_def": "in a way that relates to the body",
    "sentence": "A: Why does the delivery company give new drivers a health check before they start working on the trucks next month? B: The job is very {{BLANK}} demanding, because drivers carry heavy packages up and down stairs all day, so the company wants to be sure they are strong enough.",
    "cn": "A：為什麼這家快遞公司要在新司機下個月開始上卡車工作之前，先幫他們做健康檢查？ B：這份工作在【體力上】要求非常高，因為司機整天都要搬著重包裹上下樓梯，所以公司想確定他們夠強壯。"
  }
];

const MCQS = [
  {
    "q": "Our manager leaves the office at noon for a quick _____ at the gym. She says the exercise helps her think clearly in the afternoon.",
    "options": [
      "workout",
      "posture",
      "heartbeat",
      "calorie"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The marketing team will _____ every weekend for the charity race next spring. They hope to raise money for the local children's hospital.",
    "options": [
      "breathe",
      "lift",
      "train",
      "recover"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "New employees must pass a basic _____ test before joining the fire safety team. The test includes running, climbing stairs, and carrying equipment.",
    "options": [
      "heartbeat",
      "fitness",
      "routine",
      "muscle"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Moving the old filing cabinets requires great physical _____. Please ask the building staff to help instead of doing it alone.",
    "options": [
      "flexibility",
      "posture",
      "balance",
      "strength"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Long-distance cyclists need excellent _____ to ride for six hours without stopping. Many of them train for months before a big race.",
    "options": [
      "posture",
      "warm-up",
      "endurance",
      "heartbeat"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Gymnasts and dancers need great _____ to bend their bodies into difficult positions. They spend a lot of time stretching every day.",
    "options": [
      "flexibility",
      "calorie",
      "trainer",
      "heartbeat"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Before you start running, gently _____ your legs for a few minutes. This can help prevent injuries to your muscles.",
    "options": [
      "breathe",
      "sweat",
      "recover",
      "stretch"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The coach asked everyone to do a ten-minute _____ before the game. Cold muscles are more likely to get injured during hard exercise.",
    "options": [
      "posture",
      "warm-up",
      "calorie",
      "heartbeat"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Many hotel guests like to _____ along the beach early in the morning. The air is cool and fresh then.",
    "options": [
      "jog",
      "lift",
      "sweat",
      "recover"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Over three hundred people signed up to _____ in the city marathon this year. The event will raise money for local schools.",
    "options": [
      "lift",
      "stretch",
      "run",
      "breathe"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The hotel has a heated indoor pool where guests can _____ all year round. It is open from six in the morning until ten at night.",
    "options": [
      "lift",
      "swim",
      "cycle",
      "jog"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Workers should not _____ boxes heavier than twenty kilograms without help. Please use the cart in the storage room for heavy items.",
    "options": [
      "breathe",
      "swim",
      "jog",
      "lift"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Activities like dancing and swimming are good examples of _____ exercise. They make your heart and lungs work harder for a long time.",
    "options": [
      "sedentary",
      "nervous",
      "aerobic",
      "tired"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Doctors warn people with heart problems to avoid _____ exercise such as sprinting. Gentle walking is usually a safer choice for them.",
    "options": [
      "vigorous",
      "sedentary",
      "quiet",
      "lazy"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Health experts recommend at least 150 minutes of _____ exercise each week. Brisk walking and light cycling are good examples.",
    "options": [
      "sedentary",
      "lazy",
      "expensive",
      "moderate"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Even with a busy office job, you can stay _____ by taking the stairs. Walking during lunch breaks also helps.",
    "options": [
      "sedentary",
      "active",
      "lazy",
      "tired"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "People with _____ jobs, such as call center workers, often sit for eight hours a day. Experts suggest they stand up every hour.",
    "options": [
      "sedentary",
      "active",
      "energetic",
      "vigorous"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The new fitness club employs a personal _____ who creates exercise plans for each member. Sessions can be booked at the front desk.",
    "options": [
      "muscle",
      "calorie",
      "trainer",
      "posture"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The company has built a small _____ on the ground floor with treadmills and weights. Employees may use it before or after work.",
    "options": [
      "posture",
      "gym",
      "heartbeat",
      "calorie"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "My morning _____ includes twenty minutes of yoga and a healthy breakfast. Following the same steps every day helps me start work calmly.",
    "options": [
      "heartbeat",
      "muscle",
      "posture",
      "routine"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Standing on one foot while brushing your teeth is a simple way to improve your _____. It also strengthens the muscles in your legs.",
    "options": [
      "calorie",
      "trainer",
      "balance",
      "gym"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Sitting up straight with your feet flat on the floor shows good _____. Poor sitting habits can cause back pain over time.",
    "options": [
      "posture",
      "heartbeat",
      "calorie",
      "endurance"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The smart watch checks your _____ while you exercise. If it becomes too fast, the watch will warn you to slow down.",
    "options": [
      "posture",
      "trainer",
      "muscle",
      "heartbeat"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Hot yoga classes make people _____ a lot because the room is heated to forty degrees. Remember to bring water and a towel.",
    "options": [
      "lift",
      "sweat",
      "jog",
      "recover"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "During the relaxation class, the instructor told us to _____ in slowly through our noses. Then we let the air out through our mouths.",
    "options": [
      "breathe",
      "sweat",
      "lift",
      "jog"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "After his knee operation, the sales manager needed six weeks to _____ fully. During that time, he worked from home.",
    "options": [
      "stretch",
      "sweat",
      "recover",
      "jog"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Lifting weights two or three times a week helps build _____ and makes your bones stronger. Start with light weights and increase slowly.",
    "options": [
      "calorie",
      "muscle",
      "posture",
      "heartbeat"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The cafeteria now lists the _____ count of every dish on the menu. This helps staff make healthier choices at lunch.",
    "options": [
      "muscle",
      "heartbeat",
      "posture",
      "calorie"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "After a good night's sleep and a morning swim, I feel _____ enough to handle a full day of meetings. Exercise really improves my mood.",
    "options": [
      "sedentary",
      "aerobic",
      "energetic",
      "moderate"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The hotel's _____ center has modern treadmills and free weights. Guests can use it at no extra cost during their stay.",
    "options": [
      "fitness",
      "heartbeat",
      "posture",
      "calorie"
    ],
    "answer": 0,
    "vocabIndex": 2
  }
];

const LOOKUP = {
  "workout": {
    "pos": "n.",
    "en_def": "a session of physical exercise",
    "cn_def": "健身鍛鍊；運動"
  },
  "train": {
    "pos": "v.",
    "en_def": "to practice a sport or skill to get ready for something",
    "cn_def": "訓練；鍛鍊"
  },
  "fitness": {
    "pos": "n.",
    "en_def": "the condition of being physically strong and healthy",
    "cn_def": "健康；體能"
  },
  "strength": {
    "pos": "n.",
    "en_def": "the physical power to lift or move heavy things",
    "cn_def": "力氣；體力"
  },
  "endurance": {
    "pos": "n.",
    "en_def": "the ability to keep doing something hard for a long time",
    "cn_def": "耐力"
  },
  "flexibility": {
    "pos": "n.",
    "en_def": "the ability to bend your body easily",
    "cn_def": "柔軟度"
  },
  "stretch": {
    "pos": "v.",
    "en_def": "to make your arms, legs or body longer to relax your muscles",
    "cn_def": "伸展"
  },
  "warm-up": {
    "pos": "n.",
    "en_def": "gentle exercise you do before harder exercise",
    "cn_def": "暖身運動"
  },
  "cool-down": {
    "pos": "n.",
    "en_def": "slow, easy exercise you do after hard exercise to help your body relax",
    "cn_def": "緩和運動"
  },
  "jog": {
    "pos": "v.",
    "en_def": "to run slowly and steadily for exercise",
    "cn_def": "慢跑"
  },
  "run": {
    "pos": "v.",
    "en_def": "to move very quickly on your feet",
    "cn_def": "跑步"
  },
  "walk": {
    "pos": "v.",
    "en_def": "to move on foot at a normal speed",
    "cn_def": "走路；步行"
  },
  "cycle": {
    "pos": "v.",
    "en_def": "to ride a bicycle",
    "cn_def": "騎自行車"
  },
  "swim": {
    "pos": "v.",
    "en_def": "to move through water using your arms and legs",
    "cn_def": "游泳"
  },
  "lift": {
    "pos": "v.",
    "en_def": "to raise something heavy, such as weights or boxes",
    "cn_def": "舉起；抬起"
  },
  "aerobic": {
    "pos": "adj.",
    "en_def": "describing exercise that makes your heart and lungs work harder, like running or dancing",
    "cn_def": "有氧的"
  },
  "vigorous": {
    "pos": "adj.",
    "en_def": "very active, strong and full of energy",
    "cn_def": "劇烈的；激烈的"
  },
  "moderate": {
    "pos": "adj.",
    "en_def": "not too much and not too little; medium",
    "cn_def": "適度的；中等的"
  },
  "active": {
    "pos": "adj.",
    "en_def": "moving around and doing things a lot",
    "cn_def": "活躍的；好動的"
  },
  "sedentary": {
    "pos": "adj.",
    "en_def": "involving a lot of sitting and little movement",
    "cn_def": "久坐的"
  },
  "trainer": {
    "pos": "n.",
    "en_def": "a person who teaches people how to exercise",
    "cn_def": "教練"
  },
  "gym": {
    "pos": "n.",
    "en_def": "a room or building with equipment for exercise",
    "cn_def": "健身房"
  },
  "routine": {
    "pos": "n.",
    "en_def": "the usual set of things you do regularly",
    "cn_def": "例行公事；固定習慣"
  },
  "balance": {
    "pos": "n.",
    "en_def": "the ability to stay steady without falling",
    "cn_def": "平衡"
  },
  "posture": {
    "pos": "n.",
    "en_def": "the way you hold your body when you sit or stand",
    "cn_def": "姿勢"
  },
  "heartbeat": {
    "pos": "n.",
    "en_def": "the regular movement or sound of your heart",
    "cn_def": "心跳"
  },
  "sweat": {
    "pos": "v.",
    "en_def": "to produce liquid through your skin when you are hot or working hard",
    "cn_def": "流汗"
  },
  "breathe": {
    "pos": "v.",
    "en_def": "to take air into your body and let it out",
    "cn_def": "呼吸"
  },
  "recover": {
    "pos": "v.",
    "en_def": "to become healthy or strong again after an illness, injury or hard exercise",
    "cn_def": "恢復；康復"
  },
  "muscle": {
    "pos": "n.",
    "en_def": "a part of the body that tightens and relaxes to make you move",
    "cn_def": "肌肉"
  },
  "calorie": {
    "pos": "n.",
    "en_def": "a unit that measures the energy in food",
    "cn_def": "卡路里；熱量"
  },
  "healthy": {
    "pos": "adj.",
    "en_def": "physically strong and not sick",
    "cn_def": "健康的"
  },
  "energetic": {
    "pos": "adj.",
    "en_def": "having a lot of energy and being very active",
    "cn_def": "精力充沛的"
  },
  "regularly": {
    "pos": "adv.",
    "en_def": "often, at the same times each day or week",
    "cn_def": "規律地；定期地"
  },
  "physically": {
    "pos": "adv.",
    "en_def": "in a way that relates to the body",
    "cn_def": "身體上；體力上"
  }
};

const EXTRA_GLOSSES = {};
