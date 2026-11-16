// Topic 170 Quiz Data: Help 幫助
// Source word list: https://www.examword.com/group-topic/help — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T170 - Help 幫助",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "assist",
    "pos": "v.",
    "cn_def": "協助；幫助",
    "en_def": "to help someone do something",
    "sentence": "A: Why is Daniel staying late at the office tonight when he usually leaves at six to pick up his kids from school? B: The finance manager asked him to {{BLANK}} the new accountant with the monthly report, because she joined the company last week and still doesn't understand our software.",
    "cn": "A：丹尼爾平常六點就下班去學校接小孩，為什麼今晚還留在辦公室加班？ B：財務經理請他【協助】新來的會計處理月報，因為她上週才進公司，還不太懂我們的軟體。"
  },
  {
    "word": "aid",
    "pos": "n.",
    "cn_def": "援助；救援物資",
    "en_def": "help such as food, money or medicine given to people in need",
    "sentence": "A: What did the company do after the heavy typhoon damaged so many homes in the small fishing village near our factory last month? B: The managers sent trucks full of food, water, and blankets as emergency {{BLANK}}, and many employees also spent their weekends cleaning the streets with local families.",
    "cn": "A：上個月強烈颱風摧毀了我們工廠附近小漁村的許多房屋後，公司做了什麼？ B：經理們派出滿載食物、飲水和毛毯的卡車作為緊急【援助】，許多員工也利用週末和當地家庭一起清理街道。"
  },
  {
    "word": "support",
    "pos": "v.",
    "cn_def": "支持；贊成",
    "en_def": "to agree with and help an idea or person",
    "sentence": "A: Do you think the board members will accept Lisa's plan to open a new branch office in Kaohsiung next spring? B: I'm fairly sure they will, because the sales numbers from the south have been growing quickly, and the CEO has already said publicly that he will {{BLANK}} her proposal at the meeting.",
    "cn": "A：你覺得董事會成員會接受麗莎明年春天在高雄開設新分公司的計畫嗎？ B：我相當確定會，因為南部的業績成長很快，而且執行長已經公開表示會在會議上【支持】她的提案。"
  },
  {
    "word": "encourage",
    "pos": "v.",
    "cn_def": "鼓勵；激勵",
    "en_def": "to give someone the confidence or reason to do something",
    "sentence": "A: How did the HR department manage to get so many staff members to join the company's health program this year? B: They decided to {{BLANK}} everyone to take part by offering free gym passes and small prizes, and the managers also walked together at lunch to set a good example.",
    "cn": "A：人資部今年是怎麼讓這麼多員工參加公司的健康計畫的？ B：他們提供免費健身房通行證和小獎品來【鼓勵】大家參加，主管們也在午餐時間一起散步，樹立好榜樣。"
  },
  {
    "word": "guide",
    "pos": "v.",
    "cn_def": "引導；帶領",
    "en_def": "to show someone the way or lead them through a place",
    "sentence": "A: Who is going to show the visitors from the Japanese partner company around our factory on Thursday morning? B: Mr. Chen from the production team will {{BLANK}} them through each area, since he speaks Japanese well and can explain how our machines work in simple terms.",
    "cn": "A：週四早上誰要帶日本合作公司的訪客參觀我們的工廠？ B：生產部的陳先生會【帶領】他們走過每個區域，因為他日文很好，能用簡單的方式說明我們機器的運作。"
  },
  {
    "word": "serve",
    "pos": "v.",
    "cn_def": "服務；供應（餐點）",
    "en_def": "to give food, drinks or help to customers",
    "sentence": "A: Why is the hotel restaurant hiring so many part-time workers before the end of the year? B: The manager expects a lot of company parties in December, so they need enough staff to {{BLANK}} hundreds of guests every night without making anyone wait too long for their meals.",
    "cn": "A：飯店餐廳為什麼在年底前招募這麼多兼職人員？ B：經理預期十二月會有很多公司聚餐，所以需要足夠的人手每晚【服務】數百位客人，不讓任何人等餐太久。"
  },
  {
    "word": "donate",
    "pos": "v.",
    "cn_def": "捐贈；捐款",
    "en_def": "to give money or things to help people",
    "sentence": "A: What are you going to do with all the old laptops that the IT department replaced last week? B: We plan to {{BLANK}} them to a local school in the mountains, because the students there don't have enough computers and our machines still work perfectly well for basic lessons.",
    "cn": "A：資訊部上週汰換下來的那些舊筆電，你們打算怎麼處理？ B：我們打算把它們【捐贈】給山區的一所學校，因為那裡的學生電腦不夠，而我們的機器用來上基本課程還完全沒問題。"
  },
  {
    "word": "volunteer",
    "pos": "v.",
    "cn_def": "自願（做）；當志工",
    "en_def": "to offer to do something without being asked or paid",
    "sentence": "A: Are you joining the beach clean-up event that our company is organizing next Saturday morning? B: Yes, I decided to {{BLANK}} for it because I care about the ocean, and my manager said that staff who take part will also receive an extra day off later in the year.",
    "cn": "A：你會參加公司下週六早上舉辦的淨灘活動嗎？ B：會，我決定【自願】參加，因為我關心海洋，而且主管說參加的員工今年稍後還會多得到一天假。"
  },
  {
    "word": "rescue",
    "pos": "v.",
    "cn_def": "救援；營救",
    "en_def": "to save someone from danger",
    "sentence": "A: Did you hear what happened at the mountain resort during the storm last weekend? B: Yes, a group of hikers got lost when the road was blocked, but the local fire department sent a team by helicopter to {{BLANK}} them, and everyone returned safely to the hotel by evening.",
    "cn": "A：你有聽說上週末暴風雨期間山上度假村發生的事嗎？ B：有，一群登山客因為道路封閉而迷路，但當地消防局派出直升機小組去【營救】他們，傍晚前大家都平安回到飯店了。"
  },
  {
    "word": "protect",
    "pos": "v.",
    "cn_def": "保護",
    "en_def": "to keep someone or something safe from harm",
    "sentence": "A: Why does the company require all workers in the warehouse to wear helmets and special shoes at all times? B: The safety manager says these items {{BLANK}} employees from serious injuries, because heavy boxes sometimes fall from the high shelves, and forklifts move around the building all day.",
    "cn": "A：公司為什麼要求倉庫所有工人隨時戴安全帽、穿特殊的鞋子？ B：安全主管說這些裝備能【保護】員工免於重傷，因為重箱子有時會從高架上掉下來，而且堆高機整天在建築物裡來回移動。"
  },
  {
    "word": "care",
    "pos": "v.",
    "cn_def": "關心；在乎",
    "en_def": "to feel that someone or something is important",
    "sentence": "A: Why did you choose to work for this small hospital instead of the large one downtown that offered a higher salary? B: The nurses and doctors here really {{BLANK}} about every patient, and the director always listens to the staff, so I feel much happier coming to work every morning.",
    "cn": "A：市中心那家大醫院給的薪水比較高，你為什麼選擇在這家小醫院工作？ B：這裡的護理師和醫生真的很【關心】每一位病人，院長也總是傾聽員工的意見，所以我每天早上來上班都覺得開心多了。"
  },
  {
    "word": "comfort",
    "pos": "v.",
    "cn_def": "安慰",
    "en_def": "to make someone who is sad or worried feel better",
    "sentence": "A: How did the team react when Amy told them that her father was in the hospital after a car accident? B: Everyone tried to {{BLANK}} her by sending kind messages and flowers, and her manager told her to take a few days off so she could stay with her family.",
    "cn": "A：艾美告訴團隊她父親車禍住院時，大家有什麼反應？ B：每個人都傳了暖心訊息、送了花來【安慰】她，她的主管也讓她請幾天假，好陪在家人身邊。"
  },
  {
    "word": "advise",
    "pos": "v.",
    "cn_def": "建議；勸告",
    "en_def": "to tell someone what you think they should do",
    "sentence": "A: Should I sign the contract with the new supplier today, or should I wait until next week? B: I would {{BLANK}} you to wait until the legal department has checked every page carefully, because last year we lost a lot of money after agreeing to terms we didn't fully understand.",
    "cn": "A：我應該今天就和新供應商簽約，還是等到下週？ B：我會【建議】你等法務部仔細檢查完每一頁再說，因為去年我們同意了不完全了解的條款，結果損失了很多錢。"
  },
  {
    "word": "recommend",
    "pos": "v.",
    "cn_def": "推薦；建議",
    "en_def": "to say that something is good and suggest it to others",
    "sentence": "A: Can you suggest a good place to take our overseas clients for dinner after the meeting on Friday evening? B: I would strongly {{BLANK}} the Italian restaurant near the train station, because the food is excellent, the service is fast, and they have a quiet private room for business groups.",
    "cn": "A：週五傍晚開完會後，你能推薦一個帶海外客戶去吃晚餐的好地方嗎？ B：我強力【推薦】火車站附近那家義大利餐廳，因為餐點很棒、上菜快，而且有適合商務團體的安靜包廂。"
  },
  {
    "word": "facilitate",
    "pos": "v.",
    "cn_def": "促進；使順利進行",
    "en_def": "to make a process or discussion easier or smoother",
    "sentence": "A: Why did the company hire an outside expert to lead the planning workshop for all the department heads next month? B: She has a lot of experience, and she will {{BLANK}} the discussion so that everyone gets a chance to share ideas and the meeting doesn't run longer than planned.",
    "cn": "A：公司為什麼請外部專家來主持下個月所有部門主管的規劃工作坊？ B：她經驗豐富，會【引導促進】討論，讓每個人都有機會分享想法，會議也不會超出預定時間。"
  },
  {
    "word": "enable",
    "pos": "v.",
    "cn_def": "使能夠",
    "en_def": "to make it possible for someone to do something",
    "sentence": "A: Why did the company spend so much money on the new online system for the customer service team this year? B: The new software will {{BLANK}} our staff to answer customer questions much faster, because it shows all the order details and delivery information on one screen.",
    "cn": "A：公司今年為什麼花這麼多錢替客服團隊買新的線上系統？ B：新軟體將【使】我們的員工【能夠】更快回答顧客問題，因為它會在同一個畫面上顯示所有訂單細節和配送資訊。"
  },
  {
    "word": "provide",
    "pos": "v.",
    "cn_def": "提供",
    "en_def": "to give someone something they need",
    "sentence": "A: Do new employees need to bring their own laptops and phones when they start work here next Monday? B: No, the company will {{BLANK}} all the equipment they need, including a laptop, a phone, and a desk, and the IT team will set everything up before they arrive.",
    "cn": "A：新員工下週一來上班時需要自備筆電和手機嗎？ B：不用，公司會【提供】他們需要的所有設備，包括筆電、手機和辦公桌，資訊團隊也會在他們到職前把一切設定好。"
  },
  {
    "word": "relieve",
    "pos": "v.",
    "cn_def": "減輕；緩解",
    "en_def": "to make pain, worry or pressure less",
    "sentence": "A: What did the manager do when the team became so stressed about the big project deadline last week? B: She hired two temporary workers to {{BLANK}} some of the pressure on the team, and she also ordered pizza for everyone so they could relax for a while during the long evening.",
    "cn": "A：上週團隊為了大型專案的截止日壓力很大時，經理做了什麼？ B：她雇用了兩名臨時員工來【減輕】團隊的部分壓力，還幫大家訂了披薩，讓大家在漫長的晚上可以放鬆一下。"
  },
  {
    "word": "cooperate",
    "pos": "v.",
    "cn_def": "合作；配合",
    "en_def": "to work together with others for a shared goal",
    "sentence": "A: How did the two departments finally finish the product launch on time after so many problems in the spring? B: The managers agreed to {{BLANK}} with each other more closely, so they held short meetings every morning and shared all their plans through one online calendar.",
    "cn": "A：春天出了那麼多問題後，兩個部門最後是怎麼準時完成產品上市的？ B：兩位經理同意彼此更密切地【合作】，所以他們每天早上開簡短會議，並透過同一個線上行事曆分享所有計畫。"
  },
  {
    "word": "collaborate",
    "pos": "v.",
    "cn_def": "合作；協作",
    "en_def": "to work with another person or group to create something",
    "sentence": "A: Why is our marketing team flying to Singapore next week instead of holding a video meeting? B: We are going to {{BLANK}} with a local design company on a new advertising campaign, and the director believes that working face to face for a few days will produce better ideas.",
    "cn": "A：我們的行銷團隊下週為什麼要飛去新加坡，而不是開視訊會議？ B：我們要和當地一家設計公司【合作】一個新的廣告活動，主任認為面對面一起工作幾天會產生更好的點子。"
  },
  {
    "word": "mentor",
    "pos": "v.",
    "cn_def": "指導；輔導",
    "en_def": "to give a less experienced person advice and help over time",
    "sentence": "A: How do new sales staff learn the job so quickly at your company? B: Each new employee is paired with an experienced salesperson who will {{BLANK}} them for the first six months, answering their questions, joining their client meetings, and giving them honest advice about how to improve.",
    "cn": "A：你們公司的新業務人員怎麼能這麼快上手？ B：每位新員工都會和一位資深業務配對，由他在頭六個月【指導】新人，回答問題、陪同拜訪客戶，並誠實給予改進的建議。"
  },
  {
    "word": "counsel",
    "pos": "v.",
    "cn_def": "諮詢；輔導；提供建議",
    "en_def": "to give professional advice to someone about a problem",
    "sentence": "A: What does the company offer to employees who feel worried about losing their jobs after the merger next year? B: The HR department has hired a professional adviser to {{BLANK}} staff members about their career options, and anyone can book a free private meeting with her during working hours.",
    "cn": "A：對於擔心明年合併後會失業的員工，公司提供了什麼協助？ B：人資部聘請了一位專業顧問，為員工就職涯選擇提供【諮詢輔導】，任何人都可以在上班時間預約和她免費單獨面談。"
  },
  {
    "word": "mediate",
    "pos": "v.",
    "cn_def": "調解；斡旋",
    "en_def": "to help two sides who disagree reach an agreement",
    "sentence": "A: How was the argument between the warehouse workers and the factory owners about overtime pay finally solved? B: The city government sent an expert to {{BLANK}} between the two sides, and after three long meetings they agreed on a fair new pay plan that everyone could accept.",
    "cn": "A：倉庫工人和工廠老闆之間關於加班費的爭執最後是怎麼解決的？ B：市政府派了一位專家在雙方之間【調解】，經過三次冗長的會議，他們同意了一個大家都能接受的公平新薪資方案。"
  },
  {
    "word": "intervene",
    "pos": "v.",
    "cn_def": "介入；干預",
    "en_def": "to become involved in a situation to stop or change it",
    "sentence": "A: Why did the department head join the meeting between the two project leaders yesterday afternoon? B: She had to {{BLANK}} because their disagreement about the budget was getting louder and louder, and she wanted to stop the conflict before it hurt the whole team's work.",
    "cn": "A：部門主管昨天下午為什麼加入兩位專案負責人的會議？ B：她不得不【介入】，因為他們對預算的爭論越來越大聲，她想在衝突影響整個團隊的工作前加以制止。"
  },
  {
    "word": "assistive",
    "pos": "adj.",
    "cn_def": "輔助的",
    "en_def": "designed to help people with disabilities do things",
    "sentence": "A: Why did the library buy new computers with special software and large keyboards this year? B: The city wanted to offer {{BLANK}} technology for visitors who have trouble seeing or using their hands, so that everyone can search for books and read the news without help.",
    "cn": "A：圖書館今年為什麼購買了配有特殊軟體和大鍵盤的新電腦？ B：市政府希望為視力不佳或雙手不便的訪客提供【輔助】科技，讓每個人都能不靠別人幫忙就搜尋書籍和閱讀新聞。"
  },
  {
    "word": "beneficial",
    "pos": "adj.",
    "cn_def": "有益的",
    "en_def": "having a good effect; helpful",
    "sentence": "A: Why did the company decide to offer free yoga classes in the meeting room every Wednesday at lunch? B: The HR team read several studies showing that regular exercise is {{BLANK}} for workers' health and focus, and they hoped that the classes would also reduce stress in the office.",
    "cn": "A：公司為什麼決定每週三午餐時間在會議室提供免費瑜珈課？ B：人資團隊讀了幾份研究，顯示規律運動對員工的健康和專注力【有益】，他們也希望這些課程能減輕辦公室的壓力。"
  },
  {
    "word": "helpful",
    "pos": "adj.",
    "cn_def": "有幫助的；樂於助人的",
    "en_def": "useful, or willing to help others",
    "sentence": "A: How was your first week at the new job in the accounting department downtown? B: It was much easier than I expected, because my coworkers were very {{BLANK}}, showing me how to use the system and inviting me to lunch so I could get to know everyone quickly.",
    "cn": "A：你在市中心會計部新工作的第一週過得怎麼樣？ B：比我預期的輕鬆多了，因為同事們都很【樂於助人】，教我怎麼使用系統，還邀我一起吃午餐，讓我很快就認識了大家。"
  },
  {
    "word": "supportive",
    "pos": "adj.",
    "cn_def": "支持的；給予鼓勵的",
    "en_def": "giving help and encouragement",
    "sentence": "A: How did you manage to finish your master's degree while working full time at the bank? B: My manager was really {{BLANK}}, because she let me leave early on class nights and changed my schedule during exam weeks, so I never had to choose between work and school.",
    "cn": "A：你在銀行全職工作的同時，是怎麼完成碩士學位的？ B：我的主管非常【支持】我，她讓我上課的晚上提早下班，考試週也幫我調整班表，所以我從來不必在工作和學業之間二選一。"
  },
  {
    "word": "kindly",
    "pos": "adv.",
    "cn_def": "好心地；親切地",
    "en_def": "in a kind and friendly way",
    "sentence": "A: Did the hotel staff help you when you lost your passport during the business trip to Seoul? B: Yes, the front desk manager {{BLANK}} offered to call the embassy for me, and she even arranged a taxi so I could get there before it closed that afternoon.",
    "cn": "A：你去首爾出差弄丟護照時，飯店員工有幫你嗎？ B：有，櫃台經理【好心地】主動幫我打電話給大使館，甚至還幫我安排計程車，讓我在那天下午關門前趕到。"
  },
  {
    "word": "willingly",
    "pos": "adv.",
    "cn_def": "欣然地；自願地",
    "en_def": "in a way that shows you are happy to do something",
    "sentence": "A: Was it difficult to find people to work on the holiday weekend to finish the urgent order? B: Not at all, because several team members {{BLANK}} agreed to come in on Saturday after the manager promised extra pay and two days off the following week.",
    "cn": "A：要找人在連假週末上班完成緊急訂單很困難嗎？ B：一點也不，因為經理承諾加發薪水並在下週補休兩天後，好幾位組員都【欣然】同意週六來上班。"
  },
  {
    "word": "backup",
    "pos": "n.",
    "cn_def": "備份",
    "en_def": "an extra copy of computer data kept in case the original is lost",
    "sentence": "A: What happens if the main computer system crashes while we are processing customer orders during the busy season? B: Don't worry, because the IT team makes a full {{BLANK}} of all our data every night, so we can restore everything within an hour and continue working without losing any orders.",
    "cn": "A：如果在旺季處理顧客訂單時主電腦系統當機了怎麼辦？ B：別擔心，資訊團隊每晚都會把所有資料做完整【備份】，所以我們能在一小時內恢復一切，繼續工作而不會遺失任何訂單。"
  },
  {
    "word": "service",
    "pos": "n.",
    "cn_def": "服務",
    "en_def": "the help that staff give to customers",
    "sentence": "A: Why do so many customers choose this small electronics shop instead of the big stores in the shopping mall? B: The prices are similar, but the staff offer excellent customer {{BLANK}}, explaining every product patiently and repairing broken devices quickly for free during the first year.",
    "cn": "A：為什麼這麼多顧客選擇這家小電器行，而不是購物中心裡的大賣場？ B：價格差不多，但這裡的員工提供優質的顧客【服務】，會耐心介紹每項產品，並在第一年內免費快速維修故障的機器。"
  },
  {
    "word": "assistance",
    "pos": "n.",
    "cn_def": "協助；援助",
    "en_def": "help given to someone",
    "sentence": "A: What should visitors do if they have trouble finding the conference room on the tenth floor? B: They can ask for {{BLANK}} at the reception desk in the lobby, where a staff member will give them a map or walk with them to the elevator and show them the way.",
    "cn": "A：如果訪客找不到十樓的會議室該怎麼辦？ B：他們可以到大廳的接待櫃台請求【協助】，工作人員會給他們一張地圖，或陪他們走到電梯並告訴他們怎麼走。"
  },
  {
    "word": "charity",
    "pos": "n.",
    "cn_def": "慈善機構；慈善",
    "en_def": "an organization that gives money or help to people in need",
    "sentence": "A: What is the company going to do with the money raised at the annual year-end party this December? B: All the money from the ticket sales will go to a local {{BLANK}} that helps homeless families find safe places to live and provides warm meals during the cold winter months.",
    "cn": "A：公司打算怎麼運用今年十二月年終尾牙募得的款項？ B：所有門票收入都會捐給當地一個【慈善機構】，該機構幫助無家可歸的家庭找到安全的住處，並在寒冷的冬季提供熱食。"
  }
];

