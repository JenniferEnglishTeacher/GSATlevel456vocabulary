// Topic 392 Quiz Data: Talent 天賦
// Source word list: https://www.examword.com/group-topic/talent — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T392 - Talent 天賦",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "gift",
    "pos": "n.",
    "cn_def": "天賦；才能",
    "en_def": "a natural ability to do something well",
    "sentence": "A: Why did the marketing director ask Linda to write the speech for the company's anniversary dinner next month? B: Everyone in the office knows she has a real {{BLANK}} for writing, and her short stories have already won two prizes in local competitions, so she seemed like the obvious choice for the job.",
    "cn": "A：行銷總監為什麼請琳達為公司下個月的週年晚宴撰寫致詞稿？ B：辦公室裡每個人都知道她真的很有寫作【天分】，而且她的短篇小說已經在地方比賽中得過兩個獎，所以她看起來是這份工作理所當然的人選。"
  },
  {
    "word": "ability",
    "pos": "n.",
    "cn_def": "能力",
    "en_def": "the power or skill to do something",
    "sentence": "A: What quality are you looking for most when you interview candidates for the new customer service position at our downtown branch? B: More than anything, I want someone with the {{BLANK}} to stay calm and polite when customers are angry, because that situation happens almost every day at the front desk.",
    "cn": "A：你在為我們市中心分店新的客服職位面試應徵者時，最看重什麼特質？ B：最重要的是，我想要一個在顧客生氣時有【能力】保持冷靜和禮貌的人，因為櫃台幾乎每天都會發生那種情況。"
  },
  {
    "word": "skill",
    "pos": "n.",
    "cn_def": "技能；技巧",
    "en_def": "the ability to do something well, learned through training and practice",
    "sentence": "A: Should I sign up for the weekend computer course that the human resources department is offering to all staff this spring? B: Yes, I think you should, because learning how to use spreadsheets is a useful {{BLANK}} that will help you prepare reports faster and may even lead to a promotion later this year.",
    "cn": "A：我應該報名人資部今年春天為全體員工開設的週末電腦課程嗎？ B：是的，我認為你應該報名，因為學會使用試算表是一項實用的【技能】，能幫你更快準備報告，甚至可能讓你今年稍後獲得升遷。"
  },
  {
    "word": "strength",
    "pos": "n.",
    "cn_def": "長處；優勢",
    "en_def": "a good quality or ability that makes someone effective",
    "sentence": "A: During yesterday's job interview, how did you answer when the manager asked you to describe yourself and your work style? B: I told her that my greatest {{BLANK}} is organizing schedules, because at my last job I planned all the team meetings and business trips without missing a single deadline.",
    "cn": "A：在昨天的工作面試中，當經理請你描述自己和工作風格時，你怎麼回答？ B：我告訴她我最大的【長處】是安排行程，因為在上一份工作中，我規劃了所有的團隊會議和出差，從來沒有錯過任何一個截止期限。"
  },
  {
    "word": "potential",
    "pos": "n.",
    "cn_def": "潛力",
    "en_def": "qualities that may develop and lead to future success",
    "sentence": "A: Why did you decide to hire the young designer even though she has only six months of work experience? B: Her portfolio showed a lot of {{BLANK}}, and I believe that with some training from our senior staff, she could become one of the most valuable members of our creative department within two years.",
    "cn": "A：那位年輕設計師只有六個月的工作經驗，你為什麼還決定錄用她？ B：她的作品集展現出很大的【潛力】，而且我相信只要資深員工給她一些訓練，她兩年內就能成為我們創意部門最有價值的成員之一。"
  },
  {
    "word": "genius",
    "pos": "n.",
    "cn_def": "天才",
    "en_def": "a very high level of intelligence or skill, or a person who has it",
    "sentence": "A: Have you heard who designed the new mobile app that is now helping our company save so much money on deliveries? B: Yes, it was a young engineer from the Taipei office, and everyone says she is a real {{BLANK}} because she finished the whole project in only three weeks by herself.",
    "cn": "A：你聽說是誰設計了那款新的手機應用程式嗎？它現在幫公司省下很多運送費用。 B：聽說了，是台北辦公室的一位年輕工程師，大家都說她是真正的【天才】，因為她只用三週就獨自完成了整個專案。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的",
    "en_def": "good at thinking of new and original ideas",
    "sentence": "A: The client did not like any of the advertising ideas we presented this morning, so what should we do before Friday's meeting? B: Let's invite the whole team to a brainstorming session tomorrow afternoon, because we need some fresh and {{BLANK}} ideas that will make their new product stand out from the competition.",
    "cn": "A：客戶不喜歡我們今天早上提出的任何廣告構想，那在週五開會前我們該怎麼辦？ B：我們明天下午邀請整個團隊來開腦力激盪會議吧，因為我們需要一些新鮮又【有創意的】點子，讓他們的新產品在競爭中脫穎而出。"
  },
  {
    "word": "artistic",
    "pos": "adj.",
    "cn_def": "有藝術天分的；藝術的",
    "en_def": "having or showing skill in art, music, or design",
    "sentence": "A: Who decorated the hotel lobby for the holiday season, because the guests keep taking photos of the beautiful paintings and lights? B: The front desk manager did it herself, since she is very {{BLANK}} and spent her weekends studying painting at a local school before she joined our hotel last year.",
    "cn": "A：是誰為假期佈置飯店大廳的？客人們一直在拍那些漂亮的畫作和燈飾。 B：是櫃台經理自己佈置的，因為她非常【有藝術天分】，而且在去年加入我們飯店之前，她週末都在當地一所學校學畫畫。"
  },
  {
    "word": "gifted",
    "pos": "adj.",
    "cn_def": "有天賦的；資優的",
    "en_def": "having a natural ability or great intelligence",
    "sentence": "A: Why is your nephew moving to a different school in the middle of the semester when he seemed so happy at his old one? B: His teachers noticed that he is unusually {{BLANK}} in mathematics, so they recommended a special program in the city where he can study advanced subjects with older students.",
    "cn": "A：你姪子在舊學校看起來那麼開心，為什麼要在學期中轉學？ B：他的老師發現他在數學方面特別【有天賦】，所以推薦他參加市區的一個特別課程，在那裡他可以和年紀較大的學生一起學習進階科目。"
  },
  {
    "word": "talented",
    "pos": "adj.",
    "cn_def": "有才華的",
    "en_def": "having a natural ability to do something well",
    "sentence": "A: How did the small restaurant near our office become so popular that we have to book a table two weeks in advance? B: The owner hired a young and very {{BLANK}} chef from Tainan, and her creative local dishes have been praised in several food magazines and on many travel websites.",
    "cn": "A：我們辦公室附近那家小餐廳怎麼會變得這麼受歡迎，要提前兩週才訂得到位？ B：老闆聘請了一位來自台南、年輕又非常【有才華的】主廚，她富有創意的在地料理已經獲得好幾本美食雜誌和許多旅遊網站的讚賞。"
  },
  {
    "word": "skilled",
    "pos": "adj.",
    "cn_def": "熟練的；有技術的",
    "en_def": "having the training and ability to do a job well",
    "sentence": "A: Why has the furniture factory delayed our order of office desks until the end of next month? B: The manager explained that they cannot find enough {{BLANK}} workers to operate the new machines, so they are training several new employees, but this process takes a lot of time and patience.",
    "cn": "A：家具工廠為什麼把我們訂的辦公桌延到下個月底才交貨？ B：經理解釋說他們找不到足夠【熟練的】工人來操作新機器，所以正在訓練幾位新員工，但這個過程需要很多時間和耐心。"
  },
  {
    "word": "capable",
    "pos": "adj.",
    "cn_def": "有能力的；能幹的",
    "en_def": "having the ability or power to do something",
    "sentence": "A: Are you worried about leaving the new assistant in charge of the office while you attend the conference in Tokyo next week? B: Not at all, because she has already shown that she is {{BLANK}} of handling difficult phone calls, answering emails quickly, and solving most problems without asking anyone for help.",
    "cn": "A：你下週去東京參加會議時，讓新助理負責辦公室，你擔心嗎？ B：一點也不擔心，因為她已經證明自己【有能力】處理棘手的電話、迅速回覆電子郵件，而且不用求助就能解決大部分問題。"
  },
  {
    "word": "competent",
    "pos": "adj.",
    "cn_def": "能勝任的；稱職的",
    "en_def": "having enough skill or knowledge to do something well",
    "sentence": "A: Do you think we should hire an outside company to manage our accounts, or can someone on our own team handle the work? B: I think Kevin is perfectly {{BLANK}} to do the job, because he managed the budget at his previous company for five years and never made a serious mistake.",
    "cn": "A：你認為我們應該聘請外部公司來管理帳務，還是我們自己團隊裡有人能處理這份工作？ B：我認為凱文完全【能勝任】這份工作，因為他在前一家公司管理預算五年，從來沒有犯過嚴重的錯誤。"
  },
  {
    "word": "proficient",
    "pos": "adj.",
    "cn_def": "精通的；熟練的",
    "en_def": "very good at something because of training and practice",
    "sentence": "A: What are the main requirements for the international sales position that was posted on the company website yesterday? B: Applicants must be {{BLANK}} in English and Japanese, since they will talk with clients in Osaka every week, and they also need at least two years of experience in a sales role.",
    "cn": "A：昨天公布在公司網站上的國際業務職位，主要條件是什麼？ B：應徵者必須【精通】英語和日語，因為他們每週都要和大阪的客戶交談，而且還需要至少兩年的業務工作經驗。"
  },
  {
    "word": "excel",
    "pos": "v.",
    "cn_def": "擅長；表現優異",
    "en_def": "to be extremely good at something",
    "sentence": "A: Why did the company choose Maria to lead the new training program for the customer support department this year? B: She has always been able to {{BLANK}} at explaining complicated procedures in simple language, and her trainees usually perform better than everyone else during their first month on the job.",
    "cn": "A：公司今年為什麼選瑪麗亞來帶領客服部門的新訓練計畫？ B：她一向【擅長】用簡單的語言解釋複雜的流程，而且她帶的受訓者在上班第一個月的表現通常比其他人都好。"
  },
  {
    "word": "master",
    "pos": "v.",
    "cn_def": "精通；掌握",
    "en_def": "to learn something completely so you can do it very well",
    "sentence": "A: How long did it take you to learn the new accounting software that the finance department started using in January? B: It took me almost three months to completely {{BLANK}} it, but now I can produce monthly reports in half the time, and I often help my coworkers when they have problems.",
    "cn": "A：財務部從一月開始使用的新會計軟體，你花了多久時間學會？ B：我花了將近三個月才完全【掌握】它，但現在我能用一半的時間做出月報，而且同事遇到問題時我也常常幫忙。"
  },
  {
    "word": "develop",
    "pos": "v.",
    "cn_def": "培養；發展",
    "en_def": "to grow or improve, or to make something grow or improve",
    "sentence": "A: What is the main purpose of the leadership workshop that the company is holding at the mountain resort next weekend? B: It is designed to help junior managers {{BLANK}} their communication and problem-solving abilities, so they can lead their teams more effectively when the company opens new branches next year.",
    "cn": "A：公司下週末在山區度假村舉辦的領導力工作坊，主要目的是什麼？ B：它是為了幫助基層主管【培養】溝通和解決問題的能力，這樣明年公司開設新分店時，他們就能更有效地帶領團隊。"
  },
  {
    "word": "cultivate",
    "pos": "v.",
    "cn_def": "培養；建立（關係）",
    "en_def": "to work to develop a quality, skill, or relationship",
    "sentence": "A: Why does our sales manager spend so much time having lunch and coffee with clients even when there is no business to discuss? B: She believes it is important to {{BLANK}} strong relationships with clients over many years, because people prefer to work with partners whom they know well and trust.",
    "cn": "A：我們的業務經理為什麼即使沒有生意要談，也花那麼多時間和客戶吃午餐、喝咖啡？ B：她認為多年來與客戶【建立】穩固的關係很重要，因為人們比較喜歡和熟悉且信任的夥伴合作。"
  },
  {
    "word": "nurture",
    "pos": "v.",
    "cn_def": "培育；培養",
    "en_def": "to help someone or something develop and grow",
    "sentence": "A: What makes this kindergarten different from the other schools that we visited in the neighborhood last weekend? B: The teachers there really {{BLANK}} each child's interests, so if a little girl loves music or drawing, they give her extra time, materials, and encouragement to explore that hobby every day.",
    "cn": "A：這間幼兒園和我們上週末在附近參觀的其他學校有什麼不同？ B：那裡的老師真的很用心【培養】每個孩子的興趣，所以如果有小女孩喜歡音樂或畫畫，他們每天都會給她額外的時間、材料和鼓勵去探索這個嗜好。"
  },
  {
    "word": "innate",
    "pos": "adj.",
    "cn_def": "天生的；與生俱來的",
    "en_def": "existing in a person from birth",
    "sentence": "A: How does your daughter play the piano so beautifully when she only started taking lessons six months ago? B: Her teacher says she has an {{BLANK}} sense of rhythm that cannot really be taught, but she also practices for an hour every evening after finishing her homework and eating dinner.",
    "cn": "A：你女兒六個月前才開始上課，怎麼能把鋼琴彈得這麼好？ B：她的老師說她有一種教不來的【天生】節奏感，不過她每天晚上寫完功課、吃完晚餐後也會練習一個小時。"
  },
  {
    "word": "natural",
    "pos": "adj.",
    "cn_def": "天生的",
    "en_def": "born with a particular ability or quality",
    "sentence": "A: How did the new receptionist manage to calm down that angry customer so quickly during the busy lunch hour yesterday? B: She is a {{BLANK}} communicator who always listens carefully, smiles warmly, and explains things patiently, so even very upset guests usually leave the hotel feeling satisfied with our service.",
    "cn": "A：昨天午餐尖峰時段，新來的接待員怎麼能那麼快就安撫那位生氣的顧客？ B：她是個【天生的】溝通高手，總是仔細傾聽、溫暖微笑、耐心說明，所以即使是非常不滿的客人，通常也會對我們的服務感到滿意地離開飯店。"
  },
  {
    "word": "outstanding",
    "pos": "adj.",
    "cn_def": "傑出的；出色的",
    "en_def": "extremely good; excellent",
    "sentence": "A: Why is the hotel manager receiving an award at the tourism conference in Kaohsiung next month? B: She provided {{BLANK}} service to guests during last year's busy holiday season, and dozens of travelers wrote online reviews praising how she solved their problems quickly and always greeted them with a smile.",
    "cn": "A：飯店經理為什麼會在下個月高雄的觀光會議上獲獎？ B：她在去年繁忙的假期旺季為客人提供了【出色的】服務，有幾十位旅客在網路上留下評論，稱讚她迅速解決他們的問題，而且總是面帶微笑地迎接他們。"
  },
  {
    "word": "exceptional",
    "pos": "adj.",
    "cn_def": "卓越的；非凡的",
    "en_def": "unusually good; much better than average",
    "sentence": "A: Why did the board give the new sales director such a large bonus at the end of the year? B: Under her leadership, the team achieved {{BLANK}} results, increasing overseas sales by forty percent, which was far more than anyone in the company had expected when the year began.",
    "cn": "A：董事會為什麼在年底發給新任業務總監這麼大筆的獎金？ B：在她的領導下，團隊取得了【卓越的】成果，海外銷售成長了百分之四十，遠遠超出公司裡所有人在年初時的預期。"
  },
  {
    "word": "remarkable",
    "pos": "adj.",
    "cn_def": "非凡的；驚人的",
    "en_def": "unusual or surprising in a way that deserves attention",
    "sentence": "A: Have you seen the latest sales figures for the new energy drink that we launched in convenience stores last spring? B: Yes, they are truly {{BLANK}}, because the product has already become the best seller in its category, even though our advertising budget was much smaller than our competitors' budgets.",
    "cn": "A：你看過我們去年春天在便利商店推出的新能量飲料最新的銷售數字了嗎？ B：看過了，真的很【驚人】，因為即使我們的廣告預算比競爭對手少得多，這項產品已經成為同類商品中的銷售冠軍。"
  },
  {
    "word": "brilliant",
    "pos": "adj.",
    "cn_def": "絕妙的；聰明傑出的",
    "en_def": "extremely clever or skilful",
    "sentence": "A: Who came up with the plan to offer free delivery on weekdays, because our online orders have doubled since we started it? B: It was a {{BLANK}} idea from one of the new interns, and the managers were so impressed that they invited her to present more suggestions at next month's planning meeting.",
    "cn": "A：平日免運的方案是誰想出來的？自從開始實施後，我們的網路訂單增加了一倍。 B：那是一位新實習生想出的【絕妙】點子，主管們印象非常深刻，所以邀請她在下個月的規劃會議上提出更多建議。"
  },
  {
    "word": "innovative",
    "pos": "adj.",
    "cn_def": "創新的",
    "en_def": "using new methods or ideas",
    "sentence": "A: Why are so many technology reporters coming to visit our factory in Hsinchu this Thursday? B: They want to see the {{BLANK}} production system that our engineers designed, because it uses robots and smart sensors to reduce waste, and no other company in Asia has tried this method yet.",
    "cn": "A：為什麼這週四會有這麼多科技記者來參觀我們在新竹的工廠？ B：他們想看看我們工程師設計的【創新】生產系統，因為它使用機器人和智慧感測器來減少浪費，而亞洲還沒有其他公司嘗試過這種方法。"
  },
  {
    "word": "versatile",
    "pos": "adj.",
    "cn_def": "多才多藝的；用途廣泛的",
    "en_def": "able to do many different things well",
    "sentence": "A: Why does the manager always ask Tom to help when the restaurant is short of staff on busy weekends? B: Tom is extremely {{BLANK}}, since he can cook in the kitchen, serve tables, handle the cash register, and even repair the coffee machine when it suddenly stops working.",
    "cn": "A：為什麼餐廳在忙碌的週末人手不足時，經理總是找湯姆幫忙？ B：湯姆非常【多才多藝】，他會在廚房煮菜、外場服務、操作收銀機，甚至在咖啡機突然故障時還能修理它。"
  },
  {
    "word": "ambitious",
    "pos": "adj.",
    "cn_def": "有抱負的；雄心勃勃的",
    "en_def": "having a strong wish to be successful or to achieve something difficult",
    "sentence": "A: Why is your colleague taking evening classes in business management while also working full-time at the bank? B: She is very {{BLANK}} and hopes to become a branch manager within five years, so she believes that earning a degree will give her a better chance when the next promotion opportunity comes.",
    "cn": "A：你的同事為什麼一邊在銀行全職工作，一邊上企業管理的夜間課程？ B：她非常【有抱負】，希望在五年內成為分行經理，所以她相信取得學位能讓她在下一次升遷機會來臨時更有勝算。"
  },
  {
    "word": "dedicated",
    "pos": "adj.",
    "cn_def": "盡心盡力的；專注的",
    "en_def": "working hard at something because you care about it",
    "sentence": "A: Why is the hospital holding a special farewell party for one of its nurses next Friday evening? B: She has been a {{BLANK}} member of the staff for over thirty years, often working extra hours during emergencies, and many patients still send her thank-you cards long after they leave.",
    "cn": "A：醫院為什麼下週五晚上要為一位護理師舉辦特別的歡送會？ B：她三十多年來一直是【盡心盡力的】員工，緊急情況時常常加班，而且許多病人出院很久之後仍然寄感謝卡給她。"
  },
  {
    "word": "hardworking",
    "pos": "adj.",
    "cn_def": "勤奮的",
    "en_def": "putting a lot of effort into a job or activity",
    "sentence": "A: How did the small bakery near the station manage to open a second shop in only two years? B: The owners are extremely {{BLANK}} people who get up at four every morning to bake fresh bread, and they also spend their evenings planning new products and answering customer messages online.",
    "cn": "A：車站附近那家小麵包店怎麼能在短短兩年內就開了第二家店？ B：老闆們是非常【勤奮的】人，每天早上四點起床烤新鮮麵包，晚上還會花時間規劃新產品並回覆顧客的網路訊息。"
  },
  {
    "word": "inspire",
    "pos": "v.",
    "cn_def": "激勵；啟發",
    "en_def": "to make someone want to do something or feel that they can do it",
    "sentence": "A: Why did the school invite a famous mountain climber to speak to the students at Monday's assembly? B: The principal hopes that her story about climbing the world's highest mountains will {{BLANK}} the students to set big goals and keep trying even when their studies become difficult.",
    "cn": "A：學校為什麼邀請一位知名登山家在週一的朝會上對學生演講？ B：校長希望她攀登世界最高峰的故事能【激勵】學生設定遠大的目標，即使課業變得困難也要繼續努力。"
  },
  {
    "word": "motivate",
    "pos": "v.",
    "cn_def": "激勵；促使",
    "en_def": "to make someone want to work hard or do something",
    "sentence": "A: What is the best way to encourage our sales team to work harder during the slow summer months? B: I think we should {{BLANK}} them by offering a small bonus to anyone who reaches their monthly target, and perhaps we could also give an extra day off to the top performer.",
    "cn": "A：在生意清淡的夏季月份，鼓勵我們業務團隊更努力工作的最好方法是什麼？ B：我認為我們應該發一筆小獎金給達成每月目標的人來【激勵】他們，或許也可以給表現最好的人多放一天假。"
  },
  {
    "word": "achievement",
    "pos": "n.",
    "cn_def": "成就",
    "en_def": "something good that you succeed in doing after a lot of effort",
    "sentence": "A: Why is everyone in the research department so happy and celebrating with cake this afternoon? B: They finally finished testing the new vaccine after five years of hard work, and the director called it the greatest {{BLANK}} in the company's history during the meeting earlier today.",
    "cn": "A：研究部門的大家今天下午為什麼這麼開心，還吃蛋糕慶祝？ B：經過五年的努力，他們終於完成了新疫苗的測試，主任在今天稍早的會議上稱這是公司史上最偉大的【成就】。"
  },
  {
    "word": "expertise",
    "pos": "n.",
    "cn_def": "專業知識；專長",
    "en_def": "special skill or knowledge in a particular area",
    "sentence": "A: Why did our company hire an outside consultant to help us move our customer data to the new online system? B: None of our own staff had enough {{BLANK}} in data security, and the managers did not want to risk losing important customer information during such a complicated process.",
    "cn": "A：我們公司為什麼聘請外部顧問來協助把客戶資料轉移到新的線上系統？ B：我們自己的員工沒有人在資料安全方面具備足夠的【專業知識】，而主管們不想在這麼複雜的過程中冒著遺失重要客戶資訊的風險。"
  }
];

