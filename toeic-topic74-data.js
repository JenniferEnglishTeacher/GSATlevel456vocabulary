// Topic 74 Quiz Data: Concentration 專注
// Source word list: https://www.examword.com/group-topic/concentration — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T74 - Concentration 專注",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "focus",
    "pos": "n.",
    "cn_def": "焦點；重點；專注",
    "en_def": "the main thing that you pay attention to",
    "sentence": "A: Why did the manager cancel the two new projects that the design team had been planning since the spring? B: She wants the department to keep its {{BLANK}} on finishing the mobile app before the December launch, because the client will pay a large bonus if everything is delivered on time.",
    "cn": "A：為什麼經理取消了設計團隊從春天就開始規劃的兩個新專案？ B：她希望部門把【焦點】放在十二月上市前完成手機應用程式，因為如果一切準時交付，客戶會支付一大筆獎金。"
  },
  {
    "word": "attention",
    "pos": "n.",
    "cn_def": "注意力；注意",
    "en_def": "the act of watching, listening to or thinking about something carefully",
    "sentence": "A: Why do the trainers always start their afternoon workshops with a short game instead of going straight to the slides? B: After a big lunch, most employees feel sleepy, so a quick activity helps everyone get their {{BLANK}} back before the trainers explain the new safety rules for the factory.",
    "cn": "A：為什麼講師下午的工作坊總是先玩個小遊戲，而不是直接看投影片？ B：吃完豐盛的午餐後，大多數員工都會想睡，所以一個簡短的活動能幫大家在講師說明工廠新的安全規定之前找回【注意力】。"
  },
  {
    "word": "absorption",
    "pos": "n.",
    "cn_def": "全神貫注；專心",
    "en_def": "the state of being so interested in something that you notice nothing else",
    "sentence": "A: Why didn't Kevin answer when the receptionist called his name three times in the waiting room this morning? B: He was reading the contract for his new apartment with such complete {{BLANK}} that he didn't hear anything around him, so she finally had to walk over and tap him on the shoulder.",
    "cn": "A：今天早上接待員在候診室叫了凱文的名字三次，他為什麼都沒回應？ B：他閱讀新公寓的合約時完全【全神貫注】，絲毫沒聽到周圍的聲音，所以她最後只好走過去拍拍他的肩膀。"
  },
  {
    "word": "awareness",
    "pos": "n.",
    "cn_def": "意識；認識",
    "en_def": "knowing about something or understanding that it is important",
    "sentence": "A: Why is the hotel putting small signs about saving water and electricity in every guest room this year? B: The owners want to raise {{BLANK}} of environmental problems among travelers, and they hope guests will reuse their towels and turn off the lights when they leave the room.",
    "cn": "A：為什麼飯店今年要在每間客房放置節約用水和用電的小告示？ B：業主希望提高旅客對環境問題的【意識】，也希望房客重複使用毛巾，並在離開房間時關燈。"
  },
  {
    "word": "distraction",
    "pos": "n.",
    "cn_def": "使人分心的事物；干擾",
    "en_def": "something that takes your attention away from what you are doing",
    "sentence": "A: Why did the office manager ask everyone to turn off their phone notifications during the monthly planning meeting? B: She said the constant beeping was a big {{BLANK}} for the speakers, and last month the meeting ran almost an hour longer because people kept checking their messages instead of listening.",
    "cn": "A：為什麼辦公室經理要求大家在每月規劃會議期間關閉手機通知？ B：她說不斷的嗶嗶聲對講者來說是很大的【干擾】，而且上個月的會議延長了將近一小時，因為大家一直查看訊息而沒有專心聽。"
  },
  {
    "word": "interruption",
    "pos": "n.",
    "cn_def": "打斷；中斷",
    "en_def": "a short time when something stops before it continues again",
    "sentence": "A: How did the online training session for the new accounting software go yesterday afternoon? B: Not very well, because there was an {{BLANK}} in the internet service halfway through, so we lost the connection for twenty minutes and had to repeat the most important part today.",
    "cn": "A：昨天下午新會計軟體的線上訓練課程進行得如何？ B：不太順利，因為課程進行到一半網路服務【中斷】，我們斷線了二十分鐘，今天只好重上最重要的部分。"
  },
  {
    "word": "mindfulness",
    "pos": "n.",
    "cn_def": "正念；留心當下",
    "en_def": "the practice of calmly paying attention to the present moment",
    "sentence": "A: What is the new program that the human resources department started for staff who feel stressed at work? B: Every Wednesday morning, a coach leads a short {{BLANK}} class in the meeting room, where employees learn to breathe slowly and pay attention to the present moment before they start their busy day.",
    "cn": "A：人資部門為工作壓力大的員工推出的新課程是什麼？ B：每週三早上，一位教練會在會議室帶領簡短的【正念】課程，員工在開始忙碌的一天之前，學習慢慢呼吸並專注於當下。"
  },
  {
    "word": "engagement",
    "pos": "n.",
    "cn_def": "投入；參與",
    "en_def": "the state of being interested and involved in something",
    "sentence": "A: Why does the company send a short survey to every employee at the end of each year? B: The managers want to measure staff {{BLANK}}, because they have found that workers who feel involved and valued usually stay longer, work harder and give better service to customers.",
    "cn": "A：為什麼公司每年年底都會寄一份簡短的問卷給每位員工？ B：主管們想要衡量員工的【投入程度】，因為他們發現覺得自己有參與感且受到重視的員工，通常會待得更久、工作更努力，也給顧客更好的服務。"
  },
  {
    "word": "immersion",
    "pos": "n.",
    "cn_def": "沉浸；投入",
    "en_def": "being completely involved in an activity or surrounded by a language or culture",
    "sentence": "A: How did the sales director learn to speak Japanese so well in only one year before moving to the Tokyo office? B: She took a three-month {{BLANK}} course in Osaka, where she lived with a local family and was only allowed to use Japanese in class, in shops and at dinner every day.",
    "cn": "A：業務總監在調到東京辦公室之前，怎麼能在短短一年內把日文說得這麼好？ B：她在大阪上了三個月的【沉浸式】課程，在那裡和當地家庭同住，每天在課堂上、商店裡和晚餐時都只能說日文。"
  },
  {
    "word": "concentrate",
    "pos": "v.",
    "cn_def": "專心；集中注意力",
    "en_def": "to give all your attention to one thing",
    "sentence": "A: Why have you started coming to the office at seven in the morning, two hours before everyone else arrives? B: It is the only time of day when I can really {{BLANK}} on the monthly sales reports, because after nine the phones ring constantly and people keep stopping by my desk with questions.",
    "cn": "A：你為什麼開始早上七點就來辦公室，比其他人早兩個小時？ B：那是一天當中我唯一能真正【專心】處理每月銷售報告的時間，因為九點以後電話一直響，而且大家不斷來我桌前問問題。"
  },
  {
    "word": "attend",
    "pos": "v.",
    "cn_def": "處理；照顧（attend to）",
    "en_def": "to deal with or take care of someone or something (usually attend to)",
    "sentence": "A: Why isn't the store manager at the meeting with the new suppliers this afternoon? B: She had to {{BLANK}} to an angry customer who wanted a refund for a broken coffee machine, but she said she would join us as soon as the problem was solved at the front desk.",
    "cn": "A：店經理為什麼沒參加今天下午和新供應商的會議？ B：她必須【處理】一位要求為壞掉的咖啡機退款的生氣顧客，但她說等櫃台的問題解決後就會馬上加入我們。"
  },
  {
    "word": "absorb",
    "pos": "v.",
    "cn_def": "吸收；理解",
    "en_def": "to take in and understand information",
    "sentence": "A: Why did the trainer give the new bank tellers a whole week to read the customer service handbook? B: The handbook contains a lot of rules and procedures, and it is difficult to {{BLANK}} so much information in one or two days, especially when you are also learning the computer system.",
    "cn": "A：為什麼講師給新進銀行行員一整週的時間閱讀客服手冊？ B：手冊裡有很多規定和流程，要在一兩天內【吸收】這麼多資訊很困難，特別是同時還要學習電腦系統。"
  },
  {
    "word": "ignore",
    "pos": "v.",
    "cn_def": "忽略；不理會",
    "en_def": "to pay no attention to something or someone",
    "sentence": "A: How do you manage to finish so much work at your desk when the open-plan office is so noisy all day? B: I wear headphones and try to {{BLANK}} the conversations around me, and I only check my email twice a day so that I don't keep stopping in the middle of a task.",
    "cn": "A：開放式辦公室整天都那麼吵，你是怎麼在座位上完成這麼多工作的？ B：我戴上耳機，試著【忽略】周圍的談話聲，而且一天只查看兩次電子郵件，這樣就不會在做事做到一半時一直停下來。"
  },
  {
    "word": "refocus",
    "pos": "v.",
    "cn_def": "重新集中；重新聚焦",
    "en_def": "to give your attention or effort to something again or to something new",
    "sentence": "A: Our sales have dropped for three months in a row, so what is the new plan from the marketing director? B: She wants us to {{BLANK}} our efforts on our loyal customers in Taipei and Kaohsiung, because many of them have stopped buying from us since our main competitor lowered its prices last spring.",
    "cn": "A：我們的銷售額已連續三個月下滑，行銷總監的新計畫是什麼？ B：她希望我們把心力【重新集中】在台北和高雄的忠實顧客上，因為自從我們的主要競爭對手去年春天降價後，他們很多人都不再向我們購買了。"
  },
  {
    "word": "attentive",
    "pos": "adj.",
    "cn_def": "專心的；體貼周到的",
    "en_def": "listening or watching carefully; helpful and caring toward others",
    "sentence": "A: Why do so many business travelers choose that small hotel near the convention center instead of the bigger ones? B: The rooms are simple, but the staff are very {{BLANK}}, and they remember each guest's name, arrange taxis early in the morning and even prepare breakfast boxes for people who leave before seven.",
    "cn": "A：為什麼這麼多商務旅客選擇會議中心附近那間小飯店，而不是比較大的飯店？ B：房間雖然簡單，但員工非常【體貼周到】，他們記得每位房客的名字，一大早幫忙叫計程車，甚至為七點前就出門的人準備早餐盒。"
  },
  {
    "word": "focused",
    "pos": "adj.",
    "cn_def": "專注的；集中的",
    "en_def": "paying full attention to one aim or task",
    "sentence": "A: How did the new project leader finish the website redesign two weeks earlier than the deadline? B: She stayed {{BLANK}} on the most important features, held very short daily meetings, and politely said no whenever other departments asked her team to add extra pages that were not in the plan.",
    "cn": "A：新的專案負責人是怎麼比截止日期提早兩週完成網站改版的？ B：她始終【專注】於最重要的功能，每天只開很短的會議，而且只要其他部門要求她的團隊加入計畫外的頁面，她都會禮貌地拒絕。"
  },
  {
    "word": "alert",
    "pos": "adj.",
    "cn_def": "警覺的；機靈的",
    "en_def": "awake and quick to notice things",
    "sentence": "A: Why does the warehouse supervisor insist that forklift drivers take a fifteen-minute break every two hours? B: Driving those heavy machines for a long time makes people tired, and drivers must stay {{BLANK}} at all times because one small mistake could hurt a coworker or damage expensive goods.",
    "cn": "A：為什麼倉庫主管堅持堆高機駕駛每兩小時要休息十五分鐘？ B：長時間駕駛那些重型機具會讓人疲倦，而駕駛必須隨時保持【警覺】，因為一個小錯誤就可能傷到同事或損壞昂貴的貨物。"
  },
  {
    "word": "absorbed",
    "pos": "adj.",
    "cn_def": "全神貫注的；專心的",
    "en_def": "so interested in something that you notice nothing else",
    "sentence": "A: Did you notice that the lights went off on the third floor while you were working late last night? B: No, I was so {{BLANK}} in the budget report for next year that I didn't notice anything until the security guard knocked on my door and told me the building was closing.",
    "cn": "A：你昨晚加班時，有注意到三樓的燈熄了嗎？ B：沒有，我太【專心】於明年的預算報告，完全沒注意到任何事，直到警衛來敲門告訴我大樓要關門了。"
  },
  {
    "word": "distracted",
    "pos": "adj.",
    "cn_def": "分心的",
    "en_def": "unable to pay attention because you are thinking about something else",
    "sentence": "A: Why did Linda make so many mistakes in the shipping orders she entered on Friday afternoon? B: She was {{BLANK}} because her son was sick at home and she kept checking her phone for messages from the babysitter, so the manager has given her a day off to take care of him.",
    "cn": "A：琳達週五下午輸入的出貨訂單為什麼錯這麼多？ B：她當時【分心】了，因為兒子在家生病，她一直查看手機看保母有沒有傳訊息，所以經理讓她休假一天去照顧他。"
  },
  {
    "word": "engaged",
    "pos": "adj.",
    "cn_def": "投入的；參與的",
    "en_def": "interested and taking an active part in something",
    "sentence": "A: What did you think of the guest speaker who talked about online marketing at the conference yesterday? B: She was excellent, because she asked the audience questions and used funny examples, so everyone stayed {{BLANK}} for the whole hour, and many people wanted to talk to her after the session.",
    "cn": "A：你覺得昨天研討會上談網路行銷的客座講者怎麼樣？ B：她很棒，因為她會問聽眾問題，還舉了有趣的例子，所以大家整整一小時都很【投入】，很多人在講座結束後還想跟她聊聊。"
  },
  {
    "word": "mindful",
    "pos": "adj.",
    "cn_def": "留意的；注意的",
    "en_def": "remembering something and thinking about it carefully",
    "sentence": "A: Is there anything I should remember before I give the presentation to our new partners from Saudi Arabia next week? B: Be {{BLANK}} of their cultural customs, so avoid scheduling the meeting during prayer times, and don't be surprised if they want to build a friendly relationship before they talk about business.",
    "cn": "A：下週我要向來自沙烏地阿拉伯的新夥伴做簡報，有什麼需要記住的事嗎？ B：要【留意】他們的文化習俗，所以避免把會議安排在禱告時間，而且如果他們想先建立友好關係再談生意，也不要感到驚訝。"
  },
  {
    "word": "steady",
    "pos": "adj.",
    "cn_def": "穩定的；平穩的",
    "en_def": "continuing or developing in a regular way without big changes",
    "sentence": "A: How is the new coffee shop on the ground floor of our office building doing after its first three months? B: The owner told me business has been {{BLANK}}, with about two hundred customers every weekday, and she plans to add sandwiches and salads to the menu so that office workers can buy lunch there too.",
    "cn": "A：我們辦公大樓一樓新開的咖啡店開幕三個月後經營得如何？ B：老闆告訴我生意一直很【穩定】，每個平日約有兩百位顧客，她打算在菜單上加入三明治和沙拉，讓上班族也能在那裡買午餐。"
  },
  {
    "word": "deeply",
    "pos": "adv.",
    "cn_def": "深深地；非常",
    "en_def": "very much; strongly",
    "sentence": "A: How did the staff react when the factory manager announced that he would retire at the end of the year? B: Many workers were {{BLANK}} moved, because he had worked there for thirty-five years, and he always remembered everyone's birthday and helped families when they were having difficult times.",
    "cn": "A：工廠經理宣布他將在年底退休時，員工有什麼反應？ B：許多員工都【深深地】受到感動，因為他在那裡工作了三十五年，總是記得每個人的生日，並在大家遇到困難時幫助他們的家人。"
  },
  {
    "word": "carefully",
    "pos": "adv.",
    "cn_def": "仔細地；小心地",
    "en_def": "with great attention so that you avoid mistakes",
    "sentence": "A: Is there anything special I should do before I sign the lease for the new branch office downtown? B: Yes, read every page {{BLANK}}, especially the part about repairs and rent increases, because last time we missed a small sentence and had to pay for a new air conditioner ourselves.",
    "cn": "A：簽下市中心新分公司的租約前，有什麼特別需要做的嗎？ B：有，要【仔細地】閱讀每一頁，特別是有關維修和調漲租金的部分，因為上次我們漏看了一個小句子，結果只好自己出錢買新冷氣。"
  },
  {
    "word": "closely",
    "pos": "adv.",
    "cn_def": "密切地；仔細地",
    "en_def": "with careful attention; in a way that involves working together a lot",
    "sentence": "A: Why does the quality control team check every tenth bottle on the production line so often these days? B: After a customer found a crack in one of our bottles last month, the director asked us to watch the machines {{BLANK}} and report even the smallest problem immediately to the engineering department.",
    "cn": "A：品管團隊最近為什麼這麼頻繁地檢查生產線上每第十瓶產品？ B：上個月有位顧客在我們的一個瓶子上發現裂痕後，主管要我們【密切地】監看機器，即使是最小的問題也要立刻回報工程部。"
  },
  {
    "word": "fully",
    "pos": "adv.",
    "cn_def": "完全地；充分地",
    "en_def": "completely",
    "sentence": "A: Can the new employees start working at the front desk of the hotel on Monday morning? B: Not yet, because they will not be {{BLANK}} trained until the end of next week, and they still need to learn how to use the booking system and deal with guests who want to change their rooms.",
    "cn": "A：新員工星期一早上可以開始在飯店櫃台工作嗎？ B：還不行，因為他們要到下週末才會【完全】受訓完成，還需要學會使用訂房系統，以及處理想要換房間的房客。"
  },
  {
    "word": "intently",
    "pos": "adv.",
    "cn_def": "專注地；專心地",
    "en_def": "with great attention and interest",
    "sentence": "A: Why was everyone so quiet during the meeting when the chief financial officer explained the new budget? B: People listened {{BLANK}} because she was talking about which departments would lose money next year, and many managers were worried that their teams might become smaller after the changes.",
    "cn": "A：財務長說明新預算時，會議中為什麼大家都那麼安靜？ B：大家都【專注地】聆聽，因為她在講明年哪些部門會被刪減經費，許多經理擔心改變之後他們的團隊可能會縮編。"
  },
  {
    "word": "calmly",
    "pos": "adv.",
    "cn_def": "冷靜地；平靜地",
    "en_def": "in a quiet way, without getting upset or excited",
    "sentence": "A: What happened at the airport check-in counter when the flight to Singapore was canceled this morning? B: Many passengers were angry, but the airline agent explained the situation {{BLANK}}, offered everyone a hotel room and a meal ticket, and booked them on the first flight tomorrow morning.",
    "cn": "A：今天早上飛往新加坡的班機取消時，機場報到櫃台發生了什麼事？ B：許多乘客很生氣，但航空公司人員【冷靜地】說明情況，提供每個人飯店房間和餐券，並幫他們訂了明天早上的第一班飛機。"
  },
  {
    "word": "consistently",
    "pos": "adv.",
    "cn_def": "一貫地；始終如一地",
    "en_def": "always in the same way, especially in a good way",
    "sentence": "A: Why did the company choose Maria as the Employee of the Year instead of someone from the sales team? B: She has {{BLANK}} delivered excellent work for five years, she has never missed a deadline, and customers often send emails to thank her for solving their problems quickly and politely.",
    "cn": "A：公司為什麼選瑪莉亞當年度最佳員工，而不是業務團隊的人？ B：她五年來【始終如一地】交出優秀的成果，從未錯過任何截止期限，而且顧客常寄電子郵件感謝她迅速又有禮貌地解決問題。"
  },
  {
    "word": "briefly",
    "pos": "adv.",
    "cn_def": "簡短地；短暫地",
    "en_def": "for a short time; in a few words",
    "sentence": "A: The board meeting starts in ten minutes, so do I have time to explain the whole marketing plan? B: No, please describe it {{BLANK}} in two or three minutes, and then send the full report by email afterward, because the directors have a long list of other topics to discuss this morning.",
    "cn": "A：董事會十分鐘後就要開始了，我有時間解釋整個行銷計畫嗎？ B：沒有，請用兩三分鐘【簡短地】說明，之後再用電子郵件寄送完整報告，因為董事們今天早上還有一長串其他議題要討論。"
  },
  {
    "word": "mentally",
    "pos": "adv.",
    "cn_def": "心理上；精神上",
    "en_def": "in the mind; relating to thinking and feelings",
    "sentence": "A: Why does the airline give its pilots so much rest time between long international flights? B: Flying for twelve hours is very tiring, and pilots need to be {{BLANK}} prepared to make quick decisions in bad weather, so the company makes sure they sleep well before every trip.",
    "cn": "A：為什麼航空公司在長途國際航班之間給機師這麼多休息時間？ B：飛行十二小時非常累人，而機師需要在【心理上】做好準備，才能在惡劣天氣中迅速做決定，所以公司會確保他們每趟飛行前都睡得好。"
  },
  {
    "word": "actively",
    "pos": "adv.",
    "cn_def": "積極地；主動地",
    "en_def": "in a busy, energetic way; by taking action",
    "sentence": "A: How is your team preparing for the new branch opening in Singapore next spring? B: We are {{BLANK}} looking for local staff who speak English and Chinese, and next month two of our managers will fly there to meet possible partners and visit several office buildings.",
    "cn": "A：你們團隊如何為明年春天在新加坡開設新分公司做準備？ B：我們正【積極地】尋找會說英文和中文的當地員工，下個月我們有兩位經理會飛過去和潛在合作夥伴見面，並參觀幾棟辦公大樓。"
  }
];

