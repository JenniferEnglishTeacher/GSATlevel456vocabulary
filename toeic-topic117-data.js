// Topic 117 Quiz Data: Education 教育
// Source word list: https://www.examword.com/group-topic/education — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T117 - Education 教育",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "qualification",
    "pos": "n.",
    "cn_def": "資格；學歷證明",
    "en_def": "an official record showing you finished training or passed an exam",
    "sentence": "A: Why did the hotel manager reject so many applicants for the front desk job last week, even though they seemed friendly and polite? B: Most of them did not have a {{BLANK}} in hospitality, and the company now requires an official certificate before it lets new staff deal with guests.",
    "cn": "A：為什麼飯店經理上週拒絕了這麼多應徵櫃檯工作的人，即使他們看起來友善又有禮貌？ B：他們大多數沒有餐旅業的【資格證明】，而公司現在規定新員工在接待客人之前必須有正式證書。"
  },
  {
    "word": "enroll",
    "pos": "v.",
    "cn_def": "註冊；登記入學",
    "en_def": "to officially join a course or school",
    "sentence": "A: Are you still planning to take that evening business course at the community college, or is your schedule at the office too busy this year? B: I am going to {{BLANK}} in the spring program next week, because my manager agreed to pay half the fee and let me leave early on Thursdays.",
    "cn": "A：你還打算去社區大學上那門晚間商業課程嗎？還是你今年辦公室的行程太忙了？ B：我下週要【報名註冊】春季課程，因為我的經理同意支付一半的費用，並讓我每週四提早下班。"
  },
  {
    "word": "discipline",
    "pos": "n.",
    "cn_def": "紀律；自制力",
    "en_def": "the ability to control yourself and follow rules",
    "sentence": "A: How did your daughter manage to study for the bank's entrance exam while working full-time at the café downtown? B: She showed great {{BLANK}} by waking up at five every morning, reviewing her notes for two hours, and turning off her phone so nothing could distract her.",
    "cn": "A：你女兒在市中心咖啡館全職工作的同時，是怎麼準備銀行入行考試的？ B：她展現了極大的【自律】，每天早上五點起床，複習筆記兩個小時，並且關掉手機，讓任何事都無法使她分心。"
  },
  {
    "word": "distance learning",
    "pos": "n.phr.",
    "cn_def": "遠距學習",
    "en_def": "studying from home through the internet instead of going to a school",
    "sentence": "A: How can our sales staff in the southern branch get the new marketing training if they cannot travel to the head office this month? B: The training department has set up a {{BLANK}} program, so they can watch the lessons online, join live chats, and submit their tasks from their own desks.",
    "cn": "A：如果南部分公司的業務人員這個月無法到總公司，他們要如何接受新的行銷培訓？ B：培訓部門已經設立了一個【遠距學習】課程，所以他們可以在線上觀看課程、參加即時討論，並在自己的座位上繳交作業。"
  },
  {
    "word": "boarding school",
    "pos": "n.phr.",
    "cn_def": "寄宿學校",
    "en_def": "a school where students live during the term",
    "sentence": "A: Since you and your husband will both be working overseas for the next three years, where will your son continue his studies? B: We have found an excellent {{BLANK}} in the countryside, where he can live in the dormitory, eat with his classmates, and come home to his grandparents during the holidays.",
    "cn": "A：既然你和你先生接下來三年都要在海外工作，你兒子要在哪裡繼續學業？ B：我們在鄉間找到一所很棒的【寄宿學校】，他可以住在宿舍、和同學一起吃飯，假期時則回祖父母家。"
  },
  {
    "word": "bachelor's degree",
    "pos": "n.phr.",
    "cn_def": "學士學位",
    "en_def": "a first university degree, usually after four years of study",
    "sentence": "A: What are the basic requirements for the junior accountant position that the finance department posted on its website yesterday? B: Applicants need a {{BLANK}} in accounting or business, at least one year of office experience, and good computer skills, because they will prepare monthly reports for the managers.",
    "cn": "A：財務部昨天在網站上公布的初級會計職位，基本條件是什麼？ B：應徵者需要具備會計或商業的【學士學位】、至少一年的辦公室經驗以及良好的電腦能力，因為他們要替經理們準備每月報告。"
  },
  {
    "word": "master's degree",
    "pos": "n.phr.",
    "cn_def": "碩士學位",
    "en_def": "a higher university degree taken after a first degree",
    "sentence": "A: Why has Linda been leaving the office so early every Tuesday and Thursday since the beginning of September? B: She is studying for a {{BLANK}} in project management at night, and the company agreed to change her hours because the new skills will help her lead bigger projects next year.",
    "cn": "A：為什麼從九月初開始，琳達每週二和週四都那麼早離開辦公室？ B：她晚上在攻讀專案管理的【碩士學位】，公司同意調整她的上班時間，因為這些新技能將幫助她明年帶領更大的專案。"
  },
  {
    "word": "higher education",
    "pos": "n.phr.",
    "cn_def": "高等教育",
    "en_def": "study at a college or university after high school",
    "sentence": "A: Why is the bank offering such low interest rates on student loans to young customers this autumn? B: The government wants more people to continue into {{BLANK}} after high school, so it is giving banks money to help families pay for university fees and living costs.",
    "cn": "A：為什麼銀行今年秋天對年輕客戶提供這麼低利率的學生貸款？ B：政府希望更多人在高中畢業後繼續接受【高等教育】，所以提供資金給銀行，幫助家庭支付大學學費和生活費。"
  },
  {
    "word": "intensive course",
    "pos": "n.phr.",
    "cn_def": "密集課程",
    "en_def": "a course that teaches a lot in a short time",
    "sentence": "A: How did the new sales assistant learn to speak Japanese so well before the trade fair in Osaka last month? B: She took a two-week {{BLANK}} at a language school, studying six hours every day, so she could talk with customers and explain our products clearly at the booth.",
    "cn": "A：新來的業務助理是怎麼在上個月大阪商展之前把日語學得這麼好的？ B：她在語言學校上了為期兩週的【密集課程】，每天學習六個小時，所以她能在攤位上和客戶交談並清楚說明我們的產品。"
  },
  {
    "word": "internship",
    "pos": "n.",
    "cn_def": "實習",
    "en_def": "a short period of work to gain experience, often for students",
    "sentence": "A: Do you know why that university student has been sitting at the empty desk next to the printer since Monday morning? B: He is doing a three-month {{BLANK}} with our design team, so he will help with simple projects, attend meetings, and learn how a real office works before he graduates.",
    "cn": "A：你知道為什麼那位大學生從週一早上就坐在印表機旁邊的空位上嗎？ B：他正在我們設計團隊進行為期三個月的【實習】，所以他會協助簡單的專案、參加會議，並在畢業前了解真實的辦公室如何運作。"
  },
  {
    "word": "humanity",
    "pos": "n.",
    "cn_def": "人文學科",
    "en_def": "a subject about people and culture, such as history or literature",
    "sentence": "A: Why did the publishing company hire someone who studied philosophy instead of business for the new editor position? B: The manager believes that a graduate in a {{BLANK}} like history or literature reads carefully, writes well, and understands people, which are exactly the skills an editor needs every day.",
    "cn": "A：為什麼出版公司在新的編輯職位上僱用了一位念哲學而不是商業的人？ B：經理認為，主修歷史或文學等【人文學科】的畢業生閱讀仔細、文筆好又了解人，而這些正是編輯每天需要的技能。"
  },
  {
    "word": "conduct",
    "pos": "v.",
    "cn_def": "進行；實施",
    "en_def": "to organize and carry out something",
    "sentence": "A: Why are so many students walking around the shopping mall with clipboards and asking customers questions this afternoon? B: They are university business students who need to {{BLANK}} a survey about shopping habits, and the results will be used in their final report for the marketing class.",
    "cn": "A：為什麼今天下午有這麼多學生拿著寫字板在購物中心裡走動並向顧客提問？ B：他們是大學商學系的學生，需要【進行】一項關於購物習慣的調查，結果將用在他們行銷課的期末報告中。"
  },
  {
    "word": "acquire",
    "pos": "v.",
    "cn_def": "獲得；習得",
    "en_def": "to get or learn something, such as a skill",
    "sentence": "A: Why does the company send every new engineer to work in the factory for six months before they join the design office? B: Management wants them to {{BLANK}} practical skills by watching the machines and talking to workers, so their later designs will be easier and cheaper to produce.",
    "cn": "A：為什麼公司在每位新工程師進入設計部門之前，都先派他們到工廠工作六個月？ B：管理階層希望他們透過觀察機器和與工人交談來【獲得】實務技能，這樣他們日後的設計會更容易生產，成本也更低。"
  },
  {
    "word": "compulsory",
    "pos": "adj.",
    "cn_def": "強制的；必修的",
    "en_def": "required by a rule; you must do it",
    "sentence": "A: Do all of the new employees really have to join the safety workshop on Friday, even the ones who work only in the office? B: Yes, it is {{BLANK}} for every staff member this year, because the government changed the fire rules and the company could be fined if anyone misses it.",
    "cn": "A：所有新員工真的都必須參加週五的安全研習嗎？連只在辦公室工作的人也一樣？ B：是的，今年這對每位員工都是【強制的】，因為政府修改了消防規定，如果有人缺席，公司可能會被罰款。"
  },
  {
    "word": "semester",
    "pos": "n.",
    "cn_def": "學期",
    "en_def": "one of the two main parts of a school year",
    "sentence": "A: When will the university students from the business program start working part-time at our customer service center? B: They will join us at the beginning of the next {{BLANK}} in February, because their classes are lighter then and they can work three afternoons a week without hurting their grades.",
    "cn": "A：商學系的大學生什麼時候會開始在我們的客服中心兼職工作？ B：他們會在二月下個【學期】開始時加入我們，因為那時他們的課比較少，每週可以工作三個下午而不會影響成績。"
  },
  {
    "word": "major",
    "pos": "n.",
    "cn_def": "主修科目",
    "en_def": "the main subject a student studies at university",
    "sentence": "A: What did the new marketing assistant study at university, and does she have any experience with social media campaigns? B: Her {{BLANK}} was communications, and during her studies she ran the online pages for a local bakery, so she already knows how to attract customers and write short posts.",
    "cn": "A：新的行銷助理在大學念什麼？她有任何社群媒體行銷活動的經驗嗎？ B：她的【主修】是傳播，求學期間她還幫一家當地麵包店經營網路粉絲頁，所以她已經知道如何吸引顧客和撰寫簡短貼文。"
  },
  {
    "word": "faculty",
    "pos": "n.",
    "cn_def": "全體教職員；學院",
    "en_def": "all the teachers in a school or university department",
    "sentence": "A: Who will be giving the talks at the business conference that the university is hosting in the main hall next weekend? B: Several members of the {{BLANK}} will speak about their research, and two local company owners will also share how they work with students on real projects.",
    "cn": "A：大學下週末在大禮堂舉辦的商業研討會將由誰來演講？ B：幾位【教職員】會談他們的研究，另外兩位當地企業主也會分享他們如何與學生合作進行實際專案。"
  },
  {
    "word": "intriguing",
    "pos": "adj.",
    "cn_def": "引人入勝的；有趣的",
    "en_def": "very interesting because it is unusual",
    "sentence": "A: Why did so many employees stay after work yesterday to listen to the guest speaker in the training room? B: She gave an {{BLANK}} talk about how small shops use online games to teach customers about their products, and everyone wanted to ask questions when it was finished.",
    "cn": "A：為什麼昨天有這麼多員工下班後留在訓練室聽客座講者演講？ B：她做了一場【引人入勝的】演講，內容是小商店如何利用線上遊戲讓顧客認識產品，結束時大家都想發問。"
  },
  {
    "word": "intrinsic",
    "pos": "adj.",
    "cn_def": "內在的；固有的",
    "en_def": "coming naturally from inside a person or thing",
    "sentence": "A: Why does Professor Chen not give students extra points for finishing optional reading at home each week? B: She believes that real learning comes from {{BLANK}} motivation, so she wants students to read because they enjoy it and want to grow, not because they are hoping for a reward.",
    "cn": "A：為什麼陳教授不給每週在家完成選讀的學生加分？ B：她相信真正的學習來自【內在的】動機，所以她希望學生閱讀是因為喜歡並想成長，而不是因為期待獎勵。"
  },
  {
    "word": "curriculum",
    "pos": "n.",
    "cn_def": "課程（全部科目）",
    "en_def": "all the subjects taught in a school or course",
    "sentence": "A: Why are the teachers at the training center staying late every evening this month instead of going home on time? B: They are updating the {{BLANK}} for next year, adding new classes on digital marketing and data skills because local companies keep asking for employees with these abilities.",
    "cn": "A：為什麼訓練中心的老師們這個月每天晚上都留到很晚，而不是準時回家？ B：他們正在更新明年的【課程】，增加數位行銷和資料技能的新課，因為當地企業一直在找具備這些能力的員工。"
  },
  {
    "word": "syllabus",
    "pos": "n.",
    "cn_def": "課程大綱",
    "en_def": "a list of the topics a course will cover",
    "sentence": "A: How can I find out which chapters will be on the accounting exam before I register for the evening class next month? B: You can download the {{BLANK}} from the college website, because it lists every topic, the reading for each week, and the dates of all the quizzes and tests.",
    "cn": "A：在我下個月報名夜間課程之前，要怎麼知道會計考試會考哪些章節？ B：你可以從學院網站下載【課程大綱】，因為上面列出了每個主題、每週的閱讀內容，以及所有小考和考試的日期。"
  },
  {
    "word": "multinational",
    "pos": "adj.",
    "cn_def": "跨國的",
    "en_def": "having offices or business in many countries",
    "sentence": "A: Why are so many graduates from the business school applying for jobs at that large electronics company this spring? B: It is a {{BLANK}} company with offices in more than thirty countries, so new employees have the chance to travel, work with people from different cultures, and get promoted quickly.",
    "cn": "A：為什麼今年春天有這麼多商學院畢業生應徵那家大型電子公司的工作？ B：那是一家在三十多個國家設有辦公室的【跨國】公司，所以新進員工有機會出差、與不同文化的人合作，並且很快就能升遷。"
  },
  {
    "word": "dropout",
    "pos": "n.",
    "cn_def": "輟學生",
    "en_def": "a person who leaves school before finishing",
    "sentence": "A: Is it true that the owner of that famous coffee chain never finished his studies at the university in Taipei? B: Yes, he was a college {{BLANK}} who left after one year to open a small coffee stand, and now he gives talks to students about taking risks and working hard.",
    "cn": "A：那家知名咖啡連鎖店的老闆真的沒有完成在台北的大學學業嗎？ B：是的，他是大學【輟學生】，念了一年就離開去開一個小咖啡攤，現在他會向學生演講，談冒險和努力工作。"
  },
  {
    "word": "coursework",
    "pos": "n.",
    "cn_def": "課業；課程作業",
    "en_def": "work students do during a course that counts toward the final grade",
    "sentence": "A: How is your part-time MBA program going now that you are also managing the new team at the office? B: It is difficult because the {{BLANK}} includes weekly reports and group projects, so I spend most of my weekends at the library to make sure everything is finished on time.",
    "cn": "A：既然你在辦公室還要管理新團隊，你的在職企管碩士課程進行得如何？ B：很辛苦，因為【課程作業】包含每週報告和小組專題，所以我週末大多待在圖書館，確保所有東西都能準時完成。"
  },
  {
    "word": "bookworm",
    "pos": "n.",
    "cn_def": "書蟲；愛讀書的人",
    "en_def": "a person who loves reading very much",
    "sentence": "A: Who do you think should help choose the new books for the reading corner in our staff lounge this year? B: Ask Mary in accounting, because she is a real {{BLANK}} who reads two or three novels every week on the train and always recommends great titles to her coworkers.",
    "cn": "A：你覺得今年該由誰來幫忙挑選員工休息室閱讀角落的新書？ B：去問會計部的瑪莉，她是個十足的【書蟲】，每週在火車上讀兩三本小說，而且總是推薦很棒的書給同事。"
  },
  {
    "word": "eager beaver",
    "pos": "n.phr.",
    "cn_def": "做事非常積極的人",
    "en_def": "a person who is very keen and works very hard",
    "sentence": "A: Why is the new intern already in the office at seven every morning when work does not start until nine? B: He is a real {{BLANK}} who wants to impress the manager, so he arrives early to prepare the meeting rooms, check the reports, and ask what extra tasks he can do.",
    "cn": "A：為什麼新來的實習生每天早上七點就到辦公室，而上班時間是九點？ B：他是個非常【積極賣力的人】，想讓經理留下好印象，所以他提早到來準備會議室、檢查報告，並詢問還能做哪些額外的工作。"
  },
  {
    "word": "face-to-face classes",
    "pos": "n.phr.",
    "cn_def": "面對面授課；實體課程",
    "en_def": "lessons where students and teachers are in the same room",
    "sentence": "A: Will the language school continue to teach all of its business English lessons online after the holidays are over? B: No, it will offer {{BLANK}} again in January, because many students said they learn better when they can practice speaking with the teacher and classmates in the same room.",
    "cn": "A：假期結束後，語言學校會繼續在線上教所有的商用英語課程嗎？ B：不會，一月起它會再次提供【實體面對面課程】，因為很多學生說，能在同一個教室和老師及同學練習口說，他們學得比較好。"
  },
  {
    "word": "hit the books",
    "pos": "v.phr.",
    "cn_def": "用功讀書",
    "en_def": "to start studying hard",
    "sentence": "A: Are you coming to the team dinner at the new Italian restaurant on Friday night after the sales meeting? B: I am sorry, but I really need to {{BLANK}} this weekend, because my accounting certificate exam is on Monday morning and I have not finished reviewing the last three chapters.",
    "cn": "A：你週五晚上業務會議結束後，要來新的義大利餐廳參加團隊聚餐嗎？ B：很抱歉，我這個週末真的得【用功讀書】，因為我的會計證照考試在週一早上，而最後三章我還沒複習完。"
  },
  {
    "word": "schoolboy error",
    "pos": "n.phr.",
    "cn_def": "低級錯誤",
    "en_def": "a very simple, silly mistake",
    "sentence": "A: Why did the client send back our price list this morning and ask us to check all the numbers again? B: Someone made a {{BLANK}} and typed the prices in the wrong currency, so the totals looked far too high, and the manager was quite embarrassed when she found out.",
    "cn": "A：為什麼客戶今天早上把我們的價目表退回，並要求我們重新檢查所有數字？ B：有人犯了【低級錯誤】，把價格打成錯的幣別，所以總額看起來高得離譜，經理發現時相當尷尬。"
  },
  {
    "word": "teacher's pet",
    "pos": "n.phr.",
    "cn_def": "老師的寵兒",
    "en_def": "a student whom the teacher likes best",
    "sentence": "A: Why do the other trainees seem a little annoyed with Tom during the computer training sessions this week? B: They think he is the {{BLANK}} because the instructor always asks him to help and praises his work, even though everyone else is also working hard and finishing their tasks.",
    "cn": "A：為什麼這週電腦訓練課時，其他受訓學員似乎對湯姆有點不滿？ B：他們認為他是【老師的寵兒】，因為講師總是請他幫忙並稱讚他的作品，即使其他人也同樣努力並完成了任務。"
  },
  {
    "word": "attend",
    "pos": "v.",
    "cn_def": "參加；出席",
    "en_def": "to go to an event, class, or meeting",
    "sentence": "A: Can you cover my shift at the front desk on Wednesday afternoon, since I will be out of the office for a few hours? B: Sure, I know you need to {{BLANK}} the customer service workshop at the head office, and the manager already told me to answer your phone and greet any visitors.",
    "cn": "A：週三下午我會離開辦公室幾個小時，你可以幫我代櫃檯的班嗎？ B：當然，我知道你要去總公司【參加】客服研習，經理已經告訴我要幫你接電話並接待訪客。"
  },
  {
    "word": "goof around",
    "pos": "v.phr.",
    "cn_def": "胡鬧；鬼混",
    "en_def": "to waste time doing silly things",
    "sentence": "A: Why did the supervisor move the two new warehouse workers to different shifts after only one week? B: She saw them {{BLANK}} with the boxes and the delivery cart instead of packing orders, and she was worried that someone could get hurt or that customers would get their packages late.",
    "cn": "A：為什麼主管才過一週就把兩名新的倉庫員工調到不同班別？ B：她看到他們拿著箱子和送貨推車【胡鬧】，而不是在包裝訂單，她擔心有人會受傷，或是顧客會晚收到包裹。"
  },
  {
    "word": "meet a deadline",
    "pos": "v.phr.",
    "cn_def": "趕上截止期限",
    "en_def": "to finish work by the required time",
    "sentence": "A: Why is the design team ordering pizza and staying at the office so late tonight instead of going home? B: They have to {{BLANK}} for the new advertising campaign, because the client wants the final posters by eight o'clock tomorrow morning and there are still several changes to make.",
    "cn": "A：為什麼設計團隊今晚叫披薩並留在辦公室到這麼晚，而不是回家？ B：他們必須【趕上截止期限】完成新的廣告活動，因為客戶要在明天早上八點前拿到最終海報，而且還有好幾處要修改。"
  },
  {
    "word": "pass with flying colours",
    "pos": "v.phr.",
    "cn_def": "以優異成績通過",
    "en_def": "to pass an exam or test very successfully",
    "sentence": "A: Are you worried about the new staff member who is taking the professional banking exam this Saturday morning? B: Not at all, she has studied every evening for three months and got top scores on all the practice tests, so I am sure she will {{BLANK}} and get her certificate.",
    "cn": "A：你擔心這週六早上要參加銀行專業考試的新同事嗎？ B：一點也不，她三個月來每晚都在讀書，所有模擬考都拿最高分，所以我確信她會【以優異成績通過】並拿到證照。"
  },
  {
    "word": "play truant",
    "pos": "v.phr.",
    "cn_def": "逃學；曠課",
    "en_def": "to stay away from school without permission",
    "sentence": "A: Why did the school call Mrs. Wang at the office in the middle of the afternoon meeting yesterday? B: Her son decided to {{BLANK}} and spent the whole day at a game center downtown, so the teacher wanted her to know he had missed three important classes.",
    "cn": "A：為什麼學校昨天在下午會議中途打電話到辦公室找王太太？ B：她兒子決定【逃學】，整天待在市中心的電玩中心，所以老師想讓她知道他缺了三堂重要的課。"
  },
  {
    "word": "tuition",
    "pos": "n.",
    "cn_def": "學費",
    "en_def": "money paid for teaching at a school or college",
    "sentence": "A: Does our company offer any help for employees who want to study part-time for a business degree at a local university? B: Yes, the company will pay half of your {{BLANK}} if your manager approves the course and you finish each class with at least a B grade.",
    "cn": "A：公司對想在當地大學兼讀商學學位的員工有提供任何協助嗎？ B：有，如果你的主管核准該課程，而且每門課至少拿到B，公司會支付你一半的【學費】。"
  }
];

