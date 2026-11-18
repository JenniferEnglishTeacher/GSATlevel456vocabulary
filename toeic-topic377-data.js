// Topic 377 Quiz Data: Stress 壓力
// Source word list: https://www.examword.com/group-topic/stress — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T377 - Stress 壓力",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "pressure",
    "pos": "n.",
    "cn_def": "壓力",
    "en_def": "the stress caused by having too much to do or high expectations",
    "sentence": "A: Why does Kevin look so tired at every team meeting this month, even though he used to be the most cheerful person in the office? B: He is under a lot of {{BLANK}} because the director wants his department to double its sales before the end of the year, and he has been working late almost every night.",
    "cn": "A：為什麼凱文這個月每次開團隊會議都看起來那麼累？他以前可是辦公室裡最開朗的人。 B：他承受很大的【壓力】，因為主管要求他的部門在年底前把業績翻倍，所以他幾乎每天晚上都加班到很晚。"
  },
  {
    "word": "anxiety",
    "pos": "n.",
    "cn_def": "焦慮；不安",
    "en_def": "a feeling of worry and nervousness",
    "sentence": "A: Is our new assistant ready to give her first presentation to the board on Friday, or should someone else from the team help her? B: She knows the material very well, but she told me she feels a lot of {{BLANK}} about speaking in front of senior managers, so I offered to practice with her tomorrow afternoon.",
    "cn": "A：我們的新助理準備好星期五向董事會做她的第一次簡報了嗎？還是團隊裡應該有人幫她？ B：她對內容非常熟悉，但她跟我說在高階主管面前發言讓她感到非常【焦慮】，所以我提議明天下午陪她練習。"
  },
  {
    "word": "tension",
    "pos": "n.",
    "cn_def": "緊張（關係）",
    "en_def": "a nervous, unfriendly feeling between people",
    "sentence": "A: Why did the marketing and design teams stop eating lunch together in the cafeteria after the last project review? B: There has been some {{BLANK}} between them ever since the client rejected the new logo, because each team believes the other one caused the problem, so the manager plans to hold a meeting to clear the air.",
    "cn": "A：為什麼行銷團隊和設計團隊在上次專案檢討之後就不再一起在員工餐廳吃午餐了？ B：自從客戶否決了新標誌之後，他們之間就有些【緊張關係】，因為兩個團隊都認為是對方造成了問題，所以經理打算開會把話說清楚。"
  },
  {
    "word": "strain",
    "pos": "n.",
    "cn_def": "負擔；壓力",
    "en_def": "pressure that makes someone or something tired or weak",
    "sentence": "A: Have you noticed that our receptionist seems much more tired than usual since two of her coworkers went on vacation last week? B: Yes, handling all the phone calls, visitors, and deliveries by herself is putting a lot of {{BLANK}} on her, so I asked the office manager to hire a temporary worker until the others return.",
    "cn": "A：你有沒有注意到，自從上週她的兩位同事去休假後，我們的櫃檯接待員看起來比平常累很多？ B：有啊，一個人處理所有電話、訪客和包裹對她造成很大的【負擔】，所以我請辦公室經理在其他人回來之前先雇一位臨時員工。"
  },
  {
    "word": "overwhelm",
    "pos": "v.",
    "cn_def": "使不知所措；壓垮",
    "en_def": "to be too much for someone to deal with",
    "sentence": "A: Should we give the new intern all of the customer files and the monthly reports on his very first day at the company? B: No, I think that much information would {{BLANK}} him, so let's start with a short training session this morning and then slowly add more tasks over the next two weeks while he learns our system.",
    "cn": "A：我們應該在新實習生上班第一天就把所有客戶檔案和月報都交給他嗎？ B：不要，我覺得那麼多資訊會【壓垮】他，所以我們今天早上先從一個簡短的訓練課程開始，然後在他學習我們系統的接下來兩週內慢慢增加任務。"
  },
  {
    "word": "overwhelmed",
    "pos": "adj.",
    "cn_def": "不知所措的；喘不過氣的",
    "en_def": "feeling that you have too much to deal with",
    "sentence": "A: How is Maria handling the move to the new branch office downtown, now that she also has to train three new staff members? B: She told me she felt completely {{BLANK}} during the first week because of all the boxes, meetings, and questions, but things are getting easier now that her team has learned the basic procedures.",
    "cn": "A：瑪莉亞現在還得訓練三位新員工，她搬到市中心新分公司的事處理得怎麼樣？ B：她跟我說第一週因為所有的箱子、會議和問題，讓她覺得完全【喘不過氣】，但現在她的團隊已經學會基本流程，事情變得比較輕鬆了。"
  },
  {
    "word": "burden",
    "pos": "n.",
    "cn_def": "負擔；重擔",
    "en_def": "a heavy duty or problem that is hard to carry",
    "sentence": "A: Why is the company planning to buy new accounting software when the old program still works well enough for most of our tasks? B: Entering every invoice by hand has become a real {{BLANK}} for the finance staff, and the new software will save them several hours each week, so they can focus on more important work.",
    "cn": "A：舊的程式對我們大部分的工作來說還算夠用，為什麼公司打算購買新的會計軟體？ B：每張發票都要手動輸入，已經成為財務人員真正的【負擔】，新軟體每週能幫他們省下好幾個小時，讓他們能專注在更重要的工作上。"
  },
  {
    "word": "fatigue",
    "pos": "n.",
    "cn_def": "疲勞；疲倦",
    "en_def": "extreme tiredness",
    "sentence": "A: Why did the factory decide to add a fifteen-minute break in the middle of every night shift starting next month? B: The safety manager found that workers were making more mistakes late at night because of {{BLANK}}, so a short rest and a cup of coffee should help them stay alert and avoid accidents on the production line.",
    "cn": "A：為什麼工廠決定從下個月開始，在每個夜班中間增加十五分鐘的休息時間？ B：安全經理發現工人在深夜因為【疲勞】而犯更多錯誤，所以短暫休息加上一杯咖啡應該能幫助他們保持警覺，避免在生產線上發生意外。"
  },
  {
    "word": "exhausted",
    "pos": "adj.",
    "cn_def": "筋疲力盡的",
    "en_def": "extremely tired",
    "sentence": "A: Are you coming to the welcome dinner for our clients from Japan tonight, or are you going straight home after work? B: I'm sorry, but I'm completely {{BLANK}} after flying back from the trade show in Berlin and spending the whole day in meetings, so I'm going to go home, eat something light, and get some sleep.",
    "cn": "A：你今晚會來參加我們為日本客戶舉辦的歡迎晚宴嗎？還是下班後直接回家？ B：很抱歉，我從柏林的商展飛回來之後又開了一整天的會，已經完全【筋疲力盡】了，所以我要回家吃點清淡的東西，然後好好睡一覺。"
  },
  {
    "word": "frustration",
    "pos": "n.",
    "cn_def": "挫折感；沮喪",
    "en_def": "the annoyed feeling when you cannot do what you want",
    "sentence": "A: Why did so many customers write angry reviews about our online store over the weekend? B: The website kept crashing while people were trying to pay, so their {{BLANK}} grew quickly, and many of them gave up on their orders, so our technical team is working hard today to fix the payment system.",
    "cn": "A：為什麼週末有那麼多顧客寫了生氣的評論給我們的網路商店？ B：大家在付款時網站一直當機，所以他們的【挫折感】很快就升高了，很多人乾脆放棄訂單，因此我們的技術團隊今天正在努力修復付款系統。"
  },
  {
    "word": "irritable",
    "pos": "adj.",
    "cn_def": "易怒的；煩躁的",
    "en_def": "easily annoyed",
    "sentence": "A: Why has the usually friendly manager been so short with everyone in the office during the last few days? B: He has been sleeping only four hours a night while preparing for the annual audit, so he has become quite {{BLANK}}, and even small questions seem to annoy him, but he said things will be better next week.",
    "cn": "A：為什麼平常很友善的經理這幾天對辦公室裡每個人都那麼不耐煩？ B：他為了準備年度稽核，每晚只睡四個小時，所以變得相當【煩躁】，連小問題似乎都會惹惱他，不過他說下週情況就會好轉。"
  },
  {
    "word": "panic",
    "pos": "v.",
    "cn_def": "驚慌；恐慌",
    "en_def": "to suddenly feel so afraid that you cannot think clearly",
    "sentence": "A: What should I do if the computer system goes down again while I'm working alone at the hotel's front desk tonight? B: Don't {{BLANK}}, because it happens sometimes; just write the guests' information on the paper forms in the top drawer, call the IT support number on the wall, and they will help you restart the system.",
    "cn": "A：如果今晚我一個人在飯店櫃檯值班時電腦系統又當機，我該怎麼辦？ B：別【驚慌】，這種情況偶爾會發生；只要把客人的資料寫在最上層抽屜裡的紙本表格上，打牆上的資訊支援電話，他們就會幫你重新啟動系統。"
  },
  {
    "word": "cope",
    "pos": "v.",
    "cn_def": "應付；處理",
    "en_def": "to deal successfully with something difficult",
    "sentence": "A: How are the restaurant staff managing now that the busy holiday season has started and two of the cooks are out sick? B: It's hard, but they are able to {{BLANK}} with the extra customers because the owner hired two part-time helpers and changed the menu to include more dishes that can be prepared quickly.",
    "cn": "A：現在忙碌的假期旺季已經開始，又有兩位廚師請病假，餐廳員工撐得住嗎？ B：很辛苦，但他們還能【應付】增加的客人，因為老闆雇了兩位兼職幫手，並把菜單改成包含更多可以快速準備的餐點。"
  },
  {
    "word": "coping",
    "pos": "n.",
    "cn_def": "應對；調適",
    "en_def": "the act of dealing with problems or stress",
    "sentence": "A: What will the new employees learn at the wellness workshop that human resources is organizing next Thursday afternoon? B: A trainer will teach them some simple {{BLANK}} strategies, such as taking short walks, making daily task lists, and talking to coworkers, so they can handle stress better during their busy first year at the company.",
    "cn": "A：新員工在人資部下週四下午舉辦的身心健康工作坊會學到什麼？ B：講師會教他們一些簡單的【應對】策略，例如短暫散步、列出每日待辦清單以及和同事聊天，讓他們在公司忙碌的第一年能更好地處理壓力。"
  },
  {
    "word": "relax",
    "pos": "v.",
    "cn_def": "放鬆",
    "en_def": "to rest and become less worried",
    "sentence": "A: Where do you usually go after a long and difficult week of meetings with clients and suppliers? B: I like to {{BLANK}} at the small park near my apartment, where I can sit by the lake, read a book, and forget about work for a few hours before I start planning the next week.",
    "cn": "A：在和客戶及供應商開了一整週漫長又辛苦的會議之後，你通常會去哪裡？ B：我喜歡在我公寓附近的小公園【放鬆】，在那裡我可以坐在湖邊看書，在開始規劃下一週之前把工作拋開幾個小時。"
  },
  {
    "word": "relaxed",
    "pos": "adj.",
    "cn_def": "放鬆的；輕鬆的",
    "en_def": "calm and not worried",
    "sentence": "A: How was the atmosphere at the team-building trip to the beach resort last weekend, since everyone had been so stressed before it? B: Everyone seemed much more {{BLANK}} than they are in the office, and people who rarely talk to each other were laughing and playing volleyball together, so I think we should do it again next year.",
    "cn": "A：上週末到海灘度假村的團隊建立旅行氣氛如何？畢竟大家在那之前都壓力很大。 B：每個人看起來都比在辦公室時【放鬆】多了，平常很少交談的人也一起歡笑、打排球，所以我認為我們明年應該再辦一次。"
  },
  {
    "word": "calm",
    "pos": "adj.",
    "cn_def": "冷靜的；平靜的",
    "en_def": "peaceful and not nervous",
    "sentence": "A: How did the flight attendants handle the situation when the plane suddenly shook during the storm over the mountains? B: They stayed {{BLANK}} and walked through the cabin, explaining to the passengers that the bumpy air was normal, so even the people who were frightened at first felt safer until we landed safely.",
    "cn": "A：飛機在山區上空遇到暴風雨突然搖晃時，空服員是怎麼處理的？ B：他們保持【冷靜】，在機艙裡走動，向乘客解釋顛簸的氣流是正常的，所以連一開始很害怕的人也覺得比較安心，直到我們安全降落。"
  },
  {
    "word": "calmly",
    "pos": "adv.",
    "cn_def": "冷靜地；平靜地",
    "en_def": "in a peaceful way, without getting upset",
    "sentence": "A: What did the store manager do when an angry customer started shouting at the cashier about a broken coffee machine? B: She spoke {{BLANK}} to him, listened to his complaint, and offered either a full refund or a new machine, so he soon stopped shouting and even thanked her before he left the shop.",
    "cn": "A：一位生氣的顧客為了一台壞掉的咖啡機開始對收銀員大吼時，店長怎麼做？ B：她【冷靜地】跟他說話，聆聽他的抱怨，並提供全額退款或換一台新機器，所以他很快就不再大吼，離開店裡之前甚至還向她道謝。"
  },
  {
    "word": "breathe",
    "pos": "v.",
    "cn_def": "呼吸",
    "en_def": "to take air into and out of your body",
    "sentence": "A: Do you have any advice for me before my job interview with the bank tomorrow morning, since I always get nervous? B: Before you walk into the room, stop for a moment and {{BLANK}} slowly and deeply a few times, because it will help you feel more relaxed, and then smile and introduce yourself clearly to the interviewers.",
    "cn": "A：明天早上我要去銀行面試，我總是很緊張，你有什麼建議嗎？ B：走進房間之前，先停一下，慢慢地深【呼吸】幾次，因為這會幫助你感覺更放鬆，然後微笑並清楚地向面試官介紹自己。"
  },
  {
    "word": "breathing",
    "pos": "n.",
    "cn_def": "呼吸",
    "en_def": "the action of taking air in and out of your body",
    "sentence": "A: What kind of activities will be included in the free wellness program the company is offering to employees this spring? B: There will be yoga classes on Monday evenings and short {{BLANK}} exercises every morning before work, which the instructor says can lower stress and help people concentrate better during long meetings.",
    "cn": "A：公司今年春天提供給員工的免費身心健康課程會包含哪些活動？ B：每週一晚上會有瑜伽課，每天早上上班前還有簡短的【呼吸】練習，講師說這能降低壓力，並幫助大家在冗長的會議中更專心。"
  },
  {
    "word": "deadline",
    "pos": "n.",
    "cn_def": "截止期限",
    "en_def": "the latest time by which something must be finished",
    "sentence": "A: Why is everyone in the design department staying in the office so late this week instead of going home at six as usual? B: The {{BLANK}} for the new advertising campaign is this Friday, and the client still wants several changes to the posters and the video, so the whole team is working extra hours to finish on time.",
    "cn": "A：為什麼設計部的每個人這週都在辦公室待到這麼晚，而不是像平常一樣六點回家？ B：新廣告活動的【截止期限】就在這週五，而客戶還想修改海報和影片好幾個地方，所以整個團隊都在加班，好準時完成。"
  },
  {
    "word": "workload",
    "pos": "n.",
    "cn_def": "工作量",
    "en_def": "the amount of work a person has to do",
    "sentence": "A: Why did Daniel ask the manager whether he could move from the sales team to the customer service department? B: His {{BLANK}} became too heavy after the company opened two new stores, and he was handling twice as many accounts as before, so he wanted a position where he could have a better work-life balance.",
    "cn": "A：為什麼丹尼爾問經理他能不能從業務團隊調到客服部門？ B：公司開了兩家新店之後，他的【工作量】變得太重，他負責的客戶數量是以前的兩倍，所以他想要一個能讓工作與生活更平衡的職位。"
  },
  {
    "word": "responsibility",
    "pos": "n.",
    "cn_def": "責任；職責",
    "en_def": "a duty to take care of something",
    "sentence": "A: Who will be in charge of ordering office supplies now that Linda has moved to the branch office in Kaohsiung? B: That will be your {{BLANK}} from next Monday, so please check the supply room every Friday, make a list of what we need, and send the order to the vendor before noon.",
    "cn": "A：琳達已經調到高雄分公司了，現在誰負責訂購辦公用品？ B：從下週一開始那就是你的【職責】了，所以請每週五檢查用品室，列出我們需要的東西，並在中午前把訂單寄給廠商。"
  },
  {
    "word": "balance",
    "pos": "n.",
    "cn_def": "平衡",
    "en_def": "a healthy mix of the different parts of your life",
    "sentence": "A: Why did you decide to accept the job offer from the smaller company, even though the salary at the bigger firm was higher? B: The smaller company lets employees work from home twice a week and rarely asks for overtime, so I can have a better {{BLANK}} between my career and my family, which matters more to me now.",
    "cn": "A：雖然大公司的薪水比較高，你為什麼還是決定接受小公司的工作機會？ B：那家小公司讓員工每週在家工作兩天，而且很少要求加班，所以我能在事業和家庭之間取得更好的【平衡】，這對現在的我來說更重要。"
  },
  {
    "word": "distress",
    "pos": "n.",
    "cn_def": "痛苦；苦惱",
    "en_def": "great worry, sadness, or pain",
    "sentence": "A: Why did the airline send a special team of staff to the airport after the flight to Tokyo was canceled last night? B: Many passengers were in {{BLANK}} because they had important business meetings or family events the next morning, so the staff helped them find hotel rooms and book seats on the earliest flights available.",
    "cn": "A：昨晚飛往東京的班機取消後，為什麼航空公司派了一組專門人員到機場？ B：許多乘客因為隔天早上有重要的商務會議或家庭活動而非常【苦惱】，所以工作人員協助他們找飯店房間，並預訂最早的班機座位。"
  },
  {
    "word": "burnout",
    "pos": "n.",
    "cn_def": "職業倦怠；身心俱疲",
    "en_def": "extreme tiredness from working too hard for too long",
    "sentence": "A: Why is the company now asking every employee to take at least one full week of vacation each year? B: Managers noticed that several talented workers quit after months of long hours, and they want to prevent {{BLANK}} by making sure people rest regularly, so they come back to work with more energy and new ideas.",
    "cn": "A：為什麼公司現在要求每位員工每年至少休一整週的假？ B：主管們注意到好幾位有才華的員工在長期超時工作幾個月後離職了，他們想藉由確保大家定期休息來預防【職業倦怠】，讓員工帶著更多活力和新點子回來工作。"
  },
  {
    "word": "therapy",
    "pos": "n.",
    "cn_def": "治療；心理諮商",
    "en_def": "treatment that helps people with mental or physical problems",
    "sentence": "A: What new benefits did human resources add to the employee health plan this year? B: Staff can now attend up to ten sessions of {{BLANK}} with a professional counselor for free, which is helpful for people who are dealing with stress at work or difficult problems at home, and everything is kept private.",
    "cn": "A：人資部今年在員工健康方案中新增了哪些福利？ B：員工現在可以免費和專業諮商師進行最多十次的【心理諮商】，這對正在面對工作壓力或家中困難問題的人很有幫助，而且一切都會保密。"
  },
  {
    "word": "meditation",
    "pos": "n.",
    "cn_def": "冥想",
    "en_def": "sitting quietly to calm and clear the mind",
    "sentence": "A: How do you manage to stay so focused during those long negotiation meetings with our overseas suppliers? B: I practice {{BLANK}} for about ten minutes every morning before I leave home, sitting quietly and paying attention to my thoughts, and it helps me stay patient and think clearly even when the discussions get difficult.",
    "cn": "A：在和海外供應商那些冗長的談判會議中，你是怎麼保持這麼專注的？ B：我每天早上出門前會練習大約十分鐘的【冥想】，安靜地坐著並留意自己的想法，這幫助我即使在討論變得困難時也能保持耐心、清楚思考。"
  },
  {
    "word": "support",
    "pos": "n.",
    "cn_def": "支持；支援",
    "en_def": "help and encouragement",
    "sentence": "A: How did you finish such a big report on time while you were also training the two new members of your team? B: I couldn't have done it without the {{BLANK}} of my manager, who gave me an extra day and asked a coworker to check the numbers with me, so I'm going to thank them both at lunch today.",
    "cn": "A：你同時還要訓練團隊裡的兩位新成員，是怎麼準時完成這麼大份的報告的？ B：如果沒有我經理的【支持】我根本做不到，他多給了我一天，還請一位同事和我一起核對數字，所以我今天午餐時要好好謝謝他們兩位。"
  },
  {
    "word": "supportive",
    "pos": "adj.",
    "cn_def": "支持的；給予鼓勵的",
    "en_def": "giving help and encouragement",
    "sentence": "A: How do you like working with your new supervisor in the accounting department so far, since you were worried about it last month? B: She is very {{BLANK}}, because whenever I have a question about the new tax rules she explains them patiently, and she always encourages me to take training courses that will help my career grow.",
    "cn": "A：你上個月還很擔心，到目前為止和會計部新主管一起工作感覺如何？ B：她非常【支持】我，每當我對新稅法有疑問時，她都會耐心解釋，而且她總是鼓勵我去上能幫助職涯成長的培訓課程。"
  },
  {
    "word": "resilience",
    "pos": "n.",
    "cn_def": "韌性；復原力",
    "en_def": "the ability to recover quickly from problems",
    "sentence": "A: How did the small bakery survive after losing most of its customers when the new shopping mall opened across the street? B: The owners showed great {{BLANK}} by starting an online delivery service and selling cakes to local offices, and within a year their sales were even higher than they had been before the mall opened.",
    "cn": "A：對街新購物中心開幕後，那家小麵包店失去了大部分的顧客，它是怎麼撐下來的？ B：老闆們展現了很強的【韌性】，開始提供線上外送服務並把蛋糕賣給附近的公司行號，不到一年他們的營業額甚至比購物中心開幕前還高。"
  },
  {
    "word": "manageable",
    "pos": "adj.",
    "cn_def": "可處理的；可應付的",
    "en_def": "able to be dealt with or controlled",
    "sentence": "A: Is the new project too big for our small team, or should we ask the director to give us more people? B: If we divide it into smaller tasks and give each person clear goals for every week, I think the work will be {{BLANK}}, and we can ask for help later if we fall behind schedule.",
    "cn": "A：這個新專案對我們這個小團隊來說會不會太大？還是我們應該請主管多給我們一些人手？ B：如果我們把它分成較小的任務，並給每個人每週明確的目標，我認為這份工作是【可以應付的】，如果之後進度落後再請求支援。"
  }
];

