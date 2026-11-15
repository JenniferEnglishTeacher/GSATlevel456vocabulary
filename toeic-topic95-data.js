// Topic 95 Quiz Data: Daily Routine 日常作息
// Source word list: https://www.examword.com/group-topic/daily-routine — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T95 - Daily Routine 日常作息",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "routine",
    "pos": "n.",
    "cn_def": "例行公事；日常作息",
    "en_def": "the usual order of things you do every day",
    "sentence": "A: Why does the new receptionist arrive at the office thirty minutes before everyone else, even though her shift starts at nine? B: She says that a calm morning {{BLANK}} helps her a lot, so she checks the calendar, waters the plants, and answers her emails before the phones start ringing.",
    "cn": "A：新來的接待員為什麼比其他人早三十分鐘到辦公室，即使她的班九點才開始？ B：她說平靜的早晨【例行作息】對她幫助很大，所以她會在電話開始響之前查看行事曆、幫植物澆水，並回覆電子郵件。"
  },
  {
    "word": "habit",
    "pos": "n.",
    "cn_def": "習慣",
    "en_def": "something you do often, almost without thinking",
    "sentence": "A: How did you manage to finish your online marketing course while you were working full-time at the bank last year? B: I made a {{BLANK}} of studying for forty minutes on the train every morning, and after a few weeks it felt completely natural, so I never had to force myself.",
    "cn": "A：你去年在銀行全職工作時，是怎麼完成線上行銷課程的？ B：我養成了每天早上在火車上讀書四十分鐘的【習慣】，幾週後感覺就很自然了，所以我從來不必勉強自己。"
  },
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "時間表；行程",
    "en_def": "a plan that lists the times when things will happen",
    "sentence": "A: Can we move the meeting with the designers from Thursday afternoon to Friday morning, since the technician is coming to fix the printer on Thursday? B: Let me check my {{BLANK}} first, because I already promised to visit a client in the morning, but I think I can be back at the office by eleven.",
    "cn": "A：既然週四技術人員要來修印表機，我們可以把跟設計師的會議從週四下午改到週五早上嗎？ B：讓我先查看一下我的【行程】，因為我已經答應早上要去拜訪客戶，但我想我十一點前能回到辦公室。"
  },
  {
    "word": "timetable",
    "pos": "n.",
    "cn_def": "時刻表",
    "en_def": "a list that shows when buses, trains or classes leave or happen",
    "sentence": "A: How will the visitors from Tokyo get from the airport to our factory in Taichung if nobody can pick them up on Sunday? B: I've printed the high-speed rail {{BLANK}} for them, so they can see when each train leaves, and our driver will meet them at the station when they arrive.",
    "cn": "A：如果週日沒有人能去接機，來自東京的訪客要怎麼從機場到我們在台中的工廠？ B：我已經幫他們印好了高鐵【時刻表】，讓他們知道每班車什麼時候發車，他們抵達時我們的司機會在車站接他們。"
  },
  {
    "word": "wake",
    "pos": "v.",
    "cn_def": "醒來；叫醒",
    "en_def": "to stop sleeping",
    "sentence": "A: Why did you miss the conference call with the London office last night, when you promised the manager you would join? B: I set my alarm for two in the morning, but I was so tired that I didn't {{BLANK}} up until six, so I sent an apology email to everyone right away.",
    "cn": "A：你昨晚為什麼錯過了和倫敦辦公室的電話會議？你明明答應經理會參加。 B：我把鬧鐘設在凌晨兩點，但我太累了，直到六點才【醒來】，所以我立刻寄了一封道歉信給大家。"
  },
  {
    "word": "rise",
    "pos": "v.",
    "cn_def": "起床；上升",
    "en_def": "to get out of bed in the morning; to go up",
    "sentence": "A: How does the owner of the bakery near our office manage to have fresh bread on the shelves by six every morning? B: He and his two assistants {{BLANK}} at three o'clock, start the ovens by four, and bake several hundred rolls before the first office workers stop by on their way to the station.",
    "cn": "A：我們辦公室附近那家麵包店的老闆是怎麼做到每天早上六點前架上就有新鮮麵包的？ B：他和兩位助手凌晨三點就【起床】，四點前開好烤箱，在第一批上班族前往車站途中順道光顧之前，烤好好幾百個麵包捲。"
  },
  {
    "word": "stretch",
    "pos": "v.",
    "cn_def": "伸展",
    "en_def": "to make your arms, legs or body long and straight",
    "sentence": "A: Do you have any advice for me, because my back always hurts after I sit at my desk and type reports for eight hours? B: Try to stand up every hour and {{BLANK}} your arms and shoulders for a minute or two, and you might also ask the office manager for a better chair.",
    "cn": "A：你有什麼建議嗎？因為我坐在辦公桌前打八小時報告後，背總是很痛。 B：試著每小時站起來【伸展】一下手臂和肩膀一兩分鐘，你也可以請辦公室經理換一張比較好的椅子。"
  },
  {
    "word": "shower",
    "pos": "v.",
    "cn_def": "淋浴；沖澡",
    "en_def": "to wash your body while standing under running water",
    "sentence": "A: Is there anywhere in the building where employees can get ready after they cycle to the office in the hot summer weather? B: Yes, there's a small changing room on the basement level, so you can {{BLANK}} and change your clothes there before you go up to your desk on the fifth floor.",
    "cn": "A：大樓裡有沒有地方可以讓員工在炎熱夏天騎腳踏車上班後整理一下？ B：有，地下室有一間小更衣室，你可以在那裡【沖澡】、換衣服，然後再上五樓的座位。"
  },
  {
    "word": "brush",
    "pos": "v.",
    "cn_def": "刷；梳",
    "en_def": "to clean or make something tidy with a brush",
    "sentence": "A: Why does the dentist's office send a text message to all its patients a day before their appointments? B: The message reminds them to {{BLANK}} their teeth carefully before they come in, and it also tells them to arrive ten minutes early so that the receptionist can update their insurance information.",
    "cn": "A：牙醫診所為什麼要在看診前一天傳簡訊給所有病人？ B：簡訊會提醒他們來之前要仔細【刷】牙，也會告訴他們提早十分鐘到，讓櫃檯人員更新保險資料。"
  },
  {
    "word": "dress",
    "pos": "v.",
    "cn_def": "穿衣；打扮",
    "en_def": "to put on clothes; to wear a certain kind of clothes",
    "sentence": "A: Should I wear a suit to the interview at the law firm tomorrow, or is a shirt and trousers good enough? B: Law firms are usually quite formal, so I would {{BLANK}} in a dark suit and a plain tie, because it's better to look too professional than too casual on your first visit.",
    "cn": "A：明天去律師事務所面試應該穿西裝，還是穿襯衫和長褲就夠了？ B：律師事務所通常相當正式，所以我會【穿】深色西裝搭配素色領帶，因為第一次拜訪時看起來太專業總比太隨便好。"
  },
  {
    "word": "breakfast",
    "pos": "n.",
    "cn_def": "早餐",
    "en_def": "the first meal of the day",
    "sentence": "A: What time should the guests come down to the hotel restaurant tomorrow, since the bus to the trade fair leaves at eight? B: {{BLANK}} is served from six-thirty until nine-thirty, but I'd recommend going down by seven, because the restaurant gets very crowded when the tour groups arrive.",
    "cn": "A：既然明天往商展的巴士八點出發，客人們應該幾點下樓到飯店餐廳？ B：【早餐】供應時間從六點半到九點半，但我建議七點前下去，因為旅行團到了以後餐廳會非常擁擠。"
  },
  {
    "word": "commute",
    "pos": "v.",
    "cn_def": "通勤",
    "en_def": "to travel regularly between your home and your workplace",
    "sentence": "A: Why did Sarah decide to rent an apartment near the office instead of staying with her parents in the suburbs? B: She had to {{BLANK}} for almost two hours each way by bus and train, so she was always exhausted, and now she can walk to work in ten minutes.",
    "cn": "A：莎拉為什麼決定在辦公室附近租公寓，而不繼續和父母住在郊區？ B：她以前單程要搭公車和火車【通勤】將近兩小時，所以總是筋疲力盡，現在她走路十分鐘就能到公司。"
  },
  {
    "word": "work",
    "pos": "v.",
    "cn_def": "工作",
    "en_def": "to do a job, usually to earn money",
    "sentence": "A: Are you going to the company barbecue on Saturday afternoon, or do you have other plans for the long weekend? B: Unfortunately, I have to {{BLANK}} at the airport counter until five, because two of my colleagues are sick, but I'll try to join you all for dinner later.",
    "cn": "A：你週六下午會參加公司烤肉嗎？還是長週末有其他計畫？ B：很可惜，我得在機場櫃台【工作】到五點，因為我有兩位同事生病了，但我晚點會試著和你們一起吃晚餐。"
  },
  {
    "word": "study",
    "pos": "v.",
    "cn_def": "讀書；學習",
    "en_def": "to spend time learning about a subject",
    "sentence": "A: How are you preparing for the accounting certificate exam next month while you're also training the new interns? B: I {{BLANK}} for an hour every evening after dinner, and on Saturdays I go to the library because it's much quieter than my apartment, where the neighbors play loud music.",
    "cn": "A：你一邊訓練新實習生，一邊要怎麼準備下個月的會計證照考試？ B：我每天晚餐後【讀書】一小時，週六則去圖書館，因為那裡比我的公寓安靜多了，我的鄰居會大聲放音樂。"
  },
  {
    "word": "task",
    "pos": "n.",
    "cn_def": "任務；工作",
    "en_def": "a piece of work that must be done",
    "sentence": "A: You look really busy today, so is there anything I can do to help you before the sales report is due at five? B: Thanks, that would be great, because the most boring {{BLANK}} is checking all the numbers in the spreadsheet, so could you compare them with last month's figures?",
    "cn": "A：你今天看起來真的很忙，在業績報告五點截止前，有什麼我能幫忙的嗎？ B：謝謝，那太好了，因為最無聊的【工作】是核對試算表中的所有數字，你可以幫我和上個月的數據做比較嗎？"
  },
  {
    "word": "meeting",
    "pos": "n.",
    "cn_def": "會議",
    "en_def": "an event where people come together to discuss something",
    "sentence": "A: Why are so many people waiting outside the conference room on the third floor this morning? B: The weekly team {{BLANK}} is running late, because the director wanted to discuss the new budget in detail, so the marketing staff can't start their presentation until the room is free.",
    "cn": "A：今天早上三樓會議室外面為什麼有那麼多人在等？ B：每週的團隊【會議】延誤了，因為主管想詳細討論新預算，所以行銷人員要等會議室空出來才能開始簡報。"
  },
  {
    "word": "lunch",
    "pos": "n.",
    "cn_def": "午餐",
    "en_def": "the meal you eat in the middle of the day",
    "sentence": "A: Would you like to try the new Thai restaurant across the street today, or are you too busy with the client project? B: I'd love to, but I only have thirty minutes for {{BLANK}} because the client is calling at one, so let's order takeout and eat in the staff room instead.",
    "cn": "A：你今天想試試對街新開的泰式餐廳嗎？還是你忙著客戶的專案？ B：我很想去，但我只有三十分鐘吃【午餐】，因為客戶一點會打電話來，所以我們改成叫外帶，在員工休息室吃吧。"
  },
  {
    "word": "break",
    "pos": "n.",
    "cn_def": "休息時間",
    "en_def": "a short time when you stop working to rest",
    "sentence": "A: How long have the factory workers been on the production line this morning without stopping? B: They started at seven, so it's almost three hours now, and I think we should give everyone a fifteen-minute {{BLANK}} to drink some water and sit down before the next shipment arrives.",
    "cn": "A：工廠工人今天早上在生產線上連續工作多久了？ B：他們七點開始，所以現在快三個小時了，我想我們應該讓大家有十五分鐘的【休息時間】喝點水、坐一下，再迎接下一批貨。"
  },
  {
    "word": "exercise",
    "pos": "v.",
    "cn_def": "運動",
    "en_def": "to move your body to stay healthy and strong",
    "sentence": "A: How do you stay so energetic during the busy tax season, when everyone else in the office looks tired? B: I {{BLANK}} at the gym near the station for half an hour before I come in each morning, and I also try to go to bed before eleven, even when there's a lot to do.",
    "cn": "A：在忙碌的報稅季，辦公室其他人都看起來很累，你怎麼還能保持那麼有活力？ B：我每天早上進公司前會在車站附近的健身房【運動】半小時，而且即使事情很多，我也盡量十一點前上床睡覺。"
  },
  {
    "word": "relax",
    "pos": "v.",
    "cn_def": "放鬆",
    "en_def": "to rest and become calm",
    "sentence": "A: What are you planning to do after you finish the big product launch next Friday? B: I've booked two nights at a quiet hot spring hotel in the mountains, so I can turn off my phone and {{BLANK}} for a while, because I've been working late every night this month.",
    "cn": "A：下週五完成大型產品發表會後，你打算做什麼？ B：我在山上一間安靜的溫泉旅館訂了兩晚，這樣我可以關掉手機好好【放鬆】一下，因為這個月我每天晚上都工作到很晚。"
  },
  {
    "word": "hobby",
    "pos": "n.",
    "cn_def": "嗜好",
    "en_def": "an activity you do for fun in your free time",
    "sentence": "A: What do you usually do on weekends to forget about the pressure of your job at the bank? B: My favorite {{BLANK}} is gardening, so I spend most Saturday mornings growing tomatoes and herbs on my balcony, and sometimes I bring the extra vegetables to the office for my colleagues.",
    "cn": "A：你週末通常做什麼來忘掉銀行工作的壓力？ B：我最喜歡的【嗜好】是園藝，所以大多數週六早上我都在陽台種番茄和香草，有時候會把多的蔬菜帶到辦公室給同事。"
  },
  {
    "word": "dinner",
    "pos": "n.",
    "cn_def": "晚餐；晚宴",
    "en_def": "the main meal of the evening",
    "sentence": "A: Has anyone booked a restaurant for the visitors from our partner company in Singapore yet? B: Yes, I reserved a private room at the seafood restaurant by the harbor, and the general manager will host the {{BLANK}} at seven, right after the factory tour finishes.",
    "cn": "A：有人已經幫新加坡合作公司的訪客訂好餐廳了嗎？ B：有，我在港邊的海鮮餐廳訂了包廂，工廠參觀結束後，總經理七點會主持【晚宴】。"
  },
  {
    "word": "family",
    "pos": "n.",
    "cn_def": "家人；家庭",
    "en_def": "a group of people who are related, such as parents and children",
    "sentence": "A: Why did Mr. Chen turn down the promotion to the Shanghai office, even though the salary was much higher? B: He said he wanted to spend more time with his {{BLANK}}, because his children are still in elementary school and his wife has just started a new job in Taipei.",
    "cn": "A：陳先生為什麼拒絕調到上海辦公室的升遷機會，即使薪水高很多？ B：他說他想多花時間陪【家人】，因為他的孩子還在讀小學，而他太太剛在台北開始新工作。"
  },
  {
    "word": "read",
    "pos": "v.",
    "cn_def": "閱讀",
    "en_def": "to look at and understand written words",
    "sentence": "A: What do you usually do on the long train ride to the head office in Kaohsiung every Monday morning? B: I like to {{BLANK}} business magazines and industry news on my tablet, because it helps me learn about our competitors, and I sometimes find useful ideas for the weekly sales meeting.",
    "cn": "A：每週一早上搭長途火車到高雄總公司，你通常都做什麼？ B：我喜歡在平板上【閱讀】商業雜誌和產業新聞，因為這能幫助我了解競爭對手，有時候也能找到每週業務會議用得上的好點子。"
  },
  {
    "word": "watch",
    "pos": "v.",
    "cn_def": "觀看",
    "en_def": "to look at something for a period of time",
    "sentence": "A: How did the new employees learn to use the online ordering system so quickly last week? B: The trainer asked them to {{BLANK}} a short video that shows every step, and then they practiced with sample orders for an hour before they started taking real calls from customers.",
    "cn": "A：新員工上週怎麼這麼快就學會使用線上訂購系統？ B：訓練員請他們【觀看】一段示範每個步驟的短片，然後他們用範例訂單練習了一小時，才開始接聽客戶的真實來電。"
  },
  {
    "word": "plan",
    "pos": "v.",
    "cn_def": "計劃；規劃",
    "en_def": "to decide in detail what you will do",
    "sentence": "A: How do you manage to finish so many projects every week without ever staying late at the office? B: Every Monday morning, I {{BLANK}} my whole week in a notebook, putting the most important jobs first, so I always know exactly what to do next and rarely waste any time.",
    "cn": "A：你怎麼能每週完成那麼多專案，卻從來不用在辦公室待到很晚？ B：每週一早上，我會在筆記本上【規劃】一整週，把最重要的工作排在最前面，所以我總是清楚知道下一步要做什麼，很少浪費時間。"
  },
  {
    "word": "prepare",
    "pos": "v.",
    "cn_def": "準備",
    "en_def": "to make something ready",
    "sentence": "A: What does the restaurant staff need to do before the doors open for the busy Sunday lunch crowd? B: The cooks {{BLANK}} the vegetables and sauces by ten, while the servers set the tables and check the reservation list, so that everything runs smoothly when the first guests arrive.",
    "cn": "A：在週日繁忙的午餐人潮開門前，餐廳員工需要做哪些事？ B：廚師們十點前要【準備】好蔬菜和醬汁，服務生則擺設餐桌並核對訂位名單，好讓第一批客人到達時一切順利。"
  },
  {
    "word": "organize",
    "pos": "v.",
    "cn_def": "整理；安排",
    "en_def": "to arrange things in a clear order",
    "sentence": "A: Why is the shared drive so hard to use, when I need to find last year's contracts quickly? B: Nobody has had time to {{BLANK}} the files properly, so documents are saved in random folders, but the IT team promised to sort them by year and client next week.",
    "cn": "A：當我需要快速找到去年的合約時，共用硬碟為什麼這麼難用？ B：沒有人有時間好好【整理】檔案，所以文件被存在隨便的資料夾裡，不過資訊部門答應下週會按年份和客戶分類。"
  },
  {
    "word": "clean",
    "pos": "v.",
    "cn_def": "打掃；清潔",
    "en_def": "to remove dirt from something",
    "sentence": "A: Who is responsible for the kitchen on our floor, because the sink is full of dirty cups again this afternoon? B: Each department takes turns, and this week it's the design team's job to {{BLANK}} it, so I'll send them a friendly reminder before they leave tonight.",
    "cn": "A：我們這層樓的茶水間由誰負責？今天下午水槽裡又堆滿了髒杯子。 B：各部門輪流負責，這週輪到設計團隊【打掃】，所以我會在他們今晚下班前友善地提醒一下。"
  },
  {
    "word": "cook",
    "pos": "v.",
    "cn_def": "烹煮；做飯",
    "en_def": "to make food by heating it",
    "sentence": "A: Do you usually eat out after work, or do you make your own meals during the week to save money? B: I {{BLANK}} a big pot of soup and some rice on Sunday evenings, and then I bring a box to the office every day, which is healthier and much cheaper than buying lunch.",
    "cn": "A：你下班後通常外食，還是平日自己煮飯省錢？ B：我每週日晚上會【煮】一大鍋湯和一些飯，然後每天帶一盒到辦公室，這比買午餐健康又便宜多了。"
  },
  {
    "word": "rest",
    "pos": "v.",
    "cn_def": "休息",
    "en_def": "to stop working and relax or sleep",
    "sentence": "A: The doctor said you should stay home for a few days, so why are you answering emails from your bed? B: I know I should {{BLANK}}, but the client needs the price list by tomorrow, so I'll send it this morning and then turn off my laptop until Thursday.",
    "cn": "A：醫生說你應該在家待幾天，你為什麼還躺在床上回電子郵件？ B：我知道我應該【休息】，但客戶明天前需要價目表，所以我今天早上寄出後，就會把筆電關掉直到週四。"
  },
  {
    "word": "reflect",
    "pos": "v.",
    "cn_def": "反思；回顧",
    "en_def": "to think carefully about something",
    "sentence": "A: Why do you write in a notebook for ten minutes at the end of every working day? B: It helps me {{BLANK}} on what went well and what didn't, so I can learn from my mistakes and make a better plan for the next morning before I go home.",
    "cn": "A：你為什麼每個工作日結束時都要在筆記本上寫十分鐘？ B：這能幫助我【反思】哪些事情做得好、哪些沒做好，讓我從錯誤中學習，並在回家前為隔天早上擬定更好的計畫。"
  },
  {
    "word": "sleep",
    "pos": "v.",
    "cn_def": "睡覺",
    "en_def": "to rest with your eyes closed and your mind not awake",
    "sentence": "A: You look much more awake than last week, so did you finally fix the noise problem in your apartment? B: Yes, my neighbors moved out, so now I can {{BLANK}} for seven or eight hours without waking up, and I can concentrate much better during long meetings at work.",
    "cn": "A：你看起來比上週精神多了，你終於解決公寓的噪音問題了嗎？ B：是的，我的鄰居搬走了，所以現在我可以【睡】七、八個小時都不會醒來，在公司開長時間的會議時也能更專心。"
  },
  {
    "word": "bedtime",
    "pos": "n.",
    "cn_def": "就寢時間",
    "en_def": "the time when you usually go to bed",
    "sentence": "A: How do you stop yourself from checking work emails late at night, since your boss often sends messages after ten? B: I put my phone in the living room an hour before {{BLANK}}, and I read a novel instead, so I fall asleep more easily and feel fresh the next morning.",
    "cn": "A：既然你老闆常在十點後傳訊息，你怎麼克制自己深夜不查看工作郵件？ B：我在【就寢時間】前一小時把手機放在客廳，改讀一本小說，這樣我比較容易入睡，隔天早上也覺得精神飽滿。"
  },
  {
    "word": "balance",
    "pos": "v.",
    "cn_def": "平衡；兼顧",
    "en_def": "to give the right amount of time or attention to different things",
    "sentence": "A: How does your manager manage to raise three young children while she leads such a large sales team? B: She works from home on Wednesdays and never takes calls after seven, so she can {{BLANK}} her job and her home life, and she encourages all of us to do the same.",
    "cn": "A：你的經理帶領這麼大的業務團隊，怎麼還能養育三個年幼的孩子？ B：她每週三在家工作，七點後從不接電話，所以能【兼顧】工作和家庭生活，她也鼓勵我們所有人這樣做。"
  }
];

