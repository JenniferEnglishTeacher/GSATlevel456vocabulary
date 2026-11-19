// Topic 407 Quiz Data: Tired 疲倦
// Source word list: https://www.examword.com/group-topic/tired — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T407 - Tired 疲倦",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "exhausted",
    "pos": "adj.",
    "cn_def": "筋疲力盡的",
    "en_def": "very, very tired",
    "sentence": "A: You look really pale this morning, so did something happen on your business trip to Singapore last week? B: Yes, I attended meetings from eight in the morning until ten at night for five days, so I was completely {{BLANK}} when I finally got home on Sunday.",
    "cn": "A：你今天早上臉色看起來很蒼白，上週去新加坡出差發生了什麼事嗎？ B：是的，我連續五天從早上八點開會到晚上十點，所以星期天終於到家時，我已經完全【筋疲力盡】了。"
  },
  {
    "word": "sleepy",
    "pos": "adj.",
    "cn_def": "想睡的；睏的",
    "en_def": "feeling tired and wanting to sleep",
    "sentence": "A: Why do you always buy a large coffee from the café downstairs right after lunch, even when the weather is hot? B: Because I usually feel {{BLANK}} around two o'clock, and I need to stay alert for the long client calls that start in the afternoon.",
    "cn": "A：為什麼你總是在午餐後馬上去樓下咖啡店買一杯大杯咖啡，即使天氣很熱也一樣？ B：因為我通常在兩點左右會覺得【想睡】，而我需要在下午開始的冗長客戶電話中保持清醒。"
  },
  {
    "word": "weary",
    "pos": "adj.",
    "cn_def": "疲憊的；厭倦的",
    "en_def": "tired, especially after working or traveling for a long time",
    "sentence": "A: How did the sales team react when the manager announced another weekend training session at the head office? B: Most of them looked {{BLANK}} because they had already worked overtime for three weeks, so they asked if the session could be moved to next month instead.",
    "cn": "A：經理宣布又要在總公司舉行週末訓練課程時，業務團隊的反應如何？ B：他們大多數人看起來很【疲憊】，因為他們已經連續加班三週了，所以他們問課程能不能改到下個月。"
  },
  {
    "word": "fatigued",
    "pos": "adj.",
    "cn_def": "疲勞的",
    "en_def": "very tired because of hard work or exercise",
    "sentence": "A: Why did the airline change the schedule so that each pilot now flies fewer hours every week? B: A recent safety study showed that {{BLANK}} pilots make more mistakes during landing, so the company decided that passenger safety is more important than saving money.",
    "cn": "A：為什麼航空公司更改了班表，讓每位機師現在每週飛行的時數減少？ B：最近的一項安全研究顯示，【疲勞的】機師在降落時會犯更多錯誤，所以公司決定乘客安全比省錢更重要。"
  },
  {
    "word": "drowsy",
    "pos": "adj.",
    "cn_def": "昏昏欲睡的",
    "en_def": "tired and almost falling asleep",
    "sentence": "A: The pharmacist gave me some new allergy pills, but is there anything I should know before I take them to work? B: Yes, these pills can make you feel {{BLANK}}, so you shouldn't drive to the office or use any heavy machines in the factory after taking them.",
    "cn": "A：藥劑師給了我一些新的過敏藥，在我帶去上班服用之前，有什麼需要注意的嗎？ B：有，這種藥會讓你覺得【昏昏欲睡】，所以服用後你不應該開車去辦公室，也不要在工廠操作任何重型機器。"
  },
  {
    "word": "drained",
    "pos": "adj.",
    "cn_def": "精疲力竭的；心力交瘁的",
    "en_def": "having no energy left",
    "sentence": "A: You were in the meeting with the angry customer for nearly three hours, so how are you feeling now? B: I feel completely {{BLANK}} because I had to stay calm and polite the whole time, so I think I'll go for a short walk before I answer any more emails.",
    "cn": "A：你和那位生氣的客戶開會開了將近三個小時，你現在感覺怎麼樣？ B：我覺得完全【精疲力竭】，因為我必須全程保持冷靜和禮貌，所以我想在回覆更多電子郵件之前先去散步一下。"
  },
  {
    "word": "worn out",
    "pos": "adj.phr.",
    "cn_def": "筋疲力盡的；磨損的",
    "en_def": "extremely tired; also, too old or used to work well",
    "sentence": "A: Should we ask the warehouse staff to stay late tonight to finish packing the holiday orders for our biggest client? B: I don't think so, because they have been lifting heavy boxes since six this morning, and they are all {{BLANK}}, so let's hire some part-time helpers instead.",
    "cn": "A：我們要不要請倉庫員工今晚留下來加班，把最大客戶的節日訂單包裝完？ B：我覺得不要，因為他們從今天早上六點就一直在搬重箱子，大家都已經【筋疲力盡】了，所以我們改請一些兼職幫手吧。"
  },
  {
    "word": "burned out",
    "pos": "adj.phr.",
    "cn_def": "身心俱疲的；職業倦怠的",
    "en_def": "very tired and unhappy because of working too hard for too long",
    "sentence": "A: Why did Kevin decide to leave his well-paid job at the bank after working there for almost ten years? B: He told me he felt {{BLANK}} after years of long hours and weekend meetings, so he wants to take some time off and then find a job with a better work-life balance.",
    "cn": "A：為什麼凱文在銀行工作了將近十年之後，決定離開那份高薪的工作？ B：他告訴我，多年來長時間工作和週末開會讓他感到【身心俱疲】，所以他想先休息一段時間，再找一份工作與生活更平衡的工作。"
  },
  {
    "word": "overworked",
    "pos": "adj.",
    "cn_def": "工作過度的；過勞的",
    "en_def": "made to work too hard or too much",
    "sentence": "A: Customers have been complaining that it takes too long to get answers from our help desk, so what is the main problem? B: The support staff are {{BLANK}} because two people quit last month, so the manager plans to hire three new assistants before the busy holiday season begins.",
    "cn": "A：客戶一直抱怨我們的服務台回覆太慢，主要問題是什麼？ B：支援人員【工作過度】，因為上個月有兩個人離職，所以經理計畫在忙碌的節日旺季開始前再聘請三名新助理。"
  },
  {
    "word": "yawn",
    "pos": "v.",
    "cn_def": "打哈欠",
    "en_def": "to open your mouth wide and breathe in because you are tired or bored",
    "sentence": "A: Did you notice anything strange during the training video that we showed the new employees this morning? B: Yes, many of them started to {{BLANK}} after only ten minutes because the video was too long and boring, so next time we should add some group activities.",
    "cn": "A：今天早上我們給新員工看訓練影片的時候，你有注意到什麼奇怪的地方嗎？ B：有，很多人才看十分鐘就開始【打哈欠】，因為影片太長又太無聊，所以下次我們應該加一些小組活動。"
  },
  {
    "word": "rest",
    "pos": "n.",
    "cn_def": "休息",
    "en_def": "a period of relaxing or sleeping after activity",
    "sentence": "A: The doctor said I hurt my back while carrying the printer, so do you think I can come to work tomorrow? B: I think you should stay at home and get some {{BLANK}} for a few days, and I will ask Jenny to cover your duties at the front desk until you feel better.",
    "cn": "A：醫生說我搬印表機時傷到了背，你覺得我明天可以來上班嗎？ B：我覺得你應該待在家裡好好【休息】幾天，我會請珍妮在你好轉之前代替你在櫃台的工作。"
  },
  {
    "word": "nap",
    "pos": "n.",
    "cn_def": "小睡；午睡",
    "en_def": "a short sleep during the day",
    "sentence": "A: How do you stay so active during the long afternoon workshops, while everyone else in the room looks tired? B: I usually take a twenty-minute {{BLANK}} in my car during the lunch break, and it helps me focus much better until the workshop finishes at six.",
    "cn": "A：在漫長的下午研習中，其他人看起來都很累，你是怎麼保持這麼有活力的？ B：我通常在午休時間在車上【小睡】二十分鐘，這讓我在研習六點結束前都能更專心。"
  },
  {
    "word": "sluggish",
    "pos": "adj.",
    "cn_def": "遲緩的；無精打采的；（經濟）疲軟的",
    "en_def": "moving or working more slowly than usual",
    "sentence": "A: Why does everyone in the office seem so slow and quiet this Monday morning, even though there are many tasks to finish? B: Most people feel {{BLANK}} after the long holiday weekend, so the manager suggested starting with an easy meeting and leaving the hard work until the afternoon.",
    "cn": "A：為什麼這個星期一早上辦公室裡大家看起來都這麼慢又安靜，明明有很多工作要完成？ B：大多數人在長週末連假後都覺得【無精打采】，所以經理建議先開個輕鬆的會議，把困難的工作留到下午。"
  },
  {
    "word": "lethargic",
    "pos": "adj.",
    "cn_def": "懶洋洋的；無精打采的",
    "en_def": "having no energy and not wanting to do anything",
    "sentence": "A: Have you been feeling better since you changed your diet and stopped eating fast food for lunch every day? B: Yes, I used to feel {{BLANK}} all afternoon after eating fried chicken, but now I eat salad and fruit, so I have much more energy at work.",
    "cn": "A：自從你改變飲食、不再每天午餐吃速食之後，有沒有覺得好一點？ B：有，以前吃完炸雞後我整個下午都覺得【懶洋洋的】，但現在我吃沙拉和水果，所以工作時精神好多了。"
  },
  {
    "word": "strain",
    "pos": "n.",
    "cn_def": "勞損；疲勞；壓力",
    "en_def": "pressure or stress on your body or mind",
    "sentence": "A: Why did the company buy new adjustable chairs and larger computer screens for everyone in the design department? B: Many designers complained about back pain and eye {{BLANK}} after sitting in front of small screens all day, so the company wanted to protect their health.",
    "cn": "A：為什麼公司幫設計部門的每個人都買了新的可調式椅子和更大的電腦螢幕？ B：很多設計師抱怨整天坐在小螢幕前導致背痛和眼睛【疲勞】，所以公司想要保護他們的健康。"
  },
  {
    "word": "stress",
    "pos": "n.",
    "cn_def": "壓力",
    "en_def": "a feeling of worry caused by difficult situations",
    "sentence": "A: How are you dealing with all the pressure from the new project deadline and the extra meetings with the clients? B: I go swimming three times a week to reduce my {{BLANK}}, and I also try not to check work emails after nine o'clock at night.",
    "cn": "A：面對新專案截止日期和額外的客戶會議帶來的種種負擔，你是怎麼應付的？ B：我每週游泳三次來減輕我的【壓力】，而且晚上九點以後我也盡量不查看工作電子郵件。"
  },
  {
    "word": "overwhelmed",
    "pos": "adj.",
    "cn_def": "不知所措的；被壓垮的",
    "en_def": "having too much to deal with",
    "sentence": "A: How was your first week as the new office manager, now that you are in charge of twelve people? B: Honestly, I felt a little {{BLANK}} because there were so many new tasks and meetings, but my team was very patient and helped me learn the system quickly.",
    "cn": "A：你當新辦公室經理的第一週怎麼樣？現在你要負責十二個人了。 B：說實話，我覺得有點【不知所措】，因為有好多新的工作和會議，但我的團隊很有耐心，幫助我很快就熟悉了系統。"
  },
  {
    "word": "doze",
    "pos": "v.",
    "cn_def": "打瞌睡",
    "en_def": "to sleep lightly for a short time",
    "sentence": "A: Did you enjoy the long train ride from Taipei to Kaohsiung for the sales conference last Friday afternoon? B: Not really, because I was so tired that I began to {{BLANK}} off after twenty minutes, and I almost missed my station when the train arrived.",
    "cn": "A：上週五下午你搭長途火車從台北去高雄參加業務會議，旅途愉快嗎？ B：不太愉快，因為我太累了，二十分鐘後就開始【打瞌睡】，火車到站時我差點坐過站。"
  },
  {
    "word": "snooze",
    "pos": "n.",
    "cn_def": "小睡；（鬧鐘的）貪睡功能",
    "en_def": "a short, light sleep; the alarm button that lets you sleep a few more minutes",
    "sentence": "A: Why were you thirty minutes late for the team meeting this morning, when you are usually the first person to arrive? B: I'm really sorry, because I kept pressing the {{BLANK}} button on my alarm clock, and then I missed the bus that goes directly to our office.",
    "cn": "A：為什麼你今天早上的團隊會議遲到了三十分鐘？你平常都是第一個到的。 B：真的很抱歉，因為我一直按鬧鐘上的【貪睡】按鈕，結果錯過了直達我們辦公室的公車。"
  },
  {
    "word": "recharge",
    "pos": "v.",
    "cn_def": "恢復精力；充電",
    "en_def": "to get your energy back by resting; to fill a battery with power",
    "sentence": "A: You have been working without a vacation for almost a year, so what are your plans for the long weekend? B: I'm going to a quiet beach town with no internet to {{BLANK}}, because I want to return to the office feeling fresh and ready for the new project.",
    "cn": "A：你已經將近一年沒休假一直在工作了，這個長週末你有什麼計畫？ B：我要去一個沒有網路的安靜海邊小鎮【充電】，因為我想要神清氣爽地回到辦公室，準備好迎接新專案。"
  },
  {
    "word": "relax",
    "pos": "v.",
    "cn_def": "放鬆",
    "en_def": "to rest and become calm",
    "sentence": "A: Is there anywhere in the hotel where our guests can go after a long day of meetings at the convention center? B: Yes, they can {{BLANK}} in the spa on the top floor, which has a sauna, a heated pool, and a quiet tea room that stays open until midnight.",
    "cn": "A：飯店裡有沒有地方可以讓我們的客人在會議中心開了一整天會之後去？ B：有，他們可以在頂樓的水療中心【放鬆】，那裡有三溫暖、溫水泳池，還有一間營業到午夜的安靜茶室。"
  },
  {
    "word": "energy",
    "pos": "n.",
    "cn_def": "精力；能源",
    "en_def": "the physical and mental strength to be active",
    "sentence": "A: What do you think of the new sales manager who joined our team from the Hong Kong branch last month? B: She has so much {{BLANK}} that she visits five clients a day, and she still has time to train the junior staff and organize team lunches on Fridays.",
    "cn": "A：你覺得上個月從香港分公司加入我們團隊的新業務經理怎麼樣？ B：她【精力】非常充沛，一天可以拜訪五位客戶，還有時間訓練資淺員工，並且在星期五安排團隊午餐。"
  },
  {
    "word": "stamina",
    "pos": "n.",
    "cn_def": "耐力；持久力",
    "en_def": "the physical or mental strength to keep doing something for a long time",
    "sentence": "A: Why do the flight attendants have to pass a fitness test before they can start working on international flights? B: Long flights require a lot of {{BLANK}}, because the crew must stand, walk, and serve meals for more than twelve hours without much time to sit down.",
    "cn": "A：為什麼空服員在開始飛國際航線之前必須通過體能測驗？ B：長途飛行需要很多【耐力】，因為機組人員必須站著、走動並供餐超過十二個小時，幾乎沒有時間坐下來。"
  },
  {
    "word": "collapse",
    "pos": "v.",
    "cn_def": "倒下；昏倒",
    "en_def": "to fall down suddenly because you are ill or very weak",
    "sentence": "A: Why was there an ambulance outside the convention center during the marathon yesterday afternoon? B: One of the runners didn't drink enough water in the hot weather, so he began to {{BLANK}} near the finish line, and the medical team had to take him to the hospital.",
    "cn": "A：昨天下午馬拉松比賽時，會議中心外面為什麼會有救護車？ B：其中一名跑者在炎熱的天氣裡沒有喝足夠的水，所以他在終點線附近【倒下】了，醫療團隊必須把他送去醫院。"
  },
  {
    "word": "groggy",
    "pos": "adj.",
    "cn_def": "昏沉的；頭昏腦脹的",
    "en_def": "weak and unable to think clearly, especially after sleep or medicine",
    "sentence": "A: How did you feel when you arrived at the New York office after the overnight flight from Taipei? B: I felt quite {{BLANK}} because I only slept two hours on the plane, so I drank three cups of coffee before the meeting with the board of directors.",
    "cn": "A：你搭從台北出發的夜間航班抵達紐約辦公室時，感覺怎麼樣？ B：我覺得相當【昏沉】，因為我在飛機上只睡了兩個小時，所以在和董事會開會前我喝了三杯咖啡。"
  },
  {
    "word": "listless",
    "pos": "adj.",
    "cn_def": "無精打采的；倦怠的",
    "en_def": "having no energy or interest in anything",
    "sentence": "A: Is something wrong with Tom, because he hasn't said a word in our team meetings for the past two weeks? B: He has seemed {{BLANK}} since his project was cancelled, so I'm going to invite him for coffee and ask how we can help him feel more interested again.",
    "cn": "A：湯姆是不是怎麼了？過去兩週他在團隊會議上一句話都沒說。 B：自從他的專案被取消後，他就一直看起來【無精打采】，所以我打算請他喝咖啡，問問我們能怎麼幫助他重新提起興趣。"
  },
  {
    "word": "bored",
    "pos": "adj.",
    "cn_def": "感到無聊的；厭煩的",
    "en_def": "tired and unhappy because something is not interesting",
    "sentence": "A: Why did the new intern ask if he could move from the mailroom to the marketing department so soon? B: He said he was {{BLANK}} because he only sorted letters all day, and he wants to use his design skills to help with the new advertising campaign.",
    "cn": "A：為什麼新來的實習生這麼快就要求從收發室調到行銷部門？ B：他說他覺得很【無聊】，因為他整天只是在分類信件，他想運用他的設計技能來協助新的廣告活動。"
  },
  {
    "word": "monotonous",
    "pos": "adj.",
    "cn_def": "單調乏味的",
    "en_def": "boring because it never changes",
    "sentence": "A: Why did the factory start moving workers to different stations every two hours instead of keeping them at one machine? B: Workers said that doing the same task all day was very {{BLANK}}, and the manager found that people make fewer mistakes when their work changes regularly.",
    "cn": "A：為什麼工廠開始每兩小時把工人調到不同的工作站，而不是讓他們一直待在同一台機器前？ B：工人們說整天做同樣的工作非常【單調乏味】，而經理發現當工作定期變換時，大家犯的錯誤會比較少。"
  },
  {
    "word": "ache",
    "pos": "n.",
    "cn_def": "疼痛；隱痛",
    "en_def": "a continuous pain that is not sharp",
    "sentence": "A: You keep touching your shoulder during the meeting, so did you hurt yourself at the gym this weekend? B: Not at the gym, but I carried heavy boxes when we moved to the new office, and now I have a dull {{BLANK}} in my shoulder that won't go away.",
    "cn": "A：你開會時一直摸你的肩膀，你是週末在健身房受傷了嗎？ B：不是在健身房，而是我們搬到新辦公室時我搬了很重的箱子，現在我的肩膀一直有消不掉的【隱痛】。"
  },
  {
    "word": "headache",
    "pos": "n.",
    "cn_def": "頭痛",
    "en_def": "a pain in your head",
    "sentence": "A: Why are you leaving the office so early today, when we still have to finish the report for the client? B: I have had a terrible {{BLANK}} since lunch because of the loud construction noise next door, so I'll finish the report at home tonight and send it to you.",
    "cn": "A：我們還要完成給客戶的報告，你今天為什麼這麼早就要離開辦公室？ B：因為隔壁施工的噪音很大，我從午餐後就一直【頭痛】得很厲害，所以我今晚會在家把報告完成再寄給你。"
  },
  {
    "word": "insomnia",
    "pos": "n.",
    "cn_def": "失眠",
    "en_def": "a problem in which you cannot sleep",
    "sentence": "A: You look very tired lately, so are you still working the night shift at the hotel reception desk? B: No, I moved back to the day shift, but I still suffer from {{BLANK}} and often lie awake until three in the morning, so I'm going to see a doctor next week.",
    "cn": "A：你最近看起來很累，你還在飯店櫃台上夜班嗎？ B：沒有，我已經調回日班了，但我還是有【失眠】的問題，常常躺著醒到凌晨三點，所以我下週要去看醫生。"
  },
  {
    "word": "bedtime",
    "pos": "n.",
    "cn_def": "就寢時間",
    "en_def": "the time when you usually go to bed",
    "sentence": "A: Do you have any advice for getting better sleep, because I often feel tired at work in the morning? B: Try to stop using your phone and laptop at least one hour before {{BLANK}}, because the bright screens keep your brain active and make it harder to fall asleep.",
    "cn": "A：你有什麼讓睡眠品質變好的建議嗎？因為我早上上班時常覺得很累。 B：試著在【就寢時間】前至少一小時停止使用手機和筆電，因為明亮的螢幕會讓大腦保持活躍，使你更難入睡。"
  },
  {
    "word": "routine",
    "pos": "n.",
    "cn_def": "例行公事；慣例",
    "en_def": "the usual way you do things every day",
    "sentence": "A: How do you manage to stay so organized, even when your schedule is full of meetings and business trips? B: I have a simple morning {{BLANK}}: I jog for thirty minutes, eat a healthy breakfast, and write my list of tasks before I check any emails.",
    "cn": "A：即使你的行程排滿了會議和出差，你是怎麼保持這麼有條理的？ B：我有一套簡單的早晨【例行習慣】：慢跑三十分鐘、吃一頓健康的早餐，並在查看任何電子郵件之前寫下我的待辦事項。"
  },
  {
    "word": "refresh",
    "pos": "v.",
    "cn_def": "使恢復精神；重新整理（網頁）",
    "en_def": "to make someone feel less tired; to update a web page",
    "sentence": "A: The team has been working on the budget for four hours without stopping, so should we keep going until it's finished? B: Let's take a fifteen-minute break and go outside for some fresh air, because a short walk will {{BLANK}} everyone, and we'll work faster afterward.",
    "cn": "A：團隊已經連續做預算四個小時沒停了，我們要繼續做到完成嗎？ B：我們休息十五分鐘，到外面呼吸新鮮空氣吧，因為短暫散步能讓大家【恢復精神】，之後我們會做得更快。"
  },
  {
    "word": "recovery",
    "pos": "n.",
    "cn_def": "康復；恢復",
    "en_def": "the process of becoming healthy again",
    "sentence": "A: Have you heard any news about our department manager since she had her knee operation last month? B: Yes, she called this morning and said her {{BLANK}} is going well, so she expects to return to the office part-time next week and full-time in December.",
    "cn": "A：自從我們部門經理上個月做了膝蓋手術後，你有聽到她的任何消息嗎？ B：有，她今天早上打電話來說她【康復】得很順利，所以她預計下週先回辦公室兼職上班，十二月再恢復全職。"
  }
];

