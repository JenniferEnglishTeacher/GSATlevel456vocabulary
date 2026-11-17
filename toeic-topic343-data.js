// Topic 343 Quiz Data: School 學校
// Source word list: https://www.examword.com/group-topic/school — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T343 - School 學校",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "student",
    "pos": "n.",
    "cn_def": "學生",
    "en_def": "a person who studies at a school or university",
    "sentence": "A: Why is the conference room on the third floor so noisy this afternoon, and who booked it without telling our team? B: A local university sent a {{BLANK}} group to visit our office, and the HR manager is giving them a short talk about internships and career planning.",
    "cn": "A：為什麼三樓的會議室今天下午這麼吵，是誰沒告訴我們團隊就預約了？ B：一所當地大學派了一群【學生】來參觀我們的辦公室，人資經理正在為他們做一場關於實習與職涯規劃的簡短演講。"
  },
  {
    "word": "teacher",
    "pos": "n.",
    "cn_def": "老師；教師",
    "en_def": "a person whose job is to help others learn",
    "sentence": "A: Have you found someone to run the English training course for our sales staff before they travel to the trade fair in London next month? B: Yes, I hired an experienced {{BLANK}} from a language school downtown, and she will hold two evening classes every week in the training room.",
    "cn": "A：你找到人在我們的業務人員下個月去倫敦參加貿易展之前，為他們開英文訓練課程了嗎？ B：找到了，我請了市中心一所語言學校經驗豐富的【老師】，她每週會在訓練室上兩堂晚間課程。"
  },
  {
    "word": "principal",
    "pos": "n.",
    "cn_def": "校長",
    "en_def": "the person in charge of a school",
    "sentence": "A: Who should I contact about setting up a careers day at the high school near our factory so we can talk to students about job opportunities? B: You should email the {{BLANK}} directly, because she makes the final decision about school events, and her secretary said she usually replies within two days.",
    "cn": "A：關於在我們工廠附近的高中辦職涯日、好讓我們和學生談談工作機會，我應該聯絡誰？ B：你應該直接寄電子郵件給【校長】，因為學校活動由她做最後決定，而且她的祕書說她通常兩天內會回覆。"
  },
  {
    "word": "classroom",
    "pos": "n.",
    "cn_def": "教室",
    "en_def": "a room where classes are taught",
    "sentence": "A: Where are we going to hold the computer workshop for the new employees, since the main meeting room is being repainted this week? B: The training center next door is renting us a large {{BLANK}} with thirty desks, a projector, and fast internet, and it is only a five-minute walk away.",
    "cn": "A：既然主會議室這週在重新粉刷，我們要在哪裡為新進員工舉辦電腦研習？ B：隔壁的訓練中心要租給我們一間有三十張桌子、一台投影機和高速網路的大【教室】，而且走路只要五分鐘。"
  },
  {
    "word": "lesson",
    "pos": "n.",
    "cn_def": "課；一堂課",
    "en_def": "a period of time when someone is taught something",
    "sentence": "A: How is your new hobby going, and are you still going to the swimming pool near the office after work on Thursdays? B: It is going well, thanks. I take a one-hour {{BLANK}} with a coach every Thursday evening, and I can already swim across the pool without stopping.",
    "cn": "A：你的新嗜好進行得如何，你還是每週四下班後去辦公室附近的游泳池嗎？ B：很順利，謝謝。我每週四晚上和教練上一小時的【課】，現在已經可以不停地游完泳池全程了。"
  },
  {
    "word": "subject",
    "pos": "n.",
    "cn_def": "科目；學科",
    "en_def": "an area of knowledge studied at school, such as math",
    "sentence": "A: Your daughter is applying to university next year, isn't she, and has she decided what she wants to major in yet? B: Not yet, but math has always been her favorite {{BLANK}} at school, so she is thinking about accounting or finance, which could lead to a stable job in a bank.",
    "cn": "A：你女兒明年要申請大學了，對吧？她決定好主修什麼了嗎？ B：還沒，不過數學一直是她在學校最喜歡的【科目】，所以她在考慮會計或財務，那可能讓她在銀行找到穩定的工作。"
  },
  {
    "word": "homework",
    "pos": "n.",
    "cn_def": "家庭作業；功課",
    "en_def": "school work that students do at home",
    "sentence": "A: Why do you always leave the office at exactly five thirty, even when the rest of the team is staying late to finish the monthly report? B: I have to pick up my son from his after-school class and then help him with his {{BLANK}}, because he has a big science test on Friday.",
    "cn": "A：為什麼即使團隊其他人留下來加班完成月報，你總是五點半準時離開辦公室？ B：我得去課後班接兒子，然後幫他寫【功課】，因為他星期五有一場重要的自然科考試。"
  },
  {
    "word": "exam",
    "pos": "n.",
    "cn_def": "考試",
    "en_def": "an official test of knowledge or skill",
    "sentence": "A: Are you coming to the team dinner at the Italian restaurant on Saturday night to celebrate our successful product launch? B: I'm afraid I can't, because I am taking the professional accounting {{BLANK}} on Sunday morning, and I need to get a good night's sleep and review my notes.",
    "cn": "A：你星期六晚上會來義大利餐廳參加慶祝產品成功上市的團隊聚餐嗎？ B：恐怕不行，因為我星期天早上要參加專業會計【考試】，我需要好好睡一覺並複習筆記。"
  },
  {
    "word": "test",
    "pos": "n.",
    "cn_def": "測試；測驗",
    "en_def": "a check to see how well something works or how much someone knows",
    "sentence": "A: Can we send the new mobile app to our customers this week, or does the technical team still need more time to check it? B: They want to run one more {{BLANK}} on older phones first, because last week some users reported that the payment page kept freezing during checkout.",
    "cn": "A：我們這週可以把新的手機應用程式發給客戶嗎？還是技術團隊需要更多時間檢查？ B：他們想先在舊款手機上再做一次【測試】，因為上週有些使用者回報付款頁面在結帳時一直當機。"
  },
  {
    "word": "grade",
    "pos": "n.",
    "cn_def": "成績；分數",
    "en_def": "a mark or score that shows how good a student's work is",
    "sentence": "A: Did your nephew get the summer internship at the bank downtown that he applied for last month? B: Yes, he did. The manager said his top {{BLANK}} in economics and his friendly attitude during the interview made him stand out from the other forty applicants.",
    "cn": "A：你外甥拿到他上個月申請的市中心那家銀行的暑期實習了嗎？ B：拿到了。經理說他經濟學的頂尖【成績】以及面試時友善的態度，讓他在其他四十位應徵者中脫穎而出。"
  },
  {
    "word": "uniform",
    "pos": "n.",
    "cn_def": "制服",
    "en_def": "special clothes that people in the same school or job wear",
    "sentence": "A: Do the new staff at the hotel front desk need to buy their own work clothes, or does the company provide them? B: The hotel gives every employee two sets of the official {{BLANK}} on the first day, and the laundry department cleans them for free twice a week.",
    "cn": "A：飯店櫃台的新員工需要自己買工作服，還是公司會提供？ B：飯店在第一天會發給每位員工兩套正式【制服】，洗衣部門每週也會免費清洗兩次。"
  },
  {
    "word": "library",
    "pos": "n.",
    "cn_def": "圖書館",
    "en_def": "a place where people can read or borrow books",
    "sentence": "A: Where do you usually prepare for your certification test, since your apartment is so close to the busy night market? B: I go to the city {{BLANK}} near the train station after work, because it stays open until ten, it has free Wi-Fi, and the reading room is always very quiet.",
    "cn": "A：既然你的公寓離熱鬧的夜市那麼近，你通常在哪裡準備認證考試？ B：我下班後會去火車站附近的市立【圖書館】，因為它開到十點、有免費無線網路，而且閱覽室總是很安靜。"
  },
  {
    "word": "laboratory",
    "pos": "n.",
    "cn_def": "實驗室",
    "en_def": "a room or building where scientists do tests and experiments",
    "sentence": "A: Why has the launch of the new skin cream been delayed until next spring, when the advertisements are already finished? B: The {{BLANK}} found that the cream causes a small rash on some people, so the scientists need several more months to change the formula and run safety checks.",
    "cn": "A：廣告都已經做好了，為什麼新乳霜的上市要延到明年春天？ B：【實驗室】發現這款乳霜會讓某些人出現輕微疹子，所以科學家需要再花幾個月修改配方並進行安全檢驗。"
  },
  {
    "word": "playground",
    "pos": "n.",
    "cn_def": "遊樂場；操場",
    "en_def": "an outdoor area where children can play",
    "sentence": "A: What do you think of the new apartment building that the company is building for employees with young families? B: It looks great, especially because it will have a safe {{BLANK}} with swings and slides in the garden, so parents can watch their children from the windows.",
    "cn": "A：你覺得公司正在為有年幼孩子的員工興建的新公寓大樓怎麼樣？ B：看起來很棒，尤其是花園裡會有一座設有鞦韆和溜滑梯的安全【遊樂場】，家長可以從窗戶看著孩子。"
  },
  {
    "word": "assembly",
    "pos": "n.",
    "cn_def": "集會；朝會",
    "en_def": "a meeting of all the students and teachers of a school",
    "sentence": "A: Why are so many parents parking outside the elementary school across the street this morning, and is there a special event? B: The school is holding a big {{BLANK}} in the hall to give prizes to the best students, and the mayor is coming to give a short speech at nine.",
    "cn": "A：為什麼今天早上那麼多家長把車停在對街的小學外面，有特別活動嗎？ B：學校在禮堂舉行盛大的【集會】，頒獎給最優秀的學生，市長九點也會來做簡短致詞。"
  },
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "行程表；時間表",
    "en_def": "a plan that lists what you will do and when",
    "sentence": "A: Can you join the video call with the clients in Tokyo on Wednesday afternoon to discuss the new contract? B: Let me check my {{BLANK}} first, because I think I have a meeting with the bank manager at two, but I can probably move it to Thursday morning if necessary.",
    "cn": "A：你星期三下午能參加和東京客戶的視訊會議，討論新合約嗎？ B：讓我先查一下我的【行程表】，因為我記得兩點要和銀行經理開會，不過必要的話我大概可以把它改到星期四早上。"
  },
  {
    "word": "timetable",
    "pos": "n.",
    "cn_def": "時刻表；課表",
    "en_def": "a list of the times when buses, trains, or classes happen",
    "sentence": "A: How are the visitors from our Singapore office getting from the airport to the hotel when they arrive late tomorrow night? B: I checked the train {{BLANK}} online, and the last express leaves the airport at eleven forty, so they should catch it easily if their flight is on time.",
    "cn": "A：我們新加坡辦公室的訪客明天深夜抵達時，要怎麼從機場到飯店？ B：我上網查了火車【時刻表】，最後一班快車十一點四十分從機場發車，所以如果他們的班機準時，應該很容易搭上。"
  },
  {
    "word": "curriculum",
    "pos": "n.",
    "cn_def": "課程（內容）",
    "en_def": "all the subjects and topics taught in a course or school",
    "sentence": "A: What changes is the training department making to the program for new sales representatives this year? B: They are updating the whole {{BLANK}}, so in addition to product knowledge, trainees will now learn how to use the customer database and handle difficult phone calls.",
    "cn": "A：訓練部門今年對新進業務代表的培訓計畫做了哪些改變？ B：他們正在更新整套【課程】，所以除了產品知識之外，受訓者現在也會學習如何使用客戶資料庫和處理棘手的電話。"
  },
  {
    "word": "discipline",
    "pos": "n.",
    "cn_def": "紀律；自律",
    "en_def": "the ability to control yourself and follow rules",
    "sentence": "A: How did you manage to finish your online business degree while working full-time at the bank and taking care of two kids? B: It took a lot of {{BLANK}}, to be honest. I got up at five every morning, read my course notes for two hours before work, and never missed a single deadline.",
    "cn": "A：你一邊在銀行全職工作、一邊照顧兩個孩子，是怎麼完成線上商學學位的？ B：老實說，這需要很大的【自律】。我每天早上五點起床，上班前讀兩小時的課程筆記，而且從沒錯過任何一個截止期限。"
  },
  {
    "word": "education",
    "pos": "n.",
    "cn_def": "教育",
    "en_def": "the process of teaching and learning, usually at school",
    "sentence": "A: Why did the company decide to give money to the new community center in the poorer part of the city? B: Our president believes that good {{BLANK}} is the key to a better future, so the money will pay for free computer classes and English courses for local teenagers.",
    "cn": "A：公司為什麼決定捐錢給市區較貧困地區新成立的社區中心？ B：我們的總裁相信良好的【教育】是通往更好未來的關鍵，所以這筆錢將用來為當地青少年支付免費的電腦課和英文課程。"
  },
  {
    "word": "learn",
    "pos": "v.",
    "cn_def": "學習；學會",
    "en_def": "to get knowledge or a skill by studying or practicing",
    "sentence": "A: The new accounting software looks really complicated, so how long do you think it will take our team to get used to it? B: The supplier says most people can {{BLANK}} the basic functions in about two days, and they will send a trainer to our office next Monday to help us.",
    "cn": "A：新的會計軟體看起來真的很複雜，你覺得我們團隊要多久才能習慣？ B：供應商說大多數人大約兩天就能【學會】基本功能，而且他們下週一會派一位培訓講師到我們辦公室協助我們。"
  },
  {
    "word": "teach",
    "pos": "v.",
    "cn_def": "教；教導",
    "en_def": "to show or explain to someone how to do something",
    "sentence": "A: Who is going to show the new interns how to use the coffee machine, the printers, and the online booking system for meeting rooms? B: Linda from the front office has offered to {{BLANK}} them on Monday morning, because she has worked here for ten years and knows every system very well.",
    "cn": "A：誰要教新來的實習生使用咖啡機、印表機和線上會議室預約系統？ B：前台的琳達自願在星期一早上【教】他們，因為她在這裡工作了十年，對每個系統都非常熟悉。"
  },
  {
    "word": "study",
    "pos": "v.",
    "cn_def": "讀書；攻讀",
    "en_def": "to spend time learning about a subject",
    "sentence": "A: Why is Kevin taking evening classes at the college downtown, even though he already has a good job in the marketing department? B: He wants to {{BLANK}} business management for two years, because he hopes to become a department manager and eventually open his own company one day.",
    "cn": "A：為什麼凱文已經在行銷部有不錯的工作了，還要去市中心的大學上夜間課程？ B：他想【攻讀】企業管理兩年，因為他希望成為部門經理，有朝一日能開自己的公司。"
  },
  {
    "word": "graduate",
    "pos": "v.",
    "cn_def": "畢業",
    "en_def": "to finish your studies at a school or university",
    "sentence": "A: When is your younger sister going to start working at the engineering firm that offered her a position last month? B: She will {{BLANK}} from university in June, and then she plans to take a two-week trip to Japan before she starts her new job on the first of July.",
    "cn": "A：你妹妹什麼時候要開始在上個月錄取她的那家工程公司上班？ B：她六月會從大學【畢業】，然後打算去日本旅行兩週，七月一日再開始新工作。"
  },
  {
    "word": "attend",
    "pos": "v.",
    "cn_def": "參加；出席",
    "en_def": "to go to an event, class, or meeting",
    "sentence": "A: Are you going to the annual industry conference at the convention center next week, or will you send someone from your team instead? B: I plan to {{BLANK}} all three days myself, because several important suppliers will be there, and I want to compare their prices before we sign a new contract.",
    "cn": "A：你下週會去會展中心參加年度產業會議，還是會改派團隊的人去？ B：我打算親自【出席】全部三天，因為有好幾家重要的供應商會到場，我想在簽新合約前比較他們的價格。"
  },
  {
    "word": "private",
    "pos": "adj.",
    "cn_def": "私立的；私人的",
    "en_def": "owned or paid for by a person or company, not the government; only for one person",
    "sentence": "A: Where does your son go to school now that your family has moved closer to the new office in the business district? B: He goes to a small {{BLANK}} school near our apartment, which is quite expensive, but the classes are smaller and the teachers give each child more attention.",
    "cn": "A：既然你們家搬到商業區新辦公室附近，你兒子現在在哪裡上學？ B：他念我們公寓附近一所小型的【私立】學校，學費相當昂貴，不過班級人數較少，老師也會給每個孩子更多關注。"
  },
  {
    "word": "public",
    "pos": "adj.",
    "cn_def": "公共的；公立的",
    "en_def": "for everyone to use; run by the government",
    "sentence": "A: How do most of the employees get to our new office, since there are only twenty parking spaces in the building? B: Most of them use {{BLANK}} transportation, because the subway station is just across the street and the company pays half the cost of a monthly pass.",
    "cn": "A：既然大樓裡只有二十個停車位，大部分員工是怎麼到我們的新辦公室的？ B：他們大多搭乘【大眾】運輸，因為地鐵站就在對街，而且公司會負擔月票一半的費用。"
  },
  {
    "word": "strict",
    "pos": "adj.",
    "cn_def": "嚴格的",
    "en_def": "demanding that rules are always obeyed",
    "sentence": "A: Why do all the visitors have to wear a badge and sign the form at the front desk before they enter the factory? B: The company has very {{BLANK}} safety rules, so everyone who goes into the production area must be recorded, and they must also wear a helmet and safety glasses.",
    "cn": "A：為什麼所有訪客進入工廠前都必須配戴識別證並在前台簽表格？ B：公司有非常【嚴格】的安全規定，所以每個進入生產區的人都必須登記，而且也必須戴安全帽和護目鏡。"
  },
  {
    "word": "academic",
    "pos": "adj.",
    "cn_def": "學業的；學術的",
    "en_def": "related to school, university, and studying",
    "sentence": "A: What kind of documents do I need to send with my application for the research assistant position at your company? B: Please send your résumé, two reference letters, and a copy of your {{BLANK}} records from university, because the manager wants to see the courses you took and your scores.",
    "cn": "A：我應徵貴公司研究助理的職位時，需要附上哪些文件？ B：請寄上你的履歷、兩封推薦信，以及一份大學的【學業】成績紀錄，因為經理想看你修過的課程和分數。"
  },
  {
    "word": "compulsory",
    "pos": "adj.",
    "cn_def": "必須的；強制的",
    "en_def": "required by a rule; you must do it",
    "sentence": "A: Do all the staff in the warehouse have to go to the fire safety training next Tuesday, or is it only for the managers? B: It is {{BLANK}} for everyone who works in the building, so please tell your team that anyone who misses it must join the make-up session on Friday.",
    "cn": "A：倉庫所有員工都必須參加下週二的消防安全訓練嗎？還是只有主管要參加？ B：在這棟大樓工作的每個人都【必須】參加，所以請告訴你的團隊，錯過的人必須參加星期五的補課。"
  },
  {
    "word": "optional",
    "pos": "adj.",
    "cn_def": "可選擇的；非必須的",
    "en_def": "not required; you can choose to do it or not",
    "sentence": "A: Do we have to go on the city tour after the conference on Friday, or can we go straight back to the hotel to rest? B: The tour is completely {{BLANK}}, so you can skip it if you are tired, but the organizers say the old harbor and the night market are worth seeing.",
    "cn": "A：星期五會議結束後的市區導覽我們一定要參加嗎？還是可以直接回飯店休息？ B：導覽完全是【自由參加】的，如果你累了可以不去，不過主辦單位說舊港口和夜市很值得一看。"
  },
  {
    "word": "successfully",
    "pos": "adv.",
    "cn_def": "成功地",
    "en_def": "in a way that achieves the result you wanted",
    "sentence": "A: How did the company's move to the new headquarters go last weekend, and did anything get lost or broken during the move? B: Everything went very well. The moving team {{BLANK}} transferred all the computers and files in just two days, and the office was ready for work on Monday morning.",
    "cn": "A：公司上週末搬到新總部的情況如何，搬家時有沒有東西遺失或損壞？ B：一切都非常順利。搬家團隊只花兩天就【成功地】把所有電腦和檔案搬過去了，星期一早上辦公室就可以上工了。"
  },
  {
    "word": "regularly",
    "pos": "adv.",
    "cn_def": "定期地；經常地",
    "en_def": "often and at the same times, again and again",
    "sentence": "A: Why does our office printer break down so often, even though we bought it only last year from a well-known brand? B: The technician said nobody cleans it {{BLANK}}, so dust builds up inside, and he recommends that we check it once a month to avoid expensive repairs.",
    "cn": "A：為什麼我們辦公室的印表機這麼常故障，明明是去年才買的知名品牌？ B：技術人員說都沒有人【定期】清理，所以裡面積了灰塵，他建議我們每個月檢查一次，以避免昂貴的維修費用。"
  }
];