const MCQS = [
  {
    "q": "Many store managers work under constant _____ during the holiday season. They must hire extra staff and keep the shelves full every day.",
    "options": [
      "pressure",
      "meditation",
      "resilience",
      "therapy"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Before the merger was announced, many employees felt great _____ about losing their jobs. The CEO held a meeting to answer their questions.",
    "options": [
      "workload",
      "deadline",
      "anxiety",
      "balance"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The new seating plan helped ease the _____ between the two departments. They had argued for months about sharing the large meeting room.",
    "options": [
      "fatigue",
      "tension",
      "meditation",
      "therapy"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Hosting three international conferences in one month put a serious _____ on the small events team. Several members later asked for extra days off.",
    "options": [
      "meditation",
      "resilience",
      "therapy",
      "strain"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Too many emails and meetings can easily _____ new employees during their first week. Managers should introduce tools and tasks a little at a time.",
    "options": [
      "breathe",
      "relax",
      "overwhelm",
      "cope"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The hotel receptionist felt _____ when three tour buses arrived at the same time. Luckily, the manager came to the front desk to help her.",
    "options": [
      "overwhelmed",
      "manageable",
      "supportive",
      "relaxed"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The new software has reduced the _____ of paperwork on our nurses. They can now spend more time caring for patients on the ward.",
    "options": [
      "meditation",
      "resilience",
      "breathing",
      "burden"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Long-distance truck drivers must stop every four hours to prevent driver _____. Tired drivers are much more likely to cause serious accidents.",
    "options": [
      "therapy",
      "fatigue",
      "balance",
      "support"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "After working three night shifts in a row, the security guard was completely _____. He went straight home and slept for twelve hours.",
    "options": [
      "exhausted",
      "manageable",
      "supportive",
      "calm"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Customers expressed their _____ with the long wait at the service counter. The bank has promised to open two more windows next month.",
    "options": [
      "resilience",
      "meditation",
      "frustration",
      "breathing"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Lack of sleep can make even the friendliest employees _____ and impatient. That is why the company discourages working past midnight.",
    "options": [
      "manageable",
      "supportive",
      "relaxed",
      "irritable"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "If the fire alarm rings, please do not _____ or run toward the elevators. Walk quietly to the nearest stairway and follow the staff.",
    "options": [
      "cope",
      "panic",
      "balance",
      "breathe"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The new kitchen staff found it hard to _____ with the busy lunch rush. The head chef gave them extra training on Saturday morning.",
    "options": [
      "cope",
      "panic",
      "breathe",
      "overwhelm"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The workshop teaches simple _____ strategies for dealing with difficult customers. Participants practice these methods in short role-play activities.",
    "options": [
      "burnout",
      "resilience",
      "distress",
      "coping"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Guests can _____ in the hotel's rooftop garden after a long day of meetings. Free tea and light snacks are served there every evening.",
    "options": [
      "panic",
      "cope",
      "relax",
      "overwhelm"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The new office has a more _____ dress code than our old building did. Employees may now wear jeans and sneakers on Fridays.",
    "options": [
      "exhausted",
      "relaxed",
      "irritable",
      "overwhelmed"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The pilot's _____ voice helped the passengers feel safe during the storm. Everyone applauded when the plane landed smoothly at the airport.",
    "options": [
      "irritable",
      "exhausted",
      "overwhelmed",
      "calm"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The customer service agent explained the refund policy _____ and clearly. As a result, the upset caller soon agreed to the proposed solution.",
    "options": [
      "calmly",
      "angrily",
      "nervously",
      "rudely"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "During the safety training, workers learn how to _____ through a mask in a smoke-filled room. The whole exercise takes about thirty minutes.",
    "options": [
      "cope",
      "relax",
      "breathe",
      "panic"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The marketing team worked all weekend to meet the _____ for the client's proposal. They sent the final version early on Monday morning.",
    "options": [
      "burden",
      "deadline",
      "tension",
      "therapy"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Hiring two assistants has greatly reduced the _____ of the accounting staff. Now they rarely need to stay late at the office.",
    "options": [
      "workload",
      "resilience",
      "meditation",
      "breathing"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "As the new office manager, Linda Wang will take full _____ for ordering supplies. Please send all of your requests to her by Thursday.",
    "options": [
      "tension",
      "fatigue",
      "burnout",
      "responsibility"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Flexible working hours help employees achieve a healthy work-life _____. As a result, fewer people have left the company this year.",
    "options": [
      "burden",
      "balance",
      "tension",
      "distress"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The ship's crew sent a _____ signal when the engine stopped in rough seas. A rescue boat arrived within two hours and towed them safely.",
    "options": [
      "burnout",
      "therapy",
      "distress",
      "fatigue"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Working sixty hours a week for several months can easily lead to _____. Experts recommend taking regular vacations to stay healthy and productive.",
    "options": [
      "burnout",
      "deadline",
      "meditation",
      "support"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "After the accident, the factory worker attended physical _____ twice a week. He was able to return to his job after three months.",
    "options": [
      "meditation",
      "breathing",
      "support",
      "therapy"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Several employees join a short _____ session in the quiet room before work. They say sitting silently for ten minutes improves their focus.",
    "options": [
      "deadline",
      "burnout",
      "meditation",
      "distress"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The IT department provides technical _____ to all staff from eight in the morning until six. Please call extension 205 if your computer stops working.",
    "options": [
      "therapy",
      "support",
      "tension",
      "burden"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Our team leader is very _____ of new ideas from junior staff. She often lets them present their suggestions at monthly meetings.",
    "options": [
      "supportive",
      "exhausted",
      "irritable",
      "manageable"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The company showed remarkable _____ after a fire destroyed its main warehouse. It reopened in a temporary building within just two weeks.",
    "options": [
      "burnout",
      "fatigue",
      "distress",
      "resilience"
    ],
    "answer": 3,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "pressure": {
    "pos": "n.",
    "en_def": "the stress caused by having too much to do or high expectations",
    "cn_def": "壓力"
  },
  "anxiety": {
    "pos": "n.",
    "en_def": "a feeling of worry and nervousness",
    "cn_def": "焦慮；不安"
  },
  "tension": {
    "pos": "n.",
    "en_def": "a nervous, unfriendly feeling between people",
    "cn_def": "緊張（關係）"
  },
  "strain": {
    "pos": "n.",
    "en_def": "pressure that makes someone or something tired or weak",
    "cn_def": "負擔；壓力"
  },
  "overwhelm": {
    "pos": "v.",
    "en_def": "to be too much for someone to deal with",
    "cn_def": "使不知所措；壓垮"
  },
  "overwhelmed": {
    "pos": "adj.",
    "en_def": "feeling that you have too much to deal with",
    "cn_def": "不知所措的；喘不過氣的"
  },
  "burden": {
    "pos": "n.",
    "en_def": "a heavy duty or problem that is hard to carry",
    "cn_def": "負擔；重擔"
  },
  "fatigue": {
    "pos": "n.",
    "en_def": "extreme tiredness",
    "cn_def": "疲勞；疲倦"
  },
  "exhausted": {
    "pos": "adj.",
    "en_def": "extremely tired",
    "cn_def": "筋疲力盡的"
  },
  "frustration": {
    "pos": "n.",
    "en_def": "the annoyed feeling when you cannot do what you want",
    "cn_def": "挫折感；沮喪"
  },
  "irritable": {
    "pos": "adj.",
    "en_def": "easily annoyed",
    "cn_def": "易怒的；煩躁的"
  },
  "panic": {
    "pos": "v.",
    "en_def": "to suddenly feel so afraid that you cannot think clearly",
    "cn_def": "驚慌；恐慌"
  },
  "cope": {
    "pos": "v.",
    "en_def": "to deal successfully with something difficult",
    "cn_def": "應付；處理"
  },
  "coping": {
    "pos": "n.",
    "en_def": "the act of dealing with problems or stress",
    "cn_def": "應對；調適"
  },
  "relax": {
    "pos": "v.",
    "en_def": "to rest and become less worried",
    "cn_def": "放鬆"
  },
  "relaxed": {
    "pos": "adj.",
    "en_def": "calm and not worried",
    "cn_def": "放鬆的；輕鬆的"
  },
  "calm": {
    "pos": "adj.",
    "en_def": "peaceful and not nervous",
    "cn_def": "冷靜的；平靜的"
  },
  "calmly": {
    "pos": "adv.",
    "en_def": "in a peaceful way, without getting upset",
    "cn_def": "冷靜地；平靜地"
  },
  "breathe": {
    "pos": "v.",
    "en_def": "to take air into and out of your body",
    "cn_def": "呼吸"
  },
  "breathing": {
    "pos": "n.",
    "en_def": "the action of taking air in and out of your body",
    "cn_def": "呼吸"
  },
  "deadline": {
    "pos": "n.",
    "en_def": "the latest time by which something must be finished",
    "cn_def": "截止期限"
  },
  "workload": {
    "pos": "n.",
    "en_def": "the amount of work a person has to do",
    "cn_def": "工作量"
  },
  "responsibility": {
    "pos": "n.",
    "en_def": "a duty to take care of something",
    "cn_def": "責任；職責"
  },
  "balance": {
    "pos": "n.",
    "en_def": "a healthy mix of the different parts of your life",
    "cn_def": "平衡"
  },
  "distress": {
    "pos": "n.",
    "en_def": "great worry, sadness, or pain",
    "cn_def": "痛苦；苦惱"
  },
  "burnout": {
    "pos": "n.",
    "en_def": "extreme tiredness from working too hard for too long",
    "cn_def": "職業倦怠；身心俱疲"
  },
  "therapy": {
    "pos": "n.",
    "en_def": "treatment that helps people with mental or physical problems",
    "cn_def": "治療；心理諮商"
  },
  "meditation": {
    "pos": "n.",
    "en_def": "sitting quietly to calm and clear the mind",
    "cn_def": "冥想"
  },
  "support": {
    "pos": "n.",
    "en_def": "help and encouragement",
    "cn_def": "支持；支援"
  },
  "supportive": {
    "pos": "adj.",
    "en_def": "giving help and encouragement",
    "cn_def": "支持的；給予鼓勵的"
  },
  "resilience": {
    "pos": "n.",
    "en_def": "the ability to recover quickly from problems",
    "cn_def": "韌性；復原力"
  },
  "manageable": {
    "pos": "adj.",
    "en_def": "able to be dealt with or controlled",
    "cn_def": "可處理的；可應付的"
  }
};

const EXTRA_GLOSSES = {};
