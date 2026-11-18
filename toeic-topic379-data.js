// Topic 379 Quiz Data: Student 學生
// Source word list: https://www.examword.com/group-topic/student — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T379 - Student 學生",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "pupil",
    "pos": "n.",
    "cn_def": "學生（尤指中小學生）",
    "en_def": "a child or young person who is learning at a school",
    "sentence": "A: Why is the community center so busy this afternoon, and who are all those children waiting near the main entrance with their backpacks? B: Our company is sponsoring a free science workshop for the local primary school, so every {{BLANK}} in the fifth grade is visiting today to build simple robots with our engineers.",
    "cn": "A：今天下午社區中心為什麼這麼忙？那些背著背包在大門口附近等候的孩子們是誰？ B：我們公司贊助當地小學的免費科學工作坊，所以五年級的每一位【學生】今天都來這裡和我們的工程師一起組裝簡單的機器人。"
  },
  {
    "word": "learner",
    "pos": "n.",
    "cn_def": "學習者",
    "en_def": "a person who is learning a skill or subject",
    "sentence": "A: Do you think I should take the advanced Japanese class that the company offers on Tuesday evenings, or is it too difficult for me right now? B: Since you only started studying six months ago, you are still a beginning {{BLANK}}, so the basic course would help you build confidence before you try the harder one next year.",
    "cn": "A：你覺得我應該參加公司週二晚上開的進階日文課嗎？還是對我現在來說太難了？ B：既然你六個月前才開始學，你仍然是初級【學習者】，所以基礎課程能幫你在明年挑戰較難的課程之前建立信心。"
  },
  {
    "word": "classmate",
    "pos": "n.",
    "cn_def": "同學",
    "en_def": "a person in the same class as you at school",
    "sentence": "A: How did you hear about the job opening at the marketing firm downtown, since it was never posted on any of the usual websites? B: A former {{BLANK}} from my university business course works there as a team leader, and she called me last week because she remembered that I did well on our group projects.",
    "cn": "A：你是怎麼得知市中心那間行銷公司的職缺的？那個職缺從來沒有刊登在一般常見的網站上。 B：我大學商業課程的一位前【同學】在那裡當組長，她上週打電話給我，因為她記得我在我們的小組專題裡表現得很好。"
  },
  {
    "word": "roommate",
    "pos": "n.",
    "cn_def": "室友",
    "en_def": "a person who shares a room or apartment with you",
    "sentence": "A: Are you still looking for a cheaper apartment closer to the office, or have you decided to keep living in the suburbs for another year? B: I found a nice two-bedroom place near the train station, and a coworker from accounting agreed to be my {{BLANK}}, so we will split the rent and the utility bills equally.",
    "cn": "A：你還在找離公司比較近、比較便宜的公寓嗎？還是你決定在郊區再住一年？ B：我在火車站附近找到一間不錯的兩房公寓，會計部的一位同事答應當我的【室友】，所以我們會平分房租和水電費。"
  },
  {
    "word": "scholar",
    "pos": "n.",
    "cn_def": "學者",
    "en_def": "a person who studies a subject deeply and knows a lot about it",
    "sentence": "A: Who is going to give the opening speech at the international trade conference next month, and has the speaker's travel been arranged yet? B: We invited a well-known {{BLANK}} from Tokyo University who has written several books on Asian economics, and our assistant already booked her flight and a hotel room near the convention center.",
    "cn": "A：下個月國際貿易研討會的開幕演講由誰負責？講者的交通行程安排好了嗎？ B：我們邀請了東京大學一位知名【學者】，她寫過好幾本關於亞洲經濟的書，我們的助理已經幫她訂好機票和會展中心附近的飯店房間。"
  },
  {
    "word": "freshman",
    "pos": "n.",
    "cn_def": "新生；一年級學生",
    "en_def": "a student in the first year of high school or university",
    "sentence": "A: Why is the university bookstore hiring so many part-time workers this week, and do they still need anyone to work at the cash register? B: Classes begin on Monday, so every {{BLANK}} is coming in to buy textbooks and supplies for the first time, and the manager says the store will need extra help until the end of September.",
    "cn": "A：大學書店這週為什麼要雇用這麼多兼職人員？他們還需要人在收銀台工作嗎？ B：星期一就開學了，所以每一位【新生】都會第一次來買教科書和文具，店經理說到九月底之前店裡都需要額外的人手。"
  },
  {
    "word": "sophomore",
    "pos": "n.",
    "cn_def": "二年級學生",
    "en_def": "a student in the second year of high school or university",
    "sentence": "A: Is the summer internship at our law firm open to students who have only finished one year of college, or do they have to be further along? B: The program accepts applicants who will be a {{BLANK}} or older in the fall, so students who just completed their first year can apply if they send a recommendation letter from a professor.",
    "cn": "A：我們律師事務所的暑期實習開放給只讀完大學一年級的學生嗎？還是他們必須讀到更高年級？ B：這個計畫接受秋季時將成為【二年級學生】或更高年級的申請者，所以剛讀完一年級的學生只要附上教授的推薦信就可以申請。"
  },
  {
    "word": "junior",
    "pos": "n.",
    "cn_def": "三年級學生",
    "en_def": "a student in the third year of high school or university",
    "sentence": "A: When do most students at the business school start looking for summer internships at large companies like ours? B: Most of them begin searching when they are a {{BLANK}}, because that third year gives them enough classes and experience to impress recruiters, and a good internship often leads to a full-time offer after they finish school.",
    "cn": "A：商學院大多數的學生什麼時候開始找像我們這種大公司的暑期實習？ B：他們大多在成為【三年級學生】時開始找，因為到了第三年，他們修過足夠的課、也有足夠的經驗能讓招募人員留下好印象，而一份好的實習常常能在畢業後換來正職工作機會。"
  },
  {
    "word": "senior",
    "pos": "n.",
    "cn_def": "畢業班學生；四年級學生",
    "en_def": "a student in the last year of high school or university",
    "sentence": "A: Has the human resources team finished planning the campus recruiting event at the state university next month? B: Yes, they reserved a large hall in the student center, and they are mainly inviting every {{BLANK}} who will finish school in June, since those students are ready to start working full-time this summer.",
    "cn": "A：人資團隊已經規劃好下個月在州立大學的校園徵才活動了嗎？ B：是的，他們在學生活動中心預訂了一個大廳，主要邀請每一位六月就要畢業的【畢業班學生】，因為那些學生今年夏天就可以開始全職工作了。"
  },
  {
    "word": "graduate",
    "pos": "n.",
    "cn_def": "畢業生",
    "en_def": "a person who has finished a degree at a university or school",
    "sentence": "A: Why did the company decide to start a new training program for young employees this year, and how long will each session last? B: Management plans to hire a recent university {{BLANK}} for every department, and each new employee will spend six months rotating through sales, finance, and customer service to learn how the whole business works.",
    "cn": "A：公司為什麼今年決定為年輕員工開辦新的培訓計畫？每一期要多久？ B：管理階層計畫每個部門都錄用一位大學應屆【畢業生】，每位新進員工將花六個月輪調業務、財務和客服部門，以了解整個公司的運作方式。"
  },
  {
    "word": "undergraduate",
    "pos": "n.",
    "cn_def": "大學生；大學部學生",
    "en_def": "a university student who has not yet received a first degree",
    "sentence": "A: Who will help the research team collect customer survey data at the shopping mall during the busy holiday season? B: We hired an {{BLANK}} from the local university's marketing department, and she will work with us three afternoons a week while she finishes the final year of her bachelor's degree.",
    "cn": "A：在忙碌的假期季節，誰要幫研究團隊在購物中心收集顧客問卷資料？ B：我們雇用了當地大學行銷系的一位【大學生】，她在完成學士學位最後一年的同時，每週會有三個下午和我們一起工作。"
  },
  {
    "word": "postgraduate",
    "pos": "n.",
    "cn_def": "研究生",
    "en_def": "a student studying for a higher degree after a first degree",
    "sentence": "A: Why does the lab need another assistant when we already have two full-time technicians working on the new medicine project? B: The experiments have become much more complicated, so the director hired a {{BLANK}} who is completing a master's degree in chemistry and can analyze the test results while the technicians run the machines.",
    "cn": "A：我們已經有兩位全職技術員在做新藥專案了，為什麼實驗室還需要另一位助理？ B：實驗變得複雜許多，所以主任雇用了一位正在攻讀化學碩士學位的【研究生】，他可以在技術員操作機器的同時分析測試結果。"
  },
  {
    "word": "intern",
    "pos": "n.",
    "cn_def": "實習生",
    "en_def": "a student or new worker who works for a short time to get experience",
    "sentence": "A: Who prepared these sales charts for the board meeting, because they are much clearer and more colorful than the ones we usually use? B: Our new summer {{BLANK}} made them yesterday afternoon, and although she is still a business student, she already knows how to use the design software better than most people in our department.",
    "cn": "A：這些董事會要用的銷售圖表是誰做的？它們比我們平常用的清楚多了，顏色也豐富得多。 B：是我們新來的暑期【實習生】昨天下午做的，雖然她還是商學系學生，但她使用設計軟體的能力已經比我們部門大多數人還好。"
  },
  {
    "word": "trainee",
    "pos": "n.",
    "cn_def": "受訓人員；實習人員",
    "en_def": "a person who is being taught how to do a job",
    "sentence": "A: Why is that young man following the head chef around the kitchen and writing everything down in a small notebook? B: He is a {{BLANK}} who joined the restaurant on Monday, and for the next three months he will learn how to prepare every dish on the menu before he can work on his own during dinner service.",
    "cn": "A：那個年輕人為什麼一直跟著主廚在廚房走來走去，還把所有事情都記在小筆記本上？ B：他是星期一剛加入餐廳的【受訓人員】，接下來三個月他要學會做菜單上的每一道菜，之後才能在晚餐時段獨立作業。"
  },
  {
    "word": "attend",
    "pos": "v.",
    "cn_def": "參加；出席；上（課）",
    "en_def": "to go to an event, class or meeting",
    "sentence": "A: Will you be able to join the client dinner on Thursday evening, or do you have other plans after work that day? B: I'm sorry, but I can't come, because I {{BLANK}} an accounting class at the community college every Thursday night, and the final exam is next week, so I really shouldn't miss the review session.",
    "cn": "A：你星期四晚上能參加客戶晚餐嗎？還是你那天下班後有其他安排？ B：很抱歉我不能去，因為我每週四晚上都在社區大學【上】會計課，而且下週就要期末考了，所以我真的不該錯過複習課。"
  },
  {
    "word": "enroll",
    "pos": "v.",
    "cn_def": "註冊；報名參加",
    "en_def": "to officially join a course or school",
    "sentence": "A: How can I improve my presentation skills before the big product launch in March, since I get nervous speaking in front of large groups? B: You should {{BLANK}} in the public speaking course that the training department offers every spring, because the classes are free for employees and the instructor gives each person helpful feedback after every practice talk.",
    "cn": "A：在三月的大型產品發表會之前，我要怎麼加強簡報技巧？我在一大群人面前說話時會緊張。 B：你應該【報名參加】訓練部每年春天開設的公眾演說課程，因為課程對員工免費，而且講師在每次練習演講後都會給每個人有用的回饋。"
  },
  {
    "word": "revise",
    "pos": "v.",
    "cn_def": "修改；修訂",
    "en_def": "to change something to make it better or more correct",
    "sentence": "A: Did the manager approve the training proposal you sent her on Friday, or does she want you to make some changes first? B: She liked the main idea, but she asked me to {{BLANK}} the budget section because the costs for the outside trainers were too high, so I'll send her a new version before lunch tomorrow.",
    "cn": "A：經理批准了你週五寄給她的培訓提案嗎？還是她要你先做一些修改？ B：她喜歡主要的構想，但她要我【修改】預算部分，因為外部講師的費用太高了，所以我明天午餐前會寄給她新的版本。"
  },
  {
    "word": "review",
    "pos": "v.",
    "cn_def": "複習；審閱",
    "en_def": "to look at or study something again carefully",
    "sentence": "A: What should the new sales staff do before they take the product knowledge test at the end of their first week? B: They should {{BLANK}} the training manual and the notes from each session carefully, because the test includes questions about prices, warranty rules, and the special features of all twelve of our latest models.",
    "cn": "A：新進業務人員在第一週結束時參加產品知識測驗前應該做些什麼？ B：他們應該仔細【複習】培訓手冊和每堂課的筆記，因為測驗會考價格、保固規定，以及我們全部十二款最新機型的特殊功能。"
  },
  {
    "word": "participate",
    "pos": "v.",
    "cn_def": "參與；參加",
    "en_def": "to take part in an activity",
    "sentence": "A: Is the company asking everyone to join the charity run in the park next Saturday morning, or is it only for the sports club members? B: All employees are welcome to {{BLANK}}, even if they don't usually exercise, and anyone who finishes the five-kilometer route will receive a free T-shirt and a lunch voucher for the staff cafeteria.",
    "cn": "A：公司要所有人都參加下週六早上在公園舉辦的慈善路跑嗎？還是只限運動社團的成員？ B：歡迎所有員工【參加】，即使平常不運動也沒關係，完成五公里路線的人都會拿到一件免費T恤和一張員工餐廳的午餐券。"
  },
  {
    "word": "concentrate",
    "pos": "v.",
    "cn_def": "專心；集中注意力",
    "en_def": "to give all your attention to something",
    "sentence": "A: Why have you been coming to the office so early every morning this month, when your shift doesn't start until nine o'clock? B: It's very quiet before seven, so I can {{BLANK}} on writing the annual report without phone calls or meetings, and I usually finish twice as much work as I do in the busy afternoon.",
    "cn": "A：你的班九點才開始，為什麼這個月每天早上都這麼早進辦公室？ B：七點以前很安靜，我可以【專心】撰寫年度報告，不會有電話或會議打擾，而且我完成的工作通常是忙碌的下午的兩倍。"
  },
  {
    "word": "focus",
    "pos": "v.",
    "cn_def": "專注；集中",
    "en_def": "to give special attention to one thing",
    "sentence": "A: Our team has so many tasks this quarter, so which one do you think we should finish first before the end of the month? B: I think we should {{BLANK}} on the customer complaints about late deliveries, because solving that problem will keep our biggest clients happy, and the other tasks can wait until next month.",
    "cn": "A：我們團隊這一季有好多工作，你覺得月底前應該先完成哪一項？ B：我認為我們應該【專注】處理顧客對延遲交貨的抱怨，因為解決這個問題能讓我們最大的客戶滿意，其他工作可以等到下個月再做。"
  },
  {
    "word": "assignment",
    "pos": "n.",
    "cn_def": "任務；作業",
    "en_def": "a piece of work given to someone as part of their studies or job",
    "sentence": "A: Why do you look so busy today, since I thought the sales report was already finished and sent to the regional office? B: It was, but this morning my supervisor gave me a new {{BLANK}}: I have to research three possible suppliers in Vietnam and compare their prices before Friday's planning meeting with the purchasing team.",
    "cn": "A：你今天看起來怎麼這麼忙？我以為業績報告已經完成並寄到區域辦公室了。 B：是寄出了，但今天早上主管給了我一項新【任務】：我必須在週五和採購團隊的規劃會議前，調查三家可能的越南供應商並比較他們的價格。"
  },
  {
    "word": "homework",
    "pos": "n.",
    "cn_def": "家庭作業；功課",
    "en_def": "work that a student is given to do at home",
    "sentence": "A: Why did you leave the office party so early last night, since everyone was having such a good time at the restaurant? B: My son had a lot of math {{BLANK}} that was due this morning, and he needed my help, so I went home at eight and we sat at the kitchen table together until almost ten.",
    "cn": "A：你昨晚為什麼這麼早離開公司聚餐？大家在餐廳都玩得很開心。 B：我兒子有很多今天早上要交的數學【作業】，他需要我幫忙，所以我八點就回家了，我們一起坐在廚房餐桌前寫到將近十點。"
  },
  {
    "word": "project",
    "pos": "n.",
    "cn_def": "專案；計畫",
    "en_def": "a planned piece of work with a clear goal",
    "sentence": "A: How is the plan to move our customer records to the new computer system going, and will it be ready before the holidays? B: The {{BLANK}} is about two weeks behind schedule because some old files were damaged, but the IT team is working extra hours, so we still expect to finish everything by mid-December.",
    "cn": "A：把我們的客戶資料轉移到新電腦系統的計畫進行得如何？假期前能準備好嗎？ B：這個【專案】大約落後進度兩週，因為有些舊檔案損壞了，但資訊團隊正在加班，所以我們仍然預計十二月中前能全部完成。"
  },
  {
    "word": "presentation",
    "pos": "n.",
    "cn_def": "簡報；報告",
    "en_def": "a talk that gives information about something to a group",
    "sentence": "A: Are you ready for the meeting with the investors from Singapore tomorrow morning, and do you need any help with the equipment? B: I've practiced my {{BLANK}} three times today, and I've already tested the projector in the conference room, but could you print twenty copies of the handouts before nine o'clock?",
    "cn": "A：你準備好明天早上和新加坡投資人的會議了嗎？設備方面需要幫忙嗎？ B：我今天已經練習了三次我的【簡報】，也已經測試過會議室的投影機，不過你能在九點前幫我印二十份講義嗎？"
  },
  {
    "word": "lecture",
    "pos": "n.",
    "cn_def": "演講；講課",
    "en_def": "a formal talk on a subject, especially to students",
    "sentence": "A: Why are so many people from the engineering department leaving the office early this afternoon? B: A famous professor is giving a free {{BLANK}} about solar energy at the city library at four o'clock, and our manager encouraged everyone to go because the topic is closely related to our new product line.",
    "cn": "A：工程部為什麼這麼多人今天下午提早離開辦公室？ B：一位知名教授下午四點在市立圖書館有一場關於太陽能的免費【演講】，我們經理鼓勵大家去聽，因為這個主題和我們的新產品線密切相關。"
  },
  {
    "word": "seminar",
    "pos": "n.",
    "cn_def": "研討會；專題討論課",
    "en_def": "a meeting or class where a group discusses a subject",
    "sentence": "A: Where were you yesterday afternoon, because I stopped by your desk twice with some questions about the new tax rules? B: I was at a half-day {{BLANK}} at the Grand Hotel, where a group of accountants discussed the tax changes for small businesses, so I can probably answer most of your questions now.",
    "cn": "A：你昨天下午去哪裡了？我帶著一些新稅法的問題去你的座位找了你兩次。 B：我在格蘭飯店參加半天的【研討會】，一群會計師在會中討論小型企業的稅制變更，所以我現在大概能回答你大部分的問題。"
  },
  {
    "word": "curriculum",
    "pos": "n.",
    "cn_def": "課程（整體）",
    "en_def": "all the subjects and lessons taught in a school or program",
    "sentence": "A: What changes is the training center making to the program for new bank tellers next year? B: They are updating the whole {{BLANK}} to include more lessons on online banking and customer service, because many clients now use mobile apps, and tellers need to explain these services clearly at the counter.",
    "cn": "A：訓練中心明年會對新進銀行櫃員的培訓計畫做哪些改變？ B：他們正在更新整套【課程】，加入更多網路銀行和顧客服務的課，因為許多客戶現在都使用行動應用程式，櫃員需要在櫃檯清楚說明這些服務。"
  },
  {
    "word": "discipline",
    "pos": "n.",
    "cn_def": "自律；紀律",
    "en_def": "the ability to control yourself and keep working hard",
    "sentence": "A: How did your manager finish her master's degree while she was also working full-time and leading our sales team? B: It took a lot of {{BLANK}}, because she studied for two hours every night after work and on weekends, even when her friends invited her out, and she never once missed a deadline at the office.",
    "cn": "A：你的經理是怎麼在全職工作、同時帶領我們業務團隊的情況下完成碩士學位的？ B：那需要很強的【自律】，因為她每天下班後和週末都讀書兩小時，即使朋友約她出去也一樣，而且她在公司從來沒有錯過任何一次截止期限。"
  },
  {
    "word": "motivation",
    "pos": "n.",
    "cn_def": "動機；動力",
    "en_def": "the reason or strong wish to do something",
    "sentence": "A: Why do you think sales have improved so much at the Taichung branch since the new manager arrived in June? B: She introduced a monthly bonus for the top three salespeople, and that extra {{BLANK}} has made the whole team work harder, call more customers, and share useful tips with each other at weekly meetings.",
    "cn": "A：你認為自從新經理六月到任後，台中分店的業績為什麼進步這麼多？ B：她為前三名業務員設立了每月獎金，這份額外的【動力】讓整個團隊更努力工作、打更多電話給客戶，並在每週會議上互相分享實用的訣竅。"
  },
  {
    "word": "diligent",
    "pos": "adj.",
    "cn_def": "勤奮的；用心的",
    "en_def": "working hard and carefully",
    "sentence": "A: Why did the director choose Amy to lead the new office in Kaohsiung instead of someone with more years at the company? B: She is very {{BLANK}}; she checks every report twice, often stays late to help her coworkers, and has never missed a deadline in three years, so the director trusts her completely.",
    "cn": "A：主管為什麼選Amy去帶領高雄的新辦公室，而不是選在公司資歷更深的人？ B：她非常【勤奮】，每份報告都會檢查兩次，常常留下來幫同事，而且三年來從沒錯過任何截止期限，所以主管完全信任她。"
  },
  {
    "word": "curious",
    "pos": "adj.",
    "cn_def": "好奇的",
    "en_def": "wanting to know or learn about something",
    "sentence": "A: Why were the visitors on the factory tour asking so many questions about the packaging machines this morning? B: They were {{BLANK}} about how we can wrap two thousand boxes an hour with only three workers, so our engineer stopped the tour for a few minutes and showed them how the robots work.",
    "cn": "A：今天早上參加工廠參觀的訪客為什麼問了這麼多關於包裝機的問題？ B：他們對我們如何只用三名工人就能每小時包裝兩千個箱子感到【好奇】，所以我們的工程師讓參觀暫停幾分鐘，示範機器人如何運作。"
  },
  {
    "word": "independent",
    "pos": "adj.",
    "cn_def": "獨立的；自主的",
    "en_def": "able to do things without help from other people",
    "sentence": "A: Do you think the new assistant will need someone to check her work every day, or can she handle the reception desk alone next week? B: She is quite {{BLANK}} and learns quickly, so after two days of training she can answer calls, greet visitors, and book meeting rooms without asking anyone for help.",
    "cn": "A：你覺得新助理每天都需要有人檢查她的工作嗎？還是下週她可以獨自負責櫃檯？ B：她相當【獨立】而且學得很快，所以經過兩天的培訓後，她就能接電話、接待訪客和預訂會議室，不需要找任何人幫忙。"
  },
  {
    "word": "achievement",
    "pos": "n.",
    "cn_def": "成就；成績",
    "en_def": "something good that you have done through hard work",
    "sentence": "A: Why is everyone in the marketing department celebrating with cake and coffee in the break room this afternoon? B: Our team won a national award for the best online advertising campaign of the year, and the vice president said it was the biggest {{BLANK}} in the company's history, so she bought treats for everyone.",
    "cn": "A：行銷部的大家今天下午為什麼在休息室裡吃蛋糕、喝咖啡慶祝？ B：我們團隊贏得了年度最佳網路廣告活動的全國獎項，副總裁說這是公司史上最大的【成就】，所以她請大家吃點心。"
  }
];

