// Topic 259 Quiz Data: Noise 噪音
// Source word list: https://www.examword.com/group-topic/noise — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T259 - Noise 噪音",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "sound",
    "pos": "n.",
    "cn_def": "聲音；音響",
    "en_def": "something that you hear",
    "sentence": "A: Why did the technician come into the conference room this morning before the client presentation started at ten o'clock? B: The speakers were not working properly during yesterday's rehearsal, so he had to check the {{BLANK}} system and replace a broken cable before our important guests arrived from Tokyo.",
    "cn": "A：技術人員為什麼今天早上在十點的客戶簡報開始前來到會議室？ B：昨天彩排時喇叭運作不正常，所以他必須在我們從東京來的重要客人抵達前檢查【音響】系統，並更換一條壞掉的電線。"
  },
  {
    "word": "volume",
    "pos": "n.",
    "cn_def": "音量",
    "en_def": "how loud a sound is",
    "sentence": "A: Could you ask the people at the reception desk to do something about the music playing in the lobby this afternoon? B: Sure, several visitors have already said it is too loud for phone calls, so I will ask them to turn down the {{BLANK}} right away before more guests start to complain.",
    "cn": "A：你可以請接待櫃台的人處理一下今天下午大廳播放的音樂嗎？ B：當然，已經有好幾位訪客說聲音太大不方便講電話，所以我會請他們馬上把【音量】調低，免得更多客人開始抱怨。"
  },
  {
    "word": "loud",
    "pos": "adj.",
    "cn_def": "大聲的；響亮的",
    "en_def": "making a lot of noise",
    "sentence": "A: Why did you move your desk from the window to the corner of the office last week, since you always said you loved the view? B: The workers repairing the road outside were using a very {{BLANK}} machine every day, and I couldn't hear my customers clearly when I was talking to them on the phone.",
    "cn": "A：你上週為什麼把辦公桌從窗邊搬到辦公室角落？你一直說你很喜歡那裡的景色啊。 B：外面修路的工人每天都在使用一台非常【大聲】的機器，我跟客戶講電話時都聽不清楚他們說的話。"
  },
  {
    "word": "quiet",
    "pos": "adj.",
    "cn_def": "安靜的",
    "en_def": "making little or no noise",
    "sentence": "A: Is there a good place in this building where I can prepare for my job interview with the manager this afternoon? B: You can use the small meeting room on the third floor, because it is usually very {{BLANK}} after lunch and nobody will bother you while you practice your answers.",
    "cn": "A：這棟大樓裡有沒有適合的地方，讓我準備今天下午和經理的工作面試？ B：你可以使用三樓的小會議室，因為午餐後那裡通常非常【安靜】，你練習回答問題時不會有人打擾你。"
  },
  {
    "word": "silent",
    "pos": "adj.",
    "cn_def": "無聲的；靜音的；沉默的",
    "en_def": "with no sound at all",
    "sentence": "A: What should I remember to do before I enter the courtroom with our company lawyer tomorrow morning for the contract case? B: Please keep your mobile phone switched to {{BLANK}} mode the whole time, because the judge gets very upset when a phone rings during a hearing.",
    "cn": "A：明天早上我和公司律師為了合約案進法庭之前，應該記得做什麼？ B：請整段時間都把手機保持在【靜音】模式，因為開庭時如果有手機響，法官會非常不高興。"
  },
  {
    "word": "whisper",
    "pos": "v.",
    "cn_def": "低聲說；耳語",
    "en_def": "to speak very softly",
    "sentence": "A: Why were the two new employees sitting so close together during the training session that the trainer led yesterday afternoon? B: They didn't want to interrupt the speaker, so they had to {{BLANK}} to each other whenever one of them didn't understand the instructions about the new software.",
    "cn": "A：昨天下午講師帶的培訓課程中，那兩位新員工為什麼坐得那麼近？ B：他們不想打斷講者，所以每當其中一人不懂新軟體的操作說明時，他們只好彼此【低聲說話】。"
  },
  {
    "word": "shout",
    "pos": "v.",
    "cn_def": "大喊；喊叫",
    "en_def": "to say something very loudly",
    "sentence": "A: How did the warehouse workers find out that there was a problem with the forklift on the loading dock this morning? B: The driver noticed smoke coming from the engine, so he had to {{BLANK}} to everyone nearby to move away quickly before the supervisor turned off the power.",
    "cn": "A：倉庫工人今天早上是怎麼發現裝卸區的堆高機出了問題？ B：司機注意到引擎冒煙，所以他必須【大喊】叫附近的每個人趕快離開，然後主管才把電源關掉。"
  },
  {
    "word": "scream",
    "pos": "v.",
    "cn_def": "尖叫",
    "en_def": "to make a long, high, loud cry",
    "sentence": "A: What happened at the amusement park during the company picnic last Saturday that everyone keeps talking about at lunch? B: Our usually calm finance director rode the biggest roller coaster for the first time, and she began to {{BLANK}} so loudly that people at the ticket booth turned around to look.",
    "cn": "A：上週六公司野餐時在遊樂園發生了什麼事，大家午餐時一直在聊？ B：我們平常很冷靜的財務長第一次坐最大的雲霄飛車，她開始大聲【尖叫】，連售票亭的人都轉過頭來看。"
  },
  {
    "word": "bang",
    "pos": "n.",
    "cn_def": "砰的一聲；巨響",
    "en_def": "a sudden, very loud noise",
    "sentence": "A: Did you hear that strange noise from the parking garage while we were waiting for the elevator a few minutes ago? B: Yes, there was a loud {{BLANK}} when a delivery truck hit a metal gate, but luckily the security guard said nobody was hurt and only the gate was damaged.",
    "cn": "A：幾分鐘前我們在等電梯時，你有聽到停車場傳來的奇怪聲音嗎？ B：有，一輛送貨卡車撞上金屬大門時發出很大的【砰一聲】，幸好警衛說沒有人受傷，只有大門受損。"
  },
  {
    "word": "crash",
    "pos": "n.",
    "cn_def": "碎裂聲；嘩啦聲；撞擊聲",
    "en_def": "a sudden loud noise of something falling or breaking",
    "sentence": "A: Why did everyone in the kitchen stop working and look toward the storage room during the busy dinner service last night? B: There was a terrible {{BLANK}} when a tall shelf full of plates fell over, so the manager asked two waiters to clean up the broken pieces immediately.",
    "cn": "A：昨晚晚餐忙碌時段，廚房裡的每個人為什麼都停下工作看向儲藏室？ B：一個放滿盤子的高架子倒下來，發出可怕的【嘩啦碎裂聲】，所以經理立刻請兩位服務生清理碎片。"
  },
  {
    "word": "buzz",
    "pos": "n.",
    "cn_def": "嗡嗡聲",
    "en_def": "a low, steady sound like a bee makes",
    "sentence": "A: Why do you keep looking up at the lights in the training room instead of watching the slides during the presentation? B: One of the old lamps makes a constant {{BLANK}} that is hard to ignore, so I am going to ask maintenance to replace it before next week's workshop.",
    "cn": "A：簡報時你為什麼一直抬頭看訓練室的燈，而不是看投影片？ B：其中一盞舊燈一直發出很難忽略的【嗡嗡聲】，所以我打算請維修部門在下週研習會之前把它換掉。"
  },
  {
    "word": "hum",
    "pos": "n.",
    "cn_def": "低沉持續的嗡嗡聲",
    "en_def": "a low, continuous sound",
    "sentence": "A: Is your new office near the server room comfortable, or do you want to request a different desk from the facilities team? B: It's fine most of the time, but the gentle {{BLANK}} of the cooling fans continues all day, so I sometimes wear headphones when I need to concentrate on reports.",
    "cn": "A：你在伺服器機房旁的新辦公室舒適嗎？還是你想向總務組申請換個座位？ B：大部分時間還好，但散熱風扇輕微的【嗡嗡聲】整天不停，所以我需要專心寫報告時有時會戴上耳機。"
  },
  {
    "word": "echo",
    "pos": "n.",
    "cn_def": "回音；回聲",
    "en_def": "a sound that comes back after hitting a surface",
    "sentence": "A: Why did the event planner decide not to hold the awards dinner in the old warehouse that she visited last month? B: The building has high ceilings and bare concrete walls, so every voice created a strong {{BLANK}}, and she worried that guests would not understand the speeches.",
    "cn": "A：活動企劃為什麼決定不在她上個月參觀的那間舊倉庫舉辦頒獎晚宴？ B：那棟建築天花板很高、牆壁是裸露的水泥，每個聲音都會產生強烈的【回音】，她擔心賓客會聽不懂致詞內容。"
  },
  {
    "word": "rattle",
    "pos": "v.",
    "cn_def": "發出咯咯聲；嘎嘎作響",
    "en_def": "to make short knocking sounds by shaking",
    "sentence": "A: Why did you take the company car to the garage again this week, when it was only serviced last month? B: Whenever I drove over bumps on the way to visit clients, something under the seat started to {{BLANK}} loudly, so I asked the mechanic to find the loose part.",
    "cn": "A：公司的車上個月才保養過，你這週為什麼又把它開去修車廠？ B：每次我開車去拜訪客戶時經過顛簸路面，座椅下方就有東西開始大聲【嘎嘎作響】，所以我請技師找出鬆脫的零件。"
  },
  {
    "word": "clatter",
    "pos": "n.",
    "cn_def": "哐啷聲；碰撞聲",
    "en_def": "a series of loud sounds of hard objects hitting each other",
    "sentence": "A: Why does the new café downstairs feel so stressful at lunchtime, even though the food and coffee are really good? B: The kitchen is open to the dining area, so you can hear the constant {{BLANK}} of dishes and pans, and it makes conversations with coworkers quite difficult.",
    "cn": "A：樓下的新咖啡館餐點和咖啡都很好，為什麼午餐時間待在那裡會讓人覺得很有壓力？ B：廚房是對著用餐區開放的，所以你會一直聽到碗盤和鍋子的【哐啷碰撞聲】，讓人很難和同事好好聊天。"
  },
  {
    "word": "roar",
    "pos": "n.",
    "cn_def": "轟鳴聲；咆哮聲",
    "en_def": "a very loud, deep sound",
    "sentence": "A: Did you enjoy staying at the hotel near the international airport during your business trip to Singapore last month? B: The room was clean and the staff were friendly, but the {{BLANK}} of planes taking off woke me up early every morning, so I felt tired during meetings.",
    "cn": "A：你上個月到新加坡出差時，住在國際機場附近的飯店還愉快嗎？ B：房間很乾淨，員工也很友善，但飛機起飛的【轟鳴聲】每天一大早就把我吵醒，所以我開會時都覺得很累。"
  },
  {
    "word": "ring",
    "pos": "v.",
    "cn_def": "按（鈴）；（鈴、電話）響",
    "en_def": "to make a bell or phone make a sound",
    "sentence": "A: How will the receptionist know when a visitor arrives at the front door after six o'clock, when the lobby is locked? B: There is a doorbell next to the entrance, so visitors can {{BLANK}} it, and the security guard on duty will check the camera before letting them in.",
    "cn": "A：六點以後大廳上鎖，訪客到前門時接待人員要怎麼知道？ B：入口旁邊有門鈴，訪客可以【按】門鈴，值班警衛會先查看監視器再讓他們進來。"
  },
  {
    "word": "alarm",
    "pos": "n.",
    "cn_def": "警報；警鈴",
    "en_def": "a loud warning sound or the device that makes it",
    "sentence": "A: Why did everyone have to leave the office building and stand outside in the rain for twenty minutes this morning? B: The fire {{BLANK}} went off on the fifth floor because someone burned toast in the kitchen, and the building manager had to check every floor before we could return.",
    "cn": "A：今天早上為什麼大家都得離開辦公大樓，在外面淋雨站了二十分鐘？ B：因為有人在茶水間把吐司烤焦了，五樓的火災【警報】響了，大樓管理員必須檢查每一層樓後我們才能回去。"
  },
  {
    "word": "disturb",
    "pos": "v.",
    "cn_def": "打擾；干擾",
    "en_def": "to interrupt or bother someone",
    "sentence": "A: Should I knock on the director's door now to ask him to sign these contracts before the courier picks them up? B: Please don't {{BLANK}} him right now, because he is on an important video call with investors, but you can leave the documents with his assistant.",
    "cn": "A：快遞來取件之前，我應該現在去敲主管的門請他簽這些合約嗎？ B：請不要現在【打擾】他，他正在和投資人進行重要的視訊會議，不過你可以把文件交給他的助理。"
  },
  {
    "word": "annoying",
    "pos": "adj.",
    "cn_def": "惱人的；令人厭煩的",
    "en_def": "making you feel a little angry",
    "sentence": "A: Why did you ask the IT department to change the notification settings on your computer this morning? B: Every time a new email arrived, it made an {{BLANK}} beeping sound, and since I get hundreds of messages a day, it was making it hard to focus on my sales reports.",
    "cn": "A：你今天早上為什麼請資訊部更改你電腦的通知設定？ B：每次有新郵件進來，電腦就會發出【惱人的】嗶嗶聲，而我一天收到好幾百封信，害我很難專心寫業務報告。"
  },
  {
    "word": "irritating",
    "pos": "adj.",
    "cn_def": "令人惱火的；煩人的",
    "en_def": "making you feel annoyed or impatient",
    "sentence": "A: How was your flight back from the trade show in Frankfurt, and were you able to get some sleep on the plane? B: Not really, because the passenger behind me kept tapping his pen on the tray table, which was so {{BLANK}} that I finally asked a flight attendant for help.",
    "cn": "A：你從法蘭克福商展回來的班機怎麼樣？在飛機上有睡一下嗎？ B：其實沒有，因為我後面的乘客一直用筆敲餐桌板，實在太【令人惱火】了，最後我只好請空服員幫忙。"
  },
  {
    "word": "deafening",
    "pos": "adj.",
    "cn_def": "震耳欲聾的",
    "en_def": "so loud that you cannot hear anything else",
    "sentence": "A: Why were all the workers at the factory given new safety equipment during the inspection last Tuesday? B: The noise from the new cutting machines is almost {{BLANK}}, so the safety officer decided that everyone on the production line must wear ear protection during every shift.",
    "cn": "A：上週二檢查時，工廠所有工人為什麼都拿到新的安全裝備？ B：新切割機的噪音幾乎是【震耳欲聾】，所以安全主管決定生產線上的每個人每一班都必須戴上護耳裝備。"
  },
  {
    "word": "faint",
    "pos": "adj.",
    "cn_def": "微弱的；模糊的",
    "en_def": "not strong or clear; hard to hear",
    "sentence": "A: Are you sure the smoke detector in the storage room is working, because I didn't hear anything during the test? B: The battery is very low, so it only made a {{BLANK}} beep when I pressed the button, and I have already ordered new batteries from the supplier.",
    "cn": "A：你確定儲藏室的煙霧偵測器能正常運作嗎？測試時我什麼都沒聽到。 B：電池電量很低，所以我按下按鈕時它只發出【微弱的】嗶聲，我已經向供應商訂購新電池了。"
  },
  {
    "word": "continuous",
    "pos": "adj.",
    "cn_def": "持續不斷的",
    "en_def": "going on without stopping",
    "sentence": "A: How are the employees on the second floor feeling about the renovation work in the building next door? B: Many of them are tired and stressed because of the {{BLANK}} drilling from eight in the morning until five in the afternoon, so we are letting some of them work from home.",
    "cn": "A：二樓的員工對隔壁大樓的整修工程有什麼感受？ B：很多人因為從早上八點到下午五點【持續不斷的】鑽孔聲而感到疲累又有壓力，所以我們讓其中一些人在家工作。"
  },
  {
    "word": "sudden",
    "pos": "adj.",
    "cn_def": "突然的",
    "en_def": "happening quickly and without warning",
    "sentence": "A: Why did the speaker stop in the middle of his presentation at the sales conference yesterday afternoon? B: There was a {{BLANK}} noise from the back of the hall when a waiter dropped a tray of glasses, and everyone turned around, so he waited a moment before continuing his talk.",
    "cn": "A：昨天下午的業務大會上，講者為什麼在簡報到一半時停下來？ B：一位服務生把一托盤的玻璃杯摔落，大廳後方傳來【突然的】聲響，大家都轉頭去看，所以他等了一會兒才繼續演講。"
  },
  {
    "word": "background",
    "pos": "n.",
    "cn_def": "背景",
    "en_def": "the sounds or things behind the main thing you notice",
    "sentence": "A: Why does the recording of yesterday's online meeting sound so unclear when I play it back on my laptop? B: The sales manager joined the call from a busy train station, so there was a lot of {{BLANK}} noise, and it was hard to hear what the clients were saying.",
    "cn": "A：我在筆電上重播昨天線上會議的錄音時，為什麼聽起來這麼不清楚？ B：業務經理是在擁擠的火車站加入會議的，所以有很多【背景】噪音，很難聽清楚客戶在說什麼。"
  },
  {
    "word": "static",
    "pos": "n.",
    "cn_def": "靜電干擾聲；雜訊",
    "en_def": "crackling noise on a radio or phone",
    "sentence": "A: Why didn't the security guards answer when I called them on the radio during the power outage last night? B: Their old radios were picking up a lot of {{BLANK}}, so they could only hear crackling sounds, and the company has now ordered new equipment for the security team.",
    "cn": "A：昨晚停電時我用無線電呼叫警衛，他們為什麼都沒回應？ B：他們的舊無線電收到很多【雜訊】，只聽得到劈啪聲，公司現在已經替保全團隊訂購新設備了。"
  },
  {
    "word": "vibrate",
    "pos": "v.",
    "cn_def": "震動",
    "en_def": "to shake quickly with small movements",
    "sentence": "A: How will I know that a customer is calling during the board meeting if I have to keep my phone on silent? B: You can set your phone to {{BLANK}} instead, so you will feel it move in your pocket without making noise, and you can step outside to answer the call.",
    "cn": "A：如果董事會開會時我必須把手機設成靜音，我要怎麼知道有客戶打來？ B：你可以改把手機設成【震動】，這樣手機在口袋裡動的時候你就感覺得到，又不會發出聲音，你可以走到外面接電話。"
  },
  {
    "word": "complain",
    "pos": "v.",
    "cn_def": "抱怨；投訴",
    "en_def": "to say that you are unhappy about something",
    "sentence": "A: What should I do if the guests in the room next to mine keep playing loud music late at night during my stay? B: You should call the front desk and {{BLANK}} to the night manager, who can ask them to turn it down or move you to a quieter room on another floor.",
    "cn": "A：住宿期間如果隔壁房的客人深夜一直大聲放音樂，我該怎麼辦？ B：你應該打電話到櫃台向夜班經理【投訴】，他可以請他們把音樂關小，或幫你換到其他樓層比較安靜的房間。"
  },
  {
    "word": "peaceful",
    "pos": "adj.",
    "cn_def": "寧靜的；平靜的",
    "en_def": "calm and quiet",
    "sentence": "A: Why did the company choose a small hotel in the countryside for this year's management training retreat? B: The managers wanted a {{BLANK}} place far away from the city, where they could relax, think clearly about next year's plans, and enjoy walks in the forest after the workshops.",
    "cn": "A：公司今年的主管培訓營為什麼選在鄉下的一間小旅館？ B：主管們想要一個遠離城市的【寧靜】地方，可以放鬆、清楚思考明年的計畫，並在研習結束後到森林裡散步。"
  },
  {
    "word": "thunder",
    "pos": "n.",
    "cn_def": "雷；雷聲",
    "en_def": "the loud noise that follows lightning in a storm",
    "sentence": "A: Why did the outdoor product launch at the park end so early yesterday, when it was planned to last until evening? B: We heard loud {{BLANK}} and saw dark clouds coming toward us, so the organizers decided to move all the guests and equipment inside the hotel before the storm arrived.",
    "cn": "A：昨天在公園的戶外產品發表會原本預計持續到傍晚，為什麼這麼早就結束了？ B：我們聽到很大的【雷聲】，又看到烏雲朝我們飄來，所以主辦單位決定在暴風雨來臨前把所有賓客和設備移到飯店裡。"
  },
  {
    "word": "traffic",
    "pos": "n.",
    "cn_def": "交通；車流",
    "en_def": "the cars, buses, and other vehicles on a road",
    "sentence": "A: Why do you always leave home so early, even though your office is only ten kilometers from your apartment? B: The {{BLANK}} on the main road becomes terrible after seven thirty, and the noise of all the horns and buses makes my commute really stressful, so I prefer to leave before rush hour.",
    "cn": "A：你的辦公室離公寓只有十公里，為什麼總是這麼早出門？ B：七點半以後主要道路上的【車流】會變得很可怕，所有喇叭聲和公車的噪音讓我的通勤壓力很大，所以我寧願在尖峰時段前出門。"
  },
  {
    "word": "construction",
    "pos": "n.",
    "cn_def": "建設；施工；建築工程",
    "en_def": "the work of building something",
    "sentence": "A: Why is the hotel offering guests a discount on rooms that face the east side of the building this month? B: There is a large {{BLANK}} project across the street, and the cranes and trucks make noise all day, so the manager wants to keep guests happy.",
    "cn": "A：這間飯店這個月為什麼對面向大樓東側的房間提供折扣？ B：對街有一個大型【建築工程】，起重機和卡車整天發出噪音，所以經理想讓住客保持滿意。"
  },
  {
    "word": "noisy",
    "pos": "adj.",
    "cn_def": "吵雜的；喧鬧的",
    "en_def": "making a lot of noise",
    "sentence": "A: Where would you like to take our clients for dinner after the contract signing on Friday evening? B: Let's avoid the popular restaurant downtown because it is always crowded and {{BLANK}}, and choose a place with private rooms, so we can talk about the project comfortably.",
    "cn": "A：週五晚上簽約後，你想帶客戶去哪裡吃晚餐？ B：我們避開市中心那家熱門餐廳吧，因為那裡總是人多又【吵雜】，選一家有包廂的地方，這樣我們才能舒服地討論這個案子。"
  },
  {
    "word": "hiss",
    "pos": "v.",
    "cn_def": "發出嘶嘶聲",
    "en_def": "to make a long 's' sound like steam or a snake",
    "sentence": "A: Why did the coffee machine in the staff room stop working right in the middle of the morning break today? B: It began to {{BLANK}} and release steam from the side, so the office manager turned it off and called the repair company, which will send a technician tomorrow.",
    "cn": "A：員工休息室的咖啡機為什麼在今天早上休息時間到一半時停止運作？ B：它開始【發出嘶嘶聲】並從側面冒出蒸氣，所以辦公室經理把它關掉並打電話給維修公司，對方明天會派技師過來。"
  },
  {
    "word": "slam",
    "pos": "v.",
    "cn_def": "砰地關上；猛力關上",
    "en_def": "to shut something hard and loudly",
    "sentence": "A: Why did the receptionist put a soft rubber stopper on the meeting room door this afternoon? B: When the windows are open, the wind makes the door {{BLANK}} shut very loudly, and it frightened several visitors who were waiting in the lobby for their interviews.",
    "cn": "A：接待員今天下午為什麼在會議室門上裝了一個軟橡膠門擋？ B：窗戶打開時，風會讓門【砰地關上】，聲音非常大，嚇到了好幾位在大廳等候面試的訪客。"
  },
  {
    "word": "murmur",
    "pos": "n.",
    "cn_def": "低語聲；喃喃聲",
    "en_def": "a soft, low sound of people talking",
    "sentence": "A: How did the employees react when the CEO announced the merger with our biggest competitor at the meeting? B: Nobody said anything directly, but a low {{BLANK}} spread across the room as people turned to their neighbors, and many of them looked worried about their jobs.",
    "cn": "A：執行長在會議上宣布和我們最大的競爭對手合併時，員工有什麼反應？ B：沒有人直接說什麼，但大家轉向身旁的人時，一陣低沉的【低語聲】在會議室裡傳開，很多人看起來很擔心自己的工作。"
  }
];