const MCQS = [
  {
    "q": "Mr. Lee follows the same _____ every morning. He checks his emails, makes coffee, and then calls the factory manager.",
    "options": [
      "routine",
      "hobby",
      "task",
      "bedtime"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Checking your phone during meetings is a bad _____. Many managers think it shows a lack of respect for the speaker.",
    "options": [
      "timetable",
      "habit",
      "break",
      "breakfast"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The director has a very busy _____ this week. She can only meet with you on Thursday at three o'clock.",
    "options": [
      "hobby",
      "habit",
      "schedule",
      "breakfast"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The bus _____ changed on the first of the month. Buses to the industrial park now leave every twenty minutes.",
    "options": [
      "routine",
      "task",
      "hobby",
      "timetable"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Please _____ me up when the plane lands in Singapore. I want to sleep for the whole flight.",
    "options": [
      "rise",
      "wake",
      "rest",
      "relax"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Farmers in this valley usually _____ before five o'clock. They want to finish the hardest jobs before the afternoon heat.",
    "options": [
      "relax",
      "reflect",
      "watch",
      "rise"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "After the long flight, the passengers stood up to _____ their legs. Some walked slowly up and down the aisle.",
    "options": [
      "stretch",
      "organize",
      "balance",
      "brush"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Many employees _____ to the city center by subway every day. The company gives them a monthly transport allowance.",
    "options": [
      "reflect",
      "sleep",
      "commute",
      "exercise"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Nurses at this hospital often _____ night shifts. They receive extra pay for every hour after ten o'clock.",
    "options": [
      "cook",
      "read",
      "watch",
      "work"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Several staff members _____ Japanese after work at a language school. The company pays half of their course fees.",
    "options": [
      "study",
      "commute",
      "rest",
      "organize"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Writing the monthly sales report is a difficult _____. It usually takes Linda two full days to finish it.",
    "options": [
      "bedtime",
      "hobby",
      "task",
      "breakfast"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The _____ with the new supplier has been moved to Friday. Please bring the price lists and the product samples.",
    "options": [
      "routine",
      "meeting",
      "habit",
      "bedtime"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The workshop will have a short _____ at ten-thirty. Coffee and snacks will be served in the hallway.",
    "options": [
      "schedule",
      "habit",
      "break",
      "task"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Doctors advise office workers to _____ for at least thirty minutes a day. Walking or swimming are good choices.",
    "options": [
      "commute",
      "exercise",
      "reflect",
      "dress"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The hotel spa is a perfect place to _____ after a long day of meetings. Guests can enjoy a massage or a hot bath.",
    "options": [
      "organize",
      "plan",
      "clean",
      "relax"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Photography started as a _____ for Mr. Wu. Now he sells his pictures to travel magazines and earns extra money.",
    "options": [
      "hobby",
      "timetable",
      "schedule",
      "meeting"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Please _____ the contract carefully before you sign it. If anything is unclear, call our legal department.",
    "options": [
      "cook",
      "read",
      "sleep",
      "rise"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Visitors can _____ the workers make chocolate through a large glass window. The factory tour lasts about forty minutes.",
    "options": [
      "plan",
      "commute",
      "watch",
      "rest"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "We need to _____ the company trip carefully this year. Last year the bus was too small for everyone.",
    "options": [
      "plan",
      "stretch",
      "sleep",
      "wake"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The assistant will _____ the slides for Monday's presentation. She needs the latest sales figures by Friday afternoon.",
    "options": [
      "rest",
      "sleep",
      "relax",
      "prepare"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Ms. Lin was asked to _____ the annual staff party. She has already booked a hotel ballroom and a band.",
    "options": [
      "organize",
      "rise",
      "commute",
      "reflect"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "A team comes every evening to _____ the offices. They empty the trash cans and vacuum the carpets.",
    "options": [
      "study",
      "wake",
      "reflect",
      "clean"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The chef will _____ a special meal for the visiting clients. It includes local fish and fresh vegetables.",
    "options": [
      "commute",
      "cook",
      "stretch",
      "rise"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "You have worked twelve hours without stopping. Please go home and _____ before tomorrow's long meeting.",
    "options": [
      "brush",
      "organize",
      "rest",
      "watch"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "After the project ended, the team met to _____ on what they had learned. They wrote down ideas for next time.",
    "options": [
      "wake",
      "cook",
      "dress",
      "reflect"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Hotel guests complained that they could not _____ because of the noise from the street. The manager moved them to quieter rooms.",
    "options": [
      "organize",
      "prepare",
      "sleep",
      "plan"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "It is not easy to _____ a full-time job and evening classes. Kevin often studies on the train.",
    "options": [
      "balance",
      "rise",
      "wake",
      "rest"
    ],
    "answer": 0,
    "vocabIndex": 34
  },
  {
    "q": "Employees should _____ neatly when they meet clients. Jeans and T-shirts are only allowed on Fridays.",
    "options": [
      "commute",
      "dress",
      "reflect",
      "rise"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The hotel price includes a free _____ buffet. It is served in the lobby restaurant from six to ten.",
    "options": [
      "bedtime",
      "routine",
      "breakfast",
      "task"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "My son's _____ is nine o'clock on school nights. On weekends, he is allowed to stay up a little later.",
    "options": [
      "bedtime",
      "task",
      "meeting",
      "hobby"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "routine": {
    "pos": "n.",
    "en_def": "the usual order of things you do every day",
    "cn_def": "例行公事；日常作息"
  },
  "habit": {
    "pos": "n.",
    "en_def": "something you do often, almost without thinking",
    "cn_def": "習慣"
  },
  "schedule": {
    "pos": "n.",
    "en_def": "a plan that lists the times when things will happen",
    "cn_def": "時間表；行程"
  },
  "timetable": {
    "pos": "n.",
    "en_def": "a list that shows when buses, trains or classes leave or happen",
    "cn_def": "時刻表"
  },
  "wake": {
    "pos": "v.",
    "en_def": "to stop sleeping",
    "cn_def": "醒來；叫醒"
  },
  "rise": {
    "pos": "v.",
    "en_def": "to get out of bed in the morning; to go up",
    "cn_def": "起床；上升"
  },
  "stretch": {
    "pos": "v.",
    "en_def": "to make your arms, legs or body long and straight",
    "cn_def": "伸展"
  },
  "shower": {
    "pos": "v.",
    "en_def": "to wash your body while standing under running water",
    "cn_def": "淋浴；沖澡"
  },
  "brush": {
    "pos": "v.",
    "en_def": "to clean or make something tidy with a brush",
    "cn_def": "刷；梳"
  },
  "dress": {
    "pos": "v.",
    "en_def": "to put on clothes; to wear a certain kind of clothes",
    "cn_def": "穿衣；打扮"
  },
  "breakfast": {
    "pos": "n.",
    "en_def": "the first meal of the day",
    "cn_def": "早餐"
  },
  "commute": {
    "pos": "v.",
    "en_def": "to travel regularly between your home and your workplace",
    "cn_def": "通勤"
  },
  "work": {
    "pos": "v.",
    "en_def": "to do a job, usually to earn money",
    "cn_def": "工作"
  },
  "study": {
    "pos": "v.",
    "en_def": "to spend time learning about a subject",
    "cn_def": "讀書；學習"
  },
  "task": {
    "pos": "n.",
    "en_def": "a piece of work that must be done",
    "cn_def": "任務；工作"
  },
  "meeting": {
    "pos": "n.",
    "en_def": "an event where people come together to discuss something",
    "cn_def": "會議"
  },
  "lunch": {
    "pos": "n.",
    "en_def": "the meal you eat in the middle of the day",
    "cn_def": "午餐"
  },
  "break": {
    "pos": "n.",
    "en_def": "a short time when you stop working to rest",
    "cn_def": "休息時間"
  },
  "exercise": {
    "pos": "v.",
    "en_def": "to move your body to stay healthy and strong",
    "cn_def": "運動"
  },
  "relax": {
    "pos": "v.",
    "en_def": "to rest and become calm",
    "cn_def": "放鬆"
  },
  "hobby": {
    "pos": "n.",
    "en_def": "an activity you do for fun in your free time",
    "cn_def": "嗜好"
  },
  "dinner": {
    "pos": "n.",
    "en_def": "the main meal of the evening",
    "cn_def": "晚餐；晚宴"
  },
  "family": {
    "pos": "n.",
    "en_def": "a group of people who are related, such as parents and children",
    "cn_def": "家人；家庭"
  },
  "read": {
    "pos": "v.",
    "en_def": "to look at and understand written words",
    "cn_def": "閱讀"
  },
  "watch": {
    "pos": "v.",
    "en_def": "to look at something for a period of time",
    "cn_def": "觀看"
  },
  "plan": {
    "pos": "v.",
    "en_def": "to decide in detail what you will do",
    "cn_def": "計劃；規劃"
  },
  "prepare": {
    "pos": "v.",
    "en_def": "to make something ready",
    "cn_def": "準備"
  },
  "organize": {
    "pos": "v.",
    "en_def": "to arrange things in a clear order",
    "cn_def": "整理；安排"
  },
  "clean": {
    "pos": "v.",
    "en_def": "to remove dirt from something",
    "cn_def": "打掃；清潔"
  },
  "cook": {
    "pos": "v.",
    "en_def": "to make food by heating it",
    "cn_def": "烹煮；做飯"
  },
  "rest": {
    "pos": "v.",
    "en_def": "to stop working and relax or sleep",
    "cn_def": "休息"
  },
  "reflect": {
    "pos": "v.",
    "en_def": "to think carefully about something",
    "cn_def": "反思；回顧"
  },
  "sleep": {
    "pos": "v.",
    "en_def": "to rest with your eyes closed and your mind not awake",
    "cn_def": "睡覺"
  },
  "bedtime": {
    "pos": "n.",
    "en_def": "the time when you usually go to bed",
    "cn_def": "就寢時間"
  },
  "balance": {
    "pos": "v.",
    "en_def": "to give the right amount of time or attention to different things",
    "cn_def": "平衡；兼顧"
  }
};

const EXTRA_GLOSSES = {};
