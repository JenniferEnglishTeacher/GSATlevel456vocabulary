// Topic 256 Quiz Data: Networking 網路社交
// Source word list: https://www.examword.com/group-topic/networking — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T256 - Networking 網路社交",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "browse",
    "pos": "v.",
    "cn_def": "瀏覽",
    "en_def": "to look through information or websites in a casual way",
    "sentence": "A: What do you usually do on the train during your long commute to the office every morning, since you said reading books makes you feel sick? B: I usually {{BLANK}} industry news websites and professional social media pages on my phone, so by the time I arrive at work I already know the latest updates about our competitors.",
    "cn": "A：既然你說看書會讓你頭暈，那你每天早上搭火車長途通勤到辦公室時，通常都做些什麼？ B：我通常會用手機【瀏覽】產業新聞網站和專業社群媒體頁面，所以等我到公司時，就已經知道競爭對手的最新消息了。"
  },
  {
    "word": "resist",
    "pos": "v.",
    "cn_def": "抗拒；忍住",
    "en_def": "to stop yourself from doing something you want to do",
    "sentence": "A: You look really tired today, so did you stay up late again checking messages from the online marketing group you joined last month? B: Yes, I find it very hard to {{BLANK}} reading every new comment when my phone lights up at night, so I have decided to turn off notifications after ten o'clock from now on.",
    "cn": "A：你今天看起來好累，你是不是又熬夜查看上個月加入的線上行銷群組的訊息了？ B：是啊，晚上手機一亮，我就很難【忍住】不去看每一則新留言，所以我決定從現在開始晚上十點以後關掉通知。"
  },
  {
    "word": "temptation",
    "pos": "n.",
    "cn_def": "誘惑",
    "en_def": "a strong wish to do something, often something you should not do",
    "sentence": "A: Why did the manager ask everyone to leave their phones in the lockers before the important planning workshop started this morning? B: She said the {{BLANK}} to check social media during long meetings is too strong for most people, and last time several team members missed key points because they were reading posts instead of listening.",
    "cn": "A：為什麼經理在今天早上重要的規劃研習開始前，要求大家把手機放進置物櫃？ B：她說在冗長的會議中查看社群媒體的【誘惑】對大多數人來說太強了，上次就有好幾位組員因為在看貼文而沒有專心聽，錯過了重點。"
  },
  {
    "word": "take up",
    "pos": "v.phr.",
    "cn_def": "開始從事（嗜好、活動）；佔用（時間、空間）",
    "en_def": "to start doing a new activity or hobby; to use space or time",
    "sentence": "A: Since you spend less time on social media these days, what do you do in the evenings after you finish work and have dinner with your family? B: I decided to {{BLANK}} photography with a group of coworkers, and we meet every Thursday evening to walk around the city, snap photos, and share tips with each other.",
    "cn": "A：既然你最近花在社群媒體上的時間變少了，那你下班和家人吃完晚餐後，晚上都做些什麼？ B：我決定和幾位同事一起【開始學】攝影，我們每週四晚上會在市區散步、拍照，並互相分享技巧。"
  },
  {
    "word": "particularly",
    "pos": "adv.",
    "cn_def": "特別地；尤其",
    "en_def": "more than usual; especially",
    "sentence": "A: Did the new employees enjoy the online networking event that the human resources department organized for them last Friday afternoon? B: Yes, they were {{BLANK}} interested in the small group chats with senior managers, because they could ask questions about career paths and get useful advice without feeling nervous.",
    "cn": "A：新進員工喜歡人資部上週五下午為他們舉辦的線上交流活動嗎？ B：喜歡，他們【特別】對與資深主管的小組聊天感興趣，因為他們可以詢問職涯發展的問題，並在不緊張的情況下得到實用的建議。"
  },
  {
    "word": "establish",
    "pos": "v.",
    "cn_def": "建立；設立",
    "en_def": "to start or create something that will last",
    "sentence": "A: How did your small bakery get so many new customers in such a short time after it opened downtown last spring? B: We worked hard to {{BLANK}} a strong presence online by posting photos of fresh bread every morning, answering questions quickly, and offering discounts to people who shared our posts with their friends.",
    "cn": "A：你們的小麵包店去年春天在市中心開幕後，怎麼能在這麼短的時間內吸引這麼多新顧客？ B：我們努力在網路上【建立】強大的存在感，每天早上張貼新鮮麵包的照片、快速回答問題，並提供折扣給把我們貼文分享給朋友的人。"
  },
  {
    "word": "social platform",
    "pos": "n.phr.",
    "cn_def": "社群平台",
    "en_def": "a website or app where people share posts and talk to each other",
    "sentence": "A: Where should we advertise the new summer internship program if we want to reach as many university students as possible before the deadline next month? B: I think we should post it on a popular {{BLANK}} that students check every day, because most young people now find job information there instead of reading newspapers or visiting company websites.",
    "cn": "A：如果我們想在下個月截止日之前接觸到越多大學生越好，應該在哪裡宣傳新的暑期實習計畫？ B：我認為我們應該張貼在學生每天都會查看的熱門【社群平台】上，因為現在大多數年輕人都是在那裡找工作資訊，而不是看報紙或瀏覽公司網站。"
  },
  {
    "word": "privacy",
    "pos": "n.",
    "cn_def": "隱私",
    "en_def": "the right to keep your personal life and information to yourself",
    "sentence": "A: Why did the IT department ask all staff to change their profile settings on the company's online community page this week? B: They want to protect our {{BLANK}}, because some people outside the company were able to see employees' phone numbers and home addresses, which could easily lead to scams or other security problems.",
    "cn": "A：為什麼資訊部這週要求所有員工更改公司線上社群頁面上的個人檔案設定？ B：他們想保護我們的【隱私】，因為有些公司外部的人能看到員工的電話號碼和住家地址，這很容易導致詐騙或其他安全問題。"
  },
  {
    "word": "cyber bullying",
    "pos": "n.phr.",
    "cn_def": "網路霸凌",
    "en_def": "hurting or scaring someone by sending cruel messages online",
    "sentence": "A: What was the main topic of the training session for the customer service team that you attended yesterday afternoon? B: It was about how to deal with {{BLANK}}, because some angry customers have been posting cruel comments about our staff online, and the company wants everyone to know how to report it and stay calm.",
    "cn": "A：你昨天下午參加的客服團隊訓練課程主題是什麼？ B：是關於如何處理【網路霸凌】，因為有些憤怒的顧客一直在網路上發表針對我們員工的惡毒留言，公司希望大家知道如何檢舉並保持冷靜。"
  },
  {
    "word": "excessive",
    "pos": "adj.",
    "cn_def": "過度的；過多的",
    "en_def": "much more than is normal or needed",
    "sentence": "A: Why did the doctor at the company health check tell you to change your daily habits and get more exercise after work? B: She said my {{BLANK}} use of my phone and laptop late at night was causing headaches and poor sleep, so she suggested I put my devices away at least one hour before bed.",
    "cn": "A：為什麼公司健康檢查的醫生要你改變日常習慣，下班後多運動？ B：她說我深夜【過度】使用手機和筆電導致頭痛和睡眠不佳，所以她建議我至少在睡前一小時把裝置收起來。"
  },
  {
    "word": "diminish",
    "pos": "v.",
    "cn_def": "減少；降低",
    "en_def": "to become or make something smaller or weaker",
    "sentence": "A: Are you worried that working from home every day will hurt your relationships with the people in other departments? B: A little, because I think video calls can {{BLANK}} the friendly feeling we get from chatting in the kitchen, so I try to visit the office at least twice a month to have lunch with my colleagues.",
    "cn": "A：你會擔心每天在家工作會影響你和其他部門同事的關係嗎？ B：有一點，因為我覺得視訊通話可能會【減少】我們在茶水間聊天時產生的親切感，所以我盡量每個月至少進辦公室兩次，和同事一起吃午餐。"
  },
  {
    "word": "cement",
    "pos": "v.",
    "cn_def": "鞏固；加強（關係）",
    "en_def": "to make a relationship or agreement stronger",
    "sentence": "A: Why is the sales director flying to Singapore next week when we already signed the contract with that supplier by email? B: He wants to {{BLANK}} the partnership by meeting their managers in person, having dinner together, and discussing future projects, because strong personal relationships usually make business much smoother in the long term.",
    "cn": "A：既然我們已經透過電子郵件和那家供應商簽好合約了，為什麼業務總監下週還要飛去新加坡？ B：他想親自和對方的經理們見面、一起吃晚餐並討論未來的計畫，以【鞏固】雙方的合作關係，因為良好的人際關係通常會讓長期合作更加順利。"
  },
  {
    "word": "caution",
    "pos": "n.",
    "cn_def": "謹慎；小心",
    "en_def": "great care to avoid danger or mistakes",
    "sentence": "A: Should I accept the friend request from that recruiter who says she can find me a high-paying job overseas? B: You should use {{BLANK}} before sharing any personal information with her, because there have been many fake job offers online recently, so check her company website and ask the human resources office for advice first.",
    "cn": "A：那位說能幫我找到高薪海外工作的招募人員傳來好友邀請，我應該接受嗎？ B：在和她分享任何個人資料之前，你應該要【謹慎】，因為最近網路上有很多假的工作機會，所以先查看她公司的網站，並向人資辦公室請教意見。"
  },
  {
    "word": "seek",
    "pos": "v.",
    "cn_def": "尋求；尋找",
    "en_def": "to try to find or get something",
    "sentence": "A: What did you do when you felt lost during your first few months as a new manager at the branch office? B: I decided to {{BLANK}} advice from experienced leaders through an online professional group, and several of them kindly shared practical tips about managing people, solving conflicts, and planning team schedules.",
    "cn": "A：你剛到分公司擔任新主管的頭幾個月，感到迷惘時是怎麼做的？ B：我決定透過一個線上專業社群向有經驗的主管【尋求】建議，其中好幾位很熱心地分享了管理人員、解決衝突和安排團隊行程的實用技巧。"
  },
  {
    "word": "mutual",
    "pos": "adj.",
    "cn_def": "共同的；互相的",
    "en_def": "shared by two or more people",
    "sentence": "A: How did you meet the designer who created the new logo and website for our travel agency last year? B: We were introduced by a {{BLANK}} friend at a business conference in Taipei, and after chatting about our projects for an hour, we realized we had similar ideas, so we decided to work together.",
    "cn": "A：你是怎麼認識去年為我們旅行社設計新標誌和網站的那位設計師的？ B：我們是在台北的一場商務研討會上經由一位【共同的】朋友介紹認識的，聊了一小時彼此的專案後，發現我們想法相近，所以決定一起合作。"
  },
  {
    "word": "insecure",
    "pos": "adj.",
    "cn_def": "沒有安全感的；缺乏自信的",
    "en_def": "not confident about yourself or your abilities",
    "sentence": "A: Why does your assistant spend so much time checking how many people liked her posts during lunch break every day? B: I think she feels {{BLANK}} about her work since she joined the team, so she looks for approval online, and I plan to give her more positive feedback to help her feel more confident.",
    "cn": "A：為什麼你的助理每天午休時都花那麼多時間查看自己的貼文有多少人按讚？ B：我覺得她自從加入團隊以來就對自己的工作感到【沒有自信】，所以會在網路上尋求認同，我打算多給她一些正面回饋，幫助她更有自信。"
  },
  {
    "word": "time-consuming",
    "pos": "adj.",
    "cn_def": "耗時的；費時的",
    "en_def": "needing a lot of time",
    "sentence": "A: Why did our marketing team hire a part-time assistant to manage the company's online accounts last month? B: Replying to every customer message and creating new posts every day was too {{BLANK}} for the team, and they needed more hours to focus on planning the big product launch in December.",
    "cn": "A：為什麼我們的行銷團隊上個月要聘請一位兼職助理來管理公司的網路帳號？ B：每天回覆每一則顧客訊息並發布新貼文對團隊來說太【耗時】了，他們需要更多時間專心籌備十二月的大型產品發表會。"
  }
];

