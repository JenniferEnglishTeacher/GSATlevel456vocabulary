// Topic 450 Quiz Data: Young People 年輕人
// Source word list: https://www.examword.com/group-topic/young-people — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T450 - Young People 年輕人",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "youth",
    "pos": "n.",
    "cn_def": "青年；青少年時期",
    "en_def": "young people as a group; the time of being young",
    "sentence": "A: Why is the city library opening a new room on the second floor, and who will be in charge of it? B: It will be a quiet study and activity center for local {{BLANK}}, and the manager hopes that teenagers will come after school instead of spending all evening alone in shopping malls.",
    "cn": "A：為什麼市立圖書館要在二樓開一間新房間，誰會負責管理呢？ B：那將會是一個給當地【青年】使用的安靜讀書和活動中心，經理希望青少年放學後會來這裡，而不是整晚獨自待在購物中心。"
  },
  {
    "word": "teenager",
    "pos": "n.",
    "cn_def": "青少年（十三至十九歲）",
    "en_def": "a person between 13 and 19 years old",
    "sentence": "A: Who usually buys these colorful headphones, and should we put them near the front of the store next month? B: Our sales report shows that almost every buyer is a {{BLANK}} who shops with friends on weekends, so placing them near the entrance by the phone cases makes a lot of sense.",
    "cn": "A：通常是誰買這些色彩繽紛的耳機？我們下個月應該把它們放在店面前方嗎？ B：我們的銷售報告顯示幾乎每位買家都是週末和朋友一起逛街的【青少年】，所以把它們放在入口附近的手機殼旁邊很合理。"
  },
  {
    "word": "adolescent",
    "pos": "n.",
    "cn_def": "青春期的人；青少年",
    "en_def": "a young person who is developing from a child into an adult",
    "sentence": "A: Why did the clinic hire another counselor this year, and what kind of patients will she see? B: The number of families asking for help has grown quickly, so she will work with any {{BLANK}} who feels stressed about school, exams, or changes at home, usually in the late afternoon.",
    "cn": "A：診所今年為什麼又聘請了一位輔導員？她會看哪一類的病人？ B：尋求協助的家庭數量快速增加，所以她會輔導任何對學業、考試或家中變化感到壓力的【青春期孩子】，通常是在傍晚的時候。"
  },
  {
    "word": "student",
    "pos": "n.",
    "cn_def": "學生",
    "en_def": "a person who is studying at a school or university",
    "sentence": "A: Can we offer a discount on our software for people who are still at university, and how would we check it? B: Yes, any {{BLANK}} who shows a valid school ID at the counter or uploads it on our website can get thirty percent off the yearly plan.",
    "cn": "A：我們可以為還在讀大學的人提供軟體折扣嗎？我們要怎麼查核呢？ B：可以，任何在櫃檯出示有效學生證或在我們網站上傳證件的【學生】，都可以享有年度方案七折優惠。"
  },
  {
    "word": "classmate",
    "pos": "n.",
    "cn_def": "同班同學",
    "en_def": "a person in the same class at school",
    "sentence": "A: How did you hear about this marketing position, since the company never posted it on any job website? B: A former {{BLANK}} from my college business course works in the sales department here, and she told me about the opening when we met for coffee last month.",
    "cn": "A：你是怎麼聽說這個行銷職缺的？公司從來沒有把它刊登在任何求職網站上。 B：我大學商業課程的一位前【同班同學】在這裡的業務部工作，上個月我們見面喝咖啡時她告訴了我這個職缺。"
  },
  {
    "word": "friend",
    "pos": "n.",
    "cn_def": "朋友",
    "en_def": "a person you know well and like",
    "sentence": "A: Why are so many new customers using the coupon code this week, even though we stopped the online ads on Monday? B: Our survey shows that most of them heard about the sale from a close {{BLANK}} who already shops here, so word of mouth is working better than advertising.",
    "cn": "A：為什麼這週有這麼多新顧客使用折扣碼？我們星期一就已經停掉線上廣告了。 B：我們的調查顯示他們大多是從已經在這裡購物的親近【朋友】那裡聽說特賣的，所以口碑比廣告更有效。"
  },
  {
    "word": "generation",
    "pos": "n.",
    "cn_def": "世代；一代人",
    "en_def": "all the people born and living at about the same time",
    "sentence": "A: Why does the new advertising campaign use short videos instead of the printed brochures we used last year? B: The younger {{BLANK}} spends most of its free time on mobile phones, so the marketing team believes short, funny videos will reach these customers much faster and more cheaply.",
    "cn": "A：為什麼新的廣告活動使用短影片，而不是我們去年使用的印刷手冊？ B：年輕的【世代】大部分空閒時間都花在手機上，所以行銷團隊相信短而有趣的影片能更快、更便宜地接觸到這些顧客。"
  },
  {
    "word": "youth culture",
    "pos": "n.phr.",
    "cn_def": "青年文化",
    "en_def": "the music, fashion, and habits popular among young people",
    "sentence": "A: Why did the clothing company hire a twenty-two-year-old designer to lead its new product line this spring? B: The managers wanted someone who truly understands {{BLANK}}, including the music, street fashion, and online habits that make young shoppers decide what to buy and what to ignore.",
    "cn": "A：為什麼這家服飾公司今年春天聘請一位二十二歲的設計師來帶領新的產品線？ B：主管們希望找一個真正了解【青年文化】的人，包括讓年輕購物者決定買什麼、忽略什麼的音樂、街頭時尚和上網習慣。"
  },
  {
    "word": "trend",
    "pos": "n.",
    "cn_def": "趨勢；潮流",
    "en_def": "a general change or development in the way people behave",
    "sentence": "A: Why are we ordering so many reusable water bottles for the store this quarter, when they sold slowly two years ago? B: There is a clear {{BLANK}} among young customers toward eco-friendly products, and our sales figures for bottles and cloth bags have doubled since last summer.",
    "cn": "A：為什麼這一季我們要替店裡訂這麼多環保水壺？兩年前它們賣得很慢。 B：年輕顧客之間有明顯偏好環保產品的【趨勢】，而且自從去年夏天以來，我們水壺和布袋的銷售數字已經翻倍了。"
  },
  {
    "word": "future",
    "pos": "n.",
    "cn_def": "未來；將來",
    "en_def": "the time that will come after now",
    "sentence": "A: Why is the company paying for new employees to take evening classes in data analysis this year? B: The board believes that our {{BLANK}} depends on young workers who can understand customer data, so training them now will save money and help the business grow over the next ten years.",
    "cn": "A：為什麼公司今年要替新進員工支付晚上上資料分析課的費用？ B：董事會相信我們的【未來】取決於能理解顧客資料的年輕員工，所以現在培訓他們能省錢，並幫助公司在未來十年成長。"
  },
  {
    "word": "learn",
    "pos": "v.",
    "cn_def": "學習；學會",
    "en_def": "to get knowledge or a new skill",
    "sentence": "A: What should the new interns do during their first week, since the manager is away at the trade fair? B: They can {{BLANK}} how to use the ordering system by watching the training videos and then practicing with Kevin, who has been helping customers at the front desk for three years.",
    "cn": "A：經理去參加商展了，新來的實習生第一週應該做什麼？ B：他們可以看培訓影片，然後跟凱文一起練習，來【學習】如何使用訂購系統，凱文已經在前台幫顧客服務三年了。"
  },
  {
    "word": "study",
    "pos": "v.",
    "cn_def": "讀書；研讀；學習",
    "en_def": "to spend time learning about a subject",
    "sentence": "A: Why does your nephew work only on Saturdays at the bookstore, even though the manager offered him more shifts? B: He has to {{BLANK}} for his university entrance exam every weekday evening, so he decided that one long day of work each week is enough until the test is over in June.",
    "cn": "A：為什麼你的姪子只在星期六去書店上班？經理明明給了他更多班。 B：他每個平日晚上都必須為大學入學考試【讀書】，所以他決定在六月考試結束前，每週只上一整天的班就夠了。"
  },
  {
    "word": "explore",
    "pos": "v.",
    "cn_def": "探索；探究",
    "en_def": "to travel around or look at something to learn about it",
    "sentence": "A: What is the main purpose of the summer program for high school graduates that our firm is sponsoring this year? B: It lets them {{BLANK}} different careers by spending one week in each department, so they can see what engineers, designers, and accountants really do before they choose a university major.",
    "cn": "A：我們公司今年贊助的高中畢業生暑期計畫主要目的是什麼？ B：它讓他們在每個部門待一週來【探索】不同的職業，這樣他們在選擇大學主修之前，就能看到工程師、設計師和會計師實際上在做什麼。"
  },
  {
    "word": "communicate",
    "pos": "v.",
    "cn_def": "溝通；傳達",
    "en_def": "to share information or ideas with other people",
    "sentence": "A: Why did the store manager start a group chat for all the part-time staff, and does everyone use it? B: Most of the young employees prefer to {{BLANK}} by message rather than by phone, so the group chat makes it easier to share schedule changes and urgent news quickly.",
    "cn": "A：店經理為什麼替所有兼職員工開了一個群組聊天？大家都有在用嗎？ B：大部分年輕員工比較喜歡用訊息而不是打電話來【溝通】，所以群組聊天讓分享班表變動和緊急消息變得更容易、更快速。"
  },
  {
    "word": "develop",
    "pos": "v.",
    "cn_def": "發展；培養",
    "en_def": "to grow or improve something over time",
    "sentence": "A: Why do you spend so much time with the new interns every Friday afternoon, when you are already very busy? B: I want to help them {{BLANK}} strong presentation skills, because many young workers are nervous about speaking in meetings, and practice with a patient supervisor builds their confidence.",
    "cn": "A：你已經很忙了，為什麼每個星期五下午還花這麼多時間陪新實習生？ B：我想幫助他們【培養】很強的簡報能力，因為許多年輕員工對在會議中發言感到緊張，而跟有耐心的主管練習能建立他們的自信。"
  },
  {
    "word": "dream",
    "pos": "n.",
    "cn_def": "夢想",
    "en_def": "something you hope to do or have in the future",
    "sentence": "A: Why did your assistant ask to leave the company at the end of the month, since she just got a pay raise? B: Her {{BLANK}} has always been to open a small café near the university, and her parents finally agreed to lend her the money she needs to rent a shop.",
    "cn": "A：你的助理剛加薪，為什麼還要求在月底離職？ B：她的【夢想】一直是在大學附近開一間小咖啡館，而她的父母終於同意借她租店面所需要的錢。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的；有創造力的",
    "en_def": "good at thinking of new and original ideas",
    "sentence": "A: Why did the manager put the youngest designer in charge of the new snack packaging, instead of someone more experienced? B: She is very {{BLANK}} and always comes up with fresh ideas, and her last package design for our juice brand helped sales increase by twenty percent in three months.",
    "cn": "A：為什麼經理讓最年輕的設計師負責新的零食包裝，而不是更有經驗的人？ B：她非常【有創意】，總是想出新鮮的點子，而且她上次替我們果汁品牌做的包裝設計在三個月內讓銷售額增加了百分之二十。"
  },
  {
    "word": "energetic",
    "pos": "adj.",
    "cn_def": "精力充沛的；充滿活力的",
    "en_def": "having a lot of energy and enthusiasm",
    "sentence": "A: What kind of person are we looking for to lead the children's activities at the summer sports camp? B: We need someone who is friendly, patient, and {{BLANK}}, because the leader will be running, playing games, and organizing events outdoors from eight in the morning until five in the afternoon.",
    "cn": "A：我們在找什麼樣的人來帶領夏季運動營的兒童活動？ B：我們需要一個友善、有耐心又【精力充沛】的人，因為帶領者要從早上八點到下午五點在戶外跑步、玩遊戲並籌辦活動。"
  },
  {
    "word": "curious",
    "pos": "adj.",
    "cn_def": "好奇的；求知慾強的",
    "en_def": "wanting to know or learn about something",
    "sentence": "A: Why does the museum plan to add touch screens and hands-on games to the science section next year? B: Children are naturally {{BLANK}} about how things work, so the director thinks interactive displays will keep young visitors interested longer and bring more families on weekends.",
    "cn": "A：為什麼博物館計畫明年在科學區加入觸控螢幕和動手操作的遊戲？ B：孩子天生就對事物如何運作感到【好奇】，所以館長認為互動式展示能讓年輕參觀者保持興趣更久，並在週末吸引更多家庭。"
  },
  {
    "word": "ambitious",
    "pos": "adj.",
    "cn_def": "有雄心的；有抱負的",
    "en_def": "having a strong wish to be successful",
    "sentence": "A: Why did the young sales assistant ask the manager for extra training and more difficult customers this month? B: He is very {{BLANK}} and wants to become a team leader within two years, so he is trying to learn every part of the business as quickly as possible.",
    "cn": "A：為什麼那位年輕的銷售助理這個月向經理要求額外的培訓和更難應付的顧客？ B：他非常【有抱負】，想在兩年內成為團隊領導者，所以他正努力盡快學習公司業務的每一個部分。"
  },
  {
    "word": "independent",
    "pos": "adj.",
    "cn_def": "獨立的；自主的",
    "en_def": "able to do things without help from others",
    "sentence": "A: Why do you give the new graduate so few instructions on her projects, since she only joined us in March? B: She is very {{BLANK}} and prefers to solve problems on her own first, and she always asks for advice when she really needs it, so I trust her completely.",
    "cn": "A：那位新畢業生三月才加入我們，你為什麼在她的專案上給她這麼少的指示？ B：她非常【獨立】，比較喜歡先自己解決問題，而且她在真正需要的時候一定會徵詢意見，所以我完全信任她。"
  },
  {
    "word": "confident",
    "pos": "adj.",
    "cn_def": "有自信的；確信的",
    "en_def": "feeling sure about your own abilities",
    "sentence": "A: How did the new intern do when she presented the sales results to the directors this morning? B: She looked calm and {{BLANK}} the whole time, answered every difficult question clearly, and the directors were so impressed that they asked her to join the planning meeting next week.",
    "cn": "A：今天早上新實習生向董事們報告銷售成果時表現得怎麼樣？ B：她從頭到尾看起來都很冷靜又【有自信】，把每個困難的問題都回答得很清楚，董事們印象深刻，還邀請她參加下週的規劃會議。"
  },
  {
    "word": "modern",
    "pos": "adj.",
    "cn_def": "現代的；新式的",
    "en_def": "new and using the latest ideas or equipment",
    "sentence": "A: Why are so many young professionals moving into the apartment building across from our office this year? B: The building has a very {{BLANK}} design with a gym, fast internet, and shared work spaces, and it is only a five-minute walk from the subway station.",
    "cn": "A：為什麼今年有這麼多年輕上班族搬進我們辦公室對面的公寓大樓？ B：這棟大樓有非常【現代】的設計，附有健身房、高速網路和共享工作空間，而且距離地鐵站只要步行五分鐘。"
  },
  {
    "word": "social",
    "pos": "adj.",
    "cn_def": "社交的；社會的",
    "en_def": "relating to meeting and spending time with other people",
    "sentence": "A: Why does the company organize a dinner for new employees every month, since it costs quite a lot of money? B: These {{BLANK}} events help young staff from different departments get to know each other, and the managers believe that friendly relationships make teamwork much easier later.",
    "cn": "A：公司為什麼每個月都替新員工辦一次晚餐？那要花不少錢。 B：這些【社交】活動能幫助不同部門的年輕員工彼此認識，而且主管們相信友好的關係會讓日後的團隊合作容易許多。"
  },
  {
    "word": "active",
    "pos": "adj.",
    "cn_def": "積極的；活躍的",
    "en_def": "doing a lot of things; busy and involved",
    "sentence": "A: Why did the manager choose Lisa to represent our department on the new environmental committee? B: She has been very {{BLANK}} in the company volunteer club since she joined, and she organized the beach cleanup last spring, so everyone agreed she was the best person for the job.",
    "cn": "A：為什麼經理選麗莎代表我們部門參加新的環境委員會？ B：她自從加入公司以來在志工社一直非常【積極】，而且她去年春天籌辦了淨灘活動，所以大家都同意她是最適合這份工作的人。"
  },
  {
    "word": "quickly",
    "pos": "adv.",
    "cn_def": "快速地；迅速地",
    "en_def": "at a fast speed; in a short time",
    "sentence": "A: How is the new part-time cashier doing, since she has never worked in a supermarket before? B: She is learning the system very {{BLANK}}, and after only three days she can already handle refunds, gift cards, and the busy evening rush without asking anyone for help.",
    "cn": "A：新來的兼職收銀員表現得怎麼樣？她以前從沒在超市工作過。 B：她學系統學得非常【快】，才三天她就已經能處理退款、禮物卡和繁忙的晚間尖峰，完全不需要向任何人求助。"
  },
  {
    "word": "easily",
    "pos": "adv.",
    "cn_def": "容易地；輕易地",
    "en_def": "without difficulty",
    "sentence": "A: Why did the bank add a video chat service to its mobile app for younger customers this year? B: Many young people want to open accounts or ask questions without visiting a branch, and with video chat they can {{BLANK}} talk to an advisor from home, even late in the evening.",
    "cn": "A：銀行今年為什麼為年輕顧客在手機應用程式中加入視訊聊天服務？ B：許多年輕人想在不去分行的情況下開戶或詢問問題，有了視訊聊天，他們就能在家【輕鬆地】和理專交談，甚至在晚上很晚的時候也可以。"
  },
  {
    "word": "openly",
    "pos": "adv.",
    "cn_def": "公開地；坦率地",
    "en_def": "in an honest way, without hiding anything",
    "sentence": "A: Why do you hold a short feedback meeting with the interns at the end of every month, and what do they usually say? B: I want them to speak {{BLANK}} about any problems they have, and most of them share honest ideas about training, schedules, and how we could make their work more interesting.",
    "cn": "A：你為什麼每個月底都跟實習生開一個簡短的回饋會議？他們通常都說些什麼？ B：我希望他們【坦率地】說出遇到的任何問題，而他們大多會針對培訓、班表以及我們可以如何讓工作更有趣，分享誠實的想法。"
  },
  {
    "word": "creatively",
    "pos": "adv.",
    "cn_def": "有創意地",
    "en_def": "in a way that uses new and original ideas",
    "sentence": "A: How did the young marketing team manage to promote the new drink when the budget was cut in half? B: They used social media {{BLANK}}, asking customers to post funny photos with the bottle, and thousands of people joined the contest within two weeks without any paid advertising.",
    "cn": "A：預算被砍了一半，年輕的行銷團隊是怎麼成功推廣新飲料的？ B：他們【有創意地】運用社群媒體，邀請顧客上傳拿著瓶子的搞笑照片，兩週內就有數千人參加比賽，完全沒有花錢打廣告。"
  },
  {
    "word": "confidently",
    "pos": "adv.",
    "cn_def": "有自信地",
    "en_def": "in a way that shows you feel sure about yourself",
    "sentence": "A: Was the new sales trainee nervous when the important client from Japan visited the showroom yesterday? B: Not at all; she greeted him warmly, explained every feature of the new model {{BLANK}}, and even answered his questions about delivery times without checking her notes once.",
    "cn": "A：昨天那位重要的日本客戶來參觀展示廳時，新的銷售見習生緊張嗎？ B：一點也不，她親切地問候他，【有自信地】說明新車款的每項特色，甚至連一次筆記都沒看就回答了他關於交貨時間的問題。"
  },
  {
    "word": "actively",
    "pos": "adv.",
    "cn_def": "積極地；主動地",
    "en_def": "in a way that involves taking part and doing things",
    "sentence": "A: Why did the company start a mentoring program for staff under twenty-five years old this spring? B: The managers want young employees to {{BLANK}} take part in planning new projects, so each one now meets a senior colleague every week to share ideas and get practical advice.",
    "cn": "A：為什麼公司今年春天為二十五歲以下的員工開辦了導師計畫？ B：主管們希望年輕員工能【積極地】參與規劃新專案，所以現在每個人每週都會和一位資深同事見面，分享想法並獲得實用的建議。"
  },
  {
    "word": "enthusiastically",
    "pos": "adv.",
    "cn_def": "熱情地；熱烈地",
    "en_def": "in a way that shows great interest and excitement",
    "sentence": "A: How did the university students react when our company announced the paid summer internship at the career fair? B: They responded very {{BLANK}}, and more than two hundred students lined up at our booth to ask questions and leave their résumés before the fair closed at four.",
    "cn": "A：我們公司在就業博覽會上宣布有薪暑期實習時，大學生的反應如何？ B：他們反應非常【熱烈】，在博覽會四點結束前，有超過兩百名學生在我們的攤位前排隊詢問問題並留下履歷。"
  },
  {
    "word": "together",
    "pos": "adv.",
    "cn_def": "一起；共同",
    "en_def": "with each other; as a group",
    "sentence": "A: How did the two new interns finish the customer survey report so early, since it usually takes about two weeks? B: They worked {{BLANK}} every afternoon, with one person collecting the data and the other writing the charts, so they completed everything in just six days.",
    "cn": "A：那兩位新實習生是怎麼這麼早就完成顧客調查報告的？通常這要花大約兩週。 B：他們每天下午都【一起】工作，一個人收集資料，另一個人製作圖表，所以只花了六天就全部完成了。"
  }
];