const MCQS = [
  {
    "q": "The new headphones block outside noise very well. Customers say the _____ quality is clear even at low levels.",
    "options": [
      "sound",
      "crash",
      "alarm",
      "traffic"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Several guests complained about the music at the hotel bar. The manager asked the band to lower the _____ after ten o'clock.",
    "options": [
      "echo",
      "thunder",
      "volume",
      "construction"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Please speak in a _____ and clear voice during the presentation. The people in the back row cannot hear you well.",
    "options": [
      "faint",
      "loud",
      "silent",
      "peaceful"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The library on the fourth floor is the best place to study. It stays _____ even during the busy exam period.",
    "options": [
      "noisy",
      "deafening",
      "irritating",
      "quiet"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "All mobile phones must be switched to _____ mode before the meeting begins. The director does not want any interruptions.",
    "options": [
      "annoying",
      "continuous",
      "silent",
      "sudden"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The tour guide asked visitors to _____ inside the old church. Loud voices are not allowed while a service is taking place.",
    "options": [
      "whisper",
      "shout",
      "scream",
      "slam"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The coach had to _____ instructions across the noisy field. The players could not hear him over the cheering crowd.",
    "options": [
      "whisper",
      "vibrate",
      "complain",
      "shout"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The children began to _____ with excitement when the roller coaster started to drop. Their parents laughed as they watched from below.",
    "options": [
      "whisper",
      "scream",
      "hiss",
      "disturb"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Everyone in the office jumped when they heard a loud _____ outside. A delivery truck had backed into a metal gate.",
    "options": [
      "bang",
      "murmur",
      "volume",
      "background"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "A tray of glasses fell to the floor with a terrible _____. The waiter quickly apologized and cleaned up the broken pieces.",
    "options": [
      "hum",
      "static",
      "crash",
      "volume"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The old refrigerator in the break room makes a constant _____. Facilities will replace it with a newer, quieter model next week.",
    "options": [
      "bang",
      "buzz",
      "crash",
      "construction"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The empty warehouse has high ceilings and concrete walls. Every word we spoke created a loud _____ that bounced around the room.",
    "options": [
      "alarm",
      "traffic",
      "construction",
      "echo"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The windows in the old building _____ every time a heavy truck drives past. The landlord promised to install new frames this year.",
    "options": [
      "whisper",
      "complain",
      "rattle",
      "scream"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Passengers waiting at the gate could hear the _____ of the jet engines. The plane was preparing to take off for Seoul.",
    "options": [
      "roar",
      "murmur",
      "static",
      "volume"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Please _____ the bell at the front desk if nobody is there. A staff member will come out to help you right away.",
    "options": [
      "slam",
      "hiss",
      "vibrate",
      "ring"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The fire _____ went off at noon, so all employees left the building. It turned out to be a planned safety drill.",
    "options": [
      "echo",
      "alarm",
      "traffic",
      "thunder"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Please do not _____ the manager during her interview with the reporter. She will answer your questions after three o'clock.",
    "options": [
      "disturb",
      "whisper",
      "rattle",
      "hiss"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Many employees find the printer's beeping sound very _____. They have asked the office manager to replace the machine soon.",
    "options": [
      "peaceful",
      "silent",
      "annoying",
      "sudden"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Workers on the factory floor must wear ear protection at all times. The noise from the machines is almost _____.",
    "options": [
      "peaceful",
      "deafening",
      "silent",
      "quiet"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The road repairs caused _____ noise from early morning until late evening. Residents asked the city to limit the working hours.",
    "options": [
      "silent",
      "peaceful",
      "faint",
      "continuous"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The _____ drop in temperature surprised everyone at the outdoor event. Many guests went inside to get warm coats.",
    "options": [
      "quiet",
      "loud",
      "sudden",
      "noisy"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The recording of the interview was hard to understand. There was too much _____ noise from the busy café.",
    "options": [
      "background",
      "alarm",
      "thunder",
      "echo"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Please set your phone to _____ during the training session. You can check your messages during the coffee break.",
    "options": [
      "scream",
      "shout",
      "slam",
      "vibrate"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Several tenants called the building manager to _____ about the noise. The neighbors upstairs had been moving furniture all night.",
    "options": [
      "whisper",
      "complain",
      "hiss",
      "rattle"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The new office park is surrounded by trees and gardens. Employees enjoy its _____ atmosphere during their lunch breaks.",
    "options": [
      "peaceful",
      "deafening",
      "noisy",
      "irritating"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The outdoor concert was stopped when the crowd heard _____ in the distance. The organizers moved everyone inside before the storm.",
    "options": [
      "volume",
      "background",
      "thunder",
      "alarm"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "I will take the train to the airport tomorrow morning. The _____ on the highway is always heavy during rush hour.",
    "options": [
      "volume",
      "traffic",
      "echo",
      "crash"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The city will begin _____ of a new subway station next month. Nearby shops are worried about noise and dust.",
    "options": [
      "traffic",
      "background",
      "volume",
      "construction"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "We moved our meeting to a private room because the lobby was too _____. It was impossible to hear each other speak.",
    "options": [
      "peaceful",
      "quiet",
      "noisy",
      "silent"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "Please do not _____ the door when you leave the meeting room. The loud sound distracts people working nearby.",
    "options": [
      "slam",
      "whisper",
      "vibrate",
      "complain"
    ],
    "answer": 0,
    "vocabIndex": 35
  }
];

const LOOKUP = {
  "sound": {
    "pos": "n.",
    "en_def": "something that you hear",
    "cn_def": "聲音；音響"
  },
  "volume": {
    "pos": "n.",
    "en_def": "how loud a sound is",
    "cn_def": "音量"
  },
  "loud": {
    "pos": "adj.",
    "en_def": "making a lot of noise",
    "cn_def": "大聲的；響亮的"
  },
  "quiet": {
    "pos": "adj.",
    "en_def": "making little or no noise",
    "cn_def": "安靜的"
  },
  "silent": {
    "pos": "adj.",
    "en_def": "with no sound at all",
    "cn_def": "無聲的；靜音的；沉默的"
  },
  "whisper": {
    "pos": "v.",
    "en_def": "to speak very softly",
    "cn_def": "低聲說；耳語"
  },
  "shout": {
    "pos": "v.",
    "en_def": "to say something very loudly",
    "cn_def": "大喊；喊叫"
  },
  "scream": {
    "pos": "v.",
    "en_def": "to make a long, high, loud cry",
    "cn_def": "尖叫"
  },
  "bang": {
    "pos": "n.",
    "en_def": "a sudden, very loud noise",
    "cn_def": "砰的一聲；巨響"
  },
  "crash": {
    "pos": "n.",
    "en_def": "a sudden loud noise of something falling or breaking",
    "cn_def": "碎裂聲；嘩啦聲；撞擊聲"
  },
  "buzz": {
    "pos": "n.",
    "en_def": "a low, steady sound like a bee makes",
    "cn_def": "嗡嗡聲"
  },
  "hum": {
    "pos": "n.",
    "en_def": "a low, continuous sound",
    "cn_def": "低沉持續的嗡嗡聲"
  },
  "echo": {
    "pos": "n.",
    "en_def": "a sound that comes back after hitting a surface",
    "cn_def": "回音；回聲"
  },
  "rattle": {
    "pos": "v.",
    "en_def": "to make short knocking sounds by shaking",
    "cn_def": "發出咯咯聲；嘎嘎作響"
  },
  "clatter": {
    "pos": "n.",
    "en_def": "a series of loud sounds of hard objects hitting each other",
    "cn_def": "哐啷聲；碰撞聲"
  },
  "roar": {
    "pos": "n.",
    "en_def": "a very loud, deep sound",
    "cn_def": "轟鳴聲；咆哮聲"
  },
  "ring": {
    "pos": "v.",
    "en_def": "to make a bell or phone make a sound",
    "cn_def": "按（鈴）；（鈴、電話）響"
  },
  "alarm": {
    "pos": "n.",
    "en_def": "a loud warning sound or the device that makes it",
    "cn_def": "警報；警鈴"
  },
  "disturb": {
    "pos": "v.",
    "en_def": "to interrupt or bother someone",
    "cn_def": "打擾；干擾"
  },
  "annoying": {
    "pos": "adj.",
    "en_def": "making you feel a little angry",
    "cn_def": "惱人的；令人厭煩的"
  },
  "irritating": {
    "pos": "adj.",
    "en_def": "making you feel annoyed or impatient",
    "cn_def": "令人惱火的；煩人的"
  },
  "deafening": {
    "pos": "adj.",
    "en_def": "so loud that you cannot hear anything else",
    "cn_def": "震耳欲聾的"
  },
  "faint": {
    "pos": "adj.",
    "en_def": "not strong or clear; hard to hear",
    "cn_def": "微弱的；模糊的"
  },
  "continuous": {
    "pos": "adj.",
    "en_def": "going on without stopping",
    "cn_def": "持續不斷的"
  },
  "sudden": {
    "pos": "adj.",
    "en_def": "happening quickly and without warning",
    "cn_def": "突然的"
  },
  "background": {
    "pos": "n.",
    "en_def": "the sounds or things behind the main thing you notice",
    "cn_def": "背景"
  },
  "static": {
    "pos": "n.",
    "en_def": "crackling noise on a radio or phone",
    "cn_def": "靜電干擾聲；雜訊"
  },
  "vibrate": {
    "pos": "v.",
    "en_def": "to shake quickly with small movements",
    "cn_def": "震動"
  },
  "complain": {
    "pos": "v.",
    "en_def": "to say that you are unhappy about something",
    "cn_def": "抱怨；投訴"
  },
  "peaceful": {
    "pos": "adj.",
    "en_def": "calm and quiet",
    "cn_def": "寧靜的；平靜的"
  },
  "thunder": {
    "pos": "n.",
    "en_def": "the loud noise that follows lightning in a storm",
    "cn_def": "雷；雷聲"
  },
  "traffic": {
    "pos": "n.",
    "en_def": "the cars, buses, and other vehicles on a road",
    "cn_def": "交通；車流"
  },
  "construction": {
    "pos": "n.",
    "en_def": "the work of building something",
    "cn_def": "建設；施工；建築工程"
  },
  "noisy": {
    "pos": "adj.",
    "en_def": "making a lot of noise",
    "cn_def": "吵雜的；喧鬧的"
  },
  "hiss": {
    "pos": "v.",
    "en_def": "to make a long 's' sound like steam or a snake",
    "cn_def": "發出嘶嘶聲"
  },
  "slam": {
    "pos": "v.",
    "en_def": "to shut something hard and loudly",
    "cn_def": "砰地關上；猛力關上"
  },
  "murmur": {
    "pos": "n.",
    "en_def": "a soft, low sound of people talking",
    "cn_def": "低語聲；喃喃聲"
  }
};

const EXTRA_GLOSSES = {};