const MCQS = [
  {
    "q": "The bank requires a recognized _____ in finance for this role. Candidates without an official certificate will not be invited to an interview.",
    "options": [
      "qualification",
      "semester",
      "faculty",
      "syllabus"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Employees who wish to _____ in the online leadership program must register by Friday. The company will cover the full cost of the course.",
    "options": [
      "acquire",
      "conduct",
      "enroll",
      "attend"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Working from home every day requires strong _____. Without a clear schedule, many employees find it hard to stay focused.",
    "options": [
      "tuition",
      "discipline",
      "coursework",
      "dropout"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Staff at overseas branches can now join the training through _____. All lessons are streamed online and recorded for later viewing.",
    "options": [
      "boarding school",
      "higher education",
      "face-to-face classes",
      "distance learning"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Because both parents travel often for work, their daughter lives at a _____. She comes home only during the long holidays.",
    "options": [
      "distance learning",
      "intensive course",
      "boarding school",
      "higher education"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The government plans to increase spending on _____ next year. More money will go to universities and student loans.",
    "options": [
      "higher education",
      "eager beaver",
      "schoolboy error",
      "teacher's pet"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The marketing firm offers a paid summer _____ to university students. Interns work with real clients and receive training from senior staff.",
    "options": [
      "curriculum",
      "faculty",
      "dropout",
      "internship"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The human resources team will _____ a short survey next week. All employees are asked to share their opinions about the new office.",
    "options": [
      "enroll",
      "conduct",
      "acquire",
      "attend"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "New employees are expected to _____ basic computer skills during their first month. Free evening classes are available at the training center.",
    "options": [
      "acquire",
      "enroll",
      "conduct",
      "attend"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Wearing a safety helmet is _____ for all visitors to the factory floor. Anyone without one will be asked to leave immediately.",
    "options": [
      "intriguing",
      "intrinsic",
      "compulsory",
      "multinational"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The college offers evening accounting classes every _____. The next one begins in September and finishes just before the winter holidays.",
    "options": [
      "faculty",
      "syllabus",
      "major",
      "semester"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Her _____ at university was economics, but she later moved into marketing. Now she manages the company's online advertising team.",
    "options": [
      "tuition",
      "major",
      "dropout",
      "syllabus"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Several members of the university _____ will give talks at the business forum. They will share their latest research on consumer behavior.",
    "options": [
      "curriculum",
      "tuition",
      "faculty",
      "coursework"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The speaker's _____ story about starting a business from her garage kept everyone listening. Many guests asked her questions afterward.",
    "options": [
      "intriguing",
      "compulsory",
      "intrinsic",
      "multinational"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The training center has updated its _____ to include courses on data analysis. Local employers had asked for workers with these skills.",
    "options": [
      "dropout",
      "curriculum",
      "bookworm",
      "faculty"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Please read the course _____ before the first class. It lists the weekly topics, required readings, and exam dates.",
    "options": [
      "tuition",
      "major",
      "internship",
      "syllabus"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "As a _____ company, the firm has offices in Tokyo, London, and New York. Staff often join video calls across different time zones.",
    "options": [
      "multinational",
      "compulsory",
      "intriguing",
      "intrinsic"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Although he was a high school _____, he built one of the city's most successful bakeries. He now encourages young people to follow their dreams.",
    "options": [
      "faculty",
      "curriculum",
      "dropout",
      "syllabus"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The MBA program is challenging because the _____ includes weekly reports and group projects. Most students study every weekend to keep up.",
    "options": [
      "bookworm",
      "coursework",
      "dropout",
      "faculty"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Mary is a true _____ who reads several novels each week on the train. She often recommends good titles to her coworkers.",
    "options": [
      "dropout",
      "curriculum",
      "semester",
      "bookworm"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The new assistant arrives an hour early and always asks for extra tasks. Everyone in the office calls him an _____.",
    "options": [
      "schoolboy error",
      "boarding school",
      "eager beaver",
      "intensive course"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Many learners prefer _____ because they can practice speaking with the teacher in person. The school will offer them again in January.",
    "options": [
      "face-to-face classes",
      "distance learning",
      "higher education",
      "boarding school"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "I can't join you for dinner tonight because I need to _____ and review three chapters. My accounting exam is on Monday morning.",
    "options": [
      "goof around",
      "play truant",
      "pass with flying colours",
      "hit the books"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The other students think Anna is the _____ because the instructor always praises her work. In fact, she simply studies harder than anyone else.",
    "options": [
      "schoolboy error",
      "teacher's pet",
      "boarding school",
      "distance learning"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "All department managers must _____ the budget meeting on Thursday afternoon. Please confirm your place with the assistant by Wednesday.",
    "options": [
      "attend",
      "enroll",
      "acquire",
      "retire"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The supervisor warned the new workers not to _____ near the heavy machines. Careless behavior in the factory can cause serious accidents.",
    "options": [
      "hit the books",
      "meet a deadline",
      "goof around",
      "pass with flying colours"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The design team worked late every night to _____ set by the client. The final posters were delivered on Friday morning.",
    "options": [
      "play truant",
      "meet a deadline",
      "goof around",
      "hit the books"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "Linda studied every evening for three months. As a result, she was able to _____ and earned the highest score in the class.",
    "options": [
      "play truant",
      "goof around",
      "meet a deadline",
      "pass with flying colours"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "The school contacted his parents after he decided to _____ for three days. He had been spending his time at a game center instead.",
    "options": [
      "play truant",
      "hit the books",
      "meet a deadline",
      "pass with flying colours"
    ],
    "answer": 0,
    "vocabIndex": 34
  },
  {
    "q": "The company will pay half of your _____ if you study for a business degree. You must finish each class with at least a B grade.",
    "options": [
      "faculty",
      "syllabus",
      "tuition",
      "semester"
    ],
    "answer": 2,
    "vocabIndex": 35
  }
];

const LOOKUP = {
  "qualification": {
    "pos": "n.",
    "en_def": "an official record showing you finished training or passed an exam",
    "cn_def": "資格；學歷證明"
  },
  "enroll": {
    "pos": "v.",
    "en_def": "to officially join a course or school",
    "cn_def": "註冊；登記入學"
  },
  "discipline": {
    "pos": "n.",
    "en_def": "the ability to control yourself and follow rules",
    "cn_def": "紀律；自制力"
  },
  "distance learning": {
    "pos": "n.phr.",
    "en_def": "studying from home through the internet instead of going to a school",
    "cn_def": "遠距學習"
  },
  "boarding school": {
    "pos": "n.phr.",
    "en_def": "a school where students live during the term",
    "cn_def": "寄宿學校"
  },
  "bachelor's degree": {
    "pos": "n.phr.",
    "en_def": "a first university degree, usually after four years of study",
    "cn_def": "學士學位"
  },
  "master's degree": {
    "pos": "n.phr.",
    "en_def": "a higher university degree taken after a first degree",
    "cn_def": "碩士學位"
  },
  "higher education": {
    "pos": "n.phr.",
    "en_def": "study at a college or university after high school",
    "cn_def": "高等教育"
  },
  "intensive course": {
    "pos": "n.phr.",
    "en_def": "a course that teaches a lot in a short time",
    "cn_def": "密集課程"
  },
  "internship": {
    "pos": "n.",
    "en_def": "a short period of work to gain experience, often for students",
    "cn_def": "實習"
  },
  "humanity": {
    "pos": "n.",
    "en_def": "a subject about people and culture, such as history or literature",
    "cn_def": "人文學科"
  },
  "conduct": {
    "pos": "v.",
    "en_def": "to organize and carry out something",
    "cn_def": "進行；實施"
  },
  "acquire": {
    "pos": "v.",
    "en_def": "to get or learn something, such as a skill",
    "cn_def": "獲得；習得"
  },
  "compulsory": {
    "pos": "adj.",
    "en_def": "required by a rule; you must do it",
    "cn_def": "強制的；必修的"
  },
  "semester": {
    "pos": "n.",
    "en_def": "one of the two main parts of a school year",
    "cn_def": "學期"
  },
  "major": {
    "pos": "n.",
    "en_def": "the main subject a student studies at university",
    "cn_def": "主修科目"
  },
  "faculty": {
    "pos": "n.",
    "en_def": "all the teachers in a school or university department",
    "cn_def": "全體教職員；學院"
  },
  "intriguing": {
    "pos": "adj.",
    "en_def": "very interesting because it is unusual",
    "cn_def": "引人入勝的；有趣的"
  },
  "intrinsic": {
    "pos": "adj.",
    "en_def": "coming naturally from inside a person or thing",
    "cn_def": "內在的；固有的"
  },
  "curriculum": {
    "pos": "n.",
    "en_def": "all the subjects taught in a school or course",
    "cn_def": "課程（全部科目）"
  },
  "syllabus": {
    "pos": "n.",
    "en_def": "a list of the topics a course will cover",
    "cn_def": "課程大綱"
  },
  "multinational": {
    "pos": "adj.",
    "en_def": "having offices or business in many countries",
    "cn_def": "跨國的"
  },
  "dropout": {
    "pos": "n.",
    "en_def": "a person who leaves school before finishing",
    "cn_def": "輟學生"
  },
  "coursework": {
    "pos": "n.",
    "en_def": "work students do during a course that counts toward the final grade",
    "cn_def": "課業；課程作業"
  },
  "bookworm": {
    "pos": "n.",
    "en_def": "a person who loves reading very much",
    "cn_def": "書蟲；愛讀書的人"
  },
  "eager beaver": {
    "pos": "n.phr.",
    "en_def": "a person who is very keen and works very hard",
    "cn_def": "做事非常積極的人"
  },
  "face-to-face classes": {
    "pos": "n.phr.",
    "en_def": "lessons where students and teachers are in the same room",
    "cn_def": "面對面授課；實體課程"
  },
  "hit the books": {
    "pos": "v.phr.",
    "en_def": "to start studying hard",
    "cn_def": "用功讀書"
  },
  "schoolboy error": {
    "pos": "n.phr.",
    "en_def": "a very simple, silly mistake",
    "cn_def": "低級錯誤"
  },
  "teacher's pet": {
    "pos": "n.phr.",
    "en_def": "a student whom the teacher likes best",
    "cn_def": "老師的寵兒"
  },
  "attend": {
    "pos": "v.",
    "en_def": "to go to an event, class, or meeting",
    "cn_def": "參加；出席"
  },
  "goof around": {
    "pos": "v.phr.",
    "en_def": "to waste time doing silly things",
    "cn_def": "胡鬧；鬼混"
  },
  "meet a deadline": {
    "pos": "v.phr.",
    "en_def": "to finish work by the required time",
    "cn_def": "趕上截止期限"
  },
  "pass with flying colours": {
    "pos": "v.phr.",
    "en_def": "to pass an exam or test very successfully",
    "cn_def": "以優異成績通過"
  },
  "play truant": {
    "pos": "v.phr.",
    "en_def": "to stay away from school without permission",
    "cn_def": "逃學；曠課"
  },
  "tuition": {
    "pos": "n.",
    "en_def": "money paid for teaching at a school or college",
    "cn_def": "學費"
  }
};

const EXTRA_GLOSSES = {};
