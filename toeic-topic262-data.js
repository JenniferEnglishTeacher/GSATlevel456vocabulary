// Topic 262 Quiz Data: Old People 老年人
// Source word list: https://www.examword.com/group-topic/old-people — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T262 - Old People 老年人",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "elderly",
    "pos": "adj.",
    "cn_def": "年長的；上了年紀的",
    "en_def": "old; past middle age",
    "sentence": "A: Why is the bank opening a special service counter on the first floor of the downtown branch next month? B: Many {{BLANK}} customers find the online system confusing and the stairs difficult, so the manager wants staff to help them with forms and payments in a quiet, comfortable area.",
    "cn": "A：為什麼銀行下個月要在市中心分行一樓開設特別服務櫃檯？ B：許多【年長的】顧客覺得線上系統令人困惑，而且爬樓梯很吃力，所以經理希望員工能在安靜舒適的區域協助他們填寫表格和付款。"
  },
  {
    "word": "senior",
    "pos": "adj.",
    "cn_def": "年長的；銀髮族的",
    "en_def": "older; for people over about 65",
    "sentence": "A: Have you seen the new ticket prices for the city museum that were posted on the website this morning? B: Yes, adults now pay twelve dollars, but {{BLANK}} visitors over sixty-five get half price on weekdays, so I will take my grandfather there next Tuesday afternoon after lunch.",
    "cn": "A：你有看到今天早上公布在網站上的市立博物館新票價嗎？ B：有，成人現在要付十二美元，但六十五歲以上的【年長】參觀者平日可享半價，所以我下週二午餐後要帶我祖父去那裡。"
  },
  {
    "word": "aged",
    "pos": "adj.",
    "cn_def": "……歲的；年齡為……的",
    "en_def": "having a particular age",
    "sentence": "A: What kind of people is the marketing team hoping to reach with the new health drink that launches in the spring? B: The survey showed that customers {{BLANK}} between fifty and seventy care most about energy and sleep, so our advertisements will appear in magazines and on morning radio programs.",
    "cn": "A：行銷團隊希望新的健康飲料在春季上市時能接觸到什麼樣的人？ B：調查顯示【年齡】在五十到七十歲之間的顧客最在意精力和睡眠，所以我們的廣告會出現在雜誌和早晨的廣播節目中。"
  },
  {
    "word": "retired",
    "pos": "adj.",
    "cn_def": "退休的",
    "en_def": "no longer working because of age",
    "sentence": "A: Who is going to teach the free accounting workshop at the community center while our regular instructor is away on vacation? B: A {{BLANK}} bank manager who lives nearby has offered to lead the classes, because she has plenty of free time now and enjoys sharing her knowledge with young people.",
    "cn": "A：我們的固定講師去度假時，誰要來教社區中心的免費會計工作坊？ B：一位住在附近的【退休】銀行經理主動提議帶課，因為她現在有很多空閒時間，也喜歡和年輕人分享她的知識。"
  },
  {
    "word": "pensioner",
    "pos": "n.",
    "cn_def": "領養老金的人；退休金領取者",
    "en_def": "a person who receives money from a pension",
    "sentence": "A: Why did the local supermarket decide to open an hour earlier every Wednesday starting this month? B: The owner noticed that many older shoppers prefer quiet stores, so each {{BLANK}} can now shop calmly from seven to eight and receive a ten percent discount on fresh fruit and vegetables.",
    "cn": "A：為什麼當地超市決定從這個月開始每週三提早一小時開門？ B：老闆注意到許多年長顧客喜歡安靜的店面，所以每位【領養老金的人】現在都能在七點到八點之間從容購物，並享有新鮮蔬果九折優惠。"
  },
  {
    "word": "grandparent",
    "pos": "n.",
    "cn_def": "祖父母；外祖父母",
    "en_def": "the parent of your father or mother",
    "sentence": "A: Why are so many employees asking for the afternoon off on the last Friday of this month? B: The local primary school is holding a special event where every child invites a {{BLANK}} to class, so many of our staff want to drive their parents there and watch the children's performance.",
    "cn": "A：為什麼這個月最後一個星期五有這麼多員工請下午假？ B：當地小學要舉辦一個特別活動，每個孩子都要邀請一位【祖父母】到班上，所以我們許多員工想開車載他們的父母去那裡看孩子們的表演。"
  },
  {
    "word": "wisdom",
    "pos": "n.",
    "cn_def": "智慧",
    "en_def": "good judgment that comes from knowledge and age",
    "sentence": "A: Why did the company invite the founder back to speak at the leadership training even though he left the business ten years ago? B: He made many difficult decisions during the economic crisis, and the new managers can learn a lot from his {{BLANK}} about handling stress, people, and money carefully.",
    "cn": "A：為什麼公司邀請創辦人回來在領導培訓中演講，即使他十年前就離開公司了？ B：他在經濟危機期間做過許多艱難的決定，新任經理們可以從他在謹慎處理壓力、人事和金錢方面的【智慧】中學到很多。"
  },
  {
    "word": "experience",
    "pos": "n.",
    "cn_def": "經驗",
    "en_def": "knowledge or skill you get from doing something",
    "sentence": "A: Why did the hiring committee choose the older candidate instead of the younger applicant who has a master's degree? B: She has twenty years of {{BLANK}} managing hotels in three different countries, so the committee believes she can solve problems quickly and train our new front desk team very well.",
    "cn": "A：為什麼招聘委員會選擇了年長的候選人，而不是擁有碩士學位的年輕應徵者？ B：她有在三個不同國家管理飯店二十年的【經驗】，所以委員會相信她能迅速解決問題，並把我們新的櫃檯團隊訓練得很好。"
  },
  {
    "word": "frail",
    "pos": "adj.",
    "cn_def": "虛弱的；衰弱的",
    "en_def": "weak and thin, usually because of old age",
    "sentence": "A: Is your grandmother still planning to join the family trip to Japan in December with all of your cousins? B: Unfortunately, she has become quite {{BLANK}} since her fall last winter, so the doctor suggested she stay home and rest instead of walking long distances through busy airports and train stations.",
    "cn": "A：你的祖母還打算十二月和你所有表兄弟姊妹一起參加家族的日本之旅嗎？ B：很遺憾，她自從去年冬天跌倒後就變得相當【虛弱】，所以醫生建議她待在家裡休息，而不要在繁忙的機場和火車站長距離走路。"
  },
  {
    "word": "lonely",
    "pos": "adj.",
    "cn_def": "寂寞的；孤單的",
    "en_def": "sad because you have no friends or company",
    "sentence": "A: Why did the volunteer group start calling older residents in the neighborhood every evening after dinner? B: Many of them live alone after their children moved to other cities for work, and they often feel {{BLANK}}, so a short friendly conversation each day really improves their mood and health.",
    "cn": "A：為什麼志工團體開始每天晚餐後打電話給社區裡的年長居民？ B：許多人在孩子搬到其他城市工作後獨自生活，常常覺得【寂寞】，所以每天一段簡短友善的談話確實能改善他們的心情和健康。"
  },
  {
    "word": "independent",
    "pos": "adj.",
    "cn_def": "獨立的；自立的",
    "en_def": "able to do things without help from others",
    "sentence": "A: Why does your father refuse to move into your house even though he is almost eighty years old now? B: He wants to stay {{BLANK}} as long as possible, so he still cooks his own meals, takes the bus to the market, and manages all his bills without asking anyone for help.",
    "cn": "A：為什麼你父親都快八十歲了，還是拒絕搬到你家住？ B：他想盡可能保持【獨立】，所以他仍然自己煮飯、搭公車去市場，並且自己處理所有帳單，不需要請任何人幫忙。"
  },
  {
    "word": "caregiver",
    "pos": "n.",
    "cn_def": "照顧者；看護",
    "en_def": "a person who looks after someone who is old or sick",
    "sentence": "A: How does Ms. Chen manage to work full-time at the office while her mother needs help at home every day? B: She hired a professional {{BLANK}} who arrives at eight each morning to prepare meals, give medicine on time, and take her mother for a short walk in the park.",
    "cn": "A：陳小姐的母親每天在家都需要協助，她是怎麼做到在辦公室全職工作的？ B：她聘請了一位專業【看護】，每天早上八點到，準備餐點、準時給藥，並帶她母親到公園散步一小段路。"
  },
  {
    "word": "nursing home",
    "pos": "n.phr.",
    "cn_def": "養老院；護理之家",
    "en_def": "a place where old people live and receive care",
    "sentence": "A: Why are the sales staff collecting books and board games in that large box near the reception desk? B: Our team is visiting a local {{BLANK}} next Saturday, and we want to give the residents something fun to do in the afternoons when their families cannot come to see them.",
    "cn": "A：為什麼業務人員在接待櫃檯旁的大箱子裡收集書本和桌遊？ B：我們團隊下週六要去拜訪當地一家【養老院】，我們想在住民的家人無法來探望時，給他們在下午做些有趣的事。"
  },
  {
    "word": "retirement",
    "pos": "n.",
    "cn_def": "退休",
    "en_def": "the time when you stop working because of age",
    "sentence": "A: Why is everyone signing that large card on the manager's desk and collecting money for flowers and a gift? B: Mr. Lin is leaving the company after thirty-five years, so we are holding a {{BLANK}} party for him on Friday evening at the Italian restaurant across the street.",
    "cn": "A：為什麼大家都在經理桌上那張大卡片上簽名，還在收錢買花和禮物？ B：林先生在公司服務三十五年後要離開了，所以我們週五晚上要在對街的義大利餐廳為他舉辦【退休】派對。"
  },
  {
    "word": "pension",
    "pos": "n.",
    "cn_def": "退休金；養老金",
    "en_def": "money paid regularly to a person who has stopped working",
    "sentence": "A: Why is the human resources department holding a meeting for all employees over fifty next Thursday morning? B: They want to explain the changes to the company {{BLANK}} plan, so older workers can understand how much money they will receive each month after they stop working.",
    "cn": "A：為什麼人資部門下週四早上要為五十歲以上的所有員工開會？ B：他們想說明公司【退休金】計畫的變更，讓年長員工了解停止工作後每個月能領多少錢。"
  },
  {
    "word": "mobility",
    "pos": "n.",
    "cn_def": "行動能力；活動力",
    "en_def": "the ability to move easily",
    "sentence": "A: Why did the hotel replace the steps at the main entrance with a wide, gentle ramp last month? B: Many of our older guests have limited {{BLANK}} and use wheelchairs or walking sticks, so the manager wanted everyone to enter the lobby safely and without needing help from the staff.",
    "cn": "A：為什麼飯店上個月把正門的台階換成寬緩的斜坡？ B：我們許多年長客人的【行動能力】有限，使用輪椅或拐杖，所以經理希望每個人都能安全地進入大廳，不需要員工協助。"
  },
  {
    "word": "memory",
    "pos": "n.",
    "cn_def": "記憶力；記憶",
    "en_def": "the ability to remember things",
    "sentence": "A: Why does your uncle write everything in that small notebook he always carries in his jacket pocket? B: His {{BLANK}} is not as good as it was when he was younger, so he keeps notes about appointments, phone numbers, and shopping lists to avoid forgetting important things.",
    "cn": "A：為什麼你叔叔總是把所有事情寫在外套口袋裡那本小筆記本上？ B：他的【記憶力】不像年輕時那麼好了，所以他記下約會、電話號碼和購物清單，以免忘記重要的事情。"
  },
  {
    "word": "arthritis",
    "pos": "n.",
    "cn_def": "關節炎",
    "en_def": "a disease that makes joints painful and stiff",
    "sentence": "A: Why has your neighbor stopped playing tennis at the sports center every Sunday morning with his old friends? B: He developed {{BLANK}} in his knees and hands last year, so running and holding the racket became too painful, and now he swims gently at the pool instead.",
    "cn": "A：為什麼你鄰居不再每週日早上和老朋友到運動中心打網球了？ B：他去年膝蓋和手部得了【關節炎】，所以跑步和握球拍變得太痛了，現在他改到游泳池輕鬆地游泳。"
  },
  {
    "word": "respect",
    "pos": "n.",
    "cn_def": "尊重；尊敬",
    "en_def": "a feeling that someone deserves to be treated well",
    "sentence": "A: Why do the younger staff members always listen so carefully when the head chef talks during the morning meeting? B: He has worked in famous restaurants for forty years and treats everyone fairly, so the whole kitchen team shows him great {{BLANK}} and follows his advice without complaint.",
    "cn": "A：為什麼年輕員工在晨會時總是那麼專心聽主廚說話？ B：他在知名餐廳工作了四十年，而且待人公平，所以整個廚房團隊都非常【尊敬】他，並毫無怨言地遵循他的建議。"
  },
  {
    "word": "generation",
    "pos": "n.",
    "cn_def": "世代；一代人",
    "en_def": "all the people born around the same time",
    "sentence": "A: Why is the technology company offering free smartphone classes at the public library every weekend this month? B: The older {{BLANK}} did not grow up with computers, so many of them need simple lessons on sending messages, paying bills online, and making video calls with family members.",
    "cn": "A：為什麼這家科技公司這個月每個週末都在公立圖書館提供免費智慧型手機課程？ B：較年長的【世代】不是伴隨電腦長大的，所以他們許多人需要簡單的課程，學習傳訊息、線上繳費以及和家人視訊通話。"
  },
  {
    "word": "mentor",
    "pos": "n.",
    "cn_def": "導師；良師",
    "en_def": "an experienced person who advises a less experienced person",
    "sentence": "A: How did you learn to handle difficult clients so well during your first year at the law firm? B: A partner who was close to retiring became my {{BLANK}}, and every Friday afternoon she met me for coffee to discuss my cases and give me practical advice.",
    "cn": "A：你在律師事務所的第一年是怎麼學會這麼妥善地處理難搞的客戶？ B：一位快要退休的合夥人成了我的【導師】，每週五下午她都和我喝咖啡，討論我的案件並給我實用的建議。"
  },
  {
    "word": "heritage",
    "pos": "n.",
    "cn_def": "遺產；傳統文化",
    "en_def": "traditions and history passed down from the past",
    "sentence": "A: Why is the city recording interviews with older residents who grew up in the old harbor district? B: The local government wants to protect the area's cultural {{BLANK}}, so the stories about fishing, festivals, and old shops will be shown in a new museum opening next year.",
    "cn": "A：為什麼市政府要錄製在舊港區長大的年長居民的訪談？ B：地方政府想保護這個地區的文化【遺產】，所以關於捕魚、節慶和老店舖的故事將在明年開幕的新博物館中展出。"
  },
  {
    "word": "companionship",
    "pos": "n.",
    "cn_def": "陪伴；友誼",
    "en_def": "friendly feelings from being with other people",
    "sentence": "A: Why did your aunt decide to adopt a small dog after she moved into her new apartment downtown? B: She lives by herself now and wanted some {{BLANK}} at home, and walking the dog twice a day also helps her meet neighbors and get regular exercise in the park.",
    "cn": "A：為什麼你阿姨搬進市中心的新公寓後決定領養一隻小狗？ B：她現在獨自生活，想在家裡有些【陪伴】，而且每天遛狗兩次也有助於她認識鄰居，並在公園裡規律運動。"
  },
  {
    "word": "dependent",
    "pos": "adj.",
    "cn_def": "依賴的；依靠的",
    "en_def": "needing help or support from someone else",
    "sentence": "A: Why is your grandfather moving in with your family next month instead of staying in his own house in the countryside? B: After his eye surgery, he became {{BLANK}} on others for driving, shopping, and reading letters, so my parents want him close by where they can help every day.",
    "cn": "A：為什麼你祖父下個月要搬來和你們家同住，而不是留在鄉下自己的房子？ B：他眼睛手術後，開車、購物和讀信都變得【依賴】別人，所以我父母希望他住在附近，這樣每天都能幫忙。"
  },
  {
    "word": "lifetime",
    "pos": "n.",
    "cn_def": "一生；終生",
    "en_def": "the length of time that someone lives",
    "sentence": "A: Why did the art museum name its new gallery after the woman who passed away last spring at age ninety-two? B: During her {{BLANK}}, she donated more than two hundred paintings and supported free art classes for children, so the museum wanted everyone to remember her generosity.",
    "cn": "A：為什麼美術館以去年春天以九十二歲高齡過世的那位女士來命名新展廳？ B：她【一生】中捐贈了兩百多幅畫作，並資助兒童免費美術課，所以美術館希望大家記住她的慷慨。"
  },
  {
    "word": "mature",
    "pos": "adj.",
    "cn_def": "成熟的",
    "en_def": "behaving in a sensible, adult way",
    "sentence": "A: Why did the manager ask the older sales assistant to deal with the customer who was shouting at the counter? B: He is calm and {{BLANK}}, and he always listens patiently before he explains the store's policies, so angry customers usually leave feeling satisfied after talking with him.",
    "cn": "A：為什麼經理請那位年長的銷售助理去處理在櫃檯大吼的顧客？ B：他冷靜又【成熟】，總是耐心聆聽後再解釋店裡的規定，所以生氣的顧客和他談過之後通常都滿意地離開。"
  },
  {
    "word": "resilient",
    "pos": "adj.",
    "cn_def": "有韌性的；恢復力強的",
    "en_def": "able to recover quickly from difficult situations",
    "sentence": "A: How did your grandmother manage to rebuild her small bakery after the flood destroyed the shop two years ago? B: She is very {{BLANK}}, so she borrowed money, asked her neighbors for help, and reopened within six months, and now her bread is more popular than ever before.",
    "cn": "A：你祖母兩年前店舖被洪水摧毀後，是怎麼重建她的小麵包店的？ B：她非常【有韌性】，所以她借了錢、請鄰居幫忙，六個月內就重新開業，現在她的麵包比以前更受歡迎。"
  },
  {
    "word": "veteran",
    "pos": "n.",
    "cn_def": "老手；資深人員",
    "en_def": "a person with long experience in a job or field",
    "sentence": "A: Why did the director invite Mr. Wang to join the panel at next week's industry conference in Kaohsiung? B: He is a {{BLANK}} of the shipping business with over forty years in the field, so the audience will be very interested in his views about changes in global trade.",
    "cn": "A：為什麼主任邀請王先生參加下週在高雄舉行的產業會議座談？ B：他是航運業的【老手】，在這一行超過四十年，所以聽眾會對他關於全球貿易變化的看法非常感興趣。"
  },
  {
    "word": "legacy",
    "pos": "n.",
    "cn_def": "遺產；留下的影響",
    "en_def": "something left behind by a person after they die or leave",
    "sentence": "A: Why does the company still give a scholarship every year in the name of its founder who died twenty years ago? B: Education was very important to him, and continuing the scholarship is part of his {{BLANK}}, so each year five students from poor families can attend university for free.",
    "cn": "A：為什麼公司每年仍以二十年前過世的創辦人名義頒發獎學金？ B：教育對他來說非常重要，延續這項獎學金是他留下的【遺澤】之一，所以每年有五位清寒家庭的學生能免費上大學。"
  },
  {
    "word": "dignity",
    "pos": "n.",
    "cn_def": "尊嚴",
    "en_def": "the quality of being respected and treated with honor",
    "sentence": "A: Why did the new manager change the way staff speak to residents at the care center last month? B: She believes every older person deserves to be treated with {{BLANK}}, so workers now knock before entering rooms, ask about personal choices, and never speak to residents like children.",
    "cn": "A：為什麼新任主管上個月改變了照護中心員工與住民說話的方式？ B：她認為每位長者都應該被有【尊嚴】地對待，所以員工現在進房前會敲門、詢問個人意願，而且絕不把住民當小孩說話。"
  },
  {
    "word": "care facility",
    "pos": "n.phr.",
    "cn_def": "照護機構",
    "en_def": "a building where people who need help live and get care",
    "sentence": "A: Why is the construction company building a large new structure next to the hospital on Main Street? B: The city needs a modern {{BLANK}} for older residents who cannot live alone, so the building will have private rooms, a garden, and nurses on duty twenty-four hours a day.",
    "cn": "A：為什麼建設公司要在主街的醫院旁邊蓋一棟大型新建築？ B：市政府需要一座現代化的【照護機構】，供無法獨自生活的年長居民使用，所以這棟建築會有個人房、花園，以及二十四小時值班的護理師。"
  },
  {
    "word": "life expectancy",
    "pos": "n.phr.",
    "cn_def": "平均壽命；預期壽命",
    "en_def": "the number of years a person is expected to live",
    "sentence": "A: Why are insurance companies changing their prices for health plans for customers over sixty this year? B: Because of better food and medical treatment, {{BLANK}} in our country has risen to over eighty, so people now need insurance coverage for many more years after they retire.",
    "cn": "A：為什麼保險公司今年要調整六十歲以上客戶的健康保險價格？ B：由於飲食和醫療改善，我國的【平均壽命】已超過八十歲，所以人們退休後需要保險保障的年數多了很多。"
  }
];

