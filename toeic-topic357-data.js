// Topic 357 Quiz Data: Sleep 睡眠
// Source word list: https://www.examword.com/group-topic/sleep — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T357 - Sleep 睡眠",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "nap",
    "pos": "n.",
    "cn_def": "小睡；午睡",
    "en_def": "a short sleep during the day",
    "sentence": "A: You look much more awake than you did this morning, so what happened during the lunch break while the rest of us were eating at the noodle shop? B: I took a short {{BLANK}} on the sofa in the staff lounge for about twenty minutes, and now I feel ready to finish the sales report before the meeting.",
    "cn": "A：你看起來比今天早上清醒多了，我們其他人在麵店吃飯的午休時間，你做了什麼？ B：我在員工休息室的沙發上【小睡】了大約二十分鐘，現在我覺得可以在開會前完成銷售報告了。"
  },
  {
    "word": "snooze",
    "pos": "v.",
    "cn_def": "打盹；小睡",
    "en_def": "to sleep lightly for a short time",
    "sentence": "A: Why did you arrive at the office forty minutes late today when the client presentation was scheduled to start at nine o'clock sharp? B: I turned off my alarm and decided to {{BLANK}} for just ten more minutes, but I fell into a deep sleep and missed my usual train to the city.",
    "cn": "A：客戶簡報預定九點整開始，你今天為什麼晚了四十分鐘才到辦公室？ B：我關掉鬧鐘，決定再【打盹】十分鐘就好，結果卻睡得很沉，錯過了平常進城的那班火車。"
  },
  {
    "word": "nod off",
    "pos": "v.phr.",
    "cn_def": "打瞌睡",
    "en_def": "to fall asleep without meaning to",
    "sentence": "A: How was the training session on the new accounting software that the head office organized for all the new employees yesterday afternoon? B: The trainer spoke very slowly for three hours in a warm room after a heavy lunch, so several people began to {{BLANK}} in the back row before the coffee break.",
    "cn": "A：總公司昨天下午為所有新進員工舉辦的新會計軟體訓練課程怎麼樣？ B：講師在吃過豐盛午餐後的溫暖房間裡慢慢講了三個小時，所以在休息喝咖啡之前，後排好幾個人就開始【打瞌睡】了。"
  },
  {
    "word": "asleep",
    "pos": "adj.",
    "cn_def": "睡著的",
    "en_def": "sleeping",
    "sentence": "A: Did you manage to talk to your roommate about sharing the electricity bill when you got home from the late shift at the hotel last night? B: No, by the time I finally got home it was almost midnight, and he was already fast {{BLANK}} on the couch with the television still on, so I decided not to wake him.",
    "cn": "A：你昨晚從飯店下晚班回家後，有沒有跟室友談分攤電費的事？ B：沒有，我終於到家時已經快半夜了，他早就在沙發上【睡著】了，電視還開著，所以我決定不叫醒他。"
  },
  {
    "word": "nightmare",
    "pos": "n.",
    "cn_def": "惡夢；夢魘般的經歷",
    "en_def": "a frightening dream; also a very difficult situation",
    "sentence": "A: Why do you look so tired this morning, and is something worrying you about the big product launch that is happening at the convention center next week? B: I had a terrible {{BLANK}} that all the projectors broke during my speech in front of the investors, and I woke up at three and couldn't go back to sleep.",
    "cn": "A：你今天早上為什麼看起來這麼累？是不是在擔心下週在會議中心舉行的大型產品發表會？ B：我做了一個可怕的【惡夢】，夢到我在投資人面前演講時所有投影機都壞了，我三點就醒來，再也睡不著。"
  },
  {
    "word": "lethargic",
    "pos": "adj.",
    "cn_def": "無精打采的；昏昏欲睡的",
    "en_def": "tired and without energy",
    "sentence": "A: Have you noticed that the members of the night team seem slow and quiet at the beginning of every shift, even though they are usually cheerful workers? B: Yes, many of them feel {{BLANK}} because they cannot sleep well during the day, so the supervisor is planning to change the schedule and provide healthier snacks in the break room.",
    "cn": "A：你有沒有注意到，夜班的成員雖然平常都是開朗的員工，但每次輪班開始時都顯得又慢又安靜？ B：有，他們很多人因為白天睡不好而感到【無精打采】，所以主管打算調整班表，並在休息室提供更健康的點心。"
  },
  {
    "word": "doze off",
    "pos": "v.phr.",
    "cn_def": "打瞌睡；打盹",
    "en_def": "to fall into a light sleep, often by accident",
    "sentence": "A: Why didn't you answer my text messages about the change of meeting room while you were on the long bus ride back from the factory yesterday? B: I was so tired after the inspection that I started to {{BLANK}} soon after the bus left the station, and I only woke up when the driver announced the last stop.",
    "cn": "A：你昨天從工廠搭長途巴士回來時，為什麼沒回我關於更換會議室的簡訊？ B：檢查完後我累壞了，巴士離站沒多久我就開始【打瞌睡】，直到司機廣播最後一站才醒來。"
  },
  {
    "word": "sleep through",
    "pos": "v.phr.",
    "cn_def": "一覺睡過（某事）而沒被吵醒",
    "en_def": "to keep sleeping and not be woken by a noise or event",
    "sentence": "A: Did the fire alarm test in our apartment building wake you up at six o'clock this morning, or were you lucky enough to keep resting? B: I was so tired after working overtime on the budget that I managed to {{BLANK}} the whole thing, and my neighbor had to tell me about it in the elevator later.",
    "cn": "A：今天早上六點我們公寓大樓的火災警報測試有吵醒你嗎？還是你很幸運地繼續睡？ B：我為了預算加班累壞了，結果整個過程都【沒被吵醒】，後來還是鄰居在電梯裡告訴我的。"
  },
  {
    "word": "drop off",
    "pos": "v.phr.",
    "cn_def": "入睡；睡著",
    "en_def": "to fall asleep, usually slowly",
    "sentence": "A: How is your new baby sleeping these days, and are you getting enough rest to handle the busy schedule at the accounting firm this month? B: It usually takes me a long time to rock her, but once she finally starts to {{BLANK}} around ten o'clock, the whole family can rest for at least five hours.",
    "cn": "A：你的新生寶寶最近睡得怎麼樣？你有足夠的休息來應付這個月會計事務所忙碌的行程嗎？ B：我通常要搖她很久，但只要她大約十點終於開始【入睡】，全家至少可以休息五個小時。"
  },
  {
    "word": "sleepover",
    "pos": "n.",
    "cn_def": "過夜派對；在朋友家過夜",
    "en_def": "a party where children stay at a friend's home for the night",
    "sentence": "A: Why are you leaving the office so early on a Friday afternoon when the marketing team is still working on the new advertising plan? B: My daughter is having a {{BLANK}} with five of her classmates tonight, so I promised to buy pizza, prepare sleeping bags, and get the living room ready before they arrive.",
    "cn": "A：行銷團隊還在忙新的廣告計畫，你為什麼星期五下午這麼早就離開辦公室？ B：我女兒今晚要和五個同學辦【過夜派對】，所以我答應在她們到之前買披薩、準備睡袋，並把客廳整理好。"
  },
  {
    "word": "sleep in",
    "pos": "v.phr.",
    "cn_def": "睡懶覺；晚起",
    "en_def": "to sleep later than usual in the morning",
    "sentence": "A: Do you have any special plans for the long holiday weekend after we finish the quarterly report on Thursday afternoon? B: On Saturday I plan to {{BLANK}} until ten o'clock because I have been getting up at six every day for work, and then I will meet my sister for a late breakfast downtown.",
    "cn": "A：我們星期四下午完成季報之後，連假週末你有什麼特別的計畫嗎？ B：星期六我打算【睡懶覺】睡到十點，因為我每天都六點起床上班，然後我會和妹妹在市中心吃晚一點的早餐。"
  },
  {
    "word": "stay up",
    "pos": "v.phr.",
    "cn_def": "熬夜；不睡覺",
    "en_def": "to not go to bed until late",
    "sentence": "A: Why do you look so pale, and did you finish preparing the slides for the client presentation that is starting in about an hour? B: I had to {{BLANK}} until two in the morning to finish the charts and check every number, but the slides are ready and I printed copies for everyone.",
    "cn": "A：你的臉色怎麼這麼蒼白？大約一小時後開始的客戶簡報投影片準備好了嗎？ B：我得【熬夜】到凌晨兩點才完成圖表並核對每個數字，不過投影片已經好了，我也幫大家印好了。"
  },
  {
    "word": "lie in",
    "pos": "v.phr.",
    "cn_def": "賴床；睡懶覺",
    "en_def": "to stay in bed later than usual in the morning",
    "sentence": "A: The hotel is offering a special late checkout at two o'clock for guests who booked the weekend package, so what do you plan to do tomorrow morning? B: Since the conference is finally over, I want to {{BLANK}} and enjoy the quiet room, and then order breakfast from room service before I pack my suitcase.",
    "cn": "A：飯店為預訂週末套裝行程的房客提供兩點延後退房的優惠，你明天早上打算做什麼？ B：既然會議終於結束了，我想【賴床】享受安靜的房間，然後在整理行李前叫客房服務送早餐。"
  },
  {
    "word": "lie down",
    "pos": "v.phr.",
    "cn_def": "躺下",
    "en_def": "to put your body flat on a bed or other surface to rest",
    "sentence": "A: You look very pale and you have been holding your head for the last hour, so do you need anything before the afternoon meeting begins? B: I have a terrible headache, so I think I will {{BLANK}} on the sofa in the first-aid room for half an hour and ask Peter to lead the meeting.",
    "cn": "A：你臉色很蒼白，而且過去一小時一直扶著頭，下午的會議開始前你需要什麼嗎？ B：我頭痛得很厲害，所以我想在急救室的沙發上【躺下】半小時，並請彼得主持會議。"
  },
  {
    "word": "stay over",
    "pos": "v.phr.",
    "cn_def": "過夜；留宿",
    "en_def": "to spend the night at someone else's home",
    "sentence": "A: The last train back to the suburbs leaves at eleven thirty, so how are you going to get home after the company dinner tonight? B: My cousin lives just ten minutes from the restaurant, so she invited me to {{BLANK}} at her apartment, and I will take the morning bus straight to the office tomorrow.",
    "cn": "A：回郊區的末班火車十一點半開，今晚公司聚餐後你要怎麼回家？ B：我表姊住在離餐廳只有十分鐘的地方，所以她邀我到她公寓【過夜】，明天早上我再搭公車直接去公司。"
  },
  {
    "word": "night owl",
    "pos": "n.phr.",
    "cn_def": "夜貓子",
    "en_def": "a person who likes to stay awake and active late at night",
    "sentence": "A: Why does Kevin always send his emails after midnight, and does the team leader mind that he starts work later than everyone else? B: He is a real {{BLANK}} who does his best work late in the evening, and the manager doesn't mind because he always finishes his designs on time.",
    "cn": "A：凱文為什麼總是在半夜之後才寄電子郵件？組長會介意他比其他人晚開始上班嗎？ B：他是個十足的【夜貓子】，晚上工作效率最好，而經理不介意，因為他總是準時完成設計。"
  },
  {
    "word": "scroll",
    "pos": "v.",
    "cn_def": "滑動（螢幕）；捲動",
    "en_def": "to move text or pictures on a screen up or down to see more",
    "sentence": "A: Why do you find it so hard to fall asleep at night, even though you feel very tired when you leave the office after work? B: I usually lie in bed and {{BLANK}} through social media on my phone for an hour, and the bright screen keeps my brain awake long after I turn off the lights.",
    "cn": "A：你下班離開辦公室時明明覺得很累，為什麼晚上還是很難入睡？ B：我通常躺在床上用手機【滑】社群媒體一個小時，明亮的螢幕讓我的大腦在關燈後很久都還很清醒。"
  },
  {
    "word": "feedback",
    "pos": "n.",
    "cn_def": "意見回饋",
    "en_def": "comments about how good or useful something is",
    "sentence": "A: How did the hotel decide to replace all the pillows and mattresses in the guest rooms on the third and fourth floors last month? B: The manager read the {{BLANK}} from many guests who complained about poor sleep and sore backs, so she ordered new, softer beds to improve customer satisfaction.",
    "cn": "A：飯店上個月是怎麼決定更換三樓和四樓客房所有枕頭和床墊的？ B：經理看了許多房客抱怨睡不好、背痛的【意見回饋】，所以她訂購了新的、更柔軟的床來提升顧客滿意度。"
  },
  {
    "word": "freelance",
    "pos": "adj.",
    "cn_def": "自由接案的；自由職業的",
    "en_def": "working for several companies, not employed by just one",
    "sentence": "A: Why did your brother leave his full-time job at the design company, and how does he manage his sleep schedule now? B: He became a {{BLANK}} illustrator last spring, so he can choose his own working hours, sleep eight hours every night, and take projects from several clients in different countries.",
    "cn": "A：你哥哥為什麼辭掉設計公司的全職工作？他現在怎麼安排睡眠時間？ B：他去年春天成為【自由接案的】插畫家，所以可以自己選擇工作時間、每晚睡八小時，並接來自不同國家幾位客戶的案子。"
  },
  {
    "word": "exhausted",
    "pos": "adj.",
    "cn_def": "筋疲力盡的",
    "en_def": "extremely tired",
    "sentence": "A: How did the moving day go when your department changed offices to the new building across the street on Saturday? B: We carried boxes, desks, and computers up and down the stairs for eight hours because the elevator was broken, so everyone felt completely {{BLANK}} and went straight to bed that night.",
    "cn": "A：星期六你們部門搬到對街新大樓的搬遷日進行得怎麼樣？ B：因為電梯壞了，我們搬著箱子、桌子和電腦上下樓梯整整八小時，所以大家都覺得完全【筋疲力盡】，那天晚上直接上床睡覺。"
  },
  {
    "word": "knackered",
    "pos": "adj.",
    "cn_def": "累壞的；精疲力竭的",
    "en_def": "very tired (British, informal)",
    "sentence": "A: Do you want to join us for karaoke after we finish packing the orders for the online sale this evening? B: Thanks for inviting me, but I'm absolutely {{BLANK}} after working twelve hours in the warehouse today, so I'm just going to take a hot shower and go to bed early.",
    "cn": "A：今晚我們包完網路特賣的訂單後，你要不要跟我們去唱卡拉OK？ B：謝謝你邀請我，但我今天在倉庫工作了十二小時，真的【累壞了】，所以我只想洗個熱水澡早點睡。"
  },
  {
    "word": "crash",
    "pos": "v.",
    "cn_def": "倒頭就睡；借住一晚",
    "en_def": "(informal) to fall asleep quickly because you are very tired; to sleep somewhere for the night",
    "sentence": "A: What did you do after you finally got back from the twelve-hour flight from New York for the trade show last week? B: I was so tired that I didn't even unpack; I just wanted to {{BLANK}} on my bed for the whole afternoon, and I woke up feeling much better in the evening.",
    "cn": "A：上週你參加完商展，從紐約搭十二小時的飛機終於回來後做了什麼？ B：我累到連行李都沒拆，只想在床上【倒頭大睡】一整個下午，傍晚醒來時感覺好多了。"
  },
  {
    "word": "make matters worse",
    "pos": "v.phr.",
    "cn_def": "使情況更糟",
    "en_def": "to make a bad situation even worse",
    "sentence": "A: Why was the team so tired and unhappy at the training retreat in the mountains over the weekend? B: The hotel beds were hard and noisy guests kept everyone awake late into the night, and to {{BLANK}}, the heating broke on the second night, so nobody could sleep properly.",
    "cn": "A：週末在山上的培訓營，團隊為什麼那麼疲累又不開心？ B：飯店的床很硬，吵鬧的房客讓大家到深夜都睡不著，而【更糟的是】，第二晚暖氣又壞了，所以沒有人能好好睡覺。"
  }
];