const MCQS = [
  {
    "q": "The art museum offers free guided tours for local schools. Each _____ receives a small notebook to draw sketches during the visit.",
    "options": [
      "pupil",
      "scholar",
      "intern",
      "roommate"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "This online language app adapts to each user's level. Even a slow _____ can make steady progress by practicing ten minutes a day.",
    "options": [
      "classmate",
      "scholar",
      "learner",
      "roommate"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Our CEO started the company with an old college _____. The two had shared a desk in their accounting class.",
    "options": [
      "intern",
      "classmate",
      "trainee",
      "pupil"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Housing near the campus is expensive, so many students look for a _____. Sharing an apartment can cut monthly rent in half.",
    "options": [
      "scholar",
      "seminar",
      "curriculum",
      "roommate"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The museum hired a respected _____ of ancient Chinese history. She will check the information on every label in the new exhibit.",
    "options": [
      "freshman",
      "intern",
      "scholar",
      "roommate"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The university holds a welcome party for every _____ in late August. New students can meet teachers and join clubs there.",
    "options": [
      "freshman",
      "graduate",
      "senior",
      "scholar"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "As a high school _____, Kevin is applying to five universities this fall. He hopes to study engineering after he finishes school in June.",
    "options": [
      "freshman",
      "scholar",
      "intern",
      "senior"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Lisa is a _____ of the National Taiwan University business school. She finished her degree in 2020 and now works in Singapore.",
    "options": [
      "freshman",
      "graduate",
      "trainee",
      "pupil"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The bank accepts one summer _____ from each local university every year. The position is unpaid but offers valuable work experience.",
    "options": [
      "intern",
      "scholar",
      "roommate",
      "classmate"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Every new _____ at the hotel spends two weeks learning the booking system. After that, they start working at the front desk.",
    "options": [
      "scholar",
      "roommate",
      "trainee",
      "classmate"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "All department heads must _____ the budget meeting on Monday morning. Please tell the assistant if you cannot be there.",
    "options": [
      "enroll",
      "attend",
      "participate",
      "concentrate"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Employees who wish to _____ in the evening computer class should sign up by Friday. Seats are limited to twenty people.",
    "options": [
      "attend",
      "focus",
      "review",
      "enroll"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The client asked us to _____ the design because the logo was too small. We will send the updated version tomorrow.",
    "options": [
      "attend",
      "enroll",
      "revise",
      "participate"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Please _____ the contract carefully before you sign it. If anything is unclear, contact our legal department right away.",
    "options": [
      "review",
      "attend",
      "enroll",
      "participate"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "More than two hundred employees will _____ in the company's annual sports day. Lunch and drinks will be provided for everyone.",
    "options": [
      "attend",
      "revise",
      "review",
      "participate"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The office is too noisy, so I cannot _____ on my report. I will work in the quiet meeting room this afternoon.",
    "options": [
      "attend",
      "concentrate",
      "enroll",
      "revise"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "This year, the marketing team will _____ its efforts on young online shoppers. Most of the budget will go to social media ads.",
    "options": [
      "focus",
      "attend",
      "enroll",
      "participate"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The manager gave each team member a different _____ for the trade fair. Jason is in charge of setting up the booth.",
    "options": [
      "curriculum",
      "motivation",
      "assignment",
      "achievement"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Before the meeting with the new client, Sam did his _____ and read about the company's history. As a result, he answered every question confidently.",
    "options": [
      "lecture",
      "homework",
      "seminar",
      "curriculum"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The construction _____ will be completed by the end of next year. When it is finished, the new hospital will have five hundred beds.",
    "options": [
      "lecture",
      "seminar",
      "curriculum",
      "project"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The sales director will give a short _____ about our new products at the start of the meeting. She will use slides and videos.",
    "options": [
      "curriculum",
      "discipline",
      "presentation",
      "homework"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Professor Chen's _____ on world trade was so popular that the hall was full. Many students had to stand at the back.",
    "options": [
      "lecture",
      "homework",
      "curriculum",
      "assignment"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The firm will hold a free _____ on online marketing for small business owners next Thursday. Space is limited, so please register early.",
    "options": [
      "curriculum",
      "discipline",
      "motivation",
      "seminar"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The school has added coding classes to its _____. Starting next term, all students will learn basic programming skills.",
    "options": [
      "motivation",
      "curriculum",
      "discipline",
      "achievement"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Working from home requires a lot of _____ because no one checks on you. You must plan your own schedule every day.",
    "options": [
      "discipline",
      "curriculum",
      "assignment",
      "seminar"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Many workers lose their _____ when they feel their hard work is not noticed. Regular praise from managers can help them stay positive.",
    "options": [
      "curriculum",
      "seminar",
      "motivation",
      "lecture"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Mark is a _____ worker who always checks his figures twice. His manager has never found a single mistake in his reports.",
    "options": [
      "curious",
      "diligent",
      "careless",
      "nervous"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Customers were _____ about the new coffee machine in the lobby. Many stopped to ask how it could make drinks so quickly.",
    "options": [
      "diligent",
      "independent",
      "careless",
      "curious"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The report was written by an _____ research company, not by our own staff. This makes the results more trustworthy for investors.",
    "options": [
      "curious",
      "diligent",
      "independent",
      "careless"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Opening ten new stores in one year was a great _____ for the small company. The owner thanked the staff at the party.",
    "options": [
      "achievement",
      "curriculum",
      "homework",
      "seminar"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "pupil": {
    "pos": "n.",
    "en_def": "a child or young person who is learning at a school",
    "cn_def": "學生（尤指中小學生）"
  },
  "learner": {
    "pos": "n.",
    "en_def": "a person who is learning a skill or subject",
    "cn_def": "學習者"
  },
  "classmate": {
    "pos": "n.",
    "en_def": "a person in the same class as you at school",
    "cn_def": "同學"
  },
  "roommate": {
    "pos": "n.",
    "en_def": "a person who shares a room or apartment with you",
    "cn_def": "室友"
  },
  "scholar": {
    "pos": "n.",
    "en_def": "a person who studies a subject deeply and knows a lot about it",
    "cn_def": "學者"
  },
  "freshman": {
    "pos": "n.",
    "en_def": "a student in the first year of high school or university",
    "cn_def": "新生；一年級學生"
  },
  "sophomore": {
    "pos": "n.",
    "en_def": "a student in the second year of high school or university",
    "cn_def": "二年級學生"
  },
  "junior": {
    "pos": "n.",
    "en_def": "a student in the third year of high school or university",
    "cn_def": "三年級學生"
  },
  "senior": {
    "pos": "n.",
    "en_def": "a student in the last year of high school or university",
    "cn_def": "畢業班學生；四年級學生"
  },
  "graduate": {
    "pos": "n.",
    "en_def": "a person who has finished a degree at a university or school",
    "cn_def": "畢業生"
  },
  "undergraduate": {
    "pos": "n.",
    "en_def": "a university student who has not yet received a first degree",
    "cn_def": "大學生；大學部學生"
  },
  "postgraduate": {
    "pos": "n.",
    "en_def": "a student studying for a higher degree after a first degree",
    "cn_def": "研究生"
  },
  "intern": {
    "pos": "n.",
    "en_def": "a student or new worker who works for a short time to get experience",
    "cn_def": "實習生"
  },
  "trainee": {
    "pos": "n.",
    "en_def": "a person who is being taught how to do a job",
    "cn_def": "受訓人員；實習人員"
  },
  "attend": {
    "pos": "v.",
    "en_def": "to go to an event, class or meeting",
    "cn_def": "參加；出席；上（課）"
  },
  "enroll": {
    "pos": "v.",
    "en_def": "to officially join a course or school",
    "cn_def": "註冊；報名參加"
  },
  "revise": {
    "pos": "v.",
    "en_def": "to change something to make it better or more correct",
    "cn_def": "修改；修訂"
  },
  "review": {
    "pos": "v.",
    "en_def": "to look at or study something again carefully",
    "cn_def": "複習；審閱"
  },
  "participate": {
    "pos": "v.",
    "en_def": "to take part in an activity",
    "cn_def": "參與；參加"
  },
  "concentrate": {
    "pos": "v.",
    "en_def": "to give all your attention to something",
    "cn_def": "專心；集中注意力"
  },
  "focus": {
    "pos": "v.",
    "en_def": "to give special attention to one thing",
    "cn_def": "專注；集中"
  },
  "assignment": {
    "pos": "n.",
    "en_def": "a piece of work given to someone as part of their studies or job",
    "cn_def": "任務；作業"
  },
  "homework": {
    "pos": "n.",
    "en_def": "work that a student is given to do at home",
    "cn_def": "家庭作業；功課"
  },
  "project": {
    "pos": "n.",
    "en_def": "a planned piece of work with a clear goal",
    "cn_def": "專案；計畫"
  },
  "presentation": {
    "pos": "n.",
    "en_def": "a talk that gives information about something to a group",
    "cn_def": "簡報；報告"
  },
  "lecture": {
    "pos": "n.",
    "en_def": "a formal talk on a subject, especially to students",
    "cn_def": "演講；講課"
  },
  "seminar": {
    "pos": "n.",
    "en_def": "a meeting or class where a group discusses a subject",
    "cn_def": "研討會；專題討論課"
  },
  "curriculum": {
    "pos": "n.",
    "en_def": "all the subjects and lessons taught in a school or program",
    "cn_def": "課程（整體）"
  },
  "discipline": {
    "pos": "n.",
    "en_def": "the ability to control yourself and keep working hard",
    "cn_def": "自律；紀律"
  },
  "motivation": {
    "pos": "n.",
    "en_def": "the reason or strong wish to do something",
    "cn_def": "動機；動力"
  },
  "diligent": {
    "pos": "adj.",
    "en_def": "working hard and carefully",
    "cn_def": "勤奮的；用心的"
  },
  "curious": {
    "pos": "adj.",
    "en_def": "wanting to know or learn about something",
    "cn_def": "好奇的"
  },
  "independent": {
    "pos": "adj.",
    "en_def": "able to do things without help from other people",
    "cn_def": "獨立的；自主的"
  },
  "achievement": {
    "pos": "n.",
    "en_def": "something good that you have done through hard work",
    "cn_def": "成就；成績"
  }
};

const EXTRA_GLOSSES = {};
