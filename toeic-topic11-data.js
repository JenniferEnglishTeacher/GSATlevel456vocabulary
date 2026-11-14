// Topic 11 Quiz Data: Alone 獨處
// Source word list: https://www.examword.com/group-topic/alone — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T11 - Alone 獨處",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "socialize",
    "pos": "v.",
    "cn_def": "交際；社交；與人往來",
    "en_def": "to spend time with other people in a friendly way",
    "sentence": "A: Why does the company organize a dinner party for all the staff every three months, even though it costs quite a lot of money? B: The managers want employees from different departments to {{BLANK}} outside the office, because people who know each other well usually communicate better and solve problems faster at work.",
    "cn": "A：為什麼公司每三個月都為全體員工舉辦晚餐派對，即使花費相當多？ B：主管們希望不同部門的員工能在辦公室以外【交流往來】，因為彼此熟悉的人在工作上通常溝通得更好，解決問題也更快。"
  },
  {
    "word": "social life",
    "pos": "n.phr.",
    "cn_def": "社交生活",
    "en_def": "the time you spend with friends and doing activities for fun",
    "sentence": "A: You've been working until ten o'clock every night since you got promoted, so do you still have time to see your friends? B: Not really, my {{BLANK}} has almost disappeared, so I've decided to leave the office by seven at least three days a week and join my friends for dinner.",
    "cn": "A：你升職後每天都工作到晚上十點，還有時間見朋友嗎？ B：其實沒有，我的【社交生活】幾乎消失了，所以我決定每週至少三天七點前下班，和朋友一起吃晚餐。"
  },
  {
    "word": "solitude",
    "pos": "n.",
    "cn_def": "獨處；孤獨（多指享受的）",
    "en_def": "the state of being alone, especially when you enjoy it",
    "sentence": "A: Why does the writer rent a small cabin in the mountains every winter instead of working from her apartment in the city? B: She needs complete {{BLANK}} to finish her novels, because there are no phone calls, visitors, or traffic noise there, so she can focus on writing for ten hours a day.",
    "cn": "A：為什麼那位作家每年冬天都在山上租一間小木屋，而不在城裡的公寓工作？ B：她需要完全的【獨處】才能完成小說，因為那裡沒有電話、訪客或車聲，她可以一天專心寫作十個小時。"
  },
  {
    "word": "solitary",
    "pos": "adj.",
    "cn_def": "單獨的；獨自的；孤獨的",
    "en_def": "done alone or existing alone",
    "sentence": "A: You used to love working with large teams, so why did you accept a job as a night guard at the museum? B: I actually enjoy {{BLANK}} work at this stage of my life, because I can read during quiet hours, and I don't have to attend long meetings or deal with office politics.",
    "cn": "A：你以前很喜歡和大團隊一起工作，為什麼接受了博物館夜間警衛的工作？ B：在人生的這個階段，我其實很享受【獨自一人的】工作，因為安靜的時候我可以看書，而且不用參加冗長的會議或應付辦公室政治。"
  },
  {
    "word": "self-reliant",
    "pos": "adj.",
    "cn_def": "自立的；依靠自己的",
    "en_def": "able to do things and make decisions without help from others",
    "sentence": "A: Your son moved to Australia for university last year, so how is he managing without his family nearby? B: He has become very {{BLANK}}, because he cooks his own meals, works part-time at a café to pay his rent, and solves most of his problems without calling us for help.",
    "cn": "A：你兒子去年去澳洲念大學，家人不在身邊，他過得怎麼樣？ B：他變得非常【自立】，因為他自己煮飯、在咖啡館兼職付房租，大部分的問題都自己解決，不會打電話向我們求助。"
  },
  {
    "word": "recharge",
    "pos": "v.",
    "cn_def": "恢復精力；充電",
    "en_def": "to rest so that you get your energy back",
    "sentence": "A: Why do you always spend your lunch break walking alone in the park instead of eating with the team? B: I talk to customers on the phone all morning, so I need some quiet time to {{BLANK}}, and a short walk helps me feel fresh and focused for the busy afternoon.",
    "cn": "A：為什麼你午休總是獨自在公園散步，而不和團隊一起吃飯？ B：我整個早上都在和顧客講電話，所以需要一些安靜的時間來【恢復精力】，短暫的散步能讓我在忙碌的下午感到清新又專注。"
  },
  {
    "word": "reflect",
    "pos": "v.",
    "cn_def": "反思；深思",
    "en_def": "to think carefully and seriously about something",
    "sentence": "A: Why did the manager give everyone a notebook at the end of the long project and ask us to write in it? B: She wants each of us to {{BLANK}} on what went well and what went wrong, so that we can avoid the same problems when we start the next project in January.",
    "cn": "A：為什麼經理在漫長的專案結束時發給每個人一本筆記本，要我們在上面寫東西？ B：她希望我們每個人【反思】哪些地方做得好、哪些地方出了錯，好讓我們一月開始下一個專案時，能避免同樣的問題。"
  },
  {
    "word": "relax",
    "pos": "v.",
    "cn_def": "放鬆；休息",
    "en_def": "to rest and become calm, especially after work",
    "sentence": "A: You look really tired after such a busy week at the trade fair, so what are your plans for the weekend? B: I'm going to stay home, turn off my phone, and just {{BLANK}} with a good book and some music, because I need to rest before the next sales trip on Monday.",
    "cn": "A：在商展忙了這麼一整週，你看起來好累，週末有什麼計畫？ B：我要待在家、關掉手機，就看本好書、聽點音樂【放鬆】一下，因為在週一下一趟業務出差前，我需要休息。"
  },
  {
    "word": "relief",
    "pos": "n.",
    "cn_def": "寬慰；鬆了一口氣",
    "en_def": "a feeling of happiness because something unpleasant has ended or not happened",
    "sentence": "A: How did you feel when the client finally called and said they had approved our design, after making us change it five times? B: It was a huge {{BLANK}}, because the whole team had worked every weekend for a month, and we were worried that we might lose the contract.",
    "cn": "A：在客戶要我們修改五次設計後，終於打電話來說核准了，你有什麼感覺？ B：真是大大【鬆了一口氣】，因為整個團隊一個月來每個週末都在工作，我們很擔心可能會失去這份合約。"
  },
  {
    "word": "peaceful",
    "pos": "adj.",
    "cn_def": "寧靜的；平和的",
    "en_def": "quiet and calm, without noise or trouble",
    "sentence": "A: Why did you choose that small hotel by the lake instead of the big one near the conference center? B: The big hotel is always full of noisy tour groups, but the lake hotel is so {{BLANK}} that I can sleep well and prepare for my presentations without any distractions.",
    "cn": "A：為什麼你選擇湖邊那間小飯店，而不選會議中心附近的大飯店？ B：大飯店總是擠滿吵鬧的旅行團，但湖邊的飯店非常【寧靜】，我可以睡得很好，並在沒有任何干擾的情況下準備簡報。"
  },
  {
    "word": "release",
    "pos": "v.",
    "cn_def": "釋放；發洩",
    "en_def": "to let a feeling or energy go so that you feel better",
    "sentence": "A: Why does the company now offer free boxing classes in the gym after work on Tuesdays and Thursdays? B: Many employees said they feel tense after long days at their desks, and hitting a punching bag helps them {{BLANK}} stress in a healthy way before they go home.",
    "cn": "A：為什麼公司現在每週二和週四下班後在健身房提供免費拳擊課？ B：許多員工說，在辦公桌前坐了一整天後感覺很緊繃，打沙包能幫助他們在回家前用健康的方式【釋放】壓力。"
  },
  {
    "word": "pressure",
    "pos": "n.",
    "cn_def": "壓力",
    "en_def": "a feeling of worry caused by difficult demands or too much work",
    "sentence": "A: Why has Kevin been so quiet and tired lately, when he used to be the most cheerful person in the office? B: He is under a lot of {{BLANK}} because he has to finish three big reports before the end of the month, and his manager keeps adding new tasks to his list.",
    "cn": "A：凱文以前是辦公室裡最開朗的人，為什麼最近這麼安靜又疲倦？ B：他承受很大的【壓力】，因為他必須在月底前完成三份大型報告，而他的主管還不斷在他的清單上增加新任務。"
  },
  {
    "word": "belong to somebody",
    "pos": "v.phr.",
    "cn_def": "歸屬於某人；有歸屬感",
    "en_def": "to feel that you are an important part of someone's life or a group",
    "sentence": "A: Why did your elderly neighbor start volunteering at the animal shelter after her husband passed away last year? B: She said that caring for the dogs makes her feel that she still has a purpose and can {{BLANK}}, because the animals are always so happy to see her each morning.",
    "cn": "A：為什麼你年長的鄰居在她先生去年過世後，開始到動物收容所當志工？ B：她說照顧狗狗讓她覺得自己仍有生活目標，並且能【有所歸屬】，因為每天早上動物們見到她總是非常開心。"
  },
  {
    "word": "introvert",
    "pos": "n.",
    "cn_def": "內向的人",
    "en_def": "a quiet person who prefers to spend time alone or with a few people",
    "sentence": "A: Lisa is one of our best programmers, but she never joins the team lunches or the after-work parties, so is something wrong? B: Nothing is wrong, she's just an {{BLANK}}, so she prefers to eat quietly at her desk and recharge her energy before the afternoon meetings.",
    "cn": "A：麗莎是我們最優秀的程式設計師之一，但她從不參加團隊午餐或下班後的聚會，是出了什麼問題嗎？ B：沒什麼問題，她只是個【內向的人】，所以比較喜歡安靜地在座位上吃飯，在下午的會議前恢復精力。"
  },
  {
    "word": "attractive",
    "pos": "adj.",
    "cn_def": "有吸引力的；誘人的",
    "en_def": "pleasant or interesting, so that people want it",
    "sentence": "A: Why are so many young professionals choosing to live alone in small studio apartments in the city center? B: Living alone is very {{BLANK}} to them, because they can decide their own schedules, keep the space exactly how they like it, and walk to work in just ten minutes.",
    "cn": "A：為什麼這麼多年輕上班族選擇獨自住在市中心的小套房？ B：獨居對他們來說非常【有吸引力】，因為他們可以自己決定作息、把空間維持成自己喜歡的樣子，而且走路十分鐘就能到公司。"
  },
  {
    "word": "regulate",
    "pos": "v.",
    "cn_def": "調節；控制；管理",
    "en_def": "to control something so that it stays at the right level",
    "sentence": "A: The new office building has a smart system that turns the heating on and off by itself, so how does it work? B: Sensors in every room {{BLANK}} the temperature throughout the day, so the building stays comfortable for workers while using about thirty percent less energy than our old office.",
    "cn": "A：新辦公大樓有一套會自動開關暖氣的智慧系統，它是怎麼運作的？ B：每個房間的感測器整天都在【調節】溫度，所以大樓能讓員工保持舒適，同時比我們的舊辦公室少用約百分之三十的能源。"
  },
  {
    "word": "emotion",
    "pos": "n.",
    "cn_def": "情緒；情感",
    "en_def": "a strong feeling such as love, anger, fear, or joy",
    "sentence": "A: How did the staff react when the director announced that the company was closing the factory where many of them had worked for years? B: There was a lot of {{BLANK}} in the room, because some people cried, others were angry, and everyone was worried about finding new jobs.",
    "cn": "A：當總監宣布公司要關閉許多員工工作多年的工廠時，員工有什麼反應？ B：會議室裡充滿了【情緒】，因為有些人哭了，有些人很生氣，而且每個人都擔心要找新工作。"
  },
  {
    "word": "avoid",
    "pos": "v.",
    "cn_def": "避免；避開；迴避",
    "en_def": "to stay away from someone or something, or to stop something from happening",
    "sentence": "A: Why do you always take the earliest train to the office, even though our working day doesn't start until nine? B: I like to {{BLANK}} the crowds at rush hour, because the trains after eight o'clock are so full that I can't sit down, read, or even think clearly.",
    "cn": "A：為什麼你總是搭最早的火車去辦公室，即使我們九點才開始上班？ B：我喜歡【避開】尖峰時段的人潮，因為八點以後的火車擠到我沒辦法坐下、看書，甚至無法好好思考。"
  },
  {
    "word": "scary",
    "pos": "adj.",
    "cn_def": "可怕的；嚇人的",
    "en_def": "making you feel afraid",
    "sentence": "A: How did you feel when you moved to Berlin alone for your first overseas job, without knowing anyone there? B: It was really {{BLANK}} at first, because I didn't speak German and got lost often, but after a few months I made friends at work and started to enjoy the city.",
    "cn": "A：你獨自搬去柏林做第一份海外工作、在那裡一個人都不認識時，有什麼感覺？ B：一開始真的很【可怕】，因為我不會說德語，又常常迷路，但幾個月後我在工作上交了朋友，開始喜歡這座城市了。"
  },
  {
    "word": "wonder",
    "pos": "v.",
    "cn_def": "想知道；納悶；好奇",
    "en_def": "to think about something and want to know more about it",
    "sentence": "A: The new employee from Canada always eats lunch by herself in the break room and doesn't say much to anyone. B: I {{BLANK}} whether she feels lonely, so let's invite her to join us for lunch tomorrow and ask her some questions about her life back home.",
    "cn": "A：那位從加拿大來的新員工總是自己一個人在休息室吃午餐，也不太和任何人說話。 B：我【想知道】她是否覺得孤單，所以我們明天邀請她和我們一起吃午餐，並問問她在家鄉生活的事吧。"
  },
  {
    "word": "stressful",
    "pos": "adj.",
    "cn_def": "壓力大的；令人緊張的",
    "en_def": "making you feel worried and nervous",
    "sentence": "A: How was your first month as a manager at the call center, and do you still enjoy the job? B: It has been very {{BLANK}}, because I have to deal with angry customers, train new staff, and meet sales targets, but I'm learning a lot and starting to feel more confident.",
    "cn": "A：你在客服中心當經理的第一個月怎麼樣？你還喜歡這份工作嗎？ B：一直都【壓力很大】，因為我必須應付生氣的顧客、訓練新員工並達成業績目標，但我學到很多，也開始比較有自信了。"
  },
  {
    "word": "triggering",
    "pos": "adj.",
    "cn_def": "引發情緒反應的；觸發的",
    "en_def": "causing someone to have strong, upsetting feelings or memories",
    "sentence": "A: Why did the company add a short warning before the online safety training video about factory accidents? B: Some scenes in the video show serious injuries, and they could be {{BLANK}} for workers who have been in accidents before, so the warning allows them to prepare or ask for another format.",
    "cn": "A：為什麼公司在關於工廠事故的線上安全訓練影片前加了一段簡短的警語？ B：影片中有些畫面顯示嚴重的傷害，對曾經發生過事故的員工來說可能會【引發強烈情緒】，所以警語讓他們可以做好準備或要求其他形式。"
  },
  {
    "word": "burnout",
    "pos": "n.",
    "cn_def": "倦怠；身心俱疲",
    "en_def": "a state of feeling extremely tired and unable to work because of too much stress",
    "sentence": "A: Why did the company decide to give all employees an extra week of paid holiday this year? B: Many staff members were working more than sixty hours a week, and the managers wanted to prevent {{BLANK}} before people became sick or decided to quit their jobs.",
    "cn": "A：為什麼公司決定今年給所有員工多一週的帶薪假？ B：許多員工每週工作超過六十小時，主管們想在大家生病或決定辭職之前，預防【過勞倦怠】。"
  },
  {
    "word": "quietly",
    "pos": "adv.",
    "cn_def": "安靜地；輕聲地",
    "en_def": "without making much noise",
    "sentence": "A: The library on the third floor is the only place in our building where I can concentrate, but people keep chatting there. B: Let's put up a sign asking everyone to talk {{BLANK}} or go to the café downstairs, because many employees use that room to read and prepare important reports.",
    "cn": "A：三樓的圖書室是我們大樓裡唯一能讓我專心的地方，但大家一直在那裡聊天。 B：我們貼一張告示，請大家【輕聲】說話或去樓下咖啡廳，因為很多員工會用那個房間閱讀和準備重要報告。"
  },
  {
    "word": "habit",
    "pos": "n.",
    "cn_def": "習慣",
    "en_def": "something that you do often and regularly, often without thinking about it",
    "sentence": "A: How do you stay so calm and organized, even when we have five deadlines in the same week? B: I have a {{BLANK}} of spending fifteen minutes alone every morning, planning my tasks with a cup of tea before I open any emails or answer any phone calls.",
    "cn": "A：即使我們同一週有五個截止期限，你是怎麼保持這麼冷靜又有條理的？ B：我有一個【習慣】，每天早上會獨自花十五分鐘，在打開任何電子郵件或接任何電話之前，邊喝茶邊規劃我的工作。"
  },
  {
    "word": "bake",
    "pos": "v.",
    "cn_def": "烘烤；烤",
    "en_def": "to cook food such as bread or cake in an oven",
    "sentence": "A: What do you usually do on Sunday afternoons when you live alone and your family is so far away? B: I like to {{BLANK}} bread and cookies in my small kitchen, because it calms me down after a busy week, and I often bring the extra cookies to the office on Monday.",
    "cn": "A：你一個人住、家人又離得那麼遠，週日下午通常都做什麼？ B：我喜歡在我的小廚房裡【烤】麵包和餅乾，因為這能讓我在忙碌的一週後平靜下來，我也常在週一把多的餅乾帶到辦公室。"
  },
  {
    "word": "disturb",
    "pos": "v.",
    "cn_def": "打擾；干擾",
    "en_def": "to interrupt someone when they are trying to work, sleep, or rest",
    "sentence": "A: I need to finish the budget report for the director by four o'clock, but people keep coming to my desk with questions. B: Book the small meeting room for two hours and put a sign on the door asking people not to {{BLANK}} you, and I'll answer any questions for you.",
    "cn": "A：我必須在四點前完成給總監的預算報告，但一直有人到我座位問問題。 B：預約小會議室兩個小時，在門上貼個告示請大家不要【打擾】你，有任何問題我會幫你回答。"
  },
  {
    "word": "explore",
    "pos": "v.",
    "cn_def": "探索；嘗試；探究",
    "en_def": "to look around a new place, or to try new activities, to learn about them",
    "sentence": "A: You moved to Tainan alone for this new job two months ago, so how do you spend your free time when you're not working? B: I {{BLANK}} a different neighborhood every weekend, and I've found some wonderful temples, old streets, and food stalls that most tourists never see.",
    "cn": "A：你兩個月前為了這份新工作獨自搬到台南，不工作的時候都怎麼打發空閒時間？ B：我每個週末都去【探索】一個不同的街區，已經發現了一些很棒的廟宇、老街和大多數觀光客從沒見過的小吃攤。"
  },
  {
    "word": "bookworm",
    "pos": "n.",
    "cn_def": "書蟲；愛看書的人",
    "en_def": "a person who loves reading and spends a lot of time reading",
    "sentence": "A: Do you know what we should buy as a farewell gift for Ms. Kim, who is retiring from the accounting department next week? B: She is a real {{BLANK}} who reads several novels every month, so a gift card for the big bookstore near her apartment would probably make her very happy.",
    "cn": "A：你知道下週從會計部退休的金小姐，我們該買什麼當作送別禮物嗎？ B：她是個真正的【書蟲】，每個月會讀好幾本小說，所以送她公寓附近大型書店的禮券，她大概會很開心。"
  }
];