const MCQS = [
  {
    "q": "After working the night shift, the security guard took a short _____ in the break room. He felt much more alert afterward.",
    "options": [
      "nap",
      "nightmare",
      "sleepover",
      "feedback"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Linda pressed the _____ button on her alarm clock three times this morning. As a result, she missed the 7:30 shuttle bus.",
    "options": [
      "nap",
      "nightmare",
      "snooze",
      "feedback"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The lecture on tax law was long and boring. Several interns began to _____ before the speaker reached the final slide.",
    "options": [
      "stay up",
      "nod off",
      "stay over",
      "lie in"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The baby finally fell _____ in the back seat of the car. Her parents drove quietly to the hotel so she would not wake up.",
    "options": [
      "lethargic",
      "freelance",
      "knackered",
      "asleep"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Planning the conference turned into a complete _____ when the venue canceled. The organizers had only two days to find a new hall.",
    "options": [
      "feedback",
      "sleepover",
      "nightmare",
      "nap"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Many employees feel _____ in the afternoon after a large lunch. The company now offers short walks to help them regain energy.",
    "options": [
      "lethargic",
      "freelance",
      "asleep",
      "punctual"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Please do not let the driver _____ during the long night trip. Stop every two hours so he can rest and drink coffee.",
    "options": [
      "lie in",
      "stay over",
      "make matters worse",
      "doze off"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The new hotel rooms have thick windows. Guests can easily _____ the noise from the busy airport nearby.",
    "options": [
      "stay over",
      "sleep through",
      "lie down",
      "drop off"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The flight attendant dimmed the cabin lights after dinner. Within minutes, most of the passengers started to _____ to sleep.",
    "options": [
      "drop off",
      "stay up",
      "sleep in",
      "stay over"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Ten children attended the museum's overnight _____ in the dinosaur hall. They brought sleeping bags and listened to stories with flashlights.",
    "options": [
      "nightmare",
      "feedback",
      "sleepover",
      "nap"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The office is closed on Monday for the national holiday. Most staff members plan to _____ and enjoy a slow breakfast at home.",
    "options": [
      "stay up",
      "sleep in",
      "stay over",
      "scroll"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The accountants had to _____ until midnight to finish the tax forms. The deadline was nine o'clock the next morning.",
    "options": [
      "sleep in",
      "lie down",
      "nod off",
      "stay up"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "On Sunday mornings, Mark likes to _____ until eleven. He reads the newspaper in bed before getting up for lunch.",
    "options": [
      "stay up",
      "stay over",
      "lie in",
      "nod off"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "If you feel dizzy during the blood test, please _____ on the bed. The nurse will bring you some water and juice.",
    "options": [
      "lie down",
      "stay up",
      "sleep in",
      "stay over"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The storm closed all the mountain roads. The hotel manager invited the stranded tour group to _____ for free until morning.",
    "options": [
      "doze off",
      "scroll",
      "nod off",
      "stay over"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Jenny is a true _____ who writes her best reports after ten at night. Her manager lets her start work at noon.",
    "options": [
      "nightmare",
      "night owl",
      "sleepover",
      "nap"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Customers can _____ down the web page to see more photos of the hotel rooms. Prices are listed at the bottom.",
    "options": [
      "scroll",
      "snooze",
      "crash",
      "doze off"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The mattress company collected _____ from five hundred customers. Most of them said the new pillows improved their sleep.",
    "options": [
      "nightmare",
      "nap",
      "feedback",
      "sleepover"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "After leaving the bank, Tom started working as a _____ translator. He now chooses his own hours and clients.",
    "options": [
      "lethargic",
      "freelance",
      "asleep",
      "exhausted"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The marathon runners were completely _____ when they crossed the finish line. Volunteers gave them water and blankets right away.",
    "options": [
      "freelance",
      "asleep",
      "punctual",
      "exhausted"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "After unloading three trucks in the rain, the warehouse workers were absolutely _____. They all went home early to rest.",
    "options": [
      "freelance",
      "punctual",
      "knackered",
      "curious"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "My flight lands at two in the morning. Can I _____ on your sofa tonight instead of booking a hotel?",
    "options": [
      "crash",
      "scroll",
      "stay up",
      "make matters worse"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The printer broke an hour before the meeting. To _____, the only technician had already gone home for the day.",
    "options": [
      "stay up",
      "lie down",
      "sleep through",
      "make matters worse"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Some tech companies provide quiet rooms where employees can take a _____ after lunch. Studies show this short rest improves focus.",
    "options": [
      "nightmare",
      "nap",
      "feedback",
      "night owl"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The warm train carriage made Kevin _____ on his way home. He missed his station and had to take a taxi back.",
    "options": [
      "doze off",
      "stay over",
      "lie in",
      "scroll"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Fans in Taipei will _____ late tonight to watch the final match live. The game starts at three in the morning.",
    "options": [
      "sleep through",
      "lie down",
      "stay up",
      "drop off"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The nurses felt _____ after working three night shifts in a row. The hospital hired extra staff to reduce their workload.",
    "options": [
      "freelance",
      "exhausted",
      "asleep",
      "punctual"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Please give us your honest _____ about the training program. Your comments will help us improve next year's sessions.",
    "options": [
      "nightmare",
      "nap",
      "sleepover",
      "feedback"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "After the twelve-hour shift, I just want to go home and _____ in bed. I will call you back tomorrow.",
    "options": [
      "stay over",
      "sleep through",
      "crash",
      "make matters worse"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Because the school trip was canceled, the students were allowed to _____ on Friday morning. Classes started at ten instead of eight.",
    "options": [
      "sleep in",
      "stay over",
      "scroll",
      "make matters worse"
    ],
    "answer": 0,
    "vocabIndex": 10
  }
];

const LOOKUP = {
  "nap": {
    "pos": "n.",
    "en_def": "a short sleep during the day",
    "cn_def": "小睡；午睡"
  },
  "snooze": {
    "pos": "v.",
    "en_def": "to sleep lightly for a short time",
    "cn_def": "打盹；小睡"
  },
  "nod off": {
    "pos": "v.phr.",
    "en_def": "to fall asleep without meaning to",
    "cn_def": "打瞌睡"
  },
  "asleep": {
    "pos": "adj.",
    "en_def": "sleeping",
    "cn_def": "睡著的"
  },
  "nightmare": {
    "pos": "n.",
    "en_def": "a frightening dream; also a very difficult situation",
    "cn_def": "惡夢；夢魘般的經歷"
  },
  "lethargic": {
    "pos": "adj.",
    "en_def": "tired and without energy",
    "cn_def": "無精打采的；昏昏欲睡的"
  },
  "doze off": {
    "pos": "v.phr.",
    "en_def": "to fall into a light sleep, often by accident",
    "cn_def": "打瞌睡；打盹"
  },
  "sleep through": {
    "pos": "v.phr.",
    "en_def": "to keep sleeping and not be woken by a noise or event",
    "cn_def": "一覺睡過（某事）而沒被吵醒"
  },
  "drop off": {
    "pos": "v.phr.",
    "en_def": "to fall asleep, usually slowly",
    "cn_def": "入睡；睡著"
  },
  "sleepover": {
    "pos": "n.",
    "en_def": "a party where children stay at a friend's home for the night",
    "cn_def": "過夜派對；在朋友家過夜"
  },
  "sleep in": {
    "pos": "v.phr.",
    "en_def": "to sleep later than usual in the morning",
    "cn_def": "睡懶覺；晚起"
  },
  "stay up": {
    "pos": "v.phr.",
    "en_def": "to not go to bed until late",
    "cn_def": "熬夜；不睡覺"
  },
  "lie in": {
    "pos": "v.phr.",
    "en_def": "to stay in bed later than usual in the morning",
    "cn_def": "賴床；睡懶覺"
  },
  "lie down": {
    "pos": "v.phr.",
    "en_def": "to put your body flat on a bed or other surface to rest",
    "cn_def": "躺下"
  },
  "stay over": {
    "pos": "v.phr.",
    "en_def": "to spend the night at someone else's home",
    "cn_def": "過夜；留宿"
  },
  "night owl": {
    "pos": "n.phr.",
    "en_def": "a person who likes to stay awake and active late at night",
    "cn_def": "夜貓子"
  },
  "scroll": {
    "pos": "v.",
    "en_def": "to move text or pictures on a screen up or down to see more",
    "cn_def": "滑動（螢幕）；捲動"
  },
  "feedback": {
    "pos": "n.",
    "en_def": "comments about how good or useful something is",
    "cn_def": "意見回饋"
  },
  "freelance": {
    "pos": "adj.",
    "en_def": "working for several companies, not employed by just one",
    "cn_def": "自由接案的；自由職業的"
  },
  "exhausted": {
    "pos": "adj.",
    "en_def": "extremely tired",
    "cn_def": "筋疲力盡的"
  },
  "knackered": {
    "pos": "adj.",
    "en_def": "very tired (British, informal)",
    "cn_def": "累壞的；精疲力竭的"
  },
  "crash": {
    "pos": "v.",
    "en_def": "(informal) to fall asleep quickly because you are very tired; to sleep somewhere for the night",
    "cn_def": "倒頭就睡；借住一晚"
  },
  "make matters worse": {
    "pos": "v.phr.",
    "en_def": "to make a bad situation even worse",
    "cn_def": "使情況更糟"
  }
};

const EXTRA_GLOSSES = {};
