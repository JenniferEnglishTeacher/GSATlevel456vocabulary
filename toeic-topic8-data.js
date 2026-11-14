// Topic 8 Quiz Data: Advice 建議
// Source word list: https://www.examword.com/group-topic/advice — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T08 - Advice 建議",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "advise",
    "pos": "v.",
    "cn_def": "建議；勸告；忠告",
    "en_def": "to tell someone what you think they should do",
    "sentence": "A: I'm thinking about buying a used delivery van for my flower shop, but I don't know much about cars, so what should I do first? B: I would {{BLANK}} you to ask a trusted mechanic to check the engine and brakes carefully before you sign anything, because repairs on old vans can be very expensive.",
    "cn": "A：我在考慮為我的花店買一輛二手送貨車，但我不太懂車，我應該先做什麼？ B：我會【建議】你在簽任何文件之前，先請一位信得過的技師仔細檢查引擎和煞車，因為舊貨車的維修費用可能非常高。"
  },
  {
    "word": "guidance",
    "pos": "n.",
    "cn_def": "指導；引導",
    "en_def": "help and advice about how to do something",
    "sentence": "A: How are the new interns doing in their first month at the accounting firm, and have they made many mistakes with the reports? B: They are doing well, mostly because each intern works under the {{BLANK}} of a senior accountant who checks their work every afternoon and answers their questions patiently.",
    "cn": "A：新來的實習生在會計師事務所的第一個月表現如何？他們的報告出了很多錯嗎？ B：他們表現得很好，主要是因為每位實習生都在一位資深會計師的【指導】下工作，那位會計師每天下午都會檢查他們的工作並耐心回答問題。"
  },
  {
    "word": "suggestion",
    "pos": "n.",
    "cn_def": "建議；提議",
    "en_def": "an idea or plan that you offer for someone to think about",
    "sentence": "A: The staff kitchen is always messy at the end of the day, and people keep complaining about it, so what can we do? B: I have a {{BLANK}}: let's make a simple weekly cleaning schedule and put it on the fridge, so each team takes care of the kitchen for one day.",
    "cn": "A：員工廚房每天下班時總是很亂，大家一直抱怨，我們能怎麼做？ B：我有一個【建議】：我們來做一張簡單的每週清潔值日表貼在冰箱上，讓每個小組各負責一天的廚房清潔。"
  },
  {
    "word": "recommendation",
    "pos": "n.",
    "cn_def": "推薦；建議",
    "en_def": "advice about what is best to do or buy, often from an expert",
    "sentence": "A: Why did the company suddenly change its supplier of office chairs after using the same one for almost ten years? B: The safety committee made a {{BLANK}} after many employees complained about back pain, so the managers chose a new supplier that sells chairs with much better support.",
    "cn": "A：為什麼公司在用了同一家辦公椅供應商將近十年後突然換掉？ B：在許多員工抱怨背痛之後，安全委員會提出了一項【建議】，所以主管們選擇了一家販售支撐性好得多的椅子的新供應商。"
  },
  {
    "word": "counsel",
    "pos": "n.",
    "cn_def": "忠告；勸告；法律顧問",
    "en_def": "advice, especially from an older or more experienced person or a professional",
    "sentence": "A: You seemed so calm during the difficult contract talks with the Japanese company last month, so how did you prepare for them? B: Before the talks, I asked for {{BLANK}} from our former director, who has negotiated with many Asian firms, and her advice helped me stay patient and polite.",
    "cn": "A：上個月和那家日本公司進行艱難的合約談判時，你看起來很冷靜，你是怎麼準備的？ B：在談判前，我向我們的前任總監尋求【忠告】，她和許多亞洲公司談判過，她的建議幫助我保持耐心和禮貌。"
  },
  {
    "word": "instruction",
    "pos": "n.",
    "cn_def": "指示；說明；用法說明",
    "en_def": "information that tells you how to do or use something",
    "sentence": "A: The new printer in the meeting room keeps showing an error message, so do you know how to fix it before the clients arrive? B: Read the {{BLANK}} printed on the inside of the front cover, because it explains step by step how to remove stuck paper and restart the machine safely.",
    "cn": "A：會議室的新印表機一直出現錯誤訊息，你知道在客戶到之前要怎麼修好嗎？ B：去看印在前蓋內側的【說明】，上面一步一步解釋如何取出卡紙並安全地重新啟動機器。"
  },
  {
    "word": "tip",
    "pos": "n.",
    "cn_def": "訣竅；小建議；提示",
    "en_def": "a small but useful piece of practical advice",
    "sentence": "A: I have to give a speech in English at the international sales meeting next week, and I'm already very nervous about it, so can you help? B: Here's a useful {{BLANK}} that always works for me: practice in front of a mirror every night, and speak a little more slowly than you normally do.",
    "cn": "A：下週我必須在國際業務會議上用英文演講，我已經非常緊張了，你能幫幫我嗎？ B：這是一個對我總是很有用的【訣竅】：每天晚上對著鏡子練習，並且說話比平常稍微慢一點。"
  },
  {
    "word": "warning",
    "pos": "n.",
    "cn_def": "警告；預告",
    "en_def": "a statement telling someone about a possible danger or problem",
    "sentence": "A: Why did all the ships stay in the harbor this morning, even though the sky looked clear and the sea was calm? B: The weather office issued a storm {{BLANK}} late last night, saying that strong winds and heavy rain would reach the coast by noon, so the captains decided not to sail.",
    "cn": "A：為什麼今天早上所有船隻都留在港口，即使天空看起來很晴朗、海面也很平靜？ B：氣象局昨晚深夜發布了暴風雨【警報】，說強風和大雨中午前會抵達沿岸，所以船長們決定不出航。"
  },
  {
    "word": "encouragement",
    "pos": "n.",
    "cn_def": "鼓勵；激勵",
    "en_def": "words or actions that give someone confidence or hope",
    "sentence": "A: How did Daniel manage to pass the difficult accounting exam on his third try, after failing it twice last year? B: His manager gave him a lot of {{BLANK}}, let him leave work early twice a week to study, and kept telling him that he had the skills to succeed.",
    "cn": "A：丹尼爾去年考了兩次都沒過，他是怎麼在第三次通過那個困難的會計考試的？ B：他的主管給了他很多【鼓勵】，讓他每週兩次提早下班去讀書，還不斷告訴他，他有成功的能力。"
  },
  {
    "word": "feedback",
    "pos": "n.",
    "cn_def": "回饋；意見",
    "en_def": "comments about how well someone did something, given so they can improve",
    "sentence": "A: How will we know whether guests are happy with the changes we made to the hotel restaurant last month? B: We can send them a short online survey after they check out, and their {{BLANK}} will show us which dishes they liked and what we still need to improve.",
    "cn": "A：我們要怎麼知道客人對上個月飯店餐廳的改變是否滿意？ B：我們可以在他們退房後寄一份簡短的線上問卷，他們的【回饋】會讓我們知道他們喜歡哪些菜，以及我們還需要改進什麼。"
  },
  {
    "word": "consult",
    "pos": "v.",
    "cn_def": "諮詢；請教；查閱",
    "en_def": "to go to a person or a book for information or advice",
    "sentence": "A: The pain in my wrist has become much worse since I started typing for eight hours a day on the new project, so what should I do? B: You should {{BLANK}} a doctor this week, and you might also ask the office manager for a better keyboard and a soft wrist pad.",
    "cn": "A：自從我開始在新專案每天打字八個小時後，手腕就痛得更厲害了，我該怎麼辦？ B：你這週應該去【請教】醫生，也可以向辦公室經理要一個比較好的鍵盤和柔軟的護腕墊。"
  },
  {
    "word": "consultation",
    "pos": "n.",
    "cn_def": "諮詢；商議；會診",
    "en_def": "a meeting with an expert to get advice",
    "sentence": "A: I'd like to make my small restaurant more energy-efficient, but I have no idea where to start, so can you help me? B: The city offers a free {{BLANK}} with an energy expert, who will visit your restaurant, check your kitchen equipment, and suggest simple ways to cut your electricity bills.",
    "cn": "A：我想讓我的小餐廳更節能，但完全不知道從何開始，你能幫我嗎？ B：市政府提供和能源專家的免費【諮詢】，專家會到你的餐廳檢查廚房設備，並建議簡單的方法來降低電費。"
  },
  {
    "word": "opinion",
    "pos": "n.",
    "cn_def": "意見；看法；見解",
    "en_def": "what you think or believe about something",
    "sentence": "A: The marketing team has prepared two different designs for the new product package, and we need to choose one by Friday. B: In my {{BLANK}}, the blue design looks more modern and professional, but we should also show both designs to a few customers before we make the final decision.",
    "cn": "A：行銷團隊為新產品包裝準備了兩種不同的設計，我們必須在週五前選出一個。 B：依我的【看法】，藍色的設計看起來比較現代、專業，但在做最後決定前，我們也應該把兩種設計拿給幾位顧客看看。"
  },
  {
    "word": "perspective",
    "pos": "n.",
    "cn_def": "觀點；看法；角度",
    "en_def": "a particular way of thinking about something",
    "sentence": "A: Why did the director invite three young employees to join the planning meeting for next year's advertising campaign? B: She wanted a fresh {{BLANK}} from people in their twenties, because the campaign is aimed at young customers, and the older managers may not understand what they really want.",
    "cn": "A：為什麼總監邀請三位年輕員工參加明年廣告活動的企畫會議？ B：她想要聽聽二十幾歲年輕人的新【觀點】，因為這次活動的對象是年輕顧客，而年長的主管們可能不了解他們真正想要什麼。"
  },
  {
    "word": "direction",
    "pos": "n.",
    "cn_def": "指導；指揮；方向",
    "en_def": "instructions or control that help someone know what to do",
    "sentence": "A: The new branch had very poor sales last year, so why are the numbers so much better this year? B: Under the {{BLANK}} of the new branch manager, the staff set clear monthly goals, improved their customer service, and started selling products online as well as in the store.",
    "cn": "A：新分店去年的業績很差，為什麼今年的數字好了這麼多？ B：在新分店經理的【指導】下，員工訂定了明確的每月目標、改善了顧客服務，並且除了店面之外也開始在網路上銷售產品。"
  },
  {
    "word": "input",
    "pos": "n.",
    "cn_def": "意見；建議；投入",
    "en_def": "ideas, advice, or information that you give to help with a project",
    "sentence": "A: Should we finish the budget plan ourselves this afternoon, or do we need to talk to anyone else in the company first? B: We need some {{BLANK}} from the sales department before we finish, because they know which products will need more money for advertising during the holiday season.",
    "cn": "A：我們應該今天下午自己完成預算計畫，還是需要先和公司裡的其他人談談？ B：在完成之前，我們需要業務部的一些【意見】，因為他們知道哪些產品在假期期間需要更多的廣告經費。"
  },
  {
    "word": "recommend",
    "pos": "v.",
    "cn_def": "推薦；建議",
    "en_def": "to say that someone or something is good and suitable",
    "sentence": "A: Our Korean clients are arriving on Thursday evening, and I want to take them somewhere nice for dinner after their long flight. B: I {{BLANK}} the seafood restaurant near the harbor, because it is quiet enough for conversation, the service is excellent, and it has a beautiful view of the city lights.",
    "cn": "A：我們的韓國客戶週四晚上抵達，他們長途飛行後，我想帶他們去不錯的地方吃晚餐。 B：我【推薦】港口附近的那間海鮮餐廳，因為那裡夠安靜可以聊天，服務很好，還能欣賞美麗的城市夜景。"
  },
  {
    "word": "urge",
    "pos": "v.",
    "cn_def": "力勸；敦促；催促",
    "en_def": "to strongly advise or try hard to persuade someone to do something",
    "sentence": "A: Why did the IT department send another email to all staff this morning, when we already received one yesterday? B: They want to {{BLANK}} everyone to change their passwords before Friday, because several employees received fake emails last week that tried to steal their account information.",
    "cn": "A：為什麼資訊部今天早上又寄了一封信給全體員工？我們昨天已經收到一封了。 B：他們想【敦促】大家在週五前更改密碼，因為上週有幾位員工收到企圖竊取帳號資料的假電子郵件。"
  },
  {
    "word": "proposal",
    "pos": "n.",
    "cn_def": "提案；建議；計畫書",
    "en_def": "a plan or idea that is formally suggested for people to consider",
    "sentence": "A: What happened at the board meeting this morning, and did the directors agree to open a new office in Vietnam? B: They read the {{BLANK}} carefully and liked most of it, but they asked us to add more details about costs and local hiring before they make a final decision next month.",
    "cn": "A：今天早上的董事會發生了什麼事？董事們同意在越南設立新辦公室了嗎？ B：他們仔細閱讀了【提案】，大部分都很喜歡，但要求我們補充更多關於成本和當地招聘的細節，下個月才會做最後決定。"
  },
  {
    "word": "hint",
    "pos": "n.",
    "cn_def": "提示；暗示；小訣竅",
    "en_def": "a small piece of advice or a clue that helps you do or guess something",
    "sentence": "A: I've tried three times to set up the new video meeting software on my laptop, but it still won't connect to the camera. B: Here's a {{BLANK}}: close all your other programs first, then restart the software, because the camera often stops working when another app is already using it.",
    "cn": "A：我已經試了三次在筆電上安裝新的視訊會議軟體，但它還是連不上攝影機。 B：給你一個【提示】：先關掉其他所有程式，再重新啟動軟體，因為當其他應用程式正在使用攝影機時，它常常會無法運作。"
  },
  {
    "word": "lesson",
    "pos": "n.",
    "cn_def": "教訓；課程",
    "en_def": "something you learn from a bad experience that helps you in the future",
    "sentence": "A: Last year we lost a big order because we promised a delivery date that our factory could not meet, didn't we? B: Yes, and that was an important {{BLANK}} for all of us, so now we always check with the factory before we promise any dates to customers.",
    "cn": "A：去年我們因為承諾了工廠無法達到的交貨日期而失去一筆大訂單，對吧？ B：對，那是給我們所有人的重要【教訓】，所以現在我們在向客戶承諾任何日期之前，一定會先和工廠確認。"
  },
  {
    "word": "reminder",
    "pos": "n.",
    "cn_def": "提醒；提示通知",
    "en_def": "something that helps you remember something you must do",
    "sentence": "A: How can we stop so many patients from missing their appointments at the dental clinic every week? B: We could send each patient a text message {{BLANK}} the day before the visit, because most people forget appointments that they made several weeks earlier, especially when they are busy at work.",
    "cn": "A：我們要怎麼做，才能讓牙科診所每週不再有這麼多病人錯過預約？ B：我們可以在看診前一天傳簡訊【提醒】每位病人，因為大部分人會忘記幾週前預約的時間，尤其是工作忙碌的時候。"
  },
  {
    "word": "coaching",
    "pos": "n.",
    "cn_def": "指導；訓練；輔導",
    "en_def": "the process of training and helping someone to improve a skill",
    "sentence": "A: Our sales staff are friendly, but many of them find it hard to close deals with difficult customers, so what can we do? B: We could hire an expert to provide weekly {{BLANK}} for the team, because practicing real situations with a professional usually builds confidence and improves results quickly.",
    "cn": "A：我們的業務人員很友善，但很多人都很難和難搞的顧客成交，我們能怎麼做？ B：我們可以聘請專家每週為團隊提供【指導訓練】，因為和專業人士一起演練真實情境，通常能很快建立信心並提升成果。"
  },
  {
    "word": "mentorship",
    "pos": "n.",
    "cn_def": "師徒指導；導師制度",
    "en_def": "help and advice given over time by an experienced person to a less experienced one",
    "sentence": "A: Why do so many young engineers want to work at your company, even though other firms offer slightly higher salaries? B: We have an excellent {{BLANK}} program, in which every new engineer is paired with a senior colleague who meets them each week and helps them plan their careers.",
    "cn": "A：為什麼這麼多年輕工程師想到你們公司工作，即使其他公司提供稍高的薪水？ B：我們有一個很棒的【導師指導】計畫，每位新進工程師都會和一位資深同事配對，對方每週和他們見面，並幫助他們規劃職涯。"
  },
  {
    "word": "directive",
    "pos": "n.",
    "cn_def": "指令；命令；指示",
    "en_def": "an official order or instruction from someone in authority",
    "sentence": "A: Why are all the managers working from the office again this week when they were allowed to work from home last month? B: The head office sent a new {{BLANK}} on Monday saying that all managers must be in the office at least four days a week to meet with their teams.",
    "cn": "A：為什麼這週所有經理又回辦公室上班了？上個月他們不是可以在家工作嗎？ B：總公司週一發布了一項新的【指令】，規定所有經理每週至少要有四天在辦公室與團隊開會。"
  },
  {
    "word": "guiding",
    "pos": "adj.",
    "cn_def": "指導性的；引導的",
    "en_def": "giving direction or advice that helps someone decide what to do",
    "sentence": "A: Our company is growing very fast, so how do you make sure that all the new branches treat customers in the same way? B: We have one {{BLANK}} principle that every employee learns on the first day, which is that the customer's comfort and safety always come before quick profits.",
    "cn": "A：我們公司成長得很快，你們要怎麼確保所有新分店都用同樣的方式對待顧客？ B：我們有一個每位員工第一天就要學習的【指導】原則，就是顧客的舒適與安全永遠優先於快速獲利。"
  },
  {
    "word": "advisory",
    "pos": "adj.",
    "cn_def": "顧問的；諮詢的",
    "en_def": "having the job of giving advice, usually without making the final decisions",
    "sentence": "A: Will the university professors decide how the city spends the money for the new public transportation system? B: No, they only have an {{BLANK}} role, so they will study the plans and share their ideas, but the city council will make the final decisions about the budget.",
    "cn": "A：大學教授們會決定市政府如何使用新大眾運輸系統的經費嗎？ B：不會，他們只擔任【顧問】角色，所以他們會研究計畫並提供想法，但預算的最後決定權在市議會。"
  },
  {
    "word": "wisdom",
    "pos": "n.",
    "cn_def": "智慧；明智",
    "en_def": "the ability to make good decisions based on knowledge and experience",
    "sentence": "A: Why does the young owner of the bakery still ask her grandfather for advice, even though he retired many years ago? B: He ran the shop successfully for forty years, and she values his {{BLANK}} about handling customers, choosing suppliers, and keeping costs low during difficult times.",
    "cn": "A：為什麼那間麵包店的年輕老闆仍然向祖父請教，即使他多年前就退休了？ B：他成功經營那家店四十年，她很重視他在應對顧客、挑選供應商，以及在困難時期控制成本方面的【智慧】。"
  }
];