const MCQS = [
  {
    "q": "The new café has long tables instead of small ones. The owner hopes customers will _____ with each other while they eat.",
    "options": [
      "bake",
      "disturb",
      "regulate",
      "socialize"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Working night shifts made it hard for Ben to see his friends. His _____ improved after he moved to a day job.",
    "options": [
      "social life",
      "burnout",
      "habit",
      "emotion"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The mountain retreat has no internet or television. Guests come to enjoy the _____ and the beautiful views.",
    "options": [
      "pressure",
      "solitude",
      "burnout",
      "emotion"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The lighthouse keeper lived alone on the island for twenty years. He was used to a quiet and _____ life.",
    "options": [
      "stressful",
      "scary",
      "solitary",
      "triggering"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The training program teaches young people to cook, budget, and find jobs. Its goal is to help them become _____.",
    "options": [
      "triggering",
      "scary",
      "stressful",
      "self-reliant"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The company gives staff a short break every two hours. These breaks help workers rest and _____ their energy.",
    "options": [
      "disturb",
      "avoid",
      "recharge",
      "bake"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "At the end of each year, the manager meets each employee. They _____ on the year's successes and set new goals.",
    "options": [
      "reflect",
      "bake",
      "disturb",
      "regulate"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The hotel spa offers massages and quiet rooms. It is the perfect place to _____ after a long business trip.",
    "options": [
      "disturb",
      "relax",
      "regulate",
      "avoid"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The lost suitcase was finally found at the airport in Tokyo. Its owner felt great _____ when she received the call.",
    "options": [
      "burnout",
      "pressure",
      "habit",
      "relief"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The new park has trees, a small lake, and no traffic. Office workers enjoy its _____ atmosphere during lunch.",
    "options": [
      "peaceful",
      "stressful",
      "scary",
      "triggering"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Exercise is a healthy way to deal with a hard day at work. Running helps many people _____ tension and sleep better.",
    "options": [
      "bake",
      "release",
      "wonder",
      "avoid"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The team has only two days to finish the project. Everyone is working under great _____ to meet the deadline.",
    "options": [
      "solitude",
      "relief",
      "pressure",
      "habit"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The shelter finds homes for dogs that were left on the street. Every animal there wants to _____ who will love it.",
    "options": [
      "bake",
      "regulate",
      "disturb",
      "belong to somebody"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Some workers prefer quiet tasks to group meetings. An _____ may do their best work alone in a calm space.",
    "options": [
      "introvert",
      "emotion",
      "burnout",
      "habit"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The company offers a high salary and flexible hours. These benefits make the job very _____ to young graduates.",
    "options": [
      "scary",
      "triggering",
      "attractive",
      "solitary"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The government has new rules for food delivery apps. The laws will _____ how much the apps can charge restaurants.",
    "options": [
      "bake",
      "regulate",
      "wonder",
      "relax"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The actor's speech at the award ceremony moved the audience. His voice was full of _____ as he thanked his family.",
    "options": [
      "burnout",
      "habit",
      "solitude",
      "emotion"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Traffic on the main highway is very heavy after five o'clock. Leave work early to _____ the evening rush.",
    "options": [
      "bake",
      "avoid",
      "reflect",
      "recharge"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Speaking in front of five hundred people can be frightening. The first time felt very _____ for the new director.",
    "options": [
      "scary",
      "peaceful",
      "attractive",
      "self-reliant"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The order from our biggest customer has not arrived yet. The sales team is starting to _____ whether something went wrong.",
    "options": [
      "bake",
      "regulate",
      "wonder",
      "release"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Moving to a new city and starting a new job at the same time is difficult. It can be a very _____ period.",
    "options": [
      "stressful",
      "peaceful",
      "attractive",
      "self-reliant"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The documentary includes scenes of a serious car accident. A warning is shown because the content may be _____ for some viewers.",
    "options": [
      "peaceful",
      "attractive",
      "triggering",
      "self-reliant"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Many nurses worked double shifts during the busy winter season. The hospital is now offering counseling to prevent _____.",
    "options": [
      "solitude",
      "relief",
      "bookworm",
      "burnout"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The meeting in the next room has already started. Please enter _____ and take a seat at the back.",
    "options": [
      "vastly",
      "quietly",
      "boldly",
      "physically"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Ken Ito walks to work every day, even when it rains. This healthy _____ helps him stay fit.",
    "options": [
      "emotion",
      "relief",
      "habit",
      "solitude"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The hotel kitchen staff start work at four in the morning. They _____ fresh bread and pastries for the breakfast buffet.",
    "options": [
      "avoid",
      "bake",
      "disturb",
      "wonder"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The manager is in an important meeting with the bank. Please do not _____ her unless it is an emergency.",
    "options": [
      "bake",
      "regulate",
      "recharge",
      "disturb"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The city tour includes three hours of free time. Visitors can _____ the old harbor and its small shops on their own.",
    "options": [
      "explore",
      "disturb",
      "regulate",
      "bake"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Amy reads at least three novels every month. As a real _____, she spends most weekends at the library.",
    "options": [
      "emotion",
      "bookworm",
      "burnout",
      "habit"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Doctors say that a short break can lower stress. Take a few minutes each afternoon to stretch and _____.",
    "options": [
      "disturb",
      "regulate",
      "relax",
      "bake"
    ],
    "answer": 2,
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "socialize": {
    "pos": "v.",
    "en_def": "to spend time with other people in a friendly way",
    "cn_def": "交際；社交；與人往來"
  },
  "social life": {
    "pos": "n.phr.",
    "en_def": "the time you spend with friends and doing activities for fun",
    "cn_def": "社交生活"
  },
  "solitude": {
    "pos": "n.",
    "en_def": "the state of being alone, especially when you enjoy it",
    "cn_def": "獨處；孤獨（多指享受的）"
  },
  "solitary": {
    "pos": "adj.",
    "en_def": "done alone or existing alone",
    "cn_def": "單獨的；獨自的；孤獨的"
  },
  "self-reliant": {
    "pos": "adj.",
    "en_def": "able to do things and make decisions without help from others",
    "cn_def": "自立的；依靠自己的"
  },
  "recharge": {
    "pos": "v.",
    "en_def": "to rest so that you get your energy back",
    "cn_def": "恢復精力；充電"
  },
  "reflect": {
    "pos": "v.",
    "en_def": "to think carefully and seriously about something",
    "cn_def": "反思；深思"
  },
  "relax": {
    "pos": "v.",
    "en_def": "to rest and become calm, especially after work",
    "cn_def": "放鬆；休息"
  },
  "relief": {
    "pos": "n.",
    "en_def": "a feeling of happiness because something unpleasant has ended or not happened",
    "cn_def": "寬慰；鬆了一口氣"
  },
  "peaceful": {
    "pos": "adj.",
    "en_def": "quiet and calm, without noise or trouble",
    "cn_def": "寧靜的；平和的"
  },
  "release": {
    "pos": "v.",
    "en_def": "to let a feeling or energy go so that you feel better",
    "cn_def": "釋放；發洩"
  },
  "pressure": {
    "pos": "n.",
    "en_def": "a feeling of worry caused by difficult demands or too much work",
    "cn_def": "壓力"
  },
  "belong to somebody": {
    "pos": "v.phr.",
    "en_def": "to feel that you are an important part of someone's life or a group",
    "cn_def": "歸屬於某人；有歸屬感"
  },
  "introvert": {
    "pos": "n.",
    "en_def": "a quiet person who prefers to spend time alone or with a few people",
    "cn_def": "內向的人"
  },
  "attractive": {
    "pos": "adj.",
    "en_def": "pleasant or interesting, so that people want it",
    "cn_def": "有吸引力的；誘人的"
  },
  "regulate": {
    "pos": "v.",
    "en_def": "to control something so that it stays at the right level",
    "cn_def": "調節；控制；管理"
  },
  "emotion": {
    "pos": "n.",
    "en_def": "a strong feeling such as love, anger, fear, or joy",
    "cn_def": "情緒；情感"
  },
  "avoid": {
    "pos": "v.",
    "en_def": "to stay away from someone or something, or to stop something from happening",
    "cn_def": "避免；避開；迴避"
  },
  "scary": {
    "pos": "adj.",
    "en_def": "making you feel afraid",
    "cn_def": "可怕的；嚇人的"
  },
  "wonder": {
    "pos": "v.",
    "en_def": "to think about something and want to know more about it",
    "cn_def": "想知道；納悶；好奇"
  },
  "stressful": {
    "pos": "adj.",
    "en_def": "making you feel worried and nervous",
    "cn_def": "壓力大的；令人緊張的"
  },
  "triggering": {
    "pos": "adj.",
    "en_def": "causing someone to have strong, upsetting feelings or memories",
    "cn_def": "引發情緒反應的；觸發的"
  },
  "burnout": {
    "pos": "n.",
    "en_def": "a state of feeling extremely tired and unable to work because of too much stress",
    "cn_def": "倦怠；身心俱疲"
  },
  "quietly": {
    "pos": "adv.",
    "en_def": "without making much noise",
    "cn_def": "安靜地；輕聲地"
  },
  "habit": {
    "pos": "n.",
    "en_def": "something that you do often and regularly, often without thinking about it",
    "cn_def": "習慣"
  },
  "bake": {
    "pos": "v.",
    "en_def": "to cook food such as bread or cake in an oven",
    "cn_def": "烘烤；烤"
  },
  "disturb": {
    "pos": "v.",
    "en_def": "to interrupt someone when they are trying to work, sleep, or rest",
    "cn_def": "打擾；干擾"
  },
  "explore": {
    "pos": "v.",
    "en_def": "to look around a new place, or to try new activities, to learn about them",
    "cn_def": "探索；嘗試；探究"
  },
  "bookworm": {
    "pos": "n.",
    "en_def": "a person who loves reading and spends a lot of time reading",
    "cn_def": "書蟲；愛看書的人"
  }
};

const EXTRA_GLOSSES = {};
