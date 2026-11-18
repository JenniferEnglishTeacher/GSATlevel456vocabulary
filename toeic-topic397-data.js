// Topic 397 Quiz Data: Team 團隊
// Source word list: https://www.examword.com/group-topic/team — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T397 - Team 團隊",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "member",
    "pos": "n.",
    "cn_def": "成員；會員",
    "en_def": "a person who belongs to a group or organization",
    "sentence": "A: I heard the marketing department is starting a new project next month, so do you know who will be working on it with you? B: Yes, our manager chose six people from different offices, and I was really happy when she told me I would be a {{BLANK}} of the group because I have experience with online advertising.",
    "cn": "A：我聽說行銷部下個月要開始一個新專案，你知道誰會和你一起做嗎？ B：知道，我們經理從不同辦公室挑了六個人，她告訴我我會成為這個小組的一名【成員】時我真的很開心，因為我有網路廣告的經驗。"
  },
  {
    "word": "captain",
    "pos": "n.",
    "cn_def": "隊長",
    "en_def": "the leader of a sports team",
    "sentence": "A: Is it true that our company soccer team finally won the city business league last Saturday after losing in the final for three years? B: Yes, and everyone gave the most credit to Kevin from accounting, because as {{BLANK}} he kept the players calm and organized even when we were behind at halftime.",
    "cn": "A：我們公司的足球隊在連續三年輸掉決賽之後，上週六終於贏得了市商業聯賽，是真的嗎？ B：是的，大家最感謝的是會計部的凱文，因為身為【隊長】，即使我們在中場落後時，他也讓球員保持冷靜、井然有序。"
  },
  {
    "word": "leader",
    "pos": "n.",
    "cn_def": "領導者；負責人",
    "en_def": "a person who guides or is in charge of a group",
    "sentence": "A: Why did the director move Sarah to the head of the customer service project, even though she joined the company only two years ago? B: She listens carefully to everyone, makes clear decisions under pressure, and always explains the plan, so the director believed she would be a strong {{BLANK}} for such a large group.",
    "cn": "A：莎拉才進公司兩年，為什麼主管讓她負責客服專案？ B：她會仔細聆聽每個人的意見，在壓力下做出明確的決定，而且總是把計畫解釋清楚，所以主管相信她會是這麼大一個團隊的有力【領導者】。"
  },
  {
    "word": "coach",
    "pos": "n.",
    "cn_def": "教練",
    "en_def": "a person who trains people in a sport or skill",
    "sentence": "A: How did your department improve its sales results so quickly this quarter when the numbers were so disappointing last spring? B: The company hired an experienced {{BLANK}} who visited our office every Friday, watched our phone calls with clients, and gave each of us practical advice on how to close deals more effectively.",
    "cn": "A：去年春天的數字那麼令人失望，你們部門這一季的業績怎麼進步得這麼快？ B：公司請了一位經驗豐富的【教練】，他每週五來我們辦公室，觀察我們和客戶的通話，並給我們每個人如何更有效成交的實用建議。"
  },
  {
    "word": "cooperate",
    "pos": "v.",
    "cn_def": "合作；配合",
    "en_def": "to work together with others for a shared purpose",
    "sentence": "A: The new warehouse system is causing delays, so what should the shipping staff do while the technicians are fixing the problem this week? B: The manager asked both departments to {{BLANK}} closely by sharing order lists every morning, so that urgent packages for our biggest customers can still leave the building on time.",
    "cn": "A：新的倉庫系統造成延誤，這週技術人員修理問題期間，出貨人員該怎麼辦？ B：經理要求兩個部門每天早上分享訂單清單，密切【合作】，讓最大客戶的急件仍能準時出貨。"
  },
  {
    "word": "cooperation",
    "pos": "n.",
    "cn_def": "合作",
    "en_def": "the act of working together to get something done",
    "sentence": "A: How did the hotel manage to prepare the conference rooms for three hundred guests in just one afternoon after the last-minute booking? B: It was possible only because of the excellent {{BLANK}} between the kitchen, cleaning, and technical staff, who all worked together and helped each other instead of focusing only on their own jobs.",
    "cn": "A：飯店接到臨時訂位後，怎麼能在一個下午就為三百位賓客準備好會議室？ B：這完全歸功於廚房、清潔和技術人員之間的良好【合作】，他們齊心協力、互相幫忙，而不是只顧自己的工作。"
  },
  {
    "word": "collaborate",
    "pos": "v.",
    "cn_def": "協作；共同合作",
    "en_def": "to work with another person or group to create something",
    "sentence": "A: Our design team in Taipei and the engineers in Germany have never met in person, so how will they create the new product together? B: They plan to {{BLANK}} through weekly video meetings and a shared online workspace, where both groups can upload drawings, leave comments, and track every change before the deadline in March.",
    "cn": "A：我們台北的設計團隊和德國的工程師從沒見過面，他們要怎麼一起開發新產品？ B：他們打算透過每週視訊會議和共用的線上工作空間來【協作】，雙方都可以上傳圖稿、留言，並在三月截止日前追蹤每一項修改。"
  },
  {
    "word": "collaboration",
    "pos": "n.",
    "cn_def": "合作；協作",
    "en_def": "working together with another person or group, especially to create something",
    "sentence": "A: Did you hear that our company is launching a new line of healthy snacks with that famous local bakery next month? B: Yes, the {{BLANK}} was announced at this morning's meeting, and the marketing director said that combining their recipes with our national delivery network should help both businesses reach many more customers.",
    "cn": "A：你聽說我們公司下個月要和那家知名的在地麵包店推出新的健康零食系列嗎？ B：聽說了，這項【合作】在今天早上的會議上宣布，行銷總監說結合他們的配方和我們的全國配送網路，應該能幫兩家公司接觸到更多顧客。"
  },
  {
    "word": "unity",
    "pos": "n.",
    "cn_def": "團結；一致",
    "en_def": "the state of being joined together as one group",
    "sentence": "A: The office seemed very divided after the two departments merged last year, so what changed the atmosphere so much recently? B: The new director organized monthly lunches and a weekend volunteer event, and these activities created a real sense of {{BLANK}}, so people now see themselves as one group working toward the same goals.",
    "cn": "A：去年兩個部門合併後，辦公室似乎很分裂，最近是什麼讓氣氛改變這麼多？ B：新主管舉辦了每月午餐聚會和一次週末志工活動，這些活動創造出真正的【團結】感，所以大家現在把自己看作朝同樣目標努力的一個團體。"
  },
  {
    "word": "support",
    "pos": "n.",
    "cn_def": "支持；協助",
    "en_def": "help or encouragement given to someone",
    "sentence": "A: I'm worried about presenting the annual budget to the board next week because I have never spoken in front of so many senior managers. B: Don't worry too much, because the whole finance department is ready to give you {{BLANK}}, and we can practice the presentation together on Monday afternoon in the small meeting room.",
    "cn": "A：我很擔心下週要向董事會報告年度預算，因為我從來沒有在這麼多高階主管面前發言過。 B：別太擔心，整個財務部都準備好給你【支持】，我們星期一下午可以在小會議室一起練習簡報。"
  },
  {
    "word": "encourage",
    "pos": "v.",
    "cn_def": "鼓勵",
    "en_def": "to give someone confidence or hope to do something",
    "sentence": "A: Several new employees seem too nervous to share their ideas during our weekly meetings, so what can we do to help them? B: I think managers should {{BLANK}} them by asking for their opinions directly, thanking them for every suggestion, and showing that mistakes are a normal part of learning in a new job.",
    "cn": "A：好幾位新員工在每週會議上似乎太緊張，不敢分享想法，我們能怎麼幫他們？ B：我認為主管應該直接詢問他們的意見、感謝他們的每個建議，並表明犯錯是學習新工作的正常過程，以此來【鼓勵】他們。"
  },
  {
    "word": "motivate",
    "pos": "v.",
    "cn_def": "激勵；激發",
    "en_def": "to make someone want to work hard or do something",
    "sentence": "A: Sales have been slow for two months, and many staff members look tired, so what is the company planning to do about it? B: The managers have decided to {{BLANK}} employees with a small bonus for every new client and a team dinner at the end of the month if everyone reaches their targets.",
    "cn": "A：業績已經低迷兩個月了，很多員工看起來都很疲憊，公司打算怎麼處理？ B：經理們決定用每簽一位新客戶就發小額獎金、以及如果大家都達標就在月底舉辦團隊聚餐的方式來【激勵】員工。"
  },
  {
    "word": "strategy",
    "pos": "n.",
    "cn_def": "策略；計畫",
    "en_def": "a careful plan for reaching a goal",
    "sentence": "A: Our competitor just opened three new stores downtown, so how are we going to keep our customers from leaving us this year? B: The marketing department has developed a new {{BLANK}} that focuses on faster delivery, better online reviews, and special discounts for loyal customers, and they will explain the details at Thursday's meeting.",
    "cn": "A：我們的競爭對手剛在市中心開了三家新店，今年我們要怎麼留住顧客？ B：行銷部已經制定了一套新【策略】，著重在更快的配送、更好的網路評價，以及給忠實顧客的特別折扣，他們會在週四的會議上說明細節。"
  },
  {
    "word": "goal",
    "pos": "n.",
    "cn_def": "目標",
    "en_def": "something you are trying to do or achieve",
    "sentence": "A: What did the general manager say at the start-of-year meeting about the plans for our small branch office in Kaohsiung? B: She said our main {{BLANK}} is to increase sales by fifteen percent before December, and she promised extra training and two new staff members to help us reach that number.",
    "cn": "A：總經理在年初會議上對我們高雄小分公司的計畫說了些什麼？ B：她說我們的主要【目標】是在十二月前把業績提升百分之十五，她也承諾提供額外培訓和兩名新員工來幫助我們達成這個數字。"
  },
  {
    "word": "victory",
    "pos": "n.",
    "cn_def": "勝利",
    "en_def": "the act of winning a game, competition, or fight",
    "sentence": "A: Why is everyone in the office so excited this morning, and why are there balloons and a big cake in the break room? B: Our company basketball team won the regional business tournament last night after a very close final game, so the managers decided to celebrate the {{BLANK}} with a small party at lunch.",
    "cn": "A：今天早上辦公室的大家為什麼這麼興奮？休息室裡為什麼有氣球和一個大蛋糕？ B：我們公司籃球隊昨晚在一場勢均力敵的決賽後贏得了區域商業聯賽，所以經理們決定中午辦個小派對慶祝這場【勝利】。"
  },
  {
    "word": "defeat",
    "pos": "n.",
    "cn_def": "失敗；落敗",
    "en_def": "the fact of losing a game, competition, or fight",
    "sentence": "A: How did the players from the marketing department feel after losing the final game of the company volleyball tournament on Saturday? B: They were disappointed at first, but the coach reminded them that one {{BLANK}} does not mean failure, and they have already started training twice a week for next year's competition.",
    "cn": "A：行銷部的球員們星期六輸掉公司排球賽的決賽後，感覺如何？ B：他們一開始很失望，但教練提醒他們，一次【落敗】不代表失敗，他們已經開始每週練習兩次，準備明年的比賽。"
  },
  {
    "word": "practice",
    "pos": "n.",
    "cn_def": "練習",
    "en_def": "doing something again and again to get better at it",
    "sentence": "A: Our new receptionists still seem a little nervous when they answer calls from international customers, so is there anything we can do? B: They just need more {{BLANK}}, so I've arranged short role-play sessions every morning where they can answer pretend calls in English before the office opens to the public.",
    "cn": "A：我們的新接待員接聽國際客戶電話時似乎還是有點緊張，我們能做些什麼嗎？ B：他們只是需要更多【練習】，所以我安排了每天早上的簡短角色扮演，讓他們在辦公室對外開放前用英文接聽模擬電話。"
  },
  {
    "word": "effort",
    "pos": "n.",
    "cn_def": "努力",
    "en_def": "the hard work or energy used to do something",
    "sentence": "A: The final report for the client looks wonderful, but I know the deadline was extremely tight, so how did your group finish it so quickly? B: It took a lot of {{BLANK}}, because we stayed late every evening last week, divided the work carefully, and checked each other's sections before sending the file on Friday morning.",
    "cn": "A：給客戶的最終報告看起來很棒，但我知道期限非常緊迫，你們小組怎麼這麼快就完成了？ B：這花了很多【努力】，我們上週每天晚上都留到很晚，仔細分工，並在週五早上寄出檔案前互相檢查各自負責的部分。"
  },
  {
    "word": "commitment",
    "pos": "n.",
    "cn_def": "投入；承諾",
    "en_def": "a strong willingness to give time and energy to something",
    "sentence": "A: Why did the director choose Daniel for the promotion when several other employees have worked here much longer than he has? B: She was impressed by his strong {{BLANK}} to the company, since he often volunteers for difficult projects, helps new colleagues learn the system, and never misses an important deadline.",
    "cn": "A：好幾位員工在這裡的年資比丹尼爾長得多，主管為什麼選他升職？ B：她對他對公司的高度【投入】印象深刻，因為他常主動接下困難的專案、幫助新同事學習系統，而且從不錯過重要的截止日期。"
  },
  {
    "word": "responsibility",
    "pos": "n.",
    "cn_def": "責任；職責",
    "en_def": "a duty or job that you are expected to do",
    "sentence": "A: Now that you are the new office manager, what will you do differently from the person who had the job before you? B: My main {{BLANK}} is to make sure every project runs smoothly, so I plan to hold short meetings every Monday, check progress regularly, and solve problems before they become serious.",
    "cn": "A：既然你是新任辦公室經理，你會做哪些和前任不一樣的事？ B：我的主要【職責】是確保每個專案順利進行，所以我打算每週一開簡短會議、定期檢查進度，並在問題變嚴重前解決它們。"
  },
  {
    "word": "trust",
    "pos": "n.",
    "cn_def": "信任",
    "en_def": "the belief that someone is honest and can be depended on",
    "sentence": "A: Why does our manager allow the design staff to work from home two days a week while other departments must come to the office every day? B: She has built strong {{BLANK}} with her staff over the years, because they always finish their work on time and keep her informed about any problems with their projects.",
    "cn": "A：為什麼我們經理允許設計人員每週在家工作兩天，而其他部門每天都得進辦公室？ B：多年來她和員工之間建立了深厚的【信任】，因為他們總是準時完成工作，並隨時讓她知道專案的任何問題。"
  },
  {
    "word": "communication",
    "pos": "n.",
    "cn_def": "溝通；聯繫",
    "en_def": "the sharing of information between people",
    "sentence": "A: Last month's product launch had several problems with late shipments and wrong prices, so what do you think went wrong? B: I believe poor {{BLANK}} was the biggest problem, because the sales department never told the warehouse about the price changes, and nobody sent the updated schedule to the delivery drivers.",
    "cn": "A：上個月的產品發表出現了好幾個出貨延遲和價格錯誤的問題，你覺得是哪裡出錯了？ B：我認為【溝通】不良是最大的問題，因為業務部從沒告訴倉庫價格有變動，也沒有人把更新後的時程表寄給送貨司機。"
  },
  {
    "word": "role",
    "pos": "n.",
    "cn_def": "角色；職務",
    "en_def": "the job or position someone has in a group or activity",
    "sentence": "A: I'm joining the planning committee for the company's anniversary event next month, but I'm not sure what I will be expected to do. B: Your {{BLANK}} will be to contact the hotel, confirm the number of guests, and arrange the menu, while other people handle the music, decorations, and invitations for our business partners.",
    "cn": "A：我要加入下個月公司週年活動的籌備委員會，但我不確定自己要負責什麼。 B：你的【職務】是聯絡飯店、確認賓客人數並安排菜單，其他人則負責音樂、佈置和寄給商業夥伴的邀請函。"
  },
  {
    "word": "talent",
    "pos": "n.",
    "cn_def": "天賦；才能",
    "en_def": "a natural ability to do something well",
    "sentence": "A: Who designed the beautiful posters for the charity fun run that our company is organizing in the park this weekend? B: Lisa from the accounting office made them, and everyone was surprised, because nobody knew she had such a {{BLANK}} for drawing until she showed us her artwork at the planning meeting.",
    "cn": "A：我們公司這個週末在公園舉辦的慈善路跑，那些漂亮的海報是誰設計的？ B：是會計室的麗莎做的，大家都很驚訝，因為直到她在籌備會議上給我們看她的作品前，沒有人知道她有這麼好的繪畫【天賦】。"
  },
  {
    "word": "skill",
    "pos": "n.",
    "cn_def": "技能；技巧",
    "en_def": "an ability to do something well, gained through training or experience",
    "sentence": "A: What do you think is the most important thing for new sales assistants to learn during their first few weeks at our store? B: In my opinion, the most useful {{BLANK}} is listening carefully to customers, because when you understand what they really need, it becomes much easier to recommend the right products.",
    "cn": "A：你覺得新的銷售助理在我們店裡的頭幾週最需要學的是什麼？ B：我認為最有用的【技能】是仔細聆聽顧客，因為當你了解他們真正的需求時，推薦合適的產品就容易多了。"
  },
  {
    "word": "competitive",
    "pos": "adj.",
    "cn_def": "競爭激烈的；有競爭力的",
    "en_def": "involving strong efforts to be better than others; as good as or better than others",
    "sentence": "A: Why are so many companies offering free training courses and flexible working hours to young graduates this year? B: The job market for software engineers has become very {{BLANK}}, so businesses must offer attractive benefits and higher salaries if they want to hire the best people before other firms do.",
    "cn": "A：為什麼今年有這麼多公司為年輕畢業生提供免費培訓課程和彈性工時？ B：軟體工程師的就業市場變得非常【競爭激烈】，所以企業如果想比其他公司先聘到最優秀的人才，就必須提供吸引人的福利和更高的薪水。"
  },
  {
    "word": "determined",
    "pos": "adj.",
    "cn_def": "下定決心的；堅決的",
    "en_def": "having a strong decision to do something even when it is difficult",
    "sentence": "A: Our team lost the contract with the hotel chain last year, so why does the sales manager want to try to win their business again? B: She is {{BLANK}} to show them that our new cleaning products are better and cheaper, so she has spent weeks preparing a detailed proposal and free samples for their managers.",
    "cn": "A：我們團隊去年失去了那家連鎖飯店的合約，業務經理為什麼還想再次爭取他們的生意？ B：她【下定決心】要讓他們知道我們的新清潔產品更好又更便宜，所以她花了好幾週為他們的經理準備詳細的提案和免費樣品。"
  },
  {
    "word": "confident",
    "pos": "adj.",
    "cn_def": "有信心的；自信的",
    "en_def": "feeling sure about your own abilities or that something will happen",
    "sentence": "A: You looked very relaxed during the presentation to the investors this morning, even though so many important people were in the room. B: I felt {{BLANK}} because our group had practiced the talk five times, checked every number in the report, and prepared answers to all the difficult questions we expected them to ask.",
    "cn": "A：今天早上你向投資人簡報時看起來很放鬆，即使現場有那麼多重要人物。 B：我覺得很【有信心】，因為我們小組已經練習了五次演講、檢查了報告中的每個數字，並準備好所有預期他們會問的困難問題的答案。"
  },
  {
    "word": "reliable",
    "pos": "adj.",
    "cn_def": "可靠的",
    "en_def": "able to be trusted to do what is expected",
    "sentence": "A: We need someone to collect the important documents from the bank and deliver them to the lawyer's office before noon tomorrow. B: Let's ask Tom from the front desk, because he is very {{BLANK}}, always arrives on time, and has never lost a package in the three years he has worked for our company.",
    "cn": "A：我們需要有人明天中午前去銀行拿重要文件，並送到律師事務所。 B：我們請櫃檯的湯姆吧，因為他非常【可靠】，總是準時，而且在我們公司工作的三年裡從沒弄丟過任何包裹。"
  },
  {
    "word": "flexible",
    "pos": "adj.",
    "cn_def": "有彈性的；靈活的",
    "en_def": "able to change easily to suit different situations",
    "sentence": "A: Since several staff members have young children, is the company planning to change the working hours for the customer service department? B: Yes, the new manager wants to make the schedule more {{BLANK}}, so employees can start any time between seven and ten in the morning as long as they work eight hours a day.",
    "cn": "A：既然有好幾位員工有年幼的孩子，公司打算調整客服部的上班時間嗎？ B：是的，新經理想讓班表更有【彈性】，只要員工每天工作八小時，就可以在早上七點到十點之間任何時間開始上班。"
  },
  {
    "word": "bond",
    "pos": "n.",
    "cn_def": "情誼；聯繫",
    "en_def": "a close feeling or connection between people",
    "sentence": "A: Why does our department go on a hiking trip together every autumn, even though many people are very busy at that time of year? B: The manager believes these trips help build a strong {{BLANK}} between colleagues, because people who share fun experiences outside the office usually work together better and solve problems more easily.",
    "cn": "A：為什麼我們部門每年秋天都一起去健行，即使很多人在那個時候都很忙？ B：經理相信這些旅行有助於在同事之間建立深厚的【情誼】，因為在辦公室外共享愉快經驗的人，通常合作得更好，也更容易解決問題。"
  },
  {
    "word": "respect",
    "pos": "n.",
    "cn_def": "尊重；尊敬",
    "en_def": "a feeling of admiration for someone and polite treatment of them",
    "sentence": "A: What makes Mr. Wang such a popular manager among the younger employees in the research department? B: He treats everyone with {{BLANK}}, listens carefully when people disagree with him, and always gives credit to the person who came up with a good idea, so his staff feel valued and appreciated.",
    "cn": "A：是什麼讓王先生在研究部的年輕員工中這麼受歡迎？ B：他以【尊重】對待每個人，在別人和他意見不同時仔細聆聽，而且總是把功勞歸給提出好點子的人，所以他的員工覺得自己受到重視和賞識。"
  },
  {
    "word": "compete",
    "pos": "v.",
    "cn_def": "競爭；比賽",
    "en_def": "to try to be more successful than others",
    "sentence": "A: Why did our small coffee shop suddenly decide to start selling sandwiches and offering free Wi-Fi to customers this month? B: A large international chain opened a store across the street, so we need to {{BLANK}} with them by giving customers something extra, like fresh food, a comfortable space, and friendlier service.",
    "cn": "A：我們的小咖啡店這個月為什麼突然決定開始賣三明治，並提供顧客免費無線網路？ B：一家大型國際連鎖店在對街開了分店，所以我們需要給顧客一些額外的東西，像是新鮮食物、舒適空間和更親切的服務，來和他們【競爭】。"
  },
  {
    "word": "achieve",
    "pos": "v.",
    "cn_def": "達成；實現",
    "en_def": "to succeed in doing or getting something through effort",
    "sentence": "A: The company wants to cut its electricity use by twenty percent next year, but do you really think that is possible? B: I believe we can {{BLANK}} that target if every department turns off unused computers, replaces old lights with energy-saving ones, and keeps the air conditioning at a reasonable temperature.",
    "cn": "A：公司希望明年把用電量減少百分之二十，你真的覺得可能嗎？ B：我相信只要每個部門關掉不用的電腦、把舊燈換成節能燈，並把冷氣維持在合理溫度，我們就能【達成】那個目標。"
  }
];