const MCQS = [
  {
    "q": "Our lawyer has read the contract carefully. She will _____ us whether we should sign it before Friday.",
    "options": [
      "urge",
      "consult",
      "recommend",
      "advise"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "New employees are never left to work alone in their first week. They receive _____ from an experienced team leader.",
    "options": [
      "warning",
      "proposal",
      "guidance",
      "opinion"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Staff can drop their ideas into the box near the elevator. Every useful _____ will be discussed at the monthly meeting.",
    "options": [
      "warning",
      "suggestion",
      "directive",
      "lesson"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The hiring manager asked Director Lee for a letter about her former assistant. Her strong _____ helped him get the job.",
    "options": [
      "recommendation",
      "hint",
      "reminder",
      "wisdom"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The company was accused of breaking a contract. It immediately asked its legal _____ to review all the documents.",
    "options": [
      "tip",
      "counsel",
      "hint",
      "encouragement"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The machine is dangerous if used incorrectly. Please read each _____ in the manual before you turn it on.",
    "options": [
      "instruction",
      "opinion",
      "perspective",
      "wisdom"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Our travel blog shares practical advice every week. This week's _____ explains how to pack a suitcase in ten minutes.",
    "options": [
      "directive",
      "counsel",
      "tip",
      "warning"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The sign beside the wet floor was clear. Customers who ignored the _____ were lucky that nobody fell.",
    "options": [
      "encouragement",
      "input",
      "mentorship",
      "warning"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The young team was nervous before the big presentation. The director's kind _____ gave them the confidence they needed.",
    "options": [
      "directive",
      "warning",
      "encouragement",
      "instruction"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The app asks users to rate each delivery. This _____ helps the company improve its service quickly.",
    "options": [
      "wisdom",
      "directive",
      "mentorship",
      "feedback"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Before changing your diet, you should speak to a professional. Please _____ your doctor if you have any health concerns.",
    "options": [
      "urge",
      "consult",
      "advise",
      "recommend"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The design firm charges nothing for the first meeting. Call today to book a free _____ with one of our experts.",
    "options": [
      "consultation",
      "lesson",
      "hint",
      "wisdom"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The manager asked each team member what they thought of the plan. Everyone shared an honest _____ during the meeting.",
    "options": [
      "directive",
      "instruction",
      "coaching",
      "opinion"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Our new engineer worked in Germany for ten years. She brings an international _____ to every project she joins.",
    "options": [
      "reminder",
      "instruction",
      "perspective",
      "directive"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The orchestra played beautifully last night. It performed under the _____ of a famous conductor from Vienna.",
    "options": [
      "direction",
      "hint",
      "tip",
      "feedback"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The new office layout affects every department. We would like your _____ before the final plan is approved.",
    "options": [
      "lesson",
      "input",
      "warning",
      "wisdom"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Many guests ask where to eat near the hotel. The staff usually _____ the small noodle shop across the street.",
    "options": [
      "consult",
      "urge",
      "recommend",
      "advise"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Traffic will be heavy during the festival this weekend. Police _____ drivers to use public transportation instead.",
    "options": [
      "urge",
      "consult",
      "ponder",
      "explore"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The architects presented three designs to the city. The council chose the _____ with the lowest building costs.",
    "options": [
      "hint",
      "encouragement",
      "wisdom",
      "proposal"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The customer could not remember her password. The website gave her a small _____ to help her recall it.",
    "options": [
      "proposal",
      "hint",
      "directive",
      "consultation"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The company lost important files when the server crashed. The _____ it learned was to back up data every day.",
    "options": [
      "input",
      "feedback",
      "counsel",
      "lesson"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The library sends an email three days before a book is due. This _____ helps readers avoid late fees.",
    "options": [
      "perspective",
      "opinion",
      "reminder",
      "wisdom"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Our managers want to become better public speakers. The company has paid for six weeks of private _____ for them.",
    "options": [
      "coaching",
      "directive",
      "reminder",
      "opinion"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Each graduate is paired with a senior employee for one year. The _____ helps young workers grow their careers.",
    "options": [
      "warning",
      "mentorship",
      "hint",
      "directive"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The government issued new rules on food safety last month. All restaurants must follow the _____ by January.",
    "options": [
      "encouragement",
      "perspective",
      "directive",
      "wisdom"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Honesty with customers has always been important to the firm. It remains the _____ principle behind every decision.",
    "options": [
      "guiding",
      "advisory",
      "unexpected",
      "nervous"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The panel of experts can suggest changes but cannot make laws. Its role is purely _____.",
    "options": [
      "guiding",
      "nervous",
      "careless",
      "advisory"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The retired CEO still visits the office once a month. Younger managers value his _____ and long experience.",
    "options": [
      "reminder",
      "wisdom",
      "directive",
      "hint"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Teachers return students' essays with comments in the margins. This written _____ shows students how to improve their writing.",
    "options": [
      "directive",
      "proposal",
      "wisdom",
      "feedback"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Many travelers ask about visa rules at the counter. Our agents _____ them to apply at least one month early.",
    "options": [
      "advise",
      "consult",
      "depart",
      "behave"
    ],
    "answer": 0,
    "vocabIndex": 0
  }
];

const LOOKUP = {
  "advise": {
    "pos": "v.",
    "en_def": "to tell someone what you think they should do",
    "cn_def": "建議；勸告；忠告"
  },
  "guidance": {
    "pos": "n.",
    "en_def": "help and advice about how to do something",
    "cn_def": "指導；引導"
  },
  "suggestion": {
    "pos": "n.",
    "en_def": "an idea or plan that you offer for someone to think about",
    "cn_def": "建議；提議"
  },
  "recommendation": {
    "pos": "n.",
    "en_def": "advice about what is best to do or buy, often from an expert",
    "cn_def": "推薦；建議"
  },
  "counsel": {
    "pos": "n.",
    "en_def": "advice, especially from an older or more experienced person or a professional",
    "cn_def": "忠告；勸告；法律顧問"
  },
  "instruction": {
    "pos": "n.",
    "en_def": "information that tells you how to do or use something",
    "cn_def": "指示；說明；用法說明"
  },
  "tip": {
    "pos": "n.",
    "en_def": "a small but useful piece of practical advice",
    "cn_def": "訣竅；小建議；提示"
  },
  "warning": {
    "pos": "n.",
    "en_def": "a statement telling someone about a possible danger or problem",
    "cn_def": "警告；預告"
  },
  "encouragement": {
    "pos": "n.",
    "en_def": "words or actions that give someone confidence or hope",
    "cn_def": "鼓勵；激勵"
  },
  "feedback": {
    "pos": "n.",
    "en_def": "comments about how well someone did something, given so they can improve",
    "cn_def": "回饋；意見"
  },
  "consult": {
    "pos": "v.",
    "en_def": "to go to a person or a book for information or advice",
    "cn_def": "諮詢；請教；查閱"
  },
  "consultation": {
    "pos": "n.",
    "en_def": "a meeting with an expert to get advice",
    "cn_def": "諮詢；商議；會診"
  },
  "opinion": {
    "pos": "n.",
    "en_def": "what you think or believe about something",
    "cn_def": "意見；看法；見解"
  },
  "perspective": {
    "pos": "n.",
    "en_def": "a particular way of thinking about something",
    "cn_def": "觀點；看法；角度"
  },
  "direction": {
    "pos": "n.",
    "en_def": "instructions or control that help someone know what to do",
    "cn_def": "指導；指揮；方向"
  },
  "input": {
    "pos": "n.",
    "en_def": "ideas, advice, or information that you give to help with a project",
    "cn_def": "意見；建議；投入"
  },
  "recommend": {
    "pos": "v.",
    "en_def": "to say that someone or something is good and suitable",
    "cn_def": "推薦；建議"
  },
  "urge": {
    "pos": "v.",
    "en_def": "to strongly advise or try hard to persuade someone to do something",
    "cn_def": "力勸；敦促；催促"
  },
  "proposal": {
    "pos": "n.",
    "en_def": "a plan or idea that is formally suggested for people to consider",
    "cn_def": "提案；建議；計畫書"
  },
  "hint": {
    "pos": "n.",
    "en_def": "a small piece of advice or a clue that helps you do or guess something",
    "cn_def": "提示；暗示；小訣竅"
  },
  "lesson": {
    "pos": "n.",
    "en_def": "something you learn from a bad experience that helps you in the future",
    "cn_def": "教訓；課程"
  },
  "reminder": {
    "pos": "n.",
    "en_def": "something that helps you remember something you must do",
    "cn_def": "提醒；提示通知"
  },
  "coaching": {
    "pos": "n.",
    "en_def": "the process of training and helping someone to improve a skill",
    "cn_def": "指導；訓練；輔導"
  },
  "mentorship": {
    "pos": "n.",
    "en_def": "help and advice given over time by an experienced person to a less experienced one",
    "cn_def": "師徒指導；導師制度"
  },
  "directive": {
    "pos": "n.",
    "en_def": "an official order or instruction from someone in authority",
    "cn_def": "指令；命令；指示"
  },
  "guiding": {
    "pos": "adj.",
    "en_def": "giving direction or advice that helps someone decide what to do",
    "cn_def": "指導性的；引導的"
  },
  "advisory": {
    "pos": "adj.",
    "en_def": "having the job of giving advice, usually without making the final decisions",
    "cn_def": "顧問的；諮詢的"
  },
  "wisdom": {
    "pos": "n.",
    "en_def": "the ability to make good decisions based on knowledge and experience",
    "cn_def": "智慧；明智"
  }
};

const EXTRA_GLOSSES = {};