const MCQS = [
  {
    "q": "Many _____ residents in our town take the free shuttle bus to the clinic. It stops right outside the community center.",
    "options": [
      "elderly",
      "lonely",
      "mature",
      "independent"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The theater offers a special discount for _____ citizens on weekday afternoons. Please show your ID card at the ticket counter.",
    "options": [
      "frail",
      "senior",
      "resilient",
      "dependent"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The new fitness program is designed for adults _____ fifty and above. Classes start at nine every Monday morning.",
    "options": [
      "retired",
      "mature",
      "aged",
      "elderly"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Our company hired a _____ engineer as a part-time consultant. He left his full-time job last year but still enjoys solving problems.",
    "options": [
      "lonely",
      "frail",
      "dependent",
      "retired"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Every _____ in the city can ride public buses for free after nine in the morning. The policy started last January.",
    "options": [
      "mentor",
      "pensioner",
      "caregiver",
      "veteran"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Each _____ who attends the school's open day will receive a small gift from the students. The event begins at ten.",
    "options": [
      "grandparent",
      "heritage",
      "legacy",
      "generation"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The founder shared his _____ with the new managers at the annual dinner. Everyone listened carefully to his advice about leadership.",
    "options": [
      "mobility",
      "arthritis",
      "pension",
      "wisdom"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Applicants must have at least five years of _____ in customer service. Please attach your résumé to the online form.",
    "options": [
      "dignity",
      "companionship",
      "experience",
      "retirement"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "After the long illness, Mrs. Lee looked very _____. Her daughter now drives her to every doctor's appointment.",
    "options": [
      "frail",
      "mature",
      "independent",
      "senior"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Many older people feel _____ after their children move abroad. The volunteer group visits them twice a week.",
    "options": [
      "retired",
      "lonely",
      "aged",
      "resilient"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "My grandmother wants to remain _____ for as long as possible. She still does her own shopping and cooking every day.",
    "options": [
      "frail",
      "dependent",
      "independent",
      "lonely"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The agency trains each _____ to help older clients with meals and medicine. Training takes about three weeks to complete.",
    "options": [
      "pensioner",
      "grandparent",
      "veteran",
      "caregiver"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Our team volunteers at a local _____ once a month. We play games and read newspapers with the residents.",
    "options": [
      "life expectancy",
      "nursing home",
      "retirement",
      "heritage"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Mr. Kim is planning to take early _____ next year. He wants to spend more time traveling with his wife.",
    "options": [
      "retirement",
      "heritage",
      "wisdom",
      "generation"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Employees can check their monthly _____ payments on the company website. The amount depends on how many years they worked.",
    "options": [
      "mobility",
      "memory",
      "dignity",
      "pension"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The hotel added ramps and handrails for guests with limited _____. These changes were completed before the busy season.",
    "options": [
      "respect",
      "legacy",
      "mobility",
      "wisdom"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Playing chess every day can help older adults improve their _____. Some clinics now recommend it to their patients.",
    "options": [
      "memory",
      "pension",
      "heritage",
      "companionship"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "My uncle has _____ in both knees, so climbing stairs is painful. He now lives in a first-floor apartment.",
    "options": [
      "dignity",
      "arthritis",
      "wisdom",
      "retirement"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Young staff should show _____ to experienced colleagues. Listening to their advice can prevent many costly mistakes.",
    "options": [
      "mobility",
      "pension",
      "respect",
      "arthritis"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The museum hopes to attract the younger _____ with interactive exhibits. A new mobile app will also be released.",
    "options": [
      "companionship",
      "retirement",
      "dignity",
      "generation"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Each new employee is paired with a _____ for the first six months. This person offers guidance and answers questions.",
    "options": [
      "pensioner",
      "mentor",
      "grandparent",
      "caregiver"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The festival celebrates the town's cultural _____ with traditional music and food. Thousands of visitors attend every autumn.",
    "options": [
      "heritage",
      "mobility",
      "arthritis",
      "pension"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The program matches students with older residents for weekly _____. Both groups say they enjoy the friendly conversations.",
    "options": [
      "life expectancy",
      "retirement",
      "arthritis",
      "companionship"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "After the accident, Mr. Chen became _____ on his son for transportation. He hopes to drive again by next summer.",
    "options": [
      "resilient",
      "mature",
      "dependent",
      "senior"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The singer received a _____ achievement award at the ceremony last night. She has performed around the world for sixty years.",
    "options": [
      "lifetime",
      "legacy",
      "generation",
      "heritage"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The local economy proved _____ after the storm. Most shops reopened within two weeks of the damage.",
    "options": [
      "frail",
      "resilient",
      "dependent",
      "lonely"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Ms. Wu is a _____ of the hotel industry with thirty years in management. She will speak at the conference on Friday.",
    "options": [
      "pensioner",
      "caregiver",
      "veteran",
      "grandparent"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The scholarship is part of the founder's _____ to the community. It has helped hundreds of students attend college.",
    "options": [
      "mobility",
      "memory",
      "arthritis",
      "legacy"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Staff are trained to treat every patient with _____. They always knock and ask permission before entering a room.",
    "options": [
      "mobility",
      "dignity",
      "pension",
      "lifetime"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Average _____ in the country has risen to eighty-two years. Better health care is one of the main reasons.",
    "options": [
      "life expectancy",
      "nursing home",
      "care facility",
      "retirement"
    ],
    "answer": 0,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "elderly": {
    "pos": "adj.",
    "en_def": "old; past middle age",
    "cn_def": "年長的；上了年紀的"
  },
  "senior": {
    "pos": "adj.",
    "en_def": "older; for people over about 65",
    "cn_def": "年長的；銀髮族的"
  },
  "aged": {
    "pos": "adj.",
    "en_def": "having a particular age",
    "cn_def": "……歲的；年齡為……的"
  },
  "retired": {
    "pos": "adj.",
    "en_def": "no longer working because of age",
    "cn_def": "退休的"
  },
  "pensioner": {
    "pos": "n.",
    "en_def": "a person who receives money from a pension",
    "cn_def": "領養老金的人；退休金領取者"
  },
  "grandparent": {
    "pos": "n.",
    "en_def": "the parent of your father or mother",
    "cn_def": "祖父母；外祖父母"
  },
  "wisdom": {
    "pos": "n.",
    "en_def": "good judgment that comes from knowledge and age",
    "cn_def": "智慧"
  },
  "experience": {
    "pos": "n.",
    "en_def": "knowledge or skill you get from doing something",
    "cn_def": "經驗"
  },
  "frail": {
    "pos": "adj.",
    "en_def": "weak and thin, usually because of old age",
    "cn_def": "虛弱的；衰弱的"
  },
  "lonely": {
    "pos": "adj.",
    "en_def": "sad because you have no friends or company",
    "cn_def": "寂寞的；孤單的"
  },
  "independent": {
    "pos": "adj.",
    "en_def": "able to do things without help from others",
    "cn_def": "獨立的；自立的"
  },
  "caregiver": {
    "pos": "n.",
    "en_def": "a person who looks after someone who is old or sick",
    "cn_def": "照顧者；看護"
  },
  "nursing home": {
    "pos": "n.phr.",
    "en_def": "a place where old people live and receive care",
    "cn_def": "養老院；護理之家"
  },
  "retirement": {
    "pos": "n.",
    "en_def": "the time when you stop working because of age",
    "cn_def": "退休"
  },
  "pension": {
    "pos": "n.",
    "en_def": "money paid regularly to a person who has stopped working",
    "cn_def": "退休金；養老金"
  },
  "mobility": {
    "pos": "n.",
    "en_def": "the ability to move easily",
    "cn_def": "行動能力；活動力"
  },
  "memory": {
    "pos": "n.",
    "en_def": "the ability to remember things",
    "cn_def": "記憶力；記憶"
  },
  "arthritis": {
    "pos": "n.",
    "en_def": "a disease that makes joints painful and stiff",
    "cn_def": "關節炎"
  },
  "respect": {
    "pos": "n.",
    "en_def": "a feeling that someone deserves to be treated well",
    "cn_def": "尊重；尊敬"
  },
  "generation": {
    "pos": "n.",
    "en_def": "all the people born around the same time",
    "cn_def": "世代；一代人"
  },
  "mentor": {
    "pos": "n.",
    "en_def": "an experienced person who advises a less experienced person",
    "cn_def": "導師；良師"
  },
  "heritage": {
    "pos": "n.",
    "en_def": "traditions and history passed down from the past",
    "cn_def": "遺產；傳統文化"
  },
  "companionship": {
    "pos": "n.",
    "en_def": "friendly feelings from being with other people",
    "cn_def": "陪伴；友誼"
  },
  "dependent": {
    "pos": "adj.",
    "en_def": "needing help or support from someone else",
    "cn_def": "依賴的；依靠的"
  },
  "lifetime": {
    "pos": "n.",
    "en_def": "the length of time that someone lives",
    "cn_def": "一生；終生"
  },
  "mature": {
    "pos": "adj.",
    "en_def": "behaving in a sensible, adult way",
    "cn_def": "成熟的"
  },
  "resilient": {
    "pos": "adj.",
    "en_def": "able to recover quickly from difficult situations",
    "cn_def": "有韌性的；恢復力強的"
  },
  "veteran": {
    "pos": "n.",
    "en_def": "a person with long experience in a job or field",
    "cn_def": "老手；資深人員"
  },
  "legacy": {
    "pos": "n.",
    "en_def": "something left behind by a person after they die or leave",
    "cn_def": "遺產；留下的影響"
  },
  "dignity": {
    "pos": "n.",
    "en_def": "the quality of being respected and treated with honor",
    "cn_def": "尊嚴"
  },
  "care facility": {
    "pos": "n.phr.",
    "en_def": "a building where people who need help live and get care",
    "cn_def": "照護機構"
  },
  "life expectancy": {
    "pos": "n.phr.",
    "en_def": "the number of years a person is expected to live",
    "cn_def": "平均壽命；預期壽命"
  }
};

const EXTRA_GLOSSES = {};