const MCQS = [
  {
    "q": "Every new _____ of the sales department must attend a two-day training course. The sessions cover company policies and our main products.",
    "options": [
      "member",
      "victory",
      "strategy",
      "effort"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The rowing club chose Anna as its _____ for the new season. She will lead the crew during every race this summer.",
    "options": [
      "goal",
      "captain",
      "defeat",
      "trust"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "After the manager retired, Brian became the _____ of the research group. He now makes the final decisions on every project.",
    "options": [
      "victory",
      "effort",
      "leader",
      "skill"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The tennis club has hired a new _____ to train its junior players. She will hold lessons every Tuesday and Thursday evening.",
    "options": [
      "strategy",
      "respect",
      "goal",
      "coach"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Police officers asked local shop owners to _____ with the investigation. Several owners shared security camera videos from that night.",
    "options": [
      "cooperate",
      "achieve",
      "compete",
      "motivate"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The project was finished early thanks to the close _____ between the two offices. Both teams shared their data every day.",
    "options": [
      "defeat",
      "cooperation",
      "talent",
      "victory"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The two universities will _____ on a study of air pollution in the city. Researchers from both schools will share equipment and results.",
    "options": [
      "compete",
      "motivate",
      "collaborate",
      "achieve"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The new phone is the result of a _____ between a Korean electronics maker and a Swedish design firm. It goes on sale next month.",
    "options": [
      "defeat",
      "goal",
      "talent",
      "collaboration"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Thanks to strong financial _____ from local businesses, the library was able to open a new reading room. The room opens next week.",
    "options": [
      "support",
      "defeat",
      "role",
      "captain"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Teachers at the language school _____ students to speak English as often as possible. They also organize weekly conversation clubs after class.",
    "options": [
      "compete",
      "encourage",
      "achieve",
      "cooperate"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Managers often use small rewards to _____ workers during busy holiday seasons. Free lunches and gift cards are especially popular.",
    "options": [
      "compete",
      "achieve",
      "motivate",
      "collaborate"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The company needs a clear marketing _____ before it enters the Japanese market. The board will discuss several plans next Friday.",
    "options": [
      "victory",
      "member",
      "respect",
      "strategy"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Our main _____ this year is to reduce customer complaints by half. Every department has been asked to suggest ways to reach it.",
    "options": [
      "goal",
      "bond",
      "captain",
      "defeat"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The city's basketball team celebrated its first _____ of the season on Saturday night. Fans cheered loudly as the players left the court.",
    "options": [
      "effort",
      "victory",
      "trust",
      "respect"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The candidate accepted his _____ in the election calmly. He thanked his supporters and promised to keep working for the community.",
    "options": [
      "talent",
      "effort",
      "defeat",
      "strategy"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Cleaning up the beach after the storm required a great deal of _____ from volunteers. More than two hundred people worked all weekend.",
    "options": [
      "captain",
      "member",
      "goal",
      "effort"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The hotel is known for its _____ to excellent customer service. Staff members receive regular training on how to handle guest requests.",
    "options": [
      "commitment",
      "victory",
      "defeat",
      "captain"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Checking the safety equipment every morning is the _____ of the warehouse supervisor. Any problems must be reported to the manager immediately.",
    "options": [
      "victory",
      "responsibility",
      "talent",
      "defeat"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Customers place great _____ in our bank because it has protected their savings for over fifty years. We work hard to keep that reputation.",
    "options": [
      "role",
      "effort",
      "trust",
      "captain"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Clear _____ between doctors and nurses helps hospitals avoid serious mistakes. Staff now use a new app to share patient information.",
    "options": [
      "victory",
      "captain",
      "defeat",
      "communication"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The film director has a special _____ for finding young actors. Many of her discoveries have later become famous stars.",
    "options": [
      "talent",
      "defeat",
      "goal",
      "victory"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Typing quickly is a useful _____ for anyone who works in an office. The company offers a free online course to improve it.",
    "options": [
      "respect",
      "skill",
      "victory",
      "captain"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The airline offers _____ prices on flights to Southeast Asia this winter. Its tickets are often cheaper than those of other carriers.",
    "options": [
      "confident",
      "determined",
      "competitive",
      "reliable"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The young engineer was _____ to finish the design before the deadline. She worked late every night for two weeks.",
    "options": [
      "flexible",
      "reliable",
      "competitive",
      "determined"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "After months of preparation, the sales team felt _____ that the client would sign the contract. The meeting went even better than expected.",
    "options": [
      "confident",
      "flexible",
      "competitive",
      "reliable"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "We need a _____ supplier who always delivers materials on time. Late shipments last year caused serious delays at our factory.",
    "options": [
      "determined",
      "reliable",
      "confident",
      "flexible"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The new office offers _____ working hours, so staff can start between seven and ten. Many parents appreciate this change.",
    "options": [
      "determined",
      "confident",
      "flexible",
      "reliable"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The new manager quickly earned the _____ of her staff by listening to their ideas. She also treated everyone fairly.",
    "options": [
      "defeat",
      "goal",
      "role",
      "respect"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Small local bookstores find it difficult to _____ with large online retailers. Many of them now host events to attract customers.",
    "options": [
      "compete",
      "achieve",
      "motivate",
      "encourage"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "The factory hopes to _____ zero waste by recycling all its packaging materials. The plan will take about three years to complete.",
    "options": [
      "compete",
      "achieve",
      "cooperate",
      "collaborate"
    ],
    "answer": 1,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "member": {
    "pos": "n.",
    "en_def": "a person who belongs to a group or organization",
    "cn_def": "成員；會員"
  },
  "captain": {
    "pos": "n.",
    "en_def": "the leader of a sports team",
    "cn_def": "隊長"
  },
  "leader": {
    "pos": "n.",
    "en_def": "a person who guides or is in charge of a group",
    "cn_def": "領導者；負責人"
  },
  "coach": {
    "pos": "n.",
    "en_def": "a person who trains people in a sport or skill",
    "cn_def": "教練"
  },
  "cooperate": {
    "pos": "v.",
    "en_def": "to work together with others for a shared purpose",
    "cn_def": "合作；配合"
  },
  "cooperation": {
    "pos": "n.",
    "en_def": "the act of working together to get something done",
    "cn_def": "合作"
  },
  "collaborate": {
    "pos": "v.",
    "en_def": "to work with another person or group to create something",
    "cn_def": "協作；共同合作"
  },
  "collaboration": {
    "pos": "n.",
    "en_def": "working together with another person or group, especially to create something",
    "cn_def": "合作；協作"
  },
  "unity": {
    "pos": "n.",
    "en_def": "the state of being joined together as one group",
    "cn_def": "團結；一致"
  },
  "support": {
    "pos": "n.",
    "en_def": "help or encouragement given to someone",
    "cn_def": "支持；協助"
  },
  "encourage": {
    "pos": "v.",
    "en_def": "to give someone confidence or hope to do something",
    "cn_def": "鼓勵"
  },
  "motivate": {
    "pos": "v.",
    "en_def": "to make someone want to work hard or do something",
    "cn_def": "激勵；激發"
  },
  "strategy": {
    "pos": "n.",
    "en_def": "a careful plan for reaching a goal",
    "cn_def": "策略；計畫"
  },
  "goal": {
    "pos": "n.",
    "en_def": "something you are trying to do or achieve",
    "cn_def": "目標"
  },
  "victory": {
    "pos": "n.",
    "en_def": "the act of winning a game, competition, or fight",
    "cn_def": "勝利"
  },
  "defeat": {
    "pos": "n.",
    "en_def": "the fact of losing a game, competition, or fight",
    "cn_def": "失敗；落敗"
  },
  "practice": {
    "pos": "n.",
    "en_def": "doing something again and again to get better at it",
    "cn_def": "練習"
  },
  "effort": {
    "pos": "n.",
    "en_def": "the hard work or energy used to do something",
    "cn_def": "努力"
  },
  "commitment": {
    "pos": "n.",
    "en_def": "a strong willingness to give time and energy to something",
    "cn_def": "投入；承諾"
  },
  "responsibility": {
    "pos": "n.",
    "en_def": "a duty or job that you are expected to do",
    "cn_def": "責任；職責"
  },
  "trust": {
    "pos": "n.",
    "en_def": "the belief that someone is honest and can be depended on",
    "cn_def": "信任"
  },
  "communication": {
    "pos": "n.",
    "en_def": "the sharing of information between people",
    "cn_def": "溝通；聯繫"
  },
  "role": {
    "pos": "n.",
    "en_def": "the job or position someone has in a group or activity",
    "cn_def": "角色；職務"
  },
  "talent": {
    "pos": "n.",
    "en_def": "a natural ability to do something well",
    "cn_def": "天賦；才能"
  },
  "skill": {
    "pos": "n.",
    "en_def": "an ability to do something well, gained through training or experience",
    "cn_def": "技能；技巧"
  },
  "competitive": {
    "pos": "adj.",
    "en_def": "involving strong efforts to be better than others; as good as or better than others",
    "cn_def": "競爭激烈的；有競爭力的"
  },
  "determined": {
    "pos": "adj.",
    "en_def": "having a strong decision to do something even when it is difficult",
    "cn_def": "下定決心的；堅決的"
  },
  "confident": {
    "pos": "adj.",
    "en_def": "feeling sure about your own abilities or that something will happen",
    "cn_def": "有信心的；自信的"
  },
  "reliable": {
    "pos": "adj.",
    "en_def": "able to be trusted to do what is expected",
    "cn_def": "可靠的"
  },
  "flexible": {
    "pos": "adj.",
    "en_def": "able to change easily to suit different situations",
    "cn_def": "有彈性的；靈活的"
  },
  "bond": {
    "pos": "n.",
    "en_def": "a close feeling or connection between people",
    "cn_def": "情誼；聯繫"
  },
  "respect": {
    "pos": "n.",
    "en_def": "a feeling of admiration for someone and polite treatment of them",
    "cn_def": "尊重；尊敬"
  },
  "compete": {
    "pos": "v.",
    "en_def": "to try to be more successful than others",
    "cn_def": "競爭；比賽"
  },
  "achieve": {
    "pos": "v.",
    "en_def": "to succeed in doing or getting something through effort",
    "cn_def": "達成；實現"
  }
};

const EXTRA_GLOSSES = {};
