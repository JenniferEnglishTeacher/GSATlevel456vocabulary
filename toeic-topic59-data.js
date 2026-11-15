// Topic 59 Quiz Data: Classmates 同學
// Source word list: https://www.examword.com/group-topic/classmates — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T59 - Classmates 同學",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "peer",
    "pos": "n.",
    "cn_def": "同儕；同輩",
    "en_def": "a person of the same age, class or level as you",
    "sentence": "A: The new interns seem nervous about giving feedback to the senior designers, so how can we help them feel more confident during their first month? B: Let's pair each intern with a {{BLANK}} from last year's program, because people usually ask questions more freely when the person helping them is at the same level.",
    "cn": "A：新來的實習生似乎不太敢給資深設計師意見，我們要怎麼幫助他們在第一個月更有自信？ B：我們讓每位實習生搭配一位去年計畫的【同儕】吧，因為當幫忙的人和自己程度相同時，大家通常會更放心地發問。"
  },
  {
    "word": "schoolmate",
    "pos": "n.",
    "cn_def": "同校同學；校友",
    "en_def": "a person who goes or went to the same school as you",
    "sentence": "A: I heard you already knew the new marketing manager before she joined our company last week, so where did you two first meet? B: She was my {{BLANK}} at a high school in Tainan, and although we were in different classes, we often took the same bus home every afternoon.",
    "cn": "A：聽說新來的行銷經理上週加入公司前你就認識她了，你們兩個最初是在哪裡認識的？ B：她是我在台南念高中時的【同校同學】，雖然我們不同班，但每天下午常搭同一班公車回家。"
  },
  {
    "word": "friend",
    "pos": "n.",
    "cn_def": "朋友",
    "en_def": "a person you know well and like",
    "sentence": "A: You look really happy today, and you keep smiling at your phone, so did you get some good news from the head office this morning? B: Not exactly, but my closest {{BLANK}} from university just told me she is moving to Taipei next month and will work in the building across the street.",
    "cn": "A：你今天看起來好開心，一直對著手機微笑，是今天早上收到總公司的好消息嗎？ B：不完全是，是我大學時最要好的【朋友】剛告訴我，她下個月要搬到台北，而且會在對街的大樓上班。"
  },
  {
    "word": "teammate",
    "pos": "n.",
    "cn_def": "隊友",
    "en_def": "a person who is on the same team as you",
    "sentence": "A: Our department won the company basketball tournament on Saturday, so who scored the winning points in the last few seconds of the game? B: Kevin from accounting threw the final shot, but he said he could not have done it without his {{BLANK}}, who passed him the ball at exactly the right moment.",
    "cn": "A：我們部門星期六贏得了公司籃球賽，最後幾秒是誰得到致勝分的？ B：會計部的 Kevin 投進最後一球，但他說如果沒有他的【隊友】在最恰當的時刻把球傳給他，他不可能做到。"
  },
  {
    "word": "partner",
    "pos": "n.",
    "cn_def": "夥伴；搭檔",
    "en_def": "a person you work or do an activity with",
    "sentence": "A: The training course next week includes several role-play exercises about handling customer complaints, so do we need to prepare anything before the first session? B: Yes, the trainer asked everyone to choose a {{BLANK}} from another department and practice a short conversation together, so you should contact someone by Thursday.",
    "cn": "A：下週的培訓課程有好幾個處理客訴的角色扮演練習，第一堂課前我們需要準備什麼嗎？ B：需要，講師要求每個人從其他部門選一位【搭檔】，一起練習一段簡短的對話，所以你應該在星期四前聯絡好人選。"
  },
  {
    "word": "group",
    "pos": "n.",
    "cn_def": "小組；群體",
    "en_def": "a number of people who do something together",
    "sentence": "A: There are almost forty new employees at the orientation today, so how will the trainers manage such a large number of people in one room? B: They plan to divide everyone into a small {{BLANK}} of five or six people, and each one will have its own table, leader, and set of tasks.",
    "cn": "A：今天的新人訓練有將近四十位新員工，訓練師要怎麼在一個房間裡帶這麼多人？ B：他們打算把大家分成五、六人一組的【小組】，每組都有自己的桌子、組長和一套任務。"
  },
  {
    "word": "class",
    "pos": "n.",
    "cn_def": "班級；課程",
    "en_def": "a group of students taught together; a course of lessons",
    "sentence": "A: You have been leaving the office early every Tuesday and Thursday this month, so are you taking care of something important for your family? B: No, I signed up for an evening Japanese {{BLANK}} near the train station, because our company is going to open a new branch in Osaka next spring.",
    "cn": "A：你這個月每週二和週四都提早下班，是在處理家裡重要的事嗎？ B：不是，我報名了火車站附近的晚間日文【課程】，因為我們公司明年春天要在大阪開新分公司。"
  },
  {
    "word": "cooperate",
    "pos": "v.",
    "cn_def": "合作；配合",
    "en_def": "to work together with others to reach the same goal",
    "sentence": "A: The building manager says the fire drill will take about thirty minutes on Friday afternoon, so what does he expect from all the tenants? B: He hopes every company will {{BLANK}} with the safety team by leaving quickly through the stairs, because last year many workers ignored the alarm and stayed at their desks.",
    "cn": "A：大樓管理員說星期五下午的消防演習大約要三十分鐘，他希望所有租戶怎麼做？ B：他希望每家公司都能【配合】安全小組，迅速從樓梯離開，因為去年很多員工不理會警報，一直待在座位上。"
  },
  {
    "word": "collaborate",
    "pos": "v.",
    "cn_def": "協作；共同合作",
    "en_def": "to work together with someone to create or achieve something",
    "sentence": "A: The new advertising campaign for the sports drink looks amazing, so did our design team create all the videos and posters by themselves? B: No, they decided to {{BLANK}} with a young film studio from Kaohsiung, and the two teams spent three months sharing ideas, writing scripts, and filming together.",
    "cn": "A：那款運動飲料的新廣告看起來好棒，所有影片和海報都是我們設計團隊自己做的嗎？ B：不是，他們決定和一家來自高雄的年輕影像工作室【共同合作】，兩個團隊花了三個月一起交流想法、寫腳本和拍攝。"
  },
  {
    "word": "share",
    "pos": "v.",
    "cn_def": "分享；共用",
    "en_def": "to have or use something together with others",
    "sentence": "A: The office is getting very crowded since the sales team moved to our floor, so where will the two new assistants sit next week? B: Until the renovation upstairs is finished, they will have to {{BLANK}} the long desk by the window, and they can keep their files in the cabinet behind it.",
    "cn": "A：自從業務團隊搬到我們這層後辦公室變得好擠，下週兩位新助理要坐哪裡？ B：在樓上整修完成之前，他們得【共用】窗邊那張長桌，文件可以放在後面的櫃子裡。"
  },
  {
    "word": "support",
    "pos": "v.",
    "cn_def": "支持；支援",
    "en_def": "to help and encourage someone",
    "sentence": "A: Linda seems worried about leading her first big project while the director is away on a business trip, so is there anything we can do? B: Let's {{BLANK}} her by answering her questions quickly and offering to check her reports, because she will feel much calmer if she knows the team is behind her.",
    "cn": "A：主任出差期間，Linda 要帶她的第一個大型專案，她似乎很擔心，我們能做些什麼嗎？ B：我們就盡快回答她的問題、主動幫她檢查報告來【支持】她，因為只要知道團隊站在她這邊，她會安心很多。"
  },
  {
    "word": "discuss",
    "pos": "v.",
    "cn_def": "討論",
    "en_def": "to talk about something with other people",
    "sentence": "A: The customer survey shows that many people are unhappy with our delivery times, so when will the managers decide how to solve this problem? B: They are meeting on Monday morning to {{BLANK}} several possible plans, including hiring more drivers and opening a small warehouse in the southern part of the city.",
    "cn": "A：顧客調查顯示很多人不滿意我們的送貨時間，經理們什麼時候會決定怎麼解決這個問題？ B：他們星期一早上會開會【討論】幾個可能的方案，包括多雇幾位司機和在市區南邊開一個小倉庫。"
  },
  {
    "word": "interact",
    "pos": "v.",
    "cn_def": "互動",
    "en_def": "to talk and do things with other people",
    "sentence": "A: Why did the hotel ask its front desk staff to stand beside the counter instead of sitting behind the computer screens all day? B: The manager believes that guests feel more welcome when employees {{BLANK}} with them face to face, smile often, and offer useful advice about restaurants and places to visit nearby.",
    "cn": "A：為什麼飯店要求櫃檯人員站在櫃檯旁邊，而不是整天坐在電腦螢幕後面？ B：經理認為當員工面對面和客人【互動】、常常微笑，並提供附近餐廳和景點的實用建議時，客人會覺得更受歡迎。"
  },
  {
    "word": "respect",
    "pos": "v.",
    "cn_def": "尊重",
    "en_def": "to treat someone or something with care because you think they are important",
    "sentence": "A: Our new team includes people from five different countries, so how can we avoid misunderstandings when we plan meetings and company events? B: We should {{BLANK}} everyone's holidays and customs, ask politely when we are not sure about something, and choose times and foods that work for the whole team.",
    "cn": "A：我們的新團隊有來自五個不同國家的人，規劃會議和公司活動時要怎麼避免誤會？ B：我們應該【尊重】每個人的節日和習俗，不確定時禮貌地詢問，並選擇適合整個團隊的時間和食物。"
  },
  {
    "word": "helpful",
    "pos": "adj.",
    "cn_def": "有幫助的；樂於助人的",
    "en_def": "useful; willing to help",
    "sentence": "A: How was your first week at the new branch, and did you have any trouble learning the computer system the company uses for orders? B: It was great, because the staff there were very {{BLANK}} and showed me every step slowly, so I could process orders by myself by Wednesday afternoon.",
    "cn": "A：你在新分店的第一週怎麼樣？學公司的訂單電腦系統有遇到困難嗎？ B：很棒，因為那裡的員工都非常【樂於助人】，慢慢地教我每個步驟，所以到星期三下午我就能自己處理訂單了。"
  },
  {
    "word": "friendly",
    "pos": "adj.",
    "cn_def": "友善的",
    "en_def": "kind and pleasant to other people",
    "sentence": "A: We are looking for a café where we can hold a relaxed meeting with our new clients from Singapore next Friday, so do you know a good place? B: There is a quiet café on Fifth Street where the owner is very {{BLANK}}, remembers every guest's name, and often brings free cookies to the table.",
    "cn": "A：我們在找一家咖啡館，下週五要和新加坡的新客戶輕鬆開個會，你知道哪裡不錯嗎？ B：第五街有一家安靜的咖啡館，老闆非常【友善】，記得每位客人的名字，還常常送免費餅乾到桌上。"
  },
  {
    "word": "competitive",
    "pos": "adj.",
    "cn_def": "好勝的；競爭激烈的",
    "en_def": "wanting very much to win or be better than others",
    "sentence": "A: The sales contest only started on Monday, but Jason has already called over a hundred customers, so why is he working so hard this week? B: He is a very {{BLANK}} person who always wants to finish first, and the winner of this contest will also get a free trip to Japan.",
    "cn": "A：業績競賽星期一才開始，Jason 已經打給超過一百位客戶了，他這週為什麼這麼拚？ B：他是個非常【好勝】的人，總是想拿第一，而且這次比賽的優勝者還能免費去日本旅行。"
  },
  {
    "word": "supportive",
    "pos": "adj.",
    "cn_def": "支持的；給予鼓勵的",
    "en_def": "giving help and encouragement",
    "sentence": "A: You decided to take evening classes for your master's degree while working full-time, so how does your manager feel about your busy schedule? B: She has been very {{BLANK}} about it, and she even lets me leave thirty minutes early on exam days so that I can get to campus on time.",
    "cn": "A：你決定一邊全職工作一邊上夜間碩士課程，你的主管對你這麼忙的行程有什麼看法？ B：她一直非常【支持】，甚至讓我在考試那天提早三十分鐘下班，好讓我準時到學校。"
  },
  {
    "word": "cooperative",
    "pos": "adj.",
    "cn_def": "合作的；配合的",
    "en_def": "willing to work with others and help them",
    "sentence": "A: The software company in Hsinchu finally agreed to fix the problems with our new booking system, so how was the meeting with their engineers yesterday? B: It went smoothly, because their team was very {{BLANK}}, answered all our questions, and promised to send us an updated version before the end of the month.",
    "cn": "A：新竹那家軟體公司終於同意修正我們新訂位系統的問題，昨天和他們工程師的會議怎麼樣？ B：很順利，因為他們的團隊非常【配合】，回答了我們所有的問題，還答應在月底前寄給我們更新版本。"
  },
  {
    "word": "active",
    "pos": "adj.",
    "cn_def": "積極的；活躍的",
    "en_def": "doing a lot of things; taking part",
    "sentence": "A: The company wants to choose one employee to represent our office at the regional leadership program next spring, so who do you think should go? B: I would recommend Grace, because she is very {{BLANK}} in team meetings, often shares new ideas, and volunteers to organize events for the whole department.",
    "cn": "A：公司想選一位員工代表我們辦公室參加明年春天的區域領導力課程，你覺得誰該去？ B：我推薦 Grace，因為她在團隊會議中非常【積極】，常常提出新點子，還自願幫整個部門籌辦活動。"
  },
  {
    "word": "quiet",
    "pos": "adj.",
    "cn_def": "安靜的；文靜的",
    "en_def": "making little noise; not talking much",
    "sentence": "A: The new accountant does not say much during our weekly meetings, so do you think she is unhappy with her job or with the team? B: I don't think so, because she is just a {{BLANK}} person who prefers listening, and her reports are always the most careful and detailed ones in the office.",
    "cn": "A：新來的會計在每週會議中話不多，你覺得她是對工作或團隊不滿意嗎？ B：我不這麼認為，她只是個【文靜】的人，比較喜歡傾聽，而且她的報告一直是辦公室裡最仔細、最詳盡的。"
  },
  {
    "word": "popular",
    "pos": "adj.",
    "cn_def": "受歡迎的",
    "en_def": "liked by many people",
    "sentence": "A: Why is there always such a long line at the small noodle shop next to our office building every day around twelve o'clock? B: It is very {{BLANK}} with office workers in this area because the prices are low, the portions are big, and the owner can prepare an order in less than five minutes.",
    "cn": "A：為什麼我們辦公大樓旁邊那家小麵店每天中午十二點左右都大排長龍？ B：它在這一帶的上班族之間非常【受歡迎】，因為價格便宜、份量大，而且老闆不到五分鐘就能做好一份餐點。"
  },
  {
    "word": "familiar",
    "pos": "adj.",
    "cn_def": "熟悉的",
    "en_def": "known to you because you have seen or used it before",
    "sentence": "A: We need someone to help the visitors from our German partner find their way around the factory tomorrow, so who should we ask to guide them? B: Let's ask Peter, because he has worked in every section of the factory for ten years and is {{BLANK}} with all the machines and safety rules.",
    "cn": "A：明天需要有人幫德國合作夥伴的訪客認識工廠環境，我們該請誰帶他們？ B：請 Peter 吧，因為他在工廠每個部門都待過，做了十年，對所有機器和安全規定都很【熟悉】。"
  },
  {
    "word": "diverse",
    "pos": "adj.",
    "cn_def": "多元的；多樣的",
    "en_def": "very different from each other; including many types",
    "sentence": "A: The new international school near the science park has been hiring a lot of teachers this year, so what kind of students do they have? B: Their student body is very {{BLANK}}, with children from more than twenty countries, so the school also offers language support classes and cultural events every month.",
    "cn": "A：科學園區附近那所新的國際學校今年聘了很多老師，他們的學生是什麼樣的？ B：他們的學生非常【多元】，有來自二十多個國家的孩子，所以學校每個月也會提供語言輔導課和文化活動。"
  },
  {
    "word": "attentive",
    "pos": "adj.",
    "cn_def": "專心的；體貼周到的",
    "en_def": "listening or watching carefully; noticing what others need",
    "sentence": "A: The hotel received excellent reviews on the travel website last month, so what did the guests like most about their stay there? B: Many of them said the staff were very {{BLANK}}, because they noticed small things like extra pillows or birthday plans and took care of them before guests even asked.",
    "cn": "A：那家飯店上個月在旅遊網站上得到很好的評價，客人最喜歡住宿的哪一點？ B：很多人說員工非常【體貼周到】，因為他們會注意到額外枕頭或生日安排這類小事，甚至在客人開口之前就處理好了。"
  },
  {
    "word": "respectful",
    "pos": "adj.",
    "cn_def": "尊重人的；有禮貌的",
    "en_def": "showing politeness and care for others",
    "sentence": "A: Some customers become very angry on the phone when their packages arrive late, so how should new call center staff deal with them? B: They should stay calm and {{BLANK}}, listen without interrupting, apologize for the delay, and explain clearly when the customer can expect to receive the package.",
    "cn": "A：包裹延遲送達時，有些客人在電話裡會非常生氣，新來的客服人員該怎麼應對？ B：他們應該保持冷靜和【有禮貌】，不打斷對方地傾聽，為延誤道歉，並清楚說明客人預計何時能收到包裹。"
  },
  {
    "word": "discussion",
    "pos": "n.",
    "cn_def": "討論",
    "en_def": "a talk about something between people",
    "sentence": "A: The meeting about the new holiday schedule lasted almost three hours yesterday afternoon, so why did it take so long to make a decision? B: There was a long {{BLANK}} about whether the factory should close for a whole week in February or only for three days, because both choices have problems.",
    "cn": "A：昨天下午關於新假期安排的會議開了將近三個小時，為什麼這麼久才做出決定？ B：大家針對工廠二月該停工整整一週還是只停三天進行了很長的【討論】，因為兩種選擇都有問題。"
  },
  {
    "word": "activity",
    "pos": "n.",
    "cn_def": "活動",
    "en_def": "something people do for fun or to reach a goal",
    "sentence": "A: The human resources department wants to plan something special for the staff before the busy season starts in October, so do you have any ideas? B: A team-building {{BLANK}} like a cooking contest or a mountain hike would be fun, because people from different departments could get to know each other better.",
    "cn": "A：人資部想在十月旺季開始前為員工安排一些特別的事，你有什麼想法嗎？ B：像烹飪比賽或爬山這類團隊建立【活動】會很有趣，因為不同部門的人可以更了解彼此。"
  },
  {
    "word": "assignment",
    "pos": "n.",
    "cn_def": "任務；作業",
    "en_def": "a piece of work given to someone as part of a job or course",
    "sentence": "A: You look very busy this week, and I saw you stay at the office until nine last night, so what are you working on now? B: My manager gave me a special {{BLANK}} to compare the prices of five suppliers, and she needs my report before the budget meeting on Friday morning.",
    "cn": "A：你這週看起來好忙，我看到你昨晚待在辦公室到九點，你現在在忙什麼？ B：主管交給我一項特別【任務】，要比較五家供應商的價格，她需要在星期五早上預算會議前拿到我的報告。"
  },
  {
    "word": "presentation",
    "pos": "n.",
    "cn_def": "簡報；發表",
    "en_def": "a talk that gives information to a group of people",
    "sentence": "A: The clients from Tokyo are arriving at ten tomorrow morning, so is everything ready for the meeting in the large conference room? B: Almost, but I still need to check the projector and practice my {{BLANK}} about our new products one more time, because I want to finish it in twenty minutes.",
    "cn": "A：東京的客戶明天早上十點到，大會議室的會議都準備好了嗎？ B：差不多了，但我還要檢查投影機，並再練習一次介紹新產品的【簡報】，因為我想在二十分鐘內講完。"
  },
  {
    "word": "study",
    "pos": "v.",
    "cn_def": "研讀；學習",
    "en_def": "to spend time learning about a subject",
    "sentence": "A: You told me you are planning to apply for the position at our London office next year, so how are you preparing for the interview? B: I {{BLANK}} business English for an hour every night after dinner, and on weekends I join an online group where we practice speaking about our jobs.",
    "cn": "A：你跟我說你打算明年申請倫敦辦公室的職位，你怎麼準備面試？ B：我每天晚餐後花一小時【研讀】商用英文，週末則參加一個線上社團，一起練習談論我們的工作。"
  },
  {
    "word": "review",
    "pos": "v.",
    "cn_def": "審閱；複習",
    "en_def": "to look at or check something again carefully",
    "sentence": "A: The contract with the new cleaning company is almost ready, so can we sign it this afternoon and let them start working next Monday? B: Not yet, because our lawyer wants to {{BLANK}} every page carefully first, especially the part about the price increases and what happens if they miss a cleaning day.",
    "cn": "A：和新清潔公司的合約快好了，我們今天下午可以簽約，讓他們下週一開始工作嗎？ B：還不行，因為我們的律師想先仔細【審閱】每一頁，尤其是漲價的部分，以及如果他們漏掉一天清潔會怎樣。"
  },
  {
    "word": "get along",
    "pos": "v.phr.",
    "cn_def": "相處融洽",
    "en_def": "to have a friendly relationship with someone",
    "sentence": "A: The two new engineers will share an office and travel together to the factory in Vietnam every month, so do you think that will cause any problems? B: I don't think so, because they already {{BLANK}} very well, often eat lunch together, and even went hiking with their families last weekend.",
    "cn": "A：兩位新工程師要共用一間辦公室，每個月還要一起去越南的工廠，你覺得會有問題嗎？ B：我不這麼認為，因為他們已經【相處融洽】，常一起吃午餐，上週末甚至帶著家人一起去爬山。"
  }
];

