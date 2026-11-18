// Topic 372 Quiz Data: Stay Up Late 熬夜
// Source word list: https://www.examword.com/group-topic/stay-up-late — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T372 - Stay Up Late 熬夜",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "midnight",
    "pos": "n.",
    "cn_def": "午夜；半夜十二點",
    "en_def": "twelve o'clock at night",
    "sentence": "A: Why did the IT team send the update notice so late last night, when most of the staff had already gone home to sleep? B: The system upgrade could only start after {{BLANK}}, because that is when the fewest customers use our online store, so the engineers stayed in the office until almost two in the morning.",
    "cn": "A：為什麼IT團隊昨晚那麼晚才發更新通知，那時大部分員工都已經回家睡覺了？ B：系統升級只能在【午夜】之後開始，因為那是最少顧客使用我們網路商店的時段，所以工程師們在辦公室一直待到將近凌晨兩點。"
  },
  {
    "word": "overtime",
    "pos": "n.",
    "cn_def": "加班；加班時間",
    "en_def": "extra time worked after normal working hours",
    "sentence": "A: Is the accounting department really going to finish the year-end report before the auditors arrive next Monday morning? B: They should, but everyone has done a lot of {{BLANK}} this week, staying until ten every night, so the manager has promised to give them extra pay and two days off after the audit is finished.",
    "cn": "A：會計部門真的能在下週一早上查帳人員到達之前完成年終報告嗎？ B：應該可以，但這週每個人都做了很多【加班】，每晚待到十點，所以經理承諾在查帳結束後給他們額外的薪水和兩天假。"
  },
  {
    "word": "insomnia",
    "pos": "n.",
    "cn_def": "失眠；失眠症",
    "en_def": "a problem in which you cannot sleep well",
    "sentence": "A: You look really tired today, so did the noise from the construction site next to your apartment keep you up again last night? B: Not this time, but I've had {{BLANK}} since I started the new project, because I keep thinking about the budget and the clients, and I just lie in bed for hours without sleeping.",
    "cn": "A：你今天看起來很累，是你公寓旁邊工地的噪音昨晚又讓你睡不著了嗎？ B：這次不是，但自從我開始新專案以來就一直【失眠】，因為我一直在想預算和客戶的事，常常在床上躺好幾個小時都睡不著。"
  },
  {
    "word": "drowsy",
    "pos": "adj.",
    "cn_def": "昏昏欲睡的",
    "en_def": "tired and almost falling asleep",
    "sentence": "A: Why did the safety officer tell the warehouse staff not to drive the forklifts after taking that cold medicine at lunch? B: That kind of medicine can make you feel {{BLANK}} for several hours, and if a driver's eyes start closing while moving heavy boxes, someone could get badly hurt in the busy loading area.",
    "cn": "A：為什麼安全主管告訴倉庫員工，午餐時吃了那種感冒藥之後不可以開堆高機？ B：那種藥會讓人感到【昏昏欲睡】好幾個小時，如果司機在搬運重箱子時眼睛開始閉上，在忙碌的裝卸區可能會有人嚴重受傷。"
  },
  {
    "word": "sleepy",
    "pos": "adj.",
    "cn_def": "想睡的；睏的",
    "en_def": "feeling that you want to sleep",
    "sentence": "A: Is it a good idea to hold the training session right after the company lunch on Friday afternoon? B: I'd move it to the morning, because people usually get {{BLANK}} after a big meal, and the trainer wants everyone to stay active and ask questions during the hands-on part of the workshop.",
    "cn": "A：在週五下午公司午餐之後馬上舉辦培訓課程是個好主意嗎？ B：我會把它改到早上，因為人們吃完大餐後通常會變得【想睡】，而講師希望每個人在工作坊的實作部分都能保持積極並提出問題。"
  },
  {
    "word": "exhausted",
    "pos": "adj.",
    "cn_def": "筋疲力盡的",
    "en_def": "extremely tired",
    "sentence": "A: Should we ask Daniel to join the client dinner tonight, since he knows the most about the new product line? B: I don't think so, because he just flew back from Tokyo this morning after a twelve-hour trip, and he told me he is completely {{BLANK}} and needs to go home and sleep.",
    "cn": "A：我們要不要請丹尼爾參加今晚的客戶晚宴？因為他最了解新的產品線。 B：我覺得不要，因為他今天早上才經過十二小時的旅程從東京飛回來，他跟我說他完全【筋疲力盡】，需要回家睡覺。"
  },
  {
    "word": "fatigue",
    "pos": "n.",
    "cn_def": "疲勞；疲倦",
    "en_def": "a feeling of being very tired",
    "sentence": "A: Why does the transport company make its truck drivers stop and take a break every four hours on long trips? B: Driver {{BLANK}} is one of the main causes of road accidents, so the company wants its staff to stretch, drink some water, and stay safe before they continue driving to the next city.",
    "cn": "A：為什麼運輸公司要求卡車司機在長途行程中每四個小時停下來休息一次？ B：駕駛【疲勞】是道路事故的主要原因之一，所以公司希望員工在繼續開往下一個城市之前，先伸展一下、喝點水，確保安全。"
  },
  {
    "word": "yawn",
    "pos": "v.",
    "cn_def": "打哈欠",
    "en_def": "to open your mouth wide because you are tired or bored",
    "sentence": "A: How did you know that the visitors from the head office were getting bored during the long budget presentation this morning? B: Several of them started to {{BLANK}} and look at their phones after the first hour, so I decided to skip some of the slides and move straight to the questions and answers.",
    "cn": "A：你怎麼知道總公司來的訪客在今天早上冗長的預算簡報中開始覺得無聊了？ B：第一個小時過後，有好幾個人開始【打哈欠】並看手機，所以我決定跳過一些投影片，直接進入問答時間。"
  },
  {
    "word": "alert",
    "pos": "adj.",
    "cn_def": "警覺的；機敏的",
    "en_def": "awake and able to notice things quickly",
    "sentence": "A: Why does the hospital ask its night-shift nurses to take short breaks and walk around every few hours? B: The nurses need to stay {{BLANK}} all night long, because they must notice quickly if a patient's condition changes, and a short walk helps them keep their minds clear and their eyes open.",
    "cn": "A：為什麼醫院要求值夜班的護理師每隔幾個小時就短暫休息並走動一下？ B：護理師整夜都需要保持【警覺】，因為病人的狀況一有變化他們就必須迅速察覺，而短暫散步能幫助他們保持頭腦清楚、眼睛睜開。"
  },
  {
    "word": "awake",
    "pos": "adj.",
    "cn_def": "醒著的；清醒的",
    "en_def": "not sleeping",
    "sentence": "A: Did you manage to watch the live online conference from New York last night, since it started at three o'clock our time? B: I tried to stay {{BLANK}} with two cups of strong coffee, but I fell asleep on the sofa halfway through, so I'll watch the recording this afternoon instead.",
    "cn": "A：你昨晚有看到紐約的線上直播研討會嗎？它在我們這裡是凌晨三點開始的。 B：我喝了兩杯濃咖啡想保持【清醒】，但看到一半就在沙發上睡著了，所以我今天下午改看錄影。"
  },
  {
    "word": "asleep",
    "pos": "adj.",
    "cn_def": "睡著的",
    "en_def": "sleeping",
    "sentence": "A: Why didn't you answer when the manager called you about the shipping problem late last night? B: I was already fast {{BLANK}} by ten o'clock, because I had to catch the six o'clock train to the trade fair, and my phone was on silent mode, so I only saw her message this morning.",
    "cn": "A：昨晚很晚的時候經理打電話跟你說運送的問題，你為什麼沒接？ B：我十點就已經【睡熟】了，因為我必須趕六點的火車去參加商展，而且手機開了靜音，所以我今天早上才看到她的訊息。"
  },
  {
    "word": "nap",
    "pos": "n.",
    "cn_def": "小睡；午睡",
    "en_def": "a short sleep during the day",
    "sentence": "A: How do you stay so lively during those long training days that last from eight in the morning until seven at night? B: I usually take a short {{BLANK}} in the staff lounge during lunch for about twenty minutes, and when I wake up, I feel fresh and ready for the afternoon sessions.",
    "cn": "A：那些從早上八點持續到晚上七點的長時間培訓日，你是怎麼保持這麼有精神的？ B：我通常在午餐時間到員工休息室【小睡】大約二十分鐘，醒來之後就覺得精神飽滿，準備好上下午的課程。"
  },
  {
    "word": "rest",
    "pos": "n.",
    "cn_def": "休息",
    "en_def": "a time of relaxing or sleeping so you feel better",
    "sentence": "A: Do you think I should go to the sales conference tomorrow, even though I've had a bad cold for three days? B: I think you should stay home and get some {{BLANK}}, because the conference lasts all day, and if you feel better by Friday, you can still meet the clients at the follow-up event.",
    "cn": "A：雖然我已經重感冒三天了，你覺得我明天還應該去參加業務會議嗎？ B：我覺得你應該待在家裡好好【休息】，因為會議要開一整天，如果你到週五覺得好一點了，還是可以在後續活動中和客戶見面。"
  },
  {
    "word": "bedtime",
    "pos": "n.",
    "cn_def": "就寢時間",
    "en_def": "the time when you usually go to bed",
    "sentence": "A: Why did your sales team stop sending emails to each other after nine o'clock every evening? B: Our manager said that checking work messages right before {{BLANK}} was making everyone sleep badly, so now we wait until the next morning unless there is a real emergency with a customer.",
    "cn": "A：為什麼你們業務團隊每天晚上九點以後就不再互傳電子郵件了？ B：我們經理說在【就寢時間】前查看工作訊息讓大家都睡不好，所以現在除非客戶那邊真的有緊急狀況，否則我們都等到隔天早上再處理。"
  },
  {
    "word": "routine",
    "pos": "n.",
    "cn_def": "例行作息；慣例",
    "en_def": "the usual order in which you do things every day",
    "sentence": "A: How have you managed to arrive at the office so early every day since you joined the new marketing team? B: I changed my evening {{BLANK}} completely, so now I turn off my laptop at nine, read for half an hour, and go to bed at ten, which makes waking up much easier.",
    "cn": "A：自從你加入新的行銷團隊後，你是怎麼做到每天都這麼早到辦公室的？ B：我完全改變了晚上的【作息】，現在我九點關筆電、看半小時書、十點上床，這讓早上起床變得容易多了。"
  },
  {
    "word": "deadline",
    "pos": "n.",
    "cn_def": "截止期限",
    "en_def": "the time or date by which something must be finished",
    "sentence": "A: Why are the designers still in the office at eleven o'clock at night when they usually leave at six? B: The client moved the {{BLANK}} for the new advertising campaign forward by two days, so the team has to finish all the posters and videos by tomorrow morning before the big meeting.",
    "cn": "A：設計師們通常六點就下班，為什麼晚上十一點還在辦公室？ B：客戶把新廣告活動的【截止期限】提前了兩天，所以團隊必須在明天早上的重要會議之前完成所有的海報和影片。"
  },
  {
    "word": "cram",
    "pos": "v.",
    "cn_def": "臨時抱佛腳；死記硬背",
    "en_def": "to study a lot in a short time just before a test",
    "sentence": "A: Is your assistant ready for the professional accounting exam that she is taking this Saturday morning? B: She's been trying to {{BLANK}} for it every night this week after work, but I told her that studying until three in the morning won't help much if she is too tired to think clearly during the test.",
    "cn": "A：你的助理準備好這週六早上要考的專業會計考試了嗎？ B：她這週每天下班後都在【臨時抱佛腳】，但我跟她說，如果考試時累到無法清楚思考，讀到凌晨三點也沒什麼幫助。"
  },
  {
    "word": "focus",
    "pos": "v.",
    "cn_def": "專注；集中注意力",
    "en_def": "to give all your attention to one thing",
    "sentence": "A: Why do you prefer to write your monthly reports early in the morning instead of in the afternoon? B: The office is very quiet before eight o'clock, so I can {{BLANK}} on the numbers without any phone calls or meetings, and I usually finish the whole report in half the time.",
    "cn": "A：你為什麼比較喜歡在一大早寫月報，而不是在下午寫？ B：八點以前辦公室非常安靜，所以我可以【專注】在數字上，不會有電話或會議打擾，通常只要一半的時間就能完成整份報告。"
  },
  {
    "word": "concentrate",
    "pos": "v.",
    "cn_def": "專心；集中精神",
    "en_def": "to think carefully about one thing",
    "sentence": "A: Did the new employee do well on the software training course that ended yesterday afternoon? B: Not really, because she had stayed up late watching a football match the night before, so she found it hard to {{BLANK}} during the lessons and missed several important steps.",
    "cn": "A：新員工在昨天下午結束的軟體培訓課程中表現得好嗎？ B：不太好，因為她前一晚熬夜看足球比賽，所以上課時很難【專心】，漏掉了好幾個重要步驟。"
  },
  {
    "word": "productive",
    "pos": "adj.",
    "cn_def": "有生產力的；有成效的",
    "en_def": "getting a lot of work done",
    "sentence": "A: Why does our team leader allow people to start work later in the morning if they want to? B: She found that some employees are more {{BLANK}} in the late morning and afternoon, so letting them choose their own hours means more work gets done and fewer mistakes are made.",
    "cn": "A：為什麼我們的組長允許想晚一點上班的人早上晚點開始工作？ B：她發現有些員工在接近中午和下午時比較【有生產力】，所以讓他們自己選擇工作時間，能完成更多工作、也犯更少錯誤。"
  },
  {
    "word": "efficient",
    "pos": "adj.",
    "cn_def": "有效率的",
    "en_def": "working well without wasting time or effort",
    "sentence": "A: How did the shipping department manage to handle twice as many orders this month without hiring any extra workers? B: They bought a new computer system that prints labels automatically, so the whole packing process is much more {{BLANK}}, and nobody has to stay late to finish the work anymore.",
    "cn": "A：出貨部門這個月沒有多請任何人，是怎麼處理兩倍訂單的？ B：他們買了一套能自動列印標籤的新電腦系統，所以整個包裝流程變得更【有效率】，再也沒有人需要留下來加班完成工作了。"
  },
  {
    "word": "habit",
    "pos": "n.",
    "cn_def": "習慣",
    "en_def": "something you do often, usually without thinking",
    "sentence": "A: Why does Mark always look so tired at our morning meetings, even though he leaves the office at five every day? B: He has a bad {{BLANK}} of playing online games until two in the morning, and he told me that he wants to stop, but he finds it very hard to change.",
    "cn": "A：為什麼馬克每天五點就下班，在晨會上卻總是看起來那麼累？ B：他有玩線上遊戲到凌晨兩點的壞【習慣】，他跟我說他想戒掉，但覺得很難改變。"
  },
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "行程表；時間表",
    "en_def": "a plan that lists when things will happen",
    "sentence": "A: Can you meet the new suppliers from Korea on Thursday afternoon, or are you too busy with the factory visit? B: My {{BLANK}} is completely full that day, because I have three meetings and a factory tour, so could you ask them whether Friday morning would work for them instead?",
    "cn": "A：你週四下午可以和韓國來的新供應商見面嗎？還是你忙著參觀工廠？ B：我那天的【行程】完全排滿了，因為有三場會議和一次工廠參觀，所以可以請你問問他們改成週五早上方不方便嗎？"
  },
  {
    "word": "alarm",
    "pos": "n.",
    "cn_def": "鬧鐘",
    "en_def": "a clock that makes a noise to wake you up",
    "sentence": "A: How did you miss the first part of the board meeting this morning when you are usually the first person to arrive? B: The power went off in my apartment during the night, so my {{BLANK}} didn't ring at six, and I woke up an hour later than usual and had to take a taxi.",
    "cn": "A：你通常都是第一個到的人，今天早上怎麼會錯過董事會會議的前半段？ B：我的公寓半夜停電，所以我的【鬧鐘】六點沒有響，我比平常晚了一個小時才醒來，只好搭計程車。"
  },
  {
    "word": "sunrise",
    "pos": "n.",
    "cn_def": "日出",
    "en_def": "the time in the morning when the sun first appears",
    "sentence": "A: Why did the photography team leave the hotel so early this morning, before breakfast was even served? B: They wanted to take pictures of the new resort with the beautiful light at {{BLANK}}, so they drove to the beach at five o'clock and set up their cameras before the sky turned orange.",
    "cn": "A：為什麼攝影團隊今天早上那麼早就離開飯店，連早餐都還沒開始供應？ B：他們想在【日出】時的美麗光線下拍攝新度假村，所以五點就開車到海邊，在天空變成橘色之前架好相機。"
  },
  {
    "word": "night owl",
    "pos": "n.phr.",
    "cn_def": "夜貓子",
    "en_def": "a person who likes to stay awake and work late at night",
    "sentence": "A: Why does Kevin always send his design ideas to the team at one or two o'clock in the morning? B: He is a real {{BLANK}}, because he says his best ideas come late at night when the city is quiet, so the manager lets him start work at eleven instead of nine.",
    "cn": "A：為什麼凱文總是在凌晨一、兩點把設計構想傳給團隊？ B：他是個不折不扣的【夜貓子】，他說最好的點子都是在深夜城市安靜時出現的，所以經理讓他十一點才開始上班，而不是九點。"
  },
  {
    "word": "early bird",
    "pos": "n.phr.",
    "cn_def": "早起的人",
    "en_def": "a person who gets up or arrives very early",
    "sentence": "A: Who usually opens the office and turns on the lights and computers before everyone else arrives each morning? B: That's Linda, because she's an {{BLANK}} who gets up at five, goes jogging in the park, and is at her desk by seven, long before the other team members come in.",
    "cn": "A：每天早上通常是誰在大家到之前開辦公室門、打開燈和電腦？ B：是琳達，因為她是個【早起的人】，五點起床、去公園慢跑，七點就坐在辦公桌前了，比其他組員早到很久。"
  },
  {
    "word": "caffeine",
    "pos": "n.",
    "cn_def": "咖啡因",
    "en_def": "a substance in coffee and tea that keeps you awake",
    "sentence": "A: Why did the doctor at the company health check tell you to stop drinking coffee in the afternoon? B: She said that too much {{BLANK}} late in the day was the reason I couldn't sleep well at night, so now I drink only one cup in the morning and switch to water after lunch.",
    "cn": "A：為什麼公司健康檢查的醫生叫你下午不要再喝咖啡？ B：她說一天中太晚攝取過多【咖啡因】是我晚上睡不好的原因，所以我現在只在早上喝一杯，午餐後就改喝水。"
  },
  {
    "word": "energy",
    "pos": "n.",
    "cn_def": "精力；活力",
    "en_def": "the strength to be active and work",
    "sentence": "A: How do you keep going during those long trade shows where you have to stand and talk to visitors for eight hours? B: I eat a good breakfast and bring some fruit and nuts, because they give me enough {{BLANK}} to stay friendly and active until the show closes in the evening.",
    "cn": "A：在那些必須站著和訪客談話八小時的長時間商展中，你是怎麼撐下去的？ B：我會吃一頓豐盛的早餐並帶些水果和堅果，因為它們能給我足夠的【精力】，讓我一直保持親切和活力，直到晚上展覽結束。"
  },
  {
    "word": "refresh",
    "pos": "v.",
    "cn_def": "使恢復精神；使清醒",
    "en_def": "to make someone feel less tired and more lively",
    "sentence": "A: Should we keep working on the proposal until it's finished, or is it better to stop for a while? B: Let's take a fifteen-minute walk outside to {{BLANK}} our minds, because we've been staring at the screen for three hours, and I'm sure we'll find better ideas after some fresh air.",
    "cn": "A：我們應該繼續寫企劃書直到完成，還是先停一下比較好？ B：我們去外面散步十五分鐘來【恢復】一下精神吧，因為我們已經盯著螢幕三個小時了，我相信呼吸點新鮮空氣後會想出更好的點子。"
  },
  {
    "word": "oversleep",
    "pos": "v.",
    "cn_def": "睡過頭",
    "en_def": "to sleep longer than you planned",
    "sentence": "A: Why did the new intern arrive at the office forty minutes late on his very first day of work? B: He said he stayed up late preparing for his first meeting, and then he happened to {{BLANK}} because he forgot to charge his phone, so he missed his usual bus to the city center.",
    "cn": "A：為什麼新來的實習生上班第一天就晚了四十分鐘才到辦公室？ B：他說他熬夜準備第一場會議，然後因為忘了幫手機充電而【睡過頭】，所以錯過了平常搭往市中心的公車。"
  },
  {
    "word": "groggy",
    "pos": "adj.",
    "cn_def": "昏昏沉沉的；頭昏腦脹的",
    "en_def": "weak and unable to think clearly, often after sleep",
    "sentence": "A: You seem a little slow this morning, so did you have trouble sleeping on the overnight flight from London? B: Yes, I only slept for about two hours on the plane, so I still feel {{BLANK}} and confused, and I'll need a strong cup of coffee before I can lead the meeting with the clients.",
    "cn": "A：你今天早上看起來有點遲鈍，是在倫敦飛來的夜間航班上睡不好嗎？ B：對，我在飛機上只睡了大約兩個小時，所以現在還是覺得【昏昏沉沉】、腦袋不清楚，我需要一杯濃咖啡才能主持和客戶的會議。"
  },
  {
    "word": "balance",
    "pos": "n.",
    "cn_def": "平衡",
    "en_def": "a healthy amount of different things in your life",
    "sentence": "A: Why did the company decide to stop all work calls and emails after seven o'clock in the evening? B: Many employees said they were working too late every night, so management wants them to have a better {{BLANK}} between work and family life and come back to the office feeling fresh each morning.",
    "cn": "A：為什麼公司決定晚上七點以後停止所有工作電話和電子郵件？ B：很多員工說他們每晚都工作到太晚，所以管理階層希望他們在工作與家庭生活之間取得更好的【平衡】，每天早上都能精神飽滿地回到辦公室。"
  }
];