const MCQS = [
  {
    "q": "Kevin has a rare _____ for explaining difficult ideas in simple words. His training sessions are always the most popular in the company.",
    "options": [
      "gift",
      "achievement",
      "potential",
      "strength"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The ideal candidate must have the _____ to work under pressure. Applicants should also be comfortable handling several projects at the same time.",
    "options": [
      "expertise",
      "achievement",
      "ability",
      "genius"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Public speaking is an important _____ for anyone working in sales. The company offers a free workshop every month to help staff improve.",
    "options": [
      "genius",
      "skill",
      "gift",
      "potential"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "During the interview, applicants are asked to describe their greatest _____. Most people mention teamwork, communication, or staying organized.",
    "options": [
      "genius",
      "expertise",
      "potential",
      "strength"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Our mentoring program helps new employees reach their full _____. Each participant is paired with an experienced manager for one year.",
    "options": [
      "strength",
      "skill",
      "potential",
      "achievement"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Moving the annual meeting online was a stroke of _____. It saved the company thousands of dollars in travel costs last quarter.",
    "options": [
      "genius",
      "gift",
      "skill",
      "strength"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The workshop teaches staff how to use _____ thinking to solve everyday problems. Participants practice by designing new uses for ordinary objects.",
    "options": [
      "gifted",
      "ambitious",
      "capable",
      "creative"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The magazine praised the young designer's _____ vision. Her shop windows look like works of art every season.",
    "options": [
      "hardworking",
      "artistic",
      "competent",
      "ambitious"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The school offers a special program for _____ children. Students in the program study advanced math and science with university professors.",
    "options": [
      "gifted",
      "competent",
      "proficient",
      "dedicated"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The construction company is facing a shortage of _____ workers. It plans to open a training center to teach new employees how to use heavy machinery.",
    "options": [
      "gifted",
      "artistic",
      "skilled",
      "brilliant"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The new printer is _____ of producing over one hundred pages per minute. It will help the office finish large orders much faster.",
    "options": [
      "skilled",
      "capable",
      "talented",
      "gifted"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Applicants must be _____ in at least two foreign languages. Experience in customer service is preferred but not required.",
    "options": [
      "capable",
      "innate",
      "brilliant",
      "proficient"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Students who _____ in science may apply for the summer research program. Successful applicants will work in a university laboratory for six weeks.",
    "options": [
      "inspire",
      "cultivate",
      "excel",
      "nurture"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "It can take years to fully _____ a foreign language. However, most learners can hold simple conversations after a few months of practice.",
    "options": [
      "master",
      "motivate",
      "nurture",
      "inspire"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The internship helps students _____ practical skills before they graduate. Interns also receive advice from managers about their future careers.",
    "options": [
      "excel",
      "inspire",
      "motivate",
      "develop"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Sales representatives should _____ long-term relationships with their customers. Regular visits and friendly phone calls help build trust over time.",
    "options": [
      "excel",
      "cultivate",
      "master",
      "inspire"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The company works hard to _____ young talent. Every year it offers paid internships and personal mentors to twenty university students.",
    "options": [
      "nurture",
      "excel",
      "master",
      "reveal"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Some people believe that leadership is an _____ quality. Others argue that anyone can learn to lead with proper training.",
    "options": [
      "ambitious",
      "artistic",
      "innate",
      "efficient"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The award is given each year for _____ customer service. This year's winner received more than two hundred positive reviews from guests.",
    "options": [
      "innate",
      "outstanding",
      "ambitious",
      "capable"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Only employees with _____ performance records are considered for the overseas program. Candidates must also have worked at the company for three years.",
    "options": [
      "innate",
      "ambitious",
      "artistic",
      "exceptional"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The local economy has made a _____ recovery since last year. Unemployment has fallen, and consumer spending has risen in every region.",
    "options": [
      "artistic",
      "dedicated",
      "remarkable",
      "gifted"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Offering free samples at the train station was a _____ idea. The shop gained hundreds of new customers in a single week.",
    "options": [
      "brilliant",
      "dedicated",
      "proficient",
      "hardworking"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The start-up is known for its _____ approach to online shopping. Customers can try on clothes virtually using only their phone cameras.",
    "options": [
      "hardworking",
      "competent",
      "dedicated",
      "innovative"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "This _____ jacket can be worn at the office or on weekend trips. It is also waterproof and folds easily into a small bag.",
    "options": [
      "ambitious",
      "versatile",
      "gifted",
      "dedicated"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The company has announced an _____ plan to open fifty new stores within two years. Investors are excited but worried about the costs.",
    "options": [
      "ambitious",
      "innate",
      "artistic",
      "efficient"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Helen Lin has been _____ to helping local farmers for over twenty years. Her organization teaches them how to sell their products online.",
    "options": [
      "capable",
      "proficient",
      "dedicated",
      "talented"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The speaker's story helped _____ many young people to start their own businesses. Several of them later thanked her in person.",
    "options": [
      "master",
      "inspire",
      "cultivate",
      "excel"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Managers often use bonuses to _____ employees during busy periods. Some companies also offer extra vacation days to top performers.",
    "options": [
      "master",
      "cultivate",
      "excel",
      "motivate"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Finishing the marathon gave her a great sense of _____. She had trained for eight months while also working full-time.",
    "options": [
      "potential",
      "expertise",
      "achievement",
      "genius"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The firm hired a consultant with _____ in data security. She will help protect customer information during the system upgrade.",
    "options": [
      "expertise",
      "achievement",
      "genius",
      "potential"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "gift": {
    "pos": "n.",
    "en_def": "a natural ability to do something well",
    "cn_def": "天賦；才能"
  },
  "ability": {
    "pos": "n.",
    "en_def": "the power or skill to do something",
    "cn_def": "能力"
  },
  "skill": {
    "pos": "n.",
    "en_def": "the ability to do something well, learned through training and practice",
    "cn_def": "技能；技巧"
  },
  "strength": {
    "pos": "n.",
    "en_def": "a good quality or ability that makes someone effective",
    "cn_def": "長處；優勢"
  },
  "potential": {
    "pos": "n.",
    "en_def": "qualities that may develop and lead to future success",
    "cn_def": "潛力"
  },
  "genius": {
    "pos": "n.",
    "en_def": "a very high level of intelligence or skill, or a person who has it",
    "cn_def": "天才"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "good at thinking of new and original ideas",
    "cn_def": "有創意的"
  },
  "artistic": {
    "pos": "adj.",
    "en_def": "having or showing skill in art, music, or design",
    "cn_def": "有藝術天分的；藝術的"
  },
  "gifted": {
    "pos": "adj.",
    "en_def": "having a natural ability or great intelligence",
    "cn_def": "有天賦的；資優的"
  },
  "talented": {
    "pos": "adj.",
    "en_def": "having a natural ability to do something well",
    "cn_def": "有才華的"
  },
  "skilled": {
    "pos": "adj.",
    "en_def": "having the training and ability to do a job well",
    "cn_def": "熟練的；有技術的"
  },
  "capable": {
    "pos": "adj.",
    "en_def": "having the ability or power to do something",
    "cn_def": "有能力的；能幹的"
  },
  "competent": {
    "pos": "adj.",
    "en_def": "having enough skill or knowledge to do something well",
    "cn_def": "能勝任的；稱職的"
  },
  "proficient": {
    "pos": "adj.",
    "en_def": "very good at something because of training and practice",
    "cn_def": "精通的；熟練的"
  },
  "excel": {
    "pos": "v.",
    "en_def": "to be extremely good at something",
    "cn_def": "擅長；表現優異"
  },
  "master": {
    "pos": "v.",
    "en_def": "to learn something completely so you can do it very well",
    "cn_def": "精通；掌握"
  },
  "develop": {
    "pos": "v.",
    "en_def": "to grow or improve, or to make something grow or improve",
    "cn_def": "培養；發展"
  },
  "cultivate": {
    "pos": "v.",
    "en_def": "to work to develop a quality, skill, or relationship",
    "cn_def": "培養；建立（關係）"
  },
  "nurture": {
    "pos": "v.",
    "en_def": "to help someone or something develop and grow",
    "cn_def": "培育；培養"
  },
  "innate": {
    "pos": "adj.",
    "en_def": "existing in a person from birth",
    "cn_def": "天生的；與生俱來的"
  },
  "natural": {
    "pos": "adj.",
    "en_def": "born with a particular ability or quality",
    "cn_def": "天生的"
  },
  "outstanding": {
    "pos": "adj.",
    "en_def": "extremely good; excellent",
    "cn_def": "傑出的；出色的"
  },
  "exceptional": {
    "pos": "adj.",
    "en_def": "unusually good; much better than average",
    "cn_def": "卓越的；非凡的"
  },
  "remarkable": {
    "pos": "adj.",
    "en_def": "unusual or surprising in a way that deserves attention",
    "cn_def": "非凡的；驚人的"
  },
  "brilliant": {
    "pos": "adj.",
    "en_def": "extremely clever or skilful",
    "cn_def": "絕妙的；聰明傑出的"
  },
  "innovative": {
    "pos": "adj.",
    "en_def": "using new methods or ideas",
    "cn_def": "創新的"
  },
  "versatile": {
    "pos": "adj.",
    "en_def": "able to do many different things well",
    "cn_def": "多才多藝的；用途廣泛的"
  },
  "ambitious": {
    "pos": "adj.",
    "en_def": "having a strong wish to be successful or to achieve something difficult",
    "cn_def": "有抱負的；雄心勃勃的"
  },
  "dedicated": {
    "pos": "adj.",
    "en_def": "working hard at something because you care about it",
    "cn_def": "盡心盡力的；專注的"
  },
  "hardworking": {
    "pos": "adj.",
    "en_def": "putting a lot of effort into a job or activity",
    "cn_def": "勤奮的"
  },
  "inspire": {
    "pos": "v.",
    "en_def": "to make someone want to do something or feel that they can do it",
    "cn_def": "激勵；啟發"
  },
  "motivate": {
    "pos": "v.",
    "en_def": "to make someone want to work hard or do something",
    "cn_def": "激勵；促使"
  },
  "achievement": {
    "pos": "n.",
    "en_def": "something good that you succeed in doing after a lot of effort",
    "cn_def": "成就"
  },
  "expertise": {
    "pos": "n.",
    "en_def": "special skill or knowledge in a particular area",
    "cn_def": "專業知識；專長"
  }
};

const EXTRA_GLOSSES = {};
