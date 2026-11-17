// Topic 303 Quiz Data: Primary School 小學
// Source word list: https://www.examword.com/group-topic/primary-school — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T303 - Primary School 小學",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "pupil",
    "pos": "n.",
    "cn_def": "學生；小學生",
    "en_def": "a child who is studying at a school",
    "sentence": "A: How many children will join the school trip to the science museum next Friday, and do we need to hire a second bus? B: Every {{BLANK}} in the third grade has returned the permission form, so we will have about sixty kids, and yes, one bus will not be large enough for everyone.",
    "cn": "A：下週五去科學博物館的校外教學會有多少孩子參加？我們需要再租第二輛巴士嗎？ B：三年級的每一位【學生】都已經交回了同意書，所以大約會有六十個孩子，是的，一輛巴士不夠坐所有人。"
  },
  {
    "word": "teacher",
    "pos": "n.",
    "cn_def": "老師；教師",
    "en_def": "a person whose job is to help students learn",
    "sentence": "A: Who should parents contact if their child feels sick during the morning or forgets to bring lunch to school? B: They should first call the homeroom {{BLANK}}, because she knows each child well, and if she is busy in class, the office staff will pass the message to her quickly.",
    "cn": "A：如果孩子早上身體不舒服或忘記帶午餐到學校，家長應該聯絡誰？ B：他們應該先打電話給班導【老師】，因為她很了解每個孩子；如果她正在上課，辦公室職員會很快把訊息轉達給她。"
  },
  {
    "word": "classroom",
    "pos": "n.",
    "cn_def": "教室",
    "en_def": "a room in a school where lessons are taught",
    "sentence": "A: Why are the workers carrying new desks and a large screen up to the second floor this afternoon? B: The school is turning an old storage room into a modern {{BLANK}} for the fourth graders, so the children will finally have more space and better equipment for their lessons next term.",
    "cn": "A：為什麼工人今天下午要把新書桌和一個大螢幕搬上二樓？ B：學校正把一間舊儲藏室改建成四年級的現代化【教室】，所以孩子們下學期上課終於會有更多空間和更好的設備。"
  },
  {
    "word": "homework",
    "pos": "n.",
    "cn_def": "回家作業；功課",
    "en_def": "school work that students must do at home",
    "sentence": "A: My son stays up until ten o'clock almost every night, so do you think the teachers are giving the class too much work to do after school? B: I understand your worry, and I will ask his teacher to reduce the {{BLANK}} so that he has more time to rest, read, and play with his family.",
    "cn": "A：我兒子幾乎每晚都熬到十點，你覺得老師是不是給班上太多課後要做的功課了？ B：我理解您的擔心，我會請他的老師減少【回家作業】，讓他有更多時間休息、閱讀和陪家人玩。"
  },
  {
    "word": "subject",
    "pos": "n.",
    "cn_def": "科目；學科",
    "en_def": "an area of knowledge studied at school, such as history or math",
    "sentence": "A: Since your daughter has just moved here from another city, has she found anything at her new school that she really enjoys studying? B: Yes, she says science is now her favorite {{BLANK}}, because the teacher lets the class do simple experiments every week instead of only reading from the textbook.",
    "cn": "A：既然你女兒剛從另一個城市搬來，她在新學校有找到真正喜歡學的東西嗎？ B：有，她說自然現在是她最喜歡的【科目】，因為老師每週都讓全班做簡單的實驗，而不只是讀課本。"
  },
  {
    "word": "lesson",
    "pos": "n.",
    "cn_def": "課；一堂課",
    "en_def": "a period of time in which students are taught something",
    "sentence": "A: Can the parents watch the English class on Open Day, or will that make the children too nervous to speak? B: Parents are welcome to sit at the back of the room during the first {{BLANK}} of the morning, but we ask them to stay quiet so the kids can focus on the activities.",
    "cn": "A：家長可以在開放日觀摩英文課嗎？還是那會讓孩子緊張得不敢說話？ B：歡迎家長在早上第一堂【課】時坐在教室後面，但我們請他們保持安靜，好讓孩子們專心進行活動。"
  },
  {
    "word": "break",
    "pos": "n.",
    "cn_def": "下課時間；休息",
    "en_def": "a short period of rest between classes or work",
    "sentence": "A: The children look tired after two long math classes in a row, so is there any time for them to relax before lunch? B: Yes, there is a fifteen-minute {{BLANK}} at ten thirty, when they can drink some water, use the restroom, and talk with their friends before the next class starts.",
    "cn": "A：孩子們連上兩堂長長的數學課後看起來很累，午餐前有時間讓他們放鬆嗎？ B：有，十點半有十五分鐘的【下課時間】，他們可以喝水、上廁所，並在下一堂課開始前和朋友聊天。"
  },
  {
    "word": "recess",
    "pos": "n.",
    "cn_def": "下課遊戲時間；課間休息",
    "en_def": "a period in the school day when children stop studying and play",
    "sentence": "A: Where do the kids go after lunch on sunny days, and who watches them while the teachers are eating? B: During {{BLANK}} they usually run around in the playground for twenty minutes, and two staff members walk around the area to make sure nobody gets hurt or leaves the school grounds.",
    "cn": "A：晴天時孩子們午餐後都去哪裡？老師們用餐時誰看著他們？ B：在【下課遊戲時間】他們通常會在操場跑跳二十分鐘，有兩位職員在周圍巡視，確保沒有人受傷或離開校園。"
  },
  {
    "word": "playground",
    "pos": "n.",
    "cn_def": "操場；遊樂場",
    "en_def": "an outdoor area where children can play",
    "sentence": "A: Why did the school close the area behind the gym last week, and when will the children be able to use it again? B: The old slides and swings were broken, so the city is building a safer {{BLANK}} with soft ground, and it should open again before the end of the month.",
    "cn": "A：學校上週為什麼關閉體育館後面的區域？孩子們什麼時候可以再使用？ B：舊的溜滑梯和鞦韆壞了，所以市政府正在蓋一座有軟墊地面、更安全的【遊樂場】，應該會在月底前重新開放。"
  },
  {
    "word": "principal",
    "pos": "n.",
    "cn_def": "校長",
    "en_def": "the person in charge of a school",
    "sentence": "A: Who will give the welcome speech to the new families at the opening ceremony on the first day of school? B: The {{BLANK}} will speak for about ten minutes about the school's goals and rules, and after that the teachers will take the children and their parents to see their new classrooms.",
    "cn": "A：開學第一天的開學典禮上，誰會向新家庭致歡迎詞？ B：【校長】會花大約十分鐘談學校的目標和規定，之後老師們會帶孩子和家長去看他們的新教室。"
  },
  {
    "word": "uniform",
    "pos": "n.",
    "cn_def": "制服",
    "en_def": "special clothes that all students of a school wear",
    "sentence": "A: Do the children have to wear the same clothes every day, or can they choose what they want to wear to class? B: They must wear the school {{BLANK}} from Monday to Thursday, which is a white shirt and blue shorts, but on Fridays they can come in their own comfortable clothes.",
    "cn": "A：孩子們每天都要穿一樣的衣服嗎？還是可以自己選擇穿什麼上課？ B：週一到週四他們必須穿學校【制服】，也就是白襯衫和藍短褲，但週五可以穿自己舒適的衣服來。"
  },
  {
    "word": "library",
    "pos": "n.",
    "cn_def": "圖書館",
    "en_def": "a room or building with books that people can read or borrow",
    "sentence": "A: My daughter loves books, but we cannot afford to buy new ones every week, so is there anywhere at school she can get them? B: She can visit the {{BLANK}} on the first floor during lunchtime and borrow up to three books at a time for two weeks without paying anything.",
    "cn": "A：我女兒很愛看書，但我們沒辦法每週都買新書，學校裡有地方可以讓她拿到書嗎？ B：她可以在午餐時間去一樓的【圖書館】，一次免費借最多三本書，借期兩週。"
  },
  {
    "word": "canteen",
    "pos": "n.",
    "cn_def": "學生餐廳；福利社",
    "en_def": "a place in a school or office where people buy and eat meals",
    "sentence": "A: Do I need to pack lunch for my son every day, or can he buy a hot meal at school? B: He can buy a healthy set meal in the {{BLANK}} for about sixty dollars, and the menu changes every day, so he will have rice, vegetables, soup, and fruit to choose from.",
    "cn": "A：我需要每天幫兒子準備午餐嗎？還是他可以在學校買熱食？ B：他可以在【學生餐廳】用大約六十元買一份健康套餐，菜單每天更換，所以會有飯、蔬菜、湯和水果可以選。"
  },
  {
    "word": "grade",
    "pos": "n.",
    "cn_def": "年級；成績",
    "en_def": "a class or year at school; also a mark for school work",
    "sentence": "A: How old will my daughter be when she starts learning English with a foreign teacher at this school? B: She will be about eight, because the program begins in the second {{BLANK}}, and the children have two short English classes every week with lots of songs and games.",
    "cn": "A：我女兒在這所學校幾歲時會開始跟外籍老師學英文？ B：她大約八歲，因為這個課程從二【年級】開始，孩子們每週有兩堂短短的英文課，有很多歌曲和遊戲。"
  },
  {
    "word": "exam",
    "pos": "n.",
    "cn_def": "考試",
    "en_def": "an important test of knowledge or skill",
    "sentence": "A: Why are the students staying so quiet in the hallway this morning, and why are the classroom doors closed? B: They are taking their end-of-term {{BLANK}} in math and Chinese, so the teachers asked everyone to keep the noise down until the bell rings at eleven o'clock.",
    "cn": "A：今天早上為什麼學生們在走廊上都這麼安靜？為什麼教室門都關著？ B：他們正在考數學和國語的期末【考試】，所以老師們請大家保持安靜，直到十一點鐘聲響起。"
  },
  {
    "word": "quiz",
    "pos": "n.",
    "cn_def": "小考；測驗",
    "en_def": "a short, informal test",
    "sentence": "A: Is the test on Friday going to be a big part of my son's report, because he seems very worried about it? B: Please tell him not to worry, because it is just a short {{BLANK}} with ten spelling words, and the teacher only uses it to check what the class still needs to practice.",
    "cn": "A：週五的測驗會占我兒子成績單很大的比重嗎？他看起來很擔心。 B：請告訴他別擔心，那只是一個有十個拼字的簡短【小考】，老師只是用來檢查全班還需要練習什麼。"
  },
  {
    "word": "assignment",
    "pos": "n.",
    "cn_def": "作業；指派的任務",
    "en_def": "a piece of work that a student is given to do",
    "sentence": "A: My daughter says she must build a model of a bridge using paper and glue, so when does she have to hand it in? B: The science {{BLANK}} is due next Wednesday, and the children will present their models to the class and explain why they chose their designs.",
    "cn": "A：我女兒說她得用紙和膠水做一座橋的模型，她什麼時候要交？ B：這份自然科【作業】下週三要交，孩子們會向全班展示他們的模型，並解釋為什麼選擇那樣的設計。"
  },
  {
    "word": "activity",
    "pos": "n.",
    "cn_def": "活動",
    "en_def": "something people do for fun or to learn",
    "sentence": "A: What do the children do on Wednesday afternoons, since they do not have regular classes then? B: Each child chooses one after-school {{BLANK}}, such as soccer, painting, or the drama club, and they meet with a coach or teacher for two hours to develop new skills and make friends.",
    "cn": "A：孩子們週三下午沒有正課，那時候他們做什麼？ B：每個孩子選一項課後【活動】，例如足球、畫畫或戲劇社，跟教練或老師一起兩小時，培養新技能並交朋友。"
  },
  {
    "word": "attendance",
    "pos": "n.",
    "cn_def": "出席；出勤",
    "en_def": "the act of being present at school or an event",
    "sentence": "A: Why did the school send a letter to some families this week, and is it about a problem with the students' behavior? B: No, it is about {{BLANK}}, because a few children have missed many days this term, and the teachers want parents to explain why they were absent and help them catch up.",
    "cn": "A：學校這週為什麼寄信給一些家庭？是因為學生行為有問題嗎？ B：不是，是關於【出席】狀況，因為有幾個孩子這學期缺課很多天，老師希望家長說明缺席原因並幫他們跟上進度。"
  },
  {
    "word": "discipline",
    "pos": "n.",
    "cn_def": "紀律；管教",
    "en_def": "training people to follow rules and behave well",
    "sentence": "A: How do the teachers deal with children who shout or push others during class, since some parents have complained about noise? B: The school believes in gentle {{BLANK}}, so teachers first talk with the child calmly, explain the rules again, and only contact the parents if the behavior continues.",
    "cn": "A：老師們怎麼處理上課時大叫或推人的孩子？有些家長抱怨太吵了。 B：學校相信溫和的【管教】，所以老師會先冷靜地跟孩子談，再次說明規定，只有在行為持續時才聯絡家長。"
  },
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "時間表；課表",
    "en_def": "a plan that lists times when things will happen",
    "sentence": "A: I need to know which days my son has swimming class so I can pack his towel, but I lost the paper the teacher gave us. B: Do not worry, you can download the weekly class {{BLANK}} from the school website, and it shows every subject, room number, and starting time for each day.",
    "cn": "A：我需要知道兒子哪幾天有游泳課，好幫他準備毛巾，但我把老師給的那張紙弄丟了。 B：別擔心，您可以從學校網站下載每週【課表】，上面列出每天的每個科目、教室號碼和上課時間。"
  },
  {
    "word": "curriculum",
    "pos": "n.",
    "cn_def": "課程（內容）",
    "en_def": "all the subjects and content taught in a school",
    "sentence": "A: Will the school teach the children anything about computers, or do they only study traditional subjects? B: The new {{BLANK}} includes one hour of basic coding every week from the fourth grade, along with reading, math, science, and art, so students will learn useful digital skills early.",
    "cn": "A：學校會教孩子電腦相關的東西嗎？還是只學傳統科目？ B：新的【課程】從四年級開始每週包含一小時的基礎程式設計，加上閱讀、數學、自然和美術，所以學生能及早學到實用的數位技能。"
  },
  {
    "word": "reading",
    "pos": "n.",
    "cn_def": "閱讀",
    "en_def": "the activity of looking at and understanding written words",
    "sentence": "A: What can parents do at home to help their children improve their Chinese and English before the next school year? B: The best idea is to spend twenty minutes on {{BLANK}} with them every evening, choosing short storybooks they enjoy, and talking about the pictures and characters together.",
    "cn": "A：家長在家可以做什麼來幫助孩子在下學年前提升中文和英文？ B：最好的方法是每晚花二十分鐘陪他們【閱讀】，選他們喜歡的短篇故事書，並一起討論圖片和角色。"
  },
  {
    "word": "writing",
    "pos": "n.",
    "cn_def": "寫作；書寫",
    "en_def": "the activity of putting words on paper to communicate",
    "sentence": "A: My son reads very well, but his teacher says he still has trouble putting his ideas into sentences, so how can we help him? B: Encourage him to keep a short diary about his day, because regular {{BLANK}} practice at home will make him more confident when he writes stories at school.",
    "cn": "A：我兒子閱讀很好，但老師說他把想法寫成句子還有困難，我們可以怎麼幫他？ B：鼓勵他寫一本簡短的日記記錄每天的事，因為在家規律的【寫作】練習會讓他在學校寫故事時更有信心。"
  },
  {
    "word": "spelling",
    "pos": "n.",
    "cn_def": "拼字",
    "en_def": "the way that words are formed with letters",
    "sentence": "A: Why does my daughter come home every Thursday asking me to read a list of English words to her? B: Her class has a {{BLANK}} test every Friday morning, so she wants to practice writing each word correctly, letter by letter, before she has to do it in front of the teacher.",
    "cn": "A：為什麼我女兒每週四回家都要我念一串英文單字給她聽？ B：她班上每週五早上有【拼字】測驗，所以她想先練習把每個單字一個字母一個字母正確地寫出來，再在老師面前寫。"
  },
  {
    "word": "mathematics",
    "pos": "n.",
    "cn_def": "數學",
    "en_def": "the study of numbers, shapes, and amounts",
    "sentence": "A: Which class does the school want to give more hours to next year, and why have they decided to change the timetable? B: They plan to add one more period of {{BLANK}} each week, because test results showed many pupils still find adding, subtracting, and solving word problems quite difficult.",
    "cn": "A：學校明年想增加哪一科的時數？為什麼決定更改課表？ B：他們計畫每週多加一節【數學】課，因為考試結果顯示很多學生仍覺得加法、減法和解應用題相當困難。"
  },
  {
    "word": "science",
    "pos": "n.",
    "cn_def": "自然科學；科學",
    "en_def": "the study of the natural world through observation and experiments",
    "sentence": "A: What was the reason the children planted beans in small cups and put them on the windows of their classroom? B: It is part of their {{BLANK}} unit on plants, so every day they measure how tall the beans grow and write down how sunlight and water affect them.",
    "cn": "A：孩子們為什麼把豆子種在小杯子裡，然後放在教室窗邊？ B：那是他們植物單元【自然科學】課的一部分，所以他們每天量豆子長多高，並記錄陽光和水對它們的影響。"
  },
  {
    "word": "art",
    "pos": "n.",
    "cn_def": "美術；藝術",
    "en_def": "the activity of painting, drawing, or making beautiful things",
    "sentence": "A: Where did all the colorful paintings in the school hallway come from, because they make the building look so cheerful? B: The fifth graders made them in their {{BLANK}} class this month, and the teacher decided to hang them up so that visitors and parents could enjoy the students' creative work.",
    "cn": "A：學校走廊上那些色彩繽紛的畫是從哪裡來的？它們讓整棟建築看起來好有朝氣。 B：那是五年級學生這個月在【美術】課畫的，老師決定把它們掛起來，讓訪客和家長欣賞學生的創意作品。"
  },
  {
    "word": "music",
    "pos": "n.",
    "cn_def": "音樂",
    "en_def": "sounds arranged in a way that is pleasant, such as songs",
    "sentence": "A: Why are the children practicing songs so often after lunch, and is there a special event coming up soon? B: Yes, the school is holding a {{BLANK}} concert for parents in December, so every class is learning two songs, and some students will also play the piano and violin.",
    "cn": "A：孩子們為什麼午餐後常常練習唱歌？最近有什麼特別活動嗎？ B：有，學校十二月要為家長舉辦一場【音樂】會，所以每班都在學兩首歌，有些學生還會彈鋼琴和拉小提琴。"
  },
  {
    "word": "friendship",
    "pos": "n.",
    "cn_def": "友誼；友情",
    "en_def": "a relationship between people who like and trust each other",
    "sentence": "A: My son was very shy when he started at this school, so how is he getting along with the other children now? B: He is doing much better, and he has formed a close {{BLANK}} with a boy who sits next to him, so they eat lunch together and help each other with homework every day.",
    "cn": "A：我兒子剛來這所學校時很害羞，他現在跟其他孩子相處得怎麼樣？ B：他好多了，還跟坐在他旁邊的男孩建立了親密的【友誼】，所以他們每天一起吃午餐，也互相幫忙寫作業。"
  },
  {
    "word": "report card",
    "pos": "n.phr.",
    "cn_def": "成績單",
    "en_def": "a document that shows a student's marks and progress",
    "sentence": "A: When will parents find out how their children did in each subject this term, and will there be comments from the teachers? B: Every child will bring home a {{BLANK}} at the end of January, and it will show their marks, their attendance, and a short note from the homeroom teacher about their progress.",
    "cn": "A：家長什麼時候會知道孩子這學期各科表現如何？老師會寫評語嗎？ B：每個孩子都會在一月底帶回一份【成績單】，上面會顯示他們的分數、出席狀況，還有班導師關於他們進步情形的簡短評語。"
  },
  {
    "word": "encourage",
    "pos": "v.",
    "cn_def": "鼓勵",
    "en_def": "to give someone support or confidence to do something",
    "sentence": "A: My daughter is afraid to answer questions in class because she thinks other students will laugh at her mistakes. B: Our teachers always {{BLANK}} shy children to speak by praising their effort, and they also tell the class that making mistakes is a normal part of learning something new.",
    "cn": "A：我女兒不敢在課堂上回答問題，因為她覺得其他學生會笑她的錯誤。 B：我們的老師總是透過稱讚努力來【鼓勵】害羞的孩子發言，也會告訴全班犯錯是學習新事物的正常過程。"
  },
  {
    "word": "learn",
    "pos": "v.",
    "cn_def": "學習；學會",
    "en_def": "to get knowledge or a skill by studying or practice",
    "sentence": "A: Why do the second graders spend so much time in the kitchen classroom every Tuesday afternoon? B: They are taking a cooking class where they {{BLANK}} how to wash vegetables, measure ingredients, and make simple healthy snacks, and the children enjoy it so much that many ask to do it at home.",
    "cn": "A：為什麼二年級學生每週二下午都花那麼多時間在烹飪教室？ B：他們正在上烹飪課，【學習】如何洗菜、量食材和做簡單的健康點心，孩子們非常喜歡，很多人還要求在家裡也做。"
  },
  {
    "word": "participate",
    "pos": "v.",
    "cn_def": "參加；參與",
    "en_def": "to take part in an activity or event",
    "sentence": "A: Is it a problem if my son does not want to run in any races at the school sports day next month? B: Not at all, but we hope every child will {{BLANK}} in at least one event, so he could join the team games or help hand out water, which many quieter children prefer.",
    "cn": "A：如果我兒子不想參加下個月學校運動會的任何賽跑，會有問題嗎？ B：完全不會，但我們希望每個孩子至少【參加】一個項目，所以他可以加入團體遊戲或幫忙發水，很多比較安靜的孩子比較喜歡這樣。"
  }
];