const MCQS = [
  {
    "q": "The server maintenance will begin at _____ tonight. Users will not be able to log in until two o'clock in the morning.",
    "options": [
      "midnight",
      "overtime",
      "deadline",
      "caffeine"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Factory workers who stay after six o'clock receive extra pay. All _____ must be approved by a supervisor in advance.",
    "options": [
      "insomnia",
      "overtime",
      "sunrise",
      "caffeine"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Worry about the merger gave the director _____ for several weeks. He often lay awake until four in the morning.",
    "options": [
      "routine",
      "balance",
      "insomnia",
      "alarm"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "This allergy medicine may make you feel _____. Do not drive or operate machinery after taking it.",
    "options": [
      "efficient",
      "productive",
      "alert",
      "drowsy"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "After working three double shifts in a row, the nurses were completely _____. The hospital gave them two days off to recover.",
    "options": [
      "exhausted",
      "productive",
      "efficient",
      "awake"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Long hours without breaks can lead to _____ and careless mistakes. The company now requires a ten-minute rest every two hours.",
    "options": [
      "sunrise",
      "fatigue",
      "alarm",
      "bedtime"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Several people began to _____ during the long budget presentation. The speaker realized he needed to make his talk more interesting.",
    "options": [
      "cram",
      "refresh",
      "yawn",
      "oversleep"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Security guards on the night shift must remain _____ at all times. They check the cameras and walk around the building every hour.",
    "options": [
      "drowsy",
      "groggy",
      "exhausted",
      "alert"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The online meeting with the New York office started at two in the morning. Few team members could stay _____ until it ended.",
    "options": [
      "awake",
      "asleep",
      "drowsy",
      "exhausted"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Some technology companies provide quiet rooms where staff can take a short _____. A twenty-minute break like this can improve focus.",
    "options": [
      "habit",
      "nap",
      "deadline",
      "schedule"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "After the busy trade fair, the sales team needed a few days of _____. Their manager let them work from home on Monday.",
    "options": [
      "habit",
      "alarm",
      "rest",
      "fatigue"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Experts suggest turning off phones and laptops one hour before _____. Bright screens can make it harder to fall asleep.",
    "options": [
      "overtime",
      "deadline",
      "sunrise",
      "bedtime"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "A regular morning _____ helps many managers start the workday calmly. They exercise, eat breakfast, and plan their tasks.",
    "options": [
      "routine",
      "insomnia",
      "fatigue",
      "caffeine"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The marketing team stayed late every night this week. The _____ for the client proposal is Friday at noon.",
    "options": [
      "habit",
      "deadline",
      "nap",
      "bedtime"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Students who _____ the night before a test often forget the information quickly. Regular review over several weeks works much better.",
    "options": [
      "yawn",
      "oversleep",
      "cram",
      "refresh"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Please turn off your phones during the workshop. We want everyone to _____ on the safety rules for the new machines.",
    "options": [
      "yawn",
      "cram",
      "oversleep",
      "focus"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The open office was so noisy that Paul could not _____ on his report. He finally moved to a quiet meeting room.",
    "options": [
      "concentrate",
      "refresh",
      "yawn",
      "oversleep"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Employees who sleep well are usually more _____ at work. They finish more tasks and make fewer mistakes during the day.",
    "options": [
      "drowsy",
      "productive",
      "groggy",
      "exhausted"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The new scheduling software is far more _____ than the old paper system. It saves each manager about five hours a week.",
    "options": [
      "sleepy",
      "drowsy",
      "efficient",
      "groggy"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Checking email late at night is a bad _____ for many office workers. It often keeps them awake and worried.",
    "options": [
      "alarm",
      "sunrise",
      "nap",
      "habit"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The director's _____ is completely full this week. Please book your meeting with her for next Tuesday instead.",
    "options": [
      "schedule",
      "caffeine",
      "insomnia",
      "fatigue"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Kevin set his _____ for five o'clock so he would not miss the early flight. He also asked the hotel for a wake-up call.",
    "options": [
      "balance",
      "alarm",
      "habit",
      "deadline"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Jason does his best work after ten in the evening. As a true _____, he often sends reports to his team after midnight.",
    "options": [
      "early bird",
      "deadline",
      "night owl",
      "routine"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Many people drink coffee to stay awake. However, too much _____ late in the day can make it hard to sleep.",
    "options": [
      "sunrise",
      "overtime",
      "balance",
      "caffeine"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "A healthy breakfast gives workers the _____ they need for a busy morning. Skipping it can leave people tired before lunch.",
    "options": [
      "energy",
      "insomnia",
      "fatigue",
      "deadline"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "A short walk outside can _____ your mind after hours at a computer. Many staff go out for ten minutes after lunch.",
    "options": [
      "cram",
      "refresh",
      "yawn",
      "oversleep"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Set two alarms the night before your job interview. You do not want to _____ and arrive late for such an important meeting.",
    "options": [
      "refresh",
      "concentrate",
      "oversleep",
      "cram"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Travelers often feel _____ after a long overnight flight. Drinking water and getting sunlight can help them wake up.",
    "options": [
      "efficient",
      "productive",
      "alert",
      "groggy"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The company offers flexible hours to help staff find a healthy _____ between work and family. Fewer employees now stay late every night.",
    "options": [
      "balance",
      "habit",
      "alarm",
      "nap"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "The hiking tour starts at five o'clock in the morning. Guests will reach the mountaintop just in time to watch the _____.",
    "options": [
      "midnight",
      "bedtime",
      "sunrise",
      "overtime"
    ],
    "answer": 2,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "midnight": {
    "pos": "n.",
    "en_def": "twelve o'clock at night",
    "cn_def": "午夜；半夜十二點"
  },
  "overtime": {
    "pos": "n.",
    "en_def": "extra time worked after normal working hours",
    "cn_def": "加班；加班時間"
  },
  "insomnia": {
    "pos": "n.",
    "en_def": "a problem in which you cannot sleep well",
    "cn_def": "失眠；失眠症"
  },
  "drowsy": {
    "pos": "adj.",
    "en_def": "tired and almost falling asleep",
    "cn_def": "昏昏欲睡的"
  },
  "sleepy": {
    "pos": "adj.",
    "en_def": "feeling that you want to sleep",
    "cn_def": "想睡的；睏的"
  },
  "exhausted": {
    "pos": "adj.",
    "en_def": "extremely tired",
    "cn_def": "筋疲力盡的"
  },
  "fatigue": {
    "pos": "n.",
    "en_def": "a feeling of being very tired",
    "cn_def": "疲勞；疲倦"
  },
  "yawn": {
    "pos": "v.",
    "en_def": "to open your mouth wide because you are tired or bored",
    "cn_def": "打哈欠"
  },
  "alert": {
    "pos": "adj.",
    "en_def": "awake and able to notice things quickly",
    "cn_def": "警覺的；機敏的"
  },
  "awake": {
    "pos": "adj.",
    "en_def": "not sleeping",
    "cn_def": "醒著的；清醒的"
  },
  "asleep": {
    "pos": "adj.",
    "en_def": "sleeping",
    "cn_def": "睡著的"
  },
  "nap": {
    "pos": "n.",
    "en_def": "a short sleep during the day",
    "cn_def": "小睡；午睡"
  },
  "rest": {
    "pos": "n.",
    "en_def": "a time of relaxing or sleeping so you feel better",
    "cn_def": "休息"
  },
  "bedtime": {
    "pos": "n.",
    "en_def": "the time when you usually go to bed",
    "cn_def": "就寢時間"
  },
  "routine": {
    "pos": "n.",
    "en_def": "the usual order in which you do things every day",
    "cn_def": "例行作息；慣例"
  },
  "deadline": {
    "pos": "n.",
    "en_def": "the time or date by which something must be finished",
    "cn_def": "截止期限"
  },
  "cram": {
    "pos": "v.",
    "en_def": "to study a lot in a short time just before a test",
    "cn_def": "臨時抱佛腳；死記硬背"
  },
  "focus": {
    "pos": "v.",
    "en_def": "to give all your attention to one thing",
    "cn_def": "專注；集中注意力"
  },
  "concentrate": {
    "pos": "v.",
    "en_def": "to think carefully about one thing",
    "cn_def": "專心；集中精神"
  },
  "productive": {
    "pos": "adj.",
    "en_def": "getting a lot of work done",
    "cn_def": "有生產力的；有成效的"
  },
  "efficient": {
    "pos": "adj.",
    "en_def": "working well without wasting time or effort",
    "cn_def": "有效率的"
  },
  "habit": {
    "pos": "n.",
    "en_def": "something you do often, usually without thinking",
    "cn_def": "習慣"
  },
  "schedule": {
    "pos": "n.",
    "en_def": "a plan that lists when things will happen",
    "cn_def": "行程表；時間表"
  },
  "alarm": {
    "pos": "n.",
    "en_def": "a clock that makes a noise to wake you up",
    "cn_def": "鬧鐘"
  },
  "sunrise": {
    "pos": "n.",
    "en_def": "the time in the morning when the sun first appears",
    "cn_def": "日出"
  },
  "night owl": {
    "pos": "n.phr.",
    "en_def": "a person who likes to stay awake and work late at night",
    "cn_def": "夜貓子"
  },
  "early bird": {
    "pos": "n.phr.",
    "en_def": "a person who gets up or arrives very early",
    "cn_def": "早起的人"
  },
  "caffeine": {
    "pos": "n.",
    "en_def": "a substance in coffee and tea that keeps you awake",
    "cn_def": "咖啡因"
  },
  "energy": {
    "pos": "n.",
    "en_def": "the strength to be active and work",
    "cn_def": "精力；活力"
  },
  "refresh": {
    "pos": "v.",
    "en_def": "to make someone feel less tired and more lively",
    "cn_def": "使恢復精神；使清醒"
  },
  "oversleep": {
    "pos": "v.",
    "en_def": "to sleep longer than you planned",
    "cn_def": "睡過頭"
  },
  "groggy": {
    "pos": "adj.",
    "en_def": "weak and unable to think clearly, often after sleep",
    "cn_def": "昏昏沉沉的；頭昏腦脹的"
  },
  "balance": {
    "pos": "n.",
    "en_def": "a healthy amount of different things in your life",
    "cn_def": "平衡"
  }
};

const EXTRA_GLOSSES = {};