const MCQS = [
  {
    "q": "Many shoppers like to _____ products online before visiting the store. This helps them compare prices quickly.",
    "options": [
      "browse",
      "resist",
      "cement",
      "diminish"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The new snack machine is right next to my desk. It is hard to _____ buying chocolate every afternoon.",
    "options": [
      "browse",
      "resist",
      "establish",
      "seek"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Working from home brings the _____ to watch TV during office hours. Clear daily goals can help you stay focused.",
    "options": [
      "privacy",
      "caution",
      "temptation",
      "cyber bullying"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "After retiring from the bank, my uncle decided to _____ painting. He now attends a weekly class at the community center.",
    "options": [
      "diminish",
      "cement",
      "establish",
      "take up"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The new software is _____ helpful for staff who travel often. It lets them join meetings from any location.",
    "options": [
      "rarely",
      "particularly",
      "barely",
      "formerly"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The company hopes to _____ an office in Vietnam next year. This will help it serve customers across Southeast Asia.",
    "options": [
      "establish",
      "browse",
      "resist",
      "diminish"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Our team posts short videos on a popular _____ every week. The videos help us reach younger customers.",
    "options": [
      "cyber bullying",
      "temptation",
      "caution",
      "social platform"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Please knock before entering the manager's office. She values her _____ when she makes calls to clients.",
    "options": [
      "temptation",
      "cyber bullying",
      "privacy",
      "social platform"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The school held a workshop for parents about _____. Experts explained how to spot cruel messages sent to children online.",
    "options": [
      "cyber bullying",
      "temptation",
      "caution",
      "social platform"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The hotel guest complained about the _____ noise from the party next door. He could not sleep until three in the morning.",
    "options": [
      "mutual",
      "excessive",
      "insecure",
      "time-consuming"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Regular breaks can _____ stress during busy weeks. Employees who rest for a few minutes often work better.",
    "options": [
      "browse",
      "seek",
      "diminish",
      "cement"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The two firms signed a long-term deal last month. The agreement will _____ their partnership for many years.",
    "options": [
      "browse",
      "resist",
      "take up",
      "cement"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Drivers should use extra _____ on mountain roads in heavy rain. Several accidents happened there last winter.",
    "options": [
      "privacy",
      "caution",
      "temptation",
      "cyber bullying"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "If you have questions about your contract, please _____ help from the legal department. They answer emails within one day.",
    "options": [
      "seek",
      "browse",
      "resist",
      "cement"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The partnership was based on _____ respect between the two owners. Both sides trusted each other completely.",
    "options": [
      "excessive",
      "insecure",
      "time-consuming",
      "mutual"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "New employees often feel _____ during their first week. A friendly mentor can help them build confidence.",
    "options": [
      "mutual",
      "excessive",
      "insecure",
      "time-consuming"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Checking every invoice by hand is very _____. The new system will finish the job in minutes.",
    "options": [
      "time-consuming",
      "mutual",
      "insecure",
      "excessive"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Visitors can _____ our online catalog at any time. New items are added every Monday morning.",
    "options": [
      "resist",
      "browse",
      "diminish",
      "take up"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The manager could not _____ the offer of a free upgrade. She moved to business class for the long flight.",
    "options": [
      "browse",
      "cement",
      "resist",
      "establish"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Sales staff should avoid the _____ to promise delivery dates they cannot meet. Unhappy customers rarely return.",
    "options": [
      "caution",
      "privacy",
      "social platform",
      "temptation"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Large desks _____ too much space in our small office. We plan to buy smaller ones next month.",
    "options": [
      "seek",
      "take up",
      "cement",
      "browse"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Sales were strong this year, _____ in the second quarter. The new product line was very popular with families.",
    "options": [
      "particularly",
      "hardly",
      "rarely",
      "barely"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The researchers worked hard to _____ the cause of the delay. They found a problem in the shipping software.",
    "options": [
      "resist",
      "cement",
      "browse",
      "establish"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The clinic keeps patient records in a locked room. This protects the _____ of everyone who visits.",
    "options": [
      "temptation",
      "caution",
      "privacy",
      "cyber bullying"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The report warned that _____ overtime can lead to mistakes. Staff should not work more than ten extra hours a week.",
    "options": [
      "excessive",
      "mutual",
      "insecure",
      "time-consuming"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The bad reviews did not _____ the restaurant's popularity. It was still full every night last month.",
    "options": [
      "seek",
      "diminish",
      "browse",
      "resist"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The sign on the door says to handle the boxes with _____. They contain glass items for the hotel.",
    "options": [
      "privacy",
      "temptation",
      "caution",
      "social platform"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The startup plans to _____ funding from investors this spring. It needs money to hire more engineers.",
    "options": [
      "browse",
      "resist",
      "diminish",
      "seek"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The two companies reached a _____ agreement after long talks. Both sides were happy with the final terms.",
    "options": [
      "insecure",
      "mutual",
      "excessive",
      "time-consuming"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Planning a large conference is a _____ process. Our team started booking speakers eight months ago.",
    "options": [
      "time-consuming",
      "mutual",
      "insecure",
      "excessive"
    ],
    "answer": 0,
    "vocabIndex": 16
  }
];

const LOOKUP = {
  "browse": {
    "pos": "v.",
    "en_def": "to look through information or websites in a casual way",
    "cn_def": "瀏覽"
  },
  "resist": {
    "pos": "v.",
    "en_def": "to stop yourself from doing something you want to do",
    "cn_def": "抗拒；忍住"
  },
  "temptation": {
    "pos": "n.",
    "en_def": "a strong wish to do something, often something you should not do",
    "cn_def": "誘惑"
  },
  "take up": {
    "pos": "v.phr.",
    "en_def": "to start doing a new activity or hobby; to use space or time",
    "cn_def": "開始從事（嗜好、活動）；佔用（時間、空間）"
  },
  "particularly": {
    "pos": "adv.",
    "en_def": "more than usual; especially",
    "cn_def": "特別地；尤其"
  },
  "establish": {
    "pos": "v.",
    "en_def": "to start or create something that will last",
    "cn_def": "建立；設立"
  },
  "social platform": {
    "pos": "n.phr.",
    "en_def": "a website or app where people share posts and talk to each other",
    "cn_def": "社群平台"
  },
  "privacy": {
    "pos": "n.",
    "en_def": "the right to keep your personal life and information to yourself",
    "cn_def": "隱私"
  },
  "cyber bullying": {
    "pos": "n.phr.",
    "en_def": "hurting or scaring someone by sending cruel messages online",
    "cn_def": "網路霸凌"
  },
  "excessive": {
    "pos": "adj.",
    "en_def": "much more than is normal or needed",
    "cn_def": "過度的；過多的"
  },
  "diminish": {
    "pos": "v.",
    "en_def": "to become or make something smaller or weaker",
    "cn_def": "減少；降低"
  },
  "cement": {
    "pos": "v.",
    "en_def": "to make a relationship or agreement stronger",
    "cn_def": "鞏固；加強（關係）"
  },
  "caution": {
    "pos": "n.",
    "en_def": "great care to avoid danger or mistakes",
    "cn_def": "謹慎；小心"
  },
  "seek": {
    "pos": "v.",
    "en_def": "to try to find or get something",
    "cn_def": "尋求；尋找"
  },
  "mutual": {
    "pos": "adj.",
    "en_def": "shared by two or more people",
    "cn_def": "共同的；互相的"
  },
  "insecure": {
    "pos": "adj.",
    "en_def": "not confident about yourself or your abilities",
    "cn_def": "沒有安全感的；缺乏自信的"
  },
  "time-consuming": {
    "pos": "adj.",
    "en_def": "needing a lot of time",
    "cn_def": "耗時的；費時的"
  }
};

const EXTRA_GLOSSES = {};