const MCQS = [
  {
    "q": "Ms. Lin has twenty-five students in her class this year. Each _____ received a free notebook and pencil on the first day.",
    "options": [
      "pupil",
      "principal",
      "canteen",
      "curriculum"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The school is hiring a new English _____ for the lower grades. Applicants should have experience working with young children and a teaching license.",
    "options": [
      "pupil",
      "uniform",
      "teacher",
      "quiz"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The heater in the fourth-grade _____ stopped working this morning. Students moved to the library until a technician could fix it.",
    "options": [
      "subject",
      "classroom",
      "schedule",
      "friendship"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Students who forget their _____ three times will stay after class. The teacher wants them to finish it before going home.",
    "options": [
      "recess",
      "attendance",
      "playground",
      "homework"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "History is a required _____ for all fifth graders. The class meets twice a week and covers the story of Taiwan.",
    "options": [
      "break",
      "uniform",
      "subject",
      "canteen"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The swimming _____ was canceled because of the heavy rain. The coach will reschedule it for next Tuesday afternoon at two.",
    "options": [
      "lesson",
      "grade",
      "library",
      "discipline"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The bell rang and the children rushed outside for _____. They played tag and jumped rope until it was time to return.",
    "options": [
      "curriculum",
      "spelling",
      "attendance",
      "recess"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Parents raised money to buy new swings for the school _____. The equipment will be installed during the summer vacation.",
    "options": [
      "subject",
      "playground",
      "exam",
      "report card"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The _____ announced that the school would close early on Friday. Teachers will use the afternoon for a training workshop.",
    "options": [
      "principal",
      "pupil",
      "canteen",
      "quiz"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "All students must wear a clean _____ on picture day. Photographs will be taken in the gym starting at nine.",
    "options": [
      "schedule",
      "lesson",
      "grade",
      "uniform"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The school _____ has added three hundred new picture books. Students may borrow up to five titles for two weeks.",
    "options": [
      "playground",
      "canteen",
      "library",
      "recess"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Lunch prices in the school _____ will rise slightly next semester. The kitchen staff will also offer more vegetarian dishes.",
    "options": [
      "library",
      "canteen",
      "classroom",
      "principal"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "My nephew will enter the sixth _____ in September. He is excited to be one of the oldest students in the school.",
    "options": [
      "subject",
      "lesson",
      "quiz",
      "grade"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Students must bring two pencils and an eraser to the final _____. Mobile phones are not allowed in the testing room.",
    "options": [
      "exam",
      "recess",
      "friendship",
      "uniform"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The teacher gave the class a short _____ on multiplication. It took only ten minutes and did not count much toward the final mark.",
    "options": [
      "curriculum",
      "quiz",
      "library",
      "principal"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Each group must complete the research _____ by Friday. The teacher will grade both the poster and the oral presentation.",
    "options": [
      "attendance",
      "recess",
      "assignment",
      "canteen"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The school offers a different after-school _____ every term. This semester, students can join a robotics club or a chess club.",
    "options": [
      "activity",
      "exam",
      "grade",
      "uniform"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The school gives a certificate for perfect _____ at the end of the year. Students must not miss a single day of class.",
    "options": [
      "discipline",
      "attendance",
      "spelling",
      "curriculum"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The new teacher kept good _____ in her noisy class. She set clear rules and praised students who followed them.",
    "options": [
      "attendance",
      "friendship",
      "schedule",
      "discipline"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The class _____ has changed because the gym is being repaired. Physical education will now take place on Thursday mornings.",
    "options": [
      "principal",
      "homework",
      "schedule",
      "pupil"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The Ministry of Education updated the national _____ last year. Schools must now include more lessons on the environment.",
    "options": [
      "canteen",
      "curriculum",
      "uniform",
      "quiz"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The library holds a _____ contest every winter. Children who finish twenty books receive a certificate and a small gift.",
    "options": [
      "reading",
      "attendance",
      "discipline",
      "music"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Her _____ has improved a lot since she started keeping a diary. She now uses longer sentences and more interesting words.",
    "options": [
      "recess",
      "canteen",
      "writing",
      "attendance"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Tom made several _____ mistakes in his letter to the principal. His teacher helped him correct each word before he sent it.",
    "options": [
      "mathematics",
      "friendship",
      "music",
      "spelling"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Students who enjoy _____ can join the number puzzle club. Members solve challenging problems and compete with other schools.",
    "options": [
      "spelling",
      "mathematics",
      "art",
      "music"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The fifth graders visited a farm for their _____ project. They studied how soil and water help plants grow.",
    "options": [
      "spelling",
      "music",
      "attendance",
      "science"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The children's paintings from _____ class will be shown at the city hall. Parents can view the exhibition until the end of May.",
    "options": [
      "art",
      "mathematics",
      "spelling",
      "discipline"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The school band will perform at the opening ceremony. Students in the _____ club have practiced the songs for three weeks.",
    "options": [
      "mathematics",
      "spelling",
      "music",
      "attendance"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Parents should sign the _____ and return it to school by Monday. It shows each student's marks and teacher comments.",
    "options": [
      "report card",
      "playground",
      "canteen",
      "recess"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "All third graders are invited to _____ in the spring science fair. They should register with their homeroom teacher by March first.",
    "options": [
      "encourage",
      "learn",
      "discipline",
      "participate"
    ],
    "answer": 3,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "pupil": {
    "pos": "n.",
    "en_def": "a child who is studying at a school",
    "cn_def": "學生；小學生"
  },
  "teacher": {
    "pos": "n.",
    "en_def": "a person whose job is to help students learn",
    "cn_def": "老師；教師"
  },
  "classroom": {
    "pos": "n.",
    "en_def": "a room in a school where lessons are taught",
    "cn_def": "教室"
  },
  "homework": {
    "pos": "n.",
    "en_def": "school work that students must do at home",
    "cn_def": "回家作業；功課"
  },
  "subject": {
    "pos": "n.",
    "en_def": "an area of knowledge studied at school, such as history or math",
    "cn_def": "科目；學科"
  },
  "lesson": {
    "pos": "n.",
    "en_def": "a period of time in which students are taught something",
    "cn_def": "課；一堂課"
  },
  "break": {
    "pos": "n.",
    "en_def": "a short period of rest between classes or work",
    "cn_def": "下課時間；休息"
  },
  "recess": {
    "pos": "n.",
    "en_def": "a period in the school day when children stop studying and play",
    "cn_def": "下課遊戲時間；課間休息"
  },
  "playground": {
    "pos": "n.",
    "en_def": "an outdoor area where children can play",
    "cn_def": "操場；遊樂場"
  },
  "principal": {
    "pos": "n.",
    "en_def": "the person in charge of a school",
    "cn_def": "校長"
  },
  "uniform": {
    "pos": "n.",
    "en_def": "special clothes that all students of a school wear",
    "cn_def": "制服"
  },
  "library": {
    "pos": "n.",
    "en_def": "a room or building with books that people can read or borrow",
    "cn_def": "圖書館"
  },
  "canteen": {
    "pos": "n.",
    "en_def": "a place in a school or office where people buy and eat meals",
    "cn_def": "學生餐廳；福利社"
  },
  "grade": {
    "pos": "n.",
    "en_def": "a class or year at school; also a mark for school work",
    "cn_def": "年級；成績"
  },
  "exam": {
    "pos": "n.",
    "en_def": "an important test of knowledge or skill",
    "cn_def": "考試"
  },
  "quiz": {
    "pos": "n.",
    "en_def": "a short, informal test",
    "cn_def": "小考；測驗"
  },
  "assignment": {
    "pos": "n.",
    "en_def": "a piece of work that a student is given to do",
    "cn_def": "作業；指派的任務"
  },
  "activity": {
    "pos": "n.",
    "en_def": "something people do for fun or to learn",
    "cn_def": "活動"
  },
  "attendance": {
    "pos": "n.",
    "en_def": "the act of being present at school or an event",
    "cn_def": "出席；出勤"
  },
  "discipline": {
    "pos": "n.",
    "en_def": "training people to follow rules and behave well",
    "cn_def": "紀律；管教"
  },
  "schedule": {
    "pos": "n.",
    "en_def": "a plan that lists times when things will happen",
    "cn_def": "時間表；課表"
  },
  "curriculum": {
    "pos": "n.",
    "en_def": "all the subjects and content taught in a school",
    "cn_def": "課程（內容）"
  },
  "reading": {
    "pos": "n.",
    "en_def": "the activity of looking at and understanding written words",
    "cn_def": "閱讀"
  },
  "writing": {
    "pos": "n.",
    "en_def": "the activity of putting words on paper to communicate",
    "cn_def": "寫作；書寫"
  },
  "spelling": {
    "pos": "n.",
    "en_def": "the way that words are formed with letters",
    "cn_def": "拼字"
  },
  "mathematics": {
    "pos": "n.",
    "en_def": "the study of numbers, shapes, and amounts",
    "cn_def": "數學"
  },
  "science": {
    "pos": "n.",
    "en_def": "the study of the natural world through observation and experiments",
    "cn_def": "自然科學；科學"
  },
  "art": {
    "pos": "n.",
    "en_def": "the activity of painting, drawing, or making beautiful things",
    "cn_def": "美術；藝術"
  },
  "music": {
    "pos": "n.",
    "en_def": "sounds arranged in a way that is pleasant, such as songs",
    "cn_def": "音樂"
  },
  "friendship": {
    "pos": "n.",
    "en_def": "a relationship between people who like and trust each other",
    "cn_def": "友誼；友情"
  },
  "report card": {
    "pos": "n.phr.",
    "en_def": "a document that shows a student's marks and progress",
    "cn_def": "成績單"
  },
  "encourage": {
    "pos": "v.",
    "en_def": "to give someone support or confidence to do something",
    "cn_def": "鼓勵"
  },
  "learn": {
    "pos": "v.",
    "en_def": "to get knowledge or a skill by studying or practice",
    "cn_def": "學習；學會"
  },
  "participate": {
    "pos": "v.",
    "en_def": "to take part in an activity or event",
    "cn_def": "參加；參與"
  }
};

const EXTRA_GLOSSES = {};