const MCQS = [
  {
    "q": "This year the company will move its main _____ to online sales. Most of the advertising budget will go to social media.",
    "options": [
      "focus",
      "distraction",
      "interruption",
      "awareness"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Please pay close _____ to the safety video before the flight. It explains what to do in an emergency.",
    "options": [
      "engagement",
      "absorption",
      "attention",
      "interruption"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The city launched a campaign to increase public _____ of road safety. Posters now appear on every bus and train.",
    "options": [
      "interruption",
      "awareness",
      "distraction",
      "immersion"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Loud music in an office can be a serious _____. Many workers find it hard to finish their reports with noise around them.",
    "options": [
      "engagement",
      "mindfulness",
      "awareness",
      "distraction"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The power went off twice during the online meeting. After the second _____, the manager decided to continue the discussion tomorrow.",
    "options": [
      "attention",
      "focus",
      "interruption",
      "engagement"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The yoga teacher includes ten minutes of _____ at the end of every class. Students sit quietly and notice their breathing.",
    "options": [
      "mindfulness",
      "distraction",
      "interruption",
      "engagement"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Customer _____ on our social media pages has doubled this year. More people are commenting on and sharing our posts.",
    "options": [
      "interruption",
      "immersion",
      "distraction",
      "engagement"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "It is hard to _____ on your work when your phone keeps ringing. Try turning it off while you write the report.",
    "options": [
      "ignore",
      "concentrate",
      "absorb",
      "attend"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "A sales assistant will _____ to you in a moment. Please take a seat and look at our new catalog while you wait.",
    "options": [
      "concentrate",
      "refocus",
      "absorb",
      "attend"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Children can _____ a new language very quickly. Older learners usually need more time and practice to remember new words.",
    "options": [
      "attend",
      "absorb",
      "concentrate",
      "refocus"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Do not _____ the warning lights on your car's dashboard. They usually mean that something needs to be checked by a mechanic.",
    "options": [
      "ignore",
      "concentrate",
      "attend",
      "absorb"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "After the merger, the company plans to _____ its resources on its core business. It will sell the hotel division next year.",
    "options": [
      "ignore",
      "attend",
      "refocus",
      "absorb"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The nurses at the clinic are very _____ to their patients. They check on everyone regularly and answer questions patiently.",
    "options": [
      "distracted",
      "attentive",
      "absorbed",
      "steady"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Our team stayed _____ on the main goal throughout the project. As a result, we finished two weeks ahead of schedule.",
    "options": [
      "distracted",
      "mindful",
      "steady",
      "focused"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Security guards must remain _____ during the night shift. Coffee and short walks help them stay awake and watch the cameras.",
    "options": [
      "absorbed",
      "distracted",
      "alert",
      "mindful"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Jason was so _____ in the novel that he missed his train stop. He did not look up until the last station.",
    "options": [
      "absorbed",
      "attentive",
      "alert",
      "steady"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The driver was _____ by a text message and did not see the red light. Luckily, nobody was hurt in the accident.",
    "options": [
      "attentive",
      "steady",
      "distracted",
      "mindful"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Good trainers keep their audience _____ by asking questions. People remember more when they take part in the lesson.",
    "options": [
      "engaged",
      "distracted",
      "steady",
      "mindful"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Please be _____ of other passengers and keep your voice down. Many people on this train are sleeping or working.",
    "options": [
      "absorbed",
      "mindful",
      "focused",
      "steady"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Housing prices in the area have shown a _____ rise over the past ten years. They have gone up about three percent annually.",
    "options": [
      "alert",
      "attentive",
      "distracted",
      "steady"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The CEO was _____ disappointed by the poor sales results. She has asked every manager to send her a new plan by Friday.",
    "options": [
      "deeply",
      "actively",
      "intently",
      "carefully"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Please check the shipping address _____ before you send the package. Last week we sent three boxes to the wrong city.",
    "options": [
      "deeply",
      "mentally",
      "calmly",
      "carefully"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The new manager will work _____ with the design team. She will meet them every morning to review their progress.",
    "options": [
      "briefly",
      "closely",
      "mentally",
      "deeply"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The hotel is _____ booked for the music festival weekend. Guests who want a room should try the hotels near the airport.",
    "options": [
      "briefly",
      "calmly",
      "fully",
      "intently"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The students listened _____ as the famous chef explained her recipe. Nobody wanted to miss a single step.",
    "options": [
      "mentally",
      "consistently",
      "fully",
      "intently"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "When the fire alarm rang, the teacher _____ led the children out of the building. Nobody panicked, and everyone was safe.",
    "options": [
      "briefly",
      "calmly",
      "mentally",
      "deeply"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Our online store has _____ received five-star reviews since it opened. Customers love our fast delivery and friendly service.",
    "options": [
      "briefly",
      "intently",
      "consistently",
      "mentally"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The manager spoke _____ at the start of the meeting. Then she let the team leaders present their reports in detail.",
    "options": [
      "briefly",
      "deeply",
      "mentally",
      "fully"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "Running a marathon is hard physically and _____. Runners must stay strong in their minds when their legs feel tired.",
    "options": [
      "closely",
      "briefly",
      "intently",
      "mentally"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The company is _____ looking for new partners in Southeast Asia. It hopes to open two offices there next year.",
    "options": [
      "deeply",
      "actively",
      "calmly",
      "briefly"
    ],
    "answer": 1,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "focus": {
    "pos": "n.",
    "en_def": "the main thing that you pay attention to",
    "cn_def": "焦點；重點；專注"
  },
  "attention": {
    "pos": "n.",
    "en_def": "the act of watching, listening to or thinking about something carefully",
    "cn_def": "注意力；注意"
  },
  "absorption": {
    "pos": "n.",
    "en_def": "the state of being so interested in something that you notice nothing else",
    "cn_def": "全神貫注；專心"
  },
  "awareness": {
    "pos": "n.",
    "en_def": "knowing about something or understanding that it is important",
    "cn_def": "意識；認識"
  },
  "distraction": {
    "pos": "n.",
    "en_def": "something that takes your attention away from what you are doing",
    "cn_def": "使人分心的事物；干擾"
  },
  "interruption": {
    "pos": "n.",
    "en_def": "a short time when something stops before it continues again",
    "cn_def": "打斷；中斷"
  },
  "mindfulness": {
    "pos": "n.",
    "en_def": "the practice of calmly paying attention to the present moment",
    "cn_def": "正念；留心當下"
  },
  "engagement": {
    "pos": "n.",
    "en_def": "the state of being interested and involved in something",
    "cn_def": "投入；參與"
  },
  "immersion": {
    "pos": "n.",
    "en_def": "being completely involved in an activity or surrounded by a language or culture",
    "cn_def": "沉浸；投入"
  },
  "concentrate": {
    "pos": "v.",
    "en_def": "to give all your attention to one thing",
    "cn_def": "專心；集中注意力"
  },
  "attend": {
    "pos": "v.",
    "en_def": "to deal with or take care of someone or something (usually attend to)",
    "cn_def": "處理；照顧（attend to）"
  },
  "absorb": {
    "pos": "v.",
    "en_def": "to take in and understand information",
    "cn_def": "吸收；理解"
  },
  "ignore": {
    "pos": "v.",
    "en_def": "to pay no attention to something or someone",
    "cn_def": "忽略；不理會"
  },
  "refocus": {
    "pos": "v.",
    "en_def": "to give your attention or effort to something again or to something new",
    "cn_def": "重新集中；重新聚焦"
  },
  "attentive": {
    "pos": "adj.",
    "en_def": "listening or watching carefully; helpful and caring toward others",
    "cn_def": "專心的；體貼周到的"
  },
  "focused": {
    "pos": "adj.",
    "en_def": "paying full attention to one aim or task",
    "cn_def": "專注的；集中的"
  },
  "alert": {
    "pos": "adj.",
    "en_def": "awake and quick to notice things",
    "cn_def": "警覺的；機靈的"
  },
  "absorbed": {
    "pos": "adj.",
    "en_def": "so interested in something that you notice nothing else",
    "cn_def": "全神貫注的；專心的"
  },
  "distracted": {
    "pos": "adj.",
    "en_def": "unable to pay attention because you are thinking about something else",
    "cn_def": "分心的"
  },
  "engaged": {
    "pos": "adj.",
    "en_def": "interested and taking an active part in something",
    "cn_def": "投入的；參與的"
  },
  "mindful": {
    "pos": "adj.",
    "en_def": "remembering something and thinking about it carefully",
    "cn_def": "留意的；注意的"
  },
  "steady": {
    "pos": "adj.",
    "en_def": "continuing or developing in a regular way without big changes",
    "cn_def": "穩定的；平穩的"
  },
  "deeply": {
    "pos": "adv.",
    "en_def": "very much; strongly",
    "cn_def": "深深地；非常"
  },
  "carefully": {
    "pos": "adv.",
    "en_def": "with great attention so that you avoid mistakes",
    "cn_def": "仔細地；小心地"
  },
  "closely": {
    "pos": "adv.",
    "en_def": "with careful attention; in a way that involves working together a lot",
    "cn_def": "密切地；仔細地"
  },
  "fully": {
    "pos": "adv.",
    "en_def": "completely",
    "cn_def": "完全地；充分地"
  },
  "intently": {
    "pos": "adv.",
    "en_def": "with great attention and interest",
    "cn_def": "專注地；專心地"
  },
  "calmly": {
    "pos": "adv.",
    "en_def": "in a quiet way, without getting upset or excited",
    "cn_def": "冷靜地；平靜地"
  },
  "consistently": {
    "pos": "adv.",
    "en_def": "always in the same way, especially in a good way",
    "cn_def": "一貫地；始終如一地"
  },
  "briefly": {
    "pos": "adv.",
    "en_def": "for a short time; in a few words",
    "cn_def": "簡短地；短暫地"
  },
  "mentally": {
    "pos": "adv.",
    "en_def": "in the mind; relating to thinking and feelings",
    "cn_def": "心理上；精神上"
  },
  "actively": {
    "pos": "adv.",
    "en_def": "in a busy, energetic way; by taking action",
    "cn_def": "積極地；主動地"
  }
};

const EXTRA_GLOSSES = {};