const MCQS = [
  {
    "q": "The airline hired extra staff for the holiday rush. Their main job is to _____ elderly passengers with their bags at the check-in counter.",
    "options": [
      "assist",
      "donate",
      "intervene",
      "relieve"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Several countries sent food and medicine after the earthquake. The international _____ arrived within two days and saved many lives in the region.",
    "options": [
      "backup",
      "deadline",
      "aid",
      "receipt"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Most employees voted to _____ the new flexible working plan. The managers were pleased that so many people agreed with the idea.",
    "options": [
      "rescue",
      "support",
      "mediate",
      "donate"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Teachers should _____ students to ask questions in class. Asking questions helps young learners understand difficult ideas more deeply.",
    "options": [
      "relieve",
      "rescue",
      "serve",
      "encourage"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "A local expert will _____ the tourists through the old temple. She knows the history of every room and statue in the building.",
    "options": [
      "donate",
      "guide",
      "relieve",
      "intervene"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The new café near the station will _____ breakfast from seven in the morning. Office workers can grab coffee and sandwiches before their trains.",
    "options": [
      "rescue",
      "mediate",
      "counsel",
      "serve"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Every December, our company asks staff to _____ old clothes and toys. Everything is then given to children in poor families across the city.",
    "options": [
      "donate",
      "mediate",
      "intervene",
      "comfort"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Nobody wanted to organize the office party this year. Finally, Peter decided to _____ for the job because he enjoys planning events.",
    "options": [
      "rescue",
      "protect",
      "volunteer",
      "counsel"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Firefighters climbed the ladder to _____ a worker trapped on the roof. Luckily, nobody was seriously hurt in the fire at the warehouse.",
    "options": [
      "rescue",
      "recommend",
      "donate",
      "collaborate"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Workers must wear gloves to _____ their hands from dangerous chemicals. The factory checks all safety equipment every Monday morning.",
    "options": [
      "recommend",
      "mentor",
      "protect",
      "serve"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Our managers really _____ about the environment. Last year they stopped using plastic cups and put solar panels on the roof.",
    "options": [
      "donate",
      "care",
      "assist",
      "rescue"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The nurse sat with the frightened child to _____ him before the operation. She held his hand and told him a funny story.",
    "options": [
      "donate",
      "facilitate",
      "cooperate",
      "comfort"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Doctors _____ patients to drink plenty of water during hot summer days. Drinking enough water prevents headaches and tiredness.",
    "options": [
      "rescue",
      "advise",
      "donate",
      "mediate"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "I would highly _____ this hotel to anyone visiting Tainan. The rooms are clean, and the staff are friendly and polite.",
    "options": [
      "rescue",
      "mediate",
      "intervene",
      "recommend"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The new highway will _____ trade between the two cities. Trucks will be able to deliver goods in half the usual time.",
    "options": [
      "facilitate",
      "comfort",
      "counsel",
      "rescue"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The mobile app will _____ customers to check their bank balance at any time. They will no longer need to visit a branch.",
    "options": [
      "relieve",
      "rescue",
      "enable",
      "mediate"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The hotel will _____ free parking for all conference guests. Visitors simply need to show their name badge at the garage entrance.",
    "options": [
      "provide",
      "rescue",
      "mediate",
      "intervene"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "This medicine can quickly _____ pain from headaches and sore muscles. However, you should not take more than three tablets a day.",
    "options": [
      "donate",
      "volunteer",
      "relieve",
      "mediate"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The police asked all witnesses to _____ fully with the investigation. Anyone with information about the robbery should call the station immediately.",
    "options": [
      "donate",
      "cooperate",
      "rescue",
      "comfort"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Two famous designers will _____ on a new line of office furniture. Their first products will appear in stores next spring.",
    "options": [
      "relieve",
      "rescue",
      "donate",
      "collaborate"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Senior engineers are asked to _____ new graduates during their first year. They meet every week to discuss problems and set goals.",
    "options": [
      "donate",
      "mentor",
      "mediate",
      "relieve"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The union asked a neutral expert to _____ the dispute over working hours. Both sides hoped to reach an agreement before the strike began.",
    "options": [
      "donate",
      "volunteer",
      "enable",
      "mediate"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "When the two customers started shouting, the store manager had to _____. She calmly asked them to step outside and discuss the problem.",
    "options": [
      "intervene",
      "donate",
      "provide",
      "recommend"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The school bought _____ devices for students who cannot see well. These tools read text aloud and make the words on screen larger.",
    "options": [
      "punctual",
      "generous",
      "assistive",
      "jealous"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Regular walks are _____ to both your body and your mind. Doctors say that thirty minutes a day is enough to see results.",
    "options": [
      "beneficial",
      "curious",
      "absent",
      "nervous"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The staff at the information desk were very _____ and answered all our questions. They even gave us a free map of the city.",
    "options": [
      "guilty",
      "empty",
      "helpful",
      "foreign"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "My family has always been _____ of my decision to start a business. They even lent me money for my first office.",
    "options": [
      "accurate",
      "supportive",
      "expensive",
      "permanent"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Guests are _____ requested to turn off their phones during the concert. Taking photos or videos inside the hall is not allowed.",
    "options": [
      "willingly",
      "heavily",
      "loudly",
      "kindly"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Although the extra work was unpaid, many staff members _____ stayed late to finish the project. Their manager thanked them personally the next day.",
    "options": [
      "loudly",
      "willingly",
      "heavily",
      "narrowly"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Always keep a _____ of important files on a separate hard drive. If your computer breaks, you will not lose your work.",
    "options": [
      "charity",
      "mood",
      "flavor",
      "backup"
    ],
    "answer": 3,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "assist": {
    "pos": "v.",
    "en_def": "to help someone do something",
    "cn_def": "協助；幫助"
  },
  "aid": {
    "pos": "n.",
    "en_def": "help such as food, money or medicine given to people in need",
    "cn_def": "援助；救援物資"
  },
  "support": {
    "pos": "v.",
    "en_def": "to agree with and help an idea or person",
    "cn_def": "支持；贊成"
  },
  "encourage": {
    "pos": "v.",
    "en_def": "to give someone the confidence or reason to do something",
    "cn_def": "鼓勵；激勵"
  },
  "guide": {
    "pos": "v.",
    "en_def": "to show someone the way or lead them through a place",
    "cn_def": "引導；帶領"
  },
  "serve": {
    "pos": "v.",
    "en_def": "to give food, drinks or help to customers",
    "cn_def": "服務；供應（餐點）"
  },
  "donate": {
    "pos": "v.",
    "en_def": "to give money or things to help people",
    "cn_def": "捐贈；捐款"
  },
  "volunteer": {
    "pos": "v.",
    "en_def": "to offer to do something without being asked or paid",
    "cn_def": "自願（做）；當志工"
  },
  "rescue": {
    "pos": "v.",
    "en_def": "to save someone from danger",
    "cn_def": "救援；營救"
  },
  "protect": {
    "pos": "v.",
    "en_def": "to keep someone or something safe from harm",
    "cn_def": "保護"
  },
  "care": {
    "pos": "v.",
    "en_def": "to feel that someone or something is important",
    "cn_def": "關心；在乎"
  },
  "comfort": {
    "pos": "v.",
    "en_def": "to make someone who is sad or worried feel better",
    "cn_def": "安慰"
  },
  "advise": {
    "pos": "v.",
    "en_def": "to tell someone what you think they should do",
    "cn_def": "建議；勸告"
  },
  "recommend": {
    "pos": "v.",
    "en_def": "to say that something is good and suggest it to others",
    "cn_def": "推薦；建議"
  },
  "facilitate": {
    "pos": "v.",
    "en_def": "to make a process or discussion easier or smoother",
    "cn_def": "促進；使順利進行"
  },
  "enable": {
    "pos": "v.",
    "en_def": "to make it possible for someone to do something",
    "cn_def": "使能夠"
  },
  "provide": {
    "pos": "v.",
    "en_def": "to give someone something they need",
    "cn_def": "提供"
  },
  "relieve": {
    "pos": "v.",
    "en_def": "to make pain, worry or pressure less",
    "cn_def": "減輕；緩解"
  },
  "cooperate": {
    "pos": "v.",
    "en_def": "to work together with others for a shared goal",
    "cn_def": "合作；配合"
  },
  "collaborate": {
    "pos": "v.",
    "en_def": "to work with another person or group to create something",
    "cn_def": "合作；協作"
  },
  "mentor": {
    "pos": "v.",
    "en_def": "to give a less experienced person advice and help over time",
    "cn_def": "指導；輔導"
  },
  "counsel": {
    "pos": "v.",
    "en_def": "to give professional advice to someone about a problem",
    "cn_def": "諮詢；輔導；提供建議"
  },
  "mediate": {
    "pos": "v.",
    "en_def": "to help two sides who disagree reach an agreement",
    "cn_def": "調解；斡旋"
  },
  "intervene": {
    "pos": "v.",
    "en_def": "to become involved in a situation to stop or change it",
    "cn_def": "介入；干預"
  },
  "assistive": {
    "pos": "adj.",
    "en_def": "designed to help people with disabilities do things",
    "cn_def": "輔助的"
  },
  "beneficial": {
    "pos": "adj.",
    "en_def": "having a good effect; helpful",
    "cn_def": "有益的"
  },
  "helpful": {
    "pos": "adj.",
    "en_def": "useful, or willing to help others",
    "cn_def": "有幫助的；樂於助人的"
  },
  "supportive": {
    "pos": "adj.",
    "en_def": "giving help and encouragement",
    "cn_def": "支持的；給予鼓勵的"
  },
  "kindly": {
    "pos": "adv.",
    "en_def": "in a kind and friendly way",
    "cn_def": "好心地；親切地"
  },
  "willingly": {
    "pos": "adv.",
    "en_def": "in a way that shows you are happy to do something",
    "cn_def": "欣然地；自願地"
  },
  "backup": {
    "pos": "n.",
    "en_def": "an extra copy of computer data kept in case the original is lost",
    "cn_def": "備份"
  },
  "service": {
    "pos": "n.",
    "en_def": "the help that staff give to customers",
    "cn_def": "服務"
  },
  "assistance": {
    "pos": "n.",
    "en_def": "help given to someone",
    "cn_def": "協助；援助"
  },
  "charity": {
    "pos": "n.",
    "en_def": "an organization that gives money or help to people in need",
    "cn_def": "慈善機構；慈善"
  }
};

const EXTRA_GLOSSES = {};