const MCQS = [
  {
    "q": "New employees often learn faster from a _____ than from a manager. They feel comfortable asking someone at the same level simple questions.",
    "options": [
      "peer",
      "assignment",
      "presentation",
      "discussion"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Lisa thanked her _____ for passing her the ball in the final minute. Their company team won the volleyball match by one point.",
    "options": [
      "assignment",
      "class",
      "teammate",
      "discussion"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "For the role-play exercise, each trainee must choose a _____ and practice a sales call together. The trainer will then give both people feedback.",
    "options": [
      "presentation",
      "partner",
      "discussion",
      "assignment"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The workshop leader asked us to form a _____ of five people. Each one had to design a poster for the company picnic.",
    "options": [
      "presentation",
      "assignment",
      "discussion",
      "group"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Mr. Chen takes an evening cooking _____ at the community center every Wednesday. He wants to prepare healthier lunches for work.",
    "options": [
      "class",
      "peer",
      "teammate",
      "discussion"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "All tenants are asked to _____ with the security staff during tomorrow's fire drill. Please leave the building calmly by the nearest stairs.",
    "options": [
      "share",
      "review",
      "discuss",
      "cooperate"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Our design team will _____ with a local university on the new packaging. Students and designers will exchange ideas over the next three months.",
    "options": [
      "respect",
      "collaborate",
      "review",
      "share"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Until the renovation is finished, the two interns will _____ a desk near the window. Each will keep personal files in a separate drawer.",
    "options": [
      "discuss",
      "interact",
      "share",
      "cooperate"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "When Linda led her first project, her colleagues tried to _____ her by answering questions quickly. She said their help made her feel confident.",
    "options": [
      "discuss",
      "support",
      "interact",
      "collaborate"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The managers will meet on Monday to _____ ways to reduce delivery delays. They will decide on a final plan by Friday.",
    "options": [
      "discuss",
      "interact",
      "get along",
      "cooperate"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Front desk staff should _____ with guests in a warm and natural way. A friendly conversation can make visitors feel welcome right away.",
    "options": [
      "respect",
      "review",
      "interact",
      "support"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "In a team with members from many countries, it is important to _____ different customs. Ask politely if you are unsure about something.",
    "options": [
      "get along",
      "collaborate",
      "cooperate",
      "respect"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The staff at the new branch were very _____ and showed me every step of the ordering system. I learned the job in three days.",
    "options": [
      "competitive",
      "helpful",
      "quiet",
      "diverse"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The café owner is so _____ that she greets every customer by name. Many office workers stop by just to chat with her.",
    "options": [
      "diverse",
      "competitive",
      "quiet",
      "friendly"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Jason is a very _____ salesperson who always wants to finish first in every sales contest. He called over one hundred customers this week.",
    "options": [
      "competitive",
      "quiet",
      "respectful",
      "familiar"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "My manager has been very _____ of my plan to study for a master's degree. She even lets me leave early on exam days.",
    "options": [
      "diverse",
      "quiet",
      "supportive",
      "competitive"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The engineers from the software company were very _____ and fixed all the problems we reported. They even sent an update earlier than promised.",
    "options": [
      "quiet",
      "diverse",
      "popular",
      "cooperative"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Grace is very _____ in our weekly meetings and often suggests new ideas. She also volunteers to plan events for the department.",
    "options": [
      "quiet",
      "active",
      "familiar",
      "diverse"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The new accountant is a _____ person who rarely speaks during meetings. However, her reports are always clear and very detailed.",
    "options": [
      "competitive",
      "popular",
      "quiet",
      "active"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The noodle shop next to our building is very _____ with office workers. There is a long line outside every day at noon.",
    "options": [
      "popular",
      "respectful",
      "attentive",
      "diverse"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Peter has worked at the factory for ten years, so he is _____ with every machine. He will guide the visitors tomorrow.",
    "options": [
      "popular",
      "familiar",
      "competitive",
      "diverse"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The international school has a very _____ student body, with children from over twenty countries. It also holds cultural events every month.",
    "options": [
      "attentive",
      "respectful",
      "competitive",
      "diverse"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The hotel staff were so _____ that they noticed our anniversary and left flowers in our room. We will definitely stay there again.",
    "options": [
      "attentive",
      "diverse",
      "competitive",
      "quiet"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Call center staff must remain calm and _____ even when customers shout at them. They should listen carefully and apologize for any delay.",
    "options": [
      "popular",
      "diverse",
      "respectful",
      "competitive"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "After a long _____, the managers agreed to close the factory for three days in February. Everyone had a chance to give an opinion.",
    "options": [
      "teammate",
      "peer",
      "class",
      "discussion"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Human resources is planning a team-building _____ for October, such as a cooking contest or a mountain hike. All staff are welcome to join.",
    "options": [
      "activity",
      "peer",
      "assignment",
      "teammate"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "My manager gave me a special _____ to compare prices from five suppliers. I must finish the report before Friday's budget meeting.",
    "options": [
      "group",
      "peer",
      "assignment",
      "class"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "I will give a short _____ about our new products to the Tokyo clients tomorrow. I have practiced it three times with the projector.",
    "options": [
      "peer",
      "presentation",
      "group",
      "teammate"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Before we sign the contract, our lawyer needs to _____ every page carefully. She is especially concerned about the section on price increases.",
    "options": [
      "interact",
      "cooperate",
      "get along",
      "review"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The two new engineers _____ well, so working in the same office has not been a problem. They often eat lunch together, too.",
    "options": [
      "share",
      "get along",
      "discuss",
      "review"
    ],
    "answer": 1,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "peer": {
    "pos": "n.",
    "en_def": "a person of the same age, class or level as you",
    "cn_def": "同儕；同輩"
  },
  "schoolmate": {
    "pos": "n.",
    "en_def": "a person who goes or went to the same school as you",
    "cn_def": "同校同學；校友"
  },
  "friend": {
    "pos": "n.",
    "en_def": "a person you know well and like",
    "cn_def": "朋友"
  },
  "teammate": {
    "pos": "n.",
    "en_def": "a person who is on the same team as you",
    "cn_def": "隊友"
  },
  "partner": {
    "pos": "n.",
    "en_def": "a person you work or do an activity with",
    "cn_def": "夥伴；搭檔"
  },
  "group": {
    "pos": "n.",
    "en_def": "a number of people who do something together",
    "cn_def": "小組；群體"
  },
  "class": {
    "pos": "n.",
    "en_def": "a group of students taught together; a course of lessons",
    "cn_def": "班級；課程"
  },
  "cooperate": {
    "pos": "v.",
    "en_def": "to work together with others to reach the same goal",
    "cn_def": "合作；配合"
  },
  "collaborate": {
    "pos": "v.",
    "en_def": "to work together with someone to create or achieve something",
    "cn_def": "協作；共同合作"
  },
  "share": {
    "pos": "v.",
    "en_def": "to have or use something together with others",
    "cn_def": "分享；共用"
  },
  "support": {
    "pos": "v.",
    "en_def": "to help and encourage someone",
    "cn_def": "支持；支援"
  },
  "discuss": {
    "pos": "v.",
    "en_def": "to talk about something with other people",
    "cn_def": "討論"
  },
  "interact": {
    "pos": "v.",
    "en_def": "to talk and do things with other people",
    "cn_def": "互動"
  },
  "respect": {
    "pos": "v.",
    "en_def": "to treat someone or something with care because you think they are important",
    "cn_def": "尊重"
  },
  "helpful": {
    "pos": "adj.",
    "en_def": "useful; willing to help",
    "cn_def": "有幫助的；樂於助人的"
  },
  "friendly": {
    "pos": "adj.",
    "en_def": "kind and pleasant to other people",
    "cn_def": "友善的"
  },
  "competitive": {
    "pos": "adj.",
    "en_def": "wanting very much to win or be better than others",
    "cn_def": "好勝的；競爭激烈的"
  },
  "supportive": {
    "pos": "adj.",
    "en_def": "giving help and encouragement",
    "cn_def": "支持的；給予鼓勵的"
  },
  "cooperative": {
    "pos": "adj.",
    "en_def": "willing to work with others and help them",
    "cn_def": "合作的；配合的"
  },
  "active": {
    "pos": "adj.",
    "en_def": "doing a lot of things; taking part",
    "cn_def": "積極的；活躍的"
  },
  "quiet": {
    "pos": "adj.",
    "en_def": "making little noise; not talking much",
    "cn_def": "安靜的；文靜的"
  },
  "popular": {
    "pos": "adj.",
    "en_def": "liked by many people",
    "cn_def": "受歡迎的"
  },
  "familiar": {
    "pos": "adj.",
    "en_def": "known to you because you have seen or used it before",
    "cn_def": "熟悉的"
  },
  "diverse": {
    "pos": "adj.",
    "en_def": "very different from each other; including many types",
    "cn_def": "多元的；多樣的"
  },
  "attentive": {
    "pos": "adj.",
    "en_def": "listening or watching carefully; noticing what others need",
    "cn_def": "專心的；體貼周到的"
  },
  "respectful": {
    "pos": "adj.",
    "en_def": "showing politeness and care for others",
    "cn_def": "尊重人的；有禮貌的"
  },
  "discussion": {
    "pos": "n.",
    "en_def": "a talk about something between people",
    "cn_def": "討論"
  },
  "activity": {
    "pos": "n.",
    "en_def": "something people do for fun or to reach a goal",
    "cn_def": "活動"
  },
  "assignment": {
    "pos": "n.",
    "en_def": "a piece of work given to someone as part of a job or course",
    "cn_def": "任務；作業"
  },
  "presentation": {
    "pos": "n.",
    "en_def": "a talk that gives information to a group of people",
    "cn_def": "簡報；發表"
  },
  "study": {
    "pos": "v.",
    "en_def": "to spend time learning about a subject",
    "cn_def": "研讀；學習"
  },
  "review": {
    "pos": "v.",
    "en_def": "to look at or check something again carefully",
    "cn_def": "審閱；複習"
  },
  "get along": {
    "pos": "v.phr.",
    "en_def": "to have a friendly relationship with someone",
    "cn_def": "相處融洽"
  }
};

const EXTRA_GLOSSES = {};