const MCQS = [
  {
    "q": "After the twelve-hour flight from New York, the sales director felt completely _____. She went straight to her hotel room and slept until noon.",
    "options": [
      "exhausted",
      "monotonous",
      "punctual",
      "affordable"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "This cold medicine may make you feel _____. Please do not drive or operate heavy machinery for six hours after taking it.",
    "options": [
      "monotonous",
      "generous",
      "sleepy",
      "punctual"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The safety report says that _____ driving causes many highway accidents at night. Drivers should stop and take a break every two hours.",
    "options": [
      "durable",
      "drowsy",
      "generous",
      "wooden"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "My running shoes are completely _____ after two years of daily use. I need to buy a new pair before the company marathon.",
    "options": [
      "sold out",
      "carefree",
      "monotonous",
      "worn out"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Many nurses feel _____ after working night shifts for years without a long break. The hospital is now offering free counseling and extra vacation days.",
    "options": [
      "sold out",
      "carefree",
      "burned out",
      "punctual"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The customer service team is _____ and underpaid during the holiday season. Management plans to hire ten temporary staff to reduce their workload.",
    "options": [
      "overworked",
      "overcrowded",
      "monotonous",
      "spotless"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Several people in the audience began to _____ during the long budget presentation. The speaker realized he needed to make his talk shorter.",
    "options": [
      "refresh",
      "assemble",
      "postpone",
      "yawn"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The doctor advised the injured warehouse worker to get plenty of _____ for a week. He should not lift heavy boxes until his back heals.",
    "options": [
      "stress",
      "rest",
      "insomnia",
      "headache"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Some technology companies let employees take a short _____ in quiet rooms after lunch. Research shows that twenty minutes of sleep improves focus.",
    "options": [
      "nap",
      "ache",
      "strain",
      "insomnia"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Sales have been _____ this quarter because of the weak economy. The marketing team hopes the new advertising campaign will help business grow again.",
    "options": [
      "drowsy",
      "spotless",
      "sluggish",
      "generous"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Staring at a computer screen all day can cause eye _____. Experts suggest looking away from the screen every twenty minutes.",
    "options": [
      "nap",
      "strain",
      "bedtime",
      "recovery"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The company offers yoga classes to help employees manage work-related _____. Many staff members say they feel calmer and more productive now.",
    "options": [
      "stamina",
      "bedtime",
      "nap",
      "stress"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The new receptionist felt _____ by the number of phone calls on her first day. Her supervisor stayed beside her to help with difficult questions.",
    "options": [
      "monotonous",
      "punctual",
      "overwhelmed",
      "spotless"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The security guard was warned after he began to _____ off during his night shift. Cameras showed him sleeping at the front desk.",
    "options": [
      "doze",
      "refresh",
      "recharge",
      "collapse"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "I pressed the _____ button three times this morning and missed my train. Now I will be late for the important client meeting.",
    "options": [
      "energy",
      "routine",
      "stamina",
      "snooze"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Taking a long weekend in the mountains helps me _____ my batteries before the busy season. I always return to the office feeling full of energy.",
    "options": [
      "yawn",
      "recharge",
      "doze",
      "collapse"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Guests can _____ in the hotel's rooftop garden after a long day of business meetings. The garden is open until eleven every night.",
    "options": [
      "relax",
      "collapse",
      "yawn",
      "postpone"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Our new office lights use forty percent less _____ than the old ones. The building's electricity bill has dropped a lot since last spring.",
    "options": [
      "stamina",
      "routine",
      "energy",
      "recovery"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Working twelve-hour shifts in the warehouse requires a lot of physical _____. New employees often feel weak during their first few weeks.",
    "options": [
      "insomnia",
      "stamina",
      "bedtime",
      "headache"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "One runner was so exhausted that he started to _____ near the finish line. Medical staff quickly gave him water and helped him to a tent.",
    "options": [
      "recharge",
      "refresh",
      "organize",
      "collapse"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "After the long surgery, the patient was still _____ from the medicine. The nurse said he would be fully awake in a few hours.",
    "options": [
      "monotonous",
      "durable",
      "groggy",
      "punctual"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Many interns get _____ when they only make copies and answer phones. The company now gives them real projects to keep them interested.",
    "options": [
      "bored",
      "punctual",
      "durable",
      "generous"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Factory workers said that checking the same parts all day was very _____. The manager now rotates their tasks every two hours.",
    "options": [
      "punctual",
      "generous",
      "fragile",
      "monotonous"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "After moving furniture all weekend, Peter had a dull _____ in his lower back. He decided to see a physical therapist on Monday.",
    "options": [
      "insomnia",
      "ache",
      "routine",
      "stamina"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The loud construction noise outside the office gave everyone a terrible _____. Several employees asked to work from home until the project ends.",
    "options": [
      "headache",
      "stamina",
      "bedtime",
      "recovery"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "Since starting the night shift, Linda has suffered from _____ and sleeps only three hours a day. Her doctor suggested changing her schedule.",
    "options": [
      "stamina",
      "energy",
      "insomnia",
      "routine"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Experts recommend turning off your phone an hour before _____. The blue light from screens can keep your brain awake at night.",
    "options": [
      "recovery",
      "bedtime",
      "stamina",
      "energy"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "Jogging every morning before work has become part of my daily _____. It helps me feel alert during long meetings.",
    "options": [
      "insomnia",
      "headache",
      "ache",
      "routine"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "Please _____ the web page to see the latest flight information. The airline updates departure times every five minutes.",
    "options": [
      "relax",
      "collapse",
      "refresh",
      "yawn"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The manager is making a full _____ after her knee operation. She is expected to return to the office next Monday.",
    "options": [
      "recovery",
      "routine",
      "insomnia",
      "strain"
    ],
    "answer": 0,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "exhausted": {
    "pos": "adj.",
    "en_def": "very, very tired",
    "cn_def": "筋疲力盡的"
  },
  "sleepy": {
    "pos": "adj.",
    "en_def": "feeling tired and wanting to sleep",
    "cn_def": "想睡的；睏的"
  },
  "weary": {
    "pos": "adj.",
    "en_def": "tired, especially after working or traveling for a long time",
    "cn_def": "疲憊的；厭倦的"
  },
  "fatigued": {
    "pos": "adj.",
    "en_def": "very tired because of hard work or exercise",
    "cn_def": "疲勞的"
  },
  "drowsy": {
    "pos": "adj.",
    "en_def": "tired and almost falling asleep",
    "cn_def": "昏昏欲睡的"
  },
  "drained": {
    "pos": "adj.",
    "en_def": "having no energy left",
    "cn_def": "精疲力竭的；心力交瘁的"
  },
  "worn out": {
    "pos": "adj.phr.",
    "en_def": "extremely tired; also, too old or used to work well",
    "cn_def": "筋疲力盡的；磨損的"
  },
  "burned out": {
    "pos": "adj.phr.",
    "en_def": "very tired and unhappy because of working too hard for too long",
    "cn_def": "身心俱疲的；職業倦怠的"
  },
  "overworked": {
    "pos": "adj.",
    "en_def": "made to work too hard or too much",
    "cn_def": "工作過度的；過勞的"
  },
  "yawn": {
    "pos": "v.",
    "en_def": "to open your mouth wide and breathe in because you are tired or bored",
    "cn_def": "打哈欠"
  },
  "rest": {
    "pos": "n.",
    "en_def": "a period of relaxing or sleeping after activity",
    "cn_def": "休息"
  },
  "nap": {
    "pos": "n.",
    "en_def": "a short sleep during the day",
    "cn_def": "小睡；午睡"
  },
  "sluggish": {
    "pos": "adj.",
    "en_def": "moving or working more slowly than usual",
    "cn_def": "遲緩的；無精打采的；（經濟）疲軟的"
  },
  "lethargic": {
    "pos": "adj.",
    "en_def": "having no energy and not wanting to do anything",
    "cn_def": "懶洋洋的；無精打采的"
  },
  "strain": {
    "pos": "n.",
    "en_def": "pressure or stress on your body or mind",
    "cn_def": "勞損；疲勞；壓力"
  },
  "stress": {
    "pos": "n.",
    "en_def": "a feeling of worry caused by difficult situations",
    "cn_def": "壓力"
  },
  "overwhelmed": {
    "pos": "adj.",
    "en_def": "having too much to deal with",
    "cn_def": "不知所措的；被壓垮的"
  },
  "doze": {
    "pos": "v.",
    "en_def": "to sleep lightly for a short time",
    "cn_def": "打瞌睡"
  },
  "snooze": {
    "pos": "n.",
    "en_def": "a short, light sleep; the alarm button that lets you sleep a few more minutes",
    "cn_def": "小睡；（鬧鐘的）貪睡功能"
  },
  "recharge": {
    "pos": "v.",
    "en_def": "to get your energy back by resting; to fill a battery with power",
    "cn_def": "恢復精力；充電"
  },
  "relax": {
    "pos": "v.",
    "en_def": "to rest and become calm",
    "cn_def": "放鬆"
  },
  "energy": {
    "pos": "n.",
    "en_def": "the physical and mental strength to be active",
    "cn_def": "精力；能源"
  },
  "stamina": {
    "pos": "n.",
    "en_def": "the physical or mental strength to keep doing something for a long time",
    "cn_def": "耐力；持久力"
  },
  "collapse": {
    "pos": "v.",
    "en_def": "to fall down suddenly because you are ill or very weak",
    "cn_def": "倒下；昏倒"
  },
  "groggy": {
    "pos": "adj.",
    "en_def": "weak and unable to think clearly, especially after sleep or medicine",
    "cn_def": "昏沉的；頭昏腦脹的"
  },
  "listless": {
    "pos": "adj.",
    "en_def": "having no energy or interest in anything",
    "cn_def": "無精打采的；倦怠的"
  },
  "bored": {
    "pos": "adj.",
    "en_def": "tired and unhappy because something is not interesting",
    "cn_def": "感到無聊的；厭煩的"
  },
  "monotonous": {
    "pos": "adj.",
    "en_def": "boring because it never changes",
    "cn_def": "單調乏味的"
  },
  "ache": {
    "pos": "n.",
    "en_def": "a continuous pain that is not sharp",
    "cn_def": "疼痛；隱痛"
  },
  "headache": {
    "pos": "n.",
    "en_def": "a pain in your head",
    "cn_def": "頭痛"
  },
  "insomnia": {
    "pos": "n.",
    "en_def": "a problem in which you cannot sleep",
    "cn_def": "失眠"
  },
  "bedtime": {
    "pos": "n.",
    "en_def": "the time when you usually go to bed",
    "cn_def": "就寢時間"
  },
  "routine": {
    "pos": "n.",
    "en_def": "the usual way you do things every day",
    "cn_def": "例行公事；慣例"
  },
  "refresh": {
    "pos": "v.",
    "en_def": "to make someone feel less tired; to update a web page",
    "cn_def": "使恢復精神；重新整理（網頁）"
  },
  "recovery": {
    "pos": "n.",
    "en_def": "the process of becoming healthy again",
    "cn_def": "康復；恢復"
  }
};

const EXTRA_GLOSSES = {};