const MCQS = [
  {
    "q": "The internship program accepts one university _____ from each department every summer. Successful applicants receive a small monthly payment and free lunch.",
    "options": [
      "student",
      "principal",
      "library",
      "curriculum"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Ms. Lin worked as a high school _____ for ten years before joining our training department. Her experience with young learners makes her workshops lively.",
    "options": [
      "laboratory",
      "teacher",
      "uniform",
      "timetable"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The _____ of Riverside High School has agreed to let our engineers visit next month. She will introduce them to the students herself.",
    "options": [
      "homework",
      "subject",
      "principal",
      "playground"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Each _____ in the new training center has a projector and thirty desks. Trainers should book rooms at least two days in advance.",
    "options": [
      "grade",
      "exam",
      "discipline",
      "classroom"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The language school offers a free trial _____ for new customers this month. After that, students pay forty dollars per hour.",
    "options": [
      "uniform",
      "lesson",
      "principal",
      "playground"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Chemistry was my weakest _____ in high school, but I enjoy it now. I even read science magazines on the train to work.",
    "options": [
      "subject",
      "assembly",
      "classroom",
      "timetable"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Many parents leave work early to help their children with _____. The company now allows flexible hours for staff with young kids.",
    "options": [
      "laboratory",
      "principal",
      "playground",
      "homework"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Employees who pass the final _____ will receive an official certificate. The results will be posted online within two weeks.",
    "options": [
      "uniform",
      "library",
      "exam",
      "schedule"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Applicants for the scholarship must have a _____ of A or B in every course. Late applications will not be accepted under any circumstances.",
    "options": [
      "grade",
      "lesson",
      "uniform",
      "assembly"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "All drivers must wear the company _____ while making deliveries. Lost jackets can be replaced at the main office for a small fee.",
    "options": [
      "curriculum",
      "uniform",
      "homework",
      "principal"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The city _____ lends business books and magazines free of charge. Members can also reserve quiet rooms for small group meetings.",
    "options": [
      "playground",
      "grade",
      "library",
      "exam"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "All samples must be sent to the _____ for testing before production begins. The scientists will report any problems within three days.",
    "options": [
      "playground",
      "uniform",
      "assembly",
      "laboratory"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The housing complex includes a swimming pool and a children's _____. Parents can watch their kids from the café next to it.",
    "options": [
      "curriculum",
      "playground",
      "discipline",
      "grade"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The whole school gathered in the hall for a special _____ on Monday morning. The guest speaker talked about careers in technology.",
    "options": [
      "assembly",
      "homework",
      "timetable",
      "library"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Please check the conference _____ before booking your flights. Several sessions have been moved from Friday to Thursday afternoon.",
    "options": [
      "discipline",
      "uniform",
      "principal",
      "schedule"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "According to the bus _____, the airport shuttle leaves every thirty minutes. The first bus departs from the hotel at six o'clock.",
    "options": [
      "curriculum",
      "discipline",
      "timetable",
      "grade"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The college has redesigned its business _____ to include more courses on digital marketing. The changes will take effect next semester.",
    "options": [
      "curriculum",
      "playground",
      "uniform",
      "homework"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Working from home requires strong _____ and good time management. Without it, many employees fall behind on their daily tasks.",
    "options": [
      "laboratory",
      "discipline",
      "uniform",
      "playground"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The foundation provides free _____ for children in rural areas. Its programs include reading classes, computer training, and summer camps.",
    "options": [
      "timetable",
      "principal",
      "education",
      "grade"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Our senior engineers will _____ the new staff how to operate the machines safely. Training sessions begin next Monday at eight.",
    "options": [
      "graduate",
      "attend",
      "learn",
      "teach"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Most trainees _____ from the program after six months of classes and practice. The best of them receive full-time job offers.",
    "options": [
      "teach",
      "graduate",
      "attend",
      "study"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "All department heads are required to _____ the budget meeting on Thursday. Anyone who cannot come must send a deputy instead.",
    "options": [
      "attend",
      "graduate",
      "teach",
      "learn"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The CEO's _____ office is on the top floor and is closed to visitors. Please make an appointment with her assistant.",
    "options": [
      "compulsory",
      "academic",
      "strict",
      "private"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Many employees use _____ transportation because parking near the office is very expensive. The company also pays part of their subway passes.",
    "options": [
      "strict",
      "academic",
      "public",
      "optional"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The factory has _____ rules about wearing helmets in the production area. Workers who break them may receive a written warning.",
    "options": [
      "strict",
      "optional",
      "academic",
      "private"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Applicants must send copies of their _____ records along with their résumés. Universities usually take a week to issue these documents.",
    "options": [
      "compulsory",
      "academic",
      "optional",
      "strict"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Safety training is _____ for all new warehouse staff. Nobody may operate a forklift without completing the full course first.",
    "options": [
      "optional",
      "private",
      "compulsory",
      "academic"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The city tour after the conference is _____, so guests may return to the hotel instead. Those who join should meet in the lobby at four.",
    "options": [
      "compulsory",
      "strict",
      "academic",
      "optional"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The team _____ completed the software upgrade over the weekend. No problems were reported when staff logged in on Monday.",
    "options": [
      "regularly",
      "successfully",
      "loudly",
      "angrily"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "Staff should back up their files _____ to avoid losing important data. The IT department recommends doing this at least once a week.",
    "options": [
      "regularly",
      "successfully",
      "loudly",
      "angrily"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "student": {
    "pos": "n.",
    "en_def": "a person who studies at a school or university",
    "cn_def": "學生"
  },
  "teacher": {
    "pos": "n.",
    "en_def": "a person whose job is to help others learn",
    "cn_def": "老師；教師"
  },
  "principal": {
    "pos": "n.",
    "en_def": "the person in charge of a school",
    "cn_def": "校長"
  },
  "classroom": {
    "pos": "n.",
    "en_def": "a room where classes are taught",
    "cn_def": "教室"
  },
  "lesson": {
    "pos": "n.",
    "en_def": "a period of time when someone is taught something",
    "cn_def": "課；一堂課"
  },
  "subject": {
    "pos": "n.",
    "en_def": "an area of knowledge studied at school, such as math",
    "cn_def": "科目；學科"
  },
  "homework": {
    "pos": "n.",
    "en_def": "school work that students do at home",
    "cn_def": "家庭作業；功課"
  },
  "exam": {
    "pos": "n.",
    "en_def": "an official test of knowledge or skill",
    "cn_def": "考試"
  },
  "test": {
    "pos": "n.",
    "en_def": "a check to see how well something works or how much someone knows",
    "cn_def": "測試；測驗"
  },
  "grade": {
    "pos": "n.",
    "en_def": "a mark or score that shows how good a student's work is",
    "cn_def": "成績；分數"
  },
  "uniform": {
    "pos": "n.",
    "en_def": "special clothes that people in the same school or job wear",
    "cn_def": "制服"
  },
  "library": {
    "pos": "n.",
    "en_def": "a place where people can read or borrow books",
    "cn_def": "圖書館"
  },
  "laboratory": {
    "pos": "n.",
    "en_def": "a room or building where scientists do tests and experiments",
    "cn_def": "實驗室"
  },
  "playground": {
    "pos": "n.",
    "en_def": "an outdoor area where children can play",
    "cn_def": "遊樂場；操場"
  },
  "assembly": {
    "pos": "n.",
    "en_def": "a meeting of all the students and teachers of a school",
    "cn_def": "集會；朝會"
  },
  "schedule": {
    "pos": "n.",
    "en_def": "a plan that lists what you will do and when",
    "cn_def": "行程表；時間表"
  },
  "timetable": {
    "pos": "n.",
    "en_def": "a list of the times when buses, trains, or classes happen",
    "cn_def": "時刻表；課表"
  },
  "curriculum": {
    "pos": "n.",
    "en_def": "all the subjects and topics taught in a course or school",
    "cn_def": "課程（內容）"
  },
  "discipline": {
    "pos": "n.",
    "en_def": "the ability to control yourself and follow rules",
    "cn_def": "紀律；自律"
  },
  "education": {
    "pos": "n.",
    "en_def": "the process of teaching and learning, usually at school",
    "cn_def": "教育"
  },
  "learn": {
    "pos": "v.",
    "en_def": "to get knowledge or a skill by studying or practicing",
    "cn_def": "學習；學會"
  },
  "teach": {
    "pos": "v.",
    "en_def": "to show or explain to someone how to do something",
    "cn_def": "教；教導"
  },
  "study": {
    "pos": "v.",
    "en_def": "to spend time learning about a subject",
    "cn_def": "讀書；攻讀"
  },
  "graduate": {
    "pos": "v.",
    "en_def": "to finish your studies at a school or university",
    "cn_def": "畢業"
  },
  "attend": {
    "pos": "v.",
    "en_def": "to go to an event, class, or meeting",
    "cn_def": "參加；出席"
  },
  "private": {
    "pos": "adj.",
    "en_def": "owned or paid for by a person or company, not the government; only for one person",
    "cn_def": "私立的；私人的"
  },
  "public": {
    "pos": "adj.",
    "en_def": "for everyone to use; run by the government",
    "cn_def": "公共的；公立的"
  },
  "strict": {
    "pos": "adj.",
    "en_def": "demanding that rules are always obeyed",
    "cn_def": "嚴格的"
  },
  "academic": {
    "pos": "adj.",
    "en_def": "related to school, university, and studying",
    "cn_def": "學業的；學術的"
  },
  "compulsory": {
    "pos": "adj.",
    "en_def": "required by a rule; you must do it",
    "cn_def": "必須的；強制的"
  },
  "optional": {
    "pos": "adj.",
    "en_def": "not required; you can choose to do it or not",
    "cn_def": "可選擇的；非必須的"
  },
  "successfully": {
    "pos": "adv.",
    "en_def": "in a way that achieves the result you wanted",
    "cn_def": "成功地"
  },
  "regularly": {
    "pos": "adv.",
    "en_def": "often and at the same times, again and again",
    "cn_def": "定期地；經常地"
  }
};

const EXTRA_GLOSSES = {};