const MCQS = [
  {
    "q": "The center offers free career advice to local _____. Many young people visit after school to ask about jobs.",
    "options": [
      "youth",
      "generation",
      "trend",
      "future"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The camera store hired a _____ for the summer. He is sixteen and works three afternoons a week.",
    "options": [
      "classmate",
      "teenager",
      "friend",
      "dream"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The new book helps parents understand an _____ who is stressed. It explains how teenagers handle pressure at school.",
    "options": [
      "generation",
      "future",
      "adolescent",
      "trend"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Every _____ must show a valid school ID card. Only then can they receive the twenty percent discount at the cinema.",
    "options": [
      "dream",
      "trend",
      "generation",
      "student"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "I met a former _____ at the trade fair yesterday. We sat next to each other in high school economics class.",
    "options": [
      "future",
      "classmate",
      "trend",
      "youth"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Please recommend our app to a _____ who might enjoy it. You will both receive a free month of service.",
    "options": [
      "friend",
      "trend",
      "future",
      "dream"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Our grandparents rarely shop online. The younger _____, however, buys almost everything through mobile phones these days.",
    "options": [
      "dream",
      "classmate",
      "teenager",
      "generation"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The magazine reports on music and fashion popular with teenagers. Its editors are experts in modern _____.",
    "options": [
      "classmate",
      "dream",
      "youth culture",
      "future"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Sales of plant-based snacks keep rising among young buyers. Analysts expect this _____ to continue next year.",
    "options": [
      "trend",
      "dream",
      "classmate",
      "friend"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The company is investing heavily in staff training. Managers believe this will secure the firm's _____ in a changing market.",
    "options": [
      "classmate",
      "teenager",
      "future",
      "trend"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "New staff will _____ how to operate the register during orientation. Training sessions begin at nine on Monday.",
    "options": [
      "explore",
      "learn",
      "develop",
      "communicate"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "She plans to _____ accounting at night school next year. Her manager has agreed to pay half of the fees.",
    "options": [
      "communicate",
      "explore",
      "develop",
      "study"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The internship lets graduates _____ several career paths. They spend two weeks in each department of the firm.",
    "options": [
      "communicate",
      "dream",
      "explore",
      "develop"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Our staff use a group chat to _____ shift changes. It is faster than calling each person one by one.",
    "options": [
      "communicate",
      "explore",
      "develop",
      "dream"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The workshop helps young managers _____ strong leadership skills. Participants practice solving real problems in small groups.",
    "options": [
      "communicate",
      "explore",
      "learn",
      "develop"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Opening her own bakery has always been her _____. She finally signed the lease for a small shop downtown.",
    "options": [
      "generation",
      "dream",
      "trend",
      "youth"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The design team needs a _____ solution to cut packaging costs. Ideas will be presented at Friday's meeting.",
    "options": [
      "creative",
      "curious",
      "energetic",
      "independent"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "We are hiring an _____ instructor for the children's summer camp. The job involves running outdoor games all day.",
    "options": [
      "curious",
      "modern",
      "energetic",
      "independent"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Young visitors are _____ about how robots work. The museum added a hands-on robotics room for them.",
    "options": [
      "social",
      "energetic",
      "modern",
      "curious"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The firm launched an _____ plan to open fifty new stores. The expansion will be completed within three years.",
    "options": [
      "curious",
      "ambitious",
      "social",
      "active"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "After getting a full-time job, Kevin became financially _____. He no longer needs help from his parents to pay rent.",
    "options": [
      "curious",
      "social",
      "independent",
      "modern"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Jenny feels _____ about the job interview tomorrow. She has prepared answers to all the common questions.",
    "options": [
      "confident",
      "curious",
      "modern",
      "social"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The bank moved into a _____ office building last spring. It has fast elevators and energy-saving lighting.",
    "options": [
      "curious",
      "modern",
      "confident",
      "independent"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The hotel posts photos of its rooms on several _____ media platforms. This helps it attract younger travelers.",
    "options": [
      "curious",
      "confident",
      "active",
      "social"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Employees are encouraged to take an _____ part in the volunteer program. Last year, over a hundred staff joined.",
    "options": [
      "active",
      "curious",
      "confident",
      "modern"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Customers who report a problem expect us to respond _____. Our goal is to reply to every email within one hour.",
    "options": [
      "openly",
      "creatively",
      "quickly",
      "together"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The new office can be _____ reached by subway. The station is just two minutes away on foot.",
    "options": [
      "openly",
      "enthusiastically",
      "creatively",
      "easily"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The manager encouraged everyone to discuss the problem _____. No one would be blamed for sharing honest opinions.",
    "options": [
      "quickly",
      "openly",
      "easily",
      "confidently"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The two departments worked _____ on the product launch. As a result, the event was finished ahead of schedule.",
    "options": [
      "together",
      "openly",
      "easily",
      "enthusiastically"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "The audience applauded _____ when the young speaker finished. Many people stood up to show their excitement.",
    "options": [
      "easily",
      "openly",
      "enthusiastically",
      "quickly"
    ],
    "answer": 2,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "youth": {
    "pos": "n.",
    "en_def": "young people as a group; the time of being young",
    "cn_def": "青年；青少年時期"
  },
  "teenager": {
    "pos": "n.",
    "en_def": "a person between 13 and 19 years old",
    "cn_def": "青少年（十三至十九歲）"
  },
  "adolescent": {
    "pos": "n.",
    "en_def": "a young person who is developing from a child into an adult",
    "cn_def": "青春期的人；青少年"
  },
  "student": {
    "pos": "n.",
    "en_def": "a person who is studying at a school or university",
    "cn_def": "學生"
  },
  "classmate": {
    "pos": "n.",
    "en_def": "a person in the same class at school",
    "cn_def": "同班同學"
  },
  "friend": {
    "pos": "n.",
    "en_def": "a person you know well and like",
    "cn_def": "朋友"
  },
  "generation": {
    "pos": "n.",
    "en_def": "all the people born and living at about the same time",
    "cn_def": "世代；一代人"
  },
  "youth culture": {
    "pos": "n.phr.",
    "en_def": "the music, fashion, and habits popular among young people",
    "cn_def": "青年文化"
  },
  "trend": {
    "pos": "n.",
    "en_def": "a general change or development in the way people behave",
    "cn_def": "趨勢；潮流"
  },
  "future": {
    "pos": "n.",
    "en_def": "the time that will come after now",
    "cn_def": "未來；將來"
  },
  "learn": {
    "pos": "v.",
    "en_def": "to get knowledge or a new skill",
    "cn_def": "學習；學會"
  },
  "study": {
    "pos": "v.",
    "en_def": "to spend time learning about a subject",
    "cn_def": "讀書；研讀；學習"
  },
  "explore": {
    "pos": "v.",
    "en_def": "to travel around or look at something to learn about it",
    "cn_def": "探索；探究"
  },
  "communicate": {
    "pos": "v.",
    "en_def": "to share information or ideas with other people",
    "cn_def": "溝通；傳達"
  },
  "develop": {
    "pos": "v.",
    "en_def": "to grow or improve something over time",
    "cn_def": "發展；培養"
  },
  "dream": {
    "pos": "n.",
    "en_def": "something you hope to do or have in the future",
    "cn_def": "夢想"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "good at thinking of new and original ideas",
    "cn_def": "有創意的；有創造力的"
  },
  "energetic": {
    "pos": "adj.",
    "en_def": "having a lot of energy and enthusiasm",
    "cn_def": "精力充沛的；充滿活力的"
  },
  "curious": {
    "pos": "adj.",
    "en_def": "wanting to know or learn about something",
    "cn_def": "好奇的；求知慾強的"
  },
  "ambitious": {
    "pos": "adj.",
    "en_def": "having a strong wish to be successful",
    "cn_def": "有雄心的；有抱負的"
  },
  "independent": {
    "pos": "adj.",
    "en_def": "able to do things without help from others",
    "cn_def": "獨立的；自主的"
  },
  "confident": {
    "pos": "adj.",
    "en_def": "feeling sure about your own abilities",
    "cn_def": "有自信的；確信的"
  },
  "modern": {
    "pos": "adj.",
    "en_def": "new and using the latest ideas or equipment",
    "cn_def": "現代的；新式的"
  },
  "social": {
    "pos": "adj.",
    "en_def": "relating to meeting and spending time with other people",
    "cn_def": "社交的；社會的"
  },
  "active": {
    "pos": "adj.",
    "en_def": "doing a lot of things; busy and involved",
    "cn_def": "積極的；活躍的"
  },
  "quickly": {
    "pos": "adv.",
    "en_def": "at a fast speed; in a short time",
    "cn_def": "快速地；迅速地"
  },
  "easily": {
    "pos": "adv.",
    "en_def": "without difficulty",
    "cn_def": "容易地；輕易地"
  },
  "openly": {
    "pos": "adv.",
    "en_def": "in an honest way, without hiding anything",
    "cn_def": "公開地；坦率地"
  },
  "creatively": {
    "pos": "adv.",
    "en_def": "in a way that uses new and original ideas",
    "cn_def": "有創意地"
  },
  "confidently": {
    "pos": "adv.",
    "en_def": "in a way that shows you feel sure about yourself",
    "cn_def": "有自信地"
  },
  "actively": {
    "pos": "adv.",
    "en_def": "in a way that involves taking part and doing things",
    "cn_def": "積極地；主動地"
  },
  "enthusiastically": {
    "pos": "adv.",
    "en_def": "in a way that shows great interest and excitement",
    "cn_def": "熱情地；熱烈地"
  },
  "together": {
    "pos": "adv.",
    "en_def": "with each other; as a group",
    "cn_def": "一起；共同"
  }
};

const EXTRA_GLOSSES = {};
